import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import type { Inscricao } from "./dados";
import Inicio from "./pages/Inicio";
import Aulas from "./pages/Aulas";
import DetalheAula from "./pages/DetalheAula";
import Seguranca from "./pages/Seguranca";
import FormInscricao from "./pages/FormInscricao";
import Inscritos from "./pages/Inscritos";
import Surf from "./pages/Surf";
import Transicao from "./Transicao";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";

function carregar(): Inscricao[] {
  try { return JSON.parse(localStorage.getItem("inscricoes") ?? "[]"); } catch { return []; }
}

export default function App() {
  const [inscricoes, setInscricoes] = useState<Inscricao[]>(carregar);
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();

  // Salva no navegador sempre que a lista muda
  useEffect(() => {
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
  }, [inscricoes]);

  // Volta ao topo ao trocar de tela
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="topo">
        <Link className="logo" to="/"><img src="/logo.svg" alt="" />Maré Alta</Link>
        <button id="btnMenu" aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>Menu</button>
        <nav className={menuAberto ? "aberto" : ""} onClick={() => setMenuAberto(false)}>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/aulas">Aulas</NavLink>
          <NavLink to="/surf">O surf</NavLink>
          <NavLink to="/seguranca">Segurança</NavLink>
          <NavLink to="/inscricao">Inscrição</NavLink>
          <NavLink to="/inscritos">Inscritos ({inscricoes.length})</NavLink>
        </nav>
      </header>
      <main>
        <Transicao><Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/aulas/:id" element={<DetalheAula />} />
          <Route path="/surf" element={<Surf />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/inscricao" element={<FormInscricao aoInscrever={nova => setInscricoes(l => [...l, nova])} />} />
          <Route path="/inscritos" element={<Inscritos lista={inscricoes} aoRemover={id => setInscricoes(l => l.filter(i => i.id !== id))} />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="*" element={<section><h1>Página não encontrada</h1><Link to="/">Voltar ao início</Link></section>} />
        </Routes></Transicao>
      </main>
      <footer>
        <span>Maré Alta Escola de Surf. Projeto acadêmico de Programação de Internet.</span>
        <span className="links"><Link to="/termos">Termos</Link><Link to="/privacidade">Privacidade</Link></span>
      </footer>
    </>
  );
}
