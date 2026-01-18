"use client";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos destacados" },
  { id: "cv", label: "Currículum" },
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
    <aside className="hidden md:flex flex-col justify-between items-start w-80 pr-10 pb-12 sticky top-32 self-start h-[calc(100vh-6rem)]" aria-label="Barra lateral de navegación">
      <div className="w-full">
        <h1 className="text-4xl font-extrabold tracking-tight text-white/75 mb-1 leading-tight">Antonio Rodríguez</h1>
        <h2 className="text-lg font-semibold text-[#64ffda]">Estudiante de Ingeniería de Software</h2>
        <p className="text-[#8892b0] text-base md:text-lg leading-relaxed mt-3 mb-10 max-w-sm">
          Construyo proyectos completos en mis ratos libres para aprender.
        </p>
        <nav className="flex flex-col gap-1 mt-8 text-[17px] font-medium" role="navigation" aria-label="Navegación principal">
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
              <span className={`block w-1 h-5 mr-3 transition-all ${active === section.id ? 'bg-[#64ffda]' : 'bg-transparent group-hover:bg-[#64ffda]'}`}></span>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex gap-5 mt-12 text-2xl">
        <a href="https://github.com/PDJ6975" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Antonio Rodríguez Calderón" className="text-[#8892b0] hover:text-[#64ffda] transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2">
          <GithubIcon className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/antonio-rodr%C3%ADguez-calder%C3%B3n-238b84254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Antonio Rodríguez Calderón" className="text-[#8892b0] hover:text-[#64ffda] transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2">
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
} 