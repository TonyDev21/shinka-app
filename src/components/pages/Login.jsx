
import { useAuth } from "../../context/AuthProvider";
import { API_URL } from "../../constants/env";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import imgLogo from '../../assets/logo_color_white.svg';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
        }
      } else {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to={from} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-color text-white">
      <div className="bg-dark-light p-8 rounded-xl backdrop-blur-sm shadow-lg shadow-cyan-200/10 w-[90%] max-w-4xl transition-transform duration-300 ease-in-out  flex">
        {/* Imagen Sección */}
        <div className="hidden sm:flex flex-col justify-center items-center flex-1 text-center mb-6 ">
          <img src={imgLogo} alt="Logo"className="mx-auto mb-2 w-32 h-32"/>
          <h2 className="text-3xl font-bold text-cyan-200">CodexFlow</h2>
        </div>

        {/* Formulario Sección */}
        <div className="flex-1 ">
          <h1 className="text-3xl font-semibold text-center mb-6 text-primary-color">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                required
                className="w-full p-3 mt-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-color"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                className="w-full p-3 mt-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-color"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-light-color hover:underline">¿Olvidaste tu contraseña?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 mb-3 btn text-dark-light rounded-lg"
            >
              Iniciar Sesión
            </button>
            <p className="text-dark-extra text-md mt-5">
              ¿No tienes una cuenta?{" "}
              <Link to="/signup" className="text-md text-primary-color underline">
              Crear cuenta
             </Link>
          </p>
            
          </form>

          <p className="text-center mt-6 text-dark-extra">Inicia sesión con:</p>

          <div className="mt-4 text-center">
            <button
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => (window.location.href = 'http://localhost:3000/auth/google')}
            >
              Iniciar con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
