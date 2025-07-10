import { useEffect, useState } from "react"; // Hooks do React
import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Card from "./componentes/Card";
import Filtro from "./componentes/Filtro";
import Ordenacao from "./componentes/Ordenacao";
import Sidebar from "./componentes/Sidebar";

function App() {
  // 1️⃣ Estado para armazenar os dados da API
  const [dados, setDados] = useState([]);

  const [tagsAtivas, setTagsAtivas] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  // 2️⃣ useEffect para buscar dados quando o componente for montado
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json()) // transforma a resposta em JSON
      .then((dados) => setDados(dados)); // atualiza o estado com os dados da API
  }, []); // array vazio indica que será executado só uma vez (montagem)

  function adicionarTag(novaTag) {
    const tagNormalizada = novaTag.trim().toLowerCase();
    if (tagNormalizada && !tagsAtivas.includes(tagNormalizada)) {
      setTagsAtivas([...tagsAtivas, tagNormalizada]);
    }
    setTermoPesquisa("");
  }

  function removerTag(tagParaRemover) {
    setTagsAtivas(tagsAtivas.filter((tag) => tag !== tagParaRemover));
  }

  function limparTags() {
    setTagsAtivas([]);
  }

  // Filtra os dados com base nas tagsAtivas
  // Se não houver tags, mostra todos os dados
  const dadosFiltrados =
    tagsAtivas.length === 0
      ? dados
      : dados.filter((item) =>
          tagsAtivas.every((tag) => item.tags.includes(tag))
        );

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa
          termoPesquisa={termoPesquisa}
          setTermoPesquisa={setTermoPesquisa}
          onEnter={adicionarTag}
        />
        <Filtro
          tags={tagsAtivas}
          removerTag={removerTag}
          limparTags={limparTags}
        />
        <div className="container-ordenacao">
          <Ordenacao>Recentes</Ordenacao>
          <Ordenacao>Recentes</Ordenacao>
        </div>
        {dadosFiltrados.length === 0 ? (
          <p className="mensagem-vazia">
            Nenhum resultado encontrado com esse filtro.
          </p>
        ) : (
          <ul className="lista-cards">
            {dadosFiltrados.map((item) => (
              <li key={item.id}>
                <Card
                  id={item.id}
                  imagemUrl={item.imagem_capa}
                  titulo={item.titulo}
                  resumo={item.resumo}
                  linhasDeCodigo={item.linhas_de_codigo}
                  compartilhamentos={item.compartilhamentos}
                  comentarios={item.comentarios}
                  usuario={item.usuario}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
