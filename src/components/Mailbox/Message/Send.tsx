import { useState } from 'react'; // Importez useState si vous n'avez pas déjà fait

import { MdOutlineAddAPhoto } from "react-icons/md";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { postData } from "@/app/api/message/action";

const Send = () => {
  const [message, setMessage] = useState(''); // État pour stocker le contenu du message

  const handleSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    try {
      await postData(new FormData(event.target)); // Appeler postData avec les données du formulaire
      // Réinitialiser le contenu du message après l'envoi réussi
      setMessage('');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du message :', error);
      // Gérer l'erreur de manière appropriée, par exemple afficher un message d'erreur à l'utilisateur
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
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Mettre à jour le contenu du message lorsque l'utilisateur tape
      />
      <Button type="submit" className="p-2">Envoyer</Button>
    </form>
  );
};
export default Send;
