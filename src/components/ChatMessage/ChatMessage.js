"use client";

import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import ChatTalkOption from "../ChatTalkOption/ChatTalkOption";
import ChatInputArea from "../ChatInputArea/ChatInputArea";
import ChatTiming from "../ChatTiming/ChatTiming";

export default function ChatMessage(props) {
  return (
    <>
      {props.isRobot ? (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">🤖</div>
          </div>
          <div className="chat-bubble w-[90%] break-words">{props.message}</div>
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
