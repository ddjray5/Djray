"use client";

import "./particles.css";
import { useEffect, useState } from "react";

type Particle = {
  left: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 220 }, () => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.8,
      delay: Math.random() * 20,
      duration: 18 + Math.random() * 20,
    }));

    setParticles(data);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle, i) => (
        <span
          key={i}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}