import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modelo-3")({
  head: () => ({ meta: [{ title: "Despertar Financeiro | Modelo 3" }] }),
  component: () => <PaginaModelo numero={3} />,
});

function PaginaModelo({ numero }: { numero: number }) {
  return (
    <iframe
      title={`Despertar Financeiro — Modelo ${numero}`}
      src={`/?modelo=${numero}`}
      className="block min-h-screen w-full border-0"
    />
  );
}
