import {} from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 w-2/12">
      <section>
        <header className="text-gray-500">Main Menu</header>
        <LinkTo label="Beranda" to="/" />
        <LinkTo label="Todos" to="/todos" />
        <LinkTo label="Login" to="/auth/login" />
      </section>
    </nav>
  );
}

const LinkTo = ({ label, ...props }) => {
  return (
    <NavLink
      {...props}
      //   key={label}
      className={`block px-4 py-2  hover:text-gray-100 hover:bg-gray-700 ${({
        active,
      }) => (active ? "text-blue-500" : "text-gray-400")}`}
    >
      {label}
    </NavLink>
  );
};
