import {
  Check,
  Crown,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  Smile,
  Clock,
  ShieldCheck,
  Microscope,
  HeartHandshake,
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
const CANONICAL_URL = "https://www.sumukhdentalclinic.com/implants";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const OG_IMAGE = `${SITE_BASE}/dental-implant-in-ahmedabad.webp`;

export default function ImplantsPage() {
  // ─── Data ────────────────────────────────────────────────────────────────
  const implantTypes = [
    {
      title: "Single Tooth Implant",
      slug: "single-tooth-implant-ahmedabad",
      description:
        "Replace a single missing tooth in Ahmedabad with a natural-looking, stable titanium implant and crown that blends beautifully with your smile. A single implant preserves bone volume and does not require trimming of adjacent healthy teeth — unlike a traditional bridge.",
      icon: Crown,
      features: [
        "Preserves jawbone structure in the gap area",
        "No damage to adjacent healthy teeth",
        "Looks and functions like a natural tooth",
        "Fixed, long-term tooth replacement solution",
        "Excellent aesthetics, stability, and comfort",
      ],
    },
    {
      title: "Multiple Dental Implants",
      slug: "multiple-dental-implants-ahmedabad",
      description:
        "Restore several missing teeth in Ahmedabad with individual implant-supported replacements or implant-supported bridges, designed for strength, comfort, and long-term oral function. Multiple implants preserve bone in all gap areas and provide independent support.",
      icon: Shield,
      features: [
        "Restores chewing efficiency and bite balance",
        "Supports jawbone preservation across multiple sites",
        "Independent tooth replacement — no shared support",
        "Natural appearance matched to your remaining teeth",
        "Durable, stable, and long-lasting solution",
      ],
    },
    {
      title: "Full Arch Implants / All-on-4",
      slug: "full-arch-implants-ahmedabad",
      description:
        "A modern full-arch implant solution in Ahmedabad for patients missing most or all teeth in one jaw. Using as few as four strategically placed implants, a full fixed arch prosthesis is supported — providing a stable, comfortable, and aesthetic alternative to removable dentures.",
      icon: Zap,
      features: [
        "Full-arch rehabilitation with minimal implants",
        "Stable, secure support — no denture adhesive needed",
        "Improved chewing comfort and confidence",
        "Restores bite function and facial support",
        "Fixed alternative to removable dentures",
      ],
    },
  ];

  const helpfulBlogs = [
    {
      title: "Dental Implants in Ahmedabad – Cost, Procedure & Benefits",
      href: "/blog/dental-implants-ahmedabad-guide",
      description:
        "Understand implant planning, healing time, benefits, and who may be a suitable candidate.",
    },
    {
      title: "Crowns and Bridges in Ahmedabad – Types, Cost & Benefits",
      href: "/blog/crowns-and-bridges-ahmedabad-guide",
      description:
        "Learn how implant crowns and implant-supported bridges restore function and aesthetics.",
    },
    {
      title: "Dental Tourism in Ahmedabad – Treatment, Travel & Cost Benefits",
      href: "/blog/dental-tourism-ahmedabad-guide",
      description:
        "Useful for international patients planning implant treatment in Ahmedabad.",
    },
    {
      title: "Root Canal Treatment in Ahmedabad – Procedure, Pain & Cost",
      href: "/blog/root-canal-treatment-ahmedabad-guide",
      description:
        "Helpful when comparing tooth-saving treatment versus extraction and replacement options.",
    },
  ];

  const benefits = [
    "Natural look and feel",
    "Improved speech and comfort",
    "Enhanced long-term oral health",
    "Durable and highly reliable",
    "Easy day-to-day maintenance",
    "Better confidence and function",
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Diagnosis",
      description:
        "A detailed clinical evaluation including imaging (X-rays or CBCT scan) helps assess your bone support, gum health, oral condition, and suitability for dental implants in Ahmedabad.",
    },
    {
      step: "2",
      title: "Personalised Treatment Planning",
      description:
        "A customised implant plan is created based on the number of missing teeth, bone volume and quality, adjacent tooth condition, and your final restorative and aesthetic goals.",
    },
    {
      step: "3",
      title: "Implant Placement",
      description:
        "The titanium implant fixture is precisely placed into the jawbone under local anaesthesia to act as an artificial tooth root. The area is allowed to heal and integrate with the bone over the following weeks.",
    },
    {
      step: "4",
      title: "Final Restoration",
      description:
        "After successful osseointegration, a custom crown, implant bridge, or full-arch prosthesis is attached — restoring full function, natural appearance, and long-term oral stability.",
    },
  ];

  const faqs = [
    {
      q: "Are dental implants painful?",
      a: "Implant placement is carried out under local anaesthesia, and most patients find it more comfortable than expected. Mild soreness for a few days after the procedure is normal and manageable with standard pain relief.",
    },
    {
      q: "How long do dental implants last in Ahmedabad?",
      a: "With proper oral hygiene, regular professional dental care, and good general health, dental implants can last for many years — and in many cases, for a lifetime. The crown or prosthesis on top may need replacement after 10–15 years depending on wear.",
    },
    {
      q: "Am I a suitable candidate for dental implants?",
      a: "Many healthy adults are candidates for implants. Suitability depends on adequate bone support, gum health, oral hygiene habits, and general health. Conditions like diabetes or smoking may affect planning. A consultation at Sumukh Dental Clinic will help determine the best option for you.",
    },
    {
      q: "Do dental implants look natural?",
      a: "Yes. Implant-supported crowns and prostheses are custom-made to match the shape, size, and shade of your natural teeth for a seamless, natural appearance that blends with your smile.",
    },
    {
      q: "Can implants replace all my missing teeth?",
      a: "Yes. Depending on your case, implants can replace a single missing tooth, multiple teeth across the arch, or support a complete full-arch fixed restoration (All-on-4 or similar) for patients who have lost most or all teeth.",
    },
    {
      q: "What is the cost of dental implants in Ahmedabad?",
      a: "The cost of dental implants in Ahmedabad depends on the number of implants needed, the type of restoration (single crown, bridge, or full arch), bone condition, and any additional procedures required. Please book a consultation at Sumukh Dental Clinic for a personalised treatment plan and transparent cost estimate.",
    },
    {
      q: "How long does the full dental implant process take?",
      a: "The total implant process from placement to final restoration typically takes 3 to 6 months, depending on healing time and the complexity of the case. Some cases may qualify for faster protocols. Your treatment timeline will be discussed in detail during your consultation.",
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
        name: "Dental Implants in Ahmedabad",
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
    medicalSpecialty: ["Dentistry", "Implant Dentistry", "Cosmetic Dentistry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Implant Treatments",
      itemListElement: implantTypes.map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: t.title,
          description: t.description,
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
      medicalSpecialty: "Dentistry",
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
    name: `Best Dental Implants in Ahmedabad | Tooth Replacement | ${CLINIC_NAME}`,
    description:
      "Expert dental implant treatment in Ahmedabad at Sumukh Dental Clinic — single tooth implants, multiple implants, and full-arch All-on-4 solutions with personalised planning and natural-looking results.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Dental Implant Surgery",
      procedureType: "https://schema.org/SurgicalProcedure",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      medicalSpecialty: "Dentistry",
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  // ─── Tracking ─────────────────────────────────────────────────────────────
  const trackImplantClick = (
    action:
      | "book-implant-consultation"
      | "explore-implant-options"
      | "schedule-implant-evaluation"
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
        content_name: `Implants Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToAppointment = () => {
    trackImplantClick("book-implant-consultation");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    trackImplantClick("explore-implant-options");
    document.getElementById("implant-options")?.scrollIntoView({ behavior: "smooth" });
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Best Dental Implants in Ahmedabad | Tooth Replacement | {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Looking for dental implants in Ahmedabad? ${CLINIC_NAME} offers single tooth implants, multiple implants, and full-arch All-on-4 solutions with personalised planning and natural-looking results in Sola, Science City. Book a consultation today.`}
        />
        <meta
          name="keywords"
          content="dental implants Ahmedabad, tooth replacement Ahmedabad, single tooth implant Ahmedabad, full arch implants Ahmedabad, All-on-4 Ahmedabad, implant dentist Ahmedabad, missing teeth Ahmedabad, dental implant cost Ahmedabad, implants Sola Ahmedabad, teeth replacement Ahmedabad"
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
          content={`Best Dental Implants in Ahmedabad | Tooth Replacement | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Advanced dental implant treatment in Ahmedabad — single tooth implants, multiple implants, and full-arch All-on-4 at ${CLINIC_NAME}, Sola. Natural-looking, long-lasting results.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Best dental implants in Ahmedabad — tooth replacement at Sumukh Dental Clinic, Sola"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Best Dental Implants in Ahmedabad | Tooth Replacement | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Single tooth implants, multiple implants, and full-arch solutions in Ahmedabad at ${CLINIC_NAME}, Sola. Natural-looking, long-lasting results.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Dental implants treatment in Ahmedabad — Sumukh Dental Clinic"
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
          aria-label="Dental implants hero"
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
                        Dental Implants
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} aria-hidden="true" />
                  Dental Implants in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-4">
                  Best Dental Implants in Ahmedabad —
                  <span className="text-blue-500">
                    {" "}
                    Natural-Looking Tooth Replacement
                  </span>
                </h1>

                <p className="speakable text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Expert Implant Treatment at {CLINIC_NAME}, Sola, Science City
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for dental implants in Ahmedabad? At {CLINIC_NAME}, we
                  provide advanced tooth replacement solutions — including single
                  tooth implants, multiple implants, and full-arch All-on-4
                  rehabilitation — with personalised planning and natural-looking
                  results. Dental implants are one of the most reliable and
                  long-lasting options for restoring chewing function, smile
                  aesthetics, and long-term oral health. You can also read our
                  detailed guide on{" "}
                  <Link
                    to="/blog/dental-implants-ahmedabad-guide"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental implants in Ahmedabad
                  </Link>{" "}
                  before deciding.
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
                    aria-label="Book dental implant consultation at Sumukh Dental Clinic Ahmedabad"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Implant Consultation
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    onClick={scrollToOptions}
                    aria-label="Explore dental implant options in Ahmedabad"
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Implant Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Natural
                    </p>
                    <p className="text-sm text-slate-500">Look &amp; Feel</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Stable
                    </p>
                    <p className="text-sm text-slate-500">Long-Term Support</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Hi-tech
                    </p>
                    <p className="text-sm text-slate-500">Precise Planning</p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-xl">
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-5 md:p-6 shadow-lg">
                    <div className="w-full h-[320px] sm:h-[380px] md:h-[520px] rounded-[1.5rem] overflow-hidden bg-white/10">
                      <img
                        src="/dental-implant-in-ahmedabad.webp"
                        alt={`Best dental implants in Ahmedabad — tooth replacement treatment at ${CLINIC_NAME}, Sola Science City`}
                        loading="eager"
                        fetchPriority="high"
                        width={580}
                        height={520}
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
                "Advanced Clinical Diagnosis",
                "Personalised Treatment Planning",
                "Modern Implant Techniques",
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

        {/* ── What Are Implants + Benefits ──────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="what-implants-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <article className={premiumCard}>
                <h2
                  id="what-implants-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  What Are Dental Implants?
                </h2>
                <p className="speakable text-lg text-slate-600 mb-6 leading-relaxed">
                  Dental implants are small titanium fixtures surgically placed
                  into the jawbone to function as artificial tooth roots. They
                  provide a stable, permanent foundation for{" "}
                  <Link
                    to="/crowns"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    crowns, bridges
                  </Link>
                  , or full-arch prostheses — and are designed to look, feel, and
                  function like your natural teeth.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlike removable dentures, implants are fixed, stable, and
                  comfortable. They also stimulate the jawbone, helping to prevent
                  bone loss in areas where teeth are missing — making them one of
                  the most comprehensive tooth replacement options available in
                  Ahmedabad.
                </p>
              </article>

              <aside className={premiumCard} aria-label="Key benefits of dental implants">
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Key Benefits of Dental Implants in Ahmedabad
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
                  Why Patients Choose {CLINIC_NAME} for Dental Implants in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine modern implant planning, careful clinical diagnosis,
                  and patient-focused care to deliver precise, comfortable, and
                  predictable tooth replacement outcomes at our Sola, Ahmedabad clinic.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <Microscope className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Precision Clinical Diagnosis",
                    desc: "Every implant case at our Ahmedabad clinic begins with a thorough clinical evaluation and imaging to assess bone volume, gum health, and the most suitable implant approach.",
                  },
                  {
                    icon: (
                      <ShieldCheck
                        className="text-blue-600"
                        size={22}
                        aria-hidden="true"
                      />
                    ),
                    title: "Modern Implant Techniques",
                    desc: "We use updated implant placement techniques and modern planning principles — including CBCT imaging where indicated — for better predictability and long-term stability.",
                  },
                  {
                    icon: (
                      <HeartHandshake
                        className="text-blue-600"
                        size={22}
                        aria-hidden="true"
                      />
                    ),
                    title: "Clear Guidance & Patient Comfort",
                    desc: "We focus on clear communication, comfort, and step-by-step support throughout every stage of your implant treatment — from first consultation to final restoration.",
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

        {/* ── Why Patients Choose Implants ──────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="why-implants-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="why-implants-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Why Patients Choose Dental Implants in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Dental implants are the gold standard for tooth replacement because
                they combine natural aesthetics, strong function, lasting stability,
                and preservation of the surrounding bone — all in one solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <Smile className="text-blue-600" size={24} aria-hidden="true" />
                  ),
                  title: "Natural Appearance",
                  desc: "Implant-supported crowns and prostheses are custom-designed to match the shape, size, and shade of your natural teeth for a seamless smile.",
                },
                {
                  icon: (
                    <Shield className="text-blue-600" size={24} aria-hidden="true" />
                  ),
                  title: "Reliable Support",
                  desc: "Implants provide a stable, secure foundation for chewing, speaking, and daily function — no slipping, no adhesives, no discomfort.",
                },
                {
                  icon: (
                    <Check className="text-blue-600" size={24} aria-hidden="true" />
                  ),
                  title: "Tooth-Sparing Solution",
                  desc: "Unlike traditional bridges, implants do not require trimming or shaping of adjacent healthy teeth — preserving more of your natural dentition.",
                },
                {
                  icon: (
                    <Clock className="text-blue-600" size={24} aria-hidden="true" />
                  ),
                  title: "Long-Term Value",
                  desc: "With proper care and maintenance, dental implants can provide durable long-term function and aesthetics — making them a highly cost-effective investment.",
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

        {/* ── Implant Options ───────────────────────────────────────────── */}
        <section
          id="implant-options"
          className="py-20 bg-white"
          aria-labelledby="options-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="options-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Types of Dental Implant Solutions in Ahmedabad
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We offer implant solutions for every missing tooth scenario — from
                a single gap to full-arch rehabilitation — based on your bone
                condition, the number of missing teeth, and your final restoration goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {implantTypes.map((type, index) => (
                <article
                  key={index}
                  id={type.slug}
                  className={premiumCard}
                  aria-labelledby={`${type.slug}-heading`}
                >
                  <div
                    className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                    aria-hidden="true"
                  >
                    <type.icon className="text-white" size={32} />
                  </div>
                  <h3
                    id={`${type.slug}-heading`}
                    className="text-2xl font-bold text-blue-900 mb-3"
                  >
                    {type.title} in Ahmedabad
                  </h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <ul className="space-y-3" role="list">
                    {type.features.map((feature, idx) => (
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
                Helpful Dental Implant Guides
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Read these guides to understand implant cost, implant-supported
                crowns and bridges, restorative alternatives, and dental tourism
                planning if you are travelling for treatment.
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
                Cost of Dental Implants in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                The cost of dental implants in Ahmedabad depends on the number of
                implants needed, the type of restoration, bone condition, and
                whether additional procedures such as bone grafting or sinus lift
                are required. For a more detailed overview, see our guide on{" "}
                <Link
                  to="/blog/dental-implants-ahmedabad-guide"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  dental implants in Ahmedabad
                </Link>
                .
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Single Implant",
                  note: "For one missing tooth",
                  desc: "Usually includes implant placement and a custom implant-supported crown based on your case plan.",
                },
                {
                  title: "Multiple Implants",
                  note: "For several missing teeth",
                  desc: "Cost depends on the number of implants, spacing, and whether individual crowns or implant bridges are planned.",
                },
                {
                  title: "Full Arch / All-on-4",
                  note: "For complete jaw rehabilitation",
                  desc: "Pricing depends on implant number, prosthesis type, jaw condition, and whether extractions or grafting are needed.",
                },
                {
                  title: "Additional Procedures",
                  note: "Case-dependent",
                  desc: "Bone grafting, sinus lift, scans, temporary restorations, and final prosthesis design can affect the overall treatment cost.",
                },
              ].map((item, index) => (
                <article key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <IndianRupee className="text-blue-600" size={24} aria-hidden="true" />
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
                What affects dental implant cost?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Number of implants required",
                  "Type of final restoration — crown, bridge, or full arch",
                  "Bone quality and need for grafting or sinus lift",
                  "Complexity of the case and treatment phases",
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
                For an accurate estimate, we recommend a consultation with{" "}
                {DOCTOR_NAME}. After examining your oral condition and imaging, we
                can recommend the most suitable implant approach and give you a
                transparent, personalised cost estimate.
              </p>
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
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
                The Dental Implant Process in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every implant journey at {CLINIC_NAME} is carefully planned for
                precision, function, comfort, and long-term stability — from your
                first consultation through to your final restoration.
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

        {/* ── Local Areas Served ────────────────────────────────────────── */}
        <section className="py-10 bg-blue-50/60" aria-label="Areas served in Ahmedabad">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Serving Dental Implant Patients Across Ahmedabad
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl mx-auto">
              {CLINIC_NAME} is conveniently located in Sola, Science City Road,
              and is easily accessible for patients seeking dental implants from
              Thaltej, Bodakdev, Satellite, Gota, Chandkheda, Naranpura, and across Ahmedabad.
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
                Visit Our Dental Implant Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad for dental
                implants, implant crowns, implant bridges, and full-mouth rehabilitation.
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

        {/* ── Candidate CTA ─────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700"
          aria-label="Are you a candidate for dental implants"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Am I a Candidate for Dental Implants in Ahmedabad?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Most healthy adults with missing teeth are candidates for dental
              implants. A consultation at {CLINIC_NAME} helps determine the most
              suitable implant approach for your bone condition, oral health, and smile goals.
            </p>
            <button
              onClick={() => {
                trackImplantClick("schedule-implant-evaluation");
                scrollToAppointment();
              }}
              aria-label="Schedule a dental implant evaluation in Ahmedabad"
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
                Frequently Asked Questions About Dental Implants in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting implant treatment at{" "}
                {CLINIC_NAME}.
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
                Restore Your Smile with the Best Dental Implants in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you need a single tooth implant, multiple implants, or a
                full-arch All-on-4 solution, {CLINIC_NAME} in Sola, Ahmedabad can
                help you choose the right treatment plan with clarity, care, and
                long-term results.
              </p>
              <button
                onClick={scrollToAppointment}
                aria-label="Book a dental implant consultation at Sumukh Dental Clinic Ahmedabad"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Implant Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Crowns & Bridges in Ahmedabad",
            href: "/crowns",
            description:
              "Implants are commonly restored with custom crowns or implant-supported bridges for long-term function and aesthetics.",
          },
          {
            title: "Preventive & Restorative Dentistry in Ahmedabad",
            href: "/preventive-restorative",
            description:
              "Maintaining gum and bone health improves long-term implant stability and successful osseointegration.",
          },
          {
            title: "Smile Makeover in Ahmedabad",
            href: "/smile-makeover",
            description:
              "Dental implants are often part of a broader smile rehabilitation or aesthetic treatment plan.",
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