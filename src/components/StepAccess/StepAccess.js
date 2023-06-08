"use client";

export default function StepAccess() {
  return (
    <div className="container mx-auto">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Votre pseudo</li>
        <li className="step step-primary">Votre fiche de poste</li>
        <li className="step">Mode d'interview</li>
        <li className="step">Fin</li>
      </ul>
    </div>
  );
}
