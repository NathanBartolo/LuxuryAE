import { useEffect, useState } from 'react';
import luxuryLogo from '../assets/logo/luxury-logo-comp.png';

const NAV_ITEMS = [
  { label: 'Hair Care', href: '#hair-care' },
  { label: 'Oral Care', href: '#oral-care' },
  { label: 'Brands', href: '#brands' },
  { label: 'Wholesale', href: '#newsletter' },
  { label: 'About Us', href: '#why-us' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-[#d8d0bf] bg-ivory/95 shadow-premium backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="Luxury UAE home">
          <img src={luxuryLogo} alt="Luxury UAE logo" className="h-14 w-auto object-contain sm:h-16" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" aria-label="Search" className={iconButton(isScrolled)}>
            <SearchIcon />
          </button>
          <button type="button" aria-label="Shopping cart" className={iconButton(isScrolled)}>
            <CartIcon />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center rounded-full border border-ink p-2 text-ink lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle mobile navigation"
        >
          <MenuIcon />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#d8d0bf] bg-ivory lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <button type="button" aria-label="Search" className="rounded-full border border-ink p-2 text-ink">
                <SearchIcon />
              </button>
              <button type="button" aria-label="Shopping cart" className="rounded-full border border-ink p-2 text-ink">
                <CartIcon />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function iconButton(isScrolled) {
  return 'rounded-full border border-ink p-2 text-ink transition-colors hover:border-gold hover:text-gold';
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.65 16.65" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4H5L7 15H19L21 7H8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </svg>
  );
}

export default Header;
