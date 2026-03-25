import {
  Check,
  Shield,
  Sparkles,
  ArrowRight,
  Smile,
  Clock,
  Microscope,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Droplets,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

export default function PreventiveRestorativePage() {
  const treatmentTypes = [
    {
      title: "Preventive Dental Care",
      description:
        "Regular dental care focused on preventing cavities, gum disease, enamel wear, and other oral health problems before they become more serious.",
      icon: ShieldCheck,
      features: [
        "Routine dental examinations",
        "Professional scaling and cleaning",
        "Early cavity detection",
        "Oral hygiene guidance",
        "Preventive care for long-term dental health",
      ],
    },
    {
      title: "Tooth-Colored Fillings",
      description:
        "Restorative treatment used to repair decayed, chipped, or worn teeth with natural-looking tooth-colored materials.",
      icon: Sparkles,
      features: [
        "Repairs decayed teeth",
        "Matches natural tooth shade",
        "Preserves tooth structure",
        "Restores comfort and function",
        "Aesthetic and durable solution",
      ],
    },
    {
      title: "Restorative Dental Care",
      description:
        "Treatment designed to restore damaged teeth, improve function, and maintain oral health through conservative and effective dental procedures.",
      icon: Shield,
      features: [
        "Restores damaged teeth",
        "Improves chewing comfort",
        "Supports long-term dental health",
        "Protects surrounding teeth",
        "Helps maintain smile aesthetics",
      ],
    },
  ];

  const benefits = [
    "Prevents cavities and gum problems",
    "Supports long-term oral health",
    "Detects dental issues early",
    "Restores damaged teeth effectively",
    "Improves daily comfort and function",
    "Maintains a healthier, more confident smile",
  ];

  const process = [
    {
      step: "1",
      title: "Dental Examination",
      description:
        "We carefully assess your teeth, gums, oral hygiene, and any areas of decay, wear, or damage to recommend the most suitable preventive or restorative care.",
    },
    {
      step: "2",
      title: "Personalized Treatment Planning",
      description:
        "Based on your dental condition, we create a treatment plan that may include cleaning, fillings, hygiene care, or other restorative procedures.",
    },
    {
      step: "3",
      title: "Gentle Treatment",
      description:
        "The required preventive or restorative treatment is carried out carefully to restore oral health, comfort, and function.",
    },
    {
      step: "4",
      title: "Maintenance & Follow-Up",
      description:
        "We guide you on home care, preventive habits, and regular dental visits to maintain healthy teeth and gums.",
    },
  ];

  const faqs = [
    {
      q: "What is preventive dentistry?",
      a: "Preventive dentistry focuses on maintaining oral health and preventing dental problems such as cavities, gum disease, and enamel damage through regular check-ups, cleanings, and oral care guidance.",
    },
    {
      q: "What is restorative dentistry?",
      a: "Restorative dentistry involves repairing or restoring damaged, decayed, or worn teeth to improve function, comfort, and appearance.",
    },
    {
      q: "How often should I get a dental cleaning?",
      a: "For most patients, professional cleaning and routine dental examination every 6 months is recommended, although this may vary depending on your oral health needs.",
    },
    {
      q: "Are tooth-colored fillings safe and durable?",
      a: "Yes. Tooth-colored fillings are widely used, aesthetically pleasing, and suitable for restoring many small to moderate cavities and damaged areas.",
    },
    {
      q: "Why is early treatment important?",
      a: "Early treatment helps prevent minor issues from becoming larger and more expensive problems. It also helps preserve natural tooth structure and oral health.",
    },
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    const element = document.getElementById("preventive-restorative-options");
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
          Preventive and Restorative Dentistry in Ahmedabad | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Preventive and restorative dentistry in Ahmedabad at Sumukh Dental Clinic. Get dental check-ups, professional cleaning, tooth-colored fillings, and restorative care to maintain healthy teeth and gums."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/preventive-restorative"
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
                  <Stethoscope size={16} />
                  Preventive & Restorative Dentistry
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Protect Teeth Early.
                  <span className="text-blue-500"> Restore Them Beautifully.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Preventive and restorative dentistry helps keep
                  your teeth and gums healthy, detect problems early, and
                  restore damaged teeth with comfortable, conservative, and
                  natural-looking treatment.
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
                    Explore Treatment Options
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Early
                    </p>
                    <p className="text-sm text-slate-500">Problem Detection</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Gentle
                    </p>
                    <p className="text-sm text-slate-500">Dental Care</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Natural
                    </p>
                    <p className="text-sm text-slate-500">Restoration</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/tooth-coloured-dental-restorations-in-ahmedabad.webp"
                    alt="Preventive and restorative dentistry treatment in Ahmedabad"
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
                "Early Diagnosis",
                "Conservative Dental Care",
                "Tooth-Colored Restorations",
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

        {/* WHAT IS PREVENTIVE / BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Is Preventive & Restorative Dentistry?
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Preventive dentistry focuses on keeping your teeth and gums
                  healthy through routine examinations, scaling, hygiene care,
                  and early diagnosis. Restorative dentistry helps repair teeth
                  affected by decay, minor damage, or wear.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Together, these treatments help preserve natural teeth,
                  improve oral function, reduce future dental complications, and
                  support long-term smile health.
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
                  We focus on prevention, early diagnosis, conservative
                  treatment, and comfortable restorative care to help protect
                  your natural teeth and maintain healthy smiles.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Early Detection
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Regular dental assessment helps detect decay, gum issues,
                    and other problems before they become more advanced.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Droplets className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Gentle Preventive Care
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Professional cleaning and preventive treatment help maintain
                    healthier teeth, gums, and overall oral hygiene.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <HeartHandshake className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Comfortable Restoration
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Restorative treatments are planned to preserve tooth
                    structure, improve comfort, and look natural in your smile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Preventive & Restorative Care Matters
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Early care helps protect natural teeth, reduce future dental
                treatment needs, and maintain everyday comfort, function, and smile confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Prevention First
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Routine care helps reduce the risk of cavities, gum disease,
                  and avoidable dental complications.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Better Comfort
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Treating decay or damage early helps maintain comfort while
                  eating, speaking, and smiling.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Syringe className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Conservative Treatment
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Early restorative care often allows smaller, simpler
                  treatments that preserve more natural tooth structure.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Long-Term Oral Health
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Regular maintenance and timely restorations help support
                  healthier teeth and gums for years ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONS */}
        <section
          id="preventive-restorative-options"
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Preventive & Restorative Treatment Options
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Treatment is tailored based on whether the goal is prevention,
                early diagnosis, cleaning, or restoring damaged teeth with
                conservative care.
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
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
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
                Preventive and restorative dentistry is planned carefully to
                maintain oral health, restore comfort, and preserve natural teeth wherever possible.
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Keep Your Teeth Healthy and Strong
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Preventive check-ups and timely restorative care can help you
              maintain healthier teeth, reduce future treatment needs, and
              protect your smile with confidence.
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
                Common questions patients ask about preventive and restorative dentistry.
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
                Prevention Today. Restoration When Needed.
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you need regular maintenance, professional cleaning, or
                restoration for a damaged tooth, early dental care helps protect
                your smile and oral health long-term.
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
  links={[
    {
      title: "Crowns & Bridges",
      href: "/crowns",
      description: "Teeth that are weakened or heavily restored may benefit from crowns or bridge-supported solutions.",
    },
    {
      title: "Root Canal Treatment",
      href: "/root-canal",
      description: "When decay or infection reaches the pulp, root canal treatment may be needed to save the tooth.",
    },
    {
      title: "Dental Implants",
      href: "/implants",
      description: "For teeth that cannot be preserved, implants may offer a stable long-term replacement option.",
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