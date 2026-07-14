function ProductCard({ product }) {
  return (
    <article className="group rounded-sm border border-[#e1dbce] bg-white p-4 transition duration-500 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative mb-4 h-60 overflow-hidden rounded-sm bg-ivory">
        <img
          src={product.image}
          alt={product.alt}
          className="h-full w-full object-contain bg-[#fbf9f4] p-4 transition duration-700 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-ink transition hover:bg-ink hover:text-white"
        >
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.8 8.6C20.8 13.5 12 20.5 12 20.5S3.2 13.5 3.2 8.6C3.2 5.9 5.4 3.8 8.1 3.8C9.7 3.8 11.2 4.6 12 5.9C12.8 4.6 14.3 3.8 15.9 3.8C18.6 3.8 20.8 5.9 20.8 8.6Z" />
          </svg>
        </button>
      </div>

      <p className="text-xs uppercase tracking-[0.2em] text-gold">{product.brand}</p>
      <h3 className="mt-2 min-h-14 text-sm leading-relaxed text-ink">{product.name}</h3>
      <p className="mt-3 font-serif text-xl text-ink">AED {product.price}</p>

      <button
        type="button"
        className="mt-4 w-full rounded-sm border border-ink px-4 py-3 text-xs uppercase tracking-[0.15em] text-ink transition hover:bg-ink hover:text-white"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
