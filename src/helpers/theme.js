/* 

        import React from 'react';
        import useTheme from '../hooks/useTheme';

        const Navbar = () => {
        
        const { theme, toggleTheme } = useTheme();

        return (
        <nav className="p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-xl font-bold">MyApp</div>
                <div className="space-x-4">
                    <button
                     onClick={() => toggleTheme('light')}
                    className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'}`}
                    >
                    Light Mode
                    </button>
                    <button
                    onClick={() => toggleTheme('dark')}
                    className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-300' : 'bg-gray-600'}`}
                    >
                    Dark Mode
                    </button>
                    <button
                    onClick={() => toggleTheme('colorful')}
                    className={`px-4 py-2 rounded ${theme === 'colorful' ? 'bg-yellow-400' : 'bg-gray-600'}`}
                    >
                    Colorful Mode
                    </button>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;









*/
