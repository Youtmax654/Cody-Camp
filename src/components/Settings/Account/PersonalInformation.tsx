import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import useStore from "@/hooks/useStore";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const PersonalInformation = () => {
  const { user, setUser } = useStore();
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [profilePicName, setProfilePicName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      profilePicture?: { files: FileList };
      secondEmail?: { value: string };
    };
    const secondEmail = target.secondEmail?.value;
    const profilePicture = target.profilePicture?.files[0];

    console.log("Profile picture:", profilePicture);

    if (profilePicture) {
      await fetch(`/api/user/upload?filename=${profilePicName}`, {
        method: "POST",
        body: profilePicture,
      }).then((res) => {
        if (res.status === 400) {
          console.log("Error while uploading user profile picture");
          return;
        } else if (res.status === 201) {
          res.json().then((data) => {
            console.log("Updating user information:", user, secondEmail, data);
            fetch(`/api/user`, {
              method: "PUT",
              body: JSON.stringify({
                user,
                secondEmail: secondEmail,
                profilePicURL: data,
              }),
            }).then((res) => {
              if (res.status === 400) {
                console.log("Error while updating user information");
                return;
              } else if (res.status === 201) {
                res.json().then((data) => {
                  setUser(data);
                  toast.success("Vos informations ont été mises à jour", {
                    toastId: "userInformationUpdated",
                    autoClose: 3000,
                  });
                });
              }
            });
          });
        }
      });
    } else {
      console.log("Updating user information:", user, secondEmail);
      await fetch(`/api/user`, {
        method: "PUT",
        body: JSON.stringify({
          user,
          secondEmail: secondEmail,
        }),
      }).then((res) => {
        if (res.status === 400) {
          console.log("Error while updating user information");
          return;
        } else if (res.status === 201) {
          res.json().then((data) => {
            setUser(data);
            toast.success("Vos informations ont été mises à jour", {
              toastId: "userInformationUpdated",
              autoClose: 3000,
            });
          });
        }
      });
    }
  };

  const handleProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicName(file.name);
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <section className="flex flex-row gap-10 border-b border-solid border-black/20 py-10 pl-8">
      <div className="w-1/3">
        <h1 className="text-xl font-bold">Informations personnelles</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Mettez à jour vos informations personnelles.
        </p>
      </div>
      <form className="flex w-[484px] flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <Image
            src={profilePic || (user?.profilePicture as string)}
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-center gap-2">
            <label
              htmlFor="ppInput"
              className="flex flex-row items-center gap-4"
            >
              <div
                className="min-w-fit cursor-pointer rounded-md 
                          border border-solid 
                          border-black/20 bg-white p-2 font-bold 
                          shadow-md transition-colors
                          hover:bg-black/5 dark:border-white/20
                          dark:bg-slate-700
                          "
              >
                Changer la photo de profil
              </div>
              <input
                type="file"
                id="ppInput"
                name="profilePicture"
                className="hidden"
                onChange={handleProfilePic}
              />
              {profilePicName && (
                <span className="truncate text-sm text-black/50 dark:text-white">
                  Vous avez selectionné {profilePicName}
                </span>
              )}
            </label>
            <p className="text-sm text-black/50 dark:text-white">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <Input label="Prénom" value={user?.firstName} disabled />
          <Input label="Nom" value={user?.lastName} disabled />
        </div>
        <Input label="Adresse e-mail de l'école" value={user?.email} disabled />
        <Input
          label="Adresse e-mail secondaire"
          name="secondEmail"
          placeholder={"prenom.nom@email.com"}
          defaultValue={user?.secondEmail}
        />
        <Button type="submit" className="w-fit p-2">
          Valider
        </Button>
      </form>
    </section>
  );
};

export default PersonalInformation;
