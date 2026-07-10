import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { businessHours, contactInfo } from "../data/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitted(false);
      return;
    }

    setFormErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      
      <section className="relative overflow-hidden bg-white pt-32 pb-24 text-gray-900">
        <div className="container-custom relative px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white px-8 py-10 text-center shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 sm:px-12 sm:py-14">
            <span className="inline-block rounded-full border border-blue-700 bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white">
              Contact Us
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Let's Start a
              <span className="block text-gray-600">Conversation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Have a project in mind or just want to say hello? We'd love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white p-6 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 lg:p-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl shadow-gray-900/5 sm:p-10">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900 ${
                          formErrors.name ? "border-red-400 focus:border-red-500" : "border-gray-200"
                        } bg-white`}
                        aria-invalid={!!formErrors.name}
                      />
                      {formErrors.name && (
                        <p className="mt-2 text-sm text-red-600">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full rounded-xl border px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900 ${
                          formErrors.email ? "border-red-400 focus:border-red-500" : "border-gray-200"
                        } bg-white`}
                        aria-invalid={!!formErrors.email}
                      />
                      {formErrors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900 ${
                        formErrors.subject ? "border-red-400 focus:border-red-500" : "border-gray-200"
                      } bg-white`}
                    />
                    {formErrors.subject && (
                      <p className="mt-2 text-sm text-red-600">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900 ${
                        formErrors.message ? "border-red-400 focus:border-red-500" : "border-gray-200"
                      } bg-white`}
                    />
                    {formErrors.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>

                  {submitted && (
                    <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}
                </form>
              </div>
            </div>

            
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5">
                <h3 className="text-lg font-bold text-gray-900">
                  Contact Information
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Our Office
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Phone Number
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email Address
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="mt-6 space-y-3">
                  {businessHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {item.day}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

      
      <section className="pb-20 bg-white">
        <div className="container-custom px-6">
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.587043558445!2d87.26474557572887!3d26.66170137679772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d001adcd50d%3A0x81e065f0034706e2!2sYouth%20IT!5e0!3m2!1sen!2snp!4v1783676580460!5m2!1sen!2snp"
              className="h-96 w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;