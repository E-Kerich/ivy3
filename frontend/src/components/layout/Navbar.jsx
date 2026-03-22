import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
    { label: "Home", link: "/"},
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          onClick={handleLinkClick}
        >
          
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Ivy 3
            </p>
            <p className="text-base font-semibold tracking-tight text-gray-800">
              Communications
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className="group relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 focus-visible:text-indigo-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-600 hover:shadow-md focus-visible:bg-indigo-600"
          >
            Request Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 pt-2">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="inline-flex w-full justify-center rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-600 hover:shadow-md"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;