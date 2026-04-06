import { useState } from 'react';
import './App.css';
import Inscricao from './components/Inscricao';
import Pagamento from './components/Pagamento';
import Certificado from './components/Certificado';

function App() {
  const [etapa, setEtapa] = useState(1);
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: '',
    email: '',
    pagamentoStatus: 'pendente',
    transacaoId: null,
    valor: 50,
  });

  return (
    <section className="app-wrapper">
      <header>
        <h1>Labs Alpha - Gestão de Eventos</h1>
      </header>

      <main>
        {etapa === 1 && (
          <Inscricao 
            setEtapa={setEtapa} 
            setDados={setDadosUsuario} 
          />
        )}
        
        {etapa === 2 && (
          <Pagamento 
            setEtapa={setEtapa} 
            dados={dadosUsuario}
            setDados={setDadosUsuario}
          />
        )}

        {etapa === 3 && (
          <Certificado 
            nome={dadosUsuario.nome}
            valor={dadosUsuario.valor}
            transacaoId={dadosUsuario.transacaoId}
          />
        )}
      </main>

      <footer>
        <p>&copy; 2026 Labs Alpha - Labs Talents</p>
      </footer>
    </section>
  );
}

export default App;