import { Link, useParams } from "react-router-dom";
import { aulas, nomesNivel } from "../dados";
import Foto from "../Foto";
import Preco from "../Preco";

export default function DetalheAula() {
  const { id } = useParams();
  const aula = aulas.find(a => a.id === id);
  if (!aula) return <section><h1>Aula não encontrada</h1><Link to="/aulas">Ver aulas</Link></section>;

  return (
    <section className="detalhe">
      <Foto aula={aula} />
      <div>
        <p className="info">{nomesNivel[aula.nivel]}, {aula.duracao}</p>
        <h1>{aula.nome}</h1>
        <p>{aula.descricao}</p>
        <h3>O que está incluso</h3>
        <ul>{aula.inclui.map(i => <li key={i}>{i}</li>)}</ul>
        <Preco aula={aula} />
        <Link className="botao" to={`/inscricao?aula=${aula.id}`}>Inscrever nesta aula</Link>
      </div>
    </section>
  );
}
