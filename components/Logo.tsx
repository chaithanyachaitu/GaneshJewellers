import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mb-1">
         <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C5A059"/>
                <stop offset="1" stopColor="#9E7E3C"/>
            </linearGradient>
         </defs>
         {/* Decorative Circle */}
         <circle cx="50" cy="50" r="48" stroke="url(#gold)" strokeWidth="1.5" strokeDasharray="4 2"/>
         <circle cx="50" cy="50" r="42" stroke="url(#gold)" strokeWidth="0.5"/>
         
         {/* Ganesha Silhouette */}
         <g transform="translate(20, 20) scale(0.6)">
            {/* Crown */}
            <path d="M30 10 L50 0 L70 10 L70 20 L30 20 Z" fill="url(#gold)"/>
            <path d="M50 0 V20" stroke="#FFF" strokeWidth="2"/>
            
            {/* Head & Ears */}
            <path d="M20 20 Q0 30 10 50 Q20 60 30 50 L30 30" fill="url(#gold)"/>
            <path d="M80 20 Q100 30 90 50 Q80 60 70 50 L70 30" fill="url(#gold)"/>
            <path d="M30 20 C30 20 30 60 50 60 C70 60 70 20 70 20" fill="url(#gold)"/>
            
            {/* Trunk */}
            <path d="M42 50 C42 50 45 80 65 75" stroke="url(#gold)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            
            {/* Eyes/Tilak */}
            <path d="M50 25 V40" stroke="#FFF" strokeWidth="3"/>
            <circle cx="40" cy="45" r="2" fill="#FFF"/>
            <circle cx="60" cy="45" r="2" fill="#FFF"/>
         </g>
      </svg>
      <div className="text-center">
        <h1 className="font-serif font-bold text-lg md:text-xl leading-tight text-text-main tracking-wide uppercase">Ganesh Jewellers</h1>
        <p className="font-sans text-[9px] md:text-[10px] font-bold text-primary-dark tracking-[0.15em] mt-0.5 uppercase border-t border-primary/30 pt-0.5 inline-block">25 Years of Legacy and Trust</p>
      </div>
    </div>
  );
};

export default Logo;