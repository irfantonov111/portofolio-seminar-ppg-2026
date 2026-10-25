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

export const RefleksiPPL2 = () => {
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
                Refleksi Praktik Pengalaman Lapangan Mandiri
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                
                Mata kuliah Praktik Pengalaman Lapangan (PPL) Mandiri memberikan pengalaman nyata bagi saya sebagai calon guru dalam memahami lingkungan sekolah dan sistem pengelolaannya. Melalui orientasi dan observasi manajemen sekolah di SMK Negeri 2 Salatiga, saya mempelajari penerapan budaya 5R, 5S, K3LH, serta kegiatan apel pagi siswa TKJ dalam membangun kedisiplinan, tanggung jawab, dan karakter peserta didik. Pengalaman ini menyadarkan saya bahwa pendidikan tidak hanya berlangsung di dalam kelas, tetapi juga melalui budaya dan pembiasaan positif di lingkungan sekolah.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
               
               Melalui observasi lingkungan belajar bersama guru pamong dan guru BK, saya memperoleh pemahaman mengenai karakteristik peserta didik, interaksi dalam pembelajaran, serta faktor-faktor yang memengaruhi proses belajar. Pengalaman praktik mengajar terbimbing dan mandiri juga membantu saya menghubungkan teori perkuliahan dengan kondisi nyata di kelas. Saya belajar bahwa penyusunan modul ajar perlu mempertimbangkan tujuan pembelajaran, kebutuhan peserta didik, pemilihan strategi, dan asesmen yang sesuai agar pembelajaran dapat berlangsung secara efektif dan bermakna.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
              Tantangan dalam menerapkan Pembelajaran Mendalam melalui TaRL, CRT, dan DUP, serta mengintegrasikan Pembelajaran Sosial Emosional dan Experiential Learning, menjadi kesempatan bagi saya untuk terus mengembangkan kompetensi pedagogik. Saya menyadari pentingnya melakukan evaluasi dan refleksi untuk memperbaiki praktik pembelajaran secara berkelanjutan. Melalui mata kuliah ini, saya semakin memahami bahwa menjadi guru profesional tidak hanya berarti mampu menyampaikan materi, tetapi juga mampu memahami peserta didik, menghargai keberagaman, membangun lingkungan belajar yang positif, dan bertanggung jawab terhadap perkembangan mereka secara menyeluruh.
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
                src="/images/ppl2.png"
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
                     Mata kuliah Praktik Pengalaman Lapangan (PPL) Mandiri membantu saya menghubungkan teori yang dipelajari selama perkuliahan dengan kondisi nyata di sekolah. Melalui orientasi dan observasi manajemen sekolah, observasi lingkungan belajar, praktik mengajar, serta kegiatan nonmengajar, saya memahami bahwa peran guru tidak hanya menyampaikan materi, tetapi juga memahami sistem sekolah, karakteristik peserta didik, dan lingkungan yang memengaruhi proses pembelajaran. Pengalaman ini memperluas pandangan saya bahwa keberhasilan pembelajaran tidak hanya ditentukan oleh penguasaan materi, tetapi juga oleh kemampuan guru dalam merencanakan pembelajaran, membangun interaksi positif, dan menciptakan lingkungan belajar yang mendukung.
                    </p>
                    <br />
                    <p>
                      Keterkaitan materi perkuliahan semakin terasa ketika saya melaksanakan praktik mengajar mandiri. Materi Pembelajaran Mendalam, khususnya TaRL, CRT, dan DUP, menjadi bekal untuk merancang pembelajaran yang sesuai dengan kebutuhan peserta didik yang beragam. Selain itu, materi Pembelajaran Sosial Emosional (PSE) dan Experiential Learning membantu saya memahami pentingnya membangun suasana belajar yang aman, melibatkan peserta didik secara aktif, serta memberikan kesempatan untuk belajar melalui pengalaman dan refleksi. Dengan demikian, PPL Mandiri menjadi kesempatan bagi saya untuk mengembangkan kompetensi pedagogik sekaligus membangun identitas sebagai calon guru yang reflektif dan bertanggung jawab.
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
                     Konsep utama yang saya pelajari dalam mata kuliah ini adalah pentingnya memahami manajemen sekolah, mengidentifikasi karakteristik peserta didik dan lingkungan belajar, serta mengintegrasikan perencanaan, pelaksanaan, asesmen, dan tindak lanjut pembelajaran. Guru perlu merancang pembelajaran berdasarkan tujuan yang jelas dan kebutuhan peserta didik, kemudian mengevaluasi ketercapaian tujuan melalui asesmen yang mencakup aspek pengetahuan, sikap, dan keterampilan. Selain itu, pendekatan TaRL, CRT, DUP, PSE, dan Experiential Learning memberikan landasan untuk menciptakan pembelajaran yang adaptif, menghargai keberagaman, dan mendorong keterlibatan aktif peserta didik.
                    </p>
                    <br />
                    <p>
                     Materi yang paling berkesan bagi saya adalah Topik 1, Orientasi dan Observasi Manajemen Sekolah, serta Topik 2, Observasi Lingkungan Belajar. Melalui kedua topik tersebut, saya memperoleh pemahaman bahwa pembelajaran tidak dapat dipisahkan dari konteks sekolah dan karakteristik peserta didik. Observasi manajemen sekolah membantu saya memahami sistem, program, kebijakan, serta kegiatan akademik dan nonakademik, sedangkan observasi lingkungan belajar memberikan gambaran tentang interaksi guru dengan peserta didik, hubungan antarpeserta didik, dan pemanfaatan sumber belajar. Kedua pengalaman ini menjadi dasar bagi saya untuk merancang pembelajaran yang lebih relevan dengan kondisi nyata di sekolah.
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
                    Tantangan utama yang saya hadapi selama PPL Mandiri adalah menerapkan teori perkuliahan ke dalam praktik pembelajaran yang sesuai dengan kondisi nyata di kelas. Penyusunan modul ajar untuk setiap pertemuan membutuhkan persiapan yang matang agar tujuan pembelajaran, aktivitas, media, dan asesmen saling berkaitan. Saya juga perlu memastikan bahwa penerapan Pembelajaran Mendalam, TaRL, CRT, dan DUP tidak hanya tercantum dalam perencanaan, tetapi benar-benar terlihat dalam aktivitas pembelajaran. Hal ini menuntut kemampuan untuk menyesuaikan strategi mengajar dengan karakteristik, kesiapan, dan kebutuhan peserta didik.
                    </p>
                    <br />
                    <p>
                    Tantangan lainnya adalah mengintegrasikan PSE dan Experiential Learning ke dalam pembelajaran secara alami dan bermakna. Saya perlu memberikan kesempatan kepada peserta didik untuk mencoba, berdiskusi, mengelola emosi, dan merefleksikan pengalaman belajarnya. Di luar kegiatan mengajar, keterlibatan dalam menyortir dokumen ijazah dan TKA, mempersiapkan komputer untuk TKA, serta mengikuti apel pagi siswa memberikan pengalaman mengenai tanggung jawab guru dalam mendukung kegiatan sekolah. Pengalaman tersebut menunjukkan bahwa profesi guru membutuhkan kemampuan pedagogik, kedisiplinan, kerja sama, dan kemampuan beradaptasi dengan berbagai tanggung jawab di lingkungan pendidikan.
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
                     Setelah mengikuti mata kuliah PPL Mandiri, saya ingin memperbaiki cara merencanakan dan melaksanakan pembelajaran agar lebih berpusat pada kebutuhan peserta didik. Sebelum menyusun modul ajar, saya akan berupaya mengidentifikasi karakteristik, minat, dan kesiapan belajar peserta didik sehingga strategi yang dipilih lebih sesuai. Saya juga ingin menerapkan TaRL, CRT, dan DUP secara lebih nyata melalui kegiatan pembelajaran yang memberikan kesempatan kepada peserta didik untuk belajar sesuai kebutuhannya. Integrasi PSE dan Experiential Learning akan saya kembangkan melalui diskusi, praktik, refleksi, dan umpan balik yang membangun agar peserta didik tidak hanya memahami materi, tetapi juga mengembangkan kemampuan sosial emosionalnya.
                    </p>
                    <br />
                    <p>
                     Selain meningkatkan kualitas pembelajaran, saya ingin membiasakan diri melakukan evaluasi dan tindak lanjut secara berkelanjutan. Hasil asesmen, respons peserta didik, dan kendala selama pembelajaran perlu menjadi dasar untuk memperbaiki strategi mengajar pada pertemuan berikutnya. Saya juga akan terus belajar melalui refleksi bersama guru pamong, guru BK, dan warga sekolah agar memperoleh perspektif yang lebih luas dalam menghadapi permasalahan pembelajaran. Melalui perubahan tersebut, saya berharap dapat menjadi guru yang adaptif, reflektif, dan profesional, serta mampu menciptakan lingkungan belajar yang inklusif, menghargai keberagaman, dan mendukung perkembangan peserta didik secara menyeluruh.
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
            title: "Artefak 1: LK 1 Orientasi dan Observasi Manajemen Sekolah",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/lk-ppl-mandiri-1.pdf",
          },
          {
            title: "Artefak 2 : LK 2 Observasi Lingkungan Belajar",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/lk-2-ppl-mandiri.pdf",
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
            title: "Artefak 1: LK 1 Orientasi dan Observasi Manajemen Sekolah",
            alasan:
             
           "Artefak Lembar Kerja 1: Orientasi dan Observasi Manajemen Sekolah dipilih sebagai bukti pendukung refleksi mata kuliah Praktik Pengalaman Lapangan (PPL) Mandiri karena memberikan gambaran konkret mengenai pengelolaan dan budaya sekolah di SMK Negeri 2 Salatiga. Melalui kegiatan observasi, saya memperoleh pemahaman tentang penerapan budaya 5R (Ringkas, Rapi, Resik, Rawat, Rajin), 5S (Senyum, Salam, Sapa, Sopan, Santun), serta K3LH (Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup) dalam mendukung lingkungan sekolah yang tertib, nyaman, dan aman. Selain itu, saya mengamati pelaksanaan apel pagi siswa TKJ yang menjadi sarana untuk menanamkan kedisiplinan, tanggung jawab, dan kebiasaan positif sebelum kegiatan pembelajaran dimulai.\n Pengalaman tersebut membantu saya memahami bahwa pendidikan karakter tidak hanya dibangun melalui penyampaian materi di kelas, tetapi juga melalui pembiasaan dan budaya yang diterapkan dalam kehidupan sehari-hari di sekolah. Artefak ini relevan sebagai bukti refleksi karena memperlihatkan bagaimana lingkungan dan manajemen sekolah berkontribusi terhadap pembentukan karakter peserta didik. Sebagai calon guru, saya menyadari pentingnya memberikan teladan dalam menerapkan kedisiplinan, menjaga kebersihan dan keselamatan lingkungan, serta membangun komunikasi yang santun. Pemahaman ini menjadi bekal bagi saya untuk mengintegrasikan nilai-nilai tersebut ke dalam praktik pembelajaran dan membentuk lingkungan belajar yang positif.",
            pdfLink: "/images/lk-ppl-mandiri-1.pdf",
            pdfName: "lk-ppl-mandiri-1.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : LK 2 Observasi Lingkungan Belajar",
            alasan:
             "Artefak 2 yang saya gunakan sebagai bukti pendukung refleksi mata kuliah Praktik Pengalaman Lapangan (PPL) Mandiri adalah Lembar Kerja 2: Observasi Lingkungan Belajar. Melalui lembar kerja ini, saya mengamati proses pembelajaran secara langsung, meliputi perencanaan pembelajaran, interaksi guru dengan peserta didik, interaksi antarpeserta didik, serta pemanfaatan sumber belajar dan lingkungan pembelajaran. Observasi dilakukan melalui pengamatan kegiatan pembelajaran bersama guru pamong dan penggalian informasi dari guru BK untuk memperoleh pemahaman yang lebih luas mengenai karakteristik, kebutuhan, dan kondisi peserta didik.\n Artefak ini dipilih karena membantu saya memahami bahwa pembelajaran yang efektif perlu dirancang berdasarkan kondisi nyata di kelas, bukan hanya berpedoman pada materi dan perangkat ajar. Hasil observasi menjadi bahan refleksi untuk meningkatkan kemampuan saya dalam mengenali kebutuhan peserta didik, memilih pendekatan pembelajaran yang sesuai, serta membangun interaksi yang positif dan inklusif. Pengalaman ini juga memperkuat pemahaman saya bahwa seorang guru perlu melakukan pengamatan secara cermat sebelum menentukan strategi pembelajaran agar proses belajar dapat berlangsung secara bermakna dan sesuai dengan kebutuhan peserta didik.",
            
            pdfLink: "/images/lk-2-ppl-mandiri.pdf",
            pdfName: "lk-2-ppl-mandiri.pdf",
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
                  src="/images/ppl2.png"
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
