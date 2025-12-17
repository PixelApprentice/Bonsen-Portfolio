import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useEffect, useState, useRef } from "react";
import { SKILLS_CONFIG } from "@/constants/config";

// Skill categories mapping
const SKILL_CATEGORIES = {
  "Core & Frontend": ["JavaScript", "React", "HTML & CSS", "Tailwind"],
  "Creative & 3D": ["Three.js", "Blender", "Figma"],
  "Backend & Tools": ["Python", "Firebase", "Linux", "Git", "Bash"]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } }
} as const;

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  }
} as const;

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 px-6 scroll-mt-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl" ref={containerRef}>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="My technical constellation"
        />

        {/* Tech Tree Container */}
        <div className="relative mt-12 min-h-[700px] lg:h-[700px] h-auto w-full flex justify-center items-center">

          {/* Desktop Tree View (Visible on lg+) */}
          <div className="hidden lg:block w-full h-full relative">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="absolute inset-0"
            >
              {/* Central Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  variants={itemVariants}
                  className="w-32 h-32 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.1)] z-20"
                >
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                    Skills
                  </span>
                </motion.div>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                viewBox="0 0 1000 700"
                preserveAspectRatio="xMidYMid slice">

                {/* Main Lines from Center (500, 350) */}
                <motion.path d="M500 350 L250 350" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" variants={lineVariants} /> {/* Left */}
                <motion.path d="M500 350 L750 350" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" variants={lineVariants} /> {/* Right */}
                <motion.path d="M500 350 L500 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" variants={lineVariants} /> {/* Top */}

                {/* Sub-lines: Core & Frontend (Left Side) - Center at 250,350 */}
                <motion.path d="M250 350 L150 280" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M250 350 L150 420" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M250 350 L100 350" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M250 350 L300 250" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />

                {/* Sub-lines: Backend & Tools (Right Side) - Center at 750,350 */}
                <motion.path d="M750 350 L850 280" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M750 350 L850 420" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M750 350 L900 350" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M750 350 L700 250" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M750 350 L700 450" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />

                {/* Sub-lines: Creative (Top Side) - Center at 500,150 */}
                <motion.path d="M500 150 L400 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M500 150 L600 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
                <motion.path d="M500 150 L500 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/20" variants={lineVariants} />
              </svg>

              {/* === Frontend Cluster (Left) === */}
              {/* Category Node */}
              <div className="absolute left-[25%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                <SkillCategory label="Frontend" />
              </div>
              {/* Leaves */}
              <SkillNode x="15%" y="40%" label="React" />
              <SkillNode x="15%" y="60%" label="HTML/CSS" />
              <SkillNode x="10%" y="50%" label="JavaScript" />
              <SkillNode x="30%" y="35%" label="Tailwind" />


              {/* === Backend Cluster (Right) === */}
              {/* Category Node */}
              <div className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                <SkillCategory label="Backend" />
              </div>
              {/* Leaves */}
              <SkillNode x="85%" y="40%" label="Python" />
              <SkillNode x="85%" y="60%" label="Firebase" />
              <SkillNode x="90%" y="50%" label="Linux" />
              <SkillNode x="70%" y="35%" label="Git" />
              <SkillNode x="70%" y="65%" label="Bash" />


              {/* === Creative Cluster (Top) === */}
              {/* Category Node */}
              <div className="absolute left-[50%] top-[21%] -translate-x-1/2 -translate-y-1/2">
                <SkillCategory label="Creative" />
              </div>
              {/* Leaves */}
              <SkillNode x="40%" y="11%" label="Three.js" />
              <SkillNode x="60%" y="11%" label="Blender" />
              <SkillNode x="50%" y="7%" label="Figma" />

            </motion.div>
          </div>

          {/* Mobile View (Unchanged - works well) */}
          <div className="lg:hidden w-full flex flex-col items-center gap-12">
            {Object.entries(SKILL_CATEGORIES).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-border/50" />
                  <span className="text-lg font-semibold text-primary">{category}</span>
                  <div className="h-[1px] flex-1 bg-border/50" />
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 + (index * 0.05) }}
                      viewport={{ once: true }}
                      className="px-6 py-3 glass-card rounded-full text-base font-medium hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ label }: { label: string }) => (
  <motion.div
    variants={itemVariants}
    className="px-8 py-4 bg-secondary/80 border border-primary/30 rounded-2xl shadow-lg backdrop-blur-md"
  >
    <span className="text-lg font-bold text-primary tracking-wide">{label}</span>
  </motion.div>
);

const SkillNode = ({ x, y, label }: { x: string, y: string, label: string }) => (
  <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
    <motion.div
      variants={itemVariants}
      className="px-6 py-3 bg-card border border-border rounded-xl shadow-md hover:border-primary/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] transition-all duration-300 cursor-default"
    >
      <span className="text-base font-medium text-foreground">{label}</span>
    </motion.div>
  </div>
);

export default Skills;
