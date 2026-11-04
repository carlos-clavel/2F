# Fluxus

Plataforma de gerenciamento da saída de alunos, construída com React, TypeScript, Vite e Tailwind CSS.

O projeto é uma aplicação web padrão e não depende do Figma Make para executar, compilar ou publicar.

## Requisitos

- Node.js 22 ou superior
- pnpm 10 (recomendado) ou npm

## Opção 1: abrir diretamente no navegador

Abra `fluxus.html` com Chrome, Edge ou Firefox. Esse arquivo contém a aplicação compilada, incluindo JavaScript, CSS e imagens, e não precisa de servidor local.

Também é possível abrir o `index.html` da raiz com duplo clique. Quando acessado pelo protocolo `file://`, ele redireciona automaticamente para `fluxus.html`.

> O `index.html` da raiz é também a entrada de desenvolvimento do Vite. O arquivo `src/main.tsx` não pode ser interpretado diretamente pelo navegador porque usa TypeScript, JSX e imports de pacotes. O Live Server serve arquivos, mas não realiza essa compilação. Por isso, para desenvolver, use o Vite conforme a próxima seção.

## Opção 2: executar no VS Code

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
```

Esse comando atualiza duas versões prontas para uso:

- `dist/index.html`: build para publicação, também autônomo;
- `fluxus.html`: cópia portátil que pode ser aberta com duplo clique ou enviada como um único arquivo.

Para testar o conteúdo de `dist/` em um servidor local:

```bash
pnpm preview
```

A pasta `dist/` pode ser publicada em serviços como Vercel, Netlify, Cloudflare Pages, GitHub Pages ou em qualquer servidor de arquivos estáticos.

Configuração de build:

- comando: `pnpm build`
- diretório de saída: `dist`

O HTML final incorpora todos os assets locais, permitindo publicar o site na raiz de um domínio, em um subdiretório ou abri-lo diretamente pelo sistema de arquivos.

Para gerar o build convencional do Vite, mantendo JavaScript e CSS em arquivos separados, use:

```bash
pnpm build:web
```

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

As fontes Outfit, DM Sans e JetBrains Mono são carregadas pelo Google Fonts. Se o computador estiver offline, a aplicação continua funcional e utiliza as fontes alternativas do sistema.
