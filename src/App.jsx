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
  "name": "Glutax 50000000GS Advanced Recombined White Injections",
  "category": "Injection",
  "brand": "Glutax",
  "price": 13000,
  "image": "/image/Glutax-50000000GS.jpg",
  "description": "ReCombined White RNA | 50 Million GS",
  "details": "<strong>Glutax 50000000GS — Ultra-High Potency Skin Brightening Injection</strong><br/><br/>This advanced intravenous formulation delivers a concentrated dose of glutathione, a master antioxidant, directly into the bloodstream for systemic skin lightening and antioxidant benefits. The '50 Million GS' designation refers to its high-potency series within the Glutax line, designed for professional administration.<br/><br/><strong>Primary Mechanism & Key Ingredient:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Reduced L-Glutathione:</strong> The core active ingredient works by inhibiting the tyrosinase enzyme, which is crucial for melanin (pigment) production in the skin[citation:1].</li><li>Its potent antioxidant activity helps neutralize free radicals caused by UV exposure and pollution, potentially reducing oxidative stress linked to skin aging and uneven tone.</li></ul><br/><strong>Claimed Benefits & Actions:</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Skin Brightening:</strong> Aims to reduce overall melanin synthesis for a lighter skin complexion.</li><li><strong>Antioxidant Defense:</strong> Offers protection against environmental skin stressors.</li><li><strong>Detoxification Support:</strong> Glutathione plays a key role in the body's natural detox processes.</li><li><strong>Hydration & Elasticity:</strong> May improve skin moisture and firmness as a secondary effect.</li><li><strong>Hyperpigmentation Treatment:</strong> Targets sun spots, age spots, and melasma.</li></ul><br/><strong>Usage & Administration:</strong> Sold as a powder for reconstitution. Must be diluted in 200 mL of normal saline and administered via slow intravenous infusion over 30–40 minutes by a qualified healthcare professional. Aseptic technique is mandatory.<br/><br/><em class=\"text-xs text-gray-400\">Important Note: The use of intravenous glutathione for cosmetic skin whitening is an off-label application not universally approved by medical authorities. Efficacy and safety for this purpose are not fully established by large-scale clinical trials. Potential risks include injection site reactions, rare risks of kidney or liver strain with misuse, and Stevens-Johnson syndrome in very rare cases[citation:2][citation:3]. Consultation with a medical professional is essential prior to use.</em>",
  "benefits": ["High-Potency Glutathione", "Skin Brightening", "Antioxidant Protection", "Targets Hyperpigmentation"],
  "sku": "GLU-50M-GS",
  "volume": "1 Box (For Professional Use)"
},
  {
  "id": 2,
  "name": "Saint Blanc XIII Quartet Glutathione Skin Whitening Injection",
  "category": "Injection",
  "brand": "Saint Blanc",
  "price": 11500,
  "image": "/image/Saint-blanc.jpg",
  "description": "Swiss Formulation | 13-Element Complex",
  "details": "<strong>Saint Blanc XIII Quartet — Multi-Targeted Brightening & Revitalization Therapy</strong><br/><br/>This Swiss-formulated injection presents a sophisticated 'Quartet' of four synergistic sets, each combining 13 influential active ingredients. The formula is designed to address skin brightening through multiple pathways: inhibiting melanogenesis, providing potent antioxidant defense, supporting collagen synthesis, and promoting cellular renewal.<br/><br/><strong>Complete Active Composition (Per Box/Full Course):</strong><br/><ul class=\"list-disc pl-5 mt-2 space-y-1\"><li><strong>Glutathione (miRNA Form):</strong> 90,000 mg (Total Course) – Primary tyrosinase inhibitor and master antioxidant for systemic skin lightening[citation:1].</li><li><strong>Ascorbic Acid (Vitamin C):</strong> 5000 mg – Potentiates glutathione's effect, directly inhibits melanin production, and boosts collagen synthesis.</li><li><strong>Epidermal Growth Factor (EGF) with RNS:</strong> 2000 mg – Stimulates skin cell proliferation and repair for improved texture and renewal.</li><li><strong>Celergen Marine Stem Cell Extract:</strong> 70,000 IU – Aims to support cellular longevity and tissue regeneration.</li><li><strong>Coenzyme Q10:</strong> 1500 mg – Mitochondrial antioxidant that protects skin cells from oxidative damage.</li><li><strong>Natural Collagen Extract:</strong> 200 mg – Provides building blocks for skin structure and elasticity.</li><li><strong>Alpha Lipoic Acid:</strong> 300 mg – Universal antioxidant that recycles other antioxidants like Vitamins C and E.</li><li><strong>Dimethylaminoethanol (DMAE):</strong> 500 mg – May improve skin firmness and facial muscle tone.</li><li><strong>Selenium:</strong> 200 mg / <strong>Cyanocobalamin (B12):</strong> 200 mg / <strong>Multivitamins:</strong> 200 mg / <strong>Amino Acids:</strong> Essential support for detoxification, energy, and protein synthesis.</li></ul><br/><strong>Mechanism of Action:</strong> The therapy employs a quartet strategy: 1) Direct melanin suppression (Glutathione, Vit C), 2) Cellular protection & detox (Antioxidants), 3) Structural support (Collagen, EGF), and 4) Metabolic enhancement (Vitamins, Amino Acids). This multifaceted approach aims for more comprehensive results than single-ingredient formulations.<br/><br/><strong>Administration:</strong> For professional intravenous (IV) or intramuscular (IM) use only. Protocol typically involves multiple sessions as part of a complete course. Aseptic technique must be followed.<br/><br/><em class=\"text-xs text-gray-400\">Important Notice: The extremely high dosage of active ingredients (e.g., 90,000 mg glutathione total course) necessitates administration under strict medical supervision. This is a potent pharmacological intervention, not a cosmetic supplement. Contraindications may include kidney disorders, certain autoimmune conditions, or pregnancy. Efficacy for skin whitening varies significantly, and long-term safety data for high-dose injectable antioxidant cocktails is limited[citation:2][citation:3].</em>",
  "benefits": ["13-Ingredient Swiss Complex", "Multi-Pathway Brightening", "Cellular Renewal Support", "High-Potency Antioxidant Blend"],
  "sku": "SAINT-BLANC-XIII-QRT",
  "volume": "1 Box Pack (Complete Quartet Course)"
},
  {
  "id": 3,
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
  "id": 4,
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
    id: 18,
    name: "Hieron Prefilled Injection",
    category: "Filler",
    brand: "Daehan Nupharm",
    price: 12500,
    image: "/image/IMG_1838.jpg",
    description: "Sodium Hyaluronate 2.5ml | Skin Booster",
    details: `
      <strong>Hyaron (Hieron) Prefilled Injection — Hyaluronic Acid Dermal Booster</strong><br/><br/>
      This is a non-crosslinked hyaluronic acid (sodium hyaluronate) dermal booster designed for mesotherapy. Unlike dermal fillers that provide structural support, skin boosters aim to improve skin quality through hydration and stimulation of collagen production[citation:19].<br/><br/>
      <strong>Key Specifications:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Sodium Hyaluronate – 20 mg/mL (non-crosslinked, low molecular weight)</li>
        <li>Volume – 2.5 mL per syringe</li>
        <li>pH – 7.0-7.5 (physiological range)</li>
        <li>Osmolality – Isotonic (approximately 300 mOsm/kg)</li>
      </ul>
      <br/>
      <strong>Mechanism of Action:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Hyaluronic acid binds up to 1000 times its weight in water, providing intense hydration</li>
        <li>Low molecular weight HA may stimulate fibroblast activity and collagen synthesis</li>
        <li>Improves skin elasticity and reduces the appearance of fine lines through hydration</li>
        <li>Creates a "glass skin" effect by enhancing skin transparency and light reflection</li>
      </ul>
      <br/>
      Recommended for individuals with dehydrated, dull skin or as adjunctive therapy to improve overall skin quality.<br/>
      <em class="text-xs text-gray-400">Medical Note: As with all injectables, risk of bruising, swelling, and rare vascular complications exist. Should be administered by trained professionals familiar with facial anatomy. Avoid in individuals with active skin infections or hypersensitivity to hyaluronic acid.</em>
    `,
    benefits: ["Non-Crosslinked HA", "Deep Hydration", "Collagen Stimulation", "Skin Quality Improvement"],
    sku: "HYARON-10",
    volume: "10 Syringes (2.5ml)"
  },
  {
    id: 19,
    name: "Glutax 8000000GS Ultimate Recombined White Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Glutax",
    price: 10600,
    image: "/image/IMG_1824.jpg",
    description: "Ultimate ReCombined White | 8 Million GS",
    details: `
      <strong>Glutax 8000000GS — miRNA-Enhanced Formulation</strong><br/><br/>
      This formulation incorporates microRNA (miRNA) technology alongside glutathione. miRNAs are small non-coding RNA molecules that can regulate gene expression, including genes involved in melanogenesis. However, the stability and delivery of therapeutic miRNAs remain challenging[citation:20].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Reduced L-Glutathione – 1,200 mg per session</li>
        <li>miRNA Complex (targeting MITF or tyrosinase pathways) – proprietary amount</li>
        <li>Recombinant Epidermal Growth Factor (EGF) – 15 mcg</li>
        <li>Vitamin B Complex with Vitamin E</li>
        <li>L-Glutamine – 100 mg (supports glutathione synthesis)</li>
      </ul>
      <br/>
      <strong>miRNA Technology Concept:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Certain miRNAs (like miR-25, miR-137) have been shown to regulate melanogenesis in vitro</li>
        <li>miRNAs may downregulate melanogenic enzymes or transcription factors</li>
        <li>Formulation challenges include protecting miRNAs from degradation and ensuring cellular uptake</li>
        <li>This represents an experimental approach combining traditional and emerging technologies</li>
      </ul>
      <br/>
      This advanced formulation is positioned for individuals interested in cutting-edge approaches to skin brightening.<br/>
      <em class="text-xs text-gray-400">Important Note: miRNA-based therapies for skin lightening are experimental. Clinical evidence in humans is limited. This should be considered an innovative but unproven approach beyond the established effects of glutathione.</em>
    `,
    benefits: ["miRNA Technology", "Gene Regulation Approach", "EGF Enhanced", "Innovative Formulation"],
    sku: "GLU-8M-GS",
    volume: "10 Sessions"
  },
  {
    id: 20,
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
    id: 21,
    name: "Aqua Skin Veniscy 188 TriNa Pico Cell Glutathione Injection",
    category: "Injection",
    brand: "Aqua Skin/Veniscy",
    price: 11500,
    image: "/image/IMG_1841.jpg",
    description: "TriNA Pico Cell Glutathione | High Strength",
    details: `
      <strong>Aqua Skin Veniscy 188 — Tri-Pathway Formulation</strong><br/><br/>
      This collaborative formulation combines glutathione with a nonapeptide (specifically, Palmitoyl Oligopeptide) and antioxidant complex. The "TriNA" designation suggests three pathways of action: antioxidant, peptide signaling, and metabolic support[citation:22].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Glutathione – 1,800 mg (higher concentration)</li>
        <li>Palmitoyl Oligopeptide (nonapeptide) – 20 mg (signal peptide for collagen)</li>
        <li>Coenzyme Q10 (Ubiquinol form) – 100 mg (lipid-soluble antioxidant)</li>
        <li>Veniscy Complex (proprietary antioxidant blend)</li>
        <li>Alpha Lipoic Acid – 150 mg (universal antioxidant)</li>
      </ul>
      <br/>
      <strong>Triple Action Approach:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione provides systemic antioxidant and tyrosinase inhibition</li>
        <li>Palmitoyl oligopeptide may signal fibroblasts to produce collagen and elastin</li>
        <li>Coenzyme Q10 (ubiquinol) protects mitochondrial membranes from oxidative damage</li>
        <li>Alpha lipoic acid recycles both glutathione and CoQ10</li>
      </ul>
      <br/>
      This comprehensive formula addresses hyperpigmentation while also supporting skin structure and cellular energy production.<br/>
      <em class="text-xs text-gray-400">Note: Peptides like Palmitoyl Oligopeptide are typically more effective in topical formulations where they can interact with surface receptors. Injectable efficacy for specific peptides requires further research.</em>
    `,
    benefits: ["High-Potency Glutathione", "Signal Peptide Technology", "Mitochondrial Support", "Comprehensive Antioxidant Protection"],
    sku: "AS-VENISCY-188",
    volume: "10 Sessions"
  },
  {
    id: 22,
    name: "Miracle White Purple 60000mg Glutathione Injection Prism Edition",
    category: "Injection",
    brand: "Miracle White",
    price: 11000,
    image: "/image/IMG_1850.jpg",
    description: "Exclusive Holographic Series",
    details: `
      <strong>Miracle White Prism Edition — Multidimensional Skin Enhancement</strong><br/><br/>
      This special edition formulation combines glutathione with light-diffusing technologies and enhanced growth factors. The "Prism" concept refers to creating multidimensional skin improvement through hydration, tone correction, and texture refinement[citation:23].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Reduced L-Glutathione – 1,000 mg</li>
        <li>Growth Factor Complex (TGF-β, FGF, VEGF analogs) – proprietary blend</li>
        <li>Hyaluronic Acid (multi-molecular weight) – 50 mg</li>
        <li>Vitamin C (tetrahexyldecyl ascorbate) – 500 mg (stable, lipid-soluble form)</li>
        <li>Silica Microspheres – minimal amount (for optical diffusion)</li>
      </ul>
      <br/>
      <strong>Multidimensional Effects:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Growth factors may support skin repair and regeneration processes</li>
        <li>Multi-weight hyaluronic acid provides both surface and deep hydration</li>
        <li>Silica microspheres (if present) can refract light to create optical smoothing</li>
        <li>Stable vitamin C ester provides prolonged antioxidant activity</li>
      </ul>
      <br/>
      Designed for individuals seeking comprehensive skin improvement beyond simple lightening, focusing on overall skin health and appearance.<br/>
      <em class="text-xs text-gray-400">Note: Growth factors are powerful biological agents. Ensure proper sourcing and purification. Not recommended for individuals with history of keloids or abnormal scarring.</em>
    `,
    benefits: ["Growth Factor Enhanced", "Multi-Dimensional Improvement", "Optical Diffusion Technology", "Skin Health Focus"],
    sku: "MW-PRISM",
    volume: "6 Sessions"
  },
  {
    id: 23,
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
    id: 24,
    name: "Miracle White gold 55000mg Exc Anti Melanogenic Glutathione Skin Whitening Injection",
    category: "Injection",
    brand: "Miracle White",
    price: 11000,
    image: "/image/IMG_1849.jpg",
    description: "Anti-Melanogenic Gold Edition",
    details: `
      <strong>Miracle White EXC Gold — Targeted Melanogenesis Inhibition</strong><br/><br/>
      This formulation specifically targets multiple points in the melanogenesis pathway. The "Anti-Melanogenic" designation indicates inclusion of ingredients that inhibit tyrosinase and related enzymes more aggressively than standard glutathione alone[citation:25].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Reduced L-Glutathione – 1,500 mg</li>
        <li>Kojic Acid – 75 mg (potent tyrosinase inhibitor)</li>
        <li>Colloidal Gold – 10 ppm (anti-inflammatory properties)</li>
        <li>Ascorbic Acid (Vitamin C) – 1,000 mg</li>
        <li>Alpha Lipoic Acid – 150 mg (inhibits NF-κB pathway involved in pigmentation)</li>
        <li>Arbutin (Alpha & Beta) – 50 mg (natural tyrosinase inhibitor)</li>
      </ul>
      <br/>
      <strong>Multi-Target Inhibition Strategy:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione: reduces oxidized melanin precursors and provides antioxidant support</li>
        <li>Kojic acid: chelates copper at tyrosinase active site</li>
        <li>Arbutin: competitive inhibitor of tyrosinase</li>
        <li>Alpha lipoic acid: may reduce inflammatory mediators that stimulate melanocytes</li>
        <li>Colloidal gold: may reduce inflammation-associated hyperpigmentation</li>
      </ul>
      <br/>
      This aggressive formulation is designed for resistant hyperpigmentation or individuals seeking maximum inhibition of melanin production.<br/>
      <em class="text-xs text-gray-400">Important: Kojic acid at higher doses may cause contact dermatitis or erythema in sensitive individuals. Always conduct a test dose. Not recommended for individuals with known sensitivity to kojic acid.</em>
    `,
    benefits: ["Multi-Pathway Inhibition", "Kojic Acid Enhanced", "Anti-Inflammatory Action", "Aggressive Formulation"],
    sku: "MW-EXC-GOLD",
    volume: "6 Sessions"
  },
  {
    id: 25,
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
    id: 30,
    name: "Cindyrella Magical Boost with NAD plus Glutathione Injection",
    category: "Injection",
    brand: "Cosmark",
    price: 14000,
    image: "/image/IMG_1901.JPG",
    description: "Complete IV Infusion | 980K Glutathione + NAD+ Cocktail | 30 Vials",
    details: `
      <strong>Cindyrella Magical Boost — Comprehensive IV Nutrient Therapy</strong><br/><br/>
      This is a comprehensive intravenous formulation combining glutathione with NAD+ (Nicotinamide Adenine Dinucleotide) precursors and other nutrients. IV administration provides 100% bioavailability, bypassing digestive limitations[citation:31].<br/><br/>
      <strong>Key Active Components (per vial):</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Reduced L-Glutathione – 1000 mg (980,000 mcg = 980 mg, rounded to 1000 mg)</li>
        <li>NAD+ Precursors (Nicotinamide Riboside or Nicotinamide Mononucleotide) – 200 mg</li>
        <li>Coenzyme Q10 (as ubiquinol) – 50 mg</li>
        <li>Marine Collagen Peptides – 200 mg</li>
        <li>Ascorbic Acid (Vitamin C) – 1000 mg</li>
        <li>B-Complex Vitamins (including B12)</li>
        <li>Alpha Lipoic Acid – 100 mg</li>
        <li>Electrolyte Balance (magnesium, potassium)</li>
      </ul>
      <br/>
      <strong>NAD+ Biology:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>NAD+ is a crucial coenzyme in cellular energy production (ATP synthesis)</li>
        <li>NAD+ levels decline with age, affecting mitochondrial function</li>
        <li>NAD+ precursors may support cellular repair and sirtuin activity</li>
        <li>IV NAD+ therapy is used in some clinics for energy restoration and anti-aging</li>
        <li>Combination with glutathione may enhance antioxidant defenses</li>
      </ul>
      <br/>
      This comprehensive IV formulation is designed for systemic rejuvenation, addressing both skin concerns and cellular energy metabolism.<br/>
      <em class="text-xs text-gray-400">Important: IV therapy must be administered by qualified medical personnel. Requires venous access and monitoring during infusion. Contraindicated in pregnancy, severe kidney/liver disease, certain cancers. Potential side effects include flushing, nausea, vein irritation. NAD+ may cause temporary anxiety or discomfort during infusion.</em>
    `,
    benefits: ["IV Administration (100% Bioavailability)", "NAD+ Cellular Energy Support", "Comprehensive Nutrient Cocktail", "Systemic Rejuvenation"],
    sku: "CINDY-MAGICAL-NAD",
    volume: "30 Vials (IV Infusion)"
  },
  {
    id: 31,
    name: "Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Skin Whitening",
    category: "Injection",
    brand: "Aqua Skin",
    price: 12000,
    image: "/image/IMG_1893.JPG",
    description: "TANA Pico-Cell Supreme Whitening & Anti-Aging | PRODIO Nonapeptide",
    details: `
      <strong>Aqua Skin TANA Pico-Cell — Advanced Peptide Delivery System</strong><br/><br/>
      This formulation utilizes TANA (Targeted Active Nano Absorption) technology with specific nonapeptides. Nonapeptides are 9-amino acid chains that can mimic natural signaling molecules in skin[citation:32].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione with Enhanced Delivery System – 1200 mg</li>
        <li>Palmitoyl Nonapeptide-3 (Matrixyl 3000) – 100 ppm</li>
        <li>Acetyl Hexapeptide-8 (Argireline) – 50 ppm</li>
        <li>SUNDIOR Complex (proprietary repair blend)</li>
        <li>Liposomal Encapsulation Technology</li>
      </ul>
      <br/>
      <strong>Peptide Mechanisms:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Palmitoyl Nonapeptide-3 may stimulate collagen I, III, and IV production</li>
        <li>Acetyl Hexapeptide-8 may inhibit neurotransmitter release, potentially reducing muscle contractions</li>
        <li>Liposomal delivery may enhance peptide stability and penetration</li>
        <li>Combination targets both pigmentation and dynamic expression lines</li>
      </ul>
      <br/>
      This advanced formulation is designed for individuals seeking comprehensive anti-aging alongside skin brightening benefits.<br/>
      <em class="text-xs text-gray-400">Note: Peptide efficacy via injection requires further clinical validation. Most peptide research is based on topical application. Ensure proper sterile technique during administration. Not for use in areas of active infection.</em>
    `,
    benefits: ["Peptide Technology", "Targeted Delivery System", "Collagen Stimulation", "Comprehensive Anti-Aging"],
    sku: "AQUA-TANA-PICO",
    volume: "10 Sessions"
  },
  {
    id: 32,
    name: "Lucchini Glutathione Peptide Pico Cell Brightening Solution Injection",
    category: "Injection",
    brand: "Lucchini",
    price: 14500,
    image: "/image/IMG_1911.JPG",
    description: "Pico-Cell Ubioritemine for Youthful Skin Restoration",
    details: `
      <strong>Lucchini Ubioritemine Solution — Skin Vitality Complex</strong><br/><br/>
      The "Ubioritemine" complex is designed to support skin's natural repair mechanisms and vitality factors. This formulation combines glutathione with peptides and nutrients that may support cellular energy and repair processes[citation:33].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione Peptide Conjugate – 1000 mg (enhanced stability)</li>
        <li>Ubioritemine Complex (amino acids, coenzymes, nucleotides)</li>
        <li>Nicotinamide (Vitamin B3) – 50 mg (NAD+ precursor)</li>
        <li>L-Carnitine – 100 mg (supports mitochondrial function)</li>
        <li>Trace Elements (zinc, copper, selenium)</li>
      </ul>
      <br/>
      <strong>Cellular Vitality Approach:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Peptide-conjugated glutathione may have improved cellular uptake</li>
        <li>Nicotinamide supports NAD+ production for cellular energy</li>
        <li>L-Carnitine facilitates fatty acid transport into mitochondria</li>
        <li>Trace elements are cofactors for antioxidant enzymes</li>
        <li>Focuses on improving overall skin cell function rather than just pigmentation</li>
      </ul>
      <br/>
      Suitable for individuals concerned with skin aging, fatigue, or dullness alongside hyperpigmentation concerns.<br/>
      <em class="text-xs text-gray-400">Note: This comprehensive approach requires consistent treatment. Results may be more subtle but holistic. Monitor for any reactions to peptide conjugates or other novel ingredients.</em>
    `,
    benefits: ["Skin Vitality Focus", "Peptide-Conjugated Glutathione", "Cellular Energy Support", "Holistic Improvement"],
    sku: "LUCCHINI-UBIORIT",
    volume: "10 Sessions"
  },
  {
    id: 33,
    name: "Aqua Skin Brilliant Diamond Max 80000mg",
    category: "Injection",
    brand: "Aqua Skin",
    price: 10000,
    image: "/image/IMG_1890.JPG",
    description: "Brilliant Diamond Max Series | Sparkling White Effect",
    details: `
      <strong>Aqua Skin Brilliant Diamond Max — Optical Brightening Technology</strong><br/><br/>
      This formulation combines glutathione with optical diffusers and high-purity ingredients to create immediate visual brightness alongside long-term pigment reduction. The "Sparkling White" effect refers to both pigment reduction and light reflection[citation:34].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ultra-Purified Glutathione – 1500 mg</li>
        <li>Mica or Silica Microspheres – minimal (optical diffusers)</li>
        <li>Alpha Lipoic Acid – 200 mg (potent antioxidant)</li>
        <li>Dimethylaminoethanol (DMAE) – 100 mg (may improve skin firmness)</li>
        <li>Multi-Vitamin Complex</li>
      </ul>
      <br/>
      <strong>Dual Visual Effects:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione works systemically to reduce melanin production over time</li>
        <li>Optical diffusers immediately scatter light, reducing appearance of shadows and pores</li>
        <li>Alpha lipoic acid recycles other antioxidants and may improve skin texture</li>
        <li>DMAE may increase acetylcholine, potentially improving muscle tone and firmness</li>
        <li>Combination creates both immediate and progressive results</li>
      </ul>
      <br/>
      Ideal for events or situations where immediate radiance is desired alongside long-term improvement.<br/>
      <em class="text-xs text-gray-400">Note: Optical effects are temporary and will diminish as microspheres are naturally exfoliated. The true brightening effects from glutathione require consistent treatment over several sessions.</em>
    `,
    benefits: ["Immediate Optical Brightening", "High-Purity Glutathione", "Dual Action (Immediate & Long-Term)", "Skin Firmness Support"],
    sku: "AQUA-DIAMOND-MAX80",
    volume: "10 Sessions"
  },
  {
    id: 34,
    name: "Cindyrella Celebrity Drip with NAD plus Glutathione Injection",
    category: "Injection",
    brand: "Cindyrella",
    price: 12000,
    image: "/image/IMG_1897.JPG",
    description: "Celebrity Edition IV Formula | Enhanced Potency NAD+ | 15 Vials",
    details: `
      <strong>Cindyrella Celebrity Drip — Premium IV NAD+ Therapy</strong><br/><br/>
      This premium version features enhanced NAD+ bioavailability and additional supportive nutrients. Higher NAD+ concentrations may provide more pronounced effects on cellular energy and repair mechanisms[citation:35].<br/><br/>
      <strong>Key Active Components (per vial):</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Pharmaceutical Grade Glutathione – 1500 mg</li>
        <li>Stabilized NAD+ Complex – 300 mg (higher concentration)</li>
        <li>Coenzyme Q10 (Ubiquinol) – 100 mg</li>
        <li>Vitamin C (as ascorbic acid) – 2000 mg</li>
        <li>B-Complex with Methylcobalamin (B12)</li>
        <li>Magnesium Glycinate – 50 mg</li>
        <li>L-Glutamine – 500 mg</li>
      </ul>
      <br/>
      <strong>Premium Formulation Rationale:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Higher NAD+ concentration may more effectively support sirtuin activation</li>
        <li>Ubiquinol (reduced CoQ10) is more bioavailable than ubiquinone</li>
        <li>Magnesium glycinate is highly absorbable and supports enzyme function</li>
        <li>L-Glutamine supports glutathione synthesis and gut health</li>
        <li>Designed for rapid, noticeable results in demanding schedules</li>
      </ul>
      <br/>
      This premium formulation is intended for intensive treatment protocols or individuals seeking maximum results in minimal time.<br/>
      <em class="text-xs text-gray-400">Critical: Higher NAD+ doses increase risk of side effects including anxiety, palpitations, and flushing during infusion. Must be administered by experienced medical personnel with appropriate monitoring equipment. Not for individuals with cardiovascular conditions, severe anxiety disorders, or during pregnancy/lactation.</em>
    `,
    benefits: ["Enhanced NAD+ Potency", "Premium Ingredients", "Rapid Results", "Comprehensive Cellular Support"],
    sku: "CINDY-CELEB-NAD",
    volume: "15 Vials (IV Infusion)"
  },
  {
    id: 35,
    name: "Quattrox Complexion 12 Infusion 4 Sessions Skin Whitening Injection",
    category: "Injection",
    brand: "Quattrox",
    price: 14500,
    image: "/image/IMG_1907.JPG",
    description: "Quattrox™ Technology with Melsmon Extract | Complexion Perfector",
    details: `
      <strong>Quattrox Complexion — Holistic Skin Quality Formulation</strong><br/><br/>
      This formulation utilizes Melsmon, a placental extract, alongside the Quattrox H.E.R.C. system (Hydration, Evenness, Radiance, Clarity). Placental extracts contain various growth factors, amino acids, and nutrients[citation:36].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Melsmon Placental Extract (porcine source) – 2 mL</li>
        <li>Glutathione – 1000 mg</li>
        <li>Hyaluronic Acid (multi-weight) – 50 mg</li>
        <li>Licorice Root Extract (Glabridin) – 50 mg</li>
        <li>Centella Asiatica Extract – 100 mg (soothing, healing)</li>
        <li>Niacinamide – 100 mg</li>
      </ul>
      <br/>
      <strong>Placental Extract Science:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Placental extracts contain various growth factors (EGF, FGF, TGF-β)</li>
        <li>Rich in amino acids, vitamins, and minerals</li>
        <li>May support tissue repair and regeneration</li>
        <li>Traditionally used in some Asian aesthetic medicine for rejuvenation</li>
        <li>Combined with glutathione for comprehensive complexion improvement</li>
      </ul>
      <br/>
      This holistic approach is designed for overall skin quality improvement rather than focused whitening alone.<br/>
      <em class="text-xs text-gray-400">Important: Placental extracts are biological materials. Ensure proper screening for allergies and infectious diseases. Not suitable for vegetarians/vegans. Use with caution in individuals with autoimmune conditions. Requires medical supervision.</em>
    `,
    benefits: ["Placental Extract Rejuvenation", "Holistic Complexion Focus", "Multi-Pathway Improvement", "Skin Quality Enhancement"],
    sku: "COSDAC-MELSMON-QUAT",
    volume: "10 Sessions"
  },
  {
    id: 36,
    name: "Iskin SLC24A5 Chromosome Phase IX Glutathione Whitening Injection",
    category: "Injection",
    brand: "iSkin",
    price: 24000,
    image: "/image/IMG_1910.JPG",
    description: "Gene-Targeted Whitening | SLC24A5 Inhibitor | 600mg/Vial Z-Glutathione",
    details: `
      <strong>iSkin SLC24A5 Phase IX — Genetic Pathway Modulation</strong><br/><br/>
      This advanced formulation targets the SLC24A5 gene, which encodes the NCKX5 protein involved in melanin synthesis. The approach combines glutathione with oligonucleotides or small molecules that may modulate gene expression[citation:37].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Z-Form Stabilized Glutathione – 600 mg/vial (higher concentration per vial)</li>
        <li>SLC24A5 Pathway Modulators (proprietary)</li>
        <li>TriNA Hydrate System (nucleotide delivery technology)</li>
        <li>DNA Protection Antioxidants</li>
        <li>Penetration Enhancing Complex</li>
      </ul>
      <br/>
      <strong>Genetic Science Background:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>SLC24A5 variations are associated with skin pigmentation differences in human populations</li>
        <li>NCKX5 protein is involved in potassium-dependent sodium/calcium exchange in melanosomes</li>
        <li>Modulating this pathway represents a novel approach to skin lightening</li>
        <li>Combined with high-dose glutathione for multiple mechanisms of action</li>
        <li>This represents cutting-edge research in cosmetic science</li>
      </ul>
      <br/>
      This advanced, research-based formulation is for individuals seeking the most innovative approaches to skin lightening.<br/>
      <em class="text-xs text-gray-400">Critical Note: Gene modulation therapies are experimental in cosmetic applications. Long-term effects and safety profiles are not fully established. Should only be administered by specialists with genetic counseling available. Not for pregnant/nursing women. Requires thorough informed consent regarding experimental nature. Monitor closely for unexpected reactions.</em>
    `,
    benefits: ["Gene-Targeted Approach", "High-Concentration Glutathione (600mg/vial)", "Cutting-Edge Technology", "Multiple Mechanism Action"],
    sku: "ISKIN-SLC24A5-PH9",
    volume: "10 Sessions (600mg/vial)"
  },
  {
    id: 37,
    name: "iskin Radianz Blue NAD+",
    category: "Injection",
    brand: "iSkin",
    price: 13500,
    image: "/image/IMG_1951.jpg",
    description: "Future Skin-Tech | Advanced Cellular Renewal",
    details: `
      <strong>iSkin Future Skin-Tech — Next Generation Bio-Revitalization</strong><br/><br/>
      This minimalist blue edition from iSkin focuses on the "Future Skin-Tech" platform, utilizing advanced delivery systems to ensure maximum absorption of active ingredients. It is designed to reset the skin's biological age through deep cellular hydration and repair[citation:38].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Concentrated L-Glutathione – High purity grade</li>
        <li>DNA/RNA Complex – Supports cellular repair mechanisms</li>
        <li>Epidermal Growth Factors (EGF) – Promotes tissue regeneration</li>
        <li>Hyaluronic Acid Complex – Multi-depth hydration</li>
        <li>Pro-Vitamin B5 & E – Barrier strengthening</li>
      </ul>
      <br/>
      <strong>Tech-Driven Skincare:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Focuses on biomimetic ingredients that replicate natural skin components</li>
        <li>Advanced stabilization technology prevents oxidation of active ingredients</li>
        <li>Designed for "Glass Skin" clarity and texture refinement</li>
      </ul>
      <br/>
      A premium choice for those seeking the reputable iSkin Swiss/German formulation standards in a concentrated maintenance therapy.<br/>
      <em class="text-xs text-gray-400">Note: This product emphasizes skin quality and texture alongside brightening. Results are best seen with consistent weekly applications.</em>
    `,
    benefits: ["Future Skin-Tech", "Cellular Reset", "Deep Hydration", "Swiss Formulation"],
    sku: "ISKIN-BLUE-TECH",
    volume: "10 Sets"
  },
  {
    id: 38,
    name: "Aqua Skin Veniscy 138 TriNA Pico-Cell",
    category: "Injection",
    brand: "Aqua Skin/Veniscy",
    price: 12500,
    image: "/image/IMG_2001.jpg",
    description: "TriNA Pico-Cell Pro Max Absorption | Matrixyl 9000",
    details: `
      <strong>Aqua Skin Veniscy 138 — High-Performance Peptide Matrix</strong><br/><br/>
      The 138th iteration of the famous collaboration between Aqua Skin and Veniscy introduces "TriNA Pico-Cell" technology. This formulation is heavily fortified with peptides (Matrixyl 9000) and high-dose glutathione for aggressive anti-aging and whitening[citation:39].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Ultimate Glutathione – 18,000,000 mg (Nano-concentration)</li>
        <li>Nonapeptide & Matrixyl 9000 – Potent anti-aging peptide complex</li>
        <li>Vegetal Placenta – Plant-derived bio-stimulants</li>
        <li>DMAE (Dimethylaminoethanol) – Skin firming agent</li>
        <li>Pro Coenzyme Q10 – Mitochondrial energy support</li>
      </ul>
      <br/>
      <strong>Mechanism of Action:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Matrixyl 9000:</strong> Signals fibroblasts to produce significantly more collagen</li>
        <li><strong>TriNA Pico-Cell:</strong> Ensures ingredients penetrate the cell wall efficiently</li>
        <li><strong>DMAE & ALA:</strong> Provide an immediate lifting and tightening effect</li>
      </ul>
      <br/>
      This is a "Pro Max" absorption formula, ideal for users who have hit a plateau with standard injections.<br/>
      <em class="text-xs text-gray-400">Clinical Note: The high peptide content makes this excellent for mature skin showing signs of sagging or deep wrinkles.</em>
    `,
    benefits: ["Matrixyl 9000 Peptides", "TriNA Pico-Cell", "Lifting Effect", "Aggressive Whitening"],
    sku: "AS-VENISCY-138",
    volume: "10 Sets"
  },
  {
    id: 39,
    name: "Miracle White 80,000",
    category: "Injection",
    brand: "Miracle White",
    price: 11800,
    image: "/image/IMG_1954.jpg",
    description: "Signature Radiance | Integral Whitening Care",
    details: `
      <strong>Miracle White Signature — The All-in-One Perfector</strong><br/><br/>
      Miracle White "Signature Radiance Integral Care" is designed as a complete solution covering the three pillars of skin aesthetics: Whitening, Moisturizing, and Antioxidant protection. It uses an "exclusive combination" to smooth skin tone to perfection[citation:40].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Nano-Concentrated Glutathione – Rapid absorption formula</li>
        <li>Integral Whitening Complex – Kojic Acid + Ascorbic Acid synergy</li>
        <li>Epidermal Repair Factors – Smooths rough texture</li>
        <li>Thioctic Acid (ALA) – Universal antioxidant</li>
        <li>Multi-Vitamin Cocktail – For overall skin health</li>
      </ul>
      <br/>
      <strong>Integral Care Approach:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Treats hyperpigmentation at the source (melanocyte inhibition)</li>
        <li>Provides deep dermal hydration to reflect light (Radiance effect)</li>
        <li>Creates a protective antioxidant shield against pollution</li>
      </ul>
      <br/>
      Suitable for those starting their journey or looking for a reliable, balanced whitening treatment without overly aggressive peeling agents.<br/>
      <em class="text-xs text-gray-400">Note: "Integral Care" implies a holistic approach. It is formulated to be gentle enough for sensitive skin while delivering visible radiance.</em>
    `,
    benefits: ["Signature Formula", "Integral Care", "Sensitive Skin Friendly", "Radiance Booster"],
    sku: "MW-SIGNATURE",
    volume: "6 Sets"
  },
  {
    id: 40,
    name: "Biocell Revital Pro",
    category: "Injection",
    brand: "Biocell",
    price: 10500,
    image: "/image/IMG_1999.jpg",
    description: "Renovation with Glutathione 150 Million mg",
    details: `
      <strong>Biocell Revital Pro — Genetic & Cellular Renovation</strong><br/><br/>
      Manufactured in Switzerland, Biocell Revital Pro boasts a massive 150,000,000mg (150 Million) glutathione designation. It features a unique "Renovation" complex including Argan Stem Cells and Chromosome signaling factors to rejuvenate skin at the genetic level[citation:41].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione (Nano Extract) – 150,000,000 mg designation</li>
        <li>Argan Stem Cell – Vitalizes dermal stem cells</li>
        <li>Chromosome & Q10 – Genetic protection and energy</li>
        <li>Citrus Aurantium Extract – Natural skin brightener</li>
        <li>Collagen (Natural) – 100,000 mg</li>
      </ul>
      <br/>
      <strong>Revital Technology:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Argan Stem Cells:</strong> Known to improve skin density and reduce wrinkle depth</li>
        <li><strong>Aminox Essential Amino Acids:</strong> Provides the building blocks for new protein synthesis</li>
        <li><strong>High-Dose Collagen:</strong> Restores elasticity and bounce to the skin</li>
      </ul>
      <br/>
      This formula is particularly strong on "renovation"—meaning it is excellent for repairing sun-damaged or aged skin.<br/>
      <em class="text-xs text-gray-400">Important: The "150 Million" figure refers to the molecular scale/potency of the proprietary complex, not physical weight. Requires professional administration.</em>
    `,
    benefits: ["Argan Stem Cells", "Genetic Renovation", "High-Dose Designation", "Swiss Quality"],
    sku: "BIO-REVITAL-PRO",
    volume: "10 Sets"
  },
  {
    id: 41,
    name: "NC24 90,000 Glutathione Injection",
    category: "Injection",
    brand: "NC24",
    price: 11000,
    image: "/image/nc2490k.jpg",
    description: "NC24™ Advanced Whitening | 90,000mg Glutathione",
    details: `
      <strong>NC24 90,000 — Advanced Whitening Formula</strong><br/><br/>
      NC24 90,000 is a high-potency glutathione injection designed for effective skin lightening and antioxidant protection. The formula combines glutathione with complementary agents to enhance its efficacy[citation:42].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 900 mg per vial (90,000 mg designation)</li>
        <li>Alpha Lipoic Acid – 100 mg (antioxidant synergy)</li>
        <li>Vitamin C – 500 mg (enhances glutathione recycling)</li>
        <li>Collagen Peptides – 200 mg (skin structure support)</li>
        <li>Multi-Vitamin Blend</li>
      </ul>
      <br/>
      <strong>Whitening Mechanism:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione inhibits tyrosinase, reducing melanin synthesis</li>
        <li>Alpha lipoic acid regenerates other antioxidants, enhancing overall effect</li>
        <li>Vitamin C supports collagen synthesis and skin brightening</li>
        <li>Collagen peptides improve skin texture and elasticity</li>
      </ul>
      <br/>
      Ideal for individuals seeking a balanced approach to skin lightening with added antioxidant benefits.<br/>
      <em class="text-xs text-gray-400">Note: The "90,000" designation refers to the potency level of the formulation, not the actual weight of glutathione. Consistent treatments yield best results.</em>
    `,
    benefits: ["Advanced Whitening", "Antioxidant Synergy", "Skin Structure Support", "Balanced Formula"],
    sku: "NC24-90000",
    volume: "10 Sets"
  },
  {    
    id: 42,
    name: "L-carnitine 20g",
    category: "injection",
    brand: "Ratiopharma",
    price: 5000,
    image: "/image/lcar20mg.jpg",
    description: "L-Carnitine 20g Injection | Fat Metabolism Support",
    details: `
      <strong>Ratiopharma L-Carnitine 20g Injection — Fat Metabolism Enhancer</strong><br/><br/>
      This injectable L-Carnitine formulation is designed to support fat metabolism and energy production. L-Carnitine plays a crucial role in transporting fatty acids into the mitochondria for oxidation[citation:43].<br/><br/>
      <strong>Key Features:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Carnitine Injection – 20 grams per vial</li>
        <li>Supports Fatty Acid Oxidation</li>
        <li>Enhances Energy Production</li>
        <li>May Aid in Weight Management</li>
        <li>Rapid Absorption via Injection</li>
      </ul>
      <br/>
      <strong>Mechanism of Action:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Carnitine transports long-chain fatty acids into mitochondria</li>
        <li>Facilitates the conversion of fat into usable energy (ATP)</li>
        <li>May improve exercise performance and recovery</li>
      </ul>
      <br/>
      Ideal for individuals seeking to enhance their metabolic health and support weight management efforts.<br/>
      <em class="text-xs text-gray-400">Important: This product should be administered by a healthcare professional. Consult with a healthcare provider before starting any new treatment, especially if you have underlying health conditions.</em>
    `,
    benefits: ["Fat Metabolism Support", "Rapid Absorption", "Energy Production", "Weight Management Support"],
    sku: "RATIO-LCARNITINE-20G",
    volume: "20g Injection"
  },
  {    
    id: 43,
    name: "L-carnitine 35g",
    category: "injection",
    brand: "Ratiopharma",
    price: 8500,
    image: "/image/lcar35mg.jpg",
    description: "L-Carnitine 35g Injection | Enhanced Fat Metabolism",
    details: `
      <strong>Ratiopharma L-Carnitine 35g Injection — Advanced Fat Metabolism Therapy</strong><br/><br/>
      This injectable L-Carnitine formulation is designed for rapid absorption and enhanced fat metabolism. L-Carnitine plays a crucial role in transporting fatty acids into the mitochondria for oxidation[citation:44].<br/><br/>
      <strong>Key Features:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>High-Dose L-Carnitine Injection – 35 grams per vial</li>
        <li>Supports Fatty Acid Oxidation</li>
        <li>Enhances Energy Production</li>
        <li>May Aid in Weight Management</li>
        <li>Rapid Absorption via Injection</li>
      </ul>
      <br/>
      <strong>Mechanism of Action:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>L-Carnitine transports long-chain fatty acids into mitochondria</li>
        <li>Facilitates the conversion of fat into usable energy (ATP)</li>
        <li>May improve exercise performance and recovery</li>
      </ul>
      <br/>
      Ideal for individuals seeking a more immediate effect on metabolic health and weight management.<br/>
      <em class="text-xs text-gray-400">Important: This product should be administered by a healthcare professional. Consult with a healthcare provider before starting any new treatment, especially if you have underlying health conditions.</em>
    `,
    benefits: ["Enhanced Fat Metabolism", "Rapid Absorption", "Energy Production", "Weight Management Support"],
    sku: "RATIO-LCARNITINE-35G",
    volume: "35g Injection"
  },
  {
    id: 44,
    name: "Relumins 3500mg Glutathione Capsule",
    category: "Supplement",
    brand: "Relumins",
    price: 3000,
    image: "/image/Relumins3500.jpg",
    description: "Relumins 3500mg Glutathione Capsules | Skin Brightening & Antioxidant Support",
    details: `
      <strong>Relumins 3500mg Glutathione Capsules — Premium Skin Brightening Supplement</strong><br/><br/>
      Relumins 3500mg Glutathione Capsules are designed to provide high-dose oral glutathione for skin brightening and antioxidant support. Glutathione is a powerful antioxidant that plays a key role in reducing melanin production and protecting cells from oxidative stress[citation:45].<br/><br/>
      <strong>Key Features:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>High-Dose Glutathione – 3500 mg per capsule</li>
        <li>Supports Skin Brightening</li>
        <li>Provides Antioxidant Protection</li>
        <li>May Improve Overall Skin Health</li>
        <li>Convenient Capsule Form</li>
      </ul>
      <br/>
      <strong>Mechanism of Action:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione inhibits tyrosinase, reducing melanin synthesis</li>
        <li>Neutralizes free radicals, protecting skin cells from damage</li>
        <li>Supports detoxification processes in the liver</li>
      </ul>
      <br/>
      Ideal for individuals seeking a convenient and effective oral supplement for skin brightening and overall antioxidant support.<br/>
      <em class="text-xs text-gray-400">Note: Consistent use over several weeks is recommended to see noticeable skin brightening effects. Consult with a healthcare professional before starting any new supplement regimen.</em>
    `,
    benefits: ["High-Dose Glutathione", "Skin Brightening", "Antioxidant Protection", "Convenient Capsule Form"],
    sku: "RELUMINS-3500MG-CAP",
    volume: "30 Capsules"
  },
  {
    id: 45,
    name: "Miracle white 18k",
    category: "Injection",
    brand: "Miracle White",
    price: 15000,
    image: "/image/Miraclewhite18K.jpg",
    description: "Miracle White 18K Gold Series | Luxurious Skin Brightening",
    details: `
      <strong>Miracle White 18K — Luxurious Skin Brightening Formula</strong><br/><br/>
      Miracle White 18K Gold Series is a premium skin brightening injection that combines high-dose glutathione with colloidal gold particles. The inclusion of gold is believed to enhance skin radiance and provide anti-inflammatory benefits[citation:46].<br/><br/>
      <strong>Key Active Components:</strong><br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione – 1000 mg per vial</li>
        <li>Colloidal Gold Particles – 18K purity</li>
        <li>Vitamin C – 500 mg (enhances glutathione recycling)</li>
        <li>Alpha Lipoic Acid – 100 mg (antioxidant synergy)</li>
        <li>Multi-Vitamin Blend</li>
      </ul>
      <br/>
      <strong>Luxurious Brightening Mechanism:</strong>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Glutathione inhibits tyrosinase, reducing melanin synthesis</li>
        <li>Colloidal gold may enhance skin radiance and reduce inflammation</li>
        <li>Vitamin C supports collagen synthesis and skin brightening</li>
        <li>Alpha lipoic acid regenerates other antioxidants, enhancing overall effect</li>
      </ul>
      <br/>
      Ideal for individuals seeking a luxurious and effective skin brightening treatment with added anti-inflammatory benefits.<br/>
      <em class="text-xs text-gray-400">Note: The inclusion of colloidal gold is primarily for its purported skin benefits. Consult with a healthcare professional before starting any new treatment.</em>
    `,
    benefits: ["Luxurious Formula", "Colloidal Gold", "Skin Radiance", "Anti-Inflammatory Benefits", "High-Dose Glutathione"],
    sku: "MW-18K-GOLD",
    volume: "10 Sets"
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
      const orderId = queryParams.get('order_id') || 'DEMO-' + Date.now();

      if (storedCart.length === 0) {
        setStatus('error');
        return;
      }

      // 1) Verify with backend -> Cashfree
      try {
        const res = await fetch(`https://cosmatrix-server.onrender.com/api/cashfree/status/${orderId}`);
        const data = await res.json();

        // If not paid, don't send email, show error instead
        if (!data || data.order_status !== 'PAID') {
          console.warn("Order not PAID, status:", data?.order_status);
          setStatus('error');
          return;
        }
      } catch (e) {
        console.error("Status check failed:", e);
        setStatus('error');
        return;
      }

      // 2) Build email content from local storage
      const orderItemsHTML = storedCart
        .map(
          (item) =>
            `• <b>${item.name}</b> (Brand: ${item.brand}) <br/>&nbsp;&nbsp; Qty: ${item.quantity} | Price: ₹${item.price}`
        )
        .join("<br/><br/>");

      const totalAmount = storedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

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
          script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
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
        console.error("Email Failed:", error);
        setStatus("error");
        showToast("Payment successful but email failed.", "error");
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

    {/* TRUSTED BY INDIA */}
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

    {/* NEW SECTION: TESTIMONIALS (Replaces The Cosmatrix Standard) */}
    <section className="py-20 md:py-24 bg-[#FFF5F7] border-y border-white/50 relative overflow-hidden">
        {/* Soft decorative background element */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffe4ec] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionHeader title="Professional Endorsements" subtitle="Trusted by leading dermatologists and clinics" center={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-pink-50 hover:shadow-lg transition-all duration-300 relative group">
                        <div className="absolute -top-4 -left-2 text-6xl text-[#E8A0BF] opacity-20 font-serif">“</div>
                        <p className="text-gray-600 font-light italic leading-relaxed mb-6 relative z-10">
                            {t.quote}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-serif font-bold text-lg">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                                <p className="text-xs text-[#E8A0BF] font-medium tracking-wide">{t.role}</p>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{t.clinic}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 font-light">Join our network of over 500+ satisfied partners.</p>
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

const ShopView = ({ navigateTo, addToCart, filter, setFilter, brandFilter, setBrandFilter, searchQuery, setSearchQuery }) => {
  // REMOVED: const [brandFilter, setBrandFilter] = useState('All Brands'); <-- This was the bug
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured'); 

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
      return 0; // featured
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

      {/* MOBILE CATEGORY SCROLL */}
      <div className="lg:hidden sticky top-20 z-30 bg-white border-b border-gray-100 py-3 px-4 shadow-sm overflow-x-auto flex gap-3 scrollbar-hide">
          <button 
              onClick={() => { setFilter('All'); setBrandFilter('All Brands'); }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-colors ${filter === 'All' && brandFilter === 'All Brands' ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200'}`}
          >
              All
          </button>
          {CATEGORIES.map(cat => (
              <button 
                  key={cat.id}
                  onClick={() => { setFilter(cat.name); setBrandFilter('All Brands'); }}
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
                        <CategoryButton name="View All" active={filter === 'All'} onClick={() => { setFilter('All'); setBrandFilter('All Brands'); }} />
                        {CATEGORIES.map(cat => (
                            <CategoryButton key={cat.id} name={cat.name} active={filter === cat.name} onClick={() => { setFilter(cat.name); setBrandFilter('All Brands'); }} />
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
                            <input type="radio" name="brand" className="hidden" checked={brandFilter === 'All Brands'} onChange={() => { setBrandFilter('All Brands'); setFilter('All'); }} />
                            <span className={`text-sm ${brandFilter === 'All Brands' ? 'text-black font-medium' : 'text-gray-600'}`}>All Brands</span>
                        </label>
                        {BRANDS_LIST.filter(b => b !== "All Brands").map(brand => (
                            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${brandFilter === brand ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-400'}`}>
                                    {brandFilter === brand && <Check size={10} className="text-white" />}
                                </div>
                                <input type="radio" name="brand" className="hidden" checked={brandFilter === brand} onChange={() => { setBrandFilter(brand); setFilter('All'); }} />
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
                                <img loading="lazy" src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                
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
                <img loading="lazy" src="/image/blog4.jpg" alt="Laboratory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
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

  const handlePayment = async (customerDetails) => {
    // Payment logic same as before...
    const total = cart.reduce((t, item) => t + item.price * item.quantity, 0);
    localStorage.setItem("temp_cart", JSON.stringify(cart));
    localStorage.setItem("temp_user", JSON.stringify(customerDetails));

    try {
      const orderId = "ORD_" + Date.now();
      const response = await fetch(
        "https://cosmatrix-server.onrender.com/api/cashfree/pay",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: customerDetails.name,
            mobile: customerDetails.phone,
            amount: total,
            orderId,
          }),
        }
      );
      const data = await response.json();
      if (data.success && data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        showToast("Payment failed. Try again.", "error");
      }
    } catch (err) {
      console.error("Payment error:", err);
      if (window.confirm("Backend unreachable. Simulate successful payment?")) {
        navigateTo("success");
        setCartOpen(false);
      }
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