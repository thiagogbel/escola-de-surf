import { desconto, type Aula } from "./dados";

// Usa public/<id>.png se existir; senão, a ilustração public/<id>.svg
export default function Foto({ aula }: { aula: Aula }) {
  const off = desconto(aula);
  return (
    <div className="foto" style={{ backgroundImage: `url("/${aula.id}.png"), url("/${aula.id}.svg")` }}>
      {off > 0 && <span className="off">{off}% OFF</span>}
    </div>
  );
}
