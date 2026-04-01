import {
  Check,
  Plane,
  Hotel,
  Car,
  Clock,
  HeartHandshake,
  Globe,
  MapPin,
  Stethoscope,
  Shield,
  Smile,
  BadgeDollarSign,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Microscope,
  Star,
  Phone,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CLINIC_NAME = "Sumukh Dental Clinic";
const DOCTOR_NAME = "Dr. Dipen Thakker";
const DOCTOR_DEGREE = "MDS Orthodontist";
const PHONE = "+91-8799527524";
const ADDRESS_STREET =
  "GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola";
const ADDRESS_CITY = "Ahmedabad";
const ADDRESS_STATE = "Gujarat";
const ADDRESS_PINCODE = "380060";
const CANONICAL_URL = "https://www.sumukhdentalclinic.com/dental-tourism";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const OG_IMAGE = `${SITE_BASE}/dental-tourism-in-ahmedabad.webp`;

export default function DentalTourismPage() {
  // ─── Data ────────────────────────────────────────────────────────────────
  const tourismServices = [
    {
      title: "Online Consultation & Treatment Planning",
      slug: "online-dental-consultation-india",
      description:
        "Begin your dental tourism journey before you travel with an initial virtual review of your concern, dental records, X-rays, scans, and treatment goals. Dr. Dipen Thakker will review your case and outline a preliminary treatment approach, timeline, and appointment sequence.",
      icon: Stethoscope,
      features: [
        "Virtual consultation before your arrival in India",
        "Review of dental photos, X-rays, and previous records",
        "Preliminary diagnosis and treatment recommendations",
        "Estimated treatment timeline and appointment planning",
        "Personalised planning tailored to international patients",
      ],
    },
    {
      title: "Travel & Stay Assistance",
      slug: "dental-tourism-travel-accommodation-ahmedabad",
      description:
        "We help make your dental visit to Ahmedabad smoother with practical guidance for travel date coordination, accommodation options close to the clinic, and a comfortable, stress-free stay for you and your family.",
      icon: Hotel,
      features: [
        "Guidance for nearby hotels and serviced apartments",
        "Support in choosing stay options close to the clinic",
        "Flexible appointment scheduling based on travel plans",
        "Assistance for patients travelling with family",
        "Better planning for a relaxed and organised visit",
      ],
    },
    {
      title: "Airport Pickup & Local Coordination",
      slug: "airport-pickup-local-travel-ahmedabad-dental",
      description:
        "From your arrival in Ahmedabad to your first clinic appointment, we help you plan local travel and reach us comfortably. Sardar Vallabhbhai Patel International Airport is approximately 20–25 minutes from the clinic.",
      icon: Car,
      features: [
        "Guidance for airport pickup and taxi arrangements",
        "Support with local travel and transport recommendations",
        "Easy clinic access from major hotels and areas",
        "Smooth coordination for your first appointment arrival",
        "Simple, friendly support for first-time visitors to India",
      ],
    },
  ];

  const benefits = [
    "Advanced dental care with personalised planning",
    "Excellent value for international patients",
    "Modern clinical approach and strict hygiene protocols",
    "Convenient travel-friendly treatment scheduling",
    "Dedicated support before, during, and after your visit",
    "Comprehensive treatment options under one roof",
  ];

  const whyChooseUs = [
    {
      title: "Advanced Dental Care",
      description:
        "We combine thoughtful treatment planning, modern dentistry, and a patient-focused clinical approach specifically designed for international visitors seeking quality care in India.",
      icon: Microscope,
    },
    {
      title: "Excellent Value",
      description:
        "International patients frequently choose dental tourism in Ahmedabad, India for access to high-quality dental treatment at significantly better value than in many Western countries.",
      icon: BadgeDollarSign,
    },
    {
      title: "Safe & Hygienic Environment",
      description:
        "We strictly follow sterilisation protocols and infection control standards, prioritising safety, comfort, and clinical clarity at every step of your treatment journey.",
      icon: Shield,
    },
    {
      title: "Personalised Patient Support",
      description:
        "From your very first enquiry to post-treatment follow-up after you return home, we guide you through every step of the process with dedicated attention and care.",
      icon: HeartHandshake,
    },
  ];

  const treatmentOptions = [
    {
      name: "Dental Implants",
      href: "/implants",
      desc: "Stable, natural-looking tooth replacement — one of the most popular treatments for international dental patients visiting India.",
    },
    {
      name: "Full Mouth Rehabilitation",
      href: "/smile-makeover",
      desc: "Comprehensive restoration of all teeth combining implants, crowns, bridges, and restorative care for patients with extensive dental needs.",
    },
    {
      name: "Smile Makeovers",
      href: "/smile-makeover",
      desc: "A personalised combination of cosmetic and restorative procedures to transform your smile during your visit to Ahmedabad.",
    },
    {
      name: "Veneers & Crowns",
      href: "/veneers",
      desc: "Highly aesthetic porcelain veneers and custom dental crowns for shape, colour, and smile correction — efficient treatment during a planned visit.",
    },
    {
      name: "Root Canal Treatment",
      href: "/root-canal",
      desc: "Modern, comfortable endodontic treatment to relieve tooth pain and preserve your natural tooth during your stay in Ahmedabad.",
    },
    {
      name: "Braces & Clear Aligners",
      href: "/orthodontics",
      desc: "Orthodontic treatment planning and commencement during your visit, with remote monitoring and follow-up support after your return.",
    },
    {
      name: "Dentures",
      href: "/preventive-restorative",
      desc: "Complete and partial denture solutions for patients requiring removable tooth replacement during a planned dental visit to India.",
    },
    {
      name: "Cosmetic Dentistry",
      href: "/smile-makeover",
      desc: "Teeth whitening, composite bonding, and aesthetic smile corrections — often combined with other treatments during a single visit.",
    },
  ];

  const helpfulBlogs = [
    {
      title: "Dental Tourism in Ahmedabad – Treatment, Travel & Cost Benefits",
      href: "/blog/dental-tourism-ahmedabad-guide",
      description:
        "See why international patients choose Ahmedabad for implants, veneers, smile makeovers, and coordinated care.",
    },
    {
      title: "Dental Implants in Ahmedabad – Cost, Procedure & Benefits",
      href: "/blog/dental-implants-ahmedabad-guide",
      description:
        "Understand implant treatment planning, healing, and suitability for international patients.",
    },
    {
      title: "Dental Veneers in Ahmedabad – Cost, Benefits & Smile Makeover Guide",
      href: "/blog/dental-veneers-ahmedabad-guide",
      description:
        "Explore veneers and smile enhancement options often chosen during dental tourism visits.",
    },
    {
      title: "Crowns and Bridges in Ahmedabad – Types, Cost & Benefits",
      href: "/blog/crowns-and-bridges-ahmedabad-guide",
      description:
        "Learn about crowns and bridges when planning restorative dentistry during your stay in India.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Share Your Concern",
      description:
        "Send us your dental concern, photographs, previous records, scans, or X-rays via our contact form or WhatsApp so we can review your case before your visit.",
    },
    {
      step: "2",
      title: "Receive a Treatment Plan",
      description:
        "Dr. Dipen Thakker reviews your records and provides a preliminary treatment approach, expected appointment sequence, and an estimated stay duration.",
    },
    {
      step: "3",
      title: "Plan Your Travel",
      description:
        "Your appointments are then coordinated with your travel dates, accommodation preferences, and overall convenience for a smooth dental tourism experience.",
    },
    {
      step: "4",
      title: "Begin Treatment in Ahmedabad",
      description:
        "On arrival, we assess your case clinically, confirm the treatment plan, and begin care in a comfortable, clean, and well-organised clinic environment.",
    },
  ];

  const faqs = [
    {
      q: "What dental treatments are most popular for dental tourism in Ahmedabad?",
      a: "Dental implants, full mouth rehabilitation, smile makeovers, crowns and veneers, root canal treatment, orthodontic care (braces and clear aligners), dentures, and cosmetic dentistry are among the most commonly chosen treatments by international patients visiting Sumukh Dental Clinic in Ahmedabad.",
    },
    {
      q: "Can I get a dental treatment plan before travelling to India?",
      a: "Yes. After reviewing your case details, photographs, dental scans, or X-rays, Dr. Dipen Thakker can share a preliminary treatment outline, expected appointment sequence, and estimated stay duration before you book your travel.",
    },
    {
      q: "Does Sumukh Dental Clinic help with accommodation and travel planning?",
      a: "Yes. We can guide you on nearby hotel and serviced apartment options, recommend local transport, and help coordinate your appointment schedule with your travel dates for a smoother and better-organised dental tourism experience.",
    },
    {
      q: "How long will I need to stay in Ahmedabad for dental treatment?",
      a: "The required stay depends entirely on the treatment needed. Some procedures such as crowns, veneers, and simple extractions can be completed within a short visit of 5–7 days. Advanced treatments like dental implants, full mouth rehabilitation, or orthodontic treatment may require a longer stay or multiple planned visits.",
    },
    {
      q: "Do you provide follow-up support after I return home?",
      a: "Yes. We remain available for post-treatment guidance, review of healing, and remote follow-up communication after your visit via WhatsApp, video call, or email. We ensure you feel supported even after you return home.",
    },
    {
      q: "Why should I choose Ahmedabad for dental tourism in India?",
      a: "Ahmedabad is a well-connected city with excellent international air links via Sardar Vallabhbhai Patel International Airport. It offers comfortable accommodation across all budgets, modern dental clinics, and significantly better value for dental treatment compared to Western countries — making it one of India's growing dental tourism destinations.",
    },
    {
      q: "Is dental treatment in India safe for international patients?",
      a: "Yes. Quality dental clinics in India including Sumukh Dental Clinic follow strict sterilisation and infection control protocols. Dr. Dipen Thakker is a qualified MDS Orthodontist with over 10 years of clinical experience and a certified Invisalign provider, ensuring a high standard of professional care for international patients.",
    },
  ];

  // ─── Schema Markup ────────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_BASE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dental Tourism in Ahmedabad",
        item: CANONICAL_URL,
      },
    ],
  };

  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${SITE_BASE}/#clinic`,
    name: CLINIC_NAME,
    url: SITE_BASE,
    logo: `${SITE_BASE}/logo.webp`,
    image: OG_IMAGE,
    telephone: PHONE,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Card, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_CITY,
      addressRegion: ADDRESS_STATE,
      postalCode: ADDRESS_PINCODE,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.0597",
      longitude: "72.5344",
    },
    areaServed: [
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "Country", name: "India" },
      { "@type": "Audience", audienceType: "International Patients" },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "Cosmetic Dentistry",
      "Implant Dentistry",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Tourism Treatments",
      itemListElement: treatmentOptions.map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: t.name,
          description: t.desc,
          url: `${SITE_BASE}${t.href}`,
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sumukhdentalclinic/",
      "https://www.facebook.com/profile.php?id=61572468867668",
    ],
    employee: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      jobTitle: DOCTOR_DEGREE,
      medicalSpecialty: "Orthodontics",
      worksFor: { "@type": "MedicalBusiness", name: CLINIC_NAME },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "167",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": CANONICAL_URL,
    url: CANONICAL_URL,
    name: `Dental Tourism in Ahmedabad, India | International Dental Care | ${CLINIC_NAME}`,
    description: `Plan your dental tourism visit to ${CLINIC_NAME} in Ahmedabad, India. Expert dental implants, smile makeovers, crowns, veneers, orthodontics, and comprehensive dental care for international patients with personalised support and travel coordination.`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Dental Tourism",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      medicalSpecialty: "Orthodontics",
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  // ─── Tracking ─────────────────────────────────────────────────────────────
  const trackTourismClick = (
    action:
      | "book-consultation"
      | "explore-services"
      | "schedule-evaluation"
      | "smile-simulation"
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: `Dental Tourism - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToAppointment = () => {
    trackTourismClick("book-consultation");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    trackTourismClick("explore-services");
    document.getElementById("tourism-services")?.scrollIntoView({ behavior: "smooth" });
  };

  // ─── Styles ───────────────────────────────────────────────────────────────
  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Dental Tourism in Ahmedabad, India | International Dental Care |{" "}
          {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Planning dental tourism in Ahmedabad, India? ${CLINIC_NAME} offers dental implants, smile makeovers, crowns, veneers, orthodontics, and comprehensive dental care for international patients — with personalised planning, travel support, and remote follow-up by ${DOCTOR_NAME}.`}
        />
        <meta
          name="keywords"
          content="dental tourism Ahmedabad, dental tourism India, dental treatment India international patients, dental implants India, smile makeover India, teeth treatment abroad India, dental clinic international patients Ahmedabad, affordable dental care India, orthodontist Ahmedabad international, dental tourism Gujarat"
        />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0597;72.5344" />
        <meta name="ICBM" content="23.0597, 72.5344" />

        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="en" href={CANONICAL_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={CLINIC_NAME} />
        <meta
          property="og:title"
          content={`Dental Tourism in Ahmedabad, India | International Dental Care | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Plan your dental tourism visit to ${CLINIC_NAME} in Ahmedabad, India. Dental implants, smile makeovers, crowns, orthodontics, and comprehensive care for international patients — with personalised support and travel coordination.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Dental tourism in Ahmedabad India — international dental care at Sumukh Dental Clinic"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Dental Tourism in Ahmedabad, India | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Expert dental care for international patients in Ahmedabad, India. Implants, smile makeovers, orthodontics & more at ${CLINIC_NAME}.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Dental tourism Ahmedabad India — Sumukh Dental Clinic"
        />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24"
          aria-label="Dental tourism hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol
                    className="flex items-center gap-1 text-sm text-slate-500"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    <li
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <Link
                        to="/"
                        className="hover:text-blue-600 transition-colors"
                        itemProp="item"
                      >
                        <span itemProp="name">Home</span>
                      </Link>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li className="text-slate-400">/</li>
                    <li
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <span className="text-blue-600 font-medium" itemProp="name">
                        Dental Tourism
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} aria-hidden="true" />
                  Dental Tourism in Ahmedabad, India
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-4">
                  Dental Tourism in Ahmedabad, India —
                  <span className="text-blue-500"> World-Class Care. Smooth Travel.</span>
                </h1>

                <p className="speakable text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Personalised International Dental Care at {CLINIC_NAME}
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for dental tourism in Ahmedabad, India? At {CLINIC_NAME},
                  we help international patients plan advanced dental treatment
                  including{" "}
                  <Link
                    to="/implants"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental implants
                  </Link>
                  ,{" "}
                  <Link
                    to="/smile-makeover"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    smile makeovers
                  </Link>
                  , crowns, veneers, and{" "}
                  <Link
                    to="/orthodontics"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    orthodontic treatment
                  </Link>{" "}
                  — with dedicated support from consultation through to travel
                  coordination and post-treatment follow-up. You can also read our{" "}
                  <Link
                    to="/blog/dental-tourism-ahmedabad-guide"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental tourism in Ahmedabad guide
                  </Link>{" "}
                  before planning your visit.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <Star
                      size={16}
                      className="text-yellow-500 fill-yellow-400"
                      aria-hidden="true"
                    />
                    <span>International Patient Support</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <MapPin size={16} className="text-blue-600" aria-hidden="true" />
                    <span>Ahmedabad · Gujarat · India</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToAppointment}
                    aria-label="Book dental tourism consultation at Sumukh Dental Clinic Ahmedabad"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Consultation
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    onClick={scrollToOptions}
                    aria-label="Explore dental tourism services in Ahmedabad"
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Dental Tourism Services
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 md:mt-10 text-center">
                  <div className="flex flex-col items-start sm:items-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
                      Planned
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                      Treatment Journey
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
                      Smooth
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                      Travel Support
                    </p>
                  </div>
                  <div className="flex flex-col items-end sm:items-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
                      Trusted
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug text-right sm:text-center">
                      Patient Care
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[700px]">
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-5 md:p-6 shadow-lg">
                    <div className="w-full h-[360px] sm:h-[460px] md:h-[620px] rounded-[1.5rem] overflow-hidden">
                      <img
                        src="/dental-tourism-in-ahmedabad.webp"
                        alt={`Dental tourism in Ahmedabad India — international dental care and treatment planning at ${CLINIC_NAME}`}
                        loading="eager"
                        fetchPriority="high"
                        width={700}
                        height={620}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ─────────────────────────────────────────────────── */}
        <section className="py-8 bg-white" aria-label="Why choose us highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Personalised Treatment Planning",
                "Modern Dental Care",
                "Travel-Friendly Scheduling",
                "Remote Follow-Up Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 px-4 py-4 text-center shadow-sm"
                >
                  <p className="text-sm md:text-base font-semibold text-blue-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Is Dental Tourism + Benefits ────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="what-tourism-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <article className={premiumCard}>
                <h2
                  id="what-tourism-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  What Is Dental Tourism in India?
                </h2>
                <p className="speakable text-lg text-slate-600 mb-6 leading-relaxed">
                  Dental tourism is when patients travel to another country — such
                  as India — to receive high-quality dental care, often at
                  significantly better value than in their home country, while also
                  enjoying a well-planned and supported treatment journey.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  India, and Ahmedabad in particular, has become a popular dental
                  tourism destination for patients from the UK, USA, Canada,
                  Australia, UAE, and other countries — offering advanced treatment
                  options, experienced clinicians, and excellent overall value for
                  international patients.
                </p>
              </article>

              <aside
                className={premiumCard}
                aria-label="Key benefits of dental tourism in Ahmedabad"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Key Benefits of Dental Tourism in Ahmedabad
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="bg-blue-500 rounded-full p-1 shadow-sm shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Why Choose Sumukh ─────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="why-sumukh-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2
                  id="why-sumukh-heading"
                  className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                >
                  Why International Patients Choose {CLINIC_NAME} for Dental
                  Tourism in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine thoughtful clinical treatment planning, modern
                  dentistry, travel-friendly scheduling, and dedicated patient
                  support to make your dental tourism experience in India smooth,
                  reassuring, and worthwhile.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <article
                    key={index}
                    className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm"
                  >
                    <div
                      className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      <item.icon className="text-blue-600" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <address className="not-italic mt-8 text-center text-sm text-slate-500">
                <strong className="text-slate-700">{CLINIC_NAME}</strong> ·{" "}
                {ADDRESS_STREET}, {ADDRESS_CITY} – {ADDRESS_PINCODE}, India ·{" "}
                <a
                  href={`tel:${PHONE}`}
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <Phone size={13} aria-hidden="true" />
                  {PHONE}
                </a>
              </address>
            </div>
          </div>
        </section>

        {/* ── Why Dental Tourism Matters ────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="why-tourism-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="why-tourism-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Why Dental Tourism in India Is Growing
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                More international patients are choosing India for dental care each
                year — for quality treatment, excellent value, organised planning,
                and the opportunity to combine dental visits with travel to a
                vibrant country.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  icon: <Plane className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Planned Travel",
                  desc: "Appointments are coordinated thoughtfully around your travel dates, return flight, and accommodation — minimising disruption to your schedule.",
                },
                {
                  icon: <Smile className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Smile Improvement",
                  desc: "Patients travel to Ahmedabad for treatments that improve comfort, chewing function, and confidence in their smile — with lasting results.",
                },
                {
                  icon: <Globe className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "International Convenience",
                  desc: "Ahmedabad has excellent international air connectivity, making it accessible for patients from the UK, UAE, USA, Canada, Australia, and beyond.",
                },
                {
                  icon: <Clock className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Efficient Scheduling",
                  desc: "Proper pre-trip planning and coordination means more can be achieved during a single visit — reducing the need for multiple return trips.",
                },
              ].map((card, i) => (
                <article key={i} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tourism Services ──────────────────────────────────────────── */}
        <section
          id="tourism-services"
          className="py-20 bg-white"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="services-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Dental Tourism Services at {CLINIC_NAME}, Ahmedabad
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our dental tourism support is designed to make treatment planning,
                travel coordination, and care as comfortable and well-organised as
                possible for international patients visiting Ahmedabad, India.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tourismServices.map((service, index) => (
                <article
                  key={index}
                  id={service.slug}
                  className={premiumCard}
                  aria-labelledby={`${service.slug}-heading`}
                >
                  <div
                    className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                    aria-hidden="true"
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3
                    id={`${service.slug}-heading`}
                    className="text-2xl font-bold text-blue-900 mb-3"
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div
                          className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm shrink-0"
                          aria-hidden="true"
                        >
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Helpful Blog Links ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="blogs-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="blogs-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Helpful Guides for International Dental Patients
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Read these articles before planning your trip so you understand
                treatment choices, restorative options, and what Ahmedabad offers
                international dental patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {helpfulBlogs.map((blog, index) => (
                <Link
                  key={index}
                  to={blog.href}
                  className="rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-7 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <span className="text-blue-600 font-semibold">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Popular Treatments ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="treatments-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="treatments-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Popular Dental Treatments for International Patients in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Patients commonly travel to Ahmedabad for restorative, cosmetic,
                implant, and orthodontic care — depending on their individual
                treatment needs and goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentOptions.map((item, index) => (
                <article key={index} className={premiumCard}>
                  <div
                    className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <Check className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    <Link
                      to={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.name} in Ahmedabad
                    </Link>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="process-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Your Dental Tourism Journey to Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every international patient visit to {CLINIC_NAME} is planned step
                by step to ensure you feel informed, prepared, and well-supported
                throughout your treatment in India.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <article
                    className={premiumCard}
                    aria-label={`Step ${item.step}: ${item.title}`}
                  >
                    <div
                      className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                  {index < process.length - 1 && (
                    <div
                      className="hidden md:block absolute top-10 -right-3 text-blue-300 text-4xl"
                      aria-hidden="true"
                    >
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why India + Why Ahmedabad ─────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="why-india-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <article className={premiumCard}>
                <div
                  className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <Globe className="text-blue-600" size={24} />
                </div>
                <h2
                  id="why-india-heading"
                  className="text-3xl font-bold text-blue-900 mb-4"
                >
                  Why Choose India for Dental Tourism?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  India is one of the world's most popular dental tourism
                  destinations, attracting patients from the UK, USA, Canada,
                  Australia, UAE, and beyond. It offers access to highly qualified
                  dental specialists, modern clinic infrastructure, and treatment at
                  a fraction of the cost in Western countries — without compromising
                  on quality.
                </p>
                <ul className="space-y-3" role="list">
                  {[
                    "Globally trusted destination for quality dental care",
                    "Significant cost savings compared to Western countries",
                    "Modern dentistry, technology, and clinical standards",
                    "Experienced, internationally trained dental specialists",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div
                        className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={premiumCard}>
                <div
                  className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Why Choose Ahmedabad for Dental Treatment?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ahmedabad offers excellent international connectivity via Sardar
                  Vallabhbhai Patel International Airport, a wide choice of
                  accommodation at all budget levels, easy local transport, and a
                  comfortable, modern city environment — making it a practical and
                  patient-friendly dental tourism destination in India.
                </p>
                <ul className="space-y-3" role="list">
                  {[
                    "International airport with direct flights from UAE, UK, and more",
                    "Wide choice of hotels and serviced apartments close to the clinic",
                    "Easy local transportation and clinic accessibility",
                    "Comfortable, modern city with good amenities for visitors",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div
                        className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── Map ───────────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="map-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="map-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Visit Our Dental Tourism Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad and easily
                accessible from the airport, hotels, and key city areas for
                international patients.
              </p>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-blue-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14683.187201738714!2d72.50903039999999!3d23.0679101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x395e9cb17a22743d%3A0xf474b73ad1ac69d5!2sSUMUKH%20DENTAL%20CLINIC%20ORTHODONTIC%20AND%20IMPLANT%20CENTRE%2C%20GF-20%2C%20Sudarshan%20Gold%2C%20Divine%20Rd%2C%20opp.%20Hyundai%20service%20centre%2C%20nr.%20Auda%20water%20tank%2C%20Science%20City%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0708467!2d72.5140505!4m5!1s0x395e9cb17a22743d%3A0xf474b73ad1ac69d5!2sSUMUKH%20DENTAL%20CLINIC%20ORTHODONTIC%20AND%20IMPLANT%20CENTRE%2C%20GF-20%2C%20Sudarshan%20Gold%2C%20Divine%20Rd%2C%20opp.%20Hyundai%20service%20centre%2C%20nr.%20Auda%20water%20tank%2C%20Science%20City%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0708467!2d72.5140505!5e0!3m2!1sen!2sin!4v1774967743418!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sumukh Dental Clinic Ahmedabad Location"
              />
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Sumukh+Dental+Clinic+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                <MapPin size={18} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700"
          aria-label="Book a dental tourism consultation"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Planning Your Dental Visit to India from Abroad?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We are here to help you plan a comfortable, organised, and confident
              dental tourism experience in Ahmedabad — from your first enquiry
              through to consultation, treatment, and post-visit follow-up.
            </p>
            <button
              onClick={scrollToAppointment}
              aria-label="Schedule a dental tourism consultation at Sumukh Dental Clinic Ahmedabad"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Schedule Your Free Consultation
            </button>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="faq-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Frequently Asked Questions About Dental Tourism in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600">
                Common questions international patients ask before planning dental
                treatment in India.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm shrink-0"
                      aria-hidden="true"
                    >
                      <HelpCircle className="text-white" size={14} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3" itemProp="name">
                        {faq.q}
                      </h3>
                      <div
                        itemScope
                        itemType="https://schema.org/Answer"
                        itemProp="acceptedAnswer"
                      >
                        <p className="text-slate-600 leading-relaxed" itemProp="text">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="pb-20 bg-white" aria-label="Final call to action">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Start Your Dental Tourism Journey to Ahmedabad with Confidence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering dental implants, smile enhancement,
                full mouth rehabilitation, or orthodontic treatment in Ahmedabad,
                India — {CLINIC_NAME} can help you plan your dental visit with
                clarity, care, and confidence.
              </p>
              <button
                onClick={scrollToAppointment}
                aria-label="Book a dental tourism consultation at Sumukh Dental Clinic Ahmedabad India"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book a Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        title="Popular Treatments for International Patients"
        subtitle="Many international patients travel to Ahmedabad for advanced, aesthetic, and full-smile rehabilitation procedures depending on their goals and timeline."
        links={[
          {
            title: "Dental Implants in Ahmedabad",
            href: "/implants",
            description:
              "One of the most popular dental tourism treatments — stable, natural-looking tooth replacement with long-term results.",
          },
          {
            title: "Smile Makeover in Ahmedabad",
            href: "/smile-makeover",
            description:
              "A personalised combination of cosmetic and restorative procedures for a complete smile transformation during your visit.",
          },
          {
            title: "Orthodontic Treatment in Ahmedabad",
            href: "/orthodontics",
            description:
              "Braces and clear aligner treatment with treatment commencement during your visit and remote monitoring support after your return.",
          },
        ]}
      />

      <section id="appointment">
        <AppointmentForm />
      </section>

      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}