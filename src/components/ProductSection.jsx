import ProductCard from './ProductCard.jsx';
import EmptyState from './EmptyState.jsx';

function ProductSection({ id, title, subtitle, products }) {
  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Collection</p>
          <h2 className="font-serif text-4xl text-ink">{title}</h2>
          <p className="text-sm text-[#4d4a44]">{subtitle}</p>
        </div>

        {products.length === 0 ? (
          <EmptyState
            title="No products available"
            message="This collection is being refreshed with premium selections."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
