import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./Admin/LoginAdmin";
import V_LoginAdmin from "./Admin/V_LoginAdmin";
import Berhasil from "./Admin/Berhasil";
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
        <Route path="/Register" element={<Register />} />
        <Route path="/verification-login" element={<V_Login />} />

        <Route path="/lupaPassword" element={<LupaPassword />} />
        <Route path="/verification-lupa-password" element={<V_LupaPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/login-success" element={<LoginSuccess />} />        
        <Route path="/homepage" element={<Homepage />} />


        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/verification-login-admin" element={<V_LoginAdmin />} />
        <Route path="/success" element={<Berhasil />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
