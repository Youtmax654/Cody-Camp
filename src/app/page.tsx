"use client";

import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="wave flex size-full flex-row justify-center overflow-hidden bg-white">
      <section className="flex w-1/2 items-center justify-center md:animate-fade-in-to-left">
        <AuthForm />
      </section>
    </main>
  );
}
