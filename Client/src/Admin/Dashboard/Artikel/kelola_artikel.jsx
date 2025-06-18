import React, { useState } from "react";
import '../../../style.css';
import EditArtikel from "./edit_artikel"; // Pastikan file ini tersedia

export default function Kelola_Artikel({ artikel, onBack }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus artikel ini?");
    if (confirmed) {
      // TODO: Panggil API delete di sini
      console.log("Artikel dihapus:", artikel);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex flex-col items-center py-8 px-2 bg-white">
        <div className="w-full max-w-2xl bg-white rounded-xl border-2 border-[#484c4e] p-6 shadow relative">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
            {artikel?.title || "Judul tidak tersedia"}
          </h2>

          <div className="flex flex-col items-center mb-4">
            {artikel?.image ? (
              <img
                src={artikel.image}
                alt={artikel.title}
                className="w-80 max-w-full object-contain mb-2"
              />
            ) : (
              <div className="w-80 h-40 bg-gray-200 flex items-center justify-center text-gray-500 rounded mb-2">
                Tidak ada gambar
              </div>
            )}
          </div>

          <p className="text-sm text-black mb-1 font-semibold">
            {artikel?.penulis ? `Penulis : ${artikel.penulis}` : "Penulis tidak diketahui"}
          </p>

          <p className="text-sm text-black mb-1 font-semibold">
            {artikel?.tanggal ? `Tanggal Penulisan : ${artikel.tanggal}` : "Tanggal tidak diketahui"}
          </p>

          <p className="text-sm text-gray-800 mb-6 text-justify">
            {artikel?.description || "Deskripsi tidak tersedia."}
          </p>

          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-full transition"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-2 rounded-full transition"
              onClick={handleDelete}
            >
              Hapus
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-2 rounded-full transition"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        </div>

        {/* Popup Edit Artikel */}
        {showEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
              onClick={() => setShowEdit(false)}
            />
            <div className="relative w-full max-w-2xl z-10">
              <EditArtikel artikel={artikel} onClose={() => setShowEdit(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
