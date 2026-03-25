import {
  Check,
  Crown,
  Shield,
  Sparkles,
  ArrowRight,
  Smile,
  Clock,
  Microscope,
  HeartHandshake,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

export default function CrownsAndBridgesPage() {
  const treatmentTypes = [
    {
      title: "Zirconia/Metal free Crowns",
      description:
        "Highly aesthetic dental restorations designed to closely match the natural colour and translucency of your teeth",
      imageSrc: "/crown and bridge/metal-free-zirconia-crowns-in-ahmedabad.webp",
      imageAlt: "Dental crown treatment in Ahmedabad",
      features: [
        "Perfect choice for aesthetics",
        "Natural look and feel",
        "Strong, durable and biocompatible",
        "A little expensive",
        "Long life",
      ],
    },
    {
      title: "PFM Crowns",
      description:
        "They combine the strength of a metal base with the aesthetics of a tooth-coloured porcelain layer",
      imageSrc: "/crown and bridge/pfm-crowns-in-ahmedabad.webp",
      imageAlt: "Dental bridge treatment in Ahmedabad",
      features: [
        "Better aesthetics than metal crowns",
        "Cost effective",
        "Balanced strength and aesthetics",
        "More prone to chipping/fracture",
      ],
    },
    {
      title: "Metal Crowns",
      description:
        "Highly durable restorations made from strong alloys, ideal for back teeth where strength and longevity are the primary concern",
      imageSrc: "/crown and bridge/metal-crowns-in-ahmedabad.webp",
      imageAlt: "Implant supported crown and bridge treatment in Ahmedabad",
      features: [
        "Excellent strength",
        "Requires minimal tooth preparation",
        "Least expensive",
        "Durable long-term option",
        
      ],
    },
  ];

  const benefits = [
    "Restores damaged teeth",
    "Replaces missing teeth",
    "Improves chewing comfort",
    "Enhances smile appearance",
    "Protects weak teeth",
    "Supports long-term oral function",
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Evaluation",
      description:
        "We examine the tooth or missing space, assess function and aesthetics, and recommend the most suitable restorative option.",
    },
    {
      step: "2",
      title: "Tooth Preparation",
      description:
        "For crowns and bridges, the supporting teeth are carefully prepared to create the ideal fit for the final restoration.",
    },
    {
      step: "3",
      title: "Impression / Digital Scan",
      description:
        "A precise scan or impression is taken so the crown or bridge can be fabricated accurately for fit, bite, and appearance.",
    },
    {
      step: "4",
      title: "Final Placement",
      description:
        "The finished restoration is fitted, adjusted, and bonded in place to restore function, comfort, and smile aesthetics.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between a crown and a bridge?",
      a: "A crown covers and protects a damaged tooth, while a bridge replaces one or more missing teeth by using adjacent teeth or implants for support.",
    },
    {
      q: "How long do crowns and bridges last?",
      a: "With good oral hygiene, regular dental visits, and proper care, crowns and bridges can last for many years.",
    },
    {
      q: "Do crowns and bridges look natural?",
      a: "Yes. Modern restorations are designed to match the shape, contour, and shade of your natural teeth as closely as possible.",
    },
    {
      q: "Will the procedure be painful?",
      a: "Tooth preparation is typically done under local anesthesia, so the procedure is generally comfortable.",
    },
    {
      q: "Can a crown or bridge improve chewing?",
      a: "Yes. These restorations help restore biting efficiency, function, and comfort while also improving appearance.",
    },
  ];

  const scrollToappointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    const element = document.getElementById("crown-bridge-options");
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
          Crowns and Bridges in Ahmedabad | Tooth Restoration | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Looking for crowns and bridges in Ahmedabad? Sumukh Dental Clinic offers dental crowns, bridges, and implant-supported restorations to restore strength, function, and smile aesthetics."
        />
        <link rel="canonical" href="https://sumukhdentalclinic.com/crowns" />
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
                  Crowns & Bridges
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Restore Strength.
                  <span className="text-blue-500"> Rebuild Your Smile.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Crowns and bridges help restore damaged or missing
                  teeth with strength, function, and natural-looking aesthetics.
                  They are designed to protect your smile while improving comfort,
                  chewing efficiency, and long-term oral function.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToappointment}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Book Consultation
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToOptions}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Explore Treatment Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Strong
                    </p>
                    <p className="text-sm text-slate-500">Tooth Protection</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Natural
                    </p>
                    <p className="text-sm text-slate-500">Smile Appearance</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Functional
                    </p>
                    <p className="text-sm text-slate-500">Chewing Comfort</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/crown and bridge/dental-crowns-and-bridge-in-ahmedabad.webp"
                    alt="Dental crowns and bridges treatment in Ahmedabad"
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
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
                "Precise Diagnosis",
                "Personalized Planning",
                "Modern Restorative Care",
                "Patient-Centered Treatment",
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

        {/* WHAT ARE CROWNS & BRIDGES + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Are Crowns & Bridges?
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Crowns are custom restorations placed over damaged or weakened teeth
                  to restore strength, shape, and appearance. Bridges are used to
                  replace missing teeth by spanning the gap and restoring continuity in the smile.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  These restorative treatments help improve function, chewing comfort,
                  aesthetics, and overall dental stability while preserving your oral health.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl font-bold text-blue-900 mb-5">Key Benefits</h3>
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
                  We combine careful restorative planning, aesthetic attention, and
                  patient-focused treatment to create crowns and bridges that are comfortable,
                  functional, and natural-looking.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Precision Evaluation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every case begins with careful clinical assessment of tooth condition, bite, and smile harmony.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Functional Restoration
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Restorations are planned not only for aesthetics, but also for strength, comfort, and bite support.
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
                    We focus on clear guidance, a comfortable treatment experience, and natural-looking final outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CROWNS & BRIDGES */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Crowns & Bridges Matter
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Restorative treatment helps protect weakened teeth, replace missing teeth,
                improve chewing, and restore confidence in your smile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Crown className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tooth Protection</h3>
                <p className="text-slate-600 leading-relaxed">
                  Crowns help protect damaged or weakened teeth and support long-term strength.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Improved Appearance</h3>
                <p className="text-slate-600 leading-relaxed">
                  These restorations are designed to blend naturally with your smile and facial aesthetics.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Better Function</h3>
                <p className="text-slate-600 leading-relaxed">
                  Restoring missing or damaged teeth can improve chewing comfort and daily oral function.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Long-Term Value</h3>
                <p className="text-slate-600 leading-relaxed">
                  With good oral care and regular follow-up, crowns and bridges can serve well for many years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONS */}
        <section id="crown-bridge-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Crowns & Bridges Options
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The most suitable restoration depends on whether the goal is to protect a damaged tooth,
                replace a missing tooth, or restore support across a larger area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {treatmentTypes.map((type, index) => (
                <div key={index} className={premiumCard}>
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={type.imageSrc}
                      alt={type.imageAlt}
                      className="h-40 w-full object-cover rounded-2xl shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{type.title}</h3>
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
                The Treatment Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every crown or bridge treatment is planned carefully to restore strength,
                function, comfort, and a natural-looking smile.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className={premiumCard}>
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Is a Crown or Bridge Right for You?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              If you have a damaged tooth, a heavily filled tooth, or a missing tooth,
              crowns and bridges may help restore both strength and smile appearance.
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
                Common questions patients ask before getting crowns and bridges.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{faq.q}</h3>
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
                Whether you need to protect a damaged tooth or replace a missing one,
                crowns and bridges can help restore strength, comfort, and aesthetics.
              </p>

              <button
                onClick={scrollToappointment}
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
        links={[
          {
            title: "Dental Implants",
            href: "/implants",
            description:
              "Implants may be used when missing teeth need a stable and natural-looking replacement.",
          },
          {
            title: "Root Canal Treatment",
            href: "/root-canal",
            description:
              "A tooth may sometimes need root canal treatment before being restored with a crown.",
          },
          {
            title: "Veneers",
            href: "/veneers",
            description:
              "For front-tooth aesthetic refinement, veneers may be considered in selected smile cases.",
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