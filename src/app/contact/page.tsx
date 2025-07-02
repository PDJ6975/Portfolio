export default function Contact() {
  return (
    <section className="max-w-xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-2">Contacto</h1>
      <form className="flex flex-col gap-4 bg-white rounded-xl shadow p-6 border">
        <input type="text" placeholder="Nombre" className="border rounded px-4 py-2" required />
        <input type="email" placeholder="Email" className="border rounded px-4 py-2" required />
        <textarea placeholder="Mensaje" className="border rounded px-4 py-2 min-h-[100px]" required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Enviar</button>
      </form>
      <div className="flex gap-6 justify-center mt-4">
        <a href="mailto:antonito.rodriguez42@gmail.com" className="text-blue-600 hover:underline font-medium">antonito.rodriguez42@gmail.com</a>
        <a href="https://github.com/PDJ6975" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">GitHub</a>
      </div>
    </section>
  );
} 