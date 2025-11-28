import { motion } from "framer-motion";
import { FADE_IN_UP } from "@/constants/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Reusable section header component
 * Reduces repetition across sections
 */
export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={FADE_IN_UP.initial}
      whileInView={FADE_IN_UP.animate}
      viewport={{ once: true }}
      transition={FADE_IN_UP.transition}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};
