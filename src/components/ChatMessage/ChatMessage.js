"use client";

import "@/app/globals.css";


export default function ChatMessage(props) {
  return (
    <>
      {props.isRobot ? (
        <div className="chat chat-end ">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">🤖</div>
          </div>
          <div className="chat-bubble w-[90%] break-words chat-bubble-warning">{props.message}</div>
        </div>
      ) : (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">🧒🏽</div>
          </div>
          <div className="chat-bubble w-[90%] break-words">{props.message}</div>
        </div>
      )}
    </>
  );
}
