import Input from "../components/Input";
import Button from "../components/Button";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-24 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Crear una cuenta</h1>
      <form className="space-y-4">
        <Input type="text" placeholder="Nombre completo" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Button href="/dashboard" text="Registrarse" />
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Inicia sesión aquí
        </a>
      </p>
    </div>
  );
}
