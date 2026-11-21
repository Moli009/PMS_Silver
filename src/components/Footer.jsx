import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  RefreshCw, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight,
  Check
} from 'lucide-react';

export default function Footer({ onSelectCategory, onOpenCertificate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-slate-900 to-stone-900 rounded-3xl p-6 sm:p-8 border border-slate-800 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-full">
                PMS Silver Club
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                Get ₹200 OFF on Your First 925 Silver Piece
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Subscribe for private festive drops, secret flash sales, and sterling silver care tips delivered right to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 p-3.5 rounded-2xl text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Welcome to PMS Silver! Check your email for coupon code <strong>PMS200</strong>.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 text-xs px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-5 py-3 rounded-xl transition flex items-center space-x-1 shrink-0"
                  >
                    <span>Claim ₹200</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-serif text-lg font-bold">
                P
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  PMS SILVER
                </span>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Everyday Fine 925 Sterling Jewellery
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs pr-4">
              PMS Silver is committed to democratizing luxury jewellery in India. Handcrafted in genuine 925 sterling silver with anti-tarnish rhodium protection, we create heirloom pieces designed for daily wear, gifting, and life's sweetest milestones.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <button 
                onClick={onOpenCertificate} 
                className="hover:text-amber-300 transition flex items-center space-x-1 underline text-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>BIS 925 Hallmark Verified</span>
              </button>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onSelectCategory('rings')} className="hover:text-white transition">925 Silver Rings</button></li>
              <li><button onClick={() => onSelectCategory('earrings')} className="hover:text-white transition">Earrings & Huggies</button></li>
              <li><button onClick={() => onSelectCategory('necklaces')} className="hover:text-white transition">Pendants & Necklaces</button></li>
              <li><button onClick={() => onSelectCategory('bracelets')} className="hover:text-white transition">Bracelets & Cuffs</button></li>
              <li><button onClick={() => onSelectCategory('mangalsutras')} className="hover:text-white transition">Silver Mangalsutras</button></li>
              <li><button onClick={() => onSelectCategory('men')} className="hover:text-white transition">Men's Chains & Kadas</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Customer Care
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#track" onClick={(e) => { e.preventDefault(); alert("Track your order anytime using your PMS Order ID!"); }} className="hover:text-white transition">Track Order</a></li>
              <li><a href="#returns" onClick={(e) => { e.preventDefault(); alert("30-Day Easy Returns with complimentary doorstep pickup!"); }} className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#warranty" onClick={(e) => { e.preventDefault(); alert("6-Month Comprehensive Anti-Tarnish Warranty included with every purchase."); }} className="hover:text-white transition">Warranty & Replating</a></li>
              <li><button onClick={onOpenCertificate} className="hover:text-white transition text-left">BIS Hallmark Authenticity</button></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs & Silver Care</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 98765 43210 (10am - 7pm)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>care@pmssilver.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>

            <div className="mt-4 flex items-center space-x-3 text-slate-400">
              <span className="p-2 rounded-full bg-slate-900 hover:text-white transition cursor-pointer"><Instagram className="w-4 h-4" /></span>
              <span className="p-2 rounded-full bg-slate-900 hover:text-white transition cursor-pointer"><Facebook className="w-4 h-4" /></span>
              <span className="p-2 rounded-full bg-slate-900 hover:text-white transition cursor-pointer"><Twitter className="w-4 h-4" /></span>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Payment methods & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PMS Silver Jewels Pvt. Ltd. All rights reserved. Crafted with reference to GIVA & Minous.</p>

          <div className="flex items-center space-x-2 text-[10px] text-slate-400">
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">UPI</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">VISA</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">MASTERCARD</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">RUPAY</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">CASH ON DELIVERY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
