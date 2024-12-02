import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaLeaf } from 'react-icons/fa';

const themes = [
  { id: 'theme01', icon: FaSun, label: 'Tema Claro' },
  { id: 'theme02', icon: FaMoon, label: 'Tema Oscuro' },
  { id: 'theme03', icon: FaLeaf, label: 'Tema Verde' }
];

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="flex flex-col items-start space-y-4">
      {themes.map(({ id, icon: Icon, label }) => (
        <div key={id} className="flex items-center space-x-3">
          <button
            onClick={() => changeTheme(id)}
            className={`p-3 rounded-full transition-all duration-300 ease-in-out
                       ${theme === id ? 'bg-theme-primary' : 'bg-transparent bg-opacity-20'}
                       hover:bg-theme-primary hover:bg-opacity-30`}
            aria-label={`Cambiar a ${label}`}
          >
            <Icon className={`w-6 h-6 ${theme === id ? 'text-theme-background' : 'text-theme-text'}`} />
          </button>
          <span className={`${theme === id ? 'font-bold' : ''} text-theme-text text-left text-sm`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;