"use client";

import { useState, useEffect } from "react";
import { LOADING_DURATION_MS } from "@/lib/constants";

export default function InitialLoading(): React.ReactElement | null {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-body fixed inset-0 z-50">
      <div className="loading-container">
        <div className="loading-upper">Loading</div>
        <div className="loading-lower">Loading</div>
        <div className="loading-inside">Nice to see you!</div>
      </div>
    </div>
  );
}
