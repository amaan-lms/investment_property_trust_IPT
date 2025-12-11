import { motion } from "framer-motion";
import { CheckCircle, Clock, Handshake, Target, Briefcase, Star } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "40+ Years Experience",
    description: "Decades of proven expertise in all facets of real estate investment and management.",
  },
  {
    icon: Briefcase,
    title: "In-House Realtor Team",
    description: "Our dedicated realtor staff supports and executes all transactions seamlessly.",
  },
  {
    icon: Target,
    title: "Full-Service Approach",
    description: "From acquisition to development to leasing, we handle every aspect of your investment.",
  },
  {
    icon: Handshake,
    title: "Client-Focused",
    description: "We build lasting relationships through transparency, integrity, and results.",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "Consistent success across residential, commercial, industrial, and multi-residential sectors.",
  },
  {
    icon: CheckCircle,
    title: "Expert Management",
    description: "Professional property management that maximizes value and minimizes hassle.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in Real Estate
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Investment Property Trust combines decades of experience with 
              comprehensive in-house capabilities. Our integrated approach 
              ensures seamless execution from property identification through 
              development and long-term management.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {["Expert acquisition strategies", "In-house development teams", "Professional property management", "Dedicated realtor support"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;