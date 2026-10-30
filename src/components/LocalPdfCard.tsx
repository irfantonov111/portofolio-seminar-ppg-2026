import React, { useState } from "react";
import {
  FileText,
  ExternalLink,
  Maximize2,
  Edit3,
  Check,
  X,
  FileCheck2,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "./GlassCard";

interface LocalPdfCardProps {
  initialTitle: string;
  initialDescription: string;
  initialPdfUrl: string;
  badgeText?: string;
  colorTheme?: "primary" | "indigo" | "emerald" | "amber";
  className?: string;
  allowEdit?: boolean;
}

// Common available project PDFs in /public/images/
export const AVAILABLE_PROJECT_PDFS = [
  { label: "Modul Ajar Praktik Jaringan (modul-ajar.pdf)", value: "/images/modul-ajar.pdf" },
  { label: "Modul Ajar Praktik Cisco Packet Tracer XI TKJ", value: "/images/Modul_Ajar_Praktik_Cisco_Packet_XI_TKJ.pdf" },
  { label: "Media Ajar Praktik Mandiri (media-ajar.pdf)", value: "/images/media-ajar.pdf" },
  { label: "LKPD Praktik Jaringan Mandiri (lkpd.pdf)", value: "/images/lkpd.pdf" },
  { label: "Instrumen Penilaian - Lampiran 7 (lampiran-7.pdf)", value: "/images/lampiran-7.pdf" },
  { label: "Instrumen Evaluasi Ketercapaian - Lampiran 8 (lampiran-8.pdf)", value: "/images/lampiran-8.pdf" },
  { label: "Refleksi Praktik Mengajar Terbimbing LK.4.PPLT", value: "/images/LK.4.PPLT-Irfan Hananto-95202536N.pdf" },
  { label: "Refleksi Pelaksanaan Siklus 1 (refleksi-siklus-1.pdf)", value: "/images/refleksi-siklus-1.pdf" },
  { label: "Refleksi Pelaksanaan Siklus 2 (refleksi-siklus-2.pdf)", value: "/images/refleksi-siklus-2.pdf" },
  { label: "Refleksi Pelaksanaan Siklus 3 (refleksi-siklus-3.pdf)", value: "/images/refleksi-siklus-3.pdf" },
  { label: "LK 1 Orientasi & Manajemen Sekolah (lk-ppl-mandiri-1.pdf)", value: "/images/lk-ppl-mandiri-1.pdf" },
  { label: "LK 2 Observasi Lingkungan Belajar (lk-2-ppl-mandiri.pdf)", value: "/images/lk-2-ppl-mandiri.pdf" },
  { label: "Website Portofolio Dokumentasi (WebsitePortofolio.pdf)", value: "/images/WebsitePortofolio.pdf" },
];

export const LocalPdfCard: React.FC<LocalPdfCardProps> = ({
  initialTitle,
  initialDescription,
  initialPdfUrl,
  badgeText = "Dokumen PDF Lokal",
  colorTheme = "primary",
  className = "",
  allowEdit = true,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [pdfUrl, setPdfUrl] = useState(initialPdfUrl);

  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(initialTitle);
  const [tempDesc, setTempDesc] = useState(initialDescription);
  const [tempPdfUrl, setTempPdfUrl] = useState(initialPdfUrl);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const themeClasses = {
    primary: {
      border: "border-brand-primary/25 hover:border-brand-primary/50",
      badge: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
      iconBg: "bg-gradient-to-br from-brand-primary to-emerald-700 text-white shadow-brand-primary/20",
      btnPrimary: "bg-brand-primary hover:bg-emerald-800 text-white",
      heading: "group-hover:text-brand-primary",
    },
    indigo: {
      border: "border-indigo-500/25 hover:border-indigo-500/50",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-indigo-500/20",
      btnPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
      heading: "group-hover:text-indigo-600",
    },
    emerald: {
      border: "border-emerald-500/25 hover:border-emerald-500/50",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/20",
      btnPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white",
      heading: "group-hover:text-emerald-600",
    },
    amber: {
      border: "border-amber-500/25 hover:border-amber-500/50",
      badge: "bg-amber-50 text-amber-800 border-amber-200/80",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/20",
      btnPrimary: "bg-amber-600 hover:bg-amber-700 text-white",
      heading: "group-hover:text-amber-700",
    },
  }[colorTheme];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle(tempTitle);
    setDescription(tempDesc);
    setPdfUrl(tempPdfUrl);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempTitle(title);
    setTempDesc(description);
    setTempPdfUrl(pdfUrl);
    setIsEditing(false);
  };

  const fileName = pdfUrl.split("/").pop() || "dokumen.pdf";

  return (
    <>
      <GlassCard
        className={`group relative overflow-hidden border-2 ${themeClasses.border} bg-white/75 flex flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl hover:shadow-xl transition-all duration-300 ${className}`}
      >
        <div>
          {/* Header Info */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3.5">
              <div
                className={`p-3 rounded-2xl ${themeClasses.iconBg} shadow-md shrink-0`}
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${themeClasses.badge}`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {badgeText}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[180px] sm:max-w-[240px]">
                    {fileName}
                  </span>
                </div>
                <h4
                  className={`font-bold text-slate-800 text-base sm:text-lg transition-colors leading-snug ${themeClasses.heading}`}
                >
                  {title}
                </h4>
              </div>
            </div>

            {allowEdit && (
              <button
                type="button"
                onClick={() => {
                  setTempTitle(title);
                  setTempDesc(description);
                  setTempPdfUrl(pdfUrl);
                  setIsEditing(!isEditing);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
                title="Sesuaikan Judul, Deskripsi, atau File Dokumen"
                aria-label="Edit Dokumen"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Short Description */}
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
              {description}
            </p>
          )}

          {/* Edit Form */}
          {isEditing && (
            <form
              onSubmit={handleSave}
              className="mb-5 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-800">
                  Pengaturan Dokumen PDF Lokal
                </span>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-slate-400 hover:text-slate-600 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Judul Dokumen:
                </label>
                <input
                  type="text"
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary font-medium"
                  placeholder="Masukkan judul dokumen..."
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Deskripsi Singkat:
                </label>
                <textarea
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary font-normal resize-y min-h-[50px]"
                  placeholder="Masukkan deskripsi singkat dokumen..."
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Pilih Dokumen PDF Lokal di Project:
                </label>
                <select
                  value={tempPdfUrl}
                  onChange={(e) => setTempPdfUrl(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary font-mono mb-1.5"
                >
                  {AVAILABLE_PROJECT_PDFS.map((doc, idx) => (
                    <option key={idx} value={doc.value}>
                      {doc.label} ({doc.value})
                    </option>
                  ))}
                  <option value={tempPdfUrl}>File Kustom ({tempPdfUrl})</option>
                </select>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 font-bold">
                    Atau Ketik Path:
                  </span>
                  <input
                    type="text"
                    value={tempPdfUrl}
                    onChange={(e) => setTempPdfUrl(e.target.value)}
                    className="flex-1 text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-mono text-slate-700"
                    placeholder="/images/nama-dokumen.pdf"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200/60"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  Simpan Perubahan
                </button>
              </div>
            </form>
          )}

          {/* Interactive PDF Preview */}
          <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 mb-4 group/preview">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-none bg-slate-50"
              title={`Preview PDF: ${title}`}
              loading="lazy"
            />
            {/* Quick overlay controls */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 transition-opacity">
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-sm transition-colors text-xs flex items-center gap-1"
                title="Lihat Pratinjau Layar Penuh"
                aria-label="Fullscreen PDF"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 ${themeClasses.btnPrimary} rounded-xl shadow-md transition-all no-underline active:scale-[0.98]`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka Dokumen Penuh (PDF)</span>
          </a>

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all active:scale-[0.98]"
          >
            <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Pratinjau Layar Penuh</span>
          </button>
        </div>
      </GlassCard>

      {/* Fullscreen PDF Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-bold text-sm truncate max-w-md">{title}</h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {pdfUrl}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors no-underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Tab Baru</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-slate-100">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none"
                title={`Fullscreen Document: ${title}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
