import { motion } from "framer-motion";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { SLIDE_DOWN, HOVER_SCALE, TAP_SCALE } from "@/constants/animations";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const { scrollToSection } = useScrollNavigation();

  return (
    <motion.nav
      initial={SLIDE_DOWN.initial}
      animate={SLIDE_DOWN.animate}
      transition={SLIDE_DOWN.transition}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-xl font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1"
            whileHover={HOVER_SCALE}
            aria-label="Bonsen - Home"
          >
            Bonsen
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors capitalize focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1"
                whileHover={{ y: -2 }}
                whileTap={TAP_SCALE}
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={HOVER_SCALE}
            whileTap={TAP_SCALE}
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Get in touch"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
