import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, Trash2, Plus, Minus, Mail, Phone, MapPin, ShieldCheck, Building2, Stethoscope, FileText, Award, Search, ChevronRight, Filter, Check, ChevronDown, Star, Sparkles, Truck, Globe, ArrowLeft, Calendar, User, Grid, List, ArrowUpRight, ArrowUpDown, Thermometer, Clock, Map, SlidersHorizontal } from 'lucide-react';

/* --- EMAILJS CONFIGURATION --- */
const EMAILJS_SERVICE_ID = "service_f4a32p2";
const EMAILJS_TEMPLATE_ID = "template_80rehng";
const EMAILJS_PUBLIC_KEY = "cdc4JC6h-iGdLJOCC";

/* --- Data & Constants --- */
const BRANDS_LIST = [
  "All Brands", "Glutax", "Aqua Skin/Veniscy", "Miracle White", "Glowtiqa Paris",
  "Relumins", "Nc24", "Lucchini", "Shiro", "Daehan Nupharm", "Saint Blanc",
  "Neutro", "Dr James", "Vita Glow", "iskin", "Core", "Ratiopharm",
  "LemonBottle", "KFDA", "St Dalfour", "Miracle Gain", "Roche", "Japan Beauty Booster"
];

const FAQS = [
  { q: "Are your products authentic?", a: "Yes, exclusively. We are an authorized distributor sourcing directly from manufacturers to guarantee 100% authenticity and efficacy. Every batch is verified before shipment." },
  { q: "Do you require a medical license to purchase?", a: "While we primarily supply to licensed clinics and dermatologists, certain supplements and skincare items are available for general purchase. Injectables are strictly for professional use." },
  { q: "What is the typical shipping time?", a: "Domestic orders are typically processed within 24 hours. Delivery to metro cities takes 2-3 business days, while other regions take 4-6 business days." },
  { q: "Do you offer bulk discounts?", a: "Yes, we offer tiered pricing for wholesale partners. Please contact our sales team or register as a partner on the Contact page for a price list." }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Science Behind Glutathione: Beyond Skin Whitening",
    excerpt: "Exploring the systemic antioxidant benefits of high-dose glutathione therapies and their role in cellular detoxification and immune system support.",
    content: `
      <p class="mb-6">Glutathione, often referred to as the "master antioxidant," is a tripeptide composed of three amino acids: cysteine, glutamine, and glycine. While it is widely recognized in the aesthetic industry for its skin-whitening properties via melanogenesis inhibition, its clinical significance extends far beyond dermatology.</p>
       
      <h3 class="text-2xl font-serif mb-4 mt-8">Mechanism of Action</h3>
      <p class="mb-6">At a cellular level, glutathione exists in two states: reduced (GSH) and oxidized (GSSG). The ratio of reduced to oxidized glutathione within cells is often used as a measure of cellular toxicity. In high-dose IV therapies, we aim to bolster the body's reduced glutathione reserves, enhancing its ability to neutralize free radicals and reactive oxygen species (ROS).</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">Systemic Benefits</h3>
      <p class="mb-6">Beyond its depigmenting effects, high-dose glutathione therapy supports liver detoxification by binding to toxins and facilitating their excretion. It also plays a crucial role in immune function, supporting the proliferation of lymphocytes.</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">Clinical Protocols</h3>
      <p class="mb-6">For aesthetic practitioners, understanding the pharmacokinetics of IV glutathione is key. A typical protocol involves a loading dose followed by maintenance therapy. It is crucial to monitor patient liver function tests (LFTs) and kidney function, although glutathione is generally hepatoprotective.</p>
    `,
    date: "Oct 24, 2025",
    image: "/image/blog1.jpg", 
    category: "Clinical Science",
    author: "Dr. A. Mehta"
  },
  {
    id: 2,
    title: "Understanding PDRN: The Salmon DNA Revolution",
    excerpt: "Why Polydeoxyribonucleotide (PDRN) is becoming the gold standard for skin regeneration and wound healing in aesthetic medicine.",
    content: `
      <p class="mb-6">Polydeoxyribonucleotide (PDRN) has rapidly emerged as a cornerstone of regenerative aesthetic medicine. Derived from salmon sperm DNA, PDRN acts as an A2A receptor agonist, stimulating tissue repair and anti-inflammatory processes.</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">The Mechanism of Tissue Repair</h3>
      <p class="mb-6">PDRN works by stimulating the metabolic activity of fibroblasts, the cells responsible for collagen and elastin production. Unlike traditional hyaluronic acid fillers which provide volume, PDRN restores the physiological condition of the dermis, leading to true skin rejuvenation.</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">Clinical Indications</h3>
      <p class="mb-6">PDRN is indicated for a wide range of conditions, including:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Diabetic foot ulcers and chronic wounds</li>
        <li>Post-acne scarring and atrophic scars</li>
        <li>Androgenetic alopecia (hair loss)</li>
        <li>General skin laxity and photoaging</li>
      </ul>

      <p class="mb-6">The safety profile of PDRN is exceptional, with very few reported adverse effects, making it an excellent addition to any aesthetic clinic's portfolio.</p>
    `,
    date: "Nov 02, 2025",
    image: "/image/blog2.jpg", 
    category: "Ingredient Spotlight",
    author: "Clinical Team"
  },
  {
    id: 3,
    title: "Choosing the Right IV Drip for Pigmentation",
    excerpt: "A practitioner's guide to selecting the correct cocktail of Vitamin C, Glutathione, and Collagen for recalcitrant melasma.",
    content: `
      <p class="mb-6">Treating melasma and hyperpigmentation requires a multi-faceted approach. While topical tyrosinase inhibitors are standard, Intravenous (IV) therapy offers a systemic route to manage stubborn pigmentation.</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">The Cocktail Approach</h3>
      <p class="mb-6">A successful pigmentation drip typically combines:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>High-Dose Vitamin C:</strong> To synergize with glutathione and increase intracellular levels.</li>
        <li><strong>Glutathione:</strong> To shift melanin production from eumelanin (dark) to pheomelanin (light).</li>
        <li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> A universal antioxidant that recycles other antioxidants.</li>
      </ul>

      <h3 class="text-2xl font-serif mb-4 mt-8">Patient Selection</h3>
      <p class="mb-6">Not all patients are candidates for aggressive IV therapy. A thorough medical history, including renal function assessment, is mandatory. Expectation management is also critical; IV therapy provides gradual, systemic lightening rather than spot treatment.</p>
    `,
    date: "Nov 15, 2025",
    image: "/image/blog3.jpg", 
    category: "Treatment Protocols",
    author: "Dr. S. Williams"
  },
  {
    id: 4,
    title: "Safety Protocols for Intravenous Therapy",
    excerpt: "Essential safety checklists and best practices for administering IV beauty treatments in a clinical setting.",
    content: `
      <p class="mb-6">As the popularity of IV beauty drips surges, so does the responsibility of the practitioner to ensure patient safety. Administering intravenous substances carries inherent risks that must be mitigated through rigorous protocols.</p>

      <h3 class="text-2xl font-serif mb-4 mt-8">Pre-Treatment Checklist</h3>
      <p class="mb-6">Before any needle touches skin, the following must be confirmed:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Allergies:</strong> Specifically to vitamins or preservatives.</li>
        <li><strong>Vitals:</strong> Baseline blood pressure and heart rate.</li>
        <li><strong>G6PD Deficiency:</strong> High dose Vitamin C can cause hemolysis in G6PD deficient patients. This screening is non-negotiable.</li>
      </ul>

      <h3 class="text-2xl font-serif mb-4 mt-8">During Infusion</h3>
      <p class="mb-6">Monitoring for signs of anaphylaxis, phlebitis, or fluid overload is essential. Drip rates should be slow initially. Having an emergency kit with epinephrine and corticosteroids readily available is a regulatory requirement.</p>
    `,
    date: "Nov 20, 2025",
    image: "/image/blog4.jpg", 
    category: "Safety & Compliance",
    author: "Safety Board"
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Glutax 50000000GS Advanced",
    category: "Injection",
    brand: "Glutax",
    price: 14500,
    image: "/image/Glutax-50000000GS.jpg",
    description: "ReCombined White RNA | 50 Million GS",
    details: `
      <strong>Glutax 50000000GS — Advanced Cellular Whitening</strong><br/><br/>
      Experience the flagship Glutax 50000000GS, a high-performance 10-session treatment engineered for those who have plateaued with standard whitening therapies. This formulation leverages ReCombined White RNA technology to reset cellular memory and accelerate depigmenting action.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Nano Glutathione – 50,000,000 mg</li>
        <li>ReCombined White RNA – 10,000 mg</li>
        <li>Epidermal Growth Factor – 6,000 mg</li>
        <li>Pro-Coenzyme Q10 – 1,500 mg</li>
        <li>Ascorbic Acid – 5,000 mg</li>
        <li>Collagen Natural – 2,000 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Breaks through whitening plateaus</li>
        <li>Accelerates cellular turnover</li>
        <li>Deeply hydrates and firms skin structure</li>
      </ul>
      <br/>
      Reveal a complexion that is not just lighter, but translucent and alive.<br/>
      <em class="text-xs text-gray-400">Note: Professional administration recommended.</em>
    `,
    benefits: ["50 Million GS", "ReCombined RNA", "Intense Whitening", "Plateau Breaker"],
    sku: "GLU-50M-GS",
    volume: "10 Sessions"
  },
  {
    id: 2,
    name: "Saint Blanc XIII",
    category: "Injection",
    brand: "Saint Blanc",
    price: 16500,
    image: "/image/Saint-blanc.jpg",
    description: "Swiss Formulation | 4 Sets Complex",
    details: `
      <strong>Saint Blanc XIII — Glutathione & Vitamin C Whitening Therapy</strong><br/><br/>
      Experience the elite Saint Blanc XIII Whitening System — a professional 4-session treatment designed for visible skin brightening, clarity, and rejuvenation. This advanced formulation brings together 13 clinically recognized bio-actives that work in synergy to reduce hyperpigmentation, refine uneven skin tone, and enhance natural radiance.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      A targeted blend of therapeutic ingredients:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>miRNA Glutathione – 90,000 mg</li>
        <li>Celergen Stem Cell Extract – 70,000 I.U</li>
        <li>Ascorbic Acid (Vitamin C) – 5,000 mg</li>
        <li>Coenzyme Q10 – 1,500 mg</li>
        <li>Epidermal Growth Factor + RNS – 2,000 mg</li>
        <li>Alpha Lipoic Acid – 300 mg</li>
        <li>Natural Collagen Extract – 200 mg</li>
        <li>Selenium – 200 mg</li>
        <li>Multivitamin Complex – 200 mg</li>
        <li>Cyanocobalamin (B12) – 200 mg</li>
        <li>Dimethylaminoethanol – 500 mg</li>
        <li>Amino Acids & Micronutrients</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Targets melanin production to reduce dark patches</li>
        <li>Encourages collagen renewal for improved elasticity</li>
        <li>Boosts cellular antioxidant defense</li>
        <li>Promotes a clearer, brighter, more even complexion over time</li>
      </ul>
      <br/>
      Reveal a smoother, more radiant skin tone with Saint Blanc XIII — a refined approach to skin lightening backed by bio-active science.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary depending on skin type and treatment frequency.</em>
    `,
    benefits: ["Swiss Origin", "4-Step System", "13 Ingredients", "Complex Therapy"],
    sku: "SAINT-BLANC-13",
    volume: "4 Sets (Complete Therapy)"
  }
  // Add more products as needed
];

const CATEGORIES = [
  { name: "Injection", id: "Injection" },
  { name: "Cream", id: "Cream" },
  { name: "Weight", id: "Weight" },
  { name: "Soap", id: "Soap" },
  { name: "Treatment", id: "Treatment" },
  { name: "Filler", id: "Filler" },
  { name: "Supplement", id: "Supplement" }
];

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  const bgColors = {
    success: 'bg-black text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-[#E8A0BF] text-black'
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 animate-slide-up ${bgColors[type] || bgColors.info}`}>
      {type === 'success' && <Check size={16} />}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-lg",
    secondary: "bg-[#E8A0BF] text-black hover:bg-[#FADADD] active:scale-95 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",
    ghost: "text-black hover:bg-gray-100"
  };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>{children}</button>;
};

const SectionHeader = ({ title, subtitle, center = true }) => (
  <div className={`mb-8 md:mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="font-serif text-3xl md:text-4xl text-black mb-3">{title}</h2>
    {subtitle && <p className="text-gray-600 font-light max-w-2xl mx-auto px-4">{subtitle}</p>}
    <div className={`h-0.5 w-20 bg-[#E8A0BF] mt-6 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

const Navigation = ({ currentPage, setCurrentPage, cartCount, toggleCart, mobileMenuOpen, setMobileMenuOpen, setShopFilter, setSearchQuery }) => {
    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Shop', id: 'shop' },
        { name: 'Blog', id: 'blog' }, 
        { name: 'Contact', id: 'contact' },
    ];

    // State for mobile menu accordions
    const [expandedMenu, setExpandedMenu] = useState(''); // 'categories' | 'brands' | ''
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    const toggleAccordion = (name) => {
        setExpandedMenu(expandedMenu === name ? '' : name);
    };

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (currentPage !== 'shop') {
            setCurrentPage('shop');
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
             <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
                
                {/* SEARCH OVERLAY */}
                {isSearchOpen ? (
                    <div className="absolute inset-0 bg-white z-20 flex items-center px-4 animate-fade-in">
                        <Search size={20} className="text-gray-400 mr-3 shrink-0" />
                        <input 
                            ref={searchInputRef}
                            type="text" 
                            placeholder="Search for products..." 
                            className="flex-1 h-full outline-none text-base bg-transparent placeholder:text-gray-300"
                            onChange={handleSearchChange}
                        />
                        <button onClick={() => setIsSearchOpen(false)} className="p-2 ml-2 text-gray-500 hover:text-black">
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Mobile: Search Icon Left */}
                        <div className="md:hidden flex items-center justify-start flex-1">
                            <button onClick={() => setIsSearchOpen(true)} className="text-gray-800 hover:text-[#E8A0BF]">
                                <Search size={22} />
                            </button>
                        </div>

                        {/* Logo: Centered on Mobile, Left on Desktop */}
                        <div 
                            className={`cursor-pointer flex items-center gap-2 ${'absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0'}`} 
                            onClick={() => setCurrentPage('home')}
                        >
                            <img src="/image/logo-t.jpg" alt="COSMATRIX" className="h-10 md:h-16 w-auto object-contain" />
                        </div>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                            <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`text-sm font-medium tracking-wide transition-colors duration-300 ${currentPage === link.id ? 'text-[#E8A0BF]' : 'text-gray-800 hover:text-[#E8A0BF]'}`}>
                                {link.name}
                            </button>
                            ))}
                        </nav>

                        {/* Right Icons: Cart & Menu */}
                        <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end md:flex-initial">
                            <button onClick={() => setIsSearchOpen(true)} className="hidden md:block text-gray-800 hover:text-[#E8A0BF]"><Search size={22} /></button>
                            <button className="relative p-2 text-gray-800 hover:text-[#E8A0BF]" onClick={toggleCart}>
                                <ShoppingBag size={22} />
                                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
                            </button>
                            <button className="md:hidden p-2 text-gray-800" onClick={() => setMobileMenuOpen(true)}>
                                <Menu size={24} />
                            </button>
                        </div>
                    </>
                )}
             </div>
            </header>
            
            <div className={`fixed inset-0 z-[60] flex ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
                <div className={`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="p-6 flex justify-between items-center border-b border-gray-100">
                            <span className="text-xl font-serif tracking-wide">MENU</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-black"><X size={24} /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4">
                            <div className="flex flex-col">
                                <button onClick={() => { setShopFilter('All'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50 flex justify-between items-center">Shop All <ChevronRight size={16} className="text-gray-400"/></button>
                                
                                {/* Categories Dropdown */}
                                <div className="border-b border-gray-50">
                                    <button 
                                        onClick={() => toggleAccordion('categories')} 
                                        className="w-full px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 flex justify-between items-center"
                                    >
                                        Categories 
                                        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${expandedMenu === 'categories' ? 'rotate-180' : ''}`}/>
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 ${expandedMenu === 'categories' ? 'max-h-96' : 'max-h-0'}`}>
                                        {CATEGORIES.map(cat => (
                                            <button 
                                                key={cat.id} 
                                                onClick={() => { setShopFilter(cat.name); setCurrentPage('shop'); setMobileMenuOpen(false); }} 
                                                className="w-full px-10 py-3 text-left text-sm text-gray-600 hover:text-[#E8A0BF] border-l-2 border-transparent hover:border-[#E8A0BF] transition-colors"
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Brands Dropdown */}
                                <div className="border-b border-gray-50">
                                    <button 
                                        onClick={() => toggleAccordion('brands')} 
                                        className="w-full px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 flex justify-between items-center"
                                    >
                                        Brands 
                                        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${expandedMenu === 'brands' ? 'rotate-180' : ''}`}/>
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 ${expandedMenu === 'brands' ? 'max-h-64 overflow-y-auto' : 'max-h-0'}`}>
                                        {BRANDS_LIST.map(brand => (
                                            <button 
                                                key={brand} 
                                                onClick={() => { 
                                                    // For simple filtering we just go to shop, ideally you'd pass brand filter too
                                                    // Assuming setShopFilter handles categories, you might need a brand filter context
                                                    // For now, redirect to shop
                                                    setCurrentPage('shop'); 
                                                    setMobileMenuOpen(false); 
                                                }} 
                                                className="w-full px-10 py-3 text-left text-sm text-gray-600 hover:text-[#E8A0BF] border-l-2 border-transparent hover:border-[#E8A0BF] transition-colors"
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">BLOG</button>
                                <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">ABOUT US</button>
                                <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-b border-gray-50">CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const PaymentSuccessView = ({ navigateTo, showToast }) => {
    const [status, setStatus] = useState('processing'); 

    useEffect(() => {
      const processOrder = async () => {
        const storedCart = JSON.parse(localStorage.getItem('temp_cart') || '[]');
        const storedUser = JSON.parse(localStorage.getItem('temp_user') || '{}');
        const queryParams = new URLSearchParams(window.location.search);
        const txnId = queryParams.get('tid') || 'DEMO-' + Date.now();
   
        if (storedCart.length === 0) {
          setStatus('error');
          return;
        }
   
        const orderItemsHTML = storedCart.map(item => 
          `• <b>${item.name}</b> (Brand: ${item.brand}) <br/>&nbsp;&nbsp; Qty: ${item.quantity} | Price: ₹${item.price}`
        ).join('<br/><br/>');
   
        const totalAmount = storedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   
        const emailParams = {
          customer_name: storedUser.name,
          customer_email: storedUser.email || "Not Provided", 
          customer_phone: storedUser.phone,
          shipping_address: storedUser.address,
          order_items: orderItemsHTML,
          total_amount: totalAmount.toLocaleString(),
          payment_id: txnId,
          order_id: txnId
        };
   
        try {
          if (!window.emailjs) {
              const script = document.createElement('script');
              script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
              script.async = true;
              document.body.appendChild(script);
              await new Promise(resolve => script.onload = resolve);
          }
             
          await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_PUBLIC_KEY);
             
          localStorage.removeItem('temp_cart');
          localStorage.removeItem('temp_user');
          setStatus('sent');
          showToast("Order confirmed and email sent!", "success");
        } catch (error) {
          console.error('Email Failed:', error);
          setStatus('error'); 
          showToast("Payment successful but email failed.", "error");
        }
      };
   
      processOrder();
    }, []);
   
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbfbfb] text-center px-4">
        {status === 'processing' && (
          <div className="animate-pulse">
            <h2 className="text-2xl font-serif mb-2">Verifying Payment...</h2>
            <p className="text-gray-500">Please do not close this window.</p>
          </div>
        )}
   
        {status === 'sent' && (
          <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-3xl font-serif mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Thank you for shopping with COSMATRIX. Your order details have been sent to our admin team.</p>
            <Button onClick={() => { window.history.replaceState(null, "", "/"); navigateTo('home'); }} className="w-full">
              Return to Home
            </Button>
            <div className="mt-4 text-xs text-gray-400">Powered by Zomaxa Agency</div>
          </div>
        )}
   
        {status === 'error' && (
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
             <h2 className="text-2xl font-serif text-red-500 mb-2">Something went wrong</h2>
             <p className="text-gray-500 mb-6">We received your payment, but couldn't generate the order receipt automatically. Please contact support.</p>
             <Button onClick={() => navigateTo('contact')}>Contact Support</Button>
          </div>
        )}
      </div>
    );
};

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, checkout }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '', 
        address: ''
      });
    
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const isFormValid = formData.name && formData.phone && formData.address && formData.email;
    
      const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-serif text-2xl">Your Cart</h2>
                    <button onClick={onClose}><X size={20}/></button>
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                      {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                            <ShoppingBag size={48} strokeWidth={1} className="mb-4 text-gray-200" />
                            <p className="text-lg font-light">Your cart is empty</p>
                            <button onClick={onClose} className="mt-4 text-[#E8A0BF] hover:text-black transition-colors font-medium text-sm">Continue Shopping</button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition-colors p-1"><Trash2 size={16} /></button>
                                        </div>
                                        <p className="text-[#E8A0BF] text-sm mb-3">₹{item.price.toLocaleString()}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border border-gray-200 rounded">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50 text-gray-600"><Minus size={12} /></button>
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50 text-gray-600"><Plus size={12} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                      )}
                </div>
                {cart.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-serif text-2xl">₹{total.toLocaleString()}</span>
                        </div>
                        <div className="space-y-3 mb-4">
                            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-[#E8A0BF] outline-none"/>
                            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-[#E8A0BF] outline-none"/>
                            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-[#E8A0BF] outline-none"/>
                            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full p-2 border border-gray-200 rounded focus:border-[#E8A0BF] outline-none resize-none"/>
                        </div>
                        <Button className="w-full" onClick={() => checkout(formData)} disabled={!isFormValid}>
                            Pay ₹{total.toLocaleString()}
                        </Button>
                    </div>
                )}
            </div>
        </div>
      )
};

const Footer = ({ setCurrentPage, showToast }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubscribe = async () => {
    if(!phone || phone.length < 10) {
        showToast("Please enter a valid WhatsApp number.", "error");
        return;
    }
    setLoading(true);
    // Construct the WhatsApp URL
    const message = `Hi, I'd like to subscribe to Cosmatrix wholesale updates. My number is: ${phone}`;
    const whatsappUrl = `https://wa.me/919916404202?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    showToast("Opening WhatsApp...", "success");
    setPhone('');
    setLoading(false);
  };

  return (
  <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <img src="/image/logo-t.jpg" alt="COSMATRIX" className="h-12 w-auto object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
            Authorized distributor of premium clinical beauty formulations. Bridging the gap between world-class manufacturers and aesthetic professionals.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/c0smatrix?igsh=YXRrMW13b3V5OTRh&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E8A0BF] hover:text-black transition-all"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Explore</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('shop')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> All Products</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Clinical Journal</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Our Story</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Partner Program</button></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Policies</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setCurrentPage('terms')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Terms & Conditions</button></li>
            <li><button onClick={() => setCurrentPage('shipping')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Shipping Policy</button></li>
            <li><button onClick={() => setCurrentPage('return-policy')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Return Policy</button></li>
            <li><button onClick={() => setCurrentPage('refund-policy')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Refund Policy</button></li>
            <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-[#E8A0BF] transition-colors flex items-center gap-2"><ArrowRight size={12} /> Privacy Policy</button></li>
          </ul>
        </div>

        {/* Newsletter / WhatsApp Updates */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">WhatsApp Updates</h3>
          <p className="text-gray-400 text-xs mb-4">Get exclusive wholesale price lists and stock alerts directly on WhatsApp.</p>
          <div className="flex flex-col gap-3">
            <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E8A0BF] w-full rounded"
            />
            <button 
                onClick={handleSubscribe} 
                disabled={loading}
                className="bg-[#E8A0BF] text-black px-4 py-3 font-medium text-sm hover:bg-white transition-colors rounded uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
                {loading ? 'Subscribing...' : <>Subscribe <ArrowRight size={14}/></>}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 mt-8 flex flex-col items-center gap-4 text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <p>&copy; 2025 COSMATRIX INTERNATIONAL. All rights reserved.</p>
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-1">
                   <Mail size={12} /> cosmatriixx@gmail.com
               </span>
            </div>
        </div>
        
        {/* ZOMAXA CREDIT */}
        <div className="mt-4 pt-4 border-t border-white/5 w-full text-center">
            <p className="text-gray-600">
                Designed & Developed by{' '}
                <a 
                    href="https://zomaxa.co" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#E8A0BF] transition-colors font-bold tracking-wide"
                >
                    Zomaxa.co
                </a>
            </p>
        </div>
      </div>
    </div>
  </footer>
  );
};


const HomeView = ({ navigateTo, addToCart, setShopFilter }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Updated Slides with specific button text and filter actions based on the image content
  const slides = [
    { 
        id: 1, 
        image: '/image/image_1.png', 
        btnText: 'Start Shopping', 
        filter: 'All' 
    }, // "Static/Circle" -> General Shop
    { 
        id: 2, 
        image: '/image/image_2.png', 
        btnText: 'Weight Management Products', 
        filter: 'Injection' 
    }, // "Whitening" -> Injection Category
    { 
        id: 3, 
        image: '/image/image_3.png', 
        btnText: 'anti Aging Products', 
        filter: 'All' 
    }, // "Thank You" -> General Shop
    { 
        id: 4, 
        image: '/image/image_4.png', 
        btnText: 'Whitening Products', 
        filter: 'All' 
    }, // "Choose Category" -> General Shop
    { 
        id: 5, 
        image: '/image/image_5.png', 
        btnText: 'try Now', 
        filter: 'Weight' 
    } // "Weight Management" -> Weight Category
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [slides.length]);

  return (
  <div className="animate-fade-in bg-[#fbfbfb]">
    {/* HERO SECTION - SLIDER */}
    <div className="relative w-full min-h-[85vh] bg-black flex flex-col justify-end items-center text-center overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
            {/* Subtle overlay to ensure button pop if needed, but keeping image clear as requested */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
        
        {/* Dynamic Button Overlay - Positioned at Bottom Center */}
        <div className="relative z-20 pb-20 md:pb-24 w-full flex justify-center">
            <div className="animate-slide-up">
                <Button 
                    onClick={() => {
                        setShopFilter(slides[currentSlide].filter);
                        navigateTo('shop');
                    }} 
                    variant="secondary" 
                    className="px-10 py-4 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(232,160,191,0.5)] bg-[#E8A0BF] text-black border-2 border-transparent hover:bg-white hover:scale-105 transition-all duration-300"
                >
                    {slides[currentSlide].btnText}
                </Button>
            </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#E8A0BF] w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
    </div>

    {/* TICKER - UPDATED FOR PAN INDIA */}
    <div className="bg-black text-white/80 py-3 border-b border-white/10 overflow-hidden relative z-20">
        <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap min-w-full px-4 text-[10px] md:text-xs tracking-widest uppercase font-medium">
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E8A0BF]"/> 100% Authentic</span>
            <span className="flex items-center gap-2"><Truck size={14} className="text-[#E8A0BF]"/> Pan India Shipping</span>
            <span className="flex items-center gap-2"><Award size={14} className="text-[#E8A0BF]"/> Authorized Distributor</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#E8A0BF]"/> 24-48h Dispatch</span>
            <span className="flex items-center gap-2"><Globe size={14} className="text-[#E8A0BF]"/> Direct Sourcing</span>
            {/* Duplicated for smooth loop on wide screens */}
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E8A0BF]"/> 100% Authentic</span>
            <span className="flex items-center gap-2"><Truck size={14} className="text-[#E8A0BF]"/> Pan India Shipping</span>
        </div>
    </div>

    {/* BRAND MARQUEE */}
    <section className="py-8 md:py-12 bg-white border-b border-gray-100 overflow-hidden">
        <p className="text-center text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mb-6">Trusted Brand Partners</p>
        <div className="flex gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 justify-center flex-wrap px-6">
            {['Glutax', 'Miracle White', 'Aqua Skin', 'Nc24', 'Relumins', 'Daehan'].map(brand => (
                <span key={brand} className="text-lg md:text-2xl font-serif font-bold text-gray-800 cursor-default">{brand}</span>
            ))}
        </div>
    </section>

    {/* CURATED CATEGORIES */}
    <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <SectionHeader title="Curated Collections" subtitle="Explore our specialized range of aesthetic formulations" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { name: 'Whitening Injections', img: '/image/Glutax-50000000GS.jpg', desc: 'Glutathione & Stem Cell', filter: 'Injection' },
                { name: 'Dermal Fillers', img: '/image/IMG_1838.jpg', desc: 'HA & PDRN Boosters', filter: 'Filler' },
                { name: 'Oral Supplements', img: '/image/jp-boost.jpg', desc: 'Maintenance & Care', filter: 'Supplement' }
            ].map((cat, idx) => (
                <div 
                    key={idx}
                    onClick={() => { setShopFilter(cat.filter); navigateTo('shop'); }}
                    className="group relative h-[250px] md:h-[400px] overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
                    <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-white font-serif text-2xl md:text-3xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                        <p className="text-white/80 text-xs md:text-sm font-light mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.desc}</p>
                        <span className="text-[#E8A0BF] text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Shop Now <ArrowRight size={12}/></span>
                    </div>
                </div>
            ))}
        </div>
    </section>

    {/* NEW SECTION: TRUSTED BY INDIA */}
    <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">Trusted Across India</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto mb-10">From Bangalore to Delhi, Mumbai to Kolkata. We serve over 500+ premium clinics with guaranteed authentic supplies.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                    { label: "Partner Clinics", val: "500+" },
                    { label: "Cities Covered", val: "40+" },
                    { label: "Years of Trust", val: "5+" },
                    { label: "Happy Clients", val: "10k+" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-3xl font-serif text-gray-900 mb-1">{stat.val}</div>
                        <div className="text-[10px] uppercase tracking-widest text-[#E8A0BF] font-bold">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* BEST SELLERS GRID */}
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8 md:mb-10">
            <div>
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Bestselling Formulations</h2>
                <div className="h-0.5 w-12 bg-[#E8A0BF] mt-3"></div>
            </div>
            <button onClick={() => navigateTo('shop')} className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#E8A0BF] transition-colors">View All <ArrowRight size={16}/></button>
        </div>
        
        {/* Mobile Horizontal Scroll */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {PRODUCTS.slice(0, 4).map(product => (
                 <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                    <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                    <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-[#E8A0BF] transition-colors truncate">{product.name}</h3>
                    <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
                 </div>
            ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
            <button onClick={() => navigateTo('shop')} className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1">View All Products <ArrowRight size={14}/></button>
        </div>
      </div>
    </section>

    {/* THE COSMATRIX STANDARD - Beauty & Aesthetics Focused */}
    <section className="py-20 md:py-28 bg-[#FFF5F7] relative overflow-hidden">
        {/* Soft decorative background element */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#ffe4ec] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#fff0f5] rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Side - Styled like a magazine spread */}
            <div className="order-2 lg:order-1 relative">
                <div className="relative z-10 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
                      <img src="/image/ban2.jpg" alt="Aesthetic Perfection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                {/* Decorative Frame */}
                <div className="absolute top-6 -left-6 w-full h-full rounded-[2rem] border-2 border-[#E8A0BF] -z-10"></div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-[#E8A0BF]"></span>
                    <span className="text-[#E8A0BF] font-bold tracking-widest uppercase text-xs">The Cosmatrix Standard</span>
                 </div>
                 
                 <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-[1.1]">
                    Curating <span className="italic font-light text-[#E8A0BF]">Timeless</span><br/> Beauty & Grace
                 </h2>
                 
                 <p className="text-gray-500 leading-relaxed mb-10 font-light text-lg">
                    We believe that true aesthetic excellence lies in the purity of the source. Our collection is not just about products; it's about providing the essential elements for radiant, luminous skin. Every formulation is a promise of quality, designed to elevate your beauty rituals.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    {[
                        { icon: Sparkles, title: "Radiant Potency", desc: "Formulations that deliver a visible, ethereal glow." },
                        { icon: Star, title: "Premium Origins", desc: "Sourced from the world's finest aesthetic laboratories." },
                        { icon: ShieldCheck, title: "Pure Integrity", desc: "Uncompromising quality for your peace of mind." },
                        { icon: Clock, title: "Lasting Beauty", desc: "Solutions designed for enduring elegance." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 group cursor-default">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#ffe4ec] flex items-center justify-center shrink-0 text-[#E8A0BF] group-hover:bg-[#E8A0BF] group-hover:text-white transition-all duration-500">
                                <item.icon size={20} strokeWidth={1.5}/>
                            </div>
                            <div>
                                <h4 className="text-lg font-serif text-gray-900 mb-1 group-hover:text-[#E8A0BF] transition-colors">{item.title}</h4>
                                <p className="text-sm text-gray-500 font-light leading-snug">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>

    {/* CTA SECTION */}
    <section className="py-16 md:py-24 bg-black text-center px-6 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8A0BF] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Partner With Excellence</h2>
        <p className="text-gray-400 mb-8 font-light text-base md:text-lg">Join over 500+ clinics sourcing their premium inventory from Cosmatrix.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigateTo('contact')} variant="secondary" className="py-4 w-full sm:w-auto font-medium">Register Wholesale Account</Button>
            <Button onClick={() => navigateTo('shop')} variant="outline" className="py-4 w-full sm:w-auto border-white/20 hover:bg-white hover:text-black">Browse Catalog</Button>
        </div>
      </div>
    </section>
  </div>
  );
};

const ShopView = ({ navigateTo, addToCart, filter, setFilter, searchQuery, setSearchQuery }) => {
  const [brandFilter, setBrandFilter] = useState('All Brands');
  // const [searchQuery, setSearchQuery] = useState(''); // Removed local state
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc'
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesBrand = brandFilter === 'All Brands' || p.brand === brandFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured (default order)
  });

  // Helper for category buttons
  const CategoryButton = ({ name, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${active ? 'bg-black text-white font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
    >
        {name}
        {active && <Check size={14} className="text-[#E8A0BF]" />}
    </button>
  );

  return (
    <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[#E8A0BF] tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up">Authorized Distribution</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>The Collection</h1>
            <p className="text-gray-400 font-light max-w-lg mx-auto text-sm md:text-base animate-slide-up" style={{animationDelay: '0.2s'}}>Curated clinical formulations for professional aesthetic use.</p>
         </div>
      </div>

      {/* MOBILE CATEGORY SCROLL (Replaces sticky toolbar) */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-100 py-3 px-4 shadow-sm overflow-x-auto flex gap-3 scrollbar-hide">
          <button 
              onClick={() => setFilter('All')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-colors ${filter === 'All' ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'}`}
          >
              All
          </button>
          {CATEGORIES.map(cat => (
              <button 
                  key={cat.id}
                  onClick={() => setFilter(cat.name)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-colors ${filter === cat.name ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'}`}
              >
                  {cat.name}
              </button>
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* SIDEBAR (Desktop) */}
            <aside className="hidden lg:block w-64 shrink-0 space-y-10 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
                {/* Search */}
                <div>
                    <h3 className="font-serif text-lg mb-4">Search</h3>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Product name..." 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            className="w-full pl-3 pr-8 py-2 bg-transparent border-b border-gray-200 text-sm outline-none focus:border-black transition-colors" 
                        />
                        <Search className="absolute right-0 top-2 text-gray-400" size={16} />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-serif text-lg mb-4">Categories</h3>
                    <div className="space-y-1">
                        <CategoryButton name="View All" active={filter === 'All'} onClick={() => setFilter('All')} />
                        {CATEGORIES.map(cat => (
                            <CategoryButton key={cat.id} name={cat.name} active={filter === cat.name} onClick={() => setFilter(cat.name)} />
                        ))}
                    </div>
                </div>

                {/* Brands */}
                <div>
                    <h3 className="font-serif text-lg mb-4">Brands</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === 'All Brands' ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                {brandFilter === 'All Brands' && <Check size={10} className="text-white" />}
                            </div>
                            <input type="radio" name="brand" className="hidden" checked={brandFilter === 'All Brands'} onChange={() => setBrandFilter('All Brands')} />
                            <span className={`text-sm ${brandFilter === 'All Brands' ? 'text-black font-medium' : 'text-gray-600'}`}>All Brands</span>
                        </label>
                        {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === brand ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                    {brandFilter === brand && <Check size={10} className="text-white" />}
                                </div>
                                <input type="radio" name="brand" className="hidden" checked={brandFilter === brand} onChange={() => setBrandFilter(brand)} />
                                <span className={`text-sm ${brandFilter === brand ? 'text-black font-medium' : 'text-gray-600'}`}>{brand}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 min-w-0">
                {/* Sort & Count Bar */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-500"><span className="font-medium text-black">{filteredProducts.length}</span> Results</p>
                    
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                                Sort by: <span className="text-gray-500 capitalize">{sortBy.replace('-', ' ')}</span> <ChevronDown size={14} />
                            </div>
                            <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                                <div className="bg-white border border-gray-100 shadow-xl rounded-lg p-1 w-40 flex flex-col">
                                    <button onClick={() => setSortBy('featured')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'featured' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'}`}>Featured</button>
                                    <button onClick={() => setSortBy('price-asc')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'price-asc' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'}`}>Price: Low to High</button>
                                    <button onClick={() => setSortBy('price-desc')} className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${sortBy === 'price-desc' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'}`}>Price: High to Low</button>
                                </div>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                        <div className="hidden md:flex gap-1">
                            <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}><Grid size={16}/></button>
                            <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}><List size={16}/></button>
                        </div>
                    </div>
                </div>

                {/* PRODUCTS GRID */}
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                        <div 
                            key={product.id} 
                            className={`group cursor-pointer bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ${viewMode === 'list' ? 'flex gap-6 p-4 border-gray-100' : ''}`} 
                            onClick={() => navigateTo('product', product)}
                        >
                            <div className={`relative bg-[#f8f8f8] overflow-hidden ${viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-square'}`}>
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                
                                {viewMode === 'grid' && (
                                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">{product.brand}</span>
                                    </div>
                                )}
                                {product.price > 12000 && viewMode === 'grid' && (
                                     <div className="absolute top-3 right-3 bg-[#E8A0BF] text-white text-[8px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">Best Seller</div>
                                )}

                                {/* Quick Add Overlay (Desktop) */}
                                {viewMode === 'grid' && (
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block bg-gradient-to-t from-black/60 to-transparent pt-12">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                            className="w-full bg-white text-black py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2 rounded-lg"
                                        >
                                            <ShoppingBag size={14} /> Add to Cart
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : 'pt-4 pb-2 px-2'}`}>
                                <div className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1.5">{product.category}</div>
                                <h3 className={`font-serif text-gray-900 leading-tight ${viewMode === 'list' ? 'text-xl mb-2' : 'text-base mb-2 line-clamp-2 min-h-[2.5em]'}`}>{product.name}</h3>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="text-base font-medium font-serif">₹{product.price.toLocaleString()}</p>
                                    {/* Mobile/Grid Icon Add */}
                                    <button 
                                        className="md:hidden w-8 h-8 bg-black text-white rounded-full flex items-center justify-center active:scale-95"
                                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                                {viewMode === 'list' && (
                                    <div className="mt-4 flex gap-3">
                                        <button 
                                            className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-800 transition-colors"
                                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                        >
                                            Add to Cart
                                        </button>
                                        <button className="text-xs font-medium border border-gray-200 px-4 py-2 rounded hover:border-black transition-colors">View Details</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        ))
                    ) : (
                        <div className="col-span-full py-32 text-center">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300"><Search size={36} /></div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">No matches found</h3>
                            <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query.</p>
                            <button onClick={() => {setSearchQuery(''); setBrandFilter('All Brands'); setFilter('All');}} className="text-[#E8A0BF] text-sm font-medium hover:text-black transition-colors underline underline-offset-4">Clear all filters</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER (Hidden/Removed per request on mobile shop, but kept component if needed for tablet/desktop future use or generic filter drawer) */}
      {/* Code kept clean, but the trigger button is removed from mobile header as requested */}
    </div>
  );
};

const BlogPostView = ({ post, navigateTo }) => {
  return (
    <div className="animate-fade-in bg-white min-h-screen pb-24">
      {/* Navigation Breadcrumb */}
      <div className="px-6 py-4 border-b border-gray-100 sticky top-20 bg-white z-40 flex gap-2 text-xs text-gray-500 items-center">
          <button onClick={() => navigateTo('blog')} className="hover:text-black flex items-center gap-1"><ArrowLeft size={12}/> Journal</button> 
          <span className="text-gray-300">/</span>
          <span className="text-[#E8A0BF] truncate">{post.title}</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
            <span className="text-[#E8A0BF] font-bold tracking-widest uppercase text-[10px] mb-3 block">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{post.author || 'Editorial'}</span>
            </div>
        </div>

        <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden mb-10 shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-gray mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

const BlogView = ({ navigateTo }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Clinical Science', 'Ingredient Spotlight', 'Treatment Protocols', 'Safety & Compliance'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
      <div className="bg-black text-white pt-28 pb-12 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#E8A0BF] tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block">The Journal</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Clinical Insights</h1>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-200'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredPosts.map(post => (
             <div key={post.id} onClick={() => navigateTo('blog-post', post)} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[16/9] overflow-hidden mb-4 rounded-lg bg-gray-100">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm">
                      {post.category}
                   </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mb-2">
                    <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-900 leading-tight group-hover:text-[#E8A0BF] transition-colors">{post.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <button 
                    className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wide mt-auto group-hover:gap-3 transition-all pt-2"
                >
                    Read <ArrowRight size={12} />
                </button>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductView = ({ product, addToCart, navigateTo }) => {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const images = [product.image, product.image, product.image, product.image];

  const similarProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="animate-fade-in bg-white min-h-screen pb-24">
      <div className="px-6 py-4 border-b border-gray-100 flex gap-2 text-xs text-gray-500 sticky top-20 bg-white z-40">
          <button onClick={() => navigateTo('shop')} className="hover:text-black flex items-center gap-1"><ArrowLeft size={12}/> Back to Shop</button> 
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden w-full relative">
                <img src={images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <div key={idx} onClick={() => setActiveImg(idx)} className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImg === idx ? 'border-[#E8A0BF]' : 'border-transparent'}`}><img src={img} alt="" className="w-full h-full object-cover" /></div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="text-[#E8A0BF] text-[10px] font-bold tracking-widest uppercase mb-2">{product.category}</div>
            <h1 className="font-serif text-3xl md:text-5xl mb-2 leading-tight text-gray-900">{product.name}</h1>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{product.brand}</div>
            
            <div className="flex items-baseline gap-4 mb-6 border-b border-gray-100 pb-6">
                <span className="text-3xl font-medium">₹{product.price.toLocaleString()}</span>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">In Stock</span>
            </div>
            
            <div className="text-gray-600 leading-relaxed mb-8 font-light text-base prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.details }} />
            
            <div className="bg-gray-50 p-5 rounded-xl mb-8">
              <h3 className="font-serif text-lg mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600"><span className="text-[#E8A0BF] shrink-0">✦</span> {benefit}</li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50 md:static md:p-0 md:border-0 md:bg-transparent">
              <div className="flex gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg h-12 w-32 bg-white">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-lg">-</button>
                    <span className="font-medium text-base w-8 text-center">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-lg">+</button>
                  </div>
                  <Button className="flex-1 h-12 text-sm uppercase tracking-wide" onClick={() => addToCart(product, qty)}>Add to Cart</Button>
              </div>
            </div>
            
            {/* Auto-fill WhatsApp Message for Wholesale Inquiry */}
            <div className="mt-6">
                <a 
                href={`https://wa.me/919916404202?text=${encodeURIComponent(`Hello, I am interested in wholesale pricing for ${product.name}. My business type: Clinic / Salon / Reseller / Medical practitioner.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 border border-[#E8A0BF] text-[#E8A0BF] hover:bg-[#E8A0BF] hover:text-black transition-colors rounded font-medium text-sm uppercase tracking-wide"
                >
                Ask About Wholesale Pricing
                </a>
                <p className="text-xs text-gray-400 mt-2 text-center">*Professional verification required for bulk rates.</p>
            </div>

            {/* Spacer for mobile fixed bottom button */}
            <div className="h-20 md:hidden"></div> 
          </div>
        </div>

        {/* SIMILAR PRODUCTS SECTION */}
        {similarProducts.length > 0 && (
            <div className="mt-24 border-t border-gray-100 pt-16">
                <SectionHeader title="Similar Products" subtitle="You might also be interested in" center={false} />
                
                {/* Mobile Horizontal Scroll */}
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {similarProducts.map(product => (
                          <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                            <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden mb-4">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                            <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-[#E8A0BF] transition-colors truncate">{product.name}</h3>
                            <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
                          </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

/* --- POLICY VIEWS --- */

const TermsOfServiceView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Terms & Conditions</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Professional Engagement Guidelines</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-[#E8A0BF] pl-4">1. Professional Use Only</h3>
                  <p>By purchasing from Cosmatrix International, you explicitly certify that you are a licensed medical professional or an authorized representative of a licensed clinic. Our products, particularly injectables and professional-grade peels, are strictly for professional administration. We reserve the right to cancel orders that fail credential verification.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-[#E8A0BF] pl-4">2. Product Liability & Usage</h3>
                  <p>Cosmatrix acts solely as an authorized distributor. While we guarantee the authenticity and cold-chain integrity of our products, we are not the manufacturer. Any adverse reactions should be reported to the manufacturer directly. Cosmatrix is not liable for misuse, improper administration, or off-label use of products.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-[#E8A0BF] pl-4">3. Pricing & Availability</h3>
                  <p>Prices are subject to change without notice due to international exchange rates and manufacturer adjustments. We reserve the right to limit quantities per client to ensure equitable distribution of high-demand stock.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4 border-l-2 border-[#E8A0BF] pl-4">4. Governing Law</h3>
                  <p>These terms shall be governed by and defined following the laws of India. Cosmatrix International and yourself irrevocably consent that the courts of Karnataka shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
              </section>
          </div>
      </div>
    </div>
  );
   
  const ReturnPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Return Policy</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Guidelines for Product Returns</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <div className="bg-red-50 border border-red-100 p-6 rounded-xl text-sm text-red-800 mb-8">
                  <strong>Important:</strong> Due to the temperature-sensitive nature of biological goods, standard "change of mind" returns are strictly prohibited to ensure patient safety.
              </div>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">1. Eligibility for Returns</h3>
                  <p>Returns are only accepted under the following conditions:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>The product was delivered in a damaged condition (broken vials, crushed box).</li>
                      <li>The product received does not match the invoice (wrong item sent).</li>
                      <li>The product is expired upon receipt.</li>
                  </ul>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">2. Return Window</h3>
                  <p>You must report any issues within <strong>24 hours of delivery</strong>. Reports made after this window cannot be verified against our logistics data and will be rejected.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">3. Return Process</h3>
                  <p>To initiate a return:</p>
                  <ol className="list-decimal pl-5 mt-2 space-y-2">
                      <li>Take clear photos/video of the unboxing and the damaged item.</li>
                      <li>Email us at support@cosmatrix.com with your Order ID.</li>
                      <li>Our team will verify the claim and arrange for a reverse pickup if applicable.</li>
                  </ol>
              </section>
          </div>
      </div>
    </div>
  );
   
  const RefundPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Refund Policy</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Financial Processing & Timelines</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">1. Refund Approval</h3>
                  <p>Refunds are initiated only after the returned product has reached our warehouse and passed a quality inspection. If the product is found to be used, tampered with, or not in its original condition (unless damaged during transit), the refund request will be denied.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">2. Processing Timeline</h3>
                  <p>Once approved, the refund will be processed within <strong>5-7 business days</strong>. The amount will be credited back to the original source of payment (Credit Card, UPI, or Bank Transfer).</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">3. Cancellations</h3>
                  <p>Orders can be cancelled for a full refund only if they have not yet been dispatched. Once the shipping label is generated and the cold-chain packaging is sealed, the order cannot be cancelled.</p>
              </section>
          </div>
      </div>
    </div>
  );
   
  const ShippingPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Shipping Policy</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Ensuring clinical integrity from warehouse to clinic.</p>
          </div>
      </div>
       
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Thermometer size={24} className="text-[#E8A0BF] mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">Cold Chain</h4>
                  <p className="text-xs text-gray-500 mt-2">Insulated packaging for biologics.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Clock size={24} className="text-[#E8A0BF] mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">24h Dispatch</h4>
                  <p className="text-xs text-gray-500 mt-2">Same-day processing for orders before 2 PM.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <Truck size={24} className="text-[#E8A0BF] mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-gray-900">Pan-India</h4>
                  <p className="text-xs text-gray-500 mt-2">Serviceable to 19,000+ pin codes.</p>
              </div>
          </div>
   
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">1. Cold Chain Protocol</h3>
                  <p>Temperature-sensitive items (peptides, growth factors, certain injectables) are packed in medical-grade insulated boxes with gel ice packs. We continually monitor transit times to ensure product stability upon arrival. Please refrigerate immediately upon receipt.</p>
              </section>
   
              <section>
                  <h3 className="font-serif text-xl text-gray-900 mb-4">2. Delivery Timelines</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Metro Cities:</strong> 24-48 Hours.</li>
                      <li><strong>Tier 1 & 2 Cities:</strong> 2-4 Business Days.</li>
                      <li><strong>Rest of India:</strong> 5-7 Business Days.</li>
                  </ul>
              </section>
          </div>
      </div>
    </div>
  );
   
  const PrivacyPolicyView = () => (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Privacy Policy</h1>
              <p className="text-gray-400 font-light text-sm md:text-base">Data Protection & Confidentiality</p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed">
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#E8A0BF]"><ShieldCheck size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">1. Data Collection</h3>
                  </div>
                  <p>We strictly collect only the information necessary to process wholesale orders and verify professional credentials. This includes your medical license number, clinic address, and contact details.</p>
              </section>
              
              <section>
                  <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#E8A0BF]"><FileText size={16}/></div>
                      <h3 className="font-serif text-xl text-gray-900">2. Data Usage</h3>
                  </div>
                  <p>We do not share your client data with any third-party marketing agencies. Your information is used strictly for invoicing, shipping (shared with logistics partners), and regulatory compliance.</p>
              </section>
          </div>
      </div>
    </div>
  );

/* IMPROVED ABOUT VIEW */
const AboutView = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const stats = [
      { id: 1, val: "500+", label: "Partner Clinics" },
      { id: 2, val: "100%", label: "Authentic Guarantee" },
      { id: 3, val: "5", label: "Distribution Hubs" },
      { id: 4, val: "24h", label: "Dispatch Time" },
    ];
    
    return (
      <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
        {/* HERO */}
        <div className="relative bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden">
             <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"></div>
             <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="text-[#E8A0BF] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block animate-slide-up">Established 2020</span>
                <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                  Redefining <br/><span className="italic text-gray-400 font-light">Supply Chain Purity</span>
                </h1>
                <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Cosmatrix bridges the gap between elite Swiss & Asian laboratories and India's leading aesthetic clinics.
                </p>
             </div>
        </div>
   
        {/* MISSION SPLIT */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="/image/blog4.jpg" alt="Laboratory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded max-w-xs shadow-lg">
                   <p className="font-serif text-lg italic">"Safety is not a feature. It is the foundation of aesthetic medicine."</p>
                   <p className="text-xs font-bold uppercase tracking-widest mt-2">— Director's Note</p>
                </div>
             </div>
             <div>
                <span className="text-[#E8A0BF] font-bold tracking-widest uppercase text-xs mb-3 block">Our Mission</span>
                <h2 className="font-serif text-3xl md:text-5xl mb-6 text-gray-900 leading-tight">Beyond Distribution: <br/>Guardians of Quality</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                   <p>
                     In an industry often clouded by uncertainty, Cosmatrix stands as a beacon of authenticity. We don't just move boxes. We verify cold-chain integrity, audit batch numbers, and ensure that every vial performs exactly as intended.
                   </p>
                   <p>
                     Founded by a team of pharmacists and logistics experts, we recognized a critical gap in the market: the disconnect between premium manufacturers and the clinics that need them. We closed that gap.
                   </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
                   <div>
                       <h4 className="font-serif text-xl mb-1">Switzerland</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-widest">Sourcing Hub</p>
                   </div>
                   <div>
                       <h4 className="font-serif text-xl mb-1">South Korea</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-widest">Innovation Lab</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
   
        {/* STATS STRIP */}
        <div className="bg-black text-white py-16">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {stats.map(stat => (
                 <div key={stat.id} className="p-2">
                    <div className="font-serif text-4xl md:text-5xl text-[#E8A0BF] mb-2">{stat.val}</div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                 </div>
              ))}
           </div>
        </div>
   
        {/* THE COLD CHAIN PROMISE */}
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
          <SectionHeader title="The Cold Chain Promise" subtitle="How we protect the efficacy of sensitive biologicals" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Thermometer size={24} className="text-[#E8A0BF]" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Temp-Controlled Storage</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   Our warehouses maintain strict 2°C - 8°C zones for peptides and growth factors, ensuring zero degradation before dispatch.
                 </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} className="text-[#E8A0BF]" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Batch Verification</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   Every shipment is cross-referenced with manufacturer lot numbers. We employ a 3-step authentication process for every box.
                 </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Clock size={24} className="text-[#E8A0BF]" />
                 </div>
                 <h3 className="font-serif text-xl mb-3">Expedited Logistics</h3>
                 <p className="text-sm text-gray-500 font-light leading-relaxed">
                   We utilize priority air-cargo partners to minimize transit time. Insulated packaging keeps products stable for up to 72 hours.
                 </p>
              </div>
          </div>
        </div>
   
        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h3 className="font-serif text-2xl mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
              {FAQS.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all hover:border-gray-300">
                      <button 
                          className="w-full px-6 py-5 text-left flex justify-between items-center group"
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                          <span className={`font-serif text-lg ${openFaq === index ? 'text-[#E8A0BF]' : 'text-gray-900'} transition-colors`}>{faq.q}</span>
                          <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
    )
};

const ContactView = ({ showToast }) => {
  const [formData, setFormData] = useState({ name: '', clinicName: '', email: '', phone: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `New Inquiry:%0A%0AName: ${encodeURIComponent(formData.name)}%0AClinic: ${encodeURIComponent(formData.clinicName)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919916404202?text=${whatsappMessage}`, '_blank');
    showToast("Opening WhatsApp...", "success");
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 pointer-events-none"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#E8A0BF] tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up">Partner With Us</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>Get in Touch</h1>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>Dedicated support for clinics, dermatologists, and distribution partners across India.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info Column */}
            <div className="space-y-10">
                <div>
                    <h2 className="font-serif text-3xl text-gray-900 mb-6">Cosmatrix International</h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                        We are India's premier distributor of aesthetic clinical formulations. 
                        Whether you are a clinic looking to stock premium products or a manufacturer looking for a distribution partner, we are here to assist.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#E8A0BF] shrink-0 shadow-sm">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg mb-1">Phone Support</h4>
                                <p className="text-sm text-gray-500 mb-1">+91 99164 04202</p>
                                <p className="text-xs text-gray-400">Mon-Sat: 10am - 7pm IST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#E8A0BF] shrink-0 shadow-sm">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg mb-1">Email</h4>
                                <p className="text-sm text-gray-500 mb-1">cosmatriixx@gmail.com</p>
                                <p className="text-xs text-gray-400">24/7 Digital Support</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#E8A0BF] shrink-0 shadow-sm">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg mb-1">Headquarters</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    123 Beauty Boulevard, Koramangala<br/>
                                    Bangalore, Karnataka 560034<br/>
                                    India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof / Trust */}
                <div className="pt-10 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Trusted By Professionals</h4>
                    <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                         <span className="font-serif text-xl text-gray-800 font-bold">Glutax</span>
                         <span className="font-serif text-xl text-gray-800 font-bold">Veniscy</span>
                         <span className="font-serif text-xl text-gray-800 font-bold">Miracle White</span>
                    </div>
                </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8A0BF] rounded-full filter blur-[60px] opacity-20 pointer-events-none"></div>
                
                <h3 className="font-serif text-2xl mb-2">Send an Inquiry</h3>
                <p className="text-sm text-gray-500 mb-8">Fill out the form below and our wholesale team will contact you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Contact Name</label>
                            <input required name="name" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Clinic / Business</label>
                            <input required name="clinicName" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.clinicName} onChange={handleChange} />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Email Address</label>
                            <input required name="email" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Phone Number</label>
                            <input required name="phone" type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors" value={formData.phone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Message</label>
                        <textarea required name="message" rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none focus:border-black transition-colors" value={formData.message} onChange={handleChange}></textarea>
                    </div>

                    <Button type="submit" className="w-full py-4 text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 transition-all duration-300">
                        Send Inquiry
                    </Button>
                    <p className="text-[10px] text-gray-400 text-center mt-4">By submitting this form, you agree to our privacy policy. We respect your data.</p>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

/* --- Main App --- */

export default function CosmatrixApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null); 
  const [shopFilter, setShopFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState(''); // Global search state
  const [toast, setToast] = useState(null); 

  // Initialize browser history state on first load
  useEffect(() => {
    // Replace the initial state so we have a valid history entry to pop back to
    window.history.replaceState({ page: 'home' }, '', window.location.search);
  }, []);

  // Set Favicon / Browser Tab Icon (Robust Fix with Cache Busting)
  useEffect(() => {
    // 1. Find all existing favicon links and remove them
    const existingIcons = document.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach(el => el.remove());

    // 2. Create a new link element
    const link = document.createElement('link');
    link.type = 'image/jpeg'; 
    link.rel = 'shortcut icon';
    
    // 3. Add a timestamp query param to force browser to ignore cache and reload the image
    link.href = `/image/logo-t.jpg?v=${new Date().getTime()}`; 
    
    // 4. Append it to the document head
    document.head.appendChild(link);
  }, []);

  // Listen for Browser Back/Forward buttons (popstate event)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        // Restore state from history
        setCurrentPage(event.state.page);
        if (event.state.product) setSelectedProduct(event.state.product);
        if (event.state.post) setSelectedPost(event.state.post);
        // Also restore filter if needed, though simpler to reset or persist in history too
      } else {
        // Fallback if no state exists
        setCurrentPage('home');
      }
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Modified navigateTo function to push history state
  const navigateTo = (page, item = null) => {
    if (page === 'product' && item) setSelectedProduct(item);
    if (page === 'blog-post' && item) setSelectedPost(item);
    
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    // Push new state to browser history
    // We construct a state object that holds necessary data to reconstruct the view
    const stateObj = { 
        page, 
        product: page === 'product' ? item : null,
        post: page === 'blog-post' ? item : null
    };
    
    // Push state with a query param for visual clarity (optional, but good practice)
    // Using query params (?page=shop) instead of path (/shop) avoids 404s on refresh in some static hosting environments
    const url = `?page=${page}`; 
    window.history.pushState(stateObj, '', url);
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...prev, { ...product, quantity }];
    });
    setCartOpen(true);
    showToast(`Added ${product.name} to cart`, 'success');
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  
  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const handlePayment = async (customerDetails) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    localStorage.setItem('temp_cart', JSON.stringify(cart));
    localStorage.setItem('temp_user', JSON.stringify(customerDetails));

    try {
        const response = await fetch('https://cosmatrix-server.onrender.com/api/phonepe/pay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: customerDetails.name,
                mobile: customerDetails.phone,
                amount: total, 
                MUID: "MUID" + Date.now(), 
                transactionId: "T" + Date.now(), 
            }),
        });
        const data = await response.json();
        
        if (data.url) {
            window.location.href = data.url; 
        } else {
            showToast('Payment initiation failed', 'error');
        }
    } catch (error) {
        console.error("Payment Error:", error);
        const confirmSim = window.confirm("Backend unreachable. Simulate Success?");
        if(confirmSim) {
             // Use navigateTo instead of direct pushState manually here to keep consistent
             navigateTo('success');
             // But for success page specifically we might want to replace history
             // window.history.pushState({}, "", "/payment/success?tid=SIMULATED-123");
             setCartOpen(false);
        }
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-[#E8A0BF] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@200;300;400;500;600&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ccc; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-marquee { animation: marquee 20s linear infinite; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translate(0, 40px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {currentPage === 'success' ? (
        <PaymentSuccessView navigateTo={navigateTo} showToast={showToast} />
      ) : (
        <>
          <Navigation 
            currentPage={currentPage} 
            setCurrentPage={navigateTo}
            cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            toggleCart={() => setCartOpen(true)}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            setShopFilter={setShopFilter}
            setSearchQuery={setSearchQuery}
          />

          <main className="flex-grow">
            {currentPage === 'home' && <HomeView navigateTo={navigateTo} addToCart={addToCart} setShopFilter={setShopFilter} />}
            {currentPage === 'shop' && <ShopView navigateTo={navigateTo} addToCart={addToCart} filter={shopFilter} setFilter={setShopFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {currentPage === 'product' && selectedProduct && <ProductView product={selectedProduct} addToCart={addToCart} navigateTo={navigateTo} />}
            {currentPage === 'blog' && <BlogView navigateTo={navigateTo} />}
            {currentPage === 'blog-post' && selectedPost && <BlogPostView post={selectedPost} navigateTo={navigateTo} />}
            {currentPage === 'about' && <AboutView />}
            {currentPage === 'contact' && <ContactView showToast={showToast} />}
            
            {/* --- POLICY ROUTES --- */}
            {currentPage === 'terms' && <TermsOfServiceView />}
            {currentPage === 'privacy' && <PrivacyPolicyView />}
            {currentPage === 'shipping' && <ShippingPolicyView />}
            {currentPage === 'return-policy' && <ReturnPolicyView />}
            {currentPage === 'refund-policy' && <RefundPolicyView />}
          </main>

          <Footer setCurrentPage={navigateTo} showToast={showToast} />

          <CartDrawer 
            isOpen={cartOpen} 
            onClose={() => setCartOpen(false)}
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            checkout={handlePayment} 
          />
        </>
      )}
    </div>
  );
}