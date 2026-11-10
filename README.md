# Vijay Hospital — Premium Editorial Landing Website

> *"Care That Grows With You."*

A luxury editorial, production-ready single-page landing website built specifically for **Vijay Hospital**, located in Usilampatti, Madurai District. 

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide React**, incorporating authentic hospital photography and custom design tokens adhering to strict creative design standards—deliberately avoiding AI tropes, repetitive template cards, or excessive gradients.

---

## 🌿 Visual Identity & Design Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Forest Green** | `#243D32` | Primary authority color, navbars, footer, hero headlines, badges |
| **Sage Green** | `#A8B99C` | Medical organic warmth, indicators, pill accents |
| **Olive** | `#727D50` | Botanical accent, subtle tags, hover accents |
| **Warm Ivory** | `#F5F1E8` | Primary background, tactile paper texture feel, anti-glare |
| **Soft Sand** | `#E5DCCB` | Section dividers, secondary cards, subtle outlines |
| **Muted Copper** | `#B77D5C` | Emergency CTA, clinical highlights, doctor credentials |
| **Charcoal** | `#292D29` | High-contrast readable typography for body text and labels |

### Typography
- **Cormorant Garamond**: Editorial large headings and quotes.
- **Manrope**: Clean, human body text and navigation.
- **Space Grotesk**: Numbered indexes (`01`, `02`), stats, and technical labels.

---

## 🏥 Authentic Hospital Photography Mapping

All images utilized across the landing page are genuine photographs taken on-site at Vijay Hospital:

1. **Main Atrium & Outpatient Lounge**: `public/images/hero-hospital-atrium.jpg` & `public/images/reception-lounge.jpg`
2. **In-House 24/7 Vijay Pharmacy**: `public/images/vijay-pharmacy-counter.jpg` & `public/images/pharmacy-inventory.jpg` (shows full storefront with contact number `9655109909`)
3. **Doctor's Consultation Suite**: `public/images/consultation-room.jpg` (consultation desk, stethoscope, Buddha mural)
4. **Neonatal Care & Radiant Warmer**: `public/images/nicu-infant-warmer.jpg` (Phoenix incubator warmer)
5. **Clinical Diagnostic Laboratory**: `public/images/diagnostic-laboratory.jpg` (UNIKON 23S automated hematology analyzer, dual microscopy)
6. **Common Inpatient Recovery Ward**: `public/images/common-ip-ward.jpg` & `public/images/ip-ward-recovery.jpg`
7. **Central Medical Oxygen Pipeline**: `public/images/ip-ward-oxygen.jpg`
8. **Private Single Recovery Room**: `public/images/single-room-maternity.jpg`
9. **Pediatric Murals & Play Spaces**: `public/images/paediatric-op-corridor.jpg` & `public/images/child-friendly-lounge.jpg`
10. **Illuminated Tropical Aquarium**: `public/images/aquarium-display.jpg` & `public/images/aquarium-detail.jpg`
11. **Modern Atrium Staircase**: `public/images/hospital-staircase.jpg`

---

## 📋 Sections Included

1. **Top Emergency Bar & Sticky Navbar**: Emergency helpline ticker (`9655109909`), custom medical-botanical crest, desktop and mobile responsive navigation drawer.
2. **Editorial Hero Section**: *"Care That Grows With You."* Asymmetric composition featuring real hospital photo, editorial stats, and direct booking CTAs.
3. **About Section**: *"Healthcare with a Human Touch."* Split layout featuring the doctor's consultation suite, grounded purely in factual care philosophy without fabricated history.
4. **Departments Section**: *"Expertise Across Specialities."* Custom editorial numbered list:
   - `01. Paediatrics` — Dr. Radahamani, M.D. Paediatrics
   - `02. General Medicine` — Dr. Vijayapandian, Diploma in Diabetology
   - `03. Dermatology` — Dr. Jeevabharathi, M.D.
   - `04. General Surgery` — Dr. Jagadeesh, M.S. General Surgery
   - `05. Orthopedics` — Dr. Kumar, D.Ortho
5. **Facilities Section**: *"Spaces Designed Around Care."* 12 verified hospital facilities (OP Ward, Common IP Ward, Four Single Rooms, Emergency Ward, NICU, PICU, Central Oxygen, Laboratory, X-Ray, ECG, Nebulizer, In-House 24/7 Pharmacy).
6. **Child-Friendly Care Section**: *"A Little More Comfort for Little Ones."* Showcases the live tropical aquarium, kids ride-on toys, and playful murals designed to eliminate clinic fear.
7. **Asymmetric Hospital Gallery**: Curated 12-image grid with category filters and fullscreen accessible lightbox (keyboard navigation with `Esc`, `Left`, and `Right` arrows).
8. **Contact & Location Hub**: Phone click-to-call (`9655109909`), Google Maps directions (`https://maps.app.goo.gl/3vSH969PAquYgpBa6`), and interactive Google Map embed.
9. **Footer**: Minimal, sophisticated footer with custom crest, legal notices, and quick navigation.

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Development Server
```bash
npm install
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

Server preview runs at `http://localhost:4173`.

