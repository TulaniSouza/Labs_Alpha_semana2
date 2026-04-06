import { useState } from 'react';

export default function Pagamento({ setEtapa, dados, setDados }) {
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const simularGateway = () =>
    new Promise((resolve, reject) => {
      const tempoMs = 1500;

      setTimeout(() => {
        const aprovado = Math.random() < 0.8;

        if (aprovado) {
          resolve({ transacaoId: `TX-${Date.now()}` });
          return;
        }

        reject(new Error('Pagamento recusado pelo emissor. Tente novamente.'));
      }, tempoMs);
    });

  const finalizarPagamento = async () => {
    setCarregando(true);
    setErro('');

    try {
      const resposta = await simularGateway();

      setDados((prev) => ({
        ...prev,
        pagamentoStatus: 'aprovado',
        transacaoId: resposta.transacaoId,
      }));

      setEtapa(3);
    } catch (error) {
      setDados((prev) => ({
        ...prev,
        pagamentoStatus: 'recusado',
        transacaoId: null,
      }));

      setErro(error.message || 'Falha ao processar pagamento.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <section className="fade-in">
      <h2>Pagamento Simulado</h2>
      <p>
        Olá <strong>{dados.nome}</strong>, confirme o valor de R$ {dados.valor},00.
      </p>

      {erro && (
        <p className="mensagem-erro" role="alert">
          {erro}
        </p>
      )}

      <button onClick={finalizarPagamento} disabled={carregando}>
        {carregando ? 'Processando...' : 'Finalizar Inscrição'}
      </button>
      <button onClick={() => setEtapa(1)} className="btn-voltar" disabled={carregando}>
        Voltar
      </button>
    </section>
  );
}