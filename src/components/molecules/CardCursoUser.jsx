import { Link } from "react-router-dom";

const CardCursoUser = ({ courseId, image, title, hours, description, progress }) => {
  return (
    <Link
      to={`/biblioteca/${courseId}`} // Ruta dinámica basada en el courseId
      className="rounded-lg shadow-lg shadow-secundary-color bg-secundary-color cursor-pointer hover:scale-105 transform transition duration-300"
    >
      <div className="h-48 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl text-light-color font-bold mb-2">{title}</h4>
        <span className="text-sm text-light-color font-semibold block mb-1">
          {hours} horas de práctica
        </span>
        <p className="text-sm text-light-color mb-4">{description}</p>
        <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="block text-sm text-light-color font-semibold">
          Progreso: {progress}%
        </span>
      </div>
    </Link>
  );
};

export default CardCursoUser;


