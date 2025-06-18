import React, { useState } from 'react';
import '../../style.css';

const articles = [
  {
    title: "Musang Pandan: Ciri-ciri, Karakteristik dan Fakta Menariknya",
    description: "Pernah dengar tentang musang pandan? Binatang ini mungkin masih jarang terdengar...",
    content: "Ini adalah detail lengkap tentang musang pandan. Musang pandan hidup di hutan tropis dan dikenal karena bau pandan yang khas...",
    imageUrl: "musang.jpg",
  },
  {
    title: "Kucing Siam: Mengenal si Kucing Pintar yang Menggemaskan!",
    description: "Kucing siam merupakan salah satu ras kucing yang paling terkenal...",
    content: "Detail lengkap tentang kucing siam yang cerdas, aktif, dan memiliki suara khas...",
    imageUrl: "kucing-siam.jpg",
  },
  // Tambah artikel lainnya jika perlu
];

const ArticlePage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleBack = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Banner hanya muncul di daftar artikel */}
      {!selectedArticle && (
        <header className="h-72 w-full flex items-center justify-center">
          <img
            src="/artikel.avif"
            alt="Banner Halaman Artikel"
            className="h-full w-11/12 object-cover rounded-lg shadow-lg"
          />
        </header>
      )}

      {/* Jika belum pilih artikel → tampilkan daftar */}
      {!selectedArticle ? (
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center">Daftar Artikel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Jika artikel dipilih → tampilkan detailnya tanpa banner
        <div className="p-8 max-w-3xl mx-auto">
          <button onClick={handleBack} className="mb-4 text-sm text-blue-500 hover:underline">
            ← Kembali
          </button>
          <div className="bg-white p-6 rounded-lg shadow">
            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
            <p className="text-gray-700 text-lg">{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
