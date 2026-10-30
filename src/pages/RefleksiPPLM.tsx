import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  BookOpen,
  FileText,
  Video,
  CheckCircle2,
  FolderOpen,
  Layers,
  Award,
  ChevronRight,
  ExternalLink,
  ZoomIn,
  X,
  Target,
  BarChart3,
  Monitor,
  HeartHandshake,
  Check,
  AlertCircle,
  RefreshCcw,
  Sliders,
  Calendar,
  Share2,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { PageTransition } from "../components/PageTransition";
import { LocalPdfCard } from "../components/LocalPdfCard";
import { GDriveVideoCard } from "../components/GDriveVideoCard";
import { ArtefakJustification } from "../components/ArtefakJustification";

interface RefleksiPPLMProps {
  initialSubmenu?: "terbimbing" | "mandiri";
}

export const RefleksiPPLM: React.FC<RefleksiPPLMProps> = ({
  initialSubmenu = "mandiri",
}) => {
  // Main Submenu: "terbimbing" vs "mandiri"
  const [activeSubmenu, setActiveSubmenu] = useState<"terbimbing" | "mandiri">(
    initialSubmenu,
  );

  // Active Tab for 4C Reflection (Connection, Challenge, Concept, Change)
  const [active4CTab, setActive4CTab] = useState<
    "koneksi" | "tantangan" | "konsep" | "perbaikan"
  >("koneksi");

  // Active Tab for 6 Analysis Points of PPL Mandiri
  const [activeAnalysisIdx, setActiveAnalysisIdx] = useState<number>(0);

  // Image Modal for zoom
  const [zoomImage, setZoomImage] = useState<{
    src: string;
    title: string;
    desc?: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomImage(null);
    };
    if (zoomImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImage]);

  // Data for the 6 analysis points requested by user
  const analisisMandiriItems = [
    {
      id: "rancangan",
      number: "1",
      title:
        "Analisis Produk Rancangan / Perencanaan Pembelajaran untuk Praktik Mengajar Mandiri",
      shortDesc:
        "Kajian komprehensif terhadap Modul Ajar Fase F Kelas XI TKJ dengan pengintegrasian TaRL, CRT, DUP, dan sintaks Problem Based Learning.",
      pdfFile: "/images/modul-ajar.pdf",
      pdfTitle: "Modul Ajar Praktik Mengajar Mandiri - XI TKJ",
      pdfDesc:
        "Dokumen perangkat perencanaan pembelajaran perencanaan & pengalamatan jaringan SMK Negeri 2 Salatiga.",
      tags: ["Modul Ajar", "TaRL & CRT", "PBL"],
      content: {
        ringkasan:
          "Rancangan pembelajaran disusun dengan mengadopsi model Problem Based Learning (PBL) yang disesuaikan dengan kurikulum kejuruan SMK Negeri 2 Salatiga pada elemen Perencanaan dan Pengalamatan Jaringan (Fase F - Kelas XI TKJ). Dokumen rancangan memuat identifikasi kebutuhan belajar peserta didik, alur tujuan pembelajaran, skenario diferensiasi proses, instrumen asesmen formatif, serta lembar aktivitas praktikum mandiri.",
        poinAnalisis: [
          {
            label: "Kesesuaian Capaian Pembelajaran & TP",
            detail:
              "Perumusan Tujuan Pembelajaran (TP) diturunkan secara hierarkis dari Capaian Pembelajaran (CP) Fase F. TP mencakup ranah kognitif tingkat tinggi (C4-Menganalisis skema subnetting dan C5-Mengevaluasi tabel perutean) serta keterampilan psikomotorik (P4-Melakukan konfigurasi jaringan pada simulator Cisco Packet Tracer).",
          },
          {
            label: "Penerapan Diferensiasi (TaRL & DUP)",
            detail:
              "Berdasarkan hasil asesmen diagnostik kognitif awal, peserta didik dipetakan ke dalam kelompok kesiapan belajar: kelompok mandiri (langsung mengeksplorasi topologi kompleks multi-router), kelompok berkembang (diberikan scaffolding bertahap dengan tabel pembantu subnet mask), dan kelompok dasar (didampingi guru pamong dan tutor sebaya).",
          },
          {
            label: "Integrasi Culturally Responsive Teaching (CRT)",
            detail:
              "Studi kasus perencanaan jaringan dikaitkan dengan konteks nyata di lingkungan sekolah dan industri lokal, seperti perancangan topologi jaringan laboratorium komputer SMK, gedung administrasi, dan simulasi jaringan perkantoran yang dekat dengan pengalaman siswa.",
          },
          {
            label: "Refleksi & Rekomendasi Modul",
            detail:
              "Rancangan terbukti memberikan alur pembelajaran yang jelas bagi peserta didik. Saran perbaikan untuk pertemuan lanjutan adalah memperjelas estimasi alokasi waktu pada sintaks presentasi hasil karya dan pengujian konektivitas terminal.",
          },
        ],
      },
    },
    {
      id: "materi",
      number: "2",
      title:
        "Analisis Materi Pembelajaran yang Sudah Disusun dan Diterapkan Praktik Mengajar Mandiri",
      shortDesc:
        "Evaluasi kedalaman materi Perencanaan & Pengalamatan Jaringan (IP Address, Subnetting Class C/B/A, VLSM, dan Routing Statis) sesuai standar industri TKJ.",
      pdfFile: "/images/lkpd.pdf",
      pdfTitle: "Bahan Ajar & LKPD Praktik Jaringan Komputer Mandiri",
      pdfDesc:
        "Materi ajar ringkas dan lembar kerja peserta didik yang memuat panduan praktis konfigurasi pengalamatan IP.",
      tags: ["Bahan Ajar", "Subnetting", "Standar Industri"],
      content: {
        ringkasan:
          "Materi pembelajaran yang disusun mencakup aspek teoritis dan teknikal praktis mengenai pengalamatan logis jaringan komputer. Materi disusun dengan gradasi tingkat kesulitan dari konsep dasar format IPv4, penentuan netmask, perhitungan subnetting Classless Inter-Domain Routing (CIDR), Variable Length Subnet Mask (VLSM), hingga penerapan pada tabel routing mikrotik dan router cisco.",
        poinAnalisis: [
          {
            label: "Relevansi Materi dengan Kebutuhan Dunia Kerja (DUDI)",
            detail:
              "Konsep VLSM dan alokasi IP hemat subnet merupakan kompetensi dasar wajib bagi teknisi jaringan (Network Administrator) di industri telekomunikasi dan perkantoran. Peserta didik dilatih menghitung kebutuhan host secara presisi guna menghindari pemborosan alokasi IP.",
          },
          {
            label: "Sistematika & Keterbacaan Materi",
            detail:
              "Materi ajar dilengkapi dengan ilustrasi biner-desimal, tabel perpangkatan dua untuk mempermudah perhitungan cepat subnetting, serta langkah-langkah verifikasi konektivitas menggunakan perintah terminal (ping, traceroute, dan ipconfig).",
          },
          {
            label: "Respon dan Daya Serap Peserta Didik",
            detail:
              "Sebagian besar peserta didik mampu memahami alur konversi IP desimal ke biner setelah diberikan lembar panduan cepat. Kendala awal perhitungan subnetting teratasi melalui latihan bertingkat dan pendampingan lembar kerja kelompok.",
          },
          {
            label: "Tindak Lanjut Penyempurnaan Materi",
            detail:
              "Menambahkan glosarium istilah teknis jaringan berbahasa Inggris dan studi kasus penanganan troubleshooting alamat IP konflik (IP conflict error handling) untuk memperkaya wawasan siswa.",
          },
        ],
      },
    },
    {
      id: "media",
      number: "3",
      title:
        "Analisis Media Pembelajaran yang Dipergunakan dalam Praktik Mengajar Mandiri",
      shortDesc:
        "Telaah efektivitas Simulator Cisco Packet Tracer, slide presentasi interaktif, dan video tutorial visual terhadap pemahaman konsep jaringan.",
      pdfFile: "/images/media-ajar.pdf",
      pdfTitle: "Dokumen Media Ajar & Panduan Visual Simulator Jaringan",
      pdfDesc:
        "Presentasi visual dan panduan grafis yang digunakan saat mendemonstrasikan perancangan topologi jaringan.",
      tags: ["Cisco Packet Tracer", "Slide Interaktif", "Media Visual"],
      content: {
        ringkasan:
          "Media pembelajaran utama yang digunakan adalah perangkat lunak simulasi jaringan Cisco Packet Tracer yang didukung oleh slide presentasi animasi Canva interaktif dan lembar infografis topologi. Media ini dipilih untuk mengatasi keterbatasan fisik perangkat keras jaringan yang mahal dan berisiko jika langsung dikonfigurasi oleh siswa pemula tanpa simulasi terlebih dahulu.",
        poinAnalisis: [
          {
            label: "Visualisasi Aliran Data (Packet Simulation Mode)",
            detail:
              "Fitur 'Simulation Mode' pada Cisco Packet Tracer memungkinkan peserta didik melihat secara langsung perjalanan frame data, enkapsulasi PDU (Protocol Data Unit), dan proses verifikasi ARP (Address Resolution Protocol) secara visual dan nyata.",
          },
          {
            label: "Peningkatan Keterlibatan (Student Engagement)",
            detail:
              "Penggunaan simulator secara signifikan meningkatkan atensi dan antusiasme siswa dibandingkan metode ceramah satu arah di papan tulis. Peserta didik menunjukkan rasa ingin tahu tinggi saat mencoba menghubungkan PC antar-subnet dan mengamati status lampu indikator koneksi port (hijau/merah).",
          },
          {
            label: "Efisiensi Waktu dan Aksesibilitas Belajar",
            detail:
              "Peserta didik dapat mengulang praktikum di komputer lab maupun di rumah secara mandiri tanpa bergantung pada laboratorium fisik sekolah, sehingga memperpanjang waktu belajar mandiri mereka.",
          },
          {
            label: "Evaluasi Media & Solusi Kendala",
            detail:
              "Kendala terjadi pada beberapa unit PC lab yang memiliki resolusi layar rendah. Solusi yang dilakukan adalah mengatur zoom level tampilan Cisco Packet Tracer dan membagikan file topologi (.pkt) siap pakai untuk mempercepat langkah konfigurasi awal.",
          },
        ],
      },
    },
    {
      id: "video",
      number: "4",
      title: "Analisis Video Pelaksanaan Praktik Mengajar Mandiri",
      shortDesc:
        "Refleksi rekaman video pembelajaran mengenai alur apersepsi, penguasaan kelas, pendampingan praktikum TaRL, komunikasi pedagogik, dan asesmen akhir.",
      videoUrl:
        "https://drive.google.com/file/d/1w8A9vGq-zYEXAMPLE_PPLM_VIDEO/view?usp=sharing",
      videoTitle:
        "Video Rekaman Pelaksanaan Praktik Mengajar Mandiri XI TKJ (Full Session)",
      videoDesc:
        "Dokumentasi video lengkap pelaksanaan praktik mengajar mandiri di laboratorium komputer SMK Negeri 2 Salatiga.",
      tags: ["Video Praktik", "Manajemen Kelas", "Refleksi Pelaksanaan"],
      content: {
        ringkasan:
          "Rekaman video pelaksanaan praktik mengajar mandiri dianalisis secara objektif untuk menilai performa mengajar, interaksi pedagogik, efektivitas bahasa tubuh, manajemen waktu tiap fase pembelajaran, serta kehangatan suasana kelas kejuruan XI TKJ di SMK Negeri 2 Salatiga.",
        poinAnalisis: [
          {
            label: "Fase Pendahuluan (15 Menit)",
            detail:
              "Video memperlihatkan pembukaan dengan salam, doa bersama, pemeriksaan kehadiran dengan suasana ramah, dilanjutkan ice-breaking teknik mindfulness (Stop, Breathe, Observe, Proceed) untuk memfokuskan konsentrasi siswa setelah kegiatan apel pagi.",
          },
          {
            label: "Fase Inti (60 Menit)",
            detail:
              "Pada tayangan inti, terlihat bagaimana guru berkeliling memberikan pendampingan diferensiasi (scaffolding) ke kelompok-kelompok belajar. Guru tidak mendominasi penjelasan di depan kelas, melainkan berperan sebagai fasilitator yang memancing pemikiran kritis siswa melalui pertanyaan pemantik saat troubleshooting topologi.",
          },
          {
            label: "Fase Penutup (15 Menit)",
            detail:
              "Guru bersama siswa menyimpulkan prinsip penting alokasi subnetting, mengapresiasi kelompok kerja terbaik, dan memberikan refleksi singkat mengenai makna pembelajaran hari itu bagi karir masa depan mereka.",
          },
          {
            label: "Evaluasi Catatan Kritis Video",
            detail:
              "Pada rekaman terlihat transisi antara sesi presentasi kelompok menuju kuis penutup sedikit terburu-buru karena tingginya antusiasme siswa saat sesi tanya-jawab. Di masa mendatang, alokasi waktu tanya-jawab dibatasi 5 menit per kelompok agar penutup lebih rileks.",
          },
        ],
      },
    },
    {
      id: "nonmengajar",
      number: "5",
      title:
        "Analisis Kegiatan Nonmengajar di Sekolah Mitra (SMK Negeri 2 Salatiga)",
      shortDesc:
        "Kajian peran aktif dalam budaya industri sekolah: Budaya 5R, 5S, K3LH, apel pagi disiplin TKJ, serta pengelolaan sarana laboratorium komputer.",
      tags: ["Budaya 5R & 5S", "K3LH", "Apel Pagi", "Sarpras Lab"],
      content: {
        ringkasan:
          "Kegiatan nonmengajar merupakan pilar fundamental dalam membentuk kompetensi kepribadian dan sosial calon guru profesional. Selama PPL Mandiri di SMK Negeri 2 Salatiga, saya aktif berpartisipasi dalam pembiasaan apel pagi siswa jurusan TKJ, penerapan budaya kerja industri 5R (Ringkas, Rapi, Resik, Rawat, Rajin), budaya 5S, K3LH laboratorium komputer, serta membantu inventarisasi perangkat dan persiapan ujian TKA.",
        galleryPhotos: [
          {
            src: "/images/budaya-5r.jpeg",
            title: "Penerapan Budaya 5R di Laboratorium TKJ",
            desc: "Menata kerapian kabel jaringan dan perangkat simulator.",
          },
          {
            src: "/images/budaya-k3.jpeg",
            title: "Penerapan Standar K3LH",
            desc: "Memastikan jalur keselamatan kerja dan keamanan arus kelistrikan lab.",
          },
          {
            src: "/images/kegiatan-5s.jpeg",
            title: "Budaya 5S (Senyum, Sapa, Salam, Sopan, Santun)",
            desc: "Menyambut kedatangan siswa di gerbang sekolah bersama guru piket.",
          },
          {
            src: "/images/apel-pagi.jpeg",
            title: "Apel Pagi Disiplin Siswa TKJ",
            desc: "Pembinaan karakter, ketertiban atribut, dan kesiapan belajar kejuruan.",
          },
          {
            src: "/images/diskusi-guru-pamong.jpeg",
            title: "Koordinasi Nonmengajar dengan Guru Pamong",
            desc: "Diskusi sinkronisasi kegiatan persekolahan dan pendampingan siswa.",
          },
        ],
        poinAnalisis: [
          {
            label: "Penanaman Budaya Kerja Industri (5R & K3LH)",
            detail:
              "Sebagai calon guru SMK, penanaman budaya 5R dan K3LH bukan sekadar teori kebersihan, melainkan transfer etos kerja nyata yang diharapkan industri. Setiap sebelum dan sesudah praktikum, siswa diarahkan memeriksa kelayakan kabel, merapikan kursi, dan mematikan daya PC secara prosedur SOP.",
          },
          {
            label: "Penguatan Karakter Siswa Melalui Apel Pagi",
            detail:
              "Apel pagi setiap hari kerja membentuk ketepatan waktu, kekompakan, dan rasa tanggung jawab siswa TKJ. Keterlibatan calon guru dalam apel memberikan teladan integritas dan keteladanan figur pendidik.",
          },
          {
            label: "Dukungan Manajemen Sekolah & Sarana Ujian TKA",
            detail:
              "Membantu instalasi sistem operasi, pengecekan koneksi LAN untuk simulasi Tes Kemampuan Akademik (TKA), serta pemilahan dokumen ijazah melatih pemahaman tata kelola administrasi institusi pendidikan secara nyata.",
          },
          {
            label: "Dampak Terhadap Kompetensi Kepribadian & Sosial",
            detail:
              "Pengalaman nonmengajar mempererat relasi harmonis dengan pimpinan sekolah, guru pamong, staf tata usaha, guru BK, dan tenaga kependidikan lainnya, menumbuhkan jiwa kepemimpinan guru yang adaptif dan kolaboratif.",
          },
        ],
      },
    },
    {
      id: "penilaian",
      number: "6",
      title: "Instrumen Penilaian yang Dirancang Beserta Analisisnya",
      shortDesc:
        "Kajian validitas, objektivitas rubrik penilaian unjuk kerja praktikum jaringan, tes kognitif bertingkat, serta rekapitulasi ketercapaian siswa (KKTP).",
      pdfFile: "/images/lampiran-7.pdf",
      pdfTitle:
        "Instrumen Penilaian Kognitif, Keterampilan & Rubrik (Lampiran 7)",
      pdfDesc:
        "Dokumen instrumen asesmen diagnostik, formatif, sumatif, serta rubrik penilaian kinerja unjuk kerja praktikum.",
      secondaryPdfFile: "/images/lampiran-8.pdf",
      secondaryPdfTitle:
        "Analisis Ketercapaian Hasil Asesmen Siswa (Lampiran 8)",
      tags: ["Rubrik Asesmen", "KKTP", "Penilaian Kinerja"],
      content: {
        ringkasan:
          "Instrumen penilaian dirancang mencakup tiga domain pembelajaran yang terintegrasi: kognitif (penguasaan teori pengalamatan IP dan perhitungan subnetting), psikomotorik (unjuk kerja keterampilan simulasi topologi jaringan pada Cisco Packet Tracer), serta afektif (sikap gotong royong, kemandirian, dan kedisiplinan 5R). Seluruh instrumen dilengkapi rubrik penskoran objektif dan indikator Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).",
        poinAnalisis: [
          {
            label: "Konstruksi Rubrik Penilaian Kinerja Praktik",
            detail:
              "Rubrik keterampilan menilai 4 indikator kunci berbobot: (1) Ketepatan rancangan skema topologi (25%), (2) Akurasi konfigurasi IP & Subnet Mask (30%), (3) Keberhasilan pengujian paket PDU/ping antarnode (25%), dan (4) Kerapian penataan label perangkat (20%). Skala penilaian 1-4 dengan deskriptor operasional yang jelas.",
          },
          {
            label: "Analisis Ketuntasan Belajar Siswa (KKTP)",
            detail:
              "Berdasarkan hasil asesmen praktik mandiri di kelas XI TKJ: sebanyak 84,3% peserta didik berhasil mencapai kriteria tuntas di atas KKTP (skor minimum 75), dengan rata-rata nilai unjuk kerja praktikum sebesar 82,6.",
          },
          {
            label: "Objektivitas dan Keadilan Penilaian Autentik",
            detail:
              "Penggunaan rubrik analitik transparan yang dibagikan sebelum praktikum dimulai membantu siswa memahami kriteria keberhasilan yang dituntut, meminimalkan bias subjektivitas penilai, serta mendorong asesmen diri (self-assessment).",
          },
          {
            label: "Program Tindak Lanjut: Remedial & Pengayaan",
            detail:
              "Bagi 15,7% siswa yang belum tuntas diberikan bimbingan tutorial kelompok (peer tutoring) dengan latihan bertahap pada topologi sederhana 2 router. Bagi siswa yang melampaui KKTP diberikan pengayaan tantangan implementasi routing statis 4 router redundan.",
          },
        ],
      },
    },
  ];

  return (
    <PageTransition>
      {/* Hero Banner Header */}

      {/* SUBMENU 1: PPL TERBIMBING */}
      {activeSubmenu === "terbimbing" && (
        <motion.div
          key="terbimbing"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Submenu Title Banner */}
          <div className="border-l-4 border-brand-primary pl-4 sm:pl-6">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
              Mata Kuliah PPL I / Terbimbing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800">
              Praktik Pengalaman Lapangan Terbimbing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed text-justify">
              Pelaksanaan praktik mengajar terbimbing dilaksanakan secara
              intensif bersama Guru Pamong di SMK Negeri 2 Salatiga melalui
              tahap orientasi, observasi manajemen, asistensi mengajar, serta
              pelaksanaan praktik mengajar siklus 1, 2, dan 3 di kelas XI TKJ.
            </p>
          </div>

          {/* Bagian 1: Tempat Melampirkan Dokumen PDF Lokal (PPL Terbimbing) */}
          <section>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                    Lampiran Dokumen PDF
                  </h3>
                  {/* <p className="text-xs text-slate-500">
                    Dokumen PDF terintegrasi langsung dari direktori proyek
                    lokal untuk ditelaah secara penuh.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <LocalPdfCard
                initialTitle="Dokumen Refleksi Praktik Mengajar Terbimbing (LK.4.PPLT)"
                initialDescription="Laporan refleksi komprehensif praktik mengajar terbimbing siklus 1, 2, dan 3 di kelas XI TKJ bersama Guru Pamong. Memuat evaluasi tahapan apersepsi, penggunaan media simulator, respon peserta didik, serta rekomendasi tindak lanjut."
                initialPdfUrl="/images/LK.4.PPLT-Irfan Hananto-95202536N.pdf"
                badgeText="LK 4 PPLT Terbimbing"
                colorTheme="primary"
              />
              <GDriveVideoCard
                initialTitle="Video Dokumentasi Praktik Mengajar Terbimbing Siklus 1 - 3"
                initialDescription="Rekaman video pelaksanaan pembelajaran terbimbing bersama Guru Pamong di kelas XI TKJ SMK Negeri 2 Salatiga. Menampilkan alur pembukaan, pemodelan demonstrasi konfigurasi jaringan, pembimbingan kelompok, hingga refleksi penutup."
                initialVideoUrl="https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview"
                badgeText="Video G-Drive PPL Terbimbing"
              />
              {/* <LocalPdfCard
                initialTitle="Modul Ajar Pembelajaran Terbimbing Cisco Packet Tracer XI TKJ"
                initialDescription="Rancangan perangkat ajar dan panduan langkah praktikum Cisco Packet Tracer yang diterapkan pada tahap pembelajaran terbimbing bersama Guru Pamong."
                initialPdfUrl="/images/Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf"
                badgeText="Modul Ajar Terbimbing"
                colorTheme="primary"
              />

              <LocalPdfCard
                initialTitle="Dokumen Refleksi Pelaksanaan Siklus 1"
                initialDescription="Evaluasi berkala pelaksanaan praktik siklus pertama mengenai pengkondisian kelas dan pengenalan konsep IP addressing pada peserta didik."
                initialPdfUrl="/images/refleksi-siklus-1.pdf"
                badgeText="Refleksi Siklus 1"
                colorTheme="emerald"
              />

              <LocalPdfCard
                initialTitle="Dokumen Portofolio Dokumentasi Refleksi"
                initialDescription="Kompilasi dokumentasi refleksi praktik mengajar dan artefak pembelajaran selama menjalani PPL Terbimbing di SMK Negeri 2 Salatiga."
                initialPdfUrl="/images/WebsitePortofolio.pdf"
                badgeText="Arsip Portofolio"
                colorTheme="indigo"
              /> */}
            </div>
          </section>

          {/* Bagian 2: Tempat Melampirkan Video Google Drive (PPL Terbimbing) */}
        </motion.div>
      )}

      {/* SUBMENU 2: PPL MANDIRI */}
      {activeSubmenu === "mandiri" && (
        <motion.div
          key="mandiri"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="space-y-14 sm:space-y-16"
        >
          {/* Submenu Title Banner */}
          <div className="border-l-4 border-indigo-600 pl-4 sm:pl-6">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
              Mata Kuliah PPL II / Mandiri
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800">
              Praktik Pengalaman Lapangan Mandiri
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed text-justify">
              Puncak implementasi otonomi mengajar calon guru profesional di SMK
              Negeri 2 Salatiga, meliputi perencanaan mandiri, pengorganisasian
              materi kejuruan TKJ, penggunaan media interaktif, kegiatan
              nonmengajar budaya kerja, serta perancangan instrumen penilaian
              komprehensif beserta analisisnya.
            </p>
          </div>

          {/* Bagian 1: Tempat Melampirkan Dokumen PDF Lokal (PPL Mandiri) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  Lampiran Dokumen PDF
                </h3>
                <p className="text-xs text-slate-500">
                  Dokumen PDF terintegrasi langsung dari direktori lokal proyek
                  untuk Praktik Pengalaman Lapangan Mandiri.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <LocalPdfCard
                initialTitle="Modul Ajar Praktik Mengajar Mandiri - XI TKJ"
                initialDescription="Perangkat modul ajar mandiri elemen Perencanaan dan Pengalamatan Jaringan dengan model Problem Based Learning (PBL) dan integrasi TaRL."
                initialPdfUrl="/images/modul-ajar.pdf"
                badgeText="Modul Ajar Mandiri"
                colorTheme="indigo"
              />
              <GDriveVideoCard
                initialTitle="Video Rekaman Pelaksanaan Praktik Mengajar Mandiri XI TKJ (Full Session)"
                initialDescription="Rekaman video utuh pelaksanaan praktik mengajar mandiri di laboratorium komputer SMK Negeri 2 Salatiga materi perencanaan pengalamatan IP & subnetting. Memperlihatkan pembukaan, bimbingan praktikum TaRL, penguatan konsep, dan asesmen akhir."
                initialVideoUrl="https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview"
                badgeText="Video G-Drive PPL Mandiri"
              />
            </div>
          </section>
        </motion.div>
      )}

      {/* Modal Zoom Foto */}
      <AnimatePresence>
        {zoomImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setZoomImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white">
                <span className="font-bold text-sm truncate">
                  {zoomImage.title}
                </span>
                <button
                  type="button"
                  onClick={() => setZoomImage(null)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 bg-slate-950 flex items-center justify-center overflow-auto flex-1">
                <img
                  src={zoomImage.src}
                  alt={zoomImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>
              {zoomImage.desc && (
                <div className="p-3.5 bg-slate-100 text-slate-700 text-xs text-center border-t border-slate-200">
                  {zoomImage.desc}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
