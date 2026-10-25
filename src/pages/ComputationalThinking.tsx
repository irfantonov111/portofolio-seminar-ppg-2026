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

export const ComputationalThinking = () => {
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
                Refleksi Computational Thinking
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Mata kuliah Computational Thinking (CT) memberikan pemahaman
                bahwa berpikir komputasional merupakan cara berpikir sistematis
                untuk memahami dan menyelesaikan masalah, baik dalam
                pembelajaran maupun kehidupan sehari-hari. CT tidak hanya
                berkaitan dengan komputer dan pemrograman, tetapi dapat
                diterapkan melalui empat pilar utama, yaitu dekomposisi,
                pengenalan pola, abstraksi, dan algoritma. Melalui Tantangan
                Bebras, soal literasi dan numerasi, PISA, projek STEM, serta
                analisis dan integrasi CT dalam materi ajar, saya memahami bahwa
                CT dapat dikembangkan melalui berbagai konteks pembelajaran.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Dalam praktiknya, CT dapat membantu guru merancang kegiatan yang
                mendorong peserta didik untuk tidak sekadar menemukan jawaban,
                tetapi memahami proses berpikir dalam memperoleh solusi.
                Contohnya pada materi perakitan komputer, peserta didik dapat
                memecah proses perakitan menjadi beberapa tahapan, mengenali
                pola pemasangan komponen, menentukan informasi yang penting,
                kemudian menyusun langkah kerja secara sistematis. Pembelajaran
                CT juga mengajarkan pentingnya pola pikir bertumbuh, yaitu
                melihat kesalahan dan kesulitan sebagai bagian dari proses
                belajar dan pemecahan masalah.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Melalui mata kuliah ini, saya menyadari bahwa CT merupakan
                kompetensi penting bagi calon guru karena dapat membantu peserta
                didik menghadapi permasalahan secara logis, terstruktur, dan
                reflektif. Oleh karena itu, saya perlu lebih sadar dalam
                merancang pembelajaran yang mengintegrasikan CT secara tepat
                sesuai karakteristik materi, tujuan pembelajaran, dan alokasi
                waktu, sehingga CT tidak menjadi materi tambahan, tetapi menjadi
                bagian dari proses berpikir peserta didik.
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
                src="/images/ct.png"
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
                      Sebagai calon guru Informatika, mata kuliah Computational
                      Thinking (CT) memberikan pemahaman bahwa CT tidak hanya
                      berkaitan dengan komputer atau pemrograman, tetapi
                      merupakan cara berpikir sistematis dalam memahami dan
                      menyelesaikan masalah. CT dapat diterapkan dalam kehidupan
                      sehari-hari maupun dalam berbagai konteks pembelajaran
                      melalui empat pilar utama, yaitu dekomposisi, pengenalan
                      pola, abstraksi, dan algoritma.
                    </p>
                    <br />
                    <p>
                      Pemahaman tersebut berkaitan erat dengan peran saya dalam
                      merancang pembelajaran. Melalui CT, saya dapat menyusun
                      kegiatan yang tidak hanya berfokus pada hasil belajar,
                      tetapi juga melatih peserta didik untuk menganalisis
                      masalah, menentukan informasi yang relevan, menemukan
                      pola, serta menyusun langkah penyelesaian secara logis dan
                      sistematis.
                    </p>
                    <br />
                    <p>
                      Dalam pembelajaran DPK, misalnya materi perakitan komponen
                      komputer, CT dapat diterapkan dengan meminta peserta didik
                      memecah proses perakitan menjadi beberapa bagian
                      (dekomposisi), mengenali karakteristik dan pola pemasangan
                      komponen (pengenalan pola), menentukan informasi penting
                      seperti posisi slot dan konektor (abstraksi), kemudian
                      menyusun urutan perakitan yang tepat (algoritma). Dengan
                      demikian, peserta didik tidak hanya mampu melakukan
                      praktik, tetapi juga memahami proses berpikir di balik
                      setiap langkah.
                    </p>
                    <br />
                    <p>
                      Pemahaman ini menjadi bekal bagi saya untuk mengembangkan
                      pembelajaran yang lebih bermakna dan berorientasi pada
                      pemecahan masalah. Saya perlu membiasakan diri
                      mengidentifikasi peluang integrasi CT dalam materi yang
                      diajarkan sehingga peserta didik dapat mengembangkan
                      kemampuan berpikir sistematis yang tidak hanya berguna
                      dalam pembelajaran Informatika, tetapi juga dalam
                      kehidupan sehari-hari.
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
                      Konsep utama yang saya peroleh adalah bahwa Computational
                      Thinking merupakan cara berpikir untuk menyelesaikan
                      masalah secara sistematis, bukan sekadar kemampuan
                      menggunakan komputer. Empat pilar CT, yaitu dekomposisi,
                      pengenalan pola, abstraksi, dan algoritma, menjadi dasar
                      penting yang dapat digunakan untuk menganalisis dan
                      menyelesaikan berbagai persoalan.
                    </p>
                    <br />
                    <p>
                      Materi yang paling berkesan bagi saya adalah Topik 1:
                      Pendalaman Pemahaman Computational Thinking. Pada topik
                      ini saya mulai memahami bahwa CT sebenarnya sangat dekat
                      dengan kehidupan sehari-hari. Contoh sederhana seperti
                      mengganti ban mobil menunjukkan bahwa aktivitas yang
                      terlihat biasa ternyata memiliki proses berpikir yang
                      sistematis. Pemahaman ini kemudian membantu saya melihat
                      kembali pengalaman mengajar dan menyadari bahwa beberapa
                      kegiatan pembelajaran yang pernah saya lakukan sebenarnya
                      sudah memiliki unsur CT, meskipun sebelumnya belum saya
                      identifikasi secara sadar.
                    </p>
                    <br />
                    <p>
                      Selain itu, saya juga mendapatkan pemahaman baru ketika
                      menganalisis bagian-bagian modul ajar yang telah
                      diintegrasikan dengan CT. Saya belajar mengidentifikasi di
                      mana proses dekomposisi, pengenalan pola, abstraksi, dan
                      algoritma muncul dalam kegiatan pembelajaran. Hal ini
                      membuat saya tidak lagi melihat modul ajar hanya sebagai
                      dokumen perencanaan pembelajaran, tetapi sebagai rancangan
                      pengalaman belajar yang dapat melatih cara berpikir
                      peserta didik.
                    </p>
                    <br />
                    <p>
                      Pembelajaran melalui Tantangan Bebras, soal literasi dan
                      numerasi, PISA, projek STEM, serta integrasi CT dalam
                      materi ajar juga memperkuat pemahaman saya bahwa CT dapat
                      diterapkan lintas konteks. CT dapat hadir ketika peserta
                      didik menganalisis masalah, mencari pola, memilih
                      informasi yang relevan, menyusun strategi, dan
                      mengevaluasi solusi. Dengan demikian, CT dapat menjadi
                      bagian dari budaya berpikir dalam pembelajaran, bukan
                      sekadar materi tambahan.
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
                      Tantangan terbesar yang saya rasakan setelah mempelajari
                      CT adalah bagaimana menerapkannya secara nyata dalam
                      berbagai mata pelajaran dan materi pembelajaran. Integrasi
                      CT tidak cukup hanya dengan mencantumkan istilah
                      dekomposisi, pengenalan pola, abstraksi, dan algoritma
                      dalam modul ajar. Guru perlu merancang kegiatan yang
                      benar-benar membuat peserta didik menggunakan keempat cara
                      berpikir tersebut dalam menyelesaikan masalah.
                    </p>
                    <br />
                    <p>
                      Hal ini menjadi tantangan karena setiap materi memiliki
                      karakteristik yang berbeda. Saya perlu menentukan bagian
                      materi yang paling sesuai untuk diintegrasikan dengan CT,
                      merancang permasalahan yang dekat dengan peserta didik,
                      menentukan aktivitas yang dapat menunjukkan empat pilar
                      CT, serta memastikan kegiatan tersebut tetap mencapai
                      tujuan pembelajaran. Tantangan lainnya adalah alokasi
                      waktu. Integrasi CT dapat membutuhkan waktu lebih banyak
                      karena peserta didik tidak hanya menerima penjelasan,
                      tetapi juga melakukan analisis, berdiskusi, mencoba
                      solusi, mengevaluasi kesalahan, dan melakukan refleksi.
                    </p>
                    <br />
                    <p>
                      Pengalaman tersebut berbeda dengan sebagian praktik
                      pembelajaran yang saya lakukan selama PPL, ketika fokus
                      pembelajaran masih lebih banyak pada ketercapaian materi
                      dan keterampilan praktik. Setelah mempelajari CT, saya
                      melihat bahwa proses peserta didik dalam menemukan solusi
                      juga perlu mendapatkan perhatian. Saya perlu mencari
                      keseimbangan antara kedalaman proses berpikir dengan
                      keterbatasan waktu pembelajaran. Dengan demikian,
                      integrasi CT tidak membuat materi menjadi terlalu padat,
                      tetapi justru membantu peserta didik memahami materi
                      melalui permasalahan yang bermakna.
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
                      Setelah mengikuti mata kuliah ini, perubahan yang ingin
                      saya lakukan adalah lebih sadar dalam merancang
                      pembelajaran yang melatih proses berpikir peserta didik.
                      Saya tidak ingin hanya berfokus pada apakah peserta didik
                      dapat memperoleh jawaban yang benar, tetapi juga
                      memperhatikan bagaimana mereka sampai pada jawaban
                      tersebut.
                    </p>
                    <br />
                    <p>
                      Dalam pembelajaran Informatika dan TKJ, saya ingin mulai
                      mengidentifikasi materi yang memiliki peluang untuk
                      diintegrasikan dengan empat pilar CT. Saya akan berusaha
                      merancang kegiatan inti yang memberikan ruang kepada
                      peserta didik untuk memecah masalah, menemukan pola,
                      menentukan informasi penting, serta menyusun langkah
                      penyelesaian. Misalnya dalam materi perakitan komputer,
                      troubleshooting jaringan, instalasi sistem operasi, maupun
                      konfigurasi jaringan, peserta didik dapat diberikan
                      permasalahan yang mengharuskan mereka menganalisis kondisi
                      sebelum menentukan solusi.
                    </p>
                    <br />

                    <p>
                      Saya juga ingin lebih memperhatikan kesesuaian antara
                      integrasi CT, tujuan pembelajaran, dan alokasi waktu. CT
                      tidak harus selalu diterapkan dalam seluruh tahapan
                      pembelajaran. Saya perlu memilih bagian yang paling
                      bermakna sehingga integrasi CT benar-benar membantu
                      pencapaian tujuan pembelajaran. Selain itu, saya ingin
                      membiasakan peserta didik untuk menjelaskan proses
                      berpikirnya melalui diskusi, dokumentasi langkah kerja,
                      dan refleksi setelah menyelesaikan masalah.
                    </p>
                    <br />
                    <p>
                      Pada akhirnya, mata kuliah Computational Thinking mengubah
                      cara pandang saya sebagai calon guru. Saya semakin
                      memahami bahwa tugas guru bukan hanya menyampaikan
                      pengetahuan, tetapi juga membentuk cara peserta didik
                      dalam memahami dan menyelesaikan masalah. Dengan
                      mengintegrasikan CT secara tepat, saya berharap peserta
                      didik tidak hanya memiliki keterampilan teknis dalam
                      bidang Informatika, tetapi juga memiliki pola berpikir
                      sistematis yang dapat mereka gunakan ketika menghadapi
                      persoalan di sekolah, dunia kerja, maupun kehidupan
                      sehari-hari.
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
            title: "Artefak 1: Penerapan CT dalam Penyusuna Dokumen",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/1.C. Penerapan CT dalam Penyusunan Dokumen.pdf",
          },
          {
            title: "Artefak 2 : Lembar Kerja 1.2 Membaca Pola Pikir",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/LK 1.2. Membaca Pola Pikir.pdf",
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
            title: "Artefak 1: 1.C. Penerapan CT dalam Penyusunan Dokumen",
            alasan:
              "Artefak Lembar Kerja 2 (1.C. Penerapan CT dalam Penyusunan Dokumen) saya pilih karena menunjukkan proses saya dalam memahami dan menganalisis penerapan Computational Thinking secara konkret dalam rancangan pembelajaran. Pada tugas ini, saya tidak hanya mempelajari konsep CT secara teoritis, tetapi mengidentifikasi secara langsung bagian-bagian dalam dokumen pembelajaran yang mengintegrasikan dekomposisi, pengenalan pola, abstraksi, dan algoritma.\n Artefak ini menjadi bukti bahwa saya mulai mampu melihat CT sebagai bagian dari proses perancangan pembelajaran. Melalui analisis tersebut, saya belajar memahami bahwa integrasi CT dapat muncul dalam kegiatan pembelajaran, cara peserta didik menganalisis permasalahan, maupun langkah-langkah penyelesaian tugas. Pemahaman ini membantu saya untuk lebih kritis dalam menyusun modul ajar dan tidak sekadar mencantumkan CT sebagai konsep, tetapi memastikan setiap pilar memiliki penerapan yang sesuai dengan aktivitas belajar.\n Bagi saya sebagai calon guru Informatika, pengalaman tersebut menjadi dasar untuk menerapkan CT pada pembelajaran yang saya ampu, khususnya DPK dan KK. Saya menjadi lebih mampu mengidentifikasi materi yang dapat dikembangkan melalui CT serta merancang kegiatan yang mendorong peserta didik untuk berpikir sistematis dalam menyelesaikan masalah.",
            pdfLink: "/images/1.C. Penerapan CT dalam Penyusunan Dokumen.pdf",
            pdfName: "1.C. Penerapan CT dalam Penyusunan Dokumen.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : Laporan Rektrukturisasi CT",
            alasan:
              "Artefak kedua yang saya gunakan adalah Laporan Akhir Restrukturisasi Portofolio Computational Thinking. Artefak ini dipilih karena memuat kumpulan hasil belajar selama satu semester yang disusun kembali untuk menunjukkan perkembangan pemahaman dan penerapan CT. Proses restrukturisasi tidak hanya berupa pengumpulan tugas, tetapi juga mengkaji kembali setiap artefak sebagai bagian dari proses belajar dan perkembangan kemampuan berpikir komputasional. \n Melalui proses tersebut, saya dapat melihat kembali pemahaman yang telah berkembang mulai dari konsep dasar CT, penerapannya dalam pemecahan masalah, hingga integrasi CT dalam projek dan materi pembelajaran. Penyusunan kembali artefak juga membantu saya menghubungkan setiap kegiatan pembelajaran sehingga terlihat bagaimana pemahaman CT berkembang dari sekadar memahami konsep menjadi mampu menganalisis dan merancang penerapannya dalam pembelajaran. \n Artefak ini juga menjadi bentuk refleksi terhadap proses belajar saya sebagai calon guru. Dengan meninjau kembali hasil pekerjaan selama satu semester, saya dapat mengidentifikasi pemahaman yang sudah dikuasai dan bagian yang masih perlu dikembangkan, khususnya dalam menerapkan empat pilar CT secara tepat. Oleh karena itu, laporan restrukturisasi portofolio menjadi bukti bahwa proses pembelajaran CT tidak berhenti pada penyelesaian tugas, tetapi mendorong saya untuk melakukan refleksi dan memperbaiki cara berpikir serta praktik dalam merancang pembelajaran.",

            pdfLink: "/images/Laporan-Akhir-CT.pdf",
            pdfName: "Laporan-Akhir-CT.pdf",
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
                    Computational Thinking
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
                  src="/images/ct.png"
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
