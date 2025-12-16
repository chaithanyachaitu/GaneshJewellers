import React from 'react';
import { AURORA_PRODUCT, PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const product = AURORA_PRODUCT;
  const relatedProducts = PRODUCTS.slice(6, 10);

  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-10">
      <div className="flex flex-wrap gap-3 pb-8 items-center">
        <Link className="text-text-muted text-xs uppercase tracking-wider font-medium hover:text-primary transition-colors" to="/">Home</Link>
        <span className="text-text-muted text-xs">/</span>
        <Link className="text-text-muted text-xs uppercase tracking-wider font-medium hover:text-primary transition-colors" to="/products">Collections</Link>
        <span className="text-text-muted text-xs">/</span>
        <Link className="text-text-muted text-xs uppercase tracking-wider font-medium hover:text-primary transition-colors" to="/products">Necklaces</Link>
        <span className="text-text-muted text-xs">/</span>
        <span className="text-text-main text-xs uppercase tracking-wider font-semibold border-b border-primary">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        {/* Images Section */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 relative group overflow-hidden">
              <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover transition-transform duration-1000 group-hover:scale-105" 
                   style={{ backgroundImage: `url("${product.image}")` }}>
              </div>
            </div>
            <div className="relative group overflow-hidden">
               <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transition-transform duration-1000 group-hover:scale-105" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiBx8gwdgCEiIn_RUJ2vSIk0aVLjdnt10JljBGsFbai9OHkF1bAzGcCEdD2_crcCNriD8uhG-3w9bGlqKuqeR5AOoo7wjAGZzcxJf3aaLlg2-A6F8ilm9kNfvz8PLxfBdMipyYVlgIpCAXh_FX2NYO2DEN-73RqvuHGCjaCT7iZZ6ataIPtRcY62qe2LWQKHxE8epjbwhqdjXaCBZmVpU0_eTyEZ8un3xapW4UnYyPSH6z5VwLAgX6jj_UJTERC61lh6bB2G_L5Fo")' }}>
              </div>
            </div>
            <div className="relative group overflow-hidden">
               <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover transition-transform duration-1000 group-hover:scale-105" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWqctmlTqAqbASXV3UHRAUTWyONqfOXvhQYNtlGcRvzdWAUWGtO0Frsi1dHKrUZGAmMlCY_kiClwe7VFANhbVjgSZXTiiAVZMcKysMLQ6rsn_sr-aI0iG9xxKaD_CX4jxE2M-UROOphpZ66TgwaonDMFSvgJq-uuaP0PNX1mjcNkhW37D972jZjcTX5W2J-sejB6sOGGARZfBf3pAeFbWyb8lTrFcSdl4BoA8nDctI7NCZe3JWwJBPasQ6yNBB05KTAjmmNoQdJL0")' }}>
              </div>
            </div>
             <div className="col-span-2 relative group overflow-hidden">
              <div className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover transition-transform duration-1000 group-hover:scale-105" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDntArrm61cuwHlfRx9WjKHSuRJogoAEmqp5U79Kl_swYLP7QIKjaXLLLmMXRjKhUuJlq5349ZIpHD7iHPwzRvixpadVYhJmkb2QnQKynbYaN0yMpPYKU76U_VDvg1cp-nbIOGV6BKAWaosHdc4mJrF_BaH0HB1mrbOZlxMVZEIMj07h_qtShhd7C_4aDeVBRWXojUSCagNFLiDkDvhErc6P7-HQRq8vQ3F4gR3NVeYrEBR1KCgnbbZ3h78Cuc2Zr8yQV6Dv8T3KQg")' }}>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 flex flex-col gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary-dark bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded-sm">{product.purity}</span>
                <div className="flex items-center gap-1.5 group cursor-pointer">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                  </div>
                  <span className="text-text-main text-sm font-medium border-b border-transparent group-hover:border-text-main transition-all">{product.rating} ({product.reviews})</span>
                </div>
              </div>
              <h1 className="text-text-main text-5xl font-display font-medium leading-tight mb-4">{product.name}</h1>
              <p className="text-3xl font-light text-text-main font-display">₹{product.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="w-full h-px bg-gray-200"></div>
            <p className="text-text-muted font-light leading-relaxed text-lg">
              An embodiment of celestial elegance. The Aurora Pendant features a brilliant-cut VVS1 diamond set in our signature 18k solid gold. Designed to catch light from every angle, this piece is a timeless addition to any collection.
            </p>
            <div className="flex flex-col gap-8 pt-2">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-text-main">Metal Tone</span>
                <div className="flex gap-4">
                  <button className="group flex-1 py-4 px-4 border border-primary bg-primary/5 text-text-main text-sm transition-all flex flex-col items-center gap-2 relative overflow-hidden">
                    <div className="size-4 rounded-full bg-[#E5C95D] shadow-sm mb-1"></div>
                    <span className="font-medium relative z-10">Yellow Gold</span>
                  </button>
                  <button className="group flex-1 py-4 px-4 border border-gray-200 hover:border-text-muted bg-white text-text-muted hover:text-text-main text-sm transition-all flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-[#E5E5E5] shadow-sm mb-1 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <span className="font-medium">White Gold</span>
                  </button>
                  <button className="group flex-1 py-4 px-4 border border-gray-200 hover:border-text-muted bg-white text-text-muted hover:text-text-main text-sm transition-all flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-[#E5B5A5] shadow-sm mb-1 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <span className="font-medium">Rose Gold</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-main">Chain Length</span>
                  <button className="text-xs text-text-muted underline decoration-text-muted/30 hover:text-primary transition-colors">Size Guide</button>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 px-4 border border-gray-200 hover:border-text-muted bg-white text-text-muted hover:text-text-main font-medium text-sm transition-all">16"</button>
                  <button className="flex-1 py-3 px-4 border border-primary bg-primary/5 text-text-main font-medium text-sm transition-all">18"</button>
                  <button className="flex-1 py-3 px-4 border border-gray-200 hover:border-text-muted bg-white text-text-muted hover:text-text-main font-medium text-sm transition-all">20"</button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <button className="flex-[3] bg-text-main hover:bg-primary text-white font-medium text-lg py-4 px-8 transition-colors duration-300 shadow-xl shadow-gray-200">
                Add to Bag
              </button>
              <button className="w-14 flex items-center justify-center border border-gray-200 hover:border-text-main transition-colors duration-300 bg-white">
                <span className="material-symbols-outlined text-text-main text-[24px]">favorite_border</span>
              </button>
            </div>
            <div className="flex justify-between border-t border-b border-gray-200 py-5 mt-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-light text-[22px]">verified</span>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Authenticity<br/>Certified</span>
              </div>
              <div className="w-px bg-gray-200 h-8 my-auto"></div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-light text-[22px]">local_shipping</span>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Free Secure<br/>Shipping</span>
              </div>
               <div className="w-px bg-gray-200 h-8 my-auto"></div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary font-light text-[22px]">shield</span>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">Lifetime<br/>Warranty</span>
              </div>
            </div>
             <div className="divide-y divide-gray-200">
              <details className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between font-display text-xl text-text-main list-none hover:text-primary transition-colors">
                  <span>Material & Care</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-4 text-base text-text-muted leading-relaxed font-light">
                  <p>Crafted from solid 18k gold that will not oxidize or discolor. Clean with the provided soft cloth and warm water. Avoid direct contact with perfume.</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1 text-sm marker:text-primary">
                    <li>Weight: 4.5g</li>
                    <li>Gemstone: VVS1 Diamond (0.25ct)</li>
                    <li>Clasp: Lobster Clasp</li>
                  </ul>
                </div>
              </details>
              <details className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between font-display text-xl text-text-main list-none hover:text-primary transition-colors">
                  <span>Shipping & Returns</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-4 text-base text-text-muted leading-relaxed font-light">
                  <p>Free insured shipping on all orders. Returns are accepted within 30 days of purchase in original condition.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <section id="reviews" className="mt-32 max-w-[1000px] mx-auto bg-surface-light py-16 px-8 lg:px-16">
        <h3 className="text-3xl font-display font-medium text-text-main mb-10 text-center">Customer Reviews</h3>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center md:border-r border-gray-200 md:pr-12">
            <p className="text-text-main text-6xl font-display">4.9</p>
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_,i) => <span key={i} className="material-symbols-outlined fill-1 text-[20px]">star</span>)}
            </div>
            <p className="text-text-muted text-sm mt-2">Based on 124 reviews</p>
          </div>
          <div className="flex-1 w-full max-w-md">
             <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-4">
                {[
                    {star: 5, pct: '87%'},
                    {star: 4, pct: '10%'},
                    {star: 3, pct: '2%'},
                    {star: 2, pct: '1%'},
                    {star: 1, pct: '0%'}
                ].map((row) => (
                    <React.Fragment key={row.star}>
                         <p className="text-text-main text-sm font-medium">{row.star}</p>
                        <div className="flex h-1.5 w-full overflow-hidden bg-gray-200 mx-4">
                            <div className="bg-primary" style={{width: row.pct}}></div>
                        </div>
                        <p className="text-text-muted text-xs text-right">{row.pct}</p>
                    </React.Fragment>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="mt-32 mb-20">
        <div className="flex items-end justify-between mb-10 px-4 md:px-0">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Curated For You</span>
            <h3 className="text-3xl font-display text-text-main">Complete the Look</h3>
          </div>
          <div className="flex gap-3">
             <button className="flex items-center justify-center w-12 h-12 border border-gray-200 text-text-main hover:bg-text-main hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
             </button>
             <button className="flex items-center justify-center w-12 h-12 border border-gray-200 text-text-main hover:bg-text-main hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
             </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory">
            {relatedProducts.map(p => (
                 <Link to={`/product/${p.id}`} key={p.id} className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[3/4] mb-5">
                        <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
                             style={{backgroundImage: `url("${p.image}")`}}>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <button className="bg-white text-text-main px-8 py-3 font-medium text-sm shadow-lg hover:bg-primary hover:text-white transition-colors uppercase tracking-wider">Quick View</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="text-text-main font-display text-xl mb-1">{p.name}</h4>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-2">{p.purity}</p>
                        <p className="text-text-main font-medium">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                 </Link>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;