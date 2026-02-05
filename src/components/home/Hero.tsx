import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Star, Users } from "lucide-react";
import hero from "@/assets/hero1.png";
import logo from "@/assets/logo22.png";

const HeroLight = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-blue-50"
    >
      {/* Light Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200" />

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(90deg, #cbd5e1 1px, transparent 1px), linear-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Soft Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-300 bg-white/70 backdrop-blur-md px-5 py-2 mb-8"
            >
              <span className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700">
                Premium Real Estate Solutions
              </span>
            </motion.div> */}

            {/* LOGO (Centered & Responsive) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className=" flex flex-col items-center lg:items-start lg:pl-24"
            >
              <img
                src={logo}
                alt="Investment Property Trust Logo"
                className="
      h-24
      sm:h-28
      md:h-32
      lg:h-36
      xl:h-48
      w-auto
    "
              />

              
            </motion.div>
<h3 className="mt-2 mb-5 text-2xl sm:text-3xl font-semibold font-serif text-blue-900 leading-tight lg:pl-12">
                Investment Property Trust
              </h3>
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-700 mb-8 max-w-lg leading-relaxed"
            >
              Four decades of institutional expertise in real estate investment,
              development, and portfolio management. We transform opportunities
              into profitable assets.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              {[
                {
                  icon: Award,
                  label: "40+ Years",
                  text: "Industry Leadership",
                },
                {
                  icon: TrendingUp,
                  label: "20+ Assets",
                  text: "Under Management",
                },
                {
                  icon: Users,
                  label: (
                    <div className="flex items-center justify-center gap-1 text-Black mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      ))}
                    </div>
                  ),
                  text: "Client Satisfaction",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-bold text-slate-900">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-600">{item.text}</div>
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-lg font-semibold shadow-xl group"
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
                className="border border-blue-300 text-blue-700 hover:bg-blue-100 px-8 py-6 rounded-lg font-semibold transition-all"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Text */}
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-slate-600 mt-8"
            >
              Trusted by institutional investors and high-net-worth individuals
              worldwide
            </motion.p> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-200 shadow-2xl bg-white">
              <img
                src={hero}
                alt="Investment properties"
                className="w-full h-96 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl rounded-xl border border-blue-200 p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-black mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      ))}
                    </div>

                    <div className="text-xs text-slate-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-blue-300/40 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-blue-300/40 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLight;

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, TrendingUp, Award, Star, Users } from "lucide-react";
// import hero from "@/assets/hero.png";
// import logo from "@/assets/logo33.png";

// const HeroLight = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center overflow-hidden bg-white"
//     >
//       {/* Refined Gradient Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white" />

//       {/* Subtle Grid Background */}
//       <div
//         className="absolute inset-0 opacity-[0.15]"
//         style={{
//           backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px), linear-gradient(#3b82f6 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Decorative Blur Orbs */}
//       <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
//       <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-300/30 rounded-full blur-[100px]" />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT: Focus on Text & CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center lg:text-left order-2 lg:order-1"
//           >
//             <motion.h1
//                initial={{ opacity: 0, y: 20 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ delay: 0.2 }}
//                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]"
//             >
//               Institutional <span className="text-blue-600">Expertise</span> in Real Estate
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
//             >
//               Four decades of transforming opportunities into profitable assets through
//               strategic development and portfolio management.
//             </motion.p>
//  {/* Trust Indicators */}
//              <motion.div
//                initial={{ opacity: 0, y: 20 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ delay: 0.5 }}
//                className="flex flex-col sm:flex-row gap-6 mb-10"
//              >
//                {[
//                  {
//                    icon: Award,
//                    label: "40+ Years",
//                    text: "Industry Leadership",
//                  },
//                  {
//                    icon: TrendingUp,
//                    label: "20+ Assets",
//                    text: "Under Management",
//                  },
//                  {
//                    icon: Users,
//                    label: (
//                      <div className="flex items-center justify-center gap-1 text-Black mb-1">
//                        {[...Array(5)].map((_, i) => (
//                          <Star
//                            key={i}
//                            size={16}
//                            fill="currentColor"
//                            stroke="currentColor"
//                          />
//                        ))}
//                      </div>
//                    ),
//                    text: "Client Satisfaction",
//                  },
//                ].map((item, i) => {
//                  const Icon = item.icon;
//                  return (
//                    <div key={i} className="flex items-center gap-3">
//                      <Icon className="w-6 h-6 text-blue-600" />
//                      <div>
//                        <div className="font-bold text-slate-900">
//                          {item.label}
//                        </div>
//                        <div className="text-sm text-slate-600">{item.text}</div>
//                      </div>
//                    </div>
//                  );
//                })}
//              </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-7 rounded-xl font-bold shadow-lg shadow-blue-200 group transition-all"
//               >
//                 <Link to="/services" className="flex items-center gap-2 text-lg">
//                   Explore Services
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>

//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-7 rounded-xl font-bold text-lg transition-all"
//               >
//                 <Link to="/contact">Contact Us</Link>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT CONTENT: The "Mega Logo" Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative flex justify-center items-center order-1 lg:order-2"
//           >
//             {/* The Main Logo with Deep Blue Shadow */}
//             <div className="relative z-10 group">
//               <motion.img
//                 src={logo}
//                 alt="Investment Property Trust Logo"
//                 animate={{ y: [0, -15, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="
//                   w-full
//                   max-w-[320px]   /* Mobile size */
//                   sm:max-w-[400px] /* Tablet size */
//                   lg:max-w-[500px] /* Desktop size */
//                   xl:max-w-[650px] /* Extra large screens */
//                   h-auto
//                   drop-shadow-[0_35px_35px_rgba(29,78,216,0.45)]
//                   filter transition-all duration-500
//                 "
//               />

//               {/* Secondary Glow Behind Logo */}
//               <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] -z-10 scale-75" />
//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroLight;
