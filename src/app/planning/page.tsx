"use client";

import React, { useState, useEffect } from 'react';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

function Planning() {
  interface CustomEventInfo {
    timeText: string;
    event: {
      title: string;
      start: string | Date;
      end?: string | Date;
      extendedProps: {
        description: string;
      };
    };
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    // Verrouiller le défilement du corps lorsque la popup est ouverte
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

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

  return (
    <div>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Ajouter un cours</h2>
            <form>
              <label>Nom du cours:</label>
              <input type="text" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:!outline-indianred'/>
              <label>Date de début:</label>
              <input type="datetime-local" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:outline-indianred' />
              <label>Date de fin:</label>
              <input type="datetime-local" className='rounded-md bg-white border-salmon border border-solid p-1.5 active:outline-indianred' />
              <button className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5' type="submit">Ajouter</button>
              <button className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5' onClick={() => setIsPopupOpen(false)}>Annuler</button>
            </form>
          </div>
        </div>
      )}
      <div className="p-10 flex justify-center items-center flex-col gap-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "dayGridMonth,timeGridWeek,timeGridDay",
            center: "title",
            end: "today prev,next",
          }}
          events={events}
          eventContent={renderEventContent}
        />
        <button onClick={handleClick} className='rounded-md bg-salmon text-white shadow-md outline-none hover:bg-indianred border-black border border-solid p-1.5'>
          Ajouter Cours
        </button>
      </div>
    </div>
  );
}

export default Planning;
