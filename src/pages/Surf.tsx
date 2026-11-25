import { Link } from "react-router-dom";
import Abertura from "../Abertura";

const historia = [
  ["Polinésia e Havaí", "Deslizar sobre as ondas já fazia parte da cultura desses povos séculos antes de o surf virar esporte."],
  ["Início do século 20", "O nadador havaiano Duke Kahanamoku ajuda a divulgar o surf em outros países."],
  ["Anos 1930", "Santos, no litoral paulista, aparece entre os primeiros registros de surf no Brasil."],
  ["2014", "Gabriel Medina conquista o primeiro título mundial masculino do Brasil na elite do surf."],
  ["Tóquio 2020", "O surf estreia nos Jogos Olímpicos, realizados em 2021, e Ítalo Ferreira leva o ouro."],
];

const pranchas = [
  { nome: "Longboard", altura: 230, largura: 52, cor: "#ff5a4e", texto: "Cerca de 9 pés ou mais. Estável, boa para ondas pequenas." },
  { nome: "Funboard", altura: 195, largura: 52, cor: "#ffc93c", texto: "Entre 7 e 8 pés. Boa transição para quem está evoluindo." },
  { nome: "Fish", altura: 150, largura: 56, cor: "#0b7fb0", texto: "Curta e larga. Ganha velocidade em ondas mais fracas." },
  { nome: "Shortboard", altura: 165, largura: 44, cor: "#1fb89a", texto: "Em geral de 5 a 6 pés e meio. Ágil, pede experiência." },
];

const termos = [
  ["Drop", "A descida da onda, logo depois de ficar em pé."],
  ["Cutback", "Curva de volta para a parte mais forte da onda."],
  ["Tubo", "Passar por dentro da parte oca da onda."],
  ["Aéreo", "Sair da onda com a prancha e voltar para ela."],
  ["Line-up", "Área onde os surfistas esperam as ondas."],
  ["Swell", "Ondulação formada pelo vento em alto-mar."],
  ["Goofy e regular", "Goofy usa o pé direito na frente; regular, o esquerdo."],
  ["Caldo", "Cair e ser revirado pela onda."],
];

const perguntas = [
  ["Preciso saber nadar?", "É importante saber nadar e se sentir à vontade na água. Avise o instrutor se tiver insegurança."],
  ["Quanto tempo leva para ficar em pé?", "Varia bastante. Muita gente consegue nas primeiras aulas, na espuma, com ajuda do instrutor."],
  ["O que devo levar?", "Roupa de banho, toalha, água e protetor solar."],
  ["De quem é a onda?", "Em geral, de quem está mais perto do ponto em que ela quebra. Entrar na frente é chamado de rabear."],
];

export default function Surf() {
  return (
    <>
      <Abertura titulo="O surf" texto="História, pranchas e o que se fala dentro da água." />
      <section>
        <h2>De onde veio</h2>
        <ul className="linha">
          {historia.map(([quando, fato]) => <li key={quando}><strong>{quando}</strong><span>{fato}</span></li>)}
        </ul>
      </section>
      <section className="faixa">
        <h2>Qual prancha usar</h2>
        <p>Quanto maior o volume, mais fácil remar e se equilibrar.</p>
        <div className="pranchas">
          {pranchas.map(({ nome, altura, largura, cor, texto }) => (
            <div key={nome}>
              <svg viewBox="0 0 70 230" aria-hidden="true">
                <path fill={cor} d={`M35 ${230 - altura}C${35 + largura} ${230 - altura * 0.65} ${35 + largura / 2} 215 35 230C${35 - largura / 2} 215 ${35 - largura} ${230 - altura * 0.65} 35 ${230 - altura}Z`} />
                <path stroke="#fffaf0" strokeWidth="2" d={`M35 ${234 - altura}V226`} />
              </svg>
              <h3>{nome}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Para entender a conversa</h2>
        <dl className="manobras">
          {termos.map(([termo, significado]) => <div key={termo}><dt>{termo}</dt><dd>{significado}</dd></div>)}
        </dl>
      </section>
      <section className="faixa">
        <h2>Perguntas de quem está começando</h2>
        {perguntas.map(([p, r]) => <details key={p}><summary>{p}</summary><p>{r}</p></details>)}
        <p><Link className="botao" to="/aulas">Escolher uma aula</Link></p>
      </section>
    </>
  );
}
