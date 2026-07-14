const reasons = [
  {
    title: 'Authentic Products',
    description: 'Every item is carefully sourced and quality-checked for authenticity.',
    icon: ShieldIcon,
  },
  {
    title: 'Premium International Brands',
    description: 'Curated collections from leading beauty and grooming brands worldwide.',
    icon: GlobeIcon,
  },
  {
    title: 'UAE Delivery',
    description: 'Fast and reliable fulfillment across all Emirates.',
    icon: TruckIcon,
  },
  {
    title: 'Luxury Customer Experience',
    description: 'Elegant online shopping and premium support from discovery to checkout.',
    icon: CrownIcon,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#13271d] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#dbc79a]">Why Choose Luxury UAE</p>
          <h2 className="mt-3 font-serif text-4xl">A Trusted Premium Standard</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-sm border border-white/20 bg-white/5 p-6">
              <reason.icon />
              <h3 className="mt-5 font-serif text-2xl">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#efe8d8]">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconFrame(children) {
  return <div className="inline-flex rounded-full border border-[#dbc79a]/60 p-3 text-[#dbc79a]">{children}</div>;
}

function ShieldIcon() {
  return iconFrame(
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3L19 6V12C19 16.5 15.7 20.7 12 22C8.3 20.7 5 16.5 5 12V6L12 3Z" />
    </svg>
  );
}

function GlobeIcon() {
  return iconFrame(
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12H21" />
      <path d="M12 3C14.5 5.6 16 8.7 16 12C16 15.3 14.5 18.4 12 21" />
      <path d="M12 3C9.5 5.6 8 8.7 8 12C8 15.3 9.5 18.4 12 21" />
    </svg>
  );
}

function TruckIcon() {
  return iconFrame(
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 5H15V16H1V5Z" />
      <path d="M15 9H19L23 12V16H15V9Z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

function CrownIcon() {
  return iconFrame(
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8L7 13L12 6L17 13L21 8L19 18H5L3 8Z" />
    </svg>
  );
}

export default WhyChooseUs;
