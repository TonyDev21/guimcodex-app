import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/main.css'
import router from './components/router/Router'
import AuthProvider from './context/AuthProvider'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <CartProvider>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </CartProvider>
)
