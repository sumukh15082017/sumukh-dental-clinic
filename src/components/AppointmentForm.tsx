import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_email: "",
    patient_phone: "",
    preferred_date: "",
    preferred_time: "",
    treatment_type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  const treatmentTypes = [
    "Orthodontic Consultation",
    "Metal Braces",
    "Self Ligating Braces",
    "Clear Aligners",
    "Dental Implants",
    "Teeth Whitening",
    "Veneers",
    "Restorations",
    "Scaling",
    "General Checkup",
    "Wisdom teeth removal",
  ];

  const trackGoogleAdsConversion = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11330826115/0_I5CISZ8IscEIPf-poq",
        value: 1.0,
        currency: "INR",
      });
    }
  };

  const trackMetaLead = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Appointment Form Submission",
        content_category: "Dental Appointment",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error: insertError } = await supabase
        .from("appointments")
        .insert([formData]);

      if (insertError) throw insertError;

      const { error: notifyError } = await supabase.functions.invoke(
        "send-appointment-notification",
        {
          body: formData,
        }
      );

      if (notifyError) throw notifyError;

      trackGoogleAdsConversion();
      trackMetaLead();

      setSubmitStatus("success");
      setFormData({
        patient_name: "",
        patient_email: "",
        patient_phone: "",
        preferred_date: "",
        preferred_time: "",
        treatment_type: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section
      id="appointment"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Book Appointment with Orthodontist in Ahmedabad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your visit to <strong>Sumukh Dental Clinic</strong> for
            braces, clear aligners, dental implants, and complete dental care in
            Ahmedabad. We&apos;ll confirm your appointment within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-4">
                  Appointment Requested!
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for choosing Sumukh Dental Clinic. We&apos;ll confirm
                  your appointment via email or phone within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all font-semibold"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    <User className="inline mr-2" size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="patient_name"
                    value={formData.patient_name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      <Mail className="inline mr-2" size={18} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="patient_email"
                      value={formData.patient_email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      <Phone className="inline mr-2" size={18} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="patient_phone"
                      value={formData.patient_phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      min={minDate}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      <Clock className="inline mr-2" size={18} />
                      Preferred Time *
                    </label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Treatment Type
                  </label>
                  <select
                    name="treatment_type"
                    value={formData.treatment_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  >
                    <option value="">Select treatment (optional)</option>
                    {treatmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    <MessageSquare className="inline mr-2" size={18} />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Any specific concerns or questions?"
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 font-semibold">
                      There was an error submitting your appointment. Please try
                      again or call us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Book Dental Appointment"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Clinic Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">
                    Monday - Saturday
                  </span>
                  <div className="text-right">
                    <p className="text-blue-600 font-semibold">9:00 AM - 1:30 PM</p>
                    <p className="text-blue-600 font-semibold">4:30 PM - 8:30 PM</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Sunday</span>
                  <span className="text-blue-600 font-semibold">
                    By Appointment Only
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="mb-6 opacity-90">
                For dental emergencies or urgent consultations, please call us directly.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+918799527524"
                  className="block bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all text-center font-semibold"
                >
                  Call: +91 87995 27524
                </a>
                <a
                  href="mailto:sumukh15082017@gmail.com"
                  className="block bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all text-center font-semibold"
                >
                  Email: sumukh15082017@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Confirmation within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Comprehensive initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Personalized treatment plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Transparent pricing discussion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}