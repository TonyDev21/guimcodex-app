import { Link } from "react-router-dom";
import CardDetail from "../../molecules/CardDetail";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext); // Accede al contexto del carrito

  // Función para eliminar un elemento del carrito
  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  // Calcular el total del carrito
  const total = state.cart.reduce((acc, item) => {
    const price = parseFloat(item.price); // Convierte el precio a número
    return acc + (isNaN(price) ? 0 : price); // Si no es un número válido, suma 0
  }, 0);

  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto font-montserrat min-h-screen">
      <div className="container px-5 py-8 mx-auto flex justify-center items-center">
        <div className="w-4/5 font-montserrat flex flex-col lg:flex-row">
          {/* Detalle de los Pedidos */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-4xl text-extra-color font-bold text-center py-8">
              Resumen de tu pedido
            </h4>

            {/* Mostrar los Items del Carrito */}
            <div className="w-full h-auto flex flex-col">
              {state.cart.length > 0 ? (
                state.cart.map((item) => (
                  <CardDetail
                    key={item.id}
                    img={item.img} // Asegúrate de que cada producto tenga un campo `img` en `state.cart`
                    title={item.name}
                    price={item.price}
                    onDelete={() => handleRemove(item)}
                  />
                ))
              ) : (
                <p className="text-center text-extra-color">
                  Tu carrito está vacío
                </p>
              )}
            </div>

            {/* Total del Carrito */}
            {state.cart.length > 0 && (
              <div className="py-2 flex justify-between px-4 rounded-lg mb-4 bg-secundary-color shadow shadow-extra-color">
                <p className="text-extra-color font-semibold">Total</p>
                <span className="text-extra-color font-semibold">
                  s/{total.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {/* Completar la Compra */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-5xl text-extra-color font-bold text-center py-8">
              &nbsp;
            </h4>
            <div className="w-full h-auto flex justify-end items-end">
              <div className="p-4 w-full lg:w-3/4 rounded-lg mb-4 bg-secundary-color shadow shadow-extra-color">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <h3 className="text-extra-color font-semibold pb-4">
                    Completa la compra
                  </h3>
                  <Link to="/credito" className="btn py-4">
                    Continuar al pago
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
