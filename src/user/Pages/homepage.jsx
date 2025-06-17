import React, { useState, useEffect, useRef } from "react";
import '../../style.css';

function Homepage() {
  const banners = [
    { src: "/puffin.jpg", text: "let's learn about puffins" },
    { src: "/monkey.avif", text: "let's learn about monkeys" },
    { src: "/landak.avif", text: "let's learn about hedgehog" },
    { src: "/cendrawasih.avif", text: "let's learn about cendrawasih" },
  ];

  const [bannerIdx, setBannerIdx] = useState(0);
  const [slide, setSlide] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setSlide(false);
      setTimeout(() => {
        setBannerIdx((prev) => (prev + 1) % banners.length);
        setSlide(true);
      }, 400);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [bannerIdx]);

  return (
    <>
      {/* Banner Slider */}
      <div className="w-full flex justify-center py-4">
        <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-lg h-72"
          style={{ background: "linear-gradient(120deg, #a7ffeb 0%, #fffde7 100%)" }}
        >
          <div className="w-full h-72 relative">
            <img
              src={banners[bannerIdx].src}
              alt={banners[bannerIdx].text}
              className={`w-full h-72 object-cover absolute top-0 left-0 transition-all duration-500
                ${slide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
              style={{ zIndex: 2 }}
            />
            <div
              className={`absolute top-6 left-8 bg-white/80 px-4 py-2 rounded-xl shadow text-green-900 font-bold text-xl z-10 transition-all duration-500
                ${slide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {banners[bannerIdx].text}
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mt-8 text-center px-4">
        <h2 className="mb-2 text-3xl font-bold text-green-900">Zoonotion</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          zoonotion adalah platform edukasi hewan yang menyajikan metode pembelajaran hewan yang menarik. ayooo teman teman mari kita bersama - sama mengenal berbagai macam satwa yang ada di alam yang luas ini 🙌
        </p>
        <hr className="my-6 w-1/2 mx-auto border-green-300" />
      </div>

      {/* Menu Cards */}
      <div className="py-6 flex flex-wrap justify-center gap-8">
        {[
          { img: 'EducationIcon.png', label: 'Education' },
          { img: 'QuizzIcon.png', label: 'Quizz' },
          { img: 'komunitasIcon.png', label: 'Komunitas' },
          { img: 'artikelIcon.png', label: 'Artikel' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-green-900 transition"
          >
            <div className="w-35 h-35 rounded-full flex items-center justify-center shadow mb-2 border-1 border-gray-300 transition hover:scale-120">
              <img
                src={`/${item.img}`}
                alt={item.label}
                className="w-35 h-35   object-contain"
              />
            </div>
            <p className="font-semibold text-lg">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Visi Misi Kontak */}
      <div className="flex flex-1 flex-col max-w-6xl mx-auto mt-6 px-4 gap-6 w-full">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* Visi & Kontak */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="w-full bg-[#214B26] rounded-t-lg rounded-b-lg p-5 text-center shadow">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Visi Kami</h3>
              <div className="text-white text-base md:text-lg">
                Meningkatkan kesadaran dan kepedulian masyarakat terhadap kehidupan dan kesejahteraan hewan melalui pendidikan yang informatif, menyenangkan, dan bermakna.
              </div>
            </div>
            <div className="w-full bg-[#214B26] border border-green-200 rounded-xl p-5 shadow flex flex-col items-center">
              <h3 className="text-lg font-bold mb-3 text-white text-center">Kontak Kami</h3>
              <div className="flex flex-col gap-4 text-white text-base w-full">
                <div className="flex items-center gap-3">
                  <span className="material-icons">email</span>
                  <span>zoonotion@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons">whatsapp</span>
                  <span>+62 08****</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons">instagram</span>
                  <span>@zoonotion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-[#214B26] rounded-t-lg p-2 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white">Misi Kami</h3>
            </div>
            <div className="w-full bg-[#214B26] rounded-b-lg p-5 text-white text-base md:text-lg shadow">
              <ol className="list-decimal list-inside space-y-1">
                <li>Menyediakan materi edukatif tentang keanekaragaman, habitat, dan peran penting hewan dalam ekosistem.</li>
                <li>Mendorong sikap cinta, empati, dan tanggung jawab terhadap hewan sejak usia dini.</li>
                <li>Menyelenggarakan program edukatif interaktif seperti kunjungan ke tempat penangkaran, kebun binatang, atau pusat konservasi.</li>
                <li>Meningkatkan pemahaman masyarakat terhadap isu-isu seperti perlindungan satwa liar, konservasi, dan kesejahteraan hewan peliharaan.</li>
                <li>Berkolaborasi dengan sekolah, komunitas, dan lembaga terkait dalam kampanye edukasi hewan secara berkelanjutan.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
