/**
 * Validation rules and patterns
 * Centralized for consistency across the app
 */

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const VALIDATION_RULES = {
  name: (value: string): string | null => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return null;
  },

  email: (value: string): string | null => {
    if (!value.trim()) return "Email is required";
    if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address";
    return null;
  },

  message: (value: string): string | null => {
    if (!value.trim()) return "Message is required";
    if (value.trim().length < 10) return "Message must be at least 10 characters";
    return null;
  },
};

export const FORM_MESSAGES = {
  validationError: "Please fix the errors in the form.",
  submitSuccess: "Thank you for reaching out. I'll get back to you soon.",
  submitError: "Failed to send message. Please try again later.",
};
