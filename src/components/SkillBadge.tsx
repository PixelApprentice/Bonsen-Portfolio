import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

/**
 * Reusable skill badge component
 * Optimized for marquee animation with hover effects
 */
export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-card px-6 py-3 text-sm font-medium cursor-default shrink-0 select-none"
    >
      {skill}
    </motion.div>
  );
};
