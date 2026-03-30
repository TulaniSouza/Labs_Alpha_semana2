export default function Inscricao({ setEtapa, setDados }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    
    // Aqui a Isabela entrará com as validações automatizadas
    if (nome && email) {
      setDados({ nome, email });
      setEtapa(2); // Avança para Pagamento (Whimsical Fluxo 1)
    }
  };

  return (
    <section className="fade-in">
      <h2>Inscrição no Evento</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required aria-required="true" />
        
        <label htmlFor="email">E-mail Corporativo:</label>
        <input type="email" id="email" name="email" required aria-required="true" />
        
        <button type="submit">Próximo: Pagamento</button>
      </form>
    </section>
  );
}