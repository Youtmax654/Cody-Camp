"use client";

import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "./UI/Button";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Input from "./UI/Input";
import Spinner from "./UI/Spinner";

type Users = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RenderPasswordField = () => (
  <Input placeholder="Mot de passe" type="password" name="password" />
);

const RenderRegistrationFields = () => (
  <>
    <RenderPasswordField />
    <Input
      placeholder="Confirmer le mot de passe"
      type="password"
      name="confirmPassword"
    />
  </>
);

const AuthForm = () => {
  const { userExist, register, login } = useUser();
  const router = useRouter();

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState<"signup" | "signin" | "">("");
  const [accountExist, setAccountExist] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const email = target.email.value;
    const password = target.password?.value;
    const confirmPassword = target.confirmPassword?.value;

    switch (formState) {
      case "signup":
        await register({ email, password, confirmPassword })
          .then((res) => {
            setIsLoading(false);
            setFormState("signin");
            setAccountExist(true);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "signin":
        await login({ email, password })
          .then((res) => {
            console.log(res);
            setIsLoading(false);
            router.push("/home");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        if (await userExist(email)) {
          setAccountExist(true);
          setIsLoading(false);
        } else {
          setAccountExist(false);
          setIsLoading(false);
        }
    }

    if (email.length === 0) {
      toast.error("Veuillez entrer une adresse e-mail", {
        toastId: "emptyEmailError",
        autoClose: 3000,
      });
      return;
    }

    if (!verifyEmail(email)) {
      toast.error("Votre adresse e-mail doit provenir de ESIEE-IT", {
        toastId: "notValidEmailError",
        autoClose: 3000,
      });
      return;
    }
  };

  const handleReturn = () => {
    setFormState("");
    setEmailIsValid(false);
  };

  const verifyEmail = (email: string) => {
    const regex = /\b[A-Za-z0-9._%+-]+@(?:edu\.)?esiee-it\.fr\b/;
    if (regex.test(email)) {
      setEmailIsValid(true);
      return true;
    } else {
      setEmailIsValid(false);
      return false;
    }
  };

  const getTitleText = () => {
    switch (formState) {
      case "signin":
        return "Bon retour parmis nous !";
      case "signup":
        return "Créer un compte";
      default:
        return "Bienvenue sur Cody Camp";
    }
  };

  const getSubtitleText = () => {
    switch (formState) {
      case "signin":
        return "Entrez votre mot de passe pour vous connecter";
      case "signup":
        return "Entrez votre mot de passe et confirmez-le pour vous inscrire";
      default:
        return "Entrez votre adresse e-mail (de l'école) pour continuer";
    }
  };

  useEffect(() => {
    if (emailIsValid) {
      setFormState(accountExist ? "signin" : "signup");
    } else {
      setFormState("");
    }
  }, [emailIsValid, accountExist]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-6 rounded-xl bg-white p-4">
      {formState !== "" && (
        <IoMdArrowRoundBack
          className="absolute left-3 top-4 cursor-pointer text-3xl md:-left-10 md:-top-20"
          color="#EF5F67"
          onClick={handleReturn}
        />
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-center text-2xl font-semibold">{getTitleText()}</h1>
        <h2 className="text-center text-sm text-black/70">
          {getSubtitleText()}
        </h2>
      </div>
      <form className="flex w-[350px] flex-col gap-2" onSubmit={handleSubmit}>
        <Input
          placeholder="prenom.nom@esiee-it.fr"
          type="email"
          name="email"
          disabled={emailIsValid}
        />
        {emailIsValid ? (
          accountExist ? (
            <>
              <RenderPasswordField />
              <Button type="submit" className="mt-3" disabled={isLoading}>
                {isLoading ? <Spinner size="sm" /> : ""}
                Se connecter
              </Button>
            </>
          ) : (
            <>
              <RenderRegistrationFields />
              <Button type="submit" className="mt-3" disabled={isLoading}>
                {isLoading ? <Spinner size="sm" /> : ""}
                S&apos;inscrire
              </Button>
            </>
          )
        ) : (
          <Button type="submit" className="mt-3" disabled={isLoading}>
            {isLoading ? <Spinner size="sm" /> : ""}
            Continuer
          </Button>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
