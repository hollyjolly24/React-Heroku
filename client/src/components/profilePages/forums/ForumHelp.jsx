
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import forumstyles from "./forum.module.css"

function Forum({ socket, username, forum }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        forum: forum,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
    <div className={forumstyles.background}>
      <div >
        <p>Live Forum</p>
      </div>
      <div>
        <ScrollToBottom>
          {messageList.map((messageContent) => {
            return (
              <div
                className={forumstyles.contain}
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div >
                    <p>{messageContent.message}</p>
                  </div>
                  <div>
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className={forumstyles.message1}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Say Hi!."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
    </>
  );
}

export default Forum;


