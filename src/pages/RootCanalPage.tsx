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

export default function RootCanalPage() {
  const treatmentTypes = [
    {
      title: "Single Visit Root Canal",
      description:
        "Modern techniques allow many root canal treatments to be completed in a single visit with comfort and efficiency.",
      icon: Zap,
      features: [
        "Efficient treatment planning",
        "Advanced rotary instruments",
        "Fewer appointments",
        "Comfort-focused procedure",
        "Quicker return to function",
      ],
    },
    {
      title: "Multi-Visit Root Canal",
      description:
        "Complex infections may require treatment over multiple visits for careful disinfection and healing.",
      icon: Shield,
      features: [
        "Better control in complex cases",
        "Medicaments between visits",
        "Improved healing support",
        "Careful monitoring",
        "Strong long-term prognosis",
      ],
    },
    {
      title: "Re-Root Canal Treatment",
      description:
        "Retreatment of previously treated teeth when infection, discomfort, or failure occurs over time.",
      icon: Activity,
      features: [
        "Removal of old root filling",
        "Cleaning persistent infection",
        "Improved sealing",
        "Preservation of natural tooth",
        "Restoration of function",
      ],
    },
  ];

  const benefits = [
    "Preserves the natural tooth",
    "Relieves dental pain",
    "Stops spread of infection",
    "Restores chewing function",
    "Protects surrounding tissues",
    "Helps avoid extraction",
  ];

  const process = [
    {
      step: "1",
      title: "Diagnosis & X-ray",
      description:
        "A detailed clinical examination and digital X-ray help identify infection within the pulp and surrounding tissues.",
    },
    {
      step: "2",
      title: "Cleaning the Canal",
      description:
        "The infected pulp is removed and the root canals are carefully cleaned, shaped, and prepared.",
    },
    {
      step: "3",
      title: "Disinfection & Sealing",
      description:
        "The canals are disinfected thoroughly and sealed with a biocompatible filling material.",
    },
    {
      step: "4",
      title: "Final Restoration",
      description:
        "A filling or crown restores the tooth’s strength, function, and long-term protection.",
    },
  ];

  const faqs = [
    {
      q: "Is root canal treatment painful?",
      a: "Modern root canal treatment is performed under local anesthesia and is typically no more uncomfortable than getting a routine filling.",
    },
    {
      q: "Why is a root canal needed?",
      a: "A root canal is needed when the pulp inside the tooth becomes infected or inflamed due to deep decay, cracks, trauma, or repeated dental procedures.",
    },
    {
      q: "How long does the procedure take?",
      a: "Depending on the condition of the tooth and the number of canals, treatment may take one or more visits.",
    },
    {
      q: "Will I need a crown after root canal treatment?",
      a: "In many cases, yes. A crown is often recommended to strengthen and protect the treated tooth, especially for back teeth.",
    },
    {
      q: "Can a root canal treated tooth last many years?",
      a: "Yes. With proper restoration, oral hygiene, and regular dental checkups, a treated tooth can function for many years.",
    },
  ];

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
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToappointment = () => {
    trackRootCanalClick("book-consultation");
    const element = document.getElementById("appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    trackRootCanalClick("explore-options");
    const element = document.getElementById("root-canal-options");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <title>
          Root Canal Treatment in Ahmedabad | Save Your Tooth | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Get root canal treatment in Ahmedabad at Sumukh Dental Clinic. Relieve tooth pain, remove infection, and save your natural tooth with modern, patient-focused care."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/root-canal"
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
                  Root Canal Treatment
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Save Your Natural Tooth.
                  <span className="text-blue-500"> Relieve Pain.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Root canal treatment removes infection from
                  inside the tooth, relieves pain, and helps preserve your
                  natural tooth for long-term function and comfort.
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
                    alt="Root canal treatment and tooth pain relief in Ahmedabad"
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
                "Accurate Diagnosis",
                "Personalized Planning",
                "Modern Endodontics",
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

        {/* WHAT IS ROOT CANAL + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Is Root Canal Treatment?
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Root canal treatment is performed when the pulp inside a tooth
                  becomes infected or inflamed. The infected tissue is removed,
                  the canals are cleaned and disinfected, and the tooth is sealed
                  to protect it from further infection.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  The aim is to preserve the natural tooth, eliminate infection,
                  and restore healthy function without the need for extraction. After treatment, a <Link to="/crowns" className="text-blue-600 font-semibold hover:underline">dental crown</Link> may be recommended to protect the tooth.
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
                  We combine modern endodontic principles, careful diagnosis, and
                  patient-focused treatment to deliver comfortable and effective care.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Accurate Diagnosis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Careful examination and imaging help identify infection and plan treatment precisely.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Modern Techniques
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Updated instruments and methods support precision, cleanliness, and better patient comfort.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HeartHandshake className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Comfort-Focused Care
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We focus on keeping treatment calm, clear, and patient-friendly from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ROOT CANAL */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Root Canal Treatment Matters
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Root canal treatment helps preserve your natural tooth, control infection,
                relieve discomfort, and restore healthy daily function.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Pain Relief</h3>
                <p className="text-slate-600 leading-relaxed">
                  Root canal treatment removes the source of infection and helps relieve tooth pain.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tooth Preservation</h3>
                <p className="text-slate-600 leading-relaxed">
                  It allows you to keep your natural tooth rather than removing it unnecessarily.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Infection Control</h3>
                <p className="text-slate-600 leading-relaxed">
                  Proper cleaning and sealing help stop infection from spreading to surrounding tissues.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Long-Term Function</h3>
                <p className="text-slate-600 leading-relaxed">
                  With proper restoration and care, the treated tooth can serve well for many years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENT OPTIONS */}
        <section id="root-canal-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Root Canal Treatment Options
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The exact approach depends on the severity of infection, the condition of
                the tooth, and whether the tooth has been treated before.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {treatmentTypes.map((type, index) => (
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
                Root Canal Treatment Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Treatment is planned carefully to remove infection, protect the tooth,
                and restore long-term function and comfort.
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

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions patients ask before starting root canal treatment.
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
                Save Your Tooth with Confidence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                If you are experiencing tooth pain, sensitivity, or infection, timely
                root canal treatment can help preserve your natural tooth and restore comfort.
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
      title: "Crowns & Bridges",
      href: "/crowns",
      description: "A tooth may often need a crown after root canal treatment for strength and long-term protection.",
    },
    {
      title: "Preventive & Restorative Dentistry",
      href: "/preventive-restorative",
      description: "Early restorative care may help prevent deep decay and reduce the need for complex treatment.",
    },
    {
      title: "Dental Implants",
      href: "/implants",
      description: "If a tooth cannot be preserved, implants may be considered as a replacement option.",
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