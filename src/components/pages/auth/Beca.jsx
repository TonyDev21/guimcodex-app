import { Link } from "react-router-dom";
import imgJS from "../../../assets/cursoJavascript.svg"
import imgHtmlCss from "../../../assets/HtmlCss.svg"
import CardCursoUser from "../../molecules/CardCursoUser";

const Beca = () => {
  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full h-auto">
      <div className="container mx-auto py-12">
        {/* Título y Descripción */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-extra-color pb-8">
            Postula a nuestra Beca
          </h1>
          <p className="text-3xl text-light-color font-semibold mt-2 pb-12">
            ¿A cuál te gustaría aplicar?
          </p>
          <div className="w-1/4 mx-auto">
            <form>
              <div className="flex flex-col space-y-4 mb-4">
                <label htmlFor="beca" className="text-2xl text-light-color">
                  Selecciona tu interés:
                </label>
              </div>
              <div className="flex flex-col space-y-4 mb-4">
                <select
                  id="beca"
                  name="beca"
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="beca1">Desarrollador Frontend</option>
                  <option value="beca2">Desarrollador Backend</option>
                  <option value="beca2">Administrador de Base de Datos</option>
                  <option value="beca3">Máster en Robótica</option>
                  <option value="beca3">Maratón de Números</option>
                </select>
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="submit"
                  value="Confirmar"
                  className="btn max-w-40 py-3 px-10 cursor-pointer"
                  onClick={(e) => e.preventDefault()} // Reemplaza con la función deseada
                />
              </div>
            </form>
          </div>
        </div>

        {/* Sección de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full lg:w-3/4 mx-auto">
          {/* Curso 1 */}
          <CardCursoUser
            image={imgHtmlCss}
            title="Html5 & Css3: De Novato a Ninja"
            hours="9"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            progress="50"
          />
          
          {/* Curso 2 */}
          <CardCursoUser
            image={imgJS}
            title="Javascript: De Novato a Ninja"
            hours="12"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi laborum dolores excepturi ullam fugit."
            progress="20"
          />
        </div>

        {/* Botón Examen */}
        <div className="text-center">
          <p className="text-light-color text-2xl pb-8">
          Una vez que hayas completado los dos cursos, registra tus datos para evaluar si puedes acceder a la beca.
          </p>
          <Link
            to="solicitud"
            className="btn py-3 px-10 cursor-pointer mb-20"
          >
            Registrar Datos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Beca;
