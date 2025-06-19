import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{/* Admin section imports */}
import LoginAdmin from "./Admin/LoginAdmin";
import V_LoginAdmin from "./Admin/V_LoginAdmin";
import Berhasil from "./Admin/Berhasil";

import LayoutDashboard from "./Admin/LayoutDasboard";
  import Dashboard from "./Admin/Dashboard/DashboardAdmin";
  import Event from "./Admin/Dashboard/Event/ManagementEvent";
  import Zoo from "./Admin/Dashboard/Zoo/ManagementZoo";
  import Hewan from "./Admin/Dashboard/Hewan/kelola_hewan";
  import Artikel from "./Admin/Dashboard/Artikel/artikel";
  import Informasi from "./Admin/Dashboard/informasi";


{/* User section imports */}
import LupaPassword from "./user/LupaPassword/LupaPassword";
  import NewPassword from "./user/LupaPassword/NewPassword";
  import V_LupaPassword from "./user/LupaPassword/V_LupaPassword";

import LoginUser from "./user/LoginUser";

import Register from "./user/Register";
import V_Login from "./user/V_Login";
import LoginSuccess from "./user/Sukses";

import LayoutHomepage from "./user/LayoutHomepage";
  import Home from "./user/Pages/homepage";
  import Community from "./user/Pages/Community/community";
  import Kebun from "./user/Pages/KebunBinatang";
  import ArtikelPages from "./user/Pages/PagesArtikel";
  import Profil from "./user/Pages/Profil";
  import Edukasi from "./user/Pages/Education/education_menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User section start */}
        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/verification-login" element={<V_Login />} />

        <Route path="/lupaPassword" element={<LupaPassword />} />
        <Route path="/verification-lupa-password" element={<V_LupaPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        <Route path="/login-success" element={<LoginSuccess />} />        
        <Route path="/homepage" element={<LayoutHomepage />}>
          <Route index element={<Home />} />
          <Route path="user/homepage" element={<Home />} />
          <Route path="user/community" element={<Community />} />
          <Route path="user/kebun-binatang" element={<Kebun />} />
          <Route path="user/artikel" element={<ArtikelPages />} />
          <Route path="user/profil" element={<Profil />} />
          <Route path="user/edukasi" element={<Edukasi />} />
            
        </Route>
        {/* User section end */}

        {/* Admin section start */} 
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/verification-login-admin" element={<V_LoginAdmin />} />
        <Route path="/success" element={<Berhasil />} />
        
        {/* Perbaikan struktur routing admin */}
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/event" element={<Event />} />
          <Route path="admin/zoo" element={<Zoo />} />
          <Route path="admin/hewan" element={<Hewan />} />
          <Route path="admin/artikel" element={<Artikel />} />
          <Route path="admin/informasi" element={<Informasi />} />
        </Route>
        {/* Admin section end */}
      </Routes>
    </BrowserRouter>
  );
}
