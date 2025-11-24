import { motion } from "framer-motion";
import { heroData } from "@/data/content";

/**
 * HeroContainer - ISOLATED COMPONENT FOR FUTURE 3D REPLACEMENT
 * This component is completely self-contained and can be swapped out
 * with a 3D Canvas version without affecting other components.
 */
const HeroContainer = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 glass-card text-sm"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {heroData.headline}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {heroData.subtext}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 glass-card font-medium hover:bg-card/80 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image with Blend Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* White spotlight background for intentional white bg effect */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl" />
            
            <motion.img
              src={heroData.imageUrl}
              alt="Portfolio Hero"
              loading="eager"
              className="relative z-10 w-full h-auto rounded-2xl"
              style={{ mixBlendMode: "luminosity" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
