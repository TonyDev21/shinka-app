import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import Logo from "../molecules/header/Logo";
import MainMenu from "../molecules/header/MainMenu";

const MainHeader = ({ Children }) => {
  // Maneja el estado del Burger Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);  // Estado para mostrar/ocultar navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Última posición de scroll

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar cambios en la ubicación (navegación)
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior cuando cambia la ruta
  }, [location]);

  // Maneja el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);  // Si hace scroll hacia abajo, ocultar el navbar
    } else {
      setShowNavbar(true);  // Si hace scroll hacia arriba, mostrar el navbar
    }
    setLastScrollY(window.scrollY); // Actualiza la posición del scroll
  };

  useEffect(() => {
    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <>
      <header
        className={`bg-secundary-color border-b-2 border-primary-color z-50 transition-transform duration-300 ease-in-out fixed top-0 left-0 w-full ${
          showNavbar ? 'transform-none' : '-translate-y-full'
        }`}
      >
        <nav className="container mx-auto flex justify-around sm:justify-between items-center">
          <Logo />
          <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
      </header>
      <main className="mb-20">
        {Children}
      </main>
    </>
  );
};

export default MainHeader;
