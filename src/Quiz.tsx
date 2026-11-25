import { useState } from "react";

const perguntas = [
  { p: "Você caiu em uma corrente de retorno. O que fazer?", r: ["Nadar com força direto para a areia", "Manter a calma e sair paralelo à praia", "Soltar a prancha e mergulhar"], certa: 1, porque: "A corrente é mais forte que você, mas costuma ser estreita. Saindo pelo lado, você economiza energia." },
  { p: "O que faz uma onda quebrar perto da praia?", r: ["O fundo raso", "A água salgada", "A lua cheia"], certa: 0, porque: "O fundo freia a base da onda. A crista segue mais rápido e cai para a frente." },
  { p: "Qual prancha ajuda mais o iniciante?", r: ["Uma curta e fina", "Qualquer uma serve", "Uma grande e com volume"], certa: 2, porque: "Mais volume significa mais flutuação, remada fácil e equilíbrio." },
];

export default function Quiz() {
  const [atual, setAtual] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);

  function responder(i: number) {
    if (escolha !== null) return;
    setEscolha(i);
    if (i === perguntas[atual].certa) setAcertos(acertos + 1);
  }
  function reiniciar() { setAtual(0); setEscolha(null); setAcertos(0); }

  if (atual === perguntas.length) {
    return (
      <div className="quiz" role="status">
        <h3>Você acertou {acertos} de {perguntas.length}</h3>
        <p>{acertos === perguntas.length ? "Mandou bem! Já pode pensar na primeira aula." : "Releia as explicações da página e tente de novo."}</p>
        <button className="botao" onClick={reiniciar}>Jogar de novo</button>
      </div>
    );
  }

  const { p, r, certa, porque } = perguntas[atual];
  return (
    <div className="quiz">
      <p className="info">Pergunta {atual + 1} de {perguntas.length}</p>
      <progress value={atual} max={perguntas.length} aria-label="Progresso do quiz" />
      <h3>{p}</h3>
      {r.map((texto, i) => (
        <button key={texto} aria-disabled={escolha !== null} onClick={() => responder(i)}
          className={escolha === null ? "" : i === certa ? "certa" : i === escolha ? "errada" : ""}>
          {texto}{escolha !== null && i === certa && " ✓"}{escolha === i && i !== certa && " ✗"}
        </button>
      ))}
      <div aria-live="polite">
        {escolha !== null && <p><strong>{escolha === certa ? "Isso mesmo! " : "Quase! "}</strong>{porque}</p>}
      </div>
      {escolha !== null && (
        <button className="botao" onClick={() => { setAtual(atual + 1); setEscolha(null); }}>
          {atual + 1 === perguntas.length ? "Ver resultado" : "Próxima"}
        </button>
      )}
    </div>
  );
}
