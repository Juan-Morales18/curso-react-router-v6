import styles from "./menuBasics.module.css";
import { Link, NavLink } from "react-router-dom";

const { active } = styles;

function MenuBasics() {
  return (
    <div>
      <p>Con HTML (No recomendado)</p>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <p>Con Componente Link</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="contact">Contact</Link>

      <p>Con Componente NavLink</p>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        Contact
      </NavLink>

      <p>Parametros</p>
      <NavLink
        to="/user/juan"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        juan
      </NavLink>
      <NavLink
        to="/user/juanmora"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        juanmora
      </NavLink>

      <p>Parametros de Consulta</p>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        Products
      </NavLink>
      <p>Redirecciones</p>
      <NavLink
        to="/acerca"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        Acerca de
      </NavLink>
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? `${active}` : "")}
      >
        Contacto
      </NavLink>
    </div>
  );
}

export { MenuBasics };
