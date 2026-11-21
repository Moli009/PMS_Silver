import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Clock, 
  ShieldCheck, 
  RefreshCw,
  ShoppingBag,
  Star
} from 'lucide-react';

export default function Hero({ onExploreClick, onBudgetClick, onSelectCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 'slide-1',
      productId: 'pms-001',
      category: 'rings',
      badge: 'Bestseller • 925 Pure Silver',
      badgeColor: 'bg-amber-400 text-slate-950',
      title: 'Solitaire Sparkle Ring',
      subtitle: '1.5 Carat Swiss Zircon set in 925 sterling silver with protective anti-tarnish rhodium coating.',
      price: 1899,
      originalPrice: 3299,
      discount: '42% OFF',
      rating: 4.9,
      reviews: 342,
      ctaText: 'Shop Rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-slate-950 via-slate-900/80 to-transparent'
    },
    {
      id: 'slide-2',
      productId: 'pms-002',
      category: 'necklaces',
      badge: 'Trending • 18K Rose Gold',
      badgeColor: 'bg-rose-500 text-white',
      title: 'Falling Dewdrop Pendant',
      subtitle: 'Micro-pavé zircon halo suspended on Italian diamond-cut link chain. Dipped in 18K rose gold vermeil.',
      price: 2299,
      originalPrice: 4199,
      discount: '45% OFF',
      rating: 4.8,
      reviews: 218,
      ctaText: 'Shop Pendants',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-stone-950 via-stone-900/80 to-transparent'
    },
    {
      id: 'slide-3',
      productId: 'pms-005',
      category: 'mangalsutras',
      badge: '925 Sacred Collection',
      badgeColor: 'bg-emerald-500 text-white',
      title: 'Daily Grace Silver Mangalsutra',
      subtitle: 'Pure 925 silver solitaire centerpiece laced with certified natural black onyx beads. Featherlight daily elegance.',
      price: 2499,
      originalPrice: 4299,
      discount: '42% OFF',
      rating: 4.95,
      reviews: 512,
      ctaText: 'Shop Mangalsutra',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-slate-950 via-slate-900/80 to-transparent'
    },
    {
      id: 'slide-4',
      productId: 'pms-012',
      category: 'gifting',
      badge: 'Curated Gift Box • LED Keepsake',
      badgeColor: 'bg-amber-500 text-slate-950',
      title: 'Eternal Sparkle Luxury Gift Set',
      subtitle: 'Complete luxury set: Solitaire Pendant, matching Halo Studs, Luxury Velvet LED-lit Box & Authenticity Card.',
      price: 3999,
      originalPrice: 6999,
      discount: '43% OFF',
      rating: 4.96,
      reviews: 388,
      ctaText: 'Shop Gift Sets',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
      accent: 'from-stone-950 via-stone-900/80 to-transparent'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe for Phones
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext(); // Swipe left -> next slide
    } else if (diff < -50) {
      handlePrev(); // Swipe right -> prev slide
    }
    touchStartX.current = null;
  };

  const handleSlideClick = (slide) => {
    if (onSelectCategory) {
      onSelectCategory(slide.category);
    } else if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <section 
      className="relative bg-slate-950 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Product Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient Overlay for crystal clear readability on both mobile & desktop */}
              <div className={`absolute inset-0 bg-gradient-to-t ${slide.accent} sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/60 sm:to-transparent`} />

              {/* Content Overlay */}
              <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end sm:justify-center pb-12 sm:pb-0 z-20">
                <div className="max-w-xl text-left text-white">
                  
                  {/* Badge */}
                  <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${slide.badgeColor}`}>
                      {slide.badge}
                    </span>
                    <div className="flex items-center space-x-1 text-amber-300 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      <span>{slide.rating}</span>
                      <span className="text-slate-300 text-[10px]">({slide.reviews})</span>
                    </div>
                  </div>

                  {/* Slide Title */}
                  <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed max-w-md">
                    {slide.subtitle}
                  </p>

                  {/* Price Block */}
                  <div className="mt-3 flex items-baseline space-x-2">
                    <span className="font-serif text-xl sm:text-3xl font-bold text-amber-300">
                      ₹{slide.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 line-through">
                      ₹{slide.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-800/80 px-2 py-0.5 rounded-full">
                      {slide.discount}
                    </span>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="mt-4 sm:mt-5 flex items-center space-x-2.5">
                    <button
                      onClick={() => handleSlideClick(slide)}
                      className="bg-white hover:bg-stone-100 text-slate-950 font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg flex items-center space-x-1.5 transition-all transform active:scale-95 cursor-pointer"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                    </button>

                    <button
                      onClick={onExploreClick}
                      className="bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-white border border-white/20 text-xs sm:text-sm font-medium px-4 py-2.5 sm:py-3 rounded-full transition cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Visible on Tablets & Desktops) */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/20 items-center justify-center transition shadow-lg cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/20 items-center justify-center transition shadow-lg cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicator Dots / Progress (Mobile & Desktop) */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-30 flex items-center justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide 
                ? 'w-7 sm:w-8 h-2 bg-amber-400 shadow-md' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slim Trust Strip Beneath the 4 Slides */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-2.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300 text-[10px] sm:text-xs">
          <div className="flex items-center space-x-1.5 justify-center sm:justify-start">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span><strong>BIS 925</strong> Certified Silver</span>
          </div>

          <div className="flex items-center space-x-1.5 justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span><strong>Anti-Tarnish</strong> Rhodium Coat</span>
          </div>

          <div className="flex items-center space-x-1.5 justify-center sm:justify-start">
            <RefreshCw className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span><strong>30-Day</strong> Doorstep Returns</span>
          </div>

          <div className="flex items-center space-x-1.5 justify-center sm:justify-start">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span><strong>24-48h</strong> Free Express Delivery</span>
          </div>
        </div>
      </div>

    </section>
  );
}
