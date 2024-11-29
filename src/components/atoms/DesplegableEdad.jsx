import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DesplegableEdad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todas las edades"); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Cambiar a la opcion seleccionada
    setIsOpen(false); // Cerrar el menu 
  };

  return (
    <div className="relative inline-block text-left w-60">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white  bg-secundary-color border border-extra-color rounded-md  transition duration-300"
      >
        {selectedOption}
        <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-secundary-color ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-white">
            <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Edades</h3>
            <ul className="space-y-1 ">
              <li 
                onClick={() => handleOptionClick("Menores de 7 años")} 
                className="px-4 py-2 hover:bg-extra-color hover:text-secundary-color cursor-pointer"
              >
                Menores de 7 años
              </li>
              <li 
                onClick={() => handleOptionClick("De 7 a 12 años")} 
                className="px-4 py-2 hover:bg-extra-color hover:text-secundary-color cursor-pointer"
              >
                De 7 a 12 años
              </li>
              <li 
                onClick={() => handleOptionClick("De 13 a 17 años")} 
                className="px-4 py-2 hover:bg-extra-color hover:text-secundary-color cursor-pointer"
              >
                De 13 a 17 años
              </li>
              <li 
                onClick={() => handleOptionClick("18 años a más")} 
                className="px-4 py-2 hover:bg-extra-color hover:text-secundary-color cursor-pointer"
              >
                18 años a más
              </li>
              <li 
                onClick={() => handleOptionClick("Todas las edades")} 
                className="px-4 py-2 hover:bg-extra-color hover:text-secundary-color cursor-pointer"
              >
                Todas las edades
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesplegableEdad;