import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useFormState } from "./useFormState";

type User = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const useUser = () => {
  const { setFormState, setAccountExist } = useFormState();
  const router = useRouter();

  const userExist = async (email: string) => {
    const res = await fetch("/api/user/getUserWithEmail", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    if (res.status === 201) {
      const data = await res.json();
      if (data.email === email) return true;
    }
    if (res.status === 404) {
      return false;
    }
  };

  const register = async ({ email, password, confirmPassword }: User) => {
    const firstName = email.split(".")[0];
    const lastName = email.split(".")[1].split("@")[0];

    const user = { firstName, lastName, email, password, confirmPassword };

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas", {
        toastId: "passwordsDontMatch",
        autoClose: 3000,
      });
      return { error: "Passwords do not match" };
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
    });
    if (res.status === 201) {
      const data = await res.json();

      const res2 = await fetch("/api/auth/sendVerifEmail", {
        method: "POST",
        body: JSON.stringify({ uid: data.id, email: data.email }),
      });

      if (res2.status === 201) {
        setFormState("signin");
        setAccountExist(true);
        toast.success(
          "Compte créé avec succès, un lien de confirmation vous a été envoyé par e-mail",
          {
            toastId: "accountCreatedAndEmailSent",
            autoClose: false,
          }
        );
      }
    }
  };

  const login = async ({ email, password }: User) => {
    const user = { email, password };

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    if (res.status === 400) {
      const data = await res.json();
      console.log(res, data);
      toast.error(data, {
        toastId: "loginError",
        autoClose: 3000,
      });
      return res;
    } else if (res.status === 201) {
      const data = await res.json();
      toast.success("Connexion réussie", {
        toastId: "loginSuccess",
        autoClose: 3000,
      });

      const d = new Date();
      d.setTime(d.getTime() + 25 * 60 * 60 * 1000);
      const formattedDate = d.toUTCString();
      document.cookie = `uid=${data.id}; expires=${formattedDate}; path=/;`;

      router.push("/home");
    }
  };

  return { userExist, register, login };
};
