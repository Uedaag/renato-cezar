import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modelo-4")({
  head: () => ({ meta: [{ title: "Despertar Financeiro | Modelo 4" }] }),
  component: () => <PaginaModelo numero={4} />,
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
