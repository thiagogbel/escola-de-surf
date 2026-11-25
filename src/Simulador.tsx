import { useState } from "react";

const metros = (n: number) => `${n.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} m`;

// Regra prática: a onda quebra quando a altura chega a cerca de 78% da profundidade
function fase(razao: number) {
  if (razao < 0.5) return { nome: "Ondulação", texto: "A água é funda para esta onda. Ela passa sem quebrar." };
  if (razao < 0.78) return { nome: "Empinando", texto: "O fundo começa a frear a onda, que fica mais alta e inclinada." };
  if (razao < 1.2) return { nome: "Quebrando", texto: "A crista avança mais rápido que a base e cai para a frente. É a hora do drop!" };
  return { nome: "Espuma", texto: "A onda já quebrou e chega como espuma, o lugar ideal para iniciantes." };
}

export default function Simulador() {
  const [altura, setAltura] = useState(1);
  const [fundo, setFundo] = useState(4);
  const razao = altura / fundo;
  const { nome, texto } = fase(razao);

  const escala = 34;
  const crista = 110 - altura * escala;
  const chao = 110 + fundo * escala;
  const inclinacao = Math.min(razao / 0.78, 1) * 70;
  const x = 300 + inclinacao;
  const quebrou = razao >= 1.2;
  const superficie = quebrou
    ? `M0 110H200Q250 ${110 - altura * 14} 380 ${110 - altura * 10}Q410 110 440 110H600V340H0Z`
    : `M0 110H110C210 110 ${x - 110} ${crista} ${x} ${crista}C${x + 55 - inclinacao / 4} ${crista} ${x + 30 - inclinacao / 2} 110 500 110H600V340H0Z`;

  return (
    <div className="simulador">
      <svg viewBox="0 0 600 340" role="img" aria-label={`Onda de ${metros(altura)} em água de ${metros(fundo)}: ${nome}`}>
        <rect width="600" height="340" fill="var(--ceu2)" />
        <circle cx="535" cy="48" r="28" fill="#ffc93c" />
        <path d={superficie} fill="#0fa3c7" />
        <path d={`M0 ${chao}Q150 ${chao - 6} 300 ${chao}T600 ${chao}V340H0Z`} fill="#f6d79a" />
        {razao >= 0.78 && !quebrou && (
          <path d={`M${x - 40} ${crista + 4}Q${x + 30} ${crista - 12} ${x + 52} ${crista + altura * 18}`} fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
        )}
        {quebrou && [0, 1, 2, 3, 4, 5].map(i => (
          <circle key={i} cx={270 + i * 28} cy={112 - altura * 9} r={8 + altura * 4} fill="#fff" />
        ))}
      </svg>
      <div>
        <label htmlFor="altura">Altura da onda: <strong>{metros(altura)}</strong></label>
        <input id="altura" type="range" min="0.5" max="2" step="0.1" value={altura} onChange={e => setAltura(Number(e.target.value))} />
        <label htmlFor="fundo">Profundidade: <strong>{metros(fundo)}</strong></label>
        <input id="fundo" type="range" min="0.5" max="6" step="0.1" value={fundo} onChange={e => setFundo(Number(e.target.value))} />
        <div className="resultado" aria-live="polite"><h3>{nome}</h3><p>{texto}</p></div>
      </div>
    </div>
  );
}
