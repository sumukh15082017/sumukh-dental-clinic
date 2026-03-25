import { useEffect, useState } from "react";
import { Instagram, Facebook } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function SocialFollow() {
  const [isMobile, setIsMobile] = useState(false);
  const [vibrate, setVibrate] = useState(false);

  const trackSocialClick = (platform: "instagram" | "facebook") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: `Social Follow Click - ${platform}`,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
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
    if (!isMobile) return;

    const interval = setInterval(() => {
      setVibrate(true);

      setTimeout(() => {
        setVibrate(false);
      }, 700);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* MOBILE VERSION */}
      {isMobile ? (
        <div className="fixed bottom-12 left-3 z-50 flex flex-col gap-3">
          <a
            href="https://www.instagram.com/sumukhdentalclinic/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("instagram")}
            aria-label="Follow Sumukh Dental Clinic on Instagram"
            title="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white shadow-lg"
            style={vibrate ? { animation: "vibrate 0.6s ease" } : {}}
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61572468867668"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("facebook")}
            aria-label="Follow Sumukh Dental Clinic on Facebook"
            title="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
            style={vibrate ? { animation: "vibrate 0.6s ease" } : {}}
          >
            <Facebook size={20} />
          </a>
        </div>
      ) : (
        /* DESKTOP VERSION */
        <div className="fixed bottom-12 left-6 z-50">
          <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-2xl px-3 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            {/* Title */}
            <p className="text-sm font-semibold text-blue-900 mb-3 text-center">
              Follow us on
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center">
              <a
                href="https://www.instagram.com/sumukhdentalclinic/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("instagram")}
                aria-label="Follow Sumukh Dental Clinic on Instagram"
                title="Instagram"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-md hover:scale-105 transition"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61572468867668"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("facebook")}
                aria-label="Follow Sumukh Dental Clinic on Facebook"
                title="Facebook"
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:scale-105 transition"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}