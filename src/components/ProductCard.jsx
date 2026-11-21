import React from 'react';
import { Star, Heart, ShoppingBag, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const finishColors = {
    silver: 'bg-slate-300 border-slate-400',
    rosegold: 'bg-rose-300 border-rose-400',
    gold: 'bg-amber-300 border-amber-400',
    oxidised: 'bg-slate-600 border-slate-700'
  };

  const finishNames = {
    silver: '925 Silver',
    rosegold: '18K Rose Gold',
    gold: '18K Gold Plated',
    oxidised: 'Antique Oxidised'
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col relative">
      
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onQuickView(product)}>
        
        {/* Main Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Secondary Image on Hover if available */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="w-full h-full object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            loading="lazy"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-300 px-2.5 py-0.5 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-500 text-white px-2 py-0.5 rounded-full shadow-xs">
              {product.discount}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10 cursor-pointer shadow-sm ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 scale-105'
              : 'bg-white/90 backdrop-blur-xs text-slate-500 hover:text-rose-600 hover:scale-110'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Fast Dispatch Strip */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] bg-white/90 backdrop-blur-xs text-emerald-800 font-semibold px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-2xs">
            <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
            <span>{product.dispatchTime.includes('Today') ? 'Dispatches Today' : 'Express Ship'}</span>
          </span>
          <span className="text-[10px] bg-slate-900/80 backdrop-blur-xs text-slate-100 font-medium px-1.5 py-0.5 rounded-md flex items-center space-x-0.5">
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            <span>925</span>
          </span>
        </div>

        {/* Hover Quick Action Overlay for Desktop */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center gap-2 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white/95 backdrop-blur-sm hover:bg-white text-slate-900 text-xs font-semibold py-2 px-3 rounded-xl shadow-md flex items-center justify-center space-x-1.5 transition"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Finish & Rating row */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center space-x-1.5">
              <span className={`w-2.5 h-2.5 rounded-full border ${finishColors[product.finish]}`} />
              <span className="text-[11px] text-slate-500 font-medium">
                {finishNames[product.finish]}
              </span>
            </div>

            <div className="flex items-center space-x-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h4 
            onClick={() => onQuickView(product)}
            className="font-medium text-xs sm:text-sm text-slate-900 line-clamp-1 hover:text-amber-800 transition cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h4>

          {/* Description snippet */}
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart button */}
        <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif font-bold text-base sm:text-lg text-slate-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[9px] text-emerald-700 font-medium tracking-tight">
              Inclusive of all taxes
            </p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-slate-900 hover:bg-amber-600 text-white p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-xs cursor-pointer"
            title="Add to bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
}
