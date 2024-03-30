import { MdOutlineAddAPhoto } from "react-icons/md";
import Button from "../../UI/Button";

const Send = () => {
  return (
    <div className="mb-2 mr-2 flex flex-1 flex-row items-center gap-1">
      <div className="m-2 flex items-end">
        <MdOutlineAddAPhoto
          className="m-2 flex cursor-pointer items-end rounded-lg text-black transition hover:opacity-75"
          size={30}
        />
      </div>
      <input
        type="text"
        className="flex flex-1 
                rounded-md border
                border-solid 
                border-gray-300 bg-white p-2 
                shadow-md 
                outline-1
                focus:outline-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200"
      />
      <Button className="p-2">Envoyer</Button>
    </div>
  );
};
export default Send;
