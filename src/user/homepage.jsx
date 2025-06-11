import React, { useState, useEffect, useRef } from "react";
import '../style.css';

// Komponen halaman lain (dummy)
function Education() {
  return <div className="p-10 text-center text-2xl">Halaman Education</div>;
}
function Community() {
  return <div className="p-10 text-center text-2xl">Halaman Community</div>;
}
function Zoo() {
  return <div className="p-10 text-center text-2xl">Halaman Zoo</div>;
}
function Article() {
  return <div className="p-10 text-center text-2xl">Halaman Article</div>;
}
function Profile() {
  return <div className="p-10 text-center text-2xl">Halaman Profile</div>;
}

// Komponen homepage utama
function HomeContent({ banners, bannerIdx, slide, setSection }) {
  return (
    <>
      {/* Banner Slider */}
      <div
        className="w-full flex justify-center py-4"
      >
        <div
          className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-lg h-72"
          style={{
            background: "linear-gradient(120deg, #a7ffeb 0%, #fffde7 100%)"
          }}
        >
          <div className="w-full h-72 relative">
            <img
              src={banners[bannerIdx].src}
              alt={banners[bannerIdx].text}
              className={`w-full h-72 object-cover absolute top-0 left-0 transition-all duration-500
                ${slide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
              `}
              style={{ zIndex: 2 }}
            />
            <div
              className={`absolute top-6 left-8 bg-white/80 px-4 py-2 rounded-xl shadow text-green-900 font-bold text-xl z-10 transition-all duration-500
                ${slide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
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
          { section: 'education', img: 'gambarEdukasi.png', label: 'Education' },
          { section: 'quizz', img: 'gambarQuizz.png', label: 'Quizz' },
          { section: 'community', img: 'gambarKomunitas.png', label: 'Komunitas' },
          { section: 'article', img: 'gambarArtikel.png', label: 'Artikel' },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => setSection(item.section)}
            className="flex flex-col items-center text-green-900 hover:text-green-700 transition bg-transparent border-none outline-none cursor-pointer"
            style={{ background: "none" }}
          >
            <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center shadow mb-2">
              <img
                src={`/assets/${item.img}`}
                alt={item.label}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="font-semibold text-lg">{item.label}</p>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col max-w-6xl mx-auto mt-6 px-4 gap-6 w-full">
        {/* Visi & Kontak (kiri), Misi (kanan) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* Visi & Kontak */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Visi (judul dan isi digabung) */}
            <div className="w-full bg-[#214B26] rounded-t-lg rounded-b-lg p-5 text-center shadow ">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Visi Kami</h3>
              <div className="text-white text-base md:text-lg ">
                Meningkatkan kesadaran dan kepedulian masyarakat terhadap kehidupan dan kesejahteraan hewan melalui pendidikan yang informatif, menyenangkan, dan bermakna.
              </div>
            </div>
            {/* Kontak */}
                <div className="w-full bg-[#214B26] border border-green-200 rounded-xl p-5 shadow flex flex-col items-center"
              /* max-w-md dihapus agar lebar sama dengan visi */
            >
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
            <div className="w-full  bg-[#214B26] rounded-t-lg rounded-b-none p-2 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white">Misi Kami</h3>
            </div>
            <div className="w-full bg-[#214B26] rounded-b-lg rounded-t-none p-5 text-white text-base md:text-lg shadow">
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
      {/* ...existing code... */}
    </>
  );
}
// ...existing code...


export default function Homepage() {
  const banners = [
    {
      src: "/puffin.jpg",
      text: "let's learn about puffins"
    },
    {
      src: "/monkey.avif",
      text: "let's learn about monkeys"
    },
    {
      src: "/landak.avif",
      text: "let's learn about hedgehog"
    },
    {
      src: "/cendrawasih.avif",
      text: "let's learn about cendrawasih"
    },
    // Tambahkan banner lain jika perlu
  ];
  const [bannerIdx, setBannerIdx] = useState(0);
  const [slide, setSlide] = useState(true); // true: masuk, false: keluar
  const [section, setSection] = useState("home");
  const timeoutRef = useRef();

  // Animasi slide otomatis setiap 2 detik
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setSlide(false); // mulai animasi keluar
      setTimeout(() => {
        setBannerIdx((prev) => (prev + 1) % banners.length);
        setSlide(true); // animasi masuk
      }, 400); // durasi animasi keluar
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [bannerIdx, banners.length]);

  // Render konten sesuai section
  let content = null;
  if (section === "home") {
    content = <HomeContent banners={banners} bannerIdx={bannerIdx} slide={slide} setSection={setSection} />;
  } else if (section === "education") {
    content = <Education />;
  } else if (section === "community") {
    content = <Community />;
  } else if (section === "zoo") {
    content = <Zoo />;
  } else if (section === "article") {
    content = <Article />;
  } else if (section === "profile") {
    content = <Profile />;
  } else if (section === "quizz") {
    content = <div className="p-10 text-center text-2xl">Halaman Quizz</div>;
  }

  return (
    <div
      className="bg-white min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("/Background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <header className="w-full flex flex-col items-center shadow-sm bg-white z-10"
      >
        <div className="flex justify-between items-center w-full max-w-6xl px-4 py-2">
          <img src="/logozoo.png" alt="Logo" className="h-12" />
          <nav className="flex gap-6 font-semibold text-green-900 text-base">
            <button onClick={() => setSection("home")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">HOME</button>
            <button onClick={() => setSection("education")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">EDUCATION</button>
            <button onClick={() => setSection("community")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">COMMUNITY</button>
            <button onClick={() => setSection("zoo")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">ZOO</button>
            <button onClick={() => setSection("article")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">ARTICLE</button>
            <button onClick={() => setSection("profile")} className="hover:text-green-700 bg-transparent border-none cursor-pointer">PROFILE</button>
          </nav>
        </div>
      </header>

      {/* Konten */}
      <div style={{ flex: 1 }}>
        {content}
      </div>

      {/* Footer */}
      <footer className="text-center py-3 text-sm text-red-600 mt-8 bg-white"
      >
        Made with <span className="text-green-600">❤️</span> by Unotopia Team
      </footer>
    </div>
  );
}