import LinkButton from "../atoms/LinkButton"


const Banner = () => {
  return (
      <div className="w-full h-96 ">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center space-y-8">
                  <h2 className="font-montserrat font-black text-extra-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Construye, crea y programa desde hoy</h2>
                  <p className="font-montserrat font-medium text-light-color text-2xl md:text-3xl ">El futuro está en tus manos</p>
                  <LinkButton to="/planes"
                              className="text-3xl py-3 px-4 mt-6 cursor-pointer "
                              text="Inscríbete aquí"
                              />
          </div>
      </div>
  )
}

export default Banner
