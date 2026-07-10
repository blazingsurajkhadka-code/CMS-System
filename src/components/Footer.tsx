import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { navLinks, services } from "../data/data";
import Logo from "./Logo";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const year = new Date().getFullYear();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError("Please enter your email address.");
      setNewsletterMessage("");
      return;
    }

    if (!validateEmail(newsletterEmail)) {
      setNewsletterError("Please enter a valid email address.");
      setNewsletterMessage("");
      return;
    }

    setNewsletterError("");
    setNewsletterMessage("Subscribed successfully!");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterMessage(""), 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A modern digital agency helping ambitious brands design, build,
              and grow exceptional digital products.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-slate-400">
              Subscribe for occasional updates on new work and practical
              web tips.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setNewsletterError("");
                  }}
                  placeholder="Your email"
                  className={`w-full rounded-xl border py-3 pl-10 pr-3 text-sm text-white caret-blue-400 placeholder-slate-400 outline-none transition-colors duration-300 focus:border-blue-400 ${
                    newsletterError
                      ? "border-red-400 bg-slate-900/90"
                      : "border-white/20 bg-slate-900/80"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {newsletterError && (
              <p className="mt-3 text-sm text-red-400">{newsletterError}</p>
            )}
            {newsletterMessage && (
              <p className="mt-3 text-sm text-green-400">
                {newsletterMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} NexaCMS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;