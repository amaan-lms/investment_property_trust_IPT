import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Robert Mitchell",
    title: "Chief Executive Officer",
    bio: "With over 35 years in real estate development, Robert has led Investment Property Trust through decades of growth and success across residential and commercial sectors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    title: "Chief Operating Officer",
    bio: "Sarah oversees all operational aspects of our portfolio, bringing 25 years of property management expertise to ensure excellence in every project.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Director of Acquisitions",
    bio: "Michael leads our acquisition strategy, identifying high-value opportunities across the Pacific Northwest with a track record of 200+ successful transactions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Jennifer Walsh",
    title: "Director of Development",
    bio: "Jennifer manages all development projects from conception to completion, ensuring quality construction and timely delivery across our portfolio.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "David Rodriguez",
    title: "Head of Commercial Leasing",
    bio: "David specializes in commercial tenant relationships, maintaining high occupancy rates and fostering long-term partnerships with premier businesses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Amanda Foster",
    title: "Lead Realtor",
    bio: "Amanda heads our in-house realtor team, providing expert guidance on all transactions and ensuring seamless execution for buyers and sellers alike.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
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
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              40 Years of Leadership
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Meet the experienced professionals behind Investment Property Trust. 
              Our team combines decades of expertise with a passion for real estate excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over four decades, Investment Property Trust has been built on a foundation 
              of integrity, expertise, and dedication to our clients. Our team brings together 
              diverse talents and perspectives, united by a shared commitment to delivering 
              exceptional results in every real estate venture we undertake.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">40+</div>
                <div className="text-muted-foreground">Years Combined Leadership</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Client Commitment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">In-House</div>
                <div className="text-muted-foreground">Expert Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated professionals driving Investment Property Trust's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Social Links (visible on hover) */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {member.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
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
              Work With Our Team
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to discuss your real estate goals? Our experienced team is here to help.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get in Touch
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

export default Team;