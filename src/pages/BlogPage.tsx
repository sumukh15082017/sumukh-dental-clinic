import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SocialFollow from "../components/SocialFollow";

const SITE_BASE = "https://www.sumukhdentalclinic.com";
const CLINIC_NAME = "Sumukh Dental Clinic";
const DOCTOR_NAME = "Dr. Dipen Thakker";

const blogs = [
  {
    title: "Braces Cost in Ahmedabad (2026) – Metal, Ceramic & Lingual Braces Guide",
    slug: "braces-cost-ahmedabad-2026",
    description:
      "Understand what affects braces cost in Ahmedabad, including metal braces, ceramic braces, self-ligating braces, and lingual braces.",
    category: "Braces Cost",
  },
  {
    title: "Invisalign Cost in Ahmedabad – Clear Aligners Price Guide",
    slug: "invisalign-cost-ahmedabad",
    description:
      "Learn what affects Invisalign and clear aligner cost in Ahmedabad, including case complexity, treatment duration, and planning.",
    category: "Invisalign Cost",
  },
  {
    title: "Braces vs Invisalign in Ahmedabad – Which Treatment is Better?",
    slug: "braces-vs-invisalign-ahmedabad",
    description:
      "Compare braces and Invisalign in Ahmedabad to understand treatment differences, aesthetics, comfort, and which option may suit your smile goals best.",
    category: "Orthodontics",
  },
  {
    title: "How Long Does Invisalign Take in Ahmedabad?",
    slug: "how-long-does-invisalign-take-ahmedabad",
    description:
      "Understand how long Invisalign treatment may take depending on crowding, spacing, bite correction, and patient compliance.",
    category: "Invisalign Duration",
  },
  {
    title: "Best Age for Braces Treatment in Ahmedabad",
    slug: "best-age-for-braces-treatment-ahmedabad",
    description:
      "Discover the ideal age for braces treatment in children, teens, and adults, and when to schedule the first orthodontic consultation.",
    category: "Braces",
  },
  {
    title: "Can Adults Get Braces or Invisalign in Ahmedabad?",
    slug: "adult-braces-or-invisalign-ahmedabad",
    description:
      "Adult orthodontic treatment is very common. Learn how braces and Invisalign help adults improve alignment and smile confidence.",
    category: "Adult Orthodontics",
  },
  {
    title: "Do Clear Aligners Hurt? What to Expect During Treatment",
    slug: "do-clear-aligners-hurt-ahmedabad",
    description:
      "Know what mild pressure or soreness to expect with clear aligners and how most patients adapt comfortably within a few days.",
    category: "Clear Aligners",
  },
  {
    title: "Ceramic Braces vs Metal Braces – Which Should You Choose?",
    slug: "ceramic-braces-vs-metal-braces-ahmedabad",
    description:
      "Compare ceramic and metal braces in terms of aesthetics, durability, comfort, and suitability for different orthodontic cases.",
    category: "Braces Comparison",
  },
  {
    title: "What Problems Can Invisalign Correct?",
    slug: "what-problems-can-invisalign-correct-ahmedabad",
    description:
      "Learn which orthodontic problems Invisalign can help treat, including crowding, spacing, and selected bite-related issues.",
    category: "Invisalign",
  },
  {
    title: "How to Choose the Best Orthodontist in Ahmedabad",
    slug: "best-orthodontist-in-ahmedabad-guide",
    description:
      "Learn what to look for when choosing the best orthodontist in Ahmedabad for braces, Invisalign, smile correction, and long-term dental care.",
    category: "Orthodontist Guide",
  },
  {
    title: "Dental Implants in Ahmedabad – Cost, Procedure & Benefits",
    slug: "dental-implants-ahmedabad-guide",
    description:
      "Learn about dental implants in Ahmedabad, including treatment steps, benefits, healing time, and what affects implant cost.",
    category: "Dental Implants",
  },
  {
    title: "Root Canal Treatment in Ahmedabad – Procedure, Pain & Cost",
    slug: "root-canal-treatment-ahmedabad-guide",
    description:
      "Understand root canal treatment in Ahmedabad, including when it is needed, whether it hurts, and what affects the cost.",
    category: "Root Canal",
  },
  {
    title: "Dental Veneers in Ahmedabad – Cost, Benefits & Smile Makeover Guide",
    slug: "dental-veneers-ahmedabad-guide",
    description:
      "Explore dental veneers in Ahmedabad, including veneer types, smile design benefits, and who may be a suitable candidate.",
    category: "Dental Veneers",
  },
  {
    title: "Crowns and Bridges in Ahmedabad – Types, Cost & Benefits",
    slug: "crowns-and-bridges-ahmedabad-guide",
    description:
      "Learn about crowns and bridges in Ahmedabad, including zirconia crowns, bridges, benefits, and treatment planning.",
    category: "Crowns & Bridges",
  },
  {
    title: "Dental Tourism in Ahmedabad – Treatment, Travel & Cost Benefits",
    slug: "dental-tourism-ahmedabad-guide",
    description:
      "Discover why patients choose dental tourism in Ahmedabad for implants, smile makeovers, veneers, and full dental treatment planning.",
    category: "Dental Tourism",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_BASE}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_BASE}/blog`,
    },
  ],
};

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_BASE}/blog`,
  url: `${SITE_BASE}/blog`,
  name: `Dental Blog Ahmedabad | Braces, Invisalign & Smile Tips | ${CLINIC_NAME}`,
  description:
    `Read dental and orthodontic articles by ${DOCTOR_NAME} at ${CLINIC_NAME} on braces, Invisalign, smile correction, and oral care in Ahmedabad.`,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    url: SITE_BASE,
    name: CLINIC_NAME,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogs.map((blog, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_BASE}/blog/${blog.slug}`,
    name: blog.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Dental Blog Ahmedabad | Braces, Invisalign &amp; Smile Tips | {CLINIC_NAME}
        </title>
        <meta
          name="description"
          content={`Read dental and orthodontic blogs by ${DOCTOR_NAME} at ${CLINIC_NAME} on braces, Invisalign, smile makeovers, oral health, and smile correction in Ahmedabad.`}
        />
        <meta
          name="keywords"
          content="dental blog Ahmedabad, braces blog Ahmedabad, Invisalign blog Ahmedabad, orthodontist blog Ahmedabad, dental tips Ahmedabad, smile makeover blog Ahmedabad"
        />
        <link rel="canonical" href={`${SITE_BASE}/blog`} />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="alternate" hrefLang="en-IN" href={`${SITE_BASE}/blog`} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={CLINIC_NAME} />
        <meta
          property="og:title"
          content={`Dental Blog Ahmedabad | Braces, Invisalign & Smile Tips | ${CLINIC_NAME}`}
        />
        <meta
          property="og:description"
          content={`Read expert dental and orthodontic articles by ${DOCTOR_NAME} at ${CLINIC_NAME}.`}
        />
        <meta property="og:url" content={`${SITE_BASE}/blog`} />
        <meta
          property="og:image"
          content={`${SITE_BASE}/best-dental-clinic-in-ahmedabad.webp`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${CLINIC_NAME} dental blog in Ahmedabad`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Dental Blog Ahmedabad | Braces, Invisalign & Smile Tips | ${CLINIC_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`Read expert dental and orthodontic articles by ${DOCTOR_NAME} at ${CLINIC_NAME}.`}
        />
        <meta
          name="twitter:image"
          content={`${SITE_BASE}/best-dental-clinic-in-ahmedabad.webp`}
        />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 sm:pt-28 md:pt-32 bg-white">
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol
                className="flex items-center gap-1 text-sm text-slate-500"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link
                    to="/"
                    className="hover:text-blue-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-slate-400">/</li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span className="text-blue-600 font-medium" itemProp="name">
                    Blog
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-blue-900 mb-5">
                Dental Blog Ahmedabad —
                <span className="text-blue-500"> Braces, Invisalign &amp; Smile Tips</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Explore expert articles on braces, Invisalign, orthodontics, smile
                makeovers, veneers, implants, root canal treatment, and oral health
                by {DOCTOR_NAME} at {CLINIC_NAME}, Ahmedabad.
              </p>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Looking for treatment pages too? Explore{" "}
                <Link to="/orthodontics" className="text-blue-600 font-semibold hover:underline">
                  braces
                </Link>
                ,{" "}
                <Link to="/aligners" className="text-blue-600 font-semibold hover:underline">
                  clear aligners
                </Link>
                ,{" "}
                <Link to="/implants" className="text-blue-600 font-semibold hover:underline">
                  dental implants
                </Link>
                ,{" "}
                <Link to="/veneers" className="text-blue-600 font-semibold hover:underline">
                  veneers
                </Link>
                ,{" "}
                <Link to="/root-canal" className="text-blue-600 font-semibold hover:underline">
                  root canal treatment
                </Link>
                , and{" "}
                <Link to="/smile-makeover" className="text-blue-600 font-semibold hover:underline">
                  smile makeover
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                >
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 mb-4">
                    {blog.category}
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-3 leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <span className="text-blue-600 font-semibold">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <SocialFollow />
    </>
  );
}