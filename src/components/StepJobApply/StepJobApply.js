"use client";

export default function StepJobApply(props) {
  const validProcess = () => {
    props.setStep(2);
  };
  const backProcess = () => {
    props.setStep(0);
  };
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fiche de poste</span>
                </label>
                <textarea
                value={props.jobApply}
                  placeholder="Entrer votre fiche de poste"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  onChange={(e)=>{props.setJobApply(e.target.value)}}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <div className="flex flex-row justify-end">
                <button className="btn m-5" onClick={() => {backProcess()}}>Retour</button>
                 
                {props.jobApply?.length>10 && <button
                      className="btn btn-success m-5"
                      onClick={() => validProcess()}
                    >
                      Valider
                    </button>}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
