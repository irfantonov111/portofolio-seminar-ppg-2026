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

export const PemahamanPeserta = () => {
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
                Refleksi Pemahaman Peserta Didik dan Pembelajaran
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Setelah mempelajari Pemahaman Tentang Peserta Didik dan
                Pembelajaran serta mengaitkannya dengan pengalaman selama PPL di
                SMK N 2 Salatiga, saya semakin memahami bahwa guru tidak hanya
                memiliki kompetensi dalam hal penguasaan materi saja, tetapi
                juga perlu memahami karakteristik dan cara belajar peserta
                didik. Pengalaman selama PPL membuat saya menyadari bahwa
                peserta didik dalam satu kelas memiliki cara memahami materi
                yang berbeda, sehingga pembelajaran tidak dapat dilakukan dengan
                cara yang sama untuk semua peserta didik.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Saya juga menyadari bahwa profiling peserta didik menjadi bagian
                penting dalam merancang pembelajaran. Sebelumnya, saya belum
                terbiasa melakukan asesmen awal dan profiling, sehingga lebih
                banyak berfokus pada materi dan kegiatan yang akan disampaikan.
                Selama PPL, saya melihat bahwa ada peserta didik yang lebih
                mudah memahami melalui penjelasan, ada yang membutuhkan contoh
                atau gambar, dan ada yang lebih mudah memahami ketika langsung
                melakukan praktik. Hal tersebut membuat saya memahami pentingnya
                mengenali karakteristik peserta didik sebelum menentukan cara
                mengajar.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Ke depan, saya ingin lebih membiasakan diri melakukan asesmen
                awal dan profiling peserta didik sebelum merancang pembelajaran.
                Saya juga ingin menyesuaikan tempo penyampaian materi,
                menggunakan aktivitas yang beragam, serta memberikan
                pendampingan sesuai kebutuhan peserta didik. Dengan demikian,
                pembelajaran yang saya lakukan diharapkan lebih sesuai dengan
                kondisi peserta didik dan memberikan ruang bagi mereka untuk
                belajar secara aktif dan mandiri.
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
                src="/images/ppdp.png"
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
                      Mata kuliah Pemahaman Tentang Peserta Didik dan
                      Pembelajaran menguatkan pemahaman saya bahwa guru tidak
                      hanya berperan dalam menyampaikan materi, tetapi juga
                      perlu memahami kondisi peserta didik agar dapat merancang
                      pembelajaran yang sesuai. Sebagai lulusan Sarjana Ilmu
                      Komputer, Program Studi Sistem Informasi, pengalaman saya
                      sebelumnya sebagai asisten praktikum lebih banyak berfokus
                      pada membuat materi, modul, dan demonstrasi tanpa
                      melakukan asesmen awal maupun profiling peserta didik.
                    </p>
                    <br />
                    <p>
                      Hal ini saya sadari ketika menjalani PPL. Dalam satu
                      kelas, terdapat peserta didik yang dapat mengikuti praktik
                      dengan cepat, sementara peserta didik lainnya membutuhkan
                      penjelasan dan pendampingan lebih. Pengalaman tersebut
                      membuat saya memahami bahwa pembelajaran perlu disesuaikan
                      dengan kondisi peserta didik, bukan hanya berdasarkan
                      materi yang telah saya siapkan.
                    </p>
                    <br />
                    <p>
                      Sebagai calon guru, saya harus mengenali peran dan
                      tanggungjawab seorang guru untuk:
                    </p>

                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        Mengetahui kemampuan awal dan karakteristik peserta
                        didik.
                      </li>
                      <li>
                        Melakukan asesmen awal dan profiling sebagai dasar
                        pembelajaran.
                      </li>
                      <li>
                        Merancang pembelajaran sesuai kebutuhan dan kemampuan
                        peserta didik.
                      </li>
                      <li>
                        Memberikan bantuan secara bertahap sesuai kesulitan yang
                        dihadapi peserta didik.
                      </li>
                      <li>
                        Mengevaluasi pembelajaran berdasarkan perkembangan
                        peserta didik.
                      </li>
                    </ol>
                    <p>
                      Dari Mata Kuliah ini, mengubah paradigma saya bahwa peran
                      guru hanya sekedar menyampaikan materi menjadi sebagai
                      seorang calon guru yang mampu memahami karakteristik
                      peserta didik, mulai dari gaya belajar, kemampuan
                      kognitif, motorik, bahasa, sosial, dan emosional.
                    </p>
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
                      Materi yang paling berkesan adalah Profiling Peserta
                      Didik. Sebelumnya, saya belum terlalu memikirkan bahwa
                      pemahaman dan kemampuan peserta didik dalam satu kelas
                      bisa sangat beragam. Saya cenderung menganggap peserta
                      didik akan dapat mengikuti materi dengan cara dan
                      kecepatan yang kurang lebih sama.
                    </p>
                    <br />
                    <p>
                      Hal ini saya sadari saat menngajar kelas X TKJ A, pada
                      saat Praktikum Instalasi Sistem Operasi Windows. Pada saat
                      praktikum ada peserta didik yang lebih mudah memahami
                      melalui penjelasan, ada yang lebih terbantu dengan melihat
                      contoh atau gambar, dan ada yang lebih mudah memahami
                      ketika langsung melakukan praktik. Dari pengalaman
                      tersebut, saya memahami bahwa rancangan pembelajaran perlu
                      memfasilitasi berbagai gaya belajar peserta didik, seperti
                      auditori, visual, dan kinestetik.
                    </p>
                    <br />
                    <p>
                      Dari pengalaman mengajar tersebut, saya memahami bahwa
                      profiling peserta didik sangat penting untuk dilakukan
                      sebelum merancang dan membuat modul ajar. Selain itu
                      Profiling juga sangat membantu dalam mengenali perbedaan
                      kemampuan peserta didik dan menentukan pembelajaran yang
                      sesuai.
                    </p>
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
                      Tantangan yang saya temui adalah menyesuaikan cara
                      mengajar dengan kemampuan dan kebutuhan peserta didik.
                      Sebagai lulusan Program Studi Sistem Informasi, pengalaman
                      saya sebagai asisten praktikum membuat saya terbiasa
                      menyiapkan modul, menjelaskan materi, memberikan
                      demonstrasi, dan membantu ketika peserta didik mengalami
                      kesulitan. Saya juga belum terbiasa melakukan asesmen awal
                      dan profiling, serta terkadang menyampaikan materi terlalu
                      cepat karena menggunakan pemahaman dan kecepatan belajar
                      saya sendiri sebagai acuan.
                    </p>
                    <br />
                    <p>
                      Hal tersebut saya rasakan ketika mengajar kelas X TKJ A.
                      Saya menemukan bahwa kemampuan peserta didik dalam
                      memahami materi tidak sama, sehingga ada yang dapat
                      mengikuti penjelasan dengan cepat dan ada yang membutuhkan
                      waktu lebih lama. Ketika peserta didik mengalami kesulitan
                      saat praktikum, saya terkadang masih cenderung langsung
                      memberikan tutorial atau menunjukkan cara
                      menyelesaikannya, padahal seharusnya saya dapat memberikan
                      petunjuk secara bertahap agar mereka memiliki kesempatan
                      untuk berpikir dan mencoba sendiri.
                    </p>
                    <br />
                    <p>
                      Sebagai calon guru, saya perlu membangun kebiasaan untuk:
                    </p>

                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Menyesuaikan : </strong>Mengatur kecepatan
                        penyampaian materi sesuai kemampuan peserta didik.
                      </li>
                      <li>
                        <strong>Memprofilkan : </strong>Menggunakan hasil
                        asesmen dan pengamatan sebagai dasar pembelajaran.
                      </li>
                      <li>
                        <strong>Membimbing: : </strong>Memberikan scaffolding
                        secara bertahap melalui pertanyaan atau petunjuk sebelum
                        memberikan solusi.
                      </li>
                      <li>
                        <strong>Memberi kesempatan : </strong>Memberikan
                        kesempatan peserta didik mencoba dan menemukan solusi
                        sendiri.
                      </li>
                      <li>
                        <strong>Merefleksikan : </strong>Melihat kembali apakah
                        cara mengajar saya sudah membantu peserta didik memahami
                        materi.
                      </li>
                    </ol>
                    <p>
                      Dengan demikian, tantangan bagi saya adalah mengubah
                      kebiasaan mengajar berdasarkan cara dan kecepatan belajar
                      saya sendiri menjadi pembelajaran yang lebih menyesuaikan
                      kemampuan peserta didik serta memberi mereka ruang untuk
                      belajar secara mandiri.
                    </p>
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
                      Dari Mata Kuliah ini, saya ingin mengubah cara saya dalam
                      merancang dan melaksanakan pembelajaran. Sebelumnya, saya
                      lebih banyak berfokus pada materi yang akan disampaikan,
                      sedangkan ke depannya saya ingin lebih memperhatikan cara
                      belajar dan kebutuhan peserta didik. Saya juga ingin
                      mengurangi kebiasaan menyampaikan materi terlalu cepat dan
                      langsung memberikan solusi ketika peserta didik mengalami
                      kesulitan.
                    </p>
                    <br />
                    <p>
                      Perubahan-perubahan yang akan saya terapkan ke depannya
                      adalah menggunakan asesmen awal dan profiling untuk
                      mengetahui karakteristik peserta didik, kemudian
                      menyesuaikan cara penyampaian, aktivitas, dan
                      pendampingan. Saat praktikum, saya juga akan lebih banyak
                      memberikan pertanyaan atau petunjuk terlebih dahulu agar
                      peserta didik dapat mencoba menyelesaikan masalah sebelum
                      saya memberikan solusi.
                    </p>
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
            title:
              "Artefak 1: 4.A. Eksplorasi Masalah dalam Profiling Peserta Didik",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/PPDP-4A.pdf",
          },
          {
            title: "Artefak 2 : 4.B. Profiling Peserta Didik",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/PPDP-4B.pdf",
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
            title:
              "Artefak 1: 4.A. Eksplorasi Masalah dalam Profiling Peserta Didik",
            alasan:
              "Artefak 4A Eksplorasi Masalah dalam Profiling Peserta Didik dipilih karena kegiatan ini menjadi langkah awal untuk memahami peserta didik secara lebih mendalam. Melalui tugas ini dilakukan profiling untuk mengetahui karakteristik peserta didik, kebutuhan belajar, dan gaya belajar di kelas. Dari proses tersebut terlihat bahwa peserta didik dalam satu kelas memiliki kondisi dan cara belajar yang beragam.\n Kegiatan ini memberikan pemahaman bahwa pembelajaran tidak cukup hanya berfokus pada materi yang akan disampaikan. Guru juga perlu mengetahui kondisi peserta didik agar dapat menentukan pembelajaran yang sesuai. Hal ini menjadi pengalaman penting karena sebelumnya profiling belum menjadi bagian dari kebiasaan dalam menyiapkan pembelajaran.\n Artefak ini dipilih karena menunjukkan proses awal dalam mengenali dan memahami peserta didik sebagai dasar untuk menentukan pembelajaran yang sesuai.",
            pdfLink: "/images/PPDP-4A.pdf",
            pdfName: "PPDP-4A.pdf",
          },
          {
            no: 2,
            title: "Artefak 2: Analisis 4C & Refleksi Pergeseran Nilai Siswa",
            alasan:
              "Artefak 4B Profiling Peserta Didik dipilih karena menunjukkan tindak lanjut dari proses profiling yang telah dilakukan. Hasil pemetaan mengenai karakteristik, kebutuhan belajar, dan gaya belajar peserta didik digunakan untuk membuat rekomendasi desain pembelajaran yang lebih sesuai dengan kondisi kelas.\n Artefak ini memberikan pemahaman bahwa profiling tidak berhenti pada kegiatan mengenali peserta didik. Hasilnya perlu digunakan sebagai pertimbangan dalam menentukan cara menyampaikan materi, aktivitas, media, dan pendampingan yang diberikan. Dengan begitu, pembelajaran dapat lebih sesuai dengan kondisi peserta didik dan tidak hanya berdasarkan asumsi guru.\n Artefak ini dipilih karena menunjukkan hubungan antara hasil profiling dengan perencanaan pembelajaran, sekaligus menggambarkan proses belajar untuk mulai merancang pembelajaran berdasarkan kebutuhan peserta didik.",

            pdfLink: "/images/PPDP-4B.pdf",
            pdfName: "PPDP-4B.pdf",
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
                    Pemahaman Peserta Didik dan Pembelajaran
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
                  src="/images/ppdp.png"
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
