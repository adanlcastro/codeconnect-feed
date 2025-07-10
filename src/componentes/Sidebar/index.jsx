import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import SobreNos from "./assets/info.svg";
import Sair from "./assets/logout.svg";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={SobreNos} alt="" />
              <span>Sobre Nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Sair} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
