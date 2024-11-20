

const Membresia = () => {
    return (
      <div className="w-11/12 sm:w-3/4 order-1 md:order-2">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6 text-center">Membresía</h1>
        
        {/* Campos del formulario */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Plan actual:</label>
            <label className="block text-gray-700">Básico</label>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Fecha de Inicio:</label>
            <label className="block text-gray-700">08-10-2024</label>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Fecha de Fin:</label>
            <label className="block text-gray-700">08-10-2025</label>
          </div>
          
          {/* Botón de Guardar Cambios */}
          <div className="text-center mt-16">
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Cambiar Plan
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Membresia;
  