import React, { useEffect } from "react";
import verifSuccess from "../../public/verifsucces.png";
import logoZoo from "../../public/icon.png";
import { useNavigate } from "react-router-dom";
import bg from "../../public/bgLogin_user.png";
import '../style.css';

function VerifikasiBerhasil() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/homepage"); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <div className="mb-4 flex justify-center">
          <img src={verifSuccess} alt="verifikasi berhasil" className="w-16 h-16" />
        </div>
        <h1 className="my-5 text-2xl font-bold">Selamat 🙌 Verifikasi aku berhasil</h1>
        <h2 className="mb-2 text-xl text-black font-sans">Welcome to Zoo Notion</h2>
        <img className="mt-5 w-24 mx-auto" src={logoZoo} alt="Logo Zoo Notion" />
      </div>
    </div>
  );
}

export default VerifikasiBerhasil;