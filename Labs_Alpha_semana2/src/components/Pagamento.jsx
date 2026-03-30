export default function Pagamento({ setEtapa, nome }) {
  const simularPagamento = () => {
    // Aqui o Guilherme fará a simulação de backend
    setEtapa(3); // Avança para Sucesso (Whimsical Fluxo 2)
  };

  return (
    <section className="fade-in">
      <h2>Pagamento Simulado</h2>
      <p>Olá <strong>{nome}</strong>, confirme o valor de R$ 50,00.</p>
      <button onClick={simularPagamento}>Finalizar Inscrição</button>
      <button onClick={() => setEtapa(1)} className="btn-voltar">Voltar</button>
    </section>
  );
}