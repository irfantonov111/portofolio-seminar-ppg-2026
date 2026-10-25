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

export const FilosofiPendidikan = () => {
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

  const learningPoints = [
    {
      title: "Teori ke Praktik",
      text: "Proses observasi, asistensi, hingga praktik mengajar secara riil mendemonstrasikan bagaimana teori pendidikan diterapkan dalam kelas nyata.",
    },
    {
      title: "Lingkungan Belajar Kondusif",
      text: "Tugas guru bukan sebatas transfer ilmu, namun membangun ekosistem belajar yang aman, suportif, inklusif, dan penuh makna bagi peserta didik.",
    },
    {
      title: "Diferensiasi & Karakter",
      text: "Pentingnya perencanaan matang, ketepatan asesmen (uji formatif/sumatif), serta keluwesan mengadaptasi materi berdasarkan keunikan masing-masing siswa.",
    },
    {
      title: "Pengembangan Modul & TIK",
      text: "Mahir menyusun modul ajar interaktif, mengembangkan media berbasis digital, serta memanfaatkan kekuatan teknologi informatika kontemporer.",
    },
  ];

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
                Refleksi Filosofi Pendidikan dan Pendidikan Nilai
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Setelah mempelajari Filosofi Pendidikan dan Pendidikan Nilai
                serta mengaitkannya dengan pengalaman selama PPL di SMK N 2
                Salatiga, saya semakin memahami bahwa guru tidak hanya bertugas
                menyampaikan materi, tetapi juga menjadi teladan dalam membentuk
                karakter, nilai, sikap, dan kepribadian peserta didik.
                Pengalaman melihat budaya guru datang tepat waktu dan menyambut
                peserta didik di pagi hari menunjukkan bahwa keteladanan dapat
                dimulai dari kebiasaan sederhana.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Saya juga menyadari bahwa cara mendidik perlu disesuaikan dengan
                kodrat alam dan kodrat zaman. Nilai disiplin dan tanggung jawab
                tetap penting, tetapi cara menanamkannya tidak harus sama dengan
                pola pendidikan masa lalu. Kedisiplinan dapat dibangun melalui
                kesadaran, dialog, keteladanan, dan konsekuensi yang mendidik,
                bukan hanya melalui hukuman atau rasa takut.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Ke depan, saya ingin menjadi guru yang mampu mendidik secara
                kontekstual, memahami karakter peserta didik, mengikuti
                perkembangan zaman, serta memberikan teladan melalui sikap dan
                perilaku sehari-hari. Dengan demikian, pembelajaran tidak hanya
                membantu peserta didik menguasai kompetensi, tetapi juga
                membentuk mereka menjadi pribadi yang mandiri, bertanggung
                jawab, dan berkarakter.
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
                src="/images/fppn-images.png"
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
                      Mata Kuliah Filosofi Pendidikan dan Pendidikan Nilai
                      menguatkan pemahaman saya bahwa guru tidak hanya berperan
                      sebagai penyampai materi, tetapi juga sebagai teladan
                      dalam pembentukan karakter, nilai, sikap, dan kepribadian
                      peserta didik.
                    </p>
                    <br />
                    <p>
                      Hal ini saya lihat secara nyata di sekolah tempat saya
                      PPL, di mana terdapat budaya guru datang tepat waktu dan
                      menyambut peserta didik di pagi hari. Kebiasaan sederhana
                      tersebut menjadi contoh langsung tentang kedisiplinan,
                      keramahan, dan kepedulian kepada peserta didik.
                    </p>
                    <br />
                    <p>
                      Sebagai calon guru, saya harus menjadi figur teladan bagi
                      siswa, melalui hal-hal berikut:
                    </p>

                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Disiplin :</strong> Datang tepat waktu dan
                        menyambut peserta didik di pagi hari.
                      </li>
                      <li>
                        <strong>Tanggung jawab :</strong> melaksanakan tugas dan
                        kewajiban dengan baik dan penuh tanggungjawab.
                      </li>
                      <li>
                        <strong>Menghargai :</strong> Mendengarkan dan
                        memperlakukan peserta didik dengan baik.
                      </li>
                      <li>
                        <strong>Pengendalian diri :</strong> Menghadapi
                        kesalahan peserta didik dengan tenang, dan bijaksana.
                      </li>
                      <li>
                        <strong>Peduli :</strong> Membantu peserta didik yang
                        mengalami kesulitan dalam pembelajaran.
                      </li>
                    </ol>
                    <p>
                      Dengan demikian, peserta didik tidak hanya belajar dari
                      materi yang disampaikan guru, tetapi juga dari sikap dan
                      perilaku yang ditunjukkan guru dalam keseharian.
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
                      Konsep yang paling berkesan bagi saya adalah mendidik
                      sesuai dengan Kodrat Keadaan, yang meliputi Kodrat Alam
                      dan Kodrat Zaman. Dari pemikiran Ki Hadjar Dewantara, saya
                      memahami bahwa setiap peserta didik memiliki karakter,
                      potensi, lingkungan, dan tahap perkembangan yang berbeda.
                      Oleh karena itu, guru tidak dapat menggunakan satu cara
                      yang sama untuk semua peserta didik.
                    </p>
                    <br />
                    <p>
                      Selain kodrat alam, guru juga perlu memperhatikan kodrat
                      zaman. Peserta didik yang saya hadapi saat ini tumbuh di
                      lingkungan yang berbeda dengan lingkungan ketika saya
                      menjadi siswa. Mereka lebih dekat dengan teknologi,
                      informasi, media sosial, dan berbagai perubahan yang
                      berlangsung cepat. Oleh karena itu, pengalaman saya
                      sebagai siswa tidak dapat dijadikan satu-satunya dasar
                      dalam menentukan cara mendidik peserta didik saat ini.
                    </p>
                    <br />
                    <p>
                      Materi yang paling berkesan bagi saya adalah mendidik
                      secara kontekstual dengan mengikuti perkembangan kurikulum
                      dan karakter peserta didik saat ini. Saya memahami bahwa
                      menjadi guru bukan berarti mempertahankan semua cara yang
                      pernah dilakukan pada masa lalu, tetapi mengambil nilai
                      baik yang masih relevan dan menyesuaikan cara penerapannya
                      dengan kebutuhan peserta didik saat ini.
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
                      Tantangan yang saya temukan adalah adanya perbedaan antara
                      konsep yang saya pelajari dalam perkuliahan dengan keadaan
                      nyata yang saya temui di sekolah. Dalam materi Filosofi
                      Pendidikan dan Pendidikan Nilai, saya belajar bahwa
                      pendidikan seharusnya memanusiakan manusia dan menuntun
                      peserta didik sesuai dengan kodratnya. Pendidikan juga
                      perlu menyesuaikan diri dengan kodrat zaman, sehingga cara
                      mendidik tidak hanya mengulang pola pendidikan yang pernah
                      diterima oleh guru ketika mereka menjadi peserta didik.
                    </p>
                    <br />
                    <p>
                      Selama PPL, saya menemukan beberapa hal yang menjadi
                      tantangan ketika dikaitkan dengan materi perkuliahan,
                      antara lain:
                    </p>
                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Pemberian Konsekuensi : </strong> Masih
                        ditemukan konsekuensi seperti push up bagi peserta didik
                        yang terlambat masuk saat jam pelajaran atau pelanggaran
                        lain dengan hukuman membersihkan halaman sekolah, ruang
                        praktik atau membersihkan kamar kecil.
                      </li>
                      <li>
                        <strong>Pola Kedisiplinan : </strong> Kedisiplinan masih
                        cenderung dibangun melalui pemberian konsekuensi ketika
                        terjadi pelanggaran, sedangkan dalam perkuliahan saya
                        mempelajari pentingnya membangun kesadaran dan tanggung
                        jawab peserta didik dengan cara persuasif.
                      </li>
                      <li>
                        <strong>Pengalaman Masa Lalu : </strong>Beberapa cara
                        mendisiplinkan peserta didik yang dahulu dianggap biasa,
                        seperti hukuman fisik, sudah tidak sesuai untuk
                        diterapkan pada kondisi pendidikan saat ini.
                      </li>
                      <li>
                        <strong>Perbedaan Karakter Peserta Didik : </strong>{" "}
                        Setiap peserta didik memiliki karakter dan respons yang
                        berbeda terhadap aturan, sehingga pendekatan yang sama
                        belum tentu sesuai untuk semua peserta didik.
                      </li>
                      <li>
                        <strong>Perubahan Zaman : </strong>Peserta didik saat
                        ini tumbuh dalam lingkungan yang lebih dekat dengan
                        teknologi dan informasi dibandingkan dengan pengalaman
                        saya ketika masih sekolah. Hal ini menuntut guru untuk
                        menyesuaikan cara mendidik.
                      </li>
                    </ol>
                    <p>
                      Saya menyadari bahwa menerapkan konsep pendidikan yang
                      sesuai dengan kodrat zaman tidak berarti menghilangkan
                      aturan atau membiarkan peserta didik melakukan kesalahan.
                      Tantangannya adalah mencari cara agar aturan, disiplin,
                      dan konsekuensi tetap ada tetapi dapat membantu peserta
                      didik memahami kesalahan, bertanggung jawab, dan
                      memperbaiki perilakunya.
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
                      Setelah mempelajari materi ini, beberapa perubahan yang
                      ingin saya lakukan sebagai calon guru adalah:
                    </p>
                    <ol className="list-decimal list-outside pl-6 space-y-2 my-4">
                      <li>
                        <strong>Menyesuaikan Cara Mendidik : </strong>{" "}
                        Memperhatikan karakter, kebutuhan, dan perkembangan
                        peserta didik, bukan hanya berdasarkan pengalaman saya
                        ketika menjadi siswa.
                      </li>
                      <li>
                        <strong>Menjadi Teladan : </strong> Menunjukkan
                        kedisiplinan, tanggung jawab, sikap menghargai,
                        kepedulian, dan pengendalian diri dalam keseharian.
                      </li>
                      <li>
                        <strong>Menerapkan Pembelajaran Kontekstual : </strong>
                        Mengaitkan pembelajaran di bidang Teknik Komputer dan
                        Informatika (TKJ) dengan teknologi, kehidupan
                        sehari-hari, dan kebutuhan dunia kerja.
                      </li>
                      <li>
                        <strong>
                          Membangun Kedisiplinan Melalui Kesadaran :{" "}
                        </strong>
                        Menanamkan kesadaran dan tanggung jawab, bukan hanya
                        mengandalkan hukuman atau rasa takut, tetapi dengan cara
                        mengajak peserta didik memahami dampak dari pelanggaran
                        yang dilakukan, bertanggung jawab atas kesalahannya, dan
                        membuat komitmen untuk memperbaikinya, bukan hanya
                        memberikan hukuman.
                      </li>
                      <li>
                        <strong>
                          Menciptakan Lingkungan Belajar Yang Aman dan
                          Menghargai :{" "}
                        </strong>
                        Memberikan ruang bagi peserta didik untuk bertanya,
                        mencoba, dan belajar dari kesalahan.
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
            title: "Refleksi 1: Circle of Viewpoints",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/fppn-2.c.a-circle-of-viewpoints.pdf",
          },
          {
            title: "Refleksi 2: Analisis 4C & Pergeseran Nilai",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/fppn-3.c-4c-circle-viewpoints.pdf",
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
        mataKuliah="Filosofi Pendidikan Indonesia"
        ringkasanUmum="Pemilihan dua artefak di atas merupakan wujud konkret rekonstruksi pemikiran saya mengenai esensi pendidikan Ki Hadjar Dewantara. Artefak-artefak ini mendemonstrasikan bagaimana konsep 'menuntun', 'kodrat alam & kodrat zaman', serta internalisasi nilai-nilai luhur diintegrasikan secara nyata ke dalam rancangan pembelajaran informatika, analisis dilema etis, dan transformasi mindset calon guru profesional."
        items={[
          {
            no: 1,
            title: "Artefak 1: Circle of Viewpoints - Sokola Rimba",
            alasan:
              "Saya memilih artefak Studi Kasus Sokola Rimba sebagai artefak refleksi Seminar PPG karena kasus ini memberikan gambaran nyata bahwa pendidikan tidak dapat dilepaskan dari konteks, kebutuhan, dan karakteristik peserta didik serta lingkungan tempat mereka belajar. Studi kasus ini memperlihatkan bagaimana proses pendidikan dapat dirancang secara fleksibel tanpa kehilangan tujuan utama pembelajaran.\n Hal yang paling menarik bagi saya adalah kemampuan Butet Manurung dan tim Sokola Rimba untuk beradaptasi dengan kehidupan masyarakat Masyarakat Rimba. Pembelajaran tidak dipaksakan mengikuti pola sekolah formal, tetapi justru disesuaikan dengan kondisi, kebutuhan, aktivitas, dan permasalahan yang dihadapi masyarakat. Materi membaca, menulis, dan berhitung dikaitkan dengan kehidupan nyata sehingga pembelajaran menjadi lebih bermakna.\n Pemilihan artefak ini juga relevan dengan perkembangan pemahaman saya sebagai calon guru. Saya menyadari bahwa keberhasilan pembelajaran tidak hanya ditentukan oleh seberapa baik guru menguasai materi, tetapi juga oleh kemampuan guru memahami peserta didik, membaca konteks, membangun hubungan, dan menyesuaikan pembelajaran dengan kebutuhan mereka. Prinsip tersebut dapat diterapkan tidak hanya pada komunitas dengan kondisi khusus seperti Orang Rimba, tetapi juga dalam pembelajaran di sekolah formal dengan karakteristik peserta didik yang beragam.",
            pdfLink: "/images/fppn-2.c.a-circle-of-viewpoints.pdf",
            pdfName: "fppn-2.c.a.pdf",
          },
          {
            no: 2,
            title: "Artefak 2: Analisis 4C & Refleksi Pergeseran Nilai Siswa",
            alasan:
              "Saya memilih artefak Memahami Kondisi Bangsa Indonesia karena mengajak saya melihat secara kritis kondisi moral dan pentingnya pendidikan nilai di lingkungan sekolah. Kasus yang diangkat membuat saya menyadari bahwa persoalan karakter peserta didik merupakan bagian penting yang perlu mendapat perhatian dalam proses pendidikan. \n Artefak ini relevan dengan peran saya sebagai calon guru karena guru tidak hanya bertugas menyampaikan pengetahuan, tetapi juga menjadi teladan dalam menanamkan nilai dan membentuk karakter peserta didik. Nilai-nilai tersebut perlu ditunjukkan melalui sikap dan perilaku guru dalam keseharian, bukan hanya disampaikan sebagai materi.",

            pdfLink: "/images/fppn-3.c-4c-circle-viewpoints.pdf",
            pdfName: "fppn-3.c.pdf",
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
                    Filosofi Pendidikan dan Pendidikan Nilai
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
                  src="/images/fppn-images.png"
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
