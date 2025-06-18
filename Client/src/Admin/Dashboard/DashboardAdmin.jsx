import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../style.css";

function Dashboard() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Hapus chart lama jika ada
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
          y: {
            beginAtZero: true,
            ticks: { stepSize: 10 },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Info Ringkas */}
      <div className="flex justify-between mb-6">
        <div className="bg-gray-100 p-4 rounded flex items-center shadow">
          <h3 className="text-base font-medium flex items-center gap-2">
            <span role="img" aria-label="user">👤</span>
            <span>5 Pengguna Aktif</span>
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Grafik Aktivitas Pengguna</h2>
        <canvas ref={chartRef} id="myChart" className="w-full h-64" />
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Data Pengguna</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1 bg-gray-100">No</th>
              <th className="border px-2 py-1 bg-gray-100">Nama</th>
              <th className="border px-2 py-1 bg-gray-100">Email</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((no) => (
              <tr key={no}>
                <td className="border px-2 py-1">{no}</td>
                <td className="border px-2 py-1">Gresella Adathelia</td>
                <td className="border px-2 py-1">gresella270@gmail.com</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
