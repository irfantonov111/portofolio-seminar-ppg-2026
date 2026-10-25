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

export const RefleksiPK= () => {
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
                Refleksi Projek Kepemimpinan
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
            Mata kuliah Projek Kepemimpinan memberikan pengalaman bagi saya sebagai calon guru untuk mengembangkan kemampuan kepemimpinan, kolaborasi, komunikasi, dan pemecahan masalah melalui perencanaan serta pelaksanaan projek. Saya belajar bahwa seorang guru profesional tidak hanya berperan dalam pembelajaran, tetapi juga perlu memiliki visi yang jelas, mampu mengambil keputusan, dan bekerja sama untuk mencapai tujuan bersama.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
              
               Pengalaman yang paling berkesan adalah implementasi dan manajemen projek bersama empat anggota kelompok lainnya. Dalam proses tersebut, saya belajar mengatur pembagian tugas, menjaga koordinasi, dan menyelesaikan projek sesuai timeline serta target fungsi sistem yang direncanakan. Tantangan dalam pencapaian target, evaluasi hasil, dan keberlanjutan projek menyadarkan saya akan pentingnya perencanaan yang realistis, komunikasi yang efektif, dan pola pikir bertumbuh (growth mindset).
              </p>
<br />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
              Melalui mata kuliah ini, saya ingin menjadi guru yang lebih proaktif, bertanggung jawab, dan terbuka terhadap masukan. Saya juga berkomitmen untuk menerapkan kemampuan kolaborasi, manajemen waktu, evaluasi, dan refleksi dalam kegiatan pembelajaran maupun pengembangan program sekolah. Dengan demikian, pengalaman projek kepemimpinan menjadi bekal untuk membangun profesionalisme dan berkontribusi secara berkelanjutan dalam dunia pendidikan.
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
                src="/images/pmad.png"
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
                    <p>
                   Mata kuliah Projek Kepemimpinan memberikan pemahaman kepada saya bahwa menjadi guru profesional tidak hanya berkaitan dengan kemampuan mengajar, tetapi juga kemampuan memimpin, berkolaborasi, mengambil keputusan, dan menyelesaikan permasalahan. Melalui materi visi dan misi guru profesional, saya diajak merefleksikan sosok guru yang ingin saya wujudkan, yaitu guru yang mampu menjadi teladan, terbuka terhadap perubahan, serta berorientasi pada kebutuhan peserta didik. Pemahaman ini berkaitan erat dengan peran saya sebagai calon guru karena lingkungan pendidikan membutuhkan pendidik yang tidak hanya menjalankan tugas pembelajaran, tetapi juga mampu berinisiatif dan berkontribusi dalam menciptakan perubahan positif di sekolah.
                    </p>
                    <br />
                    <p>
                     Keterkaitan tersebut semakin nyata ketika saya terlibat dalam perencanaan dan pelaksanaan projek kepemimpinan. Saya belajar bahwa kemampuan mengidentifikasi masalah, menyusun strategi, membagi tanggung jawab, mengelola waktu, dan mengevaluasi hasil merupakan kompetensi yang juga diperlukan dalam menjalankan tugas guru. Dalam praktiknya, guru perlu berkolaborasi dengan rekan sejawat, peserta didik, dan pihak lain untuk mencapai tujuan pendidikan. Oleh karena itu, pengalaman dalam projek kepemimpinan menjadi bekal bagi saya untuk mengembangkan kemampuan bekerja sama, berkomunikasi, dan mengambil keputusan secara bertanggung jawab sebagai calon guru.
                    </p>
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
                    <p>
                    Konsep utama yang saya pelajari dalam mata kuliah ini meliputi visi guru profesional, pola pikir bertumbuh (growth mindset), perencanaan projek, kepemimpinan kolaboratif, manajemen waktu, pemecahan masalah, serta evaluasi dan keberlanjutan projek. Melalui materi tersebut, saya memahami bahwa kepemimpinan bukan sekadar kemampuan mengarahkan orang lain, melainkan kesediaan mengambil tanggung jawab, mendengarkan perspektif yang berbeda, membangun kesepakatan, dan mencari solusi ketika menghadapi hambatan. Saya juga belajar bahwa perencanaan yang baik perlu mempertimbangkan tujuan, sumber daya, anggaran, pembagian peran, dan jadwal yang realistis. Sementara itu, evaluasi diperlukan untuk mengetahui ketercapaian target, mengidentifikasi kekurangan, dan menentukan perbaikan yang dapat dilakukan.
                    </p>
                    <br />
                    <p>
                    Materi yang paling berkesan bagi saya adalah Topik 3, Implementasi dan Manajemen Projek. Dalam topik ini, saya memperoleh pengalaman langsung bekerja sama dan berkolaborasi dengan empat anggota kelompok lainnya untuk menyelesaikan projek kepemimpinan. Proses tersebut mengajarkan saya pentingnya komunikasi yang terbuka, pembagian tugas yang jelas, saling membantu, dan menjaga komitmen terhadap tujuan bersama. Saya juga menyadari bahwa setiap anggota memiliki cara kerja dan pertimbangan yang berbeda sehingga diperlukan sikap saling menghargai dan kemampuan menyatukan berbagai pendapat. Pengalaman ini memberikan pemahaman bahwa keberhasilan sebuah projek tidak hanya ditentukan oleh kemampuan individu, tetapi juga oleh kualitas kerja sama tim, kemampuan mengatasi hambatan, dan konsistensi dalam mencapai tujuan yang telah disepakati.
                    </p>
                    <br />
                   
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
                    <p>
                   
                    Tantangan utama yang saya hadapi dalam mata kuliah Projek Kepemimpinan adalah menerapkan konsep perencanaan dan manajemen projek ke dalam pelaksanaan kegiatan yang nyata. Dalam perkuliahan, penyusunan jadwal, pembagian tugas, penentuan target, dan perencanaan sumber daya dapat dirancang secara sistematis. Namun, ketika projek dilaksanakan bersama kelompok yang terdiri dari lima orang, diperlukan koordinasi dan komunikasi yang konsisten agar setiap anggota dapat menjalankan tanggung jawabnya sesuai dengan kesepakatan. Menyelesaikan projek tepat waktu sesuai timeline yang telah dibuat menjadi tantangan tersendiri, terutama ketika terdapat pekerjaan yang saling bergantung dan membutuhkan penyesuaian selama proses pelaksanaan.
                    </p>
                    <br />
                    <p>
                  Tantangan lainnya adalah memastikan sistem yang dikembangkan dapat berfungsi sesuai target yang direncanakan, termasuk memenuhi fitur-fitur yang telah ditentukan. Saya menyadari bahwa keberhasilan projek tidak cukup diukur dari selesainya produk, tetapi juga dari kesesuaian hasil dengan kebutuhan, kualitas fungsi sistem, dan manfaat yang dapat diberikan. Selain itu, evaluasi dan keberlanjutan projek membutuhkan perhatian agar hasil yang telah dicapai tidak berhenti setelah kegiatan selesai. Hal ini memberikan pemahaman bahwa terdapat perbedaan antara perencanaan di atas kertas dan pelaksanaan di lapangan. Konsep yang dipelajari perlu disertai kemampuan beradaptasi, menyelesaikan masalah, dan mengevaluasi keputusan berdasarkan kondisi yang sebenarnya.
                    </p>
                    <br />
                    
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
                    <p>
                   Setelah mengikuti mata kuliah Projek Kepemimpinan, saya ingin mengembangkan diri menjadi calon guru yang lebih proaktif, terorganisasi, dan bertanggung jawab dalam menjalankan tugas. Saya akan membiasakan diri menyusun perencanaan kegiatan dengan tujuan yang jelas, pembagian tanggung jawab yang terukur, serta jadwal yang realistis. Dalam bekerja sama, saya ingin meningkatkan kemampuan berkomunikasi, mendengarkan pendapat orang lain, dan menyelesaikan perbedaan melalui diskusi yang konstruktif. Saya juga ingin menerapkan growth mindset dengan memandang kesulitan dan kesalahan sebagai kesempatan untuk belajar, bukan sebagai alasan untuk berhenti atau menghindari tanggung jawab. Dengan demikian, saya dapat menghadapi perubahan dan tantangan secara lebih terbuka serta berorientasi pada solusi.
                    </p>
                    <br />
                    <p>
                    
                    Selain itu, saya ingin membiasakan diri mengevaluasi setiap kegiatan berdasarkan hasil yang dicapai, kendala yang muncul, dan manfaat yang dihasilkan. Dalam konteks profesi guru, kemampuan tersebut akan saya terapkan ketika merancang program pembelajaran, berkolaborasi dengan rekan sejawat, dan terlibat dalam kegiatan pengembangan sekolah. Saya juga akan memperhatikan keberlanjutan setiap program agar kegiatan yang dilaksanakan tidak hanya berhasil dalam jangka pendek, tetapi dapat memberikan manfaat dalam jangka panjang. Melalui pengalaman ini, saya memahami bahwa kepemimpinan merupakan proses belajar yang berkelanjutan. Saya ingin menjadi guru yang tidak hanya mampu memimpin melalui arahan, tetapi juga melalui keteladanan, kolaborasi, komitmen, dan kesediaan untuk terus memperbaiki diri demi mendukung kemajuan pendidikan.
                    </p>
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
            title: "Artefak 1: Proposal Projek Kepemimpinan",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/Proposal-Projek-Kepemimpinan-Edupath.pdf",
          },
          {
            title: "Artefak 2 : Laporan Akhir Projek Kepemimpinan",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/laporan-akhir-projek-kepemimpinan.pdf",
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
            title: "Artefak 1:Proposal Projek Kepemimpinan",
            alasan:
           "Artefak 1 yang saya pilih sebagai bukti pendukung refleksi mata kuliah Projek Kepemimpinan adalah laporan proposal EduPath, yaitu sistem peminatan mata pelajaran dan penjurusan kelas di SMA Negeri 3 Salatiga. Proposal ini mencakup BAB I Pendahuluan, BAB II Tinjauan Pustaka, BAB III Metodologi Penelitian, Daftar Pustaka, Penutup, dan Lampiran. Artefak ini dipilih karena menunjukkan proses perencanaan projek secara sistematis, mulai dari mengidentifikasi permasalahan pendidikan, mengkaji landasan teori, hingga merancang metode pelaksanaan dan solusi yang sesuai dengan kebutuhan sekolah. Penyusunan proposal juga melatih saya dalam berpikir kritis, menetapkan tujuan, serta mempertimbangkan aspek teknis dan kebutuhan pengguna sebelum projek diimplementasikan.\n Artefak ini relevan dengan refleksi mata kuliah Projek Kepemimpinan karena mencerminkan penerapan kemampuan perencanaan, pemecahan masalah, dan kolaborasi dalam mengembangkan solusi di bidang pendidikan. Melalui penyusunan proposal EduPath, saya belajar bahwa sebuah projek tidak cukup hanya berangkat dari ide, tetapi perlu didukung oleh analisis kebutuhan, landasan yang jelas, dan perencanaan yang dapat dipertanggungjawabkan. Pengalaman ini menjadi bekal bagi saya sebagai calon guru untuk mengembangkan inisiatif, bekerja sama dengan pihak lain, dan merancang program yang berorientasi pada kebutuhan sekolah serta memberikan manfaat berkelanjutan bagi peserta didik.",
           pdfLink: "/images/Proposal-Projek-Kepemimpinan-Edupath.pdf",
            pdfName: "Proposal-Projek-Kepemimpinan-Edupath.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : Laporan Akhir Projek Kepemimpinan",
            alasan:
            "Artefak 2 yang saya pilih sebagai bukti pendukung refleksi mata kuliah Projek Kepemimpinan adalah laporan akhir EduPath, yaitu sistem peminatan mata pelajaran dan penjurusan kelas di SMA Negeri 3 Salatiga. Laporan ini mencakup BAB I Pendahuluan, BAB II Tinjauan Pustaka, BAB III Metodologi Penelitian, BAB IV Hasil dan Pembahasan, BAB V Refleksi Kepemimpinan, BAB VI Evaluasi dan Keberlanjutan, BAB VII Penutup, Daftar Pustaka, dan Lampiran. Artefak ini dipilih karena mendokumentasikan keseluruhan proses projek, mulai dari identifikasi permasalahan pendidikan, perencanaan solusi, implementasi sistem, hingga evaluasi hasil. Dengan demikian, laporan ini menjadi bukti konkret keterlibatan saya dalam mengembangkan solusi yang berangkat dari kebutuhan sekolah.\n Artefak ini relevan dengan refleksi mata kuliah Projek Kepemimpinan karena menunjukkan penerapan kemampuan perencanaan, kolaborasi, koordinasi, pemecahan masalah, dan evaluasi selama pelaksanaan projek. Melalui pengembangan EduPath, saya belajar bahwa keberhasilan projek tidak hanya ditentukan oleh terselesaikannya sistem sesuai target, tetapi juga oleh kesesuaian fungsi dengan kebutuhan pengguna serta pertimbangan keberlanjutan setelah projek berakhir. Bagian refleksi kepemimpinan dan evaluasi keberlanjutan membantu saya mengidentifikasi pembelajaran yang diperoleh, kekurangan yang perlu diperbaiki, dan peluang pengembangan sistem. Pengalaman ini menjadi bekal bagi saya sebagai calon guru untuk mengembangkan sikap kepemimpinan yang bertanggung jawab, reflektif, dan berorientasi pada solusi bagi kebutuhan pendidikan.",
            pdfLink: "/images/laporan-akhir-projek-kepemimpinan.pdf",
            pdfName: "laporan-akhir-projek-kepemimpinan.pdf",
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
                    Praktik Pengalaman Lapangan Mandiri
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
                  src="/images/pmad.png"
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
