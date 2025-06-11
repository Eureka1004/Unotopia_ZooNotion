import React, { useState } from "react";
import '../style.css';
import TambahZoo from "./tambah_zoo";
import KelolaZoo from "./kelola_zoo";

const Zoo = [
  {
    title: "Kebun binatang surabaya",
    description:
      "Kebun Binatang Surabaya adalah salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya. KBS merupakan kebun binatang yang pernah terlengkap se-Asia Tenggara, di dalamnya terdapat lebih dari 230 spesies satwa yang berbeda yang terdiri lebih dari 2179 ekor satwa.",
    image: "/images/jakarta-pet-expo.jpg",
    link_website: "https://www.surabayazoo.co.id/",
    link_tiket: "https://www.surabayazoo.co.id/tiket",

  },
  {
    title: "Kebun binatang sidoarjo",
    description:
      "Kebun Binatang Surabaya adalah salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya. KBS merupakan kebun binatang yang pernah terlengkap se-Asia Tenggara, di dalamnya terdapat lebih dari 230 spesies satwa yang berbeda yang terdiri lebih dari 2179 ekor satwa.",
    image: "/images/jakarta-pet-expo.jpg",
    link_website: "https://www.surabayazoo.co.id/",
    link_tiket: "https://www.surabayazoo.co.id/tiket",
  },
  {
    title: "Kebun binatang surabaya",
    description:
      "Kebun Binatang Surabaya adalah salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya. KBS merupakan kebun binatang yang pernah terlengkap se-Asia Tenggara, di dalamnya terdapat lebih dari 230 spesies satwa yang berbeda yang terdiri lebih dari 2179 ekor satwa.",
    image: "/images/jakarta-pet-expo.jpg",
    link_website: "https://www.surabayazoo.co.id/",
    link_tiket: "https://www.surabayazoo.co.id/tiket",
  },
];

export default function ManagementZoo() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedZoo, setSelectedZoo] = useState(null);

  // tampilkan halaman kelola zoo dari kelola_zoo.jsx
  if (selectedZoo !== null) {
    return (
      <KelolaZoo
        zoo={Zoo[selectedZoo]}
        onBack={() => setSelectedZoo(null)}
      />
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 px-[5vw] py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Kebun Binatang</h1>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-md shadow transition"
            onClick={() => setShowPopup(true)}
          >
            + Tambah Kebun Binatang
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {Zoo.map((zoo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow border border-gray-200 flex items-center p-6 gap-6"
            >
              <img
                src={zoo.image}
                alt={zoo.title}
                className="w-40 h-50 object-cover rounded-lg border"
              />
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-lg font-bold mb-2">{zoo.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{zoo.description}</p>
                <span className="text-sm text-gray-700 mb-4">{zoo.link_tiket}</span>
                <span className="text-sm text-gray-700 mb-4">{zoo.link_website}</span>
                <div className="flex gap-2">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[200px] curve"
                    onClick={() => setSelectedZoo(i)}
                  >
                    Detail
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full py-2 px-4 font-medium text-base hover:bg-red-700 transition"
                    onClick={() => alert(`Hapus ${event.title}?`)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Tambah Event */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(4px)",
                background: "transparent",
              }}
              onClick={() => setShowPopup(false)}
            />
            {/* Popup form */}
            <div className="relative w-full max-w-2xl z-10">
              <TambahZoo onClose={() => setShowPopup(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}