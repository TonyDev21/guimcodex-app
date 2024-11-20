
const Postulacion = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
    <div className="container px-5 py-8 mx-auto flex justify-center items-center">
      <div className="bg-secundary-color p-8 w-4/5 font-montserrat flex flex-col rounded-lg shadow shadow-extra-color">
        <h3 className="text-5xl text-extra-color font-bold pb-8">Postulación de Beca Registrada</h3>
        <p className="text-xl pb-4 text-light-color">
          Su postulación ha sido registrada exitosamente.
        </p>
        <p className="text-xl pb-4 text-light-color">
          En 48 horas recibirá una respuesta por correo electrónico sobre el estado de su solicitud.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Postulacion
