import Button from "../../UI/Button";
import { MdOutlineAddAPhoto } from "react-icons/md";

const Send=()=>{
    return(
        <div className="flex flex-row flex-1 items-center gap-1 mb-2 mr-2">
            <div className='flex items-end m-2'>
                <MdOutlineAddAPhoto className='rounded-lg text-black cursor-pointer hover:opacity-75 transition flex items-end m-2' size={30}/>
            </div>
            <input type="text" className="bg-white-100 rounded-md 
                border border-solid
                border-gray-300 
                p-2 shadow-md outline-1 
                focus:outline-gray-400 
                disabled:cursor-not-allowed
                disabled:bg-gray-200 flex flex-1" />
            <Button className="p-2" value={'Envoyer'} />
        </div>
    );
}
export default Send;