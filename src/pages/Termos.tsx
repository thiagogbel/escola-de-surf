import Abertura from "../Abertura";

export default function Termos() {
  return (
    <>
      <Abertura titulo="Termos de aceite" texto="Condições para participar das aulas." />
      <section className="legal">
        <p>A Maré Alta é uma escola fictícia, criada para um projeto acadêmico. Nenhuma cobrança é feita por este site.</p>
        <h2>Inscrição</h2>
        <p>Quem se inscreve deve informar dados corretos. Menores de 18 anos precisam da autorização de um responsável.</p>
        <h2>Saúde e segurança</h2>
        <p>O surf envolve riscos. O aluno deve informar condições de saúde relevantes ao instrutor e seguir as orientações recebidas.</p>
        <h2>Preços e promoções</h2>
        <p>Os valores são demonstrativos e por aula. Os descontos não são cumulativos.</p>
        <h2>Cancelamento e clima</h2>
        <p>O aluno pode remover a inscrição na tela Inscritos. Com mar ou tempo inseguro, a aula seria remarcada.</p>
      </section>
    </>
  );
}
