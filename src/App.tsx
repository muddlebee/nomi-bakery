import type { CSSProperties } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <ellipse cx="12" cy="17" rx="5" ry="4" />
      <circle cx="6.5" cy="10.5" r="2.2" />
      <circle cx="12" cy="8.5" r="2.2" />
      <circle cx="17.5" cy="10.5" r="2.2" />
    </svg>
  );
}

function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 2 L11.2 8.8 L18 10 L11.2 11.2 L10 18 L8.8 11.2 L2 10 L8.8 8.8 Z" />
    </svg>
  );
}

function CatFaceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M8 20 L6 8 L14 14 Z" fill="currentColor" stroke="none" opacity="0.7" />
      <path d="M32 20 L34 8 L26 14 Z" fill="currentColor" stroke="none" opacity="0.7" />
      <ellipse cx="20" cy="24" rx="13" ry="10" />
      <circle cx="15" cy="22" r="1.8" fill="currentColor" />
      <circle cx="25" cy="22" r="1.8" fill="currentColor" />
      <path d="M16.5 28 Q20 31 23.5 28" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21C12 21 4 15 4 9a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 12-8 12z" />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["HOME", "ABOUT", "MENU", "GALLERY", "CONTACT"] as const;

function PrimaryNav({
  className,
  linkGapClass = "gap-5 sm:gap-6 lg:gap-8",
  textClass = "text-[11px] font-medium tracking-[0.18em] sm:text-[11.5px] lg:text-xs font-sans",
}: {
  className?: string;
  linkGapClass?: string;
  textClass?: string;
}) {
  return (
    <nav className={`flex items-center justify-center ${linkGapClass} ${textClass} ${className ?? ""}`} aria-label="Primary">
      {NAV_LINKS.map((label) => {
        const active = label === "HOME";
        return (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className={`flex shrink-0 flex-col items-center gap-1 uppercase transition ${active ? "text-[#f0c06a]" : "text-white/85 hover:text-white"}`}
          >
            <span className="flex h-4 w-full items-end justify-center" aria-hidden>
              {active ? <PawIcon className="h-3 w-3 nomi-float-slow text-[#f0c06a]" /> : null}
            </span>
            <span className={`leading-none ${active ? "border-b border-[#f0c06a] pb-0.5" : ""}`}>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function VisitUsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EACF9E] px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-[#5a4530] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition hover:bg-[#F6EBC9] sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.13em] md:px-6 md:py-3 md:text-xs font-sans ${className ?? ""}`}
    >
      <PawIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
      VISIT US
    </button>
  );
}

function LogoWordmark({ variant = "compact" }: { variant?: "compact" | "featured" }) {
  const nameSize =
    variant === "featured"
      ? "text-[3rem] leading-[0.95] sm:text-[3.35rem] xl:text-[3.75rem]"
      : "text-[2.35rem] leading-[0.95] sm:text-[2.85rem]";
  const subSize = variant === "featured" ? "text-[11px] sm:text-xs" : "text-[10px] sm:text-[11px]";
  const jpSize = variant === "featured" ? "text-sm" : "text-[11px] sm:text-xs";

  return (
    <div className="flex min-w-0 flex-col text-left text-nomi-cream">
      <span className={`${jpSize} font-light tracking-[0.28em] text-nomi-cream/85`}>のみ</span>
      <span
        className={`font-display ${nameSize} mt-0.5 tracking-tight text-[#F6EBC9] drop-shadow-[0_0_26px_rgba(250,235,200,0.35)]`}
      >
        nomi
      </span>
      <span
        className={`${subSize} mt-1 font-medium uppercase leading-snug tracking-[0.28em] text-nomi-cream/92 drop-shadow-[0_1px_10px_rgba(7,13,24,0.75)] sm:tracking-[0.32em]`}
      >
        Minimal Bakeshop
      </span>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="relative isolate flex min-h-[100dvh] flex-col overflow-x-hidden font-sans md:h-screen md:overflow-hidden">
      {/* ── BACKGROUND SCENE (fixed: full viewport when mobile scrolls) ─ */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <img
          src="/background.png"
          alt=""
          className="h-full w-full object-cover object-[30%_52%] md:object-[38%_50%]"
        />
        {/* left-side readability fade so hero text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1420]/92 from-0% via-[#0d1420]/78 via-[42%] to-transparent to-[88%] md:from-[#0d1420]/88 md:via-[#0d1420]/70 md:via-[28%] md:to-[58%]" />
        {/* top bar darkening */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/60 via-transparent from-0% via-[22%] to-30%" />
        {/* bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-[18%] bg-gradient-to-t from-[#0a1220]/35 to-transparent" />
        {/* warm bloom right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_75%_58%,rgba(255,195,120,0.09),transparent_55%)]" />
      </div>

      {/* ── STARS (left sky) ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute left-[8%] top-[16%] z-[1] hidden sm:block" aria-hidden>
        <Sparkle className="absolute left-0 top-0 h-2.5 w-2.5 text-amber-100/80 nomi-star" />
        <Sparkle className="absolute left-14 top-10 h-2 w-2 text-white/50 nomi-star-delay" />
        <Sparkle className="absolute left-4 top-20 h-1.5 w-1.5 text-amber-50/70 nomi-star" style={{ animationDelay: "1.2s" }} />
        <Sparkle className="absolute left-26 top-4 h-1.5 w-1.5 text-white/40 nomi-star-delay" style={{ animationDelay: "0.4s" }} />
        <Sparkle className="absolute left-9 top-32 h-2 w-2 text-amber-100/55 nomi-star" style={{ animationDelay: "1.8s" }} />
      </div>

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <header className="relative z-20 flex-none px-4 py-3 sm:px-7 sm:py-4 md:px-10 lg:px-12 lg:py-5">
        {/* Mobile / tablet / small laptop: logo + CTA, then responsive nav */}
        <div className="mx-auto max-w-[1180px] xl:hidden">
          <div className="flex items-center justify-between gap-3">
            <a href="#home" className="flex min-w-0 shrink items-center outline-none ring-[#f0c06a]/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1420]/80">
              <LogoWordmark variant="compact" />
            </a>
            <VisitUsButton />
          </div>
          <PrimaryNav
            className="mt-3 justify-start overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:overflow-visible md:pb-0"
            linkGapClass="gap-4 sm:gap-5 md:gap-6"
            textClass="font-sans text-[9px] font-medium tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em] md:text-[11px] md:tracking-[0.17em]"
          />
        </div>

        {/* Desktop: centered nav between logo and CTA */}
        <div className="mx-auto hidden w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-x-6 gap-y-3 xl:grid xl:gap-x-8">
          <a href="#home" className="flex shrink-0 justify-self-start self-center outline-none ring-[#f0c06a]/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1420]/80">
            <LogoWordmark variant="featured" />
          </a>
          <PrimaryNav className="col-start-2 self-center" />
          <VisitUsButton className="col-start-3 justify-self-end self-center" />
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <main className="relative z-10 flex min-h-0 flex-1 items-center px-4 py-8 sm:px-7 md:px-10 md:py-10 lg:px-12 lg:py-0">
        <div className="mx-auto w-full max-w-[1180px]">
          <section className="relative max-w-[430px] max-md:max-w-none" id="home">
            {/* Deco: cat outline */}
            <CatFaceIcon className="absolute -right-4 -top-6 h-8 w-8 text-white/20 sm:-right-6 sm:-top-8 sm:h-10 sm:w-10" />
            <HeartIcon className="absolute -left-3 top-[72%] hidden h-5 w-5 text-white/25 min-[400px]:block sm:-left-4 sm:top-[70%] sm:h-6 sm:w-6" />
            <Sparkle className="absolute right-[12%] bottom-4 h-2.5 w-2.5 text-amber-100/60 nomi-star sm:right-[15%] sm:bottom-6 sm:h-3 sm:w-3" />

            <h1 className="font-display text-[2rem] font-normal leading-[1.08] tracking-[-0.015em] text-[#F6EBC9] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] min-[400px]:text-[2.25rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.4rem]">
              <span className="block font-normal">Good coffee.</span>
              <span className="mt-1 block font-medium">Warm bread.</span>
              <span className="mt-1 block font-bold text-[#e9a99a] drop-shadow-[0_2px_20px_rgba(233,169,154,0.3)]">
                Happy cats.<span className="ml-2 inline-block translate-y-0.5 text-[0.6em]"><PawIcon className="inline h-6 w-6 align-middle sm:h-7 sm:w-7" /></span>
              </span>
            </h1>

            <p className="mt-5 max-w-[360px] rounded-xl bg-[#0b1220]/44 px-3 py-2 text-[14px] font-light leading-relaxed tracking-[0.005em] text-[#f6ebc9]/95 shadow-[0_6px_20px_rgba(0,0,0,0.28)] backdrop-blur-[1px] sm:mt-6 sm:text-[15px]">
              A cozy bakery café inspired by minimalism, nature, and nostalgia.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#EACF9E] px-7 py-3.5 text-[13px] font-semibold tracking-[0.11em] text-[#5a4530] shadow-[0_6px_28px_rgba(0,0,0,0.3)] transition hover:bg-[#F6EBC9] sm:w-auto"
              >
                <CatFaceIcon className="h-6 w-6 text-[#5a4530]" />
                OUR STORY
              </button>
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-[0.1em] text-white transition hover:text-[#e9a99a] sm:justify-start"
              >
                EXPLORE MENU
                <span className="transition group-hover:translate-x-1" aria-hidden>→</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
