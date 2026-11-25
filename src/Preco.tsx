import { desconto, moeda, type Aula } from "./dados";

export default function Preco({ aula }: { aula: Aula }) {
  const off = desconto(aula);
  return (
    <div className="preco">
      {off > 0 && <p className="de">De <s>{moeda(aula.precoNormal)}</s> por</p>}
      <p className="por"><strong>{moeda(aula.preco)}</strong> <span>por aula</span></p>
      {off > 0 && <p className="economia">Economize {moeda(aula.precoNormal - aula.preco)}</p>}
    </div>
  );
}
