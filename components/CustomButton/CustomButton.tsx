"use client";

import { ReactNode, ButtonHTMLAttributes, forwardRef, memo } from "react";
import "./CustomButton.css";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * CustomButton - Liquid animation button component
 * Features animated liquid wave effect on hover
 * Supports icons before/after text, multiple variants and sizes
 */
const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      before,
      after,
      variant = "primary",
      size = "md",
      className = "",
      disabled,
      type = "button",
      ...props
    },
    ref
  ): React.ReactElement => {
    const sizeClasses: Record<ButtonSize, string> = {
      sm: "liquid-btn--sm",
      md: "liquid-btn--md",
      lg: "liquid-btn--lg",
    };

    const variantClasses: Record<ButtonVariant, string> = {
      primary: "liquid-btn--primary",
      secondary: "liquid-btn--secondary",
      danger: "liquid-btn--danger",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`liquid-btn ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "liquid-btn--disabled" : ""} ${className}`}
        disabled={disabled}
        {...props}
      >
        <span className="liquid-btn__content">
          {before && <span className="liquid-btn__icon">{before}</span>}
          <span className="liquid-btn__text">{children}</span>
          {after && <span className="liquid-btn__icon">{after}</span>}
        </span>
        <div className="liquid-btn__liquid" aria-hidden="true" />
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default memo(CustomButton);
