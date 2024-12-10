import { Link } from "react-router-dom";
import BurgerButton from "../../atoms/BurgerButtom";

const MainMenu = ({ isMenuOpen, toggleMenu }) => {

  const handleLinkClick = () => {
    toggleMenu(); // Cierra el menú cuando se hace clic en cualquier enlace
  };

  return (
    <nav className="z-50">
      {/* Botón burger para abrir/cerrar el menú */}
      <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <ul
        className={`lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-4 text-2xl absolute top-0 left-0 bg-secundary-color w-full
        ${isMenuOpen ? "block h-screen" : "hidden"} lg:h-auto lg:w-auto lg:static py-14 lg:py-0 px-8 text-center lg:text-left transition-all duration-300 ease-in-out`}
      >
        {/* El icono para cerrar el menú (en la parte superior derecha) */}
        <div className="absolute top-4 right-20 lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            X
          </button>
        </div>

        <li className="mb-7 lg:mb-0">
          <Link
            to="/"
            className="font-montserrat text-lg text-white hover:text-primary-color transition duration-200"
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
        </li>
        <li className="mb-7 lg:mb-0">
          <Link
            to="/cursos"
            className="font-montserrat text-lg text-white hover:text-primary-color transition duration-200"
            onClick={handleLinkClick}
          >
            Cursos
          </Link>
        </li>
        <li className="mb-7 lg:mb-0">
          <Link
            to="/planes"
            className="font-montserrat text-lg text-white hover:text-primary-color transition duration-200"
            onClick={handleLinkClick}
          >
            Planes
          </Link>
        </li>
        <li className="mb-7 lg:mb-0">
          <Link to="/login" className="btn" onClick={handleLinkClick}>
            Iniciar Sesión
          </Link>
        </li>
        <li className="mb-7 lg:mb-0">
          <Link
            to="/signup"
            className="btn-secundary hover:bg-dark-color hover:text-primary-color"
            onClick={handleLinkClick}
          >
            Regístrate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
