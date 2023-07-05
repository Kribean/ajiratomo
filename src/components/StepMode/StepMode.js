"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import StripeContainer from "@/components/Stripe/StripeContainer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function StepMode(props) {
  const [paySession, setPaySession] = useState(false);
  const [showPageLoading, setShowPageLoading] = useState(false);
  const [showPageLoadingError, setShowPageLoadingError] = useState(false);

  const goToFreeSession = () => {
 
    setShowPageLoading(true);

    fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobApply:props.jobApply,
        nickname:props.pseudo,
        email: props.email,
      }),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data)=>{
        localStorage.setItem('idChatSessionAjiratomo',data.sessionId);
        props.router.push(`/chat`);            
      })
      .catch((error) => {
        setShowPageLoadingError(true)
        console.log(error);
      });

  };


const goToPremiumSession = ()=>{
  setShowPageLoading(true);

  fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jobApply:props.jobApply,
      nickname:props.pseudo,
      email: props.email,
    }),
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data)=>{
      localStorage.setItem('idChatSessionAjiratomo',data.sessionId);
      console.log(localStorage.getItem('idChatSessionAjiratomo'),data.sessionId,"oppopop");
      setShowPageLoading(false);
      setPaySession(true);           
    })
    .catch((error) => {
      setShowPageLoadingError(true)
      console.log(error);
    });

};

const backToMode = ()=>{
  setPaySession(false);
}

const backToPrevious = () => {
  props.setStep(1);
};


  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_KEY);


  return (
    <div className="container mx-auto">

{ !showPageLoading?   (  <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          {paySession ? (
            <div className="w-90">
              <button onClick={() => {backToMode()}} className="btn btn-neutral m-5">
                Retour
              </button>
              <h1 className="text-5xl font-bold">Session premium à 4 euros</h1>
              <Elements stripe={stripePromise}>
                <StripeContainer pseudo={props.pseudo} jobApply={props.jobApply} email={props.email} setEmail={props.setEmail} />
              </Elements>
            </div>
          ) : (
            <div className="w-90">
              <h1 className="text-5xl font-bold">Premium ou Gratuit</h1>
              <p className="py-6">
                Vous y êtes presque! Prêt à vivre une expérience d'interview
                inégalée avec Ajiratomo ? Nous vous proposons deux options :
                notre offre gratuite pour une brève introduction, ou notre offre
                Premium à seulement 3,99 euros. Avec cette dernière, bénéficiez de
                jusqu'à 6 questions sur vos compétences techniques et humaines,
                ainsi que d'un bilan personnalisé en fin d'interview. C'est une
                occasion unique pour vous démarquer et progresser dans votre
                préparation. Alors, prêt à saisir cette opportunité
                exceptionnelle ?
              </p>
              <div className="flex flex-col lg:flex-row justify-center">
                <button onClick={()=>{ goToPremiumSession()}} className="btn btn-primary m-10">
                  Premium - environ 6 questions
                </button>
                <button
                  onClick={() => goToFreeSession()}
                  className="btn btn-outline btn-primary m-10"
                >
                  Gratuit - 2 questions
                </button>
              </div>
              <div className="flex flex-row justify-end m-5">
              <button onClick={backToPrevious} className="btn btn-neutral">
                  Retour
                </button>
              </div>
            </div>
          )}
        </div>
      </div>)
    :
    (<div className="hero min-h-screen bg-base-200 justify-center align-middle">
    <div className="hero-content text-center">
    {showPageLoadingError?
        <div className="flex flex-row justify-center ">
        <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
      🤖
      </div>
    </div>
    <div className="chat-bubble flex flex-row">
      <p>Je suis désolé nous sommes victime de notre succès 😫, réessayez un peu plus tard. </p>
      <Link href="https://kribean.github.io/ajiratomo/" className="btn btn-active btn-secondary" >Quitter</Link>
    </div>
  </div>
      </div>
  :
  (
    <div className="flex flex-row justify-center ">
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
    🤖
    </div>
  </div>
  <div className="chat-bubble flex flex-row">
    <p>Je suis bientôt à vous, je peux prendre un peu de temps, nous sommes parfois victime de notre succès</p>
    <span className="loading loading-dots loading-lg"></span>
  </div>
</div>
    </div>
  )  
  }
      </div></div>)
      
    }
    </div>
  );
}
