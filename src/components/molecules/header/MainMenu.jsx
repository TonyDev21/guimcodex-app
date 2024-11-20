import {  Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const MainMenu = ({ isAuthenticated}) => {
    return (
        <>
            <ul id="menu" className="lg:flex hidden pt-4 flex-grow lg:flex-grow-0 gap-x-8 text-2xl lg:justify-center lg:items-center absolute lg:relative lg:top-0 top-20 
                    left-0 bg-secundary-color w-full h-screen lg:h-auto lg:w-auto py-14 lg:py-0 px-8 text-center lg:text-left">
                        { !isAuthenticated ? (
                            <>
                            <li className="mb-7 lg:mb-0"><Link to="/" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Inicio</Link></li>
                            <li className="mb-7 lg:mb-0"><Link to="/cursos" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Cursos</Link></li>
                            <li className="mb-7 lg:mb-0"><Link to="/planes" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Planes</Link></li>
                            <li><Link to="/login" className="btn">Iniciar Sesión</Link></li>
                            </>
                            
                        ) : (
                            <>
                            <li className="mb-7 lg:mb-0"><Link to="/cursos" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Cursos</Link></li>
                            <li className="mb-7 lg:mb-0"><Link to="/planes" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Planes</Link></li>
                            <li className="mb-7 lg:mb-0"><Link to="/biblioteca" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Biblioteca</Link></li>
                            <li className="mb-7 lg:mb-0">
                                <Link to="/cart" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200 flex items-center">
                                    <FaShoppingCart className="mr-1" /> <span>(2)</span>
                                </Link>
                            </li>
                            <li className="mb-7 lg:mb-0"><Link to="/perfil" className="font-montserrat font-normal text-white hover:text-btn-color-primary transition duration-200">Perfil</Link></li>     
                            </>
                        )}
                
            </ul>
        </>
    )
}

export default MainMenu