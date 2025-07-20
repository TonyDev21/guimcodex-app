import { useEffect, useState } from "react";
import ContentPlans from "../organisms/ContentPlans";
import BannerCurso from "../organisms/BannerCurso";
import { useParams } from "react-router-dom";
import axios from "axios"; // Para hacer la solicitud HTTP
import avatar from "../../assets/avatar.svg";

const Curso = () => {
  const { courseId } = useParams(); // Captura el parámetro de la URL
  const [course, setCourse] = useState(null); // Estado para almacenar los datos del curso

  // Hacer la solicitud para obtener los datos del curso
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/api/courses/${courseId}`);
        setCourse(response.data); // Guardamos los datos del curso en el estado
      } catch (error) {
        console.error("Error fetching course:", error); // Manejo de errores
      }
    };

    fetchCourse(); // Llamamos a la función para obtener el curso
  }, [courseId]); // Solo se ejecuta cuando el `courseId` cambia

  if (!course) {
    return <div>Cargando...</div>; // Si los datos del curso aún no están disponibles
  }

  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
      <div className="w-full h-auto shadow-xl">
        {/* Pasamos los datos del curso a BannerCurso */}
        <BannerCurso course={course} />

        {/* Contenido y lo que aprenderás */}
        <div className="grid grid-cols-1 md:grid-cols-5 w-full h-auto">
          {/* Contenido del Curso */}
          <div className="bg-white p-6 pl-20 md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Contenido del Curso</h2>
            <ul className="list-none space-y-2 text-lg">
              {course.sections.map((section, index) => (
                <li key={index} className="border-b border-gray-500">{section.title}</li>
              ))}
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
                {course.objectives.split("\n").map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
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
                    src={course.professorAvatar || avatar} // Usa la foto del profesor
                    alt="Foto del profesor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Información del profesor */}
                <div>
                  <p className="font-bold text-lg">{course.professor}</p>
                </div>

                {/* Bandera del país del profesor */}
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
                <li>{course.basicKnowledge}</li>
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
