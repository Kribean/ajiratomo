"use client";

import {
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default  function StripeContainer(props) {
  const stripe = useStripe();

  const [emailValid,setEmailValid]=useState(false);
  const [secretNumber,setSecretNumber] = useState("");
  const [changeNumber,setChangeNumber]=useState(false)
  

  const handleChangeEmail = (e) => {
    const sanitizedEmail = e.target.value.replace(/[^a-zA-Z0-9@.-]/g, "");
    props.setEmail(sanitizedEmail);
    if(sanitizedEmail?.length>5 &&secretNumber<=9999 && secretNumber>=100)
    {
      setEmailValid(true);
    }else{
      setEmailValid(false);
    }
  };

  const handleChangeSecretNumber = (e)=>{
    const inputValue = e.target.value;
      if (/^\d*$/.test(inputValue)) {
        setSecretNumber(inputValue);

        if(props.email?.length>5 &&inputValue<=9999 && inputValue>=100)
        {
          setEmailValid(true);
        }else{
          setEmailValid(false);
        }
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
    customer_email: props.email.replace(/\s/g, "").toLowerCase(),
    secretNumber:secretNumber
  }),
});

if (response.ok) {
setChangeNumber(false)
}else{
  setChangeNumber(true)
}
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

<div className="m-5">
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
</div>

<div className="w-full m-5">
<label className="label">
            <span className="label-text">
              Veuillez rentrer un nombre secret entre 100 et 9999
            </span>

          </label>
          {changeNumber&&  <span className="label-text text-error">
              Ce nombre est déjà pris, veuillez choisir un nouveau numéro
            </span>}
          <input
             type="number" min="100" max="9999"
            placeholder="Entrer votre numero secret à 3 chiffres"
            className="input input-bordered md:w-[500px] mb-[20px]"
            value={secretNumber}
            onChange={handleChangeSecretNumber}
          />
</div>
                
{emailValid&&<button onClick={()=>{goTopay()}} className="btn btn-primary m-5">
              Payer - 4 euros
            </button>}
        </div>
      </div>
    </div>
  );
}
