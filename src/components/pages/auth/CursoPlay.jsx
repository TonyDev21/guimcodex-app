import { useParams } from 'react-router-dom';
import videoCurso from "../../../assets/videoCurso.mp4"

const CursoPlay = () => {

    const { courseId } = useParams();

  return (
    <div className="flex flex-grow overflow-y-auto bg-gray-900 ">

      {/* Barra Lateral */}
      <aside id="sidebar" className="bg-gray-800 text-white w-16 hover:w-64 transition-all duration-300 ease-in-out h-screen fixed top-0 left-0 flex flex-col z-40  border-r border-extra-color">
        <nav className="flex-grow  space-y-2"> {/* Añadir margen superior para evitar que quede pegado al borde */}
          {Array.from({ length: 17 }, (_, i) => (
            <a key={i} href="#" className="flex items-center justify-center md:justify-start p-3 hover:bg-gray-700 rounded">
              <span className="ml-3 hidden md:inline">{i + 1}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Área de Contenido */}
      <main className="flex flex-grow ml-16">

        {/* Sección de Video */}
        <section className="flex-1 bg-gray-900 text-extra-color">
          <div className="w-full h-[70vh]">
            <video src={videoCurso} className="w-full h-full object-cover" controls></video>
          </div>

          {/* Información del Video */}
          <div className="px-4 w-full ">
            <div className="w-4/5 mx-auto p-8">
            <h2 className="text-4xl font-bold pb-4">1. Introducción a {courseId}</h2>
              <p className="text-xl pb-4 text-light-color">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt alias officia odit eveniet iusto doloribus at ipsa accusantium temporibus asperiores.
              </p>

              <div>
                <h3 className="text-2xl pb-4 font-bold">¿Qué es JavaScript?</h3>
                <p className="text-base text-light-color pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime placeat repudiandae consectetur sequi architecto totam!</p>
              </div>

              <div>
                <h3 className="text-2xl pb-4 font-bold">¿Qué herramientas usaremos?</h3>
                <p className="text-base text-light-color pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime placeat repudiandae consectetur sequi architecto totam!</p>
              </div>

              <div>
                <h3 className="text-2xl pb-4 font-bold">¿Cómo funciona JavaScript?</h3>
                <p className="text-base text-light-color">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime placeat repudiandae consectetur sequi architecto totam!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Comentarios */}
        <div className="w-full md:w-[22.5%] p-8 border-l border-extra-color">
          <h3 className="text-xl font-bold mb-4 text-extra-color">Comentarios</h3>

          {/* Publicar Comentario */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="flex-grow">
              <textarea className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Agregar comentario..."></textarea>
              <button className="mt-2 bg-extra-color text-secundary-color px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Publicar</button>
            </div>
          </div>

          {/* Lista de Comentarios */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex flex-wrap -m-4">
              <div className="p-4 w-full md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 bg-slate-700 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    AS
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-extra-color text-lg title-font font-medium mb-3">Usuario 0{i + 1}</h2>
                    <p className="leading-relaxed text-base text-light-color">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CursoPlay;
