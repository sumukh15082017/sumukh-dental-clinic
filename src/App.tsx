import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import OrthodonticsPage from "./pages/OrthodonticsPage";
import ImplantsPage from "./pages/ImplantsPage";
import RootCanalPage from "./pages/RootCanalPage";
import AlignersPage from "./pages/AlignersPage";
import CrownsAndBridgesPage from "./pages/CrownsAndBridgesPage";
import VeneersPage from "./pages/VeneersPage";
import SmileTransformationPage from "./pages/SmileTransformationPage";
import DentalTourismPage from "./pages/DentalTourismPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import PreventiveRestorativePage from "./pages/PreventiveRestorativePage";
import PatientIntakePage from "./pages/PatientIntakePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminFormsPage from "./pages/AdminFormsPage";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orthodontics" element={<OrthodonticsPage />} />
        <Route path="/implants" element={<ImplantsPage />} />
        <Route path="/root-canal" element={<RootCanalPage />} />
        <Route path="/aligners" element={<AlignersPage />} />
        <Route path="/crowns" element={<CrownsAndBridgesPage />} />
        <Route path="/veneers" element={<VeneersPage />} />
        <Route path="/smile-makeover" element={<SmileTransformationPage />} />
        <Route path="/dental-tourism" element={<DentalTourismPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route
          path="/preventive-restorative"
          element={<PreventiveRestorativePage />}
        />
        <Route path="/patient-intake" element={<PatientIntakePage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/forms"
          element={
            <AdminProtectedRoute>
              <AdminFormsPage />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}