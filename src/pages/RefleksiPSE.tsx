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

export const RefleksiPSE= () => {
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
                Refleksi Pembelajaran Sosial Emosional
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Mata kuliah Pembelajaran Sosial Emosional memberikan pemahaman kepada saya bahwa tugas guru tidak hanya menyampaikan materi, tetapi juga membantu peserta didik mengenali dan mengelola emosi, membangun hubungan yang positif, serta mengambil keputusan secara bertanggung jawab. Melalui materi Pembelajaran Sosial Emosional berbasis CASEL, saya mempelajari lima kompetensi utama, yaitu kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab. Saya juga memahami pentingnya EMC2 (Empathy, Mindfulness, Compassion, dan Critical Inquiry) sebagai landasan bagi guru dalam membangun hubungan yang positif dengan peserta didik dan menjadi teladan melalui sikap serta tindakan sehari-hari.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Materi yang dipelajari juga memperkuat pemahaman saya mengenai pentingnya guru menjadi teladan, menerapkan Experiential Learning, dan menciptakan School Wellbeing. Guru perlu mampu mengelola emosi, berkomunikasi dengan baik, serta menghadapi berbagai perilaku peserta didik secara bijaksana. Saya paling tertarik dengan pendekatan Experiential Learning karena peserta didik memperoleh pemahaman melalui pengalaman langsung, praktik, dan refleksi. Pendekatan ini dapat diterapkan pada pembelajaran kejuruan, misalnya melalui simulasi dan identifikasi risiko K3LH, sehingga peserta didik tidak hanya memahami konsep, tetapi juga belajar mengambil keputusan dan bertanggung jawab.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
               Melalui mata kuliah ini, saya menyadari bahwa keterampilan sosial emosional perlu diintegrasikan dalam kegiatan pembelajaran, bukan hanya diajarkan sebagai materi tersendiri. Dalam praktik mengajar, saya berupaya menerapkan emotional check-in untuk mengetahui kondisi peserta didik, membimbing mereka menghadapi kesulitan melalui langkah STOP–CEK–COBA–REFLEKSI, serta melakukan refleksi pada akhir pembelajaran. Ke depannya, saya ingin terus mengembangkan kemampuan mengelola emosi dan membangun lingkungan belajar yang aman, nyaman, dan saling menghargai agar peserta didik dapat berkembang secara akademik, sosial, dan emosional.
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
                src="/images/pse.png"
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
                    <p>Mata kuliah Pembelajaran Sosial Emosional memberikan pemahaman kepada saya bahwa tugas guru tidak hanya menyampaikan materi dan mengembangkan kemampuan akademik peserta didik, tetapi juga menciptakan lingkungan belajar yang aman, nyaman, dan mendukung perkembangan sosial emosional mereka. Melalui kerangka CASEL, saya mempelajari lima kompetensi utama, yaitu kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab. Kompetensi tersebut berkaitan langsung dengan peran saya sebagai calon guru, terutama ketika menghadapi peserta didik dengan karakter, perilaku, dan kondisi emosional yang beragam. Guru perlu mampu mengenali emosinya sendiri, mengendalikan respons ketika menghadapi situasi sulit, serta mengambil keputusan secara bijaksana tanpa merendahkan atau menyakiti peserta didik.</p>
                    <br />
                    <p>Pemahaman ini relevan dengan pengalaman saya selama PPL, khususnya ketika mengelola pembelajaran praktik yang membutuhkan kedisiplinan, kerja sama, dan keterlibatan aktif peserta didik. Ketika kelas kurang kondusif atau peserta didik mengalami kesulitan dalam mengikuti pembelajaran, saya perlu menjaga ketenangan dan memilih pendekatan yang mendidik. Konsep EMC2 (Empathy, Mindfulness, Compassion, dan Critical Inquiry) juga mengajarkan pentingnya memahami sudut pandang peserta didik, menyadari kondisi diri sebelum bertindak, menunjukkan kepedulian, serta mengkaji permasalahan secara kritis. Dengan demikian, saya memahami bahwa keteladanan guru tidak hanya ditunjukkan melalui penguasaan materi, tetapi juga melalui cara berbicara, mengelola emosi, menyelesaikan konflik, dan membangun hubungan yang positif dengan peserta didik.</p>
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
                    <p>Konsep utama yang saya pelajari adalah bahwa Pembelajaran Sosial Emosional perlu menjadi bagian dari budaya dan praktik pembelajaran sehari-hari. Kerangka CASEL membantu guru mengembangkan lima kompetensi sosial emosional, sedangkan konsep EMC2 menekankan pentingnya empati, kesadaran penuh (mindfulness), kepedulian (compassion), dan penyelidikan kritis (critical inquiry) dalam menjalankan peran profesional. Studi kasus guru madrasah diniyah di Demak yang berhadapan dengan persoalan hukum setelah menampar murid juga menjadi pengingat bahwa niat mendisiplinkan peserta didik tidak serta-merta membenarkan tindakan yang dilakukan. Guru perlu mampu mengendalikan emosi dan memilih respons yang mendidik, proporsional, serta menghormati martabat peserta didik. Selain itu, konsep School Wellbeing memperluas pemahaman saya bahwa kesejahteraan di sekolah tidak hanya berkaitan dengan fasilitas fisik, tetapi juga rasa aman, hubungan sosial yang positif, dan dukungan emosional bagi warga sekolah.</p>
                    <br />
                    <p>Materi yang paling berkesan bagi saya adalah Topik 3, yaitu Experiential Learning. Pendekatan ini menekankan bahwa peserta didik membangun pemahaman melalui pengalaman langsung, refleksi terhadap pengalaman tersebut, pembentukan konsep, dan penerapannya dalam situasi lain. Sebagai calon guru kejuruan, saya melihat pendekatan ini relevan dengan pembelajaran praktik karena peserta didik tidak hanya mendengarkan penjelasan, tetapi juga melakukan, mengamati, mencoba, bekerja sama, dan mengevaluasi hasil kegiatannya. Melalui proses tersebut, guru dapat mengintegrasikan keterampilan sosial emosional, seperti komunikasi, tanggung jawab, pengelolaan emosi ketika menghadapi kegagalan, dan kemampuan menerima pendapat orang lain. Saya memahami bahwa pengalaman langsung akan lebih bermakna apabila disertai refleksi, sehingga peserta didik tidak hanya mengetahui apa yang dilakukan, tetapi juga memahami apa yang dipelajari dan bagaimana menerapkannya.</p>
                    
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
                    <p>Tantangan utama yang saya hadapi adalah membiasakan diri menerapkan pengelolaan emosi secara konsisten ketika menghadapi situasi kelas yang tidak kondusif. Dalam praktik PPL, guru perlu membagi perhatian antara penyampaian materi, pemantauan aktivitas peserta didik, pencapaian tujuan pembelajaran, dan penanganan permasalahan yang muncul selama kegiatan berlangsung. Kondisi tersebut dapat menuntut respons yang cepat, tetapi respons yang spontan belum tentu menjadi respons yang paling tepat secara pedagogis. Saya menyadari bahwa menjaga ketegasan tanpa melibatkan kemarahan, memberikan teguran tanpa mempermalukan peserta didik, dan menyelesaikan masalah tanpa tindakan yang merugikan merupakan keterampilan yang perlu terus dilatih.</p>
                    <br />
                   <p>Perbedaan yang saya sadari dari praktik mengajar sebelumnya adalah bahwa pengelolaan kelas tidak cukup hanya berfokus pada kepatuhan terhadap aturan dan kelancaran kegiatan pembelajaran. Pembelajaran Sosial Emosional mengarahkan saya untuk turut memperhatikan alasan di balik perilaku peserta didik, kondisi emosional mereka, serta kualitas hubungan yang terbentuk di kelas. Tantangan lainnya adalah mengintegrasikan kegiatan sosial emosional ke dalam pembelajaran tanpa menganggapnya sebagai kegiatan tambahan yang terpisah dari materi. Saya perlu merancang aktivitas yang melatih kerja sama, empati, tanggung jawab, dan refleksi, sekaligus mengelola waktu serta memastikan tujuan pembelajaran tetap tercapai. Hal ini menuntut kesiapan guru dalam merancang kegiatan, memberikan contoh perilaku, dan mengevaluasi proses pembelajaran secara berkelanjutan.</p>
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
                    <p>Setelah mempelajari mata kuliah ini, saya ingin membiasakan diri mengenali kondisi emosional sebelum dan selama mengajar, terutama ketika menghadapi kelas yang kurang kondusif. Saya akan berusaha mengambil jeda sebelum memberikan teguran, menggunakan komunikasi yang tegas tetapi tetap menghargai peserta didik, serta mencari penyebab perilaku sebelum menentukan tindakan. Saya juga ingin menerapkan kompetensi CASEL melalui kegiatan pembelajaran yang mendorong peserta didik mengenali perasaan, mengelola respons, bekerja sama, dan mengambil keputusan secara bertanggung jawab. Selain itu, saya akan berusaha menunjukkan keteladanan melalui kedisiplinan, konsistensi terhadap aturan, keterbukaan terhadap masukan, dan cara menyelesaikan masalah tanpa kekerasan verbal maupun fisik.</p>
                    <br />
                    <p>Saya juga ingin menerapkan Experiential Learning melalui kegiatan praktik, simulasi, diskusi, dan refleksi yang memberikan kesempatan kepada peserta didik untuk terlibat secara aktif. Setelah kegiatan, peserta didik tidak hanya dinilai berdasarkan hasil pekerjaannya, tetapi juga diajak merefleksikan proses, kerja sama, kendala, dan cara mereka mengelola emosi selama belajar. Dalam membangun School Wellbeing, saya ingin menciptakan suasana kelas yang aman untuk bertanya, mencoba, melakukan kesalahan, dan memperbaiki diri tanpa takut dipermalukan. Saya menyadari bahwa perubahan tersebut membutuhkan pembiasaan dan evaluasi berkelanjutan. Oleh karena itu, saya berkomitmen untuk terus mengembangkan kemampuan sosial emosional sebagai bagian dari profesionalitas guru, sehingga dapat mendukung perkembangan akademik sekaligus kesejahteraan peserta didik.</p>
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
            title: "Artefak 1: 1.E. Penerapan dan Evaluasi PSE Lingkungan Sekolah",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf",
          },
          {
            title: "Artefak 2 : 3.C. Studi Kasus Terpadu-Strategi Menerapkan Experiential Learning Di Sekolah.",
            description: "",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/3.C-Studi-Kasus-Terpadu-Strategi-Menerapkan-Experiential-Learning-Di-Sekolah.pdf",
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
              "Artefak 1 berupa Modul Ajar dengan integrasi Pembelajaran Sosial Emosional (PSE) dipilih sebagai bukti pendukung refleksi karena menunjukkan upaya saya mengintegrasikan kompetensi sosial emosional ke dalam pembelajaran praktik, bukan menjadikannya sebagai kegiatan yang terpisah dari materi. Modul ajar ini diterapkan pada materi Praktik Simulasi Jaringan menggunakan Cisco Packet Tracer. Pada awal pembelajaran, saya menerapkan emotional check-in untuk mengetahui kondisi emosional peserta didik melalui kategori Connected, Connecting, dan Disconnected. Kegiatan ini membantu saya memahami kesiapan peserta didik sebelum memulai praktik serta memberikan kesempatan bagi mereka untuk mengenali dan menyampaikan kondisi dirinya.\n Artefak ini menjadi penting karena kegiatan praktik jaringan dapat menghadirkan tantangan ketika peserta didik mengalami kesalahan konfigurasi (error) atau kesulitan menyelesaikan tugas. Dalam situasi tersebut, saya menerapkan teknik STOP–CEK–COBA–REFLEKSI agar peserta didik belajar menenangkan diri, memeriksa sumber kesalahan, mencoba alternatif penyelesaian, dan mengevaluasi proses yang telah dilakukan. Melalui pendekatan ini, kesalahan tidak hanya dipandang sebagai hambatan teknis, tetapi juga sebagai kesempatan untuk melatih kesabaran, pengelolaan emosi, ketekunan, dan kemampuan memecahkan masalah. Pada akhir pembelajaran, saya kembali melakukan emotional check-in untuk mengetahui kondisi peserta didik setelah mengikuti kegiatan praktik.\n Pemilihan artefak ini mencerminkan pemahaman saya bahwa keberhasilan pembelajaran tidak hanya ditentukan oleh kemampuan peserta didik menyelesaikan konfigurasi jaringan, tetapi juga oleh proses mereka menghadapi kesulitan dan mengelola emosi selama belajar. Melalui integrasi PSE, saya ingin membangun suasana pembelajaran yang mendukung peserta didik untuk berani mencoba, tidak mudah menyerah, dan mampu merefleksikan pengalaman belajarnya. Artefak ini menjadi dasar bagi saya untuk terus mengembangkan pembelajaran yang mengintegrasikan keterampilan teknis dengan kemampuan sosial emosional sebagai bagian dari pembentukan kompetensi peserta didik secara utuh.",
            
              pdfLink: "/images/Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf",
            pdfName: "Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : 3.C. Studi Kasus Terpadu Strategi Menerapkan-Experiential-Learning Di Sekolah",
            alasan:
           "Artefak kedua berupa slide presentasi kelompok dengan judul Studi Kasus Terpadu: Strategi Menerapkan Experiential Learning di Sekolah dipilih sebagai bukti pendukung refleksi karena menunjukkan pemahaman saya mengenai penerapan pendekatan Experiential Learning dalam pembelajaran. Dalam penyusunan slide tersebut, kelompok saya menggunakan materi K3LH (Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup) pada kelas X TKJ dalam mata pelajaran Dasar Program Keahlian (DPK). Materi ini dipilih karena berkaitan erat dengan situasi nyata yang akan dihadapi peserta didik ketika melakukan praktik di bidang teknik komputer dan jaringan, sehingga pembelajaran dapat dikaitkan langsung dengan pengalaman sehari-hari di lingkungan sekolah maupun dunia kerja.\n Melalui studi kasus tersebut, saya memahami bahwa Experiential Learning tidak hanya berfokus pada penyampaian teori, tetapi juga memberikan kesempatan kepada peserta didik untuk mengalami, mengamati, menganalisis, dan merefleksikan suatu permasalahan. Pada materi K3LH, pendekatan ini dapat diterapkan melalui simulasi situasi kerja, identifikasi potensi bahaya di laboratorium, serta diskusi mengenai tindakan yang tepat untuk menjaga keselamatan. Kegiatan tersebut dapat membantu peserta didik memahami pentingnya prosedur keselamatan sekaligus melatih kemampuan berpikir kritis, memecahkan masalah, bekerja sama, dan bertanggung jawab terhadap keselamatan diri maupun orang lain.\n Pemilihan artefak ini juga mencerminkan pemahaman saya bahwa pembelajaran yang bermakna perlu menghubungkan konsep dengan pengalaman nyata. Melalui proses penyusunan dan presentasi kelompok, saya memperoleh kesempatan untuk mengkaji strategi penerapan Experiential Learning secara lebih kontekstual. Ke depannya, pemahaman ini menjadi bekal bagi saya untuk merancang pembelajaran yang tidak hanya berorientasi pada penguasaan pengetahuan dan keterampilan teknis, tetapi juga membentuk sikap disiplin, kepedulian, dan tanggung jawab peserta didik dalam menerapkan K3LH selama kegiatan praktik.",
           pdfLink: "/images/3.C-Studi-Kasus-Terpadu-Strategi-Menerapkan-Experiential-Learning-Di-Sekolah.pdf",
            pdfName: "3.C-Studi-Kasus-Terpadu-Strategi-Menerapkan-Experiential-Learning-Di-Sekolah.pdf",
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
                    Pembelajaran Sosial Emosional
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
                  src="/images/pse.png"
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