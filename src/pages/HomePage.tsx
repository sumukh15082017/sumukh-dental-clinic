import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";
import AppointmentForm from "../components/AppointmentForm";
import RelatedTreatments from "../components/RelatedTreatments";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Best Orthodontist in Ahmedabad | Invisalign, Braces, Implants & Dental Care | Sumukh Dental Clinic
        </title>

        <meta
          name="description"
          content="Visit Sumukh Dental Clinic for expert orthodontic and dental care in Ahmedabad. Dr. Dipen Thakker offers Invisalign, braces, dental implants, smile makeovers, and comprehensive dental treatment."
        />

        <link rel="canonical" href="https://sumukhdentalclinic.com/" />

        <meta
          property="og:title"
          content="Best Orthodontist in Ahmedabad | Sumukh Dental Clinic"
        />
        <meta
          property="og:description"
          content="Expert Invisalign, braces, dental implants, and smile makeovers in Ahmedabad by Dr. Dipen Thakker at Sumukh Dental Clinic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumukhdentalclinic.com/" />
        <meta
          property="og:image"
          content="https://sumukhdentalclinic.com/best-dental-clinic-in-ahmedabad.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Orthodontist in Ahmedabad | Sumukh Dental Clinic"
        />
        <meta
          name="twitter:description"
          content="Expert Invisalign, braces, dental implants, and smile makeovers in Ahmedabad by Dr. Dipen Thakker."
        />
        <meta
          name="twitter:image"
          content="https://sumukhdentalclinic.com/best-dental-clinic-in-ahmedabad.webp"
        />
      </Helmet>

      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}