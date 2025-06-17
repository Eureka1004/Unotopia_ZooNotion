import React from 'react';
import '../../style.css';

const zooData = [
  {
    title: 'Kebun Binatang Surabaya',
    description: 'Kebun Binatang Surabaya adalah salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya.',
    website: '#',
    ticket: '#',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kebun_Binatang_Surabaya_2011.jpg/640px-Kebun_Binatang_Surabaya_2011.jpg'
  },
  {
    title: 'Batu Secret Zoo',
    description: 'Batu Secret Zoo adalah kebun binatang dan tempat wisata modern di Kota Batu, Jawa Timur.',
    website: '#',
    ticket: '#',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Batu_Secret_Zoo.jpg/640px-Batu_Secret_Zoo.jpg'
  },
  {
    title: 'Solo Safari',
    description: 'Solo Safari, sebelumnya dikenal sebagai Taman Satwa Taru Jurug Surakarta, adalah salah satu objek wisata di Kota Surakarta.',
    website: '#',
    ticket: '#',
    imageUrl: 'https://solosafari.id/wp-content/uploads/2023/01/SSS-scaled.jpg'
  },
];

const App = () => {
  return (
    <div className="bg-gray-50 p-8">
      <h1 className="text-center text-3xl font-bold mb-8">Kebun Binatang</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {zooData.map((zoo, index) => (
          <div key={index} className="bg-green-600 text-white rounded-lg overflow-hidden">
            <img
              src={zoo.imageUrl}
              alt={zoo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{zoo.title}</h2>
              <p className="mt-2">{zoo.description}</p>
              <div className="mt-4">
                <a href={zoo.website} className="bg-white text-green-600 py-1 px-3 rounded-md hover:bg-gray-200">Website Resmi</a>
                <a href={zoo.ticket} className="bg-white text-green-600 py-1 px-3 rounded-md hover:bg-gray-200 ml-2">Pembelian Tiket</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
