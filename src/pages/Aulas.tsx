import { useState } from "react";
import { aulas, desconto, nomesNivel, type Nivel } from "../dados";
import Abertura from "../Abertura";
import CardAula from "../CardAula";

export default function Aulas() {
  const [nivel, setNivel] = useState<Nivel | "todos">("todos");
  const [soPromocao, setSoPromocao] = useState(false);
  const filtradas = aulas.filter(a =>
    (nivel === "todos" || a.nivel === nivel) && (!soPromocao || desconto(a) > 0));

  return (
    <>
      <Abertura titulo="Nossas aulas" texto="Compare nível, duração e preço e escolha a sua." />
      <section className="faixa">
        <div className="filtros">
          <label htmlFor="filtro">Nível</label>
          <select id="filtro" value={nivel} onChange={e => setNivel(e.target.value as Nivel | "todos")}>
            <option value="todos">Todos</option>
            {Object.entries(nomesNivel).map(([id, nome]) => <option key={id} value={id}>{nome}</option>)}
          </select>
          <label className="check">
            <input type="checkbox" checked={soPromocao} onChange={e => setSoPromocao(e.target.checked)} />
            Só promoções
          </label>
        </div>
        {filtradas.length === 0 && <p>Nenhuma aula encontrada com esses filtros.</p>}
        <div className="cards">{filtradas.map(a => <CardAula key={a.id} aula={a} />)}</div>
      </section>
    </>
  );
}
