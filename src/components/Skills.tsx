import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { SkillBadge } from "./SkillBadge";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools I use to bring ideas to life"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
