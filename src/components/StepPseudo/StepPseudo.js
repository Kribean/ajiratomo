"use client";
export default function StepPseudo(props) {
  const lengthPseudo = 30;
  const validProcess = () => {
    props.setStep(1);
  };

  const handleChangePseudo= (e) => {
    const { value } = e.target;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (regex.test(value)||value.length==0) {
      props.setPseudo(value);
    }
  }

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Comment puis-je vous appeler?
            </h1>
            <p className="py-6">
              Laisse-moi connaître ton pseudo et nous nous lancerons dans cette
              aventure ensemble ! 😊🎙️
            </p>
            <p className="text-error">Les caractères spéciaux ne sont pas authorisés</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pseudo</span>
                </label>
                <input
                  type="text"
                  placeholder="Entrer votre pseudo"
                  className="input input-bordered"
                  value={props.pseudo}
                  onChange={handleChangePseudo}
                  maxLength={lengthPseudo}
                  pattern="^[a-zA-Z0-9\s]+$"
                />
              </div>

              <div className="form-control mt-6">
                <div className="flex flex-row justify-end">
                  {props.pseudo?.length > 0 && (
                    <button
                      className="btn btn-success m-5"
                      onClick={() => validProcess()}
                    >
                      Valider
                    </button>
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
