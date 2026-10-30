import React, { useState } from "react";
import {
  Video,
  ExternalLink,
  Play,
  Edit3,
  Check,
  X,
  Maximize2,
  Share2,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "./GlassCard";

interface GDriveVideoCardProps {
  initialTitle: string;
  initialDescription: string;
  initialVideoUrl: string;
  badgeText?: string;
  className?: string;
  allowEdit?: boolean;
}

/**
 * Format various Google Drive / video URLs into valid embed URLs
 */
export function formatGDriveEmbedUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();

  // If Google Drive link with file/d/{id}
  const fileIdMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }

  // If Google Drive query parameter id={id}
  const idParamMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) {
    return `https://drive.google.com/file/d/${idParamMatch[1]}/preview`;
  }

  // If already a Google Drive /preview link
  if (trimmed.includes("drive.google.com") && trimmed.includes("/preview")) {
    return trimmed;
  }

  // YouTube fallback support if user provides youtube video
  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`;
  }

  return trimmed;
}

export const GDriveVideoCard: React.FC<GDriveVideoCardProps> = ({
  initialTitle,
  initialDescription,
  initialVideoUrl,
  badgeText = "Video Google Drive",
  className = "",
  allowEdit = true,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);

  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(initialTitle);
  const [tempDesc, setTempDesc] = useState(initialDescription);
  const [tempUrl, setTempUrl] = useState(initialVideoUrl);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const embedUrl = formatGDriveEmbedUrl(videoUrl);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle(tempTitle);
    setDescription(tempDesc);
    setVideoUrl(tempUrl);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempTitle(title);
    setTempDesc(description);
    setTempUrl(videoUrl);
    setIsEditing(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(videoUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <GlassCard
        className={`group relative overflow-hidden border-2 border-emerald-500/20 bg-white/75 flex flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 ${className}`}
      >
        <div>
          {/* Header Info */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 shrink-0">
                <Video className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    {badgeText}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Direct Embed / Preview
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg group-hover:text-emerald-700 transition-colors leading-snug">
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
                  setTempUrl(videoUrl);
                  setIsEditing(!isEditing);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors shrink-0"
                title="Sesuaikan Judul, Deskripsi, atau Link Video"
                aria-label="Edit Video"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
            {description}
          </p>

          {/* Inline Edit Form */}
          {isEditing && (
            <form
              onSubmit={handleSave}
              className="mb-5 p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/50">
                <span className="text-xs font-bold text-emerald-800">
                  Pengaturan Video G-Drive
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
                  Judul Video:
                </label>
                <input
                  type="text"
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  placeholder="Masukkan judul video..."
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
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-normal resize-y min-h-[60px]"
                  placeholder="Masukkan deskripsi singkat video..."
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Link Google Drive:
                </label>
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  placeholder="https://drive.google.com/file/d/.../view"
                  required
                />
                <p className="text-[10px] text-emerald-700 mt-1">
                  * Otomatis dikonversi ke mode embed preview Google Drive.
                </p>
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
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  Simpan Perubahan
                </button>
              </div>
            </form>
          )}

          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900 mb-4 group/player">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full border-none"
                title={`Video: ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-300">
                <Play className="w-12 h-12 text-slate-500 mb-2 opacity-50" />
                <p className="text-xs font-medium">Link video belum disetel</p>
              </div>
            )}

            {/* Quick overlay controls */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 transition-opacity">
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors text-xs flex items-center gap-1"
                title="Perbesar Layar Penuh"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 bg-emerald-600 text-white rounded-xl shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-all no-underline active:scale-[0.98]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka di Google Drive</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all active:scale-[0.98]"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Salin Link Drive</span>
              </>
            )}
          </button>
        </div>
      </GlassCard>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/90 text-white border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-sm truncate max-w-md">{title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                className="w-full h-full border-none"
                title={`Fullscreen Video: ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-slate-800/80 text-slate-300 text-xs flex items-center justify-between">
              <span className="truncate max-w-lg">{description}</span>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold ml-4 shrink-0 no-underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Google Drive
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
