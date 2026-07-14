function CategoryCard({ title, description, image, alt, href }) {
  return (
    <a
      href={href}
      className="group overflow-hidden rounded-sm border border-[#d8d0bf] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-premium"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="font-serif text-2xl text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-[#4d4a44]">{description}</p>
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold">Shop Now</span>
      </div>
    </a>
  );
}

export default CategoryCard;
