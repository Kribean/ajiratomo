'use client';

import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import ChatTalkOption from "../ChatTalkOption/ChatTalkOption";
import ChatInputArea from "../ChatInputArea/ChatInputArea";
import ChatTiming from "../ChatTiming/ChatTiming";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useEffect, useRef } from "react";

export default function ChatContainer(props) {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer?.scrollTo({
        top: scrollContainer?.scrollHeight - scrollContainer?.clientHeight,
        behavior: 'smooth',
      });
    }, [props.tabMessage]);

  return (
    <div className="flex flex-col mx-[40px] h-[400px] overflow-y-scroll " ref={scrollContainerRef}>
      {props.tabMessage.map((element,id)=><ChatMessage message={element.message} isRobot={element.isRobot} key={id} />)}
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
