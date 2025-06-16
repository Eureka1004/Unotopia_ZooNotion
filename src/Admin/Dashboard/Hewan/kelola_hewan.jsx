import React, { useState } from "react";
import '../../../style.css';
import TambahHewan from "./tambah_hewan";

const categories = ["Aves", "Mammalia", "Pisces", "Amfibi", "Reptil"];
const animals = [
  { name: "Kakatua", img: "kakaktua.png" },
  { name: "Kakatua", img: "kakaktua.png" },
  { name: "Kakatua", img: "kakaktua.png" },
  { name: "Kakatua", img: "kakaktua.png" },
  { name: "Kakatua", img: "kakaktua.png" },
  { name: "Kakatua", img: "kakaktua.png" },
];

function KelolaHewan() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showTambah, setShowTambah] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans flex">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">KELOLA HEWAN</h1>
        <div className="mb-5 flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded font-semibold ${
                activeCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-black border-1"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left border-b border-gray-300">Gambar</th>
              <th className="p-3 text-left border-b border-gray-300">Nama</th>
              <th className="p-3 text-left border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b border-gray-200">
                  <img
                    src={animal.img}
                    alt={animal.name}
                    className="w-12 h-auto"
                  />
                </td>
                <td className="p-3 border-b border-gray-200">{animal.name}</td>
                <td className="p-3 border-b border-gray-200">
                  <button className="text-lg mr-2 hover:text-blue-500">✏</button>
                  <button className="text-lg hover:text-red-500">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-md shadow transition"
          onClick={() => setShowTambah(true)}
        >
          + Tambahkan Hewan
        </button>
      </main>
      {/* Popup Tambah Hewan */}
      {showTambah && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(4px)",
              background: "rgba(0,0,0,0.1)",
            }}
            onClick={() => setShowTambah(false)}
          />
          <div className="relative w-full max-w-xl z-10">
            <TambahHewan onClose={() => setShowTambah(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default KelolaHewan;