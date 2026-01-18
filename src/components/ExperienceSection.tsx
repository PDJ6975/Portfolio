"use client";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2025",
    company: "Guadaltel S.A.",
    role: "Desarrollador Full-Stack",
    description:
      "Desarrollo full-stack de uno de los componentes tipológicos de un gestor documental. Se elaboran varias vistas con tablas, formularios y modales para permitir la gestión documental mediante PrimeFaces. Dichas vistas se integran con lógica CRUD completa a través de controladores y servlets usando Java. Se refactoriza parte de los servicios existentes en la aplicación y se añaden nuevas tablas, restricciones y filas de auditoría sobre la base de datos. Se adquiere experiencia en sistemas SVN y en la gestión de dockers mediante Jenkins.",
    tech: ["Java", "PrimeFaces", "SVN", "Jenkins", "Docker", "SQL"],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-10 flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        {experiences.map((experience, idx) => (
          <motion.div
            key={experience.company + experience.period}
            className="bg-transparent border border-transparent rounded-xl p-8 flex flex-col gap-2 transition-all duration-200 hover:bg-[#112240]/60 hover:border-[#233554]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1 text-sm text-[#8892b0]">
                  {experience.period}
                </span>
                <h2 className="text-2xl font-bold text-white/75">{experience.company}</h2>
              </div>
              <div className="flex items-center gap-2 text-[#64ffda]">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold text-sm">{experience.role}</span>
              </div>
            </div>
            <p className="text-[#ccd6f6] text-base leading-relaxed text-justify mb-1">{experience.description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#233554] text-[#64ffda] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
