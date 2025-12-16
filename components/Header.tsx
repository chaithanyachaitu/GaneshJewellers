import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-surface-highlight bg-white/95 backdrop-blur-sm px-4 md:px-10 py-3 shadow-sm transition-all">
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center text-text-main hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center gap-9 ml-6 border-l border-surface-highlight pl-8 h-10">
          <Link to="/products" className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors tracking-wide uppercase">Gold Collection</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
        <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-surface-highlight bg-background-off-white hover:border-primary/30 transition-colors">
            <div className="text-text-muted flex border-none bg-transparent items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-text-main focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-text-muted px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search" />
          </div>
        </label>
        <div className="flex gap-3">
          <button onClick={() => navigate('/cart')} className="relative flex items-center justify-center overflow-hidden rounded-full size-10 bg-background-off-white border border-surface-highlight text-text-main hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="absolute top-0 right-0 size-3 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="flex items-center justify-center overflow-hidden rounded-full size-10 bg-background-off-white border border-surface-highlight text-text-main hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;