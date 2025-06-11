import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import logo from "../../public/logozoo.png";
import '../style.css';
import ManajemenEvent from "./management_event";
import KelolaHewan from "./kelola_hewan";
import Informasi from "./informasi";
import Artikel from "./artikel";
import ManagementZoo from "./management_zoo"; 
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [page, setPage] = useState("dashboard");
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const navigate = useNavigate();
    const LogOut = () => {
      navigate("/login-admin");
    };

  useEffect(() => {
    if (page !== "dashboard") return;
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["OCT 2019", "NOV", "DEC", "JAN 2020", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
          {
            label: "Aktivitas Pengguna",
            data: [50, 30, 60, 20, 70, 40, 80, 60, 90],
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 10 } },
        },
      },
    });
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [page]);

  function renderContent() {
    if (page === "dashboard") {
      return (
        <>
          <div className="flex justify-between mb-1">
            <div className="bg-gray-100 p-2 rounded flex items-center">
              <h3 className="text-base font-medium flex items-center gap-2">
                <span role="img" aria-label="user">👤</span>
                <span>5 Pengguna Aktif</span>
              </h3>
            </div>
            <div className="flex-1 ml-0 flex justify-end">
              <canvas
                ref={chartRef}
                id="myChart"
                width={1100}
                height={300}
                className="max-w-full max-h-96 mt-6"
              />
            </div>
          </div>
          <table className="w-full border-collapse mt-10 bg-white shadow rounded">
            <thead>
              <tr>
                <th className="border px-2 py-1 bg-gray-100">No</th>
                <th className="border px-2 py-1 bg-gray-100">Nama</th>
                <th className="border px-2 py-1 bg-gray-100">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">Gresella Adathelia</td>
                <td className="border px-2 py-1">gresella270@gmail.com</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">Gresella Adathelia</td>
                <td className="border px-2 py-1">gresella270@gmail.com</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">Gresella Adathelia</td>
                <td className="border px-2 py-1">gresella270@gmail.com</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">Gresella Adathelia</td>
                <td className="border px-2 py-1">gresella270@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
    if (page === "event") {
      return <ManajemenEvent />;
    }
    if (page === "zoo") {
      return <ManagementZoo/>
    }
    if (page === "hewan") {
      return <KelolaHewan />;
    }
    if (page === "artikel") {
      return <Artikel/>;
    }
    if (page === "informasi") {
      return <Informasi />;
    }
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="flex items-center justify-between bg-white p-3 shadow">
        <div>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <h1 className="text-lg font-bold">Admin</h1>
      </header>

      <div className="flex items-stretch min-h-[calc(100vh-80px-48px)]">
        {/* 80px = header, 48px = footer */}
        <nav className="w-48 bg-white p-3 shadow min-h-full flex flex-col">
          <h2 className="text-base font-bold mb-3">DASHBOARD</h2>
          <ul className="space-y-1 flex-1">
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "dashboard" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("dashboard")}
            >
              DASHBOARD
            </li>
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "event" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("event")}
            >
              MANAJEMEN EVENT
            </li>
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "zoo" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("zoo")}
            >
              MANAJEMEN ZOO
            </li>
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "hewan" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("hewan")}
            >
              KELOLA HEWAN
            </li>
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "artikel" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("artikel")}
            >
              KELOLA ARTIKEL
            </li>
            <li
              className={`py-1 cursor-pointer px-2 rounded transition 
              ${page === "informasi" ? "bg-[#A2845E] font-bold text-white" : "hover:text-[#A2845E] hover:bg-[#F5E9DD]"}`}
              onClick={() => setPage("informasi")}
            >
              INFORMASI
            </li>
          </ul>
          <a href="#" className="flex justify-center hover:underline" onClick={LogOut}>Log out</a>
        </nav>

        <main className="flex-1 p-0 pb-0">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      <footer className="text-center p-2 bg-white mt-2">
        <p>Made with ❤️ by Unotopia Team</p>
      </footer>
    </div>
  );
}

export default Dashboard;