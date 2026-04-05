import {
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smile,
  Clock,
  Microscope,
  HeartHandshake,
  Wand2,
  Star,
  MapPin,
  ScanLine,
  Phone,
  IndianRupee,
  BadgeCheck,
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
const CANONICAL_URL = "https://www.sumukhdentalclinic.com/aligners";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const OG_IMAGE = `${SITE_BASE}/braces/invisble-aligners-in-ahmedabad.webp`;

export default function AlignersPage() {
  // ─── Data ────────────────────────────────────────────────────────────────
  const alignerBenefits = [
    {
      title: "Virtually Invisible",
      description:
        "Clear aligners are made from transparent medical-grade plastic, making them far less noticeable than metal braces — a popular choice for adults and teens seeking aesthetic orthodontic treatment in Ahmedabad.",
    },
    {
      title: "Removable Convenience",
      description:
        "Aligners are completely removable while eating, brushing, and flossing, making oral hygiene easier and daily life more comfortable compared to fixed braces.",
    },
    {
      title: "Comfortable Fit",
      description:
        "Smooth, custom-made trays reduce irritation from brackets and wires while guiding your teeth gradually and precisely into alignment.",
    },
    {
      title: "Digital Smile Planning",
      description:
        "Advanced 3D iTero digital scans and smile simulation technology allow precise, predictable planning of every tooth movement before treatment even begins.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Smile Analysis",
      description:
        "Your teeth, bite, smile line, and facial profile are carefully evaluated by Dr. Dipen Thakker to determine whether clear aligners are the right treatment option for your case.",
    },
    {
      step: "2",
      title: "3D iTero Digital Scan",
      description:
        "A precise 3D intraoral scan of your teeth is taken using our in-house iTero scanner — no messy traditional impressions, more accurate results.",
    },
    {
      step: "3",
      title: "Customised Treatment Planning",
      description:
        "Your tooth movements are digitally mapped and a sequence of custom aligners is designed specifically for your smile, with a virtual preview of your expected result.",
    },
    {
      step: "4",
      title: "Progressive Smile Transformation",
      description:
        "Each aligner tray gradually shifts your teeth into alignment. You progress through the series every 1–2 weeks until your final planned smile is achieved.",
    },
  ];

  const candidates = [
    "Crowded or crooked teeth",
    "Spacing between teeth",
    "Mild to moderate bite problems",
    "Adults wanting discreet treatment",
    "Teens preferring removable appliances",
    "Patients seeking aesthetic orthodontics",
    "Relapse after previous braces treatment",
    "Professionals wanting invisible smile correction",
  ];

  const alignerTypes = [
    {
      name: "Invisalign Treatment",
      slug: "invisalign-ahmedabad",
      description:
        "Invisalign in Ahmedabad uses a globally recognised clear aligner system with advanced digital planning for precise, comfortable, and aesthetically superior smile correction. As certified Invisalign providers, we offer the full Invisalign range including Invisalign Lite and Invisalign Teen.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Invisalign treatment in Ahmedabad at Sumukh Dental Clinic, Sola Science City",
      features: [
        "Virtually invisible appearance during treatment",
        "Customised digital treatment planning with iTero",
        "Removable while eating, drinking, and brushing",
        "Comfortable smooth aligner trays — no metal parts",
        "Suitable for many adult and teen orthodontic cases",
      ],
      duration: "6–18 months",
    },
    {
      name: "Clear Aligners for Adults",
      slug: "clear-aligners-adults-ahmedabad",
      description:
        "Clear aligner treatment for adults in Ahmedabad who want to straighten teeth discreetly without the appearance of traditional braces. Ideal for working professionals who want effective orthodontic correction with a minimal visible footprint.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Clear aligners for adults in Ahmedabad — Sumukh Dental Clinic",
      features: [
        "Discreet professional appearance throughout treatment",
        "Removable for meetings, events, and photos",
        "Greater comfort than most fixed brace options",
        "No food restrictions during treatment",
        "Popular choice for smile-focused working adults",
      ],
      duration: "6–18 months",
    },
    {
      name: "Clear Aligners for Teens",
      slug: "clear-aligners-teens-ahmedabad",
      description:
        "A modern, convenient orthodontic solution for teens in Ahmedabad who prefer a more aesthetic and removable alternative to metal braces. Helps maintain confidence during the school years while effectively correcting teeth alignment.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Teen clear aligners treatment in Ahmedabad — Sumukh Dental Clinic",
      features: [
        "More aesthetic option for teens during treatment",
        "Helps maintain confidence in school and social settings",
        "Easy brushing, flossing, and oral hygiene",
        "Comfortable for daily wear and sport",
        "Suitable for selected growing patients",
      ],
      duration: "8–18 months",
    },
  ];



  const alignerBrands = [
    {
      title: "Invisalign",
      description:
        "A premium globally recognised aligner system with advanced digital treatment planning, strong research support, and excellent aesthetic appeal for many teen and adult cases.",
      icon: BadgeCheck,
    },
    {
      title: "Clear Aligners",
      description:
        "Custom clear aligners can be an effective option for suitable mild to moderate cases where patients want invisible braces and removable smile correction.",
      icon: Sparkles,
    },
    {
      title: "Invisible Braces Alternative",
      description:
        "For patients searching for invisible braces in Ahmedabad, clear aligners offer a more aesthetic and lifestyle-friendly option compared with metal braces in selected cases.",
      icon: Smile,
    },
  ];
  const helpfulBlogs = [
    {
      title: "Invisalign Cost in Ahmedabad",
      href: "/blog/invisalign-cost-ahmedabad",
      description:
        "Understand what affects clear aligner pricing, case complexity, and treatment planning.",
    },
    {
      title: "How Long Does Invisalign Take in Ahmedabad?",
      href: "/blog/how-long-does-invisalign-take-ahmedabad",
      description:
        "Learn how treatment duration depends on crowding, spacing, bite correction, and compliance.",
    },
    {
      title: "Do Clear Aligners Hurt?",
      href: "/blog/do-clear-aligners-hurt-ahmedabad",
      description:
        "Know what mild pressure or soreness to expect during aligner treatment.",
    },
    {
      title: "What Problems Can Invisalign Correct?",
      href: "/blog/what-problems-can-invisalign-correct-ahmedabad",
      description:
        "See which crowding, spacing, and selected bite issues can be treated with aligners.",
    },
    {
      title: "Braces vs Invisalign in Ahmedabad",
      href: "/blog/braces-vs-invisalign-ahmedabad",
      description:
        "Compare aligners and braces to understand which option may suit your smile best.",
    },
  ];

  const faqs = [
    {
      q: "How long does clear aligner treatment take in Ahmedabad?",
      a: "Treatment time depends on the complexity of the case. Most clear aligner treatments at Sumukh Dental Clinic are completed in 6 to 18 months. Simpler cases like mild crowding may take as little as 6 months.",
    },
    {
      q: "Are clear aligners noticeable when worn?",
      a: "Clear aligners are made from transparent medical-grade material and are designed to be much less noticeable than traditional metal braces. Most people will not notice them in everyday conversation.",
    },
    {
      q: "How many hours per day should aligners be worn?",
      a: "Aligners should be worn for 20 to 22 hours per day for optimal results. They are removed only for eating, drinking anything other than water, and for brushing and flossing.",
    },
    {
      q: "Are clear aligners painful?",
      a: "Patients may feel mild pressure for a few days when switching to a new aligner tray. This is a sign that the aligners are working and usually settles within 2–3 days.",
    },
    {
      q: "Can clear aligners treat complex orthodontic problems?",
      a: "Many orthodontic problems can be treated using clear aligners, including crowding, spacing, and mild bite issues. The ideal option depends on the severity of the case. Dr. Dipen Thakker will evaluate your case and advise accordingly.",
    },
    {
      q: "What is the cost of clear aligners or Invisalign in Ahmedabad?",
      a: "At Sumukh Dental Clinic, the cost of clear aligners or Invisalign in Ahmedabad usually ranges from ₹80,000 to ₹2,00,000 depending on the aligner system chosen, the complexity of your case, the amount of bite correction needed, and the expected treatment duration.",
    },
    {
      q: "What is the difference between Invisalign and other clear aligners?",
      a: "Invisalign is a globally recognised clear aligner brand with an extensive research base and advanced digital planning tools. Other aligner systems also offer effective treatment. Dr. Dipen Thakker will help you choose the most suitable option for your smile and budget.",
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
        name: "Clear Aligners & Invisalign",
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
      { "@type": "Neighborhood", name: "Sola" },
      { "@type": "Neighborhood", name: "Science City" },
      { "@type": "Neighborhood", name: "Thaltej" },
      { "@type": "Neighborhood", name: "Bodakdev" },
      { "@type": "Neighborhood", name: "Gota" },
    ],
    medicalSpecialty: ["Orthodontics", "Dentistry", "Cosmetic Dentistry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clear Aligner Treatments",
      itemListElement: alignerTypes.map((a) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: a.name,
          description: a.description,
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
      jobTitle: "MDS Orthodontist",
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
    name: `Clear Aligners & Invisalign in Ahmedabad | Invisible Braces Treatment | ${CLINIC_NAME}`,
    description:
      "Expert clear aligner and Invisalign treatment in Ahmedabad by Dr. Dipen Thakker at Sumukh Dental Clinic, Sola. Digital iTero scanning, personalised planning, and discreet smile correction.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Clear Aligner Treatment",
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
  const trackAlignerClick = (
    action:
      | "book-aligners-consultation"
      | "explore-aligner-options"
      | "smile-simulation"
      | "schedule-aligner-evaluation"
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
        content_name: `Aligners Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToAppointment = () => {
    trackAlignerClick("book-aligners-consultation");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
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
          Clear Aligners &amp; Invisalign in Ahmedabad | Invisible Braces Treatment |{" "}
          {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Looking for clear aligners or Invisalign in Ahmedabad? ${DOCTOR_NAME} (${DOCTOR_DEGREE}) at ${CLINIC_NAME} offers invisible braces, digital iTero smile planning, real case guidance, and personalised treatment in Sola, Science City.`}
        />
        <meta
          name="keywords"
          content="clear aligners Ahmedabad, Invisalign Ahmedabad, invisible braces Ahmedabad, best clear aligners Ahmedabad, Invisalign cost Ahmedabad, teeth straightening Ahmedabad, clear aligner treatment Ahmedabad, orthodontist Ahmedabad, iTero scan Ahmedabad, clear aligners Sola Ahmedabad"
        />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat" />
        <meta name="geo.position" content="23.0597;72.5344" />
        <meta name="ICBM" content="23.0597, 72.5344" />

        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="alternate" hrefLang="en-IN" href={CANONICAL_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={CLINIC_NAME} />
        <meta
          property="og:title"
          content={`Clear Aligners & Invisalign in Ahmedabad | Invisible Braces Treatment | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Expert Invisalign and clear aligner treatment in Ahmedabad by ${DOCTOR_NAME}. Digital iTero scanning, personalised smile planning, and discreet orthodontics at ${CLINIC_NAME}.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Clear aligners and Invisalign treatment in Ahmedabad at Sumukh Dental Clinic"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Clear Aligners & Invisalign in Ahmedabad | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Advanced Invisalign and clear aligner treatment in Ahmedabad by ${DOCTOR_NAME} at ${CLINIC_NAME}, Sola.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Clear aligners and Invisalign treatment in Ahmedabad"
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
          aria-label="Clear aligners hero"
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
                        Clear Aligners
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} aria-hidden="true" />
                  Clear Aligners & Invisalign in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-4">
                  Clear Aligners &amp; Invisalign in Ahmedabad
                  <span className="text-blue-500"> Invisible Braces Treatment</span>
                </h1>

                <p className="speakable text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Expert Invisalign Treatment by {DOCTOR_NAME}, {DOCTOR_DEGREE}
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for clear aligners in Ahmedabad? At {CLINIC_NAME}, Sola,
                  we provide advanced{" "}
                  <Link
                    to="/orthodontics"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    orthodontic treatment
                  </Link>{" "}
                  using Invisalign and invisible braces for patients who want a more
                  aesthetic, comfortable, and removable alternative to traditional
                  braces. From crowding and spacing to mild bite correction, we help
                  patients across Ahmedabad achieve confident smiles with personalised
                  3D digital planning. You can also read more about{" "}
                  <Link
                    to="/blog/invisalign-cost-ahmedabad"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Invisalign cost in Ahmedabad
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/blog/braces-vs-invisalign-ahmedabad"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    braces vs Invisalign
                  </Link>{" "}
                  before choosing your treatment.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <Star
                      size={16}
                      className="text-yellow-500 fill-yellow-400"
                      aria-hidden="true"
                    />
                    <span>167+ Google Reviews</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <MapPin size={16} className="text-blue-600" aria-hidden="true" />
                    <span>Sola · Science City · Ahmedabad</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToAppointment}
                    aria-label="Book clear aligners consultation at Sumukh Dental Clinic Ahmedabad"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Aligners Consultation
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4">
                  <a
                    href="https://providerbio-apac.invisalign.com/sv/1374312#start"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAlignerClick("smile-simulation")}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white/70 px-6 py-3 font-bold text-blue-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl"
                    aria-label="Try Invisalign smile simulation — Sumukh Dental Clinic Ahmedabad"
                    title="Try Your Invisalign Smile Simulation"
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-white/40 to-cyan-100/60 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <span className="relative flex items-center gap-2">
                      <Wand2 size={18} className="text-blue-600" aria-hidden="true" />
                      Try Your Smile Simulation
                    </span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 md:mt-10 text-center">
                  <div className="flex flex-col items-start sm:items-center">
                    <p className="text-[25px] sm:text-2xl md:text-3xl font-bold text-blue-900 leading-none">
                      Invisible
                    </p>
                    <p className="text-sm text-slate-500 leading-snug mt-1">
                      Aesthetic Treatment
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[25px] sm:text-2xl md:text-3xl font-bold text-blue-900 leading-none">
                      Removable
                    </p>
                    <p className="text-sm text-slate-500 leading-snug mt-1">
                      Lifestyle Friendly
                    </p>
                  </div>
                  <div className="flex flex-col items-end sm:items-center">
                    <p className="text-[25px] sm:text-2xl md:text-3xl font-bold text-blue-900 leading-none">
                      Digital
                    </p>
                    <p className="text-sm text-slate-500 leading-snug mt-1 text-right sm:text-center">
                      3D Smile Planning
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[700px]">
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-5 md:p-6 shadow-lg">
                    <div className="w-full h-[360px] sm:h-[460px] md:h-[620px] rounded-[1.5rem] overflow-hidden">
                      <img
                        src="/braces/invisble-aligners-in-ahmedabad.webp"
                        alt={`Clear aligners and Invisalign treatment by ${DOCTOR_NAME} at ${CLINIC_NAME}, Sola Science City`}
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
                "In-house 3D iTero Scanning",
                "Personalised Digital Planning",
                "Aesthetic Orthodontics",
                "Patient-Centered Care",
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

        {/* ── Why Clear Aligners ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="why-aligners-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="why-aligners-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Why Choose Clear Aligners in Ahmedabad?
              </h2>
              <p className="speakable text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Clear aligners are a popular orthodontic solution in Ahmedabad for
                patients who want straighter teeth without the appearance of metal
                braces. They are aesthetic, removable, comfortable, and digitally
                planned for precise, predictable smile correction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {alignerBenefits.map((item, index) => (
                <article key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    {index === 0 && (
                      <Smile className="text-blue-600" size={24} aria-hidden="true" />
                    )}
                    {index === 1 && (
                      <Check className="text-blue-600" size={24} aria-hidden="true" />
                    )}
                    {index === 2 && (
                      <ShieldCheck
                        className="text-blue-600"
                        size={24}
                        aria-hidden="true"
                      />
                    )}
                    {index === 3 && (
                      <Clock className="text-blue-600" size={24} aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Sumukh Dental Clinic ──────────────────────────────────── */}
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
                  Why Patients Choose {CLINIC_NAME} for Clear Aligners in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  As a trusted orthodontic clinic in Sola, Ahmedabad, we combine
                  in-house 3D digital scanning, precise smile planning, and
                  patient-focused care to make clear aligner treatment accurate,
                  comfortable, and suited to your lifestyle. {DOCTOR_NAME} brings
                  over 10 years of orthodontic experience and is a certified
                  Invisalign provider.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <ScanLine className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "In-house 3D iTero Scanner",
                    desc: "Our in-house iTero Element scanner captures a precise digital model of your teeth in minutes — no messy impressions, greater accuracy, and a digital preview of your expected smile.",
                  },
                  {
                    icon: (
                      <Microscope className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Precision Digital Treatment Planning",
                    desc: "Every tooth movement is digitally mapped before treatment begins, creating a customised aligner sequence designed for your smile — predictable results with fewer surprises.",
                  },
                  {
                    icon: (
                      <HeartHandshake
                        className="text-blue-600"
                        size={22}
                        aria-hidden="true"
                      />
                    ),
                    title: "Patient Comfort Throughout",
                    desc: "We focus on making your treatment understandable, aesthetic, comfortable, and fully compatible with your professional and social life from start to finish.",
                  },
                ].map((card, i) => (
                  <article
                    key={i}
                    className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                  </article>
                ))}
              </div>

              <address className="not-italic mt-8 text-center text-sm text-slate-500">
                <strong className="text-slate-700">{CLINIC_NAME}</strong> ·{" "}
                {ADDRESS_STREET}, {ADDRESS_CITY} – {ADDRESS_PINCODE} ·{" "}
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

        {/* ── Who Can Benefit ───────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="candidates-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2
                  id="candidates-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  Who Can Benefit from Clear Aligners in Ahmedabad?
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                  Clear aligner treatment at {CLINIC_NAME}, Sola, can help correct
                  many alignment concerns in adults and teens who want a more
                  discreet and comfortable orthodontic option. Patients often also
                  explore{" "}
                  <Link
                    to="/blog/what-problems-can-invisalign-correct-ahmedabad"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    what problems Invisalign can correct
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/blog/adult-braces-or-invisalign-ahmedabad"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    adult braces or Invisalign
                  </Link>{" "}
                  before deciding.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4" role="list">
                  {candidates.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-blue-100 shadow-sm"
                    >
                      <div className="bg-blue-500 rounded-full p-1 shrink-0" aria-hidden="true">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className={premiumCard} aria-label="Consultation prompt">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Not sure whether braces or clear aligners are right for you?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {DOCTOR_NAME} evaluates your teeth, bite, smile line, and facial
                  profile before recommending the most suitable orthodontic option —
                  whether that is{" "}
                  <Link
                    to="/orthodontics"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    braces in Ahmedabad
                  </Link>{" "}
                  or clear aligners. You can also compare your choices in our{" "}
                  <Link
                    to="/blog/braces-vs-invisalign-ahmedabad"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    braces vs Invisalign in Ahmedabad
                  </Link>{" "}
                  guide.
                </p>

                <ul className="space-y-4 mb-8" role="list">
                  {[
                    "Detailed smile and bite evaluation",
                    "Digital 3D iTero scan-based planning",
                    "Clear explanation of aligner suitability",
                    "Transparent duration and cost guidance",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    trackAlignerClick("schedule-aligner-evaluation");
                    scrollToAppointment();
                  }}
                  aria-label="Schedule a clear aligners evaluation in Ahmedabad"
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:scale-105"
                >
                  Schedule an Evaluation
                </button>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Treatment Process ─────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="process-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Clear Aligner Treatment Process in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every clear aligner case at {CLINIC_NAME} is digitally planned and
                carefully monitored to deliver comfortable, aesthetic, and precise
                smile correction.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <article
                  key={index}
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
              ))}
            </div>
          </div>
        </section>

        {/* ── Invisalign Section ──────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="invisalign-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className={premiumCard}>
                <h2
                  id="invisalign-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  Invisalign Treatment in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                  Invisalign is one of the most searched clear aligner systems in Ahmedabad because it combines aesthetic treatment, digital planning, and day-to-day convenience. At {CLINIC_NAME}, we use digital smile planning and careful orthodontic evaluation to decide whether Invisalign or another clear aligner system is the right choice for your teeth, bite, and smile goals.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  It is commonly chosen by working professionals, college students, brides-to-be, and adults who want straighter teeth without visible metal braces. In selected cases, it can correct crowding, spacing, relapse after braces, and mild to moderate bite discrepancies with a discreet treatment experience.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5">
                  Why patients ask specifically for Invisalign
                </h3>
                <div className="space-y-4">
                  {[
                    "Nearly invisible appearance during treatment",
                    "Removable while eating, brushing, and flossing",
                    "Digitally planned tooth movements",
                    "Comfortable smooth trays with no metal wires",
                    "Suitable for many adult and teen smile correction cases",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 shrink-0" aria-hidden="true">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Types of Aligners ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="types-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="types-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Types of Clear Aligners and Invisible Braces
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Patients in Ahmedabad often search for Invisalign, invisible braces, and clear aligners as if they are separate treatments. In practice, Invisalign is one premium clear aligner system, while clear aligners as a category include different treatment options chosen according to case suitability and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {alignerBrands.map((item, index) => (
                <article key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <item.icon className="text-blue-600" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Real Cases Internal Link ─────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="cases-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2
                id="cases-heading"
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              >
                See Real Clear Aligner Cases
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Looking at real cases builds trust and also strengthens internal relevance for your aligners page. Instead of a separate before-and-after section here, explore our dedicated aligner case photographs in the gallery.
              </p>
              <Link
                to="/gallery#aligners"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                View Aligner Cases in Gallery
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
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
                Helpful Invisalign & Clear Aligner Guides
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Explore these articles before starting treatment so you understand
                aligner cost, treatment time, comfort, and how clear aligners compare
                with braces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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

        {/* ── Cost Section ──────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="cost-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="cost-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Cost of Clear Aligners in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                The cost of clear aligners or Invisalign in Ahmedabad at {CLINIC_NAME} usually ranges from <span className="font-semibold text-blue-900">₹80,000 to ₹2,00,000</span>, depending on the aligner system chosen, the complexity of your case, and the estimated treatment duration. We provide transparent, personalised guidance after a detailed clinical and digital evaluation. You can also read our detailed guide on{" "}
                <Link
                  to="/blog/invisalign-cost-ahmedabad"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Invisalign cost in Ahmedabad
                </Link>
                .
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Invisalign",
                  note: "Premium global system",
                  desc: "Advanced digital planning, strong research backing, and a globally recognised aligner system for aesthetic smile correction.",
                },
                {
                  title: "Mild Cases",
                  note: "Shorter treatment range",
                  desc: "Simpler crowding or spacing corrections may need fewer aligners and a shorter treatment duration.",
                },
                {
                  title: "Moderate Cases",
                  note: "More customised planning",
                  desc: "Cases involving more tooth movement or bite refinement generally require longer planning and additional aligner stages.",
                },
                {
                  title: "Teen / Adult Treatment",
                  note: "Case-dependent pricing",
                  desc: "The cost may vary depending on age, wear compliance, and the type of smile correction needed.",
                },
              ].map((item, index) => (
                <article key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <IndianRupee
                      className="text-blue-600"
                      size={24}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{item.note}</p>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5">
                What affects clear aligner cost?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Type of aligner system selected",
                  "Complexity of crowding, spacing, and bite correction",
                  "Estimated treatment duration and number of trays",
                  "Need for refinements, attachments, or additional planning",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="bg-blue-500 rounded-full p-1 mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                For an accurate quote, we recommend a consultation with {DOCTOR_NAME}. After evaluating your teeth, bite, and smile goals using a clinical examination and digital scan, we can recommend the most suitable aligner option and give you a personalised cost estimate. As a general guide, simpler cases usually stay toward the lower end of the range, while more complex Invisalign or bite-correction cases move toward the higher end.
              </p>
            </div>
          </div>
        </section>

        {/* ── Local Areas Served ────────────────────────────────────────── */}
        <section className="py-10 bg-blue-50/60" aria-label="Areas served in Ahmedabad">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Serving Clear Aligner Patients Across Ahmedabad
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl mx-auto">
              {CLINIC_NAME} is located in Sola, Science City Road, and is easily
              accessible for patients from Thaltej, Bodakdev, Satellite, Gota,
              Chandkheda, Naranpura, and across Ahmedabad.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Sola",
                "Science City",
                "Thaltej",
                "Bodakdev",
                "Satellite",
                "Gota",
                "Chandkheda",
                "Motera",
                "Naranpura",
                "Memnagar",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm"
                >
                  <MapPin
                    size={12}
                    className="inline mr-1 text-blue-500"
                    aria-hidden="true"
                  />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Map Embed Section ─────────────────────────────────────────── */}
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
                Visit Our Clear Aligner Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad and easily
                accessible for Invisalign, clear aligners, and aesthetic orthodontic
                care.
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
          aria-label="Book a consultation"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to Start Your Clear Aligner Journey in Ahmedabad?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with {DOCTOR_NAME}, {DOCTOR_DEGREE} at{" "}
              {CLINIC_NAME}, to find out whether Invisalign or clear aligners are
              the right fit for your smile, goals, and lifestyle.
            </p>
            <button
              onClick={scrollToAppointment}
              aria-label="Book clear aligners consultation in Ahmedabad"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Book Your Free Consultation
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
                Frequently Asked Questions About Clear Aligners in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting Invisalign or clear
                aligner treatment at {CLINIC_NAME}.
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
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="pb-20 bg-white" aria-label="Final call to action">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Let's Plan Your Best Smile with the Best Clear Aligners in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering Invisalign, invisible braces, or other{" "}
                <Link
                  to="/aligners"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  clear aligners in Ahmedabad
                </Link>
                , {DOCTOR_NAME} at {CLINIC_NAME} can help you choose the most
                suitable option for your teeth, bite, and smile goals.
              </p>
              <button
                onClick={scrollToAppointment}
                aria-label="Book a clear aligners consultation at Sumukh Dental Clinic Ahmedabad"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Aligners Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Braces & Orthodontic Treatment in Ahmedabad",
            href: "/orthodontics",
            description:
              "Explore metal braces, ceramic braces, self-ligating and lingual braces for cases that need broader orthodontic correction.",
          },
          {
            title: "Smile Makeover in Ahmedabad",
            href: "/smile-makeover",
            description:
              "Combines aligners with aesthetic treatments for a complete smile transformation.",
          },
          {
            title: "Dental Veneers in Ahmedabad",
            href: "/veneers",
            description:
              "In selected cases, veneers may be considered after alignment to refine tooth shape, colour, and symmetry.",
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