import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";

import heroImg from "@/assets/hero.jpg";
import problemaImg from "@/assets/problema.jpg";
import { useReveal, useScrollProgress } from "@/hooks/useReveal";
import {
  APRENDIZADOS,
  DEPOIMENTOS,
  DESCOBERTAS,
  DIAGNOSTICO,
  ENTREGAVEIS,
  FAQ,
  LINK_CHECKOUT,
  LOTES,
  MODELOS,
  MODELO_PADRAO,
  MOSTRAR_SELETOR,
  OBJECOES,
  PARA_QUEM,
  TOTAL_MODELOS,
  TRANSFORMACOES,
} from "@/lib/copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Despertar Financeiro | Aula ao vivo com Renato Cezar",
      },
      {
        name: "description",
        content:
          "Aula ao vivo de 1h30 para entender por que o dinheiro some mesmo trabalhando muito. Primeiro lote por R$29,90 com 7 dias de garantia.",
      },
      {
        property: "og:title",
        content: "Despertar Financeiro | Aula ao vivo com Renato Cezar",
      },
      {
        property: "og:description",
        content:
          "Entenda a raiz do seu padrão financeiro em uma aula ao vivo de 1h30. Primeiro lote por R$29,90.",
      },
    ],
  }),
  component: PaginaVendas,
});

/* ---------- blocos de apoio ---------- */

function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function Secao({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function BotaoCta({
  children,
  className = "",
  variante = "principal",
}: {
  children: React.ReactNode;
  className?: string;
  variante?: "principal" | "fantasma";
}) {
  const estilo =
    variante === "principal"
      ? "bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--glow-gold)] hover:brightness-108"
      : "border border-border bg-surface-2 text-foreground hover:border-primary/50";
  return (
    <a
      href={LINK_CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`botao-cta inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-center font-display text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:text-base ${estilo} ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------- página ---------- */

function PaginaVendas() {
  const [modelo, setModelo] = useState(MODELO_PADRAO);
  const [trocou, setTrocou] = useState(false);
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  useReveal();
  useScrollProgress();

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("modelo");
    const n = Number(param);
    if (Number.isInteger(n) && n >= 1 && n <= TOTAL_MODELOS) setModelo(n);
  }, []);

  const c = useMemo(() => MODELOS[modelo] ?? MODELOS[MODELO_PADRAO]!, [modelo]);

  const trocarModelo = useCallback((n: number) => {
    setModelo(n);
    setTrocou(false);
    requestAnimationFrame(() => setTrocou(true));
  }, []);

  const anim = trocou ? "copy-troca" : "";

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* ===== barra superior ===== */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div
          className="h-0.5 origin-left bg-[image:var(--gradient-gold)]"
          style={{ transform: "scaleX(var(--scroll-progress, 0))" }}
          aria-hidden="true"
        />
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-5">
          <span className="shrink-0 font-display text-sm font-extrabold uppercase tracking-[0.2em] md:text-base">
            Despertar <span className="texto-ouro">Financeiro</span>
          </span>

          {MOSTRAR_SELETOR && TOTAL_MODELOS > 1 && (
            <div
              role="group"
              aria-label="Selecionar modelo de copy"
              className="seletor-modelos flex max-w-[62%] gap-1.5 overflow-x-auto"
            >
              {Array.from({ length: TOTAL_MODELOS }, (_, i) => i + 1).map((n) => {
                const ativo = n === modelo;
                return (
                  <button
                    key={n}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => trocarModelo(n)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                      ativo
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-surface-2 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Modelo {n}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      <main className="pt-14">
        {/* ===== HERO ===== */}
        <section className="brilho-radial relative overflow-hidden px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <div
            className="grade-sutil pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div data-reveal>
                <Etiqueta>{c.heroEtiqueta}</Etiqueta>
              </div>
              <h1
                data-reveal
                style={{ ["--reveal-delay" as string]: "90ms" }}
                className={`mt-6 text-[2.1rem] font-extrabold leading-[1.06] md:text-6xl ${anim}`}
              >
                {c.heroHeadline}{" "}
                <span className="texto-ouro">{c.heroDestaque}</span>
              </h1>
              <p
                data-reveal
                style={{ ["--reveal-delay" as string]: "160ms" }}
                className={`mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg ${anim}`}
              >
                {c.heroSub}
              </p>
              <p
                data-reveal
                style={{ ["--reveal-delay" as string]: "220ms" }}
                className={`mt-3 max-w-xl text-sm text-foreground/80 ${anim}`}
              >
                {c.heroApoio}
              </p>

              <div
                data-reveal
                style={{ ["--reveal-delay" as string]: "290ms" }}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <BotaoCta className={anim}>{c.ctaPrincipal}</BotaoCta>
                <span className="text-xs text-muted-foreground">{c.microcopy}</span>
              </div>

              <dl
                data-reveal
                style={{ ["--reveal-delay" as string]: "360ms" }}
                className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6"
              >
                {[
                  ["1h30", "de aula ao vivo"],
                  ["R$29,90", "primeiro lote"],
                  ["7 dias", "de garantia"],
                ].map(([valor, rotulo]) => (
                  <div key={rotulo}>
                    <dt className="font-display text-xl font-bold text-primary md:text-2xl">
                      {valor}
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{rotulo}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div data-reveal="zoom" className="relative">
              <div className="superficie flutua overflow-hidden">
                <img
                  src={heroImg}
                  alt="Composição visual sobre clareza e organização financeira"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== faixa de confiança ===== */}
        <div className="border-y border-border bg-surface/60">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-center font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span data-reveal>Aula ao vivo pelo Meet</span>
            <span data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              Grupo de WhatsApp
            </span>
            <span data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
              Replay por 2 dias
            </span>
            <span data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
              2 bônus inclusos
            </span>
          </div>
        </div>

        {/* ===== problema / diagnóstico ===== */}
        <Secao>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal="left" className="superficie overflow-hidden">
              <img
                src={problemaImg}
                alt="Mesa de trabalho à noite com caderno, caneta e contas"
                width={1200}
                height={1408}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div data-reveal="right">
              <Etiqueta>{c.problemaEtiqueta}</Etiqueta>
              <h2 className={`mt-5 text-3xl font-bold md:text-4xl ${anim}`}>
                {c.problemaTitulo}
              </h2>
              <p className={`mt-5 text-muted-foreground md:text-lg ${anim}`}>
                {c.problemaTexto}
              </p>
              <ul className="mt-8 space-y-4">
                {DIAGNOSTICO.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-l-2 border-primary/40 pl-4 text-sm text-foreground/85 md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        {/* ===== transformação ===== */}
        <Secao className="bg-surface/40">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <Etiqueta>{c.transformacaoEtiqueta}</Etiqueta>
            <h2 className={`mt-5 text-3xl font-bold md:text-4xl ${anim}`}>
              {c.transformacaoTitulo}
            </h2>
            <p className={`mt-4 text-muted-foreground ${anim}`}>
              {c.transformacaoTexto}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TRANSFORMACOES.map((t, i) => (
              <article
                key={t.hoje}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                className="superficie cartao p-7"
              >
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Hoje
                </p>
                <p className="mt-2 text-sm text-foreground/75">{t.hoje}</p>
                <div className="my-6 h-px w-full bg-[image:var(--gradient-gold)] opacity-40" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  Depois
                </p>
                <p className="mt-2 text-base font-medium">{t.depois}</p>
              </article>
            ))}
          </div>
        </Secao>

        {/* ===== o que você vai descobrir ===== */}
        <Secao>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal="left">
              <h2 className={`text-3xl font-bold md:text-4xl ${anim}`}>
                {c.descobertaTitulo}
              </h2>
              <p className={`mt-4 text-muted-foreground ${anim}`}>
                {c.descobertaTexto}
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {DESCOBERTAS.map((d, i) => (
                <li
                  key={d}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                  className="superficie cartao p-6"
                >
                  <span className="font-display text-2xl font-extrabold text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Secao>

        {/* ===== o que é + o que aprende ===== */}
        <Secao className="bg-surface/40">
          <div className="grid gap-12 lg:grid-cols-2">
            <div data-reveal>
              <Etiqueta>Como funciona</Etiqueta>
              <h2 className={`mt-5 text-3xl font-bold md:text-4xl ${anim}`}>
                {c.oQueETitulo}
              </h2>
              <p className={`mt-5 text-muted-foreground md:text-lg ${anim}`}>
                {c.oQueETexto}
              </p>
            </div>
            <div>
              <h3 className={`font-display text-xl font-bold ${anim}`}>
                {c.aprenderTitulo}
              </h3>
              <div className="mt-6 space-y-5">
                {APRENDIZADOS.map((a, i) => (
                  <article
                    key={a.numero}
                    data-reveal="right"
                    style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                    className="superficie cartao flex gap-5 p-6"
                  >
                    <span className="font-display text-3xl font-extrabold text-primary/60">
                      {a.numero}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold">{a.titulo}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Secao>

        {/* ===== lotes ===== */}
        <Secao>
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <Etiqueta>{c.ofertaEtiqueta}</Etiqueta>
            <h2 className={`mt-5 text-3xl font-bold md:text-4xl ${anim}`}>
              Escolha o seu lote
            </h2>
            <p className={`mt-4 text-muted-foreground ${anim}`}>{c.ofertaTexto}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {LOTES.map((lote, i) => (
              <article
                key={lote.nome}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                className={`superficie cartao relative flex flex-col p-8 ${
                  lote.ativo
                    ? "border-primary/45 shadow-[var(--glow-gold)]"
                    : "opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                    {lote.nome}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] ${
                      lote.ativo
                        ? "bg-primary text-primary-foreground"
                        : "bg-surface-2 text-muted-foreground"
                    }`}
                  >
                    {lote.status}
                  </span>
                </div>
                <p className="mt-6 font-display text-5xl font-extrabold">
                  <span className="align-super text-lg text-muted-foreground">R$</span>
                  {lote.preco}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  {lote.itens.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {lote.ativo ? (
                  <BotaoCta className="mt-8 w-full">{c.ctaOferta}</BotaoCta>
                ) : (
                  <span className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    Em breve
                  </span>
                )}
              </article>
            ))}
          </div>
        </Secao>

        {/* ===== autoridade ===== */}
        <Secao className="bg-surface/40">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div
              data-reveal="left"
              className="superficie flex aspect-4/5 items-center justify-center p-8 text-center"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                [INSERIR FOTO OFICIAL DE RENATO CEZAR]
              </p>
            </div>
            <div data-reveal="right">
              <Etiqueta>Autoridade</Etiqueta>
              <h2 className={`mt-5 text-3xl font-bold md:text-4xl ${anim}`}>
                {c.autoridadeTitulo}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground md:text-lg">
                <p>
                  Renato Cezar trabalha há mais de 12 anos como analista financeiro.
                  Mesmo cuidando das contas de empresas, ele também viveu dificuldades
                  com o próprio dinheiro.
                </p>
                <p>
                  O momento mais difícil foi não ter dinheiro para pagar uma festa de
                  aniversário para sua filha. Foi ali que ele entendeu uma coisa simples
                  e dura.
                </p>
                <p className="border-l-2 border-primary pl-5 font-display text-lg font-semibold text-foreground md:text-xl">
                  Não basta saber mexer com número. É preciso entender o comportamento
                  por trás das decisões.
                </p>
                <p>
                  Hoje, Renato ensina pessoas a lidarem com dinheiro de forma mais leve,
                  consciente e prática.
                </p>
              </div>
            </div>
          </div>
        </Secao>

        {/* ===== diferencial ===== */}
        <Secao>
          <div
            data-reveal="zoom"
            className="superficie brilho-radial mx-auto max-w-4xl p-10 text-center md:p-16"
          >
            <Etiqueta>Diferencial único</Etiqueta>
            <h2 className={`mt-6 text-3xl font-bold md:text-4xl ${anim}`}>
              {c.diferencialTitulo}
            </h2>
            <p
              className={`mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl ${anim}`}
            >
              {c.diferencialTexto}
            </p>
          </div>
        </Secao>

        {/* ===== para quem é ===== */}
        <Secao className="bg-surface/40">
          <h2
            data-reveal
            className={`text-center text-3xl font-bold md:text-4xl ${anim}`}
          >
            {c.paraQuemTitulo}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div data-reveal="left" className="superficie cartao p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
                É para você se
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-foreground/85 md:text-base">
                {PARA_QUEM.sim.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="right" className="superficie cartao p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Não é para você se
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground md:text-base">
                {PARA_QUEM.nao.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        {/* ===== oferta completa + bônus ===== */}
        <Secao>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <h2 data-reveal className={`text-3xl font-bold md:text-4xl ${anim}`}>
                {c.ofertaTitulo}
              </h2>
              <div className="mt-8 space-y-4">
                {ENTREGAVEIS.map((e, i) => (
                  <div
                    key={e.titulo}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                    className="superficie cartao flex items-start gap-4 p-5"
                  >
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-[image:var(--gradient-gold)]" />
                    <div>
                      <h3 className="font-display text-base font-bold">{e.titulo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside
              data-reveal="right"
              className="superficie brilho-radial h-fit p-8 text-center lg:sticky lg:top-24"
            >
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {c.bonusTitulo}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">Hoje por</p>
              <p className="font-display text-6xl font-extrabold">
                <span className="align-super text-xl text-muted-foreground">R$</span>
                29,90
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Aula ao vivo, grupo de WhatsApp, replay por 2 dias e 2 bônus.
              </p>
              <BotaoCta className="mt-8 w-full">{c.ctaOferta}</BotaoCta>
              <p className="mt-5 text-xs text-muted-foreground">
                7 dias de garantia. Se entender que a aula não é para você, pode pedir
                reembolso dentro do prazo. Simples, sem pressão e sem letras miúdas.
              </p>
            </aside>
          </div>
        </Secao>

        {/* ===== objeções ===== */}
        <Secao className="bg-surface/40">
          <h2
            data-reveal
            className={`mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl ${anim}`}
          >
            {c.objecoesTitulo}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {OBJECOES.map((o, i) => (
              <p
                key={o}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="superficie cartao p-7 text-sm leading-relaxed text-foreground/85 md:text-base"
              >
                {o}
              </p>
            ))}
          </div>
        </Secao>

        {/* ===== prova social ===== */}
        <Secao>
          <h2
            data-reveal
            className={`text-center text-3xl font-bold md:text-4xl ${anim}`}
          >
            {c.provaTitulo}
          </h2>
          <div className="depoimentos mt-12 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <figure
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                className="superficie cartao p-7"
              >
                <span className="font-display text-4xl leading-none text-primary/60">
                  “
                </span>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {d.texto}
                </blockquote>
                <figcaption className="mt-6 font-display text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {d.autor}
                </figcaption>
              </figure>
            ))}
          </div>
        </Secao>

        {/* ===== FAQ ===== */}
        <Secao className="bg-surface/40">
          <div className="mx-auto max-w-3xl">
            <h2
              data-reveal
              className={`text-center text-3xl font-bold md:text-4xl ${anim}`}
            >
              {c.faqTitulo}
            </h2>
            <div className="faq-lista mt-12 space-y-3">
              {FAQ.map((item, i) => {
                const aberto = faqAberto === i;
                return (
                  <div
                    key={item.p}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                    className="superficie overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={aberto}
                      onClick={() => setFaqAberto(aberto ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-sm font-semibold transition-colors hover:text-primary md:text-base"
                    >
                      {item.p}
                      <span
                        aria-hidden="true"
                        className={`text-primary transition-transform duration-300 ${
                          aberto ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: aberto ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {item.r}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Secao>

        {/* ===== CTA final ===== */}
        <Secao className="brilho-radial relative overflow-hidden">
          <div
            className="grade-sutil pointer-events-none absolute inset-0 opacity-50"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl text-center" data-reveal="zoom">
            <h2 className={`text-3xl font-extrabold md:text-5xl ${anim}`}>
              {c.finalTitulo}
            </h2>
            <p className={`mt-6 text-muted-foreground md:text-lg ${anim}`}>
              {c.finalTexto}
            </p>
            <div className="mt-10 flex justify-center">
              <BotaoCta className={anim}>{c.ctaFinal}</BotaoCta>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">{c.microcopy}</p>
          </div>
        </Secao>
      </main>

      {/* ===== rodapé ===== */}
      <footer className="rodape border-t border-border bg-surface/60 px-5 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-base font-extrabold uppercase tracking-[0.2em] text-foreground">
              Despertar <span className="texto-ouro">Financeiro</span>
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed">
              Conteúdo educacional sobre comportamento financeiro. Não constitui
              recomendação de investimento nem promessa de resultado.
              [INSERIR RAZÃO SOCIAL, CNPJ E CONTATO OFICIAL]
            </p>
          </div>
          <div className="text-xs md:text-right">
            <p>[INSERIR E-MAIL DE SUPORTE]</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Renato Cezar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== CTA flutuante mobile ===== */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl md:hidden">
        <BotaoCta className="w-full !px-4 !py-3.5 text-xs">{c.ctaOferta}</BotaoCta>
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
}
