import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Globe, MapPin, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png"

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
    <footer className="bg-foreground text-background relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4 text-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-24 h-24 object-contain mx-auto"
            />


            <p className="text-background/70 leading-relaxed">
             Over 40 years of real estate and property management expertise.
            </p>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-background/70 hover:text-primary transition-colors">Services</Link>
              <Link to="/projects" className="text-background/70 hover:text-primary transition-colors">Projects</Link>
              <Link to="/team" className="text-background/70 hover:text-primary transition-colors">Our Team</Link>
              <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-background/70">Residential Development</span>
              <span className="text-background/70">Industrial Acquisition</span>
              <span className="text-background/70">Commercial Leasing</span>
              <span className="text-background/70">Multi-Residential</span>
              <span className="text-background/70">Realtor Services</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:360-303-9000"
                className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>360-303-9000</span>
              </a>

              <a
                href="https://investmentpropertytrust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors"
              >
                <Globe size={18} />
                <span>investmentpropertytrust.com</span>
              </a>

              <div className="flex items-center space-x-3 text-background/70">
                <MapPin size={18} />
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Investment Property Trust. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <Link to="/team" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Terms and Conditions</Link>
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
