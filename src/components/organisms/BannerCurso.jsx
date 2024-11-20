const BannerCurso = ({courseId}) => {
  return (
    <div className="relative bg-banner-js bg-cover bg-center bg-no-repeat h-full">
      <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
      {/* Superposición oscura */}
      <div className="relative py-20 container mx-auto h-full flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="text-4xl font-bold text-extra-color">
        {courseId.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
        </h1>
        <p className="text-lg font-semibold mt-2 text-extra-color">
          JavaScript es un lenguaje de programación que permite agregar
          interactividad y dinamismo a las páginas web.
        </p>
        <a href="#" className="btn text-2xl py-3 px-4 mt-6 cursor-pointer">
          Comprar s/4.99
        </a>
      </div>
    </div>
  );
};

export default BannerCurso;
