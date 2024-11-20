import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import imgLogo from "../../assets/logo_color_white.svg";
import { useAuth } from "../../context/AuthProvider";
import { API_URL } from "../../constants/env";
import MainHeader from "../organisms/MainHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/biblioteca";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
        }
      } else {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to={from} />;
  }

  return (
    <MainHeader>
      <section className="bg-secundary-color w-full min-h-screen flex items-center justify-center font-montserrat">
        <div className="border border-extra-color shadow-lg shadow-extra-color rounded-lg w-3/4 md:w-2/4 lg:w-2/6 p-6 flex flex-col items-center">
          <img
            src={imgLogo}
            className="w-32 h-auto object-contain mb-4"
            alt="logo"
          />
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col space-y-4 mb-4">
              <label htmlFor="email" className="text-extra-color font-bold">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Escribe tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2 px-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4 mb-4">
              <label htmlFor="password" className="text-extra-color font-bold">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Escribe tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="py-2 px-4 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn max-w-40 py-3 px-10 bg-extra-color text-light-color cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </form>
          <p className="text-light-color text-md mt-5">
            ¿No tienes una cuenta?{" "}
            <Link to="/registro" className="text-md text-extra-color underline">
              Crear cuenta
            </Link>
          </p>
        </div>
      </section>
    </MainHeader>
  );
};

export default Login;
