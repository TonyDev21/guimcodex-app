import { createBrowserRouter } from "react-router-dom"
import App from "../templates/App"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Cursos from "../pages/Cursos"
import Planes from "../pages/Planes"
import Beca from "../pages/auth/Beca"
import Login from "../pages/Login"
import Registro from "../pages/Registro"
import ProtectedRouter from "./ProtectedRouter"
import Biblioteca from "../pages/auth/Biblioteca"
import Perfil from "../pages/auth/Perfil"
import Editar from "../organisms/perfil/Editar"
import Password from "../organisms/perfil/Password"
import Certificados from "../organisms/perfil/Certificados"
import Membresia from "../organisms/perfil/Membresia"
import Tematica from "../organisms/perfil/Tematica"
import Efectivo from "../organisms/cart/Efectivo"
import Yape from "../organisms/cart/Yape"
import Paypal from "../organisms/cart/Paypal"
import Credito from "../organisms/cart/Credito.Jsx"
import Pago from "../pages/auth/Pago"
import Cart from "../pages/auth/Cart"
import Solicitud from "../pages/auth/Solicitud"
import Postulacion from "../pages/auth/Postulacion"
import Curso from "../pages/Curso"
import CursoPlay from "../pages/auth/CursoPlay"
import DetalleCompra from "../pages/auth/DetalleCompra"


const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,  // Ruta publicas
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "cursos",
                element: <Cursos />
            },
            {
                path:  "cursos/:courseId",
                element: <Curso />
            },
            {
                path: "planes",
                element: <Planes />
            },
            {
                element: <ProtectedRouter />, // Rutas Protegidas
                children: [
                    
                    {
                        path: "biblioteca",
                        element: <Biblioteca />
                    },
                    {
                        path: "biblioteca/:courseId",
                        element: <CursoPlay />
                    },
                    {
                        path: "cart",
                        element: <Cart />
                    },
                    {
                        element: <Pago />,
                        children:[
                            { path: "credito", element: <Credito /> },
                            { path: "paypal", element: <Paypal /> },
                            { path: "yape", element: <Yape /> },
                            { path: "efectivo", element: <Efectivo /> },
                        ]
                    },
                    {
                        path: "comprobante-de-pago",
                        element: <DetalleCompra />
                    },
                    {
                        element: <Perfil />,
                        children: [
                          { path: "perfil", element: <Editar /> },
                          { path: "password", element: <Password /> },
                          { path: "certificaciones", element: <Certificados /> },
                          { path: "membresia", element: <Membresia /> },
                          { path: "tematica", element: <Tematica /> },
                        ],
                    },
                    {
                        path: "becas",
                        element: <Beca/>
                    },
                    {
                        path: "becas/solicitud",
                        element: <Solicitud/>
                    },
                    {
                        path: "becas/postulacion",
                        element: <Postulacion/>
                    },
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registro />
    },

]);

export default router;