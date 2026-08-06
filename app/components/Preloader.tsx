"use client";

import { useEffect, useState } from "react";
import "../styles/preloader.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-logo">

        <img
          src="/logo.png"
          alt="DJ RAY"
        />

        <p className="preloader-text">
          Luxury Open Format DJ
        </p>

      </div>
    </div>
  );
}