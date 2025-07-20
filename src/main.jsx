import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router'
import AuthProvider from './context/AuthProvider'
import { CartProvider } from './context/CartContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <CartProvider>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </CartProvider>
)
