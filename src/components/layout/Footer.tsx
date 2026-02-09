import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Globe, MapPin, ArrowUp, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo22.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* Show scroll-to-top button on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-blue-50 text-slate-800 relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="text-center space-y-2">
            <img
              src={logo}
              alt="Investment Property Trust Logo"
              className="w-28 h-auto object-contain mx-auto"
            />
            <h3 className="text-xl font-semibold font-serif text-blue-900 leading-tight m-0">
              <span className="block">Investment</span>
              <span className="block">Property</span>
              <span className="block">Trust</span>
            </h3>

            <p className="text-slate-600 leading-relaxed mt-2">
              Over 40 years of real estate and property management expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/team", label: "Our Team" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-900">
              Our Services
            </h4>
            <nav className="flex flex-col space-y-2 text-slate-600">
              <span>Residential Development</span>
              <span>Industrial Acquisition</span>
              <span>Commercial Leasing</span>
              <span>Multi-Residential</span>
              <span>Realtor Services</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-900">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:360-303-9000"
                className="flex items-center space-x-3 text-slate-600 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>775-552-9163</span>
              </a>

              <a
                href="https://investmentpropertytrust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-600 hover:text-primary transition-colors"
              >
                <Globe size={18} />
                <span>investmentpropertytrust.com</span>
              </a>
              <a
                href="mailto:trustee@investmentpropertytrust.com"
                className="flex items-center space-x-3 text-slate-600 hover:text-primary transition-colors text-sm"
              >
                <Mail size={18} />
                <span>trustee@investmentpropertytrust.com</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-600">
                <MapPin size={18} />
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {currentYear} Investment Property Trust. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/Privacypolicy"
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/TermsAndCondition"
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
