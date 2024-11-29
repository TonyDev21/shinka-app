import { Link } from "react-router-dom";
import BurgerButton from "../../atoms/BurgerButtom";

const MainMenu = ({ isMenuOpen, toggleMenu }) => {

  {/* Cierra el BurgerMenu */}
  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <nav className="z-50">

      <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <ul
        className={`lg:flex lg:flex-grow-0 gap-x-4 text-2xl lg:justify-center lg:items-center absolute lg:relative lg:top-0 top-20
          left-0 bg-secundary-color w-full h-screen lg:h-auto lg:w-auto py-14 lg:py-0 px-8 text-center lg:text-left transition-all duration-300 ease-in-out
          ${isMenuOpen ? "block" : "hidden"}`}
      >
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
            className="font-montserrat text-lg  text-white hover:text-primary-color transition duration-200"
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
            className="btn-secundary"
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
