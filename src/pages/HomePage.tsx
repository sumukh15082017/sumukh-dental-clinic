import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

// ─── Constants ────────────────────────────────────────────────────────────────
const CLINIC_NAME = "Sumukh Dental Clinic";
const CLINIC_ALTERNATE = "Sumukh Dental Clinic And Orthodontic Centre";
const DOCTOR_NAME = "Dr. Dipen Thakker";
const DOCTOR_TITLE = "MDS Orthodontist & Dental Surgeon";
const PHONE = "+91-8799527524";
const ADDRESS_STREET =
  "GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola";
const ADDRESS_CITY = "Ahmedabad";
const ADDRESS_STATE = "Gujarat";
const ADDRESS_PINCODE = "380060";
const SITE_BASE = "https://www.sumukhdentalclinic.com";
const CANONICAL_URL = `${SITE_BASE}/`;
const OG_IMAGE = `${SITE_BASE}/best-dental-clinic-in-ahmedabad.webp`;

export default function HomePage() {
  // ─── Schema Markup ────────────────────────────────────────────────────────

  // 1. Dentist / LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${SITE_BASE}/#clinic`,
    name: CLINIC_NAME,
    alternateName: CLINIC_ALTERNATE,
    url: SITE_BASE,
    logo: `${SITE_BASE}/logo.webp`,
    image: OG_IMAGE,
    description: `${CLINIC_NAME} in Sola, Ahmedabad offers expert orthodontic and dental care including Invisalign, metal braces, ceramic braces, self-ligating braces, lingual braces, dental implants, smile makeovers, root canal treatment, teeth whitening, crowns, and comprehensive general dentistry by ${DOCTOR_NAME}, MDS Orthodontist.`,
    telephone: PHONE,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
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
      { "@type": "Neighborhood", name: "Chandkheda" },
      { "@type": "Neighborhood", name: "Naranpura" },
      { "@type": "Neighborhood", name: "Satellite" },
      { "@type": "Neighborhood", name: "Memnagar" },
    ],
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
    medicalSpecialty: [
      "Orthodontics",
      "Dentistry",
      "Cosmetic Dentistry",
      "Implant Dentistry",
      "Endodontics",
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(
      `${CLINIC_NAME} ${ADDRESS_STREET} Ahmedabad`
    )}`,
    sameAs: [
      "https://www.instagram.com/sumukhdentalclinic/",
      "https://www.facebook.com/profile.php?id=61572468867668",
    ],
    founder: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      jobTitle: DOCTOR_TITLE,
      medicalSpecialty: "Orthodontics",
      url: `${SITE_BASE}/about`,
      worksFor: { "@type": "MedicalBusiness", name: CLINIC_NAME },
    },
    employee: {
      "@type": "Physician",
      name: DOCTOR_NAME,
      jobTitle: DOCTOR_TITLE,
      medicalSpecialty: "Orthodontics",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental & Orthodontic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Invisalign & Clear Aligners",
            url: `${SITE_BASE}/aligners`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Braces (Metal, Ceramic, Self-Ligating, Lingual)",
            url: `${SITE_BASE}/orthodontics`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Implants",
            url: `${SITE_BASE}/implants`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Smile Makeover",
            url: `${SITE_BASE}/smile-makeover`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Root Canal Treatment",
            url: `${SITE_BASE}/root-canal`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Veneers",
            url: `${SITE_BASE}/veneers`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Crowns & Bridges",
            url: `${SITE_BASE}/crowns`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Teeth Whitening",
            url: `${SITE_BASE}/teeth-whitening`,
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "167",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // 2. WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_BASE}/#website`,
    url: SITE_BASE,
    name: CLINIC_NAME,
    description:
      "Best orthodontist and dental clinic in Ahmedabad offering Invisalign, braces, dental implants, smile makeovers, root canal treatment, and complete dental care by Dr. Dipen Thakker.",
    publisher: {
      "@id": `${SITE_BASE}/#clinic`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_BASE}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  // 3. Physician schema
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_BASE}/#doctor`,
    name: DOCTOR_NAME,
    jobTitle: DOCTOR_TITLE,
    medicalSpecialty: ["Orthodontics", "Dentofacial Orthopedics"],
    description: `${DOCTOR_NAME} is a qualified MDS Orthodontist with over 10 years of clinical experience in orthodontic and dental treatment in Ahmedabad. He is a certified Invisalign provider and specialises in braces, clear aligners, and comprehensive smile correction.`,
    telephone: PHONE,
    worksFor: {
      "@type": "MedicalBusiness",
      name: CLINIC_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_STREET,
        addressLocality: ADDRESS_CITY,
        addressRegion: ADDRESS_STATE,
        postalCode: ADDRESS_PINCODE,
        addressCountry: "IN",
      },
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Ahmedabad Dental College and Hospital",
        description: "MDS Orthodontics, 2016",
      },
      {
        "@type": "EducationalOrganization",
        name: "Karnavati School of Dentistry",
        description: "BDS, 2012",
      },
    ],
    knowsAbout: [
      "Invisalign",
      "Clear Aligners",
      "Metal Braces",
      "Ceramic Braces",
      "Self-Ligating Braces",
      "Lingual Braces",
      "Orthodontic Treatment",
      "Dental Implants",
      "Smile Makeover",
    ],
    sameAs: [
      "https://www.practo.com/ahmedabad/doctor/dipen-thakker-dentist",
      "https://in.linkedin.com/in/dr-dipen-thakker-82bb0b119",
    ],
  };

  // 4. MedicalWebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": CANONICAL_URL,
    url: CANONICAL_URL,
    name: `Best Orthodontist in Ahmedabad | Invisalign, Braces, Implants | ${CLINIC_NAME}`,
    description: `${CLINIC_NAME} in Sola, Ahmedabad — expert orthodontic and dental care by ${DOCTOR_NAME}, MDS Orthodontist. Invisalign, braces, dental implants, smile makeovers, root canal treatment, and more.`,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_BASE}/#website` },
    about: {
      "@id": `${SITE_BASE}/#clinic`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    author: {
      "@id": `${SITE_BASE}/#doctor`,
    },
    dateModified: new Date().toISOString().split("T")[0],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_URL },
      ],
    },
  };

  // 5. FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best orthodontist in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${DOCTOR_NAME} at ${CLINIC_NAME} is one of the leading orthodontists in Ahmedabad, offering Invisalign, metal braces, ceramic braces, self-ligating braces, lingual braces, and comprehensive orthodontic treatment with over 10 years of clinical experience.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Sumukh Dental Clinic offer Invisalign in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, ${CLINIC_NAME} is a certified Invisalign provider in Ahmedabad. ${DOCTOR_NAME} offers customised Invisalign clear aligner treatment for teens and adults, with in-house 3D iTero digital scanning for precise treatment planning.`,
        },
      },
      {
        "@type": "Question",
        name: "What dental services are available at Sumukh Dental Clinic Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${CLINIC_NAME} in Sola, Ahmedabad offers Invisalign, metal braces, ceramic braces, self-ligating braces, lingual braces, dental implants, smile makeovers, dental veneers, crowns and bridges, root canal treatment, teeth whitening, and general dentistry.`,
        },
      },
      {
        "@type": "Question",
        name: "Where is Sumukh Dental Clinic located in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${CLINIC_NAME} is located at ${ADDRESS_STREET}, ${ADDRESS_CITY} – ${ADDRESS_PINCODE}. The clinic is on Science City Road, Sola, and is easily accessible from Thaltej, Bodakdev, Satellite, Gota, Naranpura, and surrounding areas of Ahmedabad.`,
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment at Sumukh Dental Clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book an appointment at ${CLINIC_NAME} by filling out the appointment form on our website, calling us at ${PHONE}, or reaching out via WhatsApp. We are open Monday to Saturday, 10 AM to 8 PM.`,
        },
      },
      {
        "@type": "Question",
        name: "What are the clinic timings of Sumukh Dental Clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${CLINIC_NAME} is open Monday to Saturday from 10:00 AM to 8:00 PM. Please call ${PHONE} or book online to confirm your appointment slot.`,
        },
      },
    ],
  };

  // 6. Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CLINIC_NAME,
    url: SITE_BASE,
    logo: `${SITE_BASE}/logo.webp`,
    sameAs: [
      "https://www.instagram.com/sumukhdentalclinic/",
      "https://www.facebook.com/profile.php?id=61572468867668",
    ],
  };

  // 7. Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Orthodontic and Dental Treatments",
    provider: {
      "@id": `${SITE_BASE}/#clinic`,
    },
    areaServed: {
      "@type": "City",
      name: "Ahmedabad",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Invisalign Ahmedabad" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Braces Treatment Ahmedabad" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Dental Implants Ahmedabad" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Smile Makeover Ahmedabad" },
        },
      ],
    },
  };

  const featuredBlogs = [
  {
    title: "Braces Cost in Ahmedabad (2026)",
    link: "/blog/braces-cost-ahmedabad-2026",
  },
  {
    title: "Invisalign Cost in Ahmedabad",
    link: "/blog/invisalign-cost-ahmedabad",
  },
  {
    title: "Braces vs Invisalign in Ahmedabad",
    link: "/blog/braces-vs-invisalign-ahmedabad",
  },
  {
    title: "How Long Does Invisalign Take?",
    link: "/blog/how-long-does-invisalign-take-ahmedabad",
  },
  {
    title: "How to Choose the Best Orthodontist in Ahmedabad",
    link: "/blog/best-orthodontist-in-ahmedabad-guide",
  },
];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Best Orthodontist in Ahmedabad | Invisalign, Braces &amp; Dental Implants |{" "}
          {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`${CLINIC_NAME} in Sola, Ahmedabad — expert orthodontic & dental care by ${DOCTOR_NAME}, MDS Orthodontist. Invisalign, braces, dental implants, smile makeovers, root canal, and comprehensive dental treatment. 167+ Google reviews. Book today.`}
        />
        <meta
          name="keywords"
          content="best orthodontist in Ahmedabad, dental clinic Ahmedabad, Invisalign Ahmedabad, braces Ahmedabad, dental implants Ahmedabad, smile makeover Ahmedabad, Dr Dipen Thakker, Sumukh Dental Clinic, clear aligners Ahmedabad, root canal Ahmedabad, teeth whitening Ahmedabad, orthodontic treatment Ahmedabad, best dentist Sola Ahmedabad, dental clinic Sola Science City"
        />
        <meta name="author" content={`${DOCTOR_NAME} — ${CLINIC_NAME}`} />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
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
          content={`Best Orthodontist in Ahmedabad | Invisalign, Braces & Implants | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Expert Invisalign, braces, dental implants, and smile makeovers in Ahmedabad by ${DOCTOR_NAME} at ${CLINIC_NAME}, Sola. 167+ Google reviews. Book a consultation today.`}
        />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${CLINIC_NAME} — Best orthodontist and dental clinic in Ahmedabad`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Best Orthodontist in Ahmedabad | Invisalign, Braces & Implants | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Expert Invisalign, braces, dental implants, and smile makeovers in Ahmedabad by ${DOCTOR_NAME} at ${CLINIC_NAME}.`}
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content={`${CLINIC_NAME} — Best dental care in Ahmedabad`}
        />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navigation />
      <Hero />
      <About />
      <Testimonials />

      {/* ── Blog Preview Section ───────────────────────────────────── */}
<section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Dental Tips &amp; Smile Insights
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Learn about braces, Invisalign, smile makeovers, and dental care from
        our expert orthodontist in Ahmedabad.
      </p>
    </div>

   <div className="flex gap-6 overflow-x-auto pb-4">
      {featuredBlogs.map((blog, index) => (
        <Link
          key={index}
          to={blog.link}
          title={blog.title}
          aria-label={blog.title}
          className="min-w-[260px] rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:scale-[1.02]"
        >
          <h3 className="mb-2 text-lg font-bold text-blue-900 hover:underline">
            {blog.title}
          </h3>
          <p className="text-sm text-slate-600">
            Read more →
          </p>
        </Link>
      ))}
    </div>

    <div className="text-center mt-8">
      <Link
        to="/blog"
        title="Dental Blog Ahmedabad"
        aria-label="View all dental blogs in Ahmedabad"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
      >
        View All Articles
      </Link>
    </div>
  </div>
</section>

      <AppointmentForm />
      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}