import React from "react";
import { cn } from "@/lib/utils";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  id: string;
  ariaLabel: string;
}

/**
 * Reusable form textarea component
 * Consistent styling with FormInput
 */
export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ label, error, id, ariaLabel, className, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full px-4 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none",
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
});

FormTextarea.displayName = "FormTextarea";
