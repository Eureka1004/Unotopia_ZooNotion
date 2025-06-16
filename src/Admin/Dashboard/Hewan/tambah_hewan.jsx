import React, { useState } from "react";
import '../../../style.css';

const TambahHewan = ({ onClose }) => {
  const [banner, setBanner] = useState([]);
  const [profil, setProfil] = useState(null);

  // Handler untuk upload file dan preview gambar galeri
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setBanner(prev => [...prev, ...urls]);
  };

  // Handler untuk menghapus gambar galeri
  const handleRemoveBanner = (idx) => {
    setBanner(prev => prev.filter((_, i) => i !== idx));
  };

  // Handler untuk upload gambar profil (hanya 1 gambar)
  const handleProfilUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfil(URL.createObjectURL(file));
    }
  };

  // Handler untuk menghapus gambar profil
  const handleRemoveProfil = () => {
    setProfil(null);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto mt-16 relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        onClick={onClose}
        aria-label="Tutup"
      >
      </button>
      <h1 className="text-2xl font-bold mb-6">Tambah Hewan</h1>

      <label htmlFor="namaHewan" className="font-semibold mb-2 block">
        Nama Hewan
      </label>
      <input
        type="text"
        id="namaHewan"
        placeholder="Masukkan nama"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
      />

      <label htmlFor="deskripsiHewan" className="font-semibold mb-2 block">
        Deskripsi Hewan
      </label>
      <textarea
        id="deskripsiHewan"
        placeholder="Masukkan deskripsi"
        className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
      ></textarea>

      <label htmlFor="jenisHewan" className="font-semibold mb-2 block">
        Jenis Hewan
      </label>
      <select
        id="jenisHewan"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Masukkan jenis
        </option>
        <option value="Aves">Aves</option>
        <option value="Mamalia">Mamalia</option>
        <option value="Pisces">Pisces</option>
        <option value="Amfibi">Amfibi</option>
        <option value="Reptil">Reptil</option>
      </select>


    <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-gray-700">Galeri Hewan</label>
        <div className="flex items-center gap-2 flex-wrap">
            <label className="w-8 h-8 bg-green-800 text-white flex items-center justify-center rounded cursor-pointer text-base hover:bg-green-900 transition mt-2">
            +
            <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
            />
            </label>
            {banner.map((url, idx) => (
            <div key={idx} className="relative group mt-2">
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

      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-gray-700">Profil Hewan</label>
        <div className="flex items-center gap-2 flex-wrap">
          {profil && (
            <div className="relative group">
              <img src={profil} alt="profil" className="w-12 h-10 object-cover rounded border" />
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100"
                onClick={handleRemoveProfil}
                title="Hapus"
              >
                🗑️
              </button>
            </div>
          )}
        </div>
        {!profil && (
          <label className="w-8 h-8 bg-green-800 text-white flex items-center justify-center rounded cursor-pointer text-base hover:bg-green-900 transition mt-2">
            +
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleProfilUpload}
            />
          </label>
        )}
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
    </div>
  );
};

export default TambahHewan;