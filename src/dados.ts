export type Nivel = "iniciante" | "intermediario" | "avancado";

export interface Aula {
  id: string; nome: string; nivel: Nivel; descricao: string;
  precoNormal: number; preco: number; // se preco for menor, há promoção
  selo?: string; duracao: string; inclui: string[];
}

export interface Inscricao {
  id: string; nome: string; email: string; idade: number; aulaId: string;
  responsavel?: string; aceitoEm?: string;
}

export const nomesNivel: Record<Nivel, string> = {
  iniciante: "Iniciante", intermediario: "Intermediário", avancado: "Avançado",
};

export const aulas: Aula[] = [
  { id: "primeira-onda", nome: "Primeira Onda", nivel: "iniciante", precoNormal: 150, preco: 120, selo: "Ideal para começar", duracao: "1h30", descricao: "Equilíbrio, remada e como ficar de pé.", inclui: ["Prancha e cordinha", "Lycra", "Instrutor na água"] },
  { id: "surf-kids", nome: "Surf Kids", nivel: "iniciante", precoNormal: 125, preco: 100, duracao: "1h", descricao: "Brincadeiras e surf para crianças.", inclui: ["Prancha macia", "Lycra", "Turma reduzida"] },
  { id: "evolucao", nome: "Evolução", nivel: "intermediario", precoNormal: 180, preco: 150, duracao: "1h30", descricao: "Leitura das ondas e primeiras manobras.", inclui: ["Prancha", "Análise de postura", "Instrutor na água"] },
  { id: "alta-performance", nome: "Alta Performance", nivel: "avancado", precoNormal: 200, preco: 200, duracao: "2h", descricao: "Treino técnico e preparação para competir.", inclui: ["Vídeo da sessão", "Plano de treino", "Avaliação individual"] },
];

export const desconto = (a: Aula) => Math.round((1 - a.preco / a.precoNormal) * 100);

export const moeda = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
