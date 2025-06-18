import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../style.css';
import logo from "../../../public/logozoo.png";
import bg from "../../../public/bgLogin_user.png";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function NewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/LoginUser");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4" />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input Password Baru */}
          <div className="mb-6 text-left w-[300px] mx-auto">
            <h2 className="text-xl mb-2 text-center">Masukkan Password Baru</h2>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password baru"
                className="border rounded-md p-2 w-full pr-10"
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
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-6 text-left w-[300px] mx-auto">
            <h2 className="text-xl mb-2 text-center">Konfirmasi Password Baru</h2>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Konfirmasi password"
                className="border rounded-md p-2 w-full pr-10"
                {...register("confirmPassword", {
                  required: "Konfirmasi password wajib diisi",
                  validate: (value) =>
                    value === password || "Password tidak cocok",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px]"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
