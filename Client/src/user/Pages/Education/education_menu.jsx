import React, { useState } from "react";
import "../../../style.css";

const animalList = [
  {
    src: "/Aves.avif",
    alt: "Aves",
    name: "Aves (Burung)",
    description: "Aves adalah hewan bertelur dengan bulu dan paruh.",
    animals: [
      {
        icon: "/animals/elang.png",
        name: "Elang",
        desc: "Elang adalah burung pemangsa yang kuat dan memiliki penglihatan tajam.",
        images: ["/elang1.jpg", "/elang2.jpg", "/elang3.jpg"],
      },
      {
        icon: "/animals/merpati.png",
        name: "Merpati",
        desc: "Merpati dikenal sebagai burung pembawa pesan dan sangat jinak.",
        images: ["/merpati1.jpg", "/merpati2.jpg", "/merpati3.jpg"],
      },
      {
        icon: "/animals/kakatua.png",
        name: "Kakatua",
        desc: "Kakatua adalah burung berwarna cerah dengan kemampuan meniru suara.",
        images: ["/kakatua1.jpg", "/kakatua2.jpg", "/kakatua3.jpg"],
      },
    ],
  },
  {
    src: "/Aves.avif",
    alt: "Aves",
    name: "Aves (Burung)",
    description: "Aves adalah hewan bertelur dengan bulu dan paruh.",
    animals: [
      {
        icon: "/animals/elang.png",
        name: "Elang",
        desc: "Elang adalah burung pemangsa yang kuat dan memiliki penglihatan tajam.",
        images: ["/elang1.jpg", "/elang2.jpg", "/elang3.jpg"],
      },
      {
        icon: "/animals/merpati.png",
        name: "Merpati",
        desc: "Merpati dikenal sebagai burung pembawa pesan dan sangat jinak.",
        images: ["/merpati1.jpg", "/merpati2.jpg", "/merpati3.jpg"],
      },
      {
        icon: "/animals/kakatua.png",
        name: "Kakatua",
        desc: "Kakatua adalah burung berwarna cerah dengan kemampuan meniru suara.",
        images: ["/kakatua1.jpg", "/kakatua2.jpg", "/kakatua3.jpg"],
      },
    ],
  },
  // Tambahkan kategori Mamalia, Amfibi, dll dengan struktur serupa
];

const EdukasiAves = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [popupAnimal, setPopupAnimal] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % animalList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + animalList.length) % animalList.length);
  };

  const openDetail = () => {
    setSelectedAnimal(animalList[currentIndex]);
  };

  const closeDetail = () => {
    setSelectedAnimal(null);
  };

  const openPopup = (animal) => {
    setPopupAnimal(animal);
  };

  const closePopup = () => {
    setPopupAnimal(null);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/bg-forest.jpg')" }}
    >
      <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-5xl px-6 py-10 text-center z-10">
        <h1 className="text-4xl font-bold mb-6">Dunia Binatang</h1>

        {/* === Detail Mode === */}
        {selectedAnimal ? (
          <div>
            <img
              src={selectedAnimal.src}
              alt={selectedAnimal.alt}
              className="mx-auto mb-4 w-[300px] h-[300px] rounded-full object-cover shadow"
            />
            <h2 className="text-3xl font-bold">{selectedAnimal.name}</h2>
            <p className="mt-4 text-lg">{selectedAnimal.description}</p>

            {/* List Hewan */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Contoh Hewan</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                {selectedAnimal.animals.map((animal, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center focus:outline-none"
                    onClick={() => openPopup(animal)}
                  >
                    <img
                      src={animal.icon}
                      alt={animal.name}
                      className="w-20 h-20 object-cover rounded-full border shadow"
                    />
                    <span className="mt-2 text-sm">{animal.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={closeDetail}
              className="mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded"
            >
              Kembali
            </button>
          </div>
        ) : (
          // === Slider Mode ===
          <>
            <div className="flex justify-center items-center gap-6 mb-6 w-full">
              <button
                onClick={handlePrev}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow"
              >
                &#8592; Prev
              </button>

              <div className="w-[240px] h-[240px] overflow-hidden relative rounded-full border-4 border-white shadow-md">
                <div
                  className="flex transition-transform duration-500 ease-in-out transform-gpu"
                  style={{
                    transform: `translateX(-${currentIndex * 240}px)`,
                    width: `${animalList.length * 240}px`,
                  }}
                >
                  {animalList.map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      className="w-[240px] h-[240px] object-cover rounded-full flex-none cursor-pointer"
                      onClick={openDetail}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow"
              >
                Next &#8594;
              </button>
            </div>

            <h2 className="text-2xl font-semibold">
              {animalList[currentIndex].name}
            </h2>
          </>
        )}
      </div>

      {/* === POPUP === */}
      {popupAnimal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full overflow-hidden flex flex-col md:flex-row">
            {/* Left: Gambar utama */}
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
              <img
                src={popupAnimal.icon}
                alt={popupAnimal.name}
                className="w-60 h-60 object-cover rounded-lg shadow"
              />
            </div>

            {/* Right: Deskripsi dan galeri */}
            <div className="md:w-1/2 p-6 text-left">
              <h2 className="text-2xl font-bold mb-2">{popupAnimal.name}</h2>
              <p className="text-gray-700 mb-4">{popupAnimal.desc}</p>
              <div className="grid grid-cols-3 gap-2">
                {popupAnimal.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="w-full h-20 object-cover rounded shadow"
                  />
                ))}
              </div>
              <button
                onClick={closePopup}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EdukasiAves;
