import { FaLock } from "react-icons/fa";

const Yape = () => {
  return (
    <div className="mb-8 lg:mb-0">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Método de Pago</h2>
        
        <form>
          {/* Selección de tarjeta */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Ingresa tu número de Yape</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="number" name="nrocelular" id="nrocelular" />
          </div>

          {/* Código de Aprobación */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Código de Aprobación</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="322 666" />
          </div>

          {/* Botón de completar compra */}
          <a href="detallecompra.html" className="block text-center btn w-full py-3 rounded transition duration-300 cursor-pointer">
            Completar su Compra
          </a>
        </form>

        <p className="text-xs pt-4 flex items-center justify-center text-gray-600">
          <FaLock className="mr-2" />
          Todas las transacciones son seguras y están encriptadas
        </p>
      </div>
    </div>
  )
}

export default Yape
