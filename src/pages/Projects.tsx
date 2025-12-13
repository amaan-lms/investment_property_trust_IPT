import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin } from "lucide-react";
import res from "@/assets/residential.jpg"
import war from "@/assets/warehouse.jpg"
import la from "@/assets/la2.jpg"

const categories = ["All", "Residential", "Industrial", "Commercial", "Multi-Residential"];

const projects = [
  {
    id: 1,
    title: " Residential",
    category: "Residential",
    // location: "Bellingham, WA",
    description: "Luxury waterfront residential development with 48 units.",
    image: res
  },
  {
    id: 2,
    title: "Warehouse",
    category: "Industrial",
    // location: "Seattle, WA",
    description: "150,000 sq ft modern logistics warehouse facility.",
    image: war
  },
  {
    id: 3,
    title: "Commercial",
    category: "Commercial",
    // location: "Portland, OR",
    description: "Class A office building with 200,000 sq ft of premium space.",
    image: la
  },
  // {
  //   id: 4,
  //   title: "Harbor View Apartments",
  //   category: "Multi-Residential",
  //   location: "Tacoma, WA",
  //   description: "120-unit apartment complex with waterfront amenities.",
  //   image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  // },
  // {
  //   id: 5,
  //   title: "Evergreen Business Park",
  //   category: "Commercial",
  //   location: "Vancouver, WA",
  //   description: "Multi-tenant commercial campus spanning 15 acres.",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  // },
  // {
  //   id: 6,
  //   title: "Mountain Ridge Estates",
  //   category: "Residential",
  //   location: "Spokane, WA",
  //   description: "Premium single-family home development with 32 lots.",
  //   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  // },
  // {
  //   id: 7,
  //   title: "Northwest Logistics Hub",
  //   category: "Industrial",
  //   location: "Kent, WA",
  //   description: "State-of-the-art fulfillment center with rail access.",
  //   image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
  // },
  // {
  //   id: 8,
  //   title: "Urban Living Lofts",
  //   category: "Multi-Residential",
  //   location: "Seattle, WA",
  //   description: "Modern urban apartments in the heart of Capitol Hill.",
  //   image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  // },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Featured Projects
            </h1>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
              Explore our diverse portfolio of residential, commercial, industrial,
              and multi-residential developments across the Pacific Northwest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-accent"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>

                      
                    </div>
                  </div>
                </motion.div>
              ))}

            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;