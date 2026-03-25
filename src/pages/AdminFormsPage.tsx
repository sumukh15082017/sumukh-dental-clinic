import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Search,
  CalendarDays,
  Phone,
  UserRound,
  FileText,
  Printer,
  Download,
  SquarePen,
  Save,
  X,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import jsPDF from "jspdf";

type PatientForm = {
  id: string;
  created_at: string;
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

type PdfField = {
  label: string;
  value?: string | null;
};

const CONSENT_TEXT = `I confirm that the information provided by me is true and complete to the best of my knowledge. I consent to dental examination, diagnosis, and necessary investigations such as radiographs or photographs where required. I understand that the recommended treatment, options, and possible risks may be explained to me, and that no guarantee can be made regarding exact treatment outcomes.`;

export default function AdminFormsPage() {
  const navigate = useNavigate();

  const [forms, setForms] = useState<PatientForm[]>([]);
  const [selectedForm, setSelectedForm] = useState<PatientForm | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<PatientForm | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchForms = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("patient_intake_forms")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setForms(data);
      setSelectedForm((prev) => {
        if (!prev && data.length > 0) return data[0];
        if (prev) {
          const refreshed = data.find((item) => item.id === prev.id);
          return refreshed || prev;
        }
        return prev;
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const filteredForms = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return forms;

    return forms.filter((item) => {
      return (
        item.full_name?.toLowerCase().includes(q) ||
        item.mobile?.toLowerCase().includes(q) ||
        item.chief_complaint?.toLowerCase().includes(q)
      );
    });
  }, [forms, search]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleEditForm = () => {
    if (!selectedForm) return;
    setEditForm({ ...selectedForm });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm(null);
  };

  const updateField = (
    field: keyof PatientForm,
    value: string | boolean
  ) => {
    setEditForm((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSaveEdit = async () => {
    if (!editForm) return;

    try {
      setIsSaving(true);

      const { id, created_at, ...updateData } = editForm;

      const { error } = await supabase
        .from("patient_intake_forms")
        .update(updateData)
        .eq("id", id);

      if (error) {
        console.error(error);
        alert("Error saving changes.");
        return;
      }

      setSelectedForm(editForm);
      setForms((prev) =>
        prev.map((item) => (item.id === editForm.id ? editForm : item))
      );

      setIsEditing(false);
      setEditForm(null);
      alert("Form updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (value?: string | null) => {
    if (!value) return "-";

    const isoLike = /^\d{4}-\d{2}-\d{2}$/;
    if (isoLike.test(value)) {
      const [year, month, day] = value.split("-");
      return `${day}/${month}/${year}`;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-GB");
  };

  const formatDateTime = (value?: string | null) => {
    if (!value) return "-";
    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleString("en-GB");
  };

  const cleanValue = (value?: string | null) => {
    if (!value || !value.trim()) return "-";
    return value.trim();
  };

  const escapeHtml = (value?: string | null) => {
    return cleanValue(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const printableField = (label: string, value?: string | null) => {
    return `
      <div class="field">
        <div class="field-label">${escapeHtml(label)}</div>
        <div class="field-value">${escapeHtml(value).replace(/\n/g, "<br />")}</div>
      </div>
    `;
  };

  const printableSection = (title: string, fields: PdfField[]) => {
    return `
      <section class="section">
        <h2>${escapeHtml(title)}</h2>
        <div class="fields-grid">
          ${fields
            .map((field) => printableField(field.label, field.value))
            .join("")}
        </div>
      </section>
    `;
  };

  const blobToDataURL = (blob: Blob) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") resolve(reader.result);
        else reject(new Error("Unable to convert image."));
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const convertImageUrlToPngDataUrl = (src: string) =>
    new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Canvas context unavailable."));
            return;
          }

          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => reject(new Error("Image failed to load."));
      img.src = src;
    });

  const getClinicLogoDataUrl = async () => {
    const response = await fetch("/best-dental-clinic-in-ahmedabad.webp");
    if (!response.ok) {
      throw new Error("Logo could not be loaded.");
    }

    const blob = await response.blob();
    const originalDataUrl = await blobToDataURL(blob);
    return convertImageUrlToPngDataUrl(originalDataUrl);
  };

  const buildPrintableHTML = (form: PatientForm, headerLogo: string) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${escapeHtml(form.full_name || "Patient Form")} - Sumukh Dental Clinic</title>
          <style>
            * {
              box-sizing: border-box;
            }

            @page {
              size: A4;
              margin: 14mm;
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
              background: #ffffff;
            }

            .page {
              width: 100%;
            }

            .header-card {
              display: flex;
              align-items: center;
              gap: 18px;
              border: 1px solid #dbeafe;
              border-radius: 24px;
              padding: 20px 22px;
              background: #ffffff;
              margin-bottom: 18px;
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .header-logo {
              width: 110px;
              height: auto;
              object-fit: contain;
              flex-shrink: 0;
            }

            .header-content h1 {
              margin: 0;
              font-size: 28px;
              line-height: 1.15;
              color: #1e3a8a;
              font-weight: 700;
            }

            .header-subtitle {
              margin-top: 10px;
              font-size: 15px;
              color: #475569;
            }

            .header-address {
              margin-top: 6px;
              font-size: 13px;
              color: #64748b;
              line-height: 1.45;
            }

            .meta-card {
              border: 1px solid #dbeafe;
              border-radius: 18px;
              padding: 14px 18px;
              margin-bottom: 16px;
              background: #f8fbff;
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .meta-row {
              font-size: 14px;
              color: #334155;
              line-height: 1.7;
            }

            .section {
              border: 1px solid #dbeafe;
              border-radius: 18px;
              padding: 16px 18px;
              margin-bottom: 14px;
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .section h2 {
              margin: 0 0 14px 0;
              font-size: 20px;
              color: #1e3a8a;
              font-weight: 700;
            }

            .fields-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 14px 20px;
            }

            .field {
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .field-label {
              margin-bottom: 4px;
              font-size: 11px;
              font-weight: 700;
              color: #64748b;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            }

            .field-value {
              font-size: 14px;
              color: #0f172a;
              line-height: 1.55;
              word-break: break-word;
              white-space: normal;
            }

            .consent-box {
              border: 1px solid #dbeafe;
              border-radius: 16px;
              padding: 14px 16px;
              background: #f8fbff;
              margin-top: 6px;
            }

            .consent-text {
              font-size: 14px;
              color: #334155;
              line-height: 1.65;
              white-space: normal;
            }

            .signature-wrap {
              border: 1px solid #dbeafe;
              border-radius: 16px;
              padding: 12px;
              background: #ffffff;
              display: inline-block;
              margin-top: 6px;
            }

            .signature-wrap img {
              max-width: 240px;
              max-height: 90px;
              display: block;
            }

            @media print {
              html, body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          <div class="page">
            <div class="header-card">
              <img src="${headerLogo}" alt="Sumukh Dental Clinic" class="header-logo" />
              <div class="header-content">
                <h1>Patient Information & Consent Form</h1>
                <div class="header-subtitle">Sumukh Dental Clinic • Dr. Dipen Thakker • Ahmedabad</div>
                <div class="header-address">
                  GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola, Ahmedabad 380060 • +91 8799527524
                </div>
              </div>
            </div>

            <div class="meta-card">
              <div class="meta-row"><strong>Patient Name:</strong> ${escapeHtml(form.full_name)}</div>
              <div class="meta-row"><strong>Submitted On:</strong> ${escapeHtml(formatDateTime(form.created_at))}</div>
            </div>

            ${printableSection("Personal Details", [
              { label: "Full Name", value: form.full_name },
              { label: "Age", value: form.age },
              { label: "Gender", value: form.gender },
              { label: "Date of Birth", value: formatDate(form.date_of_birth) },
              { label: "Mobile Number", value: form.mobile },
              { label: "Alternate Number", value: form.alternate_number },
              { label: "Email", value: form.email },
              { label: "Blood Group", value: form.blood_group },
              { label: "Profession", value: form.profession },
              { label: "Referred By", value: form.referred_by },
              { label: "Address", value: form.address },
            ])}

            ${printableSection("Emergency & Reference Details", [
              { label: "Emergency Contact Name", value: form.emergency_contact_name },
              { label: "Emergency Contact Phone", value: form.emergency_contact_phone },
              { label: "Family Physician", value: form.family_physician },
            ])}

            ${printableSection("Medical History", [
              { label: "Medical Conditions", value: form.medical_conditions },
              { label: "Current Medications", value: form.medications },
              { label: "Allergies", value: form.allergies },
              { label: "Pregnant", value: form.pregnant },
              { label: "Nursing Child", value: form.nursing_child },
              { label: "Habits", value: form.habits },
            ])}

            ${printableSection("Dental Information", [
              { label: "Past Dental Treatments", value: form.past_dental_treatments },
              { label: "Chief Complaint", value: form.chief_complaint },
            ])}

            ${
              form.consent_accepted
                ? `
                <section class="section">
                  <h2>Consent</h2>
                  <div class="consent-box">
                    <div class="consent-text">${escapeHtml(CONSENT_TEXT)}</div>
                  </div>
                </section>
              `
                : ""
            }

            ${
              form.signature_data
                ? `
                <section class="section">
                  <h2>Patient Signature</h2>
                  <div class="signature-wrap">
                    <img src="${form.signature_data}" alt="Patient signature" />
                  </div>
                </section>
              `
                : ""
            }
          </div>
        </body>
      </html>
    `;
  };

  const openPrintWindow = (html: string) => {
    const printWindow = window.open("", "_blank", "width=1100,height=900");

    if (!printWindow) {
      alert("Please allow pop-ups to print the form.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 300);
    };
  };

  const handlePrintForm = async () => {
    if (!selectedForm) return;

    try {
      const logoDataUrl = await getClinicLogoDataUrl();
      openPrintWindow(buildPrintableHTML(selectedForm, logoDataUrl));
    } catch (error) {
      console.error(error);
      alert("Could not load clinic logo for print preview.");
    }
  };

  const addWrappedField = (
    pdf: jsPDF,
    label: string,
    value: string,
    startX: number,
    startY: number,
    width: number
  ) => {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(100, 116, 139);
    pdf.text(label.toUpperCase(), startX, startY);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(15, 23, 42);

    const textLines = pdf.splitTextToSize(value || "-", width);
    pdf.text(textLines, startX, startY + 6);

    return 6 + textLines.length * 5 + 4;
  };

  const handleDownloadPdf = async () => {
    if (!selectedForm) return;

    try {
      setIsExporting(true);

      const pdf = new jsPDF("p", "mm", "a4");
      const logoDataUrl = await getClinicLogoDataUrl();

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 12;
      const contentWidth = pageWidth - margin * 2;
      const colGap = 8;
      const colWidth = (contentWidth - colGap) / 2;
      const boxRadius = 4;

      let y = 14;

      const ensureSpace = (requiredHeight: number) => {
        if (y + requiredHeight > pageHeight - 14) {
          pdf.addPage();
          y = 14;
        }
      };

      const drawRoundedBox = (
        x: number,
        top: number,
        width: number,
        height: number,
        fill = false
      ) => {
        pdf.roundedRect(
          x,
          top,
          width,
          height,
          boxRadius,
          boxRadius,
          fill ? "FD" : "S"
        );
      };

      const drawHeader = () => {
        ensureSpace(38);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(255, 255, 255);
        drawRoundedBox(margin, y, contentWidth, 34, true);

        try {
          pdf.addImage(logoDataUrl, "PNG", margin + 6, y + 6, 26, 18);
        } catch {
          // continue
        }

        pdf.setTextColor(30, 58, 138);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(22);
        pdf.text("Patient Information & Consent Form", margin + 36, y + 13);

        pdf.setTextColor(71, 85, 105);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11.5);
        pdf.text(
          "Sumukh Dental Clinic • Dr. Dipen Thakker • Ahmedabad",
          margin + 36,
          y + 20
        );

        pdf.setTextColor(100, 116, 139);
        pdf.setFontSize(9.5);
        const address =
          "GF 20, Sudarshan Gold, Opp Hyundai Service Centre, Science City Sola, Ahmedabad 380060 • +91 8799527524";
        const addressLines = pdf.splitTextToSize(address, contentWidth - 42);
        pdf.text(addressLines, margin + 36, y + 26);

        y += 40;
      };

      const drawMetaCard = () => {
        ensureSpace(18);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(248, 251, 255);
        drawRoundedBox(margin, y, contentWidth, 15, true);

        pdf.setTextColor(51, 65, 85);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.text("Patient Name:", margin + 6, y + 6.5);
        pdf.setFont("helvetica", "normal");
        pdf.text(cleanValue(selectedForm.full_name), margin + 34, y + 6.5);

        pdf.setFont("helvetica", "bold");
        pdf.text("Submitted On:", margin + 6, y + 12);
        pdf.setFont("helvetica", "normal");
        pdf.text(formatDateTime(selectedForm.created_at), margin + 34, y + 12);

        y += 20;
      };

      const drawSection = (title: string, fields: PdfField[]) => {
        const normalized = fields.map((field) => ({
          label: field.label,
          value: cleanValue(field.value),
        }));

        const leftFields = normalized.filter((_, index) => index % 2 === 0);
        const rightFields = normalized.filter((_, index) => index % 2 === 1);

        const calculateColumnHeight = (items: PdfField[]) => {
          let total = 0;
          for (const item of items) {
            const lines = pdf.splitTextToSize(cleanValue(item.value), colWidth);
            total += 6 + lines.length * 5 + 4;
          }
          return total;
        };

        const sectionHeight =
          Math.max(
            calculateColumnHeight(leftFields),
            calculateColumnHeight(rightFields)
          ) + 14;

        ensureSpace(sectionHeight + 8);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(255, 255, 255);
        drawRoundedBox(margin, y, contentWidth, sectionHeight, true);

        pdf.setTextColor(30, 58, 138);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text(title, margin + 6, y + 8);

        let leftY = y + 15;
        let rightY = y + 15;

        leftFields.forEach((field) => {
          leftY += addWrappedField(
            pdf,
            field.label,
            cleanValue(field.value),
            margin + 6,
            leftY,
            colWidth - 2
          );
        });

        rightFields.forEach((field) => {
          rightY += addWrappedField(
            pdf,
            field.label,
            cleanValue(field.value),
            margin + 6 + colWidth + colGap,
            rightY,
            colWidth - 2
          );
        });

        y += sectionHeight + 6;
      };

      const drawConsentSection = () => {
        if (!selectedForm.consent_accepted) return;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11);
        const consentLines = pdf.splitTextToSize(CONSENT_TEXT, contentWidth - 12);
        const consentHeight = 16 + consentLines.length * 5 + 8;

        ensureSpace(consentHeight);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(255, 255, 255);
        drawRoundedBox(margin, y, contentWidth, consentHeight, true);

        pdf.setTextColor(30, 58, 138);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Consent", margin + 6, y + 8);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(248, 251, 255);
        drawRoundedBox(margin + 6, y + 12, contentWidth - 12, consentHeight - 18, true);

        pdf.setTextColor(51, 65, 85);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11);
        pdf.text(consentLines, margin + 10, y + 20);

        y += consentHeight + 6;
      };

      const drawSignature = async () => {
        if (!selectedForm.signature_data) return;

        ensureSpace(42);

        pdf.setDrawColor(219, 234, 254);
        pdf.setFillColor(255, 255, 255);
        drawRoundedBox(margin, y, contentWidth, 34, true);

        pdf.setTextColor(30, 58, 138);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("Patient Signature", margin + 6, y + 8);

        pdf.setDrawColor(219, 234, 254);
        pdf.roundedRect(margin + 6, y + 12, 70, 16, 3, 3, "S");

        try {
          const format = selectedForm.signature_data.startsWith("data:image/png")
            ? "PNG"
            : selectedForm.signature_data.startsWith("data:image/jpeg")
            ? "JPEG"
            : "PNG";

          pdf.addImage(
            selectedForm.signature_data,
            format,
            margin + 8,
            y + 14,
            50,
            10
          );
        } catch {
          pdf.setTextColor(100, 116, 139);
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(10);
          pdf.text("Signature available", margin + 10, y + 22);
        }

        y += 40;
      };

      drawHeader();
      drawMetaCard();

      drawSection("Personal Details", [
        { label: "Full Name", value: selectedForm.full_name },
        { label: "Age", value: selectedForm.age },
        { label: "Gender", value: selectedForm.gender },
        { label: "Date of Birth", value: formatDate(selectedForm.date_of_birth) },
        { label: "Mobile Number", value: selectedForm.mobile },
        { label: "Alternate Number", value: selectedForm.alternate_number },
        { label: "Email", value: selectedForm.email },
        { label: "Blood Group", value: selectedForm.blood_group },
        { label: "Profession", value: selectedForm.profession },
        { label: "Referred By", value: selectedForm.referred_by },
        { label: "Address", value: selectedForm.address },
      ]);

      drawSection("Emergency & Reference Details", [
        {
          label: "Emergency Contact Name",
          value: selectedForm.emergency_contact_name,
        },
        {
          label: "Emergency Contact Phone",
          value: selectedForm.emergency_contact_phone,
        },
        { label: "Family Physician", value: selectedForm.family_physician },
      ]);

      drawSection("Medical History", [
        { label: "Medical Conditions", value: selectedForm.medical_conditions },
        { label: "Current Medications", value: selectedForm.medications },
        { label: "Allergies", value: selectedForm.allergies },
        { label: "Pregnant", value: selectedForm.pregnant },
        { label: "Nursing Child", value: selectedForm.nursing_child },
        { label: "Habits", value: selectedForm.habits },
      ]);

      drawSection("Dental Information", [
        {
          label: "Past Dental Treatments",
          value: selectedForm.past_dental_treatments,
        },
        { label: "Chief Complaint", value: selectedForm.chief_complaint },
      ]);

      drawConsentSection();
      await drawSignature();

      const safeName = cleanValue(selectedForm.full_name)
        .replace(/[^a-z0-9]/gi, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

      pdf.save(`${safeName || "patient"}-intake-form.pdf`);
    } catch (error) {
      console.error(error);
      alert("Failed to generate PDF.");
    } finally {
      setIsExporting(false);
    }
  };

  const currentForm = isEditing && editForm ? editForm : selectedForm;

  return (
    <>
      <Helmet>
        <title>Patient Intake Forms | Admin | Sumukh Dental Clinic</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <header className="border-b border-blue-100 bg-white/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/best-dental-clinic-in-ahmedabad.webp"
                alt="Sumukh Dental Clinic"
                className="h-14 w-auto object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  Patient Intake Dashboard
                </h1>
                <p className="text-slate-600 text-sm">
                  View and manage submitted patient information forms.
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-[360px_1fr] gap-8">
            <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <div className="relative mb-5">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, phone, complaint"
                  className="w-full rounded-2xl border border-blue-100 py-3 pl-11 pr-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-4 text-sm font-semibold text-slate-500">
                {loading ? "Loading..." : `${filteredForms.length} records found`}
              </div>

              <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
                {filteredForms.map((item) => {
                  const active = selectedForm?.id === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedForm(item);
                        setIsEditing(false);
                        setEditForm(null);
                      }}
                      className={`w-full rounded-3xl border p-4 text-left transition ${
                        active
                          ? "border-blue-300 bg-blue-50"
                          : "border-blue-100 bg-white hover:bg-blue-50/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-bold text-blue-900">
                          {item.full_name || "Unnamed Patient"}
                        </p>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                          {item.consent_accepted ? "Consent ✓" : "Consent -"}
                        </span>
                      </div>

                      <div className="space-y-1 text-sm text-slate-600">
                        <p className="flex items-center gap-2">
                          <Phone size={14} />
                          {item.mobile || "-"}
                        </p>
                        <p className="flex items-center gap-2">
                          <FileText size={14} />
                          {item.chief_complaint || "No complaint entered"}
                        </p>
                        <p className="flex items-center gap-2">
                          <CalendarDays size={14} />
                          {formatDateTime(item.created_at)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              {!selectedForm || !currentForm ? (
                <div className="h-full flex items-center justify-center text-slate-500">
                  Select a patient form to view details.
                </div>
              ) : (
                <div>
                  <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">
                        {currentForm.full_name || "Patient Record"}
                      </h2>
                      <div className="space-y-1 text-slate-600">
                        <p className="flex items-center gap-2">
                          <UserRound size={16} />
                          {currentForm.age || "-"}{" "}
                          {currentForm.gender ? `• ${currentForm.gender}` : ""}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone size={16} />
                          {currentForm.mobile || "-"}
                        </p>
                        <p className="flex items-center gap-2">
                          <CalendarDays size={16} />
                          Submitted: {formatDateTime(currentForm.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {!isEditing ? (
                        <button
                          onClick={handleEditForm}
                          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-blue-700 font-semibold shadow-sm transition hover:bg-blue-50"
                        >
                          <SquarePen size={18} />
                          Edit Form
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleSaveEdit}
                            disabled={isSaving}
                            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-md transition hover:bg-green-700 disabled:opacity-50"
                          >
                            <Save size={18} />
                            {isSaving ? "Saving..." : "Save"}
                          </button>

                          <button
                            onClick={handleCancelEdit}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-700 font-semibold shadow-sm transition hover:bg-slate-50"
                          >
                            <X size={18} />
                            Cancel
                          </button>
                        </>
                      )}

                      <button
                        onClick={handlePrintForm}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-blue-700 font-semibold shadow-sm transition hover:bg-blue-50"
                      >
                        <Printer size={18} />
                        Print Form
                      </button>

                      <button
                        onClick={handleDownloadPdf}
                        disabled={isExporting}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700 disabled:opacity-50"
                      >
                        <Download size={18} />
                        {isExporting ? "Generating PDF..." : "Download PDF"}
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard title="Personal Details">
                      {isEditing && editForm ? (
                        <div className="space-y-4">
                          <EditableField
                            label="Full Name"
                            value={editForm.full_name}
                            onChange={(v) => updateField("full_name", v)}
                          />
                          <EditableField
                            label="Age"
                            value={editForm.age}
                            onChange={(v) => updateField("age", v)}
                          />
                          <EditableField
                            label="Gender"
                            value={editForm.gender}
                            onChange={(v) => updateField("gender", v)}
                          />
                          <EditableField
                            label="Date of Birth"
                            value={editForm.date_of_birth}
                            onChange={(v) => updateField("date_of_birth", v)}
                          />
                          <EditableField
                            label="Mobile Number"
                            value={editForm.mobile}
                            onChange={(v) => updateField("mobile", v)}
                          />
                          <EditableField
                            label="Alternate Number"
                            value={editForm.alternate_number}
                            onChange={(v) => updateField("alternate_number", v)}
                          />
                          <EditableField
                            label="Email"
                            value={editForm.email}
                            onChange={(v) => updateField("email", v)}
                          />
                          <EditableTextArea
                            label="Address"
                            value={editForm.address}
                            onChange={(v) => updateField("address", v)}
                          />
                          <EditableField
                            label="Blood Group"
                            value={editForm.blood_group}
                            onChange={(v) => updateField("blood_group", v)}
                          />
                          <EditableField
                            label="Profession"
                            value={editForm.profession}
                            onChange={(v) => updateField("profession", v)}
                          />
                          <EditableField
                            label="Referred By"
                            value={editForm.referred_by}
                            onChange={(v) => updateField("referred_by", v)}
                          />
                        </div>
                      ) : (
                        <>
                          <InfoRow label="Full Name" value={currentForm.full_name} />
                          <InfoRow label="Age" value={currentForm.age} />
                          <InfoRow label="Gender" value={currentForm.gender} />
                          <InfoRow
                            label="Date of Birth"
                            value={formatDate(currentForm.date_of_birth)}
                          />
                          <InfoRow label="Mobile Number" value={currentForm.mobile} />
                          <InfoRow
                            label="Alternate Number"
                            value={currentForm.alternate_number}
                          />
                          <InfoRow label="Email" value={currentForm.email} />
                          <InfoRow label="Address" value={currentForm.address} />
                          <InfoRow
                            label="Blood Group"
                            value={currentForm.blood_group}
                          />
                          <InfoRow
                            label="Profession"
                            value={currentForm.profession}
                          />
                          <InfoRow
                            label="Referred By"
                            value={currentForm.referred_by}
                          />
                        </>
                      )}
                    </InfoCard>

                    <InfoCard title="Emergency / Physician">
                      {isEditing && editForm ? (
                        <div className="space-y-4">
                          <EditableField
                            label="Emergency Contact Name"
                            value={editForm.emergency_contact_name}
                            onChange={(v) =>
                              updateField("emergency_contact_name", v)
                            }
                          />
                          <EditableField
                            label="Emergency Contact Phone"
                            value={editForm.emergency_contact_phone}
                            onChange={(v) =>
                              updateField("emergency_contact_phone", v)
                            }
                          />
                          <EditableField
                            label="Family Physician"
                            value={editForm.family_physician}
                            onChange={(v) => updateField("family_physician", v)}
                          />
                        </div>
                      ) : (
                        <>
                          <InfoRow
                            label="Emergency Contact Name"
                            value={currentForm.emergency_contact_name}
                          />
                          <InfoRow
                            label="Emergency Contact Phone"
                            value={currentForm.emergency_contact_phone}
                          />
                          <InfoRow
                            label="Family Physician"
                            value={currentForm.family_physician}
                          />
                        </>
                      )}
                    </InfoCard>

                    <InfoCard title="Medical History">
                      {isEditing && editForm ? (
                        <div className="space-y-4">
                          <EditableTextArea
                            label="Medical Conditions"
                            value={editForm.medical_conditions}
                            onChange={(v) => updateField("medical_conditions", v)}
                          />
                          <EditableTextArea
                            label="Current Medications"
                            value={editForm.medications}
                            onChange={(v) => updateField("medications", v)}
                          />
                          <EditableTextArea
                            label="Allergies"
                            value={editForm.allergies}
                            onChange={(v) => updateField("allergies", v)}
                          />
                          <EditableField
                            label="Pregnant"
                            value={editForm.pregnant}
                            onChange={(v) => updateField("pregnant", v)}
                          />
                          <EditableField
                            label="Nursing Child"
                            value={editForm.nursing_child}
                            onChange={(v) => updateField("nursing_child", v)}
                          />
                          <EditableTextArea
                            label="Habits"
                            value={editForm.habits}
                            onChange={(v) => updateField("habits", v)}
                          />
                        </div>
                      ) : (
                        <>
                          <InfoRow
                            label="Medical Conditions"
                            value={currentForm.medical_conditions}
                          />
                          <InfoRow
                            label="Current Medications"
                            value={currentForm.medications}
                          />
                          <InfoRow
                            label="Allergies"
                            value={currentForm.allergies}
                          />
                          <InfoRow label="Pregnant" value={currentForm.pregnant} />
                          <InfoRow
                            label="Nursing Child"
                            value={currentForm.nursing_child}
                          />
                          <InfoRow label="Habits" value={currentForm.habits} />
                        </>
                      )}
                    </InfoCard>

                    <InfoCard title="Dental Details">
                      {isEditing && editForm ? (
                        <div className="space-y-4">
                          <EditableTextArea
                            label="Past Dental Treatments"
                            value={editForm.past_dental_treatments}
                            onChange={(v) =>
                              updateField("past_dental_treatments", v)
                            }
                          />
                          <EditableTextArea
                            label="Chief Complaint"
                            value={editForm.chief_complaint}
                            onChange={(v) => updateField("chief_complaint", v)}
                          />
                          <EditableSelect
                            label="Consent Accepted"
                            value={editForm.consent_accepted ? "Yes" : "No"}
                            options={["Yes", "No"]}
                            onChange={(v) =>
                              updateField("consent_accepted", v === "Yes")
                            }
                          />
                        </div>
                      ) : (
                        <>
                          <InfoRow
                            label="Past Dental Treatments"
                            value={currentForm.past_dental_treatments}
                          />
                          <InfoRow
                            label="Chief Complaint"
                            value={currentForm.chief_complaint}
                          />
                          <InfoRow
                            label="Consent Accepted"
                            value={currentForm.consent_accepted ? "Yes" : "No"}
                          />
                        </>
                      )}
                    </InfoCard>
                  </div>

                  {currentForm.consent_accepted && (
                    <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/40 p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">
                        Consent
                      </h3>
                      <div className="rounded-2xl border border-blue-100 bg-white p-4">
                        <p className="text-slate-700 leading-relaxed">
                          {CONSENT_TEXT}
                        </p>
                      </div>
                    </div>
                  )}

                  {currentForm.signature_data && (
                    <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/40 p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">
                        Patient Signature
                      </h3>
                      <div className="rounded-2xl border border-blue-100 bg-white p-4 inline-block">
                        <img
                          src={currentForm.signature_data}
                          alt="Patient signature"
                          className="max-w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-6">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-500 mb-1">{label}</p>
      <p className="text-slate-700 whitespace-pre-wrap">
        {value && value.trim() ? value : "-"}
      </p>
    </div>
  );
}

function EditableField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value?: string;
  onChange: (val: string) => void;
  type?: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-500 mb-1">{label}</p>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-blue-200 px-3 py-2.5 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function EditableTextArea({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value?: string;
  onChange: (val: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-500 mb-1">{label}</p>
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-xl border border-blue-200 px-3 py-2.5 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
      />
    </div>
  );
}

function EditableSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-500 mb-1">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-blue-200 px-3 py-2.5 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}