import { Link , useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";


const BannerBeca = () => {

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/becas");
    } else {
      navigate("/login", { state: { from: "/becas" } });
    }
  };


  return (
    <section className="bg-banner-beca bg-cover bg-center bg-no-repeat w-full h-auto font-montserrat" >
    <div className="container mx-auto  text-secundary-color h-80 flex flex-col justify-center items-center text-center gap-6">
        <div>
            <p className="text-3xl sm:text-4xl md:text-5xl ">¿No tienes los recursos suficientes?</p>
            <p className="text-3xl sm:text-4xl md:text-5xl ">¡Aplica a una beca y alcanza tus metas!</p>
        </div>
        <div className="mt-4">
            <Link 
            to="/becas" 
            className="btn bg-secundary-color py-6 px-8 text-xl text-light-color hover:bg-btn-color-secondary"
            onClick={handleLinkClick}
            >
              Postular
            </Link>
        </div>
    </div>
</section>
  )
}

export default BannerBeca
