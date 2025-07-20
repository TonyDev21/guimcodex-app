import { Link, Outlet } from "react-router-dom"
import CardDetailItem from "../../atoms/CardDetailItem"

const Pago = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
      <div className="container px-5 py-8 mx-auto flex justify-center items-center">
        <div className="w-4/5 font-montserrat flex flex-col gap-4 lg:flex-row items-center lg:items-start lg:justify-around">
          
          <Outlet/>
          
          {/* Barra de Pagos */}
          <div className="flex flex-col justify-end">

            {/* Metodo de Pagos */}
            <div className="shadow shadow-extra-color p-4 mb-20 rounded-lg bg-secundary-color">
              <h3 className="text-lg font-bold mb-2 text-center text-light-color">Métodos de Pago</h3>
              <div className="flex space-x-4">
                <Link to="credito" className="btn px-4 py-2 ">Visa</Link>
                <Link to="paypal" className="btn px-4 py-2">Paypal</Link>
                <Link to="yape" className="btn px-4 py-2">Yape</Link>
                <Link to="efectivo" className="btn px-4 py-2">Efectivo</Link>
              </div>
            </div>

            {/*Carrito Compra */}
            <div className="bg-secundary-color shadow shadow-extra-color rounded-lg">
              <div className="flex flex-row items-center justify-between px-4">
                <h3 className="text-light-color text-lg font-bold py-2  inline">Productos de tu carro</h3>
                <Link to="/cart" className="text-light-color">Editar</Link>
              </div>
              <div className="bg-btn-color-primary font-medium">
                <CardDetailItem title="Javascript" price="s/5.00"/>
                <CardDetailItem title="Python" price="s/5.00"/>
              </div>
              <div className="flex justify-between px-4 py-2">
                <p className="inline text-light-color text-sm font-bold ">Total de la orden</p>
                <span className="text-light-color text-sm font-bold ">s/10.00</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pago
