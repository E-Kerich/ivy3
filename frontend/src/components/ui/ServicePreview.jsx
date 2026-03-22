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
  
];



const ServicesPreview = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white">
      {/* Hero Section - Centered with 60vh */}
     

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

      

      
    </div>
  );
};

export default ServicesPreview;