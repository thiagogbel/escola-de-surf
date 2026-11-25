import { Link } from "react-router-dom";

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
      <section className="abertura">
        <h1>Segurança no mar</h1>
        <p>O que conferir antes da aula e como agir dentro da água.</p>
      </section>

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
            <li key={b.titulo}>
              <svg viewBox="0 0 32 32" width="36" aria-hidden="true">
                <path d="M6 3v27" stroke="#102a33" strokeWidth="3" />
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
