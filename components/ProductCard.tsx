import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="flex flex-col group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-surface-light mb-4 shadow-sm group-hover:shadow-md transition-shadow">
        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" 
             style={{ backgroundImage: `url("${product.image}")` }}>
        </div>
        
        {product.isNew && (
            <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">NEW</div>
        )}
        {product.isBestSeller && (
             <div className="absolute top-3 left-3 bg-gray-900 text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-md px-3 py-1">Best Seller</div>
        )}
        {product.isLowStock && (
             <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-md px-3 py-1">Low Stock</div>
        )}

        <button className="absolute top-3 right-3 p-2 rounded-full bg-white text-text-muted hover:text-red-500 hover:shadow-md transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 z-10">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center z-10">
          <button className="bg-white text-text-main text-xs font-bold uppercase py-2 px-6 shadow-lg hover:bg-primary hover:text-white transition-colors rounded-sm w-full">Quick Add</button>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center text-center">
        <h3 className="text-text-main font-medium text-lg font-serif truncate w-full group-hover:text-primary transition-colors">{product.name}</h3>
        {(product.purity || product.weight) && (
            <p className="text-text-muted text-xs uppercase tracking-wide">{product.purity} {product.purity && product.weight ? '•' : ''} {product.weight}</p>
        )}
        <span className="text-text-main font-bold mt-1 text-lg">₹{product.price.toLocaleString('en-IN')}</span>
      </div>
    </Link>
  );
};

export default ProductCard;