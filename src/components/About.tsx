import { GraduationCap, Award, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white scroll-mt-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          >
            Meet Dr. Dipen Thakker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Owner and Chief Orthodontist at Sumukh Dental Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-4 shadow-2xl">
              <img
                src="/dr-dipen-thakker-orthodontist-ahmedabad.webp"
                alt="Dr. Dipen Thakker, MDS Orthodontics, orthodontist and Invisalign provider in Ahmedabad"
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <span className="text-2xl font-bold text-blue-900">5/5</span>
              </div>
              <p className="text-gray-600 text-sm">Patient Rating</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Dr. Dipen Thakker
            </h3>
            <p className="text-xl text-blue-600 mb-6">MDS Orthodontics</p>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
             Dr. Dipen Thakker is an experienced orthodontist, based in Ahmedabad, with over 10 years of specialized practice in braces, clear aligners, smile correction, and comprehensive dental care. Dr. Dipen focuses on creating healthy, confident smiles through personalized treatment planning, modern orthodontic techniques, and patient-centered dental care at Sumukh Dental Clinic.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Advanced Education
                  </h4>
                  <p className="text-gray-600">
                    Master of Dental Surgery (MDS) in Orthodontics with ongoing
                    professional development in modern orthodontic and dental
                    treatment techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Specialized Expertise
                  </h4>
                  <p className="text-gray-600">
                    Experienced in braces, Invisalign and clear aligners, smile
                    correction, bite improvement, and advanced orthodontic
                    treatment planning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Patient-Centered Care
                  </h4>
                  <p className="text-gray-600">
                    Committed to comfortable, personalized treatment plans for
                    children, teens, and adults seeking orthodontic and dental
                    care in Ahmedabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="sr-only">
              Sumukh Dental Clinic Ahmedabad orthodontist profile for braces,
              Invisalign, clear aligners, and smile correction.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}