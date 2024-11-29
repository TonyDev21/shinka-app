
const BurgerButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="lg:hidden flex items-center" onClick={toggleMenu}>
      <button className="text-white">
        {/* Icono de hamburguesa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-8 w-8 ${isMenuOpen ? "hidden" : "block"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        {/* Icono de cerrar el menú */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-8 w-8 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default BurgerButton;
