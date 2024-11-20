import { FaTrash } from "react-icons/fa";

const CardDetail = ({ img, title, price, onDelete }) => {
  return (
    <div className="p-4 w-full rounded-lg mb-4 bg-secundary-color shadow shadow-extra-color relative">
      {/* Botón Eliminar */}
      <button 
        onClick={onDelete} 
        className="absolute top-2 right-2 text-extra-color hover:text-red-600 transition-colors"
      >
        <FaTrash />
      </button>
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        {/* Imagen del Producto */}
        <img 
          alt="product" 
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
          src={img} 
        />
        {/* Detalles del Producto */}
        <div className="flex-grow sm:pl-8">
          <h3 className="text-extra-color font-bold">{title}</h3>
        </div>
        {/* Precio */}
        <div>
          <span className="text-extra-color font-bold"> s/{!isNaN(price) ? parseFloat(price).toFixed(2) : "0.00"}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

