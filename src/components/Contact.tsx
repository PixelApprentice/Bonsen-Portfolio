import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/data/content";
import { useFormValidation } from "@/hooks/useFormValidation";
import { VALIDATION_RULES, FORM_MESSAGES } from "@/constants/validation";
import { FADE_IN_UP_DELAYED } from "@/constants/animations";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { SectionHeader } from "./SectionHeader";
import { SocialLinks } from "./SocialLinks";

const Contact = () => {
  const { toast } = useToast();
  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    validateForm,
    handleChange,
    resetForm,
  } = useFormValidation(
    { name: "", email: "", message: "" },
    VALIDATION_RULES
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: FORM_MESSAGES.validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message Sent!",
        description: FORM_MESSAGES.submitSuccess,
      });

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: FORM_MESSAGES.submitError,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 mb-20 scroll-mt-32">
      <div className="container mx-auto max-w-2xl">
        <SectionHeader
          title={contactInfo.title}
          subtitle={contactInfo.description}
        />

        <SocialLinks
          email={contactInfo.email}
          phone={contactInfo.phone}
          github={contactInfo.socials?.github}
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6 mt-12"
        >
          <FormInput
            id="name"
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            ariaLabel="Your name"
            placeholder="Your name"
            required
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            ariaLabel="Your email"
            placeholder="your.email@example.com"
            required
          />

          <FormTextarea
            id="message"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            ariaLabel="Your message"
            placeholder="Tell me about your project..."
            rows={6}
            required
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
