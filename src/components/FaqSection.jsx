import React, { useState } from 'react';
import { FAQ_DATA } from '../data/products';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-14 sm:py-18 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 bg-white border border-stone-200 px-3 py-1 rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Everything you need to know about our 925 sterling silver, hallmarking, and care.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-medium text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-700' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
