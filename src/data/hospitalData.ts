export interface Department {
  id: string;
  number: string;
  name: string;
  doctor: string;
  qualification: string;
  role: string;
  summary: string;
  focusAreas: string[];
  schedule: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'clinical' | 'inpatient' | 'emergency' | 'support';
  description: string;
  image?: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wards & Care' | 'Child Health' | 'Diagnostics & Pharmacy' | 'Hospital Architecture';
  image: string;
  caption: string;
  aspect?: 'wide' | 'tall' | 'square';
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'paediatrics',
    number: '01',
    name: 'Paediatrics & Neonatal Care',
    doctor: 'Dr. Radahamani',
    qualification: 'M.D. Paediatrics',
    role: 'Chief Consultant Paediatrician',
    summary: 'Dedicated clinical care for newborns, infants, children, and adolescents, backed by specialized neonatal phototherapy and radiant warming systems in a fear-free setting.',
    focusAreas: [
      'Newborn & Neonatal Intensive Care',
      'Child Growth & Nutritional Tracking',
      'Pediatric Immunization & Vaccination',
      'Acute Childhood Illness Management'
    ],
    schedule: 'Daily Morning & Evening OPD'
  },
  {
    id: 'general-medicine',
    number: '02',
    name: 'General Medicine & Diabetology',
    doctor: 'Dr. Vijayapandian',
    qualification: 'Diploma in Diabetology',
    role: 'Senior Physician & Diabetologist',
    summary: 'Comprehensive internal medicine diagnosis, long-term glycemic management for diabetes, cardiovascular risk reduction, and adult preventive healthcare.',
    focusAreas: [
      'Comprehensive Diabetes Management',
      'Hypertension & Metabolic Health',
      'Infectious Disease Triage & Cure',
      'Geriatric Health & Preventive Screenings'
    ],
    schedule: 'Mon – Sat | 9:00 AM – 8:00 PM'
  },
  {
    id: 'dermatology',
    number: '03',
    name: 'Dermatology & Skin Health',
    doctor: 'Dr. Jeevabharathi',
    qualification: 'M.D. Dermatology',
    role: 'Consultant Dermatologist',
    summary: 'Expert diagnosis and evidence-based treatments for clinical skin, hair, and nail disorders, including allergic dermatoses and paediatric skin conditions.',
    focusAreas: [
      'Chronic Eczema & Psoriasis Care',
      'Allergic Contact Dermatitis',
      'Pediatric & Neonatal Dermatology',
      'Infections of Skin, Hair & Nails'
    ],
    schedule: 'Scheduled Consultation Days'
  },
  {
    id: 'general-surgery',
    number: '04',
    name: 'General Surgery & Trauma',
    doctor: 'Dr. Jagadeesh',
    qualification: 'M.S. General Surgery',
    role: 'Consultant General & Trauma Surgeon',
    summary: 'Experienced surgical opinions, outpatient minor procedures, wound management, acute abdominal assessments, and coordinated surgical interventions.',
    focusAreas: [
      'Minor Surgical Interventions',
      'Emergency Trauma & Wound Suture',
      'Abdominal Surgical Assessment',
      'Post-Operative Recovery Care'
    ],
    schedule: 'Consultation & Emergency On-Call'
  },
  {
    id: 'orthopedics',
    number: '05',
    name: 'Orthopedics & Joint Care',
    doctor: 'Dr. Kumar',
    qualification: 'D.Ortho',
    role: 'Consultant Orthopedic Surgeon',
    summary: 'Targeted bone, joint, and musculoskeletal care with expertise in fracture stabilization, sports strain rehabilitation, arthritis relief, and back care.',
    focusAreas: [
      'Fracture Stabilization & Casting',
      'Osteoarthritis & Joint Pain Relief',
      'Spine & Lumbar Strain Care',
      'Musculoskeletal Trauma Management'
    ],
    schedule: 'Scheduled Weekly Clinics'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'op-ward',
    title: 'Outpatient (OP) Ward',
    category: 'clinical',
    description: 'Spacious, well-ventilated waiting halls and fast-track consultation channels for convenient same-day clinical visits.',
    image: '/images/reception-lounge.jpg',
    badge: 'Fast Triage'
  },
  {
    id: 'common-ip-ward',
    title: 'Common IP Ward',
    category: 'inpatient',
    description: 'Sanitized patient recovery ward equipped with comfortable medical beds, individual central oxygen ports, and dedicated nursing attention.',
    image: '/images/common-ip-ward.jpg',
    badge: 'Round-the-clock Nursing'
  },
  {
    id: 'four-single-rooms',
    title: 'Four Private Single Rooms',
    category: 'inpatient',
    description: 'Peaceful, air-conditioned private rooms designed for patient dignity, quiet recuperation, and comfortable family stay.',
    image: '/images/single-room-maternity.jpg',
    badge: 'Private & Peaceful'
  },
  {
    id: 'emergency-ward',
    title: 'Emergency Ward',
    category: 'emergency',
    description: 'Immediate acute assessment bay ready 24/7 with trained resuscitation gear and rapid clinical response protocols.',
    badge: '24/7 Ready'
  },
  {
    id: 'nicu',
    title: 'NICU (Neonatal ICU)',
    category: 'emergency',
    description: 'Specialized neonatal radiant warmers and precise temperature regulation units for vulnerable newborns.',
    image: '/images/nicu-infant-warmer.jpg',
    badge: 'Phoenix Incubator'
  },
  {
    id: 'picu',
    title: 'PICU (Pediatric ICU)',
    category: 'emergency',
    description: 'Continuous monitoring and supportive therapies tailored specifically to infants and growing children during acute phases.',
    badge: 'Child Focused'
  },
  {
    id: 'central-oxygen',
    title: 'Central Oxygen Supply',
    category: 'clinical',
    description: 'Direct pipeline infrastructure delivering continuous high-purity medical oxygen straight to every ward bed and emergency station.',
    image: '/images/ip-ward-oxygen.jpg',
    badge: 'Continuous Pipeline'
  },
  {
    id: 'laboratory',
    title: 'Diagnostic Laboratory',
    category: 'clinical',
    description: 'Fully equipped automated hematology counters (UNIKON 23S), binocular microscopy, and rapid biochemical diagnostic testing on-site.',
    image: '/images/diagnostic-laboratory.jpg',
    badge: 'On-site Results'
  },
  {
    id: 'x-ray',
    title: 'Digital X-Ray Facility',
    category: 'clinical',
    description: 'Low-radiation diagnostic radiography for rapid bone fracture analysis and chest evaluations.',
    badge: 'Fast Imaging'
  },
  {
    id: 'ecg',
    title: 'Digital ECG',
    category: 'clinical',
    description: 'Multi-channel electro-cardiogram screening for immediate cardiac rhythm assessment and diabetic wellness tracking.',
    badge: 'Instant Tracing'
  },
  {
    id: 'nebulizer',
    title: 'Nebulization Station',
    category: 'clinical',
    description: 'Dedicated ultrasonic and jet nebulization points for swift relief of paediatric wheezing, asthma, and respiratory congestion.',
    badge: 'Respiratory Relief'
  },
  {
    id: 'pharmacy',
    title: 'In-House 24/7 Pharmacy',
    category: 'support',
    description: 'Full-fledged dispensary stocking genuine pediatric syrups, critical care injectables, and diabetic medications around the clock.',
    image: '/images/vijay-pharmacy-counter.jpg',
    badge: '24/7 Open'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Hospital Reception & Outpatient Lounge',
    category: 'Hospital Architecture',
    image: '/images/reception-lounge.jpg',
    caption: 'The welcoming main outpatient reception featuring child-friendly seating, natural stone flooring, and soothing tones.',
    aspect: 'wide'
  },
  {
    id: 'g-2',
    title: 'In-House 24/7 Vijay Pharmacy',
    category: 'Diagnostics & Pharmacy',
    image: '/images/vijay-pharmacy-counter.jpg',
    caption: 'Full-service pharmaceutical dispensary operating day and night right inside the hospital premises.',
    aspect: 'wide'
  },
  {
    id: 'g-3',
    title: 'Clinical Diagnostic Laboratory',
    category: 'Diagnostics & Pharmacy',
    image: '/images/diagnostic-laboratory.jpg',
    caption: 'Automated UNIKON 23S hematology analyzer, dual-view microscopy, and rapid reagent workstations.',
    aspect: 'wide'
  },
  {
    id: 'g-4',
    title: 'Physician Consultation Suite',
    category: 'Wards & Care',
    image: '/images/consultation-room.jpg',
    caption: 'Serene consultation room designed for patient privacy, calm discussions, and thorough medical evaluations.',
    aspect: 'tall'
  },
  {
    id: 'g-5',
    title: 'Illuminated Pediatric Aquarium',
    category: 'Child Health',
    image: '/images/aquarium-display.jpg',
    caption: 'Live tropical aquatic display in the pediatric waiting area to engage children and melt away clinical tension.',
    aspect: 'tall'
  },
  {
    id: 'g-6',
    title: 'Common Inpatient Recovery Ward',
    category: 'Wards & Care',
    image: '/images/common-ip-ward.jpg',
    caption: 'Clean, open patient ward equipped with direct central oxygen connections and ergonomic medical beds.',
    aspect: 'wide'
  },
  {
    id: 'g-7',
    title: 'Phoenix Neonatal Infant Warmer',
    category: 'Child Health',
    image: '/images/nicu-infant-warmer.jpg',
    caption: 'Advanced neonatal warming unit providing precise microclimate and phototherapy support for vulnerable newborns.',
    aspect: 'tall'
  },
  {
    id: 'g-8',
    title: 'Child-Centric Waiting Corridor',
    category: 'Child Health',
    image: '/images/paediatric-op-corridor.jpg',
    caption: 'Colorfully illustrated corridors featuring beloved cartoon characters that put little patients at ease.',
    aspect: 'tall'
  },
  {
    id: 'g-9',
    title: 'Private Single Recovery Room',
    category: 'Wards & Care',
    image: '/images/single-room-maternity.jpg',
    caption: 'Individual single room offering privacy, bedside oxygen supply, and dedicated accommodations for family members.',
    aspect: 'wide'
  },
  {
    id: 'g-10',
    title: 'Central Medical Oxygen Infrastructure',
    category: 'Wards & Care',
    image: '/images/ip-ward-oxygen.jpg',
    caption: 'High-reliability piped oxygen points installed directly beside each patient recovery station.',
    aspect: 'wide'
  },
  {
    id: 'g-11',
    title: 'Pharmacy Cold-Chain Storage',
    category: 'Diagnostics & Pharmacy',
    image: '/images/pharmacy-inventory.jpg',
    caption: 'Controlled temperature refrigeration preserving insulin, biological vaccines, and delicate pediatric syrups.',
    aspect: 'wide'
  },
  {
    id: 'g-12',
    title: 'Hospital Architecture & Staircase',
    category: 'Hospital Architecture',
    image: '/images/hospital-staircase.jpg',
    caption: 'Modern glass-and-steel architectural atrium connecting ground level outpatient clinics to upper inpatient wards.',
    aspect: 'wide'
  }
];

export const HOSPITAL_CONTACT = {
  name: 'Vijay Hospital',
  tagline: 'Care That Grows With You.',
  phone: '9655109909',
  displayPhone: '+91 96551 09909',
  googleMapsUrl: 'https://maps.app.goo.gl/3vSH969PAquYgpBa6',
  address: 'Vijay Hospital, Vathalagundu - Peraiyur Main Road, Usilampatti, Madurai District, Tamil Nadu 625532',
  hours: {
    emergency: '24 Hours / 7 Days',
    pharmacy: '24 Hours Open',
    opd: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Emergency & Inpatient Services Open 24/7'
  }
};

