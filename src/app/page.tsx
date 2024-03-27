"use client";

import AuthForm from "@/components/AuthForm";
import { FormStateProvider } from "@/hooks/useFormState";

export default function Home() {
  return (
    <main className="wave flex size-full flex-row justify-center overflow-hidden bg-white">
      <section className="flex w-1/2 items-center justify-center md:animate-fade-in-to-left">
        <FormStateProvider>
          <AuthForm />
        </FormStateProvider>
      </section>
    </main>
  );
}
