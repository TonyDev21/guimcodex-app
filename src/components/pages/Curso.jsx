import ContentPlans from "../organisms/ContentPlans";
import BannerCurso from "../organisms/BannerCurso";
import avatar from "../../assets/avatar.svg";
import { useParams } from "react-router-dom";

const Curso = () => {
  const { courseId } = useParams(); // Captura el parámetro de la URL

  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
      <div className="w-full h-auto shadow-xl">
        <BannerCurso courseId={courseId} />

        {/* Contenido y lo que aprenderás */}
        <div className="grid grid-cols-1 md:grid-cols-5 w-full h-auto">
          {/* Contenido del Curso */}
          <div className="bg-white p-6 pl-20 md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Contenido del Curso</h2>
            <ul className="list-none space-y-2 text-lg">
              <li className="border-b border-gray-500">01. Introducción</li>
              <li className="border-b border-gray-500">02. Tipos Básicos</li>
              <li className="border-b border-gray-500">03. Operadores</li>
              <li className="border-b border-gray-500">04. Control de Flujo</li>
              <li className="border-b border-gray-500">05. Objetos</li>
              <li className="border-b border-gray-500">06. Arrays</li>
              <li className="border-b border-gray-500">07. POO</li>
              <li className="border-b border-gray-500">08. DOM</li>
              <li className="border-b border-gray-500">09. Eventos</li>
              <li className="border-b border-gray-500">10. LocalStorage</li>
              <li className="border-b border-gray-500">11. Try-Catch</li>
              <li className="border-b border-gray-500">12. Promesas</li>
            </ul>
            <button className="text-blue-500 mt-4 hover:underline">
              Mostrar más
            </button>
          </div>

          {/* Lo que aprenderás */}
          <div className="bg-white p-6 md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-secundary-color">
                Lo que aprenderás
              </h2>
              <ul className="list-disc list-inside text-lg">
                <li>Convertirte en un desarrollador JavaScript confiable.</li>
                <li>Aprender cómo funciona JavaScript internamente.</li>
                <li>Aprender control de flujo, variables, funciones, etc.</li>
                <li>Orientación a objetos moderno con clases de ES6.</li>
                <li>
                  Practicar tus habilidades con más de 50 ejercicios y desafíos
                  de código con soluciones incluidas.
                </li>
              </ul>
            </div>

            {/* Profesor del curso */}
            <div className="mt-6 w-auto">
              <h2 className="text-2xl font-bold mb-4 border-b border-secundary-color">
                Profesor de este Curso
              </h2>
              <div className="flex items-center text-black p-4 rounded-lg space-x-4">
                {/* Foto del profesor */}
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={avatar}
                    alt="Foto del profesor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Información del profesor */}
                <div>
                  <p className="font-bold text-lg">Jorge Cordoba</p>
                </div>

                {/* Bandera de Perú */}
                <div className="flex items-center border border-gray-300 w-5 h-3 overflow-hidden">
                  <div className="w-1/3 h-full bg-red-600"></div>
                  <div className="w-1/3 h-full bg-white"></div>
                  <div className="w-1/3 h-full bg-red-600"></div>
                </div>
              </div>
            </div>

            {/* Apto para */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4 border-b border-secundary-color">
                ¿Qué conocimientos previos necesitas?
              </h2>
              <ul className="list-disc list-inside text-lg">
                <li>Algoritmos y Lógica de programación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ContentPlans
        title="Únete para obtener acceso completo"
        text="y desbloquea todo tu potencial."
      />
    </section>
  );
};

export default Curso;
