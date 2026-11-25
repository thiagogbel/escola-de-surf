import { Link } from "react-router-dom";
import { nomesNivel, type Aula } from "./dados";
import Foto from "./Foto";
import Preco from "./Preco";

export default function CardAula({ aula }: { aula: Aula }) {
  return (
    <article className="card">
      <Foto aula={aula} />
      <div>
        <p className="info">{nomesNivel[aula.nivel]}, {aula.duracao}</p>
        <h3>{aula.nome}</h3>
        <p>{aula.descricao}</p>
        {aula.selo && <p className="selo">{aula.selo}</p>}
        <Preco aula={aula} />
        <Link className="botao" to={`/inscricao?aula=${aula.id}`}>Inscrever-se</Link>
        <Link className="secundario" to={`/aulas/${aula.id}`}>Ver detalhes</Link>
      </div>
    </article>
  );
}
