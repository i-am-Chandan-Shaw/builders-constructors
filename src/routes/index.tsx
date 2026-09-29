import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Phone,
  Quote,
  CheckCircle2,
  Star,
  Mail,
  MapPin,
  Hammer,
  ShieldCheck,
  Sparkles,
  Layers,
  Zap,
  Wrench,
  Clock,
  Send,
  Home,
  Compass,
  Check,
  Paintbrush,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/Hero3D";
import { Reveal, useInView } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

import ukBuilderHero from "@/assets/uk-builder-hero.jpg";
import ukBuilderCraftsmen from "@/assets/uk-builder-craftsmen.jpg";
import ukBuilderExtension from "@/assets/uk-builder-extension.jpg";
import ukBuilderRoofing from "@/assets/uk-builder-roofing.jpg";
import ukBuilderKitchen from "@/assets/uk-builder-kitchen.jpg";
import ukBuilderBathroom from "@/assets/uk-builder-bathroom.jpg";
import ukBuilderDriveway from "@/assets/uk-builder-driveway.jpg";
import ukBuilderLoft from "@/assets/uk-builder-loft.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4S Builders LTD | You Dream it, We build it | UK Building Specialists" },
      {
        name: "description",
        content:
          "4S Builders LTD - You Dream it, We build it. Leading UK builders specializing in house extensions, conservatory warm roofs, bespoke kitchens, luxury bathrooms, driveways, lofts & metal works in Coventry and across the UK.",
      },
      { property: "og:title", content: "4S Builders LTD | UK Building & Renovation Specialists" },
      {
        property: "og:description",
        content:
          "Professional building and construction services across Coventry, the West Midlands, and nationwide UK. Free quotations, 100% satisfaction guaranteed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://4sbuildersltd.co.uk/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = [
  ["Home", "#top"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#reviews"],
  ["Contact Us", "#contact"],
];

const mainServices = [
  {
    title: "Home Extensions & Conversions",
    category: "Extensions",
    text: "Expand your living footprint with breathtaking single or multi-storey house extensions. Featuring aluminium bifold doors, seamless brick matching, open-plan structural beams, and complete building regulations sign-off.",
    image: ukBuilderExtension,
    alt: "Modern UK luxury house extension with bifold glass doors and paved terrace by 4S Builders LTD",
    features: ["Single & Multi-Storey Extensions", "Structural RSJ Steel Installation", "Bifold Doors & Architectural Glazing"],
  },
  {
    title: "Roofing & Conservatory Roof Conversions",
    category: "Roofing",
    text: "Transform your conservatory into a cozy, year-round room with our advanced insulated solid tiled warm roof replacements, slate pitched roofs, Velux skylights, and comprehensive ventilation tests.",
    image: ukBuilderRoofing,
    alt: "Solid tiled conservatory roof replacement with Velux skylights on a UK home by 4S Builders LTD",
    features: ["Solid Tiled Warm Roofs", "Velux Skylight Windows", "All-Weather Thermal Insulation"],
  },
  {
    title: "Bespoke Kitchens & Living Spaces",
    category: "Kitchens",
    text: "Create the culinary centerpiece of your home. From bespoke navy shaker cabinetry and quartz waterfall islands to open-plan layout remodeling and integrated smart appliances.",
    image: ukBuilderKitchen,
    alt: "Luxury British kitchen renovation with marble island and bespoke cabinets by 4S Builders LTD",
    features: ["Custom Kitchen Design & Fitting", "Marble & Quartz Worktops", "Open-Plan Structural Remodeling"],
  },
  {
    title: "Luxury Bathrooms & Wet Rooms",
    category: "Bathrooms",
    text: "Indulge in spa-like luxury with frameless glass walk-in rainfall showers, Italian porcelain tiling, bespoke floating vanities, illuminated ambient mirrors, and concealed plumbing.",
    image: ukBuilderBathroom,
    alt: "Luxury bathroom renovation with walk-in shower and freestanding bathtub by 4S Builders LTD",
    features: ["Frameless Wet Rooms & Walk-ins", "Large-Format Porcelain Tiling", "Freestanding Baths & Designer Brassware"],
  },
  {
    title: "Pavements, Patios & Driveways",
    category: "Groundworks",
    text: "Boost your home's kerb appeal with resin-bound driveways, precision block paving, natural Indian sandstone patios, granite sett edging, and durable drainage solutions.",
    image: ukBuilderDriveway,
    alt: "Luxury UK residence entrance with resin-bound driveway and granite borders by 4S Builders LTD",
    features: ["Resin Bound & Block Paving", "Porcelain & Sandstone Patios", "Complete Drainage & Sub-bases"],
  },
  {
    title: "Loft Conversions & Master Suites",
    category: "Lofts",
    text: "Unlock hidden space under your roof. We deliver dormer, mansard, and Velux loft conversions complete with master bedroom suites, en-suite bathrooms, and bespoke fitted wardrobes.",
    image: ukBuilderLoft,
    alt: "Luxury British loft conversion with master bedroom and Velux windows by 4S Builders LTD",
    features: ["Dormer & Velux Conversions", "En-Suite Bathroom Integration", "Bespoke Fitted Storage & Staircases"],
  },
];

const allCapabilities = [
  { icon: Home, title: "Extensions", desc: "Single & double storey home extensions" },
  { icon: ShieldCheck, title: "Roofing", desc: "Solid conservatory roofs, slate & tile" },
  { icon: Sparkles, title: "Kitchens", desc: "Bespoke design, supply & master installation" },
  { icon: Layers, title: "Bathrooms", desc: "Luxury wet rooms, en-suites & plumbing" },
  { icon: Compass, title: "Driveways", desc: "Resin-bound, block paving & paved patios" },
  { icon: Hammer, title: "Construction", desc: "New builds, structural knocking-through & foundations" },
  { icon: Wrench, title: "Metal Works", desc: "Architectural steel, RSJ beams & fabrications" },
  { icon: Zap, title: "Electrical", desc: "Full rewiring, lighting design & certified testing" },
  { icon: Paintbrush, title: "Plastering", desc: "Smooth skimming, drylining & exterior rendering" },
  { icon: Home, title: "Bedrooms", desc: "Custom fitted bedrooms & master suites" },
  { icon: Wrench, title: "Plumbing", desc: "Boiler installations, central heating & drainage" },
  { icon: CheckCircle2, title: "And Much More", desc: "All commercial & residential building needs" },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Verified UK Homeowner",
    project: "Roofing & Ventilation Work",
    quote:
      "Really great service and price. I stayed while the roof work and ventilation tests were carried out and Yunus explained everything that was happening and made the whole experience really interesting. Just lovely people to deal with and I wish other companies were more like this 🙂",
  },
  {
    name: "Henry Dav",
    role: "Verified UK Homeowner",
    project: "Conservatory Warm Roof Replacement",
    quote:
      "I really love our new conservatory roof. It looks great and we have noticed a difference in the temperature of the whole house right away. The fitters were great and even though it was snowing on the day, they worked non stop and were polite, professional and cleaned the whole area. Can definitely recommend this company. Well worth the money to gain an extra room.",
  },
  {
    name: "Robert Frank",
    role: "Verified UK Homeowner",
    project: "Solid Roof Conversion & Insulation",
    quote:
      "I was immediately impressed by the friendly response of this company and the fact there was no pressure to buy. The work was carried out by 2 polite hardworking fitters who completed the roof and cleaning up after themselves within a morning. The finished job looks great and I now have a room I can use in winter and hardly any noise from stormy rain.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="4S Builders LTD home">
      <span className="grid size-10 place-items-center rounded-xl bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20">
        <Building2 className="size-5" />
      </span>
      <div className="flex flex-col">
        <span className={`font-display text-lg font-black tracking-tight ${footer ? "text-white" : "text-slate-900"}`}>
          4S<span className="text-amber-500"> BUILDERS</span>
          <span className="ml-1 text-xs font-bold text-amber-500/90">LTD</span>
        </span>
        <span className={`text-[8.5px] font-bold uppercase tracking-[0.2em] ${footer ? "text-amber-400" : "text-slate-500"}`}>
          You Dream It, We Build It
        </span>
      </div>
    </a>
  );
}

function BuilderBanner() {
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
      className="relative h-[70svh] min-h-[520px] overflow-hidden bg-slate-950"
      aria-label="4S Builders craftsmanship showcase"
    >
      <div
        className="absolute inset-0 h-[120%] w-full will-change-transform"
        style={{ transform: `translate3d(0, ${parallax * 0.45}px, 0)` }}
      >
        <img
          src={ukBuilderCraftsmen}
          loading="lazy"
          alt="Master UK builders and craftsmen working on modern house extension project"
          className="parallax-zoom-loop h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <div
          className="will-change-transform"
          style={{ transform: `translate3d(0, ${-parallax * 0.85}px, 0)` }}
        >
          <p
            ref={introRef}
            className={`select-none font-display text-[13vw] font-black tracking-[0.08em] leading-none text-white/50 [text-shadow:0_6px_32px_rgba(0,0,0,0.7)] md:text-[11vw] ${
              inView ? "hyland-intro" : ""
            }`}
            aria-label="4S BUILDERS"
          >
            {"4S BUILDERS".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="hyland-letter"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-5 pb-8 pt-20 md:px-12 md:pb-10">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <p className="font-display text-2xl font-bold leading-snug text-white md:text-[1.75rem]">
              You Dream It, <span className="text-amber-400">We Build It.</span>
            </p>
            <p className="text-sm font-medium text-slate-300">
              Master building services across Coventry, West Midlands & Nationwide UK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const galleryItems = [
    {
      title: "Gable House Extension & Terrace",
      location: "Coventry, West Midlands",
      category: "Extensions",
      image: ukBuilderExtension,
      badge: "Completed",
    },
    {
      title: "Solid Tiled Conservatory Warm Roof Replacement",
      location: "Warwickshire, UK",
      category: "Roofing",
      image: ukBuilderRoofing,
      badge: "Completed",
    },
    {
      title: "Bespoke Marble Island Luxury Kitchen",
      location: "Solihull, West Midlands",
      category: "Kitchens",
      image: ukBuilderKitchen,
      badge: "Completed",
    },
    {
      title: "Porcelain Walk-in Spa Bathroom & Wet Room",
      location: "Kenilworth, UK",
      category: "Bathrooms",
      image: ukBuilderBathroom,
      badge: "Completed",
    },
    {
      title: "Resin-Bound Estate Driveway & Granite Setts",
      location: "Leamington Spa, UK",
      category: "Driveways",
      image: ukBuilderDriveway,
      badge: "Completed",
    },
    {
      title: "Country View Loft Conversion Master Suite",
      location: "Birmingham, UK",
      category: "Lofts",
      image: ukBuilderLoft,
      badge: "Completed",
    },
  ];

  const filteredGallery =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <main id="top" className="overflow-x-clip bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-slate-900">
        <Hero3D onQuoteModalChange={setQuoteModalOpen} />

        {/* ABOUT US SECTION */}
        <section id="about" className="border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  <ShieldCheck className="size-4 text-amber-500" />
                  About 4S Builders LTD
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Who We Are & Why Choose 4S Builders.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                  <strong className="font-semibold text-slate-900">4S Builders LTD</strong> is your number one source for all building and construction requirements. Founded in 2019, our passion for excellence drove us to build a company offering honest, reliable, and premium building services. We now serve satisfied customers across Coventry, the West Midlands, and nationwide across the UK.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                [
                  Hammer,
                  "Experienced & Dedicated Team",
                  "Run by a professional, highly skilled team equipped to take on any task from single room remodels to large multi-storey extensions.",
                ],
                [
                  Sparkles,
                  "Innovation, Creativity & Quality",
                  "We develop modern engineering strategies to ensure every build is structurally robust, energy-efficient, and visually spectacular.",
                ],
                [
                  ShieldCheck,
                  "100% Client Satisfaction & Free Quotes",
                  "All of our clients are 100% satisfied. We provide free quotations, zero sales pressure, tidy worksites, and transparent updates throughout.",
                ],
              ].map(([Icon, title, desc], index) => {
                const FeatureIcon = Icon as typeof Hammer;
                return (
                  <Reveal key={title as string} delay={index * 100}>
                    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
                      <div className="mb-8 flex items-start justify-between">
                        <div className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                          <FeatureIcon className="size-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">0{index + 1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900">{title as string}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc as string}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Quick Stats Banner */}
            <Reveal delay={200}>
              <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:grid-cols-4 md:p-10">
                <div className="border-r border-slate-800 pr-4">
                  <div className="font-display text-3xl font-extrabold text-amber-400 md:text-4xl">100%</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">Client Satisfaction</div>
                </div>
                <div className="md:border-r border-slate-800 pr-4">
                  <div className="font-display text-3xl font-extrabold text-amber-400 md:text-4xl">2019</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">Founded & Established</div>
                </div>
                <div className="border-r border-slate-800 pr-4 pt-4 md:pt-0">
                  <div className="font-display text-3xl font-extrabold text-amber-400 md:text-4xl">UK-Wide</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">Nationwide Coverage</div>
                </div>
                <div className="pt-4 md:pt-0">
                  <div className="font-display text-3xl font-extrabold text-amber-400 md:text-4xl">£0</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">Free Quotes & Advice</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 md:py-28 bg-slate-50">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  Services
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  What We Can Do For You!
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                  Below you will see a list of our core services. If you would like to know more about pricing or understand the process, please give us a call or drop us an email.
                </p>
              </Reveal>
            </div>

            {/* 6 Featured Service Cards with 8K Photos */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service, index) => (
                <Reveal key={service.title} delay={index * 90}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        width={1200}
                        height={900}
                        loading="lazy"
                        alt={service.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 font-mono text-xs font-bold text-amber-400 shadow-sm backdrop-blur-md">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-7">
                      <div>
                        <h3 className="font-display text-2xl font-bold leading-snug text-slate-900 group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {service.text}
                        </p>
                      </div>
                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <div className="flex flex-col gap-2">
                          {service.features.map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700"
                            >
                              <CheckCircle2 className="size-3.5 text-amber-500 shrink-0" />
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

            {/* Matrix of all 4S Builders Trade Capabilities */}
            <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-md md:p-12">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Complete Trade & Building Capabilities
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    4S Builders LTD manages every phase in-house from structural foundation to turnkey finish.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
                {allCapabilities.map((item, idx) => {
                  const CapIcon = item.icon;
                  return (
                    <Reveal key={item.title} delay={idx * 40}>
                      <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-amber-50/50 hover:border-amber-300">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600">
                          <CapIcon className="size-4" />
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                          <p className="text-xs text-slate-500 leading-tight mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX BUILDER BANNER */}
        <BuilderBanner />

        {/* GALLERY & RECENT PROJECTS */}
        <section id="gallery" className="border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
              <Reveal>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  Project Gallery
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Recent Building Transformations
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
                  Explore our completed building projects across the UK — demonstrating our commitment to quality, precision, and architectural elegance.
                </p>
              </Reveal>

              {/* Filter Tabs */}
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-2">
                  {["All", "Extensions", "Roofing", "Kitchens", "Bathrooms", "Driveways", "Lofts"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                          activeFilter === category
                            ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGallery.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <figure className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        width={1200}
                        height={900}
                        loading="lazy"
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                          {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                          <Check className="size-3" /> {item.badge}
                        </span>
                      </div>
                      <h4 className="mt-2 font-display text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="size-3 text-amber-500" />
                        {item.location}
                      </p>
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHENTIC TESTIMONIALS SECTION */}
        <section id="reviews" className="overflow-hidden py-20 md:py-28 bg-slate-900 text-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <Reveal className="mb-14 text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                Customer Testimonials
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                What Our Clients Say About 4S Builders
              </h2>
              <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
                Read direct reviews from homeowners who entrusted their property renovations, warm roofs, and extensions to our team.
              </p>
            </Reveal>
          </div>

          <div className="reviews-marquee relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-900 to-transparent md:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-900 to-transparent md:w-28" />
            <div className="reviews-marquee-track">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className={`flex gap-6 pr-6 ${copy === 1 ? "reviews-marquee-clone" : ""}`}
                >
                  {testimonials.map((t) => (
                    <figure
                      key={`${t.name}-${copy}`}
                      className="flex w-[min(88vw,440px)] shrink-0 flex-col justify-between rounded-3xl border border-slate-800 bg-slate-800/80 p-8 shadow-lg backdrop-blur-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <Quote className="size-7 text-amber-400/40" aria-hidden="true" />
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                        <span className="mt-3 inline-block rounded-md bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-300">
                          {t.project}
                        </span>
                        <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
                          “{t.quote}”
                        </blockquote>
                      </div>
                      <figcaption className="mt-6 border-t border-slate-700/60 pt-4">
                        <p className="font-display font-bold text-white text-base">{t.name}</p>
                        <p className="text-xs font-medium text-slate-400">{t.role}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & DIRECT QUOTE SECTION */}
        <section id="contact" className="py-20 md:py-28 bg-slate-50">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Contact Info */}
              <Reveal>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                  <Phone className="size-3.5 text-amber-500" /> Contact Details
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Get in Touch with 4S Builders LTD.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Feel free to drop us a message by filling out the form, or reach out to us directly via phone or email. We provide prompt, no-obligation free quotations for all building work.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+447783686427"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-md"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone / Mobile</div>
                      <div className="font-display text-base font-bold text-slate-900">+44 7783 686427</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@4sbuildersltd.co.uk"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-md"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</div>
                      <div className="font-display text-base font-bold text-slate-900">info@4sbuildersltd.co.uk</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="grid size-12 place-items-center rounded-xl bg-amber-50 text-amber-600">
                      <MapPin className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Registered Office</div>
                      <div className="font-display text-base font-bold text-slate-900">
                        8 Leyburn Close, Coventry, CV6 6GT
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Message Form */}
              <Reveal delay={120}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
                  <h3 className="font-display text-2xl font-bold text-slate-900">Send Us a Message</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Fill in your details below and our team will get back to you promptly.
                  </p>

                  {contactSubmitted ? (
                    <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-900">
                      <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-emerald-500 text-white">
                        <Check className="size-6" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-emerald-950">Thank You! Message Sent</h4>
                      <p className="mt-2 text-sm text-emerald-800">
                        We have received your enquiry. A member of the 4S Builders LTD team will contact you shortly.
                      </p>
                      <Button
                        onClick={() => setContactSubmitted(false)}
                        className="mt-6 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setContactSubmitted(true);
                      }}
                      className="mt-6 space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="your.email@example.co.uk"
                            className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Phone Number *</label>
                          <input
                            required
                            type="tel"
                            placeholder="+44 7783 686427"
                            className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Message *</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your project requirements, property location, or any questions..."
                          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-amber-500 hover:bg-amber-400 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/20"
                      >
                        <Send className="mr-2 size-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-300">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <Brand footer />
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
                  4S Builders LTD — Your trusted building partner for home extensions, solid conservatory warm roofs, kitchens, bathrooms, and full transformations across the UK.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <ShieldCheck className="size-4" /> 100% Satisfaction Guaranteed
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Navigation</h3>
                <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
                  {navItems.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </Reveal>

              <Reveal delay={160}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Contact Us</h3>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="tel:+447783686427"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:bg-slate-850"
                  >
                    <Phone className="size-4 text-amber-400" />
                    +44 7783 686427
                  </a>
                  <a
                    href="mailto:info@4sbuildersltd.co.uk"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:bg-slate-850"
                  >
                    <Mail className="size-4 text-amber-400" />
                    info@4sbuildersltd.co.uk
                  </a>
                  <a
                    href="https://wa.me/447783686427"
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Head Office</h3>
                <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-amber-400" />
                  8 Leyburn Close, Coventry, CV6 6GT
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  Serving Coventry, Solihull, Birmingham, Warwickshire and surrounding UK regions.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} 4S Builders LTD. All rights reserved.</p>
              <div className="flex gap-5">
                <a href="#top" className="transition hover:text-amber-400">
                  Back to Top
                </a>
                <a href="#contact" className="transition hover:text-amber-400">
                  Free Quotation
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <WhatsAppFloat hidden={quoteModalOpen} />
    </>
  );
}
