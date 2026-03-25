import { useEffect, useRef, useState } from "react";
import {
  MessageSquareQuote,
  Star,
  Quote,
  ArrowUpRight,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function Testimonials() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="elfsight"]'
    ) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const trackTestimonialsClick = (
    action: "google-reviews" | "video-testimonial" | "carousel-nav"
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
        content_name: `Testimonials Section - ${action}`,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const featuredTestimonials = [
    {
      name: "Digisha Patel",
      treatment: "Invisalign Treatment",
      review:
        "I completed my Invisalign treatment with Dr. Dipen Thakkar at Sumukh Dental Clinic and I’m very happy with the results. The aligners were comfortable, appointments were hassle-free, and the guidance throughout was clear and professional.",
      rating: 5,
    },
    {
      name: "Isha Surti",
      treatment: "Orthodontic Treatment",
      review:
        "Dr. Dipen is one of the best dentists in town. I have been consulting him for my daughter’s open bite treatment, and every visit has been reassuring. She is always happy to go to him, and I highly recommend his care.",
      rating: 5,
    },
    {
      name: "Birju Patel",
      treatment: "Scaling, Cleaning & Polishing",
      review:
        "I recently visited Dr. Dipen Thakkar for a scaling, cleaning, and polishing session, and I couldn’t be happier with the experience. His smooth hands, gentle touch, and attention to detail made the entire procedure comfortable and pain-free.",
      rating: 5,
    },
    {
      name: "Bhargav Rajani",
      treatment: "Comprehensive Dental Care",
      review:
        "A well-equipped and nicely maintained clinic with a humble and polite approach. Everything was explained clearly before treatment, and the entire experience felt professional, smooth, and reassuring.",
      rating: 5,
    },
  ];

   const videoReviews = [
    {
      title: "Smile Makeover Patient Review Ahmedabad",
      src: "/videos/smile-makeover-patient-review-ahmedabad.mp4",
      poster: "/videos/smile-makeover-patient-review-ahmedabad.jpg",
    },
    {
      title: "Smile Makeover Patient Review Ahmedabad",
      src: "/videos/smile-makeover-patient-review-ahmedabad.mp4",
      poster: "/videos/smile-makeover-patient-review-ahmedabad.jpg",
    },
    {
      title: "Smile Makeover Patient Review Ahmedabad",
      src: "/videos/smile-makeover-patient-review-ahmedabad.mp4",
      poster: "/videos/smile-makeover-patient-review-ahmedabad.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const scrollCards = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.clientWidth * 0.88;

    trackTestimonialsClick("carousel-nav");

    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(
      container.scrollLeft / (container.clientWidth * 0.88)
    );
    setActiveCard(index);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
            <MessageSquareQuote size={16} />
            Patient Reviews
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
            What Our Patients Say
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Real patient experiences, live Google reviews, and video
            testimonials that reflect the care, comfort, and confidence we aim
            to provide at Sumukh Dental Clinic in Ahmedabad.
          </p>

          {/* Google rating badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-3 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-blue-900 font-bold leading-none">
                  5.0 Google Rating
                </p>
                <p className="text-sm text-slate-500">
                  Based on patient reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop premium cards */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {featuredTestimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center">
                  <Quote className="text-blue-600" size={18} />
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                “{item.review}”
              </p>

              <div className="pt-4 border-t border-blue-100">
                <h3 className="text-lg font-bold text-blue-900">{item.name}</h3>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe carousel */}
        <div className="md:hidden mb-12">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => scrollCards("left")}
              className="rounded-full border border-blue-100 bg-white p-2 text-blue-700 shadow-sm"
              aria-label="Previous testimonial"
              title="Previous testimonial"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {featuredTestimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    activeCard === index
                      ? "w-6 bg-blue-600"
                      : "w-2.5 bg-blue-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollCards("right")}
              className="rounded-full border border-blue-100 bg-white p-2 text-blue-700 shadow-sm"
              aria-label="Next testimonial"
              title="Next testimonial"
              type="button"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredTestimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[88%] snap-center rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Quote className="text-blue-600" size={16} />
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                  “{item.review}”
                </p>

                <div className="pt-4 border-t border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900">{item.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {item.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Google Reviews */}
        <div className="rounded-[2rem] border border-blue-100 bg-white p-4 sm:p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Live Google Reviews
              </h3>
              <p className="text-slate-600">
                Updated review feed from Google showing real-time patient
                feedback for our dental clinic in Ahmedabad.
              </p>
            </div>

            <a
              href="https://g.page/r/CdVprNE6t3T0EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTestimonialsClick("google-reviews")}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-blue-700 font-semibold transition hover:bg-blue-100"
              aria-label="View Google reviews for Sumukh Dental Clinic"
              title="View on Google"
            >
              View on Google
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="elfsight-app-01e24206-0405-4905-bcbe-8390c5738333"></div>
        </div>

       {/* Video testimonials */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
              <PlayCircle size={16} />
              Video Testimonials
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Patient Video Testimonials
            </h3>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch what our patients have to say about their treatment, dental
              experience, and smile transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoReviews.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                onPlayTrack={() => trackTestimonialsClick("video-testimonial")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ UPDATED VIDEO CARD
function VideoCard({
  video,
  onPlayTrack,
}: {
  video: { title: string; src: string; poster?: string };
  onPlayTrack: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTrackedRef = useRef(false);

  const handlePlayTrack = () => {
    if (!hasTrackedRef.current) {
      onPlayTrack();
      hasTrackedRef.current = true;
    }
  };

  const handleEnter = async () => {
    try {
      if (!videoRef.current) return;
      videoRef.current.muted = true;
      await videoRef.current.play();
      handlePlayTrack();
    } catch {}
  };

  const handleLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="group bg-white rounded-3xl shadow-[0_16px_40px_rgba(15,23,42,0.08)] overflow-hidden border border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      <div
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <video
          ref={videoRef}
          controls
          playsInline
          muted
          preload="metadata"
          poster={video.poster} // ✅ ADDED
          className="w-full h-[420px] object-cover bg-black"
          aria-label={video.title}
          title={video.title}
          onPlay={handlePlayTrack}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
          Patient Experience
        </div>
      </div>

      <div className="p-5 text-center">
        <p className="font-semibold text-gray-700">{video.title}</p>
      </div>
    </div>
  );
}