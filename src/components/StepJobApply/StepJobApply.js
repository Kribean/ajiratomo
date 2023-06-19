"use client";

import { useEffect, useState } from "react";

export default function StepJobApply(props) {
  const validProcess = () => {
    props.setStep(2);
  };
  const backProcess = () => {
    props.setStep(0);
  };

  const [goToNextPage, setGoToNextPage] = useState(0);
  const [nbrOfWord, setNbrOfWord] = useState(0);

  const handleChangeTextJob = (e) => {
    const text = e.target.value;
    props.setJobApply(e.target.value);

    setNbrOfWord(Math.max(text.split(" ").length, text.split("\t").length));
    if (
      text.trim().length > 50 &&
      Math.max(text.split(" ").length, text.split("\t").length) <= 300
    ) {
      setGoToNextPage(1);
    } else if (text.trim().length <= 50) {
      setGoToNextPage(2);
    } else {
      setGoToNextPage(3);
    }
  };

  useEffect(() => {
    if (props.jobApply) {
      setNbrOfWord(
        Math.max(
          props.jobApply?.split(" ").length,
          props.jobApply?.split("\t").length
        )
      );

      if (
        props.jobApply?.trim().length > 50 &&
        Math.max(
          props.jobApply?.split(" ").length,
          props.jobApply?.split("\t").length
        ) <= 300
      ) {
        setGoToNextPage(1);
      } else if (props.jobApply.trim().length <= 50) {
        setGoToNextPage(2);
      } else {
        setGoToNextPage(3);
      }
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Il me faut des détails sur le job auquel vous postulez
            </h1>
            <p className="py-6">
              Cher(e) utilisateur/trice, c'est maintenant le moment de partager
              avec moi votre fiche de poste. Vous avez deux options à votre
              disposition : si vous disposez déjà d'une fiche, vous pouvez
              simplement la copier-coller ici. Sinon, si vous visez un poste
              spécifique, veuillez me fournir les caractéristiques détaillées de
              ce job. Préparez-vous à l'action, car ensemble, nous examinerons
              chaque détail afin de vous préparer de façon optimale ! 💼🔍
            </p>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium">
                Caractéristique d'une bonne fiche de poste
              </div>
              <div className="collapse-content mx-5">
                <ul className="list-disc">
                  <li>
                    Titre du poste : Un titre clair et précis qui reflète le
                    rôle et les responsabilités du poste.
                  </li>
                  <li>
                    Résumé du poste : Un bref aperçu des principales
                    responsabilités et objectifs du poste.
                  </li>
                  <li>
                    Description des tâches : Une liste détaillée des tâches et
                    des responsabilités spécifiques liées au poste.
                  </li>
                  <li>
                    Compétences requises : Une description des compétences, des
                    connaissances et des qualifications nécessaires pour réussir
                    dans le poste.
                  </li>
                  <li>
                    Formation et expérience : Les niveaux d'éducation, de
                    formation et d'expérience professionnelle requis ou préférés
                    pour le poste.
                  </li>
                  <li>
                    Compétences techniques : Les compétences techniques
                    spécifiques nécessaires pour accomplir les tâches du poste
                    (par exemple, programmation, gestion de projet, marketing
                    numérique, etc.).
                  </li>
                  <li>
                    Compétences comportementales : Les compétences
                    interpersonnelles et comportementales souhaitées, telles que
                    la capacité à travailler en équipe, la résolution de
                    problèmes, la gestion du temps, etc.
                  </li>
                  <li>
                    Conditions de travail : Les informations sur le lieu de
                    travail, les horaires, les déplacements éventuels, les
                    avantages et autres conditions spécifiques du poste.
                  </li>
                  <li>
                    Objectifs et attentes : Les objectifs à atteindre dans le
                    poste, les attentes en termes de performance et les mesures
                    de réussite.
                  </li>
                  <li>
                    Relations de travail : Les interactions et les relations
                    avec d'autres membres de l'équipe, les superviseurs et les
                    parties prenantes.
                  </li>
                  <li>
                    Perspectives de carrière : Les opportunités de croissance,
                    d'évolution et de développement professionnel liées au
                    poste.
                  </li>
                  <li>
                    Culture d'entreprise : Une description de la culture
                    d'entreprise, des valeurs et de l'environnement de travail
                    dans lequel le poste s'inscrit.
                  </li>
                  <li>
                    Modalités de candidature : Les instructions et les détails
                    sur la manière de postuler, les documents requis et les
                    dates limites éventuelles.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <p className={nbrOfWord > 300 ? "text-error" : "text-dark"}>
                  {" "}
                  {nbrOfWord}/300
                </p>
                <label className="label">
                  <span className="label-text">Fiche de poste</span>
                </label>
                <textarea
                  value={props.jobApply}
                  placeholder="Entrer votre fiche de poste"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xl"
                  onChange={handleChangeTextJob}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <div className="flex flex-row justify-end">
                  <button
                    className="btn m-5"
                    onClick={() => {
                      backProcess();
                    }}
                  >
                    Retour
                  </button>

                  {goToNextPage === 1 && (
                    <button
                      className="btn btn-success m-5"
                      onClick={() => validProcess()}
                    >
                      Valider
                    </button>
                  )}
                  {goToNextPage === 2 && (
                    <p>
                      Il n' y a pas assez de mots, détaillez un peu plus. Type
                      d'emploi, compétences recherchées ...
                    </p>
                  )}
                  {goToNextPage === 3 && (
                    <p className="text-error">
                      Oops! Il y a trop de mots, pour permettre un traitement
                      optimal, le texte ne dois pas dépasser 300 mots
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
