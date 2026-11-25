# Maré Alta Escola de Surf

Projeto da disciplina de Programação de Internet.

**Aluno:** Thiago Santana Gomes  
**RGM:** 11231101489

## Sobre o projeto

Site de uma escola de surf fictícia, em que o visitante consulta as aulas, aprende sobre o mar e faz sua inscrição.

Tecnologias: React, TypeScript, Vite e React Router.

## Como executar

Requer [Node.js](https://nodejs.org) 22.12 ou superior e [Git](https://git-scm.com).

```bash
git clone https://github.com/thiagogbel/escola-de-surf.git
cd escola-de-surf
npm install
npm run dev
```

Abra http://localhost:5173. No PowerShell, se o `npm` for bloqueado, use `npm.cmd`.

## O que avaliar

- **Aulas:** filtro por nível e promoção, com página de detalhes
- **Aprenda:** partes da onda, simulador e quiz interativos
- **O surf e Segurança:** conteúdo informativo
- **Inscrição:** formulário validado, com responsável para menores de 18 anos
- **Tema:** modo escuro por padrão, com opção de modo claro
- **Inscritos:** listagem e remoção, salvas no `localStorage` do navegador

## Estrutura

- `public/`: imagens
- `src/pages/`: telas
- `src/Simulador.tsx` e `src/Quiz.tsx`: atividades da tela Aprenda
- `src/dados.ts`: aulas, preços e tipos
- `src/App.tsx`: rotas e estado das inscrições
- `src/style.css`: visual e animações
