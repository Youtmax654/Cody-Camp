const Loading = () => {
  return (
    <div className="flex h-screen flex-1 items-center justify-center space-x-2 bg-white">
      <span className="sr-only">Loading...</span>
      <div className="size-5 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
      <div className="size-5 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
      <div className="size-5 animate-bounce rounded-full bg-black"></div>
    </div>
  );
};

export default Loading;
