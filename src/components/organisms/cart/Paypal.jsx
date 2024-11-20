import { FaCcPaypal } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Paypal = () => {
  return (
    <div className="mb-8 lg:mb-0">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Método de Pago</h2>
        
        <button className="w-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-2xl text-black font-semibold py-3 rounded transition duration-300">
          Pagar con
          <span className="ml-2">
            <FaCcPaypal className="text-3xl" />
          </span>
        </button>
        
        <p className="text-xs pt-4 flex items-center justify-center text-gray-600">
          <FaLock className="mr-2 text-sm" />
          Todas las transacciones son seguras y están encriptadas
        </p>
      </div>
    </div>
  )
}

export default Paypal
