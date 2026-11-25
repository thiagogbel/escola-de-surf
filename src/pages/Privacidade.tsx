import Abertura from "../Abertura";

export default function Privacidade() {
  return (
    <>
      <Abertura titulo="Política de privacidade" texto="Quais dados usamos e como removê-los." />
      <section className="legal">
        <h2>Dados coletados</h2>
        <p>Nome, e-mail, idade, aula escolhida, data do aceite e, para menores de idade, nome do responsável.</p>
        <h2>Finalidade</h2>
        <p>Os dados servem apenas para demonstrar o cadastro de inscrições neste projeto acadêmico.</p>
        <h2>Armazenamento</h2>
        <p>Os dados ficam somente no seu navegador, por meio do localStorage. O formulário não os envia a servidores nem os compartilha. Outras pessoas que usem este mesmo navegador podem vê-los.</p>
        <h2>Seus direitos</h2>
        <p>A Lei Geral de Proteção de Dados (LGPD) garante direitos como acesso, correção e exclusão. Aqui você pode ver e remover inscrições na tela Inscritos, ou apagar os dados do site no navegador. Para corrigir, remova e cadastre novamente.</p>
        <h2>Cookies</h2>
        <p>O código deste site não utiliza cookies de rastreamento.</p>
      </section>
    </>
  );
}
