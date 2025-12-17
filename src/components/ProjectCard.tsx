import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  role?: string;
  imageUrl: string;
  tags: string[];
  link?: string | null;
  github?: string | null;
  delay?: number;
}

/**
 * Reusable project card component
 * Encapsulates project display logic
 */
export const ProjectCard = ({
  title,
  description,
  role,
  imageUrl,
  tags,
  link,
  github,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="glass-card p-6 group cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg mb-6 bg-secondary/20">
        <img
          src={imageUrl}
          alt={`${title} project screenshot`}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600/161616/4F46E5?text=Project+Image";
          }}
        />

        {/* Action Links */}
        {(link || github) && (
          <div className="absolute top-4 right-4 flex gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:bg-card/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                aria-label={`View live demo of ${title}`}
                title="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card hover:bg-card/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                aria-label={`View source code of ${title} on GitHub`}
                title="View source code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {role && (
        <p className="text-xs font-medium text-primary mb-3 uppercase tracking-wider">
          {role}
        </p>
      )}

      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
