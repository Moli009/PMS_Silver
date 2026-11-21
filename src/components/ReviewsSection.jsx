import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full w-fit mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5 Overall Rating (12,400+ Reviews)</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Loved by Real Women Across India
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Read uncensored feedback from verified buyers who wear PMS Silver everyday
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Customer Purchases</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-stone-50/70 p-6 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-stone-300"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-1">
                      <span>{review.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" />
                    </h4>
                    <p className="text-[10px] text-slate-500">{review.city} • Verified Buyer</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
