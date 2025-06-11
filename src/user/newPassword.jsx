import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';
import logo from "../../public/logozoo.png"; // Ganti dengan path logo yang sesuai
import bg from "../../public/bgLogin_user.png"; // Ganti dengan path gambar latar belakang yang sesuai

function App() {
  const navigate = useNavigate();
  const BackToLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" 
     style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] text-center">
      <img src={logo} alt="Logo" className="mx-auto mb-4" />
        <div>
        <h2 className="text-xl mb-4">Masukkan Password baru</h2>
        <input type="text" placeholder="Email" className="border rounded-md p-2 w-[300px] mb-4" /><br />
        </div>
        <div>
        <h2 className="text-xl mb-4">konfirmasi Password baru</h2>
        <input type="text" placeholder="Email" className="border rounded-md p-2 w-[300px] mb-4" /><br />
        </div>

        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve" 
          onClick={BackToLogin}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default App;
