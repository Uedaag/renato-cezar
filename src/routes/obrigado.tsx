import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada | Despertar Financeiro" },
      {
        name: "description",
        content: "Sua vaga no Despertar Financeiro foi confirmada.",
      },
    ],
  }),
  component: PaginaObrigado,
});

function PaginaObrigado() {
  return (
    <main className="brilho-radial flex min-h-screen items-center overflow-hidden bg-background px-5 py-24 font-body text-foreground">
      <div className="grade-sutil pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <section className="superficie brilho-interno relative mx-auto w-full max-w-2xl p-8 text-center md:p-14">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-primary font-display text-3xl font-extrabold text-primary-foreground" aria-hidden="true">✓</span>
        <p className="mt-7 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Inscrição confirmada</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">Obrigado por garantir sua vaga no <span className="texto-ouro">Despertar Financeiro</span>.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Você receberá as informações de acesso à aula ao vivo pelo grupo de WhatsApp.</p>
        <div className="mt-10 border-t border-border pt-7 text-sm text-muted-foreground">Guarde a confirmação da sua compra e acompanhe as instruções enviadas após o pagamento.</div>
        <a href="/" className="mt-9 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-gold)] px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-primary-foreground shadow-[var(--glow-gold)] transition-all hover:-translate-y-0.5">Voltar para a página inicial</a>
      </section>
    </main>
  );
}
