import { brands } from '../data/brands.js';

function BrandShowcase() {
  return (
    <section id="brands" className="bg-ivory py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Premium Partners</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">International Brands We Curate</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="flex h-36 flex-col items-center justify-center gap-4 rounded-sm border border-[#d8d0bf] bg-white p-5 transition duration-300 hover:shadow-premium"
            >
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-auto object-contain" />
              <p className="font-serif text-xl text-ink">{brand.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandShowcase;
