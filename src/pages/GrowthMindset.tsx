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

export const GrowthMindset = () => {
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
                Mata kuliah Growth Mindset memberikan cara pandang baru bagi
                saya dalam memahami bagaimana peserta didik belajar dan
                berkembang. Sebelumnya, saya cenderung melihat kemampuan peserta
                didik berdasarkan hasil yang tampak pada saat itu, misalnya
                ketika peserta didik mampu atau belum mampu memahami suatu
                materi. Setelah mempelajari pola pikir bertumbuh, saya memahami
                bahwa kemampuan seseorang bukan sesuatu yang sepenuhnya tetap,
                tetapi dapat berkembang melalui proses belajar, pengalaman,
                latihan, dan dukungan yang tepat.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Salah satu materi yang paling berkesan bagi saya adalah
                neuroplastisitas, yaitu kemampuan otak untuk mengubah, mengatur
                ulang, dan membentuk koneksi saraf baru sebagai respons terhadap
                pembelajaran dan pengalaman. Pemahaman ini membuat saya
                menyadari bahwa ketika seorang peserta didik mengatakan “Saya
                tidak bisa”, pernyataan tersebut tidak seharusnya langsung
                dianggap sebagai batas kemampuan. Ada kemungkinan peserta didik
                tersebut “belum bisa” karena masih membutuhkan waktu,
                pengalaman, latihan, atau bantuan yang sesuai.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                Saya juga memahami perbedaan antara growth mindset dan fixed
                mindset, terutama dalam cara seseorang memandang tantangan,
                kegagalan, kritik, keberhasilan orang lain, dan proses belajar.
                Growth mindset memandang tantangan sebagai kesempatan untuk
                berkembang, kegagalan sebagai bagian dari proses, kritik sebagai
                masukan, keberhasilan orang lain sebagai inspirasi, serta lebih
                berfokus pada proses daripada sekadar hasil akhir.
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
                src="/images/gm.png"
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
                      Materi Growth Mindset memiliki kaitan yang sangat kuat
                      dengan peran saya sebagai calon guru. Dalam pembelajaran,
                      guru tidak hanya bertugas menyampaikan materi, tetapi juga
                      membantu peserta didik membangun keyakinan bahwa mereka
                      mampu berkembang. Hal ini menjadi penting karena setiap
                      peserta didik memiliki kemampuan awal, pengalaman, dan
                      kecepatan belajar yang berbeda.
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
                      Pemahaman mengenai neuroplastisitas juga membuat saya
                      semakin menyadari bahwa proses belajar memiliki peran
                      dalam perkembangan kemampuan peserta didik. Oleh karena
                      itu, sebagai calon guru, saya perlu membangun lingkungan
                      pembelajaran yang memberikan ruang bagi peserta didik
                      untuk mencoba, melakukan kesalahan, mendapatkan umpan
                      balik, dan mencoba kembali. Guru perlu membantu peserta
                      didik memahami bahwa kemampuan dapat berkembang melalui
                      proses, bukan sesuatu yang hanya ditentukan oleh kemampuan
                      awal.
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
                      Konsep utama yang paling saya pahami dari mata kuliah ini
                      adalah neuroplastisitas dan perbedaan antara growth
                      mindset dan fixed mindset.
                    </p>
                    <br />
                    <p>
                      Neuroplastisitas memberikan pemahaman kepada saya bahwa
                      otak memiliki kemampuan untuk berubah dan membentuk
                      koneksi baru melalui proses belajar dan pengalaman. Konsep
                      ini memperkuat pemahaman saya bahwa kemampuan peserta
                      didik tidak seharusnya dilihat sebagai sesuatu yang
                      bersifat tetap. Peserta didik yang saat ini mengalami
                      kesulitan bukan berarti akan selalu mengalami kesulitan
                      yang sama. Dengan latihan, pengalaman, strategi yang
                      tepat, dan dukungan dari lingkungan belajar, kemampuan
                      tersebut dapat berkembang.
                    </p>
                    <br />
                    <p>
                      Sementara itu, perbedaan growth mindset dan fixed mindset
                      membantu saya memahami bahwa pola pikir seseorang dapat
                      memengaruhi responsnya terhadap proses belajar. Peserta
                      didik dengan fixed mindset cenderung menghindari
                      tantangan, mudah melihat kegagalan sebagai bukti
                      ketidakmampuan, sulit menerima kritik, merasa terancam
                      oleh keberhasilan orang lain, dan lebih berorientasi pada
                      hasil. Sebaliknya, growth mindset mendorong peserta didik
                      untuk berani menghadapi tantangan, memandang kegagalan
                      sebagai bagian dari proses, terbuka terhadap masukan,
                      belajar dari keberhasilan orang lain, dan menghargai
                      perkembangan yang terjadi selama proses belajar.
                    </p>
                    <br />
                    <p>
                      Konsep sederhana yang paling melekat bagi saya adalah
                      perubahan kata “tidak bisa” menjadi “belum bisa”.
                      Perubahan satu kata tersebut sebenarnya memiliki makna
                      yang besar. “Tidak bisa” seolah-olah memberikan batas
                      akhir terhadap kemampuan, sedangkan “belum bisa”
                      menunjukkan bahwa masih terdapat kemungkinan untuk
                      berkembang. Bagi saya sebagai calon guru, konsep sederhana
                      ini dapat menjadi bagian dari pembiasaan bahasa positif
                      dalam pembelajaran.
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
                      Hal yang menjadi tantangan bagi saya adalah adanya
                      perbedaan antara pemahaman mengenai Growth Mindset dengan
                      kondisi nyata yang saya temui selama PPL. Secara teori,
                      peserta didik dapat diarahkan untuk memiliki pola pikir
                      bertumbuh. Namun, dalam praktiknya, mengubah keyakinan
                      peserta didik yang sudah terbentuk tidak dapat dilakukan
                      hanya melalui penjelasan atau ceramah.
                    </p>
                    <br />
                    <p>
                      Salah satu tantangan yang saya bayangkan sekaligus temui
                      dalam pembelajaran adalah ketika peserta didik mengatakan,
                      “Saya memang tidak bisa, Pak. Saya dari sananya memang
                      tidak bisa.” Pernyataan tersebut menunjukkan bahwa peserta
                      didik sudah memberikan batas terhadap kemampuan dirinya.
                      Jika guru hanya mengatakan, “Kamu harus percaya diri” atau
                      “Jangan berpikir seperti itu”, perubahan mindset belum
                      tentu terjadi karena peserta didik membutuhkan pengalaman
                      nyata bahwa dirinya memang mampu berkembang.
                    </p>
                    <br />
                    <p>
                      Di sinilah saya melihat pentingnya peran guru sebagai agen
                      scaffolding. Guru perlu memberikan bantuan secara bertahap
                      sesuai kebutuhan peserta didik, bukan langsung mengambil
                      alih pekerjaan mereka. Misalnya, ketika peserta didik
                      mengalami kesulitan dalam praktik, guru dapat memberikan
                      petunjuk kecil, mengarahkan pada langkah yang belum
                      dipahami, memberikan contoh, kemudian memberikan
                      kesempatan kepada peserta didik untuk mencoba kembali
                      secara mandiri.
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
                    <br />
                    <p>
                      Dengan demikian, tantangan dalam menerapkan Growth Mindset
                      bukan hanya bagaimana menjelaskan konsepnya kepada peserta
                      didik, tetapi bagaimana menciptakan pengalaman belajar
                      yang membuat peserta didik merasakan bahwa dirinya dapat
                      berkembang. Perubahan mindset perlu dibangun melalui
                      pengalaman, interaksi, umpan balik, dan pembiasaan yang
                      konsisten.
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
                      Setelah mempelajari Growth Mindset, perubahan yang ingin
                      saya lakukan adalah mulai menerapkannya melalui hal-hal
                      sederhana dan konsisten dalam pembelajaran, bukan hanya
                      menyampaikan teori tentang growth mindset kepada peserta
                      didik.
                    </p>
                    <br />
                    <p>
                      Salah satunya adalah membiasakan peserta didik mengubah
                      ungkapan “tidak bisa” menjadi “belum bisa”. Ketika peserta
                      didik mengatakan, “Saya tidak bisa mengerjakan ini,” saya
                      ingin merespons dengan membantu mereka melihat bagian mana
                      yang belum dikuasai dan apa yang dapat dilakukan untuk
                      mencapainya. Dengan demikian, peserta didik diarahkan
                      untuk melihat kesulitan sebagai sesuatu yang masih dapat
                      diatas
                    </p>
                    <br />

                    <p>
                      Saya juga ingin memberikan scaffolding pada setiap
                      perkembangan peserta didik. Apresiasi tidak hanya
                      diberikan ketika peserta didik memperoleh hasil akhir yang
                      baik, tetapi juga ketika terdapat perkembangan dalam
                      prosesnya. Misalnya, saya dapat mengatakan, “Kamu hebat,
                      kamu sudah bisa sampai tahap ini. Selanjutnya, bagian ini
                      masih perlu kamu tingkatkan.” Kalimat tersebut tidak hanya
                      memberikan apresiasi, tetapi juga memberikan arah bagi
                      perkembangan berikutnya.
                    </p>
                    <br />
                    <p>
                      Selain itu, saya ingin memberikan umpan balik yang lebih
                      berfokus pada usaha, strategi, proses, dan perkembangan
                      peserta didik, bukan hanya pada benar atau salahnya hasil
                      akhir. Peserta didik yang awalnya belum mampu kemudian
                      berhasil menyelesaikan sebagian tugas perlu mendapatkan
                      pengakuan atas perkembangan tersebut. Dengan cara ini,
                      peserta didik dapat memahami bahwa kemajuan kecil
                      sekalipun merupakan bagian dari proses belajar.
                    </p>
                    <br />
                    <p>
                      Pada akhirnya, saya memahami bahwa membangun Growth
                      Mindset bukanlah perubahan yang dapat terjadi dalam satu
                      kali pembelajaran. Guru perlu menjadi teladan melalui cara
                      berbicara, memberikan umpan balik, merespons kesalahan,
                      dan memberikan kesempatan kepada peserta didik untuk
                      mencoba kembali. Sebagai calon guru, saya ingin menjadikan
                      kelas sebagai tempat di mana peserta didik tidak takut
                      mengatakan “saya belum bisa”, karena mereka mengetahui
                      bahwa belum bisa bukan berarti tidak mampu, tetapi
                      merupakan bagian dari proses menuju bisa.
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
            title: "Artefak 1: Poster Growth Mindset",
            description: "",
            colorClass: "border-blue-100",
            pdfUrl: "/images/95202536N_Irfan Hananto_Poster Growth Mindset.pdf",
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
            title: "Artefak 1: Poster Growth Mindset",
            alasan:
              "Artefak yang saya pilih dalam mata kuliah Growth Mindset adalah tugas membuat poster “Cara Menumbuhkan Growth Mindset di Kelas”. Saya memilih artefak ini karena poster tersebut merupakan salah satu hasil pembelajaran yang membantu saya menerjemahkan konsep Growth Mindset ke dalam bentuk yang sederhana dan mudah diterapkan dalam pembelajaran.\n Isi poster memuat enam cara untuk menumbuhkan Growth Mindset di kelas, yaitu berani mencoba dan tidak takut gagal, pantang menyerah dan terus mencoba, memahami bahwa kesalahan merupakan bagian dari belajar, belajar bersama dan berkolaborasi, menghargai sekecil apa pun kemajuan yang dicapai, serta memiliki rasa ingin tahu dan kemauan untuk mencoba hal baru.\n Bagi saya, keenam poin tersebut tidak hanya menjadi pesan untuk peserta didik, tetapi juga menjadi pengingat bagi saya sebagai calon guru mengenai lingkungan belajar yang perlu dibangun di kelas. Peserta didik perlu diberikan kesempatan untuk mencoba tanpa takut salah, memperoleh dukungan ketika mengalami kesulitan, dan mendapatkan apresiasi terhadap perkembangan yang mereka capai. Hal ini sejalan dengan pemahaman saya mengenai Growth Mindset bahwa kemampuan peserta didik dapat berkembang melalui proses belajar, latihan, pengalaman, dan dukungan yang tepat.\n Artefak ini juga memperkuat pemahaman saya bahwa penerapan Growth Mindset tidak harus selalu dilakukan melalui penjelasan teori yang panjang. Perubahan dapat dimulai dari hal-hal sederhana dalam pembelajaran, seperti membiasakan peserta didik untuk berani mencoba, tidak menyerah ketika mengalami kesulitan, melihat kesalahan sebagai bagian dari proses, serta menghargai kemajuan sekecil apa pun. Guru juga dapat memberikan scaffolding dan umpan balik yang membantu peserta didik menyadari bahwa mereka sedang mengalami perkembangan..",
            pdfLink:
              "/images/95202536N_Irfan Hananto_Poster Growth Mindset.pdf",
            pdfName: "95202536N_Irfan Hananto_Poster Growth Mindset.pdf",
          },
          {
            no: 2,
            title: "Artefak 2 : LK.1.2 Membaca Pola Pikir",
            alasan:
              "Artefak kedua yang saya pilih adalah LK 1.2 “Membaca Pola Pikir”. Saya memilih artefak ini karena melalui kegiatan tersebut saya dapat memahami dan membedakan Pola Pikir Tetap (Fixed Mindset) dan Pola Pikir Bertumbuh (Growth Mindset) dalam berbagai situasi. Kegiatan ini tidak hanya membantu saya memahami pengertian keduanya, tetapi juga melatih saya menganalisis bagaimana seseorang memandang kemampuan, tantangan, kegagalan, kritik, usaha, dan keberhasilan orang lain.\n Dari LK 1.2, saya memahami bahwa pola pikir dapat terlihat dari cara seseorang merespons suatu keadaan. Pernyataan seperti “Saya memang tidak pintar” atau “Kalau gagal berarti saya tidak berbakat” menunjukkan pola pikir tetap, sedangkan “Saya belum bisa, tetapi saya bisa belajar lagi” dan “Saya akan mencari strategi lain jika cara ini belum berhasil” menunjukkan pola pikir bertumbuh. Pemahaman ini membuat saya lebih peka bahwa peserta didik yang mengalami kesulitan tidak seharusnya langsung diberi label tidak mampu, tetapi perlu dilihat bagaimana mereka memandang kesulitan dan perkembangan dirinya.\n Artefak ini menjadi bermakna bagi saya sebagai calon guru karena membantu mengubah cara pandang saya terhadap peserta didik. Saya belajar bahwa guru perlu memberikan dukungan melalui bahasa dan umpan balik yang mendorong perkembangan, misalnya membiasakan mengubah “tidak bisa” menjadi “belum bisa”, menghargai proses, serta membantu peserta didik menemukan strategi ketika mengalami kesulitan. Dengan demikian, LK 1.2 tidak hanya menunjukkan pemahaman saya terhadap konsep Growth Mindset, tetapi juga menjadi dasar bagi saya untuk menerapkannya dalam pembelajaran.",

            pdfLink: "/images/LK 1.2. Membaca Pola Pikir",
            pdfName: "LK 1.2. Membaca Pola Pikir",
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
                    Growth Mindset
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
                  src="/images/gm.png"
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
