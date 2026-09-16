import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Leaf, Menu, Phone, Quote, Sprout, Trees, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import gardenDesign from "@/assets/garden-design.jpg";
import gardenLowMaintenance from "@/assets/garden-low-maintenance.jpg";
import gardenMakeover from "@/assets/garden-makeover.jpg";
import gardenNewHome from "@/assets/garden-new-home.jpg";
import heroImage from "@/assets/hyland-hero.jpg";
import parallaxImage from "@/assets/hyland-parallax.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bespoke Garden Design | Hyland Landscapes" },
      { name: "description", content: "Hyland Landscapes creates bespoke, professionally designed gardens for your home and family." },
      { property: "og:title", content: "Bespoke Garden Design | Hyland Landscapes" },
      { property: "og:description", content: "Tailor-made garden design, complete makeovers and low-maintenance outdoor spaces." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Reviews", "#reviews"],
];

const services = [
  {
    title: "Create a garden for your new home",
    text: "Create a garden with vibrant flowers, diverse shrubs, trees, patio / seating areas, and a soothing water feature for your new home. Enjoy beauty and functionality.",
    image: gardenNewHome,
    alt: "Newly designed garden with patio, flowers and water feature",
  },
  {
    title: "Give your existing garden a complete ‘makeover’",
    text: "Give your existing garden a complete makeover with vibrant flowers, lush shrubs, decorative trees, patio / seating areas, and a calming water feature. Transform your space into a stunning retreat.",
    image: gardenMakeover,
    alt: "Landscaped country garden with water feature and terrace",
  },
  {
    title: "Create a low-maintenance outdoor space",
    text: "Create a low-maintenance outdoor space with hardy plants, durable materials, automated irrigation, and minimalist design for easy upkeep and year-round enjoyment.",
    image: gardenLowMaintenance,
    alt: "Modern low-maintenance garden with structured planting",
  },
];

const testimonials = [
  ["Tim Brown", "Impressive service. Prompt response to our initial query led to a highly satisfactory quotation which we accepted. Landscaping work was undertaken on the date agreed and completed as scheduled. The quality of work was excellent."],
  ["Jennifer Mills", "Listened to what I wanted and worked with me to create my perfect garden, really excellent workmanship couldn’t find any faults, highly recommend and the work was worth every penny."],
  ["Ronald Gibbs", "Simon has completed 3 phases of work. An excellent substantial patio, followed by a picket fence and front garden landscaping. All to a high standard. Another phase soon. Enough said?"],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Hyland Landscapes home">
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Leaf className="size-4" /></span>
      <span className={`font-display text-lg font-semibold ${footer ? "text-footer-foreground" : "text-foreground"}`}>Hyland <span className={`font-normal ${footer ? "text-footer-muted" : "text-muted-foreground"}`}>Landscapes</span></span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const update = () => setParallax(Math.max(-36, Math.min(36, (window.scrollY - window.innerHeight * 1.7) * 0.045)));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <Brand />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </nav>
          <div className="hidden lg:block">
            <Button asChild size="lg"><a href="tel:07866256464"><Phone /> Call now</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 text-base text-foreground">{label}</a>)}
              <Button asChild className="mt-3"><a href="tel:07866256464"><Phone /> Call now</a></Button>
            </div>
          </nav>
        )}
      </header>

      <section className="relative min-h-[88svh] pt-20" aria-labelledby="hero-heading">
        <img src={heroImage} width={1920} height={1200} alt="Bespoke landscaped garden at a country home" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[calc(88svh-5rem)] max-w-[1440px] items-center px-5 py-16 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary"><span className="h-px w-10 bg-primary" />Bespoke garden design</p>
            <h1 id="hero-heading" className="font-display text-5xl font-semibold leading-[0.96] text-hero sm:text-6xl lg:text-8xl">Your garden.<br /><span className="font-serif-display font-normal italic text-primary">Reimagined.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-muted md:text-lg">Hyland Landscapes provides a fully bespoke and comprehensive garden design service, creating professionally designed gardens tailor-made for you and your family.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6"><a href="tel:07866256464">Free quotation <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 border-hero/40 bg-hero/10 px-6 text-hero hover:bg-hero/20 hover:text-hero"><a href="#services">Explore services <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
        <a href="#about" aria-label="Scroll to discover" className="absolute bottom-7 right-5 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-hero-muted md:flex lg:right-12"><span>Discover</span><span className="grid size-10 place-items-center rounded-full border border-hero/30"><ArrowDown className="size-4" /></span></a>
      </section>

      <section id="about" className="border-b border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="section-kicker">A garden made for living</p><h2 className="section-title mt-4">Your garden is important to you.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Thoughtful design can give your garden a lift, adapt it to your changing lifestyle, and increase the use and enjoyment of your outside space.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {[ [Sprout, "Give your garden ‘a lift’", "Change the layout"], [Trees, "Suit your changing lifestyle", "Alter the garden design"], [Leaf, "Enjoy more time outside", "Increase use of your space"] ].map(([Icon, title, small], index) => {
              const GoalIcon = Icon as typeof Leaf;
              return <div key={title as string} className="bg-background p-7 md:p-9"><div className="mb-10 flex items-start justify-between"><GoalIcon className="size-6 text-primary" /><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="font-display text-xl font-semibold">{title as string}</h3><p className="mt-2 text-sm text-muted-foreground">{small as string}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker">Together with Hyland Landscapes</p><h2 className="section-title mt-4">Create a garden that fits your life.</h2></div><p className="max-w-md text-muted-foreground">From a new beginning to a complete transformation, every space is considered around how you want to live.</p></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => <article key={service.title} className="group overflow-hidden rounded-md border border-border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><img src={service.image} width={1200} height={912} loading="lazy" alt={service.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 font-mono text-xs backdrop-blur">0{index + 1}</span></div><div className="p-6"><h3 className="font-display text-2xl font-semibold leading-tight">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{service.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="relative h-[72svh] min-h-[560px] overflow-hidden" aria-label="The Hyland landscape experience">
        <img src={parallaxImage} width={1920} height={1088} loading="lazy" alt="Immersive garden path leading through layered planting" className="absolute inset-0 h-[115%] w-full object-cover" style={{ transform: `translate3d(0, ${parallax * 0.32}px, 0) scale(1.04)` }} />
        <div className="parallax-shade absolute inset-0" />
        <div className="relative flex h-full items-center justify-center overflow-hidden">
          <p className="select-none font-display text-[20vw] font-semibold leading-none text-hero/90 mix-blend-soft-light md:text-[16vw]" style={{ transform: `translate3d(0, ${-parallax}px, 0)` }}>HYLAND</p>
          <p className="absolute bottom-10 text-xs font-semibold uppercase tracking-[0.28em] text-hero">Landscapes made personal</p>
        </div>
      </section>

      <section id="projects" className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div><p className="section-kicker">Bespoke by design</p><h2 className="section-title mt-4">A landscape shaped around you.</h2><p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Professionally designed gardens are tailor-made for you and your family to create years of memories.</p><Button asChild variant="outline" className="mt-8"><a href="tel:07866256464">Discuss your garden <ArrowUpRight /></a></Button></div>
          <img src={gardenDesign} width={1408} height={1008} loading="lazy" alt="Bespoke landscaped garden with lawn, studio and curved stone path" className="aspect-[7/5] w-full rounded-md object-cover" />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1240px] grid-cols-2 gap-3 px-5 md:px-8 lg:grid-cols-4">
          {[gardenNewHome, gardenMakeover, gardenLowMaintenance, parallaxImage].map((image, index) => <figure key={image} className={`${index === 0 ? "col-span-2 lg:col-span-2" : ""} group relative overflow-hidden rounded-md`}><img src={image} width={1200} height={912} loading="lazy" alt={["Vibrant garden with water feature", "Country garden transformation", "Contemporary low-maintenance landscape", "Formal garden path and pavilion"][index]} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></figure>)}
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8"><div className="mb-12 text-center"><p className="section-kicker justify-center">What our customers say</p><h2 className="section-title mx-auto mt-4">Gardens remembered.<br />Service recommended.</h2></div><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-3">{testimonials.map(([name, quote]) => <figure key={name} className="flex min-h-80 flex-col bg-card p-7 md:p-9"><Quote className="size-7 text-primary" /><blockquote className="mt-8 flex-1 text-base leading-7 text-card-foreground">“{quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5 font-display font-semibold">{name}<span className="mt-1 block text-xs font-normal uppercase tracking-[0.18em] text-primary">Customer review</span></figcaption></figure>)}</div></div>
      </section>

      <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-20"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Free estimates & quotation</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">Ready to see what your garden could become?</h2></div><Button asChild size="lg" className="h-14 shrink-0 bg-background px-7 text-foreground hover:bg-background/90"><a href="tel:07866256464"><Phone /> 07866 256 464</a></Button></div></section>

      <footer className="bg-footer py-12 text-footer-foreground"><div className="mx-auto max-w-[1240px] px-5 md:px-8"><div className="flex flex-col gap-10 border-b border-footer-border pb-10 md:flex-row md:items-start md:justify-between"><Brand footer /><nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer navigation">{navItems.map(([label, href]) => <a key={href} href={href} className="text-sm text-footer-muted hover:text-footer-foreground">{label}</a>)}</nav></div><div className="flex flex-col gap-3 pt-6 text-xs text-footer-muted md:flex-row md:items-center md:justify-between"><p>© Hyland Landscapes</p><a href="tel:07866256464" className="hover:text-footer-foreground">07866 256 464</a></div></div></footer>
    </main>
  );
}
