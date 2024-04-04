"use client";

<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
=======
import { toast } from "react-toastify";
import { useState } from "react";
>>>>>>> Stashed changes
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
<<<<<<< Updated upstream
=======
import interactionPlugin from "@fullcalendar/interaction";

export type NewEvent = {
  teacher: string;
  startTime: string;
  endTime: string;
  course: string;
  room: string;
  classname: string;
};
>>>>>>> Stashed changes

function Planning() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [events, setEvents] = useState<NewEvent[]>([]);

  const [formData, setFormData] = useState<NewEvent>({
    teacher: "",
    startTime: "",
    endTime: "",
    course: "",
    room: "",
    classname: "",
  });
  const handleClick = () => {
    setIsPopupOpen(true);
  };

<<<<<<< Updated upstream
  useEffect(() => {
    // Verrouiller le défilement du corps lorsque la popup est ouverte
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
=======

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) {
      try {
        const res = await fetch("/api/planning/formPlanning", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 201) {
          const data = await res.json();
          toast.success("Envoi réussi", {
            autoClose: 3000,
          });
          setEvents([...events, formData]);
          setIsPopupOpen(false);
        } else {
          const data = await res.json();
          toast.error(data.message || "Une erreur s'est produite", {
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi des données:", error);
        toast.error("Une erreur s'est produite", {
          autoClose: 3000,
        });
      }
    } else {
      toast.error("Veuillez remplir tous les champs", {
        autoClose: 3000,
      });
>>>>>>> Stashed changes
    }
  };

<<<<<<< Updated upstream
    // Nettoyer le style lors du démontage du composant
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  function renderEventContent(eventInfo: CustomEventInfo) {
    return (
      <>
        <div>{eventInfo.timeText}</div>
        <div>{eventInfo.event.title}</div>
        <div>{eventInfo.event.extendedProps.description}</div>
      </>
    );
  }

  const events = [
    {
      title: "projet web",
      start: "2024-03-20",
      end: "2024-03-23",
      description: "azerty \n azerty",
    },
  ];
=======
  const validateFormData = (): boolean => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };
>>>>>>> Stashed changes

  return (
    <div>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Ajouter un cours</h2>
<<<<<<< Updated upstream
            <form>
              <label>Nom du cours:</label>
              <input type="text" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:!outline-indianred'/>
              <label>Date de début:</label>
              <input type="datetime-local" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:outline-indianred' />
              <label>Date de fin:</label>
              <input type="datetime-local" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:outline-indianred' />
              <button className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5' type="submit">Ajouter</button>
              <button className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5' onClick={() => setIsPopupOpen(false)}>Annuler</button>
=======
            <form onSubmit={handleSubmit}>
              <label htmlFor="course">Nom du cours:</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label htmlFor="room">Salle :</label>
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label htmlFor="teacher">Professeur :</label>
              <input
                type="text"
                name="teacher"
                value={formData.teacher}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label htmlFor="classname">Classe :</label>
              <input
                type="text"
                name="classname"
                value={formData.classname}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label htmlFor="startTime">Date de début :</label>
              <input
                type="datetime-local"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <label htmlFor="endTime">Date de fin :</label>
              <input
                type="datetime-local"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="bg-white-100 rounded-md border border-solid border-indianred p-1.5 active:!outline-indianred"
              />
              <button
                type="submit"
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred"
              >
                Ajouter
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-white-100 rounded-md border border-solid border-black bg-indianred p-1.5 shadow-md outline-none hover:bg-indianred"
              >
                Annuler
              </button>
>>>>>>> Stashed changes
            </form>
          </div>
        </div>
      )}
<<<<<<< Updated upstream
      <div className="p-10 flex justify-center items-center flex-col gap-6">
=======

      <div className="flex flex-1 flex-col items-center justify-center gap-6 p-10">
>>>>>>> Stashed changes
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "dayGridMonth,timeGridWeek,timeGridDay",
            center: "title",
            end: "today prev,next",
          }}
          events={events}
        />
        <button onClick={handleClick} className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5'>
          Ajouter Cours
        </button>
      </div>
    </div>
  );
}

export default Planning;
