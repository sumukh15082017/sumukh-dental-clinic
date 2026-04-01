import {
  Check,
  Sparkles,
  ArrowRight,
  Smile,
  Shield,
  Clock,
  Microscope,
  HeartHandshake,
  Wand2,
  MapPin,
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

const CLINIC_NAME = "Sumukh Dental Clinic";
const DOCTOR_NAME = "Dr. Dipen Thakker";
const DOCTOR_DEGREE = "MDS Orthodontist";
const PHONE = "+91-8799527524";
const ADDRESS_STREET =
  "GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola";
const ADDRESS_CITY = "Ahmedabad";
const ADDRESS_STATE = "Gujarat";
const ADDRESS_PINCODE = "380060";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const CANONICAL_URL = `${SITE_BASE}/veneers`;
const OG_IMAGE = `${SITE_BASE}/dental-veneers-in-ahmedabad.webp`;

export default function VeneersPage() {
  const veneerTypes = [
    {
      title: "Porcelain Veneers",
      description:
        "Thin, custom-made ceramic shells bonded to the front of teeth for long-lasting aesthetic enhancement.",
      icon: Sparkles,
      features: [
        "Highly aesthetic finish",
        "Excellent stain resistance",
        "Natural light-reflecting appearance",
        "Durable and long-lasting",
        "Custom smile design",
      ],
    },
    {
      title: "Composite Veneers",
      description:
        "Tooth-colored composite material shaped directly on the teeth to improve smile appearance conservatively.",
      icon: Smile,
      features: [
        "More conservative option",
        "Usually completed faster",
        "Cost-effective solution",
        "Repairs can be easier",
        "Improves shape and color",
      ],
    },
    {
      title: "Smile Design Veneers",
      description:
        "A personalized veneer approach for patients seeking a more comprehensive smile transformation.",
      icon: Wand2,
      features: [
        "Customized smile planning",
        "Improves symmetry",
        "Enhances tooth proportion",
        "Boosts confidence",
        "Natural-looking final result",
      ],
    },
  ];

  const helpfulBlogs = [
    {
      title: "Dental Veneers in Ahmedabad Guide",
      href: "/blog/dental-veneers-ahmedabad-guide",
      description:
        "Understand veneer types, smile design, durability, and who may be a good candidate for veneers.",
    },
    {
      title: "Clear Aligners in Ahmedabad Guide",
      href: "/blog/clear-aligners-ahmedabad-guide",
      description:
        "Helpful for cases where tooth alignment may need to be improved before cosmetic veneer treatment.",
    },
    {
      title: "Smile Makeover in Ahmedabad Guide",
      href: "/blog/smile-makeover-ahmedabad-guide",
      description:
        "Useful if you are comparing veneers with a broader smile transformation approach.",
    },
    {
      title: "Crowns and Bridges in Ahmedabad Guide",
      href: "/blog/crowns-and-bridges-ahmedabad-guide",
      description:
        "Helpful for understanding when crowns may be more suitable than veneers for damaged teeth.",
    },
  ];

  const benefits = [
    "Improves tooth color",
    "Enhances shape and symmetry",
    "Closes minor gaps",
    "Improves smile confidence",
    "Natural-looking results",
    "Long-lasting aesthetic upgrade",
  ];

  const process = [
    {
      step: "1",
      title: "Smile Consultation",
      description:
        "We assess your smile, facial proportions, tooth color, and aesthetic goals to decide whether veneers are suitable.",
    },
    {
      step: "2",
      title: "Planning & Preview",
      description:
        "A customized smile design is created to plan the ideal shape, contour, and appearance of your veneers.",
    },
    {
      step: "3",
      title: "Tooth Preparation",
      description:
        "Minimal tooth preparation may be performed depending on the type of veneers and the aesthetic goals.",
    },
    {
      step: "4",
      title: "Final Bonding",
      description:
        "The veneers are carefully placed and bonded to create a refined, natural-looking smile enhancement.",
    },
  ];

  const faqs = [
    {
      q: "What are veneers used for?",
      a: "Veneers are used to improve the appearance of teeth affected by discoloration, uneven shape, minor gaps, small chips, or mild irregularities.",
    },
    {
      q: "Do veneers look natural?",
      a: "Yes. Veneers are designed to match facial features, smile line, and surrounding teeth for a natural and aesthetic result.",
    },
    {
      q: "Are veneers permanent?",
      a: "Porcelain veneers are considered a long-term treatment because some tooth preparation may be needed. Composite veneers may be more conservative in some cases.",
    },
    {
      q: "How long do veneers last?",
      a: "With proper care, oral hygiene, and regular dental follow-up, veneers can last for many years.",
    },
    {
      q: "Are veneers only for celebrities?",
      a: "No. Veneers are a smile-enhancing treatment suitable for many patients who want to improve tooth shape, color, or overall smile aesthetics.",
    },
  ];

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
        name: "Dental Veneers",
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
    medicalSpecialty: ["Cosmetic Dentistry", "Dentistry"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Veneer Treatments",
      itemListElement: veneerTypes.map((v) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: v.title,
          description: v.description,
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
    name: `Dental Veneers in Ahmedabad | Porcelain & Composite Veneers | ${CLINIC_NAME}`,
    description:
      "Get dental veneers in Ahmedabad at Sumukh Dental Clinic. Improve tooth color, shape, symmetry, and smile aesthetics with porcelain veneers, composite veneers, and custom smile design.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Dental Veneers",
      procedureType: "https://schema.org/TherapeuticProcedure",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
    author: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      medicalSpecialty: "Dentistry",
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  const trackVeneerClick = (
    action: "book-veneers-consultation" | "explore-veneer-options"
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
        content_name: `Veneers Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToappointment = () => {
    trackVeneerClick("book-veneers-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackVeneerClick("explore-veneer-options");
    const element = document.getElementById("veneer-options");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Dental Veneers in Ahmedabad | Porcelain &amp; Composite Veneers |{" "}
          {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content="Get dental veneers in Ahmedabad at Sumukh Dental Clinic. Improve tooth color, shape, symmetry, and smile aesthetics with porcelain veneers, composite veneers, and custom smile design."
        />
        <meta
          name="keywords"
          content="dental veneers Ahmedabad, porcelain veneers Ahmedabad, composite veneers Ahmedabad, smile design Ahmedabad, cosmetic dentistry Ahmedabad, veneers cost Ahmedabad, smile enhancement Ahmedabad, veneers Sola Ahmedabad"
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
          content={`Dental Veneers in Ahmedabad | Porcelain & Composite Veneers | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content="Improve tooth colour, shape, symmetry, and smile aesthetics with porcelain veneers, composite veneers, and smile design at Sumukh Dental Clinic, Ahmedabad."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Dental veneers and smile enhancement treatment in Ahmedabad"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Dental Veneers in Ahmedabad | Porcelain & Composite Veneers | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content="Get natural-looking porcelain and composite veneers in Ahmedabad at Sumukh Dental Clinic."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
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
                        Veneers
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} />
                  Dental Veneers in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Refine Your Teeth.
                  <span className="text-blue-500"> Elevate Your Smile.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Dental veneers are a highly aesthetic treatment designed to
                  enhance the color, shape, symmetry, and overall appearance of
                  your teeth. They help create a brighter, more balanced, and
                  confident smile.
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
                    onClick={scrollToappointment}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Veneers Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Veneer Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Bright
                    </p>
                    <p className="text-sm text-slate-500">Smile Enhancement</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Natural
                    </p>
                    <p className="text-sm text-slate-500">Aesthetic Results</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Custom
                    </p>
                    <p className="text-sm text-slate-500">Smile Design</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/dental-veneers-in-ahmedabad.webp"
                    alt="Dental veneers and smile enhancement treatment in Ahmedabad"
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Smile Analysis",
                "Personalized Design",
                "Modern Aesthetic Dentistry",
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

        {/* WHAT ARE VENEERS + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Are Veneers?
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Veneers are thin aesthetic coverings placed over the front surface
                  of teeth to improve color, shape, size, symmetry, and smile appearance.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  They are commonly used in smile enhancement cases where patients want
                  a more refined, brighter, and balanced smile with natural-looking
                  results. In selected cases,{" "}
                  <Link
                    to="/aligners"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    clear aligners
                  </Link>{" "}
                  may be recommended before veneers to improve alignment.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Key Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-blue-500 rounded-full p-1 shadow-sm">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG LINKS */}
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
                Helpful Articles Before Choosing Veneers
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                These guides can help patients understand how veneers compare with
                aligners, crowns, and full smile makeover planning.
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

        {/* WHY CHOOSE US */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Why Patients Choose Sumukh Dental Clinic
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine smile analysis, aesthetic planning, and precise treatment
                  execution to create veneers that look refined, natural, and harmonious.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Smile Analysis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every veneer case begins with careful evaluation of tooth proportions, smile line, and facial balance.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Aesthetic Precision
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Veneers are planned carefully for natural shape, shade, symmetry, and smile enhancement.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HeartHandshake className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Patient-Focused Care
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We focus on understanding your goals and creating a smile that feels confident and authentic to you.
                  </p>
                </div>
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

        {/* WHY VENEERS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Veneers Are Chosen
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Veneers are often chosen to improve smile aesthetics, refine tooth shape,
                and create a more harmonious, polished appearance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Smile Enhancement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Veneers can brighten and refine the smile for a more attractive and balanced appearance.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Sparkles className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Natural Aesthetics
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Veneers are designed to look natural while enhancing tooth color, shape, and symmetry.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Conservative Improvement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  In selected cases, veneers can provide noticeable aesthetic improvement with conservative planning.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Long-Term Value
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  With proper care, veneers can remain aesthetic and functional for many years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONS */}
        <section id="veneer-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Veneer Options
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The ideal veneer treatment depends on your aesthetic goals, tooth condition,
                smile design needs, and desired level of refinement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {veneerTypes.map((type, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <type.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                The Veneers Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Veneers are planned carefully to enhance your smile with precision,
                symmetry, comfort, and natural-looking aesthetics.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className={premiumCard}>
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 text-blue-300 text-4xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP */}
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
                Visit Our Veneers Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad for porcelain
                veneers, composite veneers, smile design, and aesthetic dental care.
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Are Veneers Right for Your Smile?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              If you want to improve the color, shape, or overall appearance of your teeth,
              veneers may be an excellent option for smile enhancement.
            </p>
            <button
              onClick={scrollToappointment}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Schedule Your Consultation
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before getting veneers.
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

        {/* FINAL CTA */}
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Create a More Refined, Confident Smile
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Veneers can help you achieve a brighter, more balanced smile with
                a personalized treatment approach focused on natural aesthetics.
              </p>

              <button
                onClick={scrollToappointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book a Veneers Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Smile Transformation",
            href: "/smile-makeover",
            description:
              "Veneers are often part of a broader smile makeover designed around facial balance and aesthetics.",
          },
          {
            title: "Orthodontic Treatment",
            href: "/orthodontics",
            description:
              "Braces may be recommended when alignment or bite correction is needed before cosmetic treatment.",
          },
          {
            title: "Clear Aligners",
            href: "/aligners",
            description:
              "Aligners may help improve tooth position before veneers in selected aesthetic cases.",
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