import { Benefit, Step } from '@/types/intex';

export const BENEFITS: Benefit[] = [
  {
    title: "Juridicamente Válido",
    description: "Modelos criados por especialistas e atualizados automaticamente.",
    icon: "⚖️"
  },
  {
    icon: "💸",
    title: "Economize até 90%",
    description: "Custos até 10x menores que consultoria tradicional"
  },
  {
    icon: "⏱️",
    title: "Rápido e Prático",
    description: "Geração de documentos em menos de 5 minutos"
  }
  // Adicione outros benefícios...
];

export const CTA_CONTENT = {
  title: "Pronto para Proteger Seu Negócio?",
  subtitle: "Comece agora mesmo e evite multas desnecessárias",
  buttonText: "🚀 Começar Agora pelo WhatsApp"
};

export const STEPS: Step[] = [
  { number: 1, description: "Clique em 'Gerar Documento'" },
  { number: 2, description: "Preencha o questionário rápido" },
  { number: 3, description: "Receba o PDF via WhatsApp" },
  { number: 4, description: "Personalize se necessário" }
];

// lib/constants.ts
export const FEATURE_COMPARISON = [
  {
    name: "Documentos por mês",
    description: "Quantidade máxima de documentos gerados",
    basic: "3",
    premium: "Ilimitado"
  },
  {
    name: "Atualizações automáticas",
    description: "Ajustes automáticos conforme mudanças na legislação",
    basic: false,
    premium: true
  },
  {
    name: "Suporte prioritário",
    description: "Tempo de resposta garantido em até 2h",
    basic: false,
    premium: true
  },
  {
    name: "Assinatura digital",
    description: "Integração com serviços de assinatura eletrônica",
    basic: false,
    premium: true
  },
  {
    name: "Modelos premium",
    description: "Acesso a modelos para nichos específicos",
    basic: "3 modelos",
    premium: "Todos os modelos"
  }
];

export const DOCUMENT_TYPES = {
  ECOMMERCE: 'politica-privacidade-ecommerce',
  SERVICE: 'contrato-prestacao-servico',
  APP: 'termos-uso-app',
  FREELANCE: 'contrato-freelancer',
  DEFAULT: 'termos-uso-generico'
};

export const PRICING = {
  BASIC: 29,
  PREMIUM: 99
};