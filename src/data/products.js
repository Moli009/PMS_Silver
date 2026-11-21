export const CATEGORIES = [
  { id: 'all', name: 'All Jewellery', icon: 'Sparkles', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
  { id: 'rings', name: 'Rings', icon: 'Circle', count: 18, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80' },
  { id: 'earrings', name: 'Earrings', icon: 'Gem', count: 24, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces & Pendants', icon: 'Flame', count: 20, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80' },
  { id: 'bracelets', name: 'Bracelets & Cuffs', icon: 'Shield', count: 16, image: 'https://images.unsplash.com/photo-1611591475871-33ae8f73aa8b?auto=format&fit=crop&w=600&q=80' },
  { id: 'mangalsutras', name: '925 Mangalsutras', icon: 'Heart', count: 8, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80' },
  { id: 'anklets', name: 'Anklets (Payal)', icon: 'Feather', count: 10, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80' },
  { id: 'men', name: "Men's Silver", icon: 'Watch', count: 12, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80' },
  { id: 'gifting', name: 'Gifting Studio', icon: 'Gift', count: 15, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80' },
];

export const METAL_FINISHES = [
  { id: 'all', name: 'All Finishes' },
  { id: 'silver', name: 'Pure 925 Silver', color: '#E2E8F0', border: '#94A3B8' },
  { id: 'rosegold', name: '18K Rose Gold Vermeil', color: '#FECDD3', border: '#F43F5E' },
  { id: 'gold', name: '18K Yellow Gold Plated', color: '#FEF08A', border: '#EAB308' },
  { id: 'oxidised', name: 'Antique Oxidised Silver', color: '#64748B', border: '#334155' },
];

export const BUDGET_TIERS = [
  { id: 'all', label: 'All Budgets', min: 0, max: 99999 },
  { id: 'under-1499', label: 'Under ₹1,499', min: 0, max: 1499 },
  { id: 'under-2499', label: 'Under ₹2,499', min: 0, max: 2499 },
  { id: 'under-3999', label: 'Under ₹3,999', min: 0, max: 3999 },
  { id: 'above-4000', label: 'Premium (₹4,000+)', min: 4000, max: 99999 },
];

export const OCCASIONS = [
  { id: 'all', label: 'All Occasions' },
  { id: 'everyday', label: 'Daily Wear Minimal' },
  { id: 'office', label: 'Office & Workwear' },
  { id: 'party', label: 'Festive & Party' },
  { id: 'romantic', label: 'Date Night & Gifts' },
  { id: 'traditional', label: 'Ethnic Glam' },
];

export const PRODUCTS = [
  {
    id: 'pms-001',
    name: 'Silver Solitaire Eternal Sparkle Ring',
    category: 'rings',
    finish: 'silver',
    price: 1899,
    originalPrice: 3299,
    discount: '42% OFF',
    rating: 4.9,
    reviewCount: 342,
    badge: 'Bestseller',
    isNew: false,
    occasion: 'romantic',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An iconic 1.5 Carat equivalent AAA+ Swiss Zircon nestled in a pure 925 sterling silver band with rhodium anti-tarnish plating. Designed to shimmer with fiery brilliance.',
    specifications: {
      purity: '92.5% Pure Sterling Silver',
      gemstone: 'AAA+ Hand-cut Swiss Zirconia',
      plating: 'Electrophoretic Rhodium Anti-Tarnish Coat',
      weight: '2.84 grams',
      size: 'Adjustable / Free Size (Fits sizes 10 to 18)',
      hallmark: 'BIS 925 Stamped & Certified',
      warranty: '6 Months Replacement & Free Replating'
    },
    inStock: true,
    dispatchTime: 'Dispatches in 24 Hours'
  },
  {
    id: 'pms-002',
    name: 'Rose Gold Falling Dewdrop Pendant Necklace',
    category: 'necklaces',
    finish: 'rosegold',
    price: 2299,
    originalPrice: 4199,
    discount: '45% OFF',
    rating: 4.8,
    reviewCount: 218,
    badge: 'Trending',
    isNew: true,
    occasion: 'everyday',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475871-33ae8f73aa8b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A delicate teardrop pendant dipped in warm 18K rose gold over solid 925 silver, suspended on an Italian diamond-cut link chain. Effortlessly chic from morning meetings to evening cocktails.',
    specifications: {
      purity: '92.5% Solid Sterling Silver',
      gemstone: 'Micro-pavé Zircon halo with focal pear gem',
      plating: '18K Rose Gold Vermeil',
      chainLength: '16 inches + 2 inches adjustable extender',
      weight: '3.12 grams',
      hallmark: 'BIS 925 Hallmarked',
      warranty: '6 Months Color & Anti-Tarnish Guarantee'
    },
    inStock: true,
    dispatchTime: 'Express 48-Hour Delivery'
  },
  {
    id: 'pms-003',
    name: 'Silver Celestial Moon & Star Huggie Hoops',
    category: 'earrings',
    finish: 'silver',
    price: 1399,
    originalPrice: 2499,
    discount: '44% OFF',
    rating: 4.9,
    reviewCount: 189,
    badge: 'Under ₹1500',
    isNew: false,
    occasion: 'everyday',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dainty, comfortable snap-closure huggie earrings adorned with an asymmetric crescent moon and sparkling northern star charm. Lightweight and hypoallergenic for sensitive ears.',
    specifications: {
      purity: '925 Hallmarked Silver',
      gemstone: 'Star-cut simulated diamonds',
      closure: 'Comfort Huggie Snap Latch',
      weight: '1.95 grams',
      hallmark: '925 Authenticity Stamp',
      warranty: '6 Months Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches Today'
  },
  {
    id: 'pms-004',
    name: 'Minimalist 925 Silver Infinite Love Bracelet',
    category: 'bracelets',
    finish: 'silver',
    price: 1999,
    originalPrice: 3499,
    discount: '43% OFF',
    rating: 4.9,
    reviewCount: 420,
    badge: 'Customer Favorite',
    isNew: false,
    occasion: 'romantic',
    images: [
      'https://images.unsplash.com/photo-1611591475871-33ae8f73aa8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Entwined infinity figure-8 motif encrusted with sparkling zircons on an adjustable box-slider chain. The ultimate modern token of affection.',
    specifications: {
      purity: '92.5% Pure Sterling Silver',
      gemstone: 'Channel-set Cubic Zirconia',
      mechanism: 'Silicone slide clasp (fits any wrist size up to 8.5")',
      weight: '3.6 grams',
      hallmark: 'BIS 925 Hallmark Certified',
      warranty: '6 Months Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches in 24 Hours'
  },
  {
    id: 'pms-005',
    name: 'Contemporary Daily Grace Silver Mangalsutra',
    category: 'mangalsutras',
    finish: 'silver',
    price: 2499,
    originalPrice: 4299,
    discount: '42% OFF',
    rating: 4.95,
    reviewCount: 512,
    badge: 'Signature Bestseller',
    isNew: false,
    occasion: 'everyday',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Reimagining sacred tradition for the modern woman. Pure 925 silver pendant featuring a radiant round solitaire centerpiece, laced with fine black onyx beads on a durable silver wire.',
    specifications: {
      purity: '925 Sterling Silver with Rhodium Finish',
      beads: 'Certified Natural Black Onyx Beads',
      length: '18 inches + 2 inch extender',
      weight: '4.2 grams',
      hallmark: 'Government Certified BIS 925 Hallmark',
      warranty: 'Lifetime Plating Assistance + 6 Months Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches Today'
  },
  {
    id: 'pms-006',
    name: '18K Gold Vermeil Baguette Emerald Studs',
    category: 'earrings',
    finish: 'gold',
    price: 1799,
    originalPrice: 2999,
    discount: '40% OFF',
    rating: 4.7,
    reviewCount: 94,
    badge: 'New Arrival',
    isNew: true,
    occasion: 'office',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Geometric lab-simulated Colombian emerald flanked by sparkling zircon baguettes in thick 18K yellow gold vermeil. A regal touch for power dressing.',
    specifications: {
      purity: '92.5% Solid Silver Core',
      plating: '2.5 Micron 18K Yellow Gold Vermeil',
      stone: 'Lab-created Emerald & Tapered Baguettes',
      weight: '2.3 grams',
      hallmark: 'BIS 925 Stamped',
      warranty: '6 Months Tarnish Guarantee'
    },
    inStock: true,
    dispatchTime: 'Dispatches in 24 Hours'
  },
  {
    id: 'pms-007',
    name: 'Gleaming Silver Waterfall Tennis Bracelet',
    category: 'bracelets',
    finish: 'silver',
    price: 3499,
    originalPrice: 5999,
    discount: '42% OFF',
    rating: 4.9,
    reviewCount: 167,
    badge: 'Luxury Fine',
    isNew: false,
    occasion: 'party',
    images: [
      'https://images.unsplash.com/photo-1611591475871-33ae8f73aa8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A continuous cascade of 3mm four-prong basket-set zircons on sterling silver with dual-safety clasp. Shimmers with uncompromised red-carpet glamour.',
    specifications: {
      purity: '92.5% Sterling Silver',
      stones: 'Over 45 Individually Set AAA+ Zircons',
      clasp: 'Double Safety Tongue & Groove Clasp',
      weight: '7.8 grams',
      hallmark: 'BIS 925 Certified',
      warranty: '6 Months Warranty + Free Replating'
    },
    inStock: true,
    dispatchTime: 'Express 48-Hour Delivery'
  },
  {
    id: 'pms-008',
    name: 'Oxidised Antique Floral Mandala Toe Rings (Pair)',
    category: 'anklets',
    finish: 'oxidised',
    price: 1199,
    originalPrice: 1999,
    discount: '40% OFF',
    rating: 4.85,
    reviewCount: 230,
    badge: 'Under ₹1500',
    isNew: false,
    occasion: 'traditional',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Handcrafted floral filigree toe rings (bichiya) in rich antique oxidised 925 silver. Ergonomically shaped with rounded edges for daily bliss.',
    specifications: {
      purity: '925 Hallmarked Silver',
      finish: 'Oxidised Vintage Patina (Will not fade)',
      size: 'Adjustable open-loop back',
      weight: '3.4 grams (pair)',
      hallmark: '925 Stamped',
      warranty: 'Lifetime Authenticity Guarantee'
    },
    inStock: true,
    dispatchTime: 'Dispatches Today'
  },
  {
    id: 'pms-009',
    name: "Men's Solid 925 Silver Royal Curb Link Chain",
    category: 'men',
    finish: 'silver',
    price: 4999,
    originalPrice: 8499,
    discount: '41% OFF',
    rating: 4.95,
    reviewCount: 184,
    badge: "Men's Bestseller",
    isNew: false,
    occasion: 'everyday',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Heavyweight diamond-cut flat curb links crafted from solid 925 sterling silver with a secure Italian lobster lock. Masculine, timeless, and substantial in hand.',
    specifications: {
      purity: '92.5% Solid Sterling Silver (Not hollow)',
      thickness: '5.5 mm link width',
      length: '22 inches',
      weight: '24.5 grams',
      hallmark: 'BIS 925 Hallmark Certified with Card',
      warranty: 'Lifetime Metal Purity Guarantee'
    },
    inStock: true,
    dispatchTime: 'Express 48-Hour Delivery'
  },
  {
    id: 'pms-010',
    name: 'Silver Evil Eye Protective Layered Chain Anklet',
    category: 'anklets',
    finish: 'silver',
    price: 1499,
    originalPrice: 2599,
    discount: '42% OFF',
    rating: 4.88,
    reviewCount: 310,
    badge: 'Under ₹1500',
    isNew: true,
    occasion: 'everyday',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475871-33ae8f73aa8b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ward off negative energies with an authentic mother-of-pearl and turquoise enamel Evil Eye charm anchored on double silver chains with gentle tinkling droplets.',
    specifications: {
      purity: '925 Pure Silver',
      plating: 'Anti-tarnish rhodium barrier',
      length: '9.5 inches + 1.5 inch extension chain',
      weight: '3.8 grams',
      hallmark: 'BIS 925 Certified',
      warranty: '6 Months Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches Today'
  },
  {
    id: 'pms-011',
    name: 'Rose Gold Twisted Vine Adjustable Couple Bands',
    category: 'rings',
    finish: 'rosegold',
    price: 2899,
    originalPrice: 4999,
    discount: '42% OFF',
    rating: 4.92,
    reviewCount: 275,
    badge: 'Couple Set',
    isNew: false,
    occasion: 'romantic',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Set of two complementary adjustable silver bands dipped in 18K rose gold with organic intertwined leafy motifs. Comes in a signature PMS Silver dual velvet keepsake box.',
    specifications: {
      purity: '925 Solid Sterling Silver (Set of 2)',
      plating: 'Triple-layer 18K Rose Gold electro-deposit',
      size: 'Adjustable size for Him & Her',
      weight: '6.4 grams (total)',
      hallmark: 'BIS 925 Hallmark on both rings',
      warranty: '6 Months Color & Anti-Tarnish Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches in 24 Hours'
  },
  {
    id: 'pms-012',
    name: 'Eternal Sparkle Luxury Silver Gift Box Set',
    category: 'gifting',
    finish: 'silver',
    price: 3999,
    originalPrice: 6999,
    discount: '43% OFF',
    rating: 4.96,
    reviewCount: 388,
    badge: 'Curated Gift Box',
    isNew: false,
    occasion: 'romantic',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Complete luxury gifting package containing: 1 Solitaire Pendant with Chain, 1 Pair of Matching Halo Studs, Luxury Velvet LED-lit Box, Certificate of Authenticity, and a handwritten personalized gift card.',
    specifications: {
      purity: '92.5% Solid Sterling Silver',
      includes: 'Pendant + Chain + Stud Earrings + LED Gift Box',
      packaging: 'Premium PMS Silver Rigid Gift Box & Tote Bag',
      weight: '6.9 grams total silver',
      hallmark: 'BIS 925 Hallmarked',
      warranty: '6 Months Comprehensive Warranty'
    },
    inStock: true,
    dispatchTime: 'Dispatches Today - Ready to Gift'
  }
];

export const TRUST_PILLARS = [
  {
    icon: 'ShieldCheck',
    title: 'Certified 925 Silver',
    description: 'Every single piece carries the official BIS 925 hallmark stamp and authenticity card.'
  },
  {
    icon: 'Sparkles',
    title: 'Anti-Tarnish Coating',
    description: 'Advanced Rhodium & E-coat protection prevents dulling, oxidation, and scratches.'
  },
  {
    icon: 'RefreshCw',
    title: '30-Day Easy Returns',
    description: 'No questions asked doorstep returns and instant exchange or full refund.'
  },
  {
    icon: 'Truck',
    title: 'Free Insured Express Shipping',
    description: 'Complimentary tamper-proof express delivery across 26,000+ Indian pincodes.'
  },
  {
    icon: 'Award',
    title: '6-Month Warranty',
    description: 'Free replating, zircon stone replacement, and prong tightening coverage.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    city: 'Mumbai',
    rating: 5,
    verified: true,
    product: 'Silver Solitaire Eternal Sparkle Ring',
    date: '2 days ago',
    comment: 'I was hesitant to buy fine silver online, but PMS Silver blew me away! The packaging feels ultra luxurious, and the zircon shine is insane in natural sunlight. Hallmarked 925 on the inside band.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Priyanka Sen',
    city: 'Bengaluru',
    rating: 5,
    verified: true,
    product: 'Rose Gold Falling Dewdrop Pendant',
    date: '1 week ago',
    comment: 'The rose gold finish looks so delicate and expensive! I wear it to my office daily without taking it off during showers, and zero tarnishing. Beautiful craftsmanship!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    city: 'Delhi NCR',
    rating: 5,
    verified: true,
    product: 'Eternal Sparkle Luxury Silver Gift Box Set',
    date: '3 weeks ago',
    comment: 'Ordered this for my fiancée on our anniversary. The LED lighting inside the box when she opened it was pure cinema! Customer care helped me expedite delivery in 24 hours.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQ_DATA = [
  {
    q: 'How do I know PMS Silver jewellery is pure 925 sterling silver?',
    a: 'Every item we craft is stamped with the "925" hallmark, signifying 92.5% pure silver alloyed with strengthening elements for durability. Each order includes a physical Certificate of Authenticity and BIS Hallmarking verification card.'
  },
  {
    q: 'Will the silver turn black or tarnish with daily wear?',
    a: 'All PMS Silver pieces are treated with our proprietary micron-thick Rhodium and E-coating anti-tarnish barrier. This protects your jewellery from sweat, humidity, and perfume. We also offer 6 months of free replating under warranty.'
  },
  {
    q: 'Is PMS Silver safe for sensitive skin?',
    a: 'Yes, 100%. Our jewellery is hypoallergenic, 100% nickel-free and lead-free, adhering to international safety standards. It will not cause itching, redness, or skin discoloration.'
  },
  {
    q: 'What is the return and exchange policy?',
    a: 'We offer a hassle-free 30-day return policy. If you are not completely in love with your piece or need a different size, our courier partner will pick it up right from your doorstep at zero extra cost.'
  },
  {
    q: 'How long does delivery take across India?',
    a: 'Metro orders typically deliver in 2-3 business days. Tier 2 & Tier 3 cities receive delivery within 3-5 business days. We provide live real-time SMS and WhatsApp tracking.'
  }
];
