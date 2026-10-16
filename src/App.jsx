import { useState } from "react";

// ============================================================
// REUSABLE PIECES
// ============================================================

const GridBackground = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />
);

const NavBar = () => (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <div className="flex items-center gap-1 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-2 py-1.5">
      {["MS", "Profile", "Case studies", "Résumé"].map((item, i) => (
        <button
          key={item}
          className={`px-4 py-1.5 text-[13px] rounded-full transition-colors ${
            i === 0
              ? "bg-[#111] text-white font-medium"
              : "text-[#444] hover:bg-[#f2f2f2]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

const ScrollHint = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#8a8478]">
    <span className="inline-flex items-center justify-center w-5 h-3 border border-[#8a8478] rounded-full">
      <span className="w-0.5 h-1.5 bg-[#8a8478] rounded-full" />
    </span>
    SCROLL TO EXPLORE
  </div>
);

const Item = ({ style, children, className = "" }) => (
  <div className={`absolute select-none ${className}`} style={style}>
    {children}
  </div>
);

// ============================================================
// FRAME 1
// ============================================================
const Frame1 = () => (
  <div className="absolute inset-0">
    <Item style={{ top: "22%", left: "9%" }} className="text-left">
      <p className="text-[#C4552E] text-[26px] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>
        Maitri Shah
      </p>
      <p className="text-[11px] text-[#4a4a4a] mt-1">UX/UI Designer · Mumbai</p>
      <p className="text-[11px] text-[#4a4a4a] mt-1.5 flex items-center gap-1">
        View selected work <span className="text-[10px]">↗</span>
      </p>
    </Item>

    <Item style={{ top: "22%", left: "34%" }}>
      <h2 className="text-[34px] leading-[1.05] font-semibold tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        THE WORLD IS
        <br />
        FULL OF
      </h2>
    </Item>

    {/* DESIGN notepad — PNG */}
    <Item style={{ top: "18%", left: "61%" }}>
      <img
        src="/design-notepad.png"
        alt="Design notepad"
        className="w-[64px] md:w-[80px] lg:w-[90px] h-auto rotate-[-4deg] shadow-md"
      />
    </Item>

    {/* Coffee — PNG */}
    <Item style={{ top: "20%", left: "76%" }}>
      <img
        src="/coffe.png"
        alt="Coffee"
        className="w-[50px] md:w-[60px] lg:w-[70px] h-auto"
      />
    </Item>

    {/* Lamp — PNG */}
    <Item style={{ top: "38%", left: "9%" }}>
      <img
        src="/lamp.png"
        alt="Desk lamp"
        className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
      />
    </Item>

    {/* Headphones — PNG */}
    <Item style={{ top: "38%", left: "31%" }}>
      <img
        src="/headphone.png"
        alt="Headphones"
        className="w-[60px] md:w-[75px] lg:w-[90px] h-auto"
      />
    </Item>

    {/* Vinyl / Disc — PNG */}
    <Item style={{ top: "37%", left: "48%" }}>
      <img
        src="/disc.png"
        alt="Vinyl record"
        className="w-[70px] md:w-[85px] lg:w-[100px] h-auto"
      />
    </Item>

    <Item style={{ top: "35%", left: "67%" }}>
      <h3 className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        UNFINISHED
        <br />
        IDEAS
      </h3>
    </Item>

    {/* Blue icons — SVG */}
    <Item style={{ top: "42%", left: "80%" }}>
      <img
        src="/icons.svg"
        alt="Icons"
        className="w-[70px] md:w-[80px] lg:w-[86px] h-auto"
      />
    </Item>

    <div className="absolute" style={{ top: "55%", left: "14%", right: "26%" }}>
      <div className="relative border-t-2 border-dashed border-[#6FA8BF]">
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#6FA8BF] text-lg">✕</div>
      </div>
    </div>

    <Item style={{ top: "57%", left: "30%" }}>
      <h3 className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        & FRUSTRATING
        <br />
        EXPERIENCES
      </h3>
    </Item>

    {/* Polaroid placeholder — keep as is, no image provided */}
    <Item style={{ top: "50%", left: "73%" }}>
      <div className="w-[86px] h-[96px] bg-white shadow-lg rotate-[6deg] p-1.5">
        <div className="w-full h-[70%] bg-[#e8e8e8] flex items-center justify-center text-[24px]">
          📷
        </div>
      </div>
    </Item>

    <Item style={{ top: "63%", left: "64%" }}>
      <p className="text-[#C4552E] text-[15px] italic" style={{ fontFamily: "'Caveat', cursive" }}>
        I design the path
      </p>
      <h3 className="text-[24px] leading-[1.05] font-semibold tracking-tight text-[#111] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
        THAT MAKES
        <br />
        THEM SEAMLESS
      </h3>
    </Item>

    {/* Plant — PNG */}
    <Item style={{ top: "70%", left: "26%" }}>
      <img
        src="/plant.png"
        alt="Plant"
        className="w-[55px] md:w-[70px] lg:w-[85px] h-auto"
      />
    </Item>

    {/* Sticky notes — keep CSS version */}
    <Item style={{ top: "72%", left: "38%" }}>
      <div className="relative w-[100px] h-[70px]">
        <div className="absolute left-0 top-0 w-[62px] h-[58px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[9px] text-[#333]">Ask why</p>
        </div>
        <div className="absolute left-8 top-2 w-[52px] h-[46px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[11px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>
            Simplify
          </p>
        </div>
      </div>
    </Item>
  </div>
);

// ============================================================
// FRAME 2
// ============================================================
const Frame2 = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#C4552E] text-[28px] mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
        Maitri Shah
      </p>

      <h1 className="text-[64px] leading-[1.05] font-normal tracking-tight text-[#111] max-w-[900px]" style={{ fontFamily: "'Inter', sans-serif" }}>
        I turn complex ideas
        <br />
        into{" "}
        <span className="text-[#C4552E] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "72px" }}>
          clear, human
        </span>
        <br />
        experiences.
      </h1>

      <p className="text-[13px] text-[#6b6b6b] max-w-[440px] mt-7 leading-relaxed">
        UX/UI designer in Mumbai with 2+ years of experience, bringing
        curiosity, clarity, and care to every screen.
      </p>

      <button className="mt-8 bg-[#111] text-white text-[13px] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors">
        Explore my work <span>↗</span>
      </button>
    </div>

    {/* Headphones */}
    <Item style={{ top: "18%", left: "8%" }}>
      <img src="/headphone.png" alt="Headphones" className="w-[55px] md:w-[70px] lg:w-[85px] h-auto" />
    </Item>

    {/* Lamp */}
    <Item style={{ top: "26%", left: "4%" }}>
      <img src="/lamp.png" alt="Desk lamp" className="w-[70px] md:w-[90px] lg:w-[105px] h-auto" />
    </Item>

    {/* Disc */}
    <Item style={{ top: "36%", left: "6%" }}>
      <img src="/disc.png" alt="Vinyl record" className="w-[55px] md:w-[70px] lg:w-[85px] h-auto" />
    </Item>

    {/* Plant */}
    <Item style={{ top: "68%", left: "5%" }}>
      <img src="/plant.png" alt="Plant" className="w-[50px] md:w-[65px] lg:w-[80px] h-auto" />
    </Item>

    {/* Sticky notes */}
    <Item style={{ top: "80%", left: "10%" }}>
      <div className="relative w-[110px] h-[70px]">
        <div className="absolute left-0 top-0 w-[62px] h-[58px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[9px] text-[#333]">Ask why</p>
        </div>
        <div className="absolute left-9 top-2 w-[52px] h-[46px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[11px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>
            Simplify
          </p>
        </div>
      </div>
    </Item>

    {/* Design notepad */}
    <Item style={{ top: "18%", left: "80%" }}>
      <img src="/design-notepad.png" alt="Design notepad" className="w-[55px] md:w-[70px] lg:w-[80px] h-auto rotate-[4deg] shadow-md" />
    </Item>

    {/* Coffee */}
    <Item style={{ top: "14%", left: "92%" }}>
      <img src="/coffe.png" alt="Coffee" className="w-[40px] md:w-[50px] lg:w-[60px] h-auto" />
    </Item>

    {/* Icons SVG */}
    <Item style={{ top: "32%", left: "94%" }}>
      <img src="/icons.svg" alt="Icons" className="w-[70px] md:w-[80px] lg:w-[86px] h-auto" />
    </Item>

    {/* Polaroid placeholder */}
    <Item style={{ top: "48%", left: "88%" }}>
      <div className="w-[86px] h-[96px] bg-white shadow-lg rotate-[6deg] p-1.5">
        <div className="w-full h-[70%] bg-[#e8e8e8] flex items-center justify-center text-[24px]">
          📷
        </div>
      </div>
    </Item>
  </div>
);

// ============================================================
// PROBLEMS SECTION
// ============================================================

const problems = [
  {
    id: "01",
    tag: "UI/UX DESIGN · PRODUCT THINKING",
    title: "Making property discovery feel effortless",
    desc: "A bold redesign made space for a search-first experience and clearer information architecture, transforming the search journey to be quicker and more seamless.",
    bg: "#F4D0BF",
  },
  {
    id: "02",
    tag: "UI/UX DESIGN · PRODUCT THINKING",
    title: "Making property discovery feel effortless",
    desc: "A bold redesign made space for a search-first experience and clearer information architecture, transforming the search journey to be quicker and more seamless.",
    bg: "#C9DCEB",
  },
  {
    id: "03",
    tag: "UI/UX DESIGN · PRODUCT THINKING",
    title: "Making property discovery feel effortless",
    desc: "A bold redesign made space for a search-first experience and clearer information architecture, transforming the search journey to be quicker and more seamless.",
    bg: "#EDDAA6",
  },
];

const BrowserMockup = () => (
  <div
    className="relative shrink-0"
    style={{
      width: "780px",
      height: "412px",
      transform: "rotate(-2deg)",
      background: "#FAF9F5",
      borderRadius: "18.98px",
      border: "5.2px solid #282725",
      boxShadow: "0px 29.65px 59.31px 0px #2A251B40",
      overflow: "hidden",
    }}
  >
    <div className="flex items-center gap-2 px-5 pt-4 pb-3">
      <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
    </div>
    <div className="mx-5 h-[42px] bg-[#282725] rounded-md flex items-center px-4">
      <div className="w-[120px] h-2 bg-white/20 rounded-full" />
      <div className="ml-auto w-3 h-3 bg-white/30 rounded-full" />
    </div>
    <div className="px-5 mt-5">
      <div className="w-[60%] h-2.5 bg-[#e0e0e0] rounded-full mb-2" />
      <div className="w-[80%] h-2.5 bg-[#e0e0e0] rounded-full mb-6" />
      <div className="flex items-end gap-4 h-[120px]">
        <div className="w-[70px] h-[60px] bg-[#E5592E] rounded-sm" />
        <div className="w-[70px] h-[60px] bg-[#E5592E] rounded-sm" />
        <div className="w-[70px] h-[90px] bg-[#E5592E] rounded-sm" />
        <div className="w-[70px] h-[60px] bg-[#E5592E] rounded-sm" />
      </div>
    </div>
  </div>
);

const ProblemCard = ({ item }) => (
  <div
    className="relative w-full flex flex-col lg:flex-row items-center gap-10"
    style={{
      maxWidth: "1400px",
      minHeight: "557px",
      background: item.bg,
      borderRadius: "30.84px",
      border: "1.19px solid rgba(0,0,0,0.06)",
      padding: "60px 50px",
    }}
  >
    <div className="flex-1 min-w-[280px] max-w-[420px]">
      <p className="text-[#C4552E] text-[12px] tracking-[0.15em] font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.id}
      </p>
      <p className="text-[10px] tracking-[0.2em] text-[#5a5a5a] mb-4 uppercase">
        {item.tag}
      </p>
      <h3 className="text-[40px] leading-[1.1] text-[#111] mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
        {item.title}
      </h3>
      <p className="text-[12px] leading-[1.6] text-[#4a4a4a] mb-5">{item.desc}</p>
      <div className="flex flex-col gap-1.5">
        <a href="#" className="inline-flex items-center gap-1.5 text-[11px] text-[#111] hover:opacity-70">
          <span className="w-3 h-3 border border-[#111] rounded-full flex items-center justify-center text-[7px]">✕</span>
          Add to anticipated outcome
        </a>
        <a href="#" className="inline-flex items-center gap-1.5 text-[11px] text-[#111] hover:opacity-70 underline underline-offset-4">
          View case study ↗
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center w-full overflow-hidden">
      <BrowserMockup />
    </div>
  </div>
);

const ProblemsSection = () => (
  <section
    className="relative w-full"
    style={{
      background: "#FFFDF8",
      borderTopLeftRadius: "100px",
      borderTopRightRadius: "100px",
      padding: "100px 40px 120px",
      marginTop: "-100px",
      zIndex: 10,
    }}
  >
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
        <div>
          <p className="text-[#C4552E] tracking-[0.15em] mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: "18px" }}>
            Selected work
          </p>
          <h2 className="text-[52px] leading-[1.05] text-[#111] font-medium max-w-[520px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Problems explored
            <br />
            with purpose.
          </h2>
        </div>
        <p className="text-[12px] text-[#6b6b6b] max-w-[280px] leading-[1.6] md:pt-14">
          These projects were an early foray into real client work, sharpening
          my product thinking and technical foundation.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {problems.map((item) => (
          <ProblemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// EXPERIENCE SECTION
// ============================================================

const ToolIcon = ({ name }) => {
  const icons = {
    figma: (
      <svg viewBox="0 0 24 36" className="w-8 h-12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F24E1E" d="M6 0h6v12H6a6 6 0 0 1 0-12z" />
        <path fill="#FF7262" d="M12 0h6a6 6 0 0 1 0 12h-6V0z" />
        <path fill="#A259FF" d="M12 12h6a6 6 0 0 1 0 12h-6V12z" />
        <path fill="#1ABCFE" d="M6 12h6v12H6a6 6 0 0 1 0-12z" />
        <path fill="#0ACF83" d="M6 24h6v6a6 6 0 1 1-6-6z" />
      </svg>
    ),
    framer: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0h16v8H12l8 8H4v-8h8L4 0zm0 16h8v8l-8-8z" fill="#000" />
      </svg>
    ),
    figjam: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#E5592E" strokeWidth="1.8" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
          <line x1="19.1" y1="4.9" x2="4.9" y2="19.1" />
        </g>
      </svg>
    ),
    m: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#000" />
        <path d="M5 18V7l3.5 6L12 7l3.5 6L19 7v11" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
    xd: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#470137" />
        <text x="12" y="17" textAnchor="middle" fill="#FF61F6" fontSize="11" fontWeight="bold" fontFamily="Arial">Xd</text>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#330000" />
        <text x="12" y="17" textAnchor="middle" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="Arial">Ai</text>
      </svg>
    ),
    ps: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text x="12" y="17" textAnchor="middle" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Ps</text>
      </svg>
    ),
  };
  return icons[name] || null;
};

const ToolBox = ({ name }) => (
  <div
    className="flex items-center justify-center shrink-0"
    style={{
      width: "129.675px",
      height: "129.675px",
      background: "#F5F1E7",
      border: "0.75px solid #DAD8D3",
      borderRadius: "4.5px",
      padding: "15.74px",
    }}
  >
    <ToolIcon name={name} />
  </div>
);

const experiences = [
  {
    company: "Logiclopp / Realatte",
    role: "Executive UI/UX Designer / Gen AI + Agentic AI Designer – 08 Apr 2024 – Present",
    tools: ["figma", "framer", "figjam", "m"],
  },
  {
    company: "IvotionTech",
    role: "UI/UX Designer – 01 Apr 2022–01 May 2023",
    tools: ["figma", "xd", "ai", "ps"],
  },
];

const ExperienceRow = ({ item }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between" style={{ gap: "80px" }}>
    <div className="flex flex-col" style={{ gap: "8px" }}>
      <h3 className="text-[34px] leading-[1.1] text-[#111] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.company}
      </h3>
      <p className="text-[11px] text-[#4a4a4a]">{item.role}</p>
    </div>
    <div className="flex items-center flex-wrap" style={{ gap: "16px" }}>
      {item.tools.map((tool) => (
        <ToolBox key={tool} name={tool} />
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <section className="relative w-full" style={{ background: "#FFFDF8", padding: "120px 40px 160px" }}>
    <div className="mx-auto flex flex-col" style={{ maxWidth: "1401px", gap: "80px" }}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <p className="text-[#C4552E] tracking-[0.15em] mb-3 font-medium text-[12px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Selected work
          </p>
          <h2 className="text-[52px] leading-[1.05] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>
        <p className="text-[12px] text-[#6b6b6b] max-w-[320px] leading-[1.6] md:pt-14">
          These project slots are ready for your real screenshots, process, and
          measurable outcomes.
        </p>
      </div>
      <div className="flex flex-col" style={{ gap: "80px" }}>
        {experiences.map((item, idx) => (
          <div key={idx} className="flex flex-col" style={{ gap: "40px" }}>
            <ExperienceRow item={item} />
            {idx < experiences.length - 1 && (
              <div className="w-full h-[1px] bg-[#DAD8D3]" />
            )}
          </div>
        ))}
        <div className="w-[55%] h-[1px] bg-[#DAD8D3]" />
      </div>
    </div>
  </section>
);

// ============================================================
// AI WORKFLOW SECTION
// ============================================================

const traditionalBars = [
  { label: "Research", value: "20 hrs", width: "100%" },
  { label: "Wireframes", value: "6 hrs", width: "30%" },
  { label: "Prototype", value: "10 hrs", width: "50%" },
  { label: "Documentation", value: "5 hrs", width: "25%" },
];

const aiBars = [
  { label: "Research", value: "4 hrs", width: "20%", filled: true },
  { label: "Wireframes", value: "4 hrs", width: "20%", filled: true },
  { label: "Prototype", value: "5 hrs", width: "25%", filled: true },
  { label: "Documentation", value: "1 hr", width: "8%", filled: true },
];

const WorkflowBars = ({ title, titleColor, bars }) => (
  <div className="flex flex-col gap-4">
    <p className="text-[11px] tracking-[0.15em] font-medium uppercase" style={{ fontFamily: "'Inter', sans-serif", color: titleColor }}>
      {title}
    </p>
    <div className="flex flex-col gap-3">
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-4">
          <p className="text-[13px] text-[#282725] w-[110px] shrink-0">{bar.label}</p>
          <div className="relative flex-1 h-[6px] bg-[#BDBDBD]/70 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: bar.width, background: bar.filled ? "#FF6714" : "#8a8a8a" }}
            />
          </div>
          <p className="text-[11px] text-[#5a5a5a] w-[42px] text-right shrink-0">{bar.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const FlowStep = ({ label }) => (
  <div
    className="inline-flex items-center justify-center text-[13px] text-[#282725]"
    style={{
      background: "#F5F1E7",
      border: "0.75px solid #DAD8D3",
      borderRadius: "6px",
      padding: "8px 16px",
    }}
  >
    {label}
  </div>
);

const FlowArrow = () => <span className="text-[#8a8478] text-[14px] mx-2">→</span>;

const AIWorkflowSection = () => (
  <section
    className="relative w-full"
    style={{
      background: "#F5F1E7",
      borderTopLeftRadius: "100px",
      borderTopRightRadius: "100px",
      padding: "120px 40px 160px",
    }}
  >
    <div className="mx-auto flex flex-col" style={{ maxWidth: "1400px", gap: "80px" }}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[11px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI-Enhanced Workflow
          </p>
          <h2 className="text-[56px] leading-[1.1] text-[#111] font-medium max-w-[760px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI is part of my workflow.
            <br />
            Not my decision maker.
          </h2>
        </div>
        <p className="text-[13px] text-[#4a4a4a] max-w-[320px] leading-[1.6] md:pt-16">
          AI removes the friction from my process so the craft gets more of my
          attention, not less. Here&apos;s where it plugs in – and where the
          decisions stay human.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="flex flex-col justify-center"
          style={{
            background: "#FAF9F5",
            borderRadius: "24px",
            border: "1px solid #DAD8D3",
            padding: "48px 42px",
            minHeight: "380px",
          }}
        >
          <p className="text-[15px] leading-[1.75] text-[#282725]">
            I use AI to quickly move from an unclear idea to a structured
            starting point. It helps me explore flows, generate screen ideas,
            write first-pass copy, and identify missing states before I begin
            detailed design work.
          </p>
          <div className="flex flex-wrap items-center mt-10">
            <FlowStep label="Idea" />
            <FlowArrow />
            <FlowStep label="AI Draft" />
            <FlowArrow />
            <FlowStep label="UX Flow" />
            <FlowArrow />
            <FlowStep label="Figma" />
            <FlowArrow />
            <FlowStep label="Final Design" />
          </div>
        </div>

        <div
          className="flex flex-col gap-10"
          style={{
            background: "#FAF9F5",
            borderRadius: "24px",
            border: "1px solid #DAD8D3",
            padding: "48px 42px",
            minHeight: "380px",
          }}
        >
          <WorkflowBars
            title="Time taken with traditional flow"
            titleColor="#FF6714"
            bars={traditionalBars}
          />
          <WorkflowBars title="Time taken with AI" titleColor="#FF6714" bars={aiBars} />
          <p className="text-[13px] leading-[1.6] text-[#FF6714]">
            AI reduced the overall design workflow time by around{" "}
            <strong>65–70%</strong>, helping me move faster from research to
            refined design.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// AI-POWERED EXPERIMENTS SECTION
// ============================================================

const experiments = [
  {
    title: "Claude design",
    desc: "Created landing page concepts, structure, and micro-interactions using Claude.",
    tag: "Real estate",
    image: "claude",
  },
  {
    title: "Google Stitch",
    desc: "Explored landing page layouts and UI directions with Google Stitch.",
    tag: "Real estate",
    image: "stitch",
  },
  {
    title: "Majestic AI + ChatGPT",
    desc: "Generated images, enhanced visuals, and explored video concepts for the project.",
    tag: "Real estate",
    image: "majestic",
  },
];

const ExperimentMockup = ({ variant }) => (
  <div className="relative w-full h-[150px] rounded-lg overflow-hidden bg-[#EFEAE0] flex items-center justify-center">
    {variant === "claude" && (
      <div className="relative w-[80%]">
        <div className="w-full h-[90px] bg-[#DAD5C8] rounded-md border border-[#c8c2b3] relative">
          <div className="absolute inset-2 bg-white rounded-sm flex flex-col gap-1 p-2">
            <div className="w-[40%] h-1.5 bg-[#d0d0d0] rounded-full" />
            <div className="w-[70%] h-1.5 bg-[#d0d0d0] rounded-full" />
            <div className="w-[55%] h-1.5 bg-[#d0d0d0] rounded-full" />
          </div>
          <div className="absolute -top-2 -left-3 bg-white text-[7px] px-1.5 py-0.5 rounded shadow">Idea</div>
          <div className="absolute -top-1 -right-4 bg-white text-[7px] px-1.5 py-0.5 rounded shadow">Flow</div>
          <div className="absolute -bottom-2 -right-3 bg-white text-[7px] px-1.5 py-0.5 rounded shadow">UX</div>
        </div>
        <div className="h-[6px] w-[60%] mx-auto bg-[#c8c2b3] rounded-b-md" />
      </div>
    )}

    {variant === "stitch" && (
      <div className="w-[90%] flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1 h-[46px] bg-white rounded-md border border-[#e0ddd3] flex items-center justify-center text-[10px] text-[#999]">▣</div>
          <div className="flex-1 h-[46px] bg-white rounded-md border border-[#e0ddd3] flex items-center justify-center">
            <div className="w-[70%] h-2 bg-[#d0d0d0] rounded-full" />
          </div>
          <div className="flex-1 h-[46px] bg-white rounded-md border border-[#e0ddd3] flex flex-col gap-1 p-1.5">
            <div className="w-[80%] h-1.5 bg-[#d0d0d0] rounded-full" />
            <div className="w-[60%] h-1.5 bg-[#d0d0d0] rounded-full" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-[40px] bg-white rounded-md border border-[#e0ddd3]" />
          <div className="flex-1 h-[40px] bg-white rounded-md border border-[#e0ddd3]" />
        </div>
      </div>
    )}

    {variant === "majestic" && (
      <div className="w-[90%] h-[120px] rounded-md overflow-hidden relative bg-gradient-to-br from-[#5B7B9A] via-[#3E5772] to-[#2A3B4F]">
        <div className="absolute top-2 left-2 right-2 flex gap-1">
          <div className="w-[30%] h-1.5 bg-white/30 rounded-full" />
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex gap-1.5">
          <div className="w-[22%] h-[34px] bg-white/90 rounded-sm" />
          <div className="w-[22%] h-[34px] bg-white/90 rounded-sm" />
          <div className="w-[22%] h-[34px] bg-white/90 rounded-sm" />
          <div className="w-[22%] h-[34px] bg-white/90 rounded-sm" />
        </div>
      </div>
    )}
  </div>
);

const ExperimentCard = ({ item }) => (
  <div
    className="flex flex-col"
    style={{
      background: "#FAF9F5",
      borderRadius: "16px",
      border: "1px solid #DAD8D3",
      padding: "20px",
      gap: "16px",
    }}
  >
    <ExperimentMockup variant={item.image} />
    <div className="flex flex-col gap-2">
      <h3 className="text-[15px] font-semibold text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.title}
      </h3>
      <p className="text-[11.5px] leading-[1.6] text-[#5a5a5a]">{item.desc}</p>
      <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8478] mt-1">
        {item.tag}
      </p>
    </div>
  </div>
);

const ProfileCard = () => (
  <div
    className="relative w-full flex flex-col md:flex-row items-center md:items-stretch"
    style={{
      background: "#FAF9F5",
      borderRadius: "24px",
      border: "3px solid #2E4A3B",
      padding: "40px",
      gap: "40px",
      maxWidth: "1230px",
      margin: "0 auto",
    }}
  >
    {/* Left — profile info */}
    <div className="flex flex-col items-start" style={{ width: "45%" }}>
      <p className="text-[#C4552E] text-[28px] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>
        Maitri Shah
      </p>
      <div className="flex items-center gap-3 mt-2 mb-6">
        <p className="text-[12px] text-[#4a4a4a]">UX/UI Designer</p>
        <span
          className="text-[11px] text-[#C4552E] px-2.5 py-0.5 rounded-full"
          style={{ border: "1.5px solid #C4552E", fontFamily: "'Caveat', cursive" }}
        >
          2+ Years
        </span>
      </div>

      {/* Maitri photo — actual jpg */}
      <div className="relative w-[240px] h-[300px] rounded-lg overflow-hidden" style={{ background: "#E8E2D5" }}>
        <img
          src="/maitri.jpg"
          alt="Maitri Shah"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-3 right-3 text-white text-[10px] px-2.5 py-1 rounded"
          style={{ background: "#E5592E" }}
        >
          Hire me →
        </div>
      </div>
    </div>

    {/* Right — grid of assets + text */}
    <div className="flex-1 flex flex-col gap-5">
      {/* Top row: Sunflower + Dance */}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[80px] h-[80px] flex items-center justify-center text-[50px]">🌻</div>
          <p className="text-[10px] text-[#5a5a5a]">Sunflower.png</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[80px] h-[80px] flex items-center justify-center text-[50px]">🦋</div>
          <p className="text-[10px] text-[#5a5a5a]">Danceofmoon.png</p>
        </div>
      </div>

      {/* Text box */}
      <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #E5E1D6" }}>
        <div className="flex gap-0.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4552E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#F2C94C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8BF]" />
        </div>
        <p className="text-[12px] leading-[1.7] text-[#3a3a3a]">
          I use AI to quickly move from an unclear idea to a structured starting
          point. It helps me explore flows, generate screen ideas, write
          first-pass copy, and identify missing states before I begin detailed
          design work.
        </p>
      </div>

      {/* Bottom row: Tools + Beach */}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[80px] h-[80px] flex items-center justify-center text-[50px]">🌀</div>
          <p className="text-[10px] text-[#5a5a5a]">ToolsCover.png</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[80px] h-[80px] flex items-center justify-center text-[50px]">🏖️</div>
          <p className="text-[10px] text-[#5a5a5a]">BeachCover.png</p>
        </div>
      </div>
    </div>
  </div>
);

const AIExperimentsSection = () => (
  <section
    className="relative w-full"
    style={{
      background: "#FFFDF8",
      borderTopLeftRadius: "100px",
      borderTopRightRadius: "100px",
      padding: "120px 40px 160px",
    }}
  >
    <div className="mx-auto flex flex-col" style={{ maxWidth: "1400px", gap: "100px" }}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[11px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI Experiments
          </p>
          <h2 className="text-[56px] leading-[1.1] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI-Powered Design
            <br />
            Experiments
          </h2>
        </div>
        <p className="text-[13px] text-[#4a4a4a] max-w-[340px] leading-[1.6] md:pt-16">
          A collection of AI-led explorations where I used Claude and Google
          Stitch to build landing page concepts, and Majestic AI with ChatGPT to
          create images, videos, and visual assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiments.map((item) => (
          <ExperimentCard key={item.title} item={item} />
        ))}
      </div>

      <ProfileCard />
    </div>
  </section>
);

// ============================================================
// MAIN APP
// ============================================================
function App() {
  const [frame, setFrame] = useState(1);

  const handleDragStart = (e) => {
    e.currentTarget.dataset.startx = e.clientX;
  };

  const handleDragEnd = (e) => {
    const startX = e.currentTarget.dataset.startx;
    if (startX) {
      const diff = e.clientX - parseInt(startX);
      if (diff < -60) setFrame(2);
      if (diff > 60) setFrame(1);
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: "#F5F1E7" }}>
      <div
        className="relative w-full h-screen overflow-hidden"
        style={{ cursor: "grab" }}
        onClick={() => setFrame((f) => (f === 1 ? 2 : 1))}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      >
        <GridBackground />
        <div className="absolute inset-0">
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${frame === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Frame1 />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${frame === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Frame2 />
          </div>
        </div>
        <NavBar />
        <ScrollHint />
      </div>

      <ProblemsSection />
      <ExperienceSection />
      <AIWorkflowSection />
      <AIExperimentsSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; margin: 0; }
      `}</style>
    </div>
  );
}

export default App;