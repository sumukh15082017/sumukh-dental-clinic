import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHomeSection = (id: string) => {
    const targetId = id === "contact" ? "footer" : id;

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (!element) return;

      const yOffset = targetId === "footer" ? -20 : -110;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }

    sessionStorage.setItem("scrollTarget", targetId);
    navigate("/");
  };

  const trackFooterClick = (
    action: "map" | "call" | "email" | "facebook" | "instagram" | "twitter"
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        contact_method: action,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  return (
    <footer
      id="footer"
      className="bg-blue-900 text-white pt-10 pb-12 md:pt-14 md:pb-16 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/best-dental-clinic-in-ahmedabad.webp"
                alt="Sumukh Dental Clinic Ahmedabad"
                loading="lazy"
                className="h-12 w-12 rounded-full bg-white object-contain p-1"
              />
              <div>
                <h3 className="text-2xl font-bold leading-tight">
                  Sumukh Dental Clinic
                </h3>
                <p className="text-blue-200 text-1g">
                  Orthodontic & Implant Centre
                </p>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Trusted dental clinic in Ahmedabad for orthodontics, braces, clear
              aligners, dental implants, smile makeovers, and comprehensive
              dental care led by Dr. Dipen Thakker, MDS Orthodontics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-2 md:pl-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">

              <li>
                <button
                  onClick={() => goToHomeSection("home")}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToHomeSection("about")}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>

              {/* Treatments */}
              <li><Link to="/orthodontics" className="text-blue-100 hover:text-white">Braces</Link></li>
              <li><Link to="/aligners" className="text-blue-100 hover:text-white">Clear Aligners</Link></li>
              <li><Link to="/implants" className="text-blue-100 hover:text-white">Dental Implants</Link></li>
              <li><Link to="/root-canal" className="text-blue-100 hover:text-white">Root Canal Treatment</Link></li>
              <li><Link to="/crowns" className="text-blue-100 hover:text-white">Crowns & Bridges</Link></li>
              <li><Link to="/veneers" className="text-blue-100 hover:text-white">Veneers</Link></li>
              <li><Link to="/smile-makeover" className="text-blue-100 hover:text-white">Smile Makeover</Link></li>
              <li><Link to="/preventive-restorative" className="text-blue-100 hover:text-white">
      Preventive & Restorative Dentistry</Link>
    
  </li>

              <li>
                <Link to="/dental-tourism" className="text-blue-100 hover:text-white">
                  Dental Tourism
                </Link>
              </li>

              <li>
                <button
                  onClick={() => goToHomeSection("testimonials")}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>

              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">

              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <a
                  href="https://www.google.com/maps?q=Sumukh+Dental+Clinic+Science+City+Road+Ahmedabad+380060"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackFooterClick("map")}
                  className="text-blue-100 hover:underline"
                >
                  GF-20, Sudarshan Gold,
                  <br />Opp. Hyundai Service Centre,
                  <br />Science City Road,
                  <br />Ahmedabad 380060
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="tel:+918799527524"
                  onClick={() => trackFooterClick("call")}
                  className="text-blue-100 hover:text-white"
                >
                  +91 87995 27524
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:sumukh15082017@gmail.com"
                  onClick={() => trackFooterClick("email")}
                  className="text-blue-100 hover:text-white"
                >
                  sumukh15082017@gmail.com
                </a>
              </li>

            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">Mon - Sat</p>
                <p className="text-blue-100 text-sm">9:00 AM - 1:30 PM</p>
                <p className="text-blue-100 text-sm">4:30 PM - 8:30 PM</p>
              </li>
              <li>
                <p className="font-semibold">Sunday</p>
                <p className="text-blue-100 text-sm">By Appointment Only</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-blue-100 text-sm">
              © 2024 Sumukh Dental Clinic. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-blue-100">
              <span className="text-sm">Follow us</span>

              <a
                href="https://www.facebook.com/profile.php?id=61572468867668"
                target="_blank"
                onClick={() => trackFooterClick("facebook")}
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/sumukhdentalclinic/"
                target="_blank"
                onClick={() => trackFooterClick("instagram")}
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                onClick={() => trackFooterClick("twitter")}
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
              >
                <Twitter size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}