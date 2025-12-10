import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "Education":
      return <GraduationCap className="w-6 h-6 text-primary" />;
    case "Experience":
      return <Briefcase className="w-6 h-6 text-primary" />;
    default:
      return <Award className="w-6 h-6 text-primary" />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-32">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Education & Experience"
          subtitle="My academic journey and professional development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 glass-strong rounded-lg shrink-0">
                  {getIcon(item.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded mb-2">
                    {item.type}
                  </span>
                  
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mt-1">
                    {item.organization}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {item.period}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
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
