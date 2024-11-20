import { Link } from 'react-router-dom';

const ScrollCourses = () => {
  return (
    <section className="bg-banner-curso bg-cover bg-center bg-no-repeat w-full h-auto font-montserrat">
      <div className="container mx-auto text-light-color h-80 flex flex-col justify-center items-center text-center gap-6">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl">Aprender nunca fue tan fácil.</p>
          <p className="text-3xl sm:text-4xl md:text-5xl">¡Empieza tu viaje hoy!</p>
        </div>
        <div className="mt-4">
          <Link to="/cursos" className="btn py-6 px-8 text-xl">
            Mostrar Cursos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ScrollCourses
