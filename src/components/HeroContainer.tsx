import { motion } from "framer-motion";
import { heroData } from "@/data/content";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { STAGGER_CONTAINER, STAGGER_ITEM, HOVER_SCALE, TAP_SCALE } from "@/constants/animations";

/**
 * HeroContainer - Main hero section with animated text and image
 * Encapsulates hero display logic with smooth animations
 */
const HeroContainer = () => {
  const { scrollToSection } = useScrollNavigation();

  const heroImageClasses = "pointer-events-none absolute bottom-0 right-0 h-[60vh] w-full sm:h-[70vh] sm:w-[70vw] md:h-[85vh] md:w-[55vw] lg:h-[90vh] lg:w-[45vw] z-10";
  const heroImageStyle = {
    maskImage: "radial-gradient(ellipse 90% 80% at 70% 40%, black 20%, transparent 75%)",
    WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 70% 40%, black 20%, transparent 75%)",
    filter: "drop-shadow(0 40px 120px rgba(0,0,0,0.85))",
  };

  return (
    <section id="about" className="relative h-screen overflow-hidden scroll-mt-32">
      {/* Hero Image */}
      <HeroImage imageUrl={heroData.imageUrl} className={heroImageClasses} style={heroImageStyle} />

      {/* Text Content */}
      <HeroContent 
        headline={heroData.headline}
        kicker={heroData.kicker}
        subtext={heroData.subtext}
        onScrollToProjects={() => scrollToSection("projects")}
        onScrollToContact={() => scrollToSection("contact")}
      />
    </section>
  );
};

/**
 * HeroImage - Animated hero image component
 */
const HeroImage = ({ imageUrl, className, style }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, x: 100 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
    className={className}
  >
    <img
      src={imageUrl}
      alt="Bonsen - Creative Developer"
      loading="eager"
      className="h-full w-full object-contain md:object-cover object-top"
      style={style}
    />
  </motion.div>
);

/**
 * HeroContent - Text content with animations
 */
interface HeroContentProps {
  headline: string;
  kicker: string;
  subtext: string;
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

const HeroContent = ({
  headline,
  kicker,
  subtext,
  onScrollToProjects,
  onScrollToContact,
}: HeroContentProps) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-full md:max-w-4xl">
      {/* Kicker */}
      <HeroKicker headline={headline} kicker={kicker} />

      {/* Headline */}
      <HeroHeadline headline={headline} />

      {/* Subtext */}
      <HeroSubtext subtext={subtext} />

      {/* CTA Buttons */}
      <HeroButtons 
        onScrollToProjects={onScrollToProjects}
        onScrollToContact={onScrollToContact}
      />
    </div>
  );
};

/**
 * HeroKicker - Editorial kicker text
 */
const HeroKicker = ({ headline, kicker }: { headline: string; kicker: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-3 sm:mb-4 md:mb-6 text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground"
  >
    {headline} / {kicker}
  </motion.div>
);

/**
 * HeroHeadline - Main headline with character animation
 */
const HeroHeadline = ({ headline }: { headline: string }) => (
  <div className="mb-3 sm:mb-4 md:mb-6 overflow-hidden">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="font-bold leading-none tracking-tight text-white"
      style={{ 
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: "clamp(2.5rem, 12vw, 14rem)"
      }}
    >
      {headline.split(" ").map((word, wordIndex) => {
        if (word.toLowerCase().includes("bonsen")) {
          return (
            <motion.span
              key={wordIndex}
              className="inline-block"
              initial="hidden"
              animate="visible"
              variants={STAGGER_CONTAINER}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={STAGGER_ITEM}
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
);

/**
 * HeroSubtext - Role and description text
 */
const HeroSubtext = ({ subtext }: { subtext: string }) => (
  <motion.p
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.9 }}
    className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed"
  >
    {subtext}
  </motion.p>
);

/**
 * HeroButtons - CTA buttons for navigation
 */
interface HeroButtonsProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

const HeroButtons = ({ onScrollToProjects, onScrollToContact }: HeroButtonsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.1 }}
    className="flex flex-wrap gap-3 sm:gap-4"
  >
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToProjects}
      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="View my projects"
    >
      View Projects
    </motion.button>
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToContact}
      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 glass-card text-foreground rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-primary/10 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Get my resume"
    >
      Get Resume
    </motion.button>
  </motion.div>
);

export default HeroContainer;
