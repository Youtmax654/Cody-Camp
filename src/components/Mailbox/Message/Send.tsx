import { MdOutlineAddAPhoto } from "react-icons/md";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

const Send = () => {
  return (
    <div className="mb-2 mr-2 flex flex-1 flex-row items-center gap-1">
      <div className="m-2 flex items-end">
        <MdOutlineAddAPhoto
          className="m-2 flex cursor-pointer items-end rounded-lg text-black transition hover:opacity-75"
          size={30}
        />
      </div>
      <Input />
      <Button className="p-2">Envoyer</Button>
    </div>
  );
};
export default Send;