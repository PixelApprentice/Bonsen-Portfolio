import { motion } from "framer-motion";
import { heroData } from "@/data/content";

/**
 * HeroContainer - ISOLATED COMPONENT FOR FUTURE 3D REPLACEMENT
 * This component is completely self-contained and can be swapped out
 * with a 3D Canvas version without affecting other components.
 */
const HeroContainer = () => {
  return (
    <section id="about" className="relative h-screen overflow-hidden">
      {/* Hero Image - Bottom Right, Massive Scale */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 right-0 h-[90vh] w-[55vw] z-10"
      >
        <img
          src={heroData.imageUrl}
          alt="Bonsen - Creative Developer"
          loading="eager"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 85%)",
          }}
        />
      </motion.div>

      {/* Text Content - Layered on Top */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-2 glass-card text-sm mb-8 w-fit"
        >
          👋 Welcome to my portfolio
        </motion.div>

        {/* Massive Name with Character Animation */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold leading-none tracking-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            {heroData.headline.split(" ").map((word, wordIndex) => {
              if (word.toLowerCase().includes("bonsen")) {
                return (
                  <motion.span
                    key={wordIndex}
                    className="inline-block"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.6,
                        },
                      },
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        variants={{
                          hidden: { opacity: 0, y: 50, rotateX: -90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              type: "spring",
                              damping: 12,
                              stiffness: 100,
                            },
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                );
              }
              return <span key={wordIndex}>{word} </span>;
            })}
          </motion.h1>
        </div>

        {/* Role Text */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
        >
          {heroData.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "hsl(243, 75%, 65%)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-colors"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 glass-card font-medium transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContainer;
