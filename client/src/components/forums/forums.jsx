import io from "socket.io-client";
import { useState } from "react";
import Chat from "./ForumHelp";
import ProfileNavbar from "../profileNavbar/profileNavbar";
import Footer from "../footer/footer";



const socket = io.connect("http://localhost:5000");
function ChatApp() {
  const [username, setUsername] = useState("");
  const [forum, setForum] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinForum = () => {
    if (username !== "" && forum !== "") {
      socket.emit("join_forum", forum);
      setShowChat(true);
    }
  };

  return (
    <>
    <ProfileNavbar/>
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Forum Name..."
            onChange={(event) => {
              setForum(event.target.value);
            }}
          />
          <button onClick={joinForum}>Join A Forum</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} forum={forum} />
      )}
    </div>
    <Footer/>
    </>
  );
}

export default ChatApp;