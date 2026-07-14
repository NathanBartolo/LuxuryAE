function LoadingState() {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 lg:px-10">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#6b6457]">Preparing your luxury experience</p>
        </div>
      </div>
    </section>
  );
}

export default LoadingState;
