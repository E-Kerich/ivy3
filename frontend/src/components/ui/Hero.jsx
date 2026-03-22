import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles, Play, Shield, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gray-100/60 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/30 blur-3xl" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-15">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm backdrop-blur-sm shadow-sm">
              
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Trusted by global institutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">
              Strategic communications for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                  institutions
                </span>
                <svg
                  className="absolute -bottom-2 left-0 right-0 z-0 h-4 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6C40 2 80 10 120 6C160 2 200 10 200 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-indigo-300"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              that need clarity, trust, and influence.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 animate-fade-in-up animation-delay-100">
              Ivy 3 Communications supports development institutions,
              philanthropic organizations, and global partners with strategic
              communications, advocacy, reputation management, media relations,
              storytelling, and crisis communications.
            </p>

            {/* CTA Buttons - Improved Alignment */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200"
              >
                <span className="relative z-10">Request Consultation</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-indigo-400 hover:bg-gray-50 hover:text-indigo-600 hover:shadow-md"
              >
                Explore Services
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            
           
          </div>

          {/* Right Column - Enhanced Cards */}
          <div className="relative lg:justify-self-end animate-fade-in-right">
            <div className="relative rounded-3xl bg-white/90 p-3 shadow-2xl backdrop-blur-sm">
              <div className="grid gap-6">
                {/* Featured Card with Stats */}
                
                {/* Expertise Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-50 blur-2xl transition-all duration-500 group-hover:scale-150" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                    Core Expertise
                  </p>
                  <div className="relative mt-3 flex flex-wrap gap-2">
                    {["Reputation Management", "Advocacy", "Crisis Comms", "Storytelling", "Media Relations", "Strategic Advisory"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Combined Reach & Approach Card */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-50 blur-2xl transition-all duration-500 group-hover:scale-150" />
                    <Globe className="relative h-6 w-6 text-indigo-500 mb-3" />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                      Global Reach
                    </p>
                    <p className="relative mt-2 text-sm leading-6 text-gray-700">
                      Experience across Africa, Europe, and the United States
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                      Our Approach
                    </p>
                    <p className="relative mt-2 text-sm leading-6 text-gray-200">
                      Personalized support built around clear strategy, credible
                      positioning, and measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-dashed border-gray-200" />
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-indigo-100/50 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;