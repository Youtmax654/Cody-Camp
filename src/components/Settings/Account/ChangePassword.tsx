import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { User } from "@/hooks/useUser";
import { toast } from "react-toastify";

const ChangePassword = ({ user }: { user: User }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      oldPassword: { value: string };
      newPassword: { value: string };
      confirmNewPassword: { value: string };
    };
    const oldPassword = target.oldPassword.value;
    const newPassword = target.newPassword.value;
    const confirmNewPassword = target.confirmNewPassword.value;

    if (newPassword !== confirmNewPassword) {
      toast.error("Les mots de passe ne correspondent pas", {
        toastId: "passwordMismatch",
        autoClose: 3000,
      });
      return;
    }

    await fetch("/api/user", {
      method: "PATCH",
      body: JSON.stringify({ user, oldPassword, newPassword }),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Votre mot de passe a été modifié", {
          toastId: "passwordUpdated",
          autoClose: 3000,
        });
      } else if (res.status === 400) {
        toast.error("Votre ancien mot de passe n'est pas correct", {
          toastId: "passwordUpdateError",
          autoClose: 3000,
        });
      }
    });
  };

  return (
    <section className="flex flex-row gap-10 py-10 pl-8">
      <div className="w-1/3">
        <h1 className="text-xl font-bold">Changer de mot de passe</h1>
        <p className="text-gray-500">
          Mettez à jour votre mot de passe associé à votre compte.
        </p>
      </div>
      <form className="flex w-[484px] flex-col gap-8" onSubmit={handleSubmit}>
        <Input
          label="Ancien mot de passe"
          name="oldPassword"
          type="password"
          placeholder="••••••••••"
        />
        <Input
          label="Nouveau mot de passe"
          name="newPassword"
          type="password"
          placeholder="••••••••••"
        />
        <Input
          label="Confirmer le mot de passe"
          name="confirmNewPassword"
          type="password"
          placeholder="••••••••••"
        />
        <Button type="submit" className="w-fit p-2">
          Valider
        </Button>
      </form>
    </section>
  );
};

export default ChangePassword;
