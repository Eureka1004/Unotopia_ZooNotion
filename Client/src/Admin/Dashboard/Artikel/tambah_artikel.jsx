import React, { useState } from "react";
import '../../../style.css';

export default function TambahArtikel({ onClose }) {
  const [judulArtikel, setJudulArtikel] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [penulis, setPenulis] = useState(""); // dari [] menjadi string
  const [banner, setBanner] = useState([]);
  const [tanggalPenulisan, setTanggalPenulisan] = useState("");

  const handleFileUpload = (e, setter) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setter(prev => [...prev, ...urls]);
  };

  const handleRemoveBanner = (idx) => {
    setBanner(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const artikelData = {
      judulArtikel,
      deskripsi,
      penulis,
      banner,
      tanggalPenulisan,
    };

    console.log("Artikel Disimpan:", artikelData);

    // Kirim ke backend jika ada
    // fetch('/api/artikel', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(artikelData),
    // })

    // onClose && onClose();
  };

  return (
    <div className="py-4 px-2">
      <form onSubmit={handleSubmit} className="bg-white shadow border p-6 rounded-lg max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-6 text-green-900 text-center">Tambah Artikel</h1>

        {/* Judul Artikel */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Judul Artikel</label>
          <input
            type="text"
            placeholder="Masukkan judul"
            value={judulArtikel}
            onChange={(e) => setJudulArtikel(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
        </div>

        {/* Penulis */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Penulis</label>
          <input
            type="text"
            placeholder="Masukkan nama penulis"
            value={penulis}
            onChange={(e) => setPenulis(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
        </div>

        {/* Tanggal Penulisan */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Tanggal Penulisan</label>
          <input
            type="date"
            value={tanggalPenulisan}
            onChange={(e) => setTanggalPenulisan(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
          />
        </div>

        {/* Deskripsi */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Artikel</label>
          <textarea
            placeholder="Masukkan isi artikel"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            rows={4}
          ></textarea>
        </div>

        {/* Banner */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Banner Artikel</label>
          <div className="flex items-center gap-2 flex-wrap">
            <label className="w-8 h-8 bg-green-800 text-white flex items-center justify-center rounded cursor-pointer text-base hover:bg-green-900 transition">
              +
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e, setBanner)}
              />
            </label>
            {banner.map((url, idx) => (
              <div key={idx} className="relative group">
                <img src={url} alt="banner" className="w-12 h-10 object-cover rounded border" />
                <button
                  type="button"
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100"
                  onClick={() => handleRemoveBanner(idx)}
                  title="Hapus"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-green-900 transition font-semibold flex-1"
          >
            Simpan
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full text-sm hover:bg-gray-400 transition font-semibold flex-1"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
