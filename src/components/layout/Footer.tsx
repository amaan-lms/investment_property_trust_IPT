import { Link } from "react-router-dom";
import { Phone, Globe, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Investment Property Trust</h3>
            <p className="text-background/70 leading-relaxed">
              Over 40 years of excellence in real estate acquisition, 
              development, and property management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-background/70 hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-background/70 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/team" className="text-background/70 hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">
                Contact
              </Link>
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
                <span>Pacific Northwest</span>
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
              <span>40+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;