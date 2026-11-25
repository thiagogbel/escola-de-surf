export default function Abertura({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <section className="abertura">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <svg className="ondas" viewBox="0 0 1600 150" preserveAspectRatio="none" aria-hidden="true">
        <path fill="var(--papel)" opacity=".35" d="M0 60q100 -50 200 0t200 0t200 0t200 0t200 0t200 0t200 0t200 0V150H0Z" />
        <path fill="var(--papel)" opacity=".45" d="M0 105q100 -50 200 0t200 0t200 0t200 0t200 0t200 0t200 0t200 0V150H0Z" />
      </svg>
    </section>
  );
}
