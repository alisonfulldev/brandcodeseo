// Produtos próprios desenvolvidos pela BrandCode. Fonte única para Portfólio,
// Sobre, llms.txt e schema (SoftwareApplication).
export interface Projeto {
  slug: string;
  nome: string;
  tipo: string;
  categoria: string;
  resumo: string;
  descricao: string;
  funcionalidades: string[];
  url?: string;
  cor: string;
  icone: string;
}

export const PROJETOS: Projeto[] = [
  {
    slug: "meetchat",
    nome: "MeetChat",
    tipo: "Sistema de agendamento online",
    categoria: "BusinessApplication",
    resumo: "Link de agendamento para quem trabalha com hora marcada.",
    descricao:
      "Plataforma SaaS em que o cliente marca horário sozinho, 24 horas por dia, por um link na bio do Instagram ou no WhatsApp. Feita para profissionais de beleza, saúde e serviços que perdiam tempo respondendo mensagens para agendar.",
    funcionalidades: [
      "Link de agendamento pronto em 1 minuto",
      "Agenda com horários, serviços e duração",
      "Agendamento pelo Instagram e WhatsApp, 24h",
      "Plano grátis e assinatura",
    ],
    url: "https://meetchat.com.br",
    cor: "from-[#4F46E5] to-[#7C3AED]",
    icone: "📅",
  },
  {
    slug: "b2lead",
    nome: "B2lead",
    tipo: "Sistema de prospecção B2B",
    categoria: "BusinessApplication",
    resumo: "Encontra, qualifica e organiza empresas para o time comercial abordar.",
    descricao:
      "Sistema de prospecção para vendas B2B: monta listas de empresas por segmento e região, qualifica os contatos e acompanha cada oportunidade em um funil, do primeiro contato até a reunião.",
    funcionalidades: [
      "Busca de empresas por segmento e região",
      "Qualificação e enriquecimento de leads",
      "Funil de prospecção com etapas",
      "Abordagem por WhatsApp e e-mail",
    ],
    cor: "from-[#0EA5E9] to-[#1E40AF]",
    icone: "🎯",
  },
  {
    slug: "estudapp",
    nome: "EstudAPP",
    tipo: "Sistema de gestão escolar",
    categoria: "EducationalApplication",
    resumo: "Gestão de escolas e cursos com app para alunos e responsáveis.",
    descricao:
      "Sistema de gestão escolar que reúne matrículas, turmas, notas, frequência, comunicados e financeiro, com acesso para a secretaria, professores, alunos e responsáveis.",
    funcionalidades: [
      "Matrícula e cadastro de turmas",
      "Notas, frequência e boletim",
      "Comunicados para alunos e responsáveis",
      "Mensalidades e controle financeiro",
    ],
    cor: "from-[#10B981] to-[#047857]",
    icone: "🎓",
  },
];
