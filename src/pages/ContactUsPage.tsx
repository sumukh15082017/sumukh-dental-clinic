import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation2,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

export default function ContactUsPage() {
  const clinicDetails = {
    name: "Sumukh Dental Clinic",
    addressLine1: "GF-20, Sudarshan Gold, Opp. Hyundai Service Centre",
    addressLine2: "Science City-Sola, Ahmedabad, Gujarat 380060",
    phoneDisplay: "+91 87995 27524",
    phoneLink: "+918799527524",
    email: "sumukh15082017@gmail.com",
    timings:
      "Mon - Sat: 9:00 AM - 1:30 PM, 4:30 PM - 8:30 PM | Sunday: By appointment only",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29365.492772787264!2d72.5188608!3d23.071948799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e9cb17a22743d%3A0xf474b73ad1ac69d5!2sSUMUKH%20DENTAL%20CLINIC%20ORTHODONTIC%20AND%20IMPLANT%20CENTRE%2C%20GF-20%2C%20Sudarshan%20Gold%2C%20Divine%20Rd%2C%20opp.%20Hyundai%20service%20centre%2C%20nr.%20Auda%20water%20tank%2C%20Science%20City%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0708467!2d72.5140505!5e0!3m2!1sen!2sin!4v1773923080750!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sumukh+Dental+Clinic+Ahmedabad",
    googleReviewsUrl: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK",
    googleRating: "5.0",
    reviewCount: "100+",
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          {clinicDetails.addressLine1}
          <br />
          {clinicDetails.addressLine2}
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a
          href={`tel:${clinicDetails.phoneLink}`}
          className="hover:text-blue-600 transition-colors"
        >
          {clinicDetails.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href={`mailto:${clinicDetails.email}`}
          className="hover:text-blue-600 transition-colors break-all"
        >
          {clinicDetails.email}
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      content: clinicDetails.timings,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Contact Sumukh Dental Clinic | Orthodontist in Ahmedabad
        </title>
        <meta
          name="description"
          content="Contact Sumukh Dental Clinic in Ahmedabad for clear aligners, braces, dental implants, smile makeovers, and comprehensive dental care. Find clinic location, timings, phone number, and directions."
        />
        <link
          rel="canonical"
          href="https://sumukhdentalclinic.com/contact"
        />
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        <section className="py-14 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold mb-5 shadow-sm">
                <MapPin size={16} />
                Contact & Location
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-4">
                Visit Sumukh Dental Clinic
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Looking for an orthodontist or dental clinic in Ahmedabad? Find
                our clinic location, contact details, timings, and directions
                below.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.02fr_1.18fr] gap-8 items-start">
              {/* Left side */}
              <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-6 sm:p-8 shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                    Find Us Easily
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our clinic is conveniently located in Ahmedabad and easy to
                    access for orthodontic consultations, aligners, braces,
                    implants, and general dental care.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {contactCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-sm"
                      >
                        <div className="bg-blue-100 w-11 h-11 rounded-full flex items-center justify-center mb-4">
                          <Icon className="text-blue-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-blue-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {item.content}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <a
                    href={clinicDetails.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:scale-105"
                  >
                    Get Directions
                    <Navigation2 size={18} />
                  </a>
                </div>
              </div>

              {/* Right side map */}
              <div className="self-start rounded-[2rem] overflow-hidden border border-blue-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] bg-white">
                {/* Desktop / Tablet map */}
                <div className="hidden sm:block relative w-full h-[380px] md:h-[440px]">
                  <iframe
                    src={clinicDetails.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Sumukh Dental Clinic Location Map"
                    allowFullScreen
                  />

                  {/* Google reviews badge - upper right */}
                  <a
                    href={clinicDetails.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 rounded-2xl border border-blue-100 bg-white/95 backdrop-blur px-4 py-3 shadow-lg transition hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <Star
                          className="text-yellow-500 fill-yellow-400"
                          size={18}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-blue-900 leading-none">
                          Google Reviews
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          {clinicDetails.googleRating} ★ · {clinicDetails.reviewCount} reviews
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Map button */}
                  <a
                    href={clinicDetails.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/95 px-5 py-2.5 text-blue-700 font-semibold shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
                  >
                    Open Map in Google Maps
                    <Navigation2 size={16} />
                  </a>
                </div>

                {/* Mobile fallback */}
                <div className="sm:hidden p-6 bg-gradient-to-br from-blue-50 to-white">
                  <div className="rounded-[1.5rem] border border-blue-100 bg-white p-6 text-center shadow-sm">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-blue-600" size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Open Clinic Location
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-5">
                      Tap below to open Sumukh Dental Clinic in Google Maps for
                      navigation and directions.
                    </p>

                    <div className="flex items-center justify-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 fill-yellow-400"
                          size={18}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-slate-600">
                        {clinicDetails.googleRating} Google Rating
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href={clinicDetails.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700"
                      >
                        Open in Google Maps
                        <Navigation2 size={18} />
                      </a>

                      <a
                        href={clinicDetails.googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-blue-700 font-semibold transition hover:bg-blue-100"
                      >
                        View Google Reviews
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-500"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppointmentForm />
      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}