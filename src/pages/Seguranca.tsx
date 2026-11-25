import { Link } from "react-router-dom";
import Abertura from "../Abertura";

interface Item { titulo: string; texto: string; }
interface Bandeira extends Item { cor: string; }

const cuidados: Item[] = [
  { titulo: "Observe o mar", texto: "Veja as ondas, as correntes e as bandeiras por alguns minutos antes de entrar." },
  { titulo: "Confira o equipamento", texto: "Verifique a prancha e prenda bem a cordinha (leash) no tornozelo." },
  { titulo: "Não surfe sozinho", texto: "Entre acompanhado e avise alguém na areia." },
  { titulo: "Proteja o corpo", texto: "Alongue, beba água e use protetor solar." },
];

const bandeiras: Bandeira[] = [
  { cor: "#2f8f4e", titulo: "Verde", texto: "Risco baixo. Mantenha a atenção." },
  { cor: "#e5b521", titulo: "Amarela", texto: "Risco médio. Entre com cautela." },
  { cor: "#c9352b", titulo: "Vermelha", texto: "Risco alto. Não entre no mar." },
];

export default function Seguranca() {
  return (
    <>
      <Abertura titulo="Segurança no mar" texto="O que conferir antes da aula e como agir dentro da água." />

      <section>
        <h2>Antes de entrar</h2>
        <div className="cuidados">
          {cuidados.map(c => (
            <div key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faixa">
        <h2>Entenda as bandeiras</h2>
        <p>A sinalização pode variar entre praias. Na dúvida, pergunte ao guarda-vidas.</p>
        <ul className="bandeiras">
          {bandeiras.map(b => (
            <li key={b.titulo} style={{ borderColor: b.cor }}>
              <svg viewBox="0 0 32 32" width="36" aria-hidden="true">
                <path d="M6 3v27" stroke="currentColor" strokeWidth="3" />
                <path d="M7 4h21l-5 7 5 7H7z" fill={b.cor} />
              </svg>
              <div>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="corrente">
        <div>
          <h2>Se cair em uma corrente</h2>
          <ol>
            <li>Mantenha a calma e segure a prancha.</li>
            <li>Não lute contra a corrente para voltar direto à areia.</li>
            <li>Se conseguir, reme paralelo à praia até sair dela.</li>
            <li>Se não conseguir, flutue, levante o braço e peça ajuda.</li>
          </ol>
          <svg className="mapa" viewBox="0 0 700 340" role="img" aria-label="Praia vista de cima: a corrente puxa para o fundo, e a saída é pelos lados, paralela à areia">
            <rect width="700" height="340" fill="#0b7fb0" />
            <path fill="#27b9d6" d="M0 110H700V290H0Z" />
            <path fill="#07557f" d="M300 285Q330 190 300 110Q250 50 350 40Q450 50 400 110Q370 190 400 285Z" />
            <path fill="#f6d79a" d="M0 270Q175 255 350 272T700 268V340H0Z" />
            <path fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" d="M30 140q30 -18 60 0t60 0t60 0M30 235q30 -18 60 0t60 0t60 0M490 140q30 -18 60 0t60 0t60 0M490 235q30 -18 60 0t60 0t60 0" />
            <path className="fluxo" fill="none" stroke="#ff8f78" strokeWidth="7" d="M350 258V75" />
            <path fill="#ff8f78" d="M350 48l16 30h-32z" />
            <path className="fluxo" fill="none" stroke="#ffe08a" strokeWidth="7" d="M340 180H235M360 180H465" />
            <path fill="#ffe08a" d="M214 180l26 -15v30zM486 180l-26 -15v30z" />
            <g fontSize="20" fontWeight="700" fill="#fff" textAnchor="middle">
              <text x="350" y="28">A corrente puxa para o fundo</text>
              <text x="120" y="187" fill="#0b3350">Saia pelo lado</text>
              <text x="580" y="187" fill="#0b3350">Saia pelo lado</text>
              <text x="350" y="315" fill="#0b3350">Areia</text>
            </g>
          </svg>
        </div>
        <aside>
          <h3>Emergência</h3>
          <p>Chame o guarda-vidas mais próximo ou ligue para os Bombeiros.</p>
          <strong>193</strong>
        </aside>
      </section>

      <section className="faixa">
        <h2>Aprenda com acompanhamento</h2>
        <p>Escolha uma aula de acordo com o seu nível.</p>
        <Link className="botao" to="/aulas">Ver aulas</Link>
      </section>
    </>
  );
}
