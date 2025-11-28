import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
  ariaLabel: string;
}

/**
 * Reusable form input component
 * Handles validation styling and error display
 */
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, ariaLabel, className, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium mb-2">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          aria-label={ariaLabel}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full px-4 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 transition-all",
            error
              ? "border-destructive focus:ring-destructive"
              : "border-border focus:ring-primary",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
