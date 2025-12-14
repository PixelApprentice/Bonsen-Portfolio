import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { SkillBadge } from "./SkillBadge";
import { useEffect, useState } from "react";
import { SKILLS_CONFIG } from "@/constants/config";


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: SKILLS_CONFIG.threshold }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Split skills into two rows for alternating animation
  const midpoint = Math.ceil(skills.length / 2);
  const firstRowSkills = skills.slice(0, midpoint);
  const secondRowSkills = skills.slice(midpoint);

  // Duplicate for seamless infinite scroll
  const duplicatedFirstRow = [...firstRowSkills, ...firstRowSkills];
  const duplicatedSecondRow = [...secondRowSkills, ...secondRowSkills];

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools I use to bring ideas to life"
        />

        {/* Marquee container */}
        <div className="relative space-y-4">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First row - scrolling left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 overflow-hidden"
          >
            <motion.div
              animate={isVisible ?
                { x: ["0%", "-50%"] } :
                { x: "0%" }
              }
              transition={{
                x: {
                  duration: SKILLS_CONFIG.scrollDuration.firstRow,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              className="flex gap-4 shrink-0 will-change-transform"
              style={{ width: "fit-content" }}
            >
              {duplicatedFirstRow.map((skill, index) => (
                <SkillBadge key={`row1-${skill}-${index}`} skill={skill} delay={0} />
              ))}
            </motion.div>
          </motion.div>

          {/* Second row - scrolling right with different skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 overflow-hidden"
          >
            <motion.div
              animate={isVisible ?
                { x: ["-50%", "0%"] } :
                { x: "0%" }
              }
              transition={{
                x: {
                  duration: SKILLS_CONFIG.scrollDuration.secondRow,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
              className="flex gap-4 shrink-0 will-change-transform"
              style={{ width: "fit-content" }}
            >
              {duplicatedSecondRow.map((skill, index) => (
                <SkillBadge key={`row2-${skill}-${index}`} skill={skill} delay={0} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
