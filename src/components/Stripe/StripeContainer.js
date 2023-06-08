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
  };

  return (

    <div className="card lg:card-side bg-base-100 shadow-xl shadow-indigo-500/40 m-10">
  <div className="card-body ">
    <h2 className="card-title">Paiement</h2>
    <form  onSubmit={handleSubmit}>
      <CardElement/>

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

