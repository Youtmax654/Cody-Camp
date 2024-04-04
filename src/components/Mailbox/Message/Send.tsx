"use client";

import { useState, useEffect } from 'react';
import { MdOutlineAddAPhoto } from "react-icons/md";
import Button from "../../UI/Button";
import { postData } from "@/app/api/message/action";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Send = () => {
  const [message, setMessage] = useState('');
  const [senderId, setSenderId] = useState(''); // État pour stocker l'ID de l'expéditeur
  const [receiverId, setReceiverId] = useState(''); // État pour stocker l'ID du destinataire

  // Fonction pour charger les ID de l'expéditeur et du destinataire depuis la base de données
  const loadUserIds = async () => {
    try {
      // Supposons que l'utilisateur actuellement connecté est l'expéditeur
      const sender = await prisma.users.findFirst({ where: {id: senderId}});
      if (sender) {
        setSenderId(sender.id);
      }

      // Supposons que le destinataire est sélectionné à partir d'une liste d'utilisateurs
      const receiver = await prisma.users.findFirst({ where: {id: receiverId}});
      if (receiver) {
        setReceiverId(receiver.id);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors du chargement des ID des utilisateurs :', error);
    }
  };

  // Appeler la fonction pour charger les ID de l'expéditeur et du destinataire dès que le composant est monté
  useEffect(() => {
    loadUserIds();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget as HTMLFormElement);
      await postData(formData, senderId, receiverId); // Passer senderId et receiverId à la fonction postData
      setMessage('');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du message :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 mr-2 flex flex-1 flex-row items-center gap-1">
      <div className="m-2 flex items-end">
        <MdOutlineAddAPhoto
          className="m-2 flex cursor-pointer items-end rounded-lg text-black transition hover:opacity-75"
          size={30}
        />
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex flex-1 
                rounded-md border
                border-solid 
                border-gray-300 bg-white p-2 
                shadow-md 
                outline-1
                focus:outline-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200"
      />
      <Button type="submit" className="p-2">Envoyer</Button>
    </form>
  );
};

export default Send;
