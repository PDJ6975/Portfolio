"use client";
import { motion } from "framer-motion";

export default function CVSection() {
  return (
    <motion.section
      id="cv"
      className="py-10 flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        <p className="text-[#8892b0] text-lg leading-relaxed text-justify">Aquí encontrarás un resumen de mi trayectoria y un contacto para que podamos colaborar.</p>
        <div className="bg-[#112240]/60 border border-[#233554] rounded-xl p-8 flex flex-col gap-6 shadow-sm">
          <h3 className="text-2xl font-bold text-white/75 mb-1">Resumen del Currículum</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-[#ccd6f6]">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#64ffda]">Perfil</h4>
              <p>Soy estudiante de último año de Ingeniería de Software en la Universidad de Sevilla con pasión por el desarrollo full-stack y la creación de soluciones innovadoras.</p>
              <p>Promedio actual: 7,94 / 10 · Matrículas de Honor en Redes, Procesamiento de Señales y Diseño/Pruebas.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#64ffda]">Tecnologías clave</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Java / Spring Boot · React / Next.js · React Native</li>
                <li>Python · TensorFlow · scikit-learn</li>
                <li>PostgreSQL · Supabase · Docker · CI/CD</li>
              </ul>
            </div>
            <div className="space-y-2 md:col-span-2">
              <h4 className="font-semibold text-[#64ffda]">Proyectos Destacados</h4>
              <ul className="list-disc list-inside space-y-1 md:columns-2">
                <li>Portfolio Personal (Next.js, Tailwind, Framer Motion)</li>
                <li>Fantasy Realms (Spring Boot, React)</li>
                <li>NextRead (Expo, IA embeddings)</li>
                <li>Game Deals (TypeScript, Apify)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#64ffda]">Idiomas</h4>
              <p>Español (Nativo) · Inglés B2 (Cambridge FCE)</p>
            </div>
          </div>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1PL1XWWX3sJBazu5aHTfEIoV0mQzeP6q7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-max bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10"
        >
          Descargar CV completo →
        </a>
        {/* Información de contacto */}
        <div className="mt-8">
          <p className="text-[#8892b0] text-lg leading-relaxed text-justify">
            ¿Te interesa colaborar? Escríbeme directamente a{" "}
            <a href="mailto:antonito.rodriguez42@gmail.com" className="text-[#64ffda] hover:underline">
              antonito.rodriguez42@gmail.com
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
} 