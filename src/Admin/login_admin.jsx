import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logozoo.png";
import '../style.css';

export default function Login() {
  const navigate = useNavigate();
    const switchToUser = () => {
      navigate("/");
    };
    const verification = () => {
      navigate("/verification");
    };


  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-md">
        <img src={logo} alt="Zoo Notion Logo" className="w-24 mb-5" />
        <h2 className="text-3xl font-semibold mb-8">Login</h2>
        <input
          type="text"
          className="w-72 px-5 py-3 mb-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a57e52]"
          placeholder="Masukkan Username Admin"
        />
        <input
          type="password"
          className="w-72 px-5 py-3 mb-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a57e52]"
          placeholder="Masukkan Password"
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
          onClick={verification}
        >
          Login
        </button >
        <a href="#" className="mt-2 text-sm text-gray-700 hover:underline" onClick={switchToUser}>
          Login As User
        </a>
      </div>
    </div>
  );
}