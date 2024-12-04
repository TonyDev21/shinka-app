import { Link } from 'react-router-dom';
import { 
    FaHome, FaBook, FaBuffer, FaChartBar,
    FaRegComments, FaUserGraduate, FaBroom   
} from 'react-icons/fa';

const navItems = [ 
  { to: "dashboard", icon: FaHome, label: "Inicio" },
  { to: "mis-cursos", icon: FaBook, label: "Mis Cursos" },
  { to: "mis-rutas", icon: FaBuffer, label: "Mis Rutas" },
  { to: "mi-progreso", icon: FaChartBar, label: "Mi Progreso" },
  { to: "chat", icon: FaRegComments, label: "ChatFlow" },
  { to: "tematicas", icon: FaBroom, label: "Tematicas" },
  { to: "becas", icon: FaUserGraduate, label: "Beca" },
];

const AppSidebar = ({ isVisible }) => {
  return (
    <div className={`
      fixed top-20 left-0 h-[calc(100vh-5rem)] w-72
      shadow-lg transform transition-transform duration-300 ease-in-out z-40 border-r-2
      ${isVisible ? 'translate-x-0' : '-translate-x-full'}
      bg-theme-sidebar text-theme-text
    `}>
      <div className="h-full overflow-y-auto">
        <nav className="p-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link 
              key={to}
              to={to} 
              className="flex items-center px-3 py-4 rounded-lg transition-all duration-300 ease-in-out transform 
                         hover:bg-theme-primary hover:bg-opacity-10 hover:scale-105 hover:text-theme-sidebar"
            >
              <Icon className="w-5 h-5 mr-2" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;