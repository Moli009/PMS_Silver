# PMS Silver — Everyday Fine 925 Sterling Silver Jewellery

A luxury, high-converting D2C jewellery e-commerce platform built in reference to **[GIVA](https://www.giva.co/)** and **[Minous](https://www.minous.in/)**.

---

## 🌟 Key Features & Reference Highlights

### 1. Curated Inspired Collections (Minous & GIVA Style)
- **Shop by Budget (Minous Feature)**:
  - *Under ₹1,499* (Daily Studs, Minis, Dainty Rings)
  - *Under ₹2,499* (Bestselling Pendants, Earrings & Bands)
  - *Under ₹3,999* (Tennis Bracelets, Mangalsutras)
  - *Premium (₹4,000+)* (Solitaires, Curb Chains, Gift Sets)
- **Visual Category Nav (GIVA Style)**:
  - Rings, Earrings, Necklaces & Pendants, Bracelets & Cuffs, Mangalsutras, Payal (Anklets), Men's Silver, Gifting Sets.
- **Metal Finish Customizer**:
  - Pure 925 Silver (High-shine Rhodium)
  - 18K Rose Gold Vermeil
  - 18K Yellow Gold Plated
  - Antique Oxidised Silver

### 2. Trust Signals & Authenticity Assurance
- **BIS 925 Hallmarking Certificate Modal**:
  - Interactive official Certificate of Authenticity viewer with laboratory assay certification, nickel-free declaration, and printable guarantee.
- **Anti-Tarnish Rhodium Protection Callout**:
  - Explains the science of rhodium electroplating and e-shield preventing oxidation and tarnishing.
- **5 Core Trust Pillars**:
  - Certified 925 Silver, Anti-Tarnish Coating, 30-Day Doorstep Returns, Free Insured Shipping, 6-Month Warranty with free replating.

### 3. Shopping Experience & Conversion Drivers
- **Rotating Announcement Bar**:
  - Real-time rotating promotional banners (e.g. `SPARKLE500`, free express delivery, complimentary velvet box).
- **Interactive Pincode Serviceability Lookup**:
  - Instant pincode lookup (e.g., Mumbai, Delhi, Bengaluru, Pune) returning estimated delivery time and Cash on Delivery eligibility.
- **Quick View Modal**:
  - Multi-angle image carousel, ring size picker, live delivery calculator, authentic specifications table, and gift wrap options with custom personalized greeting cards.
- **Interactive Slide-Over Cart Drawer**:
  - Dynamic **Free Gift Progress Bar** (unlocking free silver care cloth and velvet travel pouch upon reaching threshold).
  - Coupon system (`PMS10`, `SPARKLE500`, `GIFT925`).
- **Wishlist Drawer**:
  - Seamless 1-click wishlist toggle with live badge count and "Move to Bag" integration.
- **Instant Live Search (`⌘K`)**:
  - Real-time instant search with quick tags ("Solitaire Ring", "Mangalsutra", "Rose Gold", "Under 1500").
- **Express 2-Step Checkout Simulation**:
  - Address collection, payment options (UPI with cashback, Cards, COD), and celebratory confetti upon order completion with an authentic tracking ID.

---

## 🚀 Getting Started

The project is already pre-configured with React, Vite, Tailwind CSS, and Lucide icons.

### Start the Development Server:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production:
```bash
npm run build
```

---

## 📂 Project Structure

```
PMS_Silver/
├── index.html                   # HTML template with luxury serif and sans typography
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Tailored luxury silver & gold color palettes
├── vite.config.js               # Vite configuration (port 3000)
└── src/
    ├── main.jsx                 # React entrypoint
    ├── index.css                # Global styles, luxury scrollbar & animations
    ├── App.jsx                  # Main application orchestrator
    ├── data/
    │   └── products.js          # Realistic 925 silver catalog, categories, reviews, FAQs
    └── components/
        ├── AnnouncementBar.jsx  # Rotating festive promotions
        ├── Navbar.jsx           # Sticky luxury header, search trigger, cart & wishlist counters
        ├── Hero.jsx             # Visual hero banner with trust badges and CTA
        ├── CategoryPills.jsx    # Visual circular category navigation
        ├── BudgetFilter.jsx     # Minous-inspired "Shop by Budget" selector
        ├── ProductCard.jsx      # Product card with hover zoom, discount badges, wishlist toggle
        ├── ProductDetailModal.jsx # Quick view modal with specs, ring sizes & pincode delivery checker
        ├── CartDrawer.jsx       # Slide-over cart with free gift progress bar and coupon codes
        ├── WishlistDrawer.jsx   # Slide-over wishlist manager
        ├── CheckoutModal.jsx    # 2-step checkout with UPI, Card, and COD options
        ├── TrustSection.jsx     # 925 Hallmarking & anti-tarnish education section
        ├── ReviewsSection.jsx   # Verified customer photo reviews & ratings
        ├── FaqSection.jsx       # Interactive accordion for jewellery care & FAQs
        ├── Footer.jsx           # Luxury brand footer with newsletter ₹200 voucher
        ├── SearchModal.jsx      # Live real-time search with popular search chips
        ├── CertificateModal.jsx # Official BIS 925 Hallmarking Certificate viewer
        └── PincodeModal.jsx     # Pincode delivery lookup modal
```
