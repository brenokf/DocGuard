# DocGuard

DocGuard é uma aplicação web desenvolvida com [Next.js](https://nextjs.org) que tem como objetivo fornecer uma experiência moderna e responsiva para demonstrar planos, recursos e explicações do funcionamento do serviço. Inspirado em temas jurídicos, o projeto utiliza uma interface atraente e componentes interativos, seguindo as melhores práticas de design e desenvolvimento web.

## Sumário

- [DocGuard](#docguard)
  - [Sumário](#sumário)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Contexto da Aplicação](#contexto-da-aplicação)
  - [Melhores Práticas](#melhores-práticas)
  - [Possíveis Evoluções](#possíveis-evoluções)
  - [Recursos e Links Úteis](#recursos-e-links-úteis)
  - [Deploy na Vercel](#deploy-na-vercel)

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização híbrida (Server-side Rendering e Static Generation)
- **React**: Biblioteca para construção de interfaces de usuário
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva
- **React Icons & Heroicons**: Conjunto de ícones para uma interface visual rica
- **React Scroll**: Biblioteca para rolagem suave e navegação ancorada
- **Vercel**: Hospedagem e deploy otimizados para projetos Next.js

## Estrutura do Projeto

A seguir, uma visão geral da estrutura de pastas do projeto:

```plaintext
├── app/
│   └── page.tsx           // Página principal da aplicação
├── components/
│   ├── BenefitsSection.tsx // Seção exibindo os benefícios
│   ├── CtaSection.tsx      // Seção de call-to-action
│   ├── Footer.tsx          // Rodapé da aplicação
│   ├── HeroSection.tsx     // Seção principal com destaque
│   ├── HowItWorks.tsx      // Seção explicando o funcionamento
│   └── Navbar.tsx          // Menu de navegação superior
├── lib/
│   └── constants.ts       // Constantes e dados compartilhados (ex: STEPS, BENEFITS)
├── pages/
│   └── Home.tsx           // Página de entrada (pode ser integrada com app/page.tsx)
├── styles/
│   └── globals.css        // Estilização global com Tailwind CSS
└── types/
    └── index.ts           // Definições de tipos TypeScript

## Iniciando o Projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente [Geist](https://vercel.com/font), uma nova família de fontes para Vercel.

## Contexto da Aplicação

## Melhores Práticas

## Possíveis Evoluções

## Recursos e Links Úteis

Para saber mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode conferir o [repositório do Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!

## Deploy na Vercel

A maneira mais fácil de fazer o deploy de sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
