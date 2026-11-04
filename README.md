# Fluxus

Plataforma de gerenciamento da saída de alunos, construída com React, TypeScript, Vite e Tailwind CSS.

O projeto é uma aplicação web padrão e não depende do Figma Make para executar, compilar ou publicar.

## Requisitos

- Node.js 22 ou superior
- pnpm 10 (recomendado) ou npm

## Executar no VS Code

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal integrado.
3. Instale as dependências:

```bash
pnpm install
```

4. Inicie o ambiente de desenvolvimento:

```bash
pnpm dev
```

5. Acesse a URL exibida pelo Vite no terminal, normalmente `http://localhost:5173`.

Com npm, use `npm install` e `npm run dev`.

## Gerar a versão de produção

```bash
pnpm build
pnpm preview
```

O build estático será criado em `dist/`. Essa pasta pode ser publicada em serviços como Vercel, Netlify, Cloudflare Pages, GitHub Pages ou em qualquer servidor de arquivos estáticos.

Configuração de build:

- comando: `pnpm build`
- diretório de saída: `dist`

Os assets usam caminhos relativos, permitindo publicar o site tanto na raiz de um domínio quanto em um subdiretório.

## Verificações

```bash
pnpm typecheck
pnpm build
```

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

As fontes Outfit, DM Sans e JetBrains Mono são carregadas pelo Google Fonts. Portanto, a interface precisa de acesso à internet para usar essas fontes; se estiver offline, utiliza as fontes alternativas do sistema.
