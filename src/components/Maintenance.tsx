const Maintenance = () => {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-48 text-2xl font-bold">
        Cette page est en maintenance
      </h1>
      <iframe
        src="https://lottie.host/embed/9c8112ac-ca63-431b-b4a7-b4c1addaa1f4/oKBvw23YRz.json"
        width={800}
        height={800}
      ></iframe>
    </main>
  );
};

export default Maintenance;
