/* import CardCurso from "../molecules/CardCurso"
import imgJS from "../../assets/cursoJavascript.svg"
import imgPython from "../../assets/cursoPython.svg"
import imgJava from "../../assets/cursoJava.svg"
import imgReact from "../../assets/cursoReact.svg"
import imgNodeJs from "../../assets/cursoNodeJs.svg"
import imgTailwind from "../../assets/cursoTailwind.svg" */

import { useState, useEffect } from 'react';
import CardCurso from "../molecules/CardCurso";
import axios from 'axios'; 


const MainCourses = () => {

  const [courses, setCourses] = useState([]); // Estado para guardar los cursos

  // Obtener cursos desde la API cuando el componente se monte
  useEffect(() => {
    // Realizamos la solicitud GET para obtener los cursos
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3100/api/courses'); // Reemplaza con tu URL de backend
        setCourses(response.data); // Guardamos los cursos obtenidos en el estado
      } catch (error) {
        console.error('Error fetching courses:', error); // Manejamos posibles errores
      }
    };

    fetchCourses(); // Llamamos a la función para obtener los cursos
  }, []); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 min-h-[450px]">
      {courses.map((course) => (
        <CardCurso
          key={course._id} 
          image={course.imageUrl} 
          title={course.title}
          hours={course.sections.reduce((acc, section) => acc + section.classes.reduce((sum, clase) => sum + clase.duration, 0), 0)} // Calculamos el total de horas
          description={course.description}
          price={`${course.currency}${course.price.toFixed(2)}`} // Formateamos el precio
          courseId={course._id} // Usamos el ID único para la URL dinámica
        />
      ))}
    </div>
  )
}

export default MainCourses
