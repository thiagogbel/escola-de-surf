import type { CSSProperties, ReactNode } from "react";
import { useLocation } from "react-router-dom";

// Cada tela tem a sua cor
const cores: Record<string, string> = {
  "": "#1b4f8f", aulas: "#f4b942", surf: "#8fc1d4", seguranca: "#ef8a6b", inscricao: "#a9c99a", inscritos: "#e7c9a0",
};

export default function Transicao({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const cor = cores[pathname.split("/")[1]] ?? "#f1e4c9";
  // A key muda junto com a rota, então o React recria os elementos e a animação recomeça
  return (
    <div style={{ "--cor": cor } as CSSProperties}>
      <svg key={`onda${pathname}`} className="cortina" viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden="true">
        <path fill={cor} d="M0 0H100V112Q87 125 75 112T50 112T25 112T0 112Z" />
      </svg>
      <div key={pathname} className="pagina">{children}</div>
    </div>
  );
}
