import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../molecules/header/Logo";
import MainMenu from "../molecules/header/MainMenu";

const MainHeader = ({ Children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para controlar el menú burger
  const [showNavbar, setShowNavbar] = useState(true);   // Estado para mostrar/ocultar el navbar con el scroll
  const [lastScrollY, setLastScrollY] = useState(0);    // Última posición del scroll

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Alterna el estado del menú burger
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la parte superior cuando cambia la ruta
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Si el scroll va hacia abajo, oculta el navbar
    } else {
      setShowNavbar(true); // Si el scroll va hacia arriba, muestra el navbar
    }
    setLastScrollY(window.scrollY); // Actualiza la posición del scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Bloquear/desbloquear el scroll del body solo cuando el menú burger está abierto
  useEffect(() => {
    // Solo desactivar el scroll en pantallas pequeñas
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth <= 1024) {
        document.body.style.overflow = "hidden"; // Bloquea el scroll solo cuando el menú está abierto en pantallas pequeñas
      } else {
        document.body.style.overflow = "auto"; // Restaura el scroll en pantallas grandes o cuando el menú se cierra
      }
    };

    handleResize(); // Llama a la función inicial para el estado actual del menú y tamaño de pantalla
    window.addEventListener("resize", handleResize); // Añadimos el listener para el cambio de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener
      document.body.style.overflow = "auto"; // Restaurar el scroll cuando el componente se desmonta
    };
  }, [isMenuOpen]); // El efecto se activa solo cuando `isMenuOpen` cambia

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
      <main className="mb-16">{Children}</main>
    </>
  );
};

export default MainHeader;
