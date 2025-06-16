import React from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import "../style.css";
import logo from "../../public/logozoo.png";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Perbaikan untuk mendeteksi halaman saat ini
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[pathSegments.length - 1] || "dashboard";

  const LogOut = () => {
    navigate("/login-admin");
    console.log("Logged out");
  };

  const menuItems = [
    { key: "dashboard", label: "DASHBOARD", path: "/dashboard" },
    { key: "event", label: "MANAJEMEN EVENT", path: "/dashboard/admin/event" },
    { key: "zoo", label: "MANAJEMEN ZOO", path: "/dashboard/admin/zoo" },
    { key: "hewan", label: "KELOLA HEWAN", path: "/dashboard/admin/hewan" },
    { key: "artikel", label: "KELOLA ARTIKEL", path: "/dashboard/admin/artikel" },
    { key: "informasi", label: "INFORMASI", path: "/dashboard/admin/informasi" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-3 shadow">
        <div>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <h1 className="text-lg font-bold">Admin</h1>
      </header>

      {/* Body */}
      <div className="flex items-stretch min-h-[calc(100vh-80px-48px)]">
        {/* Sidebar */}
        <nav className="w-48 bg-white p-3 shadow min-h-full flex flex-col">
          <h2 className="text-base font-bold mb-3">DASHBOARD</h2>
          <ul className="space-y-1 flex-1">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`py-1 cursor-pointer px-2 rounded transition ${
                  currentPage === item.key
                    ? "bg-[#A2845E] font-bold text-white"
                    : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"
                }`}
              >
                <Link to={item.path} className="block w-full h-full">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={LogOut}
            className="flex justify-center hover:underline text-sm text-gray-700"
          >
            Log out
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center p-2 bg-white mt-2">
        <p>Made with ❤️ by Unotopia Team</p>
      </footer>
    </div>
  );
}
