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

export default function AlignersPage() {
  const alignerBenefits = [
    {
      title: "Virtually Invisible",
      description:
        "Clear aligners are designed to be discreet, making them a popular option for adults and teens who want aesthetic orthodontic treatment.",
    },
    {
      title: "Removable Convenience",
      description:
        "They can be removed while eating, brushing, and flossing, making oral hygiene and daily life easier compared to fixed braces.",
    },
    {
      title: "Comfortable Fit",
      description:
        "Smooth custom-made trays reduce irritation from brackets and wires while guiding teeth gradually into alignment.",
    },
    {
      title: "Digital Planning",
      description:
        "Advanced digital scans and smile simulation help plan tooth movement more precisely and predictably.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Smile Analysis",
      description:
        "Your teeth, bite, smile line, and facial profile are carefully evaluated to determine whether clear aligners are the right option for your case.",
    },
    {
      step: "2",
      title: "3D iTero Digital Scan",
      description:
        "A precise 3D scan of your teeth is taken to create a digital model without messy traditional impressions.",
    },
    {
      step: "3",
      title: "Customized Treatment Planning",
      description:
        "Your tooth movements are digitally planned and a sequence of custom aligners is designed specifically for your smile.",
    },
    {
      step: "4",
      title: "Progressive Smile Transformation",
      description:
        "Each aligner tray gradually shifts your teeth into alignment until the final planned smile is achieved.",
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
      description:
        "A globally recognized clear aligner system that uses advanced digital planning for precise, comfortable, and aesthetic smile correction.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Invisalign treatment in Ahmedabad at Sumukh Dental Clinic",
      features: [
        "Virtually invisible appearance",
        "Customized digital treatment planning",
        "Removable while eating and brushing",
        "Comfortable smooth aligner trays",
        "Suitable for many adult and teen cases",
      ],
      duration: "6-18 months",
    },
    {
      name: "Clear Aligners for Adults",
      description:
        "Aesthetic orthodontic treatment for adults who want to straighten teeth discreetly without the look of traditional braces.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Clear aligners for adults in Ahmedabad",
      features: [
        "Discreet professional appearance",
        "Removable for meetings and social events",
        "Better comfort than many fixed options",
        "No food restrictions",
        "Popular for smile-focused adults",
      ],
      duration: "6-18 months",
    },
    {
      name: "Clear Aligners for Teens",
      description:
        "A modern and convenient orthodontic solution for teens who prefer a more aesthetic and removable alternative to braces.",
      image: "/braces/invisble-aligners-in-ahmedabad.webp",
      alt: "Teen clear aligners treatment in Ahmedabad",
      features: [
        "More aesthetic option for teens",
        "Helps maintain confidence during treatment",
        "Easy brushing and flossing",
        "Comfortable daily wear",
        "Suitable for selected growing patients",
      ],
      duration: "8-18 months",
    },
  ];

  const faqs = [
    {
      q: "How long does clear aligner treatment take?",
      a: "Treatment time depends on the complexity of the case, but many clear aligner treatments are completed in about 6 to 18 months.",
    },
    {
      q: "Are clear aligners noticeable?",
      a: "Clear aligners are made of transparent medical-grade material and are designed to be much less noticeable than traditional braces.",
    },
    {
      q: "How many hours per day should aligners be worn?",
      a: "Aligners are usually worn for 20 to 22 hours per day and removed only for eating, drinking anything other than water, brushing, and flossing.",
    },
    {
      q: "Are clear aligners painful?",
      a: "Patients may feel mild pressure for a short time when switching to a new aligner tray, but this usually settles within a few days.",
    },
    {
      q: "Can aligners treat complex orthodontic problems?",
      a: "Many orthodontic problems can be treated using aligners, but the ideal option depends on the severity of crowding, bite issues, and treatment goals.",
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
        name: "Clear Aligners",
        item: "https://www.sumukhdentalclinic.com/aligners",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Sumukh Dental Clinic",
    url: "https://www.sumukhdentalclinic.com/aligners",
    image:
      "https://www.sumukhdentalclinic.com/braces/invisble-aligners-in-ahmedabad.webp",
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
    medicalSpecialty: "Orthodontics",
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/sumukhdentalclinic/",
      "https://www.facebook.com/profile.php?id=61572468867668",
    ],
  };

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
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackAlignerClick("book-aligners-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackAlignerClick("explore-aligner-options");
    const element = document.getElementById("aligner-options");
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
          Best Clear Aligners in Ahmedabad | Invisalign & Invisible Braces | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Looking for the best clear aligners in Ahmedabad? Get Invisalign and invisible braces treatment with 3D iTero scan, digital smile planning, and expert orthodontic care at Sumukh Dental Clinic."
        />
        <meta
          name="keywords"
          content="clear aligners Ahmedabad, Invisalign Ahmedabad, invisible braces Ahmedabad, aligners treatment Ahmedabad, clear aligner treatment Ahmedabad, best aligners in Ahmedabad, orthodontist in Ahmedabad, teeth straightening Ahmedabad"
        />
        <link
          rel="canonical"
          href="https://www.sumukhdentalclinic.com/aligners"
        />

        <meta
          property="og:title"
          content="Best Clear Aligners in Ahmedabad | Invisalign & Invisible Braces"
        />
        <meta
          property="og:description"
          content="Expert clear aligners and Invisalign treatment in Ahmedabad with digital smile planning and personalized orthodontic care at Sumukh Dental Clinic."
        />
        <meta
          property="og:url"
          content="https://www.sumukhdentalclinic.com/aligners"
        />
        <meta
          property="og:image"
          content="https://www.sumukhdentalclinic.com/braces/invisble-aligners-in-ahmedabad.webp"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Best Clear Aligners in Ahmedabad | Invisalign & Invisible Braces"
        />
        <meta
          name="twitter:description"
          content="Advanced clear aligners and Invisalign treatment in Ahmedabad by Dr. Dipen Thakker at Sumukh Dental Clinic."
        />
        <meta
          name="twitter:image"
          content="https://www.sumukhdentalclinic.com/braces/invisble-aligners-in-ahmedabad.webp"
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
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} />
                  Clear Aligners in Ahmedabad
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Straighten Your Teeth.
                  <span className="text-blue-500"> Almost Invisibly.</span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-500 font-semibold mb-4">
                  Best Clear Aligners in Ahmedabad for a discreet smile transformation.
                </p>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Looking for clear aligners in Ahmedabad? At Sumukh Dental
                  Clinic, we provide advanced{" "}
                  <Link
                    to="/orthodontics"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    orthodontic treatment
                  </Link>{" "}
                  using Invisalign and invisible braces for patients who want a
                  more aesthetic, comfortable, and removable alternative to
                  traditional braces. From crowding and spacing to mild bite
                  correction, we help patients achieve confident smiles with
                  personalized digital planning.
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
                    Book Aligners Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Aligner Options
                  </button>
                </div>

                <div className="mt-4">
                  <a
                    href="https://providerbio-apac.invisalign.com/sv/1374312#start"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAlignerClick("smile-simulation")}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white/70 px-6 py-3 font-bold text-blue-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl"
                    aria-label="Try your smile simulation"
                    title="Try Your Smile Simulation"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-white/40 to-cyan-100/60 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="relative flex items-center gap-2">
                      <Wand2 size={18} className="text-blue-600" />
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
                        alt="Clear aligners treatment in Ahmedabad for invisible teeth straightening"
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

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "3D iTero Scanning",
                "Personalized Planning",
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

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Choose Clear Aligners?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Clear aligners are a popular orthodontic solution for patients
                who want straighter teeth without the appearance of metal
                braces. They are aesthetic, removable, comfortable, and
                digitally planned for precise smile correction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {alignerBenefits.map((item, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    {index === 0 && <Smile className="text-blue-600" size={24} />}
                    {index === 1 && <Check className="text-blue-600" size={24} />}
                    {index === 2 && <ShieldCheck className="text-blue-600" size={24} />}
                    {index === 3 && <Clock className="text-blue-600" size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Why Patients Choose Sumukh Dental Clinic for Aligners
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  As a trusted orthodontic clinic in Ahmedabad, we combine
                  digital diagnosis, smile planning, and patient-focused care to
                  make clear aligner treatment precise, comfortable, and suited
                  to your lifestyle.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ScanLine className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    In-house 3D iTero Scanner
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Advanced digital scanning allows accurate treatment planning
                    and a better understanding of your smile before treatment starts.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Precision Digital Planning
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tooth movement is digitally mapped to create a customized
                    aligner sequence for predictable smile correction.
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
                    We focus on treatment that is understandable, aesthetic,
                    comfortable, and compatible with your daily routine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  Who Can Benefit from Clear Aligners?
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                  Clear aligners in Ahmedabad at Sumukh Dental Clinic can help
                  correct many alignment concerns in adults and teens who want a
                  more discreet orthodontic option.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {candidates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-blue-100 shadow-sm"
                    >
                      <div className="bg-blue-500 rounded-full p-1">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Not sure whether braces or aligners are right for you?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We evaluate your teeth, bite, smile line, and facial profile
                  before recommending the most suitable orthodontic option,
                  whether that is{" "}
                  <Link
                    to="/orthodontics"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    braces
                  </Link>{" "}
                  or clear aligners in Ahmedabad.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Detailed smile and bite evaluation",
                    "Digital 3D scan-based planning",
                    "Clear explanation of aligner suitability",
                    "Transparent duration and treatment guidance",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
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
                  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:scale-105"
                >
                  Schedule an Evaluation
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Clear Aligner Treatment Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every clear aligner case is planned digitally and monitored
                carefully to deliver comfortable, aesthetic, and precise smile
                correction.
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to Start Your Clear Aligner Journey?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation for clear aligners in Ahmedabad to find
              out whether Invisalign or invisible braces are the right fit for
              your smile, goals, and lifestyle.
            </p>

            <button
              onClick={scrollToAppointment}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Book Your Consultation
            </button>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting clear aligner treatment.
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

        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Let’s Plan Your Best Smile
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering Invisalign, invisible braces, or
                other clear aligners in Ahmedabad, we can help you choose the
                most suitable option for your smile and lifestyle.
              </p>

              <button
                onClick={scrollToAppointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Aligners Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <RelatedTreatments
        links={[
          {
            title: "Orthodontic Treatment",
            href: "/orthodontics",
            description:
              "Explore braces and other orthodontic solutions for cases that may need broader correction.",
          },
          {
            title: "Smile Makeover",
            href: "/smile-makeover",
            description:
              "May combine aligners with aesthetic treatments for a more complete smile enhancement.",
          },
          {
            title: "Veneers",
            href: "/veneers",
            description:
              "In selected cases, veneers may be considered after alignment to refine shape and symmetry.",
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