import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/data";
import Logo from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isBlogPostPage = location.pathname.startsWith("/blog/");
  const isContentPage = ["/about", "/services", "/blog", "/contact"].includes(
    location.pathname
  );
  const isLightHeader = scrolled || isBlogPostPage || isContentPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm shadow-gray-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-custom flex items-center justify-between px-6">
        <div>
          <Logo isLight={isLightHeader} />
        </div>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <RouterNavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isLightHeader
                      ? isActive
                        ? "text-gray-900"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                      : isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  } after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:${isLightHeader ? "bg-gray-900" : "bg-white"} after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm px-6 py-3">
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
            isLightHeader
              ? "bg-gray-900/5 text-gray-900 hover:bg-gray-900/10"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom px-6">
          <div className="flex flex-col gap-1 rounded-2xl bg-white/95 backdrop-blur-xl p-4 shadow-xl shadow-gray-900/10">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 justify-center text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;