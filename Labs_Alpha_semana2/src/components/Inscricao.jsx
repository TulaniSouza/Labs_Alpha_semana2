import { useEffect, useState } from "react";

export default function Inscricao({ setEtapa, setDados }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  const [erros, setErros] = useState({
    nome: "",
    email: "",
  });

  const [formValido, setFormValido] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCampo = (name, value) => {
    const valor = value.trim();

    if (name === "nome") {
      if (!valor) return "O nome é obrigatório.";
      if (valor.length < 3) return "O nome deve ter pelo menos 3 caracteres.";
    }

    if (name === "email") {
      if (!valor) return "O e-mail é obrigatório.";
      if (!validarEmail(valor)) return "Digite um e-mail válido.";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErros((prev) => ({
      ...prev,
      [name]: validarCampo(name, value),
    }));
  };

  useEffect(() => {
    const erroNome = validarCampo("nome", formData.nome);
    const erroEmail = validarCampo("email", formData.email);

    setFormValido(!erroNome && !erroEmail);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novosErros = {
      nome: validarCampo("nome", formData.nome),
      email: validarCampo("email", formData.email),
    };

    setErros(novosErros);

    const temErros = Object.values(novosErros).some((erro) => erro !== "");
    if (temErros) return;

    setDados((prev) => ({
      ...prev,
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      pagamentoStatus: "pendente",
      transacaoId: null,
      valor: 50,
    }));

    setEtapa(2);
  };

  return (
    <section className="fade-in">
      <h2>Inscrição no Evento</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!erros.nome}
          className={erros.nome ? "input-erro" : ""}
        />
        {erros.nome && <p className="erro">{erros.nome}</p>}

        <label htmlFor="email">E-mail Corporativo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!erros.email}
          className={erros.email ? "input-erro" : ""}
        />
        {erros.email && <p className="erro">{erros.email}</p>}

        <button type="submit" disabled={!formValido}>
          Próximo: Pagamento
        </button>
      </form>
    </section>
  );
}