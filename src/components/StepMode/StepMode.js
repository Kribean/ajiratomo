"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import StripeContainer from "@/components/Stripe/StripeContainer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function StepMode(props) {
  const [paySession, setPaySession] = useState(false);
  const [alertBool, setAlertBool] = useState(false);
  const [showPageLoading, setShowPageLoading] = useState(false);
  const [showPageLoadingError, setShowPageLoadingError] = useState(false);

  const goToFreeSession = () => {
 
    setShowPageLoading(true);

    fetch(`http://localhost:8000/api/chat`, {
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
        console.log("fukushima",data.sessionId)
        localStorage.setItem('idChatSessionAjiratomo',data.sessionId);
        props.router.push(`/chat/${data.sessionId}`);            
      })
      .catch((error) => {
        setShowPageLoadingError(true)
        console.log(error);
      });

  };

  const backToHome = ()=>{
    props.router.push(`/`); 
  }

const goToPremiumSession = ()=>{
  setShowPageLoading(true);

  fetch(`http://localhost:8000/api/chat`, {
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


  const stripePromise = loadStripe(
    "pk_test_51MwWxsBghvSGXPtDqsZ45uV4QGK1mJmvuD13nRMRvvxs2gHoh18z17cPz8E1ahJSZOtSdx7mGC21d7MmzIO3Sf1300qPQHam8Y"
  );


  return (
    <div className="container mx-auto">
      <div className={(alertBool?" block ":" hidden ") + " alert alert-error"}>
  <svg onClick={()=>{setAlertBool(false)}} xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Désolé, une erreur s'est produite lors de votre tentative d'achat. Veuillez nous contacter à caraibe.simulation@gmail.com pour résoudre ce problème.</span>
</div>
{ !showPageLoading?   (  <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          {paySession ? (
            <div className="w-90">
              <button onClick={() => {backToMode()}} className="btn btn-neutral m-5">
                Retour
              </button>
              <h1 className="text-5xl font-bold">Session premium à 2 euros</h1>
              <Elements stripe={stripePromise}>
                <StripeContainer setAlertBool={setAlertBool} alertBool={alertBool} pseudo={props.pseudo} jobApply={props.jobApply} email={props.email} setEmail={props.setEmail} />
              </Elements>
            </div>
          ) : (
            <div className="w-90">
              <h1 className="text-5xl font-bold">Premium ou Gratuit</h1>
              <p className="py-6">
                Vous y êtes presque! Prêt à vivre une expérience d'interview
                inégalée avec Ajiratomo ? Nous vous proposons deux options :
                notre offre gratuite pour une brève introduction, ou notre offre
                Premium à seulement 2 euros. Avec cette dernière, bénéficiez de
                jusqu'à 10 questions sur vos compétences techniques et humaines,
                ainsi que d'un bilan personnalisé en fin d'interview. C'est une
                occasion unique pour vous démarquer et progresser dans votre
                préparation. Alors, prêt à saisir cette opportunité
                exceptionnelle ?
              </p>
              <div className="flex flex-col lg:flex-row justify-center">
                <button onClick={()=>{ goToPremiumSession()}} className="btn btn-primary m-10">
                  Premium - environ 10 questions
                </button>
                <button
                  onClick={() => goToFreeSession()}
                  className="btn btn-outline btn-primary m-10"
                >
                  Gratuit - 1 question
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
      <button className="btn btn-active btn-secondary" onClick={()=>{backToHome()}}>Quitter</button>
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
    <p>Je suis bientôt à vous</p>
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
