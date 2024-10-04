/* eslint react/prop-types: 0 */

// Componente Conteúdo do meio da tela
function Body({
  handleSubmit,
  handleEdit,
  handleDelete,
  handleReset,
  carros,
  marca,
  setMarca,
  modelo,
  setModelo,
  ano,
  setAno,
  preco,
  setPreco,
  editId,
}) {
  return (
    <div className="container">
      {" "}
      {/* Container Principal */}
      <div className="veiculos-card">
        {" "}
        {/* Container que exibe os cards de veículos */}
        <h2>Veículos cadastrados</h2>
        <ul className="veiculos-list">
          {" "}
          {/* Lista de todos os carros cadastrados */}
          {carros.map((carro) => (
            <li key={carro.id} className="carro-item">
              {" "}
              {/* Cada carro dentro da lista */}
              <div className="carro-detalhes">
                {" "}
                {/* Detalhes de cada carro */}
                <h3>
                  {carro.marca} | {carro.modelo}
                </h3>
                <p>Ano: {carro.ano}</p>
                <p>Preço: R${carro.preco}</p>
              </div>
              <div className="carro-acoes">
                {" "}
                {/* Container dos botões de ação para cada carro */}
                <button onClick={() => handleEdit(carro)}>Editar</button>
                <button onClick={() => handleDelete(carro.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Formulário de Cadastro ou Edição */}
      <div className="form-card">
        <h2>{editId ? "Editar veículo" : "Cadastrar veículo"}</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label>
            Marca:
            <input
              type="text"
              name="marca"
              onChange={(e) => setMarca(e.target.value)}
              value={marca}
              placeholder="Insira a marca do veículo"
              minLength="2"
              required
            />
          </label>
          <label>
            Modelo:
            <input
              type="text"
              name="modelo"
              onChange={(e) => setModelo(e.target.value)}
              value={modelo}
              placeholder="Insira o modelo do veículo"
              minLength="2"
              required
            />
          </label>
          <label>
            Ano:
            <input
              type="number"
              name="ano"
              onChange={(e) => setAno(e.target.value)}
              value={ano}
              placeholder="Insira o ano do veículo"
              min="1900"
              max="2024"
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
              value={preco}
              placeholder="Insira o preço do veículo"
              min="0.01"
              step="0.01"
              required
            />
          </label>
          <input
            className="botaoSubmit"
            type="submit"
            value={editId ? "Editar" : "Cadastrar"}
          />
          <input className="botaoReset" type="reset" value="Limpar" />
        </form>
      </div>
    </div>
  );
}

export default Body;