import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type RelatedTreatmentLink = {
  title: string;
  href: string;
  description: string;
};

export default function RelatedTreatments({
  title = "Related Treatments",
  subtitle = "Explore other treatment options that may also support your smile, function, and long-term dental goals.",
  links,
}: {
  title?: string;
  subtitle?: string;
  links: RelatedTreatmentLink[];
}) {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  Explore Treatment
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}