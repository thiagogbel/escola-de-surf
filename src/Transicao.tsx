import type { CSSProperties, ReactNode } from "react";
import { useLocation } from "react-router-dom";

// Cada tela tem a sua cor
const cores: Record<string, string> = {
  "": "#19b5d8", aulas: "#ffc93c", surf: "#5cc8f2", aprenda: "#3fd9cf", seguranca: "#ff8f78", inscricao: "#7fe0bd", inscritos: "#ffd99b",
};

export default function Transicao({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const cor = cores[pathname.split("/")[1]] ?? "#8eeaf0";
  // A key muda junto com a rota, então o React recria os elementos e a animação recomeça
  return (
    <div style={{ "--cor": cor } as CSSProperties}>
      <svg key={`onda${pathname}`} className="cortina" viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0H100V112Q87 125 75 112T50 112T25 112T0 112Z" />
      </svg>
      <div key={pathname} className="pagina">{children}</div>
    </div>
  );
}
