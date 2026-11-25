import { Link } from "react-router-dom";
import { aulas, desconto } from "../dados";
import CardAula from "../CardAula";

// A onda se repete; ao andar metade da largura, o ciclo recomeça sem emenda
const onda = (y: number) =>
  `M0 ${y}q100 -50 200 0t200 0t200 0t200 0t200 0t200 0t200 0t200 0V150H0Z`;

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>O mar ensina. A gente ajuda.</h1>
          <p>Aulas de surf para a primeira onda, para a próxima manobra e para quem só quer perder o medo da água.</p>
          <Link className="botao" to="/aulas">Ver as aulas</Link>
        </div>
        <div className="cena">
          <div className="raios" />
          <div className="sol" />
          <img src="/surfista-2.png" alt="Silhueta de surfista sobre a prancha" />
        </div>
        <svg className="ondas" viewBox="0 0 1600 150" preserveAspectRatio="none" aria-hidden="true">
          <path fill="var(--onda1)" d={onda(50)} />
          <path fill="var(--onda2)" d={onda(80)} />
          <path fill="var(--papel)" d={onda(115)} />
        </svg>
      </section>
      <section>
        <h2>Aulas com até {Math.max(...aulas.map(desconto))}% de desconto</h2>
        <p>Equipamento incluso nas turmas iniciantes. Você traz a vontade e a toalha.</p>
        <div className="cards">{aulas.map(a => <CardAula key={a.id} aula={a} />)}</div>
      </section>
      <section className="faixa chamada">
        <div>
          <h2>Surf não é só ficar em pé</h2>
          <p>Tem história, regra de convivência, prancha certa para cada onda e um vocabulário próprio.</p>
          <p><Link to="/surf">Conheça o surf</Link></p>
          <p><Link to="/aprenda">Aprenda como as ondas funcionam</Link></p>
          <p><Link to="/seguranca">Veja os cuidados no mar</Link></p>
        </div>
        <img src="/surfista-1.png" alt="Galo surfando em uma prancha verde" />
      </section>
    </>
  );
}
