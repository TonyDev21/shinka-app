import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import guimarLogo from '../../assets/logo_sin_fondo.svg';
import { FaBars, FaEllipsisV,FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const AppTopbar = ({ onToggleSidebar }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const {state} = useContext(CartContext);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-20 px-8 bg-surface-card z-50 shadow-md flex items-center justify-between sm:justify-start transition-all font-montserrat">
            {/* Menu Button (Always visible) */}
            <button
                type="button"
                className="inline-flex justify-center items-center w-12 h-12 rounded-full cursor-pointer hover:bg-surface-hover hover:text-text-color transition-colors sm:order-2 order-1"
                onClick={onToggleSidebar}
            >
                <FaBars className="text-xl" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center text-surface-900 text-xl font-bold w-72 rounded-lg sm:mx-0 mx-auto order-2 sm:order-1 flex-grow sm:flex-grow-0 justify-center">
                <img
                    src={guimarLogo}    
                    className="w-12 h-20 mr-2"
                     alt="logo"
                />
                <span>LogicCraft</span>
            </Link>

            {/* Ellipsis Button (Visible only on small screens) */}
            <button
                type="button"
                className="sm:hidden w-12 h-12 rounded-full cursor-pointer hover:bg-surface-hover hover:text-text-color transition-colors order-3"
                onClick={toggleMenu}
            >
                <FaEllipsisV className="text-xl" />
            </button>

            {/* Topbar Menu (Visible on large screens, hidden on small screens) */}
            <div className="hidden sm:flex ml-auto p-0 list-none gap-x-6 order-4 sm:order-3 font-montserrat">
                <Link to="/" className="inline-flex justify-center items-center cursor-pointer hover:bg-surface-hover hover:text-text-color transition-colors">
                    Planes
                </Link>
                <Link to="/" className="font-normal text-text-color hover:text-btn-color-primary transition duration-200 flex items-center">
                    <FaShoppingCart className="mr-1" /> <span>({state.cart.length})</span>
                </Link>
                <Link to="/" className="inline-flex justify-center items-center cursor-pointer hover:bg-surface-hover hover:text-text-color transition-colors">
                       Perfil  
                </Link>
            </div>

            {/* Dropdown Menu (Visible on small screens when FaEllipsisV is clicked) */}
            <div className={`absolute top-full right-0 w-48 bg-surface-overlay shadow-lg p-4 rounded-lg ${menuVisible ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link className="flex items-center gap-2">
                            Planes
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='font-montserrat font-normal text-dark-color hover:text-btn-color-primary transition duration-200 flex items-center'>
                            <FaShoppingCart className="mr-1" /><span>({state.cart.length})</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center gap-2">
                                Perfil
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AppTopbar;
