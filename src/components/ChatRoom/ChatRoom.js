"use client";

import "@/app/globals.css";
import ChatInputArea from "../ChatInputArea/ChatInputArea";
import ChatTiming from "../ChatTiming/ChatTiming";
import ChatContainer from "../ChatContainer/ChatContainer";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChatRoom(props) {
  const [goToSocial, setGoToSocial] = useState(false);

  return (
    <div className="flex flex-col">
      {props.chatQuestions?.length > 0 ? (
        <>
          <ChatTiming
            isPremium={props.isPremium}
            nbOfQuestionsMax={props.nbOfQuestionsMax}
            nbOfQuestions={
              props.chatQuestions
                ? props.nbOfQuestionsMax - props.chatQuestions.length
                : props.nbOfQuestionsMax
            }
          />
          <ChatContainer
            isPremium={props.isPremium}
            theQuestion={props.chatQuestions[0]?.question}
            setChatQuestions={props.setChatQuestions}
            chatInterview={props.chatInterview}
            setChatInterview={props.setChatInterview}
          />
          <ChatInputArea
            chatQuestions={props.chatQuestions}
            setChatQuestions={props.setChatQuestions}
            chatInterview={props.chatInterview}
            setChatInterview={props.setChatInterview}
          />
        </>
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            {!goToSocial ? (
              <div className="max-w-xxl">
                {props.nbOfQuestionsMax<4 &&<h1 className="text-5xl font-bold">
                  "Êtes-vous prêt à passer à la vitesse supérieure ?"
                </h1>}
                <div className="chat chat-start ">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">🤖</div>
                  </div>
{                  props.nbOfQuestionsMax<4 ? <div className="chat-bubble">
                    <p>
                      "Vous avez déjà utilisé vos deux messages gratuits. Avec
                      notre offre premium, vous pourrez continuer à discuter
                      sans aucune restriction. Ne manquez pas l'occasion de
                      profiter d'une expérience de chat illimitée !
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center">
                      <Link
                        href="/gotopremium"
                        className="btn btn-success m-5"
                      >
                        Continuer en mode premium
                      </Link>
                      <button
                        className="btn btn-warning m-5"
                        onClick={() => {
                          setGoToSocial(true);
                        }}
                      >
                        Je partage sur mes réseaux 😀{" "}
                      </button>
                    </div>
                  </div>:
                  <>
                    <div className="flex justify-center item-center">
                <SocialNetwork isPremium={props.isPremium?props.isPremium:false} setGoToSocial={setGoToSocial} />
              </div>
                  </>
                  }
                </div>
              </div>
            ) : (
              <div className="max-w-xxl">
                <SocialNetwork isPremium={props.isPremium?props.isPremium:false} setGoToSocial={setGoToSocial} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
