import { AnimatedTabs } from './ui/animated-tabs.jsx';

function Categories() {
  return (
    <section id="categories" className="bg-ivory py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured Categories</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">Curated Essentials</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#4d4a44]">
            Explore the core Luxury UAE collections in an elevated interactive format.
          </p>
        </div>
        <div className="flex justify-center">
          <AnimatedTabs />
        </div>
      </div>
    </section>
  );
}

export default Categories;
