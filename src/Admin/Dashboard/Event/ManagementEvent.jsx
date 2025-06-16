import React, { useState } from "react";
import '../../../style.css';
import TambahEvent from "./tambah_event";
import DetailEvent from "./kelola_event";

const events = [
  {
    title: "Jakarta Pet Expo",
    description:
      "Karina",
    image: "../../public/puffin.jpg",
  },
  {
    title: "PetFest 2025",
    description:
      "Karina",
    image: "../../public/verifsucces.png",
  },
  {
    title: "ILDEX Indonesia 2025",
    description:
      "Pameran Peternakan berskala internasional terbesar di Indonesia yang akan membuat anda memiliki kesempatan untuk bertemu dengan seluruh stakeholder di bidang Peternakan dan Kesehatan Hewan baik dalam maupun luar negeri.",
    image: "/images/ildex-2025.jpg",
  },
];

export default function ManajemenEvent() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (selectedEvent !== null) {
    return <DetailEvent event={events[selectedEvent]} onBack={() => setSelectedEvent(null)} />;
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 px-[5vw] py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Pemberitahuan Event</h1>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-md shadow transition"
            onClick={() => setShowPopup(true)}
          >
            + Tambah Event
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow border border-gray-200 flex items-center p-6 gap-6"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-40 h-32 object-cover rounded-lg border"
              />
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                <button
                  className="bg-green-800 text-white rounded-md py-2 px-6 font-medium text-base w-fit hover:bg-green-900 transition"
                  onClick={() => setSelectedEvent(i)}
                >
                  Kelola
                </button>
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background blur saja */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(4px)",
                background: "transparent",
              }}
            />
            {/* Popup form */}
            <div className="relative w-full max-w-2xl z-10">
              <TambahEvent onClose={() => setShowPopup(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}