import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const PdfPreviewCard = ({
  title,
  description,
  colorClass,
  pdfUrl,
}: {
  title: string;
  description: string;
  colorClass: string;
  pdfUrl: string;
}) => {
  return (
    <GlassCard
      className={`group relative overflow-hidden border-2 ${colorClass} bg-white/60 flex flex-col justify-between h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl hover:shadow-xl transition-all duration-300`}
    >
      <div>
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-white shadow-sm shrink-0 border border-slate-100">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              {description}
            </p>
          </div>
        </div>

        <div className="w-full h-64 sm:h-72 md:h-80 mb-4 overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100 relative">
          <iframe
            src={pdfUrl}
            className="w-full h-full absolute inset-0 border-none bg-slate-50"
            title={`Preview ${title}`}
            loading="lazy"
          />
        </div>
      </div>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 bg-slate-800 text-white rounded-xl shadow-md hover:bg-brand-primary transition-all duration-200 no-underline active:scale-[0.98]"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        <span>Buka Dokumen Penuh (PDF)</span>
      </a>
    </GlassCard>
  );
};
