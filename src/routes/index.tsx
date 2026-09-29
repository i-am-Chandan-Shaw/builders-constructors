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
  FileText,
  FileCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hero3D } from "@/components/Hero3D";
import { Reveal, useInView } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

import logo4s from "@/assets/4s-logo.png";
import ukBuilderHero from "@/assets/uk-builder-hero.jpg";
import ukBuilderCraftsmen from "@/assets/uk-builder-craftsmen.jpg";
import ukBuilderExtension from "@/assets/uk-builder-extension.jpg";
import ukBuilderRoofing from "@/assets/uk-builder-roofing.jpg";
import ukBuilderKitchen from "@/assets/uk-builder-kitchen.jpg";
import ukBuilderBathroom from "@/assets/uk-builder-bathroom.jpg";
import ukBuilderDriveway from "@/assets/uk-builder-driveway.jpg";
import ukBuilderLoft from "@/assets/uk-builder-loft.jpg";

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
    <a href="#top" className="flex items-center" aria-label="4S Builders LTD home">
      <img
        src={logo4s}
        alt="4S Builders LTD - You Dream it, We build it"
        className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-[1.02]"
      />
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
              You Dream It, <span className="bg-gradient-to-r from-blue-400 via-emerald-300 via-amber-300 to-orange-400 bg-clip-text text-transparent font-black">We Build It.</span>
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
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{
    title: string;
    location: string;
    image: string;
    badge: string;
    badgeColor?: string;
    description: string;
  } | null>(null);

  const galleryItems = [
    {
      title: "Solid Conservatory Warm Roof Conversion",
      location: "Coventry, West Midlands",
      image: g1,
      badge: "Featured Build",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Full replacement of an old polycarbonate roof with high-efficiency insulated solid slate tiled warm roof and interior plaster finish.",
    },
    {
      title: "Full Rear House Extension & Architectural Glazing",
      location: "Warwickshire, UK",
      image: g2,
      badge: "Completed",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Single-storey rear extension with bespoke aluminium bifold doors, integrated steelwork, and open-plan kitchen integration.",
    },
    {
      title: "Architectural Extension & Precision Brickwork",
      location: "Solihull, West Midlands",
      image: g3,
      badge: "Completed",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Seamless brick-matched double-storey extension complete with structural RSJ steel beams and building regulations approval.",
    },
    {
      title: "Open-Plan Kitchen & Structural Knockthrough",
      location: "Kenilworth, UK",
      image: g4,
      badge: "Top Rated",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Complete layout redesign creating a spacious open-concept culinary living area with contemporary cabinetry and breakfast bar.",
    },
    {
      title: "Luxury Porcelain Wet Room & Walk-in Shower",
      location: "Leamington Spa, UK",
      image: g5,
      badge: "Designer Fit",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      description: "Full bathroom overhaul featuring large-format Italian porcelain tiling, frameless glass shower enclosure, and concealed plumbing.",
    },
    {
      title: "Block Paving & Landscaped Entrance Driveway",
      location: "Coventry, West Midlands",
      image: g6,
      badge: "Completed",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      description: "Heavy-duty permeable block paving with charcoal granite borders, sub-base preparation, and integrated surface water drainage.",
    },
    {
      title: "Insulated Tiled Conservatory Roof Replacement",
      location: "Stratford-upon-Avon, UK",
      image: g7,
      badge: "Energy Saver",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Transforming a heat-loss conservatory into an all-season habitable room with lightweight slate tiles and Velux skylights.",
    },
    {
      title: "Dormer Loft Conversion & Master Suite",
      location: "Birmingham, UK",
      image: g8,
      badge: "Completed",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "Rear dormer loft conversion adding a master bedroom suite, built-in wardrobes, and an en-suite luxury shower room.",
    },
    {
      title: "Designer Fitted Kitchen & Quartz Worktops",
      location: "Solihull, West Midlands",
      image: g9,
      badge: "Custom Fit",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Bespoke shaker units with quartz composite work surfaces, undermount sink, and integrated ambient task lighting.",
    },
    {
      title: "Contemporary Porcelain Tiled Family Bathroom",
      location: "Warwickshire, UK",
      image: g10,
      badge: "Completed",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      description: "Clean modern family bathroom renovation with rainfall shower over bath, floating vanity unit, and heated towel rail.",
    },
    {
      title: "Custom House Extension & Patio Groundworks",
      location: "Rugby, West Midlands",
      image: g11,
      badge: "Turnkey Build",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Expansive kitchen diner extension with direct access onto newly laid natural sandstone patio terrace.",
    },
    {
      title: "Pitched Roof Renewal & Velux Skylight Fit",
      location: "Coventry, West Midlands",
      image: g12,
      badge: "Weatherproof",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Complete re-tiling, breathable membrane installation, and precision Velux roof window fitting for optimal daylight.",
    },
  ];

  return (
    <>
      <main id="top" className="overflow-x-clip bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-slate-900">
        <Hero3D onQuoteModalChange={setQuoteModalOpen} />

        {/* ABOUT US SECTION */}
        <section id="about" className="border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  About 4S Builders LTD
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Who We Are & Why Choose 4S Builders.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={120}>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                  <strong className="font-bold text-slate-950">4S Builders LTD</strong> is your number one source for all building and construction requirements. Founded in 2019, our passion for excellence drove us to build a company offering honest, reliable, and premium building services. We now serve satisfied customers across Coventry, the West Midlands, and nationwide across the UK.
                </p>
              </Reveal>
            </div>

            {/* Who We Are 3 Cards: Left slide, Center Fade-up, Right slide */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Hammer,
                  title: "Experienced & Dedicated Team",
                  desc: "Run by a professional, highly skilled team equipped to take on any task from single room remodels to large multi-storey extensions.",
                  color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                  hoverBorder: "hover:border-blue-500",
                  direction: "left" as const,
                  delay: 0,
                },
                {
                  icon: Sparkles,
                  title: "Innovation, Creativity & Quality",
                  desc: "We develop modern engineering strategies to ensure every build is structurally robust, energy-efficient, and visually spectacular.",
                  color: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950",
                  hoverBorder: "hover:border-amber-400",
                  direction: "up" as const,
                  delay: 120,
                },
                {
                  icon: ShieldCheck,
                  title: "100% Client Satisfaction & Free Quotes",
                  desc: "All of our clients are 100% satisfied. We provide free quotations, zero sales pressure, tidy worksites, and transparent updates throughout.",
                  color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                  hoverBorder: "hover:border-emerald-400",
                  direction: "right" as const,
                  delay: 240,
                },
              ].map((item, index) => {
                const FeatureIcon = item.icon;
                return (
                  <Reveal key={item.title} direction={item.direction} delay={item.delay}>
                    <div className={`group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 ${item.hoverBorder} hover:shadow-xl`}>
                      <div className="mb-8 flex items-start justify-between">
                        <div className={`grid size-12 place-items-center rounded-xl transition-colors ${item.color}`}>
                          <FeatureIcon className="size-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">0{index + 1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Quick Stats Banner with 4S Logo Easter Egg Palette */}
            <Reveal direction="up" delay={200}>
              <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl bg-slate-900 p-8 text-white shadow-xl md:grid-cols-4 md:p-10">
                <div className="border-r border-slate-800 pr-4">
                  <div className="font-display text-3xl font-black text-emerald-400 md:text-4xl">100%</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Client Satisfaction</div>
                </div>
                <div className="md:border-r border-slate-800 pr-4">
                  <div className="font-display text-3xl font-black text-amber-300 md:text-4xl">2019</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Founded & Established</div>
                </div>
                <div className="border-r border-slate-800 pr-4 pt-4 md:pt-0">
                  <div className="font-display text-3xl font-black text-blue-400 md:text-4xl">UK-Wide</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Nationwide Coverage</div>
                </div>
                <div className="pt-4 md:pt-0">
                  <div className="font-display text-3xl font-black text-orange-400 md:text-4xl">£0</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Free Quotes & Advice</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 md:py-28 bg-slate-50">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <Reveal direction="up">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Services
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  What We Can Do For You!
                </h2>
              </Reveal>
              <Reveal direction="up" delay={120}>
                <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                  Below you will see a list of our core services. If you would like to know more about pricing or understand the process, please give us a call or drop us an email.
                </p>
              </Reveal>
            </div>

            {/* 6 Featured Service Cards with 8K Photos & Fade Up */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service, index) => {
                const categoryBadgeColors: Record<string, string> = {
                  Extensions: "bg-blue-600/95 text-white",
                  Roofing: "bg-emerald-600/95 text-white",
                  Kitchens: "bg-amber-500/95 text-slate-950 font-bold",
                  Bathrooms: "bg-sky-600/95 text-white",
                  Driveways: "bg-orange-600/95 text-white",
                  Lofts: "bg-indigo-600/95 text-white",
                };

                return (
                  <Reveal key={service.title} direction="up" delay={index * 80}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={service.image}
                          width={1200}
                          height={900}
                          loading="lazy"
                          alt={service.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className={`absolute left-4 top-4 rounded-full px-3.5 py-1 font-mono text-xs font-bold shadow-md backdrop-blur-md ${categoryBadgeColors[service.category] || "bg-slate-900/85 text-white"}`}>
                          {service.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-7">
                        <div>
                          <h3 className="font-display text-2xl font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
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
                                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Matrix of all 4S Builders Trade Capabilities */}
            <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-md md:p-12">
              <Reveal direction="up">
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
                  const colorCycle = [
                    "bg-blue-500/10 text-blue-600",
                    "bg-emerald-500/10 text-emerald-600",
                    "bg-amber-500/10 text-amber-600",
                    "bg-orange-500/10 text-orange-600",
                  ];
                  const tintClass = colorCycle[idx % colorCycle.length] ?? "bg-blue-500/10 text-blue-600";

                  return (
                    <Reveal key={item.title} direction="up" delay={idx * 30}>
                      <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:shadow-sm">
                        <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${tintClass}`}>
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

        {/* GALLERY & RECENT PROJECTS (Category removed per request) */}
        <section id="gallery" className="border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="mb-14">
              <Reveal direction="up">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Project Gallery
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Recent Building Transformations
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                  Explore our authentic building projects completed across the UK — highlighting our high-standard craftsmanship in house extensions, solid warm roofs, bespoke kitchens, luxury bathrooms, driveways, and loft conversions.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => {
                return (
                  <Reveal key={item.title} direction="up" delay={index * 50}>
                    <button
                      type="button"
                      onClick={() => setSelectedGalleryItem(item)}
                      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          width={1200}
                          height={900}
                          loading="lazy"
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                          <span className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
                            <Sparkles className="size-3.5 fill-amber-300 text-amber-300" /> View Full Photo
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                              4S Builders LTD
                            </span>
                            <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${item.badgeColor || "bg-emerald-50 text-emerald-700 border-emerald-200"}`}>
                              <Check className="size-3" /> {item.badge}
                            </span>
                          </div>
                          <h4 className="mt-2 font-display text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-500 border-t border-slate-100 pt-3">
                          <MapPin className="size-3.5 text-orange-500 shrink-0" />
                          {item.location}
                        </p>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
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
                  {testimonials.map((t, tIdx) => {
                    const pillThemes = [
                      "bg-blue-500/15 border-blue-500/30 text-blue-300",
                      "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
                      "bg-amber-500/15 border-amber-500/30 text-amber-300",
                      "bg-orange-500/15 border-orange-500/30 text-orange-300",
                    ];
                    const currentPill = pillThemes[tIdx % pillThemes.length];

                    return (
                      <figure
                        key={`${t.name}-${copy}`}
                        className="flex w-[min(88vw,440px)] shrink-0 flex-col justify-between rounded-3xl border border-slate-800 bg-slate-800/80 p-8 shadow-lg backdrop-blur-md"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <Quote className="size-7 text-blue-400/40" aria-hidden="true" />
                            <div className="flex items-center gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                          </div>
                          <span className={`mt-3 inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${currentPill}`}>
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
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & DIRECT QUOTE SECTION */}
        <section id="contact" className="py-20 md:py-28 bg-slate-50">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Contact Info (Slide from Left) */}
              <Reveal direction="left">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  <Phone className="size-3.5 text-orange-500" /> Contact Details
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
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-400 hover:shadow-md"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-orange-50 text-orange-600">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone / Mobile</div>
                      <div className="font-display text-base font-bold text-slate-900">+44 7783 686427</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@4sbuildersltd.co.uk"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-600">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</div>
                      <div className="font-display text-base font-bold text-slate-900">info@4sbuildersltd.co.uk</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
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

              {/* Direct Message Form (Slide from Right) */}
              <Reveal direction="right" delay={120}>
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
                        className="mt-6 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      autoComplete="off"
                      data-lpignore="true"
                      data-1p-ignore="true"
                      data-form-type="other"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setContactSubmitted(true);
                      }}
                      className="mt-6 space-y-4"
                    >
                      {/* Trap browser autofill heuristics */}
                      <input type="text" name="b_contact_usr_decoy" className="hidden" tabIndex={-1} autoComplete="off" />
                      <input type="password" name="b_contact_pwd_decoy" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Name *</label>
                        <input
                          required
                          type="text"
                          name="c_user_fn"
                          id="c_user_fn"
                          autoComplete="one-time-code"
                          autoCapitalize="words"
                          autoCorrect="off"
                          spellCheck="false"
                          data-lpignore="true"
                          data-1p-ignore="true"
                          placeholder="Your full name"
                          className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Email *</label>
                          <input
                            required
                            type="email"
                            name="c_user_mailaddr"
                            id="c_user_mailaddr"
                            autoComplete="one-time-code"
                            autoCorrect="off"
                            spellCheck="false"
                            data-lpignore="true"
                            data-1p-ignore="true"
                            placeholder="your.email@example.co.uk"
                            className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Phone Number *</label>
                          <input
                            required
                            type="tel"
                            name="c_user_telnum"
                            id="c_user_telnum"
                            autoComplete="one-time-code"
                            autoCorrect="off"
                            spellCheck="false"
                            data-lpignore="true"
                            data-1p-ignore="true"
                            placeholder="+44 7783 686427"
                            className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Message *</label>
                        <textarea
                          required
                          rows={4}
                          name="c_user_msgtext"
                          id="c_user_msgtext"
                          autoComplete="one-time-code"
                          autoCorrect="off"
                          spellCheck="false"
                          data-lpignore="true"
                          data-1p-ignore="true"
                          placeholder="Tell us about your project requirements, property location, or any questions..."
                          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25"
                      >
                        <Send className="mr-2 size-4 text-amber-300" />
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
        <footer className="border-t border-slate-200 bg-white py-16 text-slate-700">
          {/* Authentic 4S Builders multi-color brand ribbon matching the logo flag */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />
          <div className="mx-auto max-w-[1440px] px-5 pt-12 md:px-8 lg:px-12">
            <div className="grid gap-12 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-4">
              <Reveal direction="up">
                <Brand footer />
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
                  4S Builders LTD — Your trusted building partner for home extensions, solid conservatory warm roofs, kitchens, bathrooms, and full transformations across the UK.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <ShieldCheck className="size-4 text-emerald-500" /> 100% Satisfaction Guaranteed
                </div>
              </Reveal>

              <Reveal direction="up" delay={80}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Navigation</h3>
                <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
                  {navItems.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </Reveal>

              <Reveal direction="up" delay={160}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Contact Us</h3>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="tel:+447783686427"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-orange-400 hover:bg-slate-100"
                  >
                    <Phone className="size-4 text-orange-500" />
                    +44 7783 686427
                  </a>
                  <a
                    href="mailto:info@4sbuildersltd.co.uk"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:bg-slate-100"
                  >
                    <Mail className="size-4 text-blue-600" />
                    info@4sbuildersltd.co.uk
                  </a>
                  <a
                    href="https://wa.me/447783686427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-[#25D366]/20"
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

              <Reveal direction="up" delay={220}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Head Office</h3>
                <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-slate-700 font-medium">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-orange-500" />
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
                <a href="#top" className="font-medium transition hover:text-blue-600">
                  Back to Top
                </a>
                <a href="#contact" className="font-medium transition hover:text-blue-600">
                  Free Quotation
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* GALLERY LIGHTBOX MODAL */}
        <Dialog
          open={!!selectedGalleryItem}
          onOpenChange={(open) => {
            if (!open) setSelectedGalleryItem(null);
          }}
        >
          <DialogContent className="max-w-4xl overflow-hidden rounded-3xl border-slate-800 bg-slate-900 p-0 text-white shadow-2xl">
            {/* 4S multi-color ribbon on top of lightbox */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />
            {selectedGalleryItem && (
              <div className="flex flex-col">
                <div className="relative max-h-[65vh] w-full overflow-hidden bg-slate-950">
                  <img
                    src={selectedGalleryItem.image}
                    alt={selectedGalleryItem.title}
                    className="h-full w-full object-contain max-h-[65vh] mx-auto"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-slate-900/90 border border-slate-700 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
                      4S Project Showcase
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <DialogTitle className="font-display text-2xl font-bold text-white">
                        {selectedGalleryItem.title}
                      </DialogTitle>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="size-3.5 text-orange-400" />
                        {selectedGalleryItem.location} • <span className={`inline-flex items-center rounded-full border px-2 py-0.2 text-[10px] font-bold ${selectedGalleryItem.badgeColor || "bg-emerald-50 text-emerald-700 border-emerald-200"}`}>{selectedGalleryItem.badge}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+447783686427"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-100 hover:border-orange-400 hover:text-orange-300"
                      >
                        <Phone className="size-3.5 text-orange-400" /> Call Direct
                      </a>
                      <Button
                        onClick={() => {
                          setSelectedGalleryItem(null);
                          setQuoteModalOpen(true);
                        }}
                        className="rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/25"
                      >
                        <FileCheck className="size-4 mr-1.5 text-emerald-300" />
                        Get Quote For Similar Build
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200 border-t border-slate-800 pt-4">
                    {selectedGalleryItem.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <WhatsAppFloat hidden={quoteModalOpen || !!selectedGalleryItem} />
    </>
  );
}
