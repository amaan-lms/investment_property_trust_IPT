import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import hero from "@/assets/herobg.jpeg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,

        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95  to-blue-900/60" />

      {/* Subtle grid / noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-10 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <Building2 className="w-4 h-4 text-white" />
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">
                Guiding You to the Perfect Property
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-4"
            >
              Investment Property Trust
              <span className="mt-4 block text-xl md:text-2xl lg:text-3xl font-normal text-slate-100/80">
                40+ Years of Real Estate Excellence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-base md:text-lg text-slate-100/80 mb-8 max-w-xl leading-relaxed"
            >
              We purchase, develop, and manage residential, commercial, industrial,
              and multi-residential properties with decades of proven expertise and
              an in-house team of dedicated professionals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 text-sm md:text-base px-7 py-6 rounded-xl font-semibold shadow-lg shadow-slate-900/40"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/60 text-white hover:bg-white/10 bg-transparent text-sm md:text-base px-7 py-6 rounded-xl font-semibold"
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/15 max-w-md"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  40+
                </div>
                <div className="text-xs md:text-sm text-slate-100/70 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  500+
                </div>
                <div className="text-xs md:text-sm text-slate-100/70 mt-1">
                  Properties Managed
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  100%
                </div>
                <div className="text-xs md:text-sm text-slate-100/70 mt-1">
                  Client Focused
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visual accent (optional overlay card) */}
         <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.18 }}
  className="hidden lg:flex justify-end"
>
  <div className="relative w-full max-w-xl group">
    {/* Animated glassmorphism background */}
    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 via-blue-500/15 to-blue-500/20 backdrop-blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

    {/* Shine effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm" />

    {/* Main card */}
    <div className="relative bg-gradient-to-br to-blue-950/95 from-blue-900/60 backdrop-blur-2xl rounded-3xl border border-white/20 p-10 shadow-2xl overflow-hidden group-hover:shadow-emerald-500/25 transition-all duration-500 hover:-translate-y-2">

      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/40 rounded-full opacity-60 animate-ping" />
      <div className="absolute bottom-6 left-6 w-3 h-3 bg-sky-400/30 rounded-full opacity-50 animate-pulse delay-1000" />

      {/* Quote with accent */}
      <div className="relative mb-10">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/10 to-sky-400/10 rounded-2xl blur opacity-75" />
        <blockquote className="relative text-2xl leading-relaxed text-white/95 font-light italic bg-blue-950/50 backdrop-blur-sm rounded-2xl px-8 py-6 border-l-4 border-emerald-400/40">
          Decades of disciplined investing and hands-on management across residential, commercial, industrial, and multi-residential assets.
        </blockquote>
      </div>

      {/* Premium stats */}
      <div className="grid grid-cols-2 gap-12 items-end pt-8 border-t border-white/10 relative">
        {/* Vertical gradient divider behind stats */}
        <div className="absolute top-24 bottom-0 col-start-2 col-span-1 w-px mx-auto bg-gradient-to-b from-emerald-400/30 via-white/20 to-sky-400/30 -z-10" />

        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg mb-2">
            1984
          </div>
          <div className="text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-emerald-400/80 to-emerald-300/80 bg-clip-text text-transparent">
            EST.
          </div>
          <div className="text-xs text-white/60 mt-1 font-medium">Real Estate Excellence</div>
        </div>

        <div className="text-center group-hover:scale-105 transition-transform duration-300">
          <div className="text-5xl font-black bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent drop-shadow-lg mb-2">
            500+
          </div>
          <div className="text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-sky-400/80 to-sky-300/80 bg-clip-text text-transparent">
            PROPERTIES
          </div>
          <div className="text-xs text-white/60 mt-1 font-medium">Assets Under Care</div>
        </div>
      </div>

      {/* Subtle signature line */}
      <div className="absolute bottom-4 right-6 w-24 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />
    </div>
  </div>
</motion.div>





        </div>
      </div>
    </section>
  );
};

export default Hero;
