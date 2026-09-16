import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Phone, Quote, Sprout, Trees, CheckCircle2, Star, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/Hero3D";
import { Reveal, useInView } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import gardenDesign from "@/assets/garden-design.jpg";
import gardenLowMaintenance from "@/assets/garden-low-maintenance.jpg";
import gardenMakeover from "@/assets/garden-makeover.jpg";
import gardenNewHome from "@/assets/garden-new-home.jpg";
import parallaxImage from "@/assets/hyland-parallax-hd.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hyland Landscapes | Hard and Soft Landscaping Specialists" },
      { name: "description", content: "For hard and soft landscapes come to Hyland Landscapes. We are specialists in all forms of garden and landscape work." },
      { property: "og:title", content: "Home - Hyland Landscapes" },
      { property: "og:description", content: "For hard and soft landscapes come to Hyland Landscapes. We are specialists in all forms of garden and landscape work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hyland-landscapes.co.uk/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = [
  ["Home", "#top"],
  ["About us", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#projects"],
  ["Testimonials", "#reviews"],
  ["Contact us", "#contact"],
];

const services = [
  {
    title: "Create a garden for your new home",
    text: "Create a garden with vibrant flowers, diverse shrubs, trees, patio / seating areas, and a soothing water feature for your new home. Enjoy beauty and functionality.",
    image: gardenNewHome,
    alt: "Newly designed garden with patio, flowers and water feature",
    features: ["Patios & Seating Areas", "Diverse Shrubs & Trees", "Water Features"],
  },
  {
    title: "Give your existing garden a complete ‘makeover’",
    text: "Give your existing garden a complete makeover with vibrant flowers, lush shrubs, decorative trees, patio / seating areas, and a calming water feature. Transform your space into a stunning retreat.",
    image: gardenMakeover,
    alt: "Landscaped country garden with water feature and terrace",
    features: ["Full Garden Transformation", "Terraces & Hardscaping", "Decorative Planting"],
  },
  {
    title: "Create a low-maintenance outdoor space",
    text: "Create a low-maintenance outdoor space with hardy plants, durable materials, automated irrigation, and minimalist design for easy upkeep and year-round enjoyment.",
    image: gardenLowMaintenance,
    alt: "Modern low-maintenance garden with structured planting",
    features: ["Hardy Plants & Materials", "Automated Irrigation", "Minimalist Easy Upkeep"],
  },
];

const testimonials = [
  {
    name: "Tim Brown",
    role: "Customer Review",
    quote: "Impressive service. Prompt response to our initial query led to a highly satisfactory quotation which we accepted. Landscaping work was undertaken on the date agreed and completed as scheduled. The quality of work was excellent.",
  },
  {
    name: "Jennifer Mills",
    role: "Customer Review",
    quote: "Listened to what I wanted and worked with me to create my perfect garden, really excellent workmanship couldn’t find any faults, highly recommend and the work was worth every penny.",
  },
  {
    name: "Ronald Gibbs",
    role: "Customer Review",
    quote: "Simon has completed 3 phases of work. An excellent substantial patio, followed by a picket fence and front garden landscaping. All to a high standard. Another phase soon. Enough said?",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Hyland Landscapes home">
      <span className="grid size-9 place-items-center rounded-xl bg-[#1e5a26] text-white shadow-md shadow-[#1e5a26]/20">
        <Leaf className="size-4" />
      </span>
      <div className="flex flex-col">
        <span className={`font-display text-lg font-bold tracking-tight ${footer ? "text-white" : "text-[#0e3820]"}`}>
          HYLAND<span className="text-[#2b8837]">LANDSCAPES</span>
        </span>
        <span className={`text-[8.5px] font-bold uppercase tracking-[0.2em] ${footer ? "text-emerald-400" : "text-emerald-700"}`}>
          Hard & Soft Landscapes
        </span>
      </div>
    </a>
  );
}

function HylandBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: introRef, inView } = useInView<HTMLParagraphElement>({ threshold: 0.35 });
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setParallax((progress - 0.5) * 80);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70svh] min-h-[520px] overflow-hidden"
      aria-label="The Hyland Landscapes experience"
    >
      <div
        className="absolute inset-0 h-[120%] w-full will-change-transform"
        style={{ transform: `translate3d(0, ${parallax * 0.45}px, 0)` }}
      >
        <img
          src={parallaxImage}
          loading="lazy"
          alt="Immersive lush green estate landscape with sweeping lawn and flower gardens"
          className="parallax-zoom-loop h-full w-full object-cover object-center"
        />
      </div>
      <div className="parallax-shade absolute inset-0" />
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <div
          className="will-change-transform"
          style={{ transform: `translate3d(0, ${-parallax * 0.85}px, 0)` }}
        >
          <p
            ref={introRef}
            className={`select-none font-display text-[15vw] font-black tracking-[0.08em] leading-none text-white/70 [text-shadow:0_6px_32px_rgba(8,28,16,0.45)] md:text-[13vw] ${inView ? "hyland-intro" : ""}`}
            aria-label="HYLAND"
          >
            {"HYLAND".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="hyland-letter"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071c10]/70 to-transparent px-5 pb-8 pt-20 md:px-12 md:pb-10">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <p className="font-serif-display text-2xl leading-snug text-white md:text-[1.75rem]">
              Landscapes made personal.
            </p>
            <p className="text-sm text-white/75">
              Hard & soft landscaping across Coventry and Warwickshire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <main id="top" className="overflow-x-clip bg-white text-stone-900 selection:bg-emerald-100 selection:text-[#0e3820]">
      <Hero3D onQuoteModalChange={setQuoteModalOpen} />

      <section id="about" className="border-b border-stone-200/80 bg-stone-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <Reveal>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e5a26]">
                A Garden Made For Living
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0a2e18] sm:text-4xl md:text-5xl">
                Your garden is important to you.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                You may be considering giving your garden a lift, adapting it to your changing lifestyle, and increasing the use and enjoyment of your outside space.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [Sprout, "Giving your garden ‘a lift’", "By changing the layout and enhancing seasonal borders."],
              [Trees, "Suit your changing lifestyle", "Altering the garden design to accommodate new ways of living."],
              [Leaf, "Enjoy more time outside", "Increasing the use and year-round enjoyment of your outside space."],
            ].map(([Icon, title, desc], index) => {
              const GoalIcon = Icon as typeof Leaf;
              return (
                <Reveal key={title as string} delay={index * 100}>
                  <div className="group rounded-2xl border border-stone-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">
                    <div className="mb-8 flex items-start justify-between">
                      <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-[#1e5a26] transition-colors group-hover:bg-[#1e5a26] group-hover:text-white">
                        <GoalIcon className="size-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-stone-400">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0e3820]">{title as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">{desc as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e5a26]">
                Together With Hyland Landscapes
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0a2e18] sm:text-4xl md:text-5xl">
                Together with Hyland Landscapes, You can
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-sm leading-relaxed text-stone-600 md:text-base">
                From new home gardens to complete makeovers, every space is considered around how you want to live.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      width={1200}
                      height={900}
                      loading="lazy"
                      alt={service.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold text-[#0e3820] shadow-sm backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <h3 className="font-display text-2xl font-bold leading-snug text-[#0a2e18]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        {service.text}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-stone-100 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-[#1e5a26]"
                          >
                            <CheckCircle2 className="size-3 text-[#2b8837]" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HylandBanner />

      <section id="projects" className="border-b border-stone-200/80 bg-stone-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e5a26]">
                Bespoke Portfolio
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0a2e18] sm:text-4xl md:text-5xl">
                A landscape shaped around you.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-600">
                Hyland Landscapes provides a fully bespoke and comprehensive garden design service, specializing in professionally designed gardens tailor-made for you and your family.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild className="h-12 rounded-xl bg-[#1e5a26] px-6 text-sm font-bold text-white shadow-lg shadow-[#1e5a26]/20 hover:bg-[#15461c]">
                  <a href="tel:07866256464" className="flex items-center gap-2">
                    <Phone className="size-4" />
                    07866 256 464
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <a
                  href="mailto:connect@hyland-landscapes.co.uk"
                  className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs font-bold text-stone-700 transition hover:border-[#1e5a26] hover:text-[#1e5a26]"
                >
                  <Mail className="size-4 text-[#1e5a26]" />
                  connect@hyland-landscapes.co.uk
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-2xl">
                <img
                  src={gardenDesign}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  alt="Bespoke landscaped garden with lawn, studio and curved stone path"
                  className="aspect-[7/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: gardenNewHome, title: "Garden for a New Home", tag: "New Build" },
              { img: gardenMakeover, title: "Garden Transformation with Patio & Fountain", tag: "Complete Makeover" },
              { img: gardenLowMaintenance, title: "Low-Maintenance Outdoor Space", tag: "Low Maintenance" },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <figure className="group relative overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      width={1200}
                      height={900}
                      loading="lazy"
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1e5a26]">
                      {item.tag}
                    </span>
                    <p className="mt-1 font-display text-lg font-bold text-[#0e3820]">
                      {item.title}
                    </p>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal className="mb-14 text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e5a26]">
              Customer Reviews
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0a2e18] sm:text-4xl md:text-5xl">
              What our customers say
            </h2>
          </Reveal>
        </div>

        <div className="reviews-marquee relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />
          <div className="reviews-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className={`flex gap-6 pr-6 ${copy === 1 ? "reviews-marquee-clone" : ""}`}
              >
                {testimonials.map((t) => (
                  <figure
                    key={`${t.name}-${copy}`}
                    className="flex w-[min(88vw,420px)] shrink-0 flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm"
                  >
                    <div>
                      <Quote className="size-6 text-emerald-200" aria-hidden="true" />
                      <div className="mt-4 flex items-center gap-1 text-[#2b8837]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-[#2b8837]" />
                        ))}
                      </div>
                      <blockquote className="mt-5 text-base leading-relaxed text-stone-700">
                        “{t.quote}”
                      </blockquote>
                    </div>
                    <figcaption className="mt-8 border-t border-stone-100 pt-5">
                      <p className="font-display font-bold text-[#0e3820]">{t.name}</p>
                      <p className="text-xs font-semibold text-stone-500">{t.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0e3820] py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Reveal>
            <span className="inline-block rounded-full border border-emerald-500/30 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
              Free Estimates & Quotation
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Hyland Landscapes can provide FREE estimates and quotations.
            </h2>
            <p className="mt-3 text-sm text-emerald-100/90 md:text-base">
              Give us a call to arrange an appointment.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-14 shrink-0 rounded-2xl bg-[#2b8837] px-8 text-base font-bold text-white shadow-xl hover:bg-[#236e2d]"
              >
                <a href="tel:07866256464" className="flex items-center gap-2.5">
                  <Phone className="size-5" />
                  Call Now: 07866 256 464
                </a>
              </Button>
              <a
                href="mailto:connect@hyland-landscapes.co.uk"
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Mail className="size-4" />
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-stone-800 bg-[#071c10] py-16 text-stone-300">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-12 border-b border-stone-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <Brand footer />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
                Specialists in all forms of garden and landscape work across Coventry, Warwickshire and the West Midlands.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Explore</h3>
              <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </Reveal>

            <Reveal delay={160}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Contact</h3>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:07866256464"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <Phone className="size-4 text-emerald-400" />
                  07866 256 464
                </a>
                <a
                  href="mailto:connect@hyland-landscapes.co.uk"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <Mail className="size-4 text-emerald-400" />
                  Email us
                </a>
                <a
                  href="https://wa.me/447866256464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#25D366]/20"
                >
                  <span className="grid size-4 place-items-center text-[#25D366]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="size-4 fill-current">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.15h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
                    </svg>
                  </span>
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Service area</h3>
              <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-stone-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                Coventry, Warwickshire & West Midlands
              </p>
              <p className="mt-4 text-sm text-stone-500">
                Free estimates and quotations. Give us a call to arrange an appointment.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Hyland Landscapes. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="transition hover:text-emerald-400">Privacy Policy</a>
              <a href="#" className="transition hover:text-emerald-400">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
      <WhatsAppFloat hidden={quoteModalOpen} />
    </>
  );
}
