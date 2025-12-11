import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "40+",
    label: "Years of Excellence",
    description: "Trusted industry leader since 1984",
  },
  {
    icon: Users,
    value: "In-House",
    label: "Realtor Team",
    description: "Dedicated professionals at your service",
  },
  {
    icon: TrendingUp,
    value: "Full-Service",
    label: "Property Management",
    description: "End-to-end real estate solutions",
  },
  {
    icon: Shield,
    value: "Proven",
    label: "Track Record",
    description: "Consistent results across decades",
  },
];

const ExperienceBadge = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            Why Investment Property Trust
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Four Decades of Building Trust
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            With over 40 years in real estate acquisition, development, leasing, 
            and property management, we bring unmatched expertise to every project.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <p className="text-white/70 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceBadge;