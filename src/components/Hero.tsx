import {
  Smile,
  Award,
  Users,
  Sparkles,
  Wand2,
  ShieldCheck,
  Stethoscope,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function Hero() {
  const trackHeroClick = (action: "appointment" | "smile-simulation") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name:
          action === "appointment"
            ? "Hero Book Appointment Click"
            : "Hero Smile Simulation Click",
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackHeroClick("appointment");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="scroll-mt-32 md:scroll-mt-32 pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm text-sm sm:text-base leading-snug">
              <Sparkles size={16} className="shrink-0" />
              <span>Orthodontic & Comprehensive Dental Care in Ahmedabad</span>
            </div>

            <h1 className="text-[2.2rem] sm:text-4xl md:text-6xl font-bold text-blue-900 mb-5 md:mb-6 leading-[1.08] tracking-tight">
              Your Journey to a
              <br className="sm:hidden" />
              <span className="text-blue-500 whitespace-nowrap">
                {" "}
                Perfect Smile!
              </span>
            </h1>

            <p className="text-[1rem] sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-8 sm:leading-relaxed max-w-[36rem]">
              Looking for the best dental care in Ahmedabad? At Sumukh Dental
              Clinic, we provide advanced {" "}
              <Link
                to="/orthodontics"
                className="text-blue-600 font-semibold hover:underline"
              > braces
                 </Link>,
              {" "}
              <Link
                to="/aligners"
                className="text-blue-600 font-semibold hover:underline"
              >
                clear aligners and Invisalign treatment
              </Link>
              ,{" "}
              <Link
                to="/implants"
                className="text-blue-600 font-semibold hover:underline"
              >
                dental implants
              </Link>
              , and smile-focused dental care. Led by Dr. Dipen Thakker, our
              Ahmedabad clinic combines personalized treatment planning, modern
              technology, and compassionate care to create healthier, more
              confident smiles.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-5">
              <button
                onClick={scrollToAppointment}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-full shadow-md hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-base"
              >
                Book Appointment
              </button>

              <a
                href="https://providerbio-apac.invisalign.com/sv/1374312#start"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackHeroClick("smile-simulation")}
                aria-label="Try smile simulation"
                title="Try Your Smile Simulation"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white/70 px-6 py-3.5 font-bold text-blue-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-white/40 to-cyan-100/60 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-2">
                  <Wand2 size={18} className="text-blue-600 shrink-0" />
                  <span className="whitespace-nowrap">
                    Try Your Smile Simulation
                  </span>
                </span>
              </a>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
                <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center mb-3">
                  <Stethoscope className="text-blue-600" size={20} />
                </div>
                <h3 className="text-base font-bold text-blue-900 mb-1">
                  Personalized Care
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  Thoughtful treatment planning for every smile.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
                <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="text-blue-600" size={20} />
                </div>
                <h3 className="text-base font-bold text-blue-900 mb-1">
                  Modern Setup
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  Comfortable, hygienic, and technology-driven care.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
                <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center mb-3">
                  <Smile className="text-blue-600" size={20} />
                </div>
                <h3 className="text-base font-bold text-blue-900 mb-1">
                  Smile Focused
                </h3>
                <p className="text-sm text-slate-600 leading-6">
                  Designed for aesthetics, health, and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="absolute -top-5 -left-5 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(37,99,235,0.25)]">
                <img
                  src="/orthodontist-ahmedabad-braces-treatment.webp"
                  alt="Dr Dipen Thakker orthodontist in Ahmedabad providing braces and Invisalign treatment"
                  loading="lazy"
                  className="w-full h-72 sm:h-80 md:h-[540px] object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20">
          <div className="text-center rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              10+
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Years Experience
            </p>
          </div>

          <div className="text-center rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              5000+
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Happy Patients
            </p>
          </div>

          <div className="text-center rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smile className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              100%
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Satisfaction Rate
            </p>
          </div>

          <div className="text-center rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              Hi-tech
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Advanced instruments and scanners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}