import luxuryLogo from '../assets/logo/luxury-logo-comp.png';

function Footer() {
  return (
    <footer id="contact" className="bg-ink py-16 text-[#f1ebdf]">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3">
              <img src={luxuryLogo} alt="Luxury UAE logo" className="h-16 w-auto object-contain" />
            </div>
          </div>

          <FooterColumn title="Brands" items={['Marvis', 'Fino', 'Proraso']} />
          <FooterColumn
            title="Information"
            items={['About Us', 'Why Us', 'Privacy Policy', 'Refund Policy', 'Terms of Service']}
          />
          <FooterColumn title="Business" items={['Retail', 'Wholesale']} />
          <FooterColumn title="Contact" items={['Contact Us']} />
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.15em] text-[#d8cdb8]">
          © 2026 Luxury UAE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-serif text-lg">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-[#d8cdb8]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
