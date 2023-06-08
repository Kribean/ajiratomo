'use client';

import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import ChatTalkOption from "../ChatTalkOption/ChatTalkOption";
import ChatInputArea from "../ChatInputArea/ChatInputArea";
import ChatTiming from "../ChatTiming/ChatTiming";
import ChatMessage from "../ChatMessage/ChatMessage";

export default function ChatRoom() {

  const tabMessage=[{message:"comment ça va",isRobot:true},
  {message:"Mouais ça va",isRobot:false},
  {message:"Alors je vais te poser une question",isRobot:true},
  {message:"Ouaip vas y",isRobot:false},
  {message:"comment ça va",isRobot:true},
  {message:"Mouais ça va",isRobot:false},
  {message:"Alors je vais te poser une question",isRobot:true},
  {message:"Ouaip vas y",isRobot:false},
  {message:"comment ça va",isRobot:true},
  {message:"Mouais ça va",isRobot:false},
  {message:"Alors je vais te poser une question",isRobot:true},
  {message:"Ouaip vas y",isRobot:false}]
  return (
    <div className="container mx-auto">
      <ChatTiming />
      {tabMessage.map(element=><ChatMessage message={element.message} isRobot={element.isRobot} />)}
      <ChatInputArea />
    </div>
  );
}
