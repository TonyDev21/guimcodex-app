import { Link } from "react-router-dom";

const Credito = () => {
  return (
    <div className="mb-8 lg:mb-0">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Método de Pago</h2>
        <form>
          {/* Selección de tarjeta */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Seleccionar tarjeta
            </label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="Amex">American Express</option>
            </select>
          </div>

          {/* Número de tarjeta */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Número de tarjeta
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="1234 5678 9123 4567"
            />
          </div>

          {/* Fecha de caducidad y Código de seguridad */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">
                Fecha de caducidad
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="MM/AA"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">
                Código de seguridad
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="CVC"
              />
            </div>
          </div>

          {/* Nombre y Apellido */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tu nombre"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Apellido</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* País */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">País</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tu país"
            />
          </div>

          {/* Botón de completar compra */}
          <Link
            to="/comprobante-de-pago"
            className="block text-center btn w-full py-3 rounded transition duration-300 cursor-pointer"
          >
            Completar su Compra
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Credito;
