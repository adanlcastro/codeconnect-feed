import "./styles.css";

export default function BarraDePesquisa({
  termoPesquisa,
  setTermoPesquisa,
  onEnter,
}) {
  function lidarComTecla(evento) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      if (onEnter) onEnter(termoPesquisa);
    }
  }

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
      onKeyDown={lidarComTecla}
    />
  );
}
