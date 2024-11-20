import { Link, Outlet } from "react-router-dom";
import { useAuth } from '../../../context/AuthProvider';
import { API_URL } from '../../../constants/env';

const Perfil = () => {

  const auth = useAuth();

  async function handleSignOut(e){
    e.preventDefault();

    try{
        const response = await fetch(`${API_URL}/signout` , {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${auth.getRefreshToken()}`,
            }
        })

        if(response.ok){
            auth.signOut();
        }
    }catch(error){
        console.log(error)
    }
  }

  return (
    <section className="bg-gradient-to-b from-secundary-color to-primary-color w-full min-h-screen  font-montserrat pb-24">
      <div className="container px-5 py-9 mx-auto flex justify-center items-center ">
        {/* Contenedor principal */}
        <div className="bg-light-color p-8 rounded-lg shadow-lg w-full md:w-3/4 h-auto">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            {/* Menú lateral */}
            <div className="w-11/12 md:w-1/4 mr-0 md:mr-8 order-2 md:order-1 pt-10">
              <ul className="space-y-4 ">
                <li><Link to="perfil" className="block text-center cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 w-full rounded transition duration-300">Perfil</Link></li>
                <li><Link to="password" className="block text-center cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 w-full rounded transition duration-300">Contraseña</Link></li>
                <li><Link to="certificaciones" className="block text-center cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 w-full rounded transition duration-300">Certificaciones</Link></li>
                <li><Link to="membresia" className="block text-center cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 w-full rounded transition duration-300">Membresía</Link></li>
                <li><Link to="tematica" className="block text-center cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 w-full rounded transition duration-300">Temas</Link></li>
                <button onClick={handleSignOut} className="block text-center cursor-pointer bg-red-600 text-light-color hover:bg-red-700 p-2 w-full rounded transition duration-300">Cerrar Sesión</button>
              </ul>
            </div>
            {/* Formulario de perfil */}
            <Outlet/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
