"use client";

import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "./UI/Button";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Input from "./UI/Input";

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

const LoginForm = () => {
  const usersMails = ["maxime.penn@edu.esiee-it.fr"];
  const passwords = ["password"];

  const router = useRouter();

  const [formState, setFormState] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [accountExist, setAccountExist] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const email = target.email.value;

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

    switch (formState) {
      case "signup":
        alert("signup");
        // TO DO: signup
        break;
      case "signin":
        const password = target.password.value;
        if (passwords[usersMails.indexOf(email)] === password) {
          window.localStorage.setItem("uid", "1");
          router.push("/home");
        }
        break;
      default:
        if (mailExist(email)) {
          setAccountExist(true);
        } else {
          setAccountExist(false);
        }
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

  const mailExist = (email: string) => {
    if (usersMails.includes(email)) return true;
    else return false;
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
    <div className="relative flex flex-col items-center justify-center gap-6">
      {formState !== "" && (
        <IoMdArrowRoundBack
          className="absolute -top-20 left-0 cursor-pointer text-3xl md:-left-10"
          color="#fa7268"
          onClick={handleReturn}
        />
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-center text-2xl font-semibold">{getTitleText()}</h1>
        <h2 className="text-center text-sm text-black-100/70">
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
              <Button value="Se connecter" type="submit" className="mt-3" />
            </>
          ) : (
            <>
              <RenderRegistrationFields />
              <Button value="S'inscrire" type="submit" className="mt-3" />
            </>
          )
        ) : (
          <Button value="Continuer" type="submit" className="mt-3" />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
