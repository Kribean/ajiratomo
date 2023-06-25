"use client";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

export default function StripeContainer(props) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleChangeEmail = (e) => {
    const sanitizedEmail = e.target.value.replace(/[^a-zA-Z0-9@.-]/g, "");
    props.setEmail(sanitizedEmail);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Token Généré", paymentMethod);
      const { id } = paymentMethod;

      const idSession = localStorage.getItem("idChatSessionAjiratomo");

      fetch(`http://localhost:8000/api/chat`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idSession: idSession,
          email: props.email,
          id: id,
          isPremium:true
        }),
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          router.push(`/chat/${idSession}`);
        })
        .catch((error) => props.setAlertBool(true));
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl shadow-indigo-500/40 m-10">
      <div className="card-body ">
        <h2 className="card-title">Paiement</h2>
        <p className="m-4">
          Offre permettant une session longue (maximum 10 questions avec
          Ajiratomo ou/et maximum 10 minutes de conversation)
        </p>
        <div className="flex flex-col justify-start">
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
        <form onSubmit={handleSubmit}>
          {props.alertBool && (
            <p className="text-error my-5">
              Désolé, une erreur s'est produite lors de votre tentative d'achat.
              Veuillez nous contacter à caraibe.simulation@gmail.com pour
              résoudre ce problème.
            </p>
          )}
          <div className="flex flex-col justify-start">
            <h2 className="text-xl font-medium">Renseignement bancaire</h2>
          </div>
          <CardElement options={{ hidePostalCode: true }} />

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary m-5"
              type="submit"
              disabled={!stripe || !elements}
            >
              Payer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
