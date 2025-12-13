import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Home,
  Factory,
  Building,
  Building2,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Real Estate Development",
    description: "We specialize in acquiring, developing, and selling residential properties. Our experienced team handles every aspect of the development process, from site selection and acquisition to construction oversight and final sale.",
    features: [
      "Strategic property acquisition",
      "Custom development planning",
      "Quality construction oversight",
      "Efficient project management",
      "Profitable exit strategies",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Factory,
    title: "Industrial Land Acquisition & Warehouse Construction",
    description: "We identify and acquire light-industrial land strategically positioned for warehouse development. Our expertise ensures optimal site selection and efficient construction of modern logistics facilities.",
    features: [
      "Strategic land identification",
      "Zoning and permitting expertise",
      "Modern warehouse design",
      "Construction management",
      "Tenant acquisition support",
    ],
    color: "bg-emerald-500",
  },
  {
    icon: Building,
    title: "Commercial Property Acquisition & Office Leasing",
    description: "Our commercial division focuses on acquiring quality office properties for long-term leasing. We maintain and manage these assets to provide stable, recurring income streams.",
    features: [
      "Prime location selection",
      "Value-add opportunities",
      "Professional tenant relations",
      "Building maintenance excellence",
      "Lease optimization strategies",
    ],
    color: "bg-violet-500",
  },
  {
    icon: Building2,
    title: "Multi-Residential Property Acquisition & Leasing",
    description: "We acquire and manage multi-residential buildings, providing quality housing while generating consistent returns. Our management approach prioritizes tenant satisfaction and property value preservation.",
    features: [
      "Apartment complex acquisition",
      "Value enhancement programs",
      "Professional property management",
      "Tenant retention focus",
      "Ongoing capital improvements",
    ],
    color: "bg-amber-500",
  },
  {
    icon: Users,
    title: "In-House Realtor Support Team",
    description: "Our dedicated in-house realtor staff supports all transactions across our portfolio. This integrated approach ensures seamless execution and consistent quality in every deal we undertake.",
    features: [
      "Dedicated transaction support",
      "Market analysis expertise",
      "Negotiation excellence",
      "Due diligence coordination",
      "Closing process management",
    ],
    color: "bg-rose-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-300  to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-blue-900 rounded-full px-4 py-2 text-blue-900 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Comprehensive Real Estate Solutions
            </h1>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
              From residential developments to industrial warehouses, we deliver
              full-service real estate expertise backed by over 40 years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden relative">
                    <div className={`absolute inset-0 ${service.color} opacity-10`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-muted-foreground/20" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <p className="text-sm text-muted-foreground mb-1">Service Area</p>
                        <p className="font-semibold text-foreground">{service.title.split(' ')[0]}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact our team to discuss how we can help with your real estate needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;