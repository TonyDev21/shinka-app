import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[93vh] flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://res.cloudinary.com/dxnx6awui/video/upload/v1732863847/7534244-hd_1920_1080_25fps_wtghjb.mp4"
          type="video/mp4"
        />
      </video>

      {/* Contenedor del contenido */}
      <div className="relative z-10 text-center max-w-[800px] p-12 bg-black bg-opacity-80 rounded-lg">
        <h1 className="font-montserrat font-bold text-light-color mb-8 text-5xl">
          CodexFlow
        </h1>
        <p className="font-montserrat text-light-color text-xl mb-8">
          ¡Bienvenido a CodexFlow! Aquí te guiaremos desde lo más básico hasta
          lo avanzado, ayudándote a dominar el arte de la programación desde
          cero. No necesitas experiencia previa, solo la curiosidad de explorar
          el mundo del código.
        </p>
        <Link to="" className="btn text-xl py-4">Comienza tu viaje</Link>
      </div>
    </div>
  );
};

export default Banner;
