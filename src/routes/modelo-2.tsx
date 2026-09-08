import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modelo-2")({
  head: () => ({ meta: [{ title: "Despertar Financeiro | Modelo 2" }] }),
  component: () => <PaginaModelo numero={2} />,
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
