import React from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import "../style.css";
import logo from "../../public/logozoo.png";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const LogOut = () => {
    navigate("/LoginUser");
    console.log("Logged out");
  };

  const menuItems = [
    { key: "home", label: "HOME", path: "/homepage" },
    { key: "education", label: "EDUCATION", path: "/homepage/event" },
    { key: "community", label: "COMMUNITY", path: "/homepage/user/community" },
    { key: "zoo", label: "ZOO", path: "/homepage/user/kebun-binatang" },
    { key: "artikel", label: "ARTIKEL", path: "/dashboard/admin/artikel" },
    { key: "profil", label: "PROFIL", path: "/dashboard/admin/informasi" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{
        backgroundImage: 'url("/Background.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Header + Navbar */}
      <header className="bg-white/90 backdrop-blur-sm shadow px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 me-[50px]" />
          <nav className="flex gap-4 text-sm font-medium">
            {menuItems.map((item) => {
              const isActive =
                item.path === "/homepage"
                  ? location.pathname === "/homepage"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-3 py-1 rounded transition ${
                    isActive
                      ? "bg-[#A2845E] text-white font-bold"
                      : "hover:bg-[#F5E9DD] hover:text-[#A2845E]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <button
          onClick={LogOut}
          className="text-sm text-gray-700 hover:underline"
        >
          Log out
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center p-2 bg-white/80 mt-2 text-sm text-gray-600 backdrop-blur-sm">
        Made with ❤️ by Unotopia Team
      </footer>
    </div>
  );
}
