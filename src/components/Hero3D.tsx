import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Leaf, Phone } from "lucide-react";

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
import heroWideImg from "@/assets/hero-landscape-wide.jpg";
import heroPortraitImg from "@/assets/hero-landscape-portrait.jpg";

type Hero3DProps = {
  onQuoteModalChange?: (open: boolean) => void;
};

export function Hero3D({ onQuoteModalChange }: Hero3DProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [lawnSize, setLawnSize] = useState("medium");
  const [projectType, setProjectType] = useState("landscaping");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [parallax, setParallax] = useState(0);

  const setOpen = (open: boolean) => {
    setQuoteModalOpen(open);
    onQuoteModalChange?.(open);
    if (!open) setQuoteSubmitted(false);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setParallax(Math.min(window.scrollY * 0.28, 140));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Hyland Landscapes home">
            <span className="grid size-10 place-items-center rounded-xl bg-[#1e5a26] text-white shadow-md shadow-[#1e5a26]/20 transition-transform group-hover:scale-105">
              <Leaf className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-[#0a2e18] sm:text-xl">
                HYLAND<span className="text-[#2b8837]">LANDSCAPES</span>
              </span>
              <span className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-800/80 sm:block">
                Hard & Soft Landscaping Specialists
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {[
              ["HOME", "#top"],
              ["ABOUT US", "#about"],
              ["SERVICES", "#services"],
              ["PORTFOLIO", "#projects"],
              ["TESTIMONIALS", "#reviews"],
              ["CONTACT US", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs font-bold tracking-wider text-[#1e3b2b] transition-colors hover:text-[#2b8837]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:07866256464"
              className="hidden items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-2 text-xs font-bold text-[#1e5a26] transition hover:bg-emerald-100 sm:inline-flex"
            >
              <Phone className="size-3.5" />
              07866 256 464
            </a>
            <Button
              onClick={() => setOpen(true)}
              aria-label="Free Quotation"
              className="h-10 rounded-xl bg-[#1e5a26] px-3 text-[11px] font-bold text-white shadow-lg shadow-[#1e5a26]/20 hover:bg-[#16451c] sm:px-5 sm:text-xs"
            >
              <span className="sm:hidden" aria-hidden="true">Quote</span>
              <span className="hidden sm:inline">Free Quotation</span>
            </Button>
          </div>
        </div>
      </header>

      <section
        className="relative isolate min-h-[calc(100svh-74px)] overflow-hidden bg-[#0a2e18] text-white"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-x-0 -top-[12%] h-[124%] w-full will-change-transform"
          style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={heroWideImg} />
            <img
              src={heroPortraitImg}
              alt="Sweeping landscaped garden with lawn, planting and a country house"
              className="h-full w-full object-cover object-center"
            />
          </picture>
        </div>

        <div className="hero-shade pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-74px)] max-w-[1440px] flex-col justify-end px-5 pb-20 pt-16 md:px-8 md:pb-24 lg:px-12">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-200/90">
              Hard & soft landscaping specialists
            </p>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Great gardens start here.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/85 md:text-base">
              Hyland Landscapes provides a fully bespoke garden design service — professionally designed gardens, tailor-made for you and your family.
            </p>
            <p className="mt-6 text-sm font-medium tracking-wide text-emerald-100/95">
              Free estimation in 30 seconds
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3.5">
              <Button
                onClick={() => setOpen(true)}
                className="group h-12 rounded-xl bg-white px-6 text-sm font-bold tracking-wide text-[#0a2e18] shadow-lg hover:bg-emerald-50"
              >
                <span>Free estimates & quotes</span>
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <a
                href="tel:07866256464"
                className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/20"
              >
                <Phone className="size-3.5" />
                07866 256 464
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
        >
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" />
        </a>
      </section>

      <Dialog open={quoteModalOpen} onOpenChange={setOpen}>
        <DialogContent className="quote-dialog overflow-hidden rounded-3xl border-stone-200/70 bg-white p-8 shadow-[0_24px_80px_rgba(10,46,24,0.18)] sm:max-w-[500px]">
          <div className="quote-glow pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[radial-gradient(ellipse_at_top,rgba(43,136,55,0.22),transparent_70%)]" />
          <DialogHeader className="relative space-y-3 text-left">
            <p className="text-[11px] font-medium tracking-[0.18em] text-[#1e5a26]/80">
              Free estimate
            </p>
            <DialogTitle className="font-serif-display text-3xl font-normal tracking-tight text-[#0e3820]">
              Arrange your appointment
            </DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-stone-500">
              A free estimate in 30 seconds. We’ll follow up at{" "}
              <a href="mailto:connect@hyland-landscapes.co.uk" className="text-[#1e5a26] underline-offset-2 hover:underline">
                connect@hyland-landscapes.co.uk
              </a>
              .
            </DialogDescription>
          </DialogHeader>

          {quoteSubmitted ? (
            <div className="relative py-8 text-center">
              <div className="relative mx-auto mb-6 grid size-16 place-items-center">
                <span className="quote-success-ring absolute inset-0 rounded-full border border-emerald-300" />
                <span className="quote-success-circle grid size-16 place-items-center rounded-full bg-emerald-50 text-[#1e5a26]">
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
                <h3 className="font-serif-display text-2xl text-[#0e3820]">Request received</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  Thank you. We’ll be in touch shortly to arrange a visit.
                </p>
                <Button
                  onClick={() => setOpen(false)}
                  className="mt-6 h-11 w-full rounded-xl bg-[#1e5a26] text-sm font-semibold text-white hover:bg-[#15461c]"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteSubmitted(true);
              }}
              className="relative mt-2 space-y-5"
            >
              <div className="space-y-2">
                <label className="block text-sm text-stone-600">Project type</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="h-12 rounded-xl border-stone-200 bg-stone-50 px-4 text-left text-sm font-medium text-stone-800 shadow-none focus:ring-[#1e5a26]">
                    <SelectValue placeholder="Choose a project" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-stone-200">
                    <SelectItem value="landscaping">Bespoke garden design</SelectItem>
                    <SelectItem value="makeover">Complete garden makeover</SelectItem>
                    <SelectItem value="newhome">Garden for a new home</SelectItem>
                    <SelectItem value="lowmaintenance">Low-maintenance outdoor space</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-stone-600">Garden scale</label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      ["small", "Small"],
                      ["medium", "Medium"],
                      ["large", "Large"],
                    ] as const
                  ).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setLawnSize(val)}
                      className={`rounded-xl border px-3 py-2.5 text-center text-sm transition ${
                        lawnSize === val
                          ? "border-[#1e5a26] bg-[#1e5a26] text-white"
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="block text-sm text-stone-600">Your name</label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm text-stone-800 placeholder:text-stone-400 focus:border-[#1e5a26] focus:outline-none focus:ring-1 focus:ring-[#1e5a26]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-stone-600">Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="07866 256 464"
                    className="h-12 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 text-sm text-stone-800 placeholder:text-stone-400 focus:border-[#1e5a26] focus:outline-none focus:ring-1 focus:ring-[#1e5a26]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#1e5a26] text-sm font-semibold text-white shadow-none hover:bg-[#15461c]"
              >
                Request free estimate
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
