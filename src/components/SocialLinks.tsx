import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Phone, Send, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SocialLinksProps {
  email: string;
  phone?: string;
  github?: string;
  telegram?: string;
}

/**
 * Reusable social links component
 * Displays email, phone, telegram and social media links with copy functionality
 */
export const SocialLinks = ({ email, phone, github, telegram }: SocialLinksProps) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);

      if (type === 'email') {
        setCopiedEmail(true);
        toast.success('Email copied to clipboard!', {
          description: text,
          duration: 2000,
        });
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        toast.success('Phone number copied to clipboard!', {
          description: text,
          duration: 2000,
        });
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      toast.error('Failed to copy to clipboard', {
        description: 'Please try again',
      });
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      {/* Email with tooltip and copy */}
      <div className="relative">
        <motion.button
          onClick={() => copyToClipboard(email, 'email')}
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          aria-label={`Copy email: ${email}`}
        >
          {copiedEmail ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Mail className="w-5 h-5" />
          )}
        </motion.button>

        <AnimatePresence>
          {showEmail && (
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
                    <Mail className="w-3 h-3 text-primary" />
                  </motion.div>
                  {email}
                </motion.span>
              </motion.div>
              {/* Arrow pointer */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-card/80 rotate-45 border-l border-t border-border/30" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phone with tooltip and copy */}
      {phone && (
        <div className="relative">
          <motion.button
            onClick={() => copyToClipboard(phone, 'phone')}
            onMouseEnter={() => setShowPhone(true)}
            onMouseLeave={() => setShowPhone(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label={`Copy phone: ${phone}`}
          >
            {copiedPhone ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Phone className="w-5 h-5" />
            )}
          </motion.button>

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

      {/* Telegram */}
      {telegram && (
        <motion.a
          href={`https://t.me/${telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-3 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          aria-label="Contact on Telegram"
          title="Telegram"
        >
          <Send className="w-5 h-5" />
        </motion.a>
      )}

      {/* GitHub */}
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
