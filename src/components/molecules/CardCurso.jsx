

import { Link } from 'react-router-dom';

const CardCurso = ({ image, title, hours, description, price, courseId }) => {
  return (
    <Link
      to={`/cursos/${courseId}`}  // Cambia "#" por la ruta dinámica usando courseId
      state={{ image, price, title }} // Pasa los datos dinámicos a través de state
      className=" bg-dark-color border-b-2 border-primary-color cursor-pointer hover:scale-105 transform transition duration-300"
    >
      <div className="h-48 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover "
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl text-light-color font-bold mb-2">
          {title}
        </h4>
        <span className="text-sm text-dark-extra font-semibold block mb-1">
          {hours} horas de práctica
        </span>
        <p className="text-sm text-dark-extra mb-4">
          {description}
        </p>
        <span className="block text-lg text-primary-color font-bold">{price}</span>
      </div>
    </Link>
  );
};

export default CardCurso;