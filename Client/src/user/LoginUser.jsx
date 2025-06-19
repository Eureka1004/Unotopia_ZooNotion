import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation} from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import image from "../../public/bunglon_login.png"; 
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import axios from "axios";

function LoginUser() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  // Submit Handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    setMsg(""); // Clear previous messages
    
    try {
      console.log("Data dikirim ke backend:", data);
      
      // Add headers and timeout
      const response = await axios.post("http://localhost:3000/login", {
        email: data.email,
        password: data.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      console.log("Login berhasil:", response.data);

      // Langsung navigate jika sukses
      navigate("/verification-login", { state: { email: data.email } });

    } catch (error) {
      console.log("Terjadi error:", error);

      if (error.response) {
        // Server responded with error status
        console.log("Error response:", error.response.data);
        setMsg(error.response.data.message || "Login gagal. Periksa email dan password Anda.");
      } else if (error.request) {
        // Request was made but no response received
        console.log("No response received:", error.request);
        setMsg("Tidak dapat terhubung ke server. Pastikan server berjalan di http://localhost:3000");
      } else {
        // Something else happened
        console.log("Error:", error.message);
        setMsg("Terjadi kesalahan: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const switchToAdmin = () => navigate("/login-admin");
  const switchToLupaPassword = () => navigate("/lupaPassword");
  const switchToRegist = () => navigate("/register");

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <img src={logo} alt="Logo" className="mb-8" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          {msg && <p className="text-red-500 mb-4 text-sm">{msg}</p>}
          
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Masukkan Email
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Masukkan Password 
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password wajib diisi",
              })}
              placeholder="Masukkan Password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-[36px] text-gray-600 hover:text-gray-800 focus:outline-none"
              disabled={isLoading}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            
            <a href="#" onClick={switchToLupaPassword} className="text-xs italic hover:underline mt-1 block w-[80px]">
              Lupa Password
            </a>
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve`}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>

        <div className="mt-4">
          <a href="#" onClick={switchToRegist} className="text-gray-600 p-5">Sign up</a> | 
          <a href="#" className="text-gray-600 p-5">Sign in</a>
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="mt-2 text-sm text-gray-700 hover:underline"
            onClick={switchToAdmin}
          >
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

export default LoginUser;
