import imgLogo from "../../assets/logo_color_white.svg";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { API_URL } from "../../constants/env";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          edad, 
          email,
          password,  
        }),
      });

      if (response.ok) {
        console.log("User created successfully");
        goTo("/login");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-color text-white">
      <div className="bg-dark-light p-8 rounded-xl backdrop-blur-sm shadow-lg shadow-cyan-200/10 w-[90%] max-w-4xl transition-transform duration-300 ease-in-out flex">
        {/* Imagen Sección */}
        <div className="hidden sm:flex flex-col justify-center items-center flex-1 text-center mb-6">
          <img src={imgLogo} alt="Logo" className="mx-auto mb-2 w-32 h-32" />
          <h2 className="text-3xl font-bold text-cyan-200">LogicCraft</h2>
        </div>

        {/* Formulario Sección */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-center mb-6 text-primary-color">
            Registrarse
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                required
                className="w-full p-3 mt-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-color"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Correo Electrónico
              </label>
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

            {/* Contraseña */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña
              </label>
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

            {/* Confirmar Contraseña */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirmar Apellido
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                required
                className="w-full p-3 mt-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-color"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                className="w-full p-3 mt-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-color"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              className="w-full py-3 mb-3 btn text-dark-light rounded-lg"
            >
              Registrarme
            </button>

            {/* Enlace a Login */}
            <Link
              to="/login"
              className="text-md text-primary-color underline mt-4 mb-5"
            >
              Ya tengo una cuenta
            </Link>
          </form>

          {/* Opciones de Registro */}
          <p className="text-center mt-6 text-dark-extra">Regístrate con:</p>

          <div className="mt-4 text-center">
            <button
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() =>
                (window.location.href = "http://localhost:3000/auth/google")
              }
            >
              Registrarse con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
