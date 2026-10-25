import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Compass,
  Sparkles,
  BookOpen,
  GraduationCap,
  Users,
  BrainCog,
  ShieldCheck,
  Award,
  RefreshCcw,
  UserCheck,
  Layers,
  Heart,
  Sprout,
  Network,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Quote,
  Target,
  ChevronRight,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { PageTransition } from "../components/PageTransition";

interface RefleksiMengikutiPPGProps {
  onNavigate?: (tab: string) => void;
  key?: React.Key;
}

export const RefleksiMengikutiPPG = ({ onNavigate }: RefleksiMengikutiPPGProps) => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "pandangan" | "upaya" | "rencana"
  >("all");

  // Data 1: Pandangan Pendidikan di Indonesia
  const pandanganPendidikan = [
    {
      id: "pandangan-1",
      number: "01",
      title: "Berpusat pada peserta didik dan memanusiakan manusia",
      subtitle: "Menuntun Kodrat & Menghargai Keberagaman Karakter",
      description:
        "Dari pemikiran Ki Hadjar Dewantara, saya belajar bahwa pendidikan perlu menuntun peserta didik sesuai kodrat alam dan kodrat zaman. Peserta didik hari ini tumbuh bersama teknologi dan arus informasi yang cepat, sehingga pengalaman masa lalu guru tidak bisa menjadi satu-satunya dasar dalam mendidik. Karena kemampuan dan karakter peserta didik berbeda, pembelajaran perlu dimulai dari asesmen awal dan pemetaan karakteristik, lalu disesuaikan melalui pendekatan seperti TaRL, DUP, dan CRT.",
      tags: ["Kodrat Alam & Zaman", "TaRL", "DUP", "CRT", "Humanis"],
      icon: Users,
      gradient: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50 text-teal-700 border-teal-200",
      iconColor: "text-brand-primary",
    },
    {
      id: "pandangan-2",
      number: "02",
      title: "Mengutamakan pemahaman yang mendalam",
      subtitle: "Bermakna, Berkesadaran, & Pola Pikir Bertumbuh",
      description:
        "Pembelajaran seharusnya bermakna, berkesadaran, dan menggembirakan, tidak berhenti pada hafalan atau sekadar menyelesaikan tugas. Asesmen berfungsi memantau proses dan menentukan tindak lanjut, bukan hanya menilai hasil akhir. Keterampilan berpikir seperti Computational Thinking dan pola pikir bertumbuh (“belum bisa”, bukan “tidak bisa”) perlu dibiasakan agar peserta didik berani mencoba dan belajar dari kesalahan.",
      tags: [
        "Deep Learning",
        "Asesmen Formatif",
        "Computational Thinking",
        "Growth Mindset",
      ],
      icon: BrainCog,
      gradient: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      id: "pandangan-3",
      number: "03",
      title: "Menjadi ruang yang aman, menghargai, dan kontekstual",
      subtitle: "Disiplin Positif, Budaya Kolaboratif, & Etika Teknologi",
      description:
        "Kedisiplinan sebaiknya dibangun melalui kesadaran, tanggung jawab, dan keteladanan, bukan kekerasan fisik maupun verbal. Pembelajaran juga perlu dekat dengan konteks kehidupan peserta didik, serta didukung budaya sekolah yang positif dan kolaboratif. Teknologi seperti LMS dan AI perlu dimanfaatkan secara bijak dengan memperhatikan kesenjangan akses, tanpa menggantikan peran pendampingan guru.",
      tags: [
        "Disiplin Positif",
        "Kontekstual",
        "Budaya Kolaboratif",
        "AI & LMS Bijak",
      ],
      icon: ShieldCheck,
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      iconColor: "text-amber-600",
    },
  ];

  // Data 2: Upaya Menjadi Guru Profesional
  const upayaProfesional = [
    {
      id: "upaya-1",
      title: "Berefleksi dan belajar berkelanjutan",
      description:
        "Saya membiasakan diri mengevaluasi setiap pembelajaran, terbuka terhadap umpan balik guru pamong dan rekan sejawat, lalu memperbaiki praktik mengajar.",
      icon: RefreshCcw,
      category: "Refleksi Diri",
      color: "text-brand-primary bg-brand-primary/10 border-brand-primary/20",
    },
    {
      id: "upaya-2",
      title: "Mengenali peserta didik",
      description:
        "Saya menggunakan asesmen awal dan pemetaan karakteristik sebagai dasar merancang pembelajaran, serta memberikan bantuan bertahap agar peserta didik sempat berpikir dan mencoba.",
      icon: UserCheck,
      category: "Asesmen & Scaffolding",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      id: "upaya-3",
      title: "Merancang pembelajaran mendalam dan kontekstual",
      description:
        "Saya menghubungkan tujuan, aktivitas, media, dan asesmen, serta mengaitkan materi dengan kehidupan nyata dan melatih cara berpikir peserta didik.",
      icon: Layers,
      category: "Desain Instruksional",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      id: "upaya-4",
      title: "Menjadi teladan karakter",
      description:
        "Saya menunjukkan disiplin, tanggung jawab, dan sikap menghargai, serta mengelola emosi agar setiap teguran tetap mendidik.",
      icon: Heart,
      category: "Keteladanan & PSE",
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      id: "upaya-5",
      title: "Menumbuhkan pola pikir bertumbuh",
      description:
        "Saya memberi umpan balik pada usaha dan proses, serta menghargai kemajuan sekecil apa pun.",
      icon: Sprout,
      category: "Growth Mindset",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      id: "upaya-6",
      title: "Memanfaatkan teknologi secara kritis dan berkolaborasi",
      description:
        "Saya menggunakan teknologi sesuai tujuan pembelajaran, bekerja sama dengan rekan sejawat dan pihak sekolah, serta terus mengembangkan kompetensi di bidang Informatika.",
      icon: Network,
      category: "Teknologi & Kolaborasi",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  // Data 3: Rencana Tindak Lanjut
  const rencanaTindakLanjut = [
    {
      no: "1",
      title: "Mengenali peserta didik sebagai dasar pembelajaran",
      role: "Fondasi Pembelajaran",
      action:
        "Di awal tugas, saya akan melakukan asesmen awal dan pemetaan karakteristik peserta didik sebelum merancang pembelajaran. Hasilnya saya gunakan untuk menyesuaikan strategi, media, dan tingkat kesulitan tugas, serta memberi bantuan bertahap ketika peserta didik kesulitan.",
      indicator:
        "Kesenjangan pemahaman di kelas berkurang dan keterlibatan peserta didik meningkat.",
      badgeColor: "bg-teal-500 text-white",
      cardBorder: "border-teal-500/30",
      accent: "text-teal-700 bg-teal-50/90 border-teal-200",
      icon: UserCheck,
    },
    {
      no: "2",
      title:
        "Membangun lingkungan belajar yang aman, disiplin, dan mendorong pertumbuhan",
      role: "Iklim & Budaya Kelas",
      action:
        "Saya akan menjadi teladan, membangun disiplin melalui kesadaran dan kesepakatan kelas yang disusun bersama, mengelola emosi dengan tenang dan tegas, serta memberi umpan balik pada proses dan kemajuan peserta didik.",
      indicator:
        "Peserta didik berani bertanya, mencoba, dan memperbaiki diri.",
      badgeColor: "bg-indigo-600 text-white",
      cardBorder: "border-indigo-500/30",
      accent: "text-indigo-700 bg-indigo-50/90 border-indigo-200",
      icon: ShieldCheck,
    },
    {
      no: "3",
      title:
        "Merancang pembelajaran bermakna dan terus berefleksi serta mengembangkan diri",
      role: "Pengembangan Berkelanjutan",
      action:
        "Saya akan menyusun pembelajaran dengan tujuan, aktivitas, dan asesmen yang saling terhubung, memakai hasil asesmen untuk menentukan tindak lanjut, serta rutin berefleksi dan berkolaborasi dengan rekan sejawat.",
      indicator:
        "Perbaikan nyata pada pembelajaran berikutnya dan meningkatnya pemahaman peserta didik.",
      badgeColor: "bg-amber-600 text-white",
      cardBorder: "border-amber-500/30",
      accent: "text-amber-700 bg-amber-50/90 border-amber-200",
      icon: RefreshCcw,
    },
  ];

  return (
    <PageTransition>
      {/* Hero Banner & Pengantar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14"
      >
        <GlassCard className="p-6 sm:p-10 md:p-12 border-brand-primary/20 bg-white/80 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          {/* Decorative ambient gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] sm:text-xs font-bold mb-4 tracking-widest uppercase border border-brand-primary/20 shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>Sintesis & Refleksi Program PPG</span>
            </div>

            {/* Main Header */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-800 leading-tight mb-4 tracking-tight">
              Refleksi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-teal-600 to-indigo-600 italic">
                Mengikuti PPG
              </span>
            </h1>

            {/* Pengantar Text */}
            <div className="relative p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-white/90 to-teal-50/40 border border-brand-primary/20 shadow-xs mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary block mb-1">
                    Pengantar Reflektif
                  </span>
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify font-medium">
                    Program PPG mengubah cara saya memandang profesi guru. Saya tidak lagi melihat guru sebagai penyampai materi, tetapi sebagai perancang pengalaman belajar, pendamping, dan teladan bagi peserta didik. Halaman ini merangkum pandangan saya tentang pendidikan di Indonesia, upaya saya menjadi guru profesional, dan rencana tindak lanjut saya.
                  </p>
                </div>
              </div>
            </div>

            {/* Overview Metric Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-200/60">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Bagian 1
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    3 Paradigma Pendidikan RI
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Bagian 2
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    6 Upaya Guru Profesional
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Bagian 3
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    3 Rencana Awal Karier
                  </span>
                </div>
              </div>
            </div>

            {/* Filter / Jump Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-200/50">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                Tampilan Bagian:
              </span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "all"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Semua Bagian
              </button>
              <button
                onClick={() => setActiveFilter("pandangan")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "pandangan"
                    ? "bg-teal-700 text-white shadow-md shadow-teal-700/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                1. Pendidikan di Indonesia
              </button>
              <button
                onClick={() => setActiveFilter("upaya")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "upaya"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                2. Upaya Guru Profesional
              </button>
              <button
                onClick={() => setActiveFilter("rencana")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "rencana"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                3. Rencana Tindak Lanjut
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* SECTION 1: Pandangan Saya tentang Bagaimana Seharusnya Pendidikan di Indonesia */}
      {(activeFilter === "all" || activeFilter === "pandangan") && (
        <motion.section
          id="pandangan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-brand-primary text-[10px] font-bold uppercase tracking-wider mb-2 border border-brand-primary/20">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Dimensi Paradigma</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                1. Pandangan Saya tentang Bagaimana Seharusnya Pendidikan di Indonesia
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white/80 px-3.5 py-1.5 rounded-xl border border-slate-200/60 shadow-xs self-start sm:self-auto">
              3 Prinsip Utama
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pandanganPendidikan.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass bg-white/85 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-tr ${item.gradient} text-white group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                        Prinsip #{item.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-serif group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      {item.subtitle}
                    </p>

                    {/* Full Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* SECTION 2: Upaya Saya untuk Menjadi Guru yang Profesional */}
      {(activeFilter === "all" || activeFilter === "upaya") && (
        <motion.section
          id="upaya"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider mb-2 border border-indigo-200">
                <Award className="w-3.5 h-3.5" />
                <span>Dimensi Profesionalisme</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                2. Upaya Saya untuk Menjadi Guru yang Profesional
              </h2>
            </div>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50/80 px-3.5 py-1.5 rounded-xl border border-indigo-200/60 shadow-xs self-start sm:self-auto">
              6 Komitmen Praktik
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {upayaProfesional.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="glass bg-white/85 rounded-2xl sm:rounded-3xl p-6 border border-white/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs bg-slate-50 border border-slate-200/70 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all">
                        <IconComp className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.color}`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 font-serif group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1 text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Praktik Berkelanjutan</span>
                    </span>
                    <span className="font-mono text-slate-400">0{index + 1} / 06</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* SECTION 3: Rencana Tindak Lanjut: Tiga Hal Penting di Awal Karier Saya sebagai Guru */}
      {(activeFilter === "all" || activeFilter === "rencana") && (
        <motion.section
          id="rencana"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-200">
                <Rocket className="w-3.5 h-3.5" />
                <span>Dimensi Tindak Lanjut</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                3. Rencana Tindak Lanjut: Tiga Hal Penting di Awal Karier Saya sebagai Guru
              </h2>
            </div>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50/80 px-3.5 py-1.5 rounded-xl border border-amber-200/60 shadow-xs self-start sm:self-auto">
              Roadmap Awal Karier
            </span>
          </div>

          {/* 3 Step Action Cards */}
          <div className="space-y-6">
            {rencanaTindakLanjut.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`glass bg-white/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${item.cardBorder} shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5 sm:gap-6">
                    {/* Number Badge */}
                    <div className="flex items-center gap-3 md:flex-col md:items-center shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.badgeColor} text-white font-bold text-xl flex items-center justify-center shadow-md shadow-brand-primary/20`}
                      >
                        0{item.no}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden md:block">
                        Langkah {item.no}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md">
                          {item.role}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <IconComp className="w-4 h-4 text-brand-primary" />
                          <span>Fokus Utama #{item.no}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-slate-800 mb-3 leading-snug">
                        {item.no}. {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify mb-5">
                        {item.action}
                      </p>

                      {/* Success Indicator Box */}
                      <div className={`p-4 rounded-xl border ${item.accent} flex items-start gap-3`}>
                        <div className="p-1.5 rounded-lg bg-white/80 shrink-0 shadow-xs">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        </div>
                        <div>
                          <span className="text-[11px] uppercase tracking-wider font-bold block mb-0.5">
                            Indikator Keberhasilan:
                          </span>
                          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                            {item.indicator}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* SECTION 4: Penutup Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-brand-primary/20 bg-white/85 relative overflow-hidden shadow-xl text-center"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary via-indigo-600 to-amber-500"></div>
        <div className="absolute -top-10 -right-10 text-slate-100/40 pointer-events-none">
          <Quote size={180} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Penutup Reflektif</span>
          </div>

          <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed mb-6 text-justify sm:text-center">
            "Ketiga langkah ini saling melengkapi: mengenali peserta didik menjadi dasar, lingkungan belajar yang aman memungkinkan mereka berkembang, dan refleksi berkelanjutan menjaga kualitas saya sebagai guru. Bagi saya, menjadi guru adalah proses belajar yang tidak pernah selesai."
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200/60">
            <div className="text-center sm:text-left">
              <span className="block font-bold text-sm text-slate-800">
                Irfan Hananto
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Guru Profesional Bidang Studi Informatika &bull; PPG Prajabatan
              </span>
            </div>

            {onNavigate && (
              <div className="flex items-center gap-2 sm:ml-auto">
                <button
                  onClick={() => onNavigate("identifikasi-diri")}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Identifikasi Diri</span>
                </button>
                <button
                  onClick={() => onNavigate("filosofi-pendidikan")}
                  className="px-4 py-2 rounded-xl bg-brand-primary text-white font-bold text-xs shadow-md shadow-brand-primary/20 hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <span>Refleksi Sem 1</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
};
