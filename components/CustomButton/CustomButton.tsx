"use client";

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, memo } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  content: string;
  before?: ReactNode;
  after?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'content'> & {
    href: string;
  };

type CustomButtonProps = ButtonAsButton | ButtonAsLink;

interface VariantStyles {
  "--liquid-bg-gradient": string;
  "--liquid-bg": string;
  "--liquid-bg-transparent": string;
  "--btn-shadow": string;
  "--btn-shadow-hover": string;
}

const VARIANTS: Record<ButtonVariant, VariantStyles> = {
  primary: {
    "--liquid-bg-gradient":
      "linear-gradient(135deg, #2396fb9c 0%, #187bd1c7 50%, #65c1ffd3 100%)",
    "--liquid-bg": "rgba(11, 47, 82, 1)",
    "--liquid-bg-transparent": "rgba(11, 47, 82, 0.216)",
    "--btn-shadow": "0 4px 20px rgba(35, 150, 251, 0.3)",
    "--btn-shadow-hover": "0 6px 30px rgba(35, 150, 251, 0.5)",
  },
  secondary: {
    "--liquid-bg-gradient":
      "linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #718096 100%)",
    "--liquid-bg": "rgba(26, 32, 44, 1)",
    "--liquid-bg-transparent": "rgba(26, 32, 44, 0.5)",
    "--btn-shadow": "0 4px 20px rgba(74, 85, 104, 0.3)",
    "--btn-shadow-hover": "0 6px 30px rgba(74, 85, 104, 0.5)",
  },
  danger: {
    "--liquid-bg-gradient":
      "linear-gradient(135deg, #e53e3e 0%, #c53030 50%, #fc8181 100%)",
    "--liquid-bg": "rgba(74, 20, 20, 1)",
    "--liquid-bg-transparent": "rgba(74, 20, 20, 0.5)",
    "--btn-shadow": "0 4px 20px rgba(229, 62, 62, 0.3)",
    "--btn-shadow-hover": "0 6px 30px rgba(229, 62, 62, 0.5)",
  },
};

const CustomButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, CustomButtonProps>(
  (
    {
      content,
      before,
      after,
      variant = "primary",
      size = "md",
      className = "",
      style,
      ...props
    },
    ref
  ): React.ReactElement => {
    const isLink = 'href' in props && props.href !== undefined;
    const disabled = !isLink && 'disabled' in props ? props.disabled : false;
    const type = !isLink && 'type' in props ? props.type : 'button';
    // Responsive Size Classes - Mobile First
    const sizeClasses: Record<ButtonSize, string> = {
      sm: "px-3 py-2.5 min-w-[100px] text-[11px]",
      md: "px-[26px] py-3 min-w-[140px] text-xs tracking-[1px] sm:px-8 sm:py-3.5 sm:min-w-[160px] sm:text-[13px] sm:tracking-[1.5px] md:px-10 md:py-4 md:min-w-[180px] md:text-sm md:tracking-[2px] 2xl:px-[45px] 2xl:py-[18px] 2xl:min-w-[200px] 2xl:text-[15px]",
      lg: "px-8 py-3.5 min-w-[160px] text-[13px] tracking-[1.5px] md:px-[50px] md:py-5 md:min-w-[220px] md:text-base md:tracking-[3px]",
    };

    // Animation position classes based on size
    const liquidSizeClasses: Record<ButtonSize, string> = {
      sm: "top-[-35px] h-[100px] group-hover:top-[-60px]",
      md: "top-[-80px] h-[200px] group-hover:top-[-120px]",
      lg: "top-[-70px] h-[220px] group-hover:top-[-110px]",
    };

    const sharedClassName = ` group relative inline-flex items-center justify-center overflow-hidden rounded-[30px] border-none bg-transparent cursor-pointer font-sans uppercase no-underline transition-[transform,box-shadow] duration-2000 ease-in-out active:translate-y-0 active:scale-95 active:duration-75 shadow-(--btn-shadow) hover:shadow-(--btn-shadow-hover) focus-visible:outline-2 focus-visible:outline-[#65c1ff] focus-visible:outline-offset-4
      ${sizeClasses[size]}
      ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none group-disabled" : ""}
      ${className}
    `.trim();

    const sharedStyle = {
      ...VARIANTS[variant],
      ...style,
    } as React.CSSProperties;

    const contentMarkup = (
      <>
        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-white">
          {before && <span className="flex items-center justify-center">{before}</span>}
          <span className="whitespace-nowrap">{content}</span>
          {after && <span className="flex items-center justify-center">{after}</span>}
        </span>
        
        <div 
          className={`liquid-effect absolute left-0 w-full pointer-events-none transition-[top] duration-1000 ease-out ${liquidSizeClasses[size]} ${disabled ? "hidden" : ""}`} 
          aria-hidden="true" 
        />
      </>
    );

    if (isLink) {
      const { href, ...linkProps } = props as ButtonAsLink;
      
      // Check if it's an internal Next.js route (starts with / but not //)
      const isInternalLink = href.startsWith('/') && !href.startsWith('//');
      
      if (isInternalLink) {
        return (
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={sharedClassName}
            style={sharedStyle}
            {...linkProps}
          >
            {contentMarkup}
          </Link>
        );
      }
      
      // External link or special protocols (http, mailto, tel, etc.)
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={sharedClassName}
          style={sharedStyle}
          {...linkProps}
        >
          {contentMarkup}
        </a>
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={sharedClassName}
        style={sharedStyle}
        {...buttonProps}
      >
        {contentMarkup}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default memo(CustomButton);
