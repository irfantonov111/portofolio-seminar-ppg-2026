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

export const RefleksiPMAL= () => {
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
                Refleksi Pembelajaran Mendalam dan Asesmen Lanjut
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Mata kuliah Pembelajaran Mendalam dan Asesmen Lanjut memberikan pemahaman kepada saya bahwa pembelajaran yang bermakna perlu dirancang berdasarkan kebutuhan, kesiapan, dan karakteristik peserta didik. Melalui materi asesmen awal, Desain Universal untuk Pembelajaran (DUP), Teaching at the Right Level (TaRL), Culturally Responsive Teaching (CRT), serta pengolahan dan pemanfaatan hasil asesmen, saya memahami bahwa guru perlu mengintegrasikan asesmen dengan proses perencanaan, pelaksanaan, dan evaluasi pembelajaran. Dua artefak yang saya pilih, yaitu Modul Ajar dengan penerapan TaRL dan Dokumen LK Menyusun Peta Kebutuhan Belajar Murid, menjadi bukti pemahaman saya dalam merancang pembelajaran yang mempertimbangkan perbedaan kebutuhan belajar peserta didik.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
              Pemahaman tersebut relevan dengan pengalaman saya mengajar mata pelajaran KK1 kelas XI TKJ pada elemen Perencanaan dan Pengalamatan Jaringan. Materi subnetting, VLSM, dan routing membutuhkan penguasaan konsep secara bertahap sehingga peserta didik memerlukan bentuk latihan dan pendampingan yang sesuai dengan tingkat pemahamannya. Tantangan yang saya hadapi adalah merancang pembelajaran yang adaptif, menyiapkan variasi media, serta mengelola kelas dengan kebutuhan belajar yang beragam. Materi yang paling berkesan bagi saya adalah pendekatan CRT karena membuka pemahaman bahwa pengalaman dan konteks budaya peserta didik dapat menjadi penghubung antara konsep yang dipelajari dengan kehidupan nyata.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
               Setelah mengikuti mata kuliah ini, saya ingin lebih konsisten melaksanakan asesmen awal, memanfaatkan hasil asesmen untuk menentukan strategi pembelajaran, serta mengembangkan media dan aktivitas belajar yang bervariasi. Saya juga ingin menghadirkan studi kasus yang dekat dengan lingkungan peserta didik agar pembelajaran kejuruan tidak hanya berorientasi pada penyelesaian tugas praktik, tetapi juga pada pemahaman konsep dan kemampuan memecahkan masalah. Saya menyadari bahwa pembelajaran mendalam membutuhkan perencanaan dan evaluasi yang berkelanjutan. Oleh karena itu, saya berkomitmen untuk terus merefleksikan praktik mengajar dan memperbaiki pembelajaran agar lebih inklusif, adaptif, dan bermakna bagi setiap peserta didik.
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
                src="/images/pmal.png"
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
                      Mata kuliah Pembelajaran Mendalam dan Asesmen Lanjut berkaitan erat dengan peran saya sebagai calon guru KK1 kelas XI TKJ semester 1 pada elemen Perencanaan dan Pengalamatan Jaringan. Materi yang saya ajarkan meliputi IP Address, subnetting kelas C, B, dan A, VLSM, praktik menggunakan Cisco Packet Tracer, routing statis tiga dan empat router, serta routing dinamis RIP. Materi tersebut memiliki keterkaitan bertahap sehingga saya perlu melakukan asesmen awal untuk mengetahui kesiapan dan pemahaman peserta didik sebelum melanjutkan ke materi berikutnya. Melalui pendekatan TaRL, saya dapat menyesuaikan latihan dan pendampingan berdasarkan kemampuan peserta didik, sedangkan DUP mendorong saya menyediakan media belajar yang bervariasi, seperti tabel alokasi IP, LKPD, video tutorial, dan demonstrasi praktik.
                 </p>
                    <br />
                    <p>
                     Saya juga memahami bahwa CRT dapat diterapkan melalui studi kasus yang dekat dengan kehidupan peserta didik, seperti perancangan jaringan untuk sekolah, kantor desa, atau UMKM di lingkungan sekitar. Dengan demikian, peserta didik tidak hanya mempelajari perhitungan subnetting dan konfigurasi routing, tetapi juga memahami penerapan teknologi untuk menyelesaikan permasalahan nyata. Hasil asesmen formatif selanjutnya dapat digunakan untuk mengidentifikasi kesulitan peserta didik dan menentukan tindak lanjut pembelajaran. Pemahaman ini mengubah cara pandang saya bahwa keberhasilan pembelajaran bukan sekadar menyelesaikan seluruh materi, melainkan memastikan peserta didik memahami konsep dan mampu menerapkannya secara bermakna.
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
                     Konsep utama yang saya pelajari adalah pentingnya mengintegrasikan asesmen dengan proses pembelajaran. Asesmen awal membantu mengenali kesiapan peserta didik, asesmen formatif memantau perkembangan pemahaman, sedangkan hasil asesmen digunakan untuk menentukan tindak lanjut. DUP menyediakan beragam cara bagi peserta didik untuk mengakses materi dan menunjukkan pemahaman, TaRL menyesuaikan pembelajaran dengan tingkat kemampuan aktual, sedangkan CRT menghubungkan materi dengan pengalaman dan konteks budaya peserta didik. Ketiga pendekatan tersebut saling melengkapi untuk menciptakan pembelajaran yang inklusif, adaptif, dan bermakna.</p>
                    <br />
                    <p>
                      Materi yang paling berkesan bagi saya adalah Topik 4, yaitu Pembelajaran Mendalam melalui pendekatan Culturally Responsive Teaching (CRT). Saya memahami bahwa pembelajaran dapat menjadi lebih bermakna ketika dikaitkan dengan kehidupan dan lingkungan peserta didik. Dalam pembelajaran KK1, penerapannya dapat dilakukan melalui modul praktikum, video tutorial, dan LKPD yang mengangkat permasalahan jaringan di lingkungan sekitar. Peserta didik tidak hanya mempelajari IP Address, VLSM, dan routing, tetapi juga memahami bagaimana pengetahuan tersebut digunakan untuk memenuhi kebutuhan masyarakat.
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
                     Tantangan yang saya hadapi adalah merancang pembelajaran yang mengakomodasi perbedaan kemampuan peserta didik dengan tetap memperhatikan keterbatasan waktu dan target materi. Dalam praktik PPL, saya menyadari bahwa demonstrasi dan latihan praktik perlu dilengkapi dengan asesmen awal, pengelompokan fleksibel, serta pendampingan sesuai kebutuhan. Misalnya, peserta didik yang belum menguasai subnetting kelas C akan mengalami kesulitan ketika mempelajari VLSM dan routing. Penerapan DUP, TaRL, dan CRT juga membutuhkan persiapan lebih lama untuk menyusun perangkat ajar, media, LKPD, serta studi kasus kontekstual. Selain itu, pengelolaan kelas menjadi lebih dinamis karena setiap peserta didik dapat membutuhkan bentuk pendampingan yang berbeda.</p>
                    <br />
                    <p>Tantangan tersebut menyadarkan saya bahwa pembelajaran mendalam tidak cukup hanya dengan menyampaikan materi dan memberikan latihan. Saya perlu mengatur waktu secara efektif, menentukan prioritas pembelajaran, serta merancang aktivitas yang memungkinkan peserta didik belajar sesuai kebutuhannya tanpa kehilangan arah tujuan pembelajaran. Dengan demikian, perencanaan yang matang dan kemampuan menyesuaikan strategi menjadi bagian penting dalam mewujudkan pembelajaran yang efektif.</p>
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
                      Setelah mengikuti perkuliahan ini, saya ingin membiasakan diri melakukan asesmen awal sebelum menentukan strategi pembelajaran dan menggunakan hasilnya untuk menyesuaikan tingkat kesulitan tugas serta pendampingan. Saya juga akan mengembangkan media pembelajaran yang bervariasi dan menerapkan pengelompokan fleksibel agar peserta didik memperoleh kesempatan belajar sesuai kebutuhannya. Pendekatan CRT akan saya terapkan melalui studi kasus perancangan jaringan yang relevan dengan lingkungan peserta didik, sehingga konsep yang dipelajari tidak hanya bersifat teoritis, tetapi juga kontekstual.
                    </p>
                    <br />
                    <p>
                      Selain itu, saya akan memanfaatkan hasil asesmen untuk mengevaluasi efektivitas pembelajaran, mengidentifikasi materi yang masih sulit dipahami, dan memperbaiki strategi pada pertemuan berikutnya. Saya menyadari bahwa penerapan pembelajaran mendalam perlu dilakukan secara bertahap dan berkelanjutan. Melalui perubahan tersebut, saya berharap dapat menjadi guru yang lebih reflektif dan adaptif serta mampu membantu peserta didik membangun pemahaman yang kuat, mengembangkan keterampilan pemecahan masalah, dan menerapkan pengetahuan jaringan komputer dalam kehidupan nyata.
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
            title: "Artefak 1: 4.C. Microteaching Lesson Study untuk Penguatan Praktik Pembelajaran Mendalam",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/4.C.-Microteaching-Lesson-Study.pdf",
          },
          {
            title: "Artefak 2 : 1.C. Menyusun Peta Kebutuhan Belajar Murid.",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/1.C-Menyusun-Peta-Kebutuhan-Belajar-Murid.pdf",
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
            title: "Artefak 1: Artefak 1: 1.C. Menyusun Peta Kebutuhan Belajar Murid.",
            alasan:
              "Artefak Lembar Kerja 1.1 (Galery Walk) dipilih sebagai salah satu pendukung refleksi karena kegiatan ini memberikan pengalaman dalam menganalisis miskonsepsi yang dapat muncul dalam penerapan Pembelajaran Mendalam. Melalui studi kasus tentang pembelajaran siklus air, dilakukan analisis untuk melihat perbedaan antara pembelajaran yang hanya menekankan hafalan dengan pembelajaran yang mendorong peserta didik memahami dan menghubungkan materi dengan kehidupan sehari-hari. Hasil analisis tersebut kemudian dituangkan dalam bentuk poster dan dipresentasikan melalui kegiatan Gallery Walk.\n Artefak ini menjadi penting karena membantu memahami bahwa peserta didik yang mampu menghafal materi belum tentu benar-benar memahami konsep yang dipelajari. Dalam studi kasus tersebut, murid dapat menyebutkan tahapan siklus air, tetapi kesulitan menjelaskan mengapa pakaian dapat kering atau mengapa terdapat titik air pada kaca. Dari kasus tersebut, terlihat bahwa pembelajaran perlu memberikan pengalaman yang membantu peserta didik menghubungkan konsep dengan situasi nyata.\n Pemilihan artefak ini juga berkaitan dengan perubahan cara pandang dalam merancang pembelajaran. Pembelajaran tidak cukup hanya memastikan materi tersampaikan atau tugas dapat diselesaikan, tetapi perlu melihat apakah peserta didik benar-benar memahami dan mampu menerapkan pengetahuannya. Hal tersebut menjadi dasar penting dalam mengembangkan pembelajaran KK (Konsentrasi Keahlian) agar tidak hanya berorientasi pada penyelesaian praktik, tetapi juga pada pemahaman dan penerapan kompetensi.",
            pdfLink: "/images/1.C-Menyusun-Peta-Kebutuhan-Belajar-Murid.pdf",
            pdfName: "1.C-Menyusun-Peta-Kebutuhan-Belajar-Murid.pdf",
          },
          {
            no: 2,
            title: "Artefk 2 : 4.C. Microteaching Lesson Study untuk Penguatan Praktik Pembelajaran Mendalam",
            alasan:
              
            "Artefak Modul Ajar dengan penerapan Teaching at the Right Level (TaRL) dipilih sebagai salah satu bukti refleksi karena menunjukkan upaya merancang pembelajaran berdasarkan tingkat pemahaman dan kesiapan belajar peserta didik. Melalui artefak ini, saya mempelajari bahwa peserta didik dalam satu kelas memiliki kemampuan yang beragam sehingga membutuhkan bentuk latihan, pendampingan, dan tantangan belajar yang sesuai. Penerapan TaRL dalam modul ajar menjadi salah satu upaya untuk menyesuaikan proses pembelajaran dengan kebutuhan tersebut, bukan menyamaratakan aktivitas belajar bagi seluruh peserta didik.\n Artefak ini penting karena berkaitan langsung dengan pengalaman saya mengajar mata pelajaran KK1 kelas XI TKJ pada elemen Perencanaan dan Pengalamatan Jaringan. Materi seperti subnetting, VLSM, dan routing memiliki keterkaitan konsep yang bertahap. Peserta didik yang belum memahami dasar subnetting dapat mengalami kesulitan ketika menerapkan perhitungan alamat IP dalam konfigurasi jaringan. Oleh karena itu, pembelajaran perlu memberikan kesempatan kepada peserta didik untuk memperkuat pemahaman dasar, memperoleh pendampingan sesuai kesulitan yang dihadapi, dan mengembangkan kemampuan melalui latihan yang lebih menantang ketika telah menguasai materi.\n Pemilihan artefak ini juga mencerminkan perubahan cara pandang saya dalam merancang pembelajaran. Saya semakin memahami bahwa modul ajar tidak cukup hanya memuat urutan kegiatan dan materi yang harus diselesaikan, tetapi perlu mempertimbangkan kesiapan belajar peserta didik serta tindak lanjut berdasarkan hasil asesmen. Melalui penerapan TaRL, saya ingin mengembangkan pembelajaran KK1 yang lebih adaptif, sehingga peserta didik tidak sekadar mengikuti prosedur praktik, tetapi juga membangun pemahaman konsep secara bertahap dan mampu menerapkannya dalam menyelesaikan permasalahan jaringan komputer.",
            pdfLink: "/images/4.C.-Microteaching-Lesson-Study.pdf",
            pdfName: "4.C.-Microteaching-Lesson-Study.pdf",
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
                    Pembelajaran Mendalam dan Asesmeen Lanjut
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
                  src="/images/pmal.png"
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