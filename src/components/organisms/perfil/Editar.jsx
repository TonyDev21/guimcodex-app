

const Editar = () => {
  return (
    <div className="w-11/12 sm:w-3/4 order-1 md:order-2">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 text-center">Editar Perfil</h1>
      {/* Imagen de perfil */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-40 h-40 bg-gray-300 rounded-full flex justify-center items-center text-3xl font-bold">
            AS
          </div>
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs mt-2">
            Añadir imagen
          </button>
        </div>
      </div>
      {/* Campos del formulario */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Nombre</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Apellidos</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Apellidos"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Correo</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Correo"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Género</label>
          <input type="radio" id="masculino" name="genero" value="masculino" />
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" id="femenino" name="genero" value="femenino" />
          <label htmlFor="femenino">Femenino</label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold" htmlFor="pais">
            País
          </label>
          <select
            name="pais"
            id="pais"
            defaultValue="peru"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="peru">Perú</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
          </select>
        </div>
        {/* Botón de Guardar Cambios */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editar;
