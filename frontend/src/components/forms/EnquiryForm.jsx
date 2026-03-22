import { useState } from "react";
import { submitEnquiry } from "../../services/enquiryService";
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Mail, 
  Building2, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

const initialState = {
  fullName: "",
  email: "",
  organization: "",
  message: "",
};

const EnquiryForm = () => {
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
        response?.message || "Enquiry submitted successfully. We'll get back to you within 24 hours."
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

  const inputFields = [
    { name: "fullName", label: "Full Name", type: "text", icon: User, placeholder: "John Doe", required: true },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "john@example.com", required: true },
    { name: "organization", label: "Organization", type: "text", icon: Building2, placeholder: "Organization name", required: false },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-50 blur-3xl" />
      
      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Header Section */}
        <div className="mb-8 border-b border-gray-100 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Send an enquiry
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Have a question or want to start a conversation? Fill in your details
            and send your enquiry. We'll respond within 24 hours.
          </p>
        </div>

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mb-6 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-green-800">Success!</p>
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 px-4 py-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-red-800">Error</p>
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {inputFields.map((field) => {
              const Icon = field.icon;
              const isFocused = focusedField === field.name;
              
              return (
                <div key={field.name} className="relative">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Icon className={`h-5 w-5 transition-colors duration-200 ${
                        isFocused ? "text-indigo-500" : "text-gray-400"
                      }`} />
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField("")}
                      required={field.required}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:shadow-md"
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-4">
                <MessageSquare className={`h-5 w-5 transition-colors duration-200 ${
                  formData.message ? "text-indigo-500" : "text-gray-400"
                }`} />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:shadow-md resize-none"
                placeholder="Tell us how we can help. What are your goals, challenges, or questions?"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs text-gray-500">Response within 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs text-gray-500">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs text-gray-500">No spam, ever</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;