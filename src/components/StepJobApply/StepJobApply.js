"use client";

import { useEffect, useState } from "react";

export default function StepJobApply(props) {
  const validProcess = () => {

    props.setStep(2);
  };
  const backProcess = () => {
    props.setStep(0);
  };

  const handleChangeLevel = (level) =>{
    props.setLevelOfPractise(level);
    handleChangeTextJob("Le titre de l'offre: "+props.jobTitle +" ." + level +" .Les responsabilités à avoir:" + props.responsabilities +" .Les compétences à avoir:  " + props.skills)
  };

  const handleChangeJobTitle = (e)=>{
    const text = e.target.value;
    props.setJobTitle(text);
    handleChangeTextJob("Le titre de l'offre: "+text +" ." + props.levelOfPractise +" .Les responsabilités à avoir:" + props.responsabilities +" .Les compétences à avoir:  " + props.skills)
  };

  const handleChangeResponsabilities = (e)=>{
    const text = e.target.value;
    props.setResponsabilities(text);
    handleChangeTextJob("Le titre de l'offre: "+props.jobTitle +" ." + props.levelOfPractise +" .Les responsabilités à avoir:" + text +" .Les compétences à avoir:  " + props.skills)
  };

  const handleChangeSkills = (e)=>{
    const text = e.target.value;
    props.setSkills(text);
    handleChangeTextJob("Le titre de l'offre: "+props.jobTitle +" ." + props.levelOfPractise +" .Les responsabilités à avoir:" + props.responsabilities +" .Les compétences à avoir:  " + text)
  };

  const [goToNextPage, setGoToNextPage] = useState(0);
  const [nbrOfWord, setNbrOfWord] = useState(0);

  const handleChangeTextJob = (element) => {
    props.setJobApply(element);
    setNbrOfWord(Math.max(element?.split(" ").length, element?.split("\t").length));
    if (
      element.trim().length > 50 &&
      Math.max(element?.split(" ").length, element?.split("\t").length) <= 105
    ) {
      setGoToNextPage(1);
    } else if (element.trim().length <= 50) {
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
        ) <= 105
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
            </div>
          </div>

          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
            <progress className={(nbrOfWord<106?" progress-accent ":" progress-error ") + "progress   w-56"} value={nbrOfWord} max="200"></progress>
              <div className="form-control">
                <p className={nbrOfWord > 105 ? "text-error" : "text-dark"}>
                  {" "}
                  {nbrOfWord}/105
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Titre du poste</span>
                </label>
                <input type="text" placeholder="Taper le titre du poste" className="input input-bordered input-accent w-full max-w-xs" value={props.jobTitle} onChange={handleChangeJobTitle} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Niveau de qualification</span>
                </label>
                <div className="flex flex-col lg:flex-row items-center space-x-4">
                  <div className="flex flex-row">
  <label className="inline-flex items-center m-5">
    <input type="radio" name="radio-7" className="radio radio-info" onChange={()=>handleChangeLevel(" le poste est pour un niveau junior ")} />
    <span className="ml-2 text-sm font-medium text-gray-700">Junior</span>
  </label>
  <label className="inline-flex items-center  m-5">
    <input type="radio" name="radio-7" className="radio radio-info" onChange={()=>handleChangeLevel(" le poste est pour un niveau intermédiaire ")} />
    <span className="ml-2 text-sm font-medium text-gray-700">Intermédiaire</span>
  </label>
  </div>
  <div className="flex flex-row">
  <label className="inline-flex items-center  m-5">
    <input type="radio" name="radio-7" className="radio radio-info" onChange={()=>handleChangeLevel(" le poste est pour un niveau confirmé ")} />
    <span className="ml-2 text-sm font-medium text-gray-700">Confirmé</span>
  </label>
  <label className="inline-flex items-center  m-5">
    <input type="radio" name="radio-7" className="radio radio-info" onChange={()=>handleChangeLevel(" le poste est pour un niveau expert ")} />
    <span className="ml-2 text-sm font-medium text-gray-700">Expert</span>
  </label>
  </div>
</div>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Responsabilités principales</span>
                </label>
                <input type="text" placeholder="Taper les responsabilités" className="input input-bordered input-accent w-full max-w-xs" value={props.responsabilities} onChange={handleChangeResponsabilities} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Compétences requises</span>
                </label>
                <input type="text" placeholder="Taper les compétences et outils requis" className="input input-bordered input-accent w-full max-w-xs" value={props.skills} onChange={handleChangeSkills}/>
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
                      optimal, le texte ne dois pas dépasser 105 mots
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
