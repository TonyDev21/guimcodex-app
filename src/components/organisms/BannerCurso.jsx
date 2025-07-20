import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const BannerCurso = ({ course }) => {
  const { dispatch, state: cartState } = useContext(CartContext); // Accede al estado del carrito

  const handleAddToCart = () => {
    // Validar si el curso ya está en el carrito
    const courseExists = cartState.cart.some((item) => item.id === course._id);
    if (courseExists) {
      alert("Este curso ya está en el carrito.");
      return;
    }

    // Crear el objeto del curso a agregar al carrito
    const courseToAdd = {
      id: course._id,
      name: course.title,
      price: parseFloat(course.price),
      img: course.bannerUrl || "/default-banner.png", // Usar el banner del curso o un valor por defecto
    };

    dispatch({ type: "ADD_TO_CART", payload: courseToAdd }); // Despacha la acción al contexto
    alert("Curso agregado al carrito!");
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-full"
      style={{
        backgroundImage: `url(${course.bannerUrl || "/default-banner.png"})`, // Usar el banner del curso o un valor por defecto
      }}
    >
      {/* Superposición oscura */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative py-20 container mx-auto h-full flex flex-col justify-center items-center text-center space-y-8">
        {/* Título del curso */}
        <h1 className="text-4xl font-bold text-extra-color">{course.title}</h1>

        {/* Descripción breve */}
        <p className="text-lg font-semibold mt-2 text-extra-color">
          {course.description}
        </p>

        {/* Botón para comprar */}
        <button
          className="btn text-2xl py-3 px-4 mt-6 cursor-pointer"
          onClick={handleAddToCart}
        >
          Comprar {course.currency}
          {parseFloat(course.price).toFixed(2)} {/* Precio del curso */}
        </button>
      </div>
    </div>
  );
};

export default BannerCurso;
