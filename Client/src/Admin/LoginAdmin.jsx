import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logozoo.png";
import "../style.css";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const switchToUser = () => {
    navigate("/LoginUser");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/verification-login-admin", { state: { email: data.email } });
  };

  return (
    <div className="bg-gray-500 flex items-center justify-center min-h-screen font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-md">
        <img src={logo} alt="Zoo Notion Logo" className="w-24 mb-5" />
        <h2 className="text-3xl font-semibold mb-8">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          {/* Email Input */}
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
            className="shadow appearance-none border w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full mb-3 "
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-2">{errors.email.message}</p>
          )}

          {/* Password Input + Show/Hide */}
          <div className="relative w-72 mb-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password wajib diisi",
              })}
              placeholder="Masukkan Password"
              className={`shadow appearance-none border w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full ${
                errors.password ? "border-red-500" : ""
              }`}
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
            <p className="text-red-500 text-xs mb-2">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
          >
            Login
          </button>
        </form>

        <a
          href="#"
          className="mt-2 text-sm text-gray-700 hover:underline"
          onClick={switchToUser}
        >
          Login As User
        </a>
      </div>
    </div>
  );
}
