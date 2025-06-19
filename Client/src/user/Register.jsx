import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import image from "../../public/iguanaregist.jpg"; 
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import axios from "axios";




function Register() {

  const [msg, setMsg] = useState("");



  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const switchToLogin = () => {
    navigate("/loginUser");
  };

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async(data) => {
    console.log(data); 
    try {
      const response = await axios.post("http://localhost:3000/users", {
        username: data.username,
        email: data.email,
        password: data.password,

      });
      console.log(response.data);
      navigate("/verification-login", { state: { email: data.email } });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 ">
            Username {errors.username && <span className="text-red-500 ms-3">{errors.username.message}</span>}
          </label>
          <div className="mb-4">
            <input
              id="username"
              type="text"
              {...register("username", {
                required: "Username wajib diisi",
              })}
              placeholder="Masukkan Username"
              className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 ">
                Email {errors.email && <span className="text-red-500 ms-3">{errors.email.message}</span>}
              </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
              placeholder="Masukkan Email"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password {errors.password && <span className="text-red-500 ms-3">{errors.password.message}</span>}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password wajib diisi",
                    minLength: {
                      value: 8,
                      message: "Minimal 8 karakter",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)/,
                      message: "Harus mengandung huruf besar & angka",
                    },
                  })}
                  placeholder="Masukkan Password"

                  className="w-full py-2 px-4 pr-12 border rounded shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? (
                    <MdVisibilityOff className="h-5 w-5" />
                  ) : (
                    <MdVisibility className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {msg && <p className="text-red-500 text-sm text-center mt-2">{msg}</p>}

          </div>
              
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
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

export default Register;
