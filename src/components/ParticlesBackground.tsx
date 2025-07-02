"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ["#06b6d4", "#a21caf", "#fff"] },
          shape: { type: "circle" },
          opacity: { value: 0.15, random: true },
          size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
          move: { enable: true, speed: 0.6, direction: "none", outModes: "out" },
          links: { enable: true, distance: 120, color: "#fff", opacity: 0.08, width: 1 },
        },
        detectRetina: true,
      }}
    />
  );
} 