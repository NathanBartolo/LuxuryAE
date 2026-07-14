import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setSuccess('');
      setError('Please enter your email address.');
      return;
    }

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setSuccess('');
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSuccess('Thank you for joining Luxury UAE. Exclusive updates are on the way.');
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Premium Membership</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">Join Luxury UAE</h2>
          <p className="mt-4 text-sm text-[#4d4a44]">
            Stay up-to-date with the latest products, promotions, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full border border-[#cbc1ae] bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                aria-invalid={Boolean(error)}
                aria-describedby="newsletter-feedback"
              />
              <button
                type="submit"
                className="rounded-sm bg-ink px-8 py-3 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-gold hover:text-ink"
              >
                Subscribe
              </button>
            </div>
            <p id="newsletter-feedback" className={`text-sm ${error ? 'text-red-700' : 'text-forest'}`}>
              {error || success}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
