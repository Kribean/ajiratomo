"use client";
import {  useState } from "react";
import StripeContainer from "@/components/Stripe/StripeContainer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function GoToPremium(props) {

  const [email, setEmail] = useState("");

  const backToHome = ()=>{
    props.router.push(`/`); 
  }


const backToMode = ()=>{
  
}



  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_KEY);


  return (
    <div className="container mx-auto">

  <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">

            <div className="w-90">
              <button onClick={() => {backToMode()}} className="btn btn-neutral m-5">
                Retour
              </button>
              <h1 className="text-5xl font-bold">Session premium à 3,99 euros</h1>
              <Elements stripe={stripePromise}>
                <StripeContainer email={email} setEmail={setEmail} />
              </Elements>
            </div>
        </div>
      </div>

    </div>
  );
}
