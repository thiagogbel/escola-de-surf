import { Link, useLocation } from "react-router-dom";
import { aulas, type Inscricao } from "../dados";
import Abertura from "../Abertura";

interface Props { lista: Inscricao[]; aoRemover: (id: string) => void; }

export default function Inscritos({ lista, aoRemover }: Props) {
  const { state } = useLocation();
  return (
    <>
      <Abertura titulo="Inscritos" texto={`Total de inscrições: ${lista.length}`} />
      <section id="inscritos">
        {state?.sucesso && lista.length > 0 && <p className="sucesso" role="status">Inscrição realizada com sucesso.</p>}
        {lista.length === 0 ? (
          <><p>Nenhuma inscrição ainda.</p><Link className="botao" to="/inscricao">Fazer inscrição</Link></>
        ) : (
          <div className="tabela">
            <table>
              <thead><tr><th>Aluno</th><th>E-mail</th><th>Idade</th><th>Aula</th><th>Ação</th></tr></thead>
              <tbody>
                {lista.map(i => (
                  <tr key={i.id}>
                    <td><strong>{i.nome}</strong>{i.responsavel && <small>Responsável: {i.responsavel}</small>}</td>
                    <td>{i.email}</td>
                    <td>{i.idade}</td>
                    <td>{aulas.find(a => a.id === i.aulaId)?.nome}</td>
                    <td><button aria-label={`Remover ${i.nome}`} onClick={() => aoRemover(i.id)}>Remover</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
