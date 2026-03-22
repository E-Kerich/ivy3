import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  AlertTriangle,
  Megaphone,
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  Globe,
  Star,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Strategic Communications",
    description:
      "Clear communication strategies that align messaging with institutional goals and stakeholder expectations.",
    fullDescription:
      "We develop comprehensive communication frameworks that ensure your message resonates with key audiences. Our strategic approach combines stakeholder analysis, message development, and channel optimization to deliver impact.",
    image:
      "/assets/6.jpg",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-500",
    benefits: [
      "Aligned messaging across all channels",
      "Clear stakeholder communication plans",
      "Measurable communication outcomes",
      "Enhanced brand positioning",
    ],
  },
  {
    id: 2,
    title: "Advocacy",
    description:
      "Thoughtful advocacy support designed to strengthen voice, influence, and engagement around key issues.",
    fullDescription:
      "We help organizations build effective advocacy strategies that influence policy, shape public opinion, and drive meaningful change. Our approach combines research, stakeholder mapping, and strategic engagement.",
    image:
      "/assets/4.jpg",
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Policy influence strategies",
      "Stakeholder engagement plans",
      "Coalition building support",
      "Impact measurement frameworks",
    ],
  },
  {
    id: 3,
    title: "Reputation Management",
    description:
      "Positioning and advisory support that helps organizations build trust and protect credibility over time.",
    fullDescription:
      "We provide strategic reputation management services that help organizations build, maintain, and protect their credibility. Our approach focuses on proactive positioning and responsive crisis preparedness.",
    image:
      "/assets/2.jpg",
    icon: Shield,
    color: "from-green-500 to-teal-500",
    benefits: [
      "Reputation audits and assessments",
      "Strategic positioning frameworks",
      "Stakeholder trust building",
      "Crisis preparedness planning",
    ],
  },
  {
    id: 4,
    title: "Crisis Communications",
    description:
      "Calm, strategic communication support for sensitive moments where clarity and confidence matter most.",
    fullDescription:
      "We help organizations navigate sensitive moments with confidence. Our crisis communication services provide rapid response, strategic guidance, and reputation protection when you need it most.",
    image:
      "/assets/1.jpg",
    icon: AlertTriangle,
    color: "from-orange-500 to-red-500",
    benefits: [
      "Rapid response protocols",
      "Crisis communication plans",
      "Media training for spokespersons",
      "Post-crisis reputation recovery",
    ],
  },
  {
    id: 5,
    title: "Media Relations",
    description:
      "Media engagement strategies that help shape narratives and improve visibility with the right audiences.",
    fullDescription:
      "We develop strategic media relations programs that build lasting relationships with key journalists and influencers. Our approach ensures your stories reach the right audiences through the right channels.",
    image:
      "/assets/3.jpg",
    icon: Megaphone,
    color: "from-cyan-500 to-blue-500",
    benefits: [
      "Media strategy development",
      "Press release and materials",
      "Media training and preparation",
      "Media monitoring and analysis",
    ],
  },
  {
    id: 6,
    title: "Storytelling",
    description:
      "Purpose-driven storytelling that turns expertise, impact, and ideas into meaningful communication.",
    fullDescription:
      "We help organizations craft compelling narratives that connect with audiences emotionally and intellectually. Our storytelling approach transforms complex ideas into memorable, impactful messages.",
    image:
      "/assets/5.jpg",
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
    benefits: [
      "Narrative development frameworks",
      "Content strategy and creation",
      "Impact story documentation",
      "Multi-channel story distribution",
    ],
  },
];

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "50+", label: "Clients Served", icon: Users },
  { number: "3", label: "Continents", icon: Globe },
];

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white">
      {/* Hero Section - Centered with 60vh */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
            alt="Strategic communications background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />
        </div>

        {/* Hero Content - Centered */}
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Our Services
              </span>
            </div>


          

            

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Icon className="h-4 w-4 text-indigo-400" />
                    </div>
                    <p className="text-l font-semibold text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </section>

      {/* Services Grid Section */}
      <section
        id="services"
        className="bg-gradient-to-b from-white to-gray-50/50 py-8 lg:py-12"
      >
        <div className="mx-auto max-w-7xl px-3 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                What We Offer
              </span>
            </div>

           
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  to={`/request-service?service=${encodeURIComponent(
                    service.title
                  )}`}
                  className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                   
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 flex-shrink-0 text-indigo-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Click indicator instead of CTA button */}
                    <div className="mt-6 pt-2 border-t border-gray-100">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-all duration-300 group-hover:gap-3">
                        Click to request this service
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-indigo-600/0 transition-all duration-300 group-hover:bg-indigo-600/5 pointer-events-none" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-900 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5">
                
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
                  Why Ivy 3
                </span>
              </div>

              <h2 className="text-xl font-semibold tracking-tight text-white md:text-3xl">
                Why organizations trust us with their communications
              </h2>

              <p className="mt-4 text-lg text-gray-300">
               Our team understands the unique
                challenges institutions face in today&apos;s complex
                communication landscape.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "15+ years of experience across Africa, Europe, and the US",
                  "Tailored strategies that align with your specific goals",
                  "Proven track record with development institutions and global brands",
                  "Responsive support when you need it most",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                    <span className="text-gray-300 text-l">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/request-service"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500"
              >
                Request a Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl" />

              <div className="relative grid  gap-4">
               

                <div className="space-y-4">
                  <img
                    src="/assets/7.jpg"
                    alt="Strategic planning"
                    className="rounded-2xl shadow-xl"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-10 lg:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-3 text-center sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
            </div>

            <div className="relative mt-4">
              <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                Ready to elevate your communications?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-l text-gray-300">
                Let&apos;s discuss how Ivy 3 Communications can help your
                organization communicate with clarity, confidence, and impact.
              </p>

              <div className="mt-8 mb-8">
                <a
                  href="https://calendly.com/ivy3communication/30min?month=2026-03"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;