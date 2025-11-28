import { motion } from "framer-motion";
import { SCALE_IN } from "@/constants/animations";

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

/**
 * Reusable skill badge component
 * Encapsulates skill display with animations
 */
export const SkillBadge = ({ skill, delay = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={SCALE_IN.initial}
      whileInView={SCALE_IN.animate}
      viewport={{ once: true }}
      transition={{ ...SCALE_IN.transition, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-card px-6 py-3 text-sm font-medium cursor-default"
    >
      {skill}
    </motion.div>
  );
};
