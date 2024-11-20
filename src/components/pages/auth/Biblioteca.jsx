import DesplegableEdad from "../../molecules/DesplegableEdad"
import DesplegableTemas from "../../molecules/DesplegableTemas"
import MainCoursesUser from "../../organisms/MainCoursesUser"

const Biblioteca = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto"> 
            <div className="container mx-auto h-auto flex justify-center items-center pb-8">
                <div className="w-4/5 font-montserrat">
                    <h3 className="text-5xl text-extra-color font-bold text-center py-8">Mi Biblioteca</h3>
                    {/* Buscador*/}
                    <div className="flex justify-center mb-6">
                        <input type="text" id="search" placeholder="Buscar curso por nombre..." className="bg-secundary-color border border-extra-color  focus:outline-none focus:ring focus:ring-extra-color rounded-md px-4 py-2 w-4/5 md:w-1/2 text-extra-color"/>
                    </div>
                    {/* Filtrar*/}
                    <div className="flex gap-4 justify-center pb-12">
                        <DesplegableEdad/>
                        <DesplegableTemas/>
                    </div>
                    {/* Cursos*/}
                    <MainCoursesUser/>
                    {/* Paginacion*/}
                    <div className="flex justify-center mt-6">
                        <button className="px-4 py-2 mx-1 bg-secundary-color text-white rounded-lg hover:bg-extra-color hover:text-secundary-color transition duration-300" data-page="#">&lt;</button>
                        <button className="px-4 py-2 mx-1 bg-secundary-color text-white rounded-lg hover:bg-extra-color hover:text-secundary-color transition duration-300" data-page="1">1</button>
                        <button className="px-4 py-2 mx-1 bg-secundary-color text-white rounded-lg hover:bg-extra-color hover:text-secundary-color transition duration-300" data-page="2">2</button>
                        <button className="px-4 py-2 mx-1 bg-secundary-color text-white rounded-lg hover:bg-extra-color hover:text-secundary-color transition duration-300" data-page="3">3</button>
                        <button className="px-4 py-2 mx-1 bg-secundary-color text-white rounded-lg hover:bg-extra-color hover:text-secundary-color transition duration-300" data-page="#">&gt;</button>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Biblioteca
