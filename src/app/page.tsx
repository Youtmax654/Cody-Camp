"use client";

import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="wave flex h-full flex-row justify-center bg-white">
      <section className="flex w-1/2 items-center justify-center">
        <AuthForm />
      </section>
    </main>
  );
}
