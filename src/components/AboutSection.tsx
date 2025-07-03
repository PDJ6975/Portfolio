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
          Soy Antonio Rodríguez Calderón, estudiante de último año de Ingeniería de Software en la Universidad de Sevilla. Tengo experiencia en desarrollo de aplicaciones web, especializado en Java y frameworks como Spring Boot y React. Me apasiona la inteligencia artificial, el desarrollo full stack y la creación de soluciones innovadoras. En mi tiempo libre, suelo explorar nuevas tecnologías, colaborar en proyectos de código abierto y disfrutar de la escalada.
        </p>
      </div>
    </motion.section>
  );
} 