import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Compass,
  AlertCircle,
  RefreshCcw,
  CheckCircle2,
  FileText,
  Sparkles,
  ZoomIn,
  X,
  HelpCircle,
  Award,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PageTransition } from "../components/PageTransition";
import { PdfPreviewCard } from "../components/PdfPreviewCard";
import { ArtefakJustification } from "../components/ArtefakJustification";

export const RefleksiPPDB= () => {
  const [activeTab, setActiveTab] = useState<
    "tab-koneksi" | "tab-konsep" | "tab-tantangan" | "tab-perbaikan"
  >("tab-koneksi");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isImageModalOpen]);

  return (
    <PageTransition>
      {/* <SectionHeading
        title="Refleksi Pengalaman Belajar"
        subtitle="Refleksi pengalaman belajar ini mendokumentasikan perjalanan saya selama mengikuti Pendidikan Profesi Guru (PPG) melalui pendekatan 4C (Connection, Challenge, Concept, dan Change) sebagai bentuk evaluasi diri."
        icon={Compass}
      /> */}

      {/* Main Refleksi Banner & Welcome */}
      <div className="mb-10 sm:mb-12">
        <GlassCard className="p-5 sm:p-8 md:p-12 border-brand-primary/20 bg-white/75 relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" /> Jurnal Refleksi Akhir
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-800 leading-tight mb-4">
                Refleksi Pengajaran dan Pembelajaran Daring dan Bauran
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
              
                Mata kuliah Pengajaran dan Pembelajaran Daring dan Bauran memberikan pemahaman bahwa pemanfaatan teknologi dalam pembelajaran perlu disertai perencanaan yang sistematis dan mempertimbangkan kebutuhan peserta didik. Melalui empat topik perkuliahan, dipelajari perkembangan teknologi dan kesenjangan digital, model pembelajaran daring dan bauran, desain instruksional, serta pemilihan model pembelajaran yang sesuai dengan permasalahan pembelajaran. Saya memahami bahwa penggunaan LMS dan kecerdasan buatan (AI) dapat mendukung proses belajar, tetapi tidak secara otomatis meningkatkan keterlibatan peserta didik apabila tidak diikuti dengan strategi pembelajaran yang tepat.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
               
                Hal yang paling berkesan adalah Topik 4 tentang Model Pembelajaran dalam Pembelajaran Daring dan Bauran. Melalui penyusunan tabel perbandingan model pembelajaran dan draft desain instruksional untuk studi kasus Project-Based Learning daring, diperoleh pemahaman bahwa keberhasilan pembelajaran dipengaruhi oleh kesesuaian model, rancangan aktivitas, komunikasi, dan kolaborasi antarpeserta didik. Pengalaman tersebut memperkuat kemampuan menganalisis masalah dan menentukan strategi pembelajaran berdasarkan kondisi nyata, bukan sekadar mengikuti langkah-langkah model secara teoritis.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
             
         Ke depannya, pemahaman dari mata kuliah ini akan diterapkan dalam merancang pembelajaran yang lebih interaktif, adaptif, dan terarah, baik secara daring, tatap muka, maupun bauran. Pemanfaatan teknologi perlu berorientasi pada tujuan pembelajaran, mendorong partisipasi aktif, serta memberikan ruang bagi peserta didik untuk berdiskusi, berkolaborasi, dan merefleksikan proses belajarnya. Dengan demikian, teknologi dapat menjadi sarana pendukung pembelajaran yang bermakna, bukan sekadar media penyampaian materi.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveTab("tab-koneksi")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "tab-koneksi" ? "bg-brand-primary text-white shadow-md" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  Connection
                </button>
                <button
                  onClick={() => setActiveTab("tab-tantangan")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "tab-tantangan" ? "bg-brand-primary text-white shadow-md" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  Challenge
                </button>
                <button
                  onClick={() => setActiveTab("tab-konsep")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "tab-konsep" ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  Concept
                </button>
                <button
                  onClick={() => setActiveTab("tab-perbaikan")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "tab-perbaikan" ? "bg-emerald-600 text-white shadow-md" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  Change
                </button>
              </div>
            </div>

            <div
              onClick={() => setIsImageModalOpen(true)}
              className="md:col-span-5 w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border-2 border-brand-primary/10 relative shadow-xl bg-slate-900/5 flex items-center justify-center cursor-pointer group hover:border-brand-primary/40 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src="/images/ppdb.png"
                alt="Reflection Practice"
                className="w-full h-auto max-h-[450px] object-contain rounded-2xl sm:rounded-[2rem] transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm rounded-2xl sm:rounded-[2rem] backdrop-blur-[2px]">
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Klik untuk memperbesar</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Interactive Tabs Content - Full Width Focused Layout */}
      <div className="w-full mb-16">
        <div className="w-full space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === "tab-koneksi" && (
              <motion.div
                key="pembelajaran"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-l-4 border-brand-primary bg-white/70">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <BookOpen className="text-brand-primary w-6 h-6 shrink-0" />{" "}
                    Kaitan Materi Dengan Peran Saya Sebagai Calon Guru
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base mb-8 text-justify leading-relaxed">
                    <p>Mata kuliah Pengajaran dan Pembelajaran Daring dan Bauran memberikan pemahaman kepada saya bahwa teknologi pendidikan bukan sekadar sarana untuk menyampaikan materi, tetapi juga perlu dimanfaatkan untuk mendukung keterlibatan dan pencapaian belajar peserta didik. Sebagai calon guru yang melaksanakan PPL di SMK Negeri 2 Salatiga, saya menyadari bahwa perkembangan teknologi, seperti LMS, konferensi video, dan kecerdasan buatan (AI), memberikan banyak peluang untuk menciptakan pembelajaran yang lebih fleksibel. Namun, pemanfaatannya perlu disesuaikan dengan tujuan pembelajaran, kesiapan peserta didik, ketersediaan fasilitas, serta kemampuan mereka dalam menggunakan teknologi.</p>
                    <br />
                   
                    
                    <p>Materi pada Topik 1 sampai Topik 3 juga berkaitan dengan pengalaman saya dalam merancang dan melaksanakan pembelajaran. Saya memahami bahwa penggunaan teknologi perlu disertai rancangan pembelajaran yang sistematis, mulai dari penentuan tujuan, pemilihan aktivitas, penyediaan media, hingga evaluasi. Hal ini semakin relevan ketika saya mempelajari studi kasus sekolah yang telah menggunakan LMS, tetapi peserta didiknya kurang aktif mengikuti kegiatan di dalamnya. Saya menyadari bahwa ketersediaan teknologi tidak secara otomatis menciptakan pembelajaran yang efektif. Guru tetap perlu merancang aktivitas yang mendorong peserta didik untuk berdiskusi, menyelesaikan tugas, memberikan tanggapan, dan terlibat secara aktif dalam proses belajar.</p>
                    <br />
                    
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-konsep" && (
              <motion.div
                key="konsep"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-l-4 border-brand-primary bg-white/70">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <BookOpen className="text-brand-primary w-6 h-6 shrink-0" />{" "}
                    Konsep Penting Yang Saya Dapatkan Dari Mata Kuliah Ini
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base mb-8 text-justify leading-relaxed">
                    <p>Dari mata kuliah ini, saya mempelajari beberapa konsep penting, yaitu perkembangan teknologi dan kesenjangan digital, model pembelajaran daring dan bauran, desain instruksional yang sistematis, serta pemilihan model pembelajaran berdasarkan karakteristik dan kebutuhan peserta didik. Saya memahami bahwa pembelajaran daring dan bauran perlu dirancang dengan mempertimbangkan tujuan, aktivitas, interaksi, media, asesmen, serta akses peserta didik terhadap teknologi. Selain itu, penggunaan LMS dan AI perlu disertai pertimbangan kritis mengenai manfaat, keterbatasan, kesenjangan akses, dan tanggung jawab dalam penggunaannya. Guru tidak cukup hanya mampu mengoperasikan teknologi, tetapi juga perlu mengetahui kapan dan bagaimana teknologi tersebut dapat mendukung pembelajaran.</p>
                    <br />
                   
                   <p>Materi yang paling berkesan bagi saya adalah Topik 4, yaitu Model Pembelajaran dalam Pembelajaran Daring dan Bauran. Melalui kegiatan menganalisis tantangan, berdiskusi, serta menyusun tabel dan matriks perbandingan model pembelajaran, saya memahami bahwa setiap model memiliki karakteristik, kelebihan, dan keterbatasan yang perlu dipertimbangkan sebelum diterapkan. Pemahaman ini semakin kuat ketika saya menganalisis studi kasus Project-Based Learning daring yang mengalami kendala kolaborasi akibat perbedaan jadwal, motivasi, dan keterbatasan platform. Saya menyadari bahwa keberhasilan suatu model pembelajaran tidak hanya ditentukan oleh kesesuaian teori, tetapi juga oleh strategi pelaksanaan dan dukungan yang diberikan kepada peserta didik. Guru perlu mengatur pembagian peran, tahapan pengerjaan, jadwal komunikasi, serta pemantauan kontribusi setiap anggota agar kolaborasi dapat berjalan lebih terarah. Materi ini mengubah pandangan saya bahwa pemilihan model pembelajaran bukan sekadar mengikuti langkah-langkah yang telah ditentukan, melainkan mempertimbangkan masalah yang ingin diselesaikan dan kondisi nyata peserta didik.</p>
               
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-tantangan" && (
              <motion.div
                key="tantangan"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-l-4 border-indigo-500 bg-white/70">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <AlertCircle className="text-indigo-500 w-6 h-6 shrink-0" />{" "}
                    Perbedaan Materi Dengan Praktik Di Sekolah
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base mb-8 text-justify leading-relaxed">
                    
                    <p>Salah satu tantangan yang saya sadari adalah perbedaan antara pembelajaran yang dirancang secara sistematis dalam perkuliahan dan praktik pembelajaran yang berlangsung di kelas. Dalam pelaksanaan PPL, saya masih perlu mengembangkan kemampuan untuk menyesuaikan metode, media, dan aktivitas pembelajaran dengan kondisi nyata peserta didik. Pada pembelajaran praktik kejuruan, misalnya, teknologi dapat membantu penyampaian materi dan simulasi, tetapi guru tetap perlu memastikan bahwa peserta didik memahami proses kerja, mampu memecahkan masalah, dan mendapatkan bimbingan ketika mengalami kesulitan. Dengan demikian, penggunaan teknologi tidak dapat dipisahkan dari interaksi dan pendampingan guru.</p>
                    <br />
                   <p>Tantangan lainnya adalah membangun keaktifan dan kolaborasi peserta didik. Melalui studi kasus LMS yang kurang dimanfaatkan secara optimal, saya memahami bahwa rendahnya aktivitas belajar tidak selalu disebabkan oleh keterbatasan fitur, tetapi dapat berkaitan dengan desain kegiatan, motivasi, dan kebiasaan belajar peserta didik. Sementara itu, studi kasus Project-Based Learning daring menunjukkan bahwa kerja kelompok tidak otomatis berjalan efektif hanya karena peserta didik telah diberikan proyek. Perbedaan jadwal, motivasi, dan keterbatasan platform dapat menghambat komunikasi serta pembagian tugas. Hal ini menjadi tantangan bagi saya untuk tidak hanya berfokus pada penyampaian materi, tetapi juga merancang mekanisme pendampingan, pemantauan kemajuan, dan evaluasi proses kerja kelompok.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-perbaikan" && (
              <motion.div
                key="perbaikan"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-l-4 border-emerald-500 bg-white/70">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <RefreshCcw className="text-emerald-500 w-6 h-6" />{" "}
                    Perubahan Yang Ingin Saya Lakukan
                  </h3>

                  <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base mb-6 text-justify leading-relaxed">
                    <p>Setelah mempelajari mata kuliah ini, saya ingin memperbaiki cara merancang pembelajaran agar lebih sistematis, interaktif, dan sesuai dengan kebutuhan peserta didik. Saya akan berupaya menentukan tujuan pembelajaran dan aktivitas yang jelas sebelum memilih media atau platform digital. Jika menggunakan LMS, saya ingin memastikan bahwa setiap aktivitas memiliki tujuan yang bermakna, seperti diskusi, latihan, pengumpulan tugas, dan refleksi, bukan sekadar memindahkan materi dari pembelajaran tatap muka ke ruang digital. Saya juga ingin memanfaatkan teknologi dan AI secara bijak untuk membantu persiapan pembelajaran, penyediaan sumber belajar, dan pengembangan aktivitas, dengan tetap memperhatikan ketepatan informasi serta peran guru dalam membimbing peserta didik.</p>
                    <br />

                    <p>Dalam pelaksanaan PPL maupun ketika menjadi guru nantinya, saya ingin lebih cermat memilih model pembelajaran berdasarkan tujuan, karakteristik materi, kesiapan peserta didik, dan kondisi sarana yang tersedia. Untuk kegiatan proyek kelompok, saya akan berusaha menetapkan pembagian tugas, jadwal, target setiap tahap, dan mekanisme pemantauan agar semua peserta didik memiliki kesempatan untuk berkontribusi. Saya juga ingin memadukan pembelajaran daring dengan tatap muka atau praktik langsung ketika kompetensi yang dipelajari membutuhkan pengalaman nyata. Melalui perubahan tersebut, saya berharap dapat menjadi guru yang tidak hanya mengikuti perkembangan teknologi, tetapi mampu menggunakannya secara kritis, adaptif, dan bertanggung jawab untuk menciptakan pembelajaran yang bermakna bagi peserta didik.</p>
                    <br />
                   
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* PDF Document Preview Cards - Responsive Grid */}
      {(() => {
        const pdfDocs = [
          {
            title: "Artefak 1: 3.C. Diskusi Pemecahan Masalah : Membuat Draft Desain Instruksional",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/3.C-Diskusi-Pemecahan-Masalah-Membuat-Draft-Desain-Instruksional.pdf",
          },
          {
            title: "Artefak 2 : 4.C. Diskusi Pemacahan Masalah : Membuat Tabel Perbandingan Model Pembelajaran.",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl:"/images/4.C-Diskusi-Pemacahan Masalah-Membuat-Tabel-Perbandingan-Model-Pembelajaran.pdf",
          },
        ];

        return (
          <div className="pt-12 mt-12 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 px-1">
              <FileText className="w-5 h-5 text-indigo-500 shrink-0" /> Lampiran
              Dokumentasi Refleksi PDF
            </h3>
            <div
              className={`grid gap-6 ${
                pdfDocs.length === 1
                  ? "grid-cols-1 max-w-2xl mx-auto"
                  : pdfDocs.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {pdfDocs.map((doc, idx) => (
                <PdfPreviewCard
                  key={idx}
                  title={doc.title}
                  description={doc.description}
                  colorClass={doc.colorClass}
                  pdfUrl={doc.pdfUrl}
                />
              ))}
            </div>
          </div>
        );
      })()}

      {/* Alasan Pemilihan Artefak Refleksi dalam Container Terpisah & 1 Baris */}
      <ArtefakJustification
        mataKuliah="Pemahaman Perserta Didik dan Pembelajaran"
        ringkasanUmum="Pemilihan dua artefak di atas merupakan wujud konkret rekonstruksi pemikiran saya mengenai esensi pendidikan Ki Hadjar Dewantara. Artefak-artefak ini mendemonstrasikan bagaimana konsep 'menuntun', 'kodrat alam & kodrat zaman', serta internalisasi nilai-nilai luhur diintegrasikan secara nyata ke dalam rancangan pembelajaran informatika, analisis dilema etis, dan transformasi mindset calon guru profesional."
        items={[
          {
            no: 1,
            title: "Artefak 1: 1.E. Penerapan PSE Lingkungan Sekolah",
            alasan:
            "Artefak yang dipilih berupa slide presentasi dan draft desain instruksional yang disusun secara berkelompok pada Topik 3, yaitu Desain Instruksional Pembelajaran Daring dan Bauran. Artefak ini membahas studi kasus sekolah yang telah menggunakan Learning Management System (LMS), tetapi peserta didiknya masih kurang aktif mengikuti kegiatan pembelajaran di dalamnya. Pemilihan artefak ini didasarkan pada pemahaman bahwa keberadaan teknologi dan platform pembelajaran saja belum cukup untuk menciptakan pembelajaran yang efektif. Diperlukan rancangan instruksional yang sistematis agar LMS dapat dimanfaatkan untuk mendorong keterlibatan peserta didik secara optimal.\n Melalui tugas ini, kelompok menyusun draft desain instruksional dengan mempertimbangkan model desain yang relevan, peran LMS, serta strategi pembelajaran yang sesuai dengan permasalahan dalam studi kasus. Proses tersebut mendorong analisis terhadap penyebab rendahnya keaktifan peserta didik sekaligus penyusunan alur pembelajaran yang melibatkan diskusi, pengerjaan tugas, pemberian tanggapan, dan refleksi. Strategi ini dipilih agar LMS tidak hanya menjadi tempat untuk mengakses materi dan mengumpulkan tugas, tetapi juga menjadi ruang interaksi yang mendukung keterlibatan aktif peserta didik.\n Artefak ini menjadi bukti pengembangan kemampuan dalam menganalisis masalah dan merancang pembelajaran daring maupun bauran secara terstruktur. Dari proses penyusunannya, diperoleh pemahaman bahwa guru perlu memastikan keterkaitan antara tujuan pembelajaran, aktivitas peserta didik, pemanfaatan teknologi, dan asesmen. Ke depannya, pemahaman tersebut akan menjadi bekal untuk merancang pembelajaran yang lebih interaktif, sesuai dengan kebutuhan peserta didik, serta mampu mendorong keterlibatan dan pencapaian tujuan p",
              pdfLink: "/images/Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf",
            pdfName: "Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : 4.C. Diskusi Pemacahan Masalah : Membuat Tabel Perbandingan Model Pembelajaran",
            alasan:
           "Artefak kedua berupa slide presentasi dan draft desain instruksional yang disusun secara berkelompok pada Topik 4, yaitu Model Pembelajaran dalam Pembelajaran Daring dan Bauran. Artefak ini dipilih sebagai pendukung refleksi karena membantu memperdalam pemahaman mengenai karakteristik, prinsip, dan langkah-langkah berbagai model pembelajaran untuk diterapkan sesuai kebutuhan. Studi kasus yang dibahas adalah pelaksanaan Project-Based Learning secara daring yang menghadapi kendala komunikasi dan kerja sama kelompok akibat perbedaan jadwal, motivasi, dan keterbatasan platform.\n Melalui kegiatan ini, kelompok menyusun tabel perbandingan model pembelajaran dan draft desain instruksional sebagai dasar untuk menganalisis serta merancang solusi terhadap permasalahan tersebut. Proses ini memberikan pemahaman bahwa pemilihan model pembelajaran perlu mempertimbangkan karakteristik peserta didik, tujuan pembelajaran, ketersediaan teknologi, dan kebutuhan interaksi selama pengerjaan proyek. Selain itu, LMS perlu dimanfaatkan secara terarah untuk mendukung pembagian tugas, komunikasi, pemantauan kemajuan, dan evaluasi kontribusi setiap anggota kelompok.\n Artefak ini menjadi bukti pengembangan kemampuan berpikir kritis dalam menghubungkan teori pembelajaran dengan permasalahan nyata. Dari proses penyusunannya, diperoleh pemahaman bahwa keberhasilan pembelajaran daring dan bauran tidak hanya bergantung pada model yang digunakan, tetapi juga pada rancangan aktivitas dan strategi pelaksanaannya. Pemahaman tersebut menjadi bekal untuk merancang pembelajaran yang lebih adaptif, mendorong kolaborasi, dan memberikan kesempatan kepada setiap peserta didik untuk berpartisipasi aktif dalam mencapai tujuan pembelajaran.",
           pdfLink: "/images/4.C-Diskusi-Pemacahan Masalah-Membuat-Tabel-Perbandingan-Model-Pembelajaran.pdf",
            pdfName: "4.C-Diskusi-Pemacahan Masalah-Membuat-Tabel-Perbandingan-Model-Pembelajaran.pdf",
          },
        ]}
      />

      {/* Modal Zoom Gambar */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col"
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                    Pengajaran dan Pembelajaran Daring dan Bauran
                  </h3>
                </div>
                <button
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-1.5 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Gambar Modal */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-900/5">
                <img
                  src="/images/ppdb.png"
                  alt="Reflection Practice Full"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};