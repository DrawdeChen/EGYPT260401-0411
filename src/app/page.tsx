"use client";

import { useState, useEffect } from "react";
import {
  tourInfo,
  outboundFlights,
  returnFlights,
  domesticFlights,
  accommodations,
  itinerary,
  inclusions,
  exclusions,
  importantNotes,
  emergencyContacts,
  arabicPhrases,
  souvenirs,
  bargainingTips,
  type FlightLeg,
} from "@/data/tour";

/* ───────────── Dual Clock ───────────── */
function DualClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const fmt = (tz: string) =>
    now.toLocaleTimeString("zh-TW", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[10px] text-sand/60 md:gap-3 md:px-2.5 md:text-[11px]">
      <span>🇹🇼 {fmt("Asia/Taipei")}</span>
      <span className="text-gold/30">|</span>
      <span>🇪🇬 {fmt("Africa/Cairo")}</span>
    </div>
  );
}

/* ───────────── Navigation ───────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#itinerary", label: "每日行程" },
    { href: "#flights", label: "航班資訊" },
    { href: "#hotels", label: "住宿安排" },
    { href: "#pricing", label: "費用說明" },
    { href: "#currency", label: "匯率換算" },
    { href: "#shopping", label: "購物攻略" },
    { href: "#notes", label: "行前須知" },
    { href: "#contact", label: "聯絡資訊" },
  ];

  return (
    <nav className="nav-glass fixed top-0 right-0 left-0 z-50 border-b border-gold/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <span className="font-heading text-lg font-bold text-gold">
            Egypt 2026
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-sand transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side: clock + mobile toggle */}
        <div className="flex items-center gap-3">
          <DualClock />
          <button
            onClick={() => setOpen(!open)}
            className="text-sand md:hidden"
            aria-label="Toggle menu"
          >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gold/10 bg-nile/95 px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-sand transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ───────────── Hero ───────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-nile px-4 pt-16 pb-36 text-center md:min-h-[85vh] md:pb-56">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5" style={{ fontFamily: "'Noto Sans Egyptian Hieroglyphs', serif" }}>
        <div className="absolute top-20 left-10 text-[120px] leading-none select-none">
          𓃭
        </div>
        <div className="absolute top-40 right-10 text-[100px] leading-none select-none">
          𓋹
        </div>
        <div className="absolute bottom-20 left-1/4 text-[80px] leading-none select-none">
          𓂋
        </div>
        <div className="absolute right-1/4 bottom-40 text-[90px] leading-none select-none">
          𓅃
        </div>
        <div className="absolute top-1/3 left-1/2 text-[110px] leading-none select-none">
          𓊝
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nile via-nile/90 to-nile-light" />

      {/* Stars across entire hero */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* Top band - brightest */}
          <circle cx="2" cy="3" r="0.15" fill="#F5ECD7" opacity="0.6" />
          <circle cx="7" cy="8" r="0.2" fill="#F5ECD7" opacity="0.55" />
          <circle cx="11" cy="2" r="0.12" fill="#F5ECD7" opacity="0.5" />
          <circle cx="16" cy="12" r="0.1" fill="#F5ECD7" opacity="0.45" />
          <circle cx="20" cy="4" r="0.18" fill="#F5ECD7" opacity="0.6" />
          <circle cx="24" cy="15" r="0.12" fill="#F5ECD7" opacity="0.4" />
          <circle cx="28" cy="7" r="0.15" fill="#F5ECD7" opacity="0.55" />
          <circle cx="33" cy="3" r="0.1" fill="#F5ECD7" opacity="0.5" />
          <circle cx="37" cy="11" r="0.2" fill="#F5ECD7" opacity="0.65" />
          <circle cx="42" cy="5" r="0.12" fill="#F5ECD7" opacity="0.45" />
          <circle cx="46" cy="14" r="0.15" fill="#F5ECD7" opacity="0.5" />
          <circle cx="51" cy="2" r="0.18" fill="#F5ECD7" opacity="0.6" />
          <circle cx="55" cy="9" r="0.1" fill="#F5ECD7" opacity="0.4" />
          <circle cx="59" cy="16" r="0.12" fill="#F5ECD7" opacity="0.5" />
          <circle cx="64" cy="4" r="0.2" fill="#F5ECD7" opacity="0.65" />
          <circle cx="68" cy="12" r="0.1" fill="#F5ECD7" opacity="0.45" />
          <circle cx="73" cy="6" r="0.15" fill="#F5ECD7" opacity="0.55" />
          <circle cx="77" cy="15" r="0.12" fill="#F5ECD7" opacity="0.4" />
          <circle cx="82" cy="3" r="0.18" fill="#F5ECD7" opacity="0.6" />
          <circle cx="86" cy="10" r="0.1" fill="#F5ECD7" opacity="0.5" />
          <circle cx="91" cy="7" r="0.15" fill="#F5ECD7" opacity="0.55" />
          <circle cx="96" cy="13" r="0.12" fill="#F5ECD7" opacity="0.45" />
          <circle cx="99" cy="4" r="0.1" fill="#F5ECD7" opacity="0.5" />
          {/* Mid-upper band */}
          <circle cx="3" cy="20" r="0.12" fill="#F5ECD7" opacity="0.5" />
          <circle cx="9" cy="25" r="0.15" fill="#F5ECD7" opacity="0.45" />
          <circle cx="14" cy="18" r="0.1" fill="#F5ECD7" opacity="0.4" />
          <circle cx="19" cy="28" r="0.18" fill="#F5ECD7" opacity="0.5" />
          <circle cx="26" cy="22" r="0.12" fill="#F5ECD7" opacity="0.45" />
          <circle cx="31" cy="30" r="0.1" fill="#F5ECD7" opacity="0.35" />
          <circle cx="36" cy="19" r="0.15" fill="#F5ECD7" opacity="0.5" />
          <circle cx="43" cy="27" r="0.1" fill="#F5ECD7" opacity="0.4" />
          <circle cx="48" cy="21" r="0.2" fill="#F5ECD7" opacity="0.55" />
          <circle cx="53" cy="32" r="0.12" fill="#F5ECD7" opacity="0.35" />
          <circle cx="60" cy="24" r="0.15" fill="#F5ECD7" opacity="0.5" />
          <circle cx="66" cy="18" r="0.1" fill="#F5ECD7" opacity="0.45" />
          <circle cx="71" cy="29" r="0.12" fill="#F5ECD7" opacity="0.4" />
          <circle cx="76" cy="20" r="0.18" fill="#F5ECD7" opacity="0.5" />
          <circle cx="83" cy="26" r="0.1" fill="#F5ECD7" opacity="0.4" />
          <circle cx="89" cy="19" r="0.15" fill="#F5ECD7" opacity="0.5" />
          <circle cx="94" cy="28" r="0.12" fill="#F5ECD7" opacity="0.35" />
          {/* Mid band */}
          <circle cx="5" cy="36" r="0.1" fill="#F5ECD7" opacity="0.4" />
          <circle cx="13" cy="42" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="21" cy="38" r="0.12" fill="#F5ECD7" opacity="0.4" />
          <circle cx="29" cy="44" r="0.1" fill="#F5ECD7" opacity="0.3" />
          <circle cx="35" cy="35" r="0.15" fill="#F5ECD7" opacity="0.45" />
          <circle cx="41" cy="46" r="0.1" fill="#F5ECD7" opacity="0.3" />
          <circle cx="50" cy="40" r="0.18" fill="#F5ECD7" opacity="0.4" />
          <circle cx="57" cy="34" r="0.1" fill="#F5ECD7" opacity="0.35" />
          <circle cx="63" cy="47" r="0.12" fill="#F5ECD7" opacity="0.3" />
          <circle cx="70" cy="37" r="0.15" fill="#F5ECD7" opacity="0.4" />
          <circle cx="79" cy="43" r="0.1" fill="#F5ECD7" opacity="0.3" />
          <circle cx="87" cy="36" r="0.12" fill="#F5ECD7" opacity="0.4" />
          <circle cx="93" cy="45" r="0.15" fill="#F5ECD7" opacity="0.3" />
          {/* Lower band - fading */}
          <circle cx="8" cy="53" r="0.1" fill="#F5ECD7" opacity="0.25" />
          <circle cx="18" cy="58" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="32" cy="55" r="0.1" fill="#F5ECD7" opacity="0.25" />
          <circle cx="44" cy="52" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="56" cy="57" r="0.1" fill="#F5ECD7" opacity="0.2" />
          <circle cx="67" cy="54" r="0.12" fill="#F5ECD7" opacity="0.25" />
          <circle cx="78" cy="56" r="0.1" fill="#F5ECD7" opacity="0.2" />
          <circle cx="90" cy="52" r="0.12" fill="#F5ECD7" opacity="0.2" />
          {/* Bottom scattered - y 43-68, all devices */}
          <circle cx="3" cy="45" r="0.18" fill="#F5ECD7" opacity="0.4" />
          <circle cx="10" cy="62" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="14" cy="48" r="0.12" fill="#F5ECD7" opacity="0.35" />
          <circle cx="15" cy="56" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="27" cy="43" r="0.2" fill="#F5ECD7" opacity="0.4" />
          <circle cx="33" cy="67" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="37" cy="60" r="0.18" fill="#F5ECD7" opacity="0.3" />
          <circle cx="39" cy="52" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="47" cy="68" r="0.15" fill="#F5ECD7" opacity="0.25" />
          <circle cx="50" cy="47" r="0.18" fill="#F5ECD7" opacity="0.45" />
          <circle cx="55" cy="64" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="57" cy="43" r="0.12" fill="#F5ECD7" opacity="0.35" />
          <circle cx="61" cy="55" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="68" cy="53" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="74" cy="44" r="0.2" fill="#F5ECD7" opacity="0.4" />
          <circle cx="79" cy="66" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="82" cy="49" r="0.12" fill="#F5ECD7" opacity="0.35" />
          <circle cx="85" cy="58" r="0.15" fill="#F5ECD7" opacity="0.35" />
          <circle cx="92" cy="63" r="0.12" fill="#F5ECD7" opacity="0.3" />
          <circle cx="96" cy="46" r="0.18" fill="#F5ECD7" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="mt-10 mb-4 text-xs font-medium tracking-[0.2em] text-gold/80 uppercase md:mt-0 md:text-sm md:tracking-[0.3em]">
          {tourInfo.agency}
        </p>

        <h1 className="gold-shimmer mb-4 font-heading text-4xl font-bold whitespace-nowrap md:text-7xl">
          {tourInfo.title}
        </h1>

        <p className="mb-6 font-heading text-base text-sand/90 italic md:text-2xl">
          {tourInfo.subtitle}
        </p>

        <div className="wing-divider mb-8 text-gold" style={{ fontFamily: "'Noto Sans Egyptian Hieroglyphs', serif" }}>𓋹</div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sand/70">
          <span className="flex items-center gap-2">
            <span className="text-gold">𓇳</span>
            {tourInfo.dateRange}
          </span>
          <span className="hidden text-gold/30 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <span className="text-gold">𓀠</span>
            {tourInfo.totalDays} 天 {tourInfo.groupSize} 人
          </span>
        </div>

        <a
          href="#itinerary"
          className="relative z-20 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-3 text-gold transition-all hover:border-gold hover:bg-gold/20"
        >
          探索行程
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Mobile-only extra low stars */}
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="5" cy="70" r="0.18" fill="#F5ECD7" opacity="0.3" />
          <circle cx="14" cy="76" r="0.15" fill="#F5ECD7" opacity="0.25" />
          <circle cx="23" cy="72" r="0.18" fill="#F5ECD7" opacity="0.3" />
          <circle cx="32" cy="78" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="40" cy="69" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="48" cy="75" r="0.18" fill="#F5ECD7" opacity="0.25" />
          <circle cx="56" cy="71" r="0.12" fill="#F5ECD7" opacity="0.3" />
          <circle cx="64" cy="77" r="0.15" fill="#F5ECD7" opacity="0.2" />
          <circle cx="72" cy="70" r="0.18" fill="#F5ECD7" opacity="0.3" />
          <circle cx="80" cy="76" r="0.12" fill="#F5ECD7" opacity="0.25" />
          <circle cx="88" cy="72" r="0.15" fill="#F5ECD7" opacity="0.3" />
          <circle cx="95" cy="78" r="0.18" fill="#F5ECD7" opacity="0.2" />
          <circle cx="10" cy="81" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="28" cy="83" r="0.15" fill="#F5ECD7" opacity="0.18" />
          <circle cx="36" cy="80" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="52" cy="84" r="0.15" fill="#F5ECD7" opacity="0.15" />
          <circle cx="60" cy="81" r="0.12" fill="#F5ECD7" opacity="0.2" />
          <circle cx="74" cy="85" r="0.15" fill="#F5ECD7" opacity="0.15" />
          <circle cx="84" cy="82" r="0.12" fill="#F5ECD7" opacity="0.18" />
          <circle cx="94" cy="84" r="0.15" fill="#F5ECD7" opacity="0.15" />
        </svg>
      </div>

      {/* Pyramid skyline + sand transition */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          viewBox="0 0 800 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Desert gradient behind pyramids */}
          <defs>
            <linearGradient id="pyramidLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A88B4A" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="pyramidShadow" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0C1B33" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Sand dune behind pyramids */}
          <path
            d="M0 210 Q200 195 400 205 Q600 215 800 200 V280 H0 Z"
            fill="#E8D5B7"
            opacity="0.3"
          />

          {/* Menkaure Pyramid - farthest, smallest, faintest */}
          <polygon points="540,230 620,145 700,230" fill="#C9A96E" opacity="0.12" />
          <polygon points="620,145 700,230 620,230" fill="#0C1B33" opacity="0.08" />

          {/* Khafre Pyramid - middle distance, medium */}
          <polygon points="380,230 520,75 660,230" fill="#C9A96E" opacity="0.22" />
          <polygon points="520,75 660,230 520,230" fill="#0C1B33" opacity="0.18" />

          {/* Great Pyramid (Khufu) - closest, largest, boldest */}
          <polygon points="200,230 380,55 560,230" fill="url(#pyramidLight)" />
          <polygon points="380,55 560,230 380,230" fill="url(#pyramidShadow)" />

          {/* Sand dune foreground - covers pyramid base */}
          <path
            d="M0 225 Q150 215 300 222 Q450 230 600 220 Q700 215 800 225 V280 H0 Z"
            fill="var(--color-papyrus)"
          />
        </svg>
      </div>
    </section>
  );
}

/* ───────────── Route Overview ───────────── */
function RouteOverview() {
  const stops = [
    { name: "開羅", nameEn: "Cairo", icon: "𓊝", days: "Day 1-2" },
    { name: "黑白沙漠", nameEn: "Desert", icon: "𓇼", days: "Day 3-4" },
    { name: "阿斯旺", nameEn: "Aswan", icon: "𓋹", days: "Day 5-6" },
    { name: "郵輪", nameEn: "Cruise", icon: "𓊛", days: "Day 6-8" },
    { name: "盧克索", nameEn: "Luxor", icon: "𓉐", days: "Day 8" },
    { name: "開羅", nameEn: "Cairo", icon: "𓊝", days: "Day 9" },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Mural background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url('/mural.jpg')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(245,236,215,0.71) 60%, rgba(245,236,215,0.71) 100%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle title="行程路線" subtitle="Route Overview" />

        {/* Desktop route */}
        <div className="hidden items-center justify-center md:flex">
          {stops.map((stop, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-papyrus text-2xl shadow-md">
                  {stop.icon}
                </div>
                <p className="mt-2 font-heading text-sm font-bold text-nile">
                  {stop.name}
                </p>
                <p className="text-xs text-nile/50">{stop.days}</p>
              </div>
              {i < stops.length - 1 && (
                <div className="mx-2 flex items-center text-gold/60">
                  <div className="h-px w-8 bg-gold/40 lg:w-16" />
                  <span className="text-xs">✦</span>
                  <div className="h-px w-8 bg-gold/40 lg:w-16" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile route */}
        <div className="flex flex-wrap justify-center gap-4 md:hidden">
          {stops.map((stop, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-papyrus text-lg">
                  {stop.icon}
                </div>
                <p className="mt-1 text-xs font-bold text-nile">{stop.name}</p>
              </div>
              {i < stops.length - 1 && (
                <span className="mt-[-16px] text-xs text-gold/40">→</span>
              )}
            </div>
          ))}
        </div>

        <RouteMap />
      </div>
    </section>
  );
}

/* ───────────── Section Title ───────────── */
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
        {subtitle}
      </p>
      <h2 className="font-heading text-3xl font-bold text-nile md:text-4xl">
        {title}
      </h2>
      <div className="wing-divider mt-3 text-sm text-gold/60">✦</div>
    </div>
  );
}

/* ───────────── Attraction Item (expandable) ───────────── */
function AttractionItem({
  attraction,
  isOpen,
  onToggle,
}: {
  attraction: (typeof itinerary)[number]["attractions"][number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const canExpand = !attraction.isActivity && attraction.description;

  return (
    <li className="group">
      <button
        onClick={() => canExpand && onToggle()}
        className={`flex w-full items-start gap-2 text-left text-sm ${
          canExpand
            ? "cursor-pointer hover:text-gold-dark"
            : "cursor-default"
        }`}
      >
        <span className="mt-0.5 shrink-0 text-gold">
          {canExpand ? (isOpen ? "▾" : "▸") : "·"}
        </span>
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-medium text-nile">{attraction.zh}</span>
          {!attraction.isActivity && (
            <span className="text-xs text-nile/45">{attraction.en}</span>
          )}
        </span>
      </button>

      {/* Expanded content */}
      {isOpen && canExpand && (
        <div className="ml-5 mt-2 mb-1 overflow-hidden rounded-xl border border-sand-light bg-papyrus/60 px-4 py-3">
          {/* Multi-language names */}
          <div className="mb-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-10 shrink-0 rounded bg-nile/10 px-1.5 py-0.5 text-center text-[10px] font-bold text-nile/60">
                中文
              </span>
              <span className="text-sm font-medium text-nile">
                {attraction.zh}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-10 shrink-0 rounded bg-nile/10 px-1.5 py-0.5 text-center text-[10px] font-bold text-nile/60">
                EN
              </span>
              <span className="text-sm text-nile/70">{attraction.en}</span>
            </div>
            {attraction.arabic && (
              <div className="flex items-start gap-2">
                <span className="mt-1 w-10 shrink-0 rounded bg-emerald/10 px-1.5 py-0.5 text-center text-[10px] font-bold text-emerald">
                  عربي
                </span>
                <div>
                  <p className="text-base leading-tight" dir="rtl">
                    {attraction.arabic}
                  </p>
                  {attraction.arabicRoman && (
                    <p className="mt-1 text-xs text-nile/40 italic">
                      {attraction.arabicRoman}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          {attraction.description && (
            <p className="border-t border-sand/60 pt-2 text-xs leading-relaxed text-nile/60">
              {attraction.description}
            </p>
          )}

          {/* Photo Tips */}
          {attraction.photoTips && (
            <div className="mt-2 rounded-lg border border-gold/20 bg-gold/5 px-3 py-2.5">
              <p className="mb-2 text-[10px] font-bold tracking-wider text-gold-dark uppercase">
                拍照建議
              </p>
              <ul className="space-y-1.5">
                {attraction.photoTips.split("｜").map((tip, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs leading-relaxed text-nile/55">
                    <span className="mt-px shrink-0">{tip.trim().slice(0, 2)}</span>
                    <span>{tip.trim().slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

/* ───────────── Day Card ───────────── */
function DayCard({ day }: { day: (typeof itinerary)[number] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dayColors: Record<number, string> = {
    1: "from-nile-light to-nile",
    2: "from-nile-light to-nile",
    3: "from-terracotta to-terracotta-light",
    4: "from-terracotta to-terracotta-light",
    5: "from-emerald to-emerald/80",
    6: "from-emerald to-emerald/80",
    7: "from-emerald to-emerald/80",
    8: "from-gold-dark to-gold",
    9: "from-nile-light to-nile",
  };

  return (
    <div className="day-card overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
      {/* Header */}
      <div
        className={`relative overflow-hidden bg-gradient-to-r ${dayColors[day.day] || "from-nile to-nile-light"} px-6 py-4 text-white`}
      >
        {/* Hieroglyph watermark */}
        <span
          className="pointer-events-none absolute -right-2 -bottom-2 text-[5rem] leading-none opacity-[0.08] md:text-[7rem]"
          style={{ fontFamily: "'Noto Sans Egyptian Hieroglyphs', serif" }}
        >
          {day.day === 1 && "𓊝"}
          {day.day === 2 && "𓁢"}
          {day.day === 3 && "𓇼"}
          {(day.day === 4 || day.day === 5) && "𓋹"}
          {day.day === 6 && "𓊛"}
          {day.day === 7 && "𓃭"}
          {day.day === 8 && "𓉐"}
          {day.day === 9 && "𓅃"}
        </span>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm opacity-80">
              Day {day.day} — {day.date}
            </span>
            <h3 className="font-heading text-xl font-bold md:text-2xl">
              {day.title}
            </h3>
          </div>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3">
          <p className="text-sm opacity-70">{day.subtitle}</p>
          {day.departureTime && (
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium">
              {day.departureTime}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5">
        {/* Attractions */}
        <div className="mb-4">
          <ul className="space-y-2">
            {day.attractions.map((a, i) => (
              <AttractionItem
                key={i}
                attraction={a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </div>

        {/* Meals & Hotel */}
        <div className="flex flex-wrap gap-4 border-t border-sand-light pt-4 text-xs text-nile/60">
          {(day.meals.breakfast || day.meals.lunch || day.meals.dinner) && (
            <div className="flex items-center gap-1">
              <span>🍽</span>
              {[
                day.meals.breakfast && `早: ${day.meals.breakfast}`,
                day.meals.lunch && `午: ${day.meals.lunch}`,
                day.meals.dinner && `晚: ${day.meals.dinner}`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </div>
          )}
          {day.hotel !== "—" && (
            <div className="flex items-center gap-1">
              <span>🏨</span>
              {day.hotel}
            </div>
          )}
        </div>

        {/* Extra details */}
        {day.details && day.details.length > 0 && (
          <div className="mt-3 text-xs text-nile/40">
            {day.details.map((d, i) => (
              <span key={i}>
                {i > 0 && " · "}
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────── Itinerary Section ───────────── */
function Itinerary() {
  return (
    <section id="itinerary" className="bg-papyrus py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="每日行程" subtitle="Daily Itinerary" />
        <div className="space-y-6">
          {itinerary.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Flight Leg Card ───────────── */
function FlightLegCard({ leg, index }: { leg: FlightLeg; index: number }) {
  return (
    <div className="relative rounded-xl border border-sand bg-white p-4 shadow-sm">
      {/* Step badge */}
      <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-nile text-xs font-bold text-gold">
        {index + 1}
      </div>

      {/* Header */}
      <div className="mb-3 flex flex-wrap items-center gap-2 pt-1">
        <span className="font-mono text-sm font-bold text-nile">
          {leg.flight}
        </span>
        <span className="text-xs text-nile/50">{leg.airline}</span>
        <span className="ml-auto rounded bg-nile/10 px-2 py-0.5 text-xs text-nile/60">
          {leg.date} ({leg.weekday})
        </span>
      </div>

      {/* Route visualization */}
      <div className="flex items-center gap-3">
        {/* Departure */}
        <div className="text-center">
          <p className="text-xl font-bold text-nile">{leg.departure}</p>
          <p className="text-xs text-nile/50">{leg.fromTerminal}</p>
        </div>

        {/* Line */}
        <div className="flex flex-1 flex-col items-center">
          <p className="mb-1 text-[10px] text-nile/40">{leg.duration}</p>
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-gold/40" />
            <span className="px-1 text-xs text-gold">✈</span>
            <div className="h-px flex-1 bg-gold/40" />
          </div>
        </div>

        {/* Arrival */}
        <div className="text-center">
          <p className="text-xl font-bold text-nile">{leg.arrival}</p>
          <p className="text-xs text-nile/50">{leg.toTerminal}</p>
        </div>
      </div>

      {/* Airport names */}
      <div className="mt-2 flex justify-between text-[11px] text-nile/45">
        <span className="max-w-[45%]">{leg.from}</span>
        <span className="max-w-[45%] text-right">{leg.to}</span>
      </div>
    </div>
  );
}

/* ───────────── Flights Section ───────────── */
function Flights() {
  return (
    <section id="flights" className="sand-texture bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="航班資訊" subtitle="Flight Information" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Outbound */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-nile">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald text-sm text-white">
                →
              </span>
              去程 04/01–02
            </h3>
            <div className="space-y-6">
              {outboundFlights.map((leg, i) => (
                <FlightLegCard key={leg.flight} leg={leg} index={i} />
              ))}
            </div>
            <p className="mt-3 text-xs text-nile/40">
              ⓘ 4/1 晚上飛上海，當晚轉機凌晨飛開羅，4/2 早上抵達
            </p>
          </div>

          {/* Return */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-nile">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-sm text-white">
                ←
              </span>
              回程 04/10–11
            </h3>
            <div className="space-y-6">
              {returnFlights.map((leg, i) => (
                <FlightLegCard key={leg.flight} leg={leg} index={i} />
              ))}
            </div>
            <p className="mt-3 text-xs text-nile/40">
              ⓘ 4/10 下午飛上海，4/11 早上轉機回台北松山
            </p>
          </div>
        </div>

        {/* Domestic flights */}
        <div className="mt-16">
          <h3 className="mb-6 font-heading text-xl font-bold text-nile">
            埃及國內線
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {domesticFlights.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-sand bg-papyrus/50 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nile text-lg text-gold">
                  ✈
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-nile">{f.route}</p>
                    <span className="rounded bg-nile/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-nile/60">{f.flight}</span>
                  </div>
                  <p className="text-xs text-nile/50">
                    {f.date} · {f.time} · {f.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Accommodations Section ───────────── */
function Accommodations() {
  return (
    <section id="hotels" className="bg-papyrus py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="住宿安排" subtitle="Accommodations" />

        {/* Summary bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full bg-nile/10 px-4 py-1.5 text-nile/70">
            共 <strong className="text-nile">{accommodations.reduce((s, a) => s + a.nights, 0)}</strong> 晚
          </span>
          <span className="rounded-full bg-gold/10 px-4 py-1.5 text-nile/70">
            03 Twin + 01 King 房型配置
          </span>
        </div>

        <div className="space-y-4">
          {accommodations.map((acc, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-sand bg-white shadow-sm"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left: City badge */}
                <div className="flex items-center gap-3 border-b border-sand bg-nile/5 px-5 py-3 sm:w-44 sm:flex-col sm:justify-center sm:border-r sm:border-b-0 sm:py-4">
                  <span className="text-2xl">
                    {acc.city.includes("郵輪") && "🚢"}
                    {acc.city.includes("沙漠") && "⛺"}
                    {acc.city.includes("開羅") && "🏨"}
                  </span>
                  <div className="sm:text-center">
                    <p className="font-heading text-sm font-bold text-nile">
                      {acc.city}
                    </p>
                    <p className="text-xs text-nile/50">
                      {acc.nights} 晚
                    </p>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex-1 px-5 py-4">
                  <h4 className="mb-2 font-heading text-base font-bold text-nile">
                    {acc.hotel}
                  </h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-nile/60">
                    <span className="flex items-center gap-1.5">
                      <span className="text-gold">𓇳</span>
                      {acc.checkIn} → {acc.checkOut}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-gold">𓉐</span>
                      {acc.rooms}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-gold">🍽</span>
                      {acc.basis}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Pricing Section ───────────── */
function Pricing() {
  return (
    <section id="pricing" className="bg-nile py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
            Cost Breakdown
          </p>
          <h2 className="font-heading text-3xl font-bold text-gold md:text-4xl">
            費用說明
          </h2>
          <div className="wing-divider mt-3 text-sm text-gold/40">✦</div>
        </div>

        {/* Price + breakdown compact */}
        <div className="mx-auto mb-10 max-w-sm">
          <div className="mb-4 text-center">
            <p className="font-heading text-3xl font-bold text-gold">
              {tourInfo.price.perPerson}
            </p>
            <p className="mt-1 text-xs text-sand/50">
              每人團費 · 8 人成團 · {tourInfo.price.paymentNote}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-gold/15 text-xs">
            <div className="flex items-center justify-between border-b border-gold/10 bg-gold/5 px-4 py-2">
              <span className="text-sand/60">定金</span>
              <span className="font-mono font-medium text-gold">{tourInfo.price.deposit}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gold/10 bg-gold/5 px-4 py-2">
              <span className="text-sand/60">內陸機票</span>
              <span className="font-mono font-medium text-gold">{tourInfo.price.domesticFlight}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gold/10 bg-gold/5 px-4 py-2">
              <span className="text-sand/60">尾款</span>
              <span className="font-mono font-medium text-gold">{tourInfo.price.balance}</span>
            </div>
            <div className="bg-gold/5 px-4 py-1.5 text-[10px] text-sand/35">
              ※ {tourInfo.price.balanceNote}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Inclusions */}
          <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-emerald">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald text-sm text-white">
                ✓
              </span>
              費用包含
            </h3>
            <ul className="space-y-2">
              {inclusions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-sand/80"
                >
                  <span className="mt-0.5 text-emerald/60">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="rounded-2xl border border-terracotta/30 bg-terracotta/10 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-terracotta-light">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-sm text-white">
                ✕
              </span>
              費用不含
            </h3>
            <ul className="space-y-2">
              {exclusions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-sand/80"
                >
                  <span className="mt-0.5 text-terracotta/60">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Currency Converter ───────────── */
function CurrencyConverter() {
  const fallbackRates = { USD: 1, EGP: 50.7, TWD: 32.0 };
  const [rates, setRates] = useState(fallbackRates);
  const [lastUpdate, setLastUpdate] = useState("");
  const [values, setValues] = useState({ USD: "1", EGP: "", TWD: "" });
  const [source, setSource] = useState<"fallback" | "live">("fallback");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates?.EGP && data?.rates?.TWD) {
          setRates({ USD: 1, EGP: data.rates.EGP, TWD: data.rates.TWD });
          setSource("live");
          setLastUpdate(
            new Date(data.time_last_update_utc).toLocaleDateString("zh-TW", {
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          );
        }
      })
      .catch(() => {});
  }, []);

  // initialize EGP/TWD from default USD=1
  useEffect(() => {
    handleChange("USD", "1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  type Currency = "USD" | "EGP" | "TWD";

  const handleChange = (currency: Currency, value: string) => {
    const num = parseFloat(value);
    if (value === "" || isNaN(num)) {
      setValues({ USD: "", EGP: "", TWD: "" });
      if (value !== "") setValues((v) => ({ ...v, [currency]: value }));
      return;
    }
    const inUSD = num / rates[currency];
    setValues({
      USD: currency === "USD" ? value : inUSD.toFixed(2),
      EGP: currency === "EGP" ? value : (inUSD * rates.EGP).toFixed(2),
      TWD: currency === "TWD" ? value : (inUSD * rates.TWD).toFixed(2),
    });
  };

  const currencies: { key: Currency; label: string; flag: string; symbol: string }[] = [
    { key: "TWD", label: "新台幣", flag: "🇹🇼", symbol: "NT$" },
    { key: "USD", label: "美金", flag: "🇺🇸", symbol: "$" },
    { key: "EGP", label: "埃及鎊", flag: "🇪🇬", symbol: "E£" },
  ];

  return (
    <section id="currency" className="bg-papyrus py-12 md:py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="mb-8 text-center">
          <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
            Currency Converter
          </p>
          <h2 className="font-heading text-2xl font-bold text-nile md:text-3xl">
            匯率換算
          </h2>
          <div className="wing-divider mt-3 text-sm text-gold/60">✦</div>
        </div>

        <div className="rounded-2xl border border-sand bg-white p-5 shadow-sm">
          <div className="space-y-3">
            {currencies.map((c) => (
              <div key={c.key} className="flex items-center gap-3">
                <div className="w-14 shrink-0">
                  <p className="text-xs font-bold text-nile">{c.key}</p>
                  <p className="text-[10px] text-nile/40">{c.label}</p>
                </div>
                <div className="relative flex-1">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs text-nile/30">
                    {c.symbol}
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={values[c.key]}
                    onChange={(e) => handleChange(c.key, e.target.value)}
                    className="w-full rounded-lg border border-sand bg-papyrus/50 py-2.5 pr-3 pl-10 text-right text-sm font-medium text-nile outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                    placeholder="0.00"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-sand-light pt-3 text-[10px] text-nile/35">
            <span>
              {source === "live" ? "即時匯率" : "參考匯率"}
              {lastUpdate && ` · 更新 ${lastUpdate}`}
            </span>
            <span>
              1 USD ≈ {rates.EGP.toFixed(1)} EGP ≈ {rates.TWD.toFixed(1)} TWD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Shopping Guide ───────────── */
function ShoppingGuide() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section id="shopping" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="購物攻略" subtitle="Shopping Guide" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Souvenirs */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-nile">
              🛍️ 必買紀念品 & 伴手禮
            </h3>
            <div className="space-y-2">
              {souvenirs.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-sand bg-papyrus/50"
                >
                  <button
                    onClick={() => setOpenItem(openItem === i ? null : i)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm"
                  >
                    <span className="font-medium text-nile">{item.name}</span>
                    <span className="ml-2 shrink-0 text-xs text-gold">{item.price}</span>
                  </button>
                  {openItem === i && (
                    <div className="border-t border-sand/60 px-4 py-3 text-xs leading-relaxed text-nile/60">
                      <p className="mb-1">
                        <span className="font-bold text-nile/70">哪裡買：</span>{item.where}
                      </p>
                      <p>
                        <span className="font-bold text-nile/70">注意：</span>{item.tip}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bargaining Tips */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-nile">
              💰 殺價秘訣
            </h3>
            <div className="space-y-3">
              {bargainingTips.map((tip, i) => (
                <div key={i} className="rounded-xl border border-sand bg-papyrus/50 px-4 py-3">
                  <p className="mb-1 text-sm font-bold text-nile">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-xs text-gold-dark">
                      {i + 1}
                    </span>
                    {tip.title}
                  </p>
                  <p className="ml-7 text-xs leading-relaxed text-nile/55">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Important Notes ───────────── */
function Notes() {
  const categoryIcons: Record<string, string> = {
    簽證: "📋",
    貨幣: "💰",
    天氣: "☀️",
    穿著: "👔",
    健康: "💊",
    上海轉機: "🛫",
    行李: "🧳",
    行李遺失: "⚠️",
    "小費 Baksheesh": "💵",
    "電壓與插座": "🔌",
  };

  return (
    <section id="notes" className="bg-papyrus py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle title="行前須知" subtitle="Travel Notes" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {importantNotes.map((note) => (
            <div
              key={note.category}
              className="rounded-xl border border-sand bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">
                  {categoryIcons[note.category] || "📌"}
                </span>
                <h3 className="font-heading text-lg font-bold text-nile">
                  {note.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {note.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-nile/70"
                  >
                    <span className="mt-1 text-xs text-gold">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Emergency Contacts ───────────── */
function EmergencyContacts() {
  return (
    <section className="bg-nile py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
            Emergency
          </p>
          <h2 className="font-heading text-2xl font-bold text-gold md:text-3xl">
            緊急聯絡資訊
          </h2>
          <div className="wing-divider mt-3 text-sm text-gold/40">✦</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {emergencyContacts.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-terracotta/20 bg-terracotta/5 p-4"
            >
              <h3 className="mb-3 text-sm font-bold text-terracotta-light">
                {group.category}
              </h3>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-sand/60">{item.label}</span>
                    <span className="font-mono text-xs font-medium text-gold">
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Arabic Phrases ───────────── */
function ArabicPhrases() {
  return (
    <section className="bg-papyrus py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
            Useful Arabic
          </p>
          <h2 className="font-heading text-2xl font-bold text-nile md:text-3xl">
            實用阿拉伯語
          </h2>
          <div className="wing-divider mt-3 text-sm text-gold/60">✦</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
          {arabicPhrases.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 ${
                i !== arabicPhrases.length - 1 ? "border-b border-sand-light" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-nile">{p.zh}</p>
                {p.note && (
                  <p className="text-[10px] text-nile/35">{p.note}</p>
                )}
              </div>
              <div className="text-center" dir="rtl">
                <p className="text-base leading-tight">{p.arabic}</p>
              </div>
              <div className="min-w-0 text-right">
                <p className="text-xs text-nile/50 italic">{p.roman}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Route Map (SVG) ───────────── */
function RouteMap() {
  const stops = [
    { id: "cairo", label: "開羅 Cairo", x: 215, y: 75, days: "Day 1-4, 8-9" },
    { id: "desert", label: "黑白沙漠", x: 120, y: 115, days: "Day 2" },
    { id: "aswan", label: "阿斯旺 Aswan", x: 230, y: 260, days: "Day 5-6" },
    { id: "abu", label: "阿布辛貝", x: 175, y: 320, days: "Day 6" },
    { id: "kom", label: "康翁波", x: 245, y: 225, days: "Day 6" },
    { id: "edfu", label: "艾德福", x: 235, y: 195, days: "Day 7" },
    { id: "luxor", label: "盧克索 Luxor", x: 225, y: 165, days: "Day 7-8" },
  ];

  return (
    <div className="mx-auto mt-8 max-w-sm">
      <svg viewBox="0 0 350 370" className="w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Nile River */}
        <path
          d="M230 30 Q235 80 220 120 Q210 160 225 200 Q235 240 230 280 Q225 320 235 360"
          fill="none"
          stroke="#C9A96E"
          strokeWidth="3"
          opacity="0.25"
        />
        <text x="248" y="150" fill="#C9A96E" opacity="0.3" fontSize="9" fontStyle="italic">
          尼羅河 Nile
        </text>

        {/* Route lines */}
        <line x1="215" y1="75" x2="120" y2="115" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <line x1="215" y1="80" x2="230" y2="255" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <line x1="230" y1="260" x2="175" y2="320" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.4" />
        <polyline
          points="230,260 245,225 235,195 225,165"
          fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5"
        />
        <line x1="225" y1="165" x2="215" y2="80" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.4" />

        {/* Stops */}
        {stops.map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r="5" fill="#C9A96E" />
            <circle cx={s.x} cy={s.y} r="3" fill="#F5ECD7" />
            <text
              x={s.x + (s.id === "desert" ? -8 : 10)}
              y={s.y - 8}
              fill="#0C1B33"
              fontSize="9"
              fontWeight="bold"
              textAnchor={s.id === "desert" ? "end" : "start"}
            >
              {s.label}
            </text>
            <text
              x={s.x + (s.id === "desert" ? -8 : 10)}
              y={s.y + 4}
              fill="#0C1B33"
              fontSize="7"
              opacity="0.4"
              textAnchor={s.id === "desert" ? "end" : "start"}
            >
              {s.days}
            </text>
          </g>
        ))}

        {/* Egypt label */}
        <text x="50" y="50" fill="#C9A96E" fontSize="11" fontWeight="bold" opacity="0.3">
          EGYPT
        </text>
      </svg>
    </div>
  );
}

/* ───────────── Footer / Contact ───────────── */
function Footer() {
  return (
    <footer id="contact" className="bg-nile py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-8">
          <p className="mb-1 text-xs tracking-[0.2em] text-gold/70 uppercase">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-bold text-gold">
            聯絡資訊
          </h2>
          <div className="wing-divider mt-3 text-lg text-gold/60" style={{ fontFamily: "'Noto Sans Egyptian Hieroglyphs', serif" }}>𓂀</div>
        </div>

        <div className="mb-10 inline-block rounded-2xl border border-gold/20 bg-gold/5 px-8 py-6">
          <p className="mb-2 font-heading text-xl font-bold text-gold">
            {tourInfo.agency}
          </p>
          <div className="space-y-2 text-sm text-sand/70">
            <p className="flex items-center justify-center gap-2">
              <span>📞</span> {tourInfo.agencyPhone}
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>✉️</span> {tourInfo.agencyEmail}
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📍</span> {tourInfo.agencyAddress}
            </p>
          </div>
        </div>

        <div className="hieroglyphic-border mx-auto mb-6 max-w-xs" />

        <p className="text-xs text-sand/30">
          © 2026 Egypt Tour Group — Made with 𓋹 for our fellow travelers
        </p>
      </div>
    </footer>
  );
}

/* ───────────── Main Page ───────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RouteOverview />
      <Itinerary />
      <Flights />
      <Accommodations />
      <Pricing />
      <CurrencyConverter />
      <ShoppingGuide />
      <Notes />
      <EmergencyContacts />
      <ArabicPhrases />
      <Footer />
    </main>
  );
}
