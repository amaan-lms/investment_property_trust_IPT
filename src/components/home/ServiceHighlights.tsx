import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Factory, Building, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Expert residential real estate development from acquisition to sale.",
    color: "bg-blue-500",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Light-industrial land acquisition and warehouse development.",
    color: "bg-emerald-500",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Commercial property acquisition for long-term office leasing.",
    color: "bg-violet-500",
  },
  {
    icon: Building2,
    title: "Multi-Residential",
    description: "Multi-residential building acquisition and property leasing.",
    color: "bg-amber-500",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential developments to commercial properties, we deliver 
            excellence across every sector of real estate.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;