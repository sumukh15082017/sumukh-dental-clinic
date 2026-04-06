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
  Phone,
  IndianRupee,
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
const CANONICAL_URL = "https://www.sumukhdentalclinic.com/orthodontics";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const OG_IMAGE = `${SITE_BASE}/braces/braces-smile-closeup-ahmedabad-orthodontist.webp`;

export default function OrthodonticsPage() {
  // ─── Data ────────────────────────────────────────────────────────────────
  const bracesTypes = [
    {
      name: "Metal Braces",
      slug: "metal-braces",
      description:
        "Metal braces are the most common and cost-effective orthodontic treatment for correcting crowded teeth, spacing issues, and complex bite problems in Ahmedabad. They use high-grade stainless steel brackets and wires to apply gentle, continuous pressure on the teeth.",
      image: "/braces/metal-braces-in-ahmedabad.webp",
      alt: "Metal braces treatment in Ahmedabad — Sumukh Dental Clinic, Sola Science City",
      features: [
        "High durability and strength for complex cases",
        "Most cost-effective orthodontic option",
        "Effective for crowding, spacing, and bite correction",
        "Customizable with colored bands for children and teens",
        "Reliable long-term results",
      ],
      duration: "18–24 months",
    },
    {
      name: "Ceramic Braces",
      slug: "ceramic-braces",
      description:
        "Ceramic braces in Ahmedabad use tooth-colored or clear brackets that blend naturally with your teeth, making them far less noticeable than traditional metal braces while delivering the same level of orthodontic correction.",
      image: "/braces/ceramic-braces-in-ahmedabad.webp",
      alt: "Ceramic braces treatment in Ahmedabad for aesthetic orthodontics — Sumukh Dental Clinic",
      features: [
        "Tooth-colored brackets blend naturally",
        "Less noticeable than metal braces",
        "Same clinical effectiveness as metal braces",
        "Stain-resistant ceramic materials",
        "Ideal for adults and image-conscious teens",
      ],
      duration: "18–24 months",
    },
    {
      name: "Self-Ligating Braces",
      slug: "self-ligating-braces",
      description:
        "Self-ligating braces in Ahmedabad use a built-in sliding mechanism instead of elastic ties, resulting in reduced friction, smoother tooth movement, and often fewer adjustment visits compared to conventional braces.",
      image: "/braces/damon-self-ligating-braces-in-ahmedabad.webp",
      alt: "Self-ligating braces treatment in Ahmedabad — Sumukh Dental Clinic Sola",
      features: [
        "Fewer clinic adjustment visits needed",
        "Reduced friction for more comfortable treatment",
        "Easier to clean than traditional braces",
        "Associated with efficient tooth movement",
        "Available in metal and clear versions",
      ],
      duration: "15–20 months",
    },
    {
      name: "Clear Aligners",
      slug: "clear-aligners",
      description:
        "Clear aligners in Ahmedabad are a virtually invisible, removable alternative to braces. A series of custom-made transparent trays gradually shift teeth into position — without any metal brackets or wires. Ideal for adults and teens seeking a discreet orthodontic solution.",
      image: "/braces/invisible-aligners-in-ahmedabad.webp",
      alt: "Clear aligners treatment in Ahmedabad for invisible teeth straightening — Sumukh Dental Clinic",
      features: [
        "Completely removable for eating and cleaning",
        "Nearly invisible appearance",
        "No dietary restrictions during treatment",
        "Easy to maintain oral hygiene",
        "Comfortable with no metal parts",
      ],
      duration: "8–18 months",
    },
    {
      name: "Lingual Braces",
      slug: "lingual-braces",
      description:
        "Lingual braces are placed on the inner (tongue-facing) surface of the teeth, making them completely hidden from view while effectively correcting alignment, spacing, and bite. They are custom-made for your teeth and ideal for professionals and adults.",
      image: "/braces/lingual-orthodontics-materials-procedures.webp",
      alt: "Lingual braces treatment in Ahmedabad for hidden orthodontics — Sumukh Dental Clinic",
      features: [
        "Completely hidden from view",
        "Custom-fabricated for your teeth",
        "Effective for a wide range of orthodontic cases",
        "No visible brackets or wires",
        "Ideal for professionals and image-conscious adults",
      ],
      duration: "18–24 months",
    },
  ];

  const problemsWeTreat = [
    "Crowded teeth",
    "Spacing between teeth",
    "Protruding front teeth",
    "Deep bite and open bite",
    "Crossbite and underbite",
    "Irregular smile alignment",
    "Impacted teeth",
    "Jaw relation discrepancies",
  ];

  const helpfulBlogs = [
    {
      title: "Braces Cost in Ahmedabad (2026)",
      href: "/blog/braces-cost-ahmedabad-2026",
      description:
        "A detailed guide to braces types, cost ranges, and how treatment choice affects pricing.",
    },
    {
      title: "Invisalign Cost in Ahmedabad",
      href: "/blog/invisalign-cost-ahmedabad",
      description:
        "Understand how clear aligner pricing works and when Invisalign may be the right option.",
    },
    {
      title: "Dental Veneers in Ahmedabad – Cost, Benefits & Smile Makeover Guide",
      href: "/blog/dental-veneers-ahmedabad-guide",
      description:
        "Helpful for patients planning smile refinement after orthodontic alignment.",
    },
    {
      title: "Dental Tourism in Ahmedabad – Treatment, Travel & Cost Benefits",
      href: "/blog/dental-tourism-ahmedabad-guide",
      description:
        "Useful for outstation and international patients considering braces or aligners in Ahmedabad.",
    },
  ];

  const faqs = [
    {
      q: "What is the best age to start orthodontic treatment?",
      a: "Orthodontic treatment can be done in children, teens, and adults. The right age depends on the problem being treated. The first orthodontic consultation is ideally done around the age of 7 years to detect any developing problems early.",
    },
    {
      q: "Are braces painful?",
      a: "Braces can cause mild soreness for a few days after placement or adjustments, but this is temporary and usually manageable with over-the-counter pain relief. Most patients adapt quickly and find treatment comfortable.",
    },
    {
      q: "How long does orthodontic treatment usually take?",
      a: "Treatment duration varies depending on the complexity of the case and the type of braces or aligners used. Most orthodontic treatments in Ahmedabad at Sumukh Dental Clinic range from 8 to 24 months.",
    },
    {
      q: "Which is better: braces or clear aligners?",
      a: "Both are effective orthodontic options. The best choice depends on your bite complexity, tooth movement needs, lifestyle, and aesthetic preferences. Dr. Dipen Thakker will evaluate your case and recommend the most suitable option.",
    },
    {
      q: "Can adults get braces in Ahmedabad?",
      a: "Yes. Adult orthodontic treatment is very common and highly effective. Whether you choose metal braces, ceramic braces, self-ligating braces, lingual braces, or clear aligners, there is an option suited to adult lifestyles.",
    },
    {
      q: "What is the cost of braces treatment in Ahmedabad?",
      a: "The cost of braces in Ahmedabad depends on the type of treatment chosen (metal, ceramic, self-ligating, lingual, or clear aligners), the complexity of your case, and the estimated duration. We offer transparent pricing — please call us or book a consultation for a personalized quote.",
    },
    {
      q: "Do I need to visit the clinic often during orthodontic treatment?",
      a: "Routine check-up visits are typically scheduled every 4 to 8 weeks depending on the type of braces. Self-ligating braces and clear aligners often require fewer visits than traditional metal braces.",
    },
  ];

  // ─── Schema Markup ────────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_BASE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Orthodontics & Braces",
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
      name: "Orthodontic Treatments",
      itemListElement: bracesTypes.map((b) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: b.name,
          description: b.description,
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
    name: `Best Orthodontist in Ahmedabad | Braces & Clear Aligners | ${CLINIC_NAME}`,
    description:
      "Expert orthodontic treatment in Ahmedabad by Dr. Dipen Thakker — metal braces, ceramic braces, self-ligating braces, lingual braces, and clear aligners at Sumukh Dental Clinic, Sola.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Orthodontic Treatment",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_BASE}/` },
        { "@type": "ListItem", position: 2, name: "Orthodontics", item: CANONICAL_URL },
      ],
    },
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      medicalSpecialty: "Orthodontics",
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  // ─── Tracking ─────────────────────────────────────────────────────────────
  const trackOrthoClick = (
    action:
      | "book-orthodontic-consultation"
      | "explore-treatment-options"
      | "smile-simulation"
      | "schedule-evaluation"
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
        content_name: `Orthodontics Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToAppointment = () => {
    trackOrthoClick("book-orthodontic-consultation");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    trackOrthoClick("explore-treatment-options");
    document.getElementById("ortho-options")?.scrollIntoView({ behavior: "smooth" });
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Best Orthodontist in Ahmedabad | Braces &amp; Clear Aligners |{" "}
          {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Looking for the best orthodontist in Ahmedabad? ${DOCTOR_NAME} (${DOCTOR_DEGREE}) at ${CLINIC_NAME} offers metal braces, ceramic braces, self-ligating braces, lingual braces, and clear aligners in Sola, Science City. Book a consultation today.`}
        />
        <meta
          name="keywords"
          content="orthodontist in Ahmedabad, braces treatment Ahmedabad, best orthodontist Ahmedabad, ceramic braces Ahmedabad, clear aligners Ahmedabad, self ligating braces Ahmedabad, lingual braces Ahmedabad, Invisalign Ahmedabad, metal braces Ahmedabad, braces cost Ahmedabad, orthodontic treatment Sola Ahmedabad, teeth straightening Ahmedabad"
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
          content={`Best Orthodontist in Ahmedabad | Braces & Clear Aligners | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Expert braces and clear aligner treatment in Ahmedabad by ${DOCTOR_NAME} at ${CLINIC_NAME}. Metal, ceramic, self-ligating, lingual braces & Invisalign. Book online.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Best orthodontist in Ahmedabad — Sumukh Dental Clinic braces treatment"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Best Orthodontist in Ahmedabad | Braces & Clear Aligners | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Advanced orthodontic treatment in Ahmedabad by ${DOCTOR_NAME}. Metal braces, ceramic braces, clear aligners and more at ${CLINIC_NAME}, Sola.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Orthodontic braces treatment in Ahmedabad"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24"
          aria-label="Orthodontic treatment hero"
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
                        Orthodontics
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} aria-hidden="true" />
                  Orthodontic Treatment in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-4">
                  Best Orthodontist in Ahmedabad —
                  <span className="text-blue-500"> Braces &amp; Clear Aligners</span>
                </h1>

                <p className="speakable text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Expert Braces Treatment by {DOCTOR_NAME}, {DOCTOR_DEGREE}
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for an orthodontist in Ahmedabad? At {CLINIC_NAME}, Sola,
                  we provide advanced orthodontic treatment — including metal braces,
                  ceramic braces, self-ligating braces, lingual braces, and{" "}
                  <Link
                    to="/aligners"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    clear aligners in Ahmedabad
                  </Link>{" "}
                  — tailored to your smile and lifestyle. From crowded teeth and
                  spacing to bite correction and full smile enhancement, we help
                  patients across Ahmedabad achieve healthier, more confident smiles.
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
                    aria-label="Book orthodontic consultation at Sumukh Dental Clinic Ahmedabad"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Orthodontic Consultation
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    onClick={scrollToOptions}
                    aria-label="Explore braces and aligner options"
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Treatment Options
                  </button>
                </div>

                <div className="mt-4">
                  <a
                    href="https://providerbio-apac.invisalign.com/sv/1374312#start"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOrthoClick("smile-simulation")}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white/70 px-6 py-3 font-bold text-blue-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl"
                    aria-label="Try Invisalign smile simulation — Sumukh Dental Clinic"
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

                <div className="grid grid-cols-3 gap-4 mt-8 md:mt-10">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      1000+
                    </p>
                    <p className="text-sm text-slate-500">Happy Patients</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      10+
                    </p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Hi-tech
                    </p>
                    <p className="text-sm text-slate-500">Advanced Scanners</p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[700px]">
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-5 md:p-6 shadow-lg">
                    <div className="w-full h-[360px] sm:h-[460px] md:h-[620px] rounded-[1.5rem] overflow-hidden">
                      <img
                        src="/braces/braces-smile-closeup-ahmedabad-orthodontist.webp"
                        alt={`Best orthodontist in Ahmedabad — braces treatment by ${DOCTOR_NAME} at ${CLINIC_NAME}, Sola Science City`}
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
                "Advanced Digital Diagnosis",
                "Personalised Treatment Planning",
                "Modern Orthodontic Technology",
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

        {/* ── Why Orthodontic Treatment ─────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="why-ortho-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="why-ortho-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Why Choose Orthodontic Treatment?
              </h2>
              <p className="speakable text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Orthodontic treatment in Ahmedabad is not only about improving the
                appearance of your smile. It can also correct bite balance, improve
                oral hygiene, enhance chewing comfort, and support long-term dental
                health for children, teens, and adults.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  icon: <Smile className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Improved Smile",
                  desc: "Better teeth alignment creates a more balanced, attractive, and confident smile that lasts a lifetime.",
                },
                {
                  icon: (
                    <ShieldCheck
                      className="text-blue-600"
                      size={24}
                      aria-hidden="true"
                    />
                  ),
                  title: "Better Oral Health",
                  desc: "Straight teeth are easier to brush and floss, helping reduce plaque buildup, cavities, and gum disease.",
                },
                {
                  icon: <Check className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Improved Bite Function",
                  desc: "Correcting deep bites, crossbites, and underbites improves chewing comfort, speech clarity, and jaw function.",
                },
                {
                  icon: <Clock className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Long-Term Benefits",
                  desc: "Early correction prevents future wear, enamel damage, and more complex dental problems in adulthood.",
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
                  Why Patients Choose {CLINIC_NAME} for Orthodontic Treatment in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  As a specialist orthodontic clinic in Sola, Ahmedabad, we combine
                  modern orthodontic principles, precise digital diagnosis, and
                  patient-focused care to create treatment plans that are effective,
                  comfortable, and suited to your lifestyle. {DOCTOR_NAME} brings
                  over 10 years of clinical orthodontic experience to every case.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <Microscope className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Precision Diagnosis & Planning",
                    desc: "Every orthodontic case at our Ahmedabad clinic begins with a thorough analysis of teeth position, bite relationship, smile line, and facial balance using modern diagnostic tools.",
                  },
                  {
                    icon: (
                      <ShieldCheck
                        className="text-blue-600"
                        size={22}
                        aria-hidden="true"
                      />
                    ),
                    title: "Modern Orthodontic Technology",
                    desc: "Treatment options are selected using updated orthodontic principles, intraoral scanners, and digital planning — ensuring predictable and efficient results.",
                  },
                  {
                    icon: (
                      <HeartHandshake
                        className="text-blue-600"
                        size={22}
                        aria-hidden="true"
                      />
                    ),
                    title: "Patient Comfort First",
                    desc: "We prioritise keeping your treatment understandable, comfortable, and well-guided from your first consultation through to retention and follow-up.",
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

        {/* ── Problems We Treat ─────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="problems-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2
                  id="problems-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  Orthodontic Problems We Treat in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                  Orthodontic treatment at {CLINIC_NAME}, Sola, Ahmedabad can address
                  a wide variety of teeth alignment and bite-related concerns in
                  children, teens, and adults.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4" role="list">
                  {problemsWeTreat.map((item, index) => (
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
                  Not sure which orthodontic treatment is right for you?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {DOCTOR_NAME} evaluates your teeth position, bite, jaw relationship,
                  smile line, and facial profile before recommending the most suitable
                  option — whether that is braces, ceramic braces, self-ligating braces,
                  lingual braces, or{" "}
                  <Link
                    to="/aligners"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Invisalign and clear aligners in Ahmedabad
                  </Link>
                  .
                </p>

                <ul className="space-y-4 mb-8" role="list">
                  {[
                    "Detailed clinical and digital evaluation",
                    "Personalised orthodontic treatment planning",
                    "All braces and aligner options explained clearly",
                    "Transparent treatment duration and cost guidance",
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
                    trackOrthoClick("schedule-evaluation");
                    scrollToAppointment();
                  }}
                  aria-label="Schedule an orthodontic evaluation in Ahmedabad"
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:scale-105"
                >
                  Schedule an Evaluation
                </button>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Treatment Options ─────────────────────────────────────────── */}
        <section
          id="ortho-options"
          className="py-20 bg-white"
          aria-labelledby="options-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="options-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Orthodontic Treatment Options in Ahmedabad
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We offer a full range of orthodontic solutions to match your clinical
                needs, lifestyle, and aesthetic preferences. In selected cases,{" "}
                <Link
                  to="/veneers"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  dental veneers
                </Link>{" "}
                may be considered after alignment to refine shape, colour, and
                symmetry.
              </p>
            </div>

            <div className="space-y-8">
              {bracesTypes.map((type, index) => (
                <article
                  key={index}
                  id={type.slug}
                  className="grid md:grid-cols-2 gap-8 items-center rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                  aria-labelledby={`${type.slug}-heading`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <img
                      src={type.image}
                      alt={type.alt}
                      loading="lazy"
                      width={600}
                      height={288}
                      className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3
                      id={`${type.slug}-heading`}
                      className="text-3xl font-bold text-blue-900 mb-3"
                    >
                      {type.name} in Ahmedabad
                    </h3>
                    <p className="text-lg text-slate-600 mb-4">{type.description}</p>

                    <div className="bg-blue-50 rounded-2xl p-4 mb-5 border border-blue-100">
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Average Treatment Duration
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {type.duration}
                      </p>
                    </div>

                    <ul className="space-y-3" role="list">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div
                            className="bg-blue-500 rounded-full p-1 shadow-sm shrink-0"
                            aria-hidden="true"
                          >
                            <Check className="text-white" size={14} />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Helpful Blogs ─────────────────────────────────────────────── */}
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
                Helpful Orthodontic Guides
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Read these articles to understand braces cost, Invisalign pricing,
                aesthetic smile finishing, and treatment planning before starting
                orthodontic care in Ahmedabad.
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
                Cost of Braces Treatment in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                The cost of braces in Ahmedabad depends on the type of treatment
                chosen, the complexity of your case, and the estimated duration.
                We offer transparent pricing and personalised treatment planning. You
                can also read our detailed guide on{" "}
                <Link
                  to="/blog/braces-cost-ahmedabad-2026"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  braces cost in Ahmedabad
                </Link>{" "}
                and{" "}
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
                  title: "Metal Braces",
                  note: "Most cost-effective option",
                  desc: "25,000-35,000/-rs.",
                },
                {
                  title: "Ceramic Braces",
                  note: "Aesthetic braces option",
                  desc: "35,000-45,000/-rs.",
                },
                {
                  title: "Self-Ligating Braces",
                  note: "Advanced braces system",
                  desc: "50,000-70,000/-rs.",
                },
                {
                  title: "Lingual / Clear Aligners",
                  note: "Premium discreet options",
                  desc: "1,00,000-2,00,000/-rs.",
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
                What affects the cost of braces?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Type of braces or aligner system selected",
                  "Complexity of crowding, spacing, and bite correction",
                  "Estimated treatment duration",
                  "Need for additional records, scans, or supporting procedures",
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
                For an accurate quote, we recommend a consultation with {DOCTOR_NAME}.
                After evaluating your teeth, bite, and smile goals, we can explain
                the most suitable treatment option and give you a personalised cost estimate.
              </p>
            </div>
          </div>
        </section>

        {/* ── Local Areas Served ────────────────────────────────────────── */}
        <section className="py-10 bg-blue-50/60" aria-label="Areas served in Ahmedabad">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Serving Patients Across Ahmedabad
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl mx-auto">
              {CLINIC_NAME} is conveniently located in Sola, Science City Road, and
              is easily accessible from nearby areas including Thaltej, Bodakdev,
              Satellite, Gota, Chandkheda, Vastral, and Motera.
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
                Visit Our Orthodontic Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad and easily
                accessible from nearby areas for braces, aligners, and orthodontic care.
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
              Ready to Start Your Smile Journey in Ahmedabad?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with {DOCTOR_NAME}, MDS Orthodontist at{" "}
              {CLINIC_NAME}, to find out which braces or aligner treatment is the
              right fit for your smile, goals, and lifestyle.
            </p>
            <button
              onClick={scrollToAppointment}
              aria-label="Book orthodontic consultation in Ahmedabad"
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
                Frequently Asked Questions About Orthodontics in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting braces or aligner
                treatment at {CLINIC_NAME}.
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
                Let's Plan Your Best Smile with the Best Orthodontist in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering metal braces, ceramic braces,
                self-ligating braces, lingual braces, or{" "}
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
                aria-label="Book an orthodontic consultation at Sumukh Dental Clinic Ahmedabad"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Orthodontic Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Clear Aligners in Ahmedabad",
            href: "/aligners",
            description:
              "A discreet, removable orthodontic treatment option for patients who want nearly invisible smile correction in Ahmedabad.",
          },
          {
            title: "Smile Makeover in Ahmedabad",
            href: "/smile-makeover",
            description:
              "Combines orthodontics with aesthetic treatments for a complete smile transformation.",
          },
          {
            title: "Dental Veneers in Ahmedabad",
            href: "/veneers",
            description:
              "In selected cases, veneers may be considered after alignment to refine tooth shape, colour, and symmetry.",
          },
        ]}
      />

      <div id="appointment">
        <AppointmentForm />
      </div>
      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}