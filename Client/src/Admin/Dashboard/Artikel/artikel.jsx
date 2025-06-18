import React, { useState } from "react";
import '../../../style.css';
import TambahArtikel from "./tambah_artikel";
import KelolaArtikel from "./kelola_artikel";

const Artikels = [
  {
    title: "Inilah 8 Spesies Ular Terbesar di Dunia, Salah Satunya Ada Black Mamba",
    penulis: "Dr. Reptil Indonesia",
    tanggal: "2024-10-01",
    description:
      "Ular terbesar di dunia – Tak jarang berita tentang penemuan ular besar di sekitar kawasan rumah warga beredar, penemuan ular besar ini tentunya menghebohkan karena masyarakat khawatir bahwa ular tersebut dapat membahayakan manusia maupun hewan peliharaan. Di Indonesia, ular paling besar adalah Anaconda Hijau dengan panjang mencapai 9,7 m dan berat lebih dari 249 kg! Tetapi selain Anaconda Hijau, ada beberapa spesies ular terbesar lain di dunia lho",
    image: "../../public/puffin.jpg",
  },
  {
    title: "Panduan Lengkap Merawat Reptil Eksotis di Rumah",
    penulis: "Karina Sari",
    tanggal: "2024-09-28",
    description:
      "Merawat reptil eksotis memerlukan pengetahuan khusus dan persiapan yang matang. Artikel ini akan membahas berbagai aspek penting dalam merawat reptil, mulai dari pemilihan habitat yang tepat, pengaturan suhu dan kelembaban, hingga pemberian pakan yang sesuai dengan kebutuhan masing-masing spesies reptil.",
    image: "../../public/puffin.jpg",
  },
  {
    title: "Konservasi Satwa Langka: Upaya Pelestarian Biodiversitas Indonesia",
    penulis: "Tim Konservasi Nasional",
    tanggal: "2024-09-25",
    description:
      "Indonesia memiliki kekayaan biodiversitas yang luar biasa, namun banyak spesies yang terancam punah. Artikel ini membahas berbagai program konservasi yang sedang berjalan, tantangan yang dihadapi, dan bagaimana masyarakat dapat berpartisipasi dalam upaya pelestarian satwa langka di Indonesia.",
    image: "../../public/puffin.jpg",
  },
];

export default function Artikel() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  // Fungsi untuk menangani error jika artikel tidak ditemukan
  const handleArtikelSelection = (index) => {
    if (index >= 0 && index < Artikels.length) {
      setSelectedArtikel(index);
    } else {
      console.error('Index artikel tidak valid:', index);
      alert('Artikel tidak ditemukan!');
    }
  };

  // Jika ada artikel yang dipilih, tampilkan halaman kelola artikel
  if (selectedArtikel !== null) {
    const artikel = Artikels[selectedArtikel];
    
    // Pengecekan tambahan untuk memastikan artikel ada
    if (!artikel) {
      console.error('Artikel tidak ditemukan untuk index:', selectedArtikel);
      setSelectedArtikel(null);
      return (
        <div className="flex min-h-screen bg-gray-100 items-center justify-center">
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Artikel Tidak Ditemukan
            </h2>
            <p className="text-gray-600 mb-4">
              Data artikel yang diminta tidak tersedia.
            </p>
            <button
              onClick={() => setSelectedArtikel(null)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Kembali ke Daftar Artikel
            </button>
          </div>
        </div>
      );
    }

    return (
      <KelolaArtikel
        artikel={artikel}
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
          {Artikels.length > 0 ? (
            Artikels.map((artikel, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow border border-gray-200 flex items-center p-6 gap-6"
              >
                <img
                  src={artikel.image || '/images/default-article.jpg'}
                  alt={artikel.title || 'Artikel'}
                  className="w-40 h-32 object-cover rounded-lg border"
                  onError={(e) => {
                    e.target.src = '/images/default-article.jpg';
                  }}
                />
                <div className="flex-1 flex flex-col h-full">
                  <h3 className="text-lg font-bold mb-2">
                    {artikel.title || 'Judul tidak tersedia'}
                  </h3>
                  <span className="text-sm text-black mb-1">
                    {artikel.penulis ? `Penulis: ${artikel.penulis}` : "Penulis tidak diketahui"}
                  </span>
                  <span className="text-sm text-black mb-2">
                    {artikel.tanggal ? `Tanggal: ${artikel.tanggal}` : "Tanggal tidak diketahui"}
                  </span>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {artikel.description || 'Deskripsi tidak tersedia'}
                  </p>
                  <div className="flex gap-2 mt-auto">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-200"
                      onClick={() => handleArtikelSelection(i)}
                    >
                      Kelola
                    </button>
                    <button
                      className="bg-red-600 text-white rounded-full py-2 px-4 font-medium text-base hover:bg-red-700 transition duration-200"
                      onClick={() => {
                        if (window.confirm(`Apakah Anda yakin ingin menghapus artikel "${artikel.title}"?`)) {
                          // Implementasi delete artikel di sini
                          console.log('Menghapus artikel:', artikel.title);
                          alert('Fitur hapus artikel akan segera tersedia!');
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                Belum ada artikel
              </h3>
              <p className="text-gray-400">
                Klik tombol "Tambah Artikel" untuk menambahkan artikel pertama.
              </p>
            </div>
          )}
        </div>

        {/* Popup Tambah Artikel */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background blur */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(4px)",
                background: "rgba(0, 0, 0, 0.3)",
              }}
              onClick={() => setShowPopup(false)}
            />
            {/* Popup form */}
            <div 
              className="relative w-full max-w-2xl z-10" 
              onClick={(e) => e.stopPropagation()}
            >
              <TambahArtikel onClose={() => setShowPopup(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
