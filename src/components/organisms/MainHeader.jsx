import BurgerButton from '../atoms/BurgerButton';
import Logo from '../molecules/header/Logo';
import { useAuth } from "../../context/AuthProvider";
import { API_URL } from "../../constants/env";
import MainMenu from '../molecules/header/MainMenu';

const MainHeader = ({children}) =>{

    const auth = useAuth();
    const isAuthenticated = auth.getUser() != null;

    async function handleSignOut(e) {
        e.preventDefault();
    
        try {
          const response = await fetch(`${API_URL}/signout`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.getRefreshToken()}`,
            },
          });
    
          if (response.ok) {
            auth.signOut();
            window.location.href = "/home";
          }
        } catch (error) {
          console.log(error);
        }
      }


    return (

        <>
           <header className="bg-secundary-color">
                <nav className="container mx-auto flex justify-around sm:justify-between items-center">
                    <Logo/>
                    <BurgerButton/>
                    <MainMenu isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} auth={auth}/>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>  
            
    )
}

export default MainHeader