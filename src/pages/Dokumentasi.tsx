import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ZoomIn,
  X,
} from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { SectionHeading } from "../components/SectionHeading";
import { PageTransition } from "../components/PageTransition";

import siklus1 from "/images/siklus-1.jpg";
import siklus2 from "/images/siklus-2.jpeg";
import siklus3 from "/images/siklus-3.jpeg";
import ft_apel from "/images/apel-pagi.jpeg";
import ft_penyambutan_siswa from "/images/menyambut-siswa.jpeg";
import ft_5s from "/images/kegiatan-5s.jpeg";
import ft_5r from "/images/budaya-5r.jpeg";
import ft_k3 from "/images/foto-k3lh.jpg";

export const Dokumentasi = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <PageTransition>
      <SectionHeading
        title="Dokumentasi Kegiatan PPL"
        subtitle="Arsip visual dan naratif pelaksanaan Praktik Pengalaman Lapangan di SMK Negeri 2 Salatiga"
        icon={Users}
      />

      <div className="space-y-10 sm:space-y-16">
        {/* Observasi Peserta Didik */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 flex items-center gap-3 border-l-4 border-brand-primary pl-3 sm:pl-4">
            <Users className="text-brand-primary w-5 h-5 sm:w-6 sm:h-6 shrink-0" />{" "}
            Observasi Peserta Didik
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <GlassCard
              onClick={() =>
                setSelectedImage({
                  src: "/images/foto-observasi-peserta-didik.jpeg",
                  title: "Observasi Peserta Didik - Kelas XI TKJ",
                })
              }
              className="p-0 overflow-hidden border-2 border-brand-primary/20 aspect-video group cursor-pointer hover:border-brand-primary/50 transition-all hover:shadow-xl"
            >
              <div
                onClick={() =>
                  setSelectedImage({
                    src: "/images/foto-observasi-peserta-didik.jpeg",
                    title: "Observasi Peserta Didik - Kelas XI TKJ",
                  })
                }
                className="w-full h-full bg-slate-200 flex items-center justify-center relative overflow-hidden cursor-pointer"
              >
                <img
                  src="/images/foto-observasi-peserta-didik.jpeg"
                  alt="Observasi Peserta Didik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 border border-white/50 shadow-sm pointer-events-none">
                  Dokumentasi Observasi
                </div>
              </div>
            </GlassCard>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed text-justify">
                Melakukan pengamatan mendalam terhadap karakteristik, gaya
                belajar, dan perkembangan sosial-emosional peserta didik di
                kelas XI TKJ. Pengamatan ini mencakup aspek kognitif, motivasi
                belajar, serta latar belakang sosial untuk merancang modul ajar
                yang lebih personal dan berdampak.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />{" "}
                  Identifikasi Gaya Belajar Visual & Kinestetik
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />{" "}
                  Pemetaan Kompetensi Awal Siswa
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pelaksanaan Pembelajaran */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 border-l-4 border-indigo-500 pl-4">
            <BookOpen className="text-indigo-500" /> Pelaksanaan Pembelajaran
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Siklus 1",
                subtitle: "Pelaksanaan Pembelajaran Siklus 1",
                description:
                  "Dokumentasi pelaksanaan pembelajaran pada siklus pertama, berfokus pada pengenalan konsep dasar dan adaptasi lingkungan kelas.",
                imgSrc: siklus1,
              },
              {
                title: "Siklus 2",
                subtitle: "Pelaksanaan Pembelajaran Siklus 2",
                description:
                  "Pelaksanaan pembelajaran siklus kedua menekankan pada peningkatan interaksi aktif siswa melalui metode diskusi kelompok.",
                imgSrc: siklus2,
              },
              {
                title: "Siklus 3",
                subtitle: "Pelaksanaan Pembelajaran Siklus 3",
                description:
                  "Siklus ketiga merupakan tahap pemantapan dimana siswa mampu mengaplikasikan proyek mandiri dengan pendampingan intensif.",
                imgSrc: siklus3,
              },
            ].map((cycle, idx) => (
              <GlassCard
                key={idx}
                className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all"
              >
                <div
                  onClick={() =>
                    setSelectedImage({
                      src: cycle.imgSrc,
                      title: cycle.subtitle,
                    })
                  }
                  className="h-44 sm:h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={cycle.imgSrc}
                    alt={cycle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                    <ZoomIn className="w-4 h-4" />
                    <span>Klik untuk memperbesar</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                    {cycle.title}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    {cycle.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Budaya Sekolah Section */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center gap-3 border-l-4 border-brand-secondary pl-4">
            <Sparkles className="text-brand-secondary" /> Budaya & Lingkungan
            Sekolah
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Apel Pagi TKJ */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: ft_apel,
                    title: "Apel Pagi Jurusan TKJ - SMK Negeri 2 Salatiga",
                  })
                }
                className="h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={ft_apel}
                  alt="Apel Pagi TKJ"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                  Setiap Kamis
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">
                  Apel Pagi Jurusan TKJ
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Dilaksanakan secara rutin setiap hari Kamis khusus untuk siswa
                  jurusan TKJ. Kegiatan ini bertujuan untuk menanamkan
                  kedisiplinan, memberikan motivasi industri, serta mengecek
                  kesiapan atribut praktik siswa.
                </p>
              </div>
            </GlassCard>

            {/* Penyambutan Peserta Didik */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: ft_penyambutan_siswa,
                    title: "Kegiatan Penyambutan Peserta Didik di Gerbang",
                  })
                }
                className="h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={ft_penyambutan_siswa}
                  alt="Kegiatan Penyambutan Peserta Didik"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute top-4 left-4 bg-brand-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                  Setiap Pagi
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">
                  Penyambutan Siswa
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Guru menyambut kedatangan siswa di gerbang sekolah dengan
                  penuh kehangatan. Budaya ini membangun kedekatan emosional
                  antara guru dan siswa serta menularkan energi positif sebelum
                  memulai pembelajaran.
                </p>
              </div>
            </GlassCard>

            {/* Budaya 5S */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: ft_5s,
                    title: "Budaya 5S (Senyum, Sapa, Salam, Sopan, Santun)",
                  })
                }
                className="h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={ft_5s}
                  alt="Budaya 5S"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                  Etika
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">Budaya 5S</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Penerapan Senyum, Sapa, Salam, Sopan, dan Santun di seluruh
                  lingkungan SMK N 2 Salatiga. Budaya ini menjadi pilar
                  pembentukan karakter religius dan etika profesional yang
                  dibutuhkan di dunia kerja.
                </p>
              </div>
            </GlassCard>

            {/* Budaya 5R */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: ft_5r,
                    title:
                      "Budaya 5R (Ringkas, Rapi, Resik, Rawat, Rajin) - Lab TKJ",
                  })
                }
                className="h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={ft_5r}
                  alt="Budaya 5R"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                  Standar Lab
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">
                  Budaya 5R (Ringkas, Rapi, Resik, Rawat, Rajin)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Pemeliharaan laboratorium komputer TKJ dengan standar 5R untuk
                  menciptakan lingkungan kerja yang teratur dan nyaman. Siswa
                  dibiasakan untuk menjaga kebersihan lab setelah praktik selesai.
                </p>
              </div>
            </GlassCard>

            {/* Budaya K3LH */}
            <GlassCard className="p-0 overflow-hidden border-brand-primary/10 flex flex-col h-full bg-white/60 group hover:shadow-xl transition-all">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: ft_k3,
                    title:
                      "Budaya K3LH (Kesehatan, Keselamatan, Keamanan, dan Lingkungan Hidup)",
                  })
                }
                className="h-48 bg-slate-200 relative overflow-hidden cursor-pointer"
              >
                <img
                  src={ft_k3}
                  alt="Budaya K3LH"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk memperbesar</span>
                </div>
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-none">
                  Keselamatan
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-800 mb-3">
                  K3LH (Kesehatan & Keselamatan Kerja)
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify mb-4 flex-1">
                  Penerapan standar Keselamatan, Kesehatan Kerja, dan Lingkungan
                  Hidup di SMK Negeri 2 Salatiga melalui prosedur keselamatan saat
                  praktik, penggunaan APD, serta pembiasaan lingkungan kerja yang
                  aman dan bersih.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Modal Zoom Gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
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
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Gambar Modal */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-900/5">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
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
