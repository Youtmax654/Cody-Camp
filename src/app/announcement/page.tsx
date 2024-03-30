"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbDatabaseEdit } from "react-icons/tb";
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
    <div id="bg-annonce" className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center flex-1 pt-20">
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-solid border-black p-5 h-full">
          <h1 className="text-5xl">Actualité</h1>
          <p>
            date du jour : {currentTime.toLocaleTimeString()}{" "}
            {currentTime.toLocaleDateString()}
          </p>
        </div>
      </div>

      <div
        id="annonceNews"
        className="flex justify-around h-full pr-9 pl-9 pt-48"
      >
        <div className="flex flex-wrap flex-col">
          <div className="text-3xl text-black/60 ">
            <h1>Récent</h1>
          </div>
          <div className="lign relative w-full text-start flex flex-row w-full items-center z-10">
            <LuBookMarked size={40} />
            <div className="border-violet-700 border-l-2 pl-2">
              <h1 className="font-bold text-xl">
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
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleClick}
          className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred text-white w-48"
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
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred"
                type="submit"
              >
                Ajouter
              </button>
              <button
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred"
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
