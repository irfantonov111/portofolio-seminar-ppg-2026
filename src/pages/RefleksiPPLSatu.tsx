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

export const RefleksiPPLSatu = () => {
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
                Refleksi Praktik Pengalaman Lapangan
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Setelah mempelajari Pemahaman Tentang Peserta Didik dan PPL
                menjadi pengalaman yang mempertemukan pemahaman dari perkuliahan
                dengan kondisi pembelajaran secara langsung di sekolah. Melalui
                orientasi dan observasi manajemen sekolah, observasi lingkungan
                belajar, asistensi mengajar, hingga pembelajaran terbimbing,
                diperoleh pemahaman bahwa tugas guru tidak hanya menyampaikan
                materi, tetapi juga memahami peserta didik, mengelola kelas,
                memilih strategi dan media pembelajaran, serta melakukan asesmen
                dan refleksi. Keterkaitan tersebut semakin terasa ketika
                melaksanakan praktik mengajar terbimbing dan memperoleh
                penilaian serta umpan balik dari guru pamong pada setiap siklus.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Selama pelaksanaan PPL, terdapat tantangan dalam menerapkan
                konsep yang telah dipelajari ke dalam situasi kelas yang nyata.
                Kondisi peserta didik, suasana kelas, keterbatasan waktu, serta
                respons terhadap metode dan media pembelajaran tidak selalu
                sesuai dengan rencana. Praktik mengajar terbimbing siklus 1, 2,
                dan 3 menjadi proses untuk mengenali bagian pembelajaran yang
                sudah berjalan baik maupun yang masih perlu diperbaiki.
                Pengalaman tersebut memberikan pemahaman bahwa guru perlu mampu
                membaca kondisi kelas, menyesuaikan pembelajaran, dan
                menggunakan umpan balik sebagai dasar untuk meningkatkan
                kualitas pembelajaran.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Pengalaman yang paling berkesan adalah praktik mengajar
                terbimbing karena menjadi kesempatan untuk menerapkan berbagai
                kompetensi yang dipelajari, mulai dari menerapkan Pembelajaran
                Mendalam, memahami peserta didik, menyampaikan materi,
                menggunakan media, hingga mengelola suasana kelas. Latar
                belakang yang bukan dari Sarjana Pendidikan membuat proses
                tersebut menjadi pengalaman belajar yang penting dalam membangun
                kompetensi pedagogik. Ke depan, pembelajaran ingin dirancang dan
                dilaksanakan dengan lebih reflektif, terutama dalam memilih
                metode, media, aktivitas, dan bentuk pendampingan agar peserta
                didik lebih aktif terlibat. PPL menjadi dasar untuk membangun
                kebiasaan merencanakan, melaksanakan, menerima umpan balik,
                merefleksikan, dan memperbaiki pembelajaran secara
                berkelanjutan.
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
                src="/images/ppl.png"
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
                      Praktik Pengalaman Lapangan (PPL) memberikan keterkaitan
                      yang kuat antara materi perkuliahan dengan peran sebagai
                      calon guru karena menjadi ruang untuk menerapkan
                      pengetahuan dan konsep yang telah dipelajari ke dalam
                      situasi pembelajaran yang nyata. Melalui orientasi dan
                      observasi manajemen sekolah, observasi lingkungan belajar,
                      asistensi mengajar, hingga pembelajaran terbimbing,
                      diperoleh gambaran bahwa tugas guru tidak hanya berkaitan
                      dengan penyampaian materi, tetapi juga memahami
                      karakteristik peserta didik, mengelola lingkungan belajar,
                      merancang pembelajaran, melaksanakan asesmen, serta
                      melakukan refleksi untuk memperbaiki proses pembelajaran.
                    </p>
                    <br />
                    <p>
                      Keterkaitan tersebut semakin terlihat dalam praktik
                      asistensi mengajar dan pembelajaran terbimbing. Pada tahap
                      asistensi, pembelajaran yang dilakukan oleh guru menjadi
                      pengalaman untuk mengamati bagaimana materi disampaikan,
                      bagaimana kelas dikelola, bagaimana guru merespons kondisi
                      peserta didik, serta bagaimana kegiatan pembelajaran
                      disesuaikan dengan situasi di kelas. Pengalaman tersebut
                      kemudian menjadi bekal ketika mulai melaksanakan praktik
                      mengajar terbimbing secara langsung dengan pendampingan
                      guru pamong.
                    </p>
                    <br />
                    <p>
                      Praktik mengajar terbimbing menjadi pengalaman penting
                      dalam mengembangkan kompetensi pedagogik. Setiap siklus
                      memberikan kesempatan untuk melihat kembali proses
                      pembelajaran, mulai dari apersepsi, kegiatan inti,
                      penggunaan media, keterlibatan peserta didik, respons
                      peserta didik, hingga pengelolaan kelas. Penilaian dan
                      umpan balik dari guru pamong membantu mengidentifikasi
                      bagian pembelajaran yang sudah berjalan baik dan bagian
                      yang masih perlu diperbaiki. Dengan demikian, PPL menjadi
                      proses yang menghubungkan teori perkuliahan dengan praktik
                      nyata sekaligus membangun kemampuan untuk menjadi guru
                      yang reflektif.
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
                      Konsep utama yang dipelajari selama PPL adalah bahwa
                      pembelajaran merupakan proses yang perlu dirancang
                      berdasarkan kebutuhan peserta didik, tujuan pembelajaran,
                      kondisi lingkungan belajar, dan pengalaman belajar yang
                      ingin dibangun. Topik orientasi dan observasi manajemen
                      sekolah memberikan pemahaman mengenai bagaimana sekolah
                      dikelola sebagai lingkungan pendidikan. Observasi
                      lingkungan belajar membantu melihat bahwa kondisi fisik
                      maupun suasana sosial di kelas dapat memengaruhi proses
                      belajar. Sementara itu, asistensi mengajar dan
                      pembelajaran terbimbing memberikan kesempatan untuk
                      menerapkan pemahaman tersebut secara langsung dalam
                      kegiatan pembelajaran.
                    </p>
                    <br />
                    <p>
                      Pengalaman yang paling berkesan adalah ketika melaksanakan
                      praktik mengajar terbimbing. Pada tahap ini, berbagai
                      konsep yang sebelumnya dipelajari dalam perkuliahan mulai
                      dihadapkan pada situasi nyata. Mulai dari menerapkan
                      konsep Pembelajaran Mendalam, memahami karakteristik dan
                      kebutuhan peserta didik, menyampaikan materi, menggunakan
                      media pembelajaran, membangun interaksi, mengelola suasana
                      kelas, hingga melakukan refleksi terhadap proses
                      pembelajaran.
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
                    <p>
                      Praktik mengajar terbimbing juga memberikan pemahaman
                      bahwa pembelajaran yang baik tidak selalu berjalan persis
                      seperti yang direncanakan. Guru perlu mampu membaca
                      situasi dan menyesuaikan pembelajaran tanpa kehilangan
                      tujuan yang telah ditetapkan. Penilaian pada siklus 1, 2,
                      dan 3 menjadi bagian penting dalam proses tersebut karena
                      memberikan gambaran mengenai perkembangan kemampuan
                      mengajar. Umpan balik guru pamong membantu melihat hal-hal
                      yang sebelumnya mungkin belum disadari, baik dalam
                      apersepsi, kegiatan inti, penggunaan media, keterlibatan
                      peserta didik, maupun pengelolaan kelas.
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
                      Tantangan yang muncul selama PPL adalah menerapkan konsep
                      yang telah dipelajari dalam perkuliahan ke dalam kondisi
                      kelas yang nyata. Dalam perkuliahan, konsep pembelajaran
                      dapat dipahami melalui teori, contoh kasus, dan rancangan
                      pembelajaran. Namun, ketika diterapkan di kelas, terdapat
                      berbagai kondisi yang perlu direspons secara langsung,
                      seperti perbedaan kemampuan peserta didik, tingkat
                      keaktifan, suasana kelas, keterbatasan waktu, dan respons
                      peserta didik terhadap metode maupun media yang digunakan.
                    </p>
                    <br />
                    <p>
                      Perbedaan tersebut terlihat ketika melaksanakan praktik
                      mengajar terbimbing siklus 1, 2, dan 3. Pada siklus awal,
                      perhatian masih cukup banyak tertuju pada bagaimana materi
                      dapat disampaikan sesuai dengan rencana. Seiring
                      pelaksanaan dan mendapatkan umpan balik dari guru pamong,
                      mulai terlihat bahwa keberhasilan pembelajaran tidak hanya
                      ditentukan oleh tersampaikannya materi, tetapi juga oleh
                      kemampuan guru dalam membangun apersepsi, melibatkan
                      peserta didik, mengelola suasana kelas, memberikan
                      instruksi yang jelas, serta menyesuaikan pembelajaran
                      dengan kondisi peserta didik.
                    </p>
                    <br />
                    <p>
                      Tantangan lainnya adalah penggunaan media pembelajaran.
                      Media tidak cukup hanya digunakan sebagai alat bantu untuk
                      menjelaskan materi, tetapi perlu dipikirkan sejauh mana
                      media tersebut mampu mendorong partisipasi aktif peserta
                      didik. Begitu pula dengan metode pembelajaran. Metode yang
                      telah dirancang sebelumnya belum tentu berjalan sesuai
                      harapan ketika diterapkan di kelas. Kondisi tersebut
                      menuntut adanya fleksibilitas untuk menyesuaikan strategi
                      pembelajaran berdasarkan respons peserta didik.
                    </p>
                    <br />
                    <p>
                      Pengalaman tersebut menunjukkan bahwa menjadi guru tidak
                      cukup hanya menguasai materi. Guru juga perlu memiliki
                      kemampuan pedagogik untuk membaca kondisi kelas, mengambil
                      keputusan selama pembelajaran, dan melakukan perbaikan
                      berdasarkan hasil pengamatan serta umpan balik. Hal inilah
                      yang menjadi tantangan sekaligus proses belajar yang
                      penting selama PPL.
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
                      Setelah mengikuti rangkaian PPL, perubahan yang ingin
                      dilakukan adalah menjadi lebih reflektif dalam merancang
                      dan melaksanakan pembelajaran. Pembelajaran tidak lagi
                      hanya dipandang dari apakah materi telah tersampaikan atau
                      kegiatan dapat diselesaikan, tetapi juga dari bagaimana
                      peserta didik mengalami proses belajar dan sejauh mana
                      mereka terlibat dalam pembelajaran.
                    </p>
                    <br />
                    <p>
                      Dalam praktik pembelajaran berikutnya, beberapa hal yang
                      ingin diperbaiki adalah memperkuat apersepsi agar lebih
                      relevan dengan pengalaman peserta didik, memberikan
                      instruksi yang lebih jelas, memilih media yang benar-benar
                      mendukung keterlibatan peserta didik, serta mengelola
                      waktu dan suasana kelas dengan lebih baik. Ketika peserta
                      didik mengalami kesulitan, pendampingan juga perlu
                      diberikan secara bertahap agar peserta didik tetap
                      memiliki kesempatan untuk berpikir dan mencoba sebelum
                      mendapatkan bantuan lebih lanjut.
                    </p>
                    <br />

                    <p>
                      Umpan balik dari guru pamong juga menjadi dasar untuk
                      tidak berhenti pada satu cara mengajar. Jika suatu metode
                      belum mampu melibatkan peserta didik secara optimal, unsur
                      pembelajaran yang kurang efektif perlu dianalisis dan
                      diperbaiki, baik dari metode, aktivitas, media, instruksi,
                      maupun bentuk interaksi. Perubahan tersebut tidak berarti
                      mengganti seluruh pembelajaran, tetapi melakukan
                      penyesuaian berdasarkan kondisi nyata di kelas.
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
            title: "Artefak 1: Dokumen Refleksi Praktik Mengajar Terbimbing",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/LK.4.PPLT-Irfan Hananto-95202536N.pdf",
          },
          {
            title: "Artefak 2 : Website Portofolio",
            description:
              "Berikut link website portofolio : https://portofolio-ppg-five.vercel.app/ ",
            colorClass: "border-emerald-100",
            pdfUrl: "/images/WebsitePortofolio.pdf",
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
            title: "Artefak 1: Dokumen Refleksi Praktik Mengajar Terbimbing",
            alasan:
              "Artefak Refleksi Praktik Pembelajaran Terbimbing dipilih sebagai salah satu pendukung refleksi karena memberikan gambaran nyata mengenai proses perkembangan kemampuan mengajar selama pelaksanaan PPL. Artefak ini memuat hasil penilaian dan refleksi dari siklus 1, 2, dan 3, sehingga dapat menunjukkan bagaimana proses pembelajaran dievaluasi secara bertahap, mulai dari kegiatan apersepsi, kegiatan inti, penggunaan media pembelajaran, keterlibatan dan respons peserta didik, hingga pengelolaan pembelajaran secara keseluruhan.\n Artefak ini menjadi penting karena setiap siklus memberikan kesempatan untuk melihat bagian pembelajaran yang sudah berhasil dan bagian yang masih perlu diperbaiki. Umpan balik dari guru pamong membantu mengidentifikasi hal-hal yang mungkin belum terlihat selama proses mengajar, sekaligus menjadi dasar untuk melakukan perbaikan pada praktik berikutnya. Selain itu, refleksi terhadap efektivitas media dan respons peserta didik memberikan pemahaman bahwa keberhasilan suatu pembelajaran tidak hanya dilihat dari tersampaikannya materi, tetapi juga dari keterlibatan peserta didik selama proses pembelajaran.\n Pemilihan artefak ini juga berkaitan dengan perkembangan kompetensi pedagogik sebagai calon guru. Melalui proses refleksi pada setiap siklus, mulai dipahami pentingnya menyesuaikan metode, media, dan aktivitas pembelajaran dengan kondisi peserta didik. Pertanyaan mengenai unsur pembelajaran yang perlu diubah apabila praktik dilakukan kembali menjadi bagian penting dalam membangun kebiasaan untuk tidak hanya melaksanakan pembelajaran, tetapi juga mengevaluasi dan memperbaikinya secara berkelanjutan.\n Dengan demikian, artefak Refleksi Praktik Pembelajaran Terbimbing dipilih karena menjadi bukti proses belajar dalam mengembangkan kemampuan mengajar melalui praktik, penilaian, umpan balik, dan refleksi. Artefak ini menunjukkan bahwa PPL tidak hanya memberikan pengalaman mengajar di kelas, tetapi juga membantu membangun sikap sebagai calon guru yang terbuka terhadap evaluasi, mampu mengenali kekurangan, dan berupaya melakukan perbaikan dalam pembelajaran berikutnya.",
            pdfLink: "/images/LK.4.PPLT-Irfan Hananto-95202536N.pdf ",
            pdfName: "LK.4.PPLT-Irfan Hananto-95202536N.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : Website Portofolio",
            alasan:
              "Artefak E-Portfolio PPL dipilih sebagai salah satu pendukung refleksi karena website ini mendokumentasikan proses dan perkembangan selama mengikuti PPL secara menyeluruh. Di dalamnya terdapat profil sebagai calon guru, tujuan dan model guru yang ingin dibangun, berbagai perangkat dan produk pembelajaran, media, contoh hasil kerja peserta didik, dokumentasi praktik mengajar, serta penilaian dan umpan balik dari guru pamong dan DPL. Keseluruhan isi tersebut memberikan gambaran mengenai proses belajar dan pengalaman yang diperoleh selama menjalani PPL.\n Website ini tidak hanya berisi kumpulan produk, tetapi juga memuat analisis dan refleksi terhadap setiap pengalaman pembelajaran. Setiap artefak dikaji berdasarkan konteks, tujuan, kelebihan, kekurangan, serta keterkaitannya dengan konsep dan teori yang telah dipelajari. Refleksi akhir juga membantu melihat kembali hal-hal yang telah dipelajari, tantangan yang dihadapi, cara mengatasinya, serta umpan balik yang dapat digunakan untuk melakukan perbaikan pada praktik pembelajaran berikutnya. Proses tersebut memberikan kesempatan untuk melihat perkembangan kemampuan mengajar secara lebih utuh, mulai dari tahap observasi dan asistensi hingga praktik pembelajaran terbimbing.\n Pemilihan artefak ini juga didasarkan pada adanya proses merumuskan filosofi mengajar dan karakter guru yang ingin dibangun. Melalui proses tersebut, mulai dipahami bahwa menjadi guru profesional tidak hanya membutuhkan penguasaan materi, tetapi juga kompetensi pedagogik, kemampuan memahami peserta didik, keterampilan mengelola pembelajaran, keterbukaan terhadap umpan balik, serta kemauan untuk terus melakukan refleksi dan perbaikan. Hal ini menjadi bagian penting dalam proses membangun identitas sebagai calon guru, terutama karena latar belakang sebelumnya bukan dari Sarjana Pendidikan.\n Dengan demikian, E-Portfolio PPL dipilih karena mampu merepresentasikan perjalanan belajar secara utuh, mulai dari pengalaman mengamati, merancang, melaksanakan, mengevaluasi, menerima umpan balik, hingga merefleksikan praktik pembelajaran. Website ini menjadi bukti bahwa PPL bukan hanya memberikan pengalaman mengajar, tetapi juga membantu membangun pemahaman, kompetensi pedagogik, dan arah pengembangan diri sebagai calon guru profesional.",

            pdfLink: "/images/WebsitePortofolio.pdf",
            pdfName: "WebsitePortofolio.pdf",
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
                    Praktik Pengalaman Lapangan
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
                  src="/images/ppl.png"
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
