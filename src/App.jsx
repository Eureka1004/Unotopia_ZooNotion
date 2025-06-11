import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginAdmin from "./Admin/login_admin";
import VerificationPage from "./Admin/VerificationPage";
import VerifikasiBerhasil from "./Admin/verifikasi_berhasil";
import Dashboard from "./Admin/dasbord_admin";
import Homepage from "./user/homepage";

import LoginUser from "./user/login";
import Register from "./user/register";
import Verification from "./user/Verification-login";
import LupaPassword from "./user/lupa_password";
import NewPassword from "./user/newPassword";
import Verifikasi_user from "./user/Verification_lupaPassword";
import LoginSuccess from "./user/success";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification-login" element={<Verification />} />
        <Route path="/lupaPassword" element={<LupaPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/verifikasi-user" element={<Verifikasi_user />} />
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
