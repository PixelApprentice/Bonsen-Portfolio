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

  return (
    <section id="about" className="relative min-h-screen overflow-hidden pt-24 pb-12 scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content - Left Side */}
          <HeroContent 
            headline={heroData.headline}
            kicker={heroData.kicker}
            subtext={heroData.subtext}
            onScrollToProjects={() => scrollToSection("projects")}
            onScrollToContact={() => scrollToSection("contact")}
          />

          {/* Image Content - Right Side */}
          <HeroImage imageUrl={heroData.imageUrl} />
        </div>
      </div>
    </section>
  );
};

/**
 * HeroImage - Animated hero image component with decorative elements
 */
const HeroImage = ({ imageUrl }: { imageUrl: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    className="relative w-full h-full flex items-center justify-center"
  >
    {/* Decorative Background Blob */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-[80%] h-[80%] bg-primary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl" />
    </motion.div>

    {/* Main Image */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="relative z-10 w-full max-w-[500px] h-[500px] lg:h-[600px]"
    >
      <img
        src={imageUrl}
        alt="Bonsen - Creative Developer"
        loading="eager"
        className="w-full h-full object-contain object-center"
      />
    </motion.div>

    {/* Floating Badges */}
    <FloatingBadge text="React" delay={0.8} className="top-[10%] right-[15%]" />
    <FloatingBadge text="Three.js" delay={1} className="top-[40%] left-[5%]" />
    <FloatingBadge text="UI/UX" delay={1.2} className="bottom-[20%] right-[10%]" />
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
    <div className="space-y-6 lg:space-y-8">
      {/* Greeting */}
      <HeroGreeting />

      {/* Headline with Name */}
      <HeroHeadline headline={headline} kicker={kicker} />

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
 * HeroGreeting - Friendly greeting text
 */
const HeroGreeting = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="inline-block px-4 py-2 border-2 border-primary/30 rounded-lg text-foreground font-medium"
  >
    Hello !
  </motion.div>
);

/**
 * HeroHeadline - Main headline with name and role
 */
const HeroHeadline = ({ headline, kicker }: { headline: string; kicker: string }) => (
  <div className="space-y-2">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
    >
      I'm{" "}
      <motion.span
        initial="hidden"
        animate="visible"
        variants={STAGGER_CONTAINER}
        className="inline-block text-primary"
      >
        {headline.split("").map((char, charIndex) => (
          <motion.span
            key={charIndex}
            className="inline-block"
            variants={STAGGER_ITEM}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      ,
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
    >
      {kicker}
    </motion.h1>
  </div>
);

/**
 * HeroSubtext - Role and description text
 */
const HeroSubtext = ({ subtext }: { subtext: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
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
    transition={{ duration: 0.6, delay: 1 }}
    className="flex flex-wrap gap-4 pt-4"
  >
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToProjects}
      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="View my projects"
    >
      Hire Me
    </motion.button>
    <motion.button
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      onClick={onScrollToContact}
      className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-medium transition-all hover:bg-primary/5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Get my resume"
    >
      Get Resume
    </motion.button>
  </motion.div>
);

/**
 * FloatingBadge - Animated floating skill badge
 */
interface FloatingBadgeProps {
  text: string;
  delay: number;
  className: string;
}

const FloatingBadge = ({ text, delay, className }: FloatingBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={`absolute ${className} px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg z-20 hidden lg:block`}
  >
    {text}
  </motion.div>
);

export default HeroContainer;
