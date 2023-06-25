"use client";

import "@/app/globals.css";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useEffect, useRef } from "react";

export default function ChatContainer(props) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.scrollTo({
      top: scrollContainer?.scrollHeight - scrollContainer?.clientHeight,
      behavior: "smooth",
    });
  }, [props.chatInterview]);

  return (
    <div
      className="flex flex-col mx-[40px] h-[400px] overflow-y-scroll "
      ref={scrollContainerRef}
    >
      {props.chatInterview?.map((element, id) => (
        <ChatMessage
          message={element.message}
          isRobot={element.isRobot}
          key={id + "bhkb"}
        />
      ))}
      <ChatMessage message={props.theQuestion} isRobot={true} />
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">🧒🏽</div>
        </div>
        <div className="chat-bubble w-[90%] break-words">
          <span className="loading loading-dots loading-md"></span>
        </div>
      </div>
    </div>
  );
}
