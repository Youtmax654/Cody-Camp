import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

const ChangePassword = () => {
  return (
    <section className="flex flex-row gap-10 py-10 pl-8">
      <div className="w-1/3">
        <h1 className="text-xl font-bold">Changer de mot de passe</h1>
        <p className="text-gray-500">
          Mettez à jour votre mot de passe associé à votre compte.
        </p>
      </div>
      <form className="flex w-[484px] flex-col gap-8">
        <Input label="Ancien mot de passe" type="password" />
        <Input label="Nouveau mot de passe" type="password" />
        <Input label="Confirmer le mot de passe" type="password" />
        <Button type="submit" className="w-fit p-2">
          Valider
        </Button>
      </form>
    </section>
  );
};

export default ChangePassword;
