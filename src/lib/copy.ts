export const LINK_CHECKOUT = "https://pay.kiwify.com.br/QpUXpz0";
export const TOTAL_MODELOS = 4;
export const MODELO_PADRAO = 1;
export const MOSTRAR_SELETOR = true;

export type CopyModel = {
  heroEtiqueta: string;
  heroHeadline: string;
  heroDestaque: string;
  heroSub: string;
  heroApoio: string;
  ctaPrincipal: string;
  microcopy: string;

  problemaEtiqueta: string;
  problemaTitulo: string;
  problemaTexto: string;

  transformacaoEtiqueta: string;
  transformacaoTitulo: string;
  transformacaoTexto: string;

  descobertaTitulo: string;
  descobertaTexto: string;

  oQueETitulo: string;
  oQueETexto: string;

  aprenderTitulo: string;

  ofertaEtiqueta: string;
  ofertaTitulo: string;
  ofertaTexto: string;
  ctaOferta: string;

  autoridadeTitulo: string;

  diferencialTitulo: string;
  diferencialTexto: string;

  paraQuemTitulo: string;

  bonusTitulo: string;

  provaTitulo: string;

  objecoesTitulo: string;

  faqTitulo: string;

  finalTitulo: string;
  finalTexto: string;
  ctaFinal: string;
};

const base = {
  descobertaTexto:
    "Uma aula ao vivo de 1h30 que começa pela raiz do comportamento, não pela planilha.",
  oQueETexto:
    "Despertar Financeiro é uma aula ao vivo de 1h30 para quem quer entender por que perde o controle do dinheiro mesmo trabalhando muito. Você entra pelo grupo de WhatsApp e participa da aula pelo Meet.",
  diferencialTexto:
    "A maioria tenta controlar o dinheiro com planilha. O Despertar Financeiro começa antes disso: nas crenças, nos comportamentos e nas decisões automáticas que fazem você perder o controle sem perceber.",
};

export const MODELOS: Record<number, CopyModel> = {
  1: {
    heroEtiqueta: "Aula ao vivo • 1h30 • acesso pelo grupo de WhatsApp",
    heroHeadline: "Você trabalha o mês inteiro e mesmo assim o dinheiro",
    heroDestaque: "some antes da vida andar",
    heroSub:
      "Talvez o problema não seja só falta de dinheiro. Talvez sejam crenças, hábitos e decisões automáticas te levando sempre para o mesmo lugar.",
    heroApoio: "Primeiro lote por R$29,90. Garantia de 7 dias.",
    ctaPrincipal: "Quero entrar no Despertar Financeiro",
    microcopy: "Pagamento seguro • Replay por 2 dias • 7 dias de garantia",

    problemaEtiqueta: "O diagnóstico",
    problemaTitulo: "As primeiras coisas que você precisa entender",
    problemaTexto:
      "Seu dinheiro não some do nada. Ele segue um padrão. Enquanto você não entende a raiz, você organiza por alguns dias e depois volta para o mesmo lugar.",

    transformacaoEtiqueta: "Hoje e depois",
    transformacaoTitulo: "O que muda quando você enxerga o padrão",
    transformacaoTexto:
      "Não é sobre ganhar mais amanhã. É sobre parar de decidir no automático a partir de hoje.",

    descobertaTitulo: "O que você vai descobrir",
    descobertaTexto: base.descobertaTexto,

    oQueETitulo: "O que é o Despertar Financeiro",
    oQueETexto: base.oQueETexto,

    aprenderTitulo: "O que você vai aprender",

    ofertaEtiqueta: "Oferta",
    ofertaTitulo: "Tudo o que você recebe hoje",
    ofertaTexto:
      "A aula é ao vivo. O valor de entrada é para filtrar quem realmente quer começar.",
    ctaOferta: "Quero minha vaga por R$29,90",

    autoridadeTitulo: "Quem conduz a aula",

    diferencialTitulo: "O diferencial",
    diferencialTexto: base.diferencialTexto,

    paraQuemTitulo: "Para quem é e para quem não é",
    bonusTitulo: "Presentes exclusivos",
    provaTitulo: "O que dizem quem já participou",
    objecoesTitulo: "Por que isso é essencial para você",
    faqTitulo: "Perguntas frequentes",

    finalTitulo: "O primeiro passo não é se culpar. É enxergar o padrão.",
    finalTexto:
      "Uma aula ao vivo, 1h30, R$29,90 no primeiro lote. Se não for para você, tem 7 dias de garantia.",
    ctaFinal: "Garantir minha vaga agora",
  },

  2: {
    heroEtiqueta: "Aula ao vivo • 1h30 • acesso pelo grupo de WhatsApp",
    heroHeadline: "O salário cai, as contas engolem e você promete que mês que vem",
    heroDestaque: "vai ser diferente",
    heroSub:
      "Em uma aula ao vivo por R$29,90 você vai entender por que perde o controle financeiro mesmo sabendo que precisa se organizar.",
    heroApoio: "Sem julgamento, sem planilha mágica, sem promessa de dinheiro rápido.",
    ctaPrincipal: "Quero assumir o controle",
    microcopy: "Pagamento seguro • Replay por 2 dias • 7 dias de garantia",

    problemaEtiqueta: "O que ninguém te conta",
    problemaTitulo: "Você abre o aplicativo do banco e sente um aperto no peito",
    problemaTexto:
      "Você já tentou anotar gastos, cortar besteira e recomeçar na segunda. Durou alguns dias. Depois a vida voltou ao normal e o saldo também.",

    transformacaoEtiqueta: "Hoje e depois",
    transformacaoTitulo: "Como é viver sem esse peso todo mês",
    transformacaoTexto:
      "Imagina chegar no fim do mês e saber exatamente para onde o dinheiro foi, sem culpa e sem susto.",

    descobertaTitulo: "O que você vai levar dessa aula",
    descobertaTexto: base.descobertaTexto,

    oQueETitulo: "O encontro que começa pela raiz",
    oQueETexto: base.oQueETexto,

    aprenderTitulo: "O que a aula vai destravar em você",

    ofertaEtiqueta: "Sua vaga",
    ofertaTitulo: "O que está incluído",
    ofertaTexto:
      "A aula é ao vivo. O valor de entrada é para filtrar quem realmente quer começar.",
    ctaOferta: "Quero minha vaga por R$29,90",

    autoridadeTitulo: "Alguém que também já passou por isso",

    diferencialTitulo: "Por que aqui é diferente",
    diferencialTexto: base.diferencialTexto,

    paraQuemTitulo: "Talvez isso seja exatamente para você",
    bonusTitulo: "Você ainda recebe",
    provaTitulo: "Histórias de quem parou de repetir o ciclo",
    objecoesTitulo: "Por que cada mês que passa pesa mais",
    faqTitulo: "Dúvidas honestas, respostas diretas",

    finalTitulo: "Mês que vem pode ser diferente de verdade",
    finalTexto:
      "Uma aula ao vivo, 1h30, R$29,90 no primeiro lote. Se não for para você, tem 7 dias de garantia.",
    ctaFinal: "Quero começar agora",
  },

  3: {
    heroEtiqueta: "Aula ao vivo • 1h30 • acesso pelo grupo de WhatsApp",
    heroHeadline: "Você acha que precisa ganhar mais, mas talvez precise entender",
    heroDestaque: "por que sempre volta ao mesmo lugar",
    heroSub:
      "Antes de tentar outra planilha, você precisa enxergar as crenças e comportamentos que mandam nas suas decisões com dinheiro.",
    heroApoio: "Método simples, aplicado ao vivo, com um primeiro passo claro no final.",
    ctaPrincipal: "Quero entender meu padrão",
    microcopy: "Pagamento seguro • Replay por 2 dias • 7 dias de garantia",

    problemaEtiqueta: "A lógica do problema",
    problemaTitulo: "Ganhar mais não resolve se a decisão continua a mesma",
    problemaTexto:
      "Planilha mostra o problema, mas não muda sozinha o seu comportamento. Sem entender a raiz, qualquer sistema dura poucos dias.",

    transformacaoEtiqueta: "Antes e depois",
    transformacaoTitulo: "A mudança acontece na decisão, não na planilha",
    transformacaoTexto:
      "Quando você percebe o gatilho antes de agir, o controle deixa de depender de força de vontade.",

    descobertaTitulo: "O que fica claro ao final da aula",
    descobertaTexto: base.descobertaTexto,

    oQueETitulo: "Como funciona na prática",
    oQueETexto: base.oQueETexto,

    aprenderTitulo: "As duas etapas da aula",

    ofertaEtiqueta: "Composição da oferta",
    ofertaTitulo: "O que você recebe, item por item",
    ofertaTexto:
      "A aula é ao vivo. O valor de entrada é para filtrar quem realmente quer começar.",
    ctaOferta: "Quero minha vaga por R$29,90",

    autoridadeTitulo: "Quem está por trás do conteúdo",

    diferencialTitulo: "A diferença de abordagem",
    diferencialTexto: base.diferencialTexto,

    paraQuemTitulo: "Critérios de encaixe",
    bonusTitulo: "Itens adicionais incluídos",
    provaTitulo: "Resultados relatados",
    objecoesTitulo: "As objeções mais comuns, respondidas",
    faqTitulo: "Perguntas frequentes",

    finalTitulo: "Entenda o padrão e o resto fica muito mais simples",
    finalTexto:
      "Uma aula ao vivo, 1h30, R$29,90 no primeiro lote. Se não for para você, tem 7 dias de garantia.",
    ctaFinal: "Garantir vaga no primeiro lote",
  },

  4: {
    heroEtiqueta: "Com Renato Cezar • analista financeiro há mais de 12 anos",
    heroHeadline: "12 anos cuidando das contas de empresas para descobrir o que",
    heroDestaque: "trava o dinheiro das pessoas",
    heroSub:
      "Uma aula ao vivo de 1h30 sobre a raiz do comportamento financeiro, conduzida por quem lida com números todos os dias e também já viveu o aperto.",
    heroApoio: "Primeiro lote por R$29,90. Garantia de 7 dias.",
    ctaPrincipal: "Quero aprender com o Renato",
    microcopy: "Pagamento seguro • Replay por 2 dias • 7 dias de garantia",

    problemaEtiqueta: "Da experiência dele",
    problemaTitulo: "O que 12 anos de análise financeira mostraram",
    problemaTexto:
      "Não basta saber mexer com número. É preciso entender o comportamento por trás das decisões. Foi assim com empresas e é assim com pessoas.",

    transformacaoEtiqueta: "Hoje e depois",
    transformacaoTitulo: "O caminho que ele ensina a percorrer",
    transformacaoTexto:
      "Do automático para a consciência, com clareza sobre o próximo passo real.",

    descobertaTitulo: "O que será apresentado ao vivo",
    descobertaTexto: base.descobertaTexto,

    oQueETitulo: "A aula",
    oQueETexto: base.oQueETexto,

    aprenderTitulo: "O conteúdo da aula",

    ofertaEtiqueta: "Oferta",
    ofertaTitulo: "Tudo o que está incluído",
    ofertaTexto:
      "A aula é ao vivo. O valor de entrada é para filtrar quem realmente quer começar.",
    ctaOferta: "Quero minha vaga por R$29,90",

    autoridadeTitulo: "Renato Cezar",

    diferencialTitulo: "O que sustenta essa abordagem",
    diferencialTexto: base.diferencialTexto,

    paraQuemTitulo: "Para quem esta aula foi desenhada",
    bonusTitulo: "Bônus incluídos",
    provaTitulo: "Depoimentos",
    objecoesTitulo: "Por que isso é essencial para você",
    faqTitulo: "Perguntas frequentes",

    finalTitulo: "Entender o comportamento é o que sustenta qualquer plano",
    finalTexto:
      "Uma aula ao vivo, 1h30, R$29,90 no primeiro lote. Se não for para você, tem 7 dias de garantia.",
    ctaFinal: "Quero participar ao vivo",
  },
};

export const DESCOBERTAS = [
  "Por que o dinheiro parece sumir, mesmo quando você tenta se organizar.",
  "Como suas crenças sobre dinheiro afetam suas escolhas do dia a dia.",
  "Quais gatilhos fazem você gastar, se justificar e depois se arrepender.",
  "Qual é o primeiro passo para parar de voltar sempre para o mesmo lugar.",
];

export const TRANSFORMACOES = [
  {
    hoje: "Você trabalha, recebe e sente que nada muda.",
    depois: "Você começa a entender para onde seu dinheiro vai.",
  },
  {
    hoje: "Você se culpa depois que erra.",
    depois: "Você aprende a perceber suas decisões antes de repetir o erro.",
  },
  {
    hoje: "Você vive no automático.",
    depois: "Você começa a retomar o controle.",
  },
];

export const DIAGNOSTICO = [
  "Ganhar mais não resolve se você continuar decidindo do mesmo jeito.",
  "Planilha mostra o problema, mas não muda sozinha o seu comportamento.",
  "Seu dinheiro não some do nada. Ele segue um padrão.",
  "Sem entender a raiz, você organiza por alguns dias e depois volta para o mesmo lugar.",
];

export const APRENDIZADOS = [
  {
    numero: "01",
    titulo: "A raiz do seu padrão financeiro",
    texto:
      "Como crenças, emoções e hábitos influenciam suas decisões com dinheiro.",
  },
  {
    numero: "02",
    titulo: "O primeiro passo para sair do automático",
    texto:
      "O que precisa mudar antes de tentar controlar gastos, criar reserva ou investir.",
  },
];

export const LOTES = [
  {
    nome: "1º lote",
    status: "Atual",
    preco: "29,90",
    ativo: true,
    itens: ["Aula ao vivo de 1h30", "Grupo de WhatsApp", "Replay por 2 dias + 2 bônus"],
  },
  {
    nome: "2º lote",
    status: "Próximo",
    preco: "89,70",
    ativo: false,
    itens: ["Aula ao vivo de 1h30", "Mesmo conteúdo", "Próximo lote"],
  },
  {
    nome: "3º lote",
    status: "Final",
    preco: "179,40",
    ativo: false,
    itens: ["Aula ao vivo de 1h30", "Mesmos bônus", "Último lote"],
  },
];

export const ENTREGAVEIS = [
  {
    titulo: "Aula ao vivo Despertar Financeiro",
    texto: "1h30 para entender a raiz do seu padrão com dinheiro.",
  },
  {
    titulo: "Grupo de WhatsApp",
    texto: "Avisos, links, lembretes e informações da aula.",
  },
  {
    titulo: "Replay por 2 dias",
    texto: "Para assistir novamente dentro do prazo informado.",
  },
  {
    titulo: "Bônus 1 — Encontro com Renato",
    texto: "Um encontro para aprofundar dúvidas e trazer mais clareza.",
  },
  {
    titulo: "Bônus 2 — E-book Perfis Financeiros",
    texto: "Para entender melhor o seu jeito de lidar com dinheiro.",
  },
];

export const PARA_QUEM = {
  sim: [
    "Quem trabalha, recebe e mesmo assim vive no limite.",
    "Quem abre o aplicativo do banco e sente um aperto no peito.",
    "Quem já tentou anotar gastos ou economizar e voltou aos mesmos hábitos.",
    "Quem quer parar de se sabotar e entender a raiz do problema.",
  ],
  nao: [
    "Quem busca fórmula mágica, dinheiro rápido ou promessa fácil.",
    "Quem não quer encarar a própria realidade.",
  ],
};

export const OBJECOES = [
  "Porque cada mês que passa sem clareza vira mais um mês de culpa.",
  "Porque você já sabe que precisa mudar, mas ainda não entendeu por que não consegue manter.",
  "Porque continuar fugindo do saldo e da fatura só aumenta o peso.",
  "Porque o primeiro passo não é se culpar, é enxergar o padrão que te prende.",
];

export const DEPOIMENTOS = [
  {
    texto:
      "[INSERIR DEPOIMENTO REAL — transformação antes e depois, com autorização do cliente]",
    autor: "[NOME DO ALUNO]",
  },
  {
    texto:
      "[INSERIR DEPOIMENTO REAL — transformação antes e depois, com autorização do cliente]",
    autor: "[NOME DO ALUNO]",
  },
  {
    texto:
      "[INSERIR DEPOIMENTO REAL — transformação antes e depois, com autorização do cliente]",
    autor: "[NOME DO ALUNO]",
  },
];

export const FAQ = [
  {
    p: "Isso serve para quem ganha pouco?",
    r: "Sim. Quando o dinheiro é curto, cada decisão pesa ainda mais.",
  },
  {
    p: "Eu preciso expor minha situação no grupo?",
    r: "Não. Você entra para receber informações e participar da aula. Não precisa contar sua vida.",
  },
  {
    p: "É só mais uma aula de planilha?",
    r: "Não. A aula começa pela raiz: crenças, comportamento e decisões com dinheiro.",
  },
  {
    p: "Em uma aula eu já vou resolver minha vida financeira?",
    r: "Não tudo. Mas vai entender por que volta sempre para o mesmo lugar e qual é o primeiro passo.",
  },
  {
    p: "E se eu comprar e me arrepender?",
    r: "Você tem 7 dias de garantia para pedir reembolso dentro do prazo.",
  },
  {
    p: "Como recebo o acesso?",
    r: "Após a compra você entra no grupo de WhatsApp e participa da aula pelo Meet.",
  },
];
