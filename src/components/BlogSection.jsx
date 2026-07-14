import { blogPosts } from '../data/blogPosts.js';

function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Latest Articles</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">Beauty Journal</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-sm border border-[#e1dbce] bg-white transition hover:shadow-premium">
              <img src={post.image} alt={post.alt} className="h-52 w-full object-cover" />
              <div className="space-y-4 p-6">
                <h3 className="font-serif text-2xl text-ink">{post.title}</h3>
                <p className="text-sm leading-relaxed text-[#4d4a44]">{post.description}</p>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.18em] text-gold transition hover:text-ink"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
