import {
  Check,
  Plane,
  Hotel,
  Car,
  Clock,
  HeartHandshake,
  Globe,
  MapPin,
  Phone,
  Stethoscope,
  Shield,
  Smile,
  BadgeDollarSign,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Microscope,
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

export default function DentalTourismPage() {
  const tourismServices = [
    {
      title: "Online Consultation & Treatment Planning",
      description:
        "Begin your dental journey before you travel with an initial review of your concern, records, scans, and treatment goals.",
      icon: Stethoscope,
      features: [
        "Virtual consultation before your visit",
        "Review of dental photos, X-rays, and scans",
        "Preliminary diagnosis and treatment recommendations",
        "Estimated treatment timeline and appointments",
        "Personalized planning for international patients",
      ],
    },
    {
      title: "Travel & Stay Assistance",
      description:
        "We help make your visit smoother with practical guidance for travel dates, accommodation options, and a comfortable stay.",
      icon: Hotel,
      features: [
        "Guidance for nearby hotels and serviced apartments",
        "Support in choosing stay options close to the clinic",
        "Convenient scheduling based on travel plans",
        "Assistance for patients travelling with family",
        "Better planning for a stress-free visit",
      ],
    },
    {
      title: "Airport Pickup & Local Coordination",
      description:
        "From arrival to your appointments, we help you understand how to plan local movement and reach the clinic comfortably.",
      icon: Car,
      features: [
        "Guidance for airport pickup arrangements",
        "Support with local travel recommendations",
        "Easy clinic access planning",
        "Smooth coordination for first appointment arrival",
        "Simple guidance for out-of-country visitors",
      ],
    },
  ];

  const benefits = [
    "Advanced dental care with personalized planning",
    "Excellent value for international patients",
    "Modern clinical approach and hygiene protocols",
    "Convenient treatment scheduling",
    "Support before, during, and after travel",
    "Comprehensive treatment options under one roof",
  ];

  const whyChooseUs = [
    {
      title: "Advanced Dental Care",
      description:
        "We combine thoughtful planning, modern dentistry, and a patient-focused clinical approach for international visitors.",
      icon: Microscope,
    },
    {
      title: "Excellent Value",
      description:
        "International patients often choose dental tourism in Ahmedabad for quality treatment with strong overall value.",
      icon: BadgeDollarSign,
    },
    {
      title: "Safe & Hygienic Environment",
      description:
        "We emphasize sterilization, safety, comfort, and clarity at every step of the treatment journey.",
      icon: Shield,
    },
    {
      title: "Personalized Support",
      description:
        "From first contact to follow-up after treatment, we guide you through the process with attention and care.",
      icon: HeartHandshake,
    },
  ];

  const treatmentOptions = [
    "Dental Implants",
    "Full Mouth Rehabilitation",
    "Smile Makeovers",
    "Veneers & Crowns",
    "Root Canal Treatment",
    "Braces & Aligners",
    "Dentures",
    "Cosmetic Dentistry",
  ];

  const process = [
    {
      step: "1",
      title: "Share Your Concern",
      description:
        "Send us your dental concern, photographs, previous records, scans, or X-rays so we can understand your case better.",
    },
    {
      step: "2",
      title: "Receive a Treatment Plan",
      description:
        "We review your records and suggest a preliminary treatment approach, expected timeline, and likely appointment sequence.",
    },
    {
      step: "3",
      title: "Plan Your Travel",
      description:
        "Your appointments can then be coordinated with your travel dates, stay preferences, and overall convenience.",
    },
    {
      step: "4",
      title: "Begin Treatment",
      description:
        "On arrival, we assess your case clinically, confirm the treatment plan, and begin care in a comfortable, organized manner.",
    },
  ];

  const faqs = [
    {
      q: "What treatments are commonly chosen for dental tourism?",
      a: "Dental implants, smile makeovers, crowns, veneers, root canal treatments, orthodontic care, dentures, and full mouth rehabilitation are among the most commonly chosen treatments.",
    },
    {
      q: "Can I get a treatment plan before travelling?",
      a: "Yes. After reviewing your case details, photos, scans, or X-rays, we can share a preliminary treatment outline and expected treatment journey.",
    },
    {
      q: "Do you help with accommodation and travel planning?",
      a: "Yes. We can guide you regarding nearby stay options, appointment scheduling, and general planning for a smoother visit.",
    },
    {
      q: "How long will I need to stay?",
      a: "That depends on the treatment required. Some procedures can be done in a short visit, while advanced or phased treatment may require a longer stay or multiple visits.",
    },
    {
      q: "Do you provide follow-up after I return home?",
      a: "Yes. We remain available for post-treatment guidance and remote follow-up communication after your visit.",
    },
  ];

  const trackTourismClick = (action: "book-consultation" | "explore-services") => {
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
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackTourismClick("book-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackTourismClick("explore-services");
    const element = document.getElementById("tourism-services");
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
          Dental Tourism in Ahmedabad | International Dental Care | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Plan your dental tourism in Ahmedabad with Sumukh Dental Clinic. We offer consultation, treatment planning, travel-friendly scheduling, and advanced dental care for international patients."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/dental-tourism"
        />
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
                  Dental Tourism
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  World-Class Dental Care.
                  <span className="text-blue-500"> Smooth Travel Experience.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  We help international patients combine high-quality dental
                  treatment in Ahmedabad with comfort, convenience, and
                  personalized support. From consultation to travel planning and
                  follow-up, your journey is designed to feel clear and
                  stress-free.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToAppointment}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Dental Tourism Services
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Planned
                    </p>
                    <p className="text-sm text-slate-500">Treatment Journey</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Smooth
                    </p>
                    <p className="text-sm text-slate-500">Travel Support</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Trusted
                    </p>
                    <p className="text-sm text-slate-500">Patient Care</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/dental-tourism-in-ahmedabad.webp"
                    alt="Dental tourism consultation and treatment planning in Ahmedabad"
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
                "Personalized Planning",
                "Modern Dental Care",
                "Travel-Friendly Scheduling",
                "Patient-Centered Support",
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

        {/* WHAT IS DENTAL TOURISM + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Is Dental Tourism?
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Dental tourism is when patients travel to receive dental care
                  while also benefiting from planned scheduling, travel
                  convenience, and personalized treatment support.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  It is especially helpful for patients seeking advanced
                  treatment options, organized care, and a smoother overall
                  dental journey while away from home.
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
                  We combine thoughtful treatment planning, clinical care,
                  travel-friendly scheduling, and personalized guidance to make
                  the dental tourism experience smooth and reassuring.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="text-blue-600" size={22} />
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
          </div>
        </section>

        {/* WHY DENTAL TOURISM */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Dental Tourism Matters
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                It allows patients to receive quality treatment with organized
                planning, travel convenience, and a supportive care experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Plane className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Planned Travel
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Appointments can be coordinated thoughtfully around your
                  travel dates and availability.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Smile Improvement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Patients often travel for treatments that improve comfort,
                  function, and confidence in their smile.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Globe className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  International Convenience
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Dental tourism helps patients plan care more efficiently while
                  staying informed at every stage.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Efficient Scheduling
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Proper coordination can make the treatment journey feel more
                  organized and manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="tourism-services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Dental Tourism Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our dental tourism support is designed to make treatment
                planning, travel, and care feel more comfortable and better
                organized for international patients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tourismServices.map((service, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
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

        {/* TREATMENT OPTIONS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Popular Treatments for International Patients
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Patients commonly travel for restorative, cosmetic, implant, and
                orthodontic care depending on their treatment needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentOptions.map((item, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <Check className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {item}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Personalized treatment planning based on your concern,
                    timeline, and travel schedule.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Your Dental Tourism Journey
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every visit is planned step by step to help you feel informed,
                prepared, and supported throughout treatment.
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

        {/* INDIA / AHMEDABAD */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Globe className="text-blue-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Why Choose India?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  India is a popular destination for dental tourism because it
                  offers advanced treatment options, experienced clinicians, and
                  strong overall value for international patients.
                </p>
                <ul className="space-y-3">
                  {[
                    "Globally trusted destination for dental care",
                    "Strong value for treatment planning",
                    "Modern dentistry and technology",
                    "Opportunity to combine treatment with travel",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Why Choose Ahmedabad?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ahmedabad offers comfortable city connectivity, convenient
                  accommodation choices, and a practical setting for planned
                  dental treatment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Well-connected travel access",
                    "Accommodation options across budgets",
                    "Easy local transportation",
                    "Comfortable city environment for patients",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Planning Your Dental Visit from Abroad?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We are here to help you plan a comfortable, organized, and
              confident dental tourism experience from consultation to care.
            </p>
            <button
              onClick={scrollToAppointment}
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
                Common questions international patients ask before planning
                dental treatment.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
                      <HelpCircle className="text-white" size={14} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
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
                Start Your Dental Tourism Journey with Confidence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering implants, smile enhancement,
                restorative care, or orthodontic treatment, we can help you plan
                your dental visit with clarity and comfort.
              </p>

              <button
                onClick={scrollToAppointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book a Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
<RelatedTreatments
  title="Popular Treatments for International Patients"
  subtitle="Many international patients travel for advanced, aesthetic, and full-smile rehabilitation procedures depending on their goals and timeline."
  links={[
    {
      title: "Dental Implants",
      href: "/implants",
      description: "A popular option for replacing missing teeth with stable, natural-looking long-term support.",
    },
    {
      title: "Smile Transformation",
      href: "/smile-makeover",
      description: "A personalized approach that may combine multiple cosmetic and restorative procedures.",
    },
    {
      title: "Orthodontic Treatment",
      href: "/orthodontics",
      description: "Braces and aligner-based treatment for smile correction, bite improvement, and long-term alignment.",
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