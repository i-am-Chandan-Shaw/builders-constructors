import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Phone,
  CheckCircle2,
  Mail,
  MapPin,
  Hammer,
  ShieldCheck,
  Award,
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
  UtensilsCrossed,
  Droplets,
  Bed,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/Hero3D";
import { Reveal, useInView } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { GallerySection } from "@/components/GallerySection";
import { GoogleReviews } from "@/components/GoogleReviews";

import logo4s from "@/assets/4s-logo.png";
import ukBuilderHero from "@/assets/uk-builder-hero.jpg";
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
    features: [
      "Single & Multi-Storey Extensions",
      "Structural RSJ Steel Installation",
      "Bifold Doors & Architectural Glazing",
    ],
  },
  {
    title: "Roofing & Conservatory Roof Conversions",
    category: "Roofing",
    text: "Transform your conservatory into a cozy, year-round room with our advanced insulated solid tiled warm roof replacements, slate pitched roofs, Velux skylights, and comprehensive ventilation tests.",
    image: ukBuilderRoofing,
    alt: "Solid tiled conservatory roof replacement with Velux skylights on a UK home by 4S Builders LTD",
    features: [
      "Solid Tiled Warm Roofs",
      "Velux Skylight Windows",
      "All-Weather Thermal Insulation",
    ],
  },
  {
    title: "Bespoke Kitchens & Living Spaces",
    category: "Kitchens",
    text: "Create the culinary centerpiece of your home. From bespoke navy shaker cabinetry and quartz waterfall islands to open-plan layout remodeling and integrated smart appliances.",
    image: ukBuilderKitchen,
    alt: "Luxury British kitchen renovation with marble island and bespoke cabinets by 4S Builders LTD",
    features: [
      "Custom Kitchen Design & Fitting",
      "Marble & Quartz Worktops",
      "Open-Plan Structural Remodeling",
    ],
  },
  {
    title: "Luxury Bathrooms & Wet Rooms",
    category: "Bathrooms",
    text: "Indulge in spa-like luxury with frameless glass walk-in rainfall showers, Italian porcelain tiling, bespoke floating vanities, illuminated ambient mirrors, and concealed plumbing.",
    image: ukBuilderBathroom,
    alt: "Luxury bathroom renovation with walk-in shower and freestanding bathtub by 4S Builders LTD",
    features: [
      "Frameless Wet Rooms & Walk-ins",
      "Large-Format Porcelain Tiling",
      "Freestanding Baths & Designer Brassware",
    ],
  },
  {
    title: "Pavements, Patios & Driveways",
    category: "Groundworks",
    text: "Boost your home's kerb appeal with resin-bound driveways, precision block paving, natural Indian sandstone patios, granite sett edging, and durable drainage solutions.",
    image: ukBuilderDriveway,
    alt: "Luxury UK residence entrance with resin-bound driveway and granite borders by 4S Builders LTD",
    features: [
      "Resin Bound & Block Paving",
      "Porcelain & Sandstone Patios",
      "Complete Drainage & Sub-bases",
    ],
  },
  {
    title: "Loft Conversions & Master Suites",
    category: "Lofts",
    text: "Unlock hidden space under your roof. We deliver dormer, mansard, and Velux loft conversions complete with master bedroom suites, en-suite bathrooms, and bespoke fitted wardrobes.",
    image: ukBuilderLoft,
    alt: "Luxury British loft conversion with master bedroom and Velux windows by 4S Builders LTD",
    features: [
      "Dormer & Velux Conversions",
      "En-Suite Bathroom Integration",
      "Bespoke Fitted Storage & Staircases",
    ],
  },
];

const allCapabilities = [
  {
    icon: Home,
    title: "Extensions",
    desc: "Single & double storey home extensions",
    accent: "bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    borderHover: "hover:border-blue-500",
    badge: "Structural",
  },
  {
    icon: ShieldCheck,
    title: "Roofing",
    desc: "Solid conservatory roofs, slate & tile",
    accent: "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    borderHover: "hover:border-emerald-500",
    badge: "Insulated",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchens",
    desc: "Bespoke design, supply & master installation",
    accent: "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950",
    borderHover: "hover:border-amber-400",
    badge: "Bespoke",
  },
  {
    icon: Droplets,
    title: "Bathrooms",
    desc: "Luxury wet rooms, en-suites & plumbing",
    accent: "bg-sky-500/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
    borderHover: "hover:border-sky-500",
    badge: "Luxury",
  },
  {
    icon: Compass,
    title: "Driveways",
    desc: "Resin-bound, block paving & paved patios",
    accent: "bg-orange-500/10 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    borderHover: "hover:border-orange-500",
    badge: "Paving",
  },
  {
    icon: Hammer,
    title: "Construction",
    desc: "New builds, structural knocking-through & foundations",
    accent: "bg-slate-500/10 text-slate-700 group-hover:bg-slate-900 group-hover:text-white",
    borderHover: "hover:border-slate-800",
    badge: "Heavy Build",
  },
  {
    icon: Layers,
    title: "Metal Works",
    desc: "Architectural steel, RSJ beams & fabrications",
    accent: "bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    borderHover: "hover:border-indigo-500",
    badge: "Steelwork",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Full rewiring, lighting design & certified testing",
    accent: "bg-yellow-500/10 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-slate-950",
    borderHover: "hover:border-yellow-400",
    badge: "NICEIC Spec",
  },
  {
    icon: Paintbrush,
    title: "Plastering",
    desc: "Smooth skimming, drylining & exterior rendering",
    accent: "bg-teal-500/10 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    borderHover: "hover:border-teal-500",
    badge: "Skimming",
  },
  {
    icon: Bed,
    title: "Bedrooms",
    desc: "Custom fitted bedrooms & master suites",
    accent: "bg-purple-500/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    borderHover: "hover:border-purple-500",
    badge: "Fitted Suites",
  },
  {
    icon: Wrench,
    title: "Plumbing",
    desc: "Boiler installations, central heating & drainage",
    accent: "bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white",
    borderHover: "hover:border-cyan-500",
    badge: "Heating & Gas",
  },
  {
    icon: Award,
    title: "And Much More",
    desc: "All commercial & residential building needs",
    accent: "bg-rose-500/10 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
    borderHover: "hover:border-rose-500",
    badge: "Turnkey",
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

function Index() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [galleryLightboxOpen, setGalleryLightboxOpen] = useState(false);

  return (
    <>
      <main
        id="top"
        className="overflow-x-clip bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-slate-900"
      >
        <Hero3D onQuoteModalChange={setQuoteModalOpen} />

        {/* ABOUT US SECTION */}
        <section id="about" className="border-b border-slate-200 bg-white py-14 md:py-20">
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
                  <strong className="font-bold text-slate-950">4S Builders LTD</strong> is your
                  number one source for all building and construction requirements. Founded in 2019,
                  our passion for excellence drove us to build a company offering honest, reliable,
                  and premium building services. We now serve satisfied customers across Coventry,
                  the West Midlands, and nationwide across the UK.
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
                  icon: Award,
                  title: "Innovation, Creativity & Quality",
                  desc: "We develop modern engineering strategies to ensure every build is structurally robust, energy-efficient, and visually spectacular.",
                  color:
                    "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950",
                  hoverBorder: "hover:border-amber-400",
                  direction: "up" as const,
                  delay: 120,
                },
                {
                  icon: ShieldCheck,
                  title: "100% Client Satisfaction & Free Quotes",
                  desc: "All of our clients are 100% satisfied. We provide free quotations, zero sales pressure, tidy worksites, and transparent updates throughout.",
                  color:
                    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                  hoverBorder: "hover:border-emerald-400",
                  direction: "right" as const,
                  delay: 240,
                },
              ].map((item, index) => {
                const FeatureIcon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    direction={item.direction}
                    delay={item.delay}
                    className="h-full flex flex-col"
                  >
                    <div
                      className={`group flex h-full w-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 ${item.hoverBorder} hover:shadow-xl`}
                    >
                      <div>
                        <div className="mb-8 flex items-start justify-between">
                          <div
                            className={`grid size-12 place-items-center rounded-xl transition-colors ${item.color}`}
                          >
                            <FeatureIcon className="size-6" />
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-400">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Quick Stats Grid with 4S Logo Brand Palette (Green, Blue, Yellow, Orange) */}
            <div className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
              {[
                {
                  value: "100%",
                  label: "Client Satisfaction",
                  sub: "5-Star Rated Service",
                  tag: "Verified",
                  cardBg: "bg-emerald-500/10 border-emerald-300/80 hover:border-emerald-500",
                  tagStyle: "bg-emerald-600 text-white",
                  valColor: "text-emerald-700",
                },
                {
                  value: "2019",
                  label: "Founded & Established",
                  sub: "Coventry, West Midlands",
                  tag: "Established",
                  cardBg: "bg-blue-500/10 border-blue-300/80 hover:border-blue-600",
                  tagStyle: "bg-blue-700 text-white",
                  valColor: "text-blue-800",
                },
                {
                  value: "UK-Wide",
                  label: "Nationwide Coverage",
                  sub: "Active Project Teams",
                  tag: "Nationwide",
                  cardBg: "bg-amber-500/10 border-amber-300/80 hover:border-amber-500",
                  tagStyle: "bg-amber-500 text-slate-950 font-black",
                  valColor: "text-amber-700",
                },
                {
                  value: "£0",
                  label: "Free Consultation",
                  sub: "Itemised Fixed Quotes",
                  tag: "Zero Upfront",
                  cardBg: "bg-orange-500/10 border-orange-300/80 hover:border-orange-500",
                  tagStyle: "bg-orange-600 text-white",
                  valColor: "text-orange-700",
                },
              ].map((stat, i) => (
                <Reveal
                  key={stat.label}
                  direction="up"
                  delay={i * 50}
                  className="h-full flex flex-col"
                >
                  <div
                    className={`group relative flex h-full w-full flex-col justify-between rounded-xl border p-4 sm:p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${stat.cardBg}`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs ${stat.tagStyle}`}
                      >
                        {stat.tag}
                      </span>
                    </div>

                    <div className="mt-2.5">
                      <div
                        className={`font-display text-2xl font-black tracking-tight sm:text-3xl ${stat.valColor}`}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                        {stat.label}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-slate-600">
                        {stat.sub}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="border-b border-slate-200/80 bg-slate-50 py-14 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            {/* Header: Complete Trade & Building Capabilities */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  <Building2 className="size-3.5 text-blue-600" />
                  Building & Trade Services
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Complete Trade & Building Capabilities
                </h2>
              </Reveal>
              <Reveal direction="up" delay={120}>
                <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                  4S Builders LTD manages every phase in-house from structural foundation to turnkey
                  finish across Coventry, the West Midlands, and nationwide UK.
                </p>
              </Reveal>
            </div>

            {/* 12 Trade Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {allCapabilities.map((item, idx) => {
                const CapIcon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    direction="up"
                    delay={idx * 25}
                    className="h-full flex flex-col"
                  >
                    <div
                      className={`group relative flex h-full w-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-5.5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.borderHover}`}
                    >
                      <div>
                        {/* Top: Icon + Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`grid size-11 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xs ${item.accent}`}
                          >
                            <CapIcon className="size-5" />
                          </span>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:border-slate-300">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title + Desc */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                              {item.title}
                            </h3>
                            <ArrowUpRight className="size-4 text-slate-400 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-blue-700" />
                          </div>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Sub-Header: What We Can Do For You! */}
            <div className="mt-14 sm:mt-16 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-t border-slate-200/80 pt-12 md:pt-14">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  <ShieldCheck className="size-3.5 text-blue-600" />
                  Core Project Solutions
                </div>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  What We Can Do For You!
                </h3>
              </Reveal>
              <Reveal direction="up" delay={120}>
                <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                  Explore our core residential and commercial building solutions tailored to your property.
                  Delivered on fixed timelines with £0 upfront consultation.
                </p>
              </Reveal>
            </div>

            {/* 6 Revamped Compact Transformation Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <Reveal
                    key={service.title}
                    direction="up"
                    delay={index * 60}
                    className="h-full flex flex-col"
                  >
                    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
                      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                        <img
                          src={service.image}
                          width={1200}
                          height={750}
                          loading="lazy"
                          alt={service.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span
                          className={`absolute left-3.5 top-3.5 rounded-full px-3 py-0.5 font-mono text-[11px] font-bold shadow-md backdrop-blur-md ${categoryBadgeColors[service.category] || "bg-slate-900/85 text-white"}`}
                        >
                          {service.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <h4 className="font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
                            {service.text}
                          </p>
                        </div>
                        <div className="mt-4 border-t border-slate-100 pt-3 flex flex-wrap gap-1.5">
                          {service.features.map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center gap-1 rounded-md bg-slate-50 border border-slate-200/70 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                            >
                              <CheckCircle2 className="size-3 text-emerald-500 shrink-0" />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION (Pure image showcase with interactive auto slider, mode switch, and lightbox) */}
        <GallerySection
          onRequestQuote={() => setQuoteModalOpen(true)}
          onLightboxChange={setGalleryLightboxOpen}
        />

        {/* GOOGLE REVIEWS SECTION (Authentic verified reviews & compact rating showcase) */}
        <GoogleReviews />

        {/* CONTACT & DIRECT QUOTE SECTION */}
        <section id="contact" className="py-14 md:py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
              {/* Contact Info (Left Column: 5 cols) */}
              <Reveal direction="left" className="h-full flex flex-col lg:col-span-5">
                <div className="flex h-full w-full flex-col justify-between">
                  {/* Top: Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
                      <Phone className="size-3.5 text-orange-500" /> Contact Details
                    </div>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                      Get in Touch with 4S Builders LTD.
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Feel free to drop us a message by filling out the form, or reach out to us
                      directly via phone, email, or WhatsApp. We provide prompt, no-obligation free
                      quotations for all building work across Coventry, the West Midlands, and
                      nationwide UK.
                    </p>
                  </div>

                  {/* Middle: 3 Contact Method Cards */}
                  <div className="my-6 space-y-3">
                    <a
                      href="tel:+447783686427"
                      className="group flex h-[72px] w-full items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs transition hover:border-orange-400 hover:shadow-md"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:scale-105">
                        <Phone className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Phone / Direct Line
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-slate-900 truncate">
                          +44 7783 686427
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@4sbuildersltd.co.uk"
                      className="group flex h-[72px] w-full items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs transition hover:border-blue-400 hover:shadow-md"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:scale-105">
                        <Mail className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Email Address
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-slate-900 truncate">
                          info@4sbuildersltd.co.uk
                        </div>
                      </div>
                    </a>

                    <div className="flex h-[72px] w-full items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs transition hover:border-emerald-400 hover:shadow-md">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                        <MapPin className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Registered Office
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-slate-900 truncate">
                          8 Leyburn Close, Coventry, CV6 6GT
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: £0 Free Consultation Reassurance Strip */}
                  <div className="flex items-center gap-3 rounded-2xl border border-orange-200/90 bg-orange-50/70 p-3.5 shadow-xs">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange-600 text-white font-black text-sm shadow-xs">
                      £0
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Free Consultation & Quotes
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Zero upfront cost, no high-pressure sales, and 100% no obligation.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Message Form (Right Column: 7 cols) */}
              <Reveal direction="right" delay={120} className="h-full flex flex-col lg:col-span-7">
                <div className="flex h-full w-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-slate-900">
                          Send Us a Message
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          Fill in your details below and our team will get back to you promptly.
                        </p>
                      </div>
                      <span className="rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 font-mono text-xs font-bold text-orange-700">
                        Free Consultation
                      </span>
                    </div>

                    {contactSubmitted ? (
                      <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center text-emerald-900">
                        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-emerald-600 text-white">
                          <Check className="size-6" />
                        </div>
                        <h4 className="font-display text-xl font-bold text-emerald-950">
                          Thank You! Message Sent
                        </h4>
                        <p className="mt-2 text-sm text-emerald-800">
                          We have received your enquiry. A member of the 4S Builders LTD team will
                          contact you promptly to discuss your requirements.
                        </p>
                        <Button
                          onClick={() => setContactSubmitted(false)}
                          className="mt-6 rounded-xl bg-blue-700 text-white hover:bg-blue-800 shadow-md font-bold"
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
                        className="mt-6 flex flex-1 flex-col justify-between space-y-4"
                      >
                        {/* Trap browser autofill heuristics */}
                        <input
                          type="text"
                          name="b_contact_usr_decoy"
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                        <input
                          type="password"
                          name="b_contact_pwd_decoy"
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Name *
                          </label>
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
                            className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-700"
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                              Email *
                            </label>
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
                              className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-700"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                              Phone Number *
                            </label>
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
                              className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-700"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Message / Project Details *
                          </label>
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
                            placeholder="Tell us about your project requirements, property location, or requested consultation date..."
                            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-700"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:to-indigo-800 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20"
                        >
                          <Send className="mr-2 size-4 text-amber-300" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </div>
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
                  4S Builders LTD — Your trusted building partner for home extensions, solid
                  conservatory warm roofs, kitchens, bathrooms, and full transformations across the
                  UK.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <ShieldCheck className="size-4 text-emerald-500" /> 100% Satisfaction Guaranteed
                </div>
              </Reveal>

              <Reveal direction="up" delay={80}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Navigation
                </h3>
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Contact Us
                </h3>
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
                    <span
                      className="grid size-4 place-items-center text-[#25D366]"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="size-4 fill-current">
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.15h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
                      </svg>
                    </span>
                    Chat on WhatsApp
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={220}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Head Office
                </h3>
                <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-slate-700 font-medium">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-orange-500" />8 Leyburn Close,
                  Coventry, CV6 6GT
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
      </main>
      <WhatsAppFloat hidden={quoteModalOpen || galleryLightboxOpen} />
    </>
  );
}
