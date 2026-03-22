import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageSquare, ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-15">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Decorative Glow Effect */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          
          <div className="relative px-4 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left Column - Content */}
              <div className="max-w-3xl">
                {/* Badge with Icon */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 backdrop-blur-sm px-4 py-2 border border-indigo-400/30">
                  <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                    Ready to connect?
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Let's discuss how Ivy 3 Communications can support your next 
                  <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    strategic priority
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-6 text-lg leading-relaxed text-gray-300">
                  Whether you need communications advisory, reputation support,
                  advocacy strategy, or guidance during high-stakes moments, the
                  next step starts with a conversation.
                </p>

                
              </div>

              {/* Right Column - CTA Buttons */}
              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
                >
                  <span className="relative z-10">Request Consultation</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-500 group-hover:translate-x-0" />
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
                >
                  Explore Our Services
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Quick Contact Info */}
                <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
                  <MessageSquare className="h-4 w-4" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;