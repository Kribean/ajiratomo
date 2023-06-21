"use client";

import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import ChatTalkOption from "../ChatTalkOption/ChatTalkOption";
import ChatInputArea from "../ChatInputArea/ChatInputArea";
import ChatTiming from "../ChatTiming/ChatTiming";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatContainer from "../ChatContainer/ChatContainer";
import { useEffect } from "react";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

export default function ChatRoom(props) {


  return (
    <div className="flex flex-col">
{props.setChatQuestions.length<0?      
<>
<ChatTiming />
      <ChatContainer
        theQuestion={props.chatQuestions[0].question}
        setChatQuestions={props.setChatQuestions}
        chatInterview={props.chatInterview}
        setChatInterview={props.setChatInterview}
      />
      <ChatInputArea 
      chatQuestions={props.chatQuestions}
      setChatQuestions={props.setChatQuestions}
      chatInterview={props.chatInterview}
      setChatInterview={props.setChatInterview} />
</>
    :
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-xxl">
        <h1 className="text-5xl font-bold">Êtes-vous prêt à passer à la vitesse supérieure ?</h1>
        <div className="chat chat-start ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
    🤖
    </div>
  </div>
  <div className="chat-bubble">
    <p>"Vous avez déjà utilisé vos deux messages gratuits. Avec notre offre premium, vous pourrez continuer à discuter sans aucune restriction. Ne manquez pas l'occasion de profiter d'une expérience de chat illimitée !</p>
  <div className="flex flex-col lg:flex-row justify-center">
  <button className="btn btn-success m-5">Continuer en mode premium</button>
<button className="btn btn-warning m-5">Je partage sur mes réseaux 😀 </button>
  </div>
  </div>
</div>
<SocialNetwork/>
      </div>
    </div>

  </div> 
    }
    </div>
  );
}
