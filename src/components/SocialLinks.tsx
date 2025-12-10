import { motion } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";

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
        <motion.a
          href={`tel:${phone}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          aria-label={`Call ${phone}`}
          title="Call phone"
        >
          <Phone className="w-5 h-5" />
        </motion.a>
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
