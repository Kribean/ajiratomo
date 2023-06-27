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
  const [isSentParameters,setIsSentParameters] = useState(false);
  const [secretNumber,setSecretNumber] = useState("");
  const [email,setEmail] = useState("");
  const [emailValid,setEmailValid]=useState(false)

  const handleChangeEmail = (e) => {
    const sanitizedEmail = e.target.value.replace(/[^a-zA-Z0-9@.-]/g, "");
   setEmail(sanitizedEmail);
  };

  const handleChangeSecretNumber = (e)=>{
    const inputValue = e.target.value;
      if (/^\d*$/.test(inputValue)) {
        setSecretNumber(inputValue);
      }
    
  };

 const goToSession = () => {

    fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat/premium`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_email: email.replace(/\s/g, "").toLowerCase(),
        secretNumber:secretNumber
      }),
    })
      .then((data) => {
        if (data.ok) {
          setIsSentParameters(true);
          return data.json();
        }
        throw new Error(" A mistake has been done");
      })
      .then((data) => {
        if (data.error) {
          setMessageLogin(true)
          return setIsValid(false);
        }
        setMessageLogin(false)
        setChatQuestions(data.chatQuestions);
        setChatInterview(data.chatInterview);
        setNbOfQuestionsMax(data.chatQuestions?.length);
        setIsPremium(data.isPremium);

      })
      .catch((error) => {
        setMessageLogin(true)
        console.log(error);
      });
  }

  return (
<>
{
   !isSentParameters   ?
      <>
          <div className="card lg:card-side bg-base-100 shadow-xl shadow-indigo-500/40">
      <div className="card-body ">
        <h2 className="card-title">Authentification</h2>
        <div className="flex flex-col justify-center item-center">

<div className="m-5">
<label className="label">
            <span className="label-text">
              Veuillez rentrer de nouveau votre email
            </span>
            
          </label>
          <input
            type="email"
            placeholder="Entrer votre email"
            className="input input-bordered lg:w-[500px] mb-[20px]"
            value={email}
            onChange={handleChangeEmail}
          />
</div>

<div className="w-full m-5">
<label className="label">
            <span className="label-text">
              Veuillez rentrer votre nombre secret
            </span>

          </label>
          <input
             type="number" min="100" max="9999"
            placeholder="Entrer votre numero secret à 3 chiffres"
            className="input input-bordered md:w-[500px] mb-[20px]"
            value={props.secretNumber}
            onChange={handleChangeSecretNumber}
          />
</div>
                
<button onClick={()=>{goToSession()}} className="btn btn-primary m-5">
              Valider
            </button>
        </div>
      </div>
    </div>
      </>
      :
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
                <Link href={"https://kribean.github.io/ajiratomo/"} className="btn btn-primary">
                  Accueil
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
}
</>
  );
}
