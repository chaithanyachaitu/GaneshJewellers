import React from 'react';
import { CATEGORIES, PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const newArrivals = PRODUCTS.slice(6, 10);

  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-8">
          
          {/* Hero Section */}
          <div className="@container mb-16">
            <div className="@[480px]:p-0">
              <div className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-2xl items-center text-center justify-center px-4 pb-12 @[480px]:px-10 shadow-lg relative overflow-hidden" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjy8uOtYGd5MmSvVtxUXfnwewPYV4L9C460Y3juUsQVr7upHQgv51MYsJ_ElaKVmDabie_ri1ke58OVX_9hxixlNDprkgfeYil6oSkp1jYhscAeDNt6fCj6sTQwInPZ4s5X7po-EQd3kHN2GplRsyplrQ_1ko8Mb22Tt_0UTAN1iky3I-PwI0VSO4mLk8hMIES0OVOJtH_yPte4gBcClZ82IjBJb1tinZZmpcPQfUA0j_y3gfkwmxbUHX-Ii9YKlJxkTv73RowcaY")' }}>
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="flex flex-col gap-4 text-center max-w-[800px] relative z-10 items-center">
                  <span className="bg-white/90 text-text-main px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/50">New Collection 2026</span>
                  <h1 className="text-white text-5xl font-medium leading-tight font-serif tracking-tight @[480px]:text-7xl italic">
                    Elegance <span className="not-italic font-bold">Etched in Gold</span>
                  </h1>
                  <h2 className="text-white/90 text-lg font-light leading-relaxed max-w-[600px]">
                    Discover our handcrafted gold collection
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-surface-highlight mb-16 bg-background-off-white rounded-xl px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="p-3 rounded-full bg-surface-highlight/50 text-primary mb-1">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <div>
                <h3 className="text-text-main font-bold text-lg font-serif">BIS Hallmarked</h3>
                <p className="text-text-muted text-sm font-light">100% Certified Purity Guarantee</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-center md:border-l md:border-surface-highlight/50 border-t md:border-t-0 pt-6 md:pt-0">
              <div className="p-3 rounded-full bg-surface-highlight/50 text-primary mb-1">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
              </div>
              <div>
                <h3 className="text-text-main font-bold text-lg font-serif">Insured Shipping</h3>
                <p className="text-text-muted text-sm font-light">Safe & Secure delivery to your door</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-center md:border-l md:border-surface-highlight/50 border-t md:border-t-0 pt-6 md:pt-0">
              <div className="p-3 rounded-full bg-surface-highlight/50 text-primary mb-1">
                <span className="material-symbols-outlined text-4xl">currency_exchange</span>
              </div>
              <div>
                <h3 className="text-text-main font-bold text-lg font-serif">Lifetime Exchange</h3>
                <p className="text-text-muted text-sm font-light">Best value for your gold always</p>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex flex-col gap-10 py-10 @container">
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Categories</span>
              <h2 className="text-text-main font-serif text-4xl md:text-5xl font-medium">Curated Collections</h2>
              <div className="w-24 h-1 bg-primary/20 rounded-full my-2"></div>
              <p className="text-text-muted text-lg font-light max-w-[720px]">
                Explore our wide range of categories, from traditional wedding sets to modern everyday wear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-t-xl aspect-[4/5] relative">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                         style={{ backgroundImage: `url("${cat.image}")` }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="bg-background-off-white p-6 rounded-b-xl border border-t-0 border-surface-highlight text-center relative -mt-4 mx-4 shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-text-main text-2xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-text-muted text-sm font-light">{cat.description}</p>
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary pb-1">Explore</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div className="py-16">
            <div className="flex justify-between items-end mb-10 border-b border-surface-highlight pb-4">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">Fresh from Atelier</span>
                <h2 className="text-text-main font-serif text-4xl font-medium">New Arrivals</h2>
              </div>
              <a className="hidden md:flex items-center gap-1 text-text-main hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider" href="#">
                View All <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 flex justify-center md:hidden">
              <button className="px-6 py-3 border border-text-main text-text-main font-bold uppercase tracking-wider text-sm hover:bg-text-main hover:text-white transition-colors">
                View All Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;