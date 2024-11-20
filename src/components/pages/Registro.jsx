import { Link, useNavigate, Navigate } from "react-router-dom";
import imgLogo from "../../assets/logo_color_white.svg";
import MainHeader from "../organisms/MainHeader";
import { useAuth } from '../../context/AuthProvider';
import { API_URL } from '../../constants/env';
import { useState } from "react";

const Registro = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [edad, setEdad] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    lastname,
                    edad,
                    email,
                    password
                })
            });

            if (response.ok) {
                console.log("User created successfully");
                goTo("/login");
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <MainHeader>
            <section className="bg-secundary-color w-full min-h-screen flex items-center justify-center font-montserrat">
                <div className="border border-extra-color shadow-lg shadow-extra-color rounded-lg w-3/4 md:w-2/4 lg:w-2/6 flex flex-col items-center">
                    <img src={imgLogo} className="w-44 mx-auto my-4" alt="logo" />
                    <form className="w-11/12" onSubmit={handleSubmit}>
                        <h2 className="text-extra-color font-bold text-center mb-4">Crear una nueva cuenta</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Escribe tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full py-2 mb-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:pl-4"
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Escribe tus apellidos"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                            className="w-full py-2 mb-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:pl-4"
                        />
                        <input
                            type="number"
                            name="edad"
                            placeholder="Ingresa tu edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                            required
                            className="w-full py-2 mb-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:pl-4"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Escribe tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full py-2 mb-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:pl-4"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Escribe tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full py-2 mb-6 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:pl-4"
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="btn max-w-40 py-3 px-10 bg-extra-color text-light-color cursor-pointer"
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                    <Link to="/login" className="text-md text-extra-color underline mt-4 mb-5">
                        Ya tengo una cuenta
                    </Link>
                </div>
            </section>
        </MainHeader>
    );
};

export default Registro;
