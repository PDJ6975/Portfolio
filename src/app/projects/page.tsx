const projects = [
  {
    title: 'Fantasy Realms',
    stack: 'Spring Boot / React',
    role: 'Desarrollador Full Stack',
    description: 'Aplicación web RESTful con comunicación en tiempo real, pruebas automatizadas y CI/CD.',
    github: 'https://github.com/PDJ6975',
  },
  {
    title: 'M30 Simulator',
    stack: 'Python / NetLogo',
    role: 'Ingeniero de Datos',
    description: 'Modelado predictivo de tráfico vehicular con ML y análisis de grandes datasets.',
    github: 'https://github.com/PDJ6975',
  },
  {
    title: 'NextRead',
    stack: 'React Native / Expo / TypeScript',
    role: 'Desarrollador Full Stack',
    description: 'App móvil multiplataforma con IA para recomendaciones literarias e integración con Google Books.',
    github: 'https://github.com/PDJ6975',
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Proyectos Destacados</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700">{project.title}</h2>
            <span className="text-sm text-gray-500">{project.stack} · {project.role}</span>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-600 hover:underline font-medium">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
} 