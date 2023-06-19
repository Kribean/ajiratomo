"use client";

export default function StepAccess(props) {

  return (
    <div className="flex flex-row m-5 justify-center align-middle content-center">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className={(props.step>=0&&"step-primary") + " step"}>Votre pseudo</li>
        <li className={(props.step>=1&&"step-primary") + " step"}>Votre fiche de poste</li>
        <li className={(props.step>=2&&"step-primary") + " step"}>Mode d'interview</li>
      </ul>
    </div>
  );
}
