import React, { useState } from "react";
import '../../../style.css';
import EditEvent from "./edit_event"; // Pastikan file ini ada

export default function DetailEvent({event, onBack }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Content */}
      <main className="flex-1 flex flex-col items-center py-8 px-2 bg-white">
        <div className="w-full max-w-2xl bg-white rounded-xl border-2 border-[#484c4e] p-6 shadow relative">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-4">{event.title}</h2>
          <div className="flex flex-col items-center mb-4">
            <img
              src= {event.image}
              alt="Jakarta Pet Expo"
              className="w-80 max-w-full object-contain mb-2"
            />
          </div>
          <p className="text-sm text-gray-800 mb-6 text-justify">
            {event.description}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-full transition"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-2 rounded-full transition">
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
        {/* Popup Edit Event */}
        {showEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(4px)",
                background: "rgba(0,0,0,0.1)",
              }}
              onClick={() => setShowEdit(false)}
            />
            <div className="relative w-full max-w-2xl z-10">
              <EditEvent onClose={() => setShowEdit(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}