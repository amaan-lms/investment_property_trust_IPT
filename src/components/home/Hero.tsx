import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import hero from "@/assets/herobg.jpeg";

const HeroLight = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Orbs - Premium Effect */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      {/* Content Grid Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md px-5 py-2.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300">
                Premium Real Estate Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight"
            >
              Investment Property{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Trust
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed"
            >
              Four decades of institutional expertise in real estate investment, development, and portfolio management. We transform opportunities into profitable assets.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              {[
                { icon: Award, label: "40+ Years", text: "Industry Leadership" },
                { icon: TrendingUp, label: "50+ Assets", text: "Under Management" },
                { icon: Users, label: "100%", text: "Client Satisfaction" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="font-bold text-white">{item.label}</div>
                      <div className="text-sm text-slate-400">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 rounded-lg font-semibold shadow-2xl shadow-blue-500/40 group"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-slate-600 text-black hover:bg-slate-800/50 hover:border-blue-400 px-8 py-6 rounded-lg font-semibold backdrop-blur transition-all hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-slate-500 mt-8"
            >
              Trusted by institutional investors and high-net-worth individuals worldwide
            </motion.p>
          </motion.div>

          {/* Right Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Image Container with Premium Border */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <img
                src={hero}
                alt="Investment properties"
                className="w-full h-96 object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-700/50 p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <div className="text-white font-bold">100%</div>
                    <div className="text-xs text-slate-400">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-blue-500/20 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-blue-500/20 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLight;
