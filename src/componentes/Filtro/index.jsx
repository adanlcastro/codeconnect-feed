import "./styles.css";

export default function Filtro({ tags, removerTag, limparTags }) {
  return (
    <section className="container-filtro">
      <ul className="filtro__tags">
        {tags.map((tag, index) => (
          <li key={index} onClick={() => removerTag(tag)} className="tag">
            {tag} ×
          </li>
        ))}
      </ul>
      <button onClick={limparTags}>Limpar Tudo</button>
    </section>
  );
}
