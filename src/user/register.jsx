import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import image from "../../public/iguanaregist.jpg"; 
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";



function Login() {
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
  
  const onSubmit = (data) => {
    console.log(data); 
    navigate("/verification-login", { state: { email: data.email } });
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
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
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
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}<br />
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            <div className="relative mb-3">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
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

export default Login;
