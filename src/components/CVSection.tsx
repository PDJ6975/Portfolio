"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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
        <p className="text-[#8892b0] text-lg leading-relaxed text-justify">Aquí encontrarás un resumen de mi trayectoria y un formulario para que podamos colaborar.</p>
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
                <li>Gestor de Tareas (Spring Boot & React)</li>
                <li>Fantasy Realms (WebSockets, Swagger)</li>
                <li>M30 Simulator (MLP / LSTM, NetLogo)</li>
                <li>NextRead (Expo, IA embeddings)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#64ffda]">Certificaciones</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Arquitectura de Software en la Nube (2021)</li>
                <li>Scrum Master (2020)</li>
                <li>Programa de Liderazgo (2019)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#64ffda]">Idiomas</h4>
              <p>Español (Nativo) · Inglés B2 (Cambridge FCE)</p>
            </div>
          </div>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1TmtoeHVcXBjSRqGOXrHGa_iWqs7isGMg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-max bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10"
        >
          Descargar CV completo →
        </a>
        {/* Formulario de contacto */}
        <div className="mt-8 flex flex-col gap-6">
          <p className="text-[#8892b0] text-lg leading-relaxed text-justify">¿Te interesa colaborar? Rellena el formulario y hablamos.</p>
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}

// Formulario interno reutilizado
function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Mensaje desde portfolio");
    const body = encodeURIComponent(`Nombre: ${form.nombre}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.mensaje}`);
    window.location.href = `mailto:antonito.rodriguez42@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="text-sm font-medium text-[#ccd6f6]">Nombre</label>
        <input id="nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange} className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda]" placeholder="Tu nombre" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-[#ccd6f6]">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda]" placeholder="tu@email.com" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="mensaje" className="text-sm font-medium text-[#ccd6f6]">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={5} required value={form.mensaje} onChange={handleChange} className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] resize-none" placeholder="Cuéntame tu idea o proyecto..." />
      </div>
      <button type="submit" className="self-start bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10">Enviar mensaje</button>
    </form>
  );
} 