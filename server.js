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
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
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
  //If the node environment is in production then set static 
  app.use(express.static('client/src'));
  //^^express serves that static files that are found in 'client/build'
  const path = require('path');
  app.get('*'), (req,res) => {
    // get * = get anything and then load index.html
    res.sendFile(path.resolve(__dirname, 'client','src','index.js'));
  }

}
const port = process.env.PORT || 5000; // process.env.port is Heroku's port 
app.listen(port, () => console.log(`Server up &&& running on port ${port} !`));
