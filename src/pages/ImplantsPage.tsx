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

export default function ImplantsPage() {
  const implantTypes = [
    {
      title: "Single Tooth Implant",
      description:
        "Replace a single missing tooth with a natural-looking, stable solution that blends beautifully with your smile.",
      icon: Crown,
      features: [
        "Preserves jawbone structure",
        "No damage to adjacent teeth",
        "Looks and functions like a natural tooth",
        "Fixed, long-term solution",
        "Excellent aesthetics and stability",
      ],
    },
    {
      title: "Multiple Implants",
      description:
        "Restore several missing teeth with implant-supported replacements designed for strength, comfort, and long-term function.",
      icon: Shield,
      features: [
        "Improves chewing efficiency",
        "Supports bone preservation",
        "Independent tooth replacement",
        "Natural appearance",
        "Durable and stable solution",
      ],
    },
    {
      title: "Full Arch / All-on-4",
      description:
        "A modern full-arch implant solution for patients missing most or all teeth in one jaw.",
      icon: Zap,
      features: [
        "Efficient full-arch rehabilitation",
        "Stable and secure support",
        "Improved comfort and confidence",
        "Restores bite function",
        "Fixed alternative to removable dentures",
      ],
    },
  ];

  const benefits = [
    "Natural look and feel",
    "Improved speech and comfort",
    "Enhanced oral health",
    "Durable and reliable",
    "Easy day-to-day maintenance",
    "Better confidence and function",
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Diagnosis",
      description:
        "A detailed clinical evaluation and imaging help us assess your bone support, oral condition, and suitability for implants.",
    },
    {
      step: "2",
      title: "Treatment Planning",
      description:
        "A personalized plan is created based on the number of missing teeth, bone condition, and final restorative goals.",
    },
    {
      step: "3",
      title: "Implant Placement",
      description:
        "The implant is precisely placed into the jawbone to act as an artificial tooth root and provide long-term support.",
    },
    {
      step: "4",
      title: "Final Restoration",
      description:
        "After healing, a custom crown, bridge, or full-arch prosthesis is attached to restore function and aesthetics.",
    },
  ];

  const faqs = [
    {
      q: "Are dental implants painful?",
      a: "Implant placement is usually carried out under local anesthesia, and most patients find it more comfortable than expected. Mild soreness for a few days is normal.",
    },
    {
      q: "How long do dental implants last?",
      a: "With proper oral hygiene, regular professional care, and good overall health, dental implants can last for many years.",
    },
    {
      q: "Am I a suitable candidate for implants?",
      a: "Many adults are candidates, but suitability depends on bone support, gum health, oral hygiene, and general health. A consultation helps determine the best option for you.",
    },
    {
      q: "Do implants look natural?",
      a: "Yes. Implant restorations are custom-made to match the shape, size, and shade of your natural teeth for a seamless appearance.",
    },
    {
      q: "Can implants replace all my missing teeth?",
      a: "Yes. Depending on your case, implants can replace a single tooth, multiple teeth, or support a full-arch restoration.",
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
        item: "https://www.sumukhdentalclinic.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dental Implants",
        item: "https://www.sumukhdentalclinic.com/implants",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Sumukh Dental Clinic",
    url: "https://www.sumukhdentalclinic.com/implants",
    image:
      "https://www.sumukhdentalclinic.com/dental-implant-in-ahmedabad.webp",
    telephone: "+91-8799527524",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380060",
      addressCountry: "IN",
    },
    areaServed: "Ahmedabad",
    medicalSpecialty: "Dentistry",
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/sumukhdentalclinic/",
      "https://www.facebook.com/profile.php?id=61572468867668",
    ],
  };

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
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackImplantClick("book-implant-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackImplantClick("explore-implant-options");
    const element = document.getElementById("implant-options");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <title>
          Best Dental Implants in Ahmedabad | Tooth Replacement Expert | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Looking for dental implants in Ahmedabad? Restore missing teeth with single tooth implants, multiple implants, and full-arch solutions at Sumukh Dental Clinic with personalized planning and natural-looking results."
        />
        <meta
          name="keywords"
          content="dental implants Ahmedabad, tooth replacement Ahmedabad, single tooth implant Ahmedabad, full arch implants Ahmedabad, implant dentist Ahmedabad, missing teeth replacement Ahmedabad"
        />
        <link rel="canonical" href="https://www.sumukhdentalclinic.com/implants" />

        <meta
          property="og:title"
          content="Best Dental Implants in Ahmedabad | Tooth Replacement Expert"
        />
        <meta
          property="og:description"
          content="Advanced dental implant treatment in Ahmedabad for single tooth replacement, multiple implants, and full-arch rehabilitation."
        />
        <meta
          property="og:url"
          content="https://www.sumukhdentalclinic.com/implants"
        />
        <meta
          property="og:image"
          content="https://www.sumukhdentalclinic.com/dental-implant-in-ahmedabad.webp"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Best Dental Implants in Ahmedabad | Tooth Replacement Expert"
        />
        <meta
          name="twitter:description"
          content="Dental implants in Ahmedabad by Sumukh Dental Clinic for natural-looking and long-lasting tooth replacement."
        />
        <meta
          name="twitter:image"
          content="https://www.sumukhdentalclinic.com/dental-implant-in-ahmedabad.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} />
                  Dental Implants in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Restore Missing Teeth.
                  <span className="text-blue-500"> Rebuild Your Confidence.</span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-500 font-semibold mb-4">
                  Natural-Looking Dental Implants in Ahmedabad for Long-Term Function and Comfort.
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for dental implants in Ahmedabad? At Sumukh Dental
                  Clinic, we provide advanced tooth replacement solutions for
                  single missing teeth, multiple missing teeth, and full-arch
                  rehabilitation. Dental implants are one of the most reliable
                  and natural-looking options for restoring chewing, smile
                  aesthetics, and long-term oral health.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <Star size={16} className="text-yellow-500 fill-yellow-400" />
                    167+ Google Reviews
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-slate-700 font-semibold shadow-sm">
                    <MapPin size={16} className="text-blue-600" />
                    Ahmedabad • Science City • Sola
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToAppointment}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Implant Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
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
                    <p className="text-sm text-slate-500">Look & Feel</p>
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
          alt="Dental implants treatment in Ahmedabad for missing teeth replacement"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* CLINICAL TRUST STRIP */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Advanced Diagnosis",
                "Personalized Planning",
                "Modern Techniques",
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

        {/* WHAT ARE IMPLANTS + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Are Dental Implants?
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Dental implants are titanium fixtures placed into the jawbone
                  to function as artificial tooth roots. They provide secure
                  support for{" "}
                  <Link
                    to="/crowns"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    crowns and bridges
                  </Link>
                  , or full-arch restorations and are designed to look, feel,
                  and function like natural teeth.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlike removable options, implants are stable and secure. They
                  also help maintain jawbone support in areas where teeth are
                  missing, making them one of the most comprehensive tooth
                  replacement options available.
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

        {/* WHY CHOOSE US */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Why Patients Choose Sumukh Dental Clinic
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine modern implant planning, careful diagnosis, and
                  patient-focused care to provide precise, comfortable, and
                  predictable treatment outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Precision Diagnosis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every implant case begins with careful clinical evaluation
                    and treatment planning.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Modern Clinical Approach
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We use updated techniques and modern planning principles for
                    better predictability.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HeartHandshake className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Patient Comfort
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We focus on clear guidance, comfort, and support throughout
                    every stage of treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IMPLANTS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Patients Choose Implants
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Dental implants are often preferred because they combine
                aesthetics, function, comfort, and long-term support in one
                solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Natural Appearance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Implant-supported teeth are custom-designed to blend naturally
                  with your smile.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Reliable Support
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Implants create secure support for chewing, speaking, and
                  daily confidence.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Tooth-Sparing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Unlike some alternatives, implants do not depend on adjacent
                  teeth for support.
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
                  With proper care, implants can provide durable long-term
                  function and aesthetics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLANT OPTIONS */}
        <section id="implant-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Types of Implant Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We offer implant solutions based on the number of missing teeth
                and the type of restoration best suited to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {implantTypes.map((type, index) => (
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
                The Implant Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every implant journey is planned carefully for precision,
                function, comfort, and long-term stability.
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

        {/* CANDIDATE CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Am I a Candidate for Dental Implants?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Most people with good general and oral health are candidates for
              implants. A consultation helps determine the most suitable implant
              approach for your smile and function.
            </p>
            <button
              onClick={() => {
                trackImplantClick("schedule-implant-evaluation");
                scrollToAppointment();
              }}
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
                Common questions patients ask before starting implant treatment.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
                Restore Your Smile with Confidence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you need a single tooth replacement or a full-arch
                implant solution, we can help you choose the right treatment
                plan with clarity and care.
              </p>

              <button
                onClick={scrollToAppointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Implant Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Crowns & Bridges",
            href: "/crowns",
            description:
              "Implants are often restored with crowns or bridge-supported solutions for long-term function.",
          },
          {
            title: "Preventive & Restorative Dentistry",
            href: "/preventive-restorative",
            description:
              "Supporting gum and tooth health can improve long-term implant stability and maintenance.",
          },
          {
            title: "Smile Transformation",
            href: "/smile-makeover",
            description:
              "Dental implants may also be part of a larger smile rehabilitation or aesthetic treatment plan.",
          },
        ]}
      />

      <AppointmentForm />
      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}