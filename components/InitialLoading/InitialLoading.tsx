"use client";

import { useState, useEffect } from "react";
import "./loading.css";

export default function InitialLoading(): React.ReactElement | null {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-body fixed inset-0 z-50">
      <div className="loading-container">
        <div className="loading-upper">Loading</div>
        <div className="loading-lower">Loading</div>
        <div className="loading-inside">Welcome to my portfolio!</div>
      </div>
    </div>
  );
}
