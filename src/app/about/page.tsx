export default function About() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-2">Sobre mí</h1>
      <p className="text-lg text-gray-700">
        Soy Antonio Rodríguez Calderón, estudiante de último año de Ingeniería de Software en la Universidad de Sevilla. Tengo experiencia profesional en el desarrollo de aplicaciones web, especializado en Java y frameworks como Spring Boot y React. Me apasiona el desarrollo full stack y la creación de soluciones innovadoras.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Experiencia con metodologías ágiles y control de versiones (Git, GitHub Actions).</li>
        <li>Conocimientos en pruebas automatizadas, CI/CD y documentación técnica.</li>
        <li>Busco oportunidades de prácticas o puestos junior para aportar valor y crecer profesionalmente.</li>
      </ul>
      <div className="mt-4">
        <span className="font-semibold">Ubicación:</span> Sevilla, España<br/>
        <span className="font-semibold">Email:</span> <a href="mailto:antonito.rodriguez42@gmail.com" className="text-blue-600 hover:underline">antonito.rodriguez42@gmail.com</a>
      </div>
    </section>
  );
} 