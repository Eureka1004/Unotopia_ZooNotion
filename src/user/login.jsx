import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import image from "../../public/bunglon_login.png"; 



function Login() {
  const navigate = useNavigate();
  const switchToAdmin = () => {
    navigate("/login-admin");
  };
  const switchToLupaPassword = () => {
    navigate("/lupaPassword");
  };
  const Login = () => {
    navigate("/verification-login");
  }
  const switchToRegist = () => {
    navigate("/register");
  }


  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <img src={logo} alt="Logo" className="mb-8" />
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Masukkan Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Masukkan Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <a href="#" onClick={switchToLupaPassword} className=" text-xs italic hover:underline">Lupa Password</a>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
              onClick={Login}
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4">
          <a href="#" onClick={switchToRegist} className="text-gray-600 p-5"> Sign up </a> | 
          <a href="#" className="text-gray-600 p-5"> Sign in </a>
        </div>
        <div className="mt-2" >
          <a href="#" className="mt-2 text-sm text-gray-700 hover:underline" onClick={switchToAdmin}>
            Login As Admin
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}

export default Login;
