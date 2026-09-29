import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  LayoutGrid,
  SlidersHorizontal,
  FileCheck,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";

import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";
import g7 from "@/assets/gallery/gallery-7.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g10 from "@/assets/gallery/gallery-10.jpg";
import g11 from "@/assets/gallery/gallery-11.jpg";
import g12 from "@/assets/gallery/gallery-12.jpg";

const galleryImages = [
  { id: 1, src: g1, alt: "4S Builders completed project showcase photo 1" },
  { id: 2, src: g2, alt: "4S Builders completed project showcase photo 2" },
  { id: 3, src: g3, alt: "4S Builders completed project showcase photo 3" },
  { id: 4, src: g4, alt: "4S Builders completed project showcase photo 4" },
  { id: 5, src: g5, alt: "4S Builders completed project showcase photo 5" },
  { id: 6, src: g6, alt: "4S Builders completed project showcase photo 6" },
  { id: 7, src: g7, alt: "4S Builders completed project showcase photo 7" },
  { id: 8, src: g8, alt: "4S Builders completed project showcase photo 8" },
  { id: 9, src: g9, alt: "4S Builders completed project showcase photo 9" },
  { id: 10, src: g10, alt: "4S Builders completed project showcase photo 10" },
  { id: 11, src: g11, alt: "4S Builders completed project showcase photo 11" },
  { id: 12, src: g12, alt: "4S Builders completed project showcase photo 12" },
];

type GallerySectionProps = {
  onRequestQuote: () => void;
  onLightboxChange?: (open: boolean) => void;
};

export function GallerySection({ onRequestQuote, onLightboxChange }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4000; // 4 seconds per slide
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const thumbnailScrollRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  // Keep thumbnail strip auto-scrolled to the active photo without moving the page window
  useEffect(() => {
    const container = thumbnailScrollRef.current;
    if (container) {
      const activeThumb = container.children[currentIndex] as HTMLElement | undefined;
      if (activeThumb) {
        const targetScroll =
          activeThumb.offsetLeft - (container.clientWidth - activeThumb.clientWidth) / 2;
        container.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  // Auto-slide ticker with smooth progress animation
  useEffect(() => {
    if (!isPlaying || isHovered || viewMode !== "slider" || lightboxIndex !== null) {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        nextSlide();
      } else {
        timerRef.current = requestAnimationFrame(tick);
      }
    };

    timerRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, isHovered, viewMode, lightboxIndex, nextSlide, progress]);

  // Lightbox open / close handler
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    onLightboxChange?.(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    onLightboxChange?.(false);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const activeImage = galleryImages[currentIndex];
  const lightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="border-b border-slate-200 bg-white py-14 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Section Header with Controls */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal direction="up">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Work Showcase
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Project Gallery
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              A visual showcase of our authentic building craftsmanship and structural
              transformations completed across the UK.
            </p>
          </Reveal>

          {/* Interactive Mode & Playback Controls */}
          <Reveal direction="up" delay={80}>
            <div className="flex flex-wrap items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("slider")}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    viewMode === "slider"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Switch to auto slider view"
                >
                  <SlidersHorizontal className="size-3.5" />
                  <span>Auto Slider</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Switch to grid view"
                >
                  <LayoutGrid className="size-3.5" />
                  <span>All Photos</span>
                </button>
              </div>

              {/* Slider Specific Controls (Play/Pause & Counter) */}
              {viewMode === "slider" && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:border-blue-500 hover:text-blue-600"
                    aria-label={isPlaying ? "Pause auto slide" : "Start auto slide"}
                  >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:border-blue-500 hover:text-blue-600"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:border-blue-500 hover:text-blue-600"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>

                  <span className="font-mono text-xs font-bold text-slate-400 pl-1">
                    <strong className="text-slate-900">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </strong>{" "}
                    / {String(galleryImages.length).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* 1. AUTO-SLIDER VIEW */}
        {viewMode === "slider" && (
          <div
            className="flex flex-col gap-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Interactive Stage */}
            <div className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[640px]">
              {/* Image with subtle zoom & smooth crossfade */}
              {galleryImages.map((img, idx) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/25" />
                </div>
              ))}

              {/* Floating Expand Action Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => openLightbox(currentIndex)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/95 px-6 py-3.5 text-xs font-bold text-slate-900 shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:bg-white focus:outline-none"
                >
                  <Maximize2 className="size-4 text-blue-600" />
                  <span>View Full Photo</span>
                </button>
              </div>

              {/* Navigation Arrows On Image */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-950/60 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 shadow-lg focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-950/60 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 shadow-lg focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>

              {/* Auto-Slide Progress Bar at bottom of stage */}
              <div className="absolute inset-x-0 bottom-0 z-20 h-1.5 bg-white/20">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-400 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Bottom Info Ribbon */}
              <div className="absolute bottom-4 left-6 z-20 hidden sm:flex items-center gap-3">
                <span className="rounded-full bg-slate-950/70 border border-white/20 px-3.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md">
                  Photo {String(currentIndex + 1).padStart(2, "0")} of{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Interactive Thumbnail Carousel Strip */}
            <div
              ref={thumbnailScrollRef}
              className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none"
            >
              {galleryImages.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`group relative h-20 w-28 sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "border-blue-600 ring-4 ring-blue-500/20 scale-[1.03] shadow-md"
                        : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400"
                    }`}
                    aria-label={`Jump to photo ${idx + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-1.5 right-1.5 rounded-md bg-slate-950/80 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white backdrop-blur-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. ALL PHOTOS GRID VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <Reveal key={img.id} direction="up" delay={idx * 30} className="h-full flex flex-col">
                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View photo ${idx + 1} full screen`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                      <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                        <Maximize2 className="size-3.5 text-blue-600" />
                        <span>View Photo</span>
                      </span>
                    </div>
                    <span className="absolute right-3 top-3 rounded-full bg-slate-950/75 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="dark max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-0 text-white shadow-2xl">
          {/* Authentic 4S Builders brand ribbon */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />

          {lightboxImage && (
            <div className="flex flex-col">
              {/* Lightbox Top Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4 pr-14">
                <DialogTitle className="font-display text-sm sm:text-base font-bold text-slate-200">
                  4S Builders Project Showcase • Photo{" "}
                  {String((lightboxIndex ?? 0) + 1).padStart(2, "0")} of{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </DialogTitle>
              </div>

              {/* Main Photo Display with Navigation Arrows */}
              <div className="relative max-h-[70vh] min-h-[300px] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-h-[70vh] w-full object-contain mx-auto select-none"
                />

                {/* Left Arrow */}
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length,
                    )
                  }
                  className="absolute left-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 shadow-xl"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-6" />
                </button>

                {/* Right Arrow */}
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length)
                  }
                  className="absolute right-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 shadow-xl"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Lightbox Footer Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-800/80 bg-slate-900 px-6 py-5">
                <div>
                  <p className="font-display text-base font-bold text-white">
                    Planning a similar transformation for your home?
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We provide free consultations, transparent pricing, and nationwide UK coverage.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+447783686427"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-100 hover:border-orange-400 hover:text-orange-300"
                  >
                    <Phone className="size-3.5 text-orange-400" />
                    <span>Call Direct</span>
                  </a>
                  <Button
                    onClick={() => {
                      closeLightbox();
                      onRequestQuote();
                    }}
                    className="rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/25"
                  >
                    <FileCheck className="size-4 mr-1.5 text-emerald-300" />
                    <span>Request Free Quotation</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
