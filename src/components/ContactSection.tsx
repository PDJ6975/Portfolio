"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 flex flex-col items-start gap-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-start gap-6">
        <p className="text-[#8892b0] text-lg leading-relaxed">
          ¿Tienes alguna pregunta o propuesta interesante? Mi bandeja de entrada está siempre abierta.
        </p>
        <a
          href="mailto:antonito.rodriguez42@gmail.com"
          className="inline-block w-max bg-transparent border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md font-semibold transition-colors hover:bg-[#64ffda]/10"
        >
          Enviar un correo
        </a>
        <div className="flex gap-5 mt-6">
          <a href="https://github.com/PDJ6975" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors font-medium">
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.section>
  );
} 