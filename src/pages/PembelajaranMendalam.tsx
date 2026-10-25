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

export const PembelajaranMendalam = () => {
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
                Refleksi Pembelajaran Mendalam dan Asesmen Dasar
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Setelah mempelajari Pembelajaran Mendalam dan Asesmen Dasar
                serta mengaitkannya dengan pengalaman selama PPL, semakin
                dipahami bahwa pembelajaran tidak hanya tentang menyampaikan
                materi dan menyelesaikan praktik. Pembelajaran perlu dirancang
                agar peserta didik dapat belajar secara berkesadaran, bermakna,
                dan menggembirakan. Hal ini menjadi penting dalam pembelajaran
                DPK dan KK karena peserta didik tidak hanya perlu menguasai
                langkah kerja, tetapi juga memahami konsep dan mampu
                menerapkannya dalam situasi yang relevan.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Sebelumnya, pengalaman mengajar lebih banyak berfokus pada
                pembuatan materi, modul, demonstrasi, dan membantu peserta didik
                menyelesaikan praktik. Melalui perkuliahan ini, terlihat adanya
                perbedaan antara kebiasaan tersebut dengan prinsip Pembelajaran
                Mendalam. Peserta didik perlu diberikan ruang untuk berpikir,
                mencoba, memecahkan masalah, dan merefleksikan proses
                belajarnya. Asesmen juga tidak hanya digunakan untuk menilai
                hasil akhir, tetapi menjadi bagian dari proses untuk mengetahui
                perkembangan peserta didik dan menentukan tindak lanjut
                pembelajaran.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Pemahaman tersebut menjadi dasar untuk melakukan perubahan dalam
                praktik pembelajaran ke depan. Perencanaan perlu lebih
                mempertimbangkan kebutuhan peserta didik, pelaksanaan memberikan
                ruang untuk aktif mencoba dan berpikir, sedangkan asesmen dan
                refleksi digunakan untuk melihat perkembangan serta memperbaiki
                pembelajaran berikutnya. Dengan demikian, perubahan yang ingin
                dibangun adalah dari pembelajaran yang berfokus pada penyampaian
                materi dan penyelesaian tugas menuju pembelajaran yang mendorong
                pemahaman, penerapan, dan pengalaman belajar yang lebih bermakna
                bagi peserta didik.
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
                      Mata kuliah Pembelajaran Mendalam dan Asesmen Dasar
                      memiliki keterkaitan yang kuat dengan peran sebagai calon
                      guru karena memberikan pemahaman tentang bagaimana
                      pembelajaran dirancang, dilaksanakan, dan dievaluasi
                      berdasarkan kebutuhan peserta didik. Pembelajaran tidak
                      hanya diarahkan agar materi tersampaikan, tetapi juga agar
                      peserta didik dapat belajar secara berkesadaran, bermakna,
                      dan menggembirakan. Pemahaman ini menjadi penting dalam
                      membangun kemampuan pedagogik, terutama karena latar
                      belakang sebelumnya bukan dari bidang pendidikan.
                    </p>
                    <br />
                    <p>
                      Selama PPL saya mengajar pada Mata Pelajaran Dasar Program
                      Keahlian (DPK) dan Konsentrasi Keahlian (KK), pemahaman
                      tersebut dapat diterapkan dalam kegiatan pembelajaran yang
                      banyak melibatkan praktik. Peserta didik tidak hanya perlu
                      mengikuti langkah kerja, tetapi juga memahami konsep,
                      mencoba, memecahkan masalah, dan menghubungkan materi
                      dengan situasi yang mereka temui. Dalam hal ini, guru
                      perlu merancang pengalaman belajar yang mendorong peserta
                      didik untuk aktif membangun pemahamannya, sekaligus
                      menggunakan asesmen untuk melihat perkembangan belajar dan
                      menentukan tindak lanjut.
                    </p>
                    <br />
                    <p>Sebagai calon guru, materi ini menjadi dasar untuk:</p>

                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        Merancang pembelajaran yang tidak hanya menyampaikan
                        materi secara teori saja, namun bagaimana merancang dan
                        mendesain pembelajaran yang dapat menerapkan Konsep
                        Bermakna, Berkesadaran dan Menggembirakan. Peserta Didik
                        diajak untuk memahami konsep materi, tidak sekedar
                        menghafal saja. Yang kemudian peserta didik dapat
                        mengaplikasikan konsep tersebut secara nyata.
                      </li>
                      <li>
                        Menggunakan asesmen formatif dan sumatif untuk
                        mengetahui proses dan ketercapaian hasil belajar peserta
                        didik.
                      </li>
                      <li>
                        Melakukan refleksi terhadap proses pembelajaran yang
                        telah dilaksanakan.
                      </li>
                      <li>
                        Menentukan tindak lanjut berdasarkan hasil asesmen dan
                        refleksi.
                      </li>
                    </ol>
                    <p>
                      Materi Pembelajaran Mendalam dan Asesmen Dasar membantu
                      membangun pemahaman bahwa peran guru bukan hanya
                      menyampaikan materi, tetapi merancang, mendampingi,
                      menilai, dan memperbaiki proses belajar agar peserta didik
                      dapat berkembang sesuai kebutuhan dan kompetensinya.
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
                      Materi yang paling berkesan adalah Pendekatan Pembelajaran
                      Mendalam. Melalui materi ini, mulai terbentuk pemahaman
                      tentang apa yang dimaksud dengan Deep Learning atau
                      Pembelajaran Mendalam dalam konteks pendidikan, serta
                      perbedaannya dengan Surface Learning atau Pembelajaran
                      Dangkal. Sebelumnya, pembelajaran lebih mudah dipahami
                      sebagai proses menyampaikan materi dan memastikan peserta
                      didik dapat menyelesaikan tugas. Setelah mempelajari
                      materi ini, dipahami bahwa pembelajaran yang mendalam
                      tidak hanya mengejar penyelesaian materi, tetapi mendorong
                      peserta didik untuk memahami konsep, menghubungkan
                      pengetahuan, menerapkan dalam situasi yang relevan, dan
                      merefleksikan proses belajarnya.
                    </p>
                    <br />
                    <p>
                      Beberapa konsep penting yang dipelajari juga saling
                      berkaitan dalam membangun pembelajaran yang mendalam,
                      mulai dari perencanaan, implementasi, asesmen, refleksi,
                      hingga tindak lanjut. Perencanaan perlu disusun dengan
                      tujuan yang jelas dan mempertimbangkan pengalaman belajar
                      peserta didik. Dalam pelaksanaannya, peserta didik perlu
                      diberi ruang untuk aktif berpikir, mencoba, berdiskusi,
                      memecahkan masalah, dan menghubungkan materi dengan
                      konteks nyata. Asesmen kemudian digunakan untuk melihat
                      proses dan perkembangan belajar, bukan hanya hasil akhir.
                    </p>
                    <br />
                    <p>
                      Sebagai calon guru, pemahaman tersebut menjadi penting
                      karena pembelajaran mendalam menempatkan peserta didik
                      sebagai bagian aktif dalam proses belajar. Guru tidak
                      hanya berperan menyampaikan materi, tetapi juga merancang
                      pengalaman belajar yang membantu peserta didik membangun
                      pemahaman secara utuh.
                    </p>
                    <br />
                    <p>Konsep utama yang menjadi pegangan adalah:</p>
                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Pembelajaran Mendalam : </strong> Mendorong
                        pemahaman yang lebih utuh, bermakna, dan tidak berhenti
                        pada hafalan.
                      </li>
                      <li>
                        <strong>Pembelajaran Dangkal : </strong> Lebih berfokus
                        pada mengingat informasi atau menyelesaikan tugas tanpa
                        pemahaman yang mendalam.
                      </li>
                      <li>
                        <strong>Perencanaan : </strong> Menentukan pengalaman
                        belajar yang dapat mengarahkan peserta didik pada
                        pemahaman yang bermakna.
                      </li>
                      <li>
                        <strong>Asesmen : </strong> Digunakan untuk melihat
                        proses dan perkembangan belajar peserta didik.
                      </li>
                      <li>
                        <strong>Refleksi dan Tindak Lanjut: </strong> Digunakan
                        untuk mengetahui bagian yang perlu dipertahankan atau
                        diperbaiki dalam pembelajaran.
                      </li>
                    </ol>
                    <p>
                      Dari materi tersebut, pemahaman yang paling penting adalah
                      bahwa pembelajaran yang baik bukan hanya tentang seberapa
                      banyak materi yang dapat disampaikan, tetapi seberapa
                      dalam peserta didik memahami dan dapat menggunakan apa
                      yang telah dipelajari.
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
                      Tantangan yang muncul adalah menyesuaikan praktik
                      pembelajaran dengan prinsip Pembelajaran Mendalam dan
                      asesmen yang dipelajari dalam perkuliahan. Selama PPL pada
                      pembelajaran DPK dan KK, kegiatan pembelajaran masih lebih
                      banyak berfokus pada penyampaian materi, pemberian contoh,
                      demonstrasi, dan penyelesaian praktik. Setelah mempelajari
                      Pembelajaran Mendalam, terlihat bahwa proses tersebut
                      perlu dikembangkan agar peserta didik tidak hanya
                      menyelesaikan tugas, tetapi juga memahami, mengalami, dan
                      memaknai proses belajarnya.
                    </p>
                    <br />
                    <p>
                      Perbedaan lainnya terlihat dalam proses perencanaan dan
                      asesmen. Sebelumnya, perencanaan lebih banyak berangkat
                      dari materi dan kegiatan yang akan dilakukan. Sementara
                      itu, Pembelajaran Mendalam menekankan pentingnya merancang
                      pembelajaran berdasarkan tujuan, kondisi peserta didik,
                      aktivitas belajar, serta asesmen yang dilakukan secara
                      berkelanjutan. Asesmen tidak hanya digunakan untuk melihat
                      hasil akhir, tetapi juga untuk mengetahui perkembangan
                      peserta didik dan menentukan tindak lanjut pembelajaran.
                    </p>
                    <br />
                    <p>
                      Dalam pelaksanaan PPL, tantangan juga muncul ketika
                      peserta didik mengalami kesulitan saat praktik. Terkadang
                      bantuan diberikan secara langsung agar kegiatan dapat
                      segera dilanjutkan. Padahal, pembelajaran mendalam
                      mendorong guru untuk memberikan kesempatan kepada peserta
                      didik untuk mencoba, menemukan kesalahan, dan mencari
                      solusi dengan pendampingan yang sesuai.
                    </p>
                    <br />
                    <p>
                      Hal tersebut menjadi tantangan untuk membangun kebiasaan
                      baru sebagai calon guru, yaitu:
                    </p>
                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        Merancang pembelajaran tidak hanya berdasarkan materi,
                        tetapi juga pengalaman belajar yang ingin dibangun.
                      </li>
                      <li>
                        Menggunakan asesmen sejak awal, selama proses, dan
                        setelah pembelajaran.
                      </li>
                      <li>
                        Memberikan pendampingan secara bertahap agar peserta
                        didik tetap memiliki ruang untuk berpikir dan mencoba.
                      </li>
                      <li>
                        Melakukan refleksi terhadap proses pembelajaran, bukan
                        hanya melihat hasil akhirnya.
                      </li>
                      <li>
                        Menindaklanjuti hasil asesmen dan refleksi untuk
                        memperbaiki pembelajaran berikutnya.
                      </li>
                    </ol>
                    <p>
                      Dengan demikian, tantangan utamanya adalah mengubah
                      pembelajaran yang sebelumnya berorientasi pada penyampaian
                      materi dan penyelesaian praktik menjadi pembelajaran yang
                      lebih terarah pada proses, pengalaman, pemahaman, dan
                      perkembangan peserta didik.
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
                      Setelah mempelajari Pembelajaran Mendalam dan Asesmen
                      Dasar, perubahan yang ingin dilakukan adalah memperbaiki
                      cara merancang dan melaksanakan pembelajaran. Jika
                      sebelumnya pembelajaran lebih banyak berfokus pada materi,
                      modul, demonstrasi, dan penyelesaian praktik, ke depannya
                      proses pembelajaran perlu lebih diarahkan pada bagaimana
                      peserta didik memahami dan memaknai materi yang
                      dipelajari.
                    </p>
                    <br />
                    <p>
                      Dalam pembelajaran DPK dan KK, penerapan tersebut dapat
                      dilakukan dengan memberikan lebih banyak kesempatan kepada
                      peserta didik untuk berpikir, mencoba, berdiskusi,
                      memecahkan masalah, dan menghubungkan materi dengan
                      situasi yang mereka temui. Asesmen juga tidak hanya
                      digunakan untuk melihat hasil akhir, tetapi dimanfaatkan
                      untuk mengetahui perkembangan peserta didik selama proses
                      pembelajaran dan menentukan tindak lanjut yang sesuai.
                    </p>
                    <br />
                    <p>
                      Beberapa perubahan yang ingin dilakukan sebagai calon guru
                      adalah:
                    </p>
                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Merancang : </strong>Menyusun pembelajaran
                        dengan tujuan dan pengalaman belajar yang jelas.
                      </li>
                      <li>
                        <strong>Mengaitkan : </strong> Menghubungkan materi
                        dengan situasi nyata dan kompetensi yang dibutuhkan
                        peserta didik.
                      </li>
                      <li>
                        <strong>Melibatkan : </strong>memberikan lebih banyak
                        ruang kepada peserta didik untuk aktif dalam proses
                        pembelajaran.
                      </li>
                      <li>
                        <strong>Mendampingi : </strong>eMMmberikan bantuan
                        secara bertahap ketika peserta didik mengalami
                        kesulitan, bukan langsung memberikan solusi.
                      </li>
                      <li>
                        <strong>Menerapkan Asesmen : </strong> Menindaklanjuti
                        hasil asesmen dan refleksi untuk memperbaiki
                        pembelajaran berikutnya.
                      </li>
                      <li>
                        <strong>Merefleksikan : </strong>Melihat kembali proses
                        pembelajaran dan melakukan perbaikan berdasarkan hasil
                        asesmen dan refleksi.
                      </li>
                    </ol>
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
            title: "Artefak 1: 1.C. Galery Walk",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/1.C.Galeri-Walk.pdf",
          },
          {
            title: "Artefak 2 : 1.D.1. Lembar Kerja Mind Map",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/lembar-kerja-1.2-pembelajaran-mendalam.pdf",
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
            title: "Artefak 1: Artefak 1: 1.C. Galery Walk",
            alasan:
              "Artefak Lembar Kerja 1.1 (Galery Walk) dipilih sebagai salah satu pendukung refleksi karena kegiatan ini memberikan pengalaman dalam menganalisis miskonsepsi yang dapat muncul dalam penerapan Pembelajaran Mendalam. Melalui studi kasus tentang pembelajaran siklus air, dilakukan analisis untuk melihat perbedaan antara pembelajaran yang hanya menekankan hafalan dengan pembelajaran yang mendorong peserta didik memahami dan menghubungkan materi dengan kehidupan sehari-hari. Hasil analisis tersebut kemudian dituangkan dalam bentuk poster dan dipresentasikan melalui kegiatan Gallery Walk.\n Artefak ini menjadi penting karena membantu memahami bahwa peserta didik yang mampu menghafal materi belum tentu benar-benar memahami konsep yang dipelajari. Dalam studi kasus tersebut, murid dapat menyebutkan tahapan siklus air, tetapi kesulitan menjelaskan mengapa pakaian dapat kering atau mengapa terdapat titik air pada kaca. Dari kasus tersebut, terlihat bahwa pembelajaran perlu memberikan pengalaman yang membantu peserta didik menghubungkan konsep dengan situasi nyata.\n Pemilihan artefak ini juga berkaitan dengan perubahan cara pandang dalam merancang pembelajaran. Pembelajaran tidak cukup hanya memastikan materi tersampaikan atau tugas dapat diselesaikan, tetapi perlu melihat apakah peserta didik benar-benar memahami dan mampu menerapkan pengetahuannya. Hal tersebut menjadi dasar penting dalam mengembangkan pembelajaran KK (Konsentrasi Keahlian) agar tidak hanya berorientasi pada penyelesaian praktik, tetapi juga pada pemahaman dan penerapan kompetensi.",
            pdfLink: "/images/1.C.Galeri-Walk.pdf",
            pdfName: "1.C.Galeri-Walk.pdf",
          },
          {
            no: 2,
            title: "Artefk 2 : 1.D.1. Lembar Kerja Mind Map",
            alasan:
              "Artefak 1.D.1 Lembar Kerja Mind Map dipilih sebagai pendukung refleksi karena menjadi bukti pemahaman terhadap konsep, prinsip, dan karakteristik Pendekatan Pembelajaran Mendalam setelah mempelajari berbagai studi kasus dan pemaparan materi. Melalui mind map, pemahaman tersebut dirangkum dalam bentuk yang lebih terstruktur, sehingga hubungan antara konsep-konsep dalam Pembelajaran Mendalam dapat terlihat dengan lebih jelas.\n Bagian yang paling penting dalam mind map adalah perbedaan antara Pembelajaran Mendalam dan Surface Learning atau Pembelajaran Dangkal. Dari kegiatan ini, semakin dipahami bahwa pembelajaran tidak hanya dilihat dari kemampuan peserta didik dalam mengingat atau menyelesaikan tugas, tetapi juga dari sejauh mana mereka memahami konsep, menghubungkan pengetahuan dengan konteks, serta mampu menerapkannya dalam situasi yang berbeda.\n Artefak ini dipilih karena memperlihatkan perkembangan pemahaman dari sekadar mengetahui istilah Pembelajaran Mendalam menjadi mampu membedakannya dengan pembelajaran dangkal dan memahami karakteristik masing-masing. Pemahaman tersebut menjadi penting dalam praktik pembelajaran DPK dan KK, terutama agar kegiatan belajar tidak hanya berorientasi pada penyelesaian materi atau praktik, tetapi juga mendorong peserta didik untuk memahami dan menerapkan kompetensi yang dipelajari.",

            pdfLink: "/images/lembar-kerja-1.2-pembelajaran-mendalam.pdf",
            pdfName: "lembar-kerja-1.2-pembelajaran-mendalam.pdf",
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
                    Pembelajaran Mendalam dan Asesmeen Dasar
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
