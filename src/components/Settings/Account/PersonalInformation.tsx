import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Image from "next/image";

const PersonalInformation = () => {
  return (
    <section className="flex flex-row gap-10 border-b border-solid border-black/20 py-10 pl-8">
      <div className="w-1/3">
        <h1 className="text-xl font-bold">Informations personnelles</h1>
        <p className="text-gray-500">
          Mettez à jour vos informations personnelles.
        </p>
      </div>
      <form className="flex w-[484px] flex-col gap-8">
        <div className="flex gap-5">
          <Image
            src={"/logo.jpg"}
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="ppInput">
              <div
                className="cursor-pointer rounded-md border 
                              border-solid border-black/20 
                              bg-white p-2 font-bold shadow-md 
                              transition-colors hover:bg-black/5"
              >
                Changer la photo de profil
              </div>
              <input type="file" id="ppInput" className="hidden" />
            </label>
            <p className="text-sm text-black/50">JPG, GIF or PNG. 1MB max.</p>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <Input label="Prénom" placeholder="Maxime" />
          <Input label="Nom" placeholder="Penn" />
        </div>
        <Input
          label="Adresse email"
          placeholder="maxime.penn@edu.esiee-it.fr"
        />
        <Button value="Valider" type="submit" className="w-fit p-2" />
      </form>
    </section>
  );
};

export default PersonalInformation;
