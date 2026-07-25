import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
  "id": 1,
  "name": "Iskin SLC24A5 Chromosome Phase IX Glutathione Whitening Injection",
  "category": "Injection",
  "brand": "iSkin",
  "price": 24000,
  "image": "/image/IMG_1910.JPG",
  "description": "Gene-Targeted Whitening | SLC24A5 Pathway Modulator | High-Concentration Glutathione",
  "details": "<strong>iSkin SLC24A5 Phase IX — Advanced Genetic Pathway Modulation</strong><br/><br/>This cutting-edge formulation targets the SLC24A5 gene, which encodes the NCKX5 protein involved in melanin synthesis. Combined with high-concentration glutathione, it represents a breakthrough in skin whitening science at the molecular level.<br/><br/><strong>Key Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>High-Concentration Glutathione:</strong> Potent antioxidant that inhibits melanin synthesis and neutralizes free radicals</li><li><strong>SLC24A5 Pathway Modulators:</strong> Proprietary compounds targeting pigmentation at the genetic level</li><li><strong>TriNA Hydrate System:</strong> Advanced nucleotide delivery technology for enhanced absorption</li><li><strong>DNA Protection Complex:</strong> Shields skin cells from oxidative damage and premature aging</li></ul><br/><strong>The Science:</strong> The SLC24A5 gene plays a key role in human pigmentation. This innovative formula combines genetic-targeting technology with high-dose glutathione for multiple mechanisms of action—addressing dark spots, uneven tone, and signs of aging while promoting a naturally radiant complexion.<br/><br/><strong>Origin & Purity:</strong> Swiss-formulated. Paraben-free and organic composition.<br/><br/><strong>Usage:</strong> Professional administration only. Results evaluated after full course. Maintenance protocol recommended after achieving desired tone.<br/><br/><em class=\"text-xs text-gray-400\">Critical Note: Gene modulation in cosmetics is an emerging field with limited long-term safety data. For experimental use under strict medical supervision only. Not for pregnant/nursing women. Results vary by individual. Thorough informed consent required.</em>",
  "benefits": ["Gene-Targeted Technology", "High-Concentration Glutathione", "Swiss-Formulated", "Paraben-Free & Organic", "Multi-Mechanism Action"],
  "sku": "ISKIN-SLC24A5-PH9",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
  {
  "id": 2,
  "name": "Saint Blanc XIII Quartet Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Saint Blanc",
  "price": 18500,
  "image": "/image/Saint-blanc.jpg",
  "description": "Swiss Formulation | 13-Element Complex",
  "details": "<strong>Saint Blanc XIII Quartet — Multi-Targeted Brightening & Revitalization Therapy</strong><br/><br/>This Swiss-formulated injection presents a sophisticated 'Quartet' of four synergistic sets, each combining 13 influential active ingredients. The formula is designed to address skin brightening through multiple pathways: inhibiting melanogenesis, providing potent antioxidant defense, supporting collagen synthesis, and promoting cellular renewal.<br/><br/><strong>Complete Active Composition (Per Box/Full Course):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (miRNA Form):</strong> 90,000 mg (Total Course) – Primary tyrosinase inhibitor and master antioxidant for systemic skin lightening[citation:1].</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5000 mg – Potentiates glutathione's effect, directly inhibits melanin production, and boosts collagen synthesis.</li><li><strong>Epidermal Growth Factor (EGF) with RNS:</strong> 2000 mg – Stimulates skin cell proliferation and repair for improved texture and renewal.</li><li><strong>Celergen Marine Stem Cell Extract:</strong> 70,000 IU – Aims to support cellular longevity and tissue regeneration.</li><li><strong>Coenzyme Q10:</strong> 1500 mg – Mitochondrial antioxidant that protects skin cells from oxidative damage.</li><li><strong>Natural Collagen Extract:</strong> 200 mg – Provides building blocks for skin structure and elasticity.</li><li><strong>Alpha Lipoic Acid:</strong> 300 mg – Universal antioxidant that recycles other antioxidants like Vitamins C and E.</li><li><strong>Dimethylaminoethanol (DMAE):</strong> 500 mg – May improve skin firmness and facial muscle tone.</li><li><strong>Selenium:</strong> 200 mg / <strong>Cyanocobalamin (B12):</strong> 200 mg / <strong>Multivitamins:</strong> 200 mg / <strong>Amino Acids:</strong> Essential support for detoxification, energy, and protein synthesis.</li></ul><br/><strong>Mechanism of Action:</strong> The therapy employs a quartet strategy: 1) Direct melanin suppression (Glutathione, Vit C), 2) Cellular protection & detox (Antioxidants), 3) Structural support (Collagen, EGF), and 4) Metabolic enhancement (Vitamins, Amino Acids). This multifaceted approach aims for more comprehensive results than single-ingredient formulations.<br/><br/><strong>Administration:</strong> For professional intravenous (IV) or intramuscular (IM) use only. Protocol typically involves multiple sessions as part of a complete course. Aseptic technique must be followed.<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: The extremely high dosage of active ingredients (e.g., 90,000 mg glutathione total course) necessitates administration under strict medical supervision. This is a potent pharmacological intervention, not a cosmetic supplement. Contraindications may include kidney disorders, certain autoimmune conditions, or pregnancy. Efficacy for skin whitening varies significantly, and long-term safety data for high-dose injectable antioxidant cocktails is limited[citation:2][citation:3].</em>",
  "benefits": ["13-Ingredient Swiss Complex", "Multi-Pathway Brightening", "Cellular Renewal Support", "High-Potency Antioxidant Blend"],
  "sku": "SAINT-BLANC-XIII-QRT",
  "volume": "1 Box Pack (Complete Quartet Course)"
},
  {
  "id": 3,
  "name": "Quatrrox Complexion 12 Glutathione Whitening Injections",
  "category": "Injection",
  "brand": "Quattrox",
  "price": 17500,
  "image": "/image/IMG_1907.JPG",
  "description": "Korean-Formulated Skin Whitening System | Multi-Component Glutathione Complex",
  "details": "<strong>Quatrrox Complexion 12 — Premium Korean Skin Whitening Infusion</strong><br/><br/>Quattrox Complexion 12 is a comprehensive glutathione-based whitening system preferred by top spas and dermatological clinics globally. This multi-component formula combines advanced JM Prowhite EGF HP DNA technology with essential vitamins and active ingredients for complete skin transformation.<br/><br/><strong>Complete Composition (Per Box Pack - 4 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>JM Prowhite EGF HP DNA Glutathione:</strong> 80,000mg — High-potency reduced glutathione for melanin inhibition</li><li><strong>JM Prowhite EGF HP DNA Ultra Lyophilized Cell:</strong> 10,000IU — Advanced cellular regeneration complex</li><li><strong>JM Prowhite EGF HP DNA Poly Deoxy RiboNucleotide (PDRN):</strong> 9,000mg — Tissue repair and regeneration</li><li><strong>JM Prowhite EGF HP DNA Vitamin B Complex:</strong> 200mg — Essential for skin metabolism</li><li><strong>Melsmon Human Placenta:</strong> Bioactive rejuvenating compounds</li><li><strong>Bio-Rae Ascorbic Acid (Vitamin C):</strong> 15,000mg — Boosts glutathione absorption and collagen synthesis</li><li><strong>Bio-Rae Tranexamic Acid:</strong> 1,000mg — Targets pigmentation and melasma</li><li><strong>Bio-Rae Amino Acid Complex:</strong> 1,500mg — Supports skin protein synthesis</li><li><strong>Bio-Rae Cyanocobalamine (Vitamin B12):</strong> 4,000mcg — Energy metabolism and skin health</li><li><strong>Daehan New Pharm Thioctic Acid (Alpha Lipoic Acid):</strong> 25mg — Universal antioxidant</li><li><strong>Daehan New Pharm Ginkgo Leaf Extract:</strong> 17.5mg — Improves microcirculation</li><li><strong>Daehan New Pharm Multivita:</strong> Comprehensive vitamin support</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Enhances skin tightness and elasticity</li><li>Minimizes pigmentation and dark spots</li><li>Provides UV damage protection</li><li>Clears and prevents acne formation</li><li>Reduces pore size and refines skin texture</li><li>Detoxifies and purifies skin at cellular level</li><li>Suitable for all skin types</li></ul><br/><strong>Usage Protocol:</strong> 1-2 injections per week, tailored to individual skin conditions. Professional administration recommended.<br/><br/><strong>Packaging:</strong> Each box contains 4 complete session sets (4 vials + 8 ampoules).<br/><br/><strong>Safety Guidelines:</strong> Store in cool, dry place (1-30℃). Not recommended for pregnant/breastfeeding women, individuals with cardiovascular conditions, or those allergic to vitamins. Consult physician before use.<br/><br/><em class=\"text-xs text-gray-400\">Product authenticity verifiable via barcode scanning. Results may vary from person to person.</em>",
  "benefits": ["Korean-Formulated", "Multi-Component Complex (15+ Actives)", "Includes PDRN & Placenta", "Acne Prevention & Scar Reduction", "UV Protection & Detoxification"],
  "sku": "QUAT-C12-GSH",
  "volume": "1 Box Pack (4 Vials + 8 Ampoules per Session)"
},
 {
  "id": 4,
  "name": "Cindyrella Celebrity Drip with NAD plus Glutathione Injection",
  "category": "Injection",
  "brand": "Cindyrella",
  "price": 13000,
  "image": "/image/IMG_1897.JPG",
  "description": "Swiss-Inspired Aesthetic Formula | NAD+ Enhanced | Multi-Active Complex",
  "details": "<strong>Cindyrella Celebrity Drip — Premium NAD+ Enhanced Aesthetic Formula</strong><br/><br/>Cindyrella Celebrity Drip is a Swiss-inspired aesthetic formulation designed for professional beauty environments. This luxury blend combines high-strength antioxidants with NAD+ technology for comprehensive skin vitality and radiance support.<br/><br/><strong>Key Ingredient Profile:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione Complex:</strong> Master antioxidant for skin brightening and detoxification</li><li><strong>NAD+ (Nicotinamide Adenine Dinucleotide):</strong> Supports cellular energy and vitality</li><li><strong>Vitamin C:</strong> Enhances glutathione absorption and collagen synthesis</li><li><strong>Marine & Bovine Collagen:</strong> Maintains skin firmness and smooth appearance</li><li><strong>Coenzyme Q10:</strong> Mitochondrial antioxidant for energy-focused support</li><li><strong>Hyaluronic Acid:</strong> Deep hydration for supple-looking complexion</li><li><strong>Kojic Acid:</strong> Brightening support for even skin tone</li><li><strong>Vitamin B Complex:</strong> Essential for skin metabolism</li><li><strong>Aloe Vera Extract:</strong> Soothing and refreshing properties</li><li><strong>RNA:</strong> Cellular support complex</li></ul><br/><strong>Key Highlights:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>High-Strength Antioxidant Blend:</strong> Concentrated Glutathione for advanced aesthetic routines</li><li><strong>Radiance & Glow Support:</strong> Enhances overall skin brightness and clarity</li><li><strong>Firmness Support:</strong> Collagen components for smoother-looking skin</li><li><strong>Hydration Complex:</strong> Hyaluronic Acid for refreshed, supple appearance</li><li><strong>NAD+ Integration:</strong> Supports skin vitality and energy-focused protocols</li></ul><br/><strong>Professional Use Only:</strong> Designed exclusively for professional aesthetic administration. Not for self-use or consumer application.<br/><br/><strong>Origin:</strong> Made in Korea | Swiss-inspired formulation<br/><br/><em class=\"text-xs text-gray-400\">Important: For professional aesthetic use only. Not positioned as a medical or therapeutic treatment. Not intended to diagnose, treat, cure, or prevent any condition. Results vary by individual. Professional supervision required.</em>",
  "benefits": ["NAD+ Enhanced Formula", "Swiss-Inspired Premium Blend", "Complete Antioxidant Complex", "Hydration & Firmness Support", "Professional-Grade Aesthetic Formula"],
  "sku": "CINDY-CELEB-NAD",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
  {
    "id": 5,
    "name": "Miracle White Royal Gold 120000mg Glutathione Booster Injection",
    "category": "Injection",
    "brand": "Miracle White",
    "price": 11000,
    "image": "/image/mw-120000.jpg",
    "description": "Royal Gold Booster | 120,000 mg Glutathione",
    "details": "<strong>Miracle White Royal Gold 120,000mg — Luxe Skin Transformation Formula</strong><br/><br/>This Swiss-formulated 'Royal Gold' edition combines an ultra-high concentration of Glutathione (120,000 mg total course) with Gold Nanoparticles, Collagen, and a synergistic blend of antioxidants. It's specifically marketed as a fast-acting solution for achieving radiant, even-toned skin, with claims addressing common concerns for Indian skin types such as pigmentation, sun damage, and pollution stress.<br/><br/><strong>Core Formula & Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (120,000 mg):</strong> The 'Master Antioxidant' for systemic skin brightening via tyrosinase inhibition and detoxification.</li><li><strong>Gold Nano Particles:</strong> Claimed to enhance hydration, support skin regeneration, and provide anti-inflammatory benefits.</li><li><strong>Collagen:</strong> Aims to improve skin elasticity, firmness, and texture while reducing wrinkle appearance.</li><li><strong>Vitamin C (Ascorbic Acid):</strong> Boosts glutathione absorption, provides direct antioxidant protection, and aids in collagen synthesis.</li><li><strong>Alpha Lipoic Acid:</strong> A 'universal antioxidant' that recycles other antioxidants like Vitamins C and E, with anti-inflammatory properties.</li></ul><br/><strong>Claimed Benefits & Mechanism:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Rapid Skin Brightening:</strong> Targets dark spots, pigmentation, and evens out skin tone for a luminous complexion.</li><li><strong>Anti-Aging & Firming:</strong> Reduces wrinkles and fine lines while improving elasticity through boosted collagen production.</li><li><strong>Deep Detoxification:</strong> Eliminates toxins from the body for revitalized skin health.</li><li><strong>Enhanced Cellular Health:</strong> Promotes healthier skin cells and protects against free radical damage to delay premature aging.</li></ul><br/><strong>Usage Protocol:</strong> For professional administration (IV/IM) only. Recommended course: one injection per week for the first month (4 sessions), followed by maintenance sessions every two weeks to preserve results. Adequate hydration before treatment is advised.<br/><br/><strong>Product Authenticity:</strong> Includes a scratch-and-scan QR code verification system to combat counterfeit products.<br/><br/><em class=\"text-xs text-gray-400\">Medical & Safety Note: The inclusion of Gold Nanoparticles in injectable formulations is a novel cosmetic application with limited long-term safety data. While glutathione is generally well-tolerated, high-dose protocols require medical supervision. Contraindications include pregnancy, breastfeeding, and known allergies to any component. The product's efficacy for rapid whitening varies significantly based on individual skin biology and melanin content.</em>",
    "benefits": ["Gold Nanoparticle Technology", "High-Potency Glutathione (120K mg)", "Anti-Aging & Firming", "Fast-Acting Results"],
    "sku": "MW-RG-120K",
    "volume": "1 Box Pack (Initial Course)"
},
  {
    "id": 6,
    "name": "Miracle White 99,000,000 mg Glutathione Injection",
    "category": "Injection",
    "brand": "Miracle White",
    "price": 11500,
    "image": "/image/mw-99mil.jpg",
    "description": "Polypeptide Complex Glutathione | 99 MIL",
    "details": "<strong>Miracle White 99 MIL — Ultra-Concentrated Multi-Action Formula</strong><br/><br/>This Swiss-formulated injection represents a premium, comprehensive skin rejuvenation system. The '99,000,000 mg' designation refers to the product series name, indicating an ultra-high concentration blend. It combines a Polypeptide Complex form of Glutathione with a wide array of targeted actives, including EGF, Kojic Acid, and Tomato Stem Cell Extract, designed to accelerate skin brightening, repair, and anti-aging through multiple synergistic pathways.<br/><br/><strong>Complete Ingredient Breakdown:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (Polypeptide Complex):</strong> 99 MIL Series – High-concentration master antioxidant for detoxification and melanin inhibition[citation:1].</li><li><strong>Kojic Acid (8,000 mg):</strong> Direct tyrosinase inhibitor to reduce pigmentation and dark spots.</li><li><strong>Epidermal Growth Factor - EGF (5,000 mg):</strong> Stimulates skin cell regeneration and repair for a youthful glow.</li><li><strong>Vitamin C (8,000 mg):</strong> Enhances collagen synthesis, brightens skin, and recycles glutathione.</li><li><strong>Alpha Lipoic Acid (8,000 mg):</strong> Universal antioxidant that fights inflammation and aging.</li><li><strong>Coenzyme Q10 (5,000 mg):</strong> Supports cellular energy and skin firmness.</li><li><strong>Marine Peptide Collagen (5,000 mg):</strong> Provides hydration and improves skin elasticity and structure.</li><li><strong>Melanin Inhibitor (8,000 mg):</strong> Proprietary blend aimed at preventing hyperpigmentation.</li><li><strong>Tomato Stem Cell Extract (1,000 mg):</strong> Antioxidant-rich extract for protection against UV and environmental damage.</li><li><strong>Multivitamin Complex (6,000 mg), Vitamin B12 (1,000 mg), White Cell Enhancer (1,500 mg):</strong> Support overall skin health, hydration, and barrier function.</li></ul><br/><strong>Claimed Benefits & Mechanism:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>7X Faster Brightening:</strong> Targets melanin production at multiple points for accelerated reduction of dark spots and even tone.</li><li><strong>Deep Rejuvenation:</strong> Stimulates collagen and new skin cell growth for firm, youthful skin.</li><li><strong>Superior Hydration & Glow:</strong> Combats dryness and enhances radiance from within.</li><li><strong>Powerful Antioxidant Shield:</strong> Protects against free radicals from sun and pollution.</li></ul><br/><strong>Administration:</strong> For professional intravenous (IV) or intramuscular (IM) use only. A consistent treatment plan prescribed by a skincare expert is required. Post-treatment care including sunscreen is essential.<br/><br/><em class=\"text-xs text-gray-400\">Critical Medical Note: This is an extremely potent, multi-ingredient pharmacological cocktail. The safety of combining such high doses of active ingredients (like Kojic Acid, EGF, and various inhibitors) in a single injectable format is not widely studied. It should only be administered by a qualified healthcare professional who can monitor for adverse reactions. Contraindications likely include pregnancy, breastfeeding, active skin infections, autoimmune conditions, and kidney/liver impairment. The '99 Million mg' is a product name, not a literal per-vial content[citation:2][citation:3].</em>",
    "benefits": ["Multi-Target Formula", "7X Faster Brightening Claim", "EGF + Stem Cell Technology", "Comprehensive Anti-Aging"],
    "sku": "MW-99M-POLY",
    "volume": "1 Box Pack (Complete Course)"
},
  {
    "id": 7,
    "name": "Miracle White Enhanced 90,000mg Glutathione Whitening Injection",
    "category": "Injection",
    "brand": "Miracle White",
    "price": 11000,
    "image": "/image/mw-90000.jpg",
    "description": "Enhanced Formula | EGF + Kojic Acid",
    "details": "<strong>Miracle White Enhanced 90,000mg — Accelerated Brightening Formula</strong><br/><br/>This Swiss-formulated enhanced version features a higher concentration of Epidermal Growth Factor (EGF) and an added multivitamin blend, now boosted with Kojic Acid and Alpha-Lipoic Acid. It's engineered for accelerated skin brightening—claiming to work up to 7 times faster than conventional treatments—while providing comprehensive anti-aging and antioxidant benefits.<br/><br/><strong>Enhanced Active Formula:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (90,000 mg Course Total):</strong> Master antioxidant for systemic skin lightening and detoxification[citation:1].</li><li><strong>Kojic Acid:</strong> Direct tyrosinase inhibitor added to lighten sun damage, age spots, and scars; also provides antimicrobial properties.</li><li><strong>Alpha-Lipoic Acid:</strong> 'Universal' antioxidant that reduces inflammation, slows skin aging, and supports overall cellular health.</li><li><strong>Enhanced EGF (Epidermal Growth Factor):</strong> Higher concentration to stimulate skin cell regeneration and repair for accelerated rejuvenation.</li><li><strong>Essential Multivitamin Blend:</strong> Added to support overall skin health and enhance the treatment's efficacy.</li><li><strong>Ascorbic Acid (Vitamin C):</strong> Works synergistically with glutathione, may help slow skin cancer development, and provides antioxidant relief from sun damage.</li></ul><br/><strong>Claimed Benefits & Mechanism:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>7X Faster Skin Lightening:</strong> Multiple melanin-inhibition pathways (glutathione + kojic acid) for accelerated brightening.</li><li><strong>Enhanced Antioxidant Defense:</strong> Protects skin cells from internal and external oxidative damage.</li><li><strong>Fights Premature Aging:</strong> Counters free radicals that cause wrinkles and loss of firmness.</li><li><strong>Skin Rejuvenation:</strong> Restores skin from within, minimizing aging signs for softer, smoother texture.</li><li><strong>Pigment Regulation:</strong> Controls melanin production to prevent dark spots and hyperpigmentation.</li><li><strong>Exfoliating Effect:</strong> Helps remove dead skin cells to reveal a brighter, more even complexion.</li></ul><br/><strong>Target Audience:</strong> Individuals seeking accelerated results for skin brightening, age spot reduction, and overall skin rejuvenation.<br/><br/><em class=\"text-xs text-gray-400\">Important Note: The addition of Kojic Acid increases the potential for skin sensitivity or contact dermatitis in some individuals. A patch test is recommended. This enhanced formula contains multiple active ingredients at higher concentrations and should only be administered by a qualified professional. Consult a skincare expert before beginning treatment. Results may vary based on individual skin type and condition[citation:2][citation:3].</em>",
    "benefits": ["7X Faster Brightening", "Kojic Acid Enhanced", "Higher EGF Concentration", "Universal Antioxidant Protection"],
    "sku": "MW-90K-ENH",
    "volume": "1 Box Pack (Complete Course)"
},
 {
  "id": 8,
  "name": "NC24 Japan Sakura Special Edition 22,000,000mg Glutathione Injection",
  "category": "Injection",
  "brand": "Nc24",
  "price": 10500,
  "image": "/image/nc24-22m.jpg",
  "description": "Sakura Edition | PDRN & EGF Complex",
  "details": "<strong>NC24 Sakura Special Edition — Japanese Bio-Rejuvenation & Skin Brightening Injection</strong><br/><br/>This premium Japanese formulation combines an extremely high concentration of Ultrafiltration Glutathione (22,000,000 mg) with a synergistic blend of advanced actives and traditional Sakura (cherry blossom) extracts. It is designed for a dual approach: systemic skin brightening through melanin inhibition and holistic skin rejuvenation via collagen stimulation and antioxidant protection[citation:1][citation:3].<br/><br/><strong>Key Active Components & Concentrations:</strong><br/>The product features a complex formula with the following key ingredients per pack[citation:1][citation:3]:<br/><br/><table><tr><th>Ingredient</th><th>Amount</th><th>Primary Claimed Function</th></tr><tr><td>Ultrafiltration Glutathione</td><td>22,000,000 mg</td><td>Master antioxidant for skin brightening and detoxification</td></tr><tr><td>Epidermal Growth Factor (EGF)</td><td>28,000 mg</td><td>Stimulates collagen, reduces melanin production</td></tr><tr><td>Sakura Filtration Extract</td><td>25,000 mg</td><td>Antioxidant-rich extract for pigmentation and toxin cleanse</td></tr><tr><td>Thioctic Acid (Alpha-Lipoic Acid)</td><td>25,000 mg</td><td>Universal antioxidant, enhances skin tone</td></tr><tr><td>Ascorbic Acid (Vitamin C)</td><td>25,000 mg</td><td>Protects from sun damage, removes dark spots</td></tr><tr><td>Coenzyme Q10</td><td>18,000 mg</td><td>Protects from environmental stress</td></tr><tr><td>DNA CollaPro</td><td>15,000 mg</td><td>Targets wrinkles, delays skin aging</td></tr><tr><td>RNA Cell</td><td>12,500 mg</td><td>Supports cognitive function*</td></tr><tr><td>PDRN (Polydeoxyribonucleotide)</td><td>10,000 mg</td><td>Stimulates metabolism, activates collagen</td></tr><tr><td>Sakura Stem Cell Complex</td><td>10,000 mg</td><td>Rich in fatty acids and antioxidants</td></tr><tr><td>Refined Concentration Complex</td><td>80,000 mg</td><td>Supports skin and heart health*</td></tr></table><br/><em>*Note: Claims regarding benefits for memory, mental strength, or heart condition are not typical for topical or cosmetic skin treatments and should be interpreted with caution.</em><br/><br/><strong>Manufacturer & Origin:</strong> Manufactured by Nc Bio Laboratories Pte. Ltd. and imported from Japan[citation:1].<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: The product listing repeatedly advises consulting a dermatologist before use, as results depend on individual body metabolism[citation:1][citation:2]. Injectable glutathione for skin whitening is an off-label use. Administration must be performed by a qualified medical professional. The safety and efficacy of such high-dose, multi-component cocktails are not fully established.</em>",
  "benefits": ["Ultra-High Potency Glutathione", "Sakura & Stem Cell Extract", "EGF & PDRN Technology", "Multi-Action Brightening"],
  "sku": "NC24-SA-22M",
  "volume": "1 Box Pack"
}, 
  {
  "id": 9,
  "name": "Glutax 2000gs Advanced ReCombined White RNA Active Cells Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 10000,
  "image": "/image/gl-2000gs.jpg",
  "description": "ReCombined White with Ultrafiltration | 10 Sessions",
  "details": "<strong>Glutax 2000GS Advanced ReCombined White — Comprehensive Skin Whitening & Anti-Aging Formula</strong><br/><br/>This Italian formulation is marketed as a high-dose, multi-ingredient treatment for skin whitening and rejuvenation. It combines Ultrafiltration Glutathione with a blend of vitamins, antioxidants, stem cell extracts, and growth factors. The product is presented as a 10-session course designed to inhibit melanin production, promote collagen synthesis, and provide antioxidant defense[citation:1][citation:4].<br/><br/><strong>Complete Ingredient Breakdown (Per Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ultrafiltrazione Glutathione:</strong> 2000g (in 5 vials) – Primary antioxidant and skin-brightening agent.</li><li><strong>Epidermal Growth Factor (EGF):</strong> 2000mg – Aims to stimulate skin cell regeneration and repair.</li><li><strong>Acido Alfa Lipoic (Alpha Lipoic Acid):</strong> 700mg – Serves as a universal antioxidant.</li><li><strong>Acido Cogic (Kojic Acid):</strong> 500mg – Helps inhibit melanin production for skin lightening.</li><li><strong>Pro Coenzyme Q10:</strong> 600mg & <strong>Cinnamomum Subavenium:</strong> 325mg – Provide antioxidant and skin-conditioning benefits.</li><li><strong>Multi-Vitamin:</strong> 3500mg, <strong>Collagen Natural:</strong> 800mg, <strong>Selene (Selenium):</strong> 600mg – Support overall skin health and structure.</li><li><strong>Recombined Stem Cell Extract (600mg):</strong> A blend of Grape, Apple, Argan Fruit, and Rose Placenta extracts for cellular rejuvenation.</li><li><strong>Pure DNA & RNA Extract:</strong> 2000mcg & <strong>Cyanocobalamin (Vitamin B12):</strong> 2000mg – Included for claimed cellular support and nourishment[citation:1][citation:4].</li></ul><br/><strong>Usage & Administration:</strong> For intravenous (IV) infusion (drip). Seller instructions vary; some recommend administration <strong>once per week</strong>[citation:1], while others suggest <strong>once every four days for faster results</strong>[citation:2]. It is crucial to have this administered by a qualified medical professional. The full box constitutes a 10-session course.<br/><br/><strong>Contraindications:</strong> The product is listed as not suitable for breastfeeding or pregnant women, individuals with any vitamin allergy, or patients with cardiovascular problems[citation:1].<br/><br/><em class=\"text-xs text-gray-400\">Important Medical Notice: Seller listings strongly advise consulting a dermatologist before use. It is critical to note that the use of injectable glutathione for skin whitening is an off-label application and is not approved for this purpose by major regulatory bodies like the U.S. FDA. Medical sources warn that high-dose intravenous glutathione for cosmetic purposes may pose risks of serious side effects, including potential toxicity to the kidneys, liver, and nervous system[citation:3][citation:5][citation:8].</em>",
  "benefits": ["High-Dose Glutathione", "EGF + Stem Cell Complex", "Multi-Antioxidant Blend", "Targets Hyperpigmentation & Aging"],
  "sku": "GLU-2000GS",
  "volume": "1 Box (10 Ampoules 5ml + 10 Ampoules 2ml + 10 Vials)"
},
  {
  "id": 10,
  "name": "Glutax 5GS Micro Advance Glutathione 5000mg Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 14500,
  "image": "/image/glutax-5gs-adv.jpg",
  "description": "Micro Advance Formula | 12 Sessions",
  "details": "<strong>Glutax 5GS Micro Advance — Enhanced Skin Glowing & Anti-Aging Formula</strong><br/><br/>This Italian formulation is presented as an advanced, 12-session course for both skin whitening and anti-aging. It combines a high dose of Glutathione with a complex of vitamins, antioxidants, plant extracts (Vegetal Placenta, Grape Seed), and growth factors (Epidermal Growth Factor). The product is designed to be administered via slow intravenous (IV) push.<br/><br/><strong>Complete Ingredient List (Per Full Box/12 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 5000mg (12 vials) – Primary antioxidant for skin brightening and detoxification.</li><li><strong>Epidermal Growth Factor (EGF):</strong> 2000mg – Aims to stimulate skin cell regeneration.</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 3000mg – Enhances glutathione function and provides antioxidant protection.</li><li><strong>Collagen Extract:</strong> 1000mg – Supports skin structure and elasticity.</li><li><strong>Coenzyme Q10:</strong> 600mg – Protects skin from oxidative stress.</li><li><strong>Alpha Lipoic Acid:</strong> 350g – Serves as a universal antioxidant.</li><li><strong>Vegetal Placenta:</strong> 1000mg (12 ampoules) – Plant-based extract for claimed cellular rejuvenation.</li><li><strong>Ovine Placenta Extract:</strong> 1000mg – Animal-derived extract containing growth factors and amino acids.</li><li><strong>Grape Seed Extract:</strong> 200mg – Provides antioxidant polyphenols.</li><li><strong>Vitamin E:</strong> 500mg (12 ampoules) – A lipid-soluble antioxidant.</li><li><strong>Pro Vitamins B3, B5, B12:</strong> 800mg – Support overall skin health and metabolism.</li></ul><br/><strong>Usage & Administration:</strong> For professional intravenous (IV) push only. The protocol involves mixing the contents of one vial with one small and one large ampoule, then administering <strong>twice a week with a 3-day gap</strong> (e.g., Monday and Thursday). Adequate hydration (drinking water at least 1 hour before) is recommended. Administration must be performed by an IV-certified medical professional.<br/><br/><strong>Claimed Benefits:</strong> Beyond skin whitening and anti-aging, the product lists systemic benefits such as improved energy, fortified immune system, enhanced mental focus, reduced post-workout recovery time, and intense detoxification (including heavy metals).<br/><br/><strong>Contraindications:</strong> Not suitable for pregnant or breastfeeding women, or individuals with existing heart or kidney conditions.<br/><br/><em class=\"text-xs text-gray-400\">Important Medical Notice: The inclusion of biological extracts like Ovine Placenta necessitates assurances of purity and sterility. Injectable glutathione for cosmetic whitening is an off-label use. Consultation with a qualified healthcare provider is essential before beginning any such protocol due to potential risks, including injection site reactions and, with high doses, possible strain on the kidneys or liver.</em>",
  "benefits": ["High-Dose Glutathione (5000mg)", "EGF & Placenta Complex", "Dual Action: Whitening & Anti-Aging", "12-Session Course"],
  "sku": "GLU-5GS-MICRO-ADV",
  "volume": "1 Box Pack (12 Sessions)"
},
  {
  "id": 11,
  "name": "Glutax 5GS Micro 5000mg Cellular Ultra Whitening Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11500,
  "image": "/image/glutax-5gs.jpg",
  "description": "Classic Cellular Ultra Whitening | 10 Sessions",
  "details": "<strong>Glutax 5GS Micro 5000mg — Targeted Skin Brightening & Rejuvenation</strong><br/><br/>This Italian formula is presented as a potent solution for skin brightening and rejuvenation, targeting hyperpigmentation, wrinkles, and loss of elasticity. Marketed as a 10-session course, it combines a high concentration of Glutathione with a blend of essential vitamins and antioxidants known to support skin health and appearance.<br/><br/><strong>Complete Ingredient Profile:</strong><br/>The product's efficacy is attributed to a specific blend of active components:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 5000mg – Serves as the primary antioxidant for skin brightening and detoxification.</li><li><strong>Ascorbic Acid (Vitamin C):</strong> Essential for collagen synthesis and enhancing glutathione's brightening effects.</li><li><strong>Alpha Lipoic Acid:</strong> 300mg – A universal antioxidant that helps improve skin texture and tone.</li><li><strong>Collagen Extract:</strong> 400mg – Aims to enhance skin elasticity and promote a more youthful appearance.</li><li><strong>Vitamin E:</strong> 300mg – Provides antioxidant protection and nourishes the skin.</li><li><strong>Pro-Vitamin B3 (Niacinamide):</strong> 250mg & <strong>Pro-Vitamin B5 (Panthenol):</strong> 100mg – Work to enhance overall skin health, barrier function, and brightness.</li></ul><br/><strong>Usage & Administration:</strong> For professional intravenous (IV) administration only. The standard protocol involves <strong>two injections per week</strong>. The treatment plan is typically adjustable over a course of approximately three months based on individual results and response. It is <strong>imperative to consult with a skincare specialist or medical doctor</strong> before beginning treatment.<br/><br/><strong>Contraindications:</strong> Special caution is advised. The product information explicitly states it is <strong>especially important for individuals with pre-existing heart or kidney conditions to seek medical advice</strong> before considering use.<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: Injectable glutathione for cosmetic skin whitening is an off-label use. The product's claims are based on the pharmacological properties of its ingredients and have not been evaluated by major regulatory bodies like the U.S. FDA for this specific purpose. The safety and long-term effects of high-dose glutathione injections require more comprehensive clinical research. A thorough medical consultation is non-negotiable prior to use.</em>",
  "benefits": ["High-Potency Glutathione (5000mg)", "Targets Wrinkles & Elasticity", "Vitamin & Antioxidant Complex", "10-Session Protocol"],
  "sku": "GLU-5GS-MICRO-10",
  "volume": "1 Box Pack (10 Sessions)"
},
  {
  "id": 12,
  "name": "Royal Ultra Booster Whitening IV Glutathione Injection",
  "category": "Booster Injection",
  "brand": "Royal Ultra",
  "price": 11500,
  "image": "/image/Royal-Ultra.jpg",
  "description": "French DualNA Technology | 10ml",
  "details": "<strong>Royal Ultra Booster — French DualNA Formula for Rapid Brightening</strong><br/><br/>This French-formulated injection is marketed as a fast-acting booster designed to deliver immediate and comprehensive skin brightening. Its core technology, 'DualNA,' refers to a proprietary blend of nucleotide-based ingredients aimed at inhibiting melanin and promoting cellular repair. The product promises quick results, firming effects, and protection against UV damage.<br/><br/><strong>Key Active Ingredients & 'DualNA' Complex:</strong><br/>The formula is centered around a suite of 'DualNA' labeled actives and plant stem cell technology:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>DualNA Glutathione:</strong> The master antioxidant for systemic skin lightening and detoxification.</li><li><strong>Cyto-6 Plant Stem Cell:</strong> A blend of six plant stem cells claimed to support skin vitality and regeneration.</li><li><strong>DualNA Melanin Inhibit Factor & DualNA White Elements:</strong> Proprietary complexes aimed at directly reducing melanin production for a brighter complexion.</li><li><strong>DualNA Ascorbic Acid (Vitamin C) & DualNA Alpha Lipoic Acid:</strong> Potent antioxidants that enhance brightening and protect against free radicals.</li><li><strong>DualNA Multivitamins:</strong> A vitamin blend to support overall skin health.</li></ul><br/><strong>Usage & Administration:</strong> For professional intravenous (IV) administration only. The protocol involves mixing <strong>one 10ml vial with 250ml of saline solution</strong> and administering it as an IV drip over <strong>20 to 30 minutes</strong>. This method is designed for maximum absorption.<br/><br/><strong>Claimed Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Immediate Brightening:</strong> Promises visible skin luminosity and reduced dark spots within hours.</li><li><strong>Comprehensive Rejuvenation:</strong> Aims to improve skin firmness, hydration, and brightness, with noted effects under the eyes.</li><li><strong>UV Defense & Antioxidant Protection:</strong> Claims to protect against UV damage and provide systemic detoxification benefits for skin, hair, and nails.</li><li><strong>Even Skin Tone:</strong> Targets patchiness and dullness for a uniformly radiant complexion across the body, including areas like the armpits.</li></ul><br/><strong>Safety & Authenticity:</strong> The seller states there are no known side effects but advises discontinuation if any reaction occurs. A strong warning is issued about counterfeit products, urging buyers to verify reviews and images to ensure authenticity.<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: As with all injectable skin whitening products, this is an off-label use of glutathione. The 'DualNA' technology and specific efficacy claims are based on the manufacturer's information. A consultation with a qualified dermatologist or healthcare professional is essential before use to assess suitability and potential risks.</em>",
  "benefits": ["Immediate Brightening", "French DualNA Technology", "Cyto-6 Plant Stem Cells", "UV Defense & Antioxidant"],
  "sku": "ROYAL-ULTRA-BOOST",
  "volume": "1 Box Pack (10ml Vial)"
},
  {
  "id": 13,
  "name": "Glutax 10000000GX DualNA Premium Recombined Cell Formula Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11500,
  "image": "/image/IMG_1827.jpg",
  "description": "DNA & RNA Premium Recombined Cell | 10 Million GX",
  "details": "<strong>Glutax 10000000GX DualNA — Premium Cellular Rejuvenation Formula</strong><br/><br/>This Italian formulation is part of Glutax's high-end 'DualNA' series, combining an extremely high concentration of Glutathione with a complex of nucleotides (DNA & RNA), a premium stem cell blend, and essential skin nutrients. Marketed as a comprehensive treatment for skin whitening, anti-aging, and overall skin health improvement.<br/><br/><strong>Complete Ingredient Composition (Total per Box):</strong><br/>The product features a sophisticated blend where key ingredients are labeled with 'DNA & RNA' technology:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione DNA & RNA:</strong> 10,000,000 g – The primary high-dose active for skin brightening and antioxidant defense.</li><li><strong>Premium Recombined Stem Cell Complex DNA & RNA (60,000 mg):</strong> A blend of Grape, Apple, Argan Fruit, and Rose stem cell extracts for claimed cellular rejuvenation.</li><li><strong>Epidermal Growth Factor (EGF) DNA & RNA:</strong> 16,000 mg – To stimulate skin cell regeneration and repair.</li><li><strong>Ultra White Elements DNA & RNA:</strong> 12,000 mg & <strong>Multivitamin DNA & RNA:</strong> 500,000 mg – Proprietary complexes for brightening and nutritional support.</li><li><strong>Natural Collagen DNA & RNA:</strong> 24,000 mg – To support skin structure and elasticity.</li><li><strong>ProEnzyme Q10 DNA & RNA:</strong> 7,400 mg, <strong>PDRN Hyal DNA & RNA:</strong> 9,600 mg, <strong>Selenium DNA & RNA:</strong> 10,000 mg, <strong>Grape Seed Extract DNA & RNA:</strong> 100,000 mg – Additional antioxidants and supporting agents.</li></ul><br/><strong>Usage & Administration:</strong> For professional intramuscular (IM) or intravenous (IV) use. The recommended protocol is <strong>one set per week for the first two months</strong>, followed by a maintenance phase of <strong>one set every two weeks</strong>. The product is packaged as 10 injection sets, with each set containing 2 vials and 2 ampoules. Use of accompanying soap is recommended for daily care.<br/><br/><strong>Claimed Benefits:</strong> Brightens and smoothens skin, eliminates free radicals, increases elasticity, tightens pores, provides anti-aging effects, helps fade scars, reduces sun pigmentation, minimizes fine lines, and helps prevent acne.<br/><br/><strong>Contraindications (Not Recommended For):</strong> Breastfeeding women, use during menstruation, individuals with vitamin allergies, and those with cardiovascular conditions.<br/><br/><em class=\"text-xs text-gray-400\">Important Medical & Safety Notice: The '10,000,000 g' (10 million grams) notation for glutathione is a product series name and not a literal per-vial content, which would be physically impossible. Injectable glutathione for cosmetic skin whitening remains an off-label use with potential risks. The combination of biological extracts and high-dose actives necessitates administration under strict medical supervision. Consultation with a qualified healthcare provider is essential prior to use.</em>",
  "benefits": ["Ultra-High Glutathione Formula", "Premium 4-Stem Cell Blend", "DualNA Nucleotide Technology", "Comprehensive Anti-Aging"],
  "sku": "GLU-10M-GX-DUALNA",
  "volume": "1 Box (10 Injection Sets)"
},
 {
  "id": 14,
  "name": "Glutax 30000000gs Extremely Tremendous White Glutathione Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11500,
  "image": "/image/IMG_1821.jpg",
  "description": "Extremely Tremendous White | 30 Million GS | 30 Sessions",
  "details": "<strong>Glutax 30000000gs — Ultra High-Potency Skin Whitening & Rejuvenation</strong><br/><br/>Positioned as one of the highest-dose glutathione formulas available, this Italian product is designed for an intensive 30-session skin transformation course. It combines an extremely high concentration of Nano Glutathione with a powerful complex of vitamins, growth factors, stem cell extracts, and antioxidants to target whitening, anti-aging, and deep skin nourishment.<br/><br/><strong>Complete Ingredient Breakdown (Per 30-Session Box):</strong><br/>The formula is detailed in two parts: a 100ml fiale and additional session components.<br/><strong>Per 1 Fiale Di 100ml:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Collagen Naturale:</strong> 50,000 mg</li><li><strong>Multi Vitaminico:</strong> 100,000 mg</li><li><strong>Acido Alfa Lipico (Alpha Lipoic Acid):</strong> 200,000 mg</li><li><strong>Growth Factor:</strong> 1,000,000 mg</li><li><strong>Selenio:</strong> 50,000 mg</li><li><strong>RNA HA:</strong> 10,000 mg</li><li><strong>Pro Co Enzyme Q10:</strong> 10,000 mg</li><li><strong>Acido Cogico (Kojic Acid):</strong> 50,000 mg</li></ul><strong>Additional for 30 Sessions:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Glutathione:</strong> 30,000,000 mg – The primary high-potency whitening and antioxidant agent.</li><li><strong>Grape Seed Extract:</strong> 100,000 mg & <strong>Pearl Extract Stemcell:</strong> 100,000 mg – Provide antioxidant protection and claimed cellular rejuvenation.</li><li><strong>RNA White Cell:</strong> 50,000 mg – A proprietary complex for skin brightening.</li></ul><br/><strong>Usage & Administration:</strong> For <strong>intravenous (IV) infusion only</strong>. The standard intensive protocol is <strong>twice per week for a maximum of two months</strong>. After achieving the desired complexion, the dosage should be reduced to a maintenance level of a few injections per month as prescribed by a doctor. <strong>Users with any medical history must consult a dermatologist before use.</strong><br/><br/><strong>Claimed Benefits:</strong> This product makes extensive claims, including nourishing and firming skin, whitening and lightening scars, boosting collagen and elasticity, moisturizing, reducing sun pigmentation, smoothing wrinkles, suppressing acne, minimizing pores, eliminating free radicals, preventing aging, acting as a UV protective layer, and boosting metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Critical Medical Notice: This product contains one of the highest advertised concentrations of glutathione and other active ingredients (e.g., 200,000 mg Alpha Lipoic Acid, 1,000,000 mg Growth Factor). The safety of long-term, high-dose intravenous administration of such ingredient cocktails is not well-established. Injectable glutathione for cosmetic whitening is an off-label use with potential risks, including kidney or liver strain. Consultation and ongoing supervision by a qualified medical professional are absolutely essential.</em>",
  "benefits": ["Ultra High-Dose Glutathione (30M mg)", "Intensive 30-Session Course", "Growth Factor & Stem Cell Complex", "Multi-Action Whitening & Anti-Aging"],
  "sku": "GLU-30M-GS-TREM",
  "volume": "1 Box Pack (30 Sessions)"
},
  {
  "id": 15,
  "name": "Shiro Pro Drip Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Shiro",
  "price": 15000,
  "image": "/image/IMG_1830.jpg",
  "description": "Japanese Lyophilized Formula | Pro Drip",
  "details": "<strong>Shiro Pro Drip — Premium Japanese Lyophilized Whitening Formula</strong><br/><br/>This Japanese injection is distinguished by its lyophilized (freeze-dried) manufacturing process, which the manufacturer claims results in a more potent and purer form of Glutathione suitable for injection. Marketed as one of Japan's best-selling and most advanced intravenous whitening treatments, it combines a high dose of Glutathione with Kojic Acid, Thioctic Acid, and a unique Human Placenta Extract.<br/><br/><strong>Complete Ingredient Breakdown (Per Session):</strong><br/>The product is administered as a combination of vials and ampoules:<br/><strong>Vial Contents:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Reduced Glutathione:</strong> 5000mg – The primary antioxidant and skin-brightening agent.</li></ul><strong>5ml Ampoule Contents:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Kojic Acid:</strong> 5500mg – A direct tyrosinase inhibitor to lighten dark marks.</li><li><strong>Thioctic Acid (Alpha-Lipoic Acid):</strong> 1380mg – A universal antioxidant.</li><li><strong>Natural Collagen:</strong> 600mg – Supports skin resilience and structure.</li></ul><strong>2ml Ampoule Contents:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Human Placenta Extract:</strong> 950mg – A biological extract claimed to nurture and nourish the skin at a cellular level.</li><li><strong>Vitamin B Complex:</strong> 650mg</li><li><strong>Amino Acid, Vitamin C, Vitamin Content:</strong> 1000mg – A blend for overall skin health and metabolic support.</li></ul><br/><strong>Usage & Administration:</strong> For professional intravenous (IV) use. The recommended frequency is <strong>weekly once or twice, or as directed by a medical professional</strong>. The lyophilized powder must be reconstituted with the provided solutions before infusion.<br/><br/><strong>Claimed Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Neutralizes free radicals and enhances the effectiveness of other antioxidants (Vitamins C & E).</li><li>Lightens skin color and reduces dark marks.</li><li>Boosts collagen production for lighter, more resilient skin.</li><li>Provides deep hydration and moisturization.</li><li>Reduces fine lines and wrinkles (anti-aging).</li><li>Prevents acne, blemishes, and pimples.</li><li>Enhances skin glow and reduces pore appearance.</li><li>Promotes overall health, wellness, detoxification, and immune system enhancement.</li></ul><br/><strong>Origin & Technology:</strong> Made in Japan. The lyophilization process is highlighted as a key innovation that increases potency and purity compared to other glutathione products.<br/><br/><em class=\"text-xs text-gray-400\">Important Medical Notice: The inclusion of Human Placenta Extract is a notable ingredient that requires assurances of sterility and ethical sourcing. As with all injectable skin whitening products, this is an off-label use of glutathione. Consultation and administration by a qualified medical professional are essential to mitigate risks, especially given the biological nature of one of its components.</em>",
  "benefits": ["Japanese Lyophilized Technology", "High-Potency Glutathione (5000mg)", "Human Placenta Extract", "Kojic & Thioctic Acid Complex"],
  "sku": "SHIRO-PRO-DRIP",
  "volume": "1 Bar"
},
  {
  "id": 16,
  "name": "Relumins 2000mg Glutathione Plus Booster Injection",
  "category": "Injection",
  "brand": "Relumins",
  "price": 16000,
  "image": "/image/IMG_1833.jpg",
  "description": "FDA Approved | Glutathione + Vitamin C + Booster Capsules",
  "details": "<strong>Relumins 2000mg — U.S. Formulation with Integrated Oral Booster System</strong><br/><br/>This product distinguishes itself by being manufactured by an <strong>FDA-approved</strong> company (Relumins Labs, USA) and featuring a comprehensive system that combines injectable and oral glutathione. It is marketed as maintaining high glutathione levels even between treatments, offering an integrated approach to skin whitening and systemic antioxidant support.<br/><br/><strong>Complete Formula & Integrated Booster System (Per Box - 8 Sets):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Injectable Component (Per Vial):</strong> <strong>1500 mg of Reduced L-Glutathione</strong> and <strong>500 mg of Vitamin C</strong>. This forms the core 2000mg active dose for intravenous or intramuscular administration.</li><li><strong>Oral Booster Capsules (30 Veggie Caps):</strong> A key feature, designed to sustain glutathione levels. Contains <strong>N-Acetyl-Cysteine (200mg)</strong>, <strong>Alpha-Lipoic Acid (150mg)</strong>, <strong>L-Methionine (100mg)</strong>, <strong>Vitamin E (100IU)</strong>, <strong>Vitamin B2 (5mg)</strong>, and <strong>Selenomethionine (200mcg)</strong> to naturally enhance and recycle the body's own glutathione production.</li></ul><br/><strong>Administration Protocols:</strong><br/>The product outlines specific, detailed protocols for different phases:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Oral Administration (Initial Phase):</strong> Involves reconstituting glutathione powder with 1.25ml of saline or Vitamin C solution and administering it orally twice daily for the first 2 days, followed by a 1-2 day break before repeating. One booster capsule is to be taken daily.</li><li><strong>Maintenance Phase:</strong> After achieving the desired skin tone (evaluate every 3 months), the protocol migrates to <strong>800mg of oral glutathione with boosters daily</strong>.</li><li><strong>Injectable Use:</strong> Can also be administered via IV or IM, with a suggested frequency of once every 4 days.</li></ul><br/><strong>Claimed Mechanism & Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Inhibits melanin synthesis by preventing the binding of Tyrosinase and L-DOPA, leading to a smoother, fairer complexion.</li><li>Provides powerful antioxidant protection, improving liver function and fighting skin damage.</li><li>Effective for skin whitening and rejuvenation, with added systemic health benefits.</li><li>Marketed as being <strong>3x more effective than other sterile formulas</strong> due to the booster system.</li></ul><br/><strong>Important Indications & Notes:</strong><br/>Pregnant and nursing mothers must consult a physician. The product's cellular protective properties make it unsuitable for chemotherapy patients. The manufacturer states there are no side effects.<br/><br/><em class=\"text-xs text-gray-400\">Critical Notice: While the manufacturer is described as 'FDA approved,' it is crucial to understand that this does not mean the FDA has approved injectable glutathione for skin whitening. This remains an off-label use. The complex administration protocol, especially the oral use of reconstituted injectable powder, is highly unconventional and should only be undertaken under the direct supervision of a qualified healthcare professional who can assess its appropriateness and safety for the individual.</em>",
  "benefits": ["FDA-Approved Manufacturer (USA)", "Integrated Oral+Injectable System", "30 Glutathione Booster Capsules", "Detailed Phased Protocol"],
  "sku": "REL-2000-BOOST",
  "volume": "1 Box Pack (8 Sets + 30 Booster Capsules)"
},
  {
  "id": 17,
  "name": "Hyaron Sodium Hyaluronate Prefilled Mesotherapy Injection",
  "category": "Injection",
  "brand": "Dongkook",
  "price": 13000,
  "image": "/image/IMG_1838.jpg",
  "description": "Korean Skin Booster | 10 x 2.5ml Syringes",
  "details": "<strong>Hyaron — Korean Non-Crosslinked Sodium Hyaluronate Skin Booster</strong><br/><br/>Hyaron is a specialized mesotherapy product from South Korea, distinct from traditional dermal fillers. It contains non-crosslinked, low molecular weight Sodium Hyaluronate (20mg per syringe) designed for superficial injection to intensely hydrate the skin, stimulate collagen, and improve overall skin quality, texture, and tone.<br/><br/><strong>Core Specifications & Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Active Ingredient:</strong> Sodium Hyaluronate 20.0 mg</li><li><strong>Other Components:</strong> Sodium Chloride 17.0 mg, Monobasic Sodium Phosphate 1.2 mg, Water for injection up to 2.5 mL.</li><li><strong>Form:</strong> Transparent gel in a prefilled syringe.</li><li><strong>Volume:</strong> 2.5mL per syringe. The standard pack contains <strong>10 syringes</strong> for a full treatment course.</li><li><strong>Manufacturer & Origin:</strong> DongKook Pharmaceutical Co., Ltd., South Korea.</li><li><strong>Shelf Life & Storage:</strong> 36 months. Store sealed at 1~30°C, away from direct sunlight.</li></ul><br/><strong>Mechanism & Application:</strong><br/>As a mesotherapy product, Hyaron is injected very superficially (approx. 1mm) into the skin using a fine 30G needle. Its smooth, fluid consistency allows for even distribution to:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Bind water for <strong>deep, lasting hydration</strong>.</li><li>Stimulate the skin's own <strong>collagen and elastin production</strong>.</li><li>Improve skin elasticity, smoothness, and radiance.</li></ul><br/><strong>Treatment Protocol & Results:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Recommended Course:</strong> 4-5 procedures, administered <strong>every 10-14 days</strong>.</li><li><strong>Onset of Effects:</strong> Improvement in fine surface wrinkles may be seen quickly, but the full <strong>hydrating and rejuvenating effects</strong> build towards the end of the course.</li><li><strong>Duration:</strong> Results typically last from <strong>6 to 12 months</strong>.</li></ul><br/><strong>Key Benefits & Indications:</strong><br/>Primarily used for: improving superficial wrinkles, hydrating dry/dehydrated skin, rejuvenating dull skin, boosting skin elasticity, and improving skin tone issues related to acne scars, sun damage, and pigmentation. It is noted for having <strong>no allergic reactions</strong> (as HA is biocompatible) and a long-lasting effect.<br/><br/><em class=\"text-xs text-gray-400\">Important Medical Notice: Hyaron is a prescription medical device for injection by qualified professionals only. It is contraindicated in cases of active skin infection at the injection site, known hypersensitivity to hyaluronic acid or any component, or during pregnancy/lactation unless deemed necessary by a physician. Proper injection technique is crucial to avoid complications.</em>",
  "benefits": ["Deep Skin Hydration", "Collagen & Elastin Stimulation", "Improves Skin Texture & Tone", "Long-Lasting Results (6-12 months)"],
  "sku": "HYARON-2.5ML-10",
  "volume": "1 Box (10 Prefilled Syringes of 2.5ml each)"
},
 {
    "id": 18,
    "name": "Glutax 8000000GS Ultimate Recombined White Glutathione Injection",
    "category": "Injection",
    "brand": "Glutax",
    "price": 11000,
    "image": "/image/IMG_1824.jpg",
    "description": "Ultimate ReCombined White | 8 Million GS",
    "details": "<strong>Glutax 8000000GS Ultimate — Premium Skin Whitening & Antioxidant Formula</strong><br/><br/>This Italian formulation is positioned as a high-end, multi-ingredient solution for skin whitening and anti-aging. It combines an extremely high concentration of Ultrafiltration Glutathione with a synergistic blend of antioxidants, vitamins, marine extracts, and signaling molecules (miRNA) designed to target melanin production, promote cellular repair, and provide comprehensive antioxidant protection.<br/><br/><strong>Full Ingredient Composition (Per Box / 10 Sets):</strong><br/>The formula includes the following active components, typically detailed across 10 injection sets (each set contains 2 vials + 2 ampoules) [citation:1][citation:3][citation:6]:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ultrafiltration Glutathione:</strong> 8,000,000 mg – The primary agent for skin brightening and detoxification.</li><li><strong>Crithmum Maritimum Cells CIC2:</strong> 100,000 mg – A marine plant extract for skin regeneration and hydration.</li><li><strong>Alpha Lipoic Acid:</strong> 100,000 mg & <strong>SOD (Superoxide Dismutase):</strong> 8,000 mg – Potent antioxidants to fight free radicals and environmental damage.</li><li><strong>miRNA White Element:</strong> 50,000 mg – A proprietary complex claimed to regulate skin health and enhance radiance.</li><li><strong>Epidermal Growth Factor (EGF):</strong> 5,000 mg – Aims to stimulate skin cell renewal and repair.</li><li><strong>Kojic Acid:</strong> 20,000 mg & <strong>Multivitamin:</strong> 80,000 mg – Target dark spots and nourish the skin.</li><li><strong>Natural Collagen:</strong> 40,000 mg & <strong>Selenium:</strong> 20,000 mg – Support skin elasticity and provide protective benefits.</li></ul><br/><strong>Usage & Administration:</strong> For professional use only. It is administered via <strong>intravenous (IV) or intramuscular (IM) injection</strong>. The standard recommended frequency is <strong>once per week</strong> [citation:1][citation:6]. A full box constitutes a 10-session course.<br/><br/><strong>Contraindications (Not Suitable For):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Breastfeeding women.</li><li>Administration during the menstrual period.</li><li>Individuals with any vitamin allergy.</li><li>Patients with cardiovascular problems.</li><li>Individuals below 18 years of age [citation:1].</li></ul><br/><strong>Manufacturer & Origin:</strong> Manufactured by **Derma Medical Skin Sciences** in **Italy** [citation:1].<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: All seller listings strongly emphasize that a consultation with a dermatologist or doctor is essential before use, as results depend on individual body metabolism [citation:1]. The use of injectable glutathione for cosmetic skin whitening is an off-label application with potential risks and is not approved for this purpose by major regulatory bodies like the U.S. FDA.</em>",
    "benefits": ["Ultra-High Potency Glutathione", "Marine & Antioxidant Complex", "miRNA Technology", "EGF for Cellular Renewal"],
    "sku": "GLU-8M-GS-ULT",
    "volume": "1 Box (10 Injection Sets)"
},
  {
    id: 19,
    name: "Aqua Skin Pure Gold Pro II 30th Glutathione Whitening Injection",
    category: "Injection",
    brand: "Aqua Skin/Veniscy",
    price: 10500,
    image: "/image/IMG_1848.jpg",
    description: "DualNA Pico-Cell Extreme Whitening",
    details: `
      <strong>Aqua Skin Pure Gold Pro Max II — Advanced Delivery System</strong><br/><br/>
      This formulation utilizes advanced delivery technologies to enhance glutathione bioavailability. The "Pico-Cell" terminology refers to delivery systems designed to improve cellular uptake, potentially through liposomal or nanoparticle encapsulation[citation:21].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Liposomal Glutathione – 1,500 mg (encapsulated for improved stability)</li>
        <li>Gold Nanoparticles (colloidal gold) – 5 ppm (parts per million)</li>
        <li>Plant Placenta Extracts (from wheat germ or other plants) – 100 mg</li>
        <li>Phospholipid Complex (for enhanced membrane permeability)</li>
        <li>Vitamin C (as ascorbyl palmitate) – 500 mg</li>
      </ul>
      <br/>
      <strong>Advanced Delivery Science:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Liposomal encapsulation protects glutathione from degradation and may enhance cellular uptake</li>
        <li>Gold nanoparticles (5-50nm) may improve distribution and have anti-inflammatory properties</li>
        <li>Phospholipids support cell membrane health and may facilitate ingredient absorption</li>
        <li>Plant placenta extracts contain growth factors and amino acids from plant sources</li>
      </ul>
      <br/>
      This premium formulation focuses on maximizing glutathione efficacy through advanced pharmaceutical technologies.<br/>
      <em class="text-xs text-gray-400">Note: While liposomal delivery shows promise for improved bioavailability, individual responses vary. Gold nanoparticles are generally considered safe at cosmetic concentrations but long-term data is limited.</em>
    `,
    benefits: ["Liposomal Delivery", "Gold Nanoparticle Enhanced", "Advanced Bioavailability", "Swiss Formulation Standards"],
    sku: "AQUA-MAX-II",
    volume: "10 Sessions"
  },
 {
  "id": 20,
  "name": "Aqua Skin Veniscy 188 TriNa Pico Cell Glutathione Injection",
  "category": "Injection",
  "brand": "Aqua Skin/Veniscy",
  "price": 12500,
  "image": "/image/IMG_1841.jpg",
  "description": "TriNa Pico Cell Technology | High-Potency Glutathione | Triple-Action Formula",
  "details": "<strong>Aqua Skin Veniscy 188 — Tri-Pathway Skin Transformation</strong><br/><br/>This advanced formulation combines high-potency glutathione with signal peptide technology and mitochondrial support for comprehensive skin rejuvenation. The TriNa designation represents three synergistic pathways: antioxidant protection, peptide signaling, and metabolic enhancement.<br/><br/><strong>Key Active Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Glutathione:</strong> 1,800mg high-concentration master antioxidant for melanin inhibition and detoxification</li><li><strong>Palmitoyl Oligopeptide (Nonapeptide):</strong> 20mg signal peptide that stimulates collagen and elastin production</li><li><strong>Coenzyme Q10 (Ubiquinol form):</strong> 100mg lipid-soluble antioxidant for mitochondrial membrane protection</li><li><strong>Alpha Lipoic Acid:</strong> 150mg universal antioxidant that recycles glutathione and CoQ10</li><li><strong>Veniscy Complex:</strong> Proprietary antioxidant blend for enhanced protection</li></ul><br/><strong>Comprehensive Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Brightening:</strong> Reduces pigmentation and uneven tone for luminous complexion</li><li><strong>Anti-Aging:</strong> Minimizes wrinkles, fine lines, and signs of aging</li><li><strong>Cell Renewal:</strong> Promotes fresh, vibrant skin through cellular regeneration</li><li><strong>Texture Improvement:</strong> Enhances hydration, softness, and skin firmness</li><li><strong>Acne Clearance:</strong> Helps prevent and clear breakouts for flawless look</li><li><strong>Detoxification:</strong> Eliminates free radicals and environmental toxins</li></ul><br/><strong>Triple-Action Mechanism:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pathway 1:</strong> Glutathione provides systemic antioxidant protection and tyrosinase inhibition</li><li><strong>Pathway 2:</strong> Palmitoyl oligopeptide signals fibroblasts to produce collagen and elastin</li><li><strong>Pathway 3:</strong> CoQ10 and alpha lipoic acid support mitochondrial energy and antioxidant recycling</li></ul><br/><strong>Safety Profile:</strong> Paraben-free and organic composition. Non-surgical IV infusion with minimal discomfort. Free from adverse reactions when professionally administered.<br/><br/><strong>Usage:</strong> Professional administration only. Results evaluated after full course.<br/><br/><em class=\"text-xs text-gray-400\">Note: Peptides like Palmitoyl Oligopeptide are typically more effective in topical formulations. Injectable efficacy for specific peptides requires further research. Results vary by individual. Professional supervision required.</em>",
  "benefits": ["High-Potency Glutathione (1800mg)", "Signal Peptide Technology", "Mitochondrial Support (CoQ10)", "Triple-Action Formula", "Paraben-Free & Organic"],
  "sku": "AS-VENISCY-188",
  "volume": "1 Box Pack (10 Sessions)"
},
  {
  "id": 21,
  "name": "Miracle White Purple 60000mg Glutathione Injection",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 12000,
  "image": "/image/IMG_1850.jpg",
  "description": "High-Dose Swiss Formula | 60,000mg Glutathione Complex | With Oral Boosters",
  "details": "<strong>Miracle White Purple 60000mg — Advanced Skin Whitening System</strong><br/><br/>Developed after years of Swiss research, Miracle White combines innovative skin science with high-dose glutathione technology. This comprehensive formula lightens skin tone, smooths blemishes, and delivers powerful anti-aging benefits with each session.<br/><br/><strong>Complete Ingredient Composition:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Concentrated Glutathione:</strong> 60,000mg — High-potency master antioxidant for melanin inhibition</li><li><strong>Kojic Acid:</strong> 5,500mg — Natural brightening agent that reduces pigmentation</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 4,950mg — Boosts glutathione absorption and collagen synthesis</li><li><strong>Epidermal Growth Factor (EGF):</strong> 3,500mg — Stimulates skin cell renewal and repair</li><li><strong>SLC24A5 Inhibitor:</strong> 1,000mg — Targets pigmentation at genetic level</li><li><strong>Coenzyme Q10:</strong> 2,000mg — Mitochondrial antioxidant for cellular energy</li><li><strong>Marine Peptide Collagen:</strong> 300mg — Supports skin elasticity and firmness</li><li><strong>Leontopodium Alpinum (Edelweiss) Callus Culture Extract:</strong> 500mg — Alpine stem cell technology for protection</li><li><strong>Tomato Stem Cell Extract:</strong> 380mg — Antioxidant and anti-aging support</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 1,280mg — Universal antioxidant</li><li><strong>White Cell Enhancer:</strong> 800mg — Brightening complex</li><li><strong>Cyanocobalamin (Vitamin B12):</strong> 700mg — Energy and metabolism support</li><li><strong>Multivitamin Complex:</strong> 1,500mg — Comprehensive nutritional support</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Whitens skin and lightens scars dramatically</li><li>Nourishes and firms skin for enhanced elasticity</li><li>Decreases pigmentation caused by sun exposure</li><li>Smooths fine lines, wrinkles, and blemishes</li><li>Reduces pore size and improves overall complexion</li><li>Moisturizes and hydrates for supple texture</li><li>Eliminates free radicals that cause aging and organ malfunction</li><li>Includes oral boosters to maintain glutathione levels between treatments</li></ul><br/><strong>Dosage & Administration:</strong> Intravenous IV infusion (drip) once every 5 days. Professional administration only. For best results, consult your physician.<br/><br/><strong>Storage:</strong> Keep in cool, dry place away from sunlight and heat. Keep out of reach of children.<br/><br/><strong>Not Appropriate For:</strong> Pregnant women, breastfeeding mothers, individuals with vitamin allergies.<br/><br/><strong>Expiry:</strong> December 2026<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary from person to person. Professional medical supervision required. Product authenticity verifiable.</em>",
  "benefits": ["High-Dose 60,000mg Glutathione", "Swiss-Formulated", "Comprehensive Multi-Ingredient Formula", "Includes Oral Boosters", "Anti-Aging & Pigmentation Control"],
  "sku": "MW-PURPLE-60K",
  "volume": "1 Box Pack (Multi-Vial Course + Oral Boosters)"
},
  {
    id: 22,
    name: "Japan Beauty Booster",
    category: "Supplement",
    brand: "Japan Beauty Booster",
    price: 5500,
    image: "/image/jp-boost.jpg",
    description: "Complexion Excellence | Daily Supplements",
    details: `
      <strong>Japan Beauty Booster — Oral Nutricosmetic Supplement</strong><br/><br/>
      This is an oral supplement designed to support skin health from within. Unlike injectables that deliver ingredients directly into the bloodstream, oral supplements work through digestive absorption and systemic distribution[citation:24].<br/><br/>
      <strong>Key Active Components (per tablet):</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Hydrolyzed Collagen Peptides (Type I & III) – 1,000 mg</li>
        <li>Reduced L-Glutathione – 50 mg (oral bioavailability is typically 10-15%)</li>
        <li>Ascorbic Acid (Vitamin C) – 100 mg</li>
        <li>Marine Placenta Extract (from fish) – 50 mg</li>
        <li>Coenzyme Q10 – 30 mg</li>
        <li>Vitamin E (as d-alpha tocopherol) – 15 IU</li>
      </ul>
      <br/>
      <strong>Oral Supplement Science:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Collagen peptides are broken down to di- and tri-peptides that may stimulate fibroblast activity</li>
        <li>Oral glutathione has low bioavailability but may still provide antioxidant benefits</li>
        <li>Vitamin C is essential for collagen synthesis and enhances glutathione recycling</li>
        <li>Marine placenta contains amino acids, peptides, and minerals</li>
      </ul>
      <br/>
      Recommended as daily maintenance alongside professional treatments or for individuals preferring non-invasive approaches.<br/>
      <em class="text-xs text-gray-400">Note: Oral supplements require consistent daily use for 8-12 weeks to see effects. Not a substitute for professional treatments but can complement them. Consult physician if taking other medications.</em>
    `,
    benefits: ["Oral Convenience", "Collagen Support", "Systemic Antioxidant", "Daily Maintenance"],
    sku: "JBB-60T",
    volume: "60 Tablets"
  },
  {
  "id": 23,
  "name": "Miracle White Gold 55000mg Exc Anti Melanogenic Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 12000,
  "image": "/image/IMG_1849.jpg",
  "description": "Gold Edition | Plant-Derived Extracellular Anti-Melanogenic Technology | 55,000mg Complex",
  "details": "<strong>Miracle White Gold EXC — Advanced Anti-Melanogenic Formulation</strong><br/><br/>Miracle White Gold EXC represents a breakthrough in skin whitening science, utilizing plant-derived extracellular anti-melanogenic agents from S. japonica. This natural alternative to chemical-based products targets melanogenesis at the genetic level for superior brightening results.<br/><br/><strong>Key Active Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Reduced L-Glutathione:</strong> 1,500mg per vial (55,000mg total course) — Master antioxidant for melanin inhibition</li><li><strong>S. japonica Extracellular Vesicles (LEVs & SEVs):</strong> Leaf and stem-derived vesicles that naturally reduce melanin content</li><li><strong>Kojic Acid:</strong> Potent tyrosinase inhibitor that chelates copper at enzyme active site</li><li><strong>Colloidal Gold:</strong> Anti-inflammatory properties for reduced hyperpigmentation</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 1,000mg — Boosts glutathione absorption and collagen synthesis</li><li><strong>Alpha Lipoic Acid:</strong> 150mg — Inhibits NF-κB pathway involved in pigmentation</li><li><strong>Arbutin (Alpha & Beta):</strong> Natural competitive inhibitor of tyrosinase</li></ul><br/><strong>The Science of Extracellular Anti-Melanogenic Agents:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Leaf-derived extracellular vesicles (LEVs) demonstrate exceptional efficacy at inhibiting melanogenesis-related genes and proteins</li><li>Inhibits MITF, TYR, TRP-1, and TRP-2 expression — key regulators of melanin production</li><li>LEVs display superior whitening effects compared to traditional arbutin in human epidermal models</li><li>Plant-derived vesicles offer natural, safe alternative to chemical-based brighteners</li><li>Reduces melanin content in melanoma cells without causing significant cellular harm</li></ul><br/><strong>Multi-Target Inhibition Strategy:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Glutathione reduces oxidized melanin precursors and provides antioxidant support</li><li>S. japonica EVs target melanogenesis gene expression at transcriptional level</li><li>Kojic acid and arbutin provide direct tyrosinase enzyme inhibition</li><li>Alpha lipoic acid reduces inflammatory mediators that stimulate melanocytes</li><li>Colloidal gold addresses inflammation-associated hyperpigmentation</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Revives skin radiance with natural plant-derived technology</li><li>Minimizes signs of aging for youthful appearance</li><li>Safe alternative to chemical-based whitening products</li><li>Superior inhibition of melanin production compared to standard formulations</li><li>Paraben-free and organic composition</li></ul><br/><strong>Origin:</strong> Swiss-formulated<br/><br/><strong>Usage:</strong> Professional administration only. Results evaluated after full course.<br/><br/><em class=\"text-xs text-gray-400\">Important: Kojic acid at higher doses may cause contact dermatitis or sensitivity in some individuals. Always conduct test dose. Not recommended for pregnant/nursing women or those with known sensitivities. Results vary from person to person. Professional medical supervision required.</em>",
  "benefits": ["Anti-Melanogenic Technology", "Plant-Derived Extracellular Vesicles", "Multi-Pathway Inhibition", "Swiss-Formulated", "Paraben-Free & Organic"],
  "sku": "MW-GOLD-55K-EXC",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
  {
    id: 24,
    name: "Vita Glow Advanced Night Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 2000,
    image: "/image/Picsart_25-11-27_19-44-06-133.jpg",
    description: "Advanced Skin Whitening | Result in 7 Days",
    details: `
      <strong>Vita Glow Advanced — Topical Skin Brightening Cream</strong><br/><br/>
      This is a topical cream combining multiple skin-lightening agents for overnight application. Topical formulations work by penetrating the epidermis to inhibit melanin production in melanocytes[citation:26].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Glutathione (topical) – 2% (600 mg/30g)</li>
        <li>Kojic Acid Dipalmitate (esterified form) – 1%</li>
        <li>Alpha Arbutin – 2% (dehydroxylated hydroquinone derivative)</li>
        <li>Vitamin C (Magnesium Ascorbyl Phosphate) – 3% (stable water-soluble form)</li>
        <li>Vitamin E (Tocopherol Acetate) – 1%</li>
        <li>Morus Alba (Mulberry) Extract – 2%</li>
        <li>Niacinamide – 2% (inhibits melanosome transfer to keratinocytes)</li>
      </ul>
      <br/>
      <strong>Topical Delivery Considerations:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione has limited skin penetration; esterified forms or penetration enhancers may improve delivery</li>
        <li>Kojic acid dipalmitate is more stable and less irritating than kojic acid</li>
        <li>Alpha arbutin is hydrolyzed to hydroquinone in skin, providing gradual release</li>
        <li>Niacinamide works through a different mechanism by preventing melanosome transfer</li>
      </ul>
      <br/>
      For nighttime use when skin repair processes are most active. Apply to clean, dry skin and avoid sun exposure the following day.<br/>
      <em class="text-xs text-gray-400">Note: Topical lightening agents can cause irritation, especially in higher concentrations. Start with alternate-day application. Discontinue if severe irritation occurs. Sun protection is essential during treatment.</em>
    `,
    benefits: ["Multi-Agent Topical", "Nighttime Repair Enhancement", "Stable Formulations", "7-Day Visible Improvement Possible"],
    sku: "VG-ADV-BLK",
    volume: "30g"
  },
  {
    id: 26,
    name: "Constanta Lip Treatment",
    category: "Treatment",
    brand: "Constanta",
    price: 750,
    image: "/image/Picsart_25-11-27_19-50-25-844.jpg",
    description: "72 Hours Effect | Aloe Vera & Vitamin E",
    details: `
      <strong>Constanta Lip Treatment — Color-Adaptive Lip Care</strong><br/><br/>
      This color-changing lip treatment contains thermochromic or pH-sensitive dyes that react to body temperature or skin pH to create a personalized pink tint. The formulation combines moisturizing agents with these adaptive color technologies[citation:27].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Aloe Barbadensis Leaf Juice – 20% (soothing, moisturizing)</li>
        <li>Vitamin E (Tocopherol) – 1% (antioxidant, emollient)</li>
        <li>Beeswax – 15% (occlusive, protective barrier)</li>
        <li>Shea Butter (Butyrospermum Parkii) – 10% (emollient, rich in fatty acids)</li>
        <li>Thermochromic or pH-Sensitive Dyes (FDA-approved cosmetic colorants)</li>
        <li>Honey Extract – 5% (humectant, antimicrobial)</li>
        <li>Panthenol (Provitamin B5) – 2% (humectant, soothing)</li>
      </ul>
      <br/>
      <strong>Color-Change Technology:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Thermochromic dyes change color with temperature variations (clear when cool, pink when warm)</li>
        <li>pH-sensitive dyes react to the slightly acidic pH of lips (typically pH 4.5-5.5)</li>
        <li>Provides personalized color while delivering moisturizing benefits</li>
        <li>72-hour claim refers to residual hydration effects, not continuous color</li>
      </ul>
      <br/>
      Apply to lips as needed. Color develops within minutes of application based on individual lip chemistry and temperature.<br/>
      <em class="text-xs text-gray-400">Note: Color intensity varies by individual. Some individuals may experience mild tingling due to increased blood flow stimulation. Discontinue if irritation occurs. Not for use on broken skin.</em>
    `,
    benefits: ["Color-Adaptive Technology", "72-Hour Hydration", "Natural Pink Tint", "Lip Barrier Repair"],
    sku: "CONST-LIP-GRN",
    volume: "2.5g"
  },
  {
    id: 27,
    name: "Vita Glow Whitening Cream",
    category: "Cream",
    brand: "Vita Glow",
    price: 2000,
    image: "/image/Picsart_25-11-27_19-42-56-057.jpg",
    description: "Original Formula | Skin Whitening & Brightening",
    details: `
      <strong>Vita Glow Original — Foundational Topical Brightener</strong><br/><br/>
      The original Vita Glow formula combines glutathione with botanical oils and extracts for a more gradual approach to skin brightening. This formulation emphasizes skin barrier health and even tone through consistent daily use[citation:28].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Glutathione – 1% (300 mg/30g tube)</li>
        <li>Persea Gratissima (Avocado) Oil – 5% (rich in vitamin E and fatty acids)</li>
        <li>Simmondsia Chinensis (Jojoba) Oil – 5% (similar to skin sebum, non-comedogenic)</li>
        <li>Vitamin C (Ascorbyl Glucoside) – 2% (stable, water-soluble derivative)</li>
        <li>Santalum Album (Sandalwood) Extract – 1% (antioxidant, anti-inflammatory)</li>
        <li>Allantoin – 0.5% (soothing, promotes healing)</li>
      </ul>
      <br/>
      <strong>Skin Barrier Focus:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Botanical oils provide essential fatty acids to support skin barrier function</li>
        <li>Glutathione works as antioxidant and may inhibit tyrosinase with consistent use</li>
        <li>Sandalwood extract has demonstrated anti-inflammatory properties in studies</li>
        <li>Allantoin soothes and helps prevent irritation from active ingredients</li>
      </ul>
      <br/>
      Suitable for daily use on all skin types. Apply to cleansed skin, morning and/or night. Always follow with sunscreen during daytime.<br/>
      <em class="text-xs text-gray-400">Note: Topical glutathione has limited penetration through intact skin. Results are gradual and require consistent use over 4-8 weeks. Discontinue if irritation occurs. Store in cool, dry place away from direct sunlight.</em>
    `,
    benefits: ["Original Formula", "Skin Barrier Support", "Botanical Oils", "Gradual Brightening"],
    sku: "VG-CRM-GRN",
    volume: "30g"
  },
  {
    id: 28,
    name: "Glowtiqa Paris Advance Care",
    category: "Cream",
    brand: "Glowtiqa Paris",
    price: 2000,
    image: "/image/Picsart_25-11-27_19-48-33-126.jpg",
    description: "Advance Care Whitening | Strengthens Skin",
    details: `
      <strong>Glowtiqa Paris Advance Care — Barrier-Fortifying Brightening Cream</strong><br/><br/>
      This premium French formulation focuses on strengthening the skin barrier while providing brightening benefits. A compromised skin barrier can lead to increased sensitivity, dehydration, and uneven pigmentation[citation:29].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione Complex (with penetration enhancers) – 2%</li>
        <li>Ceramide NP – 1% (restores lipid barrier)</li>
        <li>Niacinamide – 4% (improves barrier function, reduces pigmentation)</li>
        <li>Rosa Gallica (French Rose) Extract – 3% (antioxidant, soothing)</li>
        <li>Hyaluronic Acid (sodium hyaluronate) – 1.5% (multi-molecular weight)</li>
        <li>Squalane (from olives) – 3% (emollient, non-comedogenic)</li>
      </ul>
      <br/>
      <strong>Barrier Science:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ceramides are essential lipids that form the "mortar" between skin cells</li>
        <li>Niacinamide increases ceramide and fatty acid production in skin</li>
        <li>Strengthening the barrier reduces transepidermal water loss (TEWL)</li>
        <li>A healthy barrier is less prone to irritation and post-inflammatory hyperpigmentation</li>
      </ul>
      <br/>
      Ideal for sensitive skin or those experiencing barrier damage from environmental stressors or aggressive treatments.<br/>
      <em class="text-xs text-gray-400">Note: While this cream focuses on barrier health, sun protection remains essential. Use SPF 30+ daily. May be layered with other treatments but avoid combining with highly acidic products (pH below 3.5).</em>
    `,
    benefits: ["Barrier Fortification", "French Skincare Science", "Multi-Action Formula", "Sensitive Skin Suitable"],
    sku: "GLOW-PARIS-ADV",
    volume: "30g"
  },
  {
    id: 29,
    name: "Vita Glow Glutathione Soap",
    category: "Soap",
    brand: "Vita Glow",
    price: 600,
    image: "/image/Picsart_25-11-27_19-52-21-801.jpg",
    description: "Glutathione Skin Whitening Soap",
    details: `
      <strong>Vita Glow Soap — Cleansing with Antioxidant Benefits</strong><br/><br/>
      This is a syndet (synthetic detergent) bar or traditional soap formulated with glutathione and supporting ingredients. While cleansers have limited contact time with skin, they can provide mild benefits and prepare skin for subsequent treatments[citation:30].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Sodium Palmate/Cocoate (soap base) or Syndet base (milder)</li>
        <li>Glutathione – 0.5-1% (approximately 675-1350 mg per 135g bar)</li>
        <li>Vitis Vinifera (Grape) Seed Extract – 2% (antioxidant)</li>
        <li>Vitamin C & E (tocopheryl acetate) – 1% combined</li>
        <li>Cocos Nucifera (Coconut) Oil – as base ingredient (cleansing, lathering)</li>
        <li>Glycerin – 5% (humectant, prevents over-drying)</li>
      </ul>
      <br/>
      <strong>Cleanser Science:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Cleansers primarily remove surface impurities, excess oil, and pollutants</li>
        <li>Limited contact time (typically 30-60 seconds) restricts significant absorption</li>
        <li>Antioxidants in cleansers may provide some protection against free radicals</li>
        <li>Proper cleansing prepares skin for better absorption of subsequent treatments</li>
        <li>pH-balanced formulas (pH 5.5-6.0) are gentler on skin barrier</li>
      </ul>
      <br/>
      Use daily on wet skin, lather, massage gently for 30-60 seconds, then rinse thoroughly. Follow with toner and moisturizer.<br/>
      <em class="text-xs text-gray-400">Note: While containing glutathione, the primary benefit is cleansing. Don't expect dramatic brightening from cleanser alone. Discontinue if dryness or irritation occurs. Store in dry area between uses to prolong lifespan.</em>
    `,
    benefits: ["Daily Cleansing", "Antioxidant Formulation", "Skin Preparation", "Gentle Exfoliation"],
    sku: "VG-SOAP-WHT",
    volume: "135g"
  },
  {
  "id": 31,
  "name": "Cindyrella Magical Boost with NAD plus Glutathione Injection",
  "category": "Injection",
  "brand": "Cindyrella",
  "price": 15450,
  "image": "/image/IMG_1901.JPG",
  "description": "Complete IV Infusion | 980,000mg Glutathione Complex | NAD+ Anti-Aging Technology",
  "details": "<strong>Cindyrella Magical Boost with NAD+ — Advanced Cellular Rejuvenation Therapy</strong><br/><br/>Cindyrella Magical Boost is a premium Swiss-inspired IV infusion therapy that combines ultra-high-dose glutathione with NAD+ technology for comprehensive skin whitening, anti-aging, and cellular repair. This nutrient-packed solution works at the DNA level to deliver visible, long-lasting results beyond surface-level treatments.<br/><br/><strong>Complete Ingredient Profile (Per Vial):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 980,000mg — Master antioxidant for powerful melanin inhibition and detoxification</li><li><strong>NAD+ (Nicotinamide Adenine Dinucleotide):</strong> 200mg — Anti-aging coenzyme that supports cellular energy, DNA repair, and sirtuin activation</li><li><strong>Kojic Acid:</strong> 15,000mg — Reduces pigmentation and uneven skin tone</li><li><strong>Coenzyme Q10:</strong> 15,000mg — Mitochondrial antioxidant for cellular energy and protection</li><li><strong>Marine Collagen:</strong> 8,000mg — Improves skin elasticity and firmness</li><li><strong>Bovine Collagen:</strong> 5,000mg — Strengthens skin structure and hydration</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5,000mg — Boosts brightness and collagen synthesis</li><li><strong>Placenta Extract:</strong> 3,000mg — Enhances cell regeneration and repair</li><li><strong>Aloe Vera Extract:</strong> 2,500mg — Natural hydration and soothing effects</li><li><strong>RNA:</strong> 1,500mg — Supports DNA and cellular repair mechanisms</li><li><strong>Hyaluronic Acid:</strong> 800mg — Deep hydration for smooth, plump skin</li><li><strong>AHA (Alpha Hydroxy Acid):</strong> 600mg — Gentle exfoliation for improved texture</li><li><strong>Vitamin B Complex:</strong> 500mg — Nourishes skin and supports healthy metabolism</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Intensive Skin Whitening:</strong> Ultra-high glutathione concentration reduces melanin production for even brightness</li><li><strong>Pigmentation & Scar Reduction:</strong> Kojic acid and Vitamin C fade dark spots, acne scars, and stubborn pigmentation</li><li><strong>Anti-Aging Support:</strong> NAD+, CoQ10, and collagen reduce wrinkles, fine lines, and sagging</li><li><strong>Deep Hydration:</strong> Hyaluronic acid, aloe vera, and marine collagen for soft, nourished skin</li><li><strong>Cellular Rejuvenation:</strong> RNA and placenta extracts stimulate DNA repair and new cell growth</li><li><strong>Antioxidant Defense:</strong> Protects against free radicals, UV damage, and environmental stressors</li><li><strong>Overall Wellness:</strong> Revitalizes energy levels and enhances systemic vitality</li></ul><br/><strong>The Science of NAD+:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>NAD+ is a crucial coenzyme for cellular energy production (ATP synthesis)</li><li>NAD+ levels naturally decline with age, affecting mitochondrial function</li><li>IV NAD+ precursors support cellular repair and sirtuin activity for anti-aging effects</li><li>Combined with glutathione, it creates powerful antioxidant synergy</li></ul><br/><strong>Usage Protocol:</strong> 1-2 vials per week via intravenous (IV) infusion under professional medical supervision. Store below 26°C away from direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Pregnant or nursing women. Always consult certified healthcare professional before use.<br/><br/><em class=\"text-xs text-gray-400\">Important: IV therapy requires qualified medical personnel with appropriate monitoring. Contraindicated in pregnancy, severe kidney/liver disease, certain cancers. Potential side effects include flushing, nausea, vein irritation, temporary anxiety. Results vary by individual. Professional supervision mandatory.</em>",
  "benefits": ["Ultra-High Glutathione (980,000mg)", "NAD+ Anti-Aging Technology", "Complete Collagen Complex", "Cellular & DNA Repair", "Holistic Wellness Solution"],
  "sku": "CINDY-MAGICAL-NAD",
  "volume": "1 Box Pack (Multi-Vial Course for IV Infusion)"
},
  {
  "id": 32,
  "name": "Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Extremely Ultimate Injection",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 13000,
  "image": "/image/IMG_1893.JPG",
  "description": "Swiss-Formulated | Dualna Pico Cell Technology | Complete Anti-Aging & Whitening Solution",
  "details": "<strong>Aqua Skin Veniscy 30 Dualna Pico Cell — Ultimate Skin Transformation Therapy</strong><br/><br/>Experience the pinnacle of Swiss skincare innovation with Aqua Skin Veniscy 30, a comprehensive multi-ingredient formulation designed for complete skin transformation. This cutting-edge treatment combines high-potency glutathione with advanced peptides, growth factors, and deep hydration complexes for unparalleled results.<br/><br/><strong>Complete Ingredient Profile:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Opti-Glutathione:</strong> Potent antioxidant for melanin inhibition and detoxification</li><li><strong>L-Ascorbic Acid (Vitamin C):</strong> Brightens skin and boosts collagen synthesis</li><li><strong>Natural Collagen Extract:</strong> Improves elasticity and reduces aging signs</li><li><strong>Hyaluronic Acid:</strong> Intensely hydrates and plumps for smooth texture</li><li><strong>Epidermal Growth Factor (EGF):</strong> Stimulates cell growth and wound healing</li><li><strong>Alpha Lipoic Acid (ALA):</strong> Reduces inflammation and skin aging</li><li><strong>Matrixyl 9000:</strong> Aids in collagen synthesis and skin repair</li><li><strong>Kojic Acid:</strong> Natural skin-lightening properties</li><li><strong>Copper Peptide:</strong> Accelerates wound healing and tissue repair</li><li><strong>Vegetal Placenta:</strong> Enhances hydration and elasticity</li><li><strong>Nonapeptide:</strong> Supports skin regeneration and repair</li><li><strong>DMAE:</strong> Firms and tightens skin</li><li><strong>Coenzyme Q10:</strong> Reduces UV damage and stimulates collagen</li><li><strong>Selenium:</strong> Protects against free radical damage</li><li><strong>Multivitamin Complex:</strong> Nourishes and protects skin</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Whitening:</strong> High-concentration glutathione and vitamin C reduce melanin for noticeable lightening</li><li><strong>Anti-Aging:</strong> Collagen, hyaluronic acid, and CoQ10 reduce fine lines and wrinkles</li><li><strong>Cell Regeneration:</strong> EGF and peptides repair damaged cells and promote renewal</li><li><strong>Texture Enhancement:</strong> Reduces pores and blemishes for smoother skin</li><li><strong>Deep Hydration:</strong> Hyaluronic acid maintains optimal moisture levels</li><li><strong>Natural Radiance:</strong> Multivitamins and kojic acid deliver consistent glow</li></ul><br/><strong>Advanced Technology:</strong> Dualna Pico Cell Absorption system ensures enhanced delivery of active ingredients for maximum efficacy at the cellular level.<br/><br/><strong>Usage Guidelines:</strong> Administer via intravenous (IV) infusion once weekly. Reconstitute with saline and administer slowly under professional supervision. Consult dermatologist for personalized treatment plan.<br/><br/><strong>Safety:</strong> Not suitable for pregnant or nursing women, or individuals with cardiovascular issues. Always consult healthcare professional before use.<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary by individual. Professional medical supervision required. Store in cool, dry place away from direct sunlight.</em>",
  "benefits": ["Swiss-Formulated", "Complete Multi-Ingredient Complex", "Advanced Pico Cell Absorption", "Peptide & Growth Factor Technology", "Deep Hydration & Anti-Aging"],
  "sku": "AS-VENISCY-30-ULTIMATE",
  "volume": "1 Box Pack (Multi-Vial Course for IV Infusion)"
},
  {
  "id": 33,
  "name": "Lucchini Glutathione Peptide Pico Cell Brightening Solution Injection",
  "category": "Injection",
  "brand": "Lucchini",
  "price": 14500,
  "image": "/image/IMG_1911.JPG",
  "description": "Swiss Cell Therapy | 35,000,000mg Glutathione | 8 Stem Cell Complex | Complete Brightening Solution",
  "details": "<strong>Lucchini Glutathione Peptide Pico Cell — Revolutionary Swiss Cell Therapy</strong><br/><br/>Lucchini represents a breakthrough in skin revitalization, combining an unprecedented 35,000,000mg glutathione with 8 distinct stem cell types and advanced peptide technology. This Swiss-imported formula is specifically designed for rapid results in dark skin, sun damage, and inherited pigmentation issues.<br/><br/><strong>Complete 10-Set Composition:</strong><br/><br/><strong>Pico-Cell Vials (Powder x10 vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pico-Cell Glutathione:</strong> 35,000,000mg — Ultra-high-dose master antioxidant</li><li><strong>Pico-Cell Melanin Inhibit Factor III (MIF3):</strong> 50,000mg — Advanced melanin suppression</li><li><strong>Pico-Cell Epidermal Growth Factor:</strong> 42,000mg — Stimulates cell renewal</li><li><strong>Pico-Cell Nanopeptide-3:</strong> 9,000mg — Collagen synthesis support</li><li><strong>Pico-Cell White Elements II:</strong> 63,000mg — Brightening complex</li><li><strong>Pico-Cell Nanopeptide:</strong> 15,000mg — Skin regeneration</li><li><strong>Pico-Cell mRNA:</strong> 1,250mcg — Genetic support for cellular repair</li></ul><br/><strong>Pico-Cell Ampoules (5ml x10 ampoules):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pico-Cell Enhanced Hexa Cell:</strong> 100,000mg — Multi-cellular regeneration complex</li><li><strong>Pico-Cell Plant Stem Cell Factor II:</strong> 125,000mg — Botanical stem cell technology</li><li><strong>Embryonic Stem Cell (ESC):</strong> 2,000mg — Primitive cell regeneration</li><li><strong>Placenta:</strong> 10,000mg — Tissue repair and rejuvenation</li><li><strong>Cerebrum Cell:</strong> 2,500mg — Neural-derived growth factors</li><li><strong>Umbilical Cord:</strong> 1,500mg — Mesenchymal stem cell support</li><li><strong>Mesenchymal Cell:</strong> 3,500mg — Connective tissue regeneration</li><li><strong>Thymus Cell:</strong> 5,000mg — Immune support for skin health</li></ul><br/><strong>Pico-Cell Ampoules (10ml x10 ampoules):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pico-Cell Multivitamins:</strong> 60,000mg — Comprehensive vitamin support</li><li><strong>Pico-Cell Natural Collagen:</strong> 35,000mg — Elasticity and firmness</li><li><strong>Pico-Cell Hydra Plus:</strong> 9,000mg — Deep hydration complex</li><li><strong>Pico-Cell Alpha Lipoic Acid:</strong> 9,500mg — Universal antioxidant</li><li><strong>Pico-Cell Ascorbic Acid (Vitamin C):</strong> 55,000mg — Brightening and collagen synthesis</li><li><strong>Pico-Cell PN/PDRN:</strong> 23,000mg — Polynucleotide tissue repair</li><li><strong>Pico-Cell Selenium:</strong> 12,000mg — Antioxidant enzyme cofactor</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Visible results in 1-2 weeks: reduced dark spots, fine lines, and enhanced radiance</li><li>Pinkish, healthy complexion with youthful glow</li><li>8 stem cell types work synergistically for comprehensive repair</li><li>Retains hydration while increasing skin firmness</li><li>All-natural composition activates body's innate healing without adverse effects</li><li>Addresses dark skin, sun damage, and inherited pigmentation issues</li></ul><br/><strong>Mechanism:</strong> The integration of 8 stem cells with ultra-high glutathione creates synergistic repair and rejuvenation at the cellular level, offering benefits traditional treatments cannot match.<br/><br/><strong>Usage:</strong> Combine 3 vials (1 set) and administer via IV drip. Professional administration only.<br/><br/><strong>Packaging:</strong> 10 complete sets per box<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary from person to person. Professional medical supervision required. Store in cool, dry place away from direct sunlight. Not for pregnant or nursing women without physician consultation.</em>",
  "benefits": ["8 Stem Cell Complex", "Ultra-High Glutathione (35M mg)", "Swiss Cell Therapy", "Rapid 1-2 Week Results", "Complete Multi-Component System"],
  "sku": "LUCCHINI-PICO-35M",
  "volume": "10 Complete Treatment Sets (10 Vials + 20 Ampoules)"
},
  {
  "id": 34,
  "name": "Aqua Skin Brilliant Diamond Max 80000mg",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 10000,
  "image": "/image/IMG_1890.JPG",
  "description": "Sparkling White System | 80,000mg Glutathione | Complete 10-Session Course",
  "details": "<strong>Aqua Skin Brilliant Diamond Max — Premium Sparkling White Therapy</strong><br/><br/>Aqua Skin Brilliant Diamond Max is a comprehensive 10-session skin whitening system that combines ultra-high-dose glutathione with essential brightening and anti-aging components. Trusted by spas worldwide, this Swiss-formulated treatment reduces melanin production for spotless, radiant skin while preventing future wrinkles and signs of aging.<br/><br/><strong>Complete Composition (10 Sessions):</strong><br/><br/><strong>Ultra-filtration Complexion Vials (10 Vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 80,000mg total — Master antioxidant for melanin inhibition</li><li><strong>Coenzyme Q10:</strong> 2,500mg — Mitochondrial protection and anti-aging</li><li><strong>Fibroblast Growth Factor:</strong> 2,500mg — Stimulates collagen production</li><li><strong>ALA Alpha Lipoic Acid:</strong> 1,850mg — Universal antioxidant</li><li><strong>Amino Acid Complex:</strong> 2,300mg — Skin protein synthesis</li><li><strong>Mineral Bio-active Factor:</strong> 1,200mg — Essential mineral support</li></ul><br/><strong>ULTRA-FILTRATE 5ml Ampoules (10 Ampoules):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ascorbic Acid (Vitamin C):</strong> 6,500mg — Brightening and collagen synthesis</li><li><strong>Natural Collagen Extract:</strong> 2,800mg — Elasticity and firmness</li><li><strong>Hyaluronic Acid:</strong> 3,200mg — Deep hydration and plumping</li><li><strong>Epidermal Growth Factor (EGF):</strong> 2,000mg — Cell renewal and repair</li></ul><br/><strong>ULTRA-FILTRATE 2ml Ampoules (10 Ampoules):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Multivitamin Complex:</strong> 3,500mg — Comprehensive nutritional support</li><li><strong>Copper Peptide:</strong> 800mg — Wound healing and tissue repair</li><li><strong>Kojic Acid:</strong> 900mg — Natural tyrosinase inhibitor</li><li><strong>Vegetal Placenta:</strong> 2,200mg — Hydration and elasticity enhancement</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Lightens skin tone and reduces scars dramatically</li><li>Improves skin elasticity and firmness</li><li>Deeply moisturizes and hydrates for plump texture</li><li>Reduces pigmentation from sun exposure</li><li>Smooths fine lines, wrinkles, and blemishes</li><li>Suppresses acne, pimples, and breakouts</li><li>Minimizes pores and enhances overall complexion</li><li>Eliminates free radicals that cause organ and brain dysfunction</li><li>Prevents premature aging</li><li>Suitable for all body areas including face, lips, and fingernails</li></ul><br/><strong>Usage Protocol:</strong> Intravenous IV infusion (drip) once weekly or as prescribed by dermatologist. Reconstitute powder vial with 100ml-500ml saline, gently shake until fully dissolved, and administer via slow IV route.<br/><br/><strong>Storage:</strong> Store in cool, dry place away from sunlight.<br/><br/><strong>Not Suitable For:</strong> Pregnant women, breastfeeding mothers, individuals with vitamin allergies, or patients with cardiovascular problems. Always consult dermatologist before use.<br/><br/><strong>Expiry:</strong> June 2029<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary from person to person based on individual metabolism. Professional medical supervision required. No overdose cases reported; high-dose glutathione's primary effect is whitening.</em>",
  "benefits": ["80,000mg High-Dose Glutathione", "Complete 10-Session System", "Swiss-Formulated", "Anti-Aging & Acne Control", "Deep Hydration Complex"],
  "sku": "AQUA-DIAMOND-MAX-80K",
  "volume": "1 Box Pack (10 Vials + 10 x 5ml Ampoules + 10 x 2ml Ampoules)"
},
   {
  "id": 35,
  "name": "Glutax 2000000GX DualNA Premium ReCombined Cell Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 9600,
  "image": "/image/Glutax-2000000GX.jpg",
  "description": "DualNA Premium ReCombined Cell | 2 Million mg Glutathione",
  "details": "<strong>Glutax 2000000GX DualNA Premium ReCombined Cell — Ultra-High Potency Cellular Complex</strong><br/><br/>This represents one of Glutax's highest dosage formulations, combining 2,000,000 mg of glutathione with a proprietary 'DualNA' (DNA & RNA) nucleotide complex and a premium blend of four plant stem cells. The product is designed as a comprehensive cellular revitalization treatment, targeting skin whitening, anti-aging, and systemic health benefits through a multi-component approach.<br/><br/><strong>Complete Composition (Full 10-Session Course):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>DNA & RNA Glutathione:</strong> 2,000,000 mg (200,000 mg per vial) – Ultra-high dose for potent melanin inhibition and antioxidant activity[citation:1].</li><li><strong>DNA & RNA Multivitamins:</strong> 250,000 mg – Broad-spectrum vitamin support for skin health and metabolism.</li><li><strong>DNA & RNA Natural Collagen:</strong> 12,000 mg – Supports skin structure, elasticity, and hydration.</li><li><strong>Premium ReCombined Stem Cell Complex (30,000 mg):</strong> Blend of Grape, Apple, Argan Fruit, and Rose stem cells, targeting cellular repair and longevity.</li><li><strong>DNA & RNA Selenium:</strong> 5,000 mg – Essential cofactor for glutathione peroxidase enzyme function.</li><li><strong>DNA & RNA Ultra White Elements:</strong> 6,000 mg – Additional proprietary brightening agents.</li><li><strong>DNA & RNA Epidermal Growth Factor (EGF):</strong> 8,000 mg – Stimulates skin cell renewal and repair.</li><li><strong>DNA & RNA ProEnzyme Q10:</strong> 3,700 mg – Mitochondrial antioxidant for cellular energy and protection.</li><li><strong>DNA & RNA PDRN Hyal:</strong> 4,800 mg – Polynucleotide and hyaluronic acid complex for hydration and tissue regeneration.</li></ul><br/><strong>Claimed Systemic Benefits:</strong> Beyond skin whitening, this formulation claims to boost energy, enhance immune function, improve mental focus, accelerate post-workout recovery, provide intense detoxification (including heavy metals), and offer protection against degenerative diseases.<br/><br/><strong>Administration:</strong> For professional intravenous (IV) push or drip only. Recommended once weekly, or every 3-5 days for faster results. A full course typically involves 10 sessions. Adequate hydration (drinking water before sessions) is recommended.<br/><br/><strong>Expected Results Timeline:</strong> Individual results vary significantly by skin type:<br/>• Light Brown skin: 1-3 months<br/>• Medium Dark Brown skin: 3-6 months<br/>• Darker skin: >6 months<br/>Maintenance dose: 1 session every 2 weeks after achieving desired results.<br/><br/><em class=\"text-xs text-gray-400\">Critical Medical Note: This product contains an extremely high pharmacological dosage of active ingredients. The safety profile of such high-dose, multi-component intravenous cocktails is not well-established in medical literature. Administration must be strictly supervised by a qualified medical professional with monitoring of kidney and liver function. Contraindications include pregnancy, cardiovascular conditions, and organ dysfunction. The 'DualNA' and stem cell claims are not evaluated by major regulatory bodies for efficacy[citation:2][citation:3].</em>",
  "benefits": ["Ultra-High Glutathione (2M mg)", "4-Stem Cell Complex", "DualNA Nucleotide Technology", "Systemic Health Support"],
  "sku": "GLU-2000GX-DUALNA",
  "volume": "1 Box Pack (10 Ampoules 5ml + 10 Ampoules 2ml + 10 Vials)"
},
  {
  "id": 36,
  "name": "Glutax 75GX DCRP 750000 DNA Cell Revitalize Process Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 13400,
  "image": "/image/glutax-dcrp.jpg",
  "description": "DNA Cell Revitalize Process | 14 Sessions + Oral Booster",
  "details": "<strong>Glutax 75GX DCRP — Extended Protocol with Cellular Revitalization</strong><br/><br/>This Italian formulation combines a 14-session injection protocol with an oral glutathione booster, creating a continuous treatment system. The 'DNA Cell Revitalize Process' (DCRP) refers to a proprietary complex designed to support cellular repair mechanisms while delivering high-dose glutathione for skin brightening and antioxidant benefits.<br/><br/><strong>Treatment Protocol & Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>14 Injection Sessions:</strong> Each vial contains a high-potency blend of reduced L-Glutathione and supporting antioxidants for intravenous (IV) administration every 3-4 days.</li><li><strong>Oral Glutathione Booster:</strong> Included to maintain elevated glutathione levels between injection sessions, potentially enhancing and prolonging results.</li><li><strong>Vitamin C Synergy:</strong> Recommended to be used concurrently with additional Vitamin C 1000mg injections for optimal glutathione recycling and enhanced brightening effects[citation:1].</li></ul><br/><strong>Claimed Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Inhibits melanin production for skin whitening and scar lightening</li><li>Stimulates collagen synthesis to improve skin elasticity and firmness</li><li>Provides deep hydration and moisture retention</li><li>Reduces hyperpigmentation from sun exposure</li><li>Smooths fine lines and wrinkles</li><li>Minimizes acne and pore appearance</li><li>Neutralizes free radicals throughout the body</li><li>Offers anti-aging protection at the cellular level</li></ul><br/><strong>Administration:</strong> For professional intravenous (IV) infusion only. Recommended schedule: one session every 3-4 days for a complete course of 14 sessions. The oral booster should be taken as directed between sessions.<br/><br/><strong>Contraindications:</strong> Not suitable for pregnant or breastfeeding women, individuals with vitamin allergies, patients with cardiovascular conditions, or those with kidney/liver impairment. Results depend on individual metabolism and skin type.<br/><br/><em class=\"text-xs text-gray-400\">Medical Note: The 'DNA Revitalize' claim refers to antioxidant protection against DNA damage from free radicals, not genetic modification. Long-term safety of high-dose glutathione protocols with oral boosters requires further research. Regular monitoring of kidney and liver function is advised during extended courses[citation:2][citation:3].</em>",
  "benefits": ["14-Session Protocol", "Oral + Injection System", "Cellular Antioxidant Protection", "Anti-Aging & Brightening"],
  "sku": "GLU-75GX-DCRP",
  "volume": "1 Box Pack (14 Sessions + Oral Booster)"
},
  {
  "id": 38,
  "name": "iSkin Radianz Blu Cell with NAD Glutathione Injection",
  "category": "Injection",
  "brand": "iSkin",
  "price": 19000,
  "image": "/image/IMG_1951.jpg",
  "description": "Swiss-Formulated NAD+ & Glutathione Complex | Picomized Technology for Cellular Renewal",
  "details": "<strong>iSkin Radianz Blu Cell — Advanced NAD+ Cellular Renewal Therapy</strong><br/><br/>Discover the future of skincare with iSkin Radianz Blu Cell, a Swiss-formulated injection that combines picomized NAD+ with high-potency glutathione and marine cellular extracts. This advanced treatment rejuvenates, protects, and brightens skin from within, addressing the root causes of aging for healthier, glowing complexion.<br/><br/><strong>Key Picomized Ingredients & Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Picomized NAD+:</strong> Boosts cellular energy, repairs DNA, and reduces fine lines for youthful glow</li><li><strong>Picomized Glutathione:</strong> Potent antioxidant that detoxifies skin, strengthens immunity, and brightens tone</li><li><strong>Picomized Marine Cellular Extracts:</strong> Stimulate collagen production, enhancing firmness and reducing wrinkles</li><li><strong>Picomized Phytowhite Tripeptide:</strong> Brightens and hydrates for smooth, refreshed, radiant skin</li><li><strong>Picomized Mineral Silicate:</strong> Detoxifies and strengthens skin while improving nutrient absorption</li></ul><br/><strong>Why Choose iSkin Radianz Blu Cell:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Advanced Formulation:</strong> Picomized NAD+ and Mineral Silicate work synergistically to renew, detoxify, and protect</li><li><strong>Scientifically Proven:</strong> Clinical studies demonstrate noticeable improvements in texture, tone, and elasticity</li><li><strong>Comprehensive Care:</strong> Rejuvenates, brightens, detoxifies, and protects in one complete treatment</li><li><strong>Maximum Absorption:</strong> IV/infusion delivery ensures optimal bioavailability for superior results</li><li><strong>Innovative Picomized Technology:</strong> Ensures deep ingredient penetration for exceptional skincare benefits</li></ul><br/><strong>Safety Information:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>For intravenous (IV) or infusion use only under professional supervision</li><li>Normal detoxification reaction: slight greenish tint in urine or stool</li><li>Paraben-free and organic formulation</li></ul><br/><strong>Origin:</strong> Made in Switzerland<br/><br/><strong>Packaging:</strong> 1 Box Pack (complete multi-vial course)<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary from person to person. Professional medical supervision required. Not for pregnant or nursing women without physician consultation. Store in cool, dry place away from direct sunlight.</em>",
  "benefits": ["Picomized NAD+ Technology", "Swiss-Formulated", "Cellular Renewal & DNA Repair", "Detoxification & Brightening", "Maximum Absorption via IV"],
  "sku": "ISKIN-RADIANZ-NAD",
  "volume": "1 Box Pack (Multi-Vial Course for IV Infusion)"
},
  {
  "id": 39,
  "name": "Aqua Skin Veniscy 138 TriNa Picocell Pro Max Glutathione Injection",
  "category": "Injection",
  "brand": "Aqua Skin/Veniscy",
  "price": 11000,
  "image": "/image/IMG_2001.jpg",
  "description": "TriNa Picocell Pro Max Technology | Matrixyl 9000 Peptides | High-Concentration Glutathione",
  "details": "<strong>Aqua Skin Veniscy 138 TriNa Picocell Pro Max — Advanced Peptide Matrix for Aggressive Whitening & Anti-Aging</strong><br/><br/>The Aqua Skin Veniscy 138 represents the pinnacle of the renowned collaboration between Aqua Skin and Veniscy, featuring TriNa Picocell Pro Max absorption technology. This high-performance formulation is designed for individuals seeking a non-surgical method to enhance skin radiance, lighten complexion, and achieve dramatic anti-aging results through IV infusion.<br/><br/><strong>Complete Composition (Per Box Pack):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ultimate Glutathione (Nano-Concentrated):</strong> 18,000,000 mg — Ultra-high potency master antioxidant for maximum melanin inhibition and detoxification</li><li><strong>Matrixyl 9000 & Nonapeptide Complex:</strong> Potent anti-aging peptides that signal fibroblasts to significantly increase collagen production</li><li><strong>Vegetal Placenta:</strong> Plant-derived bio-stimulants for enhanced cell regeneration</li><li><strong>DMAE (Dimethylaminoethanol):</strong> Skin firming agent providing immediate lifting and tightening effects</li><li><strong>Pro Coenzyme Q10:</strong> Mitochondrial energy support for cellular vitality</li><li><strong>Alpha Lipoic Acid (ALA):</strong> Universal antioxidant for comprehensive protection</li></ul><br/><strong>Advanced TriNa Picocell Mechanism:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>TriNa Pico-Cell Technology:</strong> Ensures active ingredients penetrate the cell wall efficiently for maximum bioavailability</li><li><strong>Matrixyl 9000:</strong> A sophisticated peptide complex that stimulates collagen I, III, and IV production</li><li><strong>DMAE & ALA Synergy:</strong> Provides both immediate skin firming and long-term antioxidant protection</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Lightens and brightens skin tone dramatically</li><li>Provides powerful anti-aging effects, reducing wrinkles and fine lines</li><li>Promotes fair and radiant complexion through enhanced melanin inhibition</li><li>Stimulates new skin cell growth for fresh, vibrant appearance</li><li>Improves skin texture and hydration for smooth, plump feel</li><li>Increases skin tightness and elasticity</li><li>Repairs damaged skin and clears acne</li><li>Ideal for users who have plateaued with standard injections</li><li>Safe alternative to cosmetic surgery or laser treatments</li><li>Particularly effective in regions with limited sun exposure</li></ul><br/><strong>Safety Profile:</strong> Paraben-free and organic formulation. Devoid of harmful side effects when professionally administered. Free from skin irritation concerns.<br/><br/><strong>Usage Protocol:</strong> IV infusion administration only, under professional medical supervision. Results evaluated after full course of treatment.<br/><br/><em class=\"text-xs text-gray-400\">Clinical Note: The high peptide content makes this formulation excellent for mature skin showing signs of sagging or deep wrinkles. Results vary from person to person. Professional medical supervision required. Not for pregnant or nursing women without physician consultation.</em>",
  "benefits": ["High-Concentration Glutathione (18M mg)", "Matrixyl 9000 Peptide Complex", "TriNa Picocell Absorption Technology", "Comprehensive Anti-Aging", "Skin Firming & Hydration"],
  "sku": "AS-VENISCY-138-PROMAX",
  "volume": "1 Box Pack (Multi-Vial Course for IV Infusion)"
},
  {
  "id": 40,
  "name": "Miracle White 80000mg Glutathione Injection White Box",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 11500,
  "image": "/image/IMG_1954.jpg",
  "description": "SLC24A5 Melanin Inhibitor Technology | 80,000mg High-Dose Glutathione | Anti-Aging Complex",
  "details": "<strong>Miracle White 80000mg White Box — Advanced SLC24A5 Targeted Whitening System</strong><br/><br/>Embark on your skin perfection journey with Miracle White 80,000mg, a revolutionary skin whitening injection that surpasses ordinary skincare routines. This advanced Swiss-formulated treatment combines ultra-high-dose glutathione with SLC24A5 melanin inhibitor technology for comprehensive skin transformation—delivering not just a lighter complexion but complete skin rejuvenation.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>SLC24A5 Inhibitor:</strong> Advanced melanin-regulating compound that precisely manages melanin levels at the genetic level, preventing hyperpigmentation and ensuring clear, even skin tone</li><li><strong>Nano-Concentrated Glutathione:</strong> 80,000mg high-dose master antioxidant for maximum melanin inhibition and detoxification</li><li><strong>Integral Whitening Complex:</strong> Kojic Acid + Ascorbic Acid synergy for enhanced brightening</li><li><strong>Epidermal Repair Factors:</strong> Smooth rough texture and promote cell renewal</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> Universal antioxidant for comprehensive protection</li><li><strong>Multi-Vitamin Cocktail:</strong> Complete nutritional support for overall skin health</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Exceptional Skin Whitening:</strong> Attain radiant, even complexion with potent glutathione and SLC24A5 inhibition</li><li><strong>Enhanced Anti-Aging:</strong> Increases collagen production and improves skin elasticity for rejuvenated appearance</li><li><strong>Quick Results:</strong> Visible transformation within days of treatment</li><li><strong>Acne & Dark Spot Reduction:</strong> Effectively eliminates acne, reduces dark spots, and brightens overall complexion</li><li><strong>Comprehensive Skin Transformation:</strong> Reduces dullness, balances skin tone, delivers unmatched luminosity</li><li><strong>Antioxidant Protection:</strong> Creates protective shield against environmental pollution and free radicals</li></ul><br/><strong>Beyond Whitening — Anti-Aging Innovation:</strong><br/>Miracle White 80,000mg extends beyond mere whitening, incorporating powerful anti-aging properties that boost collagen synthesis and improve skin elasticity, leading to a truly rejuvenated and youthful appearance.<br/><br/><strong>Usage Protocol:</strong> Professional administration only. Quick-absorbing formula delivers noticeable results in under one week. For best results, adhere to usage instructions and consult dermatologist for specific skin concerns.<br/><br/><strong>Expiry Date:</strong> 12/2027<br/><br/><strong>Origin:</strong> Made in Switzerland<br/><br/><em class=\"text-xs text-gray-400\">Note: \"Integral Care\" approach treats hyperpigmentation at source while providing deep hydration and antioxidant protection. Formulated to be gentle enough for sensitive skin while delivering visible radiance. Results vary from person to person. Professional medical supervision required.</em>",
  "benefits": ["SLC24A5 Melanin Inhibitor", "80,000mg High-Dose Glutathione", "Swiss-Formulated", "Anti-Aging & Collagen Boost", "Visible Results in Days"],
  "sku": "MW-WHITEBOX-80K",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
  {
  "id": 41,
  "name": "Biocell Revital Pro Renovation With Glutathione 150,000,000 mg Injection",
  "category": "Injection",
  "brand": "Biocell",
  "price": 10000,
  "image": "/image/IMG_1999.jpg",
  "description": "Swiss-Formulated | 150 Million mg Glutathione Complex | Argan Stem Cell Technology",
  "details": "<strong>Biocell Revital Pro Renovation — Genetic-Level Cellular Renewal</strong><br/><br/>Discover the power of Swiss biotechnology with Biocell Revital Pro, a comprehensive skin renovation treatment featuring a massive 150,000,000mg glutathione complex. This potent antioxidant-rich formula combines vitamin C, argan stem cells, and chromosome signaling factors to neutralize environmental toxins, illuminate complexion, and rejuvenate skin at the genetic level.<br/><br/><strong>Complete Composition (10 Injection Sets per Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>GLUTblanc Nano Extract Glutathione:</strong> 150,000,000mg designation — Ultra-high potency master antioxidant for skin lightening and systemic detoxification</li><li><strong>Argan Stem Cell:</strong> Vitalizes dermal stem cells to improve skin density and reduce wrinkle depth</li><li><strong>Collagen (Natural):</strong> 100,000mg — Essential for skin elasticity and firmness</li><li><strong>Ascorbic Acid (Vitamin C):</strong> Brightens skin, reduces melanin pigmentation, and detoxifies</li><li><strong>Aminox Essential Amino Acid Complex:</strong> Supports cell growth, repair, and nutrient uptake</li><li><strong>Hyaluronic Acid:</strong> Maintains skin moisture for plump, supple complexion</li><li><strong>Chromosome Complex:</strong> Specialized ingredient for genetic-level skin health support</li><li><strong>Coenzyme Q10:</strong> Potent antioxidant that reduces signs of aging</li><li><strong>Hesperidin:</strong> Protects skin cells from oxidative damage</li><li><strong>Solution Collagen d'extrit:</strong> Enhances skin elasticity and firmness</li><li><strong>Citrus Aurantium Extract:</strong> Natural skin brightener</li><li><strong>NaOH:</strong> pH adjuster</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Illumination:</strong> Reduces dark spots and uneven tone for brighter complexion</li><li><strong>Cellular Revitalization:</strong> Collagen, hyaluronic acid, and amino acids rejuvenate skin cells</li><li><strong>Anti-Aging:</strong> Combats free radicals, reducing wrinkles and fine lines</li><li><strong>Antioxidant Protection:</strong> Shields skin from oxidative damage and environmental toxins</li><li><strong>Immune Support:</strong> Enhances overall immune function while promoting skin lightening</li><li><strong>Deep Hydration:</strong> Hyaluronic acid retains moisture for plump, supple skin</li><li><strong>Firming & Tightening:</strong> Promotes elasticity for youthful appearance</li><li><strong>Skin Repair:</strong> Minimizes appearance of scars and blemishes</li><li><strong>Acne Reduction:</strong> May reduce breakouts and improve skin clarity</li></ul><br/><strong>Renovation Technology:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Argan Stem Cells:</strong> Plant-derived stem cells that improve skin density and reduce wrinkle depth</li><li><strong>Chromosome Signaling:</strong> Genetic-level support for cellular repair and renewal</li><li><strong>Aminox Essential Amino Acids:</strong> Building blocks for new protein synthesis</li><li><strong>High-Dose Collagen:</strong> Restores elasticity and bounce to aging or sun-damaged skin</li></ul><br/><strong>Usage Guidelines:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Consult healthcare professional or dermatologist before starting treatment</li><li>Administer Intramuscularly (IM) or Intravenously (IV) under professional supervision</li><li>Each injection session consists of 2 ampoules + 1 vial</li><li>Dosage and frequency determined by provider based on skin condition</li><li>Use high-SPF sunscreen and maintain regular skincare routine post-treatment</li></ul><br/><strong>Packaging:</strong> 1 Box contains 10 complete Injection Sets (10 vials + 20 ampoules)<br/><br/><strong>Origin:</strong> Made in Switzerland<br/><br/><em class=\"text-xs text-gray-400\">Important: The \"150 Million mg\" designation refers to the molecular scale/potency of the proprietary complex, not physical weight. Results vary from person to person. Professional medical supervision required. Contact healthcare provider immediately if unusual reactions occur.</em>",
  "benefits": ["150M mg Glutathione Complex", "Argan Stem Cell Technology", "Swiss-Formulated", "Genetic-Level Renovation", "Complete 10-Session System"],
  "sku": "BIO-REVITAL-PRO-150M",
  "volume": "1 Box Pack (10 Vials + 20 Ampoules)"
},
  {
  "id": 43,
  "name": "NC24 90000mg Japan Ultra Sense Complexion",
  "category": "Injection",
  "brand": "NC24",
  "price": 11000,
  "image": "/image/nc2490k.jpg",
  "description": "Japanese-Formulated | 90,000mg Ultra Sense Complexion | Complete Anti-Aging & Whitening System",
  "details": "<strong>NC24 90000mg Japan Ultra Sense Complexion — Advanced Japanese Whitening Technology</strong><br/><br/>NC24 Japan 90000mg Ultra Sense Complexion represents the pinnacle of Japanese-formulated glutathione therapy. This comprehensive 10-session system combines high-potency glutathione with essential antioxidants, growth factors, and multivitamins to deliver rapid skin brightening, anti-aging benefits, and overall complexion transformation. Dermatologically tested and proven safe, it delivers visible results within weeks.<br/><br/><strong>Complete Composition (10 Sessions):</strong><br/><br/><strong>SET A Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ultra Filtration Glutathione:</strong> 90,000mg total (90:1 concentrate / 1000mg per vial) — 5 vials (20ml each) of high-potency master antioxidant for maximum melanin inhibition</li><li><strong>Thiotic Acids (Alpha Lipoic Acid):</strong> 1000mg/5ml — 5 ampoules of universal antioxidant for enhanced glutathione recycling</li><li><strong>Epidermal Growth Factor (EGF):</strong> 1500mcg/2ml — 5 ampoules of cell-renewing growth factors for skin regeneration</li></ul><br/><strong>SET B Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Lyophilization Multivitamin Complex:</strong> 50,000mg/25ml — 5 vials of comprehensive nutritional support for overall skin health</li><li><strong>Ascorbic Acids (Vitamin C):</strong> 1250mg/5ml — 5 ampoules for brightening and collagen synthesis</li><li><strong>Coenzyme Q10 (CoQ10):</strong> 900mg/2ml — 5 ampoules for mitochondrial energy and anti-aging protection</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Whitening & Brightening:</strong> Reduces melanin production for radiant, even complexion</li><li><strong>Anti-Aging:</strong> Reduces wrinkles, fine lines, and signs of aging</li><li><strong>Acne & Pimple Reduction:</strong> Clears breakouts and prevents future blemishes</li><li><strong>Pore Minimization:</strong> Refines and reduces visible pore size</li><li><strong>Scar Healing:</strong> Promotes healing of existing scars and blemishes</li><li><strong>Collagen Stimulation:</strong> Boosts natural collagen production for firmness</li><li><strong>Detoxification:</strong> Eliminates toxins and reduces oxidative stress</li><li><strong>Dark Spot Reduction:</strong> Lightens hyperpigmentation and melasma</li><li><strong>Immune System Support:</strong> Enhances overall body immunity</li><li><strong>Skin Firming & Lifting:</strong> Improves elasticity and tightness</li><li><strong>Cell Repair:</strong> Repairs damaged skin cells for healthy regeneration</li><li><strong>Smoothing:</strong> Softens rough skin texture for smooth, glowing appearance</li></ul><br/><strong>Mechanism:</strong> The Japanese formula works synergistically to boost collagen production, reduce oxidative stress, and inhibit melanin synthesis. Skin appears brighter, healthier, and more radiant within weeks of consistent use.<br/><br/><strong>Usage Protocol:</strong> Administer intravenously (IV) only. Mix contents with 200ml saline solution and IV drip for 30-45 minutes. Recommended frequency: once every 4-6 days. Professional medical supervision required.<br/><br/><strong>Expiry Date:</strong> December 2027<br/><br/><strong>Not Suitable For:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Breastfeeding mothers</li><li>Women during menstruation</li><li>Individuals with vitamin allergies</li><li>Patients with cardiovascular problems</li></ul><br/><strong>Origin:</strong> Made in Japan<br/><br/><em class=\"text-xs text-gray-400\">Note: The \"90,000mg\" designation refers to the total glutathione potency across all vials. Dermatologically tested and proven safe. Results vary from person to person. Professional medical supervision required. Store in cool, dry place away from direct sunlight.</em>",
  "benefits": ["Japanese-Formulated", "90,000mg High-Potency Glutathione", "Complete 10-Session Dual-Set System", "Anti-Aging & Acne Control", "Dermatologically Tested"],
  "sku": "NC24-90000-JP-ULTRA",
  "volume": "1 Box Pack (5 Vials SET A + 5 Ampoules SET A + 5 Vials SET B + 5 Ampoules SET B)"
},
  {
  "id": 44,
  "name": "Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection",
  "category": "Weight",
  "brand": "Ratiopharm",
  "price": 10000,
  "image": "/image/lcar20mg.jpg",
  "description": "German-Formulated | 20g High-Dose L-Carnitine | Fat Metabolism & Weight Management",
  "details": "<strong>Ratiopharm L-Carnitine 20g — Advanced Fat Metabolism Injection</strong><br/><br/>Ratiopharm L-Carnitine 20g is a German-formulated high-dose injection designed to boost your body's natural fat-burning process. This powerful formula helps transform body fat into usable energy, making it easier to achieve weight loss goals while enhancing overall health and vitality. Suitable for both men and women struggling with excess weight or obesity.<br/><br/><strong>Complete Composition (10 Injection Sets per Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Carnitine plus CLA Complex:</strong> 20g/10ml per set — High-concentration fat-metabolizing agent</li><li>Lab-tested formula designed for safe and effective fat burning</li><li>Paraben-free and organic composition</li></ul><br/><strong>Mechanism of Action:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>L-Carnitine transports long-chain fatty acids into mitochondria for oxidation</li><li>Facilitates conversion of stored fat into usable energy (ATP)</li><li>CLA (Conjugated Linoleic Acid) supports body's natural fat-burning process</li><li>Reduces fatigue caused by lactic acid buildup during exercise</li><li>Improves exercise performance and endurance</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Weight Loss & BMI Reduction:</strong> Sheds extra pounds and decreases body mass index</li><li><strong>Prevents New Fat Buildup:</strong> Helps maintain lean figure by preventing additional fat accumulation</li><li><strong>Fat Breakdown Acceleration:</strong> Hastens decomposition of fat cells in the body</li><li><strong>Metabolism Boost:</strong> Amplifies metabolic rate for enhanced calorie burning</li><li><strong>Fat Reduction:</strong> Actively diminishes existing body fat</li><li><strong>Blocks Fat Production:</strong> Prevents formation of new fat cells</li><li><strong>Energy Booster:</strong> Provides vigor and vitality for daily tasks</li><li><strong>Muscle Tone Enhancement:</strong> Strengthens muscles for firmer, tighter appearance</li><li><strong>Organ Health Optimization:</strong> Enhances function of brain, liver, kidneys, and heart</li><li><strong>Blood Sugar Stabilization:</strong> Helps regulate glucose levels</li><li><strong>Blood Pressure Control:</strong> Assists in regulating blood pressure and reducing stress</li><li><strong>Fertility Boost:</strong> Supports reproductive health in both men and women</li><li><strong>Improved Brain Function:</strong> Supports optimal cognitive performance</li></ul><br/><strong>Safety Profile:</strong> Lab-tested formula focused on safe fat burning without known side effects when administered properly.<br/><br/><strong>Usage Protocol:</strong> For professional administration only (IM/IV). Consult healthcare provider for personalized dosage based on weight loss goals and health status. Typically administered as part of a comprehensive weight management program including diet and exercise.<br/><br/><strong>Packaging:</strong> 1 Box contains 10 complete Injection Sets<br/><br/><strong>Origin:</strong> Made in Germany<br/><br/><em class=\"text-xs text-gray-400\">Important: Results vary from person to person. Professional medical supervision required. Not suitable for pregnant or nursing women without physician consultation. Store in cool, dry place away from direct sunlight. Consult healthcare provider before starting any new treatment, especially if you have underlying health conditions.</em>",
  "benefits": ["German-Formulated", "20g High-Dose L-Carnitine", "Fat Metabolism Support", "Energy & Performance Boost", "Comprehensive 10-Session System"],
  "sku": "RATIO-LCARNITINE-20G",
  "volume": "1 Box Pack (10 Injection Sets)"
},
  {
  "id": 45,
  "name": "Ratiopharm L Carnitine 35g Weight Loss and Fat Loss Injection",
  "category": "weight",
  "brand": "Ratiopharm",
  "price": 11000,
  "image": "/image/lcar35mg.jpg",
  "description": "German-Formulated | 35g High-Dose L-Carnitine + CLA | Advanced Fat Metabolism Therapy",
  "details": "<strong>Ratiopharm L-Carnitine 35g — Enhanced Fat Metabolism & Weight Loss Injection</strong><br/><br/>Ratiopharm L-Carnitine 35g is a German-formulated high-dose injection combining L-Carnitine with Conjugated Linoleic Acid (CLA) for rapid body shaping and weight management. This powerful formula accelerates fat burning by transporting fatty acids into mitochondria for energy conversion, making it an effective option for individuals seeking enhanced weight loss results and improved athletic performance.<br/><br/><strong>Key Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Carnitine:</strong> 35g high-dose — Essential amino acid that transports fatty acids into cells for energy production</li><li><strong>Conjugated Linoleic Acid (CLA):</strong> Naturally occurring fatty acid that may boost metabolism and fat burning</li></ul><br/><strong>Mechanism of Action:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>L-Carnitine transports long-chain fatty acids into mitochondria for oxidation</li><li>Facilitates conversion of stored fat into usable energy (ATP)</li><li>CLA supports metabolic rate enhancement and fat breakdown</li><li>Reduces fatigue by minimizing lactic acid buildup during exercise</li><li>Improves exercise performance, endurance, and recovery</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Accelerated Fat Burning:</strong> High-dose L-Carnitine speeds up fatty acid transfer to mitochondria for rapid fat oxidation</li><li><strong>Weight Loss Support:</strong> Helps shed excess pounds when combined with diet and exercise</li><li><strong>Enhanced Athletic Performance:</strong> Boosts energy levels and improves endurance during workouts</li><li><strong>Muscle Definition:</strong> Promotes fat loss while supporting lean muscle development</li><li><strong>Metabolism Boost:</strong> Amplifies metabolic rate for increased calorie burning</li><li><strong>Prevents Fat Accumulation:</strong> Helps block formation of new fat cells</li><li><strong>Energy Production:</strong> Provides sustained vitality for daily activities</li></ul><br/><strong>Safety Profile:</strong> Paraben-free and organic formulation. Lab-tested for safety with no known side effects when properly administered.<br/><br/><strong>Usage Protocol:</strong> For professional administration only (IM/IV). Consult healthcare provider for personalized dosage based on weight loss goals and health status. Best results achieved as part of comprehensive weight management program including balanced diet and regular exercise.<br/><br/><strong>Packaging:</strong> 1 Box contains multiple injection sets<br/><br/><strong>Origin:</strong> Made in Germany<br/><br/><em class=\"text-xs text-gray-400\">Important: Results vary from person to person. Professional medical supervision required. Not suitable for pregnant or nursing women without physician consultation. Store in cool, dry place away from direct sunlight. Consult healthcare provider before starting any new treatment, especially if you have underlying health conditions.</em>",
  "benefits": ["German-Formulated", "35g High-Dose L-Carnitine", "CLA-Enhanced Formula", "Accelerated Fat Burning", "Athletic Performance Support"],
  "sku": "RATIO-LCARNITINE-35G",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
  {
  "id": 46,
  "name": "Miracle White Pro White 18K 180000mg Glutathione Injection",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 14000,
  "image": "/image/Miraclewhite18K.jpg",
  "description": "Swiss-Formulated | 180,000mg High-Dose Glutathione | EGF & Stem Cell Complex",
  "details": "<strong>Miracle White Pro White 18K — Advanced Skin Brightening & Anti-Aging Therapy</strong><br/><br/>Elevate your skin's health with Miracle White Pro White 18K, a premium Swiss-formulated glutathione injection featuring 180,000mg of high-quality ingredients. This superior formulation combines revolutionary Epidermal Growth Factor (EGF), argan stem cells, and essential multivitamins to deliver remarkable anti-aging benefits while enhancing skin brightness for a vibrant, youthful appearance.<br/><br/><strong>Complete Composition:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 180,000mg — Leading antioxidant that lightens skin by neutralizing free radicals and reducing oxidative stress</li><li><strong>Epidermal Growth Factor (EGF):</strong> Promotes new skin cell growth, helping diminish wrinkles and fine lines</li><li><strong>Kojic Acid:</strong> Targets sun damage and hyperpigmentation, enhancing skin clarity</li><li><strong>Alpha-Lipoic Acid:</strong> Fights inflammation and slows the aging process</li><li><strong>Ascorbic Acid (Vitamin C):</strong> Encourages collagen formation, protects against damage, and alleviates sunburn</li><li><strong>Collagen Forte:</strong> Supports skin firmness and youthful radiance</li><li><strong>Hyaluronic Acid:</strong> Provides deep hydration for plumper, smoother skin</li><li><strong>Argan Stem Cell (Placenta):</strong> Promotes skin repair and rejuvenation for enhanced glow</li><li><strong>Multivitamin Complex:</strong> Comprehensive nutritional support for overall skin health</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Accelerated Skin Lightening:</strong> Fast and significant reduction in dark spots and uneven skin tone</li><li><strong>Enhanced Environmental Protection:</strong> Fortifies skin against damage, preventing premature aging</li><li><strong>Free Radical Reduction:</strong> Alpha-lipoic acid reduces oxidative stress for tighter, more youthful skin</li><li><strong>Skin Rejuvenation:</strong> Reduces fine lines and wrinkles while enhancing smoothness and softness</li><li><strong>Melanin Regulation:</strong> Controls pigment production to prevent dark spots and achieve even tone</li><li><strong>Collagen Support:</strong> Boosts collagen production for improved elasticity and firmness</li><li><strong>Deep Hydration:</strong> Hyaluronic acid maintains moisture for plump, supple complexion</li><li><strong>Cellular Repair:</strong> EGF and argan stem cells promote skin regeneration from within</li></ul><br/><strong>Why Miracle White Pro White 18K:</strong><br/>This injection surpasses mere skin lightening, providing a comprehensive solution to combat aging while enhancing skin hydration and elasticity. The powerful combination of kojic acid, alpha-lipoic acid, and ascorbic acid addresses sun damage, pigmentation, and aging signs for complete skin transformation.<br/><br/><strong>Usage Protocol:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Consult with a skincare professional before beginning treatment</li><li>Administered by qualified healthcare provider via IV or IM</li><li>Follow recommended dosage and consistent treatment schedule</li><li>Clean skin thoroughly before each injection</li><li>Limit sun exposure and maintain hydration post-treatment</li><li>Use high-SPF sunscreen to protect and maintain results</li></ul><br/><strong>Origin:</strong> Made in Switzerland<br/><br/><strong>Packaging:</strong> 1 Box Pack (Multi-Vial Course)<br/><br/><em class=\"text-xs text-gray-400\">Note: Results vary from person to person. Professional medical supervision required. Not for pregnant or nursing women without physician consultation. Store in cool, dry place away from direct sunlight. Always consult with a healthcare professional before starting any new skincare regimen.</em>",
  "benefits": ["180,000mg High-Dose Glutathione", "Swiss-Formulated", "EGF & Argan Stem Cell Complex", "Comprehensive Anti-Aging", "Deep Hydration & Collagen Support"],
  "sku": "MW-PROWHITE-18K-180K",
  "volume": "1 Box Pack (Multi-Vial Course)"
},
{
  "id": 47,
  "name": "Zaguta Japan Skin Whitening Glutathione Injection",
  "category": "Injection",
  "brand": "Zaguta",
  "price": 12500,
  "image": "/image/zaguta_glutathione.jpeg",
  "description": "600,000mg Strength | Skin Whitening & Anti-Aging | Glutathione + Vitamin Complex",
  "details": "<strong>Zaguta Japan Skin Whitening Glutathione Injection — High-Potency Cellular Rejuvenation</strong><br/><br/>This powerful injection combines glutathione with natural herbs and minerals to revitalize skin cells, prevent premature wrinkles, and maintain a fresh, youthful appearance. Formulated with high-strength active ingredients, it targets multiple signs of aging and uneven skin tone.<br/><br/><strong>Key Components:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (600,000mg Strength):</strong> Master antioxidant that inhibits melanin synthesis and reduces oxidative stress</li><li><strong>Vitamin Complex:</strong> Essential vitamins to support skin health and brightening effects</li><li><strong>Amino Acids:</strong> Building blocks for collagen and elastin, improving skin texture</li><li><strong>Natural Herbal & Mineral Blend:</strong> Enhances cellular renewal and reduces stretch marks</li></ul><br/><strong>The Science:</strong> Zaguta Glutathione works by neutralizing free radicals, converting dark melanin to lighter pigments, and supporting liver detoxification pathways. The high 600,000mg concentration delivers rapid results when administered as a full treatment course of 6 sessions.<br/><br/><strong>Usage & Application:</strong> Professional intravenous or intramuscular administration only. Standard treatment course: 6 sessions as advised by a qualified practitioner. Results vary based on individual metabolism and baseline pigmentation.<br/><br/><strong>Precautions:</strong> Consult a doctor before use, especially if you have sensitive skin or known allergies to any ingredients. Not recommended during pregnancy or breastfeeding without medical approval. Side effects may include mild injection site reactions.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: This product is for professional use only. Individual results may vary. Always purchase from licensed suppliers and verify product authenticity.</em>",
  "benefits": [
    "Skin Whitening",
    "Antioxidant Protection",
    "Skin Lightening",
    "Anti-Aging",
    "Revitalizes Skin Cells",
    "Prevents Premature Wrinkles"
  ],
  "sku": "ZAGUTA-600000MG-JP",
  "volume": "1 Box (Ampoules)"
},
{
  "id": 48,
  "name": "Fivita 900000 Sensation Glutathione Whitening Injection",
  "category": "Injection",
  "brand": "Fivita",
  "price": 12960,
  "image": "/image/fivita_900000_sensation.jpeg",
  "description": "900,000mg Micro Glutathione | USA-Made | Skin Whitening, Anti-Aging & Scar Reduction | 8-Session Course",
  "details": "<strong>Fivita 900000 Sensation Glutathione Injection — Ultra-High Potency Advanced Formula</strong><br/><br/>Manufactured by Dermatech Laboratories (USA), this premium glutathione injection combines 900,000mg of micro glutathione with a proprietary blend of skin-brightening, anti-aging, and collagen-stimulating ingredients. Designed for IV infusion only, it delivers rapid and noticeable results in skin tone improvement.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Micro Glutathione (900,000mg):</strong> Ultra-high concentration master antioxidant</li><li><strong>Pro Coenzyme Q10 (95,000mg):</strong> Cellular energy and anti-aging support</li><li><strong>White Crystalize Elements (24,000mg):</strong> Skin brightening complex</li><li><strong>Hyaluronic Acid (3,900mg) + Premium Collagen (5,000mg):</strong> Deep hydration and skin elasticity</li><li><strong>Kojic Acid (2,000mg) + Alpha Lipoic Acid (2,500mg):</strong> Melanin inhibition and antioxidant synergy</li><li><strong>Matrixyl 9000 (3,500mg):</strong> Peptide for wrinkle reduction</li><li><strong>Stem Cell Growth Factor (4,500mg):</strong> Cellular regeneration</li><li><strong>Thioctic Acid, DMAE, Acetyl-Tyrosine, Multivitamin, Amino Acids, Glycine, Lycopene, Adenosine, L-Cysteine, R-Lipoic Acid</strong></li></ul><br/><strong>Benefits:</strong> Skin whitening & brightening, anti-aging, acne/pimple reduction, pore minimization, scar healing, collagen stimulation, detoxification, lightening of dark spots.<br/><br/><strong>Manufacturer:</strong> Dermatech Laboratories, 1825 E 18th St., Williamsville, New York 14221, USA.<br/><strong>Importer:</strong> Super Advanced General Trading Company LLC.<br/><strong>Packer/Seller:</strong> IMBMS (Dealers Bazaar Group).<br/><strong>Origin:</strong> Made in USA. GMP Certified.<br/><br/><strong>Dosage & Course:</strong> IV only, once or twice per week. Full course: 8 sessions.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, women during menstruation, individuals allergic to any vitamins, patients with cardiovascular problems, persons below 18 years of age.<br/><br/><strong>Important Notice:</strong> Please consult a dermatologist before placing an order for glutathione IV infusion injections or capsules, as results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: FSSAI License No. 11223999000312. Professional use only. Individual results may vary. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Skin Whitening & Brightening",
    "Anti-Aging",
    "Reduce Acne / Pimples",
    "Minimize Pores",
    "Healing of Scars",
    "Stimulate Collagen",
    "Detoxification",
    "Lightening Dark Spots"
  ],
  "sku": "FIVITA-900K-USA",
  "volume": "1 Box (8 Sessions Course)"
},
{
  "id": 49,
  "name": "FIVITA 9900000 Sensation Whitening Glutathione Injection",
  "category": "Injection",
  "brand": "Fivita",
  "price": 13300,
  "image": "/image/fivita_9900000_sensation.jpeg",
  "description": "9,900,000mg Ultra-High Potency | USA-Made | Skin Whitening, Anti-Aging & Scar Reduction | 8-Session Course",
  "details": "<strong>FIVITA 9900000 Sensation Glutathione Injection — Unmatched Skin Renewal Formula</strong><br/><br/>Manufactured by Dermatech Laboratories (USA), this ultra-high potency injection delivers 9,900,000mg of micro glutathione combined with powerful skin brighteners, anti-aging peptides, and deep hydration complexes. Esteemed by beauty experts and celebrities, it unlocks a luminous, even skin tone.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Micro Glutathione (9,900,000mg):</strong> Ultra-concentrated master antioxidant</li><li><strong>Thioctic Acid:</strong> Potent antioxidant and anti-inflammatory</li><li><strong>Kojic Acid:</strong> Natural melanin inhibitor</li><li><strong>Hyaluronic Acid & Collagen:</strong> Deep hydration and skin elasticity</li><li><strong>Pro Coenzyme Q10, Matrixyl 9000, DMAE:</strong> Anti-aging and wrinkle reduction</li><li><strong>White Crystalize Elements, Multivitamins, Amino Acids, Glycine, Lycopene, Adenosine, L-Cysteine, R-Lipoic Acid, Stem Cell Growth Factors</strong></li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Bright, uniform skin tone – eliminates pigmentation</li><li>Renewed, youthful look – firmer, smoother skin with fewer wrinkles</li><li>Clear, radiant complexion – reduced acne and visible clarity</li><li>Healing of scars, detoxification, collagen stimulation</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Country of Origin: USA<br/>Packaging Qty: 1 Box Pack (8 Sessions)<br/>Paraben Free & Organic: Yes<br/>Expiry Date: December 2029<br/><br/><strong>Usage & Dosage:</strong> IV administration only, once or twice weekly as advised by a medical professional. Full course: 8 sessions.<br/><br/><strong>Not Suitable For:</strong> Individuals under 18 years, patients with cardiovascular problems, pregnant or nursing women, persons with allergy to any vitamins.<br/><br/><strong>Manufacturer:</strong> Dermatech Laboratories, USA.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Results may vary from person to person. Consult a licensed healthcare provider before starting any new skincare regimen. Professional use only.</em>",
  "benefits": [
    "Bright, Uniform Skin Tone",
    "Renewed & Youthful Look",
    "Clear & Radiant Complexion",
    "Reduces Acne & Scars",
    "Collagen Stimulation",
    "Detoxification",
    "Deep Hydration"
  ],
  "sku": "FIVITA-9900000-USA",
  "volume": "1 Box Pack (8 Sessions)"
},

  {
  "id": 50,
  "name": "Relumins 3500mg Glutathione Set MAX with Vitamin C & Boosters",
  "category": "Injection",
  "brand": "Relumins",
  "price": 17500,
  "image": "/image/Relumins3500.jpg",
  "description": "FDA Registered Skin Whitening System | 3000mg L-Glutathione + 500mg Vitamin C + Oral Boosters",
  "details": "<strong>Relumins 3500mg Glutathione — Complete Skin Whitening System</strong><br/><br/>Relumins is an FDA-registered skin whitening brand offering a comprehensive Glutathione system combining high-dose injectables with oral boosters to maintain elevated levels between treatments.<br/><br/><strong>Complete Set Includes:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Glutathione (Reduced):</strong> 3000mg per vial (5 vials) — Inhibits melanin synthesis by blocking tyrosine oxidation and tyrosinase activity.</li><li><strong>Vitamin C:</strong> 500mg per ampule (5 ampules) — Enhances absorption, boosts collagen for skin firming.</li><li><strong>Glutathione Booster Capsules:</strong> 30 veggie caps — Maintains high GSH levels between treatments.</li></ul><br/><strong>Booster Key Actives:</strong> NAC 200mg, Alpha Lipoic Acid 150mg, L-Methionine 100mg, Vitamin E 100 IU, Vitamin B 5mg, Selenomethionine 200mcg — Work synergistically to enhance natural glutathione production and recycling.<br/><br/><strong>Usage Protocol:</strong> Administer IV/IM once weekly. For oral use: Mix Vitamin C solution with Glutathione powder, take 1ml twice daily for 2.5 days, then 1-day break. Take 1 Booster capsule daily. Evaluate results every 3 months. Maintenance: 800mg oral Glutathione with boosters daily.<br/><br/><strong>Safety:</strong> Consult physician if pregnant/nursing. Not for chemotherapy patients. Expiry: 01/2028.<br/><br/><em class=\"text-xs text-gray-400\">Results vary by individual. Professional supervision recommended.</em>",
  "benefits": ["FDA Registered Brand", "3000mg L-Glutathione per Vial", "Complete System with Oral Boosters", "Melanin Synthesis Inhibition", "Skin Firming & Rejuvenation"],
  "sku": "REL-3500-MAX",
  "volume": "5 Vials + 5 Ampules + 30 Capsules"
},
{
  "id": 51,
  "name": "Core Switzerland SLC24A5 Inhibitors Glutathione Injection",
  "category": "Injection",
  "brand": "Core Switzerland SLC24A5",
  "price": 14200,
  "image": "/image/core_switzerland_slc24a5.jpeg",
  "description": "Revolutionary SLC24A5 Inhibitor Technology | Swiss-Made | Glutathione + Natural Extracts | Radiant, Even-Toned Complexion | 4 Sessions",
  "details": "<strong>Core Switzerland SLC24A5 Inhibitors Glutathione Injection — Groundbreaking Swiss Skincare Innovation</strong><br/><br/>Meticulously crafted in pristine Swiss laboratories, this elite skin whitening solution combines revolutionary SLC24A5 inhibitor technology with high-concentration glutathione and natural extracts. It targets hyperpigmentation, uneven skin tone, and dark spots at the genetic level.<br/><br/><strong>Unparalleled Whitening Technology — SLC24A5 Inhibition:</strong><br/>The SLC24A5 gene is a crucial determinant in skin pigmentation. Our cutting-edge formula modulates melanin production by regulating this pathway, resulting in visibly lighter, more radiant skin without compromising natural complexion integrity.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>High-Concentration Glutathione:</strong> Master antioxidant for skin brightening, detoxification, and cellular rejuvenation</li><li><strong>SLC24A5 Inhibitors:</strong> Target and modulate melanin synthesis at the genetic level</li><li><strong>Ascorbic Acid (Vitamin C):</strong> Brightens skin, reduces fine lines, combats dark spots, boosts collagen production</li><li><strong>Kojic Acid:</strong> Natural skin lightener that reduces hyperpigmentation and age spots</li><li><strong>Collagen:</strong> Integral to skin elasticity and hydration, reduces wrinkles and fine lines</li><li><strong>Multivitamin Blend:</strong> Nourishes skin and fortifies natural barrier</li></ul><br/><strong>Comprehensive Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Reduced pigmentation and dark spots – clear, even complexion</li><li>Anti-aging properties – firm, supple skin with diminished signs of aging</li><li>UV protection – shields against harmful UV rays</li><li>Hydrating and nourishing – maintains moisture without dryness or irritation</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Country of Origin: Switzerland<br/>Packaging: 1 Box Pack (4 sessions per box)<br/>Paraben Free & Organic: Yes<br/>Suitable for all skin types<br/><br/><strong>Usage:</strong> Professional administration only. Results evaluated after full course. Maintenance protocol recommended after achieving desired tone.<br/><br/><strong>Safety & Quality:</strong> Formulated with highest quality ingredients, adhering to stringent Swiss safety standards. Free from harmful chemicals.<br/><br/><strong>Eco-Conscious Packaging:</strong> Sustainable, eco-friendly packaging reflecting environmental commitment.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Gene modulation in cosmetics is an emerging field with limited long-term safety data. For experimental use under strict medical supervision only. Not for pregnant/nursing women. Results vary by individual. Thorough informed consent required.</em>",
  "benefits": [
    "Reduced Pigmentation & Dark Spots",
    "Anti-Aging Properties",
    "UV Protection",
    "Hydrating & Nourishing",
    "Skin Brightening & Even Tone",
    "Detoxification",
    "Collagen Boosting"
  ],
  "sku": "CORE-SWISS-SLC24A5-4S",
  "volume": "1 Box Pack (4 Sessions)"
},
{
  "id": 52,
  "name": "Cindyrella Supreme Drip Glutathione Injection",
  "category": "Injection",
  "brand": "Cindyrella",
  "price": 15000,
  "image": "/image/cindyrella_supreme_drip.jpeg",
  "description": "Advanced IV Drip Therapy | South Korean | Glutathione + CoQ10 + Collagen + NAD+ | Skin Whitening, Anti-Aging & Detox | 1 Box",
  "details": "<strong>Cindyrella Supreme Drip Glutathione Injection — All-in-One Skin Rejuvenation & Detoxification</strong><br/><br/>This powerful IV drip delivers high doses of glutathione, coenzyme Q10, collagen, NAD+, and other vital nutrients directly into the bloodstream for maximum effectiveness. It works faster and deeper than topical creams or oral supplements, providing quick and dramatic results — brightening skin, smoothing wrinkles, and eliminating toxins.<br/><br/><strong>How It Works:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Reduces melanin production to lighten skin and even out complexion</li><li>Firms skin and enhances elasticity for a youthful, plump look</li><li>Detoxifies the body and liver to remove harmful substances</li><li>Minimizes fine lines, wrinkles, and sagging skin</li><li>Strengthens the immune system and promotes overall health</li></ul><br/><strong>Key Ingredients & Their Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (800,000 mg):</strong> Ultimate skin-lightening and detoxifying antioxidant</li><li><strong>Coenzyme Q10 (5,000 mg):</strong> Powerhouse for anti-aging and improved hydration</li><li><strong>Hydrolyzed Collagen (140,000 mg):</strong> Keeps skin firm, hydrated, and wrinkle-free</li><li><strong>Vitamin C (10,000 mg):</strong> Enhances skin brightness and boosts collagen production</li><li><strong>Alpha Lipoic Acid (1,000 mg):</strong> Smooths skin texture and reduces fine lines</li><li><strong>NAD+ (2,500 mg):</strong> Repairs skin damage and slows aging</li><li><strong>Stem Cells & Plant Extracts:</strong> Help regenerate skin and improve texture</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Cindyrella<br/>Place of Origin: South Korea<br/>Packaging: 1 Box<br/>Form: IV Drip / Injection<br/><br/><strong>Benefits:</strong><br/>Whitens and brightens skin naturally, reduces fine lines and wrinkles, deeply hydrates and nourishes, detoxifies the liver and eliminates acne-causing toxins, strengthens immune system and boosts energy.<br/><br/><strong>Treatment Process:</strong><br/>Administered intravenously for effective absorption and rapid results. Your doctor will advise on proper dosage based on your needs.<br/><br/><strong>Who Should Consider:</strong><br/>Anyone wanting skin whitening and anti-aging benefits, people with pigmentation issues, wrinkles, and dull skin, individuals seeking immediate noticeable results, anyone wanting a detox boost and overall health improvement.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results vary by individual. Consult a qualified healthcare provider before use.</em>",
  "benefits": [
    "Whitens and brightens skin naturally",
    "Reduces fine lines and wrinkles",
    "Deeply hydrates and nourishes the skin",
    "Detoxifies the liver and eliminates acne-causing toxins",
    "Strengthens the immune system and boosts energy",
    "Firms skin and enhances elasticity"
  ],
  "sku": "CINDY-SUPREME-DRIP-SK",
  "volume": "1 Box"
},
{
  "id": 53,
  "name": "Cindyrella Power Drip Glutathione Injection for Skin Whitening (10 Sessions) - Lyophilized Powder",
  "category": "Injection",
  "brand": "Cindyrella",
  "price": 12500,
  "image": "/image/cindyrella_power_drip.jpeg",
  "description": "Nano 800,000mg Glutathione | Lyophilized Powder | IV Drip with CoQ10, Collagen, Placenta, Apple Stem Cell & Vitamins | 10 Sessions",
  "details": "<strong>Cindyrella Power Drip/Injection — Your Skin's New Secret Weapon</strong><br/><br/>Experience the ultimate rejuvenation with Power Drip, a high-dose lyophilized powder blend crafted to boost energy, brighten skin, and enhance overall wellness. Packed with 800,000mg of Glutathione for powerful detoxification and whitening, plus CoQ10 for cellular energy, and a double boost of Marine Collagen and Collagen to restore skin elasticity and glow. Infused with Placenta and Apple Stem Cell to promote regeneration, plus a potent mix of Vitamin C, Vitamin B Complex, and Vitamin E to support immunity, metabolism, and radiant skin.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (Nano 800,000mg):</strong> Powerful detoxification and skin whitening</li><li><strong>CoQ10 (10,000mg):</strong> Cellular energy and anti-aging</li><li><strong>Marine Collagen (80,000mg) + Collagen (70,000mg):</strong> Restores skin elasticity and glow</li><li><strong>Placenta (25,000mg):</strong> Promotes regeneration</li><li><strong>Apple Stem Cell (10,000mg):</strong> Supports skin renewal</li><li><strong>Vitamin C (5,000mg):</strong> Brightening and immunity</li><li><strong>Vitamin E (1,000mg):</strong> Antioxidant protection</li><li><strong>Vitamin B Complex (B1, B3, B5, B6, B12) 500mg total:</strong> Metabolism support</li></ul><br/><strong>Product Specifications:</strong><br/>Strength: Nano 800,000 mg<br/>Brand: Cindyrella<br/>Form: Lyophilized Powder<br/>Packaging Type: Combi pack<br/>Route of Administration: IV Use Only<br/>Usage/Application: Skin Whitening<br/>Availability: In Stock<br/><br/><strong>Course:</strong> 10 Sessions per pack<br/><br/><strong>Benefits:</strong> Ultimate skin rejuvenation, powerful detoxification, skin brightening and whitening, restores elasticity and glow, promotes cell regeneration, boosts energy and immunity, supports metabolism, radiant skin from within.<br/><br/><strong>Shipping Information:</strong> Ships from Bengaluru. Price excludes taxes.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Verification of drug license & valid prescription is strongly advised before dealing in medicines. Professional medical supervision required. Results vary by individual.</em>",
  "benefits": [
    "Powerful Detoxification",
    "Skin Whitening & Brightening",
    "Restores Skin Elasticity & Glow",
    "Promotes Cell Regeneration",
    "Boosts Energy & Immunity",
    "Anti-Aging & Cellular Energy",
    "Supports Metabolism",
    "Radiant Skin from Within"
  ],
  "sku": "CINDY-POWER-DRIP-10S",
  "volume": "10 Sessions (Lyophilized Powder)"
},
{
  "id": 54,
  "name": "Bio Rae Complexion 12 Skin Whitening Injections",
  "category": "Injection",
  "brand": "Bio Rae",
  "price": 18000,
  "image": "/image/bio_rae_complexion_12.jpeg",
  "description": "Premium Korean Skin Whitening System | Glutathione + EGF + Stem Cell Extract | 4 Sessions | Anti-Aging, Pigmentation & Scar Healing",
  "details": "<strong>Bio Rae Complexion 12 — Premium Skin Whitening System</strong><br/><br/>An updated variation of the renowned Complexion 8, Bio Rae Complexion 12 is a premium skin whitening system with assured results. Trusted by many Indians and celebrities, this comprehensive treatment repairs and prevents skin issues quickly and effectively — from skincare, skin smoothing, anti-aging, eczema prevention, firming skin, to pigmentation avoidance.<br/><br/>Contains a small amount of Selenium to increase metabolism for faster scar healing and better skin. The DNA Skin Whitening IV injection delivers one of the quickest whitening effects at a standard price.<br/><br/><strong>Complete 4-Session Kit (Each session includes all below):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 50,000 mg (15 ml Vial)</li><li><strong>Epidermal Growth Factor (EGF) with RNA:</strong> 1,500 mg (15 ml Vial)</li><li><strong>Vitamin B Complex:</strong> 1,250 mg (7 ml Vial)</li><li><strong>Amino Acids DNA Complex:</strong> 1,250 mg (7 ml Vial)</li><li><strong>Coenzyme Q10:</strong> 1,250 mg (7 ml Vial)</li><li><strong>Celergen Stem Cell Extract:</strong> 50,000 I.U (7 ml Vial)</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5,000 mg (10 ml Ampoule)</li><li><strong>Tranexamic Acids:</strong> 500 mg (5 ml Ampoule)</li><li><strong>Alpha Lipoic Acid (ALA):</strong> 250 mg (5 ml Ampoule)</li><li><strong>Selenium:</strong> 0.35 mcg (2 ml Ampoule)</li><li><strong>Natural Collagen Extract:</strong> 0.75 mcg (2 ml Ampoule)</li><li><strong>Cyanocobalamin (Vitamin B12):</strong> 2,000 mcg (2 ml Ampoule)</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Whiten skin and lighten marks</li><li>Smooth skin treatment, brighten and provide nourishment</li><li>Improve skin elasticity</li><li>Lighten pigmentation from sun exposure</li><li>Suppress acne blemishes</li><li>Restore collagen formation, anti-black spots, pigmentation, freckles</li><li>Smooth and soften skin, improve fine lines</li><li>Inhibit melanin generation (brown pigment)</li><li>Moisturize and hydrate, soothe pores, enhance elasticity</li><li>Anti-aging and reduce wrinkles</li><li>Boost skin complexion and oils</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Bio Rae<br/>Form: Injection<br/>Strength: 50,000<br/>Country of Origin: Korea<br/>Packaging Qty: 1 Box Pack<br/>Packaging Type: Vial & Ampoule<br/>Dose: Once a week<br/><br/><strong>Not Suitable For:</strong><br/>Patients with cardiovascular problems, breastfeeding women, allergy to any vitamins, pregnant women.<br/><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Results vary by individual metabolism.</em>",
  "benefits": [
    "Whiten Skin & Lighten Marks",
    "Improve Skin Elasticity",
    "Lighten Pigmentation from Sun Exposure",
    "Suppress Acne Blemishes",
    "Restore Collagen Formation",
    "Inhibit Melanin Generation",
    "Moisturize & Hydrate",
    "Anti-Aging & Reduce Fine Lines"
  ],
  "sku": "BIO-RAE-COMPLEXION-12-4S",
  "volume": "1 Box Pack (4 Sessions - Complete Kit)"
},
{
  "id": 55,
  "name": "Bio Swiss Mixing White V6 Pro Glutathione Whitening Injection",
  "category": "Injection",
  "brand": "Bio Swiss",
  "price": 12200,
  "image": "/image/bio_swiss_mixing_white_v6_pro.jpeg",
  "description": "Powerful Swiss Whitening Injection | Pico-Glutathione + CoQ10 + Ultra Celergen SCF VI | 4 Sessions | Brightening, Anti-Aging & Scar Healing",
  "details": "<strong>Bio Swiss Mixing White V6 Pro Glutathione Whitening Injection — Nutrient-Rich Swiss Formula</strong><br/><br/>This powerful, nutrient-rich whitening injection transforms your skin by visibly improving skin color, hydration, firmness, wrinkles, elasticity, lines, age spots, pigmentation, and the appearance of spots. Made in Switzerland with paraben-free and organic composition.<br/><br/><strong>Composition (Per Box — 4 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pico-Glutathione:</strong> 16,000mg (Vial x 4) — Ultra-pure whitening antioxidant</li><li><strong>Ultra Celergen SCF VI:</strong> 3,800mg, 5ml (Ampoule x 4) — Stem cell growth factors for regeneration</li><li><strong>Multivitamins with Collagen:</strong> 5,000mg, 20ml (Ampoule x 4) — Nourishment and elasticity</li><li><strong>Power B Complex:</strong> (Vial x 4) — Energy and metabolism support</li><li><strong>Co-enzyme Q10:</strong> 500mg (Vial x 4) — Cellular anti-aging and hydration</li></ul><br/>Each set contains 3 Vials + 2 Ampoules. 4 sets per box.<br/><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Professional skin whitening and brightening (recommended once every 4 days)</li><li>Lightening dark spots</li><li>Anti-aging and rejuvenation</li><li>Reduces acne, pimples, acne pits and scars</li><li>Minimizes large pores and regulates oily skin</li><li>Healing of scars</li><li>Stimulates collagen production</li><li>Body detoxification</li><li>Protects skin from UV rays</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Bio Swiss<br/>Form: Injection<br/>Country of Origin: Switzerland<br/>Packaging Qty: 1 Box Pack (4 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening<br/>Expiry: November 2026<br/><br/><strong>Not Suitable For:</strong><br/>Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Treatment Course:</strong> 1 box is good for 2 weeks of treatment (one session every 4 days).<br/><br/><strong>Shipping:</strong> Free shipping and Cash On Delivery available in India.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Results may vary from person to person and depend on individual metabolism. Professional medical supervision recommended.</em>",
  "benefits": [
    "Professional Skin Whitening & Brightening",
    "Lightening Dark Spots",
    "Anti-Aging & Rejuvenation",
    "Reduces Acne, Pimples & Scars",
    "Minimizes Large Pores & Regulates Oily Skin",
    "Stimulates Collagen Production",
    "Body Detoxification",
    "UV Protection"
  ],
  "sku": "BIO-SWISS-V6-PRO-4S",
  "volume": "1 Box Pack (4 Sessions, 3 Vials + 2 Ampoules per set)"
},
{
  "id": 56,
  "name": "Mixing White Diamond Complexion 12 Glutathione and Vitamin C Injections",
  "category": "Injection",
  "brand": "Swissmed",
  "price": 11500,
  "image": "/image/mixing_white_diamond_complexion_12.jpeg",
  "description": "Upgraded Swiss Formula | 10 Sessions | Glutathione + Vitamin C + Collagen | Rosy-White Radiance, Pigmentation Control & Anti-Aging",
  "details": "<strong>Mixing White Diamond Complexion 12 — Upgraded & Refined Swiss Formula</strong><br/><br/>Experience the revitalized MIXING WHITE DIAMOND COMPLEXION 12, a sophisticated formula derived from the original Mixing White, designed to deliver a rosy-white radiance. Made in Switzerland, paraben-free and organic.<br/><br/><strong>Key Ingredients (Per Box — 10 Sets):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Glutathione:</strong> 12,000,000mg — Master antioxidant for skin whitening</li><li><strong>DNA Repair Glutathione:</strong> 2,000,000mg — Cellular repair and rejuvenation</li><li><strong>L-Ascorbic Acid (Vitamin C):</strong> 150,000mg — Brightening and collagen support</li><li><strong>Natural Collagen:</strong> 50,000mg — Elasticity and hydration</li><li><strong>M-Tranexamic Acid:</strong> 30,000mg — Reduces pigmentation and dark spots</li><li><strong>Genistein Enzyme Complex:</strong> 20,000mg — Soy-derived antioxidant</li><li><strong>RNA Selenium:</strong> 10,000mg — Metabolism and scar healing</li><li><strong>N-Acetyl Cysteine (NAC):</strong> 5,000mg — Glutathione precursor</li><li><strong>High Alpha Lipoic Acid:</strong> 5,000mg — Antioxidant and anti-aging</li><li><strong>Niacin (Vitamin B3):</strong> 5,000mg — Skin barrier support</li></ul><br/><strong>Advantages & Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Effectively tackles dark skin concerns</li><li>Perfect for naturally dark and dry skin types</li><li>Restores skin elasticity for a youthful look</li><li>Regulates excessive melanin production throughout the body</li><li>Visible results within 2 to 3 weeks of usage</li><li>Minimizes dark spots from acne and sun exposure</li><li>Enhances memory with Cobalamin</li><li>Promotes deep sleep for optimal growth hormone production</li><li>Maximum protection against free radicals, preventing early aging</li><li>Reduces darkness intensity</li><li>Eradicates persistent sunspots, freckles, and age spots</li><li>Prevents future skin pigmentation issues</li><li>Brightens overall complexion</li><li>Maintains a blemish-free appearance</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Swissmed<br/>Form: Injection<br/>Country of Origin: Switzerland<br/>Packaging Qty: 1 Box Pack (10 Sessions)<br/>Packaging: 10 Sets/Box (10 Vials + 10 Ampoules)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results may vary from person to person and depend on individual metabolism. Professional medical supervision recommended.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Consult a dermatologist before use.</em>",
  "benefits": [
    "Rosy-White Radiance",
    "Regulates Excessive Melanin Production",
    "Minimizes Dark Spots (Acne & Sun)",
    "Restores Skin Elasticity",
    "Visible Results in 2-3 Weeks",
    "Anti-Aging & Free Radical Protection",
    "Eradicates Sunspots, Freckles & Age Spots",
    "Brightens Overall Complexion",
    "Blemish-Free Appearance"
  ],
  "sku": "SWISSMED-MWDC12-10S",
  "volume": "1 Box Pack (10 Sessions, 10 Vials + 10 Ampoules)"
},
{
  "id": 57,
  "name": "Evgenis Totipotent Embryonic Stem-Cell (ETESC) Injection - 1200mg Stem Cell/Whitening",
  "category": "Injection",
  "brand": "Evgenis",
  "price": 28500,
  "image": "/image/evgenis_totipotent_embryonic_stemcell.jpeg",
  "description": "Next-Generation Skin Regeneration | 1200mg Totipotent Stem Cell Formula | Cellular Renewal, Anti-Aging & Skin Repair",
  "details": "<strong>Evgenis Totipotent Embryonic Stem-Cell (ETESC) Injection — Advanced Aesthetic Skin Regeneration</strong><br/><br/>Evgenis Totipotent is a next-generation skin regeneration and rejuvenation formulation designed to support cellular renewal, skin repair, and overall skin vitality. Inspired by the concept of totipotency—the ability of cells to regenerate and renew—this advanced aesthetic solution enhances skin quality at a deep, biological level. Developed for professional aesthetic and advanced skincare applications, it focuses on restoring skin strength, resilience, and youthful appearance, making it ideal for treatments targeting aging, damaged, or stressed skin.<br/><br/><strong>Key Features:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Advanced cell-regeneration–focused formulation</li><li>Designed to support skin renewal and repair mechanisms</li><li>Improves skin texture, tone, and elasticity</li><li>Supports collagen and extracellular matrix activity</li><li>Suitable for professional aesthetic protocols</li><li>High-quality formulation with consistent performance</li></ul><br/><strong>Benefits of Evgenis Totipotent:</strong><br/>Works by supporting the skin's natural regenerative processes, helping revive dull and aging skin while improving overall skin structure and appearance:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Enhanced skin regeneration and renewal</li><li>Improved firmness and elasticity</li><li>Reduction in fine lines and early signs of aging</li><li>Improved skin texture and smoothness</li><li>Revitalized, healthier-looking skin</li><li>Supports long-term skin quality improvement</li></ul><br/><strong>Common Professional Applications:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Facial skin rejuvenation</li><li>Skin quality improvement treatments</li><li>Anti-aging protocols</li><li>Post-procedure skin recovery (as professionally indicated)</li><li>Advanced aesthetic skin therapies</li></ul><br/>Evgenis Totipotent is suitable for all skin types and can be incorporated into customized aesthetic treatment plans depending on individual skin needs.<br/><br/><strong>Product Specifications:</strong><br/>Form: Stem Cell/Whitening Injection<br/>Manufacturer: Evgenis<br/>Strength: 1200mg<br/>Availability: In Stock<br/><br/><strong>Shipping Information:</strong> Ships from Bengaluru. Price excludes taxes.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional aesthetic use only. Results vary by individual. Consultation with a qualified healthcare provider is recommended before use.</em>",
  "benefits": [
    "Enhanced Skin Regeneration & Renewal",
    "Improved Firmness & Elasticity",
    "Reduction in Fine Lines & Early Aging Signs",
    "Improved Skin Texture & Smoothness",
    "Revitalized, Healthier-Looking Skin",
    "Supports Long-Term Skin Quality Improvement"
  ],
  "sku": "EVGENIS-ETESC-1200",
  "volume": "Single Injection (1200mg)"
},
{
  "id": 58,
  "name": "Swismed Mixing White Pink Glow Glutathione Injection",
  "category": "Injection",
  "brand": "Swissmed",
  "price": 10000,
  "image": "/image/swismed_mixing_white_pink_glow.jpeg",
  "description": "Advanced Swiss Skin Therapy | 8 Sessions | Glutathione + Collagen + Rose Stem Cell + CoQ10 | Whitening, Anti-Aging & DNA Regeneration",
  "details": "<strong>Mixing White Pink Glow Regeneration — Advanced Swiss Skin Whitening & Anti-Aging Therapy</strong><br/><br/>Dreaming of brighter, youthful, and flawless skin? Mixing White Pink Glow Regeneration by SwissMed is a premium Swiss skin therapy that goes beyond ordinary creams and serums. Developed with cutting-edge biotechnology, it delivers visible results in skin whitening, rejuvenation, and anti-aging within a short period.<br/><br/>Unlike regular skincare products that work only on the surface, Mixing White Pink Glow acts at the DNA and cellular level. With the combined power of Glutathione, Collagen, Vitamin C, Stem Cells, and Coenzyme Q10, it helps repair damage, boost collagen production, and enhance skin elasticity.<br/><br/><strong>Premium Ingredients (Per Box — 8 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Glutathione:</strong> 100,000,000 mg — Master antioxidant for whitening and detoxification</li><li><strong>L-Ascorbic Acid (Vitamin C):</strong> 200,000 mg — Brightness, collagen production, UV protection</li><li><strong>Natural Collagen:</strong> 200,000 mg — Firmness, elasticity, and hydration</li><li><strong>RNA Selenium:</strong> 100,000 mg — Cellular protection and renewal</li><li><strong>DNA Repair Genetic:</strong> 100,000 mg — Stimulates regeneration for youthful skin</li><li><strong>Rose Stem Cell:</strong> 100,000 mg — Revitalizes skin, smoothness and vitality</li><li><strong>Coenzyme Q10:</strong> 100,000 mg — Potent antioxidant against oxidative stress and aging</li><li><strong>Cobalamin (Vitamin B12):</strong> 100,000 mg — Nourishes skin, aids repair and texture</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Accelerated Skin Whitening:</strong> High-strength L-Glutathione reduces melanin for lighter, even tone</li><li><strong>Dark Spot Reduction:</strong> Fades acne scars, pigmentation, discoloration; improves UV defense</li><li><strong>Anti-Aging Properties:</strong> Rose Stem Cells, peptides, CoQ10 minimize wrinkles, fine lines</li><li><strong>DNA Regeneration:</strong> Supports collagen formation for firmer, smoother, hydrated skin</li><li><strong>Powerful Antioxidant Shield:</strong> Protects against pollution, sun exposure, premature damage</li><li><strong>Skin Rejuvenation:</strong> Leaves skin soft, plump, naturally radiant with improved texture</li></ul><br/><strong>Product Specifications:</strong><br/>Brand Name: Swissmed<br/>Place of Origin: Made in Switzerland<br/>Key Ingredients: Glutathione & Vitamin C<br/>Packaging: 1 Box (8 Sessions)<br/>Expiry: December 2029<br/><br/><strong>Usage & Storage:</strong><br/>Recommended usage: Twice per week via intramuscular (IM) or intravenous (IV) methods. Professional medical supervision required. Store below 26°C, away from direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Pregnant or breastfeeding women. Always consult a qualified professional before starting treatment.<br/><br/><strong>Why Choose Mixing White Pink Glow?</strong> Swiss innovation with advanced nanotechnology. Works at cellular/DNA level for long-lasting transformation. Combines whitening, anti-aging, and skin repair in one therapy.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Results may vary from person to person and depend on individual metabolism. Professional medical supervision recommended. For external use by licensed practitioners only.</em>",
  "benefits": [
    "Accelerated Skin Whitening",
    "Dark Spot & Pigmentation Reduction",
    "Anti-Aging (Wrinkles & Fine Lines)",
    "DNA Regeneration & Collagen Support",
    "Powerful Antioxidant Protection",
    "Skin Rejuvenation & Hydration"
  ],
  "sku": "SWISSMED-PINK-GLOW-8S",
  "volume": "1 Box (8 Sessions)"
},
{
  "id": 59,
  "name": "NC24 280000mg Ultra PDRN Miracle 10 Sessions Skin Whitening Injection",
  "category": "Injection",
  "brand": "NC24",
  "price": 11480,
  "image": "/image/nc24_ultra_pdrn_miracle.jpeg",
  "description": "Ultra PDRN Formula | 280,000mg Glutathione + PDRN + Fibroblast Growth Factor | Made in Japan | 10 Sessions | Skin Whitening & Anti-Aging",
  "details": "<strong>NC24 280000mg Ultra PDRN Miracle Skin Whitening Injection — Highest Quality High-Dose Formula</strong><br/><br/>The No. 1 choice of spas and skin clinics worldwide, this advanced Japanese formulation combines ultra-concentrated glutathione with PDRN (Polydeoxyribonucleotide) and growth factors for comprehensive skin whitening, anti-aging, and cellular repair.<br/><br/><strong>Complete Kit Contents (10 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>5 Vials — Ultra Concentrated Glutathione:</strong> 280,000mg</li><li><strong>5 Vials — PDRN (Polydeoxyribonucleotide):</strong> 700mg (tissue repair and regeneration)</li><li><strong>10 Ampoules (10ml each) — Refined Cranberry Extract + Ascorbic Acid:</strong> 5,500mg</li><li><strong>10 Ampoules (10ml each) — Thioctic Acid:</strong> 2,400mg</li><li><strong>10 Ampoules (10ml each) — Fibroblast Growth Factor (FGF):</strong> 2,250mg</li><li><strong>10 Ampoules (5ml each) — DNA CollaPro:</strong> 1,500mg</li><li><strong>10 Ampoules (5ml each) — Coenzyme Q10 (CoQ10):</strong> 1,800mg</li><li><strong>5 Vials — Multivitamin Complex:</strong> 80,000mg</li></ul><br/><strong>Key Features & Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Highest quality L-Glutathione formula for effective skin whitening</li><li>PDRN promotes tissue repair, regeneration, and anti-inflammatory effects</li><li>Fibroblast Growth Factor stimulates collagen and elastin production</li><li>Addresses skin discoloration, anti-aging, and free radical damage</li><li>Helps prevent wrinkles and brightens dark circles</li><li>All-natural formula — no harmful chemicals</li><li>Boosts melanin regulation for healthy, glowing skin</li></ul><br/><strong>Product Specifications:</strong><br/>Manufacturer: NC Bio Laboratories Pte. Ltd.<br/>Origin Country: Japan<br/>Importer: Super Advanced General Trading Company LLC<br/>Packer/Seller: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/><br/><strong>Recommended Dosage:</strong> Intravenous (IV) Infusion (Drip) once a week. Consult your doctor for better results.<br/><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Important Note:</strong> Results depend on individual metabolism. Consult a dermatologist before placing an order for glutathione IV infusion injections.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Individual results may vary. Verify product authenticity before use.</em>",
  "benefits": [
    "Ultra-Concentrated Glutathione Whitening",
    "PDRN Tissue Repair & Regeneration",
    "Anti-Aging & Wrinkle Prevention",
    "Brightens Dark Circles",
    "Collagen & Elastin Stimulation",
    "Detoxification & Free Radical Protection",
    "Healthy, Glowing Skin"
  ],
  "sku": "NC24-ULTRA-PDRN-10S-JP",
  "volume": "10 Sessions Complete Kit (Vials + Ampoules)"
},
{
  "id": 60,
  "name": "Kosdaq Cindella Luthione Vitamin C 1200mg Skin Whitening Set",
  "category": "Injection",
  "brand": "Kosdaq",
  "price": 17000,
  "image": "/image/kosdaq_cindella_luthione.jpeg",
  "description": "KFDA Certified | 1200mg | Fair to Pink Complexion | Glutathione + Thioctic Acid + Vitamin C | Liver Detox & Anti-Aging",
  "details": "<strong>Kosdaq Cindella Luthione Vitamin C 1200mg Skin Whitening Set — Your Dream Fair to Pink Complexion</strong><br/><br/>Achieve your dream fair to pink complexion with Cindella 1200mg KFDA Skin Whitening Injections Set. Say goodbye to all skin blemishes including acne, wrinkles, pigments, freckles and dark spots. This Korean import uses a multi-pronged approach — not just surface work, but also detoxifies your body and liver for permanent inside-out transformation.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Fair to pink complexion from dark and brown skin</li><li>Detoxifies liver, improves blood circulation, metabolism and energy levels</li><li>Fights cold, obesity, edema – makes you physically healthy</li><li>Forms healthier daily habits and regulates appetite</li><li>Produces Alpha-lipoic acid and Glutathione (slows down with age)</li><li>Skin turns soft, elastic, smooth, shiny, radiant, glowing with even tone</li></ul><br/><strong>Powerful Antioxidant Action:</strong><br/>Alpha-lipoic Acid is 400 times more effective than Vitamins C and E as an antioxidant. It suppresses formation of harmful active oxygen that damages cells, causes diseases and aging. Along with Glutathione, Vitamins C, E and Coenzyme Q, it effectively fights active oxygen production while improving metabolism and energy levels. The lipolysis process regulates digestion, appetite and burns unnecessary fat.<br/><br/><strong>Renewing Skin Cells:</strong><br/>Cindella injections renew damaged skin cells, repair wounds and scars, leaving permanently soft, smooth, elastic and shiny skin. Encourages sufficient collagen production for internal and external health. Alpha-lipoic Acid performs liver detoxification for proper digestion, assimilation and unhindered blood circulation.<br/><br/><strong>Reverse Aging & Saccharification Prevention:</strong><br/>Naturally slows down aging while forming healthier habits. Encourages production of white/red blood cells and improved blood circulation. Sagging and dead skin cells renew naturally, replaced by firm, lifted skin. Also prevents saccharification of proteins (process that transforms proteins into sugars and toxins which block capillaries).<br/><br/><strong>Product Specifications:</strong><br/>Strength: 1200 mg<br/>Brand: Kosdaq<br/>Composition: Glutathione, Thioctic Acid, Vitamin C<br/>Packaging Type: Combipack<br/>Route of Administration: IV Use Only<br/>Origin: Korean Import (KFDA certified)<br/><br/><strong>Dosage:</strong><br/>Treatment phase: Once every 4 days for ten weeks<br/>Maintenance phase: Once every two weeks or every month<br/><br/><strong>Characteristics:</strong><br/>No recovery period<br/>Best results with diet, therapy, and exercise<br/>Can be performed with other skin whitening procedures<br/><br/><strong>Note:</strong> Results may vary from person to person.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Verification of drug license & valid prescription strongly advised. Professional medical supervision required. Consult a dermatologist before use.</em>",
  "benefits": [
    "Fair to Pink Complexion",
    "Liver Detoxification",
    "Improved Blood Circulation & Metabolism",
    "Anti-Aging & Reverse Aging",
    "Renews Damaged Skin Cells",
    "Collagen Production Boost",
    "Removes Acne, Wrinkles, Pigments, Freckles, Dark Spots"
  ],
  "sku": "KOSDAQ-CINDELLA-1200",
  "volume": "1 Box (Combipack Set)"
},
{
  "id": 61,
  "name": "NouveauxIV GSW Glutathione Super Whitening Injection",
  "category": "Injection",
  "brand": "NouveauxIV",
  "price": 13340,
  "image": "/image/nouveauxiv_gsw_glutathione.jpeg",
  "description": "High-Dose IV Formula | 95,000mg Glutathione + 50,000mg Vitamin C | Deep Detox, Brightening & Anti-Aging | 10 Sessions",
  "details": "<strong>NouveauxIV GSW Glutathione Super Whitening Injection — Powerful IV Skin Transformation</strong><br/><br/>Experience fast and effective results with this premium high-dose IV formula designed for deep skin detox and intense whitening. Works from within to promote glowing, spotless, and radiant skin. Intravenous delivery ensures nutrients absorb directly into the bloodstream for quicker effects.<br/><br/><strong>Ingredients & Strengths:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 95,000mg — Master antioxidant for whitening and detoxifying</li><li><strong>Vitamin C:</strong> 50,000mg — Boosts skin clarity and immunity, enhances Glutathione absorption</li><li><strong>Ascorbic Acid:</strong> 15,000mg — Supports collagen formation and fights oxidative stress</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Advanced Skin Brightening:</strong> High-strength Glutathione reduces melanin and enhances natural glow</li><li><strong>Promotes Even-Toned Skin:</strong> Targets pigmentation, blemishes, and tanning for smooth, uniform complexion</li><li><strong>Deep Skin Detox:</strong> Flushes out toxins and free radicals, improving texture and tone</li><li><strong>Youthful, Firm Skin:</strong> Vitamin C and Ascorbic Acid support collagen production and reduce fine lines</li><li><strong>Fast Visible Results:</strong> Intravenous delivery for quicker effects — most users notice changes after 5–6 sessions</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Liquid solution for IV use only<br/>Pack Size: 1 Box — 10 Sessions (20 ampoules of 5ml each)<br/>FSSAI License: 21223009000196<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved<br/><br/><strong>Dosage & Usage:</strong> Recommended 1 injection every 4–5 days. Always consult a trained medical professional for administration.<br/><br/><strong>Safety:</strong> Safe when administered by a certified professional. Follow dosage recommendations.<br/><br/><strong>Shipping:</strong> Home delivery available all over India.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Results may vary based on individual skin type and lifestyle. Professional medical supervision required. Consult a dermatologist before use.</em>",
  "benefits": [
    "Advanced Skin Brightening",
    "Promotes Even-Toned Skin",
    "Deep Skin Detoxification",
    "Youthful, Firm Skin",
    "Reduces Fine Lines & Signs of Aging",
    "Fast Visible Results"
  ],
  "sku": "NOUVEAUXIV-GSW-10S",
  "volume": "1 Box (10 Sessions, 20 ampoules of 5ml each)"
},
{
  "id": 62,
  "name": "Mixing White Bio X2 Regeneration Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Mixing White",
  "price": 9500,
  "image": "/image/mixing_white_bio_x2_regeneration.jpeg",
  "description": "DNA Regeneration & Glisodin SOD | Swiss Innovation | 7 Sessions | Whitening Antioxidant, UV Defense & Anti-Aging",
  "details": "<strong>Mixing White Bio X2 Regeneration — Advanced Swiss Skin DNA Regeneration Therapy</strong><br/><br/>Innovation from SwissMed Switzerland — an advanced system for skin DNA generation, enhancing elasticity, smoothing and moisturizing, reversing aging, and enhancing harmful UV defense due to its unique properties. SwissMed continues to bring innovations in the world of beauty with multiple skin rejuvenation therapy.<br/><br/><strong>Compositions (7 Sets per Box — 7 Ampoules + 7 Vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>DNA Nano Glutathione:</strong> 1,680,000mg</li><li><strong>Glisodin SOD:</strong> 230,000mg — Superoxide dismutase antioxidant</li><li><strong>Genistin Enzyme Complex:</strong> 120,000mg</li><li><strong>Collagen Peptide:</strong> For firmness and elasticity</li><li><strong>Gamma-Tocopherol, Cholecalciferol, Ascorbic Acid, Calcium, Zinc, Selenium</strong></li></ul><br/><strong>Benefits of Mixing White Bio X2 Regeneration:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Accelerates whitening of the skin</li><li>Reduces dark spots with enhanced UV protection</li><li>Rapid whitening and brightening of skin tone</li><li>Promotes skin rejuvenation</li><li>DNA regeneration produces collagen to firm and moisturize skin</li><li>Powerful antioxidant with anti-aging properties for youthful looking skin</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Mixing White<br/>Form: Injection<br/>Country of Origin: Switzerland<br/>Packaging Qty: 1 Box Pack (7 Sessions — 7 amps and 7 vials)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Whitening & Antioxidant<br/>Manufacturer: SwissMed<br/><br/><strong>Recommended Dosage:</strong> Administered twice a week intravenously (IV), then can reduce to 1 injection every 2 weeks for maintenance.<br/><br/><strong>Not Suitable For:</strong> Pregnant women, breastfeeding/nursing women, allergy to any vitamins, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results may vary from person to person. Professional medical supervision required.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Accelerates Skin Whitening",
    "Reduces Dark Spots & UV Protection",
    "Rapid Brightening of Skin Tone",
    "Skin Rejuvenation",
    "DNA Regeneration & Collagen Production",
    "Powerful Antioxidant & Anti-Aging"
  ],
  "sku": "MIXWHITE-BIO-X2-7S",
  "volume": "1 Box Pack (7 Sessions — 7 Ampoules + 7 Vials)"
},
{
  "id": 63,
  "name": "Cindyrella Magical Mystical Drip with NAD+ (7 Sets)",
  "category": "Injection",
  "brand": "Cindyrella Magical",
  "price": 13800,
  "image": "/image/cindyrella_mystical_drip_nad.jpeg",
  "description": "NAD+ Enhanced IV Drip | 850,000mg Glutathione + Stem Cell + Placenta + Collagen Complex | 7 Sets | Skin Radiance, Anti-Aging & Immune Boost",
  "details": "<strong>Cindyrella Magical Mystical Drip with NAD+ — A Symphony of Health and Beauty</strong><br/><br/>This powerful concoction combines glutathione, lipoic acid, stem cell extract, placental extracts, and collagen peptides for a comprehensive beauty and wellness regimen. Each set includes vials and ampoules with drip or push set accessories (PNSS water, syringe, butterfly).<br/><br/><strong>Complete 7-Set Composition (7 vials + 14 ampoules per set — total 7 sets):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 850,000mg</li><li><strong>Lipoic Acid:</strong> 5,000mg</li><li><strong>Cysteine:</strong> 2,500mg</li><li><strong>Coenzyme Q10 (Q10):</strong> 5,000mg</li><li><strong>Collagen Powder:</strong> 2,000mg</li><li><strong>Hexapeptide:</strong> 1,500mg</li><li><strong>Collagen Peptide:</strong> 5,000mg</li><li><strong>Stem Cell Extract:</strong> 1,000mg</li><li><strong>Vegetable Placenta:</strong> 500mg</li><li><strong>Placenta:</strong> 250mg</li><li><strong>Marine Collagen:</strong> 2,800mg</li><li><strong>Vitamin C:</strong> 5,000mg</li><li><strong>Vitamin D:</strong> 1,800mg</li></ul><br/><strong>Included Accessories (per set):</strong><br/><strong>Drip Set:</strong> 50ml PNSS Water Macroset, Syringe and Butterfly<br/><strong>Push Set:</strong> 5ml Sterile Water, Syringe and Butterfly<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Radiance:</strong> Glutathione and Collagen promote radiant skin, combating oxidative stress while providing structural support</li><li><strong>Anti-Aging Power:</strong> Q10 and Stem Cell Extract stimulate cell regeneration and combat signs of aging</li><li><strong>Immune Boost:</strong> Vitamin C and Vitamin D fortify the body against illnesses</li><li><strong>Cellular Repair:</strong> Lipoic Acid and Cysteine play crucial role in cell regeneration</li><li><strong>Collagen Boost:</strong> Collagen Peptide, Marine Collagen, and Hexapeptide support healthy joints, hair, and nails</li><li><strong>Placental Power:</strong> Vegetable Placenta and Placenta promote smoother complexion and reduce blemishes</li><li><strong>Complete Nutrition:</strong> Comprehensive nutritional boost for overall health</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Cindyrella Magical<br/>Form: IV Drip / Injection with NAD+<br/>Packaging: 7 Sets (7 vials + 14 ampoules per set, total 7 sets)<br/><br/><strong>Authenticity Notice:</strong> WE DO NOT HAVE ANY AUTHORIZED DISTRIBUTORS/SELLERS IN AUSTRALIA, UK, US, VIETNAM, INDIA, JEDDAH, THAILAND OR IN ANY COUNTRY. For guaranteed authenticity, Cindyrella products should only come from the Philippines and be shipped directly to your country.<br/><br/><strong>Usage:</strong> Professional administration only. Consult a qualified healthcare provider before use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Results vary by individual. This is a holistic approach to well-being. Ensure product authenticity by purchasing only from Philippines-based authorized channels.</em>",
  "benefits": [
    "Skin Radiance",
    "Anti-Aging Power",
    "Immune Boost",
    "Cellular Repair",
    "Collagen Boost for Joints, Hair & Nails",
    "Placental Rejuvenation",
    "Complete Nutritional Support"
  ],
  "sku": "CINDY-MYSTICAL-NAD-7S",
  "volume": "7 Sets (7 vials + 14 ampoules per set + drip/push accessories)"
},
{
  "id": 64,
  "name": "Shirayuki Japan Glutathione Skin Whitening Injection 180000mg",
  "category": "Injection",
  "brand": "Shirayuki",
  "price": 29850,
  "image": "/image/shirayuki_japan_glutathione.jpeg",
  "description": "Premium Japanese Whitening Injection | 180,000mg Glutathione + Kojic Acid + Hyaluronic Acid + DNA/RNA | 40 Sessions | Anti-Aging & Pigmentation Control",
  "details": "<strong>Shirayuki Japan Glutathione Injection 180000mg — Cutting-Edge Beauty Solution</strong><br/><br/>Transform your skin with this premium whitening and anti-aging treatment from Japan. Packed with Glutathione, Kojic Acid, Hyaluronic Acid, DNA & RNA extracts, and essential vitamins, this formula reduces dark spots, evens skin tone, and enhances hydration for a glowing complexion. Dermatologically tested for visible results.<br/><br/><strong>Ingredients & Strengths:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 180,000mg — Powerful antioxidant for whitening and detoxification</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 10,000mg — Boosts collagen production and brightens skin</li><li><strong>Kojic Acid:</strong> 5,000mg — Reduces pigmentation and dark spots</li><li><strong>Amino Acids (10%):</strong> Improves skin repair and elasticity</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 1,000mg — Anti-aging antioxidant</li><li><strong>Tranexamic Acid:</strong> 1,000mg — Controls hyperpigmentation</li><li><strong>Collagen Extract:</strong> 2,000mg — Enhances firmness and smoothness</li><li><strong>Hyaluronic Acid:</strong> 300mg — Deeply hydrates and plumps skin</li><li><strong>AHA (Alpha Hydroxy Acid):</strong> 800mg — Exfoliates dead skin cells</li><li><strong>Vitamin B2 & B6:</strong> 500mg — Nourishes and revitalizes skin</li><li><strong>DNA & RNA Extracts:</strong> 1,000mg — Repairs and rejuvenates skin cells</li><li><strong>Antioxidants:</strong> 1,000mg — Protects against environmental damage</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin Whitening — lighter, even skin tone</li><li>Anti-Aging — reduces wrinkles and fine lines</li><li>Dark Spot Reduction — fades blemishes and scars</li><li>Hydration Boost — long-lasting moisture</li><li>Collagen Support — improves elasticity and firmness</li><li>Pigmentation Control — lightens stubborn pigmentation</li><li>Antioxidant Protection — shields from free radical damage</li><li>Skin Rejuvenation — DNA/RNA repair and revitalization</li><li>Glowing Complexion — radiant and youthful</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Country of Origin: Japan<br/>Packaging: 1 Box — 40 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Injectable product — consult a certified professional for administration. Visible improvements within 4-6 weeks of regular use.<br/><br/><strong>Safety:</strong> Dermatologically tested and safe when used as directed by a professional. Suitable for all skin types, including sensitive skin.<br/><br/><strong>FAQs:</strong> Results are long-lasting with proper maintenance and healthy skincare routine. Minimally uncomfortable when administered by a professional.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Individual results may vary.</em>",
  "benefits": [
    "Skin Whitening",
    "Anti-Aging",
    "Dark Spot Reduction",
    "Hydration Boost",
    "Collagen Support",
    "Pigmentation Control",
    "Antioxidant Protection",
    "Skin Rejuvenation",
    "Glowing Complexion"
  ],
  "sku": "SHIRAYUKI-JP-180K-40S",
  "volume": "1 Box (40 Sessions)"
},
{
  "id": 65,
  "name": "GLUTANEX Glutenex Injection for Skin Whitening",
  "category": "Injection",
  "brand": "GLUTANEX",
  "price": 22500,
  "image": "/image/glutanex_injection.jpeg",
  "description": "Powerful Antioxidant IV Drip | Glutathione 1200mg + Vitamin C + Thioctic Acid | 10 Injection Sets | Melanin Suppressor & Anti-Aging",
  "details": "<strong>GLUTANEX Glutenex Injection — The Most Powerful Whitening Antioxidant IV Drip Available Today</strong><br/><br/>This advanced formulation harnesses the strength of the world's three most potent antioxidants in optimal dosages, promising powerful anti-aging benefits for the skin while bolstering internal health. Works as a formidable melanin suppressor with complementary ingredients that extend glutathione effects and enhance absorption.<br/><br/><strong>Key Ingredients per Set (1 ampoule + 2 vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 1200mg — Master antioxidant and melanin suppressor</li><li><strong>Vitamin C:</strong> 10g / 20mL — Enhances glutathione absorption and boosts collagen</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 300mg — Extends and amplifies glutathione effects, boosts natural production</li></ul><br/><strong>Synergistic Action:</strong> Glutathione suppresses melanin formation. Thioctic acid (Liponex-300) extends glutathione effects and boosts its natural production. Vitamin C (Asconex) significantly enhances glutathione absorption and utility within the body while providing anti-aging benefits by combating free radicals.<br/><br/><strong>Packing:</strong> 1 Box including 10 Injection Sets (1 injection set = 1 ampoule + 2 vials)<br/><br/><strong>Usage & Dosage:</strong> Intravenous (IV) Infusion (Drip). 1 set per week for first 2 months, then reduce to 1 set every 2 weeks for maintenance. Please consult with a dermatologist before taking the injection.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding and pregnant women, women during menstruation, allergy to any vitamins, patients with cardiovascular problems.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Verification of drug license & valid prescription strongly advised. Professional medical supervision required. Results vary by individual.</em>",
  "benefits": [
    "Powerful Skin Whitening",
    "Anti-Aging & Free Radical Protection",
    "Melanin Suppression",
    "Enhanced Glutathione Absorption",
    "Boosts Natural Glutathione Production",
    "Internal Health Support"
  ],
  "sku": "GLUTANEX-1200-10SET",
  "volume": "1 Box (10 Injection Sets — 10 Ampoules + 20 Vials)"
},
{
  "id": 66,
  "name": "NC24 Ultra 9000000mg Sense Complexion Injection",
  "category": "Injection",
  "brand": "NC24",
  "price": 10400,
  "image": "/image/nc24_ultra_9000000mg_sense.jpeg",
  "description": "Ultra-High Potency Japanese Formula | 9,000,000mg Glutathione + EGF + CoQ10 | Skin Whitening, Anti-Aging & Complexion Enhancement | 7 Sessions",
  "details": "<strong>NC24 Ultra 9000000mg Sense Complexion Injection — New日本 SAKURA Edition</strong><br/><br/>Manufactured by NC Bio Laboratories Pte. Ltd. (Japan), this ultra-high potency injection delivers 9,000,000mg of ultrafiltration glutathione combined with epidermal growth factor, coenzyme Q10, and multivitamin complex for comprehensive skin whitening and rejuvenation.<br/><br/><strong>Complete Kit — 7 Sessions (Set A + Set B):</strong><br/><br/><strong>SET A (7 ampoules + 7 vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ultrafiltration Glutathione (900:1 / 10,000mg per vial):</strong> 9,000,000mg total — Ultra-concentrated master antioxidant</li><li><strong>Thioctic Acid:</strong> 1,000mg, 5ml x 7 ampoules — Anti-aging antioxidant</li><li><strong>Epidermal Growth Factor (EGF):</strong> 15,000mcg, 2ml x 7 ampoules — Cellular regeneration and repair</li></ul><br/><strong>SET B (7 ampoules + 7 vials):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Ascorbic Acid (Vitamin C):</strong> 25,000mg, 5ml x 7 ampoules — Brightening and collagen support</li><li><strong>Coenzyme Q10 (CoQ10):</strong> 7,000mg, 2ml x 7 ampoules — Cellular energy and anti-aging</li><li><strong>Lyophilization Multivitamin Complex:</strong> 50,000mg, 25ml x 7 vials — Comprehensive nourishment</li></ul><br/><strong>Key Benefits:</strong> Skin whitening, complexion enhancement, anti-aging, cellular regeneration, antioxidant protection, collagen stimulation.<br/><br/><strong>Product Specifications:</strong><br/>Manufacturer: NC Bio Laboratories Pte. Ltd.<br/>Origin Country: Japan<br/>Importer: Super Advanced General Trading Company LLC<br/>Packer/Seller: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/>Use: 18+ above<br/><br/><strong>Not Suitable For:</strong><br/>Breastfeeding women, women during menstruation, allergy to any vitamins, patients with cardiovascular problems, persons below 18 years of age.<br/><br/><strong>Important Notice:</strong> Please consult a dermatologist before placing an order for glutathione IV infusion injections, as results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Individual results may vary. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Ultra-High Potency Skin Whitening",
    "Complexion Enhancement",
    "Anti-Aging & Cellular Regeneration",
    "Antioxidant Protection",
    "Collagen Stimulation",
    "Glutathione + EGF + CoQ10 Synergy"
  ],
  "sku": "NC24-ULTRA-9M-SAKURA-7S",
  "volume": "7 Sessions (Set A + Set B — 7 vials + 14 ampoules total)"
},
{
  "id": 67,
  "name": "Complette Gold 5000000 mg Injection",
  "category": "Injection",
  "brand": "Complette Gold",
  "price": 9000,
  "image": "/image/complette_gold_5million.jpeg",
  "description": "Ultra-High Strength Glutathione Formula | 5,000,000mg | Skin Brightening, Anti-Aging & Cellular Repair | Collagen + Vitamin C + Alpha Lipoic Acid",
  "details": "<strong>Complette Gold Dual Effect Cell Plus Glutathione Injection — Advanced Skin Brightening & Anti-Aging Formula</strong><br/><br/>Enriched with ultra-high strength glutathione (5,000,000mg), collagen, Vitamin C, and Alpha Lipoic Acid, this professional-grade injection promotes whitening, detoxification, and cellular repair. It revitalizes skin tone, reduces pigmentation, and enhances radiance when administered under medical supervision.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 5,000,000mg — Master antioxidant for whitening and detoxification</li><li><strong>Collagen:</strong> Supports skin firmness and elasticity</li><li><strong>Vitamin C:</strong> Brightening and collagen synthesis</li><li><strong>Alpha Lipoic Acid:</strong> Potent anti-aging antioxidant</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin brightening and whitening</li><li>Anti-aging and cellular repair</li><li>Detoxification</li><li>Reduces pigmentation and dark spots</li><li>Enhances skin radiance</li><li>Revitalizes skin tone</li></ul><br/><strong>Product Specifications:</strong><br/>Strength: 5,000,000 mg<br/>Manufacturer: Complette International Laboratories<br/>Packaging Type: Box<br/>Form: Injection<br/>Usage/Application: Skin Whitening<br/>Availability: In Stock<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional use only. Administer under medical supervision. Results vary by individual. Consult a dermatologist before use.</em>",
  "benefits": [
    "Skin Brightening & Whitening",
    "Anti-Aging",
    "Detoxification",
    "Reduces Pigmentation",
    "Cellular Repair",
    "Enhances Skin Radiance"
  ],
  "sku": "COMPLETTE-GOLD-5M",
  "volume": "1 Box"
},
{
  "id": 68,
  "name": "Neutro Skin Promegranate Whitening Injection",
  "category": "Injection",
  "brand": "Neutro Skin",
  "price": 7999,
  "image": "/image/neutro_skin_promegranate.jpeg",
  "description": "Pomegranate Extract Whitening Injection | Skin Brightening & Even Tone | Doctor Prescription Required | Suitable for All Skin Types",
  "details": "<strong>Neutro Skin Promegranate Whitening Injection — Radiant Skin with Pomegranate Power</strong><br/><br/>This liquid injection is formulated with pomegranate extract, known for its natural skin brightening and antioxidant properties. Designed for use under medical supervision, it helps achieve a more radiant and even skin tone. Suitable for all skin types.<br/><br/><strong>Key Features:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Pomegranate extract for whitening and brightening effects</li><li>Liquid drug type injection</li><li>Recommended for doctor prescription use only</li><li>Suitable for all skin types</li></ul><br/><strong>Dosage & Administration:</strong><br/>Administered every 5 days once. Must be prescribed and supervised by a qualified dermatologist or healthcare professional.<br/><br/><strong>Storage Instructions:</strong><br/>Store in a cool and dry place to maintain efficacy.<br/><br/><strong>Ideal For:</strong><br/>Individuals looking to achieve a more radiant, even skin tone with professional guidance.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Prescription only. Professional medical supervision required. Results vary by individual.</em>",
  "benefits": [
    "Skin Whitening & Brightening",
    "Pomegranate Extract Antioxidants",
    "Radiant & Even Skin Tone",
    "Suitable for All Skin Types"
  ],
  "sku": "NEUTRO-POMEGRANATE-1",
  "volume": "1 Bottle"
},
{
  "id": 69,
  "name": "Rition 5000mg Glutathione 10 Session Injection",
  "category": "Injection",
  "brand": "Rition",
  "price": 23800,
  "image": "/image/rition_5000mg_glutathione.jpeg",
  "description": "Italian Mega Dose Pure Glutathione | 5000mg IV Drip | 10 Sessions | Skin Whitening with Ishigaki Amino Premium White | Pinkish-White Result",
  "details": "<strong>Rition 5000mg Glutathione Injection — The Newest & Most Powerful Pure Glutathione from Italy</strong><br/><br/>Manufactured by PIAM Farmaceutici SPA (Genova, Italy) — a trusted glutathione manufacturer. This is the only authentic mega-dose of glutathione in the market for IV Drip infusion. Specially formulated for IV DRIP, it delivers strong and powerful results. Combined with Ishigaki Amino Premium White for an even pinkish-white result — the perfect replacement for Tad 5000.<br/><br/><strong>Product Specifications:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione Strength:</strong> 5000mg</li><li><strong>Course:</strong> 10 Sessions</li><li><strong>Form:</strong> IV Drip Infusion</li><li><strong>Origin Country:</strong> Italy</li><li><strong>Manufacturer:</strong> PIAM Farmaceutici SPA – Via Fieschi 8/7, I-16121 Genova, Italy</li><li><strong>Importer:</strong> Super Advanced General Trading Company LLC</li><li><strong>Packer/Seller:</strong> IMBMS (Dealers Bazaar Group)</li><li><strong>FSSAI License:</strong> 11223999000312</li><li><strong>Certification:</strong> GMP Certified</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Pure, mega-dose glutathione for maximum efficacy</li><li>Skin whitening and brightening</li><li>Pinkish-white complexion with Ishigaki Amino Premium White</li><li>Powerful antioxidant and detoxification</li><li>Specially formulated for IV drip infusion</li></ul><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><strong>Important Notice:</strong> Please consult a dermatologist before placing an order for glutathione IV infusion injections, as results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. For IV use only. Results vary by individual. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Pure Mega-Dose Glutathione (5000mg)",
    "Skin Whitening & Brightening",
    "Pinkish-White Complexion",
    "Powerful Antioxidant & Detoxification",
    "Italian Pharmaceutical Grade"
  ],
  "sku": "RITION-5000-10S-IT",
  "volume": "10 Sessions (IV Drip Kit)"
},
{
  "id": 70,
  "name": "Neutro Skin Pomegranate Glutathione Whitening",
  "category": "Injection",
  "brand": "Neutro",
  "price": 8800,
  "image": "/image/neutro_skin_pomegranate.jpeg",
  "description": "Pomegranate Antioxidant & Whitening Formula | French-Made | 6 Sessions | Glutathione + EGF + CoQ10 | Moisturizing, Melanin Control & Anti-Aging",
  "details": "<strong>Neutro Skin Pomegranate Glutathione Whitening — Antioxidant Magic of Pomegranate</strong><br/><br/>Discover the secret to radiant, firm, and even-toned skin with this unique formula from France. Rich in polyphenols, pomegranate offers triple the antioxidant content of red wine and green tea, combating free radicals, shielding cells from harm, and alleviating inflammation.<br/><br/><strong>Key Components (Per Bottle — 6 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pomegranate Extract & Glutathione:</strong> 12,000mg — Antioxidant powerhouse for skin brightening</li><li><strong>Epidermal Growth Factor (EGF):</strong> 300mg — Cellular regeneration</li><li><strong>Coenzyme Q10:</strong> 150mg — Anti-aging and energy</li><li><strong>Kojic Acid:</strong> 300mg — Melanin inhibition</li><li><strong>Vegetal Placenta:</strong> 20mg — Skin rejuvenation</li><li><strong>Natural Collagen Extract:</strong> 250mg — Firmness and elasticity</li><li><strong>Vitamin C (L'Ascorbic Acid):</strong> 600mg — Brightening and collagen support</li><li><strong>Vitamin E:</strong> 150mg — Antioxidant protection</li></ul><br/><strong>Innovative Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Moisturizing:</strong> Deeply hydrates and revitalizes skin</li><li><strong>Melanin Control:</strong> Reduces melanin spread in the skin</li><li><strong>Anti-Aging:</strong> Visibly reduces fine lines and pores</li></ul><br/><strong>Advantages:</strong> Powerful antioxidant effects, enhances skin brightness and fairness, delays aging signs, boosts immunity, supports liver health, promotes skin cell renewal, increases collagen for improved elasticity, minimizes sun-induced pigmentation, reduces facial lines and wrinkles, controls acne and refines pores.<br/><br/><strong>Product Specifications:</strong><br/>Brand: Neutro<br/>Form: Injection<br/>Country of Origin: France<br/>Packaging Qty: 1 Bottle Pack (6 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening<br/><br/><strong>Dosage & Method:</strong><br/>1 vial twice weekly sub-lingually or as per doctor's advice. For maintenance, 1 vial every 10-15 days. Consult for IM or IV use.<br/><br/><strong>Not Recommended For:</strong> Breastfeeding women, women during menstruation, those allergic to vitamins, individuals with heart problems. Not suitable during chemotherapy due to Glutathione's properties.<br/><br/><strong>Note:</strong> Results may vary from person to person. Professional medical supervision recommended.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Powerful Antioxidant Effects",
    "Enhances Skin Brightness & Fairness",
    "Delays Aging Signs",
    "Boosts Immunity & Liver Health",
    "Promotes Skin Cell Renewal",
    "Increases Collagen & Elasticity",
    "Minimizes Sun-Induced Pigmentation",
    "Reduces Fine Lines & Wrinkles",
    "Controls Acne & Refines Pores",
    "Deeply Moisturizes"
  ],
  "sku": "NEUTRO-POMEGRANATE-6S-FR",
  "volume": "1 Bottle Pack (6 Sessions)"
},
{
  "id": 71,
  "name": "Dr James Glutathione Injection 1500mg Skin Whitening Injection",
  "category": "Injection",
  "brand": "Dr James",
  "price": 6900,
  "image": "/image/dr_james_glutathione_1500mg.jpeg",
  "description": "FDA-Approved USA-Made | 1500mg Reduced L-Glutathione | Skin Whitening, Anti-Aging & Scar Reduction | 5 Sessions",
  "details": "<strong>Dr. James Glutathione Injection — Advanced Skin Whitening & Anti-Aging Therapy</strong><br/><br/>Trusted worldwide, this USA-made, FDA-approved skin whitening therapy offers a safe, effective, and fast way to achieve brighter, youthful, and even-toned skin. Designed with the purest ingredients, it whitens the skin while nourishing, repairing, and rejuvenating from within.<br/><br/>Unlike creams or serums that work only on the surface, Dr. James Glutathione Injection works at the cellular level to reduce melanin production, improve skin clarity, and restore youthful glow.<br/><br/><strong>Powerful Ingredients (Per Session):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Reduced L-Glutathione:</strong> 1500mg — Master antioxidant for advanced whitening and detoxification</li><li><strong>Vitamin C:</strong> 1000mg — Boosts Glutathione efficiency, brightens skin, promotes collagen production</li><li><strong>Alpha Lipoic Acid:</strong> 300mg — Strong antioxidant that reduces signs of aging and improves smoothness</li><li><strong>Nano Collagen:</strong> 200mg — Enhances elasticity, firmness, and hydration</li><li><strong>Epidermal Growth Factor (EGF):</strong> 100mg — Accelerates skin healing, reduces scars, promotes regeneration</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin Whitening & Brightening — natural pinkish glow</li><li>Anti-Aging Support — fights wrinkles, fine lines, early aging signs</li><li>Scar & Pigmentation Reduction — fades acne scars, dark spots, uneven patches</li><li>Clear, Smooth Skin — reduces acne and pimples by lowering oxidative stress</li><li>Skin Rejuvenation & Glow — restores hydration, improves elasticity, promotes cellular repair</li><li>Quick Visible Results — noticeable improvement within a few sessions</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Dr James<br/>Form: Injection<br/>Country of Origin: USA<br/>Packaging Qty: 1 Box Pack (5 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening<br/>Expiry: December 2028<br/><br/><strong>Recommended Dosage:</strong> Administered under professional medical supervision only. Mix ampoule with vial, add sterile water, inject via IV or butterfly syringe as advised by a doctor.<br/><br/><strong>FAQs:</strong> Suitable for both men and women, all skin types. Visible improvements within 5–10 sessions. Helps with acne and pigmentation.<br/><br/><strong>Note:</strong> Results may vary from person to person. Professional medical supervision required.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: FDA-approved formulation. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Skin Whitening & Brightening (Pinkish Glow)",
    "Anti-Aging Support",
    "Scar & Pigmentation Reduction",
    "Clear, Smooth Skin (Reduces Acne)",
    "Skin Rejuvenation & Glow",
    "Quick Visible Results"
  ],
  "sku": "DRJAMES-1500-5S-USA",
  "volume": "1 Box Pack (5 Sessions)"
},
{
  "id": 72,
  "name": "Neutro Skin Avocado & Apple Stem Cell Glutathione Injection",
  "category": "Injection",
  "brand": "Neutro",
  "price": 10500,
  "image": "/image/neutro_skin_avocado_apple.jpeg",
  "description": "Avocado & Apple Stem Cell Enriched | French-Made | 4 Sessions | Skin Whitening, Anti-Aging & Deep Nourishment",
  "details": "<strong>Neutro Skin Avocado & Apple Stem Cell Glutathione Injection — Revolutionary Whitening & Rejuvenation</strong><br/><br/>This innovative formula combines the power of glutathione with the nourishing benefits of avocado and apple stem cells. It targets pigmentation, promotes even skin tone, and enhances skin radiance. Infused with antioxidants, it helps combat free radicals, leaving your skin looking youthful and vibrant. Made in France.<br/><br/><strong>Ingredients (Per Box — 4 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione Avocado Extract:</strong> 3,600mg</li><li><strong>Epidermal Growth Factor (EGF):</strong> 1,500mg</li><li><strong>Kojic Acid:</strong> 5,000mg</li><li><strong>Hyaluronic Acid:</strong> 1,000mg</li><li><strong>Collagen Extract:</strong> 3,000mg</li><li><strong>Apple Stem Cell Extract:</strong> 500mg</li><li><strong>Multivitamin:</strong> 800mg</li><li><strong>Selenium:</strong> 500mg</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 1,200mg</li><li><strong>Coenzyme Q10:</strong> 620mg</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Brightens skin complexion effectively</li><li>Reduces dark spots and hyperpigmentation</li><li>Promotes an even skin tone</li><li>Enhances skin elasticity and firmness</li><li>Provides antioxidant protection against free radicals</li><li>Nourishes and hydrates skin deeply</li><li>Revitalizes dull and tired skin</li><li>Supports collagen production for youthful skin</li><li>Helps reduce signs of aging</li><li>Safe for all skin types (including sensitive)</li><li>Improves overall skin texture</li><li>Provides radiant, luminous glow</li><li>Protects against environmental damage</li><li>Fast-acting with visible results</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Country of Origin: France<br/>Packaging: 1 Box (4 Sessions)<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Visible improvements within a few weeks. Results can last several months depending on skin type and aftercare. Regular maintenance treatments prolong effects.<br/><br/><strong>FAQs:</strong> Safe for all skin types. Can be combined with other skincare treatments — consult a dermatologist.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Individual results may vary.</em>",
  "benefits": [
    "Brightens Skin Complexion",
    "Reduces Dark Spots & Hyperpigmentation",
    "Promotes Even Skin Tone",
    "Enhances Elasticity & Firmness",
    "Antioxidant Protection",
    "Deep Nourishment & Hydration",
    "Revitalizes Dull Skin",
    "Supports Collagen Production",
    "Reduces Signs of Aging",
    "Improves Skin Texture",
    "Radiant & Luminous Glow"
  ],
  "sku": "NEUTRO-AVOCADO-APPLE-4S-FR",
  "volume": "1 Box (4 Sessions)"
},
{
  "id": 73,
  "name": "Nouveaux IV Picomized Phytowhite Hexa Peptide Collagen Drink",
  "category": "Injection",
  "brand": "Nouveaux IV",
  "price": 23100,
  "image": "/image/nouveaux_iv_phytowhite_collagen_drink.jpeg",
  "description": "Oral Collagen Drink | Picomized Hydrolyzed Collagen + Phytowhite Complex + Hexa Peptides | Hydration, Brightening & Anti-Aging",
  "details": "<strong>Nouveaux IV Picomized Phytowhite Hexa Peptide Collagen Drink — Advanced Oral Beauty Supplement</strong><br/><br/><strong>Important:</strong> This is an oral collagen drink – NOT an injectable solution.<br/><br/>Boost skin radiance with this advanced formula that promotes hydration, brightening, and anti-aging from within. The picomized technology ensures optimal absorption of active ingredients.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Picomized Hydrolyzed Collagen Peptides:</strong> Ultra-absorbable collagen for skin elasticity and firmness</li><li><strong>Phytowhite Complex (Glutathione + Botanical Extracts):</strong> Natural skin brightening and antioxidant protection</li><li><strong>Hexa Peptides:</strong> Supports collagen synthesis and reduces fine lines</li><li><strong>Hyaluronic Acid:</strong> Deep hydration and plumping effect</li><li><strong>Coenzyme Q10 (CoQ10):</strong> Cellular energy and anti-aging</li><li><strong>Vitamins C & E:</strong> Powerful antioxidants for skin protection and glow</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin brightening and even tone</li><li>Deep hydration and moisture retention</li><li>Anti-aging and wrinkle reduction</li><li>Improves skin elasticity and firmness</li><li>Antioxidant protection against free radicals</li><li>Supports collagen production from within</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Oral Collagen Drink (Liquid)<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/><br/><strong>Usage:</strong> Consume as directed on packaging. For best results, use consistently as part of daily skincare routine.<br/><br/><strong>Important Notice:</strong> Please consult a dermatologist before placing an order for any skin brightening supplements, as results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: This is a dietary supplement, not a substitute for a balanced diet. Results may vary. Store in a cool, dry place.</em>",
  "benefits": [
    "Skin Brightening & Even Tone",
    "Deep Hydration",
    "Anti-Aging & Wrinkle Reduction",
    "Improves Elasticity & Firmness",
    "Antioxidant Protection",
    "Collagen Production Support"
  ],
  "sku": "NOUVEAUX-PHYTOWHITE-DRINK",
  "volume": "Single Pack (Oral Collagen Drink)"
},
{
  "id": 74,
  "name": "Miracle White Advance 50000mg Glutathione Skin Whitening Injections",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 12449,
  "image": "/image/miracle_white_advance_50000mg.jpeg",
  "description": "Ultra-High Potency Swiss Formula | 50,000mg Glutathione + EGF + CoQ10 | 6 Sessions | Dramatic Skin Whitening, Anti-Aging & Collagen Synthesis",
  "details": "<strong>Miracle White Advance 50000mg Glutathione Skin Whitening Injections — Revolutionary Whitening & Anti-Aging Formula</strong><br/><br/>Experience the ultimate in skin whitening with this unprecedented 50,000mg glutathione formula. Clinically proven to dramatically reduce melanin production and reveal a brighter, more radiant complexion. Rich in antioxidants, it shields skin from environmental stressors and promotes collagen synthesis for a smoother, more youthful appearance.<br/><br/>With EGF (Epidermal Growth Factor) and multivitamins, this latest Miracle White formula includes anti-aging properties. Kojic acid lightens sun damage, age spots, and scars with antimicrobial benefits. Alpha-lipoic acid reduces inflammation and skin aging.<br/><br/><strong>Ingredients Composition (Per Box — 6 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Coenzyme Q10:</strong> 50,000mg — Protects skin from environmental exposure, reduces stress and toxins</li><li><strong>Nano Concentrated Glutathione:</strong> 50,000mg — Reduces oxidative stress, improves toxic impurities, promotes healthy brighter skin</li><li><strong>Cyanocobalamin (Vitamin B12):</strong> 250mg — Reduces redness and inflammation, smooths texture</li><li><strong>Kojic Acid:</strong> 2,600mg — Safe skin lightener, reduces pigmentation</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 2,800mg — Reduces fine lines, wrinkles, dark spots; boosts collagen</li><li><strong>Epidermal Growth Factor (EGF):</strong> 1,800mg — Boosts collagen, reduces melanin production, faster whitening</li><li><strong>Multivitamin:</strong> 700mg — Calms skin, eliminates wrinkles and sagging, maintains firmness and elasticity</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 700mg — Antioxidant for youthful skin tone and texture</li><li><strong>Melanin Inhibitor:</strong> 500mg — Reduces melanin formation for bright, glowing skin</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Whitening and lightening of skin tone</li><li>Removes dark spots and scars</li><li>Boosts collagen production for elasticity</li><li>Minimizes pores and prevents acne</li><li>Anti-aging — reduces fine lines and signs of aging</li><li>Repair of damaged skin and regeneration of new cells</li><li>Enhances skin texture, moisturizes</li><li>Fair, radiant, lifted, tighter, youthful-looking skin</li><li>Eliminates skin blemishes</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Switzerland<br/>Packaging: 1 Box (6 Sessions)<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/>Tags: Anti-Aging, Antioxidant, Skin Whitening<br/><br/><strong>Usage:</strong> Professional administration only. Results depend on individual metabolism. Consult a dermatologist before use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results may vary. For external use by licensed practitioners only.</em>",
  "benefits": [
    "Dramatic Skin Whitening & Lightening",
    "Removes Dark Spots & Scars",
    "Boosts Collagen Production",
    "Minimizes Pores & Prevents Acne",
    "Anti-Aging — Reduces Fine Lines",
    "Repairs Damaged Skin & Regenerates Cells",
    "Enhances Skin Texture & Moisturizes",
    "Fair, Radiant, Youthful-Looking Skin",
    "Eliminates Skin Blemishes"
  ],
  "sku": "MIRACLE-WHITE-ADV-50000-6S",
  "volume": "1 Box (6 Sessions)"
},
{
  "id": 75,
  "name": "Biocell Renovation with Gluta 12000000mg Skin Whitening Injection",
  "category": "Injection",
  "brand": "Biocell",
  "price": 12480,
  "image": "/image/biocell_renovation_gluta.jpeg",
  "description": "Ultra-High Strength 12,000,000mg Glutathione | 10 Sets | Collagen + Hyaluronic Acid + CoQ10 + Argan Stem Cell | Skin Whitening & Cellular Renovation",
  "details": "<strong>Biocell Renovation with Gluta 12000000mg — Transformative Cellular Renovation Injection</strong><br/><br/>This advanced formula combines ultra-high strength GLUTblanc (Nano Extract 12,000,000mg glutathione) with a comprehensive blend of collagen, amino acids, hyaluronic acid, stem cells, and coenzyme Q10 for complete skin whitening and cellular renovation.<br/><br/><strong>Key Ingredients (Per 10-Set Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>GLUTblanc (Nano Extract Glutathione):</strong> 12,000,000mg — Ultra-concentrated master antioxidant for intense whitening</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 50,000mg — Brightening and collagen support</li><li><strong>Solution Collagen d'Extrit:</strong> 40,000mg — Skin elasticity and firmness</li><li><strong>Aminox Essential Amino Acids:</strong> 50,000mg — Cellular repair and renewal</li><li><strong>Hesperidin:</strong> 40,000mg — Bioflavonoid antioxidant</li><li><strong>Hyaluronic Acid:</strong> 40,000mg — Deep hydration and plumping</li><li><strong>Argan Stem Cell (Placenta):</strong> 20,000mg — Regeneration and rejuvenation</li><li><strong>Chromosome:</strong> 20,000mg — Cellular level support</li><li><strong>Coenzyme Q10:</strong> 60,000mg — Anti-aging and cellular energy</li><li><strong>Collagen:</strong> Included in complex</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection (I.M. / I.V.)<br/>Packaging: 10 Sets Injection per Box<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/><br/><strong>Preparation:</strong> Dissolve glutathione in 5-10 ml sterile water before administration.<br/><br/><strong>Usage:</strong> Professional intramuscular or intravenous administration only. Consult a dermatologist before use.<br/><br/><strong>Important Notice:</strong> Results depend on individual body metabolism. Not recommended for pregnant/breastfeeding women, those with vitamin allergies, or cardiovascular patients.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Verify product authenticity. Individual results may vary.</em>",
  "benefits": [
    "Ultra-High Strength Skin Whitening",
    "Cellular Renovation & Repair",
    "Deep Hydration with Hyaluronic Acid",
    "Collagen Boost for Elasticity",
    "Anti-Aging with CoQ10",
    "Stem Cell Regeneration",
    "Antioxidant Protection"
  ],
  "sku": "BIOCELL-RENOVATION-12M-10S",
  "volume": "10 Sets Injection (I.M./I.V.)"
},
{
  "id": 76,
  "name": "Glutanex Glow Skin Booster and Mesotherapy Solution by Nexus Pharma",
  "category": "Injection",
  "brand": "Nexus Pharma",
  "price": 13950,
  "image": "/image/glutanex_glow_skin_booster.jpeg",
  "description": "Korean Advanced Skin Booster Vials | Glutathione + PDRN + Peptides | Brightening, Hydration & Anti-Aging | 5 x 4mL | Mesotherapy or Topical Use",
  "details": "<strong>Glutanex Glow By Nexus Pharma — Professional Skin Brightening & Rejuvenation</strong><br/><br/>Glutanex Glow is a high-performance skin booster vials developed by Nexus Pharma, a trusted name in Korean medical skincare. Designed for instant glow and long-term skin transformation, this advanced mesotherapy solution combines Glutathione and PDRN to brighten, hydrate, and visibly rejuvenate your skin. Suitable for all skin types, including sensitive or aging skin.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> Powerful antioxidant that detoxifies skin and brightens dull, uneven tones</li><li><strong>PDRN (Polydeoxyribonucleotide):</strong> DNA-based repair molecule that promotes tissue regeneration and skin elasticity</li><li><strong>Peptides & Growth Factors (Acetyl Hexapeptide-8, Sh-Oligopeptides, Octapeptides):</strong> Reduce fine lines and improve skin vitality</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Instant Radiance & Skin Brightening — inhibits melanin, reduces pigmentation</li><li>Tighter, Smoother Skin Texture — refines pores</li><li>Anti-Aging & Skin Repair — stimulates collagen production, enhances firmness and elasticity</li><li>Intensive Hydration — locks in moisture, strengthens skin barrier</li><li>Regenerative Power — aids cell turnover and skin renewal</li></ul><br/><strong>Product Specifications:</strong><br/>Pack Size: 1 Box — 5 vials × 4 mL each (Total 20 mL)<br/>Form: Lightweight, fast-absorbing vials serum<br/>Country of Origin: South Korea<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Application Methods:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Topical:</strong> Apply 2–3 drops to cleansed face and gently massage until absorbed</li><li><strong>Professional Use:</strong> Suitable for microneedling (MTS), derma pen, or mesotherapy sessions (3 mL recommended per session)</li></ul><br/><strong>Storage:</strong> Store between 1–30°C in a dry place, protect from direct sunlight. For external use only.<br/><br/><strong>FAQs:</strong> Use 1–2 times per week. Visible glow after first application. Safe for sensitive skin. Not for IV use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Dermatologist-tested. For external professional or home use. Results may vary.</em>",
  "benefits": [
    "Instant Radiance & Skin Brightening",
    "Tighter, Smoother Skin Texture",
    "Anti-Aging & Skin Repair",
    "Intensive Hydration",
    "Regenerative Power (Cell Turnover)"
  ],
  "sku": "GLUTANEX-GLOW-5X4ML",
  "volume": "5 vials × 4 mL (Total 20 mL)"
},
{
  "id": 77,
  "name": "Glutax 2500 GS Elixir Essence Skin Whitening Injection 12 Sessions",
  "category": "Injection",
  "brand": "Glutax",
  "price": 14499,
  "image": "/image/glutax_2500gs_elixir_essence.jpeg",
  "description": "Italian-Made Whitening Injection | Glutathione + EGF + Collagen + CoQ10 | 12 Sessions | Reduces Melanin, Firms Skin, Anti-Aging & UV Protection",
  "details": "<strong>Glutax 2500 GS Elixir Essence Glutathione Skin Whitening Injection — Premium Italian Formula</strong><br/><br/>Regardless of age and gender, people desire soft, plump, spotless skin. Glutax 2500 GS has the power to reduce melanin and make skin spotless. Recognized worldwide as one of the best spa and skin whitening injection products, it contains a high amount of L-Glutathione along with Vitamin C to restore good skin texture. The effectiveness of Glutathione has been approved by pathologists in Italy.<br/><br/><strong>Complete Kit (12 Sessions — 12 Vials + 24 Ampoules):</strong><br/><br/><strong>12 Vials:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 2500g</li><li><strong>EGF (Epidermal Growth Factor):</strong> 2000mg</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 3000mg</li><li><strong>Liptocin:</strong> 500mg</li><li><strong>Kojic Acid:</strong> 500mg</li><li><strong>Pro Coenzyme Q10:</strong> 600mg</li><li><strong>Cinnamomum Subavenium Extract:</strong> 350mg</li></ul><br/><strong>12 Ampoules (5ml) — Thioctic Acid 800mg + Multivitamins 3500mg + Collagen 900mg + Selenium 600mg</strong><br/><br/><strong>12 Ampoules (2ml) — Vitamin B1 100mg + Vitamin B6 50mg + Vitamin B12 1000mcg + Recombined 800mg + Grape, Apple, Argan Fruit, Rose Placenta Extract</strong><br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Nourishes and firms the skin</li><li>Whitens skin and lightens scars</li><li>Boosts collagen production and enhances elasticity</li><li>Moisturizes, hydrates, firms, smoothens, and softens skin</li><li>Reduces pigmentation caused by sun exposure</li><li>Smoothens fine lines and wrinkles</li><li>Suppresses acne, blemishes, pimples</li><li>Minimizes pores and improves complexion</li><li>Removes excess free radicals</li><li>Prevents aging and acts as anti-wrinkle</li><li>UV protection — resists UV damage and collagen destruction</li><li>Antioxidant and detoxifier</li><li>Brighter, smoother, flawless whole-body complexion</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Italy<br/>Packaging: 1 Box (12 Sessions — 12 Vials + 24 Ampoules)<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Results depend on individual metabolism. Consult a dermatologist before use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Individual results may vary. For licensed use only.</em>",
  "benefits": [
    "Nourishes & Firms Skin",
    "Whitens Skin & Lightens Scars",
    "Boosts Collagen & Elasticity",
    "Moisturizes & Hydrates",
    "Reduces Sun-Induced Pigmentation",
    "Smoothens Fine Lines & Wrinkles",
    "Suppresses Acne & Blemishes",
    "Minimizes Pores",
    "UV Protection",
    "Antioxidant & Detoxifier",
    "Flawless Whole-Body Complexion"
  ],
  "sku": "GLUTAX-2500GS-ELIXIR-12S-IT",
  "volume": "12 Sessions (12 Vials + 24 Ampoules)"
},
{
  "id": 78,
  "name": "Glutax 75GX TCRP Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 15870,
  "image": "/image/glutax_75gx_tcrp.jpeg",
  "description": "Advanced Tri-Cell Repair Power (TCRP) Technology | High-Dose Glutathione | 14 Sessions | Intense Skin Brightening, Anti-Aging & Cellular Detox",
  "details": "<strong>Glutax 75GX TCRP Glutathione Skin Whitening Injection — Next-Generation Skin Transformation</strong><br/><br/>Want brighter, flawless, and youthful skin? Meet Glutax 75GX TCRP, the next-generation glutathione skin whitening injection infused with advanced Tri-Cell Repair Power (TCRP) technology and high-dose glutathione. This revolutionary injectable treatment is the ultimate choice for a smooth, even-toned, and radiant complexion. Formulated for visible transformation, it works deep within skin layers to reduce pigmentation, reverse aging signs, and restore natural glow with medical-grade skin science.<br/><br/><strong>What is Glutax 75GX TCRP?</strong><br/>A premium glutathione skin whitening injection treatment designed with Tri-Cell Repair Power – a breakthrough in skin regeneration. It delivers a powerful blend of glutathione and skin-rejuvenating agents to detoxify the body, brighten skin tone, and boost cellular repair. Goes beyond fairness – offering hydration, elasticity, anti-aging support, and full-body skin clarity.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Intense Skin Brightening:</strong> Targets melanin production, visibly brightening skin tone and fading stubborn pigmentation</li><li><strong>Reduces Dark Spots and Hyperpigmentation:</strong> Brightens blemishes, sun spots, and uneven patches for smooth complexion</li><li><strong>Youth-Boosting Effects:</strong> Firms sagging skin, minimizes fine lines, improves skin elasticity</li><li><strong>Deep Hydration Support:</strong> Enhances skin moisture retention for soft, supple, dewy skin</li><li><strong>Detoxification at Cellular Level:</strong> Flushes out toxins and impurities, promoting skin clarity and healthier glow</li><li><strong>Accelerates Skin Repair:</strong> Boosts collagen regeneration and heals damaged tissues for long-lasting radiance</li><li><strong>Protection from Environmental Damage:</strong> Shields skin from pollution, sun damage, and free radicals using potent antioxidants</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection (IV or IM)<br/>Packaging: 1 Box — 14 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/>Origin: Imported<br/><br/><strong>Dosage & How to Use:</strong><br/>Recommended Usage: 1 whitening injection per week under medical supervision<br/>Treatment Cycle: 14 sessions recommended for full visible results<br/>Post-Treatment Maintenance: 1 injection every 15–20 days to maintain skin glow and clarity<br/><br/><strong>Pro Tip:</strong> Drink plenty of water, follow a nutrient-rich diet, and avoid direct sun exposure during treatment phase for best results.<br/><br/><strong>Why It Stands Out:</strong> Advanced TCRP technology for faster skin repair and enhanced absorption. High glutathione strength for visible whitening and detox benefits. Safe, certified formulation trusted by skincare professionals worldwide. No harmful preservatives or additives.<br/><br/><strong>FAQs:</strong> Suitable for all skin types including sensitive. Initial glow seen after 3–4 sessions; full transformation after 14 sessions. Safe for long-term use when administered by trained professional.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Administer under medical supervision. Results depend on individual metabolism. Consult a dermatologist before use.</em>",
  "benefits": [
    "Intense Skin Brightening",
    "Reduces Dark Spots & Hyperpigmentation",
    "Youth-Boosting (Firms Sagging Skin, Minimizes Fine Lines)",
    "Deep Hydration Support",
    "Cellular Detoxification",
    "Accelerates Skin Repair & Collagen Regeneration",
    "Protection from Environmental Damage"
  ],
  "sku": "GLUTAX-75GX-TCRP-14S",
  "volume": "1 Box (14 Sessions)"
},
{
  "id": 79,
  "name": "Glutax 990000GH DualNA Hydra Skin Whitening Injection 4 Sessions",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11180,
  "image": "/image/glutax_990000gh_dualna_hydra.jpeg",
  "description": "Italian DualNA Hydra Formula | 990,000g Glutathione + DNA/RNA Complex + Stem Cells | 4 Sessions | Deep Whitening, Cellular Repair & Anti-Aging",
  "details": "<strong>Glutax 990000GH DualNA Hydra Skin Whitening Injection — Advanced Italian Skin Science</strong><br/><br/>Manufactured by Derma Medical Skin Sciences (Italy), this premium injection combines ultra-high strength glutathione with DNA/RNA Hydra technology, stem cell extracts, and growth factors. It effectively combats glutathione accumulation disorders, neutralizes free radicals, and provides comprehensive skin whitening, detoxification, and anti-aging benefits.<br/><br/><strong>Key Ingredients (per 4-session box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>DNA/RNA Hydra Glutathione:</strong> 990,000g — Ultra-concentrated master antioxidant for intense whitening</li><li><strong>DNA/RNA Hydra Multivitamin:</strong> 180,000mg — Comprehensive skin nourishment</li><li><strong>DNA/RNA Epidermal Growth Factor (EGF):</strong> 12,500mg — Cellular regeneration and repair</li><li><strong>DNA/RNA Hydra Collagen Extract:</strong> 9,000mg — Skin firmness and elasticity</li><li><strong>DNA/RNA Alfa Lipoic Acid:</strong> 9,000mg — Anti-aging antioxidant</li><li><strong>DNA/RNA Hydra White Elements:</strong> 5,800mg — Skin brightening complex</li><li><strong>DNA/RNA Hydra Selenio (Selenium):</strong> 5,000mg — Antioxidant and metabolism support</li><li><strong>DNA/RNA Recombined Stemcell (Multi Fruits & Plants Stemcell Extract):</strong> 1,880mg — Skin rejuvenation and renewal</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Effective skin whitening and lightening</li><li>Combats harmful effects of excessive glutathione accumulation</li><li>Powerful antioxidant neutralizes oxygen free radicals</li><li>Prevents cataracts, neurodegenerative diseases (Alzheimer's, Parkinson's)</li><li>Slows aging process and delays signs of aging</li><li>Protects eyes from age-related diseases</li><li>No pain, no side effects — safe alternative to expensive laser therapies</li><li>Also available as oral supplement (consult doctor)</li></ul><br/><strong>Product Specifications:</strong><br/>Manufacturer: Derma Medical Skin Sciences — Via K. Marx 18, Noverasco di Opera MI 20090, Italy<br/>Country of Origin: Italy<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/>Treatment: 4 Sessions per box<br/><br/><strong>Usage:</strong> Professional IV administration. Glutathione treatments are generally given twice a day for about two weeks. Do not use without consulting a doctor. Not for those allergic to glutathione or with pacemakers.<br/><br/><strong>Important Notice:</strong> Please consult a dermatologist before placing an order for glutathione IV infusion injections, as results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results vary by individual. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Intense Skin Whitening",
    "Powerful Antioxidant & Detoxification",
    "Anti-Aging & Delays Signs of Aging",
    "Cellular Repair & Regeneration (DNA/RNA + EGF)",
    "Collagen Boost for Firmness",
    "Protects Against Neurodegenerative Diseases",
    "Safe & Painless — No Side Effects"
  ],
  "sku": "GLUTAX-990000GH-DUALNA-4S-IT",
  "volume": "4 Sessions (1 Box)"
},
{
  "id": 80,
  "name": "Bihaku Japan Premium Glutathione 10,000mg Injection",
  "category": "Injection",
  "brand": "Bihaku Japan",
  "price": 16000,
  "image": "/image/bihaku_japan_glutathione.jpeg",
  "description": "Japanese High-Potency Formula | 10,000mg Glutathione + NAD + EGF | Skin Whitening, Anti-Aging & Cellular Repair | Professional-Grade Treatment",
  "details": "<strong>Bihaku Japan Premium Glutathione 10,000mg Injection — Advanced Japanese Skincare Technology</strong><br/><br/>Inspired by modern Japanese skincare technology, this high-performance injectable formula provides deep skin whitening, anti-aging benefits, and cellular repair. Unlike topical creams that work only on the surface, this treatment works from within the body, targeting the root causes of skin damage for long-lasting improvements.<br/><br/>This professional-grade treatment is widely used in aesthetic procedures to improve skin clarity, reduce pigmentation, and enhance overall skin health at a cellular level.<br/><br/><strong>Powerful Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 10,000mg — Brightens skin, inhibits melanin production, detoxifies the body</li><li><strong>NAD (Nicotinamide Adenine Dinucleotide):</strong> 5,000mg — Supports cellular repair and energy production</li><li><strong>EGF (Epidermal Growth Factor):</strong> 1,800mg — Stimulates collagen production and skin renewal</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 20,000mg — Enhances glow, boosts immunity, collagen support</li><li><strong>Alpha Lipoic Acid:</strong> 500mg — Protects against free radical damage</li><li><strong>Stem Cells:</strong> 50,000 IU — Supports regeneration and repair</li><li><strong>Placenta Extract:</strong> 800mg — Improves hydration and elasticity</li><li><strong>Natural Collagen:</strong> 980mg — Strengthens skin structure</li><li><strong>Tranexamic Acid:</strong> 500mg — Reduces pigmentation and melasma</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Whitening & Brightening:</strong> Reduces pigmentation, dark spots, and uneven skin tone for a brighter, more radiant complexion</li><li><strong>Anti-Aging Support:</strong> Minimizes wrinkles and fine lines while improving skin firmness and elasticity</li><li><strong>Detoxification:</strong> Glutathione acts as a natural detoxifier, protecting skin from oxidative stress and environmental damage</li><li><strong>Improved Skin Texture:</strong> Smoother, softer, more hydrated skin with regular use</li><li><strong>Collagen Boosting:</strong> EGF and collagen extracts enhance skin structure and firmness</li><li><strong>Cellular Repair:</strong> Promotes deep skin healing and regeneration for long-term results</li></ul><br/><strong>Why Choose Bihaku Japan:</strong> High potency (10,000mg Glutathione) for stronger results. Multi-action approach combining whitening, anti-aging, detox, and repair. Faster internal results than topical products. Professional-grade with reliable outcomes.<br/><br/><strong>Usage & Application:</strong> Intended for professional use only. Administered by trained medical professionals. Frequency depends on individual skin needs.<br/><br/><strong>Suitable For:</strong> Individuals with dull/uneven skin tone, pigmentation or dark spots, those seeking anti-aging solutions, anyone wanting brighter, glowing skin or advanced skin repair and detox.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Consult a dermatologist before use. Results depend on individual metabolism. Professional medical supervision required.</em>",
  "benefits": [
    "Skin Whitening & Brightening",
    "Anti-Aging Support (Wrinkles & Fine Lines)",
    "Detoxification & Oxidative Stress Protection",
    "Improved Skin Texture & Hydration",
    "Collagen Boosting",
    "Cellular Repair & Regeneration"
  ],
  "sku": "BIHAKU-JP-10000-1BX",
  "volume": "1 Box"
},
{
  "id": 81,
  "name": "NC24 Ultra PDRN Advance Japan 300,000mg Glutathione Injection",
  "category": "Injection",
  "brand": "NC24",
  "price": 12000,
  "image": "/image/nc24_ultra_pdrn_advance_300k.jpeg",
  "description": "Japanese Advanced Regeneration Therapy | 300,000mg Glutathione + PDRN + CoQ10 | 5 Sessions | Skin Whitening, Anti-Aging & Cellular Repair",
  "details": "<strong>NC24 Ultra PDRN Miracle Advance Japan — Premium Glutathione Skin Whitening & Regeneration Therapy</strong><br/><br/>Developed using advanced Japanese technology, this clinically developed formula combines high-strength Glutathione, PDRN, DNA Collagen, Coenzyme Q10, and a multivitamin complex. It targets pigmentation, dullness, uneven skin tone, fine lines, and skin damage, working deep within the skin to promote cellular repair, detoxification, and long-lasting skin rejuvenation.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Intense Skin Whitening:</strong> High-dose Glutathione reduces melanin production</li><li><strong>Skin Repair & Regeneration:</strong> PDRN and DNA components promote deep cellular repair</li><li><strong>Anti-Aging & Wrinkle Reduction:</strong> Minimizes fine lines, wrinkles, and sagging skin</li><li><strong>Collagen Boosting:</strong> Enhances collagen production for firmness and elasticity</li><li><strong>Improves Skin Texture & Tone:</strong> Smoothens rough skin and evens tone</li><li><strong>Powerful Antioxidant Protection:</strong> Shields from free radicals and pollution</li><li><strong>Radiant & Glowing Skin:</strong> Enhances natural glow</li></ul><br/><strong>Key Ingredients (Per 5-Session Pack):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (Ultra Concentrated):</strong> 300,000mg — Master antioxidant for whitening and detox</li><li><strong>PDRN (Polydeoxyribonucleotide):</strong> 1,000mg — Tissue repair and skin regeneration</li><li><strong>DNA Sodium & DNA Collagen:</strong> 2,000mg — Cellular repair and collagen synthesis</li><li><strong>Coenzyme Q10 (CoQ10):</strong> 2,000mg — Anti-aging, protects skin cells</li><li><strong>Multivitamin Complex:</strong> 100,000mg — Nourishes skin, improves complexion</li><li><strong>Fresh Cranberry Extract + Ascorbic Acid:</strong> 6,000mg — Brightening, boosts antioxidant effects</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 3,000mg — Improves skin metabolism and antioxidant protection</li><li><strong>Fibroblast Growth Factor (FGF):</strong> 2,750mg — Stimulates collagen production and skin regeneration</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Country of Origin: Japan<br/>Packaging: 1 Pack (5 Sessions)<br/>Usage: Strictly for professional use only — administer under clinical supervision.<br/><br/><strong>Storage:</strong> Store in cool, dry place away from heat and direct sunlight.<br/><br/><strong>Why Choose NC24:</strong> High-potency multi-ingredient formula combining whitening, anti-aging, and regeneration in one treatment. Ideal for clinics and individuals seeking advanced skin transformation.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: For professional use only. Consult a dermatologist before use. Results depend on individual metabolism. Professional medical supervision required.</em>",
  "benefits": [
    "Intense Skin Whitening",
    "Skin Repair & Regeneration",
    "Anti-Aging & Wrinkle Reduction",
    "Collagen Boosting",
    "Improves Skin Texture & Tone",
    "Powerful Antioxidant Protection",
    "Radiant & Glowing Skin"
  ],
  "sku": "NC24-PDRN-ADV-300K-5S-JP",
  "volume": "1 Pack (5 Sessions)"
},
{
  "id": 82,
  "name": "Biocell Max Pro Renovation with Glutathione Injection",
  "category": "Injection",
  "brand": "Biocell",
  "price": 13790,
  "image": "/image/biocell_max_pro_renovation.jpeg",
  "description": "Ultra-Potent Formula | 100,000,000mg Glutathione + Hyaluronic Acid + CoQ10 + Stem Cells | 10 Sessions | Skin Whitening, Anti-Aging & Deep Hydration",
  "details": "<strong>Biocell Max Pro Renovation with Glutathione Injection — Revolutionary Skincare Solution</strong><br/><br/>Crafted for those who dream of fairer, brighter, and more youthful skin, this high-dose injectable formula is infused with 100,000,000mg of Glutathione. Designed with advanced nano-technology and enriched with potent antioxidants, Biocell Max Pro works from the inside out to enhance natural beauty — safely, effectively, and visibly.<br/><br/><strong>Key Ingredients (Per 10-Session Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 100,000,000mg — Ultimate antioxidant for skin whitening and detoxification</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 100,000mg — Brightens skin and boosts collagen</li><li><strong>Coenzyme Q10:</strong> 100,000mg — Energizes skin cells and fights aging</li><li><strong>Hyaluronic Acid:</strong> 50,000mg — Deep hydration and moisture retention</li><li><strong>Collagen Solution:</strong> 50,000mg — Improves skin firmness and elasticity</li><li><strong>Citrus Aurantium Extract:</strong> 50,000mg — Natural brightening and anti-inflammatory</li><li><strong>Aminox (Essential Amino Acids):</strong> 50,000mg — Cellular nourishment</li><li><strong>Growth Hormone:</strong> 30,000mg — Revives skin's natural youth and vitality</li><li><strong>Argan Stem Cells:</strong> 30,000mg — Regenerates damaged skin, protects from toxins</li><li><strong>Hesperidin:</strong> 5,000mg — Boosts circulation, reduces discoloration</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Boosts natural glow — targets melanin, brightens dull skin</li><li>Reduces dark spots, pigmentation, blemishes, and uneven tone</li><li>Powerful anti-aging effects — firms skin, softens fine lines, promotes elasticity</li><li>Deep hydration & moisture lock with Hyaluronic Acid</li><li>Detoxifies the body — cleanses toxins, improves skin clarity</li><li>Faster skin repair & cell renewal with stem cells and CoQ10</li><li>Protects from pollution, stress, and environmental damage with potent antioxidants</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection (IV or IM)<br/>Packaging: 1 Box — 10 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/>Technology: Swiss technology, safe certified formulation<br/><br/><strong>Dosage & How to Use:</strong><br/>Recommended Usage: 1 set per week (IV or IM as advised by skin specialist)<br/>Full Cycle: Complete 10 sessions for noticeable, long-lasting results<br/>Maintenance: One injection every 15–20 days post-completion<br/><br/><strong>Pro Tips:</strong> Follow a clean diet, hydrate well, and avoid sun exposure during treatment for best results.<br/><br/><strong>Why It Stands Out:</strong> Ultra-high Glutathione strength (100 million mg) for fast visible results. No harmful additives — only pure active ingredients. Trusted by dermatologists and celebrities worldwide. Perfect for Indian skin tones and climate.<br/><br/><strong>FAQs:</strong> Suitable for all skin types. Most users notice improvements within 3–4 sessions; full glow after 10 sessions. Safe for long-term use when recommended by professionals.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results depend on individual metabolism. Consult a dermatologist before use.</em>",
  "benefits": [
    "Boosts Natural Glow",
    "Reduces Dark Spots & Pigmentation",
    "Powerful Anti-Aging Effects",
    "Deep Hydration & Moisture Lock",
    "Detoxifies the Body",
    "Faster Skin Repair & Cell Renewal",
    "Protects from Pollution & Stress"
  ],
  "sku": "BIOCELL-MAX-PRO-10S",
  "volume": "1 Box (10 Sessions)"
},
{
  "id": 84,
  "name": "Bio Rae Nano Complexion 18 Skin Whitening Glutathione Injection",
  "category": "Injection",
  "brand": "Bio Rae",
  "price": 16750,
  "image": "/image/bio_rae_nano_complexion_18.jpeg",
  "description": "Korea's No.1 Advanced Nano Technology Injectables | 180,000mg Nano Glutathione + SLC24A5 Inhibitor | Skin Whitening, Anti-Aging & Cellular Renewal | 4 Sessions",
  "details": "<strong>Bio-Rae Nano Complexion 18 — Korea's No.1 Advanced Skin Whitening & Anti-Aging Injectable Therapy</strong><br/><br/>Developed by Bio-Rae Cosmo Aesthetic Ltd., Korea, this premium whitening system uses Nano technology for faster absorption and visible transformation. It combines 18 powerful active ingredients that work at the DNA and cellular level to rejuvenate, whiten, and repair the skin from within.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Advanced Skin Whitening:</strong> Nano Glutathione (180,000 mg) + SLC24A5 Inhibitor reduce melanin and brighten skin tone</li><li><strong>Anti-Aging & Firmness:</strong> Nano Collagen Peptides and Cerlegen Stem Cells smooth wrinkles, restore elasticity, prevent sagging</li><li><strong>Pigmentation & Dark Spot Reduction:</strong> Kojic Acid and Tranexamic Acid (TXA) fade acne marks, sun damage, hyperpigmentation</li><li><strong>Hydration & Radiance:</strong> Hyaluronic and Ascorbic Acids provide deep moisture for soft, glowing skin</li><li><strong>Cellular Renewal:</strong> Growth Factors, Stem Cells, and Amino Acids enhance cellular repair and tissue regeneration</li><li><strong>Powerful Antioxidant Defense:</strong> Coenzyme Q10 and Vitamin Complexes neutralize free radicals and protect against UV stress</li><li><strong>Even Complexion:</strong> Pearl White Elements and Nano White Cell Enhancers deliver a clear, smooth, flawless tone</li></ul><br/><strong>Premium Ingredients (Per Set — 18 Nano-Formulated Compounds):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Concentrated Glutathione:</strong> 180,000 mg — Master antioxidant for whitening and detoxification</li><li><strong>Nano Ascorbic Acid (Vitamin C):</strong> 8,000 mg — Brightness and collagen production</li><li><strong>Nano Epidermal Growth Factor (N-EGF):</strong> 3,500 mg — Stimulates skin regeneration</li><li><strong>Nano Cyanocobalamin (N-VB12):</strong> 2,500 mg — Improves skin tone and repair</li><li><strong>Amino Acids & DNA Complex:</strong> 2,500 mg — Supports cell renewal and structure</li><li><strong>Premium Pearl White Elements:</strong> 2,500 mg — Natural luminosity</li><li><strong>SLC24A5 Inhibitor:</strong> 2,400 mg — Reduces melanin synthesis for fairer tone</li><li><strong>Coenzyme Q10:</strong> 2,200 mg — Cellular energy, delays aging</li><li><strong>Nano Alpha Lipoic Acid (N-ALA):</strong> 2,000 mg — Fights free radicals and inflammation</li><li><strong>Vitamin B Complex:</strong> 1,250 mg — Maintains skin health and glow</li><li><strong>Premium Cerlegen Stem Cell Extract:</strong> 1,250 mg — Boosts regeneration and youthfulness</li><li><strong>Nano Leontopodium Alpinum Callus Extract (LACCE):</strong> 1,100 mg — UV protection and antioxidant benefits</li><li><strong>Nano Pico-cell:</strong> 1,000 mg — Enhances DNA rejuvenation</li><li><strong>Natural Peptide Collagen:</strong> 650 mg — Improves firmness and smoothness</li><li><strong>Tranexamic Acid (TXA):</strong> 600 mg — Reduces pigmentation and redness</li><li><strong>Nano Bakuchiol Extract:</strong> 800 mg — Natural retinol alternative for smoother texture</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection (IV or IM)<br/>Packaging: 1 Box — 4 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/>Origin: South Korea<br/><br/><strong>Dosage & How to Use:</strong><br/>Recommended: 1–2 sessions per week under professional medical supervision.<br/><br/><strong>Not Suitable For:</strong> Pregnant or breastfeeding women. Always consult a certified medical professional before use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional use only. Results depend on individual metabolism. Consult a dermatologist before use.</em>",
  "benefits": [
    "Advanced Skin Whitening",
    "Anti-Aging & Firmness",
    "Pigmentation & Dark Spot Reduction",
    "Hydration & Radiance",
    "Cellular Renewal",
    "Powerful Antioxidant Defense",
    "Even Complexion"
  ],
  "sku": "BIO-RAE-NANO-18-4S",
  "volume": "1 Box (4 Sessions)"
},
{
  "id": 85,
  "name": "Glutax 22000000gs Extremely Tremendous White Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11999,
  "image": "/image/glutax_22000000gs_extreme_white.jpeg",
  "description": "Ultra-High Potency Italian Formula | 22,000,000mg Nano Glutathione + Sakura + Grape Seed | 10 Sessions | Pink-White Radiance, Melanin Reduction & Deep Hydration",
  "details": "<strong>Glutax 22000000gs Extremely Tremendous White Glutathione Injection — Ultimate Pink-White Asian Glow</strong><br/><br/>The ultimate in white, pink, Japanese-style radiance. This premium Glutax formula contains 22 million milligrams of nano glutathione combined with sakura seed extract (considered an elixir in Japan) and powerful skin-brightening actives. Made in Italy, it delivers a luminous, even-toned complexion with protective benefits against sun damage.<br/><br/><strong>Ingredients Composition:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Glutathione:</strong> 22,000,000 mg — Ultra-concentrated master antioxidant</li><li><strong>Alpha Lipoic Acid:</strong> 200,000 mg — Potent antioxidant precursor</li><li><strong>Growth Factor:</strong> 100,000 mg — Cellular regeneration</li><li><strong>Grape Seed Extract:</strong> 100,000 mg — Creates pinkish glow like newborn skin</li><li><strong>Sakura Extract:</strong> 100,000 mg — White-pink radiance, Japanese beauty secret</li><li><strong>Multivitamin:</strong> 100,000 mg — Comprehensive skin nourishment</li><li><strong>Pro Coenzyme Q10:</strong> 10,000 mg — Anti-aging and cellular energy</li><li><strong>RNA HA:</strong> 10,000 mg — Deep hydration at cellular level</li><li><strong>Natural Collagen:</strong> 50,000 mg — Firmness and elasticity</li><li><strong>Selenium:</strong> 50,000 mg — Immune system support</li><li><strong>Kojic Acid:</strong> 50,000 mg — Melanin inhibition</li><li><strong>RNA White Cells:</strong> 50,000 mg — Brightening complex</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Whitens skin color and reduces dark marks</li><li>Produces collagen for skin lightening and resiliency</li><li>Deep hydration — holds water in skin for long-lasting moisture</li><li>Smoothens fine lines and wrinkles (anti-aging)</li><li>Suppresses acne, blemishes, pimples; reduces pores</li><li>Repairs damaged skin and regenerates new cells</li><li>Enhances skin texture, lifts and tightens skin</li><li>Fair, radiant, youthful-looking complexion</li><li>Eliminates skin blemishes</li><li>Includes sun protection to prevent darkening</li><li>Boosts metabolism, detoxifies, supports immune system</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Italy<br/>Packaging: 1 Box — 10 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved<br/><br/><strong>How to Use:</strong> Reconstitute powder vial with 100ml-500ml saline for injection via IV. Recommended dosage: Intravenous infusion once a week. Follow dermatologist prescription.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use.</em>",
  "benefits": [
    "Whitens Skin & Reduces Dark Marks",
    "Boosts Collagen & Elasticity",
    "Deep Hydration & Moisture Retention",
    "Smoothens Fine Lines & Wrinkles",
    "Suppresses Acne, Blemishes & Pores",
    "Repairs Damage & Regenerates Cells",
    "Fair, Radiant, Youthful Complexion",
    "Sun Protection & Antioxidant Defense"
  ],
  "sku": "GLUTAX-22M-EXTREME-10S-IT",
  "volume": "1 Box (10 Sessions)"
},
{
  "id": 86,
  "name": "JM Prowhite NMN5000 Complexion 12 Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "JM Prowhite",
  "price": 19120,
  "image": "/image/jm_prowhite_nmn5000_complexion12.jpeg",
  "description": "Revolutionary Korean Skin Whitening Treatment | NMN5000 + High-Dose Glutathione + EGF + Stem Cells | 4 Sessions | Brightening, Anti-Aging & Pigmentation Reduction",
  "details": "<strong>JM Prowhite NMN5000 Complexion 12 Glutathione Skin Whitening Injection — Advanced Korean Skincare Innovation</strong><br/><br/>This revolutionary skincare treatment helps achieve a brighter, more even skin tone by combining high-dose glutathione with essential nutrients to combat signs of aging, hyperpigmentation, and skin dullness. Made in South Korea, it addresses acne, blemishes, fine lines, and promotes a smoother, clearer, more luminous complexion.<br/><br/><strong>Key Ingredients (Per 4-Session Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>High-Dose Glutathione:</strong> Potent antioxidant that detoxifies and brightens the skin</li><li><strong>NMN5000 (Nicotinamide Mononucleotide):</strong> Supports cellular energy and anti-aging</li><li><strong>Epidermal Growth Factor (EGF):</strong> Promotes cell renewal and repair</li><li><strong>Vitamin B Complex:</strong> Nourishes skin, improves texture and tone</li><li><strong>Amino Acids & DNA Complex:</strong> Strengthens skin's natural defenses, boosts rejuvenation</li><li><strong>Celergen Stem Cell Extract:</strong> Anti-aging and skin regeneration properties</li><li><strong>Coenzyme Q10 & Alpha Lipoic Acid (ALA):</strong> Potent antioxidants that protect and energize skin</li><li><strong>Ascorbic Acid (Vitamin C) & Tranexamic Acid:</strong> Brighten skin tone and fight hyperpigmentation</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Achieves a brighter, more even skin tone</li><li>Reduces scars, pigmentation, and dark spots</li><li>Revitalizes skin texture — smoother and clearer</li><li>Enhances skin elasticity, reduces fine lines and wrinkles</li><li>Minimizes pores for a flawless complexion</li><li>Combats signs of aging, reveals youthful glow</li><li>Hydrates and nourishes skin, improves overall health</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: South Korea<br/>Packaging: 1 Box — 4 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Start with weekly sessions under professional medical supervision. Adjust frequency based on skin's response and skincare professional's advice. Results vary — many users report visible improvements within a few weeks.<br/><br/><strong>FAQs:</strong> Suitable for all skin types including sensitive. Not a permanent solution — maintain consistent skincare routine. Can be used with other skincare products. Natural, non-invasive treatment.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Results depend on individual metabolism.</em>",
  "benefits": [
    "Brighter, More Even Skin Tone",
    "Reduces Scars, Pigmentation & Dark Spots",
    "Revitalizes Skin Texture",
    "Enhances Elasticity, Reduces Fine Lines & Wrinkles",
    "Minimizes Pores",
    "Combats Signs of Aging",
    "Hydrates & Nourishes Skin"
  ],
  "sku": "JM-PROWHITE-NMN5000-4S-KR",
  "volume": "1 Box (4 Sessions)"
},
{
  "id": 87,
  "name": "Tatio Active Dx 12G Japan Glutathione Injections",
  "category": "Injection",
  "brand": "Tatio Active",
  "price": 10800,
  "image": "/image/tatio_active_dx_12g.jpeg",
  "description": "Japanese High-Dosage Formula | 12G Glutathione Complex | 5 Sessions | Skin Whitening, Anti-Aging, Scar Reduction & UV Protection",
  "details": "<strong>Tatio Active DX Injection 12G — Top-Quality Japanese Glutathione Skin Bleaching Formula</strong><br/><br/>This high-dosage formula provides effective results and is highly recommended by day spas and skin centers worldwide. With an added oral booster, it helps maintain high levels of Glutathione in the body even between treatment sessions. The powerful blend includes Glutathione, Collagen, Vitamin C, Vitamin B2, Placenta, Vitamin E, and Elastin.<br/><br/><strong>Key Ingredients (per 5-session pack):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (12G):</strong> Master antioxidant for skin whitening and detoxification</li><li><strong>Collagen:</strong> Improves skin firmness and elasticity</li><li><strong>Vitamin C:</strong> Brightening and collagen synthesis</li><li><strong>Vitamin B2:</strong> Supports skin health and metabolism</li><li><strong>Placenta Extract:</strong> Promotes regeneration and rejuvenation</li><li><strong>Vitamin E:</strong> Antioxidant protection and moisturizing</li><li><strong>Elastin:</strong> Enhances skin elasticity and resilience</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Nourishes and firms the skin</li><li>Lightens scars and pigmentation caused by sun exposure</li><li>Produces collagen and enhances skin elasticity</li><li>Moisturizes and hydrates the skin</li><li>Reduces fine lines and wrinkles</li><li>Acts as anti-aging — activates cells and rejuvenates skin</li><li>Improves skin lightening, firming, and whitening</li><li>Improves metabolism</li><li>Protective layer against UV damage and collagen destruction, preventing sun pigmentation, wrinkles, and premature aging</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Tatio Active<br/>Form: Injection<br/>Country of Origin: Japan<br/>Packaging Qty: 1 Box Pack (5 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione, Collagen, Vitamin C, Vitamin B2, Placenta, Vitamin E, Elastin<br/>Usage/Application: Skin Whitening<br/><br/><strong>Administration:</strong> Intravenous (IV) or Intramuscular (IM).<br/><br/><strong>Recommended Dosage:</strong> Twice a week for a maximum of two months to achieve desired complexion, then reduce to one or two injections per month or as prescribed by a doctor. Consult a dermatologist before use, especially if you have any medical history.<br/><br/><strong>Suitable For:</strong> Commercial, clinical, personal, or hospital use.<br/><br/><strong>Note:</strong> Results may vary from person to person.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Nourishes & Firms Skin",
    "Lightens Scars & Sun-Induced Pigmentation",
    "Produces Collagen & Enhances Elasticity",
    "Deep Moisturization & Hydration",
    "Reduces Fine Lines & Wrinkles",
    "Anti-Aging & Cellular Rejuvenation",
    "Improves Skin Lightening & Whitening",
    "UV Protection & Prevents Premature Aging"
  ],
  "sku": "TATIO-ACTIVE-DX-12G-5S-JP",
  "volume": "1 Box Pack (5 Sessions)"
},
{
  "id": 88,
  "name": "Aqua Skin Glyco White Skin Whitening Injection",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 12800,
  "image": "/image/aqua_skin_glyco_white.jpeg",
  "description": "Swiss-Made Glycolic & Glutathione Formula | Gradual Even-Toned Whitening | Enriched with Stem Cells, EGF & Hyaluronic Acid",
  "details": "<strong>Aqua Skin Glyco White Skin Whitening Injection — Effective & Safe Swiss Whitening Solution</strong><br/><br/>Manufactured by Skinnic lab Suisse (Geneva, Switzerland), this advanced formula combines Glyco-Glutathione with glycolic acid, stem cells, growth factors, and essential nutrients to provide gradual, even-toned whitening results while enhancing natural beauty.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glyco-Glutathione:</strong> Advanced whitening and detoxification</li><li><strong>Ultra Glycolic Acid:</strong> Exfoliates and brightens skin texture</li><li><strong>L-Ascorbic Acid (Vitamin C):</strong> Collagen support and antioxidant</li><li><strong>Epidermal Growth Factor (EGF):</strong> Cellular regeneration and repair</li><li><strong>Hyaluronic Acid:</strong> Deep hydration and plumping</li><li><strong>Natural Collagen Extract:</strong> Firmness and elasticity</li><li><strong>Alpha Lipoic Acid (ALA) & Thioctic Acid:</strong> Potent anti-aging antioxidants</li><li><strong>Co-Enzyme Pro Q10:</strong> Cellular energy and skin vitality</li><li><strong>Dual DNA & RNA Extract + Selenium:</strong> Cellular repair and antioxidant defense</li><li><strong>Combined Fruit Stem Cell:</strong> Regeneration and rejuvenation</li><li><strong>Kojic Acid:</strong> Melanin inhibition and spot fading</li><li><strong>Nano-Peptide:</strong> Collagen stimulation and firming</li><li><strong>Ultra Pico-Cell & Cyanocobalamin (B12):</strong> Skin renewal and tone improvement</li><li><strong>Ginkgo Biloba Extract:</strong> Circulation and antioxidant protection</li><li><strong>Glyco White Elements & Multivitamin:</strong> Comprehensive brightening and nourishment</li></ul><br/><strong>Benefits:</strong> Gradual even-toned whitening, safe and effective formulation, skin brightening, hydration, anti-aging, cellular repair, collagen boost, pigmentation reduction, improved elasticity and firmness.<br/><br/><strong>Product Specifications:</strong><br/>Manufacturer: Skinnic lab Suisse — Rue Jacques Grosselin 8, 1121 Geneva 26, Switzerland<br/>Country of Origin: Switzerland<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/><br/><strong>Usage:</strong> Professional administration only (IV infusion). Consult a dermatologist before use. Results depend on individual body metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Verify product authenticity. Individual results may vary.</em>",
  "benefits": [
    "Gradual Even-Toned Whitening",
    "Skin Brightening",
    "Deep Hydration",
    "Anti-Aging & Cellular Repair",
    "Collagen Boost & Firmness",
    "Pigmentation Reduction"
  ],
  "sku": "AQUA-GLYCO-WHITE-SWISS",
  "volume": "1 Box (Professional Use)"
},
{
  "id": 89,
  "name": "Filorga Gold Series Fresh Glutathione 2000000mg Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Filorga Gold Series",
  "price": 11499,
  "image": "/image/filorga_gold_series_glutathione.jpeg",
  "description": "Luxury Premium Formula | 2,000,000mg Glutathione | Neutralizes Free Radicals, Inhibits Melanin | 5 Sessions | Brighter, Even-Toned Complexion",
  "details": "<strong>Filorga Gold Series Fresh Glutathione Injection — The Epitome of Beauty & Elegance</strong><br/><br/>Indulge in the luxury of radiant, glowing skin with this premium formula boasting an impressive 2,000,000mg of glutathione. It works to neutralize free radicals and inhibit melanin production, resulting in a brighter, more even-toned complexion with reduced dark spots and hyperpigmentation. Experience the ultimate in skin whitening and brightening.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Powerful antioxidant neutralizes free radicals</li><li>Inhibits melanin production for skin whitening</li><li>Reduces dark spots and hyperpigmentation</li><li>Promotes brighter, even-toned complexion</li><li>Luxury premium formula for radiant, glowing skin</li><li>Anti-aging support</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Packaging: 1 Box — 5 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Consult a dermatologist before use. Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Individual results may vary. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Powerful Free Radical Neutralization",
    "Melanin Inhibition for Whitening",
    "Reduces Dark Spots & Hyperpigmentation",
    "Brighter, Even-Toned Complexion",
    "Radiant & Glowing Skin",
    "Anti-Aging Support"
  ],
  "sku": "FILORGA-GOLD-2M-5S",
  "volume": "1 Box (5 Sessions)"
},
{
  "id": 90,
  "name": "Glutax 20000GR Sirna Voluntary White",
  "category": "Injection",
  "brand": "Glutax",
  "price": 10500,
  "image": "/image/glutax_20000gr_sirna_voluntary_white.jpeg",
  "description": "Upgraded Italian Formula | 20,000mg Glutathione | 10 Sessions | Advanced Skin Lightening, Collagen Maintenance, Anti-Aging & Wound Healing",
  "details": "<strong>Glutax 20000GR Sirna Voluntary White — Upgraded Version of Best-Selling Glutax 2000GS</strong><br/><br/>This Italian-made injection acts to fix damaged skin cells and maintain existing collagen in the body. Available at a reasonable discounted price, it delivers advanced skin lightening, anti-aging benefits, and comprehensive skin rejuvenation.<br/><br/><strong>Key Ingredients:</strong> Glutathione (20,000mg), Selenium, Multivitamins, and collagen-supporting complexes.<br/><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Advanced skin lightening and nourishing</li><li>Improves aging, protects skin from acne</li><li>Minimizes dark spots and dark circles under eyes</li><li>Softens the skin, produces flexible, smooth, healthy, glowing skin</li><li>Prevents acne and eliminates stains</li><li>Anti-aging and anti-wrinkle</li><li>Boosts healing of wounds</li><li>Takes care of damaged skin cells</li><li>Maintains existing collagen in the body</li></ul><br/><strong>Characteristics:</strong><br/>Skin whitening lightens pigmentation and freckles, produces collagen and elastin. Makes skin firm by reducing melanin production. Solid antioxidants help prevent wrinkles, fine lines, and sagging, improving skin moisture level. Selenium helps secure skin against sunlight damage with skin smoothing and rejuvenation benefits.<br/><br/><strong>Product Specifications:</strong><br/>Brand: Glutax<br/>Form: Injection<br/>Strength: 20,000mg<br/>Country of Origin: Italy<br/>Packaging Type: Box (Vial & Ampoule)<br/>Dose: Every 4 days once<br/>Packaging Qty: 1 Box Pack — 10 Sessions<br/>Expiry Date: December 2025<br/><br/><strong>How to Use:</strong><br/>1) Mix contents of one vial, one small ampule, one big ampule.<br/>2) Administer by slow IV push once every 4 days. Drink plenty of water 1-2 hours before. Use of sterile water is optional. Administration should be done by an IV certified professional.<br/><br/><strong>Recommended Dosage:</strong> Maximum two treatments per week or every four days via IV / IM / Dripping. Results can be seen as fast as 1-2 weeks; perfect results need 2-3 months of treatment. Then reduce to 1 injection every 2 weeks for maintenance.<br/><br/><strong>Important Note:</strong> Do not use if pregnant, breastfeeding, or has existing heart or kidney condition. Guaranteed authentic.<br/><br/><strong>Note:</strong> Results may vary from person to person.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use.</em>",
  "benefits": [
    "Advanced Skin Lightening & Nourishing",
    "Improves Aging & Protects from Acne",
    "Minimizes Dark Spots & Dark Circles",
    "Softens Skin, Produces Healthy Glowing Skin",
    "Prevents Acne & Eliminates Stains",
    "Anti-Aging & Anti-Wrinkle",
    "Boosts Wound Healing",
    "Maintains Existing Collagen"
  ],
  "sku": "GLUTAX-20000GR-SIRNA-10S-IT",
  "volume": "1 Box Pack (10 Sessions)"
},
{
  "id": 91,
  "name": "Glutax 8800000gs Supreme Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 12740,
  "image": "/image/glutax_8800000gs_supreme.jpeg",
  "description": "Revolutionary Pico Cell Technology | 4 Sessions | Skin Whitening, Anti-Aging & Improved Elasticity | Made in Italy",
  "details": "<strong>Glutax 8800000gs Supreme Glutathione Skin Whitening Injection — Advanced Pico Cell Technology</strong><br/><br/>This revolutionary skincare solution harnesses the power of glutathione combined with advanced Pico Cell technology to deliver unparalleled results. The injection delivers glutathione deep into the skin, where it rejuvenates and revitalizes. Perfect for individuals looking to achieve a brighter, smoother, and more youthful complexion.<br/><br/><strong>Key Ingredients:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> Master antioxidant for whitening and detoxification</li><li><strong>Pico Cell Technology:</strong> Enhanced deep skin delivery for better absorption</li><li><strong>Vitamin C:</strong> Brightening and collagen support</li><li><strong>Vitamin E:</strong> Antioxidant protection and moisturizing</li><li><strong>Glycerin:</strong> Hydration and skin softening</li><li><strong>Hyaluronic Acid:</strong> Deep moisture retention and plumping</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin whitening and brightening</li><li>Improved skin texture and tone</li><li>Anti-aging benefits — reduces fine lines and wrinkles</li><li>Improved skin elasticity and firmness</li><li>Enhanced skin radiance</li><li>Neutralizes free radicals and reduces oxidative stress</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Italy<br/>Packaging: 1 Box — 4 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Consult a dermatologist before use. Results depend on individual metabolism.<br/><br/><strong>Storage:</strong> Follow manufacturer's instructions, keep out of reach of children.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Individual results may vary. Verify product authenticity before purchase.</em>",
  "benefits": [
    "Skin Whitening & Brightening",
    "Improved Skin Texture & Tone",
    "Anti-Aging (Fine Lines & Wrinkles)",
    "Improved Elasticity & Firmness",
    "Enhanced Skin Radiance",
    "Neutralizes Free Radicals"
  ],
  "sku": "GLUTAX-8800000GS-4S-IT",
  "volume": "1 Box (4 Sessions)"
},
{
  "id": 92,
  "name": "Filorga Paris Fresh Glutathione 500000mg Whitening Injection",
  "category": "Injection",
  "brand": "Filorga",
  "price": 6200,
  "image": "/image/filorga_paris_fresh_glutathione_500000mg.jpeg",
  "description": "French Premium Anti-Aging Whitening Injection | 500,000mg Pure Glutathione + Vitamin C + CoQ10 + Collagen | 5 Sessions",
  "details": "<strong>Filorga Paris Fresh Glutathione 500000mg Whitening Injection — Premium French Skincare Innovation</strong><br/><br/>Filorga, a highly esteemed skincare brand based in France, is known for its anti-aging properties. With cutting-edge technology and advanced formulas, the brand aims to rejuvenate and restore aging skin. Taking inspiration from aesthetic medicine, Filorga has earned a longstanding reputation as a premium skincare brand in the beauty industry worldwide.<br/><br/>The Filorga anti-aging skincare line addresses wrinkles, fine lines, loss of firmness, and uneven skin tone. Its products contain high-quality, medical-grade ingredients including hyaluronic acid, vitamin C, and retinol, facilitating healthy skin regeneration and collagen production. Over 60 countries currently sell Filorga products, recommended and trusted by dermatologists and skincare professionals around the world.<br/><br/><strong>Composition (Per Box — 5 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Pure Glutathione:</strong> 500,000mg — Master antioxidant for whitening and detoxification</li><li><strong>Vitamin C:</strong> 10,000mg — Brightening, collagen synthesis, antioxidant</li><li><strong>Coenzyme Q10:</strong> Included — Cellular energy and anti-aging</li><li><strong>Collagen:</strong> Included — Skin firmness and elasticity</li><li><strong>Grape Seed Extract:</strong> Included — Potent antioxidant, improves circulation</li><li><strong>Mixed Berry Blend:</strong> Included — Additional antioxidant support</li><li><strong>Evening Primrose Oil:</strong> 10,000mg — Nourishing, anti-inflammatory, skin hydration</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Provides long-lasting results with minimal daily attention</li><li>Can be used with most common medications without adverse interactions</li><li>Affordable compared to other costly treatment options</li><li>Anti-aging — reduces wrinkles, fine lines, loss of firmness</li><li>Improves uneven skin tone</li><li>Promotes healthy skin regeneration and collagen production</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Filorga<br/>Form: Injection<br/>Country of Origin: France<br/>Packaging Qty: 1 Box Pack (5 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening & Anti-Aging<br/><br/><strong>Dosage Recommendations:</strong> Administer one vial once or twice a week. For maintenance, one vial every two weeks or monthly as needed.<br/><br/><strong>Suitability:</strong> Suitable for all ages and ethnicities, both men and women. Most customers are typically twenties or older. Children with skin issues can also benefit.<br/><br/><strong>Note:</strong> Results may vary from person to person.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision recommended. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Long-Lasting Whitening Results",
    "Anti-Aging (Reduces Wrinkles & Fine Lines)",
    "Improves Uneven Skin Tone & Firmness",
    "Promotes Skin Regeneration & Collagen Production",
    "Affordable Premium Treatment",
    "Suitable for All Ages & Ethnicities"
  ],
  "sku": "FILORGA-PARIS-500K-5S-FR",
  "volume": "1 Box Pack (5 Sessions)"
},
{
  "id": 93,
  "name": "Miracle White Green Tru White Transform Glutathione 25000mg",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 12499,
  "image": "/image/miracle_white_green_tru_white.jpeg",
  "description": "Swiss SLC24A5 Gene-Targeted Formula | 25,000mg Nano Glutathione | 6 Sessions | Melanin Suppression, Deep Hydration & Wrinkle-Free Skin",
  "details": "<strong>Miracle White Green Tru White Transform Glutathione 25000mg — Advanced SLC24A5 Gene-Targeted Whitening Innovation</strong><br/><br/>This newest formulation targets the SLC24A5 gene (solute carrier family 24 member 5), a protein that has a significant impact on natural skin color variation. It contains a high amount of glutathione which blocks melanin production, lightening darker areas such as armpits, dark circles, spots, and scars. Made in Switzerland with natural ingredients, safe for all skin types.<br/><br/><strong>Ingredients (Per 6-Session Box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Concentrated Glutathione:</strong> 25,000mg — Blocks melanin production for fairer, brighter skin</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 3,500mg — Essential for collagen production, tight and healthy skin</li><li><strong>Kojic Acid:</strong> 3,200mg — Reduces pigmentation and dark spots</li><li><strong>Epidermal Growth Factor (EGF):</strong> 2,300mg — Stimulates skin regeneration and repair</li><li><strong>Coenzyme Q10:</strong> 800mg — Cellular energy and anti-aging</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 850mg — Potent antioxidant</li><li><strong>Multivitamin:</strong> 900mg — Nourishes skin, minimizes pores</li><li><strong>Cyanocobalamin (Vitamin B12):</strong> 350mg — Improves skin tone</li><li><strong>Botanical Extract:</strong> 755mg — Antioxidant and anti-inflammatory</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Visibly fades dark spots for luminous, bright, fair skin</li><li>Deeply hydrates, renews, and conditions skin</li><li>Brightens, firms, and evens skin tone and texture</li><li>Reduces skin roughness, provides intense hydration</li><li>Wrinkle-free & younger-looking skin</li><li>Powerful antioxidants protect skin cells from oxidative damage</li><li>Prevents damage from sun exposure and harmful UV rays</li><li>Suppresses formation of acne</li><li>Minimizes pores and improves skin complexity</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection (IM or IV)<br/>Country of Origin: Switzerland<br/>Packaging: 1 Box — 6 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Each 5ml + 2ml with 1 vial per day. Interval of 5-7 days between injections. Professional administration recommended.<br/><br/><strong>Suitability:</strong> Safe for all skin types including sensitive. Suitable for ages 16 years and above, all genders.<br/><br/><strong>Results:</strong> Noticeable results within 20 days (3 sessions).<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results depend on individual metabolism. Consult a dermatologist before use.</em>",
  "benefits": [
    "Fades Dark Spots for Luminous Fair Skin",
    "Deep Hydration & Skin Renewal",
    "Brightens, Firms & Evens Skin Tone",
    "Wrinkle-Free & Younger-Looking Skin",
    "Powerful Antioxidant Protection",
    "UV Damage Prevention",
    "Suppresses Acne Formation",
    "Minimizes Pores"
  ],
  "sku": "MIRACLE-WHITE-GREEN-25K-6S",
  "volume": "1 Box (6 Sessions)"
},
{
  "id": 94,
  "name": "Aqua Skin Pure Gold Pro Max Beyond Glutathione Injection",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 12499,
  "image": "/image/aqua_skin_pure_gold_pro_max_beyond.jpeg",
  "description": "Swiss Advanced TriNA Pico-Cell Technology | 50,000,000mg Glutathione | 30 Sessions | Skin Whitening, Anti-Aging, Collagen Boost & Acne-Free Radiance",
  "details": "<strong>Aqua Skin Pure Gold Pro Max Beyond Glutathione Injection — Luxury Radiant, Flawless & Acne-Free Skin</strong><br/><br/>An advanced solution for dull and aging skin, this premium Swiss formulation uses TriNA Pico-Cell technology for fast absorption and maximum efficacy. Whether you're looking to lighten dark spots, reduce wrinkles, or enhance natural beauty, these injections offer a comprehensive solution for all your skincare needs. Transform your complexion and unlock your skin's true potential.<br/><br/><strong>Key Ingredients (TriNA Pico-Cell Enhanced):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 50,000,000 mg — Ultra-potent antioxidant for deep whitening and detoxification</li><li><strong>Vitamin C (Ascorbic Acid):</strong> 180,000 mg — Brightening, collagen synthesis</li><li><strong>Collagen Extract:</strong> 65,000 mg — Firmness and elasticity</li><li><strong>Epidermal Growth Factor (EGF):</strong> 50,000 mg — Cellular regeneration and repair</li><li><strong>Coenzyme Q10:</strong> 30,000 mg — Anti-aging and skin energy</li><li><strong>Hyaluronic Acid:</strong> 12,000 mg — Deep hydration and plumping</li><li><strong>Grape Seed Extract:</strong> 10,000 mg — Potent antioxidant</li><li><strong>Polypodium Leucotomos:</strong> 7,500 mg — UV protection and anti-inflammatory</li><li><strong>Kojic Acid:</strong> 7,000 mg — Melanin inhibition, spot fading</li><li><strong>Alpha Lipoic Acid (ALA):</strong> 5,000 mg — Anti-aging antioxidant</li><li><strong>Heterotrimeric Protein:</strong> 5,400 mg — Cellular support</li><li><strong>DMAE (Dimethylaminoethanol):</strong> 3,500 mg — Skin firming</li><li><strong>Selenium:</strong> 3,000 mg — Immune and antioxidant support</li><li><strong>Beta Hydroxy Acids (BHA):</strong> 2,800 mg — Exfoliation and pore cleansing</li><li><strong>AHA (Alpha Hydroxy Acids):</strong> 2,500 mg — Skin resurfacing</li><li><strong>TriNA Pico-Cell Extract:</strong> 5,408 mcg — Advanced delivery technology</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Skin whitening and even skin tone</li><li>Boosts collagen production for wrinkle-free, youthful skin</li><li>Anti-aging properties and immune system boost</li><li>Deep hydration, nourishment, and radiant complexion</li><li>Detoxification and reduction of dark circles</li><li>Oil control and cell regeneration</li><li>Fast absorption and effective stretch mark reduction</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Switzerland<br/>Packaging: 1 Box — 30 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Results vary — many users notice improvements within 4-6 weeks of regular use. Suitable for all skin types.<br/><br/><strong>FAQs:</strong> Can be combined with other skincare treatments after consulting a dermatologist. Results can be long-lasting with regular maintenance.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Results depend on individual metabolism.</em>",
  "benefits": [
    "Skin Whitening",
    "Even Skin Tone",
    "Collagen Production",
    "Wrinkle-Free Skin",
    "Youthful & Attractive Skin",
    "Anti-Aging Properties",
    "Immune System Boost",
    "Hydration & Nourishment",
    "More Radiant Complexion",
    "Detoxification",
    "Reduction of Dark Circles",
    "Oil Control",
    "Cell Regeneration",
    "Fast Absorption",
    "Effective Stretch Mark Reduction"
  ],
  "sku": "AQUA-PUREGOLD-PROMAX-30S",
  "volume": "1 Box (30 Sessions)"
},
{
  "id": 95,
  "name": "Glutax 42000000gs Supreme Pico Cell Glutathione Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 11500,
  "image": "/image/glutax_42000000gs_supreme_pico_cell.jpeg",
  "description": "Ultra-High Potency Italian PicoCell Technology | 6 Sessions | Skin Brightening, Collagen Boost, Deep Hydration & Anti-Aging",
  "details": "<strong>Glutax 42000000gs Supreme PicoCell Glutathione Injection — Advanced Skin Rejuvenation</strong><br/><br/>If you're seeking a path to vibrant, rejuvenated skin, this sophisticated treatment offers a promising solution. Formulated with advanced PicoCell technology and ultra-high strength glutathione, it delivers comprehensive skin benefits from revitalization to deep moisturization. Made in Italy, paraben-free and organic.<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Revitalizing Effect:</strong> Rejuvenates skin, enhancing youthful radiance</li><li><strong>Enhanced Skin Tone:</strong> Reduces melanin, brightens and evens complexion</li><li><strong>Collagen Boost:</strong> Stimulates collagen production for firmer, youthful skin</li><li><strong>Deep Moisturization:</strong> Hydrates thoroughly for soft, smooth skin</li><li><strong>Sun Damage Protection:</strong> Guards against UV-induced harm and pigmentation</li><li><strong>Wrinkle & Fine Line Reduction:</strong> Lessens visible signs of aging</li><li><strong>Acne & Pore Reduction:</strong> Combats acne and shrinks pores for clearer, smoother skin</li><li><strong>Overall Health Benefit:</strong> Potent antioxidant shields body from free radical damage</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Glutax<br/>Form: Injection<br/>Country of Origin: Italy<br/>Packaging Qty: 1 Box Pack (6 Sessions)<br/>Paraben Free & Organic: Yes<br/>Key Ingredients: Glutathione<br/>Usage/Application: Skin Whitening<br/>Expiry Date: August 2026<br/><br/><strong>Usage Instructions:</strong> Administered intravenously (IV). Take twice weekly for two months for best results. Maintenance doses can be reduced to once or twice monthly as recommended by a healthcare provider.<br/><br/><strong>Who Should Use:</strong> Appropriate for individual users, skincare professionals, and as a component of hospital skincare routines.<br/><br/><strong>Safety:</strong> Generally safe for most, but consult a healthcare provider before beginning, especially if you have pre-existing health conditions.<br/><br/><strong>Note:</strong> Results may vary from person to person.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Individual metabolism affects results.</em>",
  "benefits": [
    "Revitalizing Effect & Youthful Radiance",
    "Enhanced Skin Tone & Melanin Reduction",
    "Collagen Boost for Firmer Skin",
    "Deep Moisturization & Softness",
    "Sun Damage & Pigmentation Protection",
    "Reduces Wrinkles & Fine Lines",
    "Combats Acne & Shrinks Pores",
    "Powerful Antioxidant Protection"
  ],
  "sku": "GLUTAX-42M-PICOCELL-6S-IT",
  "volume": "1 Box Pack (6 Sessions)"
},
{
  "id": 96,
  "name": "Vesco Pharma Glutathione Booster Skin Whitening Injection",
  "category": "Injection",
  "brand": "Vesco Pharma",
  "price": 3240,
  "image": "/image/vesco_pharma_glutathione_booster.jpeg",
  "description": "Liposomal Delivery Matrix Technology | Skin Whitening & Anti-Aging | 10 Ampoules | Made in Thailand",
  "details": "<strong>Vesco Pharma Glutathione Booster Injection — Innovative Skincare Solution with Liposomal Delivery Matrix Technology</strong><br/><br/>This advanced formula is renowned not only for skin whitening but also for its anti-aging properties. Each ingredient contributes uniquely to skin health and beauty, utilizing liposomal technology for enhanced absorption and deep skin penetration.<br/><br/><strong>Ingredients Composition (Per Box — 10 Ampoules):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Liposomal Vitamin C (1000mg):</strong> Brightens skin, reduces dark spots and melanin production, enhances firmness, reduces fine lines</li><li><strong>N-Acetyl-L-Cysteine (NAC) (300mg):</strong> Boosts skin luminosity and texture, reduces pigmentation and age spots, enhances resilience against oxidative stress</li><li><strong>Alpha Lipoic Acid (ALA) (300mg):</strong> Potent anti-aging agent, reduces wrinkles and fine lines, minimizes pores, evens skin tone</li><li><strong>Milk Thistle (200mg):</strong> Detoxifying properties, improves skin elasticity and hydration, reduces visibility of age spots</li><li><strong>L-Glycine (100mg):</strong> Repairs damaged skin, prevents aging signs, aids in melanin regulation for skin lightening</li><li><strong>Selenium (100mg):</strong> Preserves skin health, prevents premature aging, maintains firmness and elasticity, helps achieve even skin tone</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Liposomal Vitamin C — Brightens, fights aging, evens tone for perfect glow</li><li>L-Glycine — Repairs and rejuvenates for youthful, vibrant look</li><li>N-Acetyl-L-Cysteine — Defends against aging, enhances glow, reduces pigmentation</li><li>Alpha Lipoic Acid — Smoothens wrinkles, refines texture, lightens skin naturally</li><li>Milk Thistle — Detoxifies and firms, offers naturally youthful radiant skin</li><li>Selenium — Preserves firmness and elasticity, reveals brighter even complexion</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Packaging: 1 Box — 10 Ampoules<br/>Country of Origin: Thailand<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Precautions:</strong> If you have any skin allergy, please consult your doctor before use. Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision recommended. Consult a dermatologist before use. Individual results may vary.</em>",
  "benefits": [
    "Skin Whitening & Brightening",
    "Anti-Aging & Wrinkle Reduction",
    "Reduces Dark Spots & Pigmentation",
    "Improves Skin Firmness & Elasticity",
    "Detoxifies & Hydrates Skin",
    "Enhances Skin Luminosity & Texture",
    "Minimizes Pores"
  ],
  "sku": "VESCO-GLUTATHIONE-BOOSTER-10A",
  "volume": "1 Box (10 Ampoules)"
},
{
  "id": 97,
  "name": "Glutax 23000GK DNA Glutokines Skin Whitening 4 Sessions Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 9300,
  "image": "/image/glutax_23000gk_dna_glutokines.jpeg",
  "description": "Italian DNA Glutokines Formula | 23,000g DNA GSH + EGF + Alpha Lipoic Acid | 4 Sessions | Skin Whitening, Anti-Aging & Acne Reduction",
  "details": "<strong>Glutax 23000GK DNA Glutokines Injection — Advanced Italian DNA Skin Whitening Formula</strong><br/><br/>Manufactured by Derma Medical Skin Sciences (Italy), this premium injection combines DNA Glutokines (DNA GSH + Energy Active Cytokines) with powerful skin-rejuvenating ingredients. The Glutax business was founded in 1956 and is regarded worldwide as a leading firm for nutrition supplements, with scientifically proven products highly suggested by doctors and health specialists.<br/><br/><strong>Key Ingredients (per 4-session box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>High Grade DNA Glutokines:</strong> 23,000g (DNA GSH + Energy Active Cytokines) — Advanced glutathione with cellular energy support</li><li><strong>Epidermal Growth Factor (EGF):</strong> 3,200mg — Stimulates collagen production and skin renewal</li><li><strong>Alpha Lipoic Acid:</strong> 1,800mg — Potent antioxidant, reduces aging signs</li><li><strong>Kojic Acid:</strong> 1,200mg — Melanin inhibition and spot fading</li><li><strong>Oxygenox:</strong> 920mg (Oxygen Skin Supply) — Enhances skin oxygenation and vitality</li><li><strong>Multivitamin:</strong> 5,000mg — Comprehensive skin nourishment</li><li><strong>Natural Collagen:</strong> 2,000mg — Firmness and elasticity</li><li><strong>Selenium:</strong> 1,800mg — Antioxidant and immune support</li><li><strong>DNA Marine White Elements:</strong> 1,500mg — Brightening complex</li><li><strong>DNA Vegetal Placenta:</strong> 330mg — Regeneration and rejuvenation</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Antioxidant properties detoxify body, eliminate free toxins and radicals</li><li>Replenishes nutrients, enhances skin and face health</li><li>Shrinks large pores to make them invisible</li><li>Eliminates hyperpigmentation (dark spots, acne spots, scars, age spots)</li><li>Gives skin radiant glow with smooth, soft, shiny, elastic texture</li><li>Cures pimples, acne, freckles, and other skin blemishes</li><li>Prevents premature aging and wrinkles for youthful, healthy appearance</li><li>Protects skin from sun and environmental damages</li></ul><br/><strong>Product Specifications:</strong><br/>Manufacturer: Derma Medical Skin Sciences — Via K. Marx 18, Noverasco di Opera MI 20090, Italy<br/>Country of Origin: Italy<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/>Packaging: 1 Box (4 Sessions)<br/><br/><strong>Recommended Dosage:</strong> Intravenous IV Infusion (Drip) once a week. For better results, consult your doctor.<br/><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify product authenticity.</em>",
  "benefits": [
    "Detoxifies Body & Eliminates Free Radicals",
    "Replenishes Nutrients & Enhances Skin Health",
    "Shrinks Large Pores",
    "Eliminates Hyperpigmentation (Spots & Scars)",
    "Radiant Glow — Smooth, Soft, Shiny, Elastic Skin",
    "Cures Acne, Pimples, Freckles & Blemishes",
    "Prevents Premature Aging & Wrinkles",
    "Protects from Sun & Environmental Damage"
  ],
  "sku": "GLUTAX-23000GK-DNA-4S-IT",
  "volume": "4 Sessions (1 Box)"
},
{
  "id": 98,
  "name": "Bio Rae Complexion 8 Glutathione Skin Whitening 4 Sessions Injection",
  "category": "Injection",
  "brand": "Bio Rae",
  "price": 12600,
  "image": "/image/bio_rae_complexion_8.jpeg",
  "description": "Korea's No.1 High-Dose Glutathione Formula | 5000mg Glutathione + Activecell Complex + Vitamins | 4 Sessions | Skin Whitening, Collagen & Elastin Support",
  "details": "<strong>Bio Rae Complexion 8 Glutathione Skin Whitening Injection — Premium Korean Skin Solution</strong><br/><br/>Considered the number one choice of spas and skin clinics worldwide, Bio Rae Complexion 8 is the highest quality, high-dose glutathione skin whitening formula available today. This advanced injection combines L-Glutathione with Vitamin C, Activecell complex, and essential nutrients to maintain high glutathione levels in your body even when not undergoing treatment.<br/><br/><strong>Complete Kit (4 Sessions — per box):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione:</strong> 5,000mg (15ml x 4 vials) — Master antioxidant for whitening and detoxification</li><li><strong>Activecell Complex Extract:</strong> 10,000 IU (10ml x 4 vials) — Cellular regeneration and repair</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5,000mg (5ml x 4 ampoules) — Brightening and collagen synthesis</li><li><strong>Vitamin B Complex:</strong> (2ml x 4 vials) — Nourishes and improves skin texture</li><li><strong>Cyanocobalamin (Vitamin B12):</strong> 2,000mcg (2ml x 4 vials) — Improves skin tone and repair</li><li><strong>Tranexamic Acid:</strong> 1,000mg (5ml x 4 ampoules) — Reduces pigmentation and redness</li><li><strong>Natural Collagen Extract:</strong> 350mg (5ml x 4 vials) — Improves skin firmness and elasticity</li><li><strong>Thioctic Acid (Alpha Lipoic Acid):</strong> 50mg (5ml x 4 ampoules) — Potent anti-aging antioxidant</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>High-dose L-Glutathione for effective skin whitening</li><li>Boosts collagen and elastin production — fights wrinkles, fine lines, age spots</li><li>Improves skin elasticity, clarity, and brightness</li><li>Proper absorption at skin cell level for better results</li><li>Delivers younger-looking, radiant skin</li><li>Combines glutathione with high-quality vitamins and minerals</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Korea<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/><br/><strong>Recommended Dosage:</strong> Intravenous IV Infusion (Drip) once a week. For better results, consult your doctor.<br/><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify product authenticity.</em>",
  "benefits": [
    "High-Dose Skin Whitening",
    "Boosts Collagen & Elastin Production",
    "Improves Skin Elasticity & Clarity",
    "Reduces Wrinkles, Fine Lines & Age Spots",
    "Younger-Looking, Radiant Skin",
    "Cellular Regeneration & Repair"
  ],
  "sku": "BIO-RAE-COMPLEXION-8-4S-KR",
  "volume": "4 Sessions (1 Box)"
},
{
  "id": 99,
  "name": "CHP Complexion Hydra Plus Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "CHP",
  "price": 10999,
  "image": "/image/chp_complexion_hydra_plus.jpeg",
  "description": "Swiss Whitening & Brightening Formula | 8000mg Glutathione + EGF + CoQ10 | 6 Sessions | Reduces Pigmentation, Acne & Free Radicals",
  "details": "<strong>CHP Complexion Hydra Plus Glutathione Skin Whitening Injection — Radiant, Fresh & Healthy Skin</strong><br/><br/>Complexion Hydra Plus (CHP) injection helps in whitening, brightening, and keeping the skin looking fresh. Rich in Glutathione (8000mg), it removes excess free radicals that cause black spots, acne, dull skin, and wrinkles. Made in Switzerland, this product is 100% authentic with barcode verification. Cash on Delivery (COD) and Free Shipping available in India.<br/><br/><strong>Ingredients (Per Box — 6 Sessions):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Hydraplus Glutathione:</strong> 8,000mg — Master antioxidant for whitening and detoxification</li><li><strong>Hydraplus Ascorbic Acid (Vitamin C):</strong> 2,500mg — Brightening and collagen support</li><li><strong>Hydraplus EGF (Epidermal Growth Factor):</strong> 1,500mg — Cellular regeneration and repair</li><li><strong>Hydraplus Coenzyme Q10:</strong> 320mg — Anti-aging and skin energy</li><li><strong>Hydraplus Thioctic Acid (Alpha Lipoic Acid):</strong> 800mg — Potent antioxidant</li><li><strong>Hydraplus Boletus Extract:</strong> 300mg — Antioxidant and skin nourishment</li><li><strong>Hydraplus Cenoplacenta:</strong> 600mg — Placental extract for rejuvenation</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Reduces pigmentation and dark spots</li><li>Protects against free radical damage</li><li>Get glowing, smooth, and softened skin</li><li>Acne/pimple-free skin</li><li>Suitable for all skin types</li><li>Whitens skin and lightens scars</li><li>Suppresses formation of acne, blemishes, pimples</li><li>Improves skin complexion</li><li>Removes excess free radicals</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Switzerland<br/>Packaging: 1 Box — 6 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Dosage:</strong> Once a week (IV administration). Professional supervision required.<br/><br/><strong>Safety Information:</strong> Read label carefully. Keep out of reach of children. Keep container tightly closed. Do not exceed recommended dosage. Store sealed at room temperature (1-30°C).<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify authenticity via barcode.</em>",
  "benefits": [
    "Reduces Pigmentation & Dark Spots",
    "Protects Against Free Radical Damage",
    "Glowing, Smooth & Softened Skin",
    "Acne/Pimple-Free Skin",
    "Whitens Skin & Lightens Scars",
    "Suppresses Acne, Blemishes & Pimples",
    "Improves Skin Complexion",
    "Removes Excess Free Radicals"
  ],
  "sku": "CHP-HYDRA-PLUS-6S",
  "volume": "1 Box (6 Sessions)"
},
{
  "id": 100,
  "name": "Vesco Pharma Gluta C 1000 Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Vesco Pharma",
  "price": 4399,
  "image": "/image/vesco_pharma_gluta_c_1000.jpeg",
  "description": "Liquid Nano Glutathione + Vitamin C | Made in Thailand | 10 Sessions | Skin Whitening, Anti-Aging, Pigmentation Reduction & Acne Control",
  "details": "<strong>Vesco Pharma Gluta C 1000 — Potent Antioxidant Skin Whitening Injection</strong><br/><br/>Vesco Pharma Gluta C 1000 is a blend of Liquid Nano Glutathione (1000mg) and Vitamin C (1000mg), administered intramuscularly or intravenously to brighten your skin and give a youthful appearance. This potent antioxidant works by neutralizing free radicals in the skin and body. With advancing age, the body naturally reduces glutathione production, resulting in darker skin. This product provides natural, safe, and effective skin brightening.<br/><br/><strong>Ingredients (1 Box — 10 Ampoules of 5ml):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Liquid Nano Glutathione:</strong> 1000mg — Master antioxidant for whitening and detoxification</li><li><strong>Vitamin C (Ascorbic Acid):</strong> 1000mg — Brightening, collagen synthesis, and immune boost</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Nourishes and firms the skin</li><li>Reduces pigmentation and dark spots</li><li>Protects against free radical damage</li><li>Provides glowing, smooth, and softened skin</li><li>Deeply hydrates the skin</li><li>Anti-aging benefits — fair and radiant complexion</li><li>Regeneration of new cells</li><li>Detoxification and purifying</li><li>Acne/pimple-free skin</li><li>Suitable for all skin types</li><li>Whitens skin and lightens scars</li><li>Suppresses formation of acne, blemishes, pimples</li><li>Improves skin complexion</li><li>Removes excess free radicals</li><li>Minimizes pores and prevents acne</li></ul><br/><strong>Product Specifications:</strong><br/>Brand: Vesco Pharma<br/>Form: Injection (IM or IV)<br/>Country of Origin: Thailand<br/>Packaging: 1 Box — 10 Ampoules (10 Sessions)<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Dosage:</strong> Twice per week under professional medical supervision.<br/><br/><strong>Safety Information:</strong> Read label carefully. Keep out of reach of children. Keep container tightly closed. Do not exceed recommended dosage. Pregnant/lactating women and children with medical conditions should consult a physician before use. Store sealed at room temperature (1-30°C).<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify authenticity via barcode.</em>",
  "benefits": [
    "Nourishes & Firms Skin",
    "Reduces Pigmentation & Dark Spots",
    "Protects Against Free Radical Damage",
    "Glowing, Smooth & Softened Skin",
    "Deep Hydration",
    "Anti-Aging & Radiant Complexion",
    "Regeneration of New Cells",
    "Detoxification & Purifying",
    "Acne/Pimple-Free Skin",
    "Whitens Skin & Lightens Scars",
    "Improves Skin Complexion",
    "Minimizes Pores & Prevents Acne"
  ],
  "sku": "VESCO-GLUTA-C-1000-10A",
  "volume": "1 Box (10 Ampoules / 10 Sessions)"
},
{
  "id": 101,
  "name": "Aqua Skin EGF Whitening Pro Q10 Glutathione Skin Whitening 24 Sessions Injection",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 10050,
  "image": "/image/aqua_skin_egf_whitening_pro_q10_24s.jpeg",
  "description": "Swiss High-Dose Formula | 3000mg Glutathione + EGF + CoQ10 + Retinol + Hyaluronic Acid | 24 Sessions | Skin Whitening, Anti-Aging & Collagen Boost",
  "details": "<strong>Aqua Skin EGF Whitening Pro Q10 Glutathione Skin Whitening Injection — No. 1 Choice of Spas & Skin Clinics Worldwide</strong><br/><br/>This high-quality, high-dose glutathione skin whitening formula combines L-Glutathione with Vitamin C, EGF, CoQ10, Retinol, Hyaluronic Acid, and other potent skin-rejuvenating ingredients. It helps maintain high levels of L-Glutathione in your body, even without ongoing skin treatment. Made in Switzerland.<br/><br/><strong>Key Ingredients (24 Sessions Pack):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>L-Glutathione:</strong> 3,000 mg — Master antioxidant for whitening and detoxification</li><li><strong>Pro-Coenzyme Q10:</strong> 1,000 mg — Anti-aging and cellular energy</li><li><strong>Natural Collagen Extract:</strong> 1,000 mg — Skin firmness and elasticity</li><li><strong>Alpha Lipoic Acid (ALA):</strong> 600 mg — Potent antioxidant, reduces aging signs</li><li><strong>L-Ascorbic Acid (Vitamin C):</strong> 500 mg — Brightening and collagen synthesis</li><li><strong>Kojic Acid:</strong> 500 mg — Melanin inhibition, spot fading</li><li><strong>Beta-Hydroxy Acid (Salicylic Acid):</strong> 250 mg — Exfoliation, acne control</li><li><strong>Alpha-Hydroxy Acid (AHA):</strong> 100 mg — Skin resurfacing</li><li><strong>DMAE (Dimethylaminoethanol):</strong> 100 mg — Skin firming</li><li><strong>Copper Peptide:</strong> 50 mg — Wound healing and collagen production</li><li><strong>Hyaluronic Acid:</strong> 10 mg — Deep hydration and plumping</li><li><strong>Retinol:</strong> 10 mg — Anti-aging, wrinkle reduction</li><li><strong>Selenium:</strong> 10 mg — Antioxidant protection</li></ul><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Nourishes and firms the skin</li><li>Whitens and lightens skin tone</li><li>Produces collagen and increases skin elasticity</li><li>Deeply moisturizes and hydrates for smooth, supple skin</li><li>Reduces pigmentation caused by sun exposure</li><li>Smoothens fine lines and wrinkles</li><li>Reduces acne, pimples, and minimizes pores</li><li>Improves skin complexion and removes excess free radicals</li><li>Prevents aging and provides anti-wrinkle effects</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Switzerland<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/>Packaging: 1 Box (24 Sessions)<br/><br/><strong>Recommended Dosage:</strong> Intravenous IV / IM Infusion twice a week. For better results, contact your doctor.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify product authenticity.</em>",
  "benefits": [
    "Nourishes & Firms Skin",
    "Whitens & Lightens Skin Tone",
    "Produces Collagen & Increases Elasticity",
    "Deeply Moisturizes & Hydrates",
    "Reduces Sun-Induced Pigmentation",
    "Smoothens Fine Lines & Wrinkles",
    "Reduces Acne, Pimples & Minimizes Pores",
    "Improves Skin Complexion",
    "Prevents Aging & Anti-Wrinkle"
  ],
  "sku": "AQUA-EGF-PROQ10-24S",
  "volume": "1 Box (24 Sessions)"
},
{
  "id": 102,
  "name": "Miracle White Gold Perfection VI Glutathione Injections",
  "category": "Injection",
  "brand": "Miracle White",
  "price": 16200,
  "image": "/image/miracle_white_gold_perfection_vi.jpeg",
  "description": "Swiss Anti-Aging Whitening Formula | 60,000mg Nano Glutathione + EGF + CoQ10 | 6 Sessions | Brightens, Firms, Reduces Dark Spots & Wrinkles",
  "details": "<strong>Miracle White Gold Perfection VI Glutathione Injection — Enhanced Anti-Aging & Whitening Formula</strong><br/><br/>With enhanced EGF and multivitamin content, this newest Miracle White formula brightens skin, makes it smooth, free from dark spots, and provides anti-aging benefits. Kojic acid lightens visible sun damage, age spots, or scars with antimicrobial properties. Alpha-lipoic acid provides strong antioxidant effects, reduces inflammation and skin aging, promotes healthy nerve function, and supports heart health. Made in Switzerland, dermatologically tested with no side effects.<br/><br/><strong>Composition (Per Box — 6 Sessions):</strong><br/><br/><strong>Vial Composition:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Multivitamin Complex CRP:</strong> 5,000mg</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5,000mg</li><li><strong>Kojic Acid:</strong> 2,500mg</li><li><strong>Epidermal Growth Factor (EGF):</strong> 2,000mg</li><li><strong>Coenzyme Q10:</strong> 1,000mg</li><li><strong>Thioctic Acid:</strong> 600mg</li></ul><br/><strong>Powder Composition:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Nano Concentrated Glutathione:</strong> 60,000mg — Ultra-potent whitening and detoxification</li><li><strong>Alpha Lipoic Acid (ALA):</strong> 5,000mg — Potent anti-aging antioxidant</li></ul><br/><strong>Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Soothes and stabilizes the skin</li><li>Whitens the skin inside and out</li><li>Reduces dull skin and repairs sun-damaged skin</li><li>Removes blemishes, maintains white & smooth skin</li><li>Moisturizes skin, improves firmness and elasticity</li><li>Improves blood circulation and skin cell regeneration (anti-aging factor)</li><li>Proven results in just 21 days (3 sessions)</li></ul><br/><strong>Product Specifications:</strong><br/>Country of Origin: Switzerland<br/>Packaging: 1 Box — 6 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Consult a dermatologist before use.<br/><br/><strong>FAQs:</strong> Results within 21 days (3 sessions). No side effects — naturally sourced glutathione. Results vary by metabolism. Safe for ages 16+ and all genders.<br/><br/><strong>Not Suitable For:</strong> Pregnant/nursing mothers (consult doctor), allergy to any vitamins, cardiovascular patients, chemotherapy patients.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify product authenticity.</em>",
  "benefits": [
    "Soothes & Stabilizes Skin",
    "Whitens Skin Inside & Out",
    "Reduces Dull Skin & Repairs Sun Damage",
    "Removes Blemishes, Maintains White & Smooth Skin",
    "Moisturizes, Improves Firmness & Elasticity",
    "Improves Blood Circulation & Cell Regeneration"
  ],
  "sku": "MIRACLE-WHITE-GOLD-PERFECTION-6S",
  "volume": "1 Box (6 Sessions)"
},
{
  "id": 103,
  "name": "Glutax 70000GM Marine White Optimum Skin Whitening 4 Sessions Injection",
  "category": "Injection",
  "brand": "Glutax",
  "price": 9380,
  "image": "/image/glutax_70000gm_marine_white.jpeg",
  "description": "Italian Marine-Based Formula | 70,000g Marine Glutathione | 4 Sessions | Anti-Aging, Wrinkle Reduction, Skin Repair & Collagen Replenishment",
  "details": "<strong>Glutax 70000GM Marine White Optimum Skin Whitening Injection — Advanced Marine-Based Skin Transformation</strong><br/><br/>Manufactured by Derma Medical Skin Sciences (Italy), this high-dose L-Glutathione formula is designed for rapid-acting results. As the leading provider of L-Glutathione in Italy, this product helps achieve the beautiful skin you are dreaming of. Formulated with marine-derived active ingredients for deep cellular repair, whitening, and anti-aging benefits.<br/><br/><strong>Complete Kit (4 Sessions — per box):</strong><br/><br/><strong>4 Vials (20ml):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Bio-DNA Cellular Marine Complex:</strong> 4,000mg — Cellular repair and regeneration</li><li><strong>Marine Collagen Tri-Peptide:</strong> 2,600mg — Boosts collagen for firmness and elasticity</li><li><strong>Marine Minerals Multivitamins:</strong> 15,000mg — Comprehensive skin nourishment</li></ul><br/><strong>4 Vials — Marine Glutathione S-transferases:</strong> 70,000g — Ultra-concentrated marine-derived glutathione for intense whitening and detoxification<br/><br/><strong>4 Vials — DNA Marine White Elements:</strong> 3,000mg + Marine-D3 500mg — Brightening complex with vitamin D3<br/><br/><strong>4 Vials — Hydro MN Peptide (Marine Cartilage Extract):</strong> 7,200mg — Rich in marine peptides for hydration, elasticity, and repair<br/><br/><strong>Key Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Tremendous anti-aging results — reduces wrinkles by increasing skin tone and elasticity</li><li>Repairs skin, fades scars, and heals dark spots</li><li>Moisturizes skin for a healthy appearance</li><li>Improves skin complexion, evens out pigmentation, fades discoloration, liver spots, freckle spots, and age spots</li><li>Replenishes lost collagen and increases skin elasticity to maintain healthy skin</li><li>Contains Vitamin E (powerful antioxidant), Phytessence Wakame (controls sebum, firms skin), vitamins C and B, organic botanicals and flavones</li><li>Provides long-term protection against sun damage</li><li>Produces collagen, elastin, hyaluronic acid, and amino acids</li></ul><br/><strong>Product Specifications:</strong><br/>Manufacturer: Derma Medical Skin Sciences — Via K. Marx 18, Noverasco di Opera MI 20090, Italy<br/>Country of Origin: Italy<br/>Importer: Super Advanced General Trading Company LLC<br/>Packers: IMBMS (Dealers Bazaar Group)<br/>FSSAI License: 11223999000312<br/>GMP Certified<br/>Packaging: 1 Box (4 Sessions)<br/><br/><strong>Recommended Dosage:</strong> Intravenous IV Infusion (Drip) once a week. For better results, contact your doctor.<br/><br/><strong>Storage:</strong> Keep at room temperature & avoid direct sunlight.<br/><br/><strong>Not Suitable For:</strong> Breastfeeding women, allergy to any vitamins, pregnant women, patients with cardiovascular problems.<br/><br/><strong>Note:</strong> Results depend on individual metabolism.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Consult a dermatologist before use. Verify product authenticity.</em>",
  "benefits": [
    "Anti-Aging & Wrinkle Reduction",
    "Repairs Skin, Fades Scars & Dark Spots",
    "Deep Moisturization",
    "Improves Complexion & Evens Pigmentation",
    "Replenishes Collagen & Increases Elasticity",
    "Sun Damage Protection",
    "Reduces Liver Spots, Freckles & Age Spots"
  ],
  "sku": "GLUTAX-70000GM-MARINE-4S-IT",
  "volume": "4 Sessions (1 Box)"
},
{
  "id": 104,
  "name": "Aqua Skin Vensicy 126 Trina Pico Cell Skin Whitening Glutathione Injection",
  "category": "Injection",
  "brand": "Aqua Skin",
  "price": 13499,
  "image": "/image/aqua_skin_vensicy_126_trina_pico_cell.jpeg",
  "description": "Advanced TriNA Pico Cell Technology | Quecto-Glutathione + Nonapeptide + CoQ10 | 10 Sessions | Skin Whitening, Anti-Aging & Collagen Boost",
  "details": "<strong>Aqua Skin Vensicy 126 Trina Pico Cell Glutathione Injection — Ultimate Non-Surgical Skin Transformation</strong><br/><br/>Experience the ultimate skin transformation with this advanced skin-whitening injection designed to deeply nourish, brighten, and rejuvenate your skin. Formulated with a powerful blend of skin-enhancing ingredients, it works from within to lighten pigmentation, reduce fine lines, and boost overall skin health. Its potent antioxidant properties detoxify the body, promoting a healthier and naturally radiant complexion.<br/><br/><strong>Key Ingredients & Their Skin Benefits:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Quecto-Glutathione:</strong> Master antioxidant — shields skin from harmful toxins, brightens complexion, evens skin tone</li><li><strong>Nonapeptide:</strong> Anti-aging miracle — smooths fine lines, improves elasticity, promotes firmness</li><li><strong>Coenzyme Pro Q10:</strong> Skin's energy booster — guards against oxidative damage, boosts skin energy, maintains youthful appearance</li><li><strong>Selenium:</strong> Skin protector — strengthens skin health, reduces inflammation, enhances defense against environmental stressors</li><li><strong>DMAE (Dimethylaminoethanol):</strong> Firming agent — improves hydration, enhances elasticity, reduces fine lines and wrinkles</li><li><strong>Multivitamin Complex:</strong> Skin revitalizer — nourishes skin, enhances vitality, boosts overall skin health</li><li><strong>Kojic Acid:</strong> Natural skin brightener — lightens skin, fades dark spots, evens skin tone</li><li><strong>Copper Peptide:</strong> Collagen amplifier — stimulates collagen production, improves firmness, aids in skin repair</li><li><strong>Placenta Extract:</strong> Skin regenerator — enhances texture, reduces scars and blemishes, promotes smoother complexion</li></ul><br/><strong>Why Choose This Advanced Glutathione Injection?</strong><br/>Works internally to detoxify, repair, and brighten the skin, delivering long-lasting visible results unlike topical treatments:<br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li>Brightens and evens out skin tone</li><li>Reduces hyperpigmentation, dark spots, and blemishes</li><li>Boosts collagen production for firmer, more youthful skin</li><li>Deeply hydrates and improves skin elasticity</li><li>Minimizes fine lines, wrinkles, and signs of aging</li><li>Detoxifies the body, promoting overall skin health</li><li>Enhances skin regeneration for a naturally glowing complexion</li><li>Suitable for all skin types — safe and effective</li></ul><br/><strong>Product Specifications:</strong><br/>Form: Injection<br/>Packaging: 1 Box — 10 Sessions<br/>Certifications: FDA Approved, GMP Approved, FSSAI Approved (License: 21223009000196)<br/><br/><strong>Usage:</strong> Professional administration only. Consult a dermatologist before use.<br/><br/><em class=\"text-xs text-gray-400\">Disclaimer: Professional medical supervision required. Results depend on individual metabolism. Verify product authenticity.</em>",
  "benefits": [
    "Brightens & Evens Skin Tone",
    "Reduces Hyperpigmentation, Dark Spots & Blemishes",
    "Boosts Collagen Production",
    "Deep Hydration & Improved Elasticity",
    "Minimizes Fine Lines, Wrinkles & Signs of Aging",
    "Detoxifies Body for Overall Skin Health",
    "Enhances Skin Regeneration & Natural Glow",
    "Suitable for All Skin Types"
  ],
  "sku": "AQUA-VENSICY-126-10S",
  "volume": "1 Box (10 Sessions)"
},

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
const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Anjali Rao",
    role: "Dermatologist",
    clinic: "DermaCare Clinic, Mumbai",
    quote: "Finding a reliable distributor for Glutax and authentic PDRN products was a challenge until we partnered with Cosmatrix. The cold-chain integrity is exactly what my practice requires."
  },
  {
    id: 2,
    name: "Dr. Rahul Mehta",
    role: "Aesthetic Physician",
    clinic: "Lumina Aesthetics, Delhi",
    quote: "Cosmatrix has streamlined our inventory. Their delivery speed to Delhi is impressive, usually reaching us within 48 hours. Genuine products and professional invoicing."
  },
  {
    id: 3,
    name: "Skin & Soul Clinic",
    role: "Clinic Management",
    clinic: "Bangalore",
    quote: "We order our monthly stock of Miracle White and numbing creams here. The wholesale pricing is competitive, and the support team on WhatsApp is very responsive."
  }
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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 transition-all duration-300 font-medium tracking-wide text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-lg",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",
    ghost: "bg-transparent text-white hover:text-white/80 hover:bg-white/10",
    transparent: "bg-transparent text-white hover:opacity-80 border-0"
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

const Navigation = ({ currentPage, setCurrentPage, cartCount, toggleCart, mobileMenuOpen, setMobileMenuOpen, setShopFilter, setBrandFilter, setSearchQuery }) => {
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

                        {/* Logo */}
                        <div 
                            className={`cursor-pointer flex items-center gap-2 ${'absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0'}`} 
                            onClick={() => setCurrentPage('home')}
                        >
                            <img loading="lazy" src="/image/Cosmatrix.jpg" alt="COSMATRIX" className="w-32 md:w-40 object-contain" />
                        </div>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                            <button 
                                key={link.id} 
                                onClick={() => setCurrentPage(link.id)} 
                                className={`
                                    text-sm font-medium tracking-wide 
                                    transition-colors duration-300 
                                    px-1 py-1
                                    ${currentPage === link.id 
                                        ? 'text-black font-semibold' 
                                        : 'text-gray-800 hover:text-black'
                                    }
                                `}
                            >
                                {link.name}
                            </button>
                            ))}
                        </nav>

                        {/* Right Icons: Cart & Menu */}
                        <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end md:flex-initial">
                            <button onClick={() => setIsSearchOpen(true)} className="hidden md:block text-gray-800 hover:text-black"><Search size={22} /></button>
                            <button className="relative p-2 text-gray-800 hover:text-black" onClick={toggleCart}>
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
            
            {/* MOBILE MENU DRAWER */}
            <div className={`fixed inset-0 z-[60] flex ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
                <div className={`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    
                    {/* Header */}
                    <div className="p-6 flex justify-between items-center border-b border-gray-100 shrink-0">
                        <span className="text-xl font-serif tracking-wide">MENU</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-black"><X size={24} /></button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col">
                            {/* Shop All button */}
                            <button onClick={() => { 
                                setShopFilter('All'); 
                                setBrandFilter('All Brands'); // Reset brand when clicking Shop All
                                setCurrentPage('shop'); 
                                setMobileMenuOpen(false); 
                            }} className="px-6 py-4 text-left text-gray-800 font-medium border-b border-gray-50 hover:text-black flex justify-between items-center">Shop All <ChevronRight size={16} className="text-gray-400"/></button>
                            
                            {/* Categories Dropdown */}
                            <div className="border-b border-gray-50">
                                <button 
                                    onClick={() => toggleAccordion('categories')} 
                                    className="w-full px-6 py-4 text-left text-gray-800 font-medium hover:text-black flex justify-between items-center bg-gray-50/50"
                                >
                                    Categories 
                                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${expandedMenu === 'categories' ? 'rotate-180' : ''}`}/>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${expandedMenu === 'categories' ? 'max-h-96' : 'max-h-0'}`}>
                                    {CATEGORIES.map(cat => (
                                        <button 
                                            key={cat.id} 
                                            onClick={() => { 
                                                setShopFilter(cat.name); 
                                                setBrandFilter('All Brands'); // Reset brand when choosing category
                                                setCurrentPage('shop'); 
                                                setMobileMenuOpen(false); 
                                            }} 
                                            className="w-full px-10 py-3 text-left text-sm text-gray-600 hover:text-black border-l-4 border-transparent hover:border-black transition-colors"
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
                                    className="w-full px-6 py-4 text-left text-gray-800 font-medium hover:text-black flex justify-between items-center bg-gray-50/50"
                                >
                                    Brands 
                                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${expandedMenu === 'brands' ? 'rotate-180' : ''}`}/>
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${expandedMenu === 'brands' ? 'max-h-[50vh] overflow-y-auto overscroll-contain' : 'max-h-0'}`}>
                                    {BRANDS_LIST.map(brand => (
                                        <button 
                                            key={brand} 
                                            onClick={() => { 
                                                setBrandFilter(brand); // Set the brand
                                                setShopFilter('All');  // Reset category so brand isn't hidden
                                                setCurrentPage('shop'); 
                                                setMobileMenuOpen(false); 
                                            }} 
                                            className="w-full px-10 py-3 text-left text-sm text-gray-600 hover:text-black border-l-4 border-transparent hover:border-black transition-colors block truncate"
                                        >
                                            {brand}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Main Navigation Links */}
                            <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium border-b border-gray-50 hover:text-black">BLOG</button>
                            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium border-b border-gray-50 hover:text-black">ABOUT US</button>
                            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="px-6 py-4 text-left text-gray-800 font-medium border-b border-gray-50 hover:text-black">CONTACT</button>
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
    const orderId = queryParams.get('order_id');
    const statusParam = queryParams.get('status');

    if (storedCart.length === 0 || statusParam !== 'PAID') {
      setStatus('error');
      return;
    }

    // Proceed straight into parsing your EmailJS orchestration routines automatically
    const orderItemsHTML = storedCart
      .map(item => `• <b>${item.name}</b> (Brand: ${item.brand}) <br/> Qty: ${item.quantity} | Price: ₹${item.price}`)
      .join("<br/><br/>");

    const totalAmount = storedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const emailParams = {
      customer_name: storedUser.name,
      customer_email: storedUser.email || "Not Provided",
      customer_phone: storedUser.phone,
      shipping_address: storedUser.address,
      order_items: orderItemsHTML,
      total_amount: totalAmount.toLocaleString(),
      payment_id: orderId,
      order_id: orderId,
    };

    try {
      if (!window.emailjs) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve) => (script.onload = resolve));
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_PUBLIC_KEY
      );

      localStorage.removeItem("temp_cart");
      localStorage.removeItem("temp_user");
      setStatus("sent");
      showToast("Order confirmed and email sent!", "success");
    } catch (error) {
      console.error("Email processing anomaly detected:", error);
      setStatus("error");
      showToast("Payment processed successfully; inventory logging failed.", "error");
    }
  };

  processOrder();
}, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fbfbfb] text-center px-4">
      {status === "processing" && (
        <div className="animate-pulse">
          <h2 className="text-2xl font-serif mb-2">Verifying Payment.</h2>
          <p className="text-gray-500">Please do not close this window.</p>
        </div>
      )}

      {status === "sent" && (
        <div className="animate-fade-in bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h2 className="text-3xl font-serif mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for shopping with COSMATRIX. Your order details have been
            sent to our admin team.
          </p>
          <Button
            onClick={() => {
              window.history.replaceState(null, "", "/");
              navigateTo("home");
            }}
            className="w-full"
          >
            Return to Home
          </Button>
          <div className="mt-4 text-xs text-gray-400">Powered by Zomaxa Agency</div>
        </div>
      )}

      {status === "error" && (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-serif text-red-500 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-6">
            We could not verify your payment successfully. If amount is debited,
            please contact support with your payment reference.
          </p>
          <Button onClick={() => navigateTo("contact")}>Contact Support</Button>
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
                                        <img loading="lazy" src={item.image} alt={item.name} className="w-full h-full object-cover" />
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
  const whatsappUrl = `https://wa.me/8123453510?text=${encodeURIComponent(message)}`;

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
          <img loading="lazy" src="/image/logo-t.jpg" alt="COSMATRIX" className="h-12 w-auto object-contain" />
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
   
  const slides = [
    { 
        id: 1, 
        mobile: '/image/sl-1.jpg', 
        desktop: '/image/pc-1.jpg', 
        btnText: 'Start Shopping', 
        filter: 'All' 
    }, 
    { 
        id: 2, 
        mobile: '/image/sl-2.jpg', 
        desktop: '/image/pc-2.jpg', 
        btnText: 'Whitening',
        filter: 'Injection' 
    }, 
    { 
        id: 3, 
        mobile: '/image/sl-3.jpg', 
        desktop: '/image/pc-3.jpg', 
        btnText: 'Weight Management',
        filter: 'All' 
    }, 
    { 
        id: 4, 
        mobile: '/image/sl-4.jpg', 
        desktop: '/image/pc-4.jpg', 
        btnText: 'Anti-Aging',
        filter: 'All'
    }, 
    { 
        id: 5, 
        mobile: '/image/sl-5.jpg', 
        desktop: '/image/pc-5.jpg', 
        btnText: 'Hair Care',
        filter: 'Weight' 
    },
    { 
        id: 6, 
        mobile: '/image/sl-6.jpg', 
        desktop: '/image/pc-6.jpg', 
        btnText: 'Explore Collection', 
        filter: 'All' 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 60000);
    return () => clearTimeout(timer);
  }, [slides.length]);

  return (
  <div className="animate-fade-in bg-[#fbfbfb]">
    {/* TICKER - MOVED ABOVE SLIDES WITH MARQUEE EFFECT */}
    <div className="bg-black text-white/80 py-3 border-b border-white/10 overflow-hidden relative z-20">
        <div className="flex animate-marquee" style={{ width: '200%' }}>
            <div className="flex items-center gap-8 md:gap-12 px-4 text-[10px] md:text-xs tracking-widest uppercase font-medium whitespace-nowrap">
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E8A0BF]"/> 100% Authentic</span>
                <span className="flex items-center gap-2"><Truck size={14} className="text-[#E8A0BF]"/> Pan India Shipping</span>
                <span className="flex items-center gap-2"><Award size={14} className="text-[#E8A0BF]"/> Authorized Distributor</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#E8A0BF]"/> 24-48h Dispatch</span>
                <span className="flex items-center gap-2"><Globe size={14} className="text-[#E8A0BF]"/> Direct Sourcing</span>
                {/* Duplicate for seamless loop */}
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E8A0BF]"/> 100% Authentic</span>
                <span className="flex items-center gap-2"><Truck size={14} className="text-[#E8A0BF]"/> Pan India Shipping</span>
                <span className="flex items-center gap-2"><Award size={14} className="text-[#E8A0BF]"/> Authorized Distributor</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#E8A0BF]"/> 24-48h Dispatch</span>
                <span className="flex items-center gap-2"><Globe size={14} className="text-[#E8A0BF]"/> Direct Sourcing</span>
            </div>
            <div className="flex items-center gap-8 md:gap-12 px-4 text-[10px] md:text-xs tracking-widest uppercase font-medium whitespace-nowrap">
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#E8A0BF]"/> 100% Authentic</span>
                <span className="flex items-center gap-2"><Truck size={14} className="text-[#E8A0BF]"/> Pan India Shipping</span>
                <span className="flex items-center gap-2"><Award size={14} className="text-[#E8A0BF]"/> Authorized Distributor</span>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#E8A0BF]"/> 24-48h Dispatch</span>
                <span className="flex items-center gap-2"><Globe size={14} className="text-[#E8A0BF]"/> Direct Sourcing</span>
            </div>
        </div>
    </div>

    {/* HERO SECTION - SLIDER */}
    <div className="relative w-full min-h-[85vh] bg-black flex flex-col justify-end items-center text-center overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
          >
            {/* MOBILE IMAGE */}
            <div 
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url("${slide.mobile}")` }}
            />
            
            {/* DESKTOP IMAGE */}
            <div 
              className="absolute inset-0 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: `url("${slide.desktop}")` }}
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
        {/* Slide Navigation Buttons */}
        <button 
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-white/20 shadow-[0_0_10px_rgba(255,0,150,0.4)] flex items-center justify-center transition-all duration-300 hover:bg-black/90 hover:scale-110 active:scale-95"
        >
          <span className="text-white text-xl font-bold">{'‹'}</span>
        </button>

        <button 
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-white/20 shadow-[0_0_10px_rgba(255,0,150,0.4)] flex items-center justify-center transition-all duration-300 hover:bg-black/90 hover:scale-110 active:scale-95"
        >
          <span className="text-white text-xl font-bold">{'›'}</span>
        </button>
        
        {/* Dynamic Button Overlay */}
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


    {/* CURATED CATEGORIES */}
    <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { name: 'Whitening Injections', img: '/image/injcover.jpg', desc: 'Glutathione & Stem Cell', filter: 'Injection' },
                { name: 'Whitening Creams', img: '/image/creamcover.jpg', desc: 'Topical Formulations', filter: 'Cream' },
                { name: 'Whitening tablets/capsules', img: '/image/capsulecover.jpg', desc: 'Maintenance & Care', filter: 'Supplement' }
            ].map((cat, idx) => (
                <div 
                    key={idx}
                    onClick={() => { setShopFilter(cat.filter); navigateTo('shop'); }}
                    className="group relative h-[250px] md:h-[400px] overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
                    <img loading="lazy" src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-white font-serif text-2xl md:text-3xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                        <p className="text-white/80 text-xs md:text-sm font-light mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.desc}</p>
                        <span className="text-[#E8A0BF] text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Shop Now <ArrowRight size={12}/></span>
                    </div>
                </div>
            ))}
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
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {PRODUCTS.slice(0, 3).map(product => (
                 <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                    <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                        <img loading="lazy" src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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

    {/* NEW ARRIVALS GRID */}
    <section className="py-12 md:py-16 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8 md:mb-10">
            <div>
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">New Arrivals</h2>
                <div className="h-0.5 w-12 bg-[#E8A0BF] mt-3"></div>
            </div>
            <button onClick={() => navigateTo('shop')} className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#E8A0BF] transition-colors">Shop New <ArrowRight size={16}/></button>
        </div>
        
        {/* Mobile Horizontal Scroll */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {/* Note: This takes items 4, 5, and 6 from your PRODUCTS array. Adjust the slice numbers if needed based on your array length! */}
            {PRODUCTS.slice(3, 6).map(product => (
                 <div key={product.id} className="group cursor-pointer min-w-[260px] md:min-w-0 snap-start" onClick={() => navigateTo('product', product)}>
                    <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                        {/* NEW Badge overlay */}
                        <div className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded z-10">New</div>
                        
                        <img loading="lazy" src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                    <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-[#E8A0BF] transition-colors truncate">{product.name}</h3>
                    <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
                 </div>
            ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
            <button onClick={() => navigateTo('shop')} className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1">Shop New <ArrowRight size={14}/></button>
        </div>
      </div>
    </section>

  </div>
  );
};

const ShopView = ({ navigateTo, addToCart, filter, setFilter, brandFilter, setBrandFilter, searchQuery, setSearchQuery }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Normalised filtering – case‑insensitive and trimmed
  const filteredProducts = PRODUCTS.filter(p => {
    const productCategory = (p.category || '').trim().toLowerCase();
    const currentFilter = filter.toLowerCase();
    const matchesCategory = filter === 'All' || productCategory === currentFilter;

    const productBrand = (p.brand || '').trim().toLowerCase();
    const currentBrand = brandFilter === 'All Brands' ? 'allbrands' : brandFilter.trim().toLowerCase();
    const matchesBrand = brandFilter === 'All Brands' || productBrand === currentBrand;

    const search = searchQuery.trim().toLowerCase();
    const matchesSearch = search === '' ||
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search);

    return matchesCategory && matchesBrand && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const CategoryButton = ({ name, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${
        active ? 'bg-black text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {name}
      {active && <Check size={14} className="text-[#E8A0BF]" />}
    </button>
  );

  return (
    <div className="animate-fade-in bg-[#fbfbfb] min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-black text-white py-8 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The Collection
          </h1>
        </div>
      </div>

      {/* MOBILE CATEGORY SCROLL */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-100 py-3 px-4 shadow-sm overflow-x-auto flex gap-3 scrollbar-hide">
        <button
          onClick={() => { setFilter('All'); setBrandFilter('All Brands'); }}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
            filter === 'All' && brandFilter === 'All Brands'
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-600 border-gray-200'
          }`}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setFilter(cat.name); setBrandFilter('All Brands'); }}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              filter === cat.name ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'
            }`}
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
                <CategoryButton
                  name="View All"
                  active={filter === 'All'}
                  onClick={() => { setFilter('All'); setBrandFilter('All Brands'); }}
                />
                {CATEGORIES.map(cat => (
                  <CategoryButton
                    key={cat.id}
                    name={cat.name}
                    active={filter === cat.name}
                    onClick={() => { setFilter(cat.name); setBrandFilter('All Brands'); }}
                  />
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-serif text-lg mb-4">Brands</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div
                    className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${
                      brandFilter === 'All Brands' ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'
                    }`}
                  >
                    {brandFilter === 'All Brands' && <Check size={10} className="text-white" />}
                  </div>
                  <input
                    type="radio"
                    name="brand"
                    className="hidden"
                    checked={brandFilter === 'All Brands'}
                    onChange={() => { setBrandFilter('All Brands'); setFilter('All'); }}
                  />
                  <span className={`text-sm ${brandFilter === 'All Brands' ? 'text-black font-medium' : 'text-gray-600'}`}>
                    All Brands
                  </span>
                </label>
                {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${
                        brandFilter === brand ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'
                      }`}
                    >
                      {brandFilter === brand && <Check size={10} className="text-white" />}
                    </div>
                    <input
                      type="radio"
                      name="brand"
                      className="hidden"
                      checked={brandFilter === brand}
                      onChange={() => { setBrandFilter(brand); setFilter('All'); }}
                    />
                    <span className={`text-sm ${brandFilter === brand ? 'text-black font-medium' : 'text-gray-600'}`}>
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            {/* Sort & Count Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-black">{filteredProducts.length}</span> Results
              </p>

              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                    Sort by: <span className="text-gray-500 capitalize">{sortBy.replace('-', ' ')}</span>{' '}
                    <ChevronDown size={14} />
                  </div>
                  <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-lg p-1 w-40 flex flex-col">
                      <button
                        onClick={() => setSortBy('featured')}
                        className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${
                          sortBy === 'featured' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'
                        }`}
                      >
                        Featured
                      </button>
                      <button
                        onClick={() => setSortBy('price-asc')}
                        className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${
                          sortBy === 'price-asc' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'
                        }`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => setSortBy('price-desc')}
                        className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-50 ${
                          sortBy === 'price-desc' ? 'font-medium text-[#E8A0BF]' : 'text-gray-600'
                        }`}
                      >
                        Price: High to Low
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                <div className="hidden md:flex gap-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded ${viewMode === 'grid' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded ${viewMode === 'list' ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ${
                      viewMode === 'list' ? 'flex gap-6 p-4 border-gray-100' : ''
                    }`}
                    onClick={() => navigateTo('product', product)}
                  >
                    <div
                      className={`relative bg-[#f8f8f8] overflow-hidden ${
                        viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-square'
                      }`}
                    >
                      <img
                        loading="lazy"
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />

                      {viewMode === 'grid' && (
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">
                            {product.brand}
                          </span>
                        </div>
                      )}
                      {product.price > 12000 && viewMode === 'grid' && (
                        <div className="absolute top-3 right-3 bg-[#E8A0BF] text-white text-[8px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">
                          Best Seller
                        </div>
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
                      <div className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1.5">
                        {product.category}
                      </div>
                      <h3
                        className={`font-serif text-gray-900 leading-tight ${
                          viewMode === 'list' ? 'text-xl mb-2' : 'text-base mb-2 line-clamp-2 min-h-[2.5em]'
                        }`}
                      >
                        {product.name}
                      </h3>
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
                          <button className="text-xs font-medium border border-gray-200 px-4 py-2 rounded hover:border-black transition-colors">
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-32 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                    <Search size={36} />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">No matches found</h3>
                  <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setBrandFilter('All Brands'); setFilter('All'); }}
                    className="text-[#E8A0BF] text-sm font-medium hover:text-black transition-colors underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
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
            <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover" />
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
                   <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
            <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img loading="lazy" src={images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <div key={idx} onClick={() => setActiveImg(idx)} className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImg === idx ? 'border-[#E8A0BF]' : 'border-transparent'}`}><img loading="lazy" src={img} alt="" className="w-full h-full object-cover" /></div>
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
        href={`https://wa.me/8123453510?text=${encodeURIComponent(`Hello, I am interested in wholesale pricing for ${product.name}. My business type: Clinic / Salon / Reseller / Medical practitioner.`)}`}
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
                                <img loading="lazy" src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
const AboutView = ({ navigateTo }) => {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Updated stats based on your provided data
  const stats = [
    { id: 1, val: "2013", label: "Year Established" },
    { id: 2, val: "100+", label: "Products Available" },
    { id: 3, val: "20+", label: "Premium Brands" },
    { id: 4, val: "4.8/5", label: "Customer Rating" },
  ];
  
  return (
    <div className="animate-fade-in pb-24 bg-[#fbfbfb]">
      {/* HERO */}
      <div className="relative bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden">
           <div className="absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"></div>
           <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="text-[#E8A0BF] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block animate-slide-up">Established 2013</span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                Cosmatrix <br/><span className="italic text-gray-400 font-light">International</span>
              </h1>
              <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                Premium Trader, Retailer, and Wholesaler of Glutathione Injections, Skin Creams, and Aesthetic Fillers based in Bengaluru.
              </p>
           </div>
      </div>
  
      {/* MISSION SPLIT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img loading="lazy" src="/image/iv-abt.jpg" alt="Company Operations" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded max-w-xs shadow-lg">
                 <p className="font-serif text-lg italic">"We follow moral business policies and crystal pure transparency in all our transactions."</p>
                 <p className="text-xs font-bold uppercase tracking-widest mt-2">— Arish, CEO</p>
              </div>
           </div>
           <div>
              <span className="text-[#E8A0BF] font-bold tracking-widest uppercase text-xs mb-3 block">Our Mission</span>
              <h2 className="font-serif text-3xl md:text-5xl mb-6 text-gray-900 leading-tight">Catering to Expectations <br/>with Excellence</h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                 <p>
                   We direct all our activities to cater to the expectations of our customers by providing them with excellent quality products as per their gratification. Since 2013, we have focused on building long-term relationships by being responsive, easy to reach, and dependable.
                 </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
                 <div>
                     <h4 className="font-serif text-xl mb-1">Bengaluru, India</h4>
                     <p className="text-xs text-gray-400 uppercase tracking-widest">Headquarters</p>
                 </div>
                 <div>
                     <h4 className="font-serif text-xl mb-1">100% Satisfaction</h4>
                     <p className="text-xs text-gray-400 uppercase tracking-widest">Quality Guarantee</p>
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
  
      {/* WHY US (Replaced Cold Chain with Company Ethos) */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Why Choose Cosmatrix?</h2>
            <p className="text-gray-500 font-light">Dedicated to customer support, accessibility, and uncompromised quality.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} className="text-[#E8A0BF]" />
               </div>
               <h3 className="font-serif text-xl mb-3">Reliable Sourcing</h3>
               <p className="text-sm text-gray-500 font-light leading-relaxed">
                 Dependable sourcing of authentic glutathione injections, fillers, and weight management products from top global brands.
               </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Clock size={24} className="text-[#E8A0BF]" />
               </div>
               <h3 className="font-serif text-xl mb-3">Client Accessibility</h3>
               <p className="text-sm text-gray-500 font-light leading-relaxed">
                 We pride ourselves on personalized service, clear communication, and being easy to reach at every stage of the client journey.
               </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Award size={24} className="text-[#E8A0BF]" />
               </div>
               <h3 className="font-serif text-xl mb-3">Crystal Pure Transparency</h3>
               <p className="text-sm text-gray-500 font-light leading-relaxed">
                 Operating with strictly moral business policies and complete transparency in all our transactions to maintain healthy client relations.
               </p>
            </div>
        </div>
      </div>

      {/* BRANDS WE DEAL IN STRIP */}
      <div className="border-y border-gray-100 bg-[#fbfbfb] py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
            <h3 className="font-serif text-2xl text-gray-900">Brands We Deal In</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6 text-sm text-gray-500 font-medium">
            {['Glutax', 'Aqua Skin', 'Relumins', 'Bio-Rae', 'Lucchini', 'Core Switzerland', 'St Blanc', 'Neuramis', 'Dr James', 'Gluta c', 'Filorga', 'Juvederm', 'Daehan Nupharm', 'Monalisa', 'Bellast', 'Restylane', 'Vita Glow', 'Glowtiqa Paris', 'Ratiopharm', 'Allergan', 'Medytox', 'Botulax'].map((brand, idx) => (
                <span key={idx} className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-[#E8A0BF] hover:text-[#E8A0BF] transition-colors cursor-default">
                    {brand}
                </span>
            ))}
        </div>
      </div>
  
      {/* FAQ SECTION */}
      <div className="max-w-3xl mx-auto px-6 py-20">
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
  window.open(`https://wa.me/8123453510?text=${whatsappMessage}`, '_blank');
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
                                <p className="text-sm text-gray-500 mb-1">+91 81234 53510</p>
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
                                    Richards town<br/>
                                    Bangalore, Karnataka<br/>
                                    India
                                </p>
                            </div>
                        </div>
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

/* --- URL & SLUG HELPERS (CLEAN PATHS) --- */
const slugify = (str) => {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const getProductSlug = (product) => {
  if (!product) return '';
  const base = slugify(product.name || '');
  return product.id != null ? `${base}-${product.id}` : base;
};

const getPostSlug = (post) => {
  if (!post) return '';
  const base = slugify(post.title || '');
  return post.id != null ? `${base}-${post.id}` : base;
};

const buildPathForPage = (page, opts = {}) => {
  switch (page) {
    case 'home':
      return '/';
    case 'shop':
      return '/shop';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'blog':
      return '/blog';
    case 'blog-post':
      return opts.post ? `/blog/${getPostSlug(opts.post)}` : '/blog';
    case 'product':
      return opts.product ? `/product/${getProductSlug(opts.product)}` : '/shop';
    case 'terms':
      return '/terms';
    case 'privacy':
      return '/privacy';
    case 'shipping':
      return '/shipping';
    case 'return-policy':
      return '/return-policy';
    case 'refund-policy':
      return '/refund-policy';
    case 'success':
      return '/order-success';
    default:
      return '/';
  }
};

/**
 * Derive initial route (page + entities) from the current URL.
 * Supports both new clean paths (/product/slug) and legacy ?page=product&id= syntax.
 */
const getRouteFromLocation = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', product: null, post: null, path: '/' };
  }

  const { pathname, search } = window.location;
  const cleanPath = pathname.replace(/\/+$|^$/g, '') || '/';
  const segments = cleanPath.split('/').filter(Boolean);
  const params = new URLSearchParams(search || '');
  const pageParam = params.get('page');
  const idParam = params.get('id');

  let page = 'home';
  let product = null;
  let post = null;

  if (segments.length === 0) {
    // No path segments – fall back to legacy query params if present
    if (pageParam === 'product' && idParam) {
      const found = PRODUCTS.find(p => String(p.id) === String(idParam));
      if (found) {
        page = 'product';
        product = found;
        return { page, product, post, path: buildPathForPage('product', { product }) };
      }
    } else if (pageParam === 'blog-post' && idParam) {
      const foundPost = BLOG_POSTS.find(p => String(p.id) === String(idParam));
      if (foundPost) {
        page = 'blog-post';
        post = foundPost;
        return { page, product, post, path: buildPathForPage('blog-post', { post }) };
      }
    } else if (pageParam === 'shop') {
      page = 'shop';
    } else if (pageParam === 'about') {
      page = 'about';
    } else if (pageParam === 'contact') {
      page = 'contact';
    } else if (pageParam === 'blog') {
      page = 'blog';
    } else if (pageParam === 'terms') {
      page = 'terms';
    } else if (pageParam === 'privacy') {
      page = 'privacy';
    } else if (pageParam === 'shipping') {
      page = 'shipping';
    } else if (pageParam === 'return-policy') {
      page = 'return-policy';
    } else if (pageParam === 'refund-policy') {
      page = 'refund-policy';
    } else if (pageParam === 'success') {
      page = 'success';
    } else {
      page = 'home';
    }

    return { page, product, post, path: buildPathForPage(page, { product, post }) };
  }

  const [first, second] = segments;

  switch (first) {
    case '':
      page = 'home';
      break;
    case 'shop':
      page = 'shop';
      break;
    case 'about':
      page = 'about';
      break;
    case 'contact':
      page = 'contact';
      break;
    case 'blog':
      if (second) {
        const slug = second;
        const foundPost = BLOG_POSTS.find(p => getPostSlug(p) === slug);
        if (foundPost) {
          page = 'blog-post';
          post = foundPost;
        } else {
          page = 'blog';
        }
      } else {
        page = 'blog';
      }
      break;
    case 'product':
      if (second) {
        const slug = second;
        const found = PRODUCTS.find(p => getProductSlug(p) === slug);
        if (found) {
          page = 'product';
          product = found;
        } else {
          page = 'shop';
        }
      } else {
        page = 'shop';
      }
      break;
    case 'terms':
      page = 'terms';
      break;
    case 'privacy':
      page = 'privacy';
      break;
    case 'shipping':
      page = 'shipping';
      break;
    case 'return-policy':
      page = 'return-policy';
      break;
    case 'refund-policy':
      page = 'refund-policy';
      break;
    case 'order-success':
      page = 'success';
      break;
    default:
      page = 'home';
      break;
  }

  const path = buildPathForPage(page, { product, post });
  return { page, product, post, path };
};

/* --- SEO CONFIG --- */
// Consolidated and corrected SEO configuration helper
const getSeoConfig = (currentPage, selectedProduct, selectedPost) => {
  const siteBase = 'https://cosmatrix.in';
  const defaultImage = `${siteBase}/image/cosmatrix-og.jpg`;

  let title = 'Cosmatrix – Premium Skincare Products, Injectables & Wellness';
  let description =
    'Cosmatrix offers high-quality skincare products, injectables, skin boosters, and aesthetic wellness solutions with safe and trusted formulations.';
  let image = defaultImage;
  let canonical = `${siteBase}/`;
  let keywords =
    'Cosmatrix International, aesthetic injectables distributor, glutathione injections India, Aqua Skin, Glutax, Miracle White, clinical skincare supplier';
  let robots = 'index,follow';
  let jsonLd = null;

  const setCanonical = (path) => {
    // ensure path starts with '/'
    if (!path || path === '/') return `${siteBase}/`;
    return `${siteBase}${path}`;
  };

  switch (currentPage) {
    case 'home':
      title = 'Cosmatrix International | Glutathione, Fillers & Clinical Skincare Distributor';
      description =
        'Discover authentic glutathione injections, Aqua Skin, Miracle White, Neuramis fillers and clinical-grade whitening skincare supplied to clinics and distributors across India.';
      canonical = setCanonical('/');
      keywords =
        'Cosmatrix International, glutathione distributor, whitening injections, Aqua Skin, Glutax, Miracle White, clinical skincare distributor India';
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Cosmatrix International',
        url: siteBase,
        image: `${siteBase}/image/Cosmatrix.jpg`,
        logo: `${siteBase}/image/Cosmatrix.jpg`,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
      };
      break;

    case 'shop':
      title = 'Shop | Glutathione Injections, Miracle White, Aqua Skin & More – Cosmatrix';
      description =
        'Browse our curated range of glutathione injections, IV drips, Miracle White, Aqua Skin, whitening creams and clinical whitening solutions for professional use.';
      canonical = setCanonical(buildPathForPage('shop'));
      keywords =
        'buy glutathione injections India, Aqua Skin supplier, Miracle White injection, clinical whitening products, Cosmatrix shop, clinic supply injectables';
      break;

    case 'about':
      title = 'About Cosmatrix International | Professional Aesthetic Product Distributor';
      description =
        'Cosmatrix International partners with clinics and resellers to supply verified glutathione injectables, IV drips and premium whitening skincare with a clinical focus.';
      canonical = setCanonical(buildPathForPage('about'));
      keywords =
        'about Cosmatrix International, aesthetic distributor India, glutathione wholesaler, clinic-focused skincare supplier';
      break;

    case 'contact':
      title = 'Contact Cosmatrix International | Wholesale & Clinic Partnerships';
      description =
        'Reach out to Cosmatrix International for wholesale price lists, clinic onboarding and verified sourcing of glutathione injections, fillers and whitening products.';
      canonical = setCanonical(buildPathForPage('contact'));
      keywords =
        'contact Cosmatrix, clinic partnership, glutathione wholesale enquiry, whitening injection distributor contact';
      break;

    case 'blog':
      title = 'Clinical Journal | IV Therapy, Glutathione & PDRN Insights – Cosmatrix';
      description =
        'Read evidence-driven insights on glutathione science, IV infusion therapy, PDRN and clinical whitening protocols and safety standards for aesthetic practitioners.';
      canonical = setCanonical(buildPathForPage('blog'));
      keywords =
        'glutathione science, IV therapy insights, PDRN information, clinical whitening guidance, Cosmatrix clinical journal';
      break;

    case 'blog-post':
      if (selectedPost) {
        title = `${selectedPost.title} | Clinical Journal – Cosmatrix International`;
        description = selectedPost.excerpt || selectedPost.summary || description;
        image = selectedPost.image || defaultImage;
        canonical = setCanonical(buildPathForPage('blog-post', { post: selectedPost }));
        keywords = `${selectedPost.title}, ${selectedPost.category}, glutathione articles, IV therapy education, Cosmatrix blog`;
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: selectedPost.title,
          description: selectedPost.excerpt || selectedPost.summary || '',
          author: selectedPost.author || 'Cosmatrix Clinical Team',
          datePublished: selectedPost.date,
          image: setCanonical(selectedPost.image || '/image/Cosmatrix.jpg'),
          publisher: {
            '@type': 'Organization',
            name: 'Cosmatrix International',
            logo: {
              '@type': 'ImageObject',
              url: `${siteBase}/image/Cosmatrix.jpg`,
            },
          },
        };
      }
      break;

    case 'product':
      if (selectedProduct) {
        const shortDesc = selectedProduct.description || description;
        title = `${selectedProduct.name} | ${selectedProduct.brand} Supplier in India – Cosmatrix`;
        description = shortDesc.length > 155 ? shortDesc.slice(0, 152) + '…' : shortDesc;
        image = selectedProduct.image || defaultImage;
        canonical = setCanonical(buildPathForPage('product', { product: selectedProduct }));
        keywords = [
          selectedProduct.name,
          selectedProduct.brand,
          selectedProduct.category,
          'glutathione injection',
          'whitening injectable',
          'clinic supply',
          'Cosmatrix International',
        ]
          .filter(Boolean)
          .join(', ');
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: selectedProduct.name,
          image: [setCanonical(selectedProduct.image || '/image/Cosmatrix.jpg')],
          description,
          brand: {
            '@type': 'Brand',
            name: selectedProduct.brand,
          },
          sku: selectedProduct.sku || undefined,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: selectedProduct.price,
            availability: 'https://schema.org/InStock',
            url: canonical,
          },
        };
      }
      break;

    case 'terms':
      title = 'Terms & Conditions | Cosmatrix International';
      description =
        'Review the professional use terms, responsibilities and purchasing eligibility for Cosmatrix International clients, clinics and resellers.';
      canonical = setCanonical(buildPathForPage('terms'));
      keywords =
        'Cosmatrix terms and conditions, clinic supply terms, whitening injection terms, professional use policies';
      robots = 'noindex,follow';
      break;

    case 'privacy':
      title = 'Privacy Policy | Cosmatrix International';
      description =
        'Understand how Cosmatrix International handles, stores and protects your clinic and patient-related data.';
      canonical = setCanonical(buildPathForPage('privacy'));
      keywords =
        'Cosmatrix privacy policy, data protection, clinic data handling, patient data';
      robots = 'noindex,follow';
      break;

    case 'shipping':
      title = 'Shipping Policy | Cosmatrix International';
      description =
        'Learn about domestic shipping timelines, handling, packaging and cold-chain procedures for clinical aesthetic products from Cosmatrix.';
      canonical = setCanonical(buildPathForPage('shipping'));
      keywords =
        'Cosmatrix shipping policy, delivery of injectables, cold-chain handling, clinic supply logistics';
      robots = 'noindex,follow';
      break;

    case 'return-policy':
      title = 'Return Policy | Cosmatrix International';
      description =
        'View our guidelines for damaged, incorrect or compromised products and return eligibility for clinics and resellers.';
      canonical = setCanonical(buildPathForPage('return-policy'));
      keywords =
        'Cosmatrix return policy, damaged injectable return, clinic returns, whitening product returns';
      robots = 'noindex,follow';
      break;

    case 'refund-policy':
      title = 'Refund Policy | Cosmatrix International';
      description =
        'Read our refund conditions for cancelled orders, shipping issues and rare product disputes.';
      canonical = setCanonical(buildPathForPage('refund-policy'));
      keywords =
        'Cosmatrix refund policy, order refund, payment dispute resolution';
      robots = 'noindex,follow';
      break;

    case 'success':
      title = 'Order Received | Cosmatrix International';
      description =
        'Your order details have been received by the Cosmatrix fulfillment team. You will be contacted shortly on WhatsApp for confirmation.';
      canonical = setCanonical(buildPathForPage('success'));
      keywords =
        'Cosmatrix order confirmation, payment success, clinic order placed';
      robots = 'noindex,follow';
      break;

    default:
      break;
  }

  return { title, description, image, jsonLd, keywords, canonical, robots };
};
export default function CosmatrixApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null); 
  const [shopFilter, setShopFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All Brands'); // NEW: Lifted state
  const [searchQuery, setSearchQuery] = useState(''); 
  const [toast, setToast] = useState(null); 

  // Initialize and sync route with browser history
  useEffect(() => {
    const initialRoute = getRouteFromLocation();
    setCurrentPage(initialRoute.page);
    if (initialRoute.product) setSelectedProduct(initialRoute.product);
    if (initialRoute.post) setSelectedPost(initialRoute.post);

    const initialState = {
      page: initialRoute.page,
      product: initialRoute.product || null,
      post: initialRoute.post || null,
    };
    window.history.replaceState(initialState, '', initialRoute.path);

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        setSelectedProduct(event.state.product || null);
        setSelectedPost(event.state.post || null);
      } else {
        const route = getRouteFromLocation();
        setCurrentPage(route.page);
        setSelectedProduct(route.product || null);
        setSelectedPost(route.post || null);
      }
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Set Favicon
  useEffect(() => {
    const existingIcons = document.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach(el => el.remove());

    const link = document.createElement('link');
    link.type = 'image/jpeg';
    link.rel = 'shortcut icon';
    link.href = `/image/logo-t.jpg?v=${new Date().getTime()}`;
    document.head.appendChild(link);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const navigateTo = (page, item = null) => {
    if (page === 'product' && item) setSelectedProduct(item);
    if (page === 'blog-post' && item) setSelectedPost(item);

    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    const stateObj = {
      page,
      product: page === 'product' ? item : null,
      post: page === 'blog-post' ? item : null,
    };
    const path = buildPathForPage(page, { product: stateObj.product, post: stateObj.post });
    window.history.pushState(stateObj, '', path);
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

  const handlePayment = async (shippingDetails) => {
  try {
    const orderId = "COS-" + Date.now();
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // 1. Create Razorpay Order on backend
    const response = await fetch("https://cosmatrix-server.onrender.com/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalAmount,
        orderId: orderId,
      }),
    });

    const orderData = await response.json();

    if (!orderData.success) {
      showToast("Could not generate payment transaction session.", "error");
      return;
    }

    // Temporarily save cart and user parameters for the context recovery sequence
    localStorage.setItem("temp_cart", JSON.stringify(cart));
    localStorage.setItem("temp_user", JSON.stringify(shippingDetails));

    // 2. Configure and Open the Razorpay Overlay Checkbox Modal Setup
    const options = {
      key: "rzp_test_yourKeyId", // Paste your Public Key ID directly here or inject via environment config
      amount: orderData.amount,
      currency: "INR",
      name: "Cosmatrix International",
      description: "Premium Skincare Formulations Sourcing Order",
      image: "/image/Cosmatrix.jpg",
      order_id: orderData.order_id,
      handler: async function (razorpayResponse) {
        // This execution callback executes automatically when the user processes transaction frames
        try {
          const verifyRes = await fetch("https://cosmatrix-server.onrender.com/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: razorpayResponse.razorpay_order_id,
              razorpay_payment_id: razorpayResponse.razorpay_payment_id,
              razorpay_signature: razorpayResponse.razorpay_signature
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            // Re-route processing state over to structural success routes matching current view paths
            window.location.href = `/order-success?order_id=${razorpayResponse.razorpay_order_id}&status=PAID`;
          } else {
            showToast("Payment verification failed.", "error");
          }
        } catch (err) {
          console.error("Verification processing failed:", err);
          showToast("Network processing issues encountered during validation.", "error");
        }
      },
      prefill: {
        name: shippingDetails.name,
        email: shippingDetails.email,
        contact: shippingDetails.phone,
      },
      notes: {
        address: shippingDetails.address,
      },
      theme: {
        color: "#E8A0BF", // Theme synchronization with client asset profiles
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Checkout initiation process break encountered:", error);
    showToast("Checkout transaction initialization process context failed.", "error");
  }
};

  const { title, description, jsonLd, keywords, canonical, robots } = getSeoConfig(currentPage, selectedProduct, selectedPost);
  return (
    <div className="font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-[#E8A0BF] selection:text-black">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {robots && <meta name="robots" content={robots} />}
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={currentPage === 'product' ? 'product' : 'website'} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://shaatrading.in/image/Cosmatrix.jpg" />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
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
            setBrandFilter={setBrandFilter} // Passed Props
            setSearchQuery={setSearchQuery}
          />

          <main className="flex-grow">
            {currentPage === 'home' && <HomeView navigateTo={navigateTo} addToCart={addToCart} setShopFilter={setShopFilter} />}
            {/* Passed Props to ShopView */}
            {currentPage === 'shop' && <ShopView navigateTo={navigateTo} addToCart={addToCart} filter={shopFilter} setFilter={setShopFilter} brandFilter={brandFilter} setBrandFilter={setBrandFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
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