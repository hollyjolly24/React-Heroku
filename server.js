const applyMiddleware = require("redux");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
//Static assets need served if in Heroku production.
if(process.env.NODE_ENV === "production"){
    applyMiddleware(...middleware);

  //If the node environment is in production then set static 
  app.use(express.static('client/build'));
  //^^express serves that static files that are found in 'client/build'
  const path = require('path');
  app.get('*', (req,res) => {
    // get * = get anything and then load index.html
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });

}


const port = process.env.PORT || '5000'; // process.env.port is Heroku's port 
app.listen(port, () => console.log(`Server up &&& running on port ${port} !`));
