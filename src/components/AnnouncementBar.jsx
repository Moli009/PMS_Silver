import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck, Gift, ChevronRight } from 'lucide-react';

export default function AnnouncementBar({ onOpenOffer }) {
  const announcements = [
    { text: "✨ FESTIVE OFFER: Flat ₹500 OFF on orders above ₹2,999 | Code: SPARKLE500", highlight: "SPARKLE500" },
    { text: "🚚 FREE Insured Express Shipping across India (26,000+ Pincodes)", highlight: "FREE" },
    { text: "🎁 Free Signature Velvet Box & Certificate with Every Order", highlight: "Free Velvet Box" },
    { text: "💎 Certified BIS 925 Sterling Silver | 6-Month Anti-Tarnish Warranty", highlight: "BIS 925" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-xs py-2.5 px-4 tracking-wide relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left trust nudge - Desktop */}
        <div className="hidden md:flex items-center space-x-2 text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium">100% Certified 925 Silver</span>
        </div>

        {/* Center Rotating Banner */}
        <div className="flex-1 text-center transition-all duration-500 ease-in-out flex items-center justify-center space-x-1.5">
          <span className="inline-block transition-opacity duration-300">
            {announcements[currentIndex].text}
          </span>
        </div>

        {/* Right Offer Pill */}
        <div className="hidden sm:flex items-center space-x-3 text-slate-300">
          <button 
            onClick={onOpenOffer}
            className="flex items-center space-x-1 text-amber-300 hover:text-amber-200 font-medium transition cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Gift</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
