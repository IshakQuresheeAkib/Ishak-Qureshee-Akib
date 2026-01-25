"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function CustomButton({
  children,
  before,
  after,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: CustomButtonProps): React.ReactElement {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2396fb] to-[#187bd1] hover:from-[#187bd1] hover:to-[#2396fb] shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
    secondary:
      "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-600 shadow-lg shadow-gray-500/30",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 shadow-lg shadow-red-500/30",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {before && <span className="flex items-center">{before}</span>}
      <span>{children}</span>
      {after && <span className="flex items-center">{after}</span>}
    </button>
  );
}
