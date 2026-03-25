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

export default function OrthodonticsPage() {
  const bracesTypes = [
    {
      name: "Metal Braces",
      description: "The most common and cost-effective option",
      image:
        "https:/braces /metal-braces-in-ahmedabad.webp",
      features: [
        "High durability and strength",
        "Most cost-effective option",
        "Effective for complex cases",

        "Customizable with colored bands",
      ],
      duration: "18-24 months",
    },
    {
      name: "Ceramic Braces",
      description: "Less visible alternative to metal braces",
      image:
        "https:/braces /ceramic-braces-in-ahmedabad.webp",
      features: [
        "Tooth-colored brackets blend naturally",
        "Less noticeable than metal",
        "Same effectiveness as metal braces",
        "Stain-resistant materials",
        "Ideal for adults and teens",
      ],
      duration: "18-24 months",
    },
    {
      name: "Self-Ligating Braces",
      description: "Advanced bracket system",
      image:
        "https:/braces /damon-self-ligating-braces-in-ahmedabad.webp",
      features: [
        "Fewer adjustments needed",
        "More comfortable treatment",
        "Easier to keep clean",
        "Reduced treatment time",
        "Less friction and pressure",
      ],
      duration: "15-20 months",
    },
    {
      name: "Clear Aligners",
      description: "Virtually invisible orthodontic treatment",
      image:
        "https:/braces /invisble-aligners-in-ahmedabad.webp",
      features: [
        "Completely removable",
        "Nearly invisible appearance",
        "No dietary restrictions",
        "Easy to clean and maintain",
        "Comfortable with no metal parts",
      ],
      duration: "8-18 months",
    },
    {
      name: "Lingual Braces",
      description: "Hidden braces behind your teeth",
      image:
        "https:/braces /lingual-orthodontics-materials-procedures.webp",
      features: [
        "Completely hidden from view",
        "Custom-made for your teeth",
        "Effective for all cases",
        "No visible brackets or wires",
        "Ideal for professionals",
      ],
      duration: "18-24 months",
    },
  ];

  const problemsWeTreat = [
    "Crowded teeth",
    "Spacing between teeth",
    "Protruding front teeth",
    "Deep bite and open bite",
    "Crossbite and underbite",
    "Irregular smile alignment",
    "Impacted teeth",
    "Jaw relation discrepancies",
  ];

  const faqs = [
    {
      q: "What is the best age to start orthodontic treatment?",
      a: "Orthodontic treatment can be done in children, teens, and adults. The right age depends on the problem being treated. The first orthodontic consultation should be done at the age of 7 years.",
    },
    {
      q: "Are braces painful?",
      a: "Braces can cause mild soreness for a few days after placement or adjustments, but this is temporary and usually manageable.",
    },
    {
      q: "How long does orthodontic treatment usually take?",
      a: "Treatment duration varies depending on the complexity of the case, but most treatments range from 8 to 24 months.",
    },
    {
      q: "Which is better: braces or clear aligners?",
      a: "Both are effective. The best option depends on your bite, tooth movement needs, lifestyle, and aesthetic preferences.",
    },
    {
      q: "Can adults get braces?",
      a: "Yes. Adult orthodontic treatment is very common and can be highly effective with braces or clear aligners.",
    },
  ];

  const trackOrthoClick = (
    action:
      | "book-orthodontic-consultation"
      | "explore-treatment-options"
      | "smile-simulation"
      | "schedule-evaluation"
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
        content_name: `Orthodontics Page - ${action}`,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackOrthoClick("book-orthodontic-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOptions = () => {
    trackOrthoClick("explore-treatment-options");
    const element = document.getElementById("ortho-options");
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
          Orthodontist in Ahmedabad | Braces & Clear Aligners | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Get expert orthodontic treatment in Ahmedabad at Sumukh Dental Clinic. Explore braces, ceramic braces, self-ligating braces, lingual braces, and clear aligners with Dr. Dipen Thakker."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/orthodontics"
        />
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Sparkles size={16} />
                  Orthodontic Treatment
                </div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
          Straighten Your Teeth.
          <span className="text-blue-500"> Transform Your Smile.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
          Get expert orthodontic treatment at Sumukh Dental Clinic, tailored to your
          smile, bite, and lifestyle. From braces to{" "}
          <Link
            to="/aligners"
            className="text-blue-600 font-semibold hover:underline"
          >
            clear aligners
          </Link>
          , we help create healthier, more confident smiles with advanced
          planning and patient-focused care.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
          <button
            onClick={scrollToAppointment}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
          >
            Book Orthodontic Consultation
            <ArrowRight size={18} />
          </button>

          <button
            onClick={scrollToOptions}
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
          >
            Explore Treatment Options
          </button>
        </div>

        <div className="mt-4">
          <a
            href="https://providerbio-apac.invisalign.com/sv/1374312#start"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOrthoClick("smile-simulation")}
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

        <div className="grid grid-cols-3 gap-4 mt-8 md:mt-10">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-blue-900">
              1000+
            </p>
            <p className="text-sm text-slate-500">Happy Patients</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-blue-900">
              10+
            </p>
            <p className="text-sm text-slate-500">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-blue-900">
              Hi-tech
            </p>
            <p className="text-sm text-slate-500">Advanced Scanners</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="absolute -top-5 -left-5 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(37,99,235,0.25)]">
                <img
                  src="/braces /braces-smile-closeup-ahmedabad-orthodontist.webp"
                  alt="Orthodontic braces and smile alignment treatment in ahmedabad"
                  loading="lazy"
                  className="w-full h-72 sm:h-80 md:h-[480px] object-cover rounded-[1.5rem]"
          />
                </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Clinical trust strip */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Advanced Diagnosis",
                "Personalized Planning",
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

        {/* Why choose orthodontics */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Why Choose Orthodontic Treatment?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Orthodontic treatment is not only about appearance. It also improves
                bite balance, oral hygiene, function, and long-term dental health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Smile className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Improved Smile</h3>
                <p className="text-slate-600 leading-relaxed">
                  Better alignment creates a more balanced, attractive, and confident smile.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Better Oral Health</h3>
                <p className="text-slate-600 leading-relaxed">
                  Straight teeth are easier to clean, helping reduce plaque buildup and gum problems.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Improved Bite</h3>
                <p className="text-slate-600 leading-relaxed">
                  Correcting bite issues can improve chewing comfort, speech, and jaw function.
                </p>
              </div>

              <div className={premiumCard}>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Long-Term Benefits</h3>
                <p className="text-slate-600 leading-relaxed">
                  Early correction can help prevent future wear, misalignment, and complex dental issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Why Patients Choose Sumukh Dental Clinic
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  We combine modern orthodontic principles, careful diagnosis, and
                  patient-focused care to create treatment plans that are effective,
                  comfortable, and suited to your lifestyle.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Precision Planning
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every orthodontic case begins with careful analysis of teeth, bite, smile, and facial balance.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 border border-blue-100 p-6 shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="text-blue-600" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Modern Orthodontics
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Braces and aligner options are selected using updated treatment principles and technology.
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
                    We focus on keeping treatment understandable, comfortable, and well-guided from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems treated */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
                  Problems We Commonly Treat
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                  Orthodontic treatment can help address a wide variety of alignment
                  and bite-related concerns in both children and adults.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {problemsWeTreat.map((item, index) => (
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
                  Not sure which treatment is right for you?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We evaluate your teeth, bite, jaw relation, smile line, and facial
                  profile before recommending the most suitable orthodontic option.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Detailed clinical evaluation",
                    "Personalized treatment planning",
                    "Braces and aligner options explained clearly",
                    "Transparent treatment duration guidance",
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
                    trackOrthoClick("schedule-evaluation");
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

        {/* Treatment options */}
        <section id="ortho-options" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Orthodontic Treatment Options
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We offer a range of orthodontic solutions designed to match your
                clinical needs, lifestyle, and aesthetic preferences. In selected cases, <Link to="/veneers" className="text-blue-600 font-semibold hover:underline">veneers</Link> may be considered after alignment to refine shape and symmetry.
              </p>
            </div>

            <div className="space-y-8">
              {bracesTypes.map((type, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <img
                      src={type.image}
                      alt={`${type.name} orthodontic treatment option`}
                      className="rounded-2xl shadow-lg w-full h-72 object-cover"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-3xl font-bold text-blue-900 mb-3">
                      {type.name}
                    </h3>
                    <p className="text-lg text-slate-600 mb-4">
                      {type.description}
                    </p>

                    <div className="bg-blue-50 rounded-2xl p-4 mb-5 border border-blue-100">
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Average Treatment Duration
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {type.duration}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="bg-blue-500 rounded-full p-1 shadow-sm">
                            <Check className="text-white" size={14} />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to Start Your Smile Journey?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to find out which orthodontic treatment is
              the right fit for your smile, goals, and lifestyle.
            </p>

            <button
              onClick={scrollToAppointment}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Book Your Consultation
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
                Common questions patients ask before starting orthodontic treatment.
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

        {/* Final CTA */}
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)] text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Let’s Plan Your Best Smile
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you are considering braces, ceramic braces, self-ligating
                braces, lingual braces, or <Link to="/aligners" className="text-blue-600 font-semibold hover:underline">clear aligners</Link>, we can help you choose
                the most suitable option.
              </p>

              <button
                onClick={scrollToAppointment}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Book an Orthodontic Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
<RelatedTreatments
  links={[
    {
      title: "Clear Aligners",
      href: "/aligners",
      description: "A discreet orthodontic treatment option for patients who want nearly invisible smile correction.",
    },
    {
      title: "Smile Transformation",
      href: "/smile-makeover",
      description: "May combine orthodontics with aesthetic treatments for a more complete smile enhancement.",
    },
    {
      title: "Veneers",
      href: "/veneers",
      description: "In selected cases, veneers may be considered after alignment to refine shape and symmetry.",
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