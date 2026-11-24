import React from 'react';
import { X, ShieldCheck, Award, CheckCircle, Sparkles, Printer } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-lg transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border-4 border-amber-400/40 p-6 sm:p-8">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-600 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Certificate Inner Frame */}
          <div className="border-2 border-stone-300 rounded-2xl p-6 sm:p-7 relative bg-[#FAF9F5]">
            
            {/* Watermark Logo */}
            <div className="text-center pb-4 border-b border-stone-200">
              <img 
                src="/pms-logo.jpg" 
                alt="PMS Silver Trend Official Seal" 
                className="h-16 sm:h-20 w-auto object-contain mx-auto mb-2.5 drop-shadow-sm rounded-lg"
              />
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-wider">
                PMS SILVER TREND
              </h3>
              <p className="text-[10px] tracking-[0.22em] uppercase text-stone-500 font-semibold mt-0.5">
                Lala Pradeep Kumar Mohit Agarwal Saraf • BIS 925 Hallmark
              </p>
            </div>

            {/* Certificate Body */}
            <div className="py-5 space-y-3.5 text-xs text-slate-700">
              <p className="text-center italic text-stone-600">
                "This guarantees that every piece crafted by PMS Silver conforms to the highest purity standards of 925 Sterling Silver, hallmarked in accordance with Bureau of Indian Standards (BIS)."
              </p>

              <div className="bg-white rounded-xl p-3.5 border border-stone-200 space-y-2 text-[11px]">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Metal Purity:</span>
                  <strong className="text-slate-900 font-bold">92.5% Pure Sterling Silver</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Hallmarking Standard:</span>
                  <strong className="text-emerald-700 font-bold">BIS 925 Certified & Laser Stamped</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Protective Coating:</span>
                  <strong className="text-slate-900">Anti-Tarnish Electrophoretic Rhodium</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Skin Safety:</span>
                  <strong className="text-emerald-700 font-bold">100% Nickel-Free & Hypoallergenic</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Warranty Coverage:</span>
                  <strong className="text-slate-900">6-Month Free Replating Assistance</strong>
                </div>
              </div>

              {/* Hologram seal stamp */}
              <div className="pt-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">Quality Assured</p>
                    <p className="text-[9px] text-stone-500">Assay Laboratory Tested</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-serif italic font-semibold text-slate-800 text-sm">PMS Silver Lab</p>
                  <p className="text-[9px] text-stone-500">Authorized Signatory</p>
                </div>
              </div>
            </div>

            {/* Print / Save */}
            <div className="mt-2 pt-3 border-t border-stone-200 flex justify-center">
              <button
                onClick={() => window.print()}
                className="text-xs text-slate-600 hover:text-slate-900 flex items-center space-x-1.5 underline"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print or Save Certificate</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
