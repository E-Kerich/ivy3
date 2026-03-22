import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Globe, 
  Briefcase, 
  Users, 
  Target,
  Heart,
  TrendingUp
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Strategic communications background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/75" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                About Ivy 3 Communications
              </span>
            </div>

            

            

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-service"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-500 hover:scale-105"
              >
                Request Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://calendly.com/ivy3communication/30min?month=2026-03"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        
      </section>

      {/* Mission & Approach Section */}
      <section className="bg-white py-5 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5">
                
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                A personalized way of working that delivers real outcomes
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                At the center of the practice is a personalized way of working.
                That matters because institutions do not all face the same
                communications realities. Some need sharper strategic direction.
                Others need stronger public positioning, more thoughtful advocacy,
                or a steadier hand during sensitive moments.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Ivy 3 Communications approaches this work with depth, discretion,
                and a clear focus on measurable outcomes. The goal is not just to
                say the right things. It is to help organizations build trust,
                strengthen credibility, and communicate in a way that supports
                their broader mission.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="group rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CheckCircle className="h-4 w-4 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Focus</h3>
                <p className="mt-2 text-gray-600">
                  Advisory for institutions shaping impact across development,
                  philanthropy, and global partnerships.
                </p>
              </div>

              <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CheckCircle className="h-4 w-4 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Approach</h3>
                <p className="mt-2 text-gray-600">
                  Personalized, strategic, and grounded in real outcomes. Every
                  engagement is tailored to the institution and its unique
                  challenges.
                </p>
              </div>

              <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CheckCircle className="h-4 w-4 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Strength</h3>
                <p className="mt-2 text-gray-600">
                  Reputation, influence, and clear institutional positioning that
                  builds trust and credibility over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* What Sets Us Apart Section */}
      <section className="bg-white border-t border-gray-200 py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5">
              
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                What Sets Us Apart
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Strategic Thinking</h3>
              <p className="mt-3 text-gray-600">
                Communications support shaped by context, stakeholder awareness,
                and long-term positioning rather than quick fixes.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personalized Delivery</h3>
              <p className="mt-3 text-gray-600">
                Every engagement is tailored to the institution, the challenge,
                and the intended outcome. No generic solutions.
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Measurable Results</h3>
              <p className="mt-3 text-gray-600">
                The work is designed to create clarity, strengthen credibility,
                and support real decision-making with tangible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section - Sleek with Single Image */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-5 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5">
                <Users className="h-4 w-4 text-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  Who We Serve
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by institutions that shape impact
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Ivy 3 Communications works with organizations that understand the
                value of strong communications. Our clients include:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Development institutions driving meaningful change",
                  "Philanthropic organizations seeking to maximize impact",
                  "Academic institutions navigating complex landscapes",
                  "Global partners operating across borders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 group">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>

              
            </div>

            {/* Single Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Global institutions and partnerships"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent" />
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 p-8 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
            </div>

            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
                  Let's connect
                </p>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Looking for strategic communications support with depth and
                  credibility?
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Start the conversation and explore how Ivy 3 Communications can
                  support your organization's priorities.
                </p>
              </div>

              <div className="mt-8 lg:mt-0 lg:shrink-0">
                <a
                  href="https://calendly.com/ivy3communication/30min?month=2026-03"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;