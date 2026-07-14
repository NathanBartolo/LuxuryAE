import luxuryLogo from '../assets/logo/luxury-logo-comp.png';

function Hero() {
  return (
    <section id="home" className="relative min-h-[86vh] overflow-hidden bg-gradient-to-br from-ivory via-cream to-[#e8dfd0] pt-24">
      <div className="absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-forest/8 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="max-w-2xl text-ink">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-forest">Luxury.ae UAE</p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Premium Beauty, Hair Care and Oral Care Products in the UAE
          </h1>
          <p className="mt-6 max-w-xl text-base text-[#4d4a44] sm:text-lg">
            Discover authentic international beauty essentials, carefully selected for your daily luxury routine.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#hair-care"
              className="inline-flex items-center justify-center rounded-sm bg-forest px-8 py-3 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#244835]"
            >
              Shop Collection
            </a>
            <a
              href="#brands"
              className="inline-flex items-center justify-center rounded-sm border border-forest px-8 py-3 text-sm uppercase tracking-[0.15em] text-forest transition hover:bg-forest hover:text-white"
            >
              Explore Brands
            </a>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src={luxuryLogo}
            alt="Luxury UAE logo"
            className="w-full max-w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
