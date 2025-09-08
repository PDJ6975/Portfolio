"use client";
import { useEffect, useRef } from "react";

/**
 * CursorSpotlight crea un círculo difuminado alrededor del cursor usando mix-blend-mode
 * para iluminar el fondo.
 */
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (ref.current) {
        // Centrar el spotlight en la posición del ratón
        const size = 600; // diámetro
        ref.current.style.left = `${e.clientX - size / 2}px`;
        ref.current.style.top = `${e.clientY - size / 2}px`;
      }
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
      style={{
        background: "radial-gradient(circle, rgba(100,255,218,0.4) 0%, rgba(100,255,218,0) 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
} 