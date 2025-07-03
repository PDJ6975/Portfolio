"use client";
import { motion } from "framer-motion";

export default function CVSection() {
  return (
    <motion.section
      id="cv"
      className="py-20 flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        <p className="text-[#8892b0] text-lg leading-relaxed max-w-2xl">
          Puedes consultar mi historial completo de proyectos, educación y certificaciones descargando mi currículum.
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-max bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10"
        >
          Descargar CV completo →
        </a>
      </div>
    </motion.section>
  );
} 