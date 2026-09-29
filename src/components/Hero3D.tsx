import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Building2, Phone, Sparkles, CheckCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroBg8k from "@/assets/uk-builder-hero.jpg";
import extensionBg8k from "@/assets/uk-builder-extension.jpg";
import kitchenBg8k from "@/assets/uk-builder-kitchen.jpg";

type Hero3DProps = {
  onQuoteModalChange?: (open: boolean) => void;
};

const heroSlides = [
  {
    id: 0,
    title: "Solid Conservatory Roof Conversions",
    tag: "Tiled Warm Roofs",
    location: "Coventry & Warwickshire",
    image: heroBg8k,
    alt: "Ultra 8K British luxury home with solid slate tiled conservatory roof conversion, Velux skylights and modern glass extension by 4S Builders LTD",
  },
  {
    id: 1,
    title: "Architectural House Extensions",
    tag: "Rear & Gable Extensions",
    location: "Solihull & West Midlands",
    image: extensionBg8k,
    alt: "Ultra 8K modern UK luxury home extension with expansive glass doors and architectural brickwork by 4S Builders LTD",
  },
  {
    id: 2,
    title: "Bespoke Kitchens & Open Living",
    tag: "Custom Kitchen Remodeling",
    location: "Nationwide UK",
    image: kitchenBg8k,
    alt: "Luxury British kitchen renovation with marble island and bespoke cabinets by 4S Builders LTD",
  },
];

export function Hero3D({ onQuoteModalChange }: Hero3DProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [projectScale, setProjectScale] = useState("medium");
  const [projectType, setProjectType] = useState("extensions");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const setOpen = (open: boolean) => {
    setQuoteModalOpen(open);
    onQuoteModalChange?.(open);
    if (!open) setQuoteSubmitted(false);
  };

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;

        const totalScrollable = el.scrollHeight - window.innerHeight;
        if (totalScrollable <= 0) return;

        // Reserve the final ~22% of scroll as a dwell/pause buffer on the last image
        // so the last image stays parked before the sticky section scrolls away
        const currentScroll = Math.max(0, window.scrollY);
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
        const slideProgress = Math.min(1, rawProgress / 0.78);
        setScrollProgress(slideProgress);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3.5" aria-label="4S Builders LTD home">
            <span className="grid size-11 place-items-center rounded-xl bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20 transition-transform group-hover:scale-105">
              <Building2 className="size-5" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-black tracking-tight text-white sm:text-2xl">
                  4S<span className="text-amber-400"> BUILDERS</span>
                </span>
                <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-300">
                  LTD
                </span>
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                You Dream It, We Build It
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {[
              ["HOME", "#top"],
              ["ABOUT US", "#about"],
              ["SERVICES", "#services"],
              ["GALLERY", "#gallery"],
              ["TESTIMONIALS", "#reviews"],
              ["CONTACT US", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs font-bold tracking-wider text-slate-300 transition-colors hover:text-amber-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+447783686427"
              className="hidden items-center gap-2 rounded-xl bg-slate-800/90 border border-slate-700 px-3.5 py-2 text-xs font-bold text-amber-300 transition hover:bg-slate-800 hover:text-amber-200 sm:inline-flex"
            >
              <Phone className="size-3.5 text-amber-400" />
              +44 7783 686 427
            </a>
            <Button
              onClick={() => setOpen(true)}
              aria-label="Contact for Quotation"
              className="h-10 rounded-xl bg-amber-500 hover:bg-amber-400 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="size-3.5 mr-1.5 fill-slate-950" />
              <span>Get Free Quote</span>
            </Button>
          </div>
        </div>
      </header>

      {/* SCROLL-DRIVEN HERO CAROUSEL CONTAINER (260vh creates smooth multi-card scroll + end pause buffer) */}
      <div ref={containerRef} className="relative h-[260vh] bg-slate-950">
        <section
          className="sticky top-0 h-screen w-full overflow-hidden bg-slate-950 text-white"
          aria-labelledby="hero-heading"
        >
          {/* HORIZONTAL SHIFTING IMAGE TRACK (Seamless single continuous strip with zero gap) */}
          <div className="absolute inset-0 overflow-hidden bg-slate-950">
            <div
              className="flex h-full will-change-transform"
              style={{
                width: `${heroSlides.length * 100}%`,
                transform: `translate3d(-${(scrollProgress * (heroSlides.length - 1) * 100) / heroSlides.length}%, 0, 0)`,
              }}
            >
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="relative h-full flex-1 shrink-0 overflow-hidden"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    className="h-full w-full object-cover object-center select-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Directional left-to-right gradient: provides rich contrast for text on the left, completely vanishes to transparent on the right */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 via-35% to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent" />

          {/* MAIN HERO CONTENT */}
          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 py-12 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="font-display text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              >
                You Dream It, <br />
                <span className="text-amber-400 [text-shadow:0_4px_32px_rgba(251,191,36,0.45)]">
                  We Build It.
                </span>
              </h1>

              {/* Engaging Value Proposition */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl font-normal">
                Specializing in <strong className="text-white font-semibold">solid conservatory roof conversions</strong>, luxury house extensions, bespoke kitchens, designer bathrooms, and complete property transformations across Coventry, Warwickshire, and nationwide.
              </p>

              {/* Trust Highlights */}
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800/90 px-3.5 py-2 backdrop-blur-md shadow-sm">
                  <CheckCircle className="size-4 text-amber-400 shrink-0" /> Free Quotations
                </span>
                <span className="flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800/90 px-3.5 py-2 backdrop-blur-md shadow-sm">
                  <CheckCircle className="size-4 text-amber-400 shrink-0" /> 100% Satisfaction
                </span>
                <span className="flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800/90 px-3.5 py-2 backdrop-blur-md shadow-sm">
                  <CheckCircle className="size-4 text-amber-400 shrink-0" /> Established 2019
                </span>
              </div>

              {/* Spacious Call to Action Group */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  onClick={() => setOpen(true)}
                  className="group h-14 sm:h-15 rounded-2xl bg-amber-500 hover:bg-amber-400 px-8 sm:px-9 text-base font-extrabold tracking-wide text-slate-950 shadow-2xl shadow-amber-500/30 transition-all hover:scale-[1.02] ring-4 ring-amber-500/20 flex items-center justify-center"
                >
                  <Sparkles className="size-4 mr-2 fill-slate-950" />
                  <span>Request Free Quotation</span>
                  <ArrowRight className="ml-2.5 size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <a
                  href="tel:+447783686427"
                  className="h-14 sm:h-15 flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 px-7 sm:px-8 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:border-amber-400 hover:bg-slate-900 shadow-xl"
                >
                  <Phone className="size-4.5 text-amber-400" />
                  <span>Call +44 7783 686 427</span>
                </a>
              </div>

              <p className="mt-4 text-xs font-medium text-slate-400">
                No obligation • Upfront honest pricing • Scroll to explore featured builds ↓
              </p>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <a
            href="#about"
            className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 transition hover:text-white"
          >
            Scroll to About Section
            <ArrowDown className="size-3.5 animate-bounce text-amber-400" />
          </a>
        </section>
      </div>


      <Dialog open={quoteModalOpen} onOpenChange={setOpen}>
        <DialogContent className="quote-dialog overflow-hidden rounded-3xl border-slate-800 bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:max-w-[540px]">
          <div className="quote-glow pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.25),transparent_70%)]" />
          <DialogHeader className="relative space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-400">
              <Building2 className="size-3.5" /> 4S Builders LTD
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Contact For Quotation
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-slate-300">
              Tell us about your project requirements. Our team will prepare a prompt, tailored quotation sent directly to your contact details.
            </DialogDescription>
          </DialogHeader>

          {quoteSubmitted ? (
            <div className="relative py-8 text-center">
              <div className="relative mx-auto mb-6 grid size-16 place-items-center">
                <span className="quote-success-ring absolute inset-0 rounded-full border border-amber-400" />
                <span className="quote-success-circle grid size-16 place-items-center rounded-full bg-amber-400/20 text-amber-400">
                  <svg viewBox="0 0 24 24" className="size-8" fill="none" aria-hidden="true">
                    <path
                      className="quote-success-check"
                      d="M5 12.5l4.5 4.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="quote-success-copy">
                <h3 className="font-display text-2xl font-bold text-white">Quotation Request Received</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Thank you! Our 4S Builders team will review your specifications and contact you shortly via phone and email (<strong className="text-amber-400 font-semibold">info@4sbuildersltd.co.uk</strong>).
                </p>
                <Button
                  onClick={() => setOpen(false)}
                  className="mt-6 h-11 w-full rounded-xl bg-amber-500 text-sm font-bold text-slate-950 hover:bg-amber-400"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteSubmitted(true);
              }}
              className="relative mt-2 space-y-4"
            >
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Service Required</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="h-11 rounded-xl border-slate-700 bg-slate-800 px-4 text-left text-sm font-medium text-white shadow-none focus:ring-amber-400">
                    <SelectValue placeholder="Choose a building service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-700 bg-slate-800 text-white">
                    <SelectItem value="extensions">Home Extensions & Structural Build</SelectItem>
                    <SelectItem value="roofing">Roofing & Solid Conservatory Roofs</SelectItem>
                    <SelectItem value="kitchens">Kitchen Design & Remodeling</SelectItem>
                    <SelectItem value="bathrooms">Bathrooms & Wet Rooms</SelectItem>
                    <SelectItem value="driveways">Pavements, Patios & Driveways</SelectItem>
                    <SelectItem value="loft">Loft Conversions & Dormers</SelectItem>
                    <SelectItem value="metalworks">Metal Works & Structural Steel</SelectItem>
                    <SelectItem value="electrical_plumbing">Electrical, Plumbing & Heating</SelectItem>
                    <SelectItem value="plastering">Plastering, Drylining & Rendering</SelectItem>
                    <SelectItem value="full_renovation">Full House Renovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Project Scale</label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      ["small", "Single Room / Repair"],
                      ["medium", "Standard Extension"],
                      ["large", "Full Property Build"],
                    ] as const
                  ).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setProjectScale(val)}
                      className={`rounded-xl border px-2.5 py-2 text-center text-xs font-medium transition ${
                        projectScale === val
                          ? "border-amber-400 bg-amber-500 text-slate-950 font-bold"
                          : "border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="h-11 w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+44 7783 686427"
                    className="h-11 w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="your.email@example.co.uk"
                  className="h-11 w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Project Details (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your property location, room size, or timeline..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-amber-500 hover:bg-amber-400 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/20"
              >
                Submit Quotation Request
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

