"use client";
import ChatRoom from "@/components/ChatRoom/ChatRoom";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import StepAdvice from "@/components/StepAdvice/StepAdvice";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ChatFree(props) {
  const [understood, setUnderstood] = useState(false);

  const [chatQuestions, setChatQuestions] = useState([]);
  const [chatInterview, setChatInterview] = useState([]);
  const [nbOfQuestionsMax, setNbOfQuestionsMax] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const idSession = localStorage.getItem("idChatSessionAjiratomo");
    fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat/${idSession}/freemium`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error(" A mistake has been done");
      })
      .then((data) => {
        if (data.error) {
          return setIsValid(false);
        }
        setChatQuestions(data.chatQuestions);
        setChatInterview(data.chatInterview);
        setNbOfQuestionsMax(data.chatQuestions?.length);
        setIsPremium(data.isPremium);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {(isValid ) ? (
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          <main className="container ">
            {!understood ? (
              <StepAdvice
                understood={understood}
                setUnderstood={setUnderstood}
              />
            ) : (
              <ChatRoom
                chatQuestions={chatQuestions}
                setChatQuestions={setChatQuestions}
                chatInterview={chatInterview}
                setChatInterview={setChatInterview}
                nbOfQuestionsMax={nbOfQuestionsMax}
                setNbOfQuestionsMax={setNbOfQuestionsMax}
                isPremium={isPremium}
              />
            )}
          </main>
          <Footer />
        </div>
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Oops</h1>
              <p className="py-6">
                Cette session est fini, retournez sur la page d'accueil et
                lancez un nouveau entretien.
              </p>
              <Link href={"./"} className="btn btn-primary">
                Accueil
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
