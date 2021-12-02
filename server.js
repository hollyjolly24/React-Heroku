const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const server = http.createServer(app);

//setupport for Heroku or local 

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.use(cors());
  
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });



// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
//Static assets need served if in Heroku production.
if(process.env.NODE_ENV === "production"){

  //If the node environment is in production then set static 
  app.use(express.static('client/build'));
  //^^express serves that static files that are found in 'client/build'
  const path = require('path');
  app.get('*', (req,res) => {
    // get * = get anything and then load index.html
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });

}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port 

app.listen(port, () => console.log(`Server up &&& running on port ${port} !`));
