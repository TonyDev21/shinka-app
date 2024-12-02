import { useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { ThemeProvider } from "../../context/ThemeContext";
import MainHeader from "../organisms/MainHeader";
import Footer from "../organisms/Footer";
import AppTopbar from "../organisms/AppTobar";
import AppSidebar from "../organisms/AppSidebar";


const App = () => {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  if (isAuthenticated && location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <ThemeProvider >
      {isAuthenticated ? (
        <div className="flex min-h-screen bg-theme-background text-theme-text">
          <AppTopbar onToggleSidebar={toggleSidebar} />
          <AppSidebar isVisible={sidebarVisible} />
          <div className="flex-1 ml-0 transition-all duration-300 ease-in-out">
            <div className={`mt-20 p-4 ${sidebarVisible ? "sm:ml-72" : "ml-0"}`} >
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <MainHeader />
          <section>
            <Outlet />
          </section>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
