import React, { useState } from "react";
import '../../style.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nama: "Greesella Sophina Adhalia",
    email: "Greesella270@gmail.com",
    tanggalLahir: "10 Januari 2006",
    alamat: "Dsn. Podokaton 10/05 Kedungcangkring Jabon\nSidoarjo, Jawa Timur 61274",
    noted: "Saya sangat menyukai untuk mempelajari hewan karena sangat membuat saya selalu penasaran untukmu.",
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Profile Pengguna</h1>

      {/* Foto dan Informasi Pribadi */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-5xl">
        <div className="flex-shrink-0">
          <img
            src="/artikel.avif"
            alt="Foto Profil"
            className="w-60 h-60 rounded-full object-cover shadow-lg border"
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex-1 w-full">
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="font-semibold text-lg block">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={editedData.nama}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="font-semibold text-lg block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              <div>
                <label className="font-semibold text-lg block">Tanggal Lahir</label>
                <input
                  type="text"
                  name="tanggalLahir"
                  value={editedData.tanggalLahir}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <h2 className="font-semibold text-lg">Nama</h2>
                <p className="text-gray-700">{profileData.nama}</p>
              </div>

              <div className="mb-4">
                <h2 className="font-semibold text-lg">Email</h2>
                <p className="text-gray-700">{profileData.email}</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">Tanggal Lahir</h2>
                <p className="text-gray-700">{profileData.tanggalLahir}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Alamat & Noted */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {/* Alamat */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">Alamat</h2>
          {isEditing ? (
            <textarea
              name="alamat"
              value={editedData.alamat}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={4}
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-line">{profileData.alamat}</p>
          )}
        </div>

        {/* Noted */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">Noted</h2>
          {isEditing ? (
            <textarea
              name="noted"
              value={editedData.noted}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={4}
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-line">{profileData.noted}</p>
          )}
        </div>
      </div>

      {/* Tombol */}
      <div className="mt-10 space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Simpan
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition"
            >
              Batal
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
          >
            Edit Profil
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
