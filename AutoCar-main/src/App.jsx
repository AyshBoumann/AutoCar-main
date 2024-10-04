import { useState, useEffect } from "react"; // Importação de hooks do React
import "./App.css"; // Importação do arquivo de estilos CSS
import Body from "./components/Body"; // Importação do componente Body
import Footer from "./components/Footer"; // Importação do componente Footer
import Header from "./components/Header"; // Importação do componente Header
import CarList from "./CarList"; // Importa a lista de carros
import CarForm from "./CarForm"; // Importa o formulário de cadastro

const url = "http://localhost:3000/carros"; // URL da API local que gerencia os carros

function App() {
  const [carros, setCarros] = useState([]); // Estado para armazenar os carros
  const [preco, setPreco] = useState(""); // Estado para o preço do carro
  const [modelo, setModelo] = useState(""); // Estado para o modelo do carro
  const [ano, setAno] = useState(""); // Estado para o ano do carro
  const [marca, setMarca] = useState(""); // Estado para a marca do carro
  const [editId, setEditId] = useState(null); // Estado para controlar o ID do carro em edição

  useEffect(() => {
    async function fetchData(url) {
      const resp = await fetch(url); // Requisição para a API
      const data = await resp.json(); // Conversão da resposta para JSON
      setCarros(data); // Atualiza o estado dos carros com os dados obtidos
    }
    fetchData(url); // Chamada da função
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carro = {
      preco: parseFloat(preco),
      ano: parseInt(ano),
      modelo,
      marca,
    };

    try {
      let res;
      if (editId) {
        res = await fetch(`${url}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(carro),
        });
      } else {
        res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(carro),
        });
      }

      if (res.ok) {
        await fetchList();
      }

      setModelo("");
      setMarca("");
      setPreco("");
      setAno("");
      setEditId(null);
    } catch (error) {
      console.error("Erro ao salvar o carro:", error);
    }
  };

  const handleEdit = (carro) => {
    setModelo(carro.modelo);
    setMarca(carro.marca);
    setPreco(carro.preco);
    setAno(carro.ano);
    setEditId(carro.id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este veículo?"
    );

    if (!confirmDelete) {
      setModelo("");
      setMarca("");
      setPreco("");
      setAno("");
      setEditId(null);
      return;
    }

    try {
      let res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      setModelo("");
      setMarca("");
      setPreco("");
      setAno("");
      setEditId(null);

      if (res.ok) {
        await fetchList();
      }
    } catch (error) {
      console.error("Erro ao excluir o carro:", error);
    }
  };

  const handleReset = () => {
    setModelo("");
    setMarca("");
    setPreco("");
    setAno("");
    setEditId(null);
  };

  const fetchList = async () => {
    try {
      let res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setCarros(data);
      }
    } catch (error) {
      console.error("Erro ao buscar a lista de carros:", error);
    }
  };

  return (
    <>
      <Header /> {/* Renderiza o Header */}
      <CarForm
        modelo={modelo}
        setModelo={setModelo}
        marca={marca}
        setMarca={setMarca}
        preco={preco}
        setPreco={setPreco}
        ano={ano}
        setAno={setAno}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        editId={editId}
      /> {/* Renderiza o formulário */}
      <CarList
        carros={carros}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      /> {/* Renderiza a lista de carros */}
      <Footer /> {/* Renderiza o Footer */}
    </>
  );
}

export default App;