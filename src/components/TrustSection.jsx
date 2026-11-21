import React from 'react';
import { TRUST_PILLARS } from '../data/products';
import { 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Truck, 
  Award, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export default function TrustSection({ onOpenCertificate }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    RefreshCw: RefreshCw,
    Truck: Truck,
    Award: Award
  };

  return (
    <section className="py-14 sm:py-18 bg-[#FBF9F5] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase font-bold tracking-widest text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            The PMS Silver Standard
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
            Why 100,000+ Women Trust PMS Silver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We bridge the gap between expensive gold jewellery and fleeting fashion accessories with certified 925 fine sterling silver.
          </p>
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-amber-100 text-slate-800 group-hover:text-amber-800 flex items-center justify-center transition-colors mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-slate-900">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-[10px] font-bold text-emerald-700">
                  <Check className="w-3.5 h-3.5 mr-1" />
                  <span>Guaranteed Quality</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Hallmark & Anti-Tarnish Spotlight Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 text-xs px-3 py-1 rounded-full mb-3 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Anti-Tarnish Rhodium Sealed</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Does Pure Silver Ever Tarnish? Not on Our Watch.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Raw silver naturally oxidizes when reacting with sulfur in the air. That’s why every single piece of PMS Silver jewellery is electroplated with real precious <strong>Rhodium</strong> (a metal 4x rarer than platinum) and sealed with a hypoallergenic transparent e-shield. Wear it daily with total confidence.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenCertificate}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold py-3 px-5 rounded-2xl flex items-center justify-center space-x-2 transition shadow-md"
              >
                <span>View BIS Hallmark Card</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                100% Nickel-free & Lead-free
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
