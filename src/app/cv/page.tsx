export default function CV() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-2">Currículum</h1>
      <div className="bg-white rounded-xl shadow p-6 border flex flex-col gap-4">
        <div>
          <span className="font-semibold">Nombre:</span> Antonio Rodríguez Calderón
        </div>
        <div>
          <span className="font-semibold">Formación:</span> Ingeniería de Software, Universidad de Sevilla (2022 - Actualidad)
        </div>
        <div>
          <span className="font-semibold">Promedio:</span> 7,94 / 10
        </div>
        <div>
          <span className="font-semibold">Idiomas:</span> Español (Nativo), Inglés (B2 - Cambridge First Certificate)
        </div>
        <div>
          <span className="font-semibold">Certificaciones:</span> Arquitectura de Software en la Nube, Scrum Master, Liderazgo y Trabajo en Equipo
        </div>
        <div>
          <span className="font-semibold">Habilidades Técnicas:</span> Java, Python, JavaScript/TypeScript, Spring Boot, React, React Native, pandas, NumPy, scikit-learn, TensorFlow, Keras, Matplotlib, MySQL, PostgreSQL, H2, Supabase, JPA/Hibernate, Git, Maven, SonarCloud, Jupyter, Docusaurus, Scrum, CI/CD, JUnit, Mockito
        </div>
        <a href="/cv.pdf" download className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Descargar CV en PDF</a>
      </div>
    </section>
  );
} 