"use client";

import { useEffect } from "react";
import CustomButton from "@/components/CustomButton/CustomButton";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-red-500">Oops!</h1>
        <h2 className="text-2xl mb-4">Something went wrong</h2>
        <p className="text-white/70 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        {error.digest && (
          <p className="text-white/50 text-sm mb-4">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <CustomButton variant="primary" onClick={reset} content="Try Again" />
          <CustomButton
            variant="secondary"
            href="/"
            content="Go Home"
          />
        </div>
      </div>
    </div>
  );
}
