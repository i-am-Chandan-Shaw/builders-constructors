import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Phone,
  CheckCircle,
  FileText,
  FileCheck,
} from "lucide-react";

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
import logo4s from "@/assets/4s-logo.png";
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const setOpen = (open: boolean) => {
    setQuoteModalOpen(open);
    onQuoteModalChange?.(open);
    if (!open) setQuoteSubmitted(false);
  };

  // Scroll listener for smooth glassmorphism hint on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide every 5 seconds with smooth ease-in-out transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-slate-900 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        {/* Authentic 4S Builders multi-color brand ribbon matching the logo flag */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />
        <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          {/* Official 4S Builders Brand Logo - seamlessly blended on light background */}
          <a href="#top" className="group flex items-center" aria-label="4S Builders LTD home">
            <img
              src={logo4s}
              alt="4S Builders LTD - You Dream it, We build it"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
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
                className="text-xs font-bold tracking-wider text-slate-700 transition-colors hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+447783686427"
              className={`hidden items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:border-orange-500/50 hover:text-orange-600 sm:inline-flex ${
                isScrolled
                  ? "bg-slate-50/90 border border-slate-200/90 shadow-sm"
                  : "bg-white/60 backdrop-blur-xs border border-slate-200/50 hover:bg-white/80 shadow-none"
              }`}
            >
              <Phone className="size-3.5 text-orange-500" />
              +44 7783 686 427
            </a>
            <Button
              onClick={() => setOpen(true)}
              aria-label="Contact for Quotation"
              className="h-10 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02]"
            >
              <FileText className="size-4 mr-1.5" />
              <span>Get Free Quote</span>
            </Button>
          </div>
        </div>
      </header>

      {/* AUTO-SLIDING HERO SECTION (Seamlessly underlays transparent navbar at top of page) */}
      <section
        className="relative h-screen min-h-[660px] md:min-h-[720px] w-full overflow-hidden bg-slate-100 text-slate-900 pt-[80px]"
        aria-labelledby="hero-heading"
      >
        {/* HORIZONTAL AUTO-SLIDING TRACK WITH EASE-IN-OUT */}
        <div className="absolute inset-0 overflow-hidden bg-slate-100">
          <div
            className="flex h-full w-[300%] transition-transform duration-1000 ease-in-out will-change-transform"
            style={{
              transform: `translate3d(-${(currentSlideIndex * 100) / heroSlides.length}%, 0, 0)`,
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

        {/* Crisp Light Gradient Overlay: soft white wash on left, completely fades to 100% transparent on right */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/98 via-white/85 via-42% to-transparent to-65%" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 py-12 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Main Headline with 4S Logo Easter Egg Multi-Color Gradient */}
            <h1
              id="hero-heading"
              className="animate-fade-up font-display text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              You Dream It, <br />
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                We Build It.
              </span>
            </h1>

            {/* Punchy, Solution-Focused Value Proposition */}
            <p className="animate-fade-up animation-delay-100 mt-5 max-w-xl text-base leading-relaxed text-slate-800 sm:text-lg md:text-xl font-medium">
              Transform your house into a year-round luxury home with energy-efficient <strong className="text-slate-950 font-bold">solid warm roofs</strong>, bespoke <strong className="text-slate-950 font-bold">extensions</strong>, and complete property renovations.
            </p>

            {/* Spacious Call to Action Group */}
            <div className="animate-fade-up animation-delay-200 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                onClick={() => setOpen(true)}
                className="group h-14 sm:h-15 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-8 sm:px-9 text-base font-extrabold tracking-wide text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] ring-4 ring-blue-500/20 flex items-center justify-center"
              >
                <FileCheck className="size-5 mr-2 text-emerald-300" />
                <span>Request Free Quotation</span>
                <ArrowRight className="ml-2.5 size-4.5 transition-transform duration-300 group-hover:translate-x-1 text-amber-300" />
              </Button>

              <a
                href="tel:+447783686427"
                className="h-14 sm:h-15 flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white/95 px-7 sm:px-8 text-sm sm:text-base font-bold text-slate-900 backdrop-blur-md transition-all hover:border-orange-500 hover:bg-white hover:text-orange-600 shadow-md"
              >
                <Phone className="size-4.5 text-orange-500" />
                <span>Call +44 7783 686 427</span>
              </a>
            </div>

            <p className="animate-fade-up animation-delay-300 mt-4 text-xs font-semibold text-slate-600">
              Free no-obligation quote • Transparent fixed pricing • Coventry & UK-Wide
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 transition hover:text-slate-950"
        >
          Scroll to Explore
          <ArrowDown className="size-3.5 animate-bounce text-orange-500" />
        </a>
      </section>


      <Dialog open={quoteModalOpen} onOpenChange={setOpen}>
        <DialogContent className="quote-dialog overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 text-slate-900 shadow-2xl sm:max-w-[540px]">
          {/* 4S multi-color ribbon on top of dialog */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />
          
          <DialogHeader className="relative space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              <Building2 className="size-3.5 text-amber-500" /> 4S Builders LTD
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Contact For Quotation
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-slate-600">
              Tell us about your project requirements. Our team will prepare a prompt, tailored quotation sent directly to your contact details.
            </DialogDescription>
          </DialogHeader>

          {quoteSubmitted ? (
            <div className="relative py-8 text-center">
              <div className="relative mx-auto mb-6 grid size-16 place-items-center">
                <span className="quote-success-ring absolute inset-0 rounded-full border border-emerald-400" />
                <span className="quote-success-circle grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
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
                <h3 className="font-display text-2xl font-bold text-slate-900">Quotation Request Received</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thank you! Our 4S Builders team will review your specifications and contact you shortly via phone and email (<strong className="text-blue-600 font-semibold">info@4sbuildersltd.co.uk</strong>).
                </p>
                <Button
                  onClick={() => setOpen(false)}
                  className="mt-6 h-11 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/20"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form
              autoComplete="off"
              data-lpignore="true"
              data-1p-ignore="true"
              data-form-type="other"
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteSubmitted(true);
              }}
              className="relative mt-2 space-y-4"
            >
              {/* Trap browser autofill heuristics */}
              <input type="text" name="b_usr_decoy" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="password" name="b_pwd_decoy" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Service Required</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-slate-50 px-4 text-left text-sm font-medium text-slate-900 shadow-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600">
                    <SelectValue placeholder="Choose a building service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 bg-white text-slate-900 shadow-xl">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Project Scale</label>
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
                          ? "border-blue-600 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-600/20"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Your Name *</label>
                  <input
                    required
                    type="text"
                    name="q_client_fn"
                    id="q_client_fn"
                    autoComplete="one-time-code"
                    autoCapitalize="words"
                    autoCorrect="off"
                    spellCheck="false"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    placeholder="Full name"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    name="q_client_telnum"
                    id="q_client_telnum"
                    autoComplete="one-time-code"
                    autoCorrect="off"
                    spellCheck="false"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    placeholder="+44 7783 686427"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Email Address *</label>
                <input
                  required
                  type="email"
                  name="q_client_mailaddr"
                  id="q_client_mailaddr"
                  autoComplete="one-time-code"
                  autoCorrect="off"
                  spellCheck="false"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  placeholder="your.email@example.co.uk"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Project Details (Optional)</label>
                <textarea
                  rows={2}
                  name="q_client_notetext"
                  id="q_client_notetext"
                  autoComplete="one-time-code"
                  autoCorrect="off"
                  spellCheck="false"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  placeholder="Briefly describe your property location, room size, or timeline..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25"
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

