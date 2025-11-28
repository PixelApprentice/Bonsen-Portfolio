import { useCallback } from "react";

/**
 * Custom hook for smooth scroll navigation
 * Encapsulates scroll logic and makes it reusable
 */
export const useScrollNavigation = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Section with id "${id}" not found`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { scrollToSection };
};
