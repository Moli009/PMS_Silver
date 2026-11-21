import React from 'react';
import { Sparkles, Shield, ArrowRight, Award, Clock, Heart, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExploreClick, onBudgetClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EB] to-[#FAF8F5] pt-6 pb-12 sm:pb-16 lg:pt-10 lg:pb-20 border-b border-stone-200/60">
      
      {/* Decorative luxury background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-stone-300/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-800 shadow-xs mb-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="tracking-wide">Inspired by everyday elegance • 925 Pure Silver</span>
              <span className="text-amber-700 font-bold ml-1">Festive Drop</span>
            </div>

            {/* Main Luxury Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15]">
              Everyday Fine Jewellery, <br className="hidden sm:inline" />
              <span className="italic font-normal text-stone-700">crafted to celebrate</span>{' '}
              <span className="relative inline-block text-slate-900">
                You.
                <svg className="absolute -bottom-1.5 left-0 w-full text-amber-500/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-3 sm:mt-5 text-xs sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore India’s premium 925 sterling silver & 18K vermeil collection. Certified BIS Hallmarked, anti-tarnish rhodium sealed, designed for daily wear.
            </p>

            {/* Direct CTA Buttons */}
            <div className="mt-5 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
              <button
                onClick={onExploreClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Bestsellers</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </button>

              <button
                onClick={() => onBudgetClick('under-1499')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 bg-white hover:bg-stone-50 text-slate-800 border border-stone-300 font-medium text-xs sm:text-base px-3 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-2xs hover:shadow transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Under ₹1,499</span>
              </button>
            </div>

            {/* Trust Badges Bar directly below CTA */}
            <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">BIS 925</p>
                  <p className="text-[11px] text-slate-500">Hallmarked Silver</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Anti-Tarnish</p>
                  <p className="text-[11px] text-slate-500">Rhodium E-Coat</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">30-Day</p>
                  <p className="text-[11px] text-slate-500">Easy Returns</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">24-48h</p>
                  <p className="text-[11px] text-slate-500">Express Dispatch</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Collage (Minous / GIVA aesthetics) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Lifestyle Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="PMS Silver Jewellery Showcase"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating On-Image Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                        Signature Collection
                      </span>
                      <h4 className="font-serif font-bold text-slate-900 text-sm mt-1">
                        Eternal Sparkle Solitaire 925
                      </h4>
                      <p className="text-xs text-slate-500">From ₹1,899 • Free Velvet Box</p>
                    </div>
                    <button 
                      onClick={onExploreClick}
                      className="bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl hover:bg-slate-800 transition"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-stone-100 flex items-center space-x-2.5 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 font-serif font-bold text-base">
                  925
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Hallmarked Pure</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">100% Certified Silver</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-stone-100 items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100,000+ Happy Women</p>
                  <p className="text-[10px] text-slate-500">Rated 4.9 ★ by Verified Buyers</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
