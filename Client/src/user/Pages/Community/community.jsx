import React, { useState } from 'react';
import { MdPets } from 'react-icons/md';
import '../../../style.css';
import DetailEvent from './DetailEvent';

const eventData = {
  title: 'Jakarta Pet Expo 2025',
  organizer: 'JPE',
  year: '2025',
  description: `The Jakarta Pet Expo (JPE) will held its second edition on 26-29 November, 2025, 
at the Jakarta International Expo (JI Expo) Kemayoran in Jakarta, Indonesia. 
This event is set to emerge as the leading international trade expo for pet care products in Indonesia.`,
  imageUrl:
    'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97ab777f-aecb-44b6-9693-1362533ee09b.png',
  imageAlt: 'Event banner for Jakarta Pet Expo 2025 with logos and text',
};

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center my-12 px-4 max-w-7xl mx-auto">
      <hr className="flex-grow border-gray-300 border-t" />
      <MdPets className="mx-4 text-green-700" size={24} aria-hidden="true" />
      <hr className="flex-grow border-gray-300 border-t" />
    </div>
  );
}

function EventCard({ event, onClick }) {
  return (
    <article className="bg-green-900 text-white rounded-lg p-6 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto">
      <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
      <img
        src={event.imageUrl}
        alt={event.imageAlt}
        className="mb-4 rounded max-h-[70px] object-contain mx-auto"
        width={200}
        height={70}
        loading="lazy"
      />
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="border border-green-500 rounded-full px-3 py-1 text-xs text-green-300">
          Diselenggara oleh: {event.organizer}
        </div>
        <div className="border border-green-500 rounded-full px-3 py-1 text-xs text-green-300">
          Tahun Event: {event.year}
        </div>
      </div>
      <p className="text-sm mb-6 whitespace-pre-line">
        <strong>Deskripsi:</strong> {event.description.slice(0, 100)}...
      </p>
      <button
        className="mt-auto bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded shadow-md transition-colors duration-200"
        onClick={onClick}
      >
        About This Event
      </button>
    </article>
  );
}

export default function Community() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = Array.from({ length: 9 }, () => eventData);

  if (selectedEvent !== null) {
    return (
      <DetailEvent event={events[selectedEvent]} onBack={() => setSelectedEvent(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Banner */}
      <section className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        <img
          src="../../../../public/community.avif"
          alt="Community banner"
          className="w-full h-90 object-cover rounded-t-lg"
          loading="lazy"
        />
      </section>

      <DecorativeDivider />

      {/* Event Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard key={i} event={event} onClick={() => setSelectedEvent(i)} />
          ))}
        </div>
      </main>
    </div>
  );
}
