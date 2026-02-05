import React, { useState, useEffect } from 'react';
import { Search, BookOpen, X, Star, Info, ChevronRight, Library, Moon, Sun, Book, Type, Monitor } from 'lucide-react';

export default function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingMode, setReadingMode] = useState(null); // State untuk mode baca
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // State Dark Mode

  // Reader Settings
  const [fontSize, setFontSize] = useState(18);
  const [readerTheme, setReaderTheme] = useState('light'); // light, sepia, dark

  // Pencarian awal
  useEffect(() => {
    searchBooks('buku terlaris 2024');
  }, []);

  const searchBooks = async (q) => {
    if (!q) return;
    setLoading(true);
    setBooks([]); // Clear books for animation restart
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=24`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Gagal mengambil data buku:", error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(query);
  };

  const toggleTheme = () => setIsDark(!isDark);

  const categories = ['Novel', 'Teknologi', 'Sejarah', 'Bisnis', 'Sains', 'Manga', 'Psikologi'];

  // Styling untuk Reader Mode
  const getReaderStyle = () => {
    switch(readerTheme) {
      case 'sepia': return 'bg-[#f4ecd8] text-slate-800';
      case 'dark': return 'bg-slate-900 text-slate-300';
      default: return 'bg-white text-slate-900';
    }
  };

  return (
    // Wrapper utama dengan logic Dark Mode
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
      <div className="min-h-screen font-sans selection:bg-indigo-200 dark:selection:bg-indigo-900 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* --- Header / Navbar --- */}
        <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => {setQuery(''); searchBooks('Best seller')}}>
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight leading-none">SANPUSTAKA</h1>
                <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider">JADI PINTER TANPA RIBET</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Library className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* --- Main Content --- */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          
          {/* Hero Section */}
          <section className="mb-10 text-center space-y-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white transition-colors">
              Baca Buku <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse">Tanpa Batas</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto transition-colors">
              Platform perpustakaan digital modern. Cari, simpan, dan baca cuplikan buku favoritmu langsung di sini.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto group z-10">
              <input
                type="text"
                className="w-full pl-12 pr-28 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 outline-none transition-all text-lg shadow-sm group-hover:shadow-lg dark:placeholder-slate-500"
                placeholder="Mau baca apa hari ini?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-full font-medium transition-transform active:scale-95"
              >
                Cari
              </button>
            </form>

            {/* Quick Categories */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => {setQuery(cat); searchBooks(cat);}}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className="animate-in fade-in zoom-in duration-500 px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all hover:-translate-y-1"
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Results Section */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 dark:border-indigo-400 mb-4"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 animate-pulse font-medium">Menjelajahi rak buku...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book, index) => {
                const info = book.volumeInfo;
                const thumbnail = info.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/128x196?text=No+Cover';
                
                return (
                  <div 
                    key={book.id || index} 
                    onClick={() => setSelectedBook(book)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-900 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
                  >
                    <div className="relative aspect-[2/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img 
                        src={thumbnail} 
                        alt={info.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {info.averageRating && (
                        <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-yellow-500 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                          <Star className="w-3 h-3 fill-current" />
                          {info.averageRating}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 line-clamp-2 mb-1 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{info.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{info.authors?.join(', ') || 'Penulis Tidak Diketahui'}</p>
                      
                      <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        <span>{info.publishedDate?.substring(0, 4) || 'N/A'}</span>
                        <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                          Lihat <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && books.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 animate-in zoom-in duration-500">
              <BookOpen className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Belum ada buku nih</h3>
              <p className="text-slate-500 dark:text-slate-500">Coba cari "Harry Potter" atau "Koding"</p>
            </div>
          )}
        </main>

        {/* --- Footer --- */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20 py-8 transition-colors">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-bold text-slate-800 dark:text-white mb-2">SANPUSTAKA</h2>
            <p className="text-slate-500 dark:text-slate-500 text-sm">Made with ❤️ for Book Lovers. <br/>© 2026 Sanpustaka.</p>
          </div>
        </footer>

        {/* --- Detail Modal --- */}
        {selectedBook && !readingMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors z-10 text-slate-600 dark:text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:flex h-full">
                {/* Cover Image */}
                <div className="bg-slate-100 dark:bg-slate-900 md:w-1/3 min-h-[300px] md:min-h-full p-8 flex items-center justify-center sticky top-0">
                  <div className="relative group perspective-1000">
                     <img 
                      src={selectedBook.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150x200'} 
                      alt={selectedBook.volumeInfo.title}
                      className="shadow-2xl rounded-lg w-48 md:w-full max-w-[220px] object-cover transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105"
                    />
                    {/* Fake book spine effect */}
                    <div className="absolute inset-y-0 left-0 w-2 bg-white/20 z-10 rounded-l-lg pointer-events-none"></div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-10 md:w-2/3 flex flex-col">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {selectedBook.volumeInfo.categories?.map((c, i) => (
                      <span key={i} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {c}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {selectedBook.volumeInfo.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-6">
                    {selectedBook.volumeInfo.authors?.join(', ')}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Penerbit</span>
                      <p className="font-semibold text-slate-700 dark:text-slate-200 mt-1">{selectedBook.volumeInfo.publisher || '-'}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Halaman</span>
                      <p className="font-semibold text-slate-700 dark:text-slate-200 mt-1">{selectedBook.volumeInfo.pageCount || '-'} Hal</p>
                    </div>
                  </div>

                  <div className="prose prose-slate dark:prose-invert prose-sm max-w-none mb-8 text-slate-600 dark:text-slate-300 line-clamp-6 hover:line-clamp-none transition-all cursor-pointer">
                     <p dangerouslySetInnerHTML={{__html: selectedBook.volumeInfo.description || '<i>Deskripsi tidak tersedia.</i>'}} />
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    {/* Tombol Baca Sekarang (In-App) */}
                    <button 
                      onClick={() => setReadingMode(selectedBook)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-5 h-5" />
                      Baca Sekarang
                    </button>
                    
                    {/* Tombol Preview Eksternal */}
                    <a 
                      href={selectedBook.volumeInfo.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      Google Play <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- READER MODE OVERLAY (Fitur Baru) --- */}
        {readingMode && (
           <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 flex items-center justify-center">
             <div className={`relative w-full h-full md:h-[95vh] md:w-[95vw] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col ${getReaderStyle()} transition-colors duration-300`}>
               
               {/* Reader Toolbar */}
               <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 shrink-0 bg-opacity-90 backdrop-blur">
                 <div className="flex items-center gap-3 overflow-hidden">
                   <button onClick={() => setReadingMode(null)} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                     <X className="w-6 h-6" />
                   </button>
                   <div className="flex flex-col">
                      <span className="font-bold truncate max-w-[200px] md:max-w-md">{readingMode.volumeInfo.title}</span>
                      <span className="text-xs opacity-60">Reader Mode</span>
                   </div>
                 </div>

                 <div className="flex items-center gap-2 md:gap-4">
                    {/* Font Size Controls */}
                    <div className="hidden md:flex items-center bg-black/5 dark:bg-white/10 rounded-full px-2 py-1">
                      <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="p-2 hover:text-indigo-500"><Type className="w-3 h-3" /></button>
                      <span className="text-xs font-mono w-6 text-center">{fontSize}</span>
                      <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="p-2 hover:text-indigo-500"><Type className="w-5 h-5" /></button>
                    </div>

                    {/* Theme Controls */}
                    <div className="flex gap-1 bg-black/5 dark:bg-white/10 rounded-full p-1">
                      <button onClick={() => setReaderTheme('light')} className={`w-8 h-8 rounded-full bg-white border border-slate-200 ${readerTheme === 'light' ? 'ring-2 ring-indigo-500' : ''}`} title="Light"></button>
                      <button onClick={() => setReaderTheme('sepia')} className={`w-8 h-8 rounded-full bg-[#f4ecd8] border border-[#eaddc5] ${readerTheme === 'sepia' ? 'ring-2 ring-indigo-500' : ''}`} title="Sepia"></button>
                      <button onClick={() => setReaderTheme('dark')} className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700 ${readerTheme === 'dark' ? 'ring-2 ring-indigo-500' : ''}`} title="Dark"></button>
                    </div>
                 </div>
               </div>

               {/* Reader Content */}
               <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-16 custom-scrollbar">
                 <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
                    
                    {/* Cover in Reader */}
                    <div className="flex justify-center mb-10">
                      <img 
                        src={readingMode.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:')} 
                        className="shadow-xl rounded-md max-w-[150px]"
                        alt="cover"
                      />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">{readingMode.volumeInfo.title}</h1>
                    <p className="text-center opacity-70 mb-12 italic">oleh {readingMode.volumeInfo.authors?.join(', ')}</p>

                    <div className="prose max-w-none" style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}>
                      {/* Simulasi Konten Buku dari Deskripsi (karena API terbatas) */}
                      <div className={`p-6 rounded-xl border-l-4 ${readerTheme === 'dark' ? 'bg-white/5 border-indigo-500' : 'bg-black/5 border-indigo-600'}`}>
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                           <Book className="w-5 h-5" /> Pratinjau / Sinopsis
                        </h3>
                        <p dangerouslySetInnerHTML={{__html: readingMode.volumeInfo.description || 'Maaf, teks lengkap buku ini dilindungi hak cipta dan tidak dapat ditampilkan sepenuhnya di sini.'}} />
                      </div>
                      
                      <div className="my-10 border-t border-dashed border-current opacity-30"></div>
                      
                      {/* IFRAME EMBED (Attempt to show real preview) */}
                      <div className="w-full aspect-[4/3] md:aspect-video bg-white rounded-lg overflow-hidden border-2 border-slate-200 relative">
                        {readingMode.accessInfo?.embeddable ? (
                           <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-slate-50 text-slate-900">
                              <Monitor className="w-12 h-12 text-slate-300 mb-3" />
                              <p className="font-bold mb-2">Mode Pratinjau Web</p>
                              <p className="text-sm text-slate-500 mb-4 max-w-sm">
                                Karena kebijakan keamanan Google, pratinjau interaktif mungkin tidak muncul di dalam frame ini.
                              </p>
                              <a 
                                href={readingMode.volumeInfo.previewLink} 
                                target="_blank"
                                rel="noreferrer"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition"
                              >
                                Buka Full Reader di Tab Baru
                              </a>
                           </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center opacity-60">
                            <Info className="w-12 h-12 mb-2" />
                            <p>Pratinjau tertanam tidak diizinkan oleh penerbit untuk buku ini.</p>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-center mt-8 opacity-50 text-sm">
                        *Untuk membaca versi lengkap, silakan beli buku fisik atau digital melalui Google Play Store.
                      </p>
                    </div>

                 </div>
               </div>

             </div>
           </div>
        )}

      </div>
      
      {/* Global Styles untuk Custom Scrollbar & Animations */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(-15deg);
        }
      `}</style>
    </div>
  );
}
