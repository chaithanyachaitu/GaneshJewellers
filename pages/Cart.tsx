import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 lg:py-12">
       <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
        <Link className="hover:text-primary transition-colors" to="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">Shopping Bag</span>
       </nav>

       <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col gap-8">
             <div className="flex justify-between items-baseline border-b border-gray-200 pb-4">
                <h1 className="text-3xl font-light text-text-main tracking-tight">Your Shopping Bag <span className="text-lg text-text-muted font-normal ml-2">(2 Items)</span></h1>
             </div>

             {/* Cart Item 1 */}
             <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="bg-gray-50 bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[150px] shrink-0" 
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBI5Xg7nruaIZMxodclS_RVq3pJzIsX9R2VPOsGm-mRJaj34LJ8JO8xH8bSMNgiKiDsbYn3mAnp_YqnglBvkJbuDM0L1-ijKuHHLCfgQz91MY0RNaqG4tbYso0qCcqDSeyMg2xki_CouKK8rsBYAepeuqmIAZgq5_FJ9dYlwIORBY6mJBO_rL0bWWCptzUX19wdkOqHv5rcMZYF6bJoR2uPIUaK9fdHSRWDvZwNKR9xtY6Rltt8ybnxwgrp0jzn5uAfS8ekWJJ7Du8")'}}>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                   <div>
                       <div className="flex justify-between items-start gap-4">
                           <h3 className="text-xl font-semibold text-primary leading-tight">Royal Temple Necklace</h3>
                           <button aria-label="Remove item" className="text-text-muted hover:text-red-500 transition-colors p-1">
                               <span className="material-symbols-outlined text-[20px]">delete</span>
                           </button>
                       </div>
                       <div className="flex flex-wrap gap-2 mt-3">
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">22k Gold</span>
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">45g</span>
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Size 18</span>
                       </div>
                   </div>
                   <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
                       <div className="flex items-center gap-6">
                           <div className="flex items-center border border-gray-200 rounded-md">
                               <button className="px-3 py-1 hover:bg-gray-50 text-text-main transition-colors text-lg">-</button>
                               <span className="w-8 text-center text-sm font-medium">1</span>
                               <button className="px-3 py-1 hover:bg-gray-50 text-text-main transition-colors text-lg">+</button>
                           </div>
                           <button className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                               <span className="material-symbols-outlined text-[18px]">favorite_border</span>
                               Save
                           </button>
                       </div>
                       <p className="text-xl font-bold text-primary">₹1,25,000</p>
                   </div>
                </div>
             </div>

              {/* Cart Item 2 */}
             <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="bg-gray-50 bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[150px] shrink-0" 
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCThjhL3cT5NioYL-kSwQ3vIzjsV6SyeCJNVuTfL1jZGyWdI6axyQHCyOr2xNG_VpALkEjq7C8T3inw_8IHe7bNN0m5-uSjJz5GXrtxes3WAAjRgoWUobmLghVcPebmC3PrkICn3q7T1wng2eb712A6PJRHfNYAAhXGQsdBDC_3bJ8KU8qUOxtpN2VTW5Zo2mAOG2Me7u6JxfiSBkBloM2niWZdaUS_AdZQl2-0_oEv7uZn1HFYYqyt_e_xHtxC2wdGc-m4gOsKiNw")'}}>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                   <div>
                       <div className="flex justify-between items-start gap-4">
                           <h3 className="text-xl font-semibold text-primary leading-tight">Diamond Cut Gold Bangles</h3>
                           <button aria-label="Remove item" className="text-text-muted hover:text-red-500 transition-colors p-1">
                               <span className="material-symbols-outlined text-[20px]">delete</span>
                           </button>
                       </div>
                       <div className="flex flex-wrap gap-2 mt-3">
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">22k Gold</span>
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">24g</span>
                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Size 2.4</span>
                       </div>
                   </div>
                   <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
                       <div className="flex items-center gap-6">
                           <div className="flex items-center border border-gray-200 rounded-md">
                               <button className="px-3 py-1 hover:bg-gray-50 text-text-main transition-colors text-lg">-</button>
                               <span className="w-8 text-center text-sm font-medium">1</span>
                               <button className="px-3 py-1 hover:bg-gray-50 text-text-main transition-colors text-lg">+</button>
                           </div>
                           <button className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                               <span className="material-symbols-outlined text-[18px]">favorite_border</span>
                               Save
                           </button>
                       </div>
                       <p className="text-xl font-bold text-primary">₹89,000</p>
                   </div>
                </div>
             </div>
             
             <div className="mt-2 p-5 rounded-lg bg-yellow-50/50 border border-primary/20 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-full text-primary shadow-sm border border-primary/10">
                    <span className="material-symbols-outlined text-[20px] block">local_offer</span>
                </div>
                <div>
                    <p className="text-text-main font-semibold">Available Offers</p>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">
                        Get 5% instant discount on HDFC Credit Cards. Use code 
                        <span className="font-mono text-primary font-bold bg-white px-2 py-0.5 rounded border border-primary/20 text-xs ml-1 tracking-wider">GOLD5</span>
                    </p>
                </div>
             </div>

             <div className="mt-8">
                <Link to="/products" className="inline-flex items-center gap-2 text-text-main hover:text-primary font-medium transition-colors group">
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Continue Shopping
                </Link>
             </div>
          </div>

          <div className="w-full lg:w-[380px] shrink-0">
             <div className="sticky top-28 bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h2 className="text-xl font-bold text-text-main mb-8 border-b border-gray-200 pb-4">Order Summary</h2>
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Subtotal</span>
                      <span className="text-text-main font-medium">₹2,14,000</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Making Charges</span>
                      <span className="text-text-main font-medium">₹15,000</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Estimated Tax</span>
                      <span className="text-text-main font-medium">₹4,500</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Shipping</span>
                      <span className="text-primary font-medium">Free</span>
                   </div>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-6 mb-8">
                   <div className="flex justify-between items-end">
                      <span className="text-text-main font-bold">Total</span>
                      <div className="text-right">
                         <span className="text-2xl font-bold text-primary block leading-none">₹2,33,500</span>
                         <span className="text-[10px] text-text-muted font-medium mt-1 block uppercase tracking-wide">Inclusive of all taxes</span>
                      </div>
                   </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2 group">
                   <span className="material-symbols-outlined group-hover:scale-110 transition-transform">lock</span>
                   Proceed to Checkout
                </button>
                <div className="mt-8 grid grid-cols-3 gap-2 border-t border-gray-200 pt-6">
                    <div className="flex flex-col items-center gap-2 text-center group">
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">verified_user</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Secure</span>
                    </div>
                     <div className="flex flex-col items-center gap-2 text-center group">
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">workspace_premium</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Certified</span>
                    </div>
                     <div className="flex flex-col items-center gap-2 text-center group">
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">local_shipping</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Insured</span>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </main>
  );
};

export default Cart;