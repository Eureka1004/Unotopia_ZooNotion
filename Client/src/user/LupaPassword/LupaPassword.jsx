import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../style.css';
import logo from "../../../public/logozoo.png";
import bg from "../../../public/bgLogin_user.png";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); 
    navigate("/verification-lupa-password", { state: { email: data.email } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4" />
        <form onSubmit={handleSubmit(onSubmit)}>

        
          <h2 className="text-xl mb-4">Masukkan email kamu</h2>
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
            placeholder="Masukkan Email" className="border rounded-md p-2 w-[300px] mb-4" 
          
          />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          <br />
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve" 
            type="submit"
          >
            Confirm
          </button>
        </form>    
      </div>
    </div>
  );
};

export default App;