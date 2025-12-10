import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface SocialLinksProps {
  email: string;
  phone?: string;
  github?: string;
}

/**
 * Reusable social links component
 * Displays email, phone and social media links
 */
export const SocialLinks = ({ email, phone, github }: SocialLinksProps) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="flex justify-center gap-4 mt-6">
      <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        aria-label={`Send email to ${email}`}
        title="Send email"
      >
        <Mail className="w-5 h-5" />
      </motion.a>

      {phone && (
        <div className="relative">
          <motion.a
            href={`tel:${phone}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowPhone(true)}
            onMouseLeave={() => setShowPhone(false)}
            className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md block"
            aria-label={`Call ${phone}`}
          >
            <Phone className="w-5 h-5" />
          </motion.a>
          
          <AnimatePresence>
            {showPhone && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50"
              >
                <motion.div 
                  className="glass-card px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium text-foreground overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Phone className="w-3 h-3 text-primary" />
                    </motion.div>
                    {phone}
                  </motion.span>
                </motion.div>
                {/* Arrow pointer */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-card/80 rotate-45 border-l border-t border-border/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {github && (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          aria-label="Visit GitHub profile"
          title="Visit GitHub"
        >
          <Github className="w-5 h-5" />
        </motion.a>
      )}
    </div>
  );
};
