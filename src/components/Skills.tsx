import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
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

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools I use to bring ideas to life"
        />

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="bento-card group cursor-default"
            >
              <div className="flex items-center justify-center h-full min-h-[80px]">
                <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill}
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,70%)]/10 via-transparent to-[hsl(195,100%,65%)]/5 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
