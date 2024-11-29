import { useState, useEffect } from "react";


const useTheme = () => {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  
  useEffect(() => {
    document.documentElement.classList.remove("theme01", "theme02", "theme03");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;