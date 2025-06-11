import React, { useState } from "react";
import '../style.css';
import TambahArtikel from "./tambah_artikel";
import KelolaArtikel from "./kelola_artikel"; // ganti nama import agar lebih jelas

const Artikels = [
  {
    title: "Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba",
    penulis: "",
    tanggal: "2024-10-01",
    description:
      "Ular terbesar di dunia – Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho",
    image: "/images/jakarta-pet-expo.jpg",
  },
  {
    title: "Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba",
    penulis: "Karina",
    tanggal: "2024-10-01",
    description:
      "Ular terbesar di dunia – Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho",
    image: "/images/jakarta-pet-expo.jpg",
  },
  {
    title: "Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba",
    penulis: "Karina",
    tanggal: "2024-10-01",
    description:
      "Ular terbesar di dunia – Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho",
    image: "/images/jakarta-pet-expo.jpg",
  },
];

export default function Artikel() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  // Jika ada artikel yang dipilih, tampilkan halaman kelola artikel
  if (selectedArtikel !== null) {
    return (
      <KelolaArtikel
        artikel={Artikels[selectedArtikel]}
        onBack={() => setSelectedArtikel(null)}
      />
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 px-[5vw] py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Artikel</h1>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-md shadow transition"
            onClick={() => setShowPopup(true)}
          >
            + Tambah Artikel
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {Artikels.map((artikel, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow border border-gray-200 flex items-center p-6 gap-6"
            >
              <img
                src={artikel.image}
                alt={artikel.title}
                className="w-40 h-32 object-cover rounded-lg border"
              />
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-lg font-bold mb-2">{artikel.title}</h3>
                <span className="text-sm text-black mb-1">
                  {artikel.penulis ? `Penulis : ${artikel.penulis}` : "Penulis tidak diketahui"}
                </span>
                <span className="text-sm text-black mb-1">
                  {artikel.tanggal ? `Tanggal Penulisan : ${artikel.tanggal}` : "tanggal tidak diketahui"}
                </span>
                <p className="text-sm text-gray-700 mb-4">{artikel.description}</p>
                <button
                  className="bg-green-800 text-white rounded-md py-2 px-6 font-medium text-base w-fit hover:bg-green-900 transition"
                  onClick={() => setSelectedArtikel(i)}
                >
                  Kelola
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Tambah Artikel */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background blur saja */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(4px)",
                background: "transparent",
              }}
              onClick={() => setShowPopup(false)}
            />
            {/* Popup form */}
            <div className="relative w-full max-w-2xl z-10" onClick={e => e.stopPropagation()}>
              <TambahArtikel onClose={() => setShowPopup(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}