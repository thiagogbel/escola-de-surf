export default function Abertura({ titulo, texto }: { titulo: string; texto: string }) {
  return <section className="abertura"><h1>{titulo}</h1><p>{texto}</p></section>;
}
