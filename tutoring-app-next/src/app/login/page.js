import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-24 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
      <form className="space-y-4">
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <Button href="/dashboard" text="Entrar" />
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        ¿No tienes cuenta?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
}
