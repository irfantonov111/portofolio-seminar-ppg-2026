import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  AlertCircle,
  ZoomIn,
  X,
  ExternalLink,
  Globe,
  Monitor,
  Smartphone,
  Copy,
  Check,
  ShieldCheck,
  Calendar,
  Smile,
  Users,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { PageTransition } from "../components/PageTransition";

export const KaryaInovasi = () => {
  // State untuk Toggle Preview Tampilan (Desktop / Mobile / Keduanya)
  const [activePreviewDevice, setActivePreviewDevice] = useState<
    "desktop" | "mobile" | "all"
  >("all");

  // Modal Zoom Gambar
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [modalImageTitle, setModalImageTitle] = useState<string>("");

  // Link Website SAPA
  const [websiteUrl] = useState("https://sapa-smk-n-2-salatiga.wuaze.com/");
  const [copiedLink, setCopiedLink] = useState(false);

  // Gambar Tampilan Desktop & Mobile
  const desktopImg = "/images/sapa-desktop.png";
  const mobileImg = "/images/sapa-mobile.jpg";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImageSrc(null);
      }
    };
    if (modalImageSrc) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalImageSrc]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const openZoom = (src: string, title: string) => {
    setModalImageSrc(src);
    setModalImageTitle(title);
  };

  // Data Tabel Hasil Usability Testing (Skala 1–5)
  const evaluasiAspek = [
    {
      no: 1,
      aspek: "Kemudahan pelaporan dan rasa aman",
      skor: "4,34",
      predikat: "Sangat Baik",
      keterangan:
        "Siswa merasa terlindungi dengan adanya opsi identitas terbatas dan anonim.",
    },
    {
      no: 2,
      aspek: "Kejelasan antarmuka seluler",
      skor: "4,31",
      predikat: "Sangat Baik",
      keterangan:
        "Tata letak tampilan mobile dinilai intuitif dan mudah diakses dari ponsel siswa.",
    },
    {
      no: 3,
      aspek: "Komunikasi dan pemantauan laporan",
      skor: "4,03",
      predikat: "Baik",
      keterangan:
        "Alur informasi antara siswa, guru BK, dan wali kelas berjalan transparan.",
    },
    {
      no: 4,
      aspek: "Kemudahan penjadwalan konseling",
      skor: "3,91",
      predikat: "Baik",
      keterangan: "Alur penjadwalan konseling mudah dipahami oleh siswa",
    },
  ];

  return (
    <PageTransition>
      {/* 1. HERO BANNER: SAPA Overview */}
      <div className="mb-10 sm:mb-12">
        <GlassCard className="p-6 sm:p-8 md:p-12 border-brand-primary/20 bg-white/75 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Karya Inovasi
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider">
                  Tahun Pengembangan: 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-800 leading-tight mb-2">
                SAPA
              </h1>
              <p className="text-base sm:text-lg font-bold text-brand-primary mb-4">
                Sarana Pendampingan dan Asistensi Siswa Berbasis Web
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-4">
                Tidak semua siswa nyaman menyampaikan masalah langsung kepada
                guru BK. Sebagian mungkin takut dinilai negatif atau belum tahu
                cara menghubungi guru BK. Informasi tentang kondisi siswa juga
                tersebar di berbagai jalur komunikasi antara siswa, guru BK, dan
                wali kelas sehingga pemantauan dan tindak lanjut kurang
                terstruktur.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-6">
                <strong>SAPA</strong> adalah platform web yang mempermudah siswa
                mengakses layanan pendampingan, sekaligus membantu guru BK dan
                wali kelas mengelola tindak lanjut sesuai kewenangan. Aplikasi
                ini mendukung guru dan <em>tidak menggantikan</em> pendampingan
                langsung.
              </p>

              {/* Action Buttons: Live Link & Salin Link */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-brand-primary hover:bg-teal-700 text-white shadow-lg shadow-brand-primary/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 group"
                >
                  <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Kunjungi Website SAPA</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition-all inline-flex items-center gap-1.5"
                  title="Salin tautan website"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">
                        Tersalin!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Salin Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Banner Preview Image */}
            <div
              onClick={() =>
                openZoom(desktopImg, "Tampilan Antarmuka Desktop SAPA")
              }
              className="md:col-span-5 w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border-2 border-brand-primary/10 relative shadow-xl bg-slate-900/5 flex items-center justify-center cursor-pointer group hover:border-brand-primary/40 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={desktopImg}
                alt="SAPA Web Dashboard"
                className="w-full h-auto max-h-[340px] object-cover rounded-2xl sm:rounded-[2rem] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm rounded-2xl sm:rounded-[2rem] backdrop-blur-[2px]">
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Klik untuk memperbesar</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] text-white font-semibold flex items-center gap-1.5">
                <Monitor className="w-3 h-3 text-brand-primary" />
                <span>Antarmuka Web Desktop</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 2. SECTION: PRATINJAU ANTARMUKA & LINK AKSES (DESKTOP & MOBILE) */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 px-1">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">
              <Monitor className="w-4 h-4" /> Desain Responsif Multi-Platform
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Pratinjau Tampilan Desktop &amp; Mobile
            </h2>
          </div>

          {/* Device Tabs Toggle */}
          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 self-start sm:self-auto shadow-sm flex-wrap gap-1">
            <button
              onClick={() => setActivePreviewDevice("all")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activePreviewDevice === "all"
                  ? "bg-white text-brand-primary shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Keduanya</span>
            </button>
            <button
              onClick={() => setActivePreviewDevice("desktop")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activePreviewDevice === "desktop"
                  ? "bg-white text-brand-primary shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop View</span>
            </button>
            <button
              onClick={() => setActivePreviewDevice("mobile")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activePreviewDevice === "mobile"
                  ? "bg-white text-brand-primary shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile View</span>
            </button>
          </div>
        </div>

        {/* Website Link Access Box */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/80 border border-brand-primary/20 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Tautan Resmi Aplikasi SAPA
              </span>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-brand-primary hover:underline flex items-center gap-1.5"
              >
                <span>{websiteUrl}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-4 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-xl hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Kunjungi Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
              title="Salin Tautan Website"
            >
              {copiedLink ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copiedLink ? "Disalin" : "Salin"}</span>
            </button>
          </div>
        </div>

        {/* Showcase Cards - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Desktop Preview Card */}
          {(activePreviewDevice === "all" || activePreviewDevice === "desktop") && (
            <div
              className={`transition-all duration-300 ${
                activePreviewDevice === "desktop"
                  ? "lg:col-span-12"
                  : "lg:col-span-7"
              }`}
            >
              <GlassCard className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/70 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-brand-primary" />
                      <span className="font-bold text-slate-800 text-sm">
                        Tampilan Desktop (PC / Laptop)
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openZoom(desktopImg, "Tampilan Antarmuka Desktop SAPA")
                      }
                      className="text-xs font-semibold text-brand-primary hover:underline inline-flex items-center gap-1"
                    >
                      <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                    </button>
                  </div>

                  {/* Browser Frame */}
                  <div
                    onClick={() =>
                      openZoom(desktopImg, "Tampilan Antarmuka Desktop SAPA")
                    }
                    className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-900/5 shadow-inner overflow-hidden cursor-pointer group relative"
                  >
                    <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                        {websiteUrl}
                      </span>
                      <div className="w-6"></div>
                    </div>

                    <div className="relative max-h-[460px] sm:max-h-[520px] overflow-hidden flex items-center justify-center bg-slate-50">
                      <img
                        src={desktopImg}
                        alt="Desktop Mockup SAPA"
                        className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs gap-1.5">
                        <ZoomIn className="w-4 h-4" /> Klik untuk melihat resolusi penuh
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mt-3 text-justify">
                  Antarmuka dashboard desktop yang memudahkan guru BK dan wali
                  kelas memantau data agregat, mengecek kondisi emosional siswa,
                  dan mengelola jadwal konseling.
                </p>
              </GlassCard>
            </div>
          )}

          {/* Mobile Preview Card - Constrained Responsive Smartphone Frame */}
          {(activePreviewDevice === "all" || activePreviewDevice === "mobile") && (
            <div
              className={`transition-all duration-300 ${
                activePreviewDevice === "mobile"
                  ? "lg:col-span-12 max-w-lg mx-auto w-full"
                  : "lg:col-span-5 w-full"
              }`}
            >
              <GlassCard className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/70 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-indigo-600" />
                      <span className="font-bold text-slate-800 text-sm">
                        Tampilan Mobile (Smartphone Siswa)
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openZoom(mobileImg, "Tampilan Antarmuka Mobile SAPA")
                      }
                      className="text-xs font-semibold text-indigo-600 hover:underline inline-flex items-center gap-1"
                    >
                      <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                    </button>
                  </div>

                  {/* Smartphone Mockup Frame with Fixed Height & Scrollable Viewport */}
                  <div className="w-[260px] sm:w-[280px] h-[480px] sm:h-[530px] mx-auto rounded-[2.5rem] border-[8px] sm:border-[10px] border-slate-900 shadow-2xl bg-slate-900 relative flex flex-col overflow-hidden">
                    {/* Top Speaker / Dynamic Island */}
                    <div className="h-5 bg-slate-900 w-full flex items-center justify-center shrink-0 z-20">
                      <div className="w-16 h-3 bg-slate-800 rounded-full"></div>
                    </div>

                    {/* Scrollable Screen Viewport */}
                    <div
                      onClick={() =>
                        openZoom(mobileImg, "Tampilan Antarmuka Mobile SAPA")
                      }
                      className="flex-1 w-full bg-slate-100 overflow-y-auto overflow-x-hidden relative cursor-pointer group scrollbar-thin scrollbar-thumb-slate-300"
                    >
                      <img
                        src={mobileImg}
                        alt="Mobile Mockup SAPA"
                        className="w-full h-auto min-h-full object-top"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs gap-1.5 backdrop-blur-[1px]">
                        <ZoomIn className="w-4 h-4" /> Perbesar Penuh
                      </div>
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="h-4 bg-slate-900 w-full flex items-center justify-center shrink-0 z-20">
                      <div className="w-20 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full inline-block mb-1">
                    📱 Gulir layar ponsel di atas untuk melihat isi halaman
                  </span>
                  <p className="text-[11px] text-slate-500 text-justify">
                    Antarmuka seluler yang simpel dan aman bagi siswa untuk mencatat
                    mood harian, membuat pelaporan masalah (anonim), serta melihat
                    jadwal temu konseling.
                  </p>
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>

      {/* 3. SECTION: LATAR BELAKANG, GAGASAN & TUJUAN */}
      <div className="mb-14">
        <GlassCard className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/75 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
              <Target className="w-4 h-4" /> Landasan Pengembangan
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Latar Belakang, Gagasan, dan Tujuan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Latar Belakang */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 h-full">
              <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Latar Belakang</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Tidak semua siswa nyaman menyampaikan masalah langsung kepada
                guru BK. Sebagian mungkin takut dinilai negatif atau belum tahu
                cara menghubungi guru BK. Informasi tentang kondisi siswa juga
                tersebar di berbagai jalur komunikasi antara siswa, guru BK, dan
                wali kelas sehingga pemantauan dan tindak lanjut kurang
                terstruktur.
              </p>
            </div>

            {/* Gagasan */}
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/70 h-full">
              <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Gagasan Utama</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                SAPA adalah platform web yang mempermudah siswa mengakses
                layanan pendampingan, sekaligus membantu guru BK dan wali kelas
                mengelola tindak lanjut sesuai kewenangan. Aplikasi ini
                mendukung guru dan{" "}
                <strong>tidak menggantikan pendampingan langsung</strong>.
              </p>
            </div>
          </div>

          {/* 4 Pilar Tujuan */}
          <div className="pt-2">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
              <span>Tujuan Pengembangan SAPA</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-brand-primary text-xs font-bold flex items-center justify-center mb-2.5">
                    1
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mb-1.5">
                    Kemudahan Akses
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Memudahkan akses layanan konseling bagi seluruh siswa tanpa
                    hambatan ruang dan waktu.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-brand-primary text-xs font-bold flex items-center justify-center mb-2.5">
                    2
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mb-1.5">
                    Alternatif Penyampaian
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Memberi alternatif cara menyampaikan masalah secara aman dan
                    nyaman bagi siswa yang belum siap bertatap muka.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-brand-primary text-xs font-bold flex items-center justify-center mb-2.5">
                    3
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mb-1.5">
                    Pengelolaan Informasi
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Membantu pengelolaan informasi pendampingan terpusat antara
                    siswa, guru BK, dan wali kelas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-brand-primary text-xs font-bold flex items-center justify-center mb-2.5">
                    4
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs mb-1.5">
                    Tindak Lanjut Terstruktur
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Mendukung penjadwalan konseling tatap muka serta tindak
                    lanjut penanganan masalah yang lebih terstruktur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 4. SECTION: 5 FITUR UTAMA & RANCANGAN SISTEM */}
      <div className="mb-14">
        <GlassCard className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/75 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> Fungsionalitas &amp; Arsitektur
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Fitur Utama &amp; Rancangan Sistem
            </h2>
          </div>

          {/* 5 Fitur Utama Grid */}
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-4">
              5 Fitur Utama Aplikasi SAPA
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Fitur 1 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-brand-primary flex items-center justify-center font-bold text-sm mb-3">
                  <Smile className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                  Mood Check
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Siswa mencatat kondisi emosinya secara berkala (
                  <em>bukan sebagai alat diagnosis</em>) untuk membangun
                  kesadaran diri dan memetakan dinamika perasaan.
                </p>
              </div>

              {/* Fitur 2 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                  Pelaporan Masalah
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Siswa dapat melaporkan kendala akademik maupun sosial dengan
                  opsi <strong>identitas terbatas</strong> atau{" "}
                  <strong>anonim</strong> demi menjamin rasa aman.
                </p>
              </div>

              {/* Fitur 3 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                  Penjadwalan Konseling
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Siswa dapat mengajukan atau melihat jadwal sesi konseling
                  tatap muka dengan guru BK secara terorganisasi dan fleksibel.
                </p>
              </div>

              {/* Fitur 4 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                  Akses Berbasis Peran
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Siswa, guru BK, wali kelas, dan admin hanya dapat melihat
                  informasi sesuai kewenangannya untuk menjaga etika privasi
                  data.
                </p>
              </div>

              {/* Fitur 5 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1.5">
                  Pemantauan dan Tindak Lanjut
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  Membantu pihak sekolah mengidentifikasi kebutuhan pendampingan
                  siswa secara agregat, memetakan isu belajar/sosial dominan,
                  serta mengawal rekam jejak tindak lanjut penanganan.
                </p>
              </div>
            </div>
          </div>

          {/* Rancangan Teknologi */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-indigo-600" />
              <span>Rancangan Arsitektur Web</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify mb-3">
              Aplikasi berbasis web yang dapat dibuka di ponsel maupun komputer.
              Antarmukanya dibangun dengan <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, dan <strong>Tailwind CSS</strong>,
              dilengkapi autentikasi dan pengaturan hak akses berlapis.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                React 18
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Role-Based Access Control (RBAC)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Mobile-First Responsive
              </span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 5. SECTION: RENCANA IMPLEMENTASI, HASIL EVALUASI AWAL (SUS), & TINDAK LANJUT */}
      <div className="mb-14">
        <GlassCard className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/75 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" /> Pengujian &amp; Rencana Ke
              Depan
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Implementasi, Evaluasi Awal, dan Rencana Tindak Lanjut
            </h2>
          </div>

          {/* Rencana 5 Tahap Implementasi */}
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Implementasi (Rencana 5 Tahap)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold inline-flex items-center justify-center mb-1.5">
                  1
                </span>
                <h4 className="font-bold text-slate-800 text-xs">
                  Persiapan Sistem
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Konfigurasi sistem &amp; akun pengguna.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold inline-flex items-center justify-center mb-1.5">
                  2
                </span>
                <h4 className="font-bold text-slate-800 text-xs">Pengenalan</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Sosialisasi aplikasi kepada calon pengguna.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold inline-flex items-center justify-center mb-1.5">
                  3
                </span>
                <h4 className="font-bold text-slate-800 text-xs">
                  Pemanfaatan
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Pemanfaatan aktif oleh siswa.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold inline-flex items-center justify-center mb-1.5">
                  4
                </span>
                <h4 className="font-bold text-slate-800 text-xs">
                  Pengelolaan
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Pengelolaan oleh guru BK &amp; wali kelas.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
                <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold inline-flex items-center justify-center mb-1.5">
                  5
                </span>
                <h4 className="font-bold text-slate-800 text-xs">Evaluasi</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Evaluasi berkala dan perbaikan.
                </p>
              </div>
            </div>
          </div>

          {/* Hasil Evaluasi Awal */}
          <div className="pt-2">
            <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Hasil Evaluasi Awal</span>
            </h3>

            <div className="space-y-3 mb-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                • <strong>Black-box testing</strong> baru dilakukan oleh
                pengembang untuk memvalidasi fungsi fitur, form input, dan
                autentikasi.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                • <strong>Usability testing</strong> melibatkan{" "}
                <strong>32 siswa</strong> dan menghasilkan skor SUS{" "}
                <strong>73,36 / 100</strong> (di atas acuan umum standar 68).
              </div>
            </div>

            {/* SUS Score Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase font-bold text-brand-primary tracking-wider block">
                  Skor System Usability Scale (SUS)
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-serif mt-1">
                  73,36{" "}
                  <span className="text-base font-normal text-slate-500">
                    / 100
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Kategori <strong>Acceptable / Baik</strong>, melampaui
                  rata-rata acuan umum 68.
                </p>
              </div>
              <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-teal-200 text-center">
                <span className="text-xs font-bold text-emerald-700 block">
                  32 Responden
                </span>
                <span className="text-[10px] text-slate-500">
                  Siswa Pengguna
                </span>
              </div>
            </div>

            {/* Tabel Aspek Evaluasi */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-800 text-white font-bold">
                  <tr>
                    <th className="px-4 py-3 text-center w-12">No</th>
                    <th className="px-4 py-3">Aspek (skala 1–5)</th>
                    <th className="px-4 py-3 text-center w-28">Rata-rata</th>
                    <th className="px-4 py-3 hidden sm:table-cell">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {evaluasiAspek.map((item) => (
                    <tr
                      key={item.no}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-center font-bold text-slate-500">
                        {item.no}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {item.aspek}
                        <span className="block text-[11px] text-slate-500 font-normal sm:hidden mt-0.5">
                          {item.keterangan}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center font-extrabold text-brand-primary">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800">
                          {item.skor}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs hidden sm:table-cell">
                        {item.keterangan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rencana Tindak Lanjut */}
          <div className="pt-2">
            <h3 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-primary" />
              <span>Rencana Tindak Lanjut</span>
            </h3>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed text-justify">
                Perbaikan fitur berdasarkan masukan siswa, pengujian fungsional
                oleh tim sekolah, tinjauan keamanan dan privasi, lalu uji coba
                terbatas bersama guru BK dan wali kelas.
              </p>
              <p className="leading-relaxed text-justify pt-1 border-t border-slate-200/80">
                Skor SUS menunjukkan indikasi awal penerimaan pengguna, bukan
                bukti bahwa layanan BK menjadi lebih efektif. Dampak sebenarnya
                perlu diukur lewat uji coba penerapan nyata.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* MODAL ZOOM GAMBAR ANTARMUKA */}
      <AnimatePresence>
        {modalImageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImageSrc(null)}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col"
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/90">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                    {modalImageTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setModalImageSrc(null)}
                  className="p-1.5 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Gambar Modal */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-900/5">
                <img
                  src={modalImageSrc}
                  alt={modalImageTitle}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
