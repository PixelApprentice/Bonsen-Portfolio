import { motion } from "framer-motion";
import { heroData } from "@/data/content";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { STAGGER_CONTAINER, STAGGER_ITEM, HOVER_SCALE, TAP_SCALE } from "@/constants/animations";
import { RESUME_CONFIG } from "@/constants/config";
import { downloadFile } from "@/utils/helpers";


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
 * HeroImage - Animated hero image component with backroom lighting effects
 */
const HeroImage = ({ imageUrl }: { imageUrl: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    className="relative w-full h-full flex items-center justify-center"
  >
    {/* Backroom Lighting Effects */}
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Light Layer 1 - Primary Purple */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="backroom-light backroom-light-1 w-[60%] h-[60%]"
      />

      {/* Light Layer 2 - Magenta */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="backroom-light backroom-light-2 w-[50%] h-[50%] absolute top-[10%] left-[20%]"
      />

      {/* Light Layer 3 - Pink */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="backroom-light backroom-light-3 w-[55%] h-[55%] absolute bottom-[15%] right-[15%]"
      />
    </div>

    {/* Decorative Background Blob */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-[80%] h-[80%] bg-primary/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl" />
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
        alt="Bonsen Fuad - UI/UX Designer and Software Engineer"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width="500"
        height="600"
        className="w-full h-full object-contain object-center drop-shadow-2xl"
      />
    </motion.div>

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
 * HeroHeadline - Main headline with name and typing animation for role
 */
const HeroHeadline = ({ headline }: { headline: string; kicker: string }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const roles = [
    "UI/UX Designer",
    "Software Engineer",
    "Developer"
  ];

  React.useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentRoleIndex, isDeleting, roles]);

  return (
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
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[hsl(210,100%,70%)]"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.h1>
    </div>
  );
};

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

const HeroButtons = ({ onScrollToProjects, onScrollToContact }: HeroButtonsProps) => {
  const handleResumeDownload = () => {
    downloadFile(RESUME_CONFIG.url, RESUME_CONFIG.filename);
  };

  return (
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
        View Projects
      </motion.button>
      <motion.button
        whileHover={HOVER_SCALE}
        whileTap={TAP_SCALE}
        onClick={handleResumeDownload}
        className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-medium transition-all hover:bg-primary/5 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Download my resume"
      >
        Download Resume
      </motion.button>
    </motion.div>
  );
};

export default HeroContainer;
