import { getCookie, setCookie } from "@/utils/cookies";
import { User } from "@/utils/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useUser = () => {
  const router = useRouter();

  const userExist = async (email: string) => {
    const res = await fetch("/api/user", {
      method: "GET",
      headers: {
        email: email,
      },
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
    const fN = email.split(".")[0];
    const firstName = fN.charAt(0).toUpperCase() + fN.slice(1);
    const lN = email.split(".")[1].split("@")[0];
    const lastName = lN.charAt(0).toUpperCase() + lN.slice(1);

    const user = { firstName, lastName, email, password };

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
      return;
    } else if (res.status === 201) {
      const data = await res.json();
      toast.success("Connexion réussie", {
        toastId: "loginSuccess",
        autoClose: 3000,
      });

      console.log("Setting UID:", data.id);
      setCookie("uid", data.id, 1);
      router.push("/home");

      return;
    }
  };

  const getUser = async () => {
    const uid = getCookie("uid");
    console.log("Get UID:", uid);
    if (uid) {
      const res = await fetch("/api/user", {
        method: "GET",
        headers: {
          uid: uid,
        },
      });
      if (res.status === 201) {
        const data = await res.json();
        return data as User;
      }
      if (res.status === 404) {
        return;
      }
    }
    return;
  };

  return { userExist, register, login, getUser };
};
