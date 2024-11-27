import Button from "./components/Button";

export default function HomePage() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Bienvenido a <span className="text-blue-600">TutoringApp</span>
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Conecta estudiantes y tutores de forma sencilla y rápida.
      </p>
      <Button href="/register" text="¡Empieza ahora!" />
    </div>
  );
}
