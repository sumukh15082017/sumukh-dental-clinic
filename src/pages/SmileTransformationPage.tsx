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
        clinic_name: "Sumukh Dental Clinic",
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
        <title>
          Smile Makeover in Ahmedabad | Smile Transformation | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Get a smile makeover in Ahmedabad at Sumukh Dental Clinic. Improve smile symmetry, tooth shape, color, and overall aesthetics with a personalized smile transformation plan."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/smile-makeover"
        />
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5">
                  <Sparkles size={16} />
                  Smile Transformation
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                  Redesign Your Smile.
                  <span className="text-blue-500"> Elevate Your Confidence.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  A smile makeover is a personalized journey designed
                  to improve the beauty, harmony, and confidence of your smile.
                  By combining <Link to="/veneers" className="text-blue-600 font-semibold hover:underline">veneers</Link>,<Link to="/crowns" className="text-blue-600 font-semibold hover:underline"> dental crown</Link>, <Link to="/implants" className="text-blue-600 font-semibold hover:underline">dental implants</Link> and <Link to="/aligners" className="text-blue-600 font-semibold hover:underline">clear aligners</Link>, we create results that look
                  refined, balanced, and natural.
                </p>

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
                  single treatment or a carefully planned combination of procedures such as <Link to="/veneers" className="text-blue-600 font-semibold hover:underline">veneers</Link>,<Link to="/crowns" className="text-blue-600 font-semibold hover:underline"> dental crown</Link>, <Link to="/implants" className="text-blue-600 font-semibold hover:underline">dental implants</Link> and <Link to="/aligners" className="text-blue-600 font-semibold hover:underline">clear aligners</Link>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The goal is not only to enhance teeth, but to create a smile that
                  complements your face, looks natural, and helps you feel more confident.
                </p>
              </div>

              <div className={premiumCard}>
                <h3 className="text-2xl font-bold text-blue-900 mb-5">Key Benefits</h3>
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
                <h3 className="text-xl font-bold text-blue-900 mb-3">Smile Harmony</h3>
                <p className="text-gray-600 leading-relaxed">
                  Improves the balance between teeth, gums, lips, and facial aesthetics.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Camera className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Aesthetic Refinement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhances color, symmetry, proportions, and overall smile appearance.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Customized Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each smile transformation plan is designed specifically for your facial features and goals.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Long-Term Value</h3>
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
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{type.title}</h3>
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
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
                Let’s Create Your Best Smile
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
      description: "Veneers may refine tooth shape, color, and symmetry as part of an aesthetic smile plan.",
    },
    {
      title: "Clear Aligners",
      href: "/aligners",
      description: "Aligners can improve alignment discreetly and may form part of a smile makeover sequence.",
    },
    {
      title: "Dental Implants",
      href: "/implants",
      description: "Implants may be included when missing teeth affect smile balance, function, or overall aesthetics.",
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