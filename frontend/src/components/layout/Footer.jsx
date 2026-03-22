import { Link } from "react-router-dom";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <Link to="/" className="group mb-4 flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Ivy 3
                </p>
                <p className="text-base font-semibold tracking-tight text-gray-800">
                  Communications
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Strategic communications, advocacy, reputation management, and
              advisory support for institutions shaping impact.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Quick Links
            </h3>
            <div className="space-y-2.5">
              {["Home", "About", "Services", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <Link
                    key={item}
                    to={path}
                    className="group block text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-indigo-600"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Contact
            </h3>

            <div className="space-y-4">
              <Link
                to="mailto:info@ivy3communications.com"
                className="group flex items-center gap-3 text-sm text-gray-600 transition-all duration-200 hover:text-indigo-600"
              >
                <FaEnvelope className="text-gray-400 transition-colors duration-200 group-hover:text-indigo-500" size={16} />
                <span>info@ivy3communications.com</span>
              </Link>

              <Link
                to="tel:+12026412766"
                className="group flex items-center gap-3 text-sm text-gray-600 transition-all duration-200 hover:text-indigo-600"
              >
                <FaPhone className="text-gray-400 transition-colors duration-200 group-hover:text-indigo-500" size={16} />
                <span>+1 (202) 641-2766</span>
              </Link>

              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Ivy 3 Communications. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;