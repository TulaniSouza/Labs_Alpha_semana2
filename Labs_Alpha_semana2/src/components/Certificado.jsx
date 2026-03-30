export default function Certificado({ nome }) {
  return (
    <section className="fade-in">
      <h2>Inscrição Confirmada!</h2>
      <div id="area-certificado">
        <p>Obrigado por se inscrever, <strong>{nome}</strong>!</p>
        <p>Seu check-in foi realizado com sucesso.</p>
        <button onClick={() => window.print()}>Emitir Certificado</button>
      </div>
    </section>
  );
}