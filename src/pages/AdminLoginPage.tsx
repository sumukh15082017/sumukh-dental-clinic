import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message || "Login failed.");
      setIsSubmitting(false);
      return;
    }

    navigate("/admin/forms");
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Sumukh Dental Clinic</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <div className="text-center mb-8">
            <img
              src="/best-dental-clinic-in-ahmedabad.webp"
              alt="Sumukh Dental Clinic"
              className="mx-auto h-16 w-auto object-contain mb-4"
            />
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Admin Login
            </h1>
            <p className="text-slate-600">
              Reception dashboard access for patient intake forms.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Enter admin email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-11 pr-12 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {errorMessage && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-blue-600 px-6 py-4 text-white font-bold shadow-md transition hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}