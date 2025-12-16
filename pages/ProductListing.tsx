import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

const ProductListing: React.FC = () => {
  const [price, setPrice] = useState(50000);

  return (
    <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-2 text-sm text-text-muted mb-8">
        <Link className="hover:text-primary transition-colors" to="/">Home</Link>
        <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
        <span className="hover:text-primary transition-colors cursor-pointer">Collections</span>
        <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
        <span className="text-primary font-bold">Gold Jewellery</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12 border-b border-gray-200 pb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Gold Collections</h1>
          <p className="text-text-muted text-lg font-light leading-relaxed">Explore our latest exquisite designs in 22k and 24k gold purity. Handcrafted perfection for your special moments.</p>
        </div>
        <div className="hidden md:block">
          <span className="inline-block px-4 py-2 bg-primary-light/30 text-primary-dark rounded-full text-sm font-bold border border-primary/20">124 Items Found</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          <div className="lg:hidden flex justify-between items-center mb-4">
            <button className="flex items-center gap-2 text-white font-bold bg-gray-900 px-4 py-2 rounded-lg shadow-sm">
              <span className="material-symbols-outlined">filter_list</span>
              Filters
            </button>
            <span className="text-text-muted font-medium">124 Results</span>
          </div>

          <div className="hidden lg:block space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Filters</h3>
              <button className="text-xs text-primary-dark font-semibold hover:underline">Clear All</button>
            </div>
            
            <div className="flex flex-col gap-4">
              <details className="group border-b border-gray-200 pb-4" open>
                <summary className="flex cursor-pointer items-center justify-between py-2 list-none hover:text-primary transition-colors">
                  <span className="font-bold text-sm text-gray-800">Category</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-2 flex flex-col gap-3">
                  {['Necklaces (45)', 'Earrings (32)', 'Bangles (18)', 'Rings (29)'].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group/item">
                       <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 transition-colors" defaultChecked={idx===1} />
                       <span className="text-text-muted text-sm group-hover/item:text-primary transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex cursor-pointer items-center justify-between py-2 list-none hover:text-primary transition-colors">
                  <span className="font-bold text-sm text-gray-800">Purity</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-2 flex flex-col gap-3">
                   {['24k Gold', '22k Gold', '18k Rose Gold'].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group/item">
                       <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 transition-colors" />
                       <span className="text-text-muted text-sm group-hover/item:text-primary transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </details>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="font-bold text-sm text-gray-800">Price Range</span>
                </div>
                <div className="px-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="500000" 
                    value={price} 
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  />
                  <div className="flex justify-between mt-3 text-xs text-text-muted font-medium">
                    <span>₹0</span>
                    <span className="text-primary-dark font-bold">₹{price.toLocaleString('en-IN')}</span>
                    <span>₹5,00,000+</span>
                  </div>
                </div>
              </div>

               <details className="group border-b border-gray-200 pb-4">
                <summary className="flex cursor-pointer items-center justify-between py-2 list-none hover:text-primary transition-colors">
                  <span className="font-bold text-sm text-gray-800">Weight (grams)</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-2 flex flex-col gap-3">
                   {['0 - 5g', '5 - 10g', '10 - 20g', '20g+'].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group/item">
                       <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 transition-colors" />
                       <span className="text-text-muted text-sm group-hover/item:text-primary transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-3">
              <span className="text-text-muted text-sm font-medium hidden sm:block">Sort By:</span>
              <div className="relative w-[200px]">
                <select className="w-full appearance-none rounded-lg bg-gray-50 border border-gray-200 text-text-main py-2.5 pl-4 pr-10 focus:outline-none focus:border-primary text-sm cursor-pointer shadow-sm hover:border-gray-400 transition-colors">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>New Arrivals</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 6).map((product) => (
               <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative border border-transparent hover:border-primary/20">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 hover:bg-white shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                  </button>
                  {product.isNew && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-md">New Arrival</div>
                  )}
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gray-900 text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-md">Best Seller</div>
                  )}
                  {product.isLowStock && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-md">Low Stock</div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary-dark transition-colors font-serif">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-4 font-medium">
                    <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">{product.purity}</span>
                    <span className="text-gray-300">•</span>
                    <span>{product.weight}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="text-xl font-bold text-primary-dark">₹{product.price.toLocaleString('en-IN')}</span>
                    <button className="size-10 rounded-full bg-gray-50 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md">1</button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm">2</button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm">3</button>
              <span className="text-gray-400 px-2 tracking-widest">...</span>
              <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductListing;