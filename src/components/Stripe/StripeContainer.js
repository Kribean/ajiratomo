"use client";

import {
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default  function StripeContainer(props) {
  const stripe = useStripe();

  const [emailValid,setEmailValid]=useState(false)

  const handleChangeEmail = (e) => {
    const sanitizedEmail = e.target.value.replace(/[^a-zA-Z0-9@.-]/g, "");
    props.setEmail(sanitizedEmail);
    if(sanitizedEmail?.length>5)
    {
      setEmailValid(true);
    }
  };

  const goTopay = async ()=>{
  
    const idSession = localStorage.getItem("idChatSessionAjiratomo");
    const response = await fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat/create-checkout-session`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    idSession: idSession,
    isPremium: true,
    customer_email: props.email,
  }),
});

const responseData = await response.json();

const {sessionId} = responseData;
const {error} = await stripe.redirectToCheckout({
  sessionId
});

if(error){
  console.log(error);
}
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl shadow-indigo-500/40 m-10">
      <div className="card-body ">
        <h2 className="card-title">Paiement</h2>
        <p className="m-4">
          Offre permettant une session longue (6 questions avec
          Ajiratomo)
        </p>
        <div className="flex flex-col justify-center item-center">

            <label className="label">
            <span className="label-text">
              Veuillez rentrer votre email pour réception de votre facture
            </span>
          </label>
          <input
            type="email"
            placeholder="Entrer votre email"
            className="input input-bordered lg:w-[500px] mb-[20px]"
            value={props.email}
            onChange={handleChangeEmail}
          />
                
{emailValid&&<button onClick={()=>{goTopay()}} className="btn btn-primary m-5">
              Payer - 4 euros
            </button>}
        </div>
      </div>
    </div>
  );
}
