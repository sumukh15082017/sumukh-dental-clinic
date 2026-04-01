import {
  Check,
  Sparkles,
  ArrowRight,
  Smile,
  ShieldCheck,
  Clock,
  Wand2,
  HeartHandshake,
  Camera,
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
const CANONICAL_URL = `${SITE_BASE}/smile-makeover`;
const OG_IMAGE = `${SITE_BASE}/smile-transformation-in-ahmedabad.webp`;

export default function SmileTransformationPage() {
  const treatmentOptions = [
    {
      title: "Smile Design Consultation",
      description:
        "A personalized evaluation of your face, smile line, teeth, and aesthetic goals to create a custom transformation plan.",
      icon: Wand2,
      features: [
        "Personalized smile analysis",
        "Facial and dental harmony planning",
        "Treatment roadmap tailored to you",
        "Clear understanding of outcomes",
        "Ideal for aesthetic smile goals",
      ],
    },
    {
      title: "Multi-Treatment Smile Makeover",
      description:
        "A combined approach using the right aesthetic and restorative procedures to improve the overall appearance of your smile.",
      icon: Sparkles,
      features: [
        "Combines multiple procedures",
        "Improves color, shape, and symmetry",
        "Customized to your dental condition",
        "Natural-looking final result",
        "Holistic smile enhancement",
      ],
    },
    {
      title: "Conservative Aesthetic Correction",
      description:
        "For patients seeking subtle refinement, minimally invasive options can enhance the smile while preserving natural tooth structure.",
      icon: ShieldCheck,
      features: [
        "Conservative smile enhancement",
        "Subtle yet visible improvement",
        "Preserves natural structure",
        "Great for mild smile concerns",
        "Aesthetic and balanced results",
      ],
    },
  ];

  const helpfulBlogs = [
    {
      title: "Dental Veneers in Ahmedabad",
      href: "/blog/dental-veneers-ahmedabad-guide",
      description:
        "Useful when smile transformation involves correcting shape, colour, proportions, or minor smile irregularities.",
    },
    {
      title: "Clear Aligners in Ahmedabad",
      href: "/blog/clear-aligners-ahmedabad-guide",
      description:
        "Helpful for understanding how alignment can improve smile design before veneers, bonding, or other aesthetic treatment.",
    },
    {
      title: "Crowns and Bridges in Ahmedabad",
      href: "/blog/crowns-and-bridges-ahmedabad-guide",
      description:
        "Important when smile makeover treatment needs both aesthetics and functional restoration for damaged teeth.",
    },
    {
      title: "Dental Implants in Ahmedabad",
      href: "/blog/dental-implants-ahmedabad-guide",
      description:
        "Useful for smile transformation cases involving missing teeth, smile balance, and full-mouth rehabilitation.",
    },
  ];

  const benefits = [
    "Improves smile confidence",
    "Enhances facial aesthetics",
    "Corrects color and shape concerns",
    "Creates better smile symmetry",
    "Customized to your goals",
    "Natural-looking smile enhancement",
  ];

  const process = [
    {
      step: "1",
      title: "Smile Assessment",
      description:
        "Your teeth, gums, smile arc, lip line, facial balance, and aesthetic concerns are carefully evaluated.",
    },
    {
      step: "2",
      title: "Planning & Smile Design",
      description:
        "A customized treatment plan is created based on your smile goals, dental condition, and the most suitable combination of procedures.",
    },
    {
      step: "3",
      title: "Treatment Phase",
      description:
        "The required procedures are carried out in a planned sequence to improve the shape, color, alignment, and harmony of your smile.",
    },
    {
      step: "4",
      title: "Final Refinement",
      description:
        "The smile is reviewed in detail and refined for comfort, aesthetics, symmetry, and natural-looking final results.",
    },
  ];

  const faqs = [
    {
      q: "What is a smile transformation?",
      a: "A smile transformation is a personalized treatment approach that improves the overall appearance of your smile using one or more dental procedures based on your specific concerns and goals.",
    },
    {
      q: "What treatments can be part of a smile transformation?",
      a: "Depending on the case, smile transformation may include orthodontics, aligners, veneers, teeth whitening, crowns, bridges, gum contouring, implants, or other aesthetic and restorative procedures.",
    },
    {
      q: "Is every smile transformation the same?",
      a: "No. Every smile transformation is customized. The treatment plan depends on your dental condition, facial features, smile line, tooth proportions, and desired outcome.",
    },
    {
      q: "How long does a smile transformation take?",
      a: "The timeline depends on the number and type of treatments involved. Some smile improvements are faster, while comprehensive makeovers can take longer.",
    },
    {
      q: "Will the final result look natural?",
      a: "Yes. The goal is not just a brighter smile, but a balanced, natural-looking result that suits your face and personality.",
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
        name: "Smile Makeover",
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
    medicalSpecialty: ["Cosmetic Dentistry", "Dentistry", "Orthodontics"],
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
    name: `Smile Makeover in Ahmedabad | Smile Transformation | ${CLINIC_NAME}`,
    description:
      "Get a smile makeover in Ahmedabad at Sumukh Dental Clinic. Improve smile symmetry, tooth shape, color, and overall aesthetics with a personalized smile transformation plan.",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: SITE_BASE, name: CLINIC_NAME },
    about: {
      "@type": "MedicalProcedure",
      name: "Smile Makeover",
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

  const trackSmileClick = (
    action: "book-smile-consultation" | "explore-smile-options"
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
        content_name: `Smile Transformation Page - ${action}`,
        clinic_name: CLINIC_NAME,
      });
    }
  };

  const scrollToappointment = () => {
    trackSmileClick("book-smile-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackSmileClick("explore-smile-options");
    const element = document.getElementById("smile-options");
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
          Smile Makeover in Ahmedabad | Smile Transformation | {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content="Get a smile makeover in Ahmedabad at Sumukh Dental Clinic. Improve smile symmetry, tooth shape, color, and overall aesthetics with a personalized smile transformation plan."
        />
        <meta
          name="keywords"
          content="smile makeover Ahmedabad, smile transformation Ahmedabad, cosmetic dentistry Ahmedabad, smile design Ahmedabad, veneers Ahmedabad, aesthetic dentist Ahmedabad, smile enhancement Ahmedabad, full smile makeover Ahmedabad"
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
          content={`Smile Makeover in Ahmedabad | Smile Transformation | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content="Improve smile symmetry, tooth shape, color, and aesthetics with a personalized smile makeover plan at Sumukh Dental Clinic, Ahmedabad."
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Smile makeover and aesthetic smile transformation in Ahmedabad"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Smile Makeover in Ahmedabad | Smile Transformation | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content="Personalized smile makeover and aesthetic smile transformation in Ahmedabad at Sumukh Dental Clinic."
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
                        Smile Makeover
                      </span>
                      <meta itemProp="position" content="2" />
                    </li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5">
                  <Sparkles size={16} />
                  Smile Transformation in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                  Redesign Your Smile.
                  <span className="text-blue-500"> Elevate Your Confidence.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  A smile makeover is a personalized journey designed to improve
                  the beauty, harmony, and confidence of your smile. By combining{" "}
                  <Link
                    to="/veneers"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    veneers
                  </Link>
                  ,{" "}
                  <Link
                    to="/crowns"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental crowns
                  </Link>
                  ,{" "}
                  <Link
                    to="/implants"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental implants
                  </Link>
                  , and{" "}
                  <Link
                    to="/aligners"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    clear aligners
                  </Link>
                  , we create results that look refined, balanced, and natural.
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
                    Book Smile Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Smile Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Custom
                    </p>
                    <p className="text-sm text-gray-600">Smile Planning</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Natural
                    </p>
                    <p className="text-sm text-gray-600">Aesthetic Results</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Premium
                    </p>
                    <p className="text-sm text-gray-600">Refined Treatment</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-2xl">
                  <img
                    src="/smile-transformation-in-ahmedabad.webp"
                    alt="Smile makeover and aesthetic smile transformation in Ahmedabad"
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SMILE TRANSFORMATION + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
                  What Is Smile Transformation?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Smile transformation is a customized dental approach focused on
                  improving the overall appearance of your smile. It may involve a
                  single treatment or a carefully planned combination of procedures
                  such as{" "}
                  <Link
                    to="/veneers"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    veneers
                  </Link>
                  ,{" "}
                  <Link
                    to="/crowns"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental crowns
                  </Link>
                  ,{" "}
                  <Link
                    to="/implants"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    dental implants
                  </Link>
                  , and{" "}
                  <Link
                    to="/aligners"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    clear aligners
                  </Link>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The goal is not only to enhance teeth, but to create a smile that
                  complements your face, looks natural, and helps you feel more confident.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Key Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-blue-500 rounded-full p-1">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HELPFUL BLOGS */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="blogs-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                id="blogs-heading"
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
              >
                Helpful Guides Before a Smile Makeover
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                These articles explain the individual treatments that are often
                combined during smile transformation planning.
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

        {/* WHY CHOOSE SMILE TRANSFORMATION */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Why Patients Choose Smile Transformation
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Smile transformation is chosen by patients who want a more balanced,
                aesthetic, and confident smile with a treatment plan tailored specifically to them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Smile Harmony
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Improves the balance between teeth, gums, lips, and facial aesthetics.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Camera className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Aesthetic Refinement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhances color, symmetry, proportions, and overall smile appearance.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Customized Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Each smile transformation plan is designed specifically for your facial features and goals.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Long-Term Value
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thoughtful treatment planning creates results that are both aesthetic and functionally meaningful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENT OPTIONS */}
        <section id="smile-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Smile Transformation Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Depending on your needs, smile transformation may involve one treatment
                or a combination of procedures for the most refined result.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {treatmentOptions.map((type, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <type.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="bg-blue-500 rounded-full p-1 mt-1">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We combine smile analysis, aesthetic planning, and patient-focused care
                  to create smile transformation plans that feel natural, refined, and personal.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Wand2 className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Smile Design Thinking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every smile makeover starts with understanding tooth proportions, facial balance, and your aesthetic goals.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Refined Aesthetic Care
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Treatments are selected carefully to improve color, shape, alignment, and harmony without making the smile look artificial.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HeartHandshake className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Personalized Guidance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We focus on clear communication, comfort, and a treatment plan that matches your expectations and lifestyle.
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

        {/* PROCESS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                The Smile Transformation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every smile transformation begins with understanding your smile goals
                and ends with a carefully refined, natural-looking result.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className={premiumCard}>
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
                Visit Our Smile Makeover Clinic in Ahmedabad
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Conveniently located in Sola, Science City, Ahmedabad for smile design,
                veneers, aligners, crowns, implants, and complete smile transformation care.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Is Smile Transformation Right for You?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              If you want to improve the confidence, aesthetics, and balance of your smile,
              a personalized smile transformation plan may be the ideal solution.
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
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions patients ask before starting a smile transformation.
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
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
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
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Let&apos;s Create Your Best Smile
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Whether your goal is subtle refinement or a complete aesthetic upgrade,
                we can help create a smile transformation plan designed around you.
              </p>

              <button
                onClick={scrollToappointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book a Smile Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Veneers",
            href: "/veneers",
            description:
              "Veneers may refine tooth shape, color, and symmetry as part of an aesthetic smile plan.",
          },
          {
            title: "Clear Aligners",
            href: "/aligners",
            description:
              "Aligners can improve alignment discreetly and may form part of a smile makeover sequence.",
          },
          {
            title: "Dental Implants",
            href: "/implants",
            description:
              "Implants may be included when missing teeth affect smile balance, function, or overall aesthetics.",
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