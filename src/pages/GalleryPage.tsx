import { useMemo, useState } from "react";
import {
  Camera,
  Smile,
  Sparkles,
  ArrowRight,
  Shield,
  SlidersHorizontal,
  Building2,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
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

type GalleryCase = {
  title: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  points: string[];
};

type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  icon: any;
  cases: GalleryCase[];
};

type ClinicTourItem = {
  title: string;
  description: string;
  image: string;
};

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-blue-50">
        {/* After image stays fixed */}
        <img
          src={afterImage}
          alt={`${title} after treatment result`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before image stays fixed and is only clipped, not stretched */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`${title} before treatment`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute inset-y-0 z-20"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative h-full w-[3px] bg-white shadow-[0_0_0_1px_rgba(37,99,235,0.15)]">
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-blue-600 shadow-xl backdrop-blur">
              <SlidersHorizontal size={18} />
            </div>
          </div>
        </div>

        <div className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-blue-900 shadow-sm backdrop-blur">
          Before
        </div>

        <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-blue-900 shadow-sm backdrop-blur">
          After
        </div>
      </div>

      {/* Slider controls below image */}
      <div className="px-5 pb-5 pt-4">
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="z-30 h-2 w-full cursor-ew-resize appearance-none rounded-full bg-blue-100 accent-blue-600"
          aria-label={`Before after slider for ${title}`}
        />
        <p className="mt-3 text-center text-sm font-medium text-slate-500">
          Slide this button to see the changes
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const galleryCategories: GalleryCategory[] = [
    {
      id: "orthodontics",
      title: "Braces Cases",
      description:
        "Smile correction cases corrected with metal braces, ceramic braces or self-ligating braces.",
      icon: Smile,
      cases: [
        {
          title: "Crowding Case",
          treatment: "Damon Self Ligating Clear Braces",
          duration: "18 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-crowding-case-treated-with-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-crowding-case-treated-with-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Deep bite Case",
          treatment: "Damon Self Ligating Metal braces",
          duration: "18 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-deep-bite-case-treated-with-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-deep-bite-case-treated-with-braces.webp",
          points: [
            "Reduced crowding",
            "Improved arch form",
            "Cleaner smile aesthetics",
          ],
        },
        {
          title: "Open Bite/Diastema",
          treatment: "Damon Self Ligating Metal Braces",
          duration: "20 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-an-open-bite-and-midline-diastema-case-treated-with-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-an-open-bite-and-midline-diastema-case-treated-with-braces.webp",
          points: [
            "Improved front alignment",
            "Balanced smile appearance",
            "More confident smile line",
          ],
        },
        {
          title: "Proclination Case",
          treatment: "Metal braces",
          duration: "24 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-proclination-case-treated-with-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-proclination-case-treated-with-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Mandibular Advancement Case",
          treatment: "Twin Block Appliance Followed By Metal Braces",
          duration: "28 Months",
          beforeImage: "/Gallery/before-treatment-photo-of-a-mandibular-advancement-case-treated-with-twin-block-and-braces.webp",
          afterImage: "/Gallery/after-treatment-photo-of-a-mandibular-advancement-case-treated-with-twin-block-and-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Class III Reverse Bite (Underbite)",
          treatment: "Frankel Appliance Followed By Damon Braces",
          duration: "17 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-class-III-Underbite-case-treated-with-Frankel-appliance-and-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-class-III-Underbite-case-treated-with-Frankel-appliance-and-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Impacted Teeth",
          treatment: "Damon Self Ligating Braces + Surgical Exposure",
          duration: "30 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-an-impacted-maxillary-incisor-treated-with-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-an-impacted-maxillary-incisor-treated-with-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Cross Bite Case",
          treatment: "Quad Helix + Damon Self Ligating Braces",
          duration: "16 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-cross-bite-case-treated-with-quad-helix-and-braces.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-cross-bite-case-treated-with-quad-helix-and-braces.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
        {
          title: "Rapid Maxillary Expansion Case",
          treatment: "Hyrax RME Appliance",
          duration: "3 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-cross-bite-case-treated-with-hyrax-rapid-maxillary-expander.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-cross-bite-case-treated-with-hyrax-rapid-maxillary-expander.webp",
          points: [
            "Improved alignment",
            "Better smile balance",
            "Enhanced bite correction",
          ],
        },
      ],
    },
    {
      id: "Invisalign/Clear Aligners",
      title: "Aligner Cases",
      description:
        "Before-and-after implant cases showing replacement of missing teeth with improved aesthetics and function.",
      icon: Shield,
      cases: [
        {
          title: "Palatally Erupted Canines(Cross Bite)",
          treatment: "Invisalign Aligners",
          duration: "18 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-palatally-placed-canines-case-treated-with-invisalign-aligners.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-palatally-placed-canines-case-treated-with-invisalign-aligners.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Crowding And Mandibular Advancement",
          treatment: "Invisalign ALigners With MA",
          duration: "20 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-crowding-case-treated-with-mandibular-advancement-invisalign.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-crowding-case-treated-with-mandibular-advancement-invisalign.webp",
          points: [
            "Restored missing teeth",
            "Improved function",
            "Balanced smile restoration",
          ],
        },
        {
          title: "Crowding and Canine Cross Bite",
          treatment: "Invisalign Aligners",
          duration: "15 Months",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-crowding-and-canine-crossbite-treated-with-invisalign.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-crowding-and-canine-crossbite-treated-with-invisalign.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Maxillary Arch Distalisation",
          treatment: "Invisaling Aligners",
          duration: "Ongoing",
          beforeImage:
            "/Gallery/before-treatment-photo-of-a-distalisation-case-treated-with-invisalign-aligners.webp",
          afterImage:
            "/Gallery/after-treatment-photo-of-a-distalisation-case-treated-with-invisalign-aligners.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
      ],
    },
    {
      id: "implants",
      title: "Dental Implant Cases",
      description:
        "Before-and-after implant cases showing replacement of missing teeth with improved aesthetics and function.",
      icon: Shield,
      cases: [
        {
          title: "Upper Missing Teeth Case",
          treatment: "Dental Implants",
          duration: "Varies by case",
           beforeImage:
            "/Gallery/Implants/before-xray-of-dental-implant-in-upper-teeth.webp",
          afterImage:
            "/Gallery/Implants/after-xray-of-dental-implant-in-upper-teeth.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Lower Missing Teeth Case",
          treatment: "Implants",
          duration: "Varies By Case",
          beforeImage:
            "/Gallery/Implants/before-xray-of-dental-implant-in-lower-teeth.webp",
          afterImage:
            "/Gallery/Implants/after-xray-of-dental-implant-in-lower-teeth.webp",
          points: [
            "Restored missing teeth",
            "Improved function",
            "Balanced smile restoration",
          ],
        },
        {
          title: "Indiret Sinus Lift Case",
          treatment: "Dental Implants + Indirect Sinus Lift With Densah Technique",
          duration: "Varies by case",
          beforeImage:
            "/Gallery/Implants/before-xray-of-indirect-sinus-lift-with-densah-and-dental-implant-in-upper-teeth.webp",
          afterImage:
            "/Gallery/Implants/after-xray-of-indirect-sinus-lift-with-densah-and-dental-implant-in-upper-teeth.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Direct Sinus Lift Case",
          treatment: "Dental Implants + Direct Sinus Lift And Bone Grafting",
          duration: "Varies by case",
          beforeImage:
            "/Gallery/Implants/before-xray-of-direct-sinus-lift-and-dental-implant-in-upper-teeth.webp",
          afterImage:
            "/Gallery/Implants/after-xray-of-direct-sinus-lift-and-dental-implant-in-upper-teeth.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
      ],
    },
    {
      id: "smile-makeover",
      title: "Smile Transformation Cases",
      description:
        "Aesthetic smile enhancement with a focus on harmony, symmetry, and confidence.",
      icon: Sparkles,
      cases: [
        {
          title: "Smile Makeover Case",
          treatment: "Veneers On Upper And Lower Front Teeth",
          duration: "10 Days",
          beforeImage:
            "/Gallery/veneers/before-photo-of-a-smile-transformation-case-treated-with-veneers.webp",
          afterImage:
            "/Gallery/veneers/after-photo-of-a-smile-transformation-case-treated-with-veneers.webp",
          points: [
            "Brighter smile appearance",
            "Improved aesthetics",
            "More confident smile line",
          ],
        },
      ],
    },
    {
      id: "Root canal treatment",
      title: "Root Canal Cases",
      description:
        "Before-and-after implant cases showing replacement of missing teeth with improved aesthetics and function.",
      icon: Shield,
      cases: [
        {
          title: "Single Seating Root Canal Treatment",
          treatment: "Root Canal",
          duration: "2 Hours",
          beforeImage:
            "/Gallery/root canal/before-photo-of-a-single-seating-root-canal.webp",
          afterImage:
            "/Gallery/root canal/after-photo-of-a-single-seating-root-canal.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Re-Root Canal Treatment",
          treatment: "Root canal Treatment Of A Previously Treated Tooth",
          duration: "Phased treatment",
          beforeImage:
            "/Gallery/root canal/before-photo-of-a-re-root-canal-treatment.webp",
          afterImage:
            "/Gallery/root canal/after-photo-of-a-re-root-canal-treatment.webp",
          points: [
            "Restored missing teeth",
            "Improved function",
            "Balanced smile restoration",
          ],
        },
        {
          title: "Root Canal Treatment Of Upper Teeth",
          treatment: "Root Canal Treatment",
          duration: "Varies by case",
          beforeImage:
            "/Gallery/root canal/before-photo-of-a-root-canal-of-upper-teeth.webp",
          afterImage:
            "/Gallery/root canal/after-photo-of-a-root-canal-of-upper-teeth.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
        {
          title: "Root Canal Treatment Of Lower teeth",
          treatment: "Root Canal Treatment",
          duration: "Varies by case",
          beforeImage:
            "/Gallery/root canal/before-photo-of-a-root-canal-of-lower-teeth.webp",
          afterImage:
            "/Gallery/root canal/after-photo-of-a-root-canal-of-lower-teeth.webp",
          points: [
            "Missing tooth replacement",
            "Natural-looking restoration",
            "Improved smile confidence",
          ],
        },
      ],
    },
  ];

  const clinicTourItems: ClinicTourItem[] = [
    {
      title: "Reception Area",
      description:
        "A clean, welcoming reception area designed for a comfortable patient experience from the moment you arrive.",
      image:
        "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Operatory",
      description:
        "Modern dental operatory equipped for precise diagnosis, patient comfort, and advanced treatment procedures.",
      image:
        "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Consultation Space",
      description:
        "A dedicated consultation area where treatment plans, scans, and smile goals can be discussed clearly.",
      image:
        "https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Sterilization & Hygiene",
      description:
        "An organized clinical hygiene setup that reflects the clinic’s focus on safety, sterilization, and cleanliness.",
      image:
        "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);

  const currentCategory = useMemo(
    () =>
      galleryCategories.find((category) => category.id === activeCategory) ??
      galleryCategories[0],
    [activeCategory]
  );

  const trackGalleryClick = (
    action: "view-cases" | "book-consultation" | "view-category" | "clinic-tour"
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: `Gallery Page - ${action}`,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToAppointment = () => {
    trackGalleryClick("book-consultation");
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCases = () => {
    trackGalleryClick("view-cases");
    const element = document.getElementById("gallery-cases");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToClinicTour = () => {
    trackGalleryClick("clinic-tour");
    const element = document.getElementById("clinic-tour");
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
          Smile Gallery in Ahmedabad | Before and After Dental Cases | Sumukh Dental Clinic
        </title>
        <meta
          name="description"
          content="Explore the smile gallery of Sumukh Dental Clinic in Ahmedabad with before-and-after orthodontic, implant, and smile makeover cases, plus a clinic tour of reception, operatory, and treatment areas."
        />
        <link rel="canonical" href="https://sumukhdentalclinic.com/gallery" />
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                  <Camera size={16} />
                  Smile Gallery
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 leading-[1.02] mb-6">
                  Real Smile Journeys.
                  <span className="text-blue-500"> Visible Transformations.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Explore premium before-and-after dental cases
                  that highlight orthodontic correction, implant
                  rehabilitation, smile makeover results, root canal treatments,veneers and a closer look at
                  our clinic environment through an engaging visual experience.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                  <button
                    onClick={scrollToCases}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-white font-bold shadow-md transition hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    View Cases
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={scrollToClinicTour}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Clinic Tour
                  </button>

                  <button
                    onClick={scrollToAppointment}
                    className="inline-flex items-center justify-center rounded-full border-2 border-blue-500 px-7 py-3.5 text-blue-600 font-semibold transition hover:bg-blue-50"
                  >
                    Book Consultation
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Premium
                    </p>
                    <p className="text-sm text-slate-500">Case Display</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Interactive
                    </p>
                    <p className="text-sm text-slate-500">Before / After</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      Clinic
                    </p>
                    <p className="text-sm text-slate-500">Tour Experience</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6 md:p-8 shadow-[0_24px_55px_rgba(37,99,235,0.22)]">
                  <img
                    src="/before-and-after-dental-treatment-photographs.webp"
                    alt="Smile gallery and before after dental treatment results in Ahmedabad"
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLINIC TOUR */}
        <section
          id="clinic-tour"
          className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                <Building2 size={16} />
                Clinic Tour
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Take a Look Around Our Clinic
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Showcase the different spaces in your clinic such as the
                reception, operatory, consultation room, and sterilization area
                to help patients feel more familiar and comfortable before
                visiting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {clinicTourItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] overflow-hidden border border-blue-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-blue-50">
                    <img
                      src={item.image}
                      alt={`${item.title} at Sumukh Dental Clinic Ahmedabad`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-blue-600" size={18} />
                      <h3 className="text-xl font-bold text-blue-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY BLOCKS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Gallery Categories
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Each category can hold multiple before-and-after treatment cases,
                making it easy to expand your gallery over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryCategories.map((category, index) => (
                <div key={index} className={premiumCard}>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <category.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <p className="text-sm font-semibold text-blue-600 mb-4">
                    {category.cases.length} case
                    {category.cases.length > 1 ? "s" : ""}
                  </p>
                  <button
                    onClick={() => {
                      trackGalleryClick("view-category");
                      setActiveCategory(category.id);
                      scrollToCases();
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-white font-semibold shadow-md transition hover:bg-blue-700"
                  >
                    View Category
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <section id="gallery-cases" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Before & After Cases
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Browse multiple treatment categories and showcase real clinical
                smile transformations from orthodontics, implants, and cosmetic
                dentistry.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {galleryCategories.map((category) => {
                const Icon = category.icon;
                const active = category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      trackGalleryClick("view-category");
                      setActiveCategory(category.id);
                    }}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-semibold transition-all ${
                      active
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "bg-white text-blue-900 border border-blue-100 hover:bg-blue-50"
                    }`}
                  >
                    <Icon size={18} />
                    {category.title}
                  </button>
                );
              })}
            </div>

            <div className="mb-10 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-10 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                    {currentCategory.title}
                  </h3>
                  <p className="text-slate-600 max-w-3xl leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-5 py-4 border border-blue-100 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">
                    Cases in this category
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {currentCategory.cases.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {currentCategory.cases.map((item, index) => (
                <div key={index} className={premiumCard}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.treatment} <br />
                        • {item.duration}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold text-sm">
                      <Camera size={14} />
                      Interactive Comparison
                    </div>
                  </div>

                  <div className="mb-6">
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      title={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Inspired by These Smile Journeys?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to understand which treatment options may
              be suitable for your smile goals and dental concerns.
            </p>
            <button
              onClick={scrollToAppointment}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </main>

      <RelatedTreatments
        title="Explore These Treatments"
        subtitle="Many of the results shown in the gallery are connected to these treatment categories and smile-planning options."
        links={[
          {
            title: "Orthodontic Treatment",
            href: "/orthodontics",
            description:
              "Explore braces and orthodontic treatment options for crowding, spacing, and bite correction.",
          },
          {
            title: "Dental Implants",
            href: "/implants",
            description:
              "See how missing teeth can be replaced with natural-looking implant-supported restorations.",
          },
          {
            title: "Smile Transformation",
            href: "/smile-makeover",
            description:
              "Learn how multiple treatments may be combined for a more complete aesthetic smile enhancement.",
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