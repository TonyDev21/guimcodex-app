import { Link } from "react-router-dom"
import imgJavascript from "../../../assets/cursoJavascript.svg"
import imgPython from "../../../assets/cursoPython.svg"
import CardDetail from "../../molecules/CardDetail"

const Cart = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
    <div className="container px-5 py-8 mx-auto flex justify-center items-center">
      <div className="w-4/5 font-montserrat flex flex-col lg:flex-row">
        
        {/* Detalle Pedidos */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-4xl text-extra-color font-bold text-center py-8">Resumen de tu pedido</h4>
          
          {/* Items Pedidos */}
          <div className="w-full h-auto flex flex-col">
            <CardDetail 
            img={imgJavascript} 
            title="Javascript: De Novato a Ninja"
            price="s/4.99"/>
            <CardDetail 
            img={imgPython} 
            title="Pyhton: De Novato a Ninja"
            price="s/4.99"
            />
          </div>
          {/* Precio Pedidos */}
          <div className="py-2 flex justify-between px-4 rounded-lg mb-4 bg-secundary-color shadow shadow-extra-color">
            <p className="text-extra-color font-semibold">Total</p>
            <span className="text-extra-color font-semibold">s/9.98</span>
          </div>
        </div>

        {/* Completa la Compra */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-5xl text-extra-color font-bold text-center py-8">&nbsp;</h4>
          <div className="w-full h-auto flex justify-end items-end">
            
            {/* Card */}
            <div className="p-4 w-full lg:w-3/4 rounded-lg mb-4 bg-secundary-color shadow shadow-extra-color">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-extra-color font-semibold pb-4">Completa la compra</h3>
                <Link to="/credito" className="btn py-4">Continuar al pago</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Cart
