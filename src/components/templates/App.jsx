import { Outlet , Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import MainHeader from "../organisms/MainHeader"
import Footer from "../organisms/Footer"


const App = () => {

  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const location = useLocation();

   // Si el usuario está autenticado y está en la ruta "/", redirige a "/biblioteca"
  if (isAuthenticated && location.pathname === "/") {
      return <Navigate to="/biblioteca" replace />;
  }

  return (
    <>
      <MainHeader/>    
      <section className="w-full h-auto">
          <Outlet/>
      </section>
      <Footer/>
    </>
  )
}

export default App
