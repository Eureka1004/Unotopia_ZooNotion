import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png";
import bg from "../../public/bgLogin_user.png"; // Ganti dengan path gambar yang sesuai

const App = () => {
  const navigate = useNavigate();
  const switchToVerification = () => {
    navigate("/verifikasi-user");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" 
         style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4" />
        <h2 className="text-xl mb-4">Masukkan email kamu</h2>
        <input type="email" placeholder="Email" className="border rounded-md p-2 w-[300px] mb-4" /><br />
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve" 
          onClick={switchToVerification}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default App;