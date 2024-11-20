import logo from "../../../src/assets/logo_color_white.svg"

const Academy = () => {
  return (
    <div className="w-full h-auto pb-12">
      <div className="container mx-auto h-full flex flex-wrap justify-center items-center rounded-2xl bg-secundary-color shadow-md shadow-btn-color-primary pb-3">
                <img src={logo} className="h-80 w-full md:w-1/2 lg:w-1/4" alt="logo"/>
                <div className="w-full md:w-2/3 lg:w-3/4 text-center mt-4 md:mt-0 px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-light-color mb-2 ">Academia GuimCodeX</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-montserrat font-medium text-light-color mt-4 lg:mt-8">Nos dedicamos a enseñar Robótica, Programación de Juegos y Programación en Python. Nuestro objetivo es formar a futuros creadores tecnológicos, brindándote las herramientas y conocimientos para que puedas innovar, desarrollar proyectos reales y estar preparado para los retos del mundo digital.</p>
                </div>
            </div>
    </div>
  )
}

export default Academy
