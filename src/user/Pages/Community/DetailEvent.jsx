// DetailEvent.jsx
import { useState } from 'react';
import '../../../style.css'

export default function DetailEvent({ event, onBack }) {
  const [activeTab, setActiveTab] = useState("event");

  return (
    <div className="min-h-screen px-4 sm:px-8 py-8 bg-white">
      <button onClick={onBack} className="mb-6 text-green-700 font-semibold hover:underline">
        ← Kembali
      </button>

      <img
        src={event.imageUrl}
        alt={event.imageAlt}
        className="rounded-lg w-full max-h-[300px] object-cover mb-6"
      />

      <div className="flex justify-start gap-4 mb-6">
        <button
          onClick={() => setActiveTab("event")}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${
            activeTab === "event"
              ? "bg-green-900 text-white"
              : "border border-gray-700 text-gray-900 hover:bg-gray-100"
          }`}
        >
          Event
        </button>
        <button
          onClick={() => setActiveTab("galeri")}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${
            activeTab === "galeri"
              ? "bg-green-900 text-white"
              : "border border-gray-700 text-gray-900 hover:bg-gray-100"
          }`}
        >
          Galeri
        </button>
      </div>

      {activeTab === "event" ? (
        <article className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">
          {event.description}
        </article>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src="../../../../public/community.avif"
              alt="Galeri event"
              className="rounded-lg object-cover"
            />
          ))}
        </section>
      )}
    </div>
  );
}
