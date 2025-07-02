"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

export default function AboutSection() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = link.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="about"
      className="py-24 flex items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full grid md:grid-cols-2 gap-12">
        {/* Columna izquierda: nombre, título, tagline y navegación */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">Antonio Rodríguez</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#64ffda] mb-6">Ingeniero de Software</h2>
          <p className="text-[#8892b0] text-base md:text-lg max-w-md leading-relaxed">
            Construyo experiencias digitales accesibles y pixel-perfect para la web.
          </p>

          <ul className="mt-12 flex flex-col gap-4 uppercase text-sm tracking-widest font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`group flex items-center transition-colors ${
                    active === link.id ? "text-white" : "text-[#8892b0] hover:text-[#64ffda]"
                  }`}
                >
                  <span
                    className={`mr-3 h-px w-20 transition-colors ${
                      active === link.id ? "bg-[#64ffda]" : "bg-[#233554] group-hover:bg-[#64ffda]"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha: descripción */}
        <div className="flex flex-col justify-center">
          <p className="text-[#ccd6f6] text-base md:text-lg leading-relaxed">
            Soy Antonio Rodríguez Calderón, estudiante de último año de Ingeniería de Software en la Universidad de Sevilla. Tengo experiencia en desarrollo de aplicaciones web, especializado en Java y frameworks como Spring Boot y React. Me apasiona la inteligencia artificial, el desarrollo full stack y la creación de soluciones innovadoras. En mi tiempo libre, suelo explorar nuevas tecnologías, colaborar en proyectos de código abierto y disfrutar de la escalada.
          </p>
        </div>
      </div>
    </motion.section>
  );
} 