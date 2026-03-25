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
        clinic_name: "Sumukh Dental Clinic",
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
        <title>
          Dental Veneers in Ahmedabad | Porcelain & Composite Veneers | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Get dental veneers in Ahmedabad at Sumukh Dental Clinic. Improve tooth color, shape, symmetry, and smile aesthetics with porcelain veneers, composite veneers, and custom smile design."
        />
        <link rel="canonical" href="https://sumukhdentalclinic.com/veneers" />
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
                  Veneers
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Refine Your Teeth.
                  <span className="text-blue-500"> Elevate Your Smile.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Dental veneers are a highly aesthetic treatment
                  designed to enhance the color, shape, symmetry, and overall
                  appearance of your teeth. They help create a brighter, more
                  balanced, and confident smile.
                </p>

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
                  a more refined, brighter, and balanced smile with natural-looking results.In selected cases, <Link to="/aligners" className="text-blue-600 font-semibold hover:underline">clear aligners</Link> may be recommended before veneers to improve alignment.
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
                <h3 className="text-xl font-bold text-blue-900 mb-3">Smile Enhancement</h3>
                <p className="text-slate-600 leading-relaxed">
                  Veneers can brighten and refine the smile for a more attractive and balanced appearance.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Sparkles className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Natural Aesthetics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Veneers are designed to look natural while enhancing tooth color, shape, and symmetry.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Conservative Improvement</h3>
                <p className="text-slate-600 leading-relaxed">
                  In selected cases, veneers can provide noticeable aesthetic improvement with conservative planning.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Long-Term Value</h3>
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
      description: "Veneers are often part of a broader smile makeover designed around facial balance and aesthetics.",
    },
    {
      title: "Orthodontic Treatment",
      href: "/orthodontics",
      description: "Braces may be recommended when alignment or bite correction is needed before cosmetic treatment.",
    },
    {
      title: "Clear Aligners",
      href: "/aligners",
      description: "Aligners may help improve tooth position before veneers in selected aesthetic cases.",
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