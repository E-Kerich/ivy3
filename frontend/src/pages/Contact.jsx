import { useEffect, useState } from "react";
import { submitEnquiry } from "../services/enquiryService";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Twitter
} from "lucide-react";


const initialState = {
  fullName: "",
  email: "",
  organization: "",
  message: "",
};

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await submitEnquiry(formData);
      setSuccessMessage(
        response?.message || "Enquiry submitted successfully. We'll be in touch within 24 hours."
      );
      setFormData(initialState);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong while submitting your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ivy3communications.com",
      link: "mailto:info@ivy3communication.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (202) 641-2766",
      link: "tel:+12026412766",
      description: "Mon-Fri, 9am-5pm EST"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Global Advisory",
      description: "Serving clients worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "For urgent matters, please call"
    }
  ];

  const inputFields = [
    { name: "fullName", label: "Full Name", type: "text", icon: null, placeholder: "John Doe", required: true },
    { name: "email", label: "Email Address", type: "email", icon: null, placeholder: "john@example.com", required: true },
    { name: "organization", label: "Organization", type: "text", icon: null, placeholder: "Organization name", required: false },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact us - Strategic communications"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/75" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
              <Mail className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Get in Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-tight text-white">
              Let's start a conversation
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-white to-gray-50/50 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="mb-6 md:mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 mb-4">
                    <Mail className="h-4 w-4 text-indigo-500" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                      Contact Information
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                    Connect with us
                  </h2>
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
                    We'd love to hear from you. Choose the best way to reach out
                    and we'll respond as quickly as possible.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.title}
                        className="group rounded-2xl bg-white p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            <Icon className="h-5 w-5 md:h-6 md:w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm md:text-base">{info.title}</h4>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors break-all"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-sm font-medium text-gray-900 break-all">{info.details}</p>
                            )}
                            <p className="mt-1 text-xs md:text-sm text-gray-500">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-0 right-0 h-24 w-24 md:h-32 md:w-32 rounded-full bg-indigo-50 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-24 w-24 md:h-32 md:w-32 rounded-full bg-purple-50 blur-3xl" />
                
                <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="mb-6 md:mb-8">
                    <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                      Send an Enquiry
                    </p>
                    <h2 className="mt-2 md:mt-3 text-xl md:text-2xl font-semibold text-gray-900">
                      How can we help?
                    </h2>
                    <p className="mt-3 md:mt-4 text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                      Fill in your details and share your inquiry. We'll review
                      and get back to you within 24 hours.
                    </p>
                  </div>

                  {successMessage && (
                    <div className="mb-6 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-3 md:px-4 md:py-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-green-800">Success!</p>
                          <p className="text-xs md:text-sm text-green-700">{successMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 px-3 py-3 md:px-4 md:py-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-red-800">Error</p>
                          <p className="text-xs md:text-sm text-red-700">{errorMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
                      {inputFields.map((field) => (
                        <div key={field.name}>
                          <label className="mb-1.5 md:mb-2 block text-xs md:text-sm font-medium text-gray-700">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField("")}
                            required={field.required}
                            className={`w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:shadow-md ${
                              focusedField === field.name ? "border-indigo-500 bg-white shadow-md" : ""
                            }`}
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="mb-1.5 md:mb-2 block text-xs md:text-sm font-medium text-gray-700">
                        Message <span className="text-red-500 ml-1">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:shadow-md resize-none"
                        placeholder="Tell us how we can help. Include any relevant details about your needs, timeline, or goals."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-5 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <svg className="h-4 w-4 md:h-5 md:w-5 animate-spin" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <Send className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform duration-500 group-hover:translate-x-0" />
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;