"use client";
import { useEffect, useState } from "react";
import { LuBookMarked } from "react-icons/lu";

function Announcement() {
  // state (état, données)
  const [currentTime, setCurrentTime] = useState(new Date());

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const timerID = setInterval(() => date(), 1000);

    // comportements
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    // Verrouiller le défilement du corps lorsque la popup est ouverte
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Nettoyer le style lors du démontage du composant
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  function date() {
    setCurrentTime(new Date());
  }

  //affichage
  return (
    <div id="bg-annonce" className="flex size-full flex-col">
      <div className="flex flex-1 flex-col items-center pt-20">
        <div className="flex h-full flex-col items-center justify-center rounded-md border-2 border-solid border-black p-5">
          <h1 className="text-5xl">Actualité</h1>
          <p>
            date du jour : {currentTime.toLocaleTimeString()}{" "}
            {currentTime.toLocaleDateString()}
          </p>
        </div>
      </div>

      <div id="annonceNews" className="flex h-full justify-around px-9 pt-48">
        <div className="flex flex-col flex-wrap">
          <div className="text-3xl text-black/60 ">
            <h1>Récent</h1>
          </div>
          <div className="lign relative z-10 flex w-full flex-row items-center text-start">
            <LuBookMarked size={40} />
            <div className="border-l-2 border-violet-700 pl-2">
              <h1 className="text-xl font-bold">
                CP_BACH_DEV WEB SÉCURITÉ 1A TP 23-24 - Base de données - PHP -
                Cours
              </h1>
              <p>
                Nouveau cours disponible : CP_BACH_DEV WEB SÉCURITÉ 1A TP 23-24
                - Base de données - PHP - Cours
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <button
          onClick={handleClick}
          className="text-white-100 w-48 rounded-md border border-solid border-black bg-indianred p-1.5 text-white shadow-md outline-none hover:bg-indianred dark:bg-redwine"
        >
          Ajouter Annonce
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Ajouter une annonce</h2>
            <form>
              <label>Nom de l&lsquo;annnonce:</label>
              <input
                type="text"
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label>De la part de:</label>
              <input
                type="text"
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label>Déscription:</label>
              <input
                type="textarea"
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label>Date de début:</label>
              <input
                type="datetime-local"
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:outline-indianred"
              />
              <label>Date de fin:</label>
              <input
                type="datetime-local"
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:outline-indianred"
              />
              <button
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred dark:bg-redwine"
                type="submit"
              >
                Ajouter
              </button>
              <button
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred dark:bg-redwine"
                onClick={() => setIsPopupOpen(false)}
              >
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcement;
