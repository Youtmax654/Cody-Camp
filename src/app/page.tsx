import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex h-full flex-row">
      <section className="flex h-full w-1/2 items-center justify-center bg-purple"></section>
      <section className="flex h-full w-1/2 items-center justify-center">
        <LoginForm />
      </section>
    </div>
  );
}
