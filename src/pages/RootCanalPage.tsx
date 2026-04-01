import {
  Check,
  Shield,
  Zap,
  Sparkles,
  ArrowRight,
  Activity,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  Smile,
  Clock,
  MapPin,
  Star,
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
const CANONICAL_URL = "https://www.sumukhdentalclinic.com/root-canal";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const OG_IMAGE = `${SITE_BASE}/root-canal-treatment-in-ahmedabad.webp`;

export default function RootCanalPage() {
  // ─── Data ────────────────────────────────────────────────────────────────
  const treatmentTypes = [
    {
      title: "Single Visit Root Canal",
      slug: "single-visit-root-canal-ahmedabad",
      description:
        "Modern rotary endodontic techniques allow many root canal treatments in Ahmedabad to be completed comfortably in a single appointment — saving you time without compromising thoroughness or quality of care.",
      icon: Zap,
      features: [
        "Efficient treatment completed in one visit",
        "Advanced rotary endodontic instruments",
        "Fewer appointments and less time off work",
        "Comfort-focused procedure under local anaesthesia",
        "Quicker return to normal function",
      ],
    },
    {
      title: "Multi-Visit Root Canal",
      slug: "multi-visit-root-canal-ahmedabad",
      description:
        "Complex or severely infected teeth may require root canal treatment over two or more carefully planned visits, allowing for thorough disinfection, medication placement, and complete healing before final sealing.",
      icon: Shield,
      features: [
        "Better control in complex or severe infections",
        "Intra-canal medicaments placed between visits",
        "Improved disinfection and healing support",
        "Careful monitoring of healing progress",
        "Strong long-term prognosis for the treated tooth",
      ],
    },
    {
      title: "Re-Root Canal Treatment",
      slug: "re-root-canal-treatment-ahmedabad",
      description:
        "When a previously root canal treated tooth develops recurrent infection, persistent discomfort, or signs of treatment failure, retreatment may be required to remove old filling material, re-clean the canals, and reseal the tooth.",
      icon: Activity,
      features: [
        "Removal of old or failed root canal filling",
        "Thorough cleaning of persistent or new infection",
        "Improved canal shaping and sealing",
        "Preservation of the natural tooth where possible",
        "Restoration of full tooth function",
      ],
    },
  ];

  const helpfulBlogs = [
    {
      title: "Root Canal Treatment in Ahmedabad – Procedure, Pain, Cost and Recovery",
      href: "/blog/root-canal-treatment-ahmedabad-guide",
      description:
        "A detailed guide for patients who want to understand symptoms, treatment steps, cost, and when a crown is needed after root canal treatment.",
    },
    {
      title: "Crowns and Bridges in Ahmedabad – Types, Cost and Benefits",
      href: "/blog/crowns-and-bridges-ahmedabad-guide",
      description:
        "Helpful because many root canal treated teeth, especially back teeth, are best protected with a dental crown.",
    },
    {
      title: "Dental Implants in Ahmedabad – Cost, Procedure and Benefits",
      href: "/blog/dental-implants-ahmedabad-guide",
      description:
        "Useful for understanding replacement options if a tooth is too damaged to be saved with root canal treatment.",
    },
    {
      title: "Preventive Dentistry in Ahmedabad – Why Early Treatment Matters",
      href: "/blog/preventive-dentistry-ahmedabad-guide",
      description:
        "Shows how early diagnosis and timely fillings can reduce the need for deeper treatment like root canal therapy.",
    },
  ];

  const benefits = [
    "Preserves the natural tooth",
    "Relieves dental pain quickly",
    "Stops the spread of infection",
    "Restores comfortable chewing function",
    "Protects surrounding bone and tissues",
    "Helps avoid unnecessary extraction",
  ];

  const process = [
    {
      step: "1",
      title: "Diagnosis & Digital X-ray",
      description:
        "A detailed clinical examination and digital X-ray help identify the extent of infection within the pulp and surrounding bone, guiding precise treatment planning.",
    },
    {
      step: "2",
      title: "Cleaning the Canals",
      description:
        "Under local anaesthesia, the infected or inflamed pulp tissue is removed and the root canals are carefully cleaned, shaped, and enlarged using modern rotary instruments.",
    },
    {
      step: "3",
      title: "Disinfection & Sealing",
      description:
        "The canals are thoroughly disinfected with antimicrobial solutions and sealed with a biocompatible filling material (gutta-percha) to prevent reinfection.",
    },
    {
      step: "4",
      title: "Final Restoration",
      description:
        "A filling or dental crown is placed to restore the tooth's strength, appearance, and long-term protection. A crown is commonly recommended for back teeth.",
    },
  ];

  const faqs = [
    {
      q: "Is root canal treatment painful in Ahmedabad?",
      a: "Modern root canal treatment at Sumukh Dental Clinic is performed under local anaesthesia and is typically no more uncomfortable than a routine filling. Most patients are surprised at how comfortable the procedure is.",
    },
    {
      q: "Why is a root canal treatment needed?",
      a: "Root canal treatment is needed when the pulp inside a tooth becomes infected or inflamed — commonly due to deep decay, a cracked tooth, trauma, or repeated dental procedures on the same tooth. Without treatment, the infection can spread to surrounding bone and tissues.",
    },
    {
      q: "How long does root canal treatment take?",
      a: "Depending on the tooth's condition, the number of canals, and the severity of infection, root canal treatment may be completed in one visit or may require two or more appointments. Your treating dentist will advise you on the expected number of visits.",
    },
    {
      q: "Will I need a crown after root canal treatment?",
      a: "In many cases, yes. A dental crown is often recommended after root canal treatment — especially for back teeth — to restore strength, protect the treated tooth from fracture, and ensure long-term durability.",
    },
    {
      q: "Can a root canal treated tooth last for many years?",
      a: "Yes. With proper restoration (ideally a crown), good oral hygiene, and regular dental check-ups, a root canal treated tooth can function comfortably for many years and in many cases, for life.",
    },
    {
      q: "What is the cost of root canal treatment in Ahmedabad?",
      a: "The cost of root canal treatment in Ahmedabad depends on the tooth being treated (front or back), the number of canals, the severity of infection, and whether retreatment is needed. Please book a consultation at Sumukh Dental Clinic for a personalised treatment plan and transparent cost estimate.",
    },
    {
      q: "What happens if I delay root canal treatment?",
      a: "Delaying treatment allows the infection to spread further into the surrounding bone and tissues. This can make treatment more complex, painful, and costly — and may ultimately result in the tooth needing to be extracted if left too long.",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_BASE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Root Canal Treatment in Ahmedabad",
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
    medicalSpecialty: ["Dentistry", "Endodontics", "General Dentistry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Root Canal Treatments",
      itemListElement: treatmentTypes.map((t) => ({
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
    name: `Root Canal Treatment in Ahmedabad | Save Your Tooth | ${CLINIC_NAME}`,
    description:
      "Expert root canal treatment in Ahmedabad at Sumukh Dental Clinic, Sola. Relieve tooth pain, remove infection, and preserve your natural tooth with modern endodontic care.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Root Canal Treatment",
      procedureType: "https://schema.org/TherapeuticProcedure",
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
  const trackRootCanalClick = (
    action: "book-consultation" | "explore-options"
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
        content_name: `Root Canal Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToAppointment = () => {
    trackRootCanalClick("book-consultation");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    trackRootCanalClick("explore-options");
    document.getElementById("root-canal-options")?.scrollIntoView({ behavior: "smooth" });
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
          Root Canal Treatment in Ahmedabad | Save Your Tooth | {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Looking for root canal treatment in Ahmedabad? ${CLINIC_NAME} in Sola offers painless single-visit and multi-visit root canal treatment to relieve tooth pain, remove infection, and preserve your natural tooth. Book a consultation today.`}
        />
        <meta
          name="keywords"
          content="root canal treatment Ahmedabad, root canal Ahmedabad, painless root canal Ahmedabad, root canal cost Ahmedabad, tooth pain Ahmedabad, endodontic treatment Ahmedabad, root canal specialist Ahmedabad, tooth infection treatment Ahmedabad, root canal Sola Ahmedabad, save tooth Ahmedabad"
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
          content={`Root Canal Treatment in Ahmedabad | Save Your Tooth | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Expert root canal treatment in Ahmedabad at ${CLINIC_NAME}, Sola. Relieve tooth pain, remove infection, and preserve your natural tooth with modern endodontic care.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Root canal treatment in Ahmedabad — tooth pain relief at Sumukh Dental Clinic, Sola"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Root Canal Treatment in Ahmedabad | Save Your Tooth | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Painless root canal treatment in Ahmedabad at ${CLINIC_NAME}, Sola. Relieve tooth pain and preserve your natural tooth.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Root canal treatment in Ahmedabad — Sumukh Dental Clinic"
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
          aria-label="Root canal treatment hero"
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
                        Root Canal Treatment
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} aria-hidden="true" />
                  Root Canal Treatment in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-4">
                  Root Canal Treatment in Ahmedabad —
                  <span className="text-blue-500"> Save Your Tooth. Relieve Pain.</span>
                </h1>

                <p className="speakable text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  Painless Root Canal Treatment at {CLINIC_NAME}, Sola, Science City
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for root canal treatment in Ahmedabad? At {CLINIC_NAME},
                  Sola, we provide modern endodontic treatment to remove tooth
                  infection, relieve pain, and preserve your natural tooth for
                  long-term function and comfort — using advanced rotary instruments
                  and patient-focused care.
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
                    aria-label="Book root canal consultation at Sumukh Dental Clinic Ahmedabad"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Consultation
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    onClick={scrollToOptions}
                    aria-label="Explore root canal treatment options in Ahmedabad"
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Root Canal Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Pain Relief
                    </p>
                    <p className="text-sm text-slate-500">Comfort-Focused Care</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Tooth Saving
                    </p>
                    <p className="text-sm text-slate-500">Preserve Natural Tooth</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Modern
                    </p>
                    <p className="text-sm text-slate-500">Advanced Techniques</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/root-canal-treatment-in-ahmedabad.webp"
                    alt={`Root canal treatment in Ahmedabad — tooth pain relief and infection removal at ${CLINIC_NAME}, Sola Science City`}
                    loading="eager"
                    fetchPriority="high"
                    width={580}
                    height={520}
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
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
                "Accurate Digital Diagnosis",
                "Personalised Treatment Planning",
                "Modern Rotary Endodontics",
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

        {/* ── What Is Root Canal + Benefits ─────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="what-rct-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <article className={premiumCard}>
                <h2
                  id="what-rct-heading"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5"
                >
                  What Is Root Canal Treatment?
                </h2>
                <p className="speakable text-lg text-slate-600 mb-6 leading-relaxed">
                  Root canal treatment, also called endodontic treatment, is
                  performed when the pulp inside a tooth becomes infected or
                  severely inflamed. The infected pulp is removed, the canals are
                  cleaned, disinfected, and shaped, and the tooth is sealed to
                  prevent further infection.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The primary goal is to preserve your natural tooth, eliminate
                  infection, relieve pain, and restore healthy function — without
                  the need for extraction. After treatment, a{" "}
                  <Link
                    to="/crowns"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental crown
                  </Link>{" "}
                  is often recommended to protect and strengthen the treated tooth,
                  particularly for back teeth that absorb significant chewing forces.
                </p>
              </article>

              <aside className={premiumCard} aria-label="Key benefits of root canal treatment">
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Key Benefits of Root Canal Treatment in Ahmedabad
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
                Helpful Guides Before Treatment
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                These articles help patients understand root canal treatment,
                post-treatment crowns, prevention, and replacement options if a
                tooth cannot be saved.
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

        {/* ── Why Choose Sumukh ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white" aria-labelledby="why-sumukh-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2
                  id="why-sumukh-heading"
                  className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                >
                  Why Patients Choose {CLINIC_NAME} for Root Canal Treatment in Ahmedabad
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine modern rotary endodontic instruments, accurate digital
                  diagnosis, and patient-focused care to make root canal treatment
                  in Ahmedabad as comfortable and effective as possible at our Sola clinic.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <Microscope className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Accurate Digital Diagnosis",
                    desc: "Careful clinical examination and digital X-rays help precisely identify the extent of pulp infection and surrounding bone involvement before treatment begins.",
                  },
                  {
                    icon: (
                      <ShieldCheck className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Modern Rotary Endodontics",
                    desc: "We use updated rotary endodontic instruments and irrigation techniques for thorough canal cleaning, precise shaping, and better patient comfort throughout treatment.",
                  },
                  {
                    icon: (
                      <HeartHandshake className="text-blue-600" size={22} aria-hidden="true" />
                    ),
                    title: "Comfort-Focused Care",
                    desc: "We prioritise keeping treatment calm, clearly explained, and patient-friendly at every stage — from the initial diagnosis to the final restoration.",
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

        {/* ── Why Root Canal Matters ────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
          aria-labelledby="why-rct-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="why-rct-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Why Root Canal Treatment Matters
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Timely root canal treatment in Ahmedabad helps preserve your
                natural tooth, control infection before it spreads, relieve pain,
                and restore healthy daily function — avoiding the need for extraction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  icon: <Smile className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Pain Relief",
                  desc: "Root canal treatment removes the infected pulp — the source of tooth pain — and provides lasting relief from toothache, sensitivity, and swelling.",
                },
                {
                  icon: <Shield className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Tooth Preservation",
                  desc: "Treatment allows you to keep your natural tooth rather than losing it to extraction — preserving your bite, bone, and neighbouring teeth.",
                },
                {
                  icon: <Check className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Infection Control",
                  desc: "Thorough canal cleaning and sealing stops the spread of infection to surrounding bone and tissues — protecting your overall oral health.",
                },
                {
                  icon: <Clock className="text-blue-600" size={24} aria-hidden="true" />,
                  title: "Long-Term Function",
                  desc: "With proper restoration and regular dental care, a root canal treated tooth can serve you comfortably for many years or even a lifetime.",
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

        {/* ── Treatment Options ─────────────────────────────────────────── */}
        <section
          id="root-canal-options"
          className="py-20 bg-white"
          aria-labelledby="options-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="options-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4"
              >
                Root Canal Treatment Options in Ahmedabad
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The exact approach to root canal treatment depends on the severity
                of infection, the condition and anatomy of the tooth, and whether
                the tooth has been treated before.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {treatmentTypes.map((type, index) => (
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
                Cost of Root Canal Treatment in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                The cost of root canal treatment depends on the tooth involved,
                the number of canals, the severity of infection, and whether
                retreatment or a crown is required. We provide transparent guidance
                after clinical examination and digital X-ray evaluation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Front Tooth RCT",
                  note: "Usually simpler canal anatomy",
                  desc: "Often lower in cost compared to back teeth because treatment is generally less complex.",
                },
                {
                  title: "Premolar / Molar RCT",
                  note: "More canals, greater complexity",
                  desc: "Back teeth usually involve more roots and canals, which can increase treatment time and cost.",
                },
                {
                  title: "Single Visit RCT",
                  note: "Time-saving option",
                  desc: "Suitable cases may be completed in one visit using modern rotary endodontic techniques.",
                },
                {
                  title: "Retreatment / Crown",
                  note: "Additional procedures may apply",
                  desc: "Retreatment and final crown restoration can add to overall cost depending on the tooth condition.",
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
                What affects root canal cost?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Whether the treated tooth is front tooth, premolar, or molar",
                  "Number of roots and canals present",
                  "Severity of infection and surrounding bone involvement",
                  "Need for retreatment, medication, or additional visits",
                  "Whether a post-treatment crown is required",
                  "Overall condition of the tooth and remaining structure",
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
                For an accurate estimate, we recommend a consultation with {DOCTOR_NAME}.
                After assessing the tooth clinically and with digital X-rays, we can
                explain whether you need single visit RCT, multi-visit treatment,
                retreatment, and whether a{" "}
                <Link
                  to="/crowns"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  crown after root canal
                </Link>{" "}
                is advisable.
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
                Root Canal Treatment Process in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every root canal case at {CLINIC_NAME} is carefully planned for
                precision, thorough disinfection, comfort, and long-term tooth preservation.
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
              Serving Root Canal Patients Across Ahmedabad
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl mx-auto">
              {CLINIC_NAME} is located on Science City Road, Sola, and is easily
              accessible for patients experiencing tooth pain or infection from
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
                Visit Our Root Canal Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad for tooth pain,
                infection management, root canal treatment, crowns, and restorative care.
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

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700"
          aria-label="Book a consultation"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Don&apos;t Ignore Tooth Pain or Infection
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Early root canal treatment can save your natural tooth, prevent the
              spread of infection, and restore comfort before the problem becomes
              more severe.
            </p>
            <button
              onClick={scrollToAppointment}
              aria-label="Book a root canal consultation in Ahmedabad"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Schedule Your Consultation
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
                Frequently Asked Questions About Root Canal Treatment in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting root canal treatment at{" "}
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
                Save Your Tooth with Root Canal Treatment in Ahmedabad
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                If you are experiencing tooth pain, sensitivity, swelling, or signs
                of infection, timely root canal treatment at {CLINIC_NAME}, Sola can
                help preserve your natural tooth and restore comfort. Don&apos;t delay —
                the sooner treatment begins, the better the outcome.
              </p>
              <button
                onClick={scrollToAppointment}
                aria-label="Book a root canal consultation at Sumukh Dental Clinic Ahmedabad"
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
        links={[
          {
            title: "Crowns & Bridges in Ahmedabad",
            href: "/crowns",
            description:
              "A dental crown is often recommended after root canal treatment to restore tooth strength and long-term protection.",
          },
          {
            title: "Preventive & Restorative Dentistry in Ahmedabad",
            href: "/preventive-restorative",
            description:
              "Early restorative care and regular check-ups can help prevent deep decay and reduce the need for root canal treatment.",
          },
          {
            title: "Dental Implants in Ahmedabad",
            href: "/implants",
            description:
              "If a tooth cannot be saved, dental implants may be considered as a natural-looking and long-lasting replacement option.",
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