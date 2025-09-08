"use client";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    year: "2025",
    title: "Portfolio Personal (este sitio)",
    description:
      "Portfolio profesional desarrollado con Next.js y exportación para GitHub Pages. Incluye efectos de partículas, animaciones fluidas con Framer Motion y navegación responsive optimizada.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/PDJ6975/Portfolio",
    demo: "https://pdj6975.github.io/Portfolio/",
  },
  {
    year: "2024",
    title: "Fantasy Realms",
    description:
      "Juego de cartas online basado en Fantasy Realms. API REST con Spring Boot, cliente React y comunicación en tiempo real mediante WebSockets. Documentación OpenAPI y CI/CD.",
    tech: ["Spring Boot", "React", "WebSockets", "Swagger"],
    github: "https://github.com/PDJ6975/FantasyRealms",
    demo: "",
  },
  {
    year: "2025",
    title: "NextRead",
    description:
      "Web de recomendación de libros usando IA (GPT-4). Construida con Spring Boot (Java), Next.js (JavaScript) y Supabase como BD. Implementa un sistema de autenticación por token jwt y verificación por email. Desarrollo cerrado por intento comercial.",
    tech: ["Next.js", "Spring Boot", "Java", "Supabase", "JavaScript"],
    github: "",
    demo: "https://pdj6975.github.io/NextRead",
  },
  {
    year: "AHORA",
    title: "Game Deals",
    description:
      "Scrapper stateless en TypeScript sobre Apify para obtener ofertas y noticias sobre videojuegos. Actualmente en desarrollo cerrado cerca del MVP.",
    tech: ["Python", "TensorFlow", "scikit-learn", "NetLogo"],
    github: "",
    demo: "",
  }
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-10 flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-transparent border border-transparent rounded-xl p-8 flex flex-col gap-2 transition-all duration-200 hover:bg-[#112240]/60 hover:border-[#233554]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-[#8892b0]">{project.year}</span>
                <h2 className="text-2xl font-bold text-white/75">{project.title}</h2>
              </div>
              <div className="flex gap-3 mt-1 md:mt-0">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${project.title}`}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                ) : (
                  <div
                    className="text-[#8892b0] opacity-50 cursor-not-allowed relative"
                    title="Repositorio privado - Desarrollo comercial"
                  >
                    <GithubIcon className="w-6 h-6" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-[#8892b0] rotate-45"></div>
                    </div>
                  </div>
                )}
{project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Demo de ${project.title}`}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                ) : (
                  <div
                    className="text-[#8892b0] opacity-50 cursor-not-allowed relative"
                    title="Demo no disponible - Solo código fuente"
                  >
                    <ExternalLink className="w-6 h-6" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-[#8892b0] rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[#ccd6f6] text-base leading-relaxed text-justify mb-1">{project.description}</p>
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
        {/* Enlace a todos los proyectos */}
        <div className="mt-4 flex justify-end">
          <a
            href="https://github.com/PDJ6975"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#64ffda] hover:text-[#9effea] font-semibold transition-colors"
          >
            Ver todos los proyectos
            <GithubIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
} 