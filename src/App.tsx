import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  User,
  BookOpen,
  Sparkles,
  Menu,
  X,
  FileText,
  Lightbulb,
  GraduationCap,
  NotebookPen,
  NotebookText,
  Sprout,
  BrainCog,
  ChevronDown,
  Layers,
  Heart,
  Sliders,
  Briefcase,
  Rocket,
  Users,
  Award,
  Target,
  Compass,
} from "lucide-react";

// Import Pages - Semester 1
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { IdentifikasiDiri } from "./pages/IdentifikasiDiri";
import { RefleksiMengikutiPPG } from "./pages/RefleksiMengikutiPPG";
import { Dokumentasi } from "./pages/Dokumentasi";
import { FilosofiPendidikan } from "./pages/FilosofiPendidikan";
import { PemahamanPeserta } from "./pages/PemahamanPeserta";
import { PembelajaranMendalam } from "./pages/PembelajaranMendalam";
import { RefleksiPPLSatu } from "./pages/RefleksiPPLSatu";
import { GrowthMindset } from "./pages/GrowthMindset";
import { ComputationalThinking } from "./pages/ComputationalThinking";

// Import Pages - Semester 2
import { RefleksiPMAL } from "./pages/RefleksiPMAL";
import { RefleksiPSE } from "./pages/RefleksiPSE";
import { RefleksiPPDB } from "./pages/RefleksiPPDB";
import { RefleksiPPL2 } from "./pages/RefleksiPPL2";
import { RefleksiPK } from "./pages/RefleksiPK";
import { KaryaInovasi } from "./pages/KaryaInovasi";

interface NavItem {
  id: string;
  name: string;
  shortDesc?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [sem1DropdownOpen, setSem1DropdownOpen] = useState(false);
  const [sem2DropdownOpen, setSem2DropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileSem1Open, setMobileSem1Open] = useState(false);
  const [mobileSem2Open, setMobileSem2Open] = useState(false);

  const sem1Ref = useRef<HTMLDivElement>(null);
  const sem2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sem1Ref.current && !sem1Ref.current.contains(event.target as Node)) {
        setSem1DropdownOpen(false);
      }
      if (sem2Ref.current && !sem2Ref.current.contains(event.target as Node)) {
        setSem2DropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Semester 1 navigation links
  const semester1Links: NavItem[] = [
    {
      id: "filosofi-pendidikan",
      name: "Refleksi FPPN",
      shortDesc: "Filosofi Pendidikan & Nilai",
      icon: Lightbulb,
    },
    {
      id: "pemahaman-peserta",
      name: "Refleksi PPDP",
      shortDesc: "Pemahaman Peserta Didik",
      icon: GraduationCap,
    },
    {
      id: "pembelajaran-mendalam",
      name: "Refleksi PMAD",
      shortDesc: "Prinsip Pengajaran & Asesmen I",
      icon: NotebookPen,
    },
    {
      id: "refleksi",
      name: "Refleksi PPL",
      shortDesc: "PPL Terbimbing I",
      icon: NotebookText,
    },
    {
      id: "growth-mindset",
      name: "Refleksi GM",
      shortDesc: "Growth Mindset Guru",
      icon: Sprout,
    },
    {
      id: "computational-thinking",
      name: "Refleksi CT",
      shortDesc: "Berpikir Komputasional",
      icon: BrainCog,
    },
  ];

  // Semester 2 navigation links
  const semester2Links: NavItem[] = [
    {
      id: "refleksi-pmal",
      name: "Refleksi PMAL",
      shortDesc: "Pengajaran & Asesmen Lanjutan",
      icon: Layers,
    },
    {
      id: "refleksi-pse",
      name: "Refleksi PSE",
      shortDesc: "Pembelajaran Sosial Emosional",
      icon: Heart,
    },
    {
      id: "refleksi-ppdb",
      name: "Refleksi PPDB",
      shortDesc: "Pembelajaran Berdiferensiasi",
      icon: Sliders,
    },
    {
      id: "refleksi-ppl-2",
      name: "Refleksi PPLM",
      shortDesc: "PPL Mandiri",
      icon: Briefcase,
    },
    {
      id: "refleksi-pk",
      name: "Refleksi PK",
      shortDesc: "Projek Kepemimpinan",
      icon: Rocket,
    },
  ];

  const isSem1Active = semester1Links.some((link) => link.id === activeTab);
  const isSem2Active = semester2Links.some((link) => link.id === activeTab);

  const handleNavigate = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setSem1DropdownOpen(false);
    setSem2DropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-mesh font-sans text-slate-800 overflow-x-hidden flex flex-col">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-6"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            className={`glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl flex items-center justify-between lg:justify-center border-white/50 shadow-lg transition-all ${isScrolled ? "bg-white/95 shadow-brand-primary/10 backdrop-blur-md" : "bg-white/70"}`}
          >
            {/* Mobile Header Label (Tanpa branding logo/nama) */}
            <div className="lg:hidden flex items-center gap-2">
              <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
                Menu Portofolio
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-2 flex-wrap">
              <button
                onClick={() => handleNavigate("profil")}
                className={`px-3 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "profil"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                <User className="w-4 h-4" />
                <span>Profil</span>
              </button>

              <button
                onClick={() => handleNavigate("identifikasi-diri")}
                className={`px-3 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "identifikasi-diri"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Identifikasi Diri</span>
              </button>

              <button
                onClick={() => handleNavigate("refleksi-ppg")}
                className={`px-3 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "refleksi-ppg"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span className="hidden xl:inline">Refleksi Mengikuti PPG</span>
                <span className="xl:hidden">Refleksi PPG</span>
              </button>

              {/* Semester 1 Dropdown */}
              <div className="relative" ref={sem1Ref}>
                <button
                  onClick={() => {
                    setSem1DropdownOpen(!sem1DropdownOpen);
                    setSem2DropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isSem1Active
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                      : sem1DropdownOpen
                        ? "bg-brand-primary/15 text-brand-primary"
                        : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                  }`}
                  aria-expanded={sem1DropdownOpen}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Semester 1</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${sem1DropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {sem1DropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-64 glass bg-white/95 rounded-2xl p-2.5 shadow-2xl border border-white/80 z-50 backdrop-blur-xl"
                    >
                      <div className="px-2.5 py-1.5 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          Mata Kuliah Sem 1
                        </span>
                        <span className="text-[10px] font-bold text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-full">
                          6 Menu
                        </span>
                      </div>
                      <div className="space-y-1">
                        {semester1Links.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2.5 ${
                              activeTab === item.id
                                ? "bg-brand-primary text-white shadow-sm"
                                : "text-slate-700 hover:bg-brand-primary/10 hover:text-brand-primary"
                            }`}
                          >
                            <item.icon className="w-4 h-4 shrink-0" />
                            <div className="truncate">
                              <span className="block leading-tight">
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] font-normal block truncate ${activeTab === item.id ? "text-white/80" : "text-slate-400"}`}
                              >
                                {item.shortDesc}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Semester 2 Dropdown */}
              <div className="relative" ref={sem2Ref}>
                <button
                  onClick={() => {
                    setSem2DropdownOpen(!sem2DropdownOpen);
                    setSem1DropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isSem2Active
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                      : sem2DropdownOpen
                        ? "bg-brand-primary/15 text-brand-primary"
                        : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                  }`}
                  aria-expanded={sem2DropdownOpen}
                >
                  <Award className="w-4 h-4" />
                  <span>Semester 2</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${sem2DropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {sem2DropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-64 glass bg-white/95 rounded-2xl p-2.5 shadow-2xl border border-white/80 z-50 backdrop-blur-xl"
                    >
                      <div className="px-2.5 py-1.5 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          Mata Kuliah Sem 2
                        </span>
                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                          5 Menu
                        </span>
                      </div>
                      <div className="space-y-1">
                        {semester2Links.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2.5 ${
                              activeTab === item.id
                                ? "bg-brand-primary text-white shadow-sm"
                                : "text-slate-700 hover:bg-brand-primary/10 hover:text-brand-primary"
                            }`}
                          >
                            <item.icon className="w-4 h-4 shrink-0" />
                            <div className="truncate">
                              <span className="block leading-tight">
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] font-normal block truncate ${activeTab === item.id ? "text-white/80" : "text-slate-400"}`}
                              >
                                {item.shortDesc}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Karya Inovasi */}
              <button
                onClick={() => handleNavigate("karya-inovasi")}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "karya-inovasi"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Karya Inovasi</span>
              </button>

              <button
                onClick={() => handleNavigate("dokumentasi")}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "dokumentasi"
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "text-slate-600 hover:bg-brand-primary/10 hover:text-brand-primary"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Dokumentasi</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-xl text-brand-primary hover:bg-brand-primary/10 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:hidden z-40 mt-2"
            >
              <div className="glass p-5 rounded-3xl flex flex-col gap-2 shadow-2xl bg-white/95 border border-white/80 max-h-[82vh] overflow-y-auto backdrop-blur-xl">
                {/* Profil */}
                <button
                  onClick={() => handleNavigate("profil")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === "profil"
                      ? "bg-brand-primary text-white shadow-md"
                      : "hover:bg-brand-primary/10 text-slate-700"
                  }`}
                >
                  <User className="w-5 h-5 shrink-0" />
                  <span>Profil</span>
                </button>

                {/* Identifikasi Diri */}
                <button
                  onClick={() => handleNavigate("identifikasi-diri")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === "identifikasi-diri"
                      ? "bg-brand-primary text-white shadow-md"
                      : "hover:bg-brand-primary/10 text-slate-700"
                  }`}
                >
                  <Target className="w-5 h-5 shrink-0" />
                  <span>Identifikasi Diri</span>
                </button>

                {/* Refleksi Mengikuti PPG */}
                <button
                  onClick={() => handleNavigate("refleksi-ppg")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === "refleksi-ppg"
                      ? "bg-brand-primary text-white shadow-md"
                      : "hover:bg-brand-primary/10 text-slate-700"
                  }`}
                >
                  <Compass className="w-5 h-5 shrink-0" />
                  <span>Refleksi Mengikuti PPG</span>
                </button>

                {/* Semester 1 Accordion */}
                <div className="rounded-2xl border border-slate-200/60 overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => setMobileSem1Open(!mobileSem1Open)}
                    className={`w-full flex items-center justify-between p-3.5 font-bold text-sm transition-colors ${
                      isSem1Active
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-brand-primary" />
                      <span>Semester 1</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileSem1Open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileSem1Open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-2 pb-2 space-y-1"
                      >
                        {semester1Links.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                              activeTab === item.id
                                ? "bg-brand-primary text-white shadow-sm"
                                : "text-slate-700 hover:bg-brand-primary/10"
                            }`}
                          >
                            <item.icon className="w-4 h-4 shrink-0" />
                            <div>
                              <span className="block font-bold">
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] block ${activeTab === item.id ? "text-white/80" : "text-slate-400"}`}
                              >
                                {item.shortDesc}
                              </span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Semester 2 Accordion */}
                <div className="rounded-2xl border border-slate-200/60 overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => setMobileSem2Open(!mobileSem2Open)}
                    className={`w-full flex items-center justify-between p-3.5 font-bold text-sm transition-colors ${
                      isSem2Active
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-indigo-600" />
                      <span>Semester 2</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileSem2Open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileSem2Open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-2 pb-2 space-y-1"
                      >
                        {semester2Links.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                              activeTab === item.id
                                ? "bg-brand-primary text-white shadow-sm"
                                : "text-slate-700 hover:bg-brand-primary/10"
                            }`}
                          >
                            <item.icon className="w-4 h-4 shrink-0" />
                            <div>
                              <span className="block font-bold">
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] block ${activeTab === item.id ? "text-white/80" : "text-slate-400"}`}
                              >
                                {item.shortDesc}
                              </span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Karya Inovasi */}
                <button
                  onClick={() => handleNavigate("karya-inovasi")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === "karya-inovasi"
                      ? "bg-brand-primary text-white shadow-md"
                      : "hover:bg-brand-primary/10 text-slate-700"
                  }`}
                >
                  <Lightbulb className="w-5 h-5 shrink-0" />
                  <span>Karya Inovasi</span>
                </button>

                {/* Dokumentasi */}
                <button
                  onClick={() => handleNavigate("dokumentasi")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl font-bold text-sm transition-all ${
                    activeTab === "dokumentasi"
                      ? "bg-brand-primary text-white shadow-md"
                      : "hover:bg-brand-primary/10 text-slate-700"
                  }`}
                >
                  <Users className="w-5 h-5 shrink-0" />
                  <span>Dokumentasi</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {/* Base Pages */}
          {activeTab === "home" && (
            <Home key="home" onNavigate={handleNavigate} />
          )}
          {activeTab === "profil" && <Profil key="profil" />}
          {activeTab === "identifikasi-diri" && (
            <IdentifikasiDiri
              key="identifikasi-diri"
              onNavigate={handleNavigate}
            />
          )}
          {activeTab === "refleksi-ppg" && (
            <RefleksiMengikutiPPG
              key="refleksi-ppg"
              onNavigate={handleNavigate}
            />
          )}
          {activeTab === "karya-inovasi" && (
            <KaryaInovasi key="karya-inovasi" />
          )}
          {activeTab === "dokumentasi" && <Dokumentasi key="dokumentasi" />}

          {/* Semester 1 Pages */}
          {activeTab === "filosofi-pendidikan" && (
            <FilosofiPendidikan key="filosofi-pendidikan" />
          )}
          {activeTab === "pemahaman-peserta" && (
            <PemahamanPeserta key="pemahaman-peserta" />
          )}
          {activeTab === "pembelajaran-mendalam" && (
            <PembelajaranMendalam key="pembelajaran-mendalam" />
          )}
          {activeTab === "refleksi" && <RefleksiPPLSatu key="refleksi" />}
          {activeTab === "growth-mindset" && (
            <GrowthMindset key="growth-mindset" />
          )}
          {activeTab === "computational-thinking" && (
            <ComputationalThinking key="computational-thinking" />
          )}

          {/* Semester 2 Pages */}
          {activeTab === "refleksi-pmal" && (
            <RefleksiPMAL key="refleksi-pmal" />
          )}
          {activeTab === "refleksi-pse" && <RefleksiPSE key="refleksi-pse" />}
          {activeTab === "refleksi-ppdb" && (
            <RefleksiPPDB key="refleksi-ppdb" />
          )}
          {activeTab === "refleksi-ppl-2" && (
            <RefleksiPPL2 key="refleksi-ppl-2" />
          )}
          {activeTab === "refleksi-pk" && <RefleksiPK key="refleksi-pk" />}
        </AnimatePresence>
      </main>

      {/* Persistent Responsive Footer */}
      <footer className="bg-[#052c29] text-white py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-left">
            {/* Column 1: Profile & Motto */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-brand-primary/20 border border-white/10 shrink-0">
                  IH
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif tracking-tight leading-none mb-1">
                    Irfan Hananto
                  </h4>
                  <p className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                    Informatics Educator
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify mb-4"></p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300">
                <FileText size={12} className="text-brand-primary" />
                <span>irfantonov111@gmail.com</span>
              </div>
            </div>

            {/* Column 2: Semester 1 Navigation */}
            <div>
              <h5 className="font-bold text-brand-primary uppercase text-[10px] tracking-[0.2em] border-l-2 border-brand-primary pl-2.5 mb-4">
                Refleksi Semester 1
              </h5>
              <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                {semester1Links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="hover:text-brand-primary transition-colors flex items-center gap-2 group text-left"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform shrink-0"></div>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Semester 2 Navigation */}
            <div>
              <h5 className="font-bold text-indigo-400 uppercase text-[10px] tracking-[0.2em] border-l-2 border-indigo-400 pl-2.5 mb-4">
                Refleksi Semester 2
              </h5>
              <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                {semester2Links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigate(link.id)}
                      className="hover:text-indigo-400 transition-colors flex items-center gap-2 group text-left"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 scale-0 group-hover:scale-100 transition-transform shrink-0"></div>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Profil & Lembaga */}
            <div>
              <h5 className="font-bold text-brand-accent uppercase text-[10px] tracking-[0.2em] border-l-2 border-brand-accent pl-2.5 mb-4">
                Informasi
              </h5>
              <div className="space-y-3 text-xs text-slate-300">
                <p>
                  <strong className="text-white block mb-0.5">Program:</strong>
                  PPG Prajabatan
                </p>
                <p>
                  <strong className="text-white block mb-0.5">LPTK:</strong>
                  Universitas Kristen Satya Wacana
                </p>
                <p>
                  <strong className="text-white block mb-0.5">
                    Sekolah Mitra:
                  </strong>
                  SMK Negeri 2 Salatiga
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => handleNavigate("identifikasi-diri")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-primary text-white text-xs font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <Target size={14} /> Identifikasi Diri & Visi
                  </button>
                  <button
                    onClick={() => handleNavigate("refleksi-ppg")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-primary text-white text-xs font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <Compass size={14} /> Refleksi Mengikuti PPG
                  </button>
                  <button
                    onClick={() => handleNavigate("karya-inovasi")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-primary text-white text-xs font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <Lightbulb size={14} /> Karya Inovasi
                  </button>
                  <button
                    onClick={() => handleNavigate("dokumentasi")}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-brand-primary text-white text-xs font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <Users size={14} /> Lihat Dokumentasi PPL
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-slate-400 text-[11px] tracking-wide">
              &copy; {new Date().getFullYear()} Irfan Hananto &bull; Portofolio
              Digital Seminar PPG Prajabatan.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-3.5 py-1 rounded-full border border-white/10">
                Bidang Studi Informatika
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
