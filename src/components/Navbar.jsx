import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = "underline underline-offset-4 text-red-500 font-semibold";

  return (
    <>
      <header>
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white shadow-md">
          {/* Título alineado a la izquierda */}
          <div
            className="text-3xl font-medium text-gray-700 tracking-wide"
            style={{
              fontFamily: "'Montserrat', sans-serif", // Cambia la fuente aquí
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Sombra más sutil
              color: "#2d3748", // Un gris más oscuro
            }}
          >
            <NavLink
              to="/"
              className="hover:text-red-500 transition-all duration-300"
            >
              Poke Adventure
            </NavLink>
          </div>

          {/* Opciones del menú alineadas a la derecha */}
          <ul className="flex items-center gap-5">
            <li className="text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : "text-gray-500 hover:text-gray-800 transition-colors duration-200"
                }
              >
                Pokedex
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : "text-gray-500 hover:text-gray-800 transition-colors duration-200"
                }
              >
                Info
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
