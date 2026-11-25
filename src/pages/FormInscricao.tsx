import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { aulas, type Inscricao } from "../dados";
import Abertura from "../Abertura";
import Foto from "../Foto";
import Preco from "../Preco";

interface Props { aoInscrever: (nova: Inscricao) => void; }

export default function FormInscricao({ aoInscrever }: Props) {
  const navigate = useNavigate();
  const [params] = useSearchParams(); // aula escolhida em outra tela
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [aulaId, setAulaId] = useState(params.get("aula") ?? "");
  const [aceite, setAceite] = useState(false);
  const [erro, setErro] = useState("");

  const aula = aulas.find(a => a.id === aulaId);
  const menor = idade !== "" && Number(idade) < 18;

  function validar(): string {
    const n = Number(idade);
    if (nome.trim().length < 3) return "Informe o nome completo.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Informe um e-mail válido.";
    if (!Number.isInteger(n) || n < 6 || n > 99) return "A idade deve ser entre 6 e 99 anos.";
    if (menor && responsavel.trim().length < 3) return "Informe o nome do responsável.";
    if (!aula) return "Escolha uma aula.";
    if (!aceite) return "É preciso aceitar os termos para continuar.";
    return "";
  }

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const problema = validar();
    setErro(problema);
    if (problema) return;
    aoInscrever({
      id: crypto.randomUUID(), nome: nome.trim(), email, idade: Number(idade), aulaId,
      responsavel: menor ? responsavel.trim() : undefined,
      aceitoEm: new Date().toISOString(),
    });
    navigate("/inscritos", { state: { sucesso: true } });
  }

  return (
    <>
      <Abertura titulo="Inscrição" texto="Preencha seus dados e confira o valor antes de enviar." />
      <section className="faixa inscricao">
        <form onSubmit={enviar} noValidate>
          <label htmlFor="nome">Nome completo</label>
          <input id="nome" autoComplete="name" value={nome} onChange={e => setNome(e.target.value)} />
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor="idade">Idade</label>
          <input id="idade" type="number" value={idade} onChange={e => setIdade(e.target.value)} />
          {menor && (
            <>
              <label htmlFor="responsavel">Nome do responsável</label>
              <input id="responsavel" value={responsavel} onChange={e => setResponsavel(e.target.value)} />
            </>
          )}
          <label htmlFor="aula">Aula</label>
          <select id="aula" value={aulaId} onChange={e => setAulaId(e.target.value)}>
            <option value="">Selecione</option>
            {aulas.map(a => <option key={a.id} value={a.id}>{a.nome}</option>)}
          </select>
          <label className="check" htmlFor="aceite">
            <input id="aceite" type="checkbox" checked={aceite} onChange={e => setAceite(e.target.checked)} />
            <span>
              Li e aceito os <Link to="/termos" target="_blank">termos</Link> e li a{" "}
              <Link to="/privacidade" target="_blank">política de privacidade</Link>.
              {menor && " Declaro ser o responsável pelo aluno."}
            </span>
          </label>
          {erro && <p className="erro" role="alert">{erro}</p>}
          <button className="botao">Enviar inscrição</button>
        </form>
        <aside className="card resumo">
          {aula ? (
            <>
              <Foto aula={aula} />
              <div><h3>{aula.nome}</h3><p>{aula.descricao}</p><Preco aula={aula} /></div>
            </>
          ) : <div><h3>Sua aula</h3><p>Selecione uma aula para ver o valor.</p></div>}
        </aside>
      </section>
    </>
  );
}
