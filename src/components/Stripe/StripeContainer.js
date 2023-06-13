"use client";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Image from 'next/image';

export default function StripeContainer() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(!error){
      console.log("Token Généré",paymentMethod);
      const {id}=paymentMethod;
      fetch(`http://localhost:8000/api/stripe`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: 1000,
          id:id
        }),
      })
      .then((data)=>console.log("success ouéééé"))
      .catch((error)=>console.log('pfff mouais a demain'))
    }
  };

  return (

    <div className="card lg:card-side bg-base-100 shadow-xl shadow-indigo-500/40 m-10">
  <div className="card-body ">
  <h1 className="mb-5 text-5xl font-bold">Pass Premium</h1>
    <h2 className="card-title">Paiement</h2>
    <p className='m-4'> Offre permettant une session longue (maximum 10 questions avec Ajiratomo ou/et maximum 10 minutes de conversation)</p>
    <form  onSubmit={handleSubmit}>
      <CardElement
      options={{hidePostalCode:true}}/>

      <div className="card-actions justify-end">
      <button className="btn btn-primary" type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </div>
    </form>
  </div>
</div>

  );
};

