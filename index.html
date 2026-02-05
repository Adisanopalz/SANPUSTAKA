<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SANPUSTAKA - Jadi Pinter Tanpa Ribet</title>
    
    <!-- Tailwind CSS (Via CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <!-- Konfigurasi Tailwind & Animasi Custom -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(10px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    },
                    animation: {
                        fadeIn: 'fadeIn 0.5s ease-out forwards',
                    }
                }
            }
        }
    </script>

    <!-- Custom Styles -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.5); border-radius: 20px; }
        
        /* Hide Scrollbar for clean UI but allow scroll */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Loader Animation */
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4f46e5;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* 3D Book Effect */
        .perspective-1000 { perspective: 1000px; }
        .book-cover { transition: transform 0.5s; transform-style: preserve-3d; }
        .book-container:hover .book-cover { transform: rotateY(-15deg) scale(1.05); }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-900">

    <!-- --- Navbar --- -->
    <nav class="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2 cursor-pointer group" onclick="resetApp()">
                <div class="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <i data-lucide="book-open" class="text-white w-6 h-6"></i>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-slate-800 dark:text-white tracking-tight leading-none">SANPUSTAKA</h1>
                    <p class="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider">JADI PINTER TANPA RIBET</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <button onclick="toggleTheme()" class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                    <i id="theme-icon" data-lucide="moon" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- --- Main Content --- -->
    <main class="max-w-6xl mx-auto px-4 py-6 min-h-screen">
        
        <!-- Hero Section -->
        <section class="mb-10 text-center space-y-6 py-8 animate-fadeIn">
            <h2 class="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white transition-colors">
                Baca Buku <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Tanpa Batas</span>
            </h2>
            <p class="text-slate-500 dark:text-slate-400 max-w-lg mx-auto transition-colors">
                Platform perpustakaan digital modern. Cari, simpan, dan baca cuplikan buku favoritmu langsung di sini.
            </p>
            
            <form onsubmit="handleSearch(event)" class="relative max-w-2xl mx-auto group z-10">
                <input id="search-input" type="text" 
                    class="w-full pl-12 pr-28 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 outline-none transition-all text-lg shadow-sm group-hover:shadow-lg dark:placeholder-slate-500"
                    placeholder="Mau baca apa hari ini?" value="">
                <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6"></i>
                <button type="submit" class="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-full font-medium transition-transform active:scale-95">
                    Cari
                </button>
            </form>

            <!-- Quick Categories -->
            <div id="categories-container" class="flex flex-wrap justify-center gap-2 mt-4">
                <!-- Categories injected by JS -->
            </div>
        </section>

        <!-- Loading State -->
        <div id="loading-state" class="hidden flex-col items-center justify-center py-20">
            <div class="loader mb-4 border-indigo-600 dark:border-indigo-400"></div>
            <p class="text-slate-500 dark:text-slate-400 animate-pulse font-medium">Menjelajahi rak buku...</p>
        </div>

        <!-- Empty State -->
        <div id="empty-state" class="hidden text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
            <i data-lucide="book-open" class="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4"></i>
            <h3 class="text-xl font-semibold text-slate-700 dark:text-slate-300">Belum ada buku nih</h3>
            <p class="text-slate-500 dark:text-slate-500">Coba cari "Harry Potter" atau "Koding"</p>
        </div>

        <!-- Results Grid -->
        <div id="books-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Books injected by JS -->
        </div>

    </main>

    <!-- --- Footer --- -->
    <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20 py-8 transition-colors">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <h2 class="font-bold text-slate-800 dark:text-white mb-2">SANPUSTAKA</h2>
            <p class="text-slate-500 dark:text-slate-500 text-sm">Made with ❤️ for Book Lovers. <br/>© 2026 Sanpustaka.</p>
        </div>
    </footer>

    <!-- --- Detail Modal --- -->
    <div id="detail-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
        <div class="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeIn">
            <button onclick="closeModal()" class="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors z-10 text-slate-600 dark:text-slate-300">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="md:flex h-full">
                <!-- Cover Area -->
                <div class="bg-slate-100 dark:bg-slate-900 md:w-1/3 min-h-[300px] md:min-h-full p-8 flex items-center justify-center sticky top-0">
                    <div class="relative group book-container">
                        <img id="modal-img" src="" alt="Book Cover" class="book-cover shadow-2xl rounded-lg w-48 md:w-full max-w-[220px] object-cover">
                        <div class="absolute inset-y-0 left-0 w-2 bg-white/20 z-10 rounded-l-lg pointer-events-none"></div>
                    </div>
                </div>

                <!-- Content Area -->
                <div class="p-6 md:p-10 md:w-2/3 flex flex-col">
                    <div id="modal-categories" class="mb-4 flex flex-wrap gap-2"></div>

                    <h2 id="modal-title" class="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight"></h2>
                    <p id="modal-authors" class="text-lg text-slate-600 dark:text-slate-400 font-medium mb-6"></p>

                    <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                            <span class="text-xs text-slate-400 uppercase font-bold tracking-wider">Penerbit</span>
                            <p id="modal-publisher" class="font-semibold text-slate-700 dark:text-slate-200 mt-1">-</p>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                            <span class="text-xs text-slate-400 uppercase font-bold tracking-wider">Halaman</span>
                            <p id="modal-pages" class="font-semibold text-slate-700 dark:text-slate-200 mt-1">- Hal</p>
                        </div>
                    </div>

                    <div id="modal-desc" class="prose prose-slate dark:prose-invert prose-sm max-w-none mb-8 text-slate-600 dark:text-slate-300 line-clamp-6 hover:line-clamp-none transition-all cursor-pointer"></div>

                    <div class="mt-auto flex flex-col sm:flex-row gap-3">
                        <button onclick="startReading()" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:-translate-y-1 flex items-center justify-center gap-2">
                            <i data-lucide="book-open" class="w-5 h-5"></i> Baca Sekarang
                        </button>
                        <a id="modal-link" href="#" target="_blank" class="px-6 py-3.5 border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                            Google Play <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- --- Reader Mode Overlay --- -->
    <div id="reader-overlay" class="hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
        <div id="reader-container" class="relative w-full h-full md:h-[95vh] md:w-[95vw] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white text-slate-900 transition-colors duration-300">
            
            <!-- Toolbar -->
            <div class="flex items-center justify-between p-4 border-b border-black/10 shrink-0 bg-opacity-90 backdrop-blur">
                <div class="flex items-center gap-3 overflow-hidden">
                    <button onclick="closeReader()" class="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                    <div class="flex flex-col">
                        <span id="reader-title" class="font-bold truncate max-w-[200px] md:max-w-md">Judul Buku</span>
                        <span class="text-xs opacity-60">Reader Mode</span>
                    </div>
                </div>

                <div class="flex items-center gap-2 md:gap-4">
                    <!-- Font Size -->
                    <div class="hidden md:flex items-center bg-black/5 rounded-full px-2 py-1">
                        <button onclick="changeFontSize(-2)" class="p-2 hover:text-indigo-500"><i data-lucide="type" class="w-3 h-3"></i></button>
                        <span id="font-size-display" class="text-xs font-mono w-6 text-center">18</span>
                        <button onclick="changeFontSize(2)" class="p-2 hover:text-indigo-500"><i data-lucide="type" class="w-5 h-5"></i></button>
                    </div>
                    <!-- Themes -->
                    <div class="flex gap-1 bg-black/5 rounded-full p-1">
                        <button onclick="setReaderTheme('light')" class="w-8 h-8 rounded-full bg-white border border-slate-200 ring-indigo-500 focus:ring-2"></button>
                        <button onclick="setReaderTheme('sepia')" class="w-8 h-8 rounded-full bg-[#f4ecd8] border border-[#eaddc5] ring-indigo-500 focus:ring-2"></button>
                        <button onclick="setReaderTheme('dark')" class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 ring-indigo-500 focus:ring-2"></button>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-4 md:p-8 lg:p-16 custom-scrollbar">
                <div class="max-w-3xl mx-auto animate-fadeIn">
                    <div class="flex justify-center mb-10">
                        <img id="reader-img" src="" class="shadow-xl rounded-md max-w-[150px]" alt="cover">
                    </div>
                    
                    <h1 id="reader-heading" class="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">Judul</h1>
                    <p id="reader-author" class="text-center opacity-70 mb-12 italic">Penulis</p>

                    <div id="reader-body" class="prose max-w-none text-lg leading-loose">
                        <!-- Dynamic Content -->
                    </div>

                    <div class="my-10 border-t border-dashed border-current opacity-30"></div>

                    <!-- Embed Placeholder -->
                    <div class="w-full aspect-video bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200 relative flex flex-col items-center justify-center text-center p-6">
                        <i data-lucide="monitor" class="w-12 h-12 text-slate-300 mb-3"></i>
                        <p class="font-bold mb-2 text-slate-800">Mode Pratinjau Web</p>
                        <p class="text-sm text-slate-500 mb-4 max-w-sm">Buka pratinjau lengkap di Google Books.</p>
                        <a id="reader-ext-link" href="#" target="_blank" class="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition">Buka Full Reader</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- --- JAVASCRIPT LOGIC --- -->
    <script>
        // --- State Variables ---
        let currentBooks = [];
        let currentBook = null;
        let isDark = false;
        let fontSize = 18;
        
        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            initCategories();
            searchBooks('buku terlaris 2024'); // Initial Search
            
            // Check System Theme
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                toggleTheme();
            }
        });

        // --- Functions ---

        // 1. Theme Toggle
        function toggleTheme() {
            isDark = !isDark;
            const html = document.documentElement;
            const icon = document.getElementById('theme-icon');
            
            if (isDark) {
                html.classList.add('dark');
                icon.setAttribute('data-lucide', 'sun');
            } else {
                html.classList.remove('dark');
                icon.setAttribute('data-lucide', 'moon');
            }
            lucide.createIcons();
        }

        // 2. Categories
        function initCategories() {
            const categories = ['Novel', 'Teknologi', 'Sejarah', 'Bisnis', 'Sains', 'Manga', 'Psikologi'];
            const container = document.getElementById('categories-container');
            
            container.innerHTML = categories.map((cat, idx) => `
                <button onclick="searchBooks('${cat}'); document.getElementById('search-input').value='${cat}'"
                    class="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-all hover:-translate-y-1 animate-fadeIn"
                    style="animation-delay: ${idx * 100}ms">
                    ${cat}
                </button>
            `).join('');
        }

        // 3. Search Logic
        async function handleSearch(e) {
            e.preventDefault();
            const query = document.getElementById('search-input').value;
            searchBooks(query);
        }

        async function searchBooks(query) {
            if (!query) return;
            
            // UI States
            document.getElementById('loading-state').classList.remove('hidden');
            document.getElementById('loading-state').classList.add('flex');
            document.getElementById('books-grid').innerHTML = '';
            document.getElementById('empty-state').classList.add('hidden');

            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=24`);
                const data = await response.json();
                
                document.getElementById('loading-state').classList.add('hidden');
                document.getElementById('loading-state').classList.remove('flex');
                
                if (data.items && data.items.length > 0) {
                    currentBooks = data.items;
                    renderBooks(data.items);
                } else {
                    document.getElementById('empty-state').classList.remove('hidden');
                }
            } catch (error) {
                console.error("Error:", error);
                document.getElementById('loading-state').classList.add('hidden');
            }
        }

        // 4. Render Books
        function renderBooks(books) {
            const grid = document.getElementById('books-grid');
            
            grid.innerHTML = books.map((book, index) => {
                const info = book.volumeInfo;
                const thumbnail = info.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/128x196?text=No+Cover';
                const safeTitle = info.title ? info.title.replace(/'/g, "\\'") : 'Tanpa Judul';
                
                // Animasi delay
                const delay = index * 50;

                return `
                <div onclick="openModal('${book.id}')"
                    style="animation-delay: ${delay}ms"
                    class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-900 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full animate-fadeIn">
                    
                    <div class="relative aspect-[2/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img src="${thumbnail}" alt="${safeTitle}" loading="lazy"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        ${info.averageRating ? `
                        <div class="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-yellow-500 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                            <i data-lucide="star" class="w-3 h-3 fill-current"></i> ${info.averageRating}
                        </div>` : ''}
                    </div>
                    
                    <div class="p-4 flex-1 flex flex-col">
                        <h3 class="font-bold text-slate-800 dark:text-slate-100 line-clamp-2 mb-1 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${info.title}</h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">${info.authors?.join(', ') || 'Penulis Tidak Diketahui'}</p>
                        
                        <div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                            <span>${info.publishedDate?.substring(0, 4) || 'N/A'}</span>
                            <span class="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                                Lihat <i data-lucide="chevron-right" class="w-3 h-3"></i>
                            </span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
            
            // Refresh icons for new elements
            lucide.createIcons();
        }

        // 5. Modal Logic
        function openModal(bookId) {
            currentBook = currentBooks.find(b => b.id === bookId);
            if (!currentBook) return;
            
            const info = currentBook.volumeInfo;
            const thumbnail = info.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150x200';

            // Populate Data
            document.getElementById('modal-img').src = thumbnail;
            document.getElementById('modal-title').textContent = info.title;
            document.getElementById('modal-authors').textContent = info.authors?.join(', ');
            document.getElementById('modal-publisher').textContent = info.publisher || '-';
            document.getElementById('modal-pages').textContent = (info.pageCount || '-') + ' Hal';
            document.getElementById('modal-desc').innerHTML = info.description || '<i>Deskripsi tidak tersedia.</i>';
            document.getElementById('modal-link').href = info.previewLink;
            
            // Categories
            const catContainer = document.getElementById('modal-categories');
            catContainer.innerHTML = (info.categories || []).map(c => 
                `<span class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">${c}</span>`
            ).join('');

            // Show Modal
            document.getElementById('detail-modal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeModal() {
            document.getElementById('detail-modal').classList.add('hidden');
        }

        // 6. Reader Mode Logic
        function startReading() {
            closeModal();
            const info = currentBook.volumeInfo;
            
            document.getElementById('reader-title').textContent = info.title;
            document.getElementById('reader-heading').textContent = info.title;
            document.getElementById('reader-author').textContent = 'oleh ' + (info.authors?.join(', ') || 'Unknown');
            document.getElementById('reader-img').src = info.imageLinks?.thumbnail?.replace('http:', 'https:') || '';
            document.getElementById('reader-ext-link').href = info.previewLink;

            // Content Simulation
            const desc = info.description || 'Maaf, teks lengkap buku ini dilindungi hak cipta.';
            document.getElementById('reader-body').innerHTML = `
                <div class="p-6 rounded-xl border-l-4 border-indigo-500 bg-opacity-10 bg-indigo-500 mb-6">
                    <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
                        <i data-lucide="book" class="w-5 h-5"></i> Pratinjau / Sinopsis
                    </h3>
                    ${desc}
                </div>
            `;

            document.getElementById('reader-overlay').classList.remove('hidden');
            lucide.createIcons();
            setReaderTheme('light'); // Default start
        }

        function closeReader() {
            document.getElementById('reader-overlay').classList.add('hidden');
            openModal(currentBook.id); // Re-open modal when closing reader
        }

        // Reader Settings
        function changeFontSize(delta) {
            fontSize = Math.max(14, Math.min(32, fontSize + delta));
            document.getElementById('font-size-display').innerText = fontSize;
            document.getElementById('reader-body').style.fontSize = fontSize + 'px';
        }

        function setReaderTheme(theme) {
            const container = document.getElementById('reader-container');
            const btns = document.querySelector('.flex.gap-1').children;
            
            // Reset base classes
            container.className = "relative w-full h-full md:h-[95vh] md:w-[95vw] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-colors duration-300";

            if (theme === 'sepia') {
                container.classList.add('bg-[#f4ecd8]', 'text-slate-800');
            } else if (theme === 'dark') {
                container.classList.add('bg-slate-900', 'text-slate-300');
            } else {
                container.classList.add('bg-white', 'text-slate-900');
            }
        }

        function resetApp() {
            document.getElementById('search-input').value = '';
            searchBooks('Best seller');
        }

    </script>
</body>
</html>
