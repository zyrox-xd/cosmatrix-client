import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, Trash2, Plus, Minus, Mail, Phone, MapPin, ShieldCheck, Building2, Stethoscope, FileText, Award, Search, ChevronRight, Filter, Check, ChevronDown, Star, Sparkles, Truck, Globe, ArrowLeft, Calendar, User, Grid, List, ArrowUpRight, ArrowUpDown, Thermometer, Clock, Map, SlidersHorizontal } from 'lucide-react';

/* --- EMAILJS CONFIGURATION --- */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
  },
  {
    id: 3,
    name: "Glutax 75GX DCRP 750000",
    category: "Injection",
    brand: "Glutax",
    price: 12500,
    image: "/image/glutax-dcrp.jpg",
    description: "DNA Cell Revitalize Process | 14 Sessions",
    details: `
      <strong>Glutax 75GX DCRP — DNA Cell Revitalize Process</strong><br/><br/>
      Experience the transformative power of the Glutax 75GX DCRP. This comprehensive 14-session therapy is specifically designed to arrest aging at the cellular level using the DNA Cell Revitalize Process.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>DCRP DNA Cell Revitalize – 750,000 mg</li>
        <li>DNA Collagen Nano – 5,000 mg</li>
        <li>Selenium – 1,800 mg</li>
        <li>High Grade Grape Stem Cell</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Repairs damaged cellular DNA</li>
        <li>Provides sustained, long-term whitening</li>
        <li>Combats oxidative stress aggressively</li>
      </ul>
      <br/>
      Reveal a younger, more resilient complexion.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["DCRP Technology", "14 Sessions", "DNA Repair", "Sustained Glow"],
    sku: "GLU-75GX-DCRP",
    volume: "14 Sessions"
  },
  {
    id: 4,
    name: "Glutax 20000000GN+",
    category: "Injection",
    brand: "Glutax",
    price: 13500,
    image: "/image/Gluta-20000000GN.jpg",
    description: "Pico-QuadNA ReCombined White | 20 Million mg",
    details: `
      <strong>Glutax 20000000GN+ — Pico-QuadNA Technology</strong><br/><br/>
      Experience rapid absorption with the Glutax 20000000GN+. Utilizing Pico-QuadNA technology, this formulation breaks down active ingredients into microscopic particles for immediate cellular uptake.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pico-QuadNA Glutathione – 20,000,000 mg</li>
        <li>White Elements – 5,000 mg</li>
        <li>Epidermal Growth Factor – 4,000 mg</li>
        <li>Multivitaminico – 3,000 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Fastest onset of whitening action</li>
        <li>Deeply penetrates stubborn pigmentation</li>
        <li>Enhances natural skin barrier</li>
      </ul>
      <br/>
      Reveal instant radiance with precision science.<br/>
      <em class="text-xs text-gray-400">Note: Professional administration recommended.</em>
    `,
    benefits: ["20 Million mg", "Pico-QuadNA Tech", "DNA/RNA Repair", "Deepest Whitening"],
    sku: "GLU-20M-GN",
    volume: "10 Sessions"
  },
  {
    id: 5,
    name: "Glutax 2000000GX",
    category: "Injection",
    brand: "Glutax",
    price: 11500,
    image: "/image/Glutax-2000000GX.jpg",
    description: "DualNA Premium Recombined Cell",
    details: `
      <strong>Glutax 2000000GX — DualNA Premium Recombined Cell</strong><br/><br/>
      Experience the synergy of DNA and RNA repair with Glutax 2000000GX. This balanced formulation provides a massive 2 Million GX dose while focusing on skin health and elasticity.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 2,000,000 GX</li>
        <li>DualNA Recombined Cell Complex</li>
        <li>Premium Collagen Extract</li>
        <li>Ascorbic Acid</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Dual action repair and whitening</li>
        <li>Improves skin elasticity</li>
        <li>Reduces fine lines and wrinkles</li>
      </ul>
      <br/>
      Reveal a healthy, youthful glow.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["2 Million GX", "DualNA Technology", "Recombined Cell", "Anti-Pigmentation"],
    sku: "GLU-2M-GX",
    volume: "10 Sessions"
  },
  {
    id: 6,
    name: "Miracle White 120,000mg",
    category: "Injection",
    brand: "Miracle White",
    price: 9200,
    image: "/image/mw-120000.jpg",
    description: "Royal Gold Booster | Nano Concentrated",
    details: `
      <strong>Miracle White 120,000mg — Royal Gold Booster</strong><br/><br/>
      Experience the radiance of the Royal Gold edition. Miracle White utilizes Nano Concentrated technology to deliver a potent 120,000mg dose for intense brightening.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Nano Concentrated Glutathione – 120,000 mg</li>
        <li>Kojic Acid – 4,000 mg</li>
        <li>Ascorbic Acid – 5,000 mg</li>
        <li>Epidermal Growth Factor – 3,000 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Targeted inhibition of tyrosinase</li>
        <li>Boosts skin luminosity instantly</li>
        <li>Fades dark spots and acne scars</li>
      </ul>
      <br/>
      Reveal your royal glow.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["120,000mg Strength", "Royal Gold Edition", "Nano Concentrated", "Radiance Booster"],
    sku: "MW-120K-GOLD",
    volume: "6 Sessions"
  },
  {
    id: 7,
    name: "Miracle White 99 MIL",
    category: "Injection",
    brand: "Miracle White",
    price: 8500,
    image: "/image/mw-99mil.jpg",
    description: "Polypeptide Complex Glutathione 99 MIL",
    details: `
      <strong>Miracle White 99 MIL — Polypeptide Complex</strong><br/><br/>
      Experience the premium holographic edition featuring a specialized Polypeptide Complex. This formula is designed not just for whitening, but for smoothing skin texture.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 99,000 mg</li>
        <li>Polypeptide Complex</li>
        <li>Thioctic Acid</li>
        <li>Multivitamins</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Smoothes rough skin texture</li>
        <li>Refines pores</li>
        <li>Delivers a uniform skin tone</li>
      </ul>
      <br/>
      Reveal flawless, porcelain skin.<br/>
      <em class="text-xs text-gray-400">Note: Professional use only.</em>
    `,
    benefits: ["Polypeptide Complex", "99 MIL Glutathione", "Texture Smoothing", "Holographic Edition"],
    sku: "MW-99MIL",
    volume: "6 Sessions"
  },
  {
    id: 8,
    name: "Miracle White 90,000mg",
    category: "Injection",
    brand: "Miracle White",
    price: 7800,
    image: "/image/mw-90000.jpg",
    description: "Enhance Nano Concentrated Formula",
    details: `
      <strong>Miracle White 90,000mg — Enhance Formula</strong><br/><br/>
      Experience the foundational Miracle White treatment. The Enhance series focuses on creating a uniform skin tone using a nano-concentrated formula for deep penetration.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Nano Glutathione – 90,000 mg</li>
        <li>Vitamin C – 3,500 mg</li>
        <li>Collagen Extract – 1,500 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Corrects uneven skin tone</li>
        <li>Hydrates from within</li>
        <li>Provides a natural brightening effect</li>
      </ul>
      <br/>
      Reveal a balanced, beautiful complexion.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["90,000mg", "Tone Correction", "Nano Technology", "High Absorption"],
    sku: "MW-90K",
    volume: "6 Sessions"
  },
  {
    id: 9,
    name: "NC24 Sakura Special 22M",
    category: "Bio-rejuvenation",
    brand: "Nc24",
    price: 8800,
    image: "/image/nc24-22m.jpg",
    description: "Japanese PDRN DNA Technology | Sakura Edition",
    details: `
      <strong>NC24 Sakura Special 22M — Japanese PDRN Technology</strong><br/><br/>
      Experience the delicate power of Sakura. This Japanese formulation infuses PDRN (Salmon DNA) with Cherry Blossom extracts for a unique pinkish glow.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Sakura Extract Stem Cell – 5,000 mg</li>
        <li>PDRN (Salmon DNA)</li>
        <li>Glutathione – 22,000,000 mg</li>
        <li>Collagene – 3,000 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Promotes a healthy pinkish radiance</li>
        <li>Regenerates skin cells with PDRN</li>
        <li>Powerful antioxidant protection</li>
      </ul>
      <br/>
      Reveal the bloom of youth.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["22,000,000mg", "Japanese PDRN DNA", "Sakura Extract", "Pinkish Glow"],
    sku: "NC24-SAKURA-22",
    volume: "10 Sessions"
  },
  {
    id: 10,
    name: "Glutax 2000GS",
    category: "Injection",
    brand: "Glutax",
    price: 9500,
    image: "/image/gl-2000gs.jpg",
    description: "ReCombined White with Ultrafiltration",
    details: `
      <strong>Glutax 2000GS — Ultrafiltration ReCombined White</strong><br/><br/>
      Experience the purity of Ultrafiltration. Contains 2000g of refined Glutathione formulated with Epidermal Growth Factors (EGF) for barrier repair.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ultrafiltration Glutathione – 2,000 g</li>
        <li>Epidermal Growth Factor – 2,000 mg</li>
        <li>Alpha Lipoic Acid – 500 mg</li>
        <li>Pro-Vitamin Complex</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Strengthens the skin barrier</li>
        <li>Delivers highly purified active ingredients</li>
        <li>Repairs environmental damage</li>
      </ul>
      <br/>
      Reveal protected, flawless skin.<br/>
      <em class="text-xs text-gray-400">Note: Professional administration recommended.</em>
    `,
    benefits: ["Ultrafiltration Tech", "Epidermal Growth Factor", "ReCombined White", "Barrier Repair"],
    sku: "GLU-2000GS",
    volume: "10 Sessions"
  },
  {
    id: 11,
    name: "Glutax 5GS Micro Advance",
    category: "Injection",
    brand: "Glutax",
    price: 6500,
    image: "/image/glutax-5gs-adv.jpg",
    description: "Cellular Ultra Skin Whitening + Anti Aging",
    details: `
      <strong>Glutax 5GS Micro Advance — Cellular Ultra Whitening</strong><br/><br/>
      Experience the evolution of a classic. The 'Advance' formula upgrades the proven 5GS with Vegetal and Ovine Placenta extracts for added anti-aging benefits.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 5,000 mg</li>
        <li>Vegetal Placenta</li>
        <li>Ovine Placenta Extract</li>
        <li>Ascorbic Acid – 3,000 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Combines whitening with active anti-aging</li>
        <li>Placenta extracts regenerate tissue</li>
        <li>Improves skin firmness</li>
      </ul>
      <br/>
      Reveal timeless beauty.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["Vegetal Placenta", "Ovine Placenta", "Micro-Absorption", "Anti-Aging Focus"],
    sku: "GLU-5GS-ADV",
    volume: "12 Sessions"
  },
  {
    id: 12,
    name: "Glutax 5GS Micro",
    category: "Injection",
    brand: "Glutax",
    price: 5500,
    image: "/image/glutax-5gs.jpg",
    description: "Classic Cellular Ultra Whitening",
    details: `
      <strong>Glutax 5GS Micro — The Classic Standard</strong><br/><br/>
      Experience the reliable efficacy of the industry standard. Containing 5000mg of Glutathione, this is the perfect entry-level or maintenance therapy.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 5,000 mg</li>
        <li>Ascorbic Acid – 1,500 mg</li>
        <li>Collagen Extract – 350 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Proven, stable formulation</li>
        <li>Maintains skin brightness</li>
        <li>Supports general antioxidant health</li>
      </ul>
      <br/>
      Reveal your natural glow.<br/>
      <em class="text-xs text-gray-400">Note: Ideal for maintenance.</em>
    `,
    benefits: ["Proven Formula", "5000mg Glutathione", "Ascorbic Acid", "Collagen Extract"],
    sku: "GLU-5GS-MICRO",
    volume: "6 Sessions"
  },
  {
    id: 13,
    name: "Royal Ultra Booster",
    category: "Booster",
    brand: "Nouveaux", 
    price: 4800,
    image: "/image/Royal-Ultra.jpg",
    description: "Exclusive IV Booster Shots",
    details: `
      <strong>Royal Ultra Booster — High-Concentration Add-on</strong><br/><br/>
      Experience the ultimate boost. Designed by NouveauxIV, this specialized shot is intended to be added to other drips to supercharge their effects.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Concentrated Growth Factors</li>
        <li>Bio-Active Peptides</li>
        <li>Potent Antioxidant Blend</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Amplifies the results of standard whitening drips</li>
        <li>Provides an instant radiance kick</li>
        <li>100% absorption rate</li>
      </ul>
      <br/>
      Reveal accelerated results.<br/>
      <em class="text-xs text-gray-400">Note: To be used as an additive, not a standalone drip.</em>
    `,
    benefits: ["Instant Result", "100% Absorption", "IV Booster", "NouveauxIV Formula"],
    sku: "ROYAL-ULTRA",
    volume: "10ml Vials"
  },
  {
    id: 14,
    name: "Glutax 10000000GX",
    category: "Injection",
    brand: "Glutax",
    price: 13500,
    image: "/image/IMG_1827.jpg",
    description: "DNA & RNA Premium Recombined Cell | 10 Million GX",
    details: `
      <strong>Glutax 10000000GX — Stem Cell Complex</strong><br/><br/>
      Experience the rejuvenating power of Grape Stem Cells. This premium formulation combines a 10 Million GX glutathione dose with powerful botanicals for deep hydration and protection.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 10,000,000 GX</li>
        <li>Grape Stem Cell</li>
        <li>Apple Stem Cell</li>
        <li>Argan Fruit Stem Cell</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Offers SPF 100 UV protection from within</li>
        <li>Deeply hydrates dry, tired skin</li>
        <li>Combats photo-aging</li>
      </ul>
      <br/>
      Reveal protected, hydrated skin.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["10 Million GX", "Stem Cell Complex", "SPF 100 Protection", "Deep Hydration"],
    sku: "GLU-10M-GX",
    volume: "10 Sessions"
  },
  {
    id: 15,
    name: "Glutax 30000000GS",
    category: "Injection",
    brand: "Glutax",
    price: 15500,
    image: "/image/IMG_1821.jpg",
    description: "Extremely Tremendous White | 30 Million GS",
    details: `
      <strong>Glutax 30000000GS — Extremely Tremendous White</strong><br/><br/>
      Experience one of the highest concentrations available. The 30000000GS formula is designed for those seeking rapid, "tremendous" whitening results using Nano Absorption technology.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 30,000,000 GS</li>
        <li>Pearl Extract</li>
        <li>Collagen Holocell</li>
        <li>Selenium</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>High-impact depigmentation</li>
        <li>Pearl extract adds a lustrous sheen</li>
        <li>Rapid uptake by skin cells</li>
      </ul>
      <br/>
      Reveal tremendous radiance.<br/>
      <em class="text-xs text-gray-400">Note: Professional administration required.</em>
    `,
    benefits: ["30 Million GS", "Pearl Extract", "Tremendous White", "Nano Absorption"],
    sku: "GLU-30M-GS",
    volume: "10 Sessions"
  },
  {
    id: 16,
    name: "Shiro Advance Pro Drip",
    category: "Injection",
    brand: "Shiro",
    price: 9500,
    image: "/image/IMG_1830.jpg",
    description: "Japanese Whitening Formula | Pro Drip",
    details: `
      <strong>Shiro Advance Pro Drip — Authentic Japanese Formula</strong><br/><br/>
      Experience the Japanese standard of crystal clear skin. "Shiro" means White, and this Pro Drip series focuses on detoxification and clarity.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Japanese Glutathione Complex</li>
        <li>Tranexamic Acid</li>
        <li>Thioctic Acid</li>
        <li>High-Dose Vitamin C</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Treats melasma and redness</li>
        <li>Detoxifies the liver for clearer skin</li>
        <li>Promotes a translucent, "glass skin" look</li>
      </ul>
      <br/>
      Reveal crystal clear beauty.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["Japanese Origin", "Pro Drip Series", "Crystal Skin", "Detoxification"],
    sku: "SHIRO-PRO",
    volume: "10 Sets"
  },
  {
    id: 17,
    name: "Relumins Advanced 2000mg",
    category: "Injection",
    brand: "Relumins",
    price: 8500,
    image: "/image/IMG_1833.jpg",
    description: "Advanced Glutathione 2000mg | Vials",
    details: `
      <strong>Relumins Advanced 2000mg — US Clinical Standard</strong><br/><br/>
      Experience the trusted quality of Relumins. This US-standard clinical glutathione set contains 1500mg of Lyophilized Glutathione and a separate 500mg Vitamin C ampoule for maximum stability.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Lyophilized Glutathione – 1,500 mg</li>
        <li>Vitamin C (Ascorbic Acid) – 500 mg</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Clinical-grade purity</li>
        <li>Separate vitamin C ensures maximum potency upon mixing</li>
        <li>Trusted by dermatologists worldwide</li>
      </ul>
      <br/>
      Reveal authentic, healthy brightness.<br/>
      <em class="text-xs text-gray-400">Note: Requires reconstitution.</em>
    `,
    benefits: ["Relumins Authentic", "2000mg Potency", "Vitamin C Booster", "Clinical Grade"],
    sku: "REL-2000-VIALS",
    volume: "8 Vials + 8 Solvents"
  },
  {
    id: 18,
    name: "Hyaron Prefilled Injection",
    category: "Filler", 
    brand: "Daehan Nupharm",
    price: 6000,
    image: "/image/IMG_1838.jpg",
    description: "Sodium Hyaluronate 2.5ml | Skin Booster",
    details: `
      <strong>Hyaron Prefilled Injection — Sodium Hyaluronate Booster</strong><br/><br/>
      Experience the ultimate hydration with Hyaron. A powerful skin booster containing pure Sodium Hyaluronate, it delivers the "Glass Skin" effect by deeply moisturizing from within.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Sodium Hyaluronate – 25 mg / 2.5ml</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Replenishes lost moisture</li>
        <li>Smoothes fine lines</li>
        <li>Creates a plump, dewy texture</li>
      </ul>
      <br/>
      Reveal the glass skin look.<br/>
      <em class="text-xs text-gray-400">Note: Prefilled syringe format.</em>
    `,
    benefits: ["Sodium Hyaluronate", "Deep Hydration", "Glass Skin Effect", "Prefilled Syringe"],
    sku: "HYARON-10",
    volume: "10 Syringes (2.5ml)"
  },
  {
    id: 19,
    name: "Glutax 8000000GS",
    category: "Injection",
    brand: "Glutax",
    price: 12000,
    image: "/image/IMG_1824.jpg",
    description: "Ultimate ReCombined White | 8 Million GS",
    details: `
      <strong>Glutax 8000000GS — Ultimate ReCombined White</strong><br/><br/>
      Experience the ultimate in speed and efficacy. The 8000000GS series features high-dose glutathione combined with miRNA White Elements for fast-acting pigmentation correction.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 8,000,000 GS</li>
        <li>miRNA White Elements</li>
        <li>Epidermal Growth Factor</li>
        <li>Vitamin Complex</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Rapid absorption formula</li>
        <li>Targets gene expression for pigmentation</li>
        <li>Provides comprehensive skin nourishment</li>
      </ul>
      <br/>
      Reveal your ultimate white.<br/>
      <em class="text-xs text-gray-400">Note: Individual results may vary.</em>
    `,
    benefits: ["8 Million GS", "miRNA Elements", "Ultimate White", "Fast Action"],
    sku: "GLU-8M-GS",
    volume: "10 Sessions"
  },
  {
    id: 20,
    name: "Aqua Skin Pure Gold Pro Max II",
    category: "Injection",
    brand: "Aqua Skin/Veniscy",
    price: 11000,
    image: "/image/IMG_1848.jpg",
    description: "DualNA Pico-Cell Extreme Whitening",
    details: `
      <strong>Aqua Skin Pure Gold Pro Max II — 30th Generation</strong><br/><br/>
      Experience the pinnacle of Swiss engineering. The 30th Generation of Aqua Skin features DualNA Pico-Cell technology for microscopic absorption and extreme whitening.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pico-Cell Glutathione</li>
        <li>DualNA Complex</li>
        <li>Pure Gold Extract</li>
        <li>Vegetal Placenta</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Gold particles enhance radiance</li>
        <li>Pico-Cell tech ensures deep penetration</li>
        <li>Comprehensive anti-aging action</li>
      </ul>
      <br/>
      Reveal a golden standard of beauty.<br/>
      <em class="text-xs text-gray-400">Note: Swiss formulation.</em>
    `,
    benefits: ["Pico-Cell Tech", "Pure Gold Pro", "Max II Edition", "Swiss Formula"],
    sku: "AQUA-MAX-II",
    volume: "10 Sessions"
  },
  {
    id: 21,
    name: "Aqua Skin Veniscy 188",
    category: "Injection",
    brand: "Aqua Skin/Veniscy",
    price: 12500,
    image: "/image/IMG_1841.jpg",
    description: "TriNA Pico Cell Glutathione | High Strength",
    details: `
      <strong>Aqua Skin Veniscy 188 — TriNA Pico Cell</strong><br/><br/>
      Experience the power of collaboration. A potent blend from Skinnic Lab and Veniscy, containing TriNA Pico Cell absorption technology for high-strength spot correction.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>TriNA Pico Cell Glutathione</li>
        <li>Veniscy Antiox Complex</li>
        <li>Nonapeptide</li>
        <li>Coenzyme Q10</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Specifically targets dark spots</li>
        <li>TriNA tech works on 3 cellular levels</li>
        <li>High potency antioxidant support</li>
      </ul>
      <br/>
      Reveal unblemished clarity.<br/>
      <em class="text-xs text-gray-400">Note: Professional use only.</em>
    `,
    benefits: ["Veniscy Collab", "TriNA Pico Cell", "High Potency", "Spot Correction"],
    sku: "AS-VENISCY-188",
    volume: "10 Sessions"
  },
  {
    id: 22,
    name: "Miracle White Prism Edition",
    category: "Injection",
    brand: "Miracle White",
    price: 9800,
    image: "/image/IMG_1850.jpg",
    description: "Exclusive Holographic Series",
    details: `
      <strong>Miracle White Prism Edition — Holographic Series</strong><br/><br/>
      Experience the exclusive Prism Edition. This special release features enhanced epidermal growth factors for total skin repair and a multi-dimensional glow.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Enhanced Glutathione Complex</li>
        <li>Prism Light Technology (Bio-actives)</li>
        <li>Epidermal Growth Factors</li>
        <li>Multivitamin Boost</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Repairs damaged skin structure</li>
        <li>Refracts light for a prism-like glow</li>
        <li>Intense hydration</li>
      </ul>
      <br/>
      Reveal prismatic radiance.<br/>
      <em class="text-xs text-gray-400">Note: Special edition.</em>
    `,
    benefits: ["Special Edition", "Radiance Boost", "Growth Factors", "Total Repair"],
    sku: "MW-PRISM",
    volume: "6 Sessions"
  },
  {
    id: 23,
    name: "Japan Beauty Booster",
    category: "Supplement",
    brand: "Japan Beauty Booster",
    price: 4800,
    image: "/image/jp-boost.jpg",
    description: "Complexion Excellence | Daily Supplements",
    details: `
      <strong>Japan Beauty Booster — Daily Oral Care</strong><br/><br/>
      Experience complexion excellence every day. A premium daily supplement formulated in Japan, designed to support and maintain the results of your aesthetic treatments.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Hydrolyzed Collagen</li>
        <li>Glutathione</li>
        <li>Vitamin C</li>
        <li>Placenta Extract</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Supports skin from the inside out</li>
        <li>Maintains collagen levels</li>
        <li>Daily protection against oxidation</li>
      </ul>
      <br/>
      Reveal lasting excellence.<br/>
      <em class="text-xs text-gray-400">Note: Daily dietary supplement.</em>
    `,
    benefits: ["Japan Formula", "Oral Booster", "Complexion Excellence", "Daily Use"],
    sku: "JBB-60T",
    volume: "60 Tablets"
  },
  {
    id: 24,
    name: "Miracle White EXC Gold",
    category: "Injection",
    brand: "Miracle White",
    price: 10500,
    image: "/image/IMG_1849.jpg",
    description: "Anti-Melanogenic Gold Edition",
    details: `
      <strong>Miracle White EXC Gold — Anti-Melanogenic</strong><br/><br/>
      Experience the luxurious Gold Edition. Specifically engineered as an 'Anti-Melanogenic' treatment, it aggressively inhibits melanin production for intense brightening.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Anti-Melanogenic Glutathione</li>
        <li>Gold Particles</li>
        <li>Ascorbic Acid</li>
        <li>Alpha Lipoic Acid</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Inhibits the melanogenesis pathway</li>
        <li>Provides antioxidant protection</li>
        <li>Gold particles aid in absorption and radiance</li>
      </ul>
      <br/>
      Reveal your brightest self.<br/>
      <em class="text-xs text-gray-400">Note: High potency formula.</em>
    `,
    benefits: ["Anti-Melanogenic", "Melanin Inhibition", "Gold Edition", "Intense Brightening"],
    sku: "MW-EXC-GOLD",
    volume: "6 Sessions"
  },
  {
    id: 25,
    name: "Vita Glow Advanced Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 650,
    image: "/image/Picsart_25-11-27_19-44-06-133.jpg",
    description: "Advanced Skin Whitening | Result in 7 Days",
    details: `
      <strong>Vita Glow Advanced — Skin Whitening Night Cream</strong><br/><br/>
      Experience the power of the Advanced Gold formula. Vita Glow Night Cream is renowned for its rapid action, designed to brighten skin tone and reduce pigmentation within just 7 days of regular use.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Glutathione</li>
        <li>Kojic Acid Dipalmitate</li>
        <li>Alpha Arbutin</li>
        <li>Vitamin C & E</li>
        <li>Mulberry Extract</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Inhibits melanin production while you sleep</li>
        <li>Detoxifies skin from environmental pollutants</li>
        <li>Reduces dark spots and acne marks rapidly</li>
      </ul>
      <br/>
      Reveal a glowing, fairer complexion in one week.<br/>
      <em class="text-xs text-gray-400">Note: Apply at night only.</em>
    `,
    benefits: ["7 Day Results", "Advanced Formula", "Dark Spot Reduction", "Night Therapy"],
    sku: "VG-ADV-BLK",
    volume: "30g"
  },
  {
    id: 26,
    name: "Constanta Lip Treatment",
    category: "Treatment",
    brand: "Constanta",
    price: 450,
    image: "/image/Picsart_25-11-27_19-50-25-844.jpg",
    description: "72 Hours Effect | Aloe Vera & Vitamin E",
    details: `
      <strong>Constanta Lip Treatment — 72 Hour Moisture</strong><br/><br/>
      Experience the magic of color-changing hydration. This treatment turns from green to a natural pinkish hue upon application, providing deep nourishment that lasts up to 72 hours.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Aloe Vera Extract</li>
        <li>Vitamin E (Tocopherol)</li>
        <li>Moisturizing Lipids</li>
        <li>Honey Extract</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Heals dry, chapped lips instantly</li>
        <li>Adjusts color based on body temperature</li>
        <li>Protects against oxidative damage</li>
      </ul>
      <br/>
      Reveal soft, naturally pink lips.<br/>
      <em class="text-xs text-gray-400">Note: Color changes upon application.</em>
    `,
    benefits: ["Color Changing", "72Hr Moisture", "Aloe Vera", "Softens Lips"],
    sku: "CONST-LIP-GRN",
    volume: "2.5g"
  },
  {
    id: 27,
    name: "Vita Glow Whitening Cream (Green)",
    category: "Cream",
    brand: "Vita Glow",
    price: 600,
    image: "/image/Picsart_25-11-27_19-42-56-057.jpg",
    description: "Original Formula | Skin Whitening & Brightening",
    details: `
      <strong>Vita Glow Green — The Original Whitening Cream</strong><br/><br/>
      Experience the classic formula that started it all. The Green Box edition of Vita Glow focuses on balancing skin pH and providing a steady, uniform whitening effect.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione</li>
        <li>Avocado Oil</li>
        <li>Jojoba Oil</li>
        <li>Vitamin C</li>
        <li>Sandalwood Extract</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Deeply moisturizes while whitening</li>
        <li>Prevents acne formation</li>
        <li>Removes dead skin cells for fresh radiance</li>
      </ul>
      <br/>
      Reveal a smoother, brighter look.<br/>
      <em class="text-xs text-gray-400">Note: Suitable for all skin types.</em>
    `,
    benefits: ["Original Formula", "Herbal Extracts", "Acne Prevention", "Daily Whitening"],
    sku: "VG-CRM-GRN",
    volume: "30g"
  },
  {
    id: 28,
    name: "Glowtiqa Paris Advance Care",
    category: "Cream",
    brand: "Glowtiqa Paris",
    price: 1200,
    image: "/image/Picsart_25-11-27_19-48-33-126.jpg",
    description: "Advance Care Whitening | Strengthens Skin",
    details: `
      <strong>Glowtiqa Paris — Advance Care Whitening Cream</strong><br/><br/>
      Experience Parisian elegance and strength. Glowtiqa Paris Advance Care is engineered not just to whiten, but to fortify the skin barrier against external aggressors.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Premium Whitening Complex</li>
        <li>Ceramides</li>
        <li>Niacinamide</li>
        <li>French Rose Extract</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Strengthens the skin's natural barrier</li>
        <li>Provides a luxurious, non-greasy finish</li>
        <li>Promotes long-term skin health and fairness</li>
      </ul>
      <br/>
      Feel your own greatness.<br/>
      <em class="text-xs text-gray-400">Note: Premium daily care.</em>
    `,
    benefits: ["Barrier Protection", "Advance Care", "Premium Formula", "Glowtiqa Exclusive"],
    sku: "GLOW-PARIS-ADV",
    volume: "30g"
  },
  {
    id: 29,
    name: "Vita Glow Glutathione Soap",
    category: "Soap",
    brand: "Vita Glow",
    price: 250,
    image: "/image/Picsart_25-11-27_19-52-21-801.jpg",
    description: "Glutathione Skin Whitening Soap",
    details: `
      <strong>Vita Glow Soap — Glutathione Skin Whitening</strong><br/><br/>
      Experience the perfect companion to your beauty regime. This soap is infused with Glutathione to cleanse pores deeply and prepare the skin for maximum absorption of night creams.<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pure Glutathione</li>
        <li>Grape Seed Extract</li>
        <li>Vitamin C & E</li>
        <li>Coconut Oil Base</li>
      </ul>
      <br/>
      <strong>Why it works:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Exfoliates dead skin cells gently</li>
        <li>Inhibits melanin during the cleansing process</li>
        <li>Leaves skin feeling soft and prepped</li>
      </ul>
      <br/>
      Reveal a fresh canvas every wash.<br/>
      <em class="text-xs text-gray-400">Note: Use daily for best results.</em>
    `,
    benefits: ["Daily Cleanser", "Glutathione Infused", "Pore Refining", "Skin Prep"],
    sku: "VG-SOAP-WHT",
    volume: "135g"
  }
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

const Navigation = ({ currentPage, setCurrentPage, cartCount, toggleCart, mobileMenuOpen, setMobileMenuOpen, setShopFilter }) => {
    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Shop', id: 'shop' },
        { name: 'Blog', id: 'blog' }, 
        { name: 'Contact', id: 'contact' },
    ];
    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
             <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <div className="cursor-pointer flex items-center gap-2" onClick={() => setCurrentPage('home')}>
                    <img src="/image/logo.jpg" alt="COSMATRIX" className="h-10 md:h-16 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                      <button key={link.id} onClick={() => setCurrentPage(link.id)} className={`text-sm font-medium tracking-wide transition-colors duration-300 ${currentPage === link.id ? 'text-[#E8A0BF]' : 'text-gray-800 hover:text-[#E8A0BF]'}`}>
                        {link.name}
                      </button>
                    ))}
                </nav>
                <div className="flex items-center gap-4 md:gap-6">
                    <button onClick={() => setCurrentPage('shop')} className="hidden md:block text-gray-800 hover:text-[#E8A0BF]"><Search size={22} /></button>
                    <button className="relative p-2 text-gray-800 hover:text-[#E8A0BF]" onClick={toggleCart}>
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
                    </button>
                    <button className="md:hidden p-2 text-gray-800" onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
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
                                <div className="py-2">
                                    <p className="px-6 py-2 text-xs text-gray-400 font-bold tracking-widest uppercase">Categories</p>
                                    <button onClick={() => { setShopFilter('Injection'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-[#E8A0BF] transition-colors">Injections</button>
                                    <button onClick={() => { setShopFilter('Supplement'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-[#E8A0BF] transition-colors">Supplements</button>
                                    <button onClick={() => { setShopFilter('Filler'); setCurrentPage('shop'); setMobileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-gray-600 hover:text-[#E8A0BF] transition-colors">Fillers</button>
                                </div>
                                <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-t border-gray-50">BLOG</button>
                                <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 border-t border-gray-50">ABOUT US</button>
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
          <img src="/image/logo.jpg" alt="COSMATRIX" className="h-14 w-auto object-contain invert brightness-0 filter bg-white p-1 rounded" />
          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
            Authorized distributor of premium clinical beauty formulations. Bridging the gap between world-class manufacturers and aesthetic professionals.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/c0smatrix?igsh=YXRrMW13b3V5OTRh&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E8A0BF] hover:text-black transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E8A0BF] hover:text-black transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E8A0BF] hover:text-black transition-all"><Linkedin size={18} /></a>
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

const HomeView = ({ navigateTo, addToCart, setShopFilter }) => (
  <div className="animate-fade-in bg-[#fbfbfb]">
    {/* HERO SECTION */}
    <div className="relative w-full min-h-[85vh] bg-black flex flex-col justify-center items-center text-center overflow-hidden">
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-opacity duration-1000 animate-fade-in"
            style={{ 
                backgroundImage: 'url("/image/ban1.jpg")',
                backgroundPosition: 'center 20%'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-20 pb-12">
            <div className="animate-slide-up">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[#E8A0BF] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                    <Sparkles size={12} /> Premium Aesthetic Supply
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
                    Reveal Your <br/>
                    <span className="italic text-[#E8A0BF] font-light">True Radiance</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                    Shop the world's most trusted brands in skin whitening and rejuvenation. 
                    Authorized distributor for licensed professionals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <Button onClick={() => navigateTo('shop')} variant="secondary" className="px-10 py-4 text-sm font-bold tracking-widest uppercase w-full sm:w-auto shadow-[0_0_20px_rgba(232,160,191,0.3)]">
                        Shop Now
                    </Button>
                    <Button onClick={() => navigateTo('shop')} variant="outline" className="px-10 py-4 text-sm font-bold tracking-widest uppercase w-full sm:w-auto hover:bg-white hover:text-black border-white/30">
                        View Collections
                    </Button>
                </div>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
            <ArrowUpDown size={20} />
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
                    <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden mb-4">
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

    {/* CLINICAL SCIENCE */}
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#E8A0BF] rounded-full filter blur-[80px] md:blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <span className="text-[#E8A0BF] font-bold tracking-widest uppercase text-xs mb-2 block">The Cosmatrix Standard</span>
                 <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Precision Science Meets <br/> Aesthetic Artistry</h2>
                 <p className="text-gray-400 leading-relaxed mb-8 font-light text-base md:text-lg">
                    We maintain a rigorous supply chain to ensure that every vial reaching your clinic performs exactly as intended.
                 </p>
                 <div className="space-y-6">
                    {[
                        { icon: Stethoscope, title: "Clinical Potency", desc: "High-concentration formulations." },
                        { icon: Sparkles, title: "Advanced Tech", desc: "Pico-Cell & Recombinant DNA." },
                        { icon: Building2, title: "Stable Cold Chain", desc: "Temperature-controlled storage." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#E8A0BF]"><item.icon size={20}/></div>
                            <div>
                                <h4 className="text-base font-serif mb-0.5">{item.title}</h4>
                                <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
            <div className="relative hidden md:block">
                <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
                     <img src="/image/ban2.jpg" alt="Clinical Lab" className="w-full h-full object-cover opacity-80" />
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

const ShopView = ({ navigateTo, addToCart, filter, setFilter }) => {
  const [brandFilter, setBrandFilter] = useState('All Brands');
  const [searchQuery, setSearchQuery] = useState('');
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

      {/* MOBILE TOOLBAR (Sticky) */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-100 px-4 py-3 flex gap-3 items-center shadow-sm">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E8A0BF]" 
            />
         </div>
         <button 
            onClick={() => setMobileFiltersOpen(true)}
            className="p-2 bg-black text-white rounded-lg shrink-0"
         >
            <SlidersHorizontal size={20} />
         </button>
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
                            <div className={`relative bg-[#f8f8f8] overflow-hidden ${viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-[4/5]'}`}>
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

      {/* MOBILE FILTER DRAWER */}
      <div className={`fixed inset-0 z-[70] flex justify-end pointer-events-none ${mobileFiltersOpen ? 'pointer-events-auto' : ''}`}>
         <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setMobileFiltersOpen(false)}
         ></div>
         <div className={`relative bg-white w-full max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
                <h3 className="font-serif text-xl">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-500"><X size={24}/></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Mobile Categories */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Category</h4>
                    <div className="space-y-2">
                        <button onClick={() => {setFilter('All'); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${filter === 'All' ? 'bg-gray-100 font-medium' : ''}`}>All Categories</button>
                        {CATEGORIES.map(cat => (
                            <button key={cat.id} onClick={() => {setFilter(cat.name); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${filter === cat.name ? 'bg-gray-100 font-medium' : ''}`}>{cat.name}</button>
                        ))}
                    </div>
                </div>
                {/* Mobile Brands */}
                <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Brand</h4>
                    <div className="space-y-2">
                        <button onClick={() => {setBrandFilter('All Brands'); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${brandFilter === 'All Brands' ? 'bg-gray-100 font-medium' : ''}`}>All Brands</button>
                        {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                            <button key={brand} onClick={() => {setBrandFilter(brand); setMobileFiltersOpen(false);}} className={`block w-full text-left text-sm py-2 px-2 rounded ${brandFilter === brand ? 'bg-gray-100 font-medium' : ''}`}>{brand}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-5 border-t border-gray-100 bg-gray-50">
                <button onClick={() => setMobileFiltersOpen(false)} className="w-full bg-black text-white py-3 text-sm font-bold uppercase tracking-widest rounded-lg">View {filteredProducts.length} Results</button>
            </div>
         </div>
      </div>
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
  const [toast, setToast] = useState(null); 

  // Initialize browser history state on first load
  useEffect(() => {
    // Replace the initial state so we have a valid history entry to pop back to
    window.history.replaceState({ page: 'home' }, '', window.location.search);
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
          />

          <main className="flex-grow">
            {currentPage === 'home' && <HomeView navigateTo={navigateTo} addToCart={addToCart} setShopFilter={setShopFilter} />}
            {currentPage === 'shop' && <ShopView navigateTo={navigateTo} addToCart={addToCart} filter={shopFilter} setFilter={setShopFilter} />}
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