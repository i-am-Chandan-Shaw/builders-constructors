import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileCheck,
  Phone,
  Images,
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const lightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="border-b border-slate-200 bg-white py-14 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              <Images className="size-3.5 text-blue-600" />
              Work Showcase
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Project Gallery
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              A visual showcase of our authentic building craftsmanship and structural
              transformations completed across the UK. Click any photo to view full resolution.
            </p>
          </Reveal>

          
        </div>

        {/* ALL PHOTOS GRID VIEW */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <Reveal key={img.id} direction="up" delay={idx * 30} className="h-full flex flex-col">
              <button
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-100 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-left"
                aria-label={`View photo ${idx + 1} full screen`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3.5 sm:p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-xs">
                      <Maximize2 className="size-3.5 text-blue-600" />
                      <span>View Full Photo</span>
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

        {/* Gallery Bottom Consultation Ribbon */}
        <Reveal direction="up" delay={120}>
          <div className="mt-12 sm:mt-14 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                Inspired by our completed projects?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Talk to 4S Builders LTD today for honest advice and a 100% free, itemised consultation.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+447783686427"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:border-orange-400 hover:text-orange-600 shadow-2xs"
              >
                <Phone className="size-3.5 text-orange-500" />
                <span>+44 7783 686427</span>
              </a>
              <Button
                onClick={onRequestQuote}
                className="flex-1 sm:flex-none rounded-xl bg-blue-700 hover:bg-blue-800 px-5 py-2.5 text-xs font-bold text-white shadow-md transition"
              >
                <FileCheck className="size-3.5 mr-1.5 text-emerald-300" />
                <span>Get Free Quote</span>
              </Button>
            </div>
          </div>
        </Reveal>
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
                  className="absolute left-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 shadow-xl cursor-pointer"
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
                  className="absolute right-4 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-2xl bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950 shadow-xl cursor-pointer"
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
