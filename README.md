# Portfolio Personal - Antonio Rodríguez Calderón

[![Deploy to GitHub Pages](https://github.com/PDJ6975/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/PDJ6975/Portfolio/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> **🌐 Ver en vivo:** [https://pdj6975.github.io/Portfolio/](https://pdj6975.github.io/Portfolio/)

Portfolio desarrollado con Next.js y optimizado para exportación estática. Presenta mis proyectos, habilidades y experiencia como estudiante de **Ingeniería del Software**.

## ✨ Características

- **🎨 Diseño moderno**: Tema oscuro con efectos de partículas interactivos
- **📱 Totalmente responsive**: Adaptado para desktop, tablet y móvil
- **⚡ Animaciones fluidas**: Transiciones con Framer Motion
- **🧭 Navegación intuitiva**: Sidebar fijo con detección automática de sección activa
- **♿ Accesibilidad mejorada**: Cumple estándares WCAG
- **🚀 Performance optimizada**: Exportación estática para carga rápida

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Efectos**: TSParticles para fondo interactivo
- **Iconos**: Heroicons & Lucide React
- **Despliegue**: GitHub Pages con GitHub Actions

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Comandos disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (con Turbopack)
npm run dev

# Construir para producción
npm run build

# Desplegar a GitHub Pages
npm run deploy

# Linting
npm run lint
```

### Desarrollo local
1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Inicia el servidor: `npm run dev`
4. Abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── about/          # Página sobre mí
│   ├── projects/       # Página de proyectos
│   ├── cv/            # Página currículum
│   └── globals.css    # Estilos globales
├── components/         # Componentes reutilizables
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── CVSection.tsx
│   ├── Sidebar.tsx
│   ├── ParticlesBackground.tsx
│   └── CursorSpotlight.tsx
└── [configuraciones]
```

## 🎯 Secciones del Portfolio

### 📋 Sobre mí
Introducción personal y enfoque profesional como desarrollador full-stack.

### 💼 Proyectos Destacados
- **Portfolio Personal**: Este mismo sitio (Next.js, Tailwind, Framer Motion)
- **Fantasy Realms**: Juego de cartas con Spring Boot y React
- **NextRead**: App móvil de recomendaciones con IA (desarrollo comercial)
- **Game Deals**: Scrapper de ofertas gaming (en desarrollo)

### 📄 Currículum
Resumen de experiencia, tecnologías, certificaciones e información de contacto.

## 🚀 Despliegue

El portfolio se despliega automáticamente en GitHub Pages mediante GitHub Actions:

1. **Push a main** → Trigger automático
2. **Build estático** → Generación en `/out`
3. **Deploy** → Publicación en `gh-pages` branch

### Configuración para GitHub Pages
- Exportación estática habilitada (`output: "export"`)
- Base path configurado para GitHub Pages
- Imágenes sin optimización para compatibilidad estática
- Trailing slash para rutas correctas

## 📧 Contacto

¿Te interesa colaborar? Escríbeme directamente a **antonito.rodriguez42@gmail.com**

## 📄 Licencia

Este proyecto es de uso personal y profesional. El código está disponible públicamente para referencia y aprendizaje.

---

**🔗 Enlaces importantes:**
- [Portfolio en vivo](https://pdj6975.github.io/Portfolio/)
- [Mi GitHub](https://github.com/PDJ6975)
- [Mi LinkedIn](https://www.linkedin.com/in/antonio-rodr%C3%ADguez-calder%C3%B3n-238b84254/)

---
*Desarrollado con ❤️ por Antonio Rodríguez Calderón · © 2025*