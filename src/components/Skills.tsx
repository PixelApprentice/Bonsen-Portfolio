import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { SkillBadge } from "./SkillBadge";

const Skills = () => {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools I use to bring ideas to life"
        />

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* First row - scrolling left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 mb-4"
          >
            <motion.div
              animate={{ x: [0, -50 * skills.length] }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-4 shrink-0"
            >
              {duplicatedSkills.map((skill, index) => (
                <SkillBadge key={`row1-${skill}-${index}`} skill={skill} delay={0} />
              ))}
            </motion.div>
          </motion.div>

          {/* Second row - scrolling right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.div
              animate={{ x: [-50 * skills.length, 0] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-4 shrink-0"
            >
              {duplicatedSkills.reverse().map((skill, index) => (
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
