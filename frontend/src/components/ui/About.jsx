import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Briefcase, GraduationCap } from "lucide-react";

const AboutPreview = () => {
  const continents = [
    { 
      name: "Africa", 
      color: "from-amber-500 to-orange-500", 
      image: "/assets/af.jpg",
      alt: "Map of Africa"
    },
    { 
      name: "Europe", 
      color: "from-blue-500 to-indigo-500", 
      image: "/assets/e.jpg",
      alt: "Map of Europe"
    },
    { 
      name: "United States", 
      color: "from-red-500 to-blue-500", 
      image: "/assets/us.jpg",
      alt: "Map of United States"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 py-8 lg:px-8 lg:py-15">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-12">
          {/* Left Column - Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                About Us
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              A trusted advisory partner with global experience and a sharp
              understanding of influence.
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                Ivy 3 Communications is led by Thoko Moyo, a seasoned C-suite
                advisor and strategist who has worked across Africa, Europe, and the
                United States. Her background spans development institutions,
                academic institutions, and globally respected brands.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                The work is rooted in a personalized approach that helps
                organizations communicate with confidence, strengthen reputation,
                and deliver measurable results where it matters most.
              </p>
            </div>

            

            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:shadow-indigo-200"
              >
                Learn More About Us
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Cards with Images */}
          <div className="space-y-6">
            {/* Leader Card with Photo */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
              
            </div>

            {/* Continents Card with Map Images */}
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-500" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Global Footprint
                </p>
              </div>
              
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {continents.map((continent) => (
                  <div
                    key={continent.name}
                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <div className="relative h-32 w-full overflow-hidden">
                      <img
                        src={continent.image}
                        alt={continent.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3">
                        <p className="text-sm font-semibold text-white">{continent.name}</p>
                        <div className={`mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r ${continent.color}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Sectors
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  Development institutions, academic institutions, and global
                  brands.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Regions
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  Africa, Europe, and the United States.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;