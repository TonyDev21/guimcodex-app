

const Password = () => {
    return (
        <div className="w-11/12 sm:w-3/4 order-1 md:order-2">
          {/* Título */}
          <h1 className="text-4xl font-bold mb-6 text-center">Contraseña</h1>
          
          {/* Campos del formulario */}
          <form>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-semibold">Contraseña actual</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Cambiar nueva contraseña</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Repetir nueva contraseña</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            
            {/* Botón de Guardar Cambios */}
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                Actualizar
              </button>
            </div>
          </form>
        </div>
      );
}

export default Password
