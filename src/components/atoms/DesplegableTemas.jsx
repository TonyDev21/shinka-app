import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DesplegableTemas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todas las áreas"); // Estado para la opción seleccionada

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Cambiar el texto a la opción seleccionada
    setIsOpen(false); // Cerrar el menú desplegable
  };

  return (
    <div className="relative inline-block text-left w-60">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white  bg-secundary-color border border-primary-color rounded-md  transition duration-300"
      >
        {selectedOption}
        <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-secundary-color ring-1 ring-black ring-opacity-5">
        <div className="py-1 text-white">
          <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Áreas</h3>
            <ul className="space-y-1 ">
              <li 
                onClick={() => handleOptionClick("Desarrollo Web")} 
                className="px-4 py-2 hover:bg-primary-color hover:text-secundary-color cursor-pointer"
              >
                Desarrollo Web
              </li>
              <li 
                onClick={() => handleOptionClick("Robótica")} 
                className="px-4 py-2 hover:bg-primary-color hover:text-secundary-color cursor-pointer"
              >
                Robótica
              </li>
              <li 
                onClick={() => handleOptionClick("Marketing")} 
                className="px-4 py-2 hover:bg-primary-color hover:text-secundary-color cursor-pointer"
              >
                Marketing
              </li>
              <li 
                onClick={() => handleOptionClick("Rutas de Aprendizaje")} 
                className="px-4 py-2 hover:bg-primary-color hover:text-secundary-color cursor-pointer"
              >
                Rutas de Aprendizaje
              </li>
              <li 
                onClick={() => handleOptionClick("Todas las áreas")} 
                className="px-4 py-2 hover:bg-primary-color hover:text-secundary-color cursor-pointer"
              >
                Todas las áreas
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesplegableTemas;