# Maré Alta Escola de Surf

Site de uma escola de surf fictícia, feito para a disciplina de Programação de Internet.

Tecnologias: React, TypeScript, Vite e React Router.

## Requisitos

- [Node.js](https://nodejs.org) 22.12 ou superior
- [Git](https://git-scm.com)

## Baixar e rodar

Troque `SEU_USUARIO` pelo usuário do GitHub:

```bash
git clone https://github.com/SEU_USUARIO/escola-de-surf.git
cd escola-de-surf
npm install
npm run dev
```

Abra http://localhost:5173. Para parar, use `Ctrl + C`.

No PowerShell, se o `npm` for bloqueado, use `npm.cmd` no lugar.

## Trabalhar em mais de um computador

Antes de começar:

```bash
git pull
npm install
```

Ao terminar:

```bash
git add .
git commit -m "Descreva o que mudou"
git push
```

## Gerar a versão final

```bash
npm run build
npm run preview
```

## Estrutura

- `public/`: imagens
- `src/pages/`: telas
- `src/dados.ts`: aulas, preços e tipos
- `src/App.tsx`: rotas e estado das inscrições
- `src/style.css`: visual e animações

As inscrições ficam no `localStorage` de cada navegador e não acompanham o repositório.
