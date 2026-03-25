import { useEffect, useState } from "react";
import { X, Phone, MapPin } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function FloatingContact() {
  const [showChat, setShowChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bounce, setBounce] = useState(false);

  const phone = "918799527524";
  const message = encodeURIComponent(
    "Hello, I would like to book an appointment at Sumukh Dental Clinic."
  );

  const clinicLatitude = 23.0708467;
  const clinicLongitude = 72.5140505;

  const trackConversion = (method: "whatsapp" | "call" | "map") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        contact_method: method,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const openDirections = () => {
    trackConversion("map");

    if (!navigator.geolocation) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${clinicLatitude},${clinicLongitude}`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${clinicLatitude},${clinicLongitude}&travelmode=driving`;

        window.open(directionsUrl, "_blank", "noopener,noreferrer");
      },
      () => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${clinicLatitude},${clinicLongitude}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowChat(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowChat(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setBounce(true);

      const timeout = setTimeout(() => {
        setBounce(false);
      }, 900);

      return () => clearTimeout(timeout);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes floatingBounce {
          0%, 100% { transform: translateY(0); }
          15% { transform: translateY(-10px); }
          30% { transform: translateY(0); }
          45% { transform: translateY(-6px); }
          60% { transform: translateY(0); }
        }
      `}</style>

      <div className="fixed bottom-12 right-3 sm:bottom-12 sm:right-6 flex flex-col items-end gap-3 z-50">
        {showChat && !isMobile && (
          <div className="w-[280px] sm:w-[320px] max-w-[calc(100vw-1.25rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="bg-[#0b6b5c] px-3 py-3 sm:px-4 sm:py-4 text-white">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <img
                    src="/best-dental-clinic-in-ahmedabad.webp"
                    alt="Sumukh Dental Clinic Ahmedabad"
                    className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white object-contain p-1 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold leading-tight truncate">
                      Sumukh Dental Clinic
                    </p>
                    <p className="text-xs sm:text-sm text-white/90">online</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowChat(false)}
                  className="rounded-full p-1 text-white/90 transition hover:bg-white/10 hover:text-white shrink-0"
                  aria-label="Close WhatsApp chat"
                  title="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="bg-[#ece5dd] px-3 py-4 sm:px-4 sm:py-5">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm">
                <p className="mb-1 text-xs sm:text-sm font-semibold text-gray-700">
                  Sumukh Dental Clinic
                </p>
                <p className="text-xs sm:text-sm text-gray-900">Hi 👋</p>
                <p className="text-xs sm:text-sm text-gray-900">
                  How can I help you?
                </p>
              </div>
            </div>

            <div className="bg-white px-3 py-3 sm:px-4 sm:py-4">
              <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp")}
                aria-label="Start WhatsApp chat with Sumukh Dental Clinic"
                title="Start WhatsApp chat"
                className="block w-full rounded-full bg-green-500 px-5 py-2.5 sm:px-6 sm:py-3 text-center text-sm sm:text-base font-semibold text-white transition hover:bg-green-600"
              >
                Start Chat
              </a>
            </div>
          </div>
        )}

        {isMobile ? (
          <>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
              style={bounce ? { animation: "floatingBounce 0.9s ease-in-out" } : {}}
              aria-label="Open WhatsApp chat with Sumukh Dental Clinic"
              title="WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-6 w-6"
                loading="lazy"
              />
            </a>

            <a
              href="tel:+918799527524"
              onClick={() => trackConversion("call")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              style={
                bounce
                  ? { animation: "floatingBounce 0.9s ease-in-out", animationDelay: "0.15s" }
                  : {}
              }
              aria-label="Call Sumukh Dental Clinic"
              title="Call Clinic"
            >
              <Phone size={20} />
            </a>

            <button
              onClick={openDirections}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-xl transition hover:scale-105 hover:bg-red-600"
              style={
                bounce
                  ? { animation: "floatingBounce 0.9s ease-in-out", animationDelay: "0.3s" }
                  : {}
              }
              aria-label="Get directions to Sumukh Dental Clinic"
              title="Get Directions"
            >
              <MapPin size={20} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setShowChat((prev) => !prev)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
              aria-label="Toggle WhatsApp chat"
              title="Open WhatsApp chat"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-7 w-7"
                loading="lazy"
              />
            </button>

            <a
              href="tel:+918799527524"
              onClick={() => trackConversion("call")}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
              aria-label="Call Sumukh Dental Clinic"
              title="Call Clinic"
            >
              <Phone size={16} />
            </a>

            <button
              onClick={openDirections}
              className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-xl"
              aria-label="Get directions to Sumukh Dental Clinic"
              title="Get Directions"
            >
              <MapPin size={16} />
            </button>
          </>
        )}
      </div>
    </>
  );
}