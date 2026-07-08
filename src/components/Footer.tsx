import { Link } from "react-router-dom";
import { AtSign, Mail, MessageSquare, Link as LinkIcon, ArrowRight } from "lucide-react";
import { navLinks, services } from "../data/data";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              A modern digital agency helping ambitious brands design, build,
              and grow exceptional digital products.
            </p>
            <div className="mt-6 flex gap-3">
              {[LinkIcon, MessageSquare, AtSign].map((SocialIcon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
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
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-900"
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
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-900"
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
            <p className="mt-5 text-sm text-gray-400">
              Subscribe for occasional updates on new work and practical
              web tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-blue-400"
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
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 sm:flex-row">
          <p>© {year} NexaCMS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;