import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./Admin/login_admin";
import VerificationPage from "./Admin/VerificationPage";
import VerifikasiBerhasil from "./Admin/verifikasi_berhasil";
import Dashboard from "./Admin/dasbord_admin";
import Homepage from "./user/homepage";

import LoginUser from "./user/LoginUser";
import Register from "./user/register";
import V_Login from "./user/V_Login";
import LupaPassword from "./user/LupaPassword";
import NewPassword from "./user/NewPassword";
import V_LupaPassword from "./user/V_LupaPassword";
import LoginSuccess from "./user/Sukses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/verification-login" element={<V_Login />} />

        <Route path="/lupaPassword" element={<LupaPassword />} />
        <Route path="/verification-lupa-password" element={<V_LupaPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/register" element={<Register />} />
        

        <Route path="/login-success" element={<LoginSuccess />} />        
        <Route path="/homepage" element={<Homepage />} />


        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/success" element={<VerifikasiBerhasil />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
