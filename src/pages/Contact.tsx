import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  AtSign,
  MessageSquare,
  Link as LinkIcon,
} from "lucide-react";
import { businessHours, contactInfo } from "../data/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      
      <section className="relative overflow-hidden bg-gray-800 text-white pt-32 pb-24">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative px-6 text-center">
          <span className="inline-block rounded-full border border-blue-700 bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white">
            Contact Us
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let's Start a
            <span className="block text-gray-300">Conversation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Have a project in mind or just want to say hello? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
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
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900"
                      />
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
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900"
                      />
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
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900"
                    />
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
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-300 focus:border-gray-900"
                    />
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

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5">
                <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
                <div className="mt-5 flex gap-3">
                  {[LinkIcon, MessageSquare, AtSign].map((SocialIcon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label="Social media link"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                    >
                      <SocialIcon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="pb-20 bg-white">
        <div className="container-custom px-6">
          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gray-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25">
                <MapPin className="h-8 w-8" />
              </div>
              <p className="text-lg font-bold text-gray-900">
                Find Us on the Map
              </p>
              <p className="text-sm text-gray-500">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;