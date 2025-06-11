import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import image from "../../public/bunglon_login.png"; 



function Login() {
  const navigate = useNavigate();
  const regist = () => {
    navigate("/verification-login");
  }
  const switchToLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Right Side */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <img src={logo} alt="Logo" className="mb-8" />
        <form className="w-full max-w-sm">

          <div className="mb-4">
            <input
              id="username"
              type="text"
              placeholder="Masukkan Email"
              className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              id="email"
              type="email"
              placeholder="Masukkan Password"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              id="password"
              type="password"
              placeholder="Masukkan Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
              onClick={regist}
            >
              Daftar
            </button>
          </div>
        </form>

        <div className="mt-4">
          <a href="#" className="text-gray-600 p-5"> Sign up </a> | 
          <a href="#" onClick={switchToLogin} className="text-gray-600 p-5"> Sign in </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
