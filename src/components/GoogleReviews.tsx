import { Star, CheckCircle, Quote, ThumbsUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
      />
    </svg>
  );
}

const allReviews = [
  {
    id: 1,
    name: "Liaqat Haydari",
    source: "Google Review",
    isGoogle: true,
    initial: "L",
    avatarBg: "bg-blue-600",
    meta: "2 reviews • 2 years ago",
    project: "Roofing Work",
    pillTheme: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    quote: "He done my roof very clean job and reliable people",
    ownerResponse: "Thanks",
  },
  {
    id: 2,
    name: "John Doe",
    source: "Verified UK Homeowner",
    isGoogle: false,
    initial: "J",
    avatarBg: "bg-emerald-600",
    meta: "Coventry Homeowner",
    project: "Roofing & Ventilation",
    pillTheme: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    quote:
      "Really great service and price. I stayed while the roof work and ventilation tests were carried out and Yunus explained everything that was happening and made the whole experience really interesting. Just lovely people to deal with and I wish other companies were more like this 🙂",
    ownerResponse: null,
  },
  {
    id: 3,
    name: "Satpal Paul",
    source: "Google Review",
    isGoogle: true,
    initial: "S",
    avatarBg: "bg-emerald-600",
    meta: "2 reviews • 2 years ago",
    project: "House Extension",
    pillTheme: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    quote: "Done my extension. Very satisfied",
    ownerResponse: null,
  },
  {
    id: 4,
    name: "Henry Dav",
    source: "Verified UK Homeowner",
    isGoogle: false,
    initial: "H",
    avatarBg: "bg-amber-600",
    meta: "Warwickshire Homeowner",
    project: "Warm Roof Replacement",
    pillTheme: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    quote:
      "I really love our new conservatory roof. It looks great and we have noticed a difference in the temperature of the whole house right away. The fitters were great and even though it was snowing on the day, they worked non stop and were polite, professional and cleaned the whole area. Can definitely recommend this company. Well worth the money to gain an extra room.",
    ownerResponse: null,
  },
  {
    id: 5,
    name: "Jatin Jazz",
    source: "Google Review",
    isGoogle: true,
    initial: "J",
    avatarBg: "bg-amber-600",
    meta: "12 reviews • 2 years ago",
    project: "Full House Renovation",
    pillTheme: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    quote: "Done full House renovation. Great job.thanks",
    ownerResponse: null,
  },
  {
    id: 6,
    name: "Sourabh Kaindal",
    source: "Google Review",
    isGoogle: true,
    initial: "S",
    avatarBg: "bg-purple-600",
    meta: "4 reviews • 2 years ago",
    project: "Team Craftsmanship",
    pillTheme: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    quote: "Done brilliant job. Great team work",
    ownerResponse: null,
  },
  {
    id: 7,
    name: "Robert Frank",
    source: "Verified UK Homeowner",
    isGoogle: false,
    initial: "R",
    avatarBg: "bg-sky-600",
    meta: "Solihull Homeowner",
    project: "Solid Roof Conversion",
    pillTheme: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    quote:
      "I was immediately impressed by the friendly response of this company and the fact there was no pressure to buy. The work was carried out by 2 polite hardworking fitters who completed the roof and cleaning up after themselves within a morning. The finished job looks great and I now have a room I can use in winter and hardly any noise from stormy rain.",
    ownerResponse: null,
  },
];

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-slate-950 py-14 md:py-20 text-white"
      aria-label="Customer Reviews and Google Testimonials"
    >
      {/* 4S signature multi-color ribbon along the top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-400 via-orange-500 to-red-500" />

      {/* Header with Google 5.0 Rating Badge */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 mb-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          {/* Google 5.0 Rating Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 shadow-md backdrop-blur-md">
            <GoogleIcon className="size-4" />
            <span className="text-xs font-bold text-slate-200">5.0 Star Rated on Google</span>
            <div className="flex items-center gap-0.5 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-emerald-400 border-l border-slate-700 pl-2">
              100% Satisfaction
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Our Clients Say About 4S Builders
          </h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Real feedback from verified homeowners and Google reviews across Coventry, West
            Midlands, and nationwide UK.
          </p>
        </Reveal>
      </div>

      {/* Fluid Continuous Running Marquee */}
      <div className="reviews-marquee relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent md:w-32" />

        <div className="reviews-marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={`flex gap-6 pr-6 ${copy === 1 ? "reviews-marquee-clone" : ""}`}
            >
              {allReviews.map((t) => (
                <figure
                  key={`${t.name}-${copy}-${t.id}`}
                  className="flex h-[330px] w-[min(88vw,420px)] shrink-0 flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-900/80 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900"
                >
                  <div>
                    {/* Top Row: Avatar & Name + Source Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid size-10 place-items-center rounded-full ${t.avatarBg} text-white font-bold text-sm shadow-md shrink-0`}
                        >
                          {t.initial}
                        </div>
                        <div>
                          <h3 className="font-display text-base font-bold text-white leading-tight">
                            {t.name}
                          </h3>
                          <p className="text-[11px] text-slate-400 mt-0.5">{t.meta}</p>
                        </div>
                      </div>

                      {t.isGoogle ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-bold text-slate-200">
                          <GoogleIcon className="size-3.5" />
                          <span>Google</span>
                        </span>
                      ) : (
                        <Quote className="size-5 text-blue-400/40 shrink-0" aria-hidden="true" />
                      )}
                    </div>

                    {/* Stars + Project Tag */}
                    <div className="mt-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-[#FBBC05]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${t.pillTheme}`}
                      >
                        {t.project}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="mt-3.5 text-sm leading-relaxed text-slate-200 line-clamp-4">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Bottom Footer: Owner response or verified stamp */}
                  {t.ownerResponse ? (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-[11px]">
                      <span className="font-semibold text-blue-400">
                        Response from 4S Builders LTD:{" "}
                      </span>
                      <span className="text-slate-300">“{t.ownerResponse}”</span>
                    </div>
                  ) : (
                    <figcaption className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle className="size-3 text-emerald-400" />
                        {t.source}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="size-3 text-blue-400" /> Recommended
                      </span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
