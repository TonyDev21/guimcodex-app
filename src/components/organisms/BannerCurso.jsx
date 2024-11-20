import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const BannerCurso = () => {
  const { courseId } = useParams(); // Captura el parámetro de la URL
  const { dispatch, state: cartState } = useContext(CartContext); // Accede al estado del carrito
  const { state } = useLocation(); // Captura los datos pasados desde CardCurso

  const handleAddToCart = () => {
    // Validar si el curso ya está en el carrito
    const courseExists = cartState.cart.some((course) => course.id === courseId);
    if (courseExists) {
      alert("Este curso ya está en el carrito.");
      return;
    }

    const course = {
      id: courseId,
      name: courseId.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
      price: parseFloat(state?.price) || 4.99, // Convierte a número o usa un valor por defecto
      img: state?.image || "/default-image.png",
    };

    dispatch({ type: "ADD_TO_CART", payload: course });
    alert("Curso agregado al carrito!");
  };

  return (
    <div className="relative bg-banner-js bg-cover bg-center bg-no-repeat h-full">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Superposición oscura */}
      <div className="relative py-20 container mx-auto h-full flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="text-4xl font-bold text-extra-color">
          {courseId.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
        </h1>
        <p className="text-lg font-semibold mt-2 text-extra-color">
          JavaScript es un lenguaje de programación que permite agregar
          interactividad y dinamismo a las páginas web.
        </p>
        <button
          className="btn text-2xl py-3 px-4 mt-6 cursor-pointer"
          onClick={handleAddToCart}
        >
          Comprar s/4.99
        </button>
      </div>
    </div>
  );
};

export default BannerCurso;
