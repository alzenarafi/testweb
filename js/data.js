/* =====================================================================
   DATA BLOG MINEVERSE — nambah artikel = copy 1 blok { ... }, tempel di
   paling atas daftar, lalu ganti isinya. Semua artikel yang tampil di
   blog.html (dan nanti "Blog Terbaru" di index) diambil dari sini.

   slug     : nama unik untuk link (huruf kecil, pakai tanda -, tanpa spasi)
   date     : format TAHUN-BULAN-TANGGAL (2026-10-20)
   category : bebas (Server, Studios, Store, Komunitas, dll). Filter otomatis.
   image    : "images/blog/nama.jpg" (kosong = tampil kotak banner polos)
   content  : isi artikel, tiap elemen = 1 paragraf. Boleh pakai HTML
              seperti <strong>, <a href="...">, atau "<h2>Judul</h2>".
   [CONTOH] = isi sementara, ganti dengan artikel aslimu.
   ===================================================================== */
/* Daftar kategori yang muncul di tombol filter (urutan sesuai di sini).
   Kategori tetap tampil walau belum ada artikelnya. */
window.BLOG_CATEGORIES = ["Berita", "Cerita", "Server", "Studios", "Store", "Komunitas"];

window.BLOG_POSTS = [
  { slug:"pengumuman-jadwal-maintenance", date:"2026-10-21", category:"Berita", author:"Alzena", views:0, image:"",
    title:"[CONTOH] Pengumuman Jadwal Maintenance Server",
    excerpt:"Server akan menjalani pemeliharaan singkat akhir pekan ini. Simak jadwal dan detailnya.",
    content:["Server Mineverse akan menjalani maintenance singkat untuk peningkatan performa.","Selama proses berlangsung, server tidak bisa diakses sementara. Terima kasih atas pengertiannya."]},
  { slug:"cerita-awal-mineverse", date:"2026-10-15", category:"Cerita", author:"Alzena", views:0, image:"",
    title:"[CONTOH] Cerita di Balik Berdirinya Mineverse",
    excerpt:"Dari sekumpulan teman yang ingin punya rumah bersama, sampai jadi komunitas yang kalian kenal sekarang.",
    content:["Semua berawal dari ide sederhana: punya tempat untuk berkarya bareng.","Di artikel ini kami berbagi perjalanan dan momen-momen yang paling berkesan."]},
  { slug:"server-season-2-dibuka", date:"2026-10-20", category:"Server", author:"Alzena", views:0, image:"",
    title:"[CONTOH] Mineverse Server Season 2 Resmi Dibuka",
    excerpt:"Dunia baru, event baru, dan fitur yang sudah lama kalian tunggu. Cek semua detailnya di sini.",
    content:["Season 2 akhirnya dibuka untuk pemain Java maupun Bedrock. Kami menyiapkan dunia baru lengkap dengan spawn yang dirombak total.","<h2>Apa yang baru?</h2>","<ul><li>Dunia baru dengan biome yang lebih beragam</li><li>Event harian selama minggu pertama</li><li>Sistem ekonomi yang lebih seimbang</li></ul>","Pantau Discord kami untuk jadwal lengkap dan pengumuman berikutnya."]},
  { slug:"trailer-perdana-studios", date:"2026-10-12", category:"Studios", author:"Arcee", views:0, image:"",
    title:"[CONTOH] Trailer Perdana Mineverse Studios",
    excerpt:"Intip proyek sinematik pertama dari tim Studios yang digarap penuh di dalam Minecraft.",
    content:["Tim Studios akhirnya membuka tirai proyek sinematik pertama mereka.","Trailer lengkap bisa ditonton di kanal YouTube kami."]},
  { slug:"skin-pack-galaxy", date:"2026-10-03", category:"Store", author:"Kei Sora", views:0, image:"",
    title:"[CONTOH] Skin Pack Galaxy Hadir di Mineverse Store",
    excerpt:"Koleksi skin dan 3D render edisi terbatas bertema galaksi sudah tersedia.",
    content:["Mineverse Store merilis skin pack terbaru bertema galaksi.","Setiap pembelian ikut mendukung kegiatan komunitas."]},
  { slug:"open-recruitment-staff", date:"2026-09-22", category:"Komunitas", author:"Alzena", views:0, image:"",
    title:"[CONTOH] Open Recruitment Staff Dibuka",
    excerpt:"Mau jadi bagian dari tim Mineverse? Pendaftaran staff baru sudah dibuka.",
    content:["Kami membuka pendaftaran untuk beberapa posisi staff.","Syarat dan formulir pendaftaran ada di Discord. Tidak perlu pengalaman, yang penting semangat belajar."]},
  { slug:"event-build-battle", date:"2026-09-10", category:"Server", author:"Reymazu", views:0, image:"",
    title:"[CONTOH] Event Build Battle Bulan Ini",
    excerpt:"Adu kreativitas membangun dengan tema kejutan. Hadiah menarik menantimu.",
    content:["Build Battle kembali hadir! Tema akan diumumkan tepat saat event dimulai.","Daftar lewat Discord sebelum slot penuh."]},
  { slug:"milestone-20-ribu", date:"2026-08-28", category:"Komunitas", author:"Alzena", views:0, image:"",
    title:"[CONTOH] Terima Kasih, 20.000 Pengikut!",
    excerpt:"Perjalanan Mineverse sampai di angka 20 ribu pengikut berkat dukungan kalian semua.",
    content:["Kami nggak akan sampai di titik ini tanpa kalian.","Terima kasih sudah menemani perjalanan Mineverse sejauh ini."]}
];
