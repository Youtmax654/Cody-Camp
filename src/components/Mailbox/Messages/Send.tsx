import { useState } from "react";
import Button from "../../UI/Button";

const uploadNewMessage = async (
  newMessage: string,
  uid: string,
  receiverId: string
) => {
  return await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify({
      uid: uid,
      receiverId: receiverId,
      content: newMessage,
    }),
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
};

const Send = ({ uid, receiverId }: { uid: string; receiverId: string }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewMessage("");
    const target = e.target as typeof e.target & {
      newMessage: { value: string };
    };
    const newMessage = target.newMessage.value;

    uploadNewMessage(newMessage, uid, receiverId).then((data) => {
      console.log("Message sent:", data);
    });
  };

  return (
    <form
      className="mb-2 mr-2 flex flex-row items-center gap-1"
      onSubmit={handleSubmit}
    >
      {/* <div className="m-2 flex items-end">
        <MdOutlineAddAPhoto
          className="m-2 flex cursor-pointer items-end rounded-lg text-black transition hover:opacity-75"
          size={30}
        />
      </div> */}
      <input
        type="text"
        placeholder="Ecrire un message"
        name="newMessage"
        value={newMessage}
        onChange={handleInputChange}
        className="flex flex-1 
                rounded-md border
                border-solid 
                border-gray-300 bg-white p-2 
                shadow-md 
                outline-1
                focus:outline-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200
                dark:border-white/20 dark:bg-black/20 dark:text-white"
      />
      <Button type="submit" className="p-2">
        Envoyer
      </Button>
    </form>
  );
};
export default Send;
