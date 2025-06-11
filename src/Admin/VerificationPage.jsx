import React, { useRef } from "react";
import logo from "../../public/icon.png";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function VerificationPage({ onSuccess }) {
  const inputsRef = useRef([]);

  const navigate = useNavigate();
  const success = () => {
    navigate("/success");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="mb-5 flex justify-center">
          <img src={logo} alt="Icon Verifikasi" className="w-16 h-16" />
        </div>
        <h1 className="text-lg font-semibold mb-2">
          Kami telah mengirimkan code verifikasi ke alamat email
        </h1>
        <p className="text-blue-600 font-medium mb-1">Unotopial1@gmail.com</p>
        <p className="mb-5">Silakan masukkan code dan verifikasi akun anda</p>

        <div className="flex justify-center gap-2 mb-6">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center text-2xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(e, i)}
              ref={(el) => (inputsRef.current[i] = el)}
            />
          ))}
        </div>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
          onClick={success}
        >
          Verifikasi
        </button>
      </div>
    </div>
  );
}
