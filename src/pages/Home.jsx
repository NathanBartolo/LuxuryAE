import { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import ProductSection from '../components/ProductSection.jsx';
import BrandShowcase from '../components/BrandShowcase.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import BlogSection from '../components/BlogSection.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';
import LoadingState from '../components/LoadingState.jsx';
import { products } from '../data/products.js';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main>
        <LoadingState />
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <div id="products">
          <ProductSection
            id="hair-care"
            title="Hair Care Collection"
            subtitle="Signature Japanese formulations for deep nourishment, shine, and repair."
            products={products.hairCare}
          />
          <ProductSection
            id="oral-care"
            title="Oral Care Collection"
            subtitle="Cult-favorite oral care essentials crafted for taste, freshness, and style."
            products={products.oralCare}
          />
        </div>
        <BrandShowcase />
        <WhyChooseUs />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default Home;
