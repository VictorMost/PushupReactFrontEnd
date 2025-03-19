import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/counter">Pushup Counter</a>
        </li>
        <li>
          <a href="/stats">Stats</a>
        </li>
        <li>
          <a href="/test">Debug Env</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
