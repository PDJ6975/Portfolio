"use client";
import { useEffect, useState } from "react";
import { GithubIcon } from "lucide-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const sections = [
  { id: "home", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "cv", label: "Currículum" },
  { id: "contact", label: "Contacto" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:flex flex-col justify-between items-start w-72 min-w-[280px] max-w-[320px] h-fit mt-0 rounded-2xl bg-[#112240] p-10 shadow-lg border border-[#233554]" aria-label="Barra lateral de navegación">
      <div className="w-full">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1 leading-tight">Antonio Rodríguez</h1>
        <h2 className="text-base font-semibold text-[#64ffda] mb-8">Ingeniero de Software</h2>
        <nav className="flex flex-col gap-1 mt-8 text-base font-medium" role="navigation" aria-label="Navegación principal">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group flex items-center gap-3 pl-0 py-2 pr-4 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#112240] ${
                active === section.id
                  ? "text-white font-bold"
                  : "text-[#8892b0] hover:text-[#64ffda]"
              }`}
              tabIndex={0}
              aria-current={active === section.id ? "page" : undefined}
            >
              <span className={`block w-2 h-2 rounded-full mr-2 transition-all ${active === section.id ? 'bg-[#64ffda]' : 'bg-transparent group-hover:bg-[#64ffda]'}`}></span>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex gap-5 mt-8 text-2xl ml-1">
        <a href="https://github.com/PDJ6975" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Antonio Rodríguez Calderón" className="text-[#8892b0] hover:text-[#64ffda] transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#112240]">
          <GithubIcon className="w-7 h-7" />
        </a>
        <a href="mailto:antonito.rodriguez42@gmail.com" aria-label="Enviar email a Antonio Rodríguez Calderón" className="text-[#8892b0] hover:text-[#64ffda] transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#112240]">
          <EnvelopeIcon className="w-7 h-7" />
        </a>
      </div>
    </aside>
  );
} 