type WhatsAppFloatProps = {
  hidden?: boolean;
};

export function WhatsAppFloat({ hidden = false }: WhatsAppFloatProps) {
  if (hidden) return null;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/447783686427"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with 4S Builders LTD"
        className="whatsapp-float group relative flex items-center justify-center"
      >
        {/* Subtle glowing animated pulse behind button */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/40 opacity-70 duration-1000 pointer-events-none" />

        {/* Floating tooltip badge */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3.5 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-950/95 px-3.5 py-2 text-xs font-extrabold tracking-wide text-white shadow-xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 sm:block opacity-0 translate-x-2 border border-slate-800">
          <span className="mr-1.5 inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
          Chat on WhatsApp
        </span>

        {/* WhatsApp Button Circle */}
        <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] ring-4 ring-white transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)]">
          <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.15h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </span>
      </a>
    </aside>
  );
}
