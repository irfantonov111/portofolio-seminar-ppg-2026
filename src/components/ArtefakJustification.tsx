import React from "react";
import {
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  Compass,
  Award,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { GlassCard } from "./GlassCard";

export interface ArtefakItem {
  no: number;
  title: string;
  alasan: string | string[];
  kaitanPedagogi?: string | string[];
  dampak?: string | string[];
  pdfLink?: string;
  pdfName?: string;
}

interface ArtefakJustificationProps {
  mataKuliah?: string;
  ringkasanUmum?: string;
  items?: ArtefakItem[];
}

const renderParagraphs = (
  content?: string | string[],
  baseClassName = "text-slate-600",
) => {
  if (!content) return null;

  if (Array.isArray(content)) {
    return (
      <div className="space-y-2.5">
        {content.map((para, idx) => (
          <p
            key={idx}
            className={`${baseClassName} leading-relaxed text-justify`}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  if (typeof content === "string" && content.includes("\n")) {
    const paragraphs = content.split(/\n+/).filter((p) => p.trim().length > 0);
    return (
      <div className="space-y-2.5">
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            className={`${baseClassName} leading-relaxed text-justify`}
          >
            {para.trim()}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p className={`${baseClassName} leading-relaxed text-justify`}>{content}</p>
  );
};

export const ArtefakJustification: React.FC<ArtefakJustificationProps> = ({
  mataKuliah = "Mata Kuliah Ini",
  ringkasanUmum = "Pemilihan artefak-artefak pembelajaran di atas didasarkan pada signifikansinya dalam mendokumentasikan transformasi pemahaman konseptual menuju tindakan nyata di ruang kelas. Setiap artefak merepresentasikan proses berpikir kritis, perancangan pembelajaran yang berpusat pada peserta didik, serta komitmen berkelanjutan dalam melakukan refleksi dan evaluasi diri demi perbaikan kualitas pembelajaran.",
  items = [
    {
      no: 1,
      title: "Artefak Refleksi 1: Analisis Desain & Modifikasi Pembelajaran",
      alasan:
        "Artefak ini dipilih karena memuat bukti konkret kemampuan dalam mengidentifikasi kebutuhan belajar peserta didik serta menerjemahkan prinsip-prinsip pembelajaran ke dalam modul ajar yang kontekstual dan adaptif.",
      kaitanPedagogi:
        "Mengintegrasikan pendekatan student-centered learning dan asesmen diagnostik sebagai dasar perancangan instruksional.",
      dampak:
        "Memberikan ruang eksplorasi yang lebih mandiri bagi peserta didik serta meningkatkan keterlibatan aktif selama proses pembelajaran.",
    },
    {
      no: 2,
      title: "Artefak Refleksi 2: Studi Kasus Kontekstual & Sudut Pandang",
      alasan:
        "Artefak ini merepresentasikan proses berpikir reflektif tingkat tinggi melalui eksplorasi berbagai perspektif dan pemecahan masalah riil yang dihadapi di lingkungan kelas.",
      kaitanPedagogi:
        "Menerapkan prinsip inquiry dan contextual learning agar pembelajaran relevan dengan realitas sosial dan kodrat zaman peserta didik.",
      dampak:
        "Menumbuhkan empati, kemampuan bernalar kritis, dan keterampilan kolaboratif dalam memecahkan tantangan belajar.",
    },
    {
      no: 3,
      title: "Artefak Refleksi 3: Evaluasi, Asesmen & Rencana Tindak Lanjut",
      alasan:
        "Dipilih sebagai instrumen reflektif komprehensif untuk mengukur efektivitas metode yang telah diterapkan sekaligus merumuskan perbaikan terstruktur untuk siklus pembelajaran berikutnya.",
      kaitanPedagogi:
        "Pemanfaatan data asesmen formatif secara berkelanjutan untuk menunjang differentiated learning dan scaffolding.",
      dampak:
        "Terbentuknya siklus perbaikan berkelanjutan (continuous improvement) yang memfasilitasi kemajuan belajar setiap individu siswa secara adil.",
    },
  ],
}) => {
  return (
    <div className="pt-12 mt-12 border-t border-slate-200/80">
      {/* Container Khusus Terpisah untuk Alasan Pemilihan Artefak Refleksi */}
      <GlassCard className="p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-indigo-100/80 bg-gradient-to-br from-white/95 via-slate-50/70 to-indigo-50/30 shadow-xl backdrop-blur-md">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800 tracking-tight flex items-center gap-3">
              <Award className="w-7 h-7 text-brand-primary shrink-0" />
              <span>Alasan Pemilihan Artefak Refleksi</span>
            </h3>
          </div>
        </div>

        {/* Overview Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 border border-brand-primary/20 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-indigo-50 text-brand-primary shadow-sm shrink-0 mt-1 hidden sm:block border border-indigo-100">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm sm:text-base text-justify leading-relaxed">
                Berikut merupakan justifikasi artefak yang saya kumpulkan
                sebagai bukti pendukung refleksi selama mengikuti Pendidikan
                Profesi Guru (PPG). Artefak-artefak tersebut menjadi bukti hasil
                proses pembelajaran yang saya lakukan selama perkuliahan.
              </p>
            </div>
          </div>
        </div>

        {/* Grid of Artefak Justifications in 1 Row */}
        <div
          className={`grid gap-6 ${items.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : items.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}
        >
          {items.map((item) => (
            <GlassCard
              key={item.no}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl border-2 border-slate-100 bg-white/85 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-brand-primary/10 text-brand-primary font-bold text-sm flex items-center justify-center border border-brand-primary/20">
                    {item.no}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    Dokumen {item.no}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-bold text-slate-800 text-base sm:text-lg mb-3 leading-snug">
                  {item.title}
                </h4>

                {/* Section 1: Alasan Pemilihan */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100/80">
                    <div className="font-bold text-slate-700 text-xs flex items-center gap-1.5 mb-2 uppercase tracking-wide">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      Alasan Pemilihan:
                    </div>
                    {renderParagraphs(item.alasan, "text-slate-600")}
                  </div>

                  {/* Section 2: Kaitan Pedagogi */}
                  {item.kaitanPedagogi && (
                    <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100/50">
                      <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5 mb-2 uppercase tracking-wide">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        Relevansi Pedagogis:
                      </div>
                      {renderParagraphs(
                        item.kaitanPedagogi,
                        "text-indigo-950/80",
                      )}
                    </div>
                  )}

                  {/* Section 3: Dampak Pembelajaran */}
                  {item.dampak && (
                    <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
                      <div className="font-bold text-emerald-900 text-xs flex items-center gap-1.5 mb-2 uppercase tracking-wide">
                        <Lightbulb className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        Dampak Nyata:
                      </div>
                      {renderParagraphs(item.dampak, "text-emerald-950/80")}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom footnote indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>
                  {item.pdfName
                    ? `Lampiran: ${item.pdfName}`
                    : `Terkait Lampiran ${item.no}`}
                </span>
                {item.pdfLink ? (
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-primary font-semibold flex items-center gap-0.5 hover:underline"
                  >
                    Lihat PDF <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-brand-primary font-semibold flex items-center gap-0.5">
                    Portofolio PPG <ArrowUpRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};
