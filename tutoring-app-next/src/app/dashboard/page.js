import Card from "../components/Card";

export default function DashboardPage() {
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold text-center mb-8">Tu Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Mis clases" description="Consulta tus clases agendadas." />
        <Card
          title="Estadísticas"
          description="Mira tu progreso de aprendizaje."
        />
        <Card
          title="Configuración"
          description="Actualiza tu perfil y preferencias."
        />
      </div>
    </div>
  );
}
