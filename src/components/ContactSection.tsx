"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-10 flex flex-col items-start gap-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-start gap-6">
        <p className="text-[#8892b0] text-lg leading-relaxed">
          ¿Tienes alguna pregunta o propuesta interesante? Completa el formulario y me pondré en contacto contigo lo antes posible.
        </p>

        {/* Formulario de contacto */}
        <ContactForm />

        {/* Enlace eliminado para reducir elementos redundantes */}
      </div>
    </motion.section>
  );
}

// Componente interno
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
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          placeholder="Tu nombre"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-[#ccd6f6]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          placeholder="tu@email.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="mensaje" className="text-sm font-medium text-[#ccd6f6]">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          className="bg-transparent border border-[#233554] rounded-md px-3 py-2 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] resize-none"
          placeholder="Cuéntame tu idea o proyecto..."
        />
      </div>
      <button
        type="submit"
        className="self-start bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10"
      >
        Enviar mensaje
      </button>
    </form>
  );
} 