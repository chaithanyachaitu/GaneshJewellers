import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-highlight pt-16 pb-8 mt-8 bg-background-off-white px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div className="col-span-1">
            <div className="flex flex-col items-start gap-2 mb-6 text-text-main">
              <Logo />
            </div>
            <p className="text-text-muted text-sm leading-relaxed mt-4 max-w-xs">
              Crafting timeless elegance since 2000. Certified authentic gold jewellery for the modern generation. 
              <br/>
              <span className="italic mt-2 block text-primary">"Purity is our Promise"</span>
            </p>
          </div>
          <div>
            <h4 className="text-text-main font-bold mb-6 font-serif text-lg">Shop</h4>
            <ul className="flex flex-col gap-3 text-text-muted text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">All Jewellery</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bridal Sets</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Gifts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-main font-bold mb-6 font-serif text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-text-muted text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">location_on</span>
                <span>
                  PV complex, Chinna Bazar,<br/>
                  Nellore, Andhra Pradesh 524002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0">call</span>
                <a 
                  href="https://wa.me/919652795955" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  +91 9652795955
                  <span className="text-[10px] bg-[#25D366]/10 text-[#25D366] px-1.5 py-0.5 rounded border border-[#25D366]/20 font-bold uppercase tracking-wider">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary shrink-0">mail</span>
                <a href="mailto:ganeshjewellers2k@gmail.com" className="hover:text-primary transition-colors">
                  ganeshjewellers2k@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface-highlight gap-4">
          <p className="text-text-muted text-xs">© 2024 Ganesh Jewellers. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-text-muted hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">public</span></a>
            <a className="text-text-muted hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">share</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;