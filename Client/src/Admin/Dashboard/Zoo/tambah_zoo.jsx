import React, { useState } from "react";
import '../../../style.css';

export default function Tambah_zoo({ onClose }) {
  const [namaEvent, setNamaEvent] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [galeri, setGaleri] = useState([]);
  const [banner, setBanner] = useState([]);
  const [website, setWebsite] = useState("");
  const [tiket, setTiket] = useState("");

  const handleFileUpload = (e, setter) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setter(prev => [...prev, ...urls]);
  };

  // Fungsi hapus file galeri
  const handleRemoveGaleri = (idx) => {
    setGaleri(prev => prev.filter((_, i) => i !== idx));
  };

  // Fungsi hapus file banner
  const handleRemoveBanner = (idx) => {
    setBanner(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No database connection or API call, just log the data
    console.log("Nama:", namaEvent);
    console.log("Deskripsi:", deskripsi);
    console.log("Galeri:", galeri);
    console.log("Banner:", banner);
    console.log("Website:", website);
    console.log("Tiket:", tiket);
    // onClose && onClose();
  };

  return (
    <div className="py-4 px-2">
      <form onSubmit={handleSubmit} className="bg-white shadow border p-6 rounded-lg max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-6 text-green-900 text-center">Tambah Kebun Binatang</h1>
        {/* Nama Event */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Nama Event</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            value={namaEvent}
            onChange={(e) => setNamaEvent(e.target.value)}
          />
        </div>

        {/* Deskripsi */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Deskripsi Event</label>
          <textarea
            placeholder="Masukkan deskripsi"
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            rows={3}
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Link Website resmi</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Link Pembelian tiket</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            value={tiket}
            onChange={(e) => setTiket(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700">Banner Kebun Binatang</label>
          <div className="flex items-center gap-2 flex-wrap">
            {banner.length === 0 && (
              <label className="w-8 h-8 bg-green-800 text-white flex items-center justify-center rounded cursor-pointer text-base hover:bg-green-900 transition">
                +
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, setBanner)}
                />
              </label>
            )}
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

        {/* Tombol Simpan dan Close */}
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
