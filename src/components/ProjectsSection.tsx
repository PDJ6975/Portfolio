"use client";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    year: "2024",
    title: "Gestor de Tareas",
    description:
      "Aplicación web para gestión de tareas con autenticación, panel de usuario y notificaciones. Backend en Spring Boot, frontend en React.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/PDJ6975/gestor-tareas",
    demo: "https://gestor-tareas-demo.vercel.app/",
  },
  {
    year: "2023",
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con Next.js y Tailwind CSS, animaciones y despliegue en Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/PDJ6975/portfolio",
    demo: "https://portfolio-antonio.vercel.app/",
  },
  // Puedes añadir más proyectos aquí
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-16 flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-transparent border border-transparent rounded-xl p-8 flex flex-col gap-3 transition-all duration-200 hover:bg-[#112240]/60 hover:border-[#233554]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-[#8892b0]">{project.year}</span>
                <h2 className="text-2xl font-bold text-white/80">{project.title}</h2>
              </div>
              <div className="flex gap-3 mt-1 md:mt-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${project.title}`}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo de ${project.title}`}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="text-[#ccd6f6] text-base leading-relaxed mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((tech) => (
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