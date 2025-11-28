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

  const heroImageClasses = "pointer-events-none absolute bottom-0 right-0 z-10";
  const heroImageStyle = {
    width: "clamp(300px, 45vw, 800px)",
    height: "clamp(400px, 85vh, 90vh)",
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
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-12 lg:px-24 py-8" style={{ maxWidth: "clamp(300px, 55vw, 900px)" }}>
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
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
    className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground"
    style={{ fontSize: "clamp(0.5rem, 1.5vw, 0.875rem)" }}
  >
    {headline} / {kicker}
  </motion.div>
);

/**
 * HeroHeadline - Main headline with character animation
 */
const HeroHeadline = ({ headline }: { headline: string }) => (
  <div className="overflow-hidden">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="font-bold leading-none tracking-tight bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent whitespace-nowrap"
      style={{ 
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: "clamp(2rem, 8vw, 10rem)"
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
    className="text-muted-foreground leading-relaxed break-words"
    style={{ 
      fontSize: "clamp(0.75rem, 1.8vw, 1.125rem)",
      maxWidth: "clamp(250px, 90%, 600px)"
    }}
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
    className="flex flex-wrap gap-2 md:gap-4"
  >
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToProjects}
      className="bg-primary text-primary-foreground rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      style={{
        fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
        padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)"
      }}
      aria-label="View my projects"
    >
      View Projects
    </motion.button>
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToContact}
      className="glass-card text-foreground rounded-lg font-medium transition-all hover:bg-primary/10 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      style={{
        fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
        padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)"
      }}
      aria-label="Get my resume"
    >
      Get Resume
    </motion.button>
  </motion.div>
);

export default HeroContainer;
