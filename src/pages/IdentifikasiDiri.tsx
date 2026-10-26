import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Sparkles,
  GraduationCap,
  Laptop,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Rocket,
  Award,
  Lightbulb,
  Layers,
  RefreshCcw,
  Network,
  ShieldCheck,
  Search,
  Briefcase,
  Compass,
  Cpu,
  Workflow,
  Clock,
  UserCheck,
  Quote,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { PageTransition } from "../components/PageTransition";

interface IdentifikasiDiriProps {
  onNavigate?: (tab: string) => void;
  key?: React.Key;
}

export const IdentifikasiDiri = ({ onNavigate }: IdentifikasiDiriProps) => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "visi-indonesia" | "visi-informatika" | "langkah-strategis"
  >("all");

  // Data 1: Visi Pribadi untuk Pendidikan Indonesia
  const visiIndonesia = [
    {
      id: "ind-1",
      icon: Target,
      tag: "Peluang Optimal",
      title: "Peluang Berkembang Optimal",
      description:
        "Mewujudkan pendidikan yang memberikan kesempatan kepada setiap peserta didik untuk berkembang secara optimal.",
      color: "from-teal-500 to-emerald-500",
      bgLight: "bg-teal-50/80 text-teal-700 border-teal-200/60",
      accent: "text-brand-primary",
    },
    {
      id: "ind-2",
      icon: Heart,
      tag: "Pengembangan Holistik",
      title: "Pengembangan Karakter & Potensi",
      description:
        "Mengembangkan pengetahuan, keterampilan, karakter, dan kemandirian peserta didik sesuai potensi masing-masing.",
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50/80 text-blue-700 border-blue-200/60",
      accent: "text-blue-600",
    },
    {
      id: "ind-3",
      icon: Briefcase,
      tag: "Relevansi Nyata",
      title: "Penerapan dalam Kehidupan Nyata",
      description:
        "Mendorong pembelajaran yang tidak hanya berorientasi pada nilai akademik, tetapi juga penerapan pengetahuan dalam kehidupan nyata.",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50/80 text-amber-700 border-amber-200/60",
      accent: "text-amber-600",
    },
    {
      id: "ind-4",
      icon: Cpu,
      tag: "Abad 21 & Literasi Digital",
      title: "Kecakapan Abad 21 & Bijak Berteknologi",
      description:
        "Membekali peserta didik dengan kemampuan berpikir kritis, kreatif, berkomunikasi, berkolaborasi, dan memanfaatkan teknologi secara bijak.",
      color: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50/80 text-purple-700 border-purple-200/60",
      accent: "text-purple-600",
    },
    {
      id: "ind-5",
      icon: Users,
      tag: "Student-Centered",
      title: "Pendidikan Berpusat pada Murid",
      description:
        "Mewujudkan pendidikan yang berpusat pada peserta didik, menghargai keberagaman, dan memberikan pengalaman belajar yang bermakna.",
      color: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50/80 text-rose-700 border-rose-200/60",
      accent: "text-rose-600",
    },
  ];

  // Data 2: Visi sebagai Calon Guru Informatika
  const visiInformatika = [
    {
      id: "inf-1",
      icon: Award,
      badge: "Kompetensi Utama",
      title: "Penguasaan Materi & Keteladanan",
      description:
        "Menjadi guru profesional yang menguasai materi, memiliki kompetensi pedagogik, dan mampu menjadi teladan bagi peserta didik.",
      borderColor: "border-teal-500/20",
      accentBg: "bg-teal-500/10 text-brand-primary",
    },
    {
      id: "inf-2",
      icon: RefreshCcw,
      badge: "Siklus Belajar",
      title: "Refleksi Berkelanjutan",
      description:
        "Mengembangkan kemampuan mengajar melalui proses belajar, praktik, evaluasi, dan refleksi berkelanjutan.",
      borderColor: "border-blue-500/20",
      accentBg: "bg-blue-500/10 text-blue-600",
    },
    {
      id: "inf-3",
      icon: Network,
      badge: "Pembelajaran",
      title: "Pembelajaran Mendalam",
      description:
        "Membimbing peserta didik agar memahami konsep dan alasan di balik setiap langkah kerja.",
      borderColor: "border-indigo-500/20",
      accentBg: "bg-indigo-500/10 text-indigo-600",
    },
   
    {
      id: "inf-4",
      icon: ShieldCheck,
      badge: "Iklim Kelas",
      title: "Lingkungan Belajar yang Aman & Adil",
      description:
        "Menciptakan lingkungan belajar yang aman, terbuka, adil, dan menghargai perbedaan kemampuan serta kebutuhan belajar peserta didik.",
      borderColor: "border-emerald-500/20",
      accentBg: "bg-emerald-500/10 text-emerald-600",
    },
    {
      id: "inf-5",
      icon: Rocket,
      badge: "Growth Mindset",
      title: "Pembelajar Sepanjang Hayat",
      description:
        "Menumbuhkan kepercayaan diri, kemandirian, tanggung jawab, dan kemauan untuk terus belajar.",
      borderColor: "border-amber-500/20",
      accentBg: "bg-amber-500/10 text-amber-600",
    },
  ];

  // Data 3: Langkah untuk Mewujudkan Visi
  const langkahStrategis = [
    {
      no: "01",
      title: "Meningkatkan kompetensi diri",
      description:
        "Mengembangkan penguasaan materi kejuruan dan keterampilan pedagogik melalui PPG, PPL, evaluasi, refleksi, serta masukan dari guru pamong dan dosen pembimbing.",
      category: "Kompetensi Pendidik",
      icon: GraduationCap,
      color: "text-brand-primary bg-brand-primary/10 border-brand-primary/20",
    },
    {
      no: "02",
      title: "Memahami kebutuhan peserta didik",
      description:
        "Mengidentifikasi pengetahuan awal, kesiapan, minat, dan kesulitan belajar melalui pertanyaan pemantik, asesmen awal, dan pengamatan.",
      category: "Asesmen Diagnostik",
      icon: Search,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      no: "03",
      title: "Menerapkan pembelajaran yang sesuai",
      description:
        "Menyesuaikan contoh, media, tingkat kesulitan tugas, dan bentuk pendampingan berdasarkan kebutuhan peserta didik.",
      category: "Diferensiasi Pembelajaran",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      no: "04",
      title: "Mengembangkan pembelajaran kontekstual",
      description:
        "Menggunakan studi kasus, proyek, simulasi, dan pemecahan masalah yang relevan dengan kehidupan serta kebutuhan dunia kerja.",
      category: "Relevansi Vokasi (DUDI)",
      icon: Briefcase,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      no: "05",
      title: "Mendorong kemandirian belajar",
      description:
        "Memberikan demonstrasi dan petunjuk secara bertahap agar peserta didik mampu mencoba, menganalisis kesalahan, dan menemukan solusi sendiri.",
      category: "Scaffolding & Kemandirian",
      icon: Rocket,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      no: "06",
      title: "Melaksanakan penilaian menyeluruh",
      description:
        "Mempertimbangkan hasil akhir, proses kerja, ketepatan prosedur, kemampuan menjelaskan alasan, kerja sama, dan tanggung jawab.",
      category: "Asesmen Otentik",
      icon: CheckCircle2,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      no: "07",
      title: "Menjadi teladan dan membangun karakter",
      description:
        "Membiasakan kedisiplinan, menghargai pendapat, memberikan umpan balik yang membangun, serta menumbuhkan budaya saling menghormati dan membantu.",
      category: "Keteladanan & Karakter",
      icon: Heart,
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      no: "08",
      title: "Melakukan perbaikan berkelanjutan",
      description:
        "Mengevaluasi praktik pembelajaran dan berkoordinasi dengan guru pamong, wali kelas, guru BK, atau pihak sekolah sesuai kebutuhan.",
      category: "Refleksi & Kolaborasi",
      icon: RefreshCcw,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14"
      >
        <GlassCard className="p-6 sm:p-10 md:p-12 border-brand-primary/20 bg-white/80 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          {/* Decorative ambient gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] sm:text-xs font-bold mb-4 tracking-widest uppercase border border-brand-primary/20 shadow-sm">
              <Target className="w-3.5 h-3.5" />
              <span>Identifikasi Diri & Visi Keguruan</span>
            </div>

            {/* Main Header */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-800 leading-tight mb-4 tracking-tight">
              Identifikasi Diri:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-teal-600 to-brand-secondary italic">
                Visi sebagai Calon Guru Profesional
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl text-justify mb-8">
              Pernyataan visi dan komitmen transformatif calon guru profesional bidang studi Informatika. Merangkum komitmen moral terhadap kemajuan pendidikan Indonesia, penegasan peran sebagai pendidik kejuruan teknologi yang berdaya saing, serta peta jalan operasional untuk mewujudkan pembelajaran yang berpusat pada murid, inklusif, dan adaptif terhadap tuntutan zaman.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-200/60">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Pilar Nasional
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    5 Visi Pendidikan RI
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Visi
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    6 Visi Guru Profesional
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Aksi Konkret
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    8 Langkah Strategis
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
                onClick={() => setActiveFilter("visi-indonesia")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "visi-indonesia"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                1. Visi Pendidikan Indonesia
              </button>
              <button
                onClick={() => setActiveFilter("visi-informatika")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "visi-informatika"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                2. Visi Pribadi Sebagai Calon Guru
              </button>
              <button
                onClick={() => setActiveFilter("langkah-strategis")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === "langkah-strategis"
                    ? "bg-teal-700 text-white shadow-md shadow-teal-700/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                3. Langkah Mewujudkan Visi
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* SECTION 1: Visi Pribadi untuk Pendidikan Indonesia */}
      {(activeFilter === "all" || activeFilter === "visi-indonesia") && (
        <motion.section
          id="visi-indonesia"
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
                <span>Dimensi Pertama</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                1. Visi Pribadi untuk Pendidikan Indonesia
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-white/80 px-3.5 py-1.5 rounded-xl border border-slate-200/60 shadow-xs self-start sm:self-auto">
              5 Nilai Fondasi
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visiIndonesia.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass bg-white/85 rounded-2xl sm:rounded-3xl p-6 border border-white/70 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm bg-gradient-to-tr ${item.color} text-white group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.bgLight}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2.5 font-serif group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-teal-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Fokus Pendidikan</span>
                    </span>
                    <span className="font-mono text-slate-400">Pilar 0{index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* SECTION 2: Visi sebagai Calon Guru Informatika */}
      {(activeFilter === "all" || activeFilter === "visi-informatika") && (
        <motion.section
          id="visi-informatika"
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
                <Laptop className="w-3.5 h-3.5" />
                <span>Dimensi Kedua</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                2. Visi Pribadi Sebagai Calon Guru 
              </h2>
            </div>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50/80 px-3.5 py-1.5 rounded-xl border border-indigo-200/60 shadow-xs self-start sm:self-auto">
              6 Komitmen Kejuruan
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visiInformatika.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`glass bg-white/85 rounded-2xl sm:rounded-3xl p-6 border ${item.borderColor} shadow-md hover:shadow-xl transition-all flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${item.accentBg} group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2.5 font-serif group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    
                    <span className="font-mono text-slate-400">0{index + 1} / 06</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* SECTION 3: Langkah untuk Mewujudkan Visi */}
      {(activeFilter === "all" || activeFilter === "langkah-strategis") && (
        <motion.section
          id="langkah-strategis"
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
                <span>Dimensi Ketiga</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-800">
                3. Langkah untuk Mewujudkan Visi
              </h2>
            </div>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50/80 px-3.5 py-1.5 rounded-xl border border-amber-200/60 shadow-xs self-start sm:self-auto">
              8 Tindakan Nyata
            </span>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {langkahStrategis.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="glass bg-white/85 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-primary to-teal-500 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform">
                      {item.no}
                    </div>

                    <div className="flex-1">
                      {/* Category Chip */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.color}`}
                        >
                          {item.category}
                        </span>
                        <IconComp className="w-4 h-4 text-slate-400 group-hover:text-brand-primary transition-colors" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 font-serif group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* Closing Reflection & Commitment Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-brand-primary/20 bg-white/80 relative overflow-hidden shadow-xl text-center"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-teal-500 to-brand-secondary"></div>
        <div className="absolute -top-10 -right-10 text-slate-100/40 pointer-events-none">
          <Quote size={160} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Komitmen Profesional Guru</span>
          </div>

          <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed mb-6">
            "Menjadi guru profesional bukan semata mentransfer ilmu, melainkan menuntun pola pikir kritis, mengasah kemandirian, dan menginspirasi peserta didik menjadi pribadi berintegritas di era digital."
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200/60">
            <div className="text-center sm:text-left">
              <span className="block font-bold text-sm text-slate-800">
                Irfan Hananto
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Calon Guru Profesional &bull; PPG Bidang Studi Informatika
              </span>
            </div>

            {onNavigate && (
              <div className="flex items-center gap-2 sm:ml-auto">
                <button
                  onClick={() => onNavigate("profil")}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Lihat Profil</span>
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
