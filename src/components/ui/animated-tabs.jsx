import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils.js';
import hairCategory from '../../assets/images/category-hair.svg';
import oralCategory from '../../assets/images/category-oral.svg';
import beautyCategory from '../../assets/images/category-beauty.svg';

const defaultTabs = [
  {
    id: 'tab1',
    label: 'Hair Care',
    content: (
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <img
          src={hairCategory}
          alt="Premium hair care products"
          className="h-64 w-full rounded-lg object-cover shadow-[0_0_20px_rgba(0,0,0,0.12)] ring-1 ring-white/10"
        />
        <div className="space-y-4">
          <h3 className="font-serif text-3xl text-white">Hair Care</h3>
          <p className="text-sm leading-relaxed text-white/80">
            Premium Japanese hair care solutions for healthier, smoother and shinier hair.
          </p>
          <a
            href="#hair-care"
            className="inline-flex w-fit items-center rounded-sm bg-cream px-5 py-3 text-xs uppercase tracking-[0.15em] text-forest transition hover:bg-[#e8dbc2]"
          >
            Explore Hair Care
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Oral Care',
    content: (
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <img
          src={oralCategory}
          alt="Luxury oral care collection"
          className="h-64 w-full rounded-lg object-cover shadow-[0_0_20px_rgba(0,0,0,0.12)] ring-1 ring-white/10"
        />
        <div className="space-y-4">
          <h3 className="font-serif text-3xl text-white">Oral Care</h3>
          <p className="text-sm leading-relaxed text-white/80">
            Luxury oral care products from trusted international brands.
          </p>
          <a
            href="#oral-care"
            className="inline-flex w-fit items-center rounded-sm bg-cream px-5 py-3 text-xs uppercase tracking-[0.15em] text-forest transition hover:bg-[#e8dbc2]"
          >
            Explore Oral Care
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Beauty Essentials',
    content: (
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <img
          src={beautyCategory}
          alt="Premium beauty essentials collection"
          className="h-64 w-full rounded-lg object-cover shadow-[0_0_20px_rgba(0,0,0,0.12)] ring-1 ring-white/10"
        />
        <div className="space-y-4">
          <h3 className="font-serif text-3xl text-white">Beauty Essentials</h3>
          <p className="text-sm leading-relaxed text-white/80">
            Premium personal care products selected for UAE customers.
          </p>
          <a
            href="#products"
            className="inline-flex w-fit items-center rounded-sm bg-cream px-5 py-3 text-xs uppercase tracking-[0.15em] text-forest transition hover:bg-[#e8dbc2]"
          >
            Explore Collection
          </a>
        </div>
      </div>
    ),
  },
];

function AnimatedTabs({ tabs = defaultTabs, defaultTab, className }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn('w-full max-w-4xl flex flex-col gap-y-4', className)}>
      <div className="flex flex-wrap gap-2 rounded-2xl border border-[#325544] bg-[#1c3528e8] p-2 shadow-[0_0_20px_rgba(0,0,0,0.12)] backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative rounded-xl px-4 py-2 text-sm font-medium transition-colors',
              activeTab === tab.id ? 'text-forest' : 'text-white/80 hover:text-white'
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-xl bg-cream shadow-[0_0_20px_rgba(0,0,0,0.14)] backdrop-blur-sm"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-72 rounded-2xl border border-[#325544] bg-[#183124eb] p-6 text-white shadow-[0_0_20px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.95, x: -10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'circInOut', type: 'spring' }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
}

export { AnimatedTabs };