import { useState } from "react";
import Abertura from "../Abertura";
import Quiz from "../Quiz";
import Simulador from "../Simulador";

const partes = [
  { nome: "Crista", x: 350, y: 58, texto: "O ponto mais alto da onda." },
  { nome: "Lip", x: 462, y: 132, texto: "A borda que se projeta e cai. É onde se fazem manobras fortes." },
  { nome: "Parede", x: 384, y: 190, texto: "A face lisa por onde o surfista desliza." },
  { nome: "Tubo", x: 427, y: 160, texto: "O espaço oco entre o lip e a parede." },
  { nome: "Base", x: 465, y: 240, texto: "A parte de baixo, onde o surfista faz a primeira curva (bottom turn)." },
];

export default function Aprenda() {
  const [parte, setParte] = useState(partes[0]);
  return (
    <>
      <Abertura titulo="Aprenda" texto="Descubra como as ondas funcionam." />
      <section>
        <h2>As partes da onda</h2>
        <p>Escolha uma parte para ver onde ela fica.</p>
        <div className="anatomia">
          <svg viewBox="0 0 600 300" role="img" aria-label={`Onda vista de lado, com destaque em: ${parte.nome}`}>
            <rect width="600" height="300" fill="var(--ceu1)" />
            <circle cx="110" cy="80" r="42" fill="#ff8a5c" />
            <path fill="#0fa3c7" d="M0 250C150 250 200 60 360 55C430 55 470 100 465 150C440 115 400 125 390 165C380 215 440 250 600 245V300H0Z" />
            <path fill="none" stroke="#8eeaf0" strokeWidth="7" strokeLinecap="round" d="M90 262C210 240 250 110 360 90M170 270C280 240 290 150 365 125" />
            <circle className="pulso" cx={parte.x} cy={parte.y} r="13" fill="#ff5a4e" stroke="#fff" strokeWidth="4" />
          </svg>
          <div>
            <div className="opcoes">
              {partes.map(p => <button key={p.nome} aria-pressed={p === parte} onClick={() => setParte(p)}>{p.nome}</button>)}
            </div>
            <div aria-live="polite"><h3>{parte.nome}</h3><p>{parte.texto}</p></div>
          </div>
        </div>
      </section>
      <section className="faixa">
        <h2>Por que a onda quebra?</h2>
        <p>Em geral, quando a altura chega a cerca de 78% da profundidade. Mude os valores e observe.</p>
        <Simulador />
      </section>
      <section className="piscina">
        <h2>Teste seus conhecimentos</h2>
        <Quiz />
      </section>
    </>
  );
}
