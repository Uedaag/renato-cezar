import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/modelo-1")({
  head: () => ({ meta: [{ title: "Despertar Financeiro | Modelo 1" }] }),
  component: () => <PaginaModelo numero={1} />,
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
