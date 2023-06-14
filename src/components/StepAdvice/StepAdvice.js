"use client";
import Image from "next/image";

export default function StepAdvice(props) {
  return (
<div className="hero justify-center my-5">
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">Astuce</h1>
      <p>
            Pour permettre une interaction optimale avec le simulateur, nous
            vous proposons une fonctionnalité de saisie vocale. Vous pouvez
            simplement parler pour répondre aux questions posées par Ajiratomo.
            Votre téléphone retranscrira ensuite votre réponse en texte, que
            vous pourrez vérifier et envoyer. Profitez d'une expérience fluide
            et naturelle en utilisant la reconnaissance vocale de votre
            téléphone pour maximiser votre préparation.
          </p>
          <button onClick={()=>{props.setUnderstood(true)}} className="btn btn-primary m-2">
            Compris!
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="white"><path d="m561-242-43-42 168-168H160v-60h526L517-681l43-42 241 241-240 240Z"/></svg>
            </button>
          <div className="flex flex-col lg:flex-row w-full items-center justify-center">
            <Image
              src="/keyboard.png"
              width={400}
              height={400}
              alt="astuce reconnaissance vocal"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              viewBox="0 -960 960 960"
              width="100"
              fill="white"
            >
              <path d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.788-28.5Q497.425-820 480-820q-17.425 0-29.212 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z" />
            </svg>
			</div>
    </div>
  </div>
</div>
  );
}
