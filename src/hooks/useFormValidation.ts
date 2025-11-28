import { useState, useCallback } from "react";

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  [key: string]: string;
}

interface ValidationRules {
  [key: string]: (value: string) => string | null;
}

/**
 * Custom hook for form validation
 * Handles state management and validation logic
 */
export const useFormValidation = (
  initialData: FormData,
  validationRules: ValidationRules
) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const error = validationRules[field](formData[field] || "");
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validationRules]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    setIsSubmitting,
    validateForm,
    handleChange,
    resetForm,
  };
};
