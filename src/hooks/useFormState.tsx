import React, { useState } from "react";

type FormStateType = {
  formState: "signup" | "signin" | "";
  setFormState: React.Dispatch<React.SetStateAction<"signup" | "signin" | "">>;
  accountExist: boolean;
  setAccountExist: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormStateContext = React.createContext<FormStateType | undefined>(
  undefined
);

export const useFormState = () => {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error("useFormState must be inside a FormStateProvider");
  }
  return context;
};

export const FormStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formState, setFormState] = useState<"signup" | "signin" | "">("");
  const [accountExist, setAccountExist] = useState(false);

  return (
    <FormStateContext.Provider
      value={{ formState, setFormState, accountExist, setAccountExist }}
    >
      {children}
    </FormStateContext.Provider>
  );
};
