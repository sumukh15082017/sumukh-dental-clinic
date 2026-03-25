import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["treatments", "Treatments"],
    ["/dental-tourism", "Dental Tourism"],
    ["testimonials", "Testimonials"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact Us"],
  ] as const;

  const mobileNavItems = [
    ["home", "Home"],
    ["about", "About"],
    ["/dental-tourism", "Dental Tourism"],
    ["testimonials", "Testimonials"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact Us"],
  ] as const;

  const treatments = [
    ["orthodontics", "Braces", "/orthodontics"],
    ["aligners", "Clear Aligners", "/aligners"],
    ["implants", "Dental Implants", "/implants"],
    ["rootcanal", "Root Canal Treatment", "/root-canal"],
    ["crowns", "Crowns & Bridges", "/crowns"],
    ["veneers", "Veneers", "/veneers"],
    ["smile", "Smile Transformation", "/smile-makeover"],
    ["preventive", "Preventive & Restorative", "/preventive-restorative"],
  ] as const;

  const trackNavClick = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/Eg70C06e8YscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: `Navigation Click - ${label}`,
        clinic_name: "Sumukh Dental Clinic",
      });
    }
  };

  const scrollToElement = (id: string) => {
    const targetId = id === "contact" ? "footer" : id;
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const yOffset = targetId === "footer" ? -20 : -110;
    const y =
      targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  const goToHomeSection = (id: string) => {
    const targetId = id === "contact" ? "footer" : id;

    if (location.pathname === "/") {
      scrollToElement(id);
      return;
    }

    sessionStorage.setItem("scrollTarget", targetId);
    navigate("/");
    setIsOpen(false);
  };

  useEffect(() => {
    const pendingTarget = sessionStorage.getItem("scrollTarget");

    if (location.pathname === "/" && pendingTarget) {
      sessionStorage.removeItem("scrollTarget");

      setTimeout(() => {
        const element = document.getElementById(pendingTarget);
        if (element) {
          const yOffset = pendingTarget === "footer" ? -20 : -110;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSection(
            pendingTarget === "footer" ? "contact" : pendingTarget
          );
        }
      }, 150);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (location.pathname !== "/") return;

      const sectionIds = ["home", "about", "testimonials", "footer"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(
            sectionIds[i] === "footer" ? "contact" : sectionIds[i]
          );
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const desktopLinkClass = (isActive: boolean) =>
    `font-medium relative group transition-all duration-300 ${
      scrolled ? "text-base py-1.5 px-1" : "text-base py-2 px-1"
    } ${isActive ? "text-blue-600" : "text-blue-900"}`;

  const treatmentActive =
    location.pathname === "/orthodontics" ||
    location.pathname === "/aligners" ||
    location.pathname === "/implants" ||
    location.pathname === "/root-canal" ||
    location.pathname === "/crowns" ||
    location.pathname === "/veneers" ||
    location.pathname === "/smile-makeover" ||
    location.pathname === "/preventive-restorative";

  const tourismActive = location.pathname === "/dental-tourism";
  const galleryActive = location.pathname === "/gallery";
  const contactPageActive = location.pathname === "/contact";

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-7xl border transition-all duration-300 ${
        scrolled
          ? "top-2 md:top-3 rounded-2xl bg-white/75 backdrop-blur-xl border-white/30 shadow-[0_10px_35px_rgba(0,0,0,0.12)]"
          : "top-3 md:top-5 rounded-3xl bg-white/85 backdrop-blur-md border-gray-200 shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
      }`}
      aria-label="Main navigation"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled ? "px-4 md:px-5" : "px-5 md:px-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-start md:justify-between pr-14 sm:pr-16 md:pr-0 transition-all duration-300 ${
            scrolled
              ? "min-h-[74px] md:min-h-[82px]"
              : "min-h-[90px] md:min-h-[100px]"
          }`}
        >
          <div className="flex flex-row items-center text-left gap-2 md:gap-4">
            <img
              src="/best-dental-clinic-in-ahmedabad.webp"
              alt="Sumukh Dental Clinic Ahmedabad logo"
              loading="lazy"
              className={`w-auto object-contain transition-all duration-500 ease-out ${
                scrolled ? "h-10 sm:h-11 md:h-12" : "h-11 sm:h-12 md:h-16"
              }`}
            />

            <div className="flex flex-col items-start max-w-[200px] sm:max-w-[220px] md:max-w-none gap-[2px]">
              <h1
                className={`font-bold text-blue-900 leading-tight tracking-wide text-left transition-all duration-500 ease-out ${
                  scrolled
                    ? "text-[15px] sm:text-[15px] md:text-xl"
                    : "text-[15px] sm:text-[15px] md:text-[22px]"
                }`}
              >
                SUMUKH DENTAL CLINIC
              </h1>

              <p
                className={`font-medium text-blue-500 uppercase leading-tight whitespace-nowrap text-left transition-all duration-500 ease-out ${
                  scrolled
                    ? "text-[9px] sm:text-[9px] md:text-xs tracking-[0.09em]"
                    : "text-[9px] sm:text-[9px] md:text-[13px] tracking-[0.12em]"
                }`}
              >
                Orthodontic and Implant Centre
              </p>
            </div>
          </div>

          {/* Desktop menu */}
          <div
            className={`hidden md:flex items-center transition-all duration-300 ${
              scrolled ? "gap-7 ml-10" : "gap-9 ml-11"
            }`}
          >
            {navItems.map(([id, label]) => {
              const isActive = activeSection === id && location.pathname === "/";

              if (id === "treatments") {
                return (
                  <div
                    key={id}
                    className="relative"
                    onMouseEnter={() => setTreatmentsOpen(true)}
                    onMouseLeave={() => setTreatmentsOpen(false)}
                  >
                    <button
                      className={`font-medium relative group inline-flex items-center gap-1 transition-all duration-300 ${
                        scrolled ? "text-base py-1.5 px-1" : "text-base py-2 px-1"
                      } ${treatmentActive ? "text-blue-600" : "text-blue-900"}`}
                      aria-label="Open treatment pages"
                      title="Treatments"
                      type="button"
                    >
                      {label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          treatmentsOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                          treatmentsOpen || treatmentActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </button>

                    <div className="absolute top-full left-0 h-4 w-full"></div>

                    {treatmentsOpen && (
                      <div className="absolute top-full left-1/2 z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.16)] p-2">
                        {treatments.map(([key, name, link]) => {
                          const active = location.pathname === link;

                          return (
                            <Link
                              key={key}
                              to={link}
                              onClick={() => {
                                trackNavClick(name);
                              }}
                              className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                active
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                              aria-label={`Go to ${name}`}
                              title={name}
                            >
                              <span>{name}</span>
                              <span
                                className={`text-xs transition-transform duration-200 ${
                                  active
                                    ? "text-blue-500"
                                    : "text-gray-300 group-hover:translate-x-1 group-hover:text-blue-500"
                                }`}
                              >
                                →
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              if (id === "/dental-tourism") {
                return (
                  <Link
                    key={id}
                    to="/dental-tourism"
                    onClick={() => {
                      trackNavClick(label);
                      setIsOpen(false);
                    }}
                    className={desktopLinkClass(tourismActive)}
                    aria-label="Go to Dental Tourism page"
                    title="Dental Tourism"
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                        tourismActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              }

              if (id === "/gallery") {
                return (
                  <Link
                    key={id}
                    to="/gallery"
                    onClick={() => {
                      trackNavClick(label);
                      setIsOpen(false);
                    }}
                    className={desktopLinkClass(galleryActive)}
                    aria-label="Go to Gallery page"
                    title="Gallery"
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                        galleryActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              }

              if (id === "/contact") {
                return (
                  <Link
                    key={id}
                    to="/contact"
                    onClick={() => {
                      trackNavClick(label);
                      setIsOpen(false);
                    }}
                    className={desktopLinkClass(contactPageActive)}
                    aria-label="Go to Contact Us page"
                    title="Contact Us"
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                        contactPageActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              }

              return (
                <button
                  key={id}
                  onClick={() => {
                    trackNavClick(label);
                    goToHomeSection(id);
                  }}
                  className={desktopLinkClass(isActive)}
                  aria-label={`Go to ${label}`}
                  title={label}
                  type="button"
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Mobile button */}
          <div className="md:hidden absolute right-2 sm:right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "h-10 w-10 bg-blue-50/90 text-blue-900 border-blue-100 shadow-sm"
                  : "h-11 w-11 bg-blue-50/90 text-blue-900 border-blue-100 shadow-sm"
              }`}
              aria-label="Toggle menu"
              title="Menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className={`md:hidden border-t backdrop-blur-xl rounded-b-[1.4rem] transition-all duration-300 ${
            scrolled
              ? "bg-white/95 border-gray-200/80"
              : "bg-white/96 border-gray-200"
          }`}
        >
          <div className="max-h-[75vh] overflow-y-auto overscroll-contain px-4 py-4">
            <div className="space-y-2">
              {mobileNavItems.map(([id, label]) => {
                const isActive = activeSection === id && location.pathname === "/";

                if (id === "/dental-tourism") {
                  return (
                    <Link
                      key={id}
                      to="/dental-tourism"
                      onClick={() => {
                        trackNavClick(label);
                        setIsOpen(false);
                      }}
                      className={`block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-200 ${
                        tourismActive
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-blue-900 hover:bg-blue-50/80"
                      }`}
                      aria-label="Go to Dental Tourism page"
                      title="Dental Tourism"
                    >
                      {label}
                    </Link>
                  );
                }

                if (id === "/gallery") {
                  return (
                    <Link
                      key={id}
                      to="/gallery"
                      onClick={() => {
                        trackNavClick(label);
                        setIsOpen(false);
                      }}
                      className={`block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-200 ${
                        galleryActive
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-blue-900 hover:bg-blue-50/80"
                      }`}
                      aria-label="Go to Gallery page"
                      title="Gallery"
                    >
                      {label}
                    </Link>
                  );
                }

                if (id === "/contact") {
                  return (
                    <Link
                      key={id}
                      to="/contact"
                      onClick={() => {
                        trackNavClick(label);
                        setIsOpen(false);
                      }}
                      className={`block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-200 ${
                        contactPageActive
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-blue-900 hover:bg-blue-50/80"
                      }`}
                      aria-label="Go to Contact Us page"
                      title="Contact Us"
                    >
                      {label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={id}
                    onClick={() => {
                      trackNavClick(label);
                      goToHomeSection(id);
                    }}
                    className={`block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm"
                        : "text-blue-900 hover:bg-blue-50/80"
                    }`}
                    aria-label={`Go to ${label}`}
                    title={label}
                    type="button"
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Treatments - same style as other items */}
            <div className="mt-3">
              <div
                className={`block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium ${
                  treatmentActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-blue-900"
                }`}
              >
                Treatments
              </div>

              <div className="mt-2 ml-4 space-y-2 border-l-2 border-blue-100 pl-3">
                {treatments.map(([key, name, link]) => {
                  const active = location.pathname === link;

                  return (
                    <Link
                      key={key}
                      to={link}
                      onClick={() => {
                        trackNavClick(name);
                        setIsOpen(false);
                      }}
                      className={`block rounded-xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-200 ${
                        active
                          ? "bg-blue-50 text-blue-600 shadow-sm"
                          : "text-blue-900 hover:bg-blue-50/80"
                      }`}
                      aria-label={`Go to ${name}`}
                      title={name}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}