import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Education & Training"
          subtitle="My academic journey and professional development"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 glass-strong rounded-lg">
                  {item.type === "Education" ? (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  ) : (
                    <Award className="w-6 h-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-primary font-medium mb-1">
                    {item.organization}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                    {item.period}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
