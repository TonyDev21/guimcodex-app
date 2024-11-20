import { Link } from "react-router-dom"


const DetalleCompra = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
      <div className="container px-5 py-8 mx-auto flex justify-center items-center">
        <div className="bg-secundary-color p-8 w-4/5 font-montserrat flex flex-col rounded-lg shadow shadow-extra-color">
          <h3 className="text-5xl text-extra-color font-bold pb-8">Gracias por tu compra</h3>
          <p className="text-xl pb-4 text-light-color">
            Se envió un comprobante de pago a tu correo electrónico.
          </p>
          <p className="text-xl pb-12 text-light-color">
            Todos los cursos adquiridos los puedes encontrar en tu biblioteca.
          </p>
          <Link to="/biblioteca" className="block text-center btn w-full lg:w-1/3 py-4">
            Ir a mi Biblioteca
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DetalleCompra
