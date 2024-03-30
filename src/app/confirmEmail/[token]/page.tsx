"use client";

import Loading from "@/components/Loading";
import { ReactElement, useEffect, useState } from "react";

const ConfirmEmail = ({ params }: { params: { token: string } }) => {
  const [response, setResponse] = useState<ReactElement>(<Loading />);
  const token = params.token;

  useEffect(() => {
    if (token) {
      fetch("/api/auth/confirmEmail", {
        method: "POST",
        body: JSON.stringify({ token }),
      }).then((res) => {
        if (res.status === 200) {
          return setResponse(<div>Email confirmé avec succès !</div>);
        } else {
          return setResponse(
            <div>
              Erreur lors de la confirmation de l&apos;email. Veuillez contacter
              un administrateur.
            </div>
          );
        }
      });
    }
  }, [token]);

  return (
    <main className="flex h-screen items-center justify-center">
      {response}
    </main>
  );
};

export default ConfirmEmail;
