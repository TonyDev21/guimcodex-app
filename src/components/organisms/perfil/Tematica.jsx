const Tematica = () => {
  
  return (
    <div className="w-11/12 sm:w-3/4 order-1 md:order-2">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 text-center">Temática</h1>
      
      {/* Campos del formulario */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Escoja su temática:</label>

          <div className="flex items-center mb-2 mt-8">
            <input
              type="radio"
              id="rango10"
              name="tematica"
              value="rango10"
              className="mr-2"
            />
            <label htmlFor="rango10" className="text-gray-700">Exploradores Pequeños</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="rango17"
              name="tematica"
              value="rango17"
              className="mr-2"
            />
            <label htmlFor="rango17" className="text-gray-700">Mundo Teen</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="rango18"
              name="tematica"
              value="rango18"
              className="mr-2"
            />
            <label htmlFor="rango18" className="text-gray-700">Sabiduría y Experiencias</label>
          </div>

          {/* Botón de Guardar Cambios */}
          <div className="text-center mt-24">
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tematica;

