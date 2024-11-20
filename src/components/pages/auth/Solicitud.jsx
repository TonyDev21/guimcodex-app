import { Link } from "react-router-dom"

const Solicitud = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto"> 
    <div className="container mx-auto py-12">
      
      {/* Sección de Formulario */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Completa tus Datos</h2>
        <form>
          
          {/* Nombre Completo */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Nombre Completo:</label>
            <input type="text" id="name" name="name" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
          </div>
          
          {/* Edad */}
          <div className="mb-4">
            <label htmlFor="edad" className="block text-gray-700 font-semibold">Edad:</label>
            <input type="number" id="edad" name="edad" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Correo Electrónico:</label>
            <input type="email" id="email" name="email" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
          </div>
    
          {/* Motivo de Aplicación */}
          <div className="mb-6">
            <label htmlFor="reason" className="block text-gray-700 font-semibold">Motivo de postulación:</label>
            <textarea id="reason" name="reason" rows="4" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"></textarea>
          </div>
          
          {/* Documento de Identidad */}
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700 font-semibold">Foto de tu DNI (Ambas caras)</label>
            <input type="file" id="photo" name="photo" accept="image/*" multiple className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
          </div>

          {/* Botón de Enviar */}
          <div className="text-center mt-8">
            <Link to="/becas/postulacion" className="btn py-3 px-10 cursor-pointer">
              Enviar Solicitud
            </Link>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Solicitud
