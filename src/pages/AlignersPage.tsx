import {
  Check,
  ArrowRight,
  Sparkles,
  Smile,
  ShieldCheck,
  Clock,
  ScanLine,
  Microscope,
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

export default function AlignersPage() {
  const benefits = [
    "Virtually invisible treatment",
    "Removable for eating and brushing",
    "More comfortable than braces",
    "Fewer dental visits required",
    "Digital treatment planning",
    "Predictable tooth movement",
  ];

  const process = [
    {
      step: "1",
      title: "Digital Scan",
      description:
        "A precise 3D scan of your teeth is taken to create a digital model of your smile.",
    },
    {
      step: "2",
      title: "Treatment Planning",
      description:
        "Advanced software simulates tooth movement and designs your customized aligner sequence.",
    },
    {
      step: "3",
      title: "Custom Aligners",
      description:
        "A series of clear aligners are fabricated to gradually move your teeth into alignment.",
    },
    {
      step: "4",
      title: "Smile Transformation",
      description:
        "Each aligner gently shifts teeth until your final planned smile is achieved.",
    },
  ];

  const candidates = [
    "Crowded or crooked teeth",
    "Spacing between teeth",
    "Mild to moderate bite issues",
    "Adults wanting discreet treatment",
    "Teens preferring removable appliances",
    "Patients seeking aesthetic orthodontics",
  ];

  const faqs = [
    {
      q: "How long does aligner treatment take?",
      a: "Treatment time varies depending on the complexity of the case but typically ranges from 6 to 18 months.",
    },
    {
      q: "Are clear aligners noticeable?",
      a: "Clear aligners are made of transparent medical-grade plastic, making them almost invisible during daily wear.",
    },
    {
      q: "How many hours per day should I wear aligners?",
      a: "Aligners should be worn for 20–22 hours per day, removing them only for eating, drinking, brushing, and flossing.",
    },
    {
      q: "Are aligners painful?",
      a: "Patients may feel mild pressure when starting a new aligner, but this typically subsides within a few days.",
    },
    {
      q: "Can aligners treat complex cases?",
      a: "Many cases can be treated with aligners, but complex bite issues may still require braces or hybrid treatments.",
    },
  ];

  const scrollToappointment = () => {
    const element = document.getElementById("appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOptions = () => {
    const element = document.getElementById("aligner-options");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const premiumCard =
    "rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]";

  return (
    <>
      <Helmet>
        <title>
          Clear Aligners in Ahmedabad | Invisible Braces & Smile Correction | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Looking for clear aligners in Ahmedabad? Sumukh Dental Clinic offers modern invisible braces and digital smile planning with Dr. Dipen Thakker for discreet smile correction."
        />
        <link rel="canonical" href="https://sumukhdentalclinic.com/aligners" />
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
                  Clear Aligners
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Straighten Teeth
                  <span className="text-blue-500"> Invisibly.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Clear aligners provide a modern orthodontic solution
                  for straightening teeth comfortably and discreetly. Using a
                  sequence of transparent trays, teeth are gradually guided into
                  their ideal position with a more aesthetic alternative to
                  conventional <Link to="/orthodontics" className="text-blue-600 font-semibold hover:underline">braces or conventional orthodontic treatment</Link>.
                </p>

                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <button
                      onClick={scrollToappointment}
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
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white/70 px-6 py-3 font-bold text-blue-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-white/40 to-cyan-100/60 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="relative flex items-center gap-2">
                        <Wand2 size={18} className="text-blue-600" />
                        Try Your Smile Simulation
                      </span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Invisible
                    </p>
                    <p className="text-sm text-slate-500">Aesthetic Treatment</p>
                  </div>

                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Removable
                    </p>
                    <p className="text-sm text-slate-500">Eat Comfortably</p>
                  </div>

                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Digital
                    </p>
                    <p className="text-sm text-slate-500">3D Planning</p>
                  </div>
                </div>
              </div>

              {/*<div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(37,99,235,0.25)]">
                <img
                  src="/braces /braces-smile-closeup-ahmedabad-orthodontist.webp"
                  alt="Orthodontic braces and smile alignment treatment in ahmedabad"
                  loading="lazy"
                  className="w-full h-72 sm:h-80 md:h-[480px] object-cover rounded-[1.5rem]"
      className="w-full rounded-2xl object-cover shadow-lg    />*/}
              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-6 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/braces /invisble-aligners-in-ahmedabad.webp"
                    alt="Clear aligners treatment in Ahmedabad"
                    loading="lazy"
                  className="w-full h-72 sm:h-80 md:h-[480px] object-cover rounded-[1.5rem]"
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
                "Digital Smile Planning",
                "Personalized Treatment",
                "Modern Orthodontics",
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

        {/* WHAT ARE ALIGNERS + BENEFITS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={premiumCard}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  What Are Clear Aligners?
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Clear aligners are custom-made transparent trays that fit over
                  your teeth and gradually move them into the correct position.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Unlike traditional <Link to="/orthodontics" className="text-blue-600 font-semibold hover:underline">braces</Link>, aligners are removable and almost
                  invisible, allowing you to maintain your lifestyle while
                  improving your smile with a discreet orthodontic option in Ahmedabad.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl font-bold text-blue-900 mb-5">
                  Benefits of Aligners
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
                  Why Choose Us for Clear Aligners?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine advanced orthodontic planning with modern digital
                  technology to deliver precise, predictable, and aesthetic results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ScanLine className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                   In-house 3D Itero Scanner
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Advanced 3D scanning and digital simulation allow you to preview
                    your expected smile even before treatment begins.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Smile className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Aesthetic Treatment
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Clear aligners are virtually invisible, allowing you to straighten
                    your teeth discreetly without affecting your appearance.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Expert Orthodontic Care
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Treatment planning is performed carefully to ensure precise tooth
                    movement and balanced smile correction.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Efficient Treatment
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Carefully planned aligner sequences can often reduce treatment time
                    compared to traditional orthodontic approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="aligner-options"
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Clear Aligner Treatment Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every aligner case is planned digitally and monitored carefully to
                guide your smile transformation with comfort and precision.
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

        {/* WHO CAN GET ALIGNERS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  Who Can Benefit from Aligners?
                </h2>

                <p className="text-lg text-slate-600 mb-6 max-w-2xl">
                  Clear aligners are suitable for many orthodontic conditions and
                  are especially popular among adults and teens seeking aesthetic treatment.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {candidates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-blue-100 shadow-sm"
                    >
                      <Check className="text-blue-600" size={18} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Microscope className="text-blue-600" size={24} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Digital Smile Planning
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Modern orthodontics uses advanced digital planning to simulate
                  your treatment outcome even before therapy begins.
                </p>

                <ul className="space-y-4">
                  {[
                    "3D scan-based treatment design",
                    "Improved treatment predictability",
                    "Clear visual explanation of your case",
                    "Customized aligner sequence for your smile",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 shadow-sm">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

        {/* FINAL CTA */}
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Start Your Clear Aligner Journey
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                If you want a more discreet, comfortable, and modern orthodontic option,
                clear aligners may be the right choice for your smile.
              </p>

              <button
                onClick={scrollToappointment}
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
      description: "Explore braces and other orthodontic solutions for cases that may need broader correction.",
    },
    {
      title: "Smile Transformation",
      href: "/smile-makeover",
      description: "Clear aligners may be part of a larger smile enhancement plan depending on your goals.",
    },
    {
      title: "Veneers",
      href: "/veneers",
      description: "After alignment, veneers may be considered in selected cases for final aesthetic refinement.",
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