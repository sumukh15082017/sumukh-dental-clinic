import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  User,
  Phone,
  HeartPulse,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import SignaturePad from "../components/SignaturePad";

type FormData = {
  full_name: string;
  age: string;
  gender: string;
  date_of_birth: string;
  mobile: string;
  alternate_number: string;
  email: string;
  address: string;
  blood_group: string;
  profession: string;
  referred_by: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  family_physician: string;
  medical_conditions: string;
  medications: string;
  allergies: string;
  pregnant: string;
  nursing_child: string;
  habits: string;
  past_dental_treatments: string;
  chief_complaint: string;
  consent_accepted: boolean;
  signature_data: string;
};

const initialForm: FormData = {
  full_name: "",
  age: "",
  gender: "",
  date_of_birth: "",
  mobile: "",
  alternate_number: "",
  email: "",
  address: "",
  blood_group: "",
  profession: "",
  referred_by: "",
  emergency_contact_name: "",
  emergency_contact_phone: "",
  family_physician: "",
  medical_conditions: "",
  medications: "",
  allergies: "",
  pregnant: "",
  nursing_child: "",
  habits: "",
  past_dental_treatments: "",
  chief_complaint: "",
  consent_accepted: false,
  signature_data: "",
};

export default function PatientIntakePage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const updateField = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDOB = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 8);

    if (v.length >= 5) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4, 8)}`;
    } else if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    } else {
      return v;
    }
  };

  const convertToISO = (dob: string) => {
    if (!dob) return null;

    const parts = dob.split("/");
    if (parts.length !== 3) return null;

    const [day, month, year] = parts;

    if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
      return null;
    }

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent_accepted) {
      alert("Please accept the consent before submitting.");
      return;
    }

    if (!formData.signature_data) {
      alert("Please add the patient signature before submitting.");
      return;
    }

    const formattedDOB = convertToISO(formData.date_of_birth);

    if (formData.date_of_birth && !formattedDOB) {
      alert("Please enter Date of Birth in DD/MM/YYYY format.");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");

    const { error } = await supabase.from("patient_intake_forms").insert([
      {
        ...formData,
        date_of_birth: formattedDOB,
        submitted_by_device: navigator.userAgent,
      },
    ]);

    if (error) {
      console.error(error);
      setSubmitState("error");
      setIsSubmitting(false);
      return;
    }

    setSubmitState("success");
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData(initialForm);
      setSubmitState("idle");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2500);
  };

  return (
    <>
      <Helmet>
        <title>Patient Information & Consent Form | Sumukh Dental Clinic</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="mb-8 rounded-[2rem] border border-blue-100 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <img
                src="/best-dental-clinic-in-ahmedabad.webp"
                alt="Sumukh Dental Clinic"
                className="h-16 md:h-20 w-auto object-contain"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Patient Information & Consent Form
                </h1>
                <p className="text-slate-600 mt-2">
                  Sumukh Dental Clinic • Dr. Dipen Thakker • Ahmedabad
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City
                  Sola, Ahmedabad 380060 • +91 8799527524
                </p>
              </div>
            </div>
          </div>

          {submitState === "success" ? (
            <div className="rounded-[2rem] border border-green-200 bg-white p-10 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="text-green-600" size={42} />
              </div>
              <h2 className="text-3xl font-bold text-green-700 mb-3">
                Thank You
              </h2>
              <p className="text-lg text-slate-600">
                Your form has been submitted successfully.
              </p>
              <p className="text-slate-500 mt-2">
                The form will reset automatically for the next patient.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <SectionCard
                icon={<User className="text-blue-600" size={22} />}
                title="Personal Details"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    value={formData.full_name}
                    onChange={(v) => updateField("full_name", v)}
                  />
                  <Input
                    label="Age"
                    required
                    value={formData.age}
                    onChange={(v) => updateField("age", v)}
                  />
                  <Select
                    label="Gender"
                    required
                    value={formData.gender}
                    onChange={(v) => updateField("gender", v)}
                    options={["Male", "Female", "Other"]}
                  />
                  <Input
                    label="Date of Birth (DD/MM/YYYY)"
                    required
                    value={formData.date_of_birth}
                    onChange={(v) =>
                      updateField("date_of_birth", formatDOB(v))
                    }
                    placeholder="DD/MM/YYYY"
                    inputMode="numeric"
                    maxLength={10}
                  />
                  <Input
                    label="Mobile Number"
                    required
                    value={formData.mobile}
                    onChange={(v) => updateField("mobile", v)}
                  />
                  <Input
                    label="Alternate Number"
                    value={formData.alternate_number}
                    onChange={(v) => updateField("alternate_number", v)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(v) => updateField("email", v)}
                  />
                  <Input
                    label="Blood Group"
                    value={formData.blood_group}
                    onChange={(v) => updateField("blood_group", v)}
                  />
                  <Input
                    label="Profession"
                    value={formData.profession}
                    onChange={(v) => updateField("profession", v)}
                  />
                  <Input
                    label="Referred By"
                    required
                    value={formData.referred_by}
                    onChange={(v) => updateField("referred_by", v)}
                  />
                </div>

                <div className="mt-4">
                  <TextArea
                    label="Address"
                    required
                    value={formData.address}
                    onChange={(v) => updateField("address", v)}
                    rows={3}
                  />
                </div>
              </SectionCard>

              <SectionCard
                icon={<Phone className="text-blue-600" size={22} />}
                title="Emergency & Reference Details"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Emergency Contact Name"
                    value={formData.emergency_contact_name}
                    onChange={(v) => updateField("emergency_contact_name", v)}
                  />
                  <Input
                    label="Emergency Contact Phone"
                    value={formData.emergency_contact_phone}
                    onChange={(v) => updateField("emergency_contact_phone", v)}
                  />
                  <Input
                    label="Family Physician"
                    value={formData.family_physician}
                    onChange={(v) => updateField("family_physician", v)}
                  />
                </div>
              </SectionCard>

              <SectionCard
                icon={<HeartPulse className="text-blue-600" size={22} />}
                title="Medical History"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <TextArea
                    label="Medical Conditions"
                    value={formData.medical_conditions}
                    onChange={(v) => updateField("medical_conditions", v)}
                    rows={3}
                  />
                  <TextArea
                    label="Current Medications"
                    value={formData.medications}
                    onChange={(v) => updateField("medications", v)}
                    rows={3}
                  />
                  <TextArea
                    label="Allergies"
                    value={formData.allergies}
                    onChange={(v) => updateField("allergies", v)}
                    rows={3}
                  />
                  <TextArea
                    label="Habits (Smoking / Tobacco / Pan Masala)"
                    value={formData.habits}
                    onChange={(v) => updateField("habits", v)}
                    rows={3}
                  />
                  <Select
                    label="Pregnant"
                    required
                    value={formData.pregnant}
                    onChange={(v) => updateField("pregnant", v)}
                    options={["Yes", "No", "Not Applicable"]}
                  />
                  <Select
                    label="Nursing Child"
                    required
                    value={formData.nursing_child}
                    onChange={(v) => updateField("nursing_child", v)}
                    options={["Yes", "No", "Not Applicable"]}
                  />
                </div>
              </SectionCard>

              <SectionCard
                icon={<FileText className="text-blue-600" size={22} />}
                title="Dental Information"
              >
                <div className="space-y-4">
                  <TextArea
                    label="Past Dental Treatments"
                    required
                    value={formData.past_dental_treatments}
                    onChange={(v) =>
                      updateField("past_dental_treatments", v)
                    }
                    rows={3}
                  />
                  <TextArea
                    label="Chief Complaint"
                    required
                    value={formData.chief_complaint}
                    onChange={(v) => updateField("chief_complaint", v)}
                    rows={4}
                  />
                </div>
              </SectionCard>

              <SectionCard
                icon={<ShieldCheck className="text-blue-600" size={22} />}
                title="Consent & Signature"
              >
                <div className="rounded-3xl border border-blue-100 bg-blue-50/40 p-5 mb-5">
                  <p className="text-slate-700 leading-relaxed">
                    I confirm that the information provided by me is true and
                    complete to the best of my knowledge. I consent to dental
                    examination, diagnosis, and necessary investigations such as
                    radiographs or photographs where required. I understand that
                    the recommended treatment, options, and possible risks may
                    be explained to me, and that no guarantee can be made
                    regarding exact treatment outcomes.
                  </p>
                </div>

                <label className="mb-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4">
                  <input
                    type="checkbox"
                    checked={formData.consent_accepted}
                    onChange={(e) =>
                      updateField("consent_accepted", e.target.checked)
                    }
                    className="mt-1 h-5 w-5 rounded border-blue-300 text-blue-600"
                  />
                  <span className="text-slate-700 font-medium">
                    I have read and agree to the general consent statement.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                <div className="mb-2">
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Patient Signature <span className="text-red-500">*</span>
                  </label>
                </div>

                <SignaturePad
                  value={formData.signature_data}
                  onChange={(value) => updateField("signature_data", value)}
                />
              </SectionCard>

              {submitState === "error" && (
                <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 font-medium">
                  There was an error submitting the form. Please try again.
                </div>
              )}

              <div className="sticky bottom-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-blue-600 px-8 py-5 text-lg font-bold text-white shadow-[0_18px_35px_rgba(37,99,235,0.25)] transition hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Patient Form"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  inputMode,
  maxLength,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-blue-900 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-blue-100 px-4 py-3.5 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-blue-900 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-blue-100 px-4 py-3.5 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      >
        <option value="">Select</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 4,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-blue-900 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        required={required}
        className="w-full rounded-2xl border border-blue-100 px-4 py-3.5 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 resize-none"
      />
    </div>
  );
}