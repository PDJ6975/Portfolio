"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-10 flex items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-2">
        <p className="text-[#ccd6f6] text-base md:text-lg leading-relaxed text-justify">
          Soy Antonio Rodríguez Calderón, estudiante de último año de Ingeniería de Software en la Universidad de Sevilla. Busco mis primeras prácticas para comenzar a ganar experiencia en el sector. Tengo conocimientos en desarrollo de aplicaciones web, especializado en Java y frameworks como Spring Boot y React. Me apasiona el desarrollo full stack y la creación de soluciones innovadoras. En mi tiempo libre, suelo explorar nuevas tecnologías, y trabajar en proyectos personales.
        </p>
      </div>
    </motion.section>
  );
} 