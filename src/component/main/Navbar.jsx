import {} from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 w-2/12">
      <NavLink>
        <header>Main Menu</header>
        <Link to="/todos">Todos</Link>
      </NavLink>
    </nav>
  );
}
