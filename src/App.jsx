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

// ---------- NAVBAR with smooth scroll ----------
const NavBar = () => {
  const navItems = [
    { id: "hero", label: "MS" },
    { id: "problems", label: "Profile" },
    { id: "experience", label: "Case studies" },
    { id: "ai-experiments", label: "Résumé" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-[420px]">
      <div className="flex items-center justify-center md:justify-start gap-0.5 md:gap-1 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-1.5 md:px-2 py-1 md:py-1.5">
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`px-2.5 md:px-4 py-1 md:py-1.5 text-[11px] md:text-[13px] rounded-full transition-colors whitespace-nowrap ${
              i === 0
                ? "bg-[#111] text-white font-medium"
                : "text-[#444] hover:bg-[#f2f2f2]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const ScrollHint = () => (
  <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.25em] text-[#8a8478]">
    <span className="inline-flex items-center justify-center w-4 h-3 md:w-5 md:h-3 border border-[#8a8478] rounded-full">
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

// ---------- FRAME 1 MOBILE ----------
const Frame1Mobile = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 pb-16 gap-5">
    <div className="text-center">
      <p className="text-[#C4552E] text-[24px] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>
        Maitri Shah
      </p>
      <p className="text-[10px] text-[#4a4a4a] mt-1">UX/UI Designer · Mumbai</p>
      <p className="text-[10px] text-[#4a4a4a] mt-1 flex items-center justify-center gap-1">
        View selected work ↗
      </p>
    </div>

    <h2 className="text-[26px] leading-[1.1] font-semibold tracking-tight text-[#111] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      THE WORLD IS
      <br />
      FULL OF
    </h2>

    <div className="flex items-center justify-center gap-4 mt-2">
      <img src="/lamp.png" alt="Lamp" className="w-[55px] h-auto" />
      <img src="/headphone.png" alt="Headphones" className="w-[50px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[55px] h-auto" />
    </div>

    <h3 className="text-[22px] leading-[1.05] font-semibold tracking-tight text-[#111] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      UNFINISHED
      <br />
      IDEAS
    </h3>

    <div className="flex items-center justify-center gap-4">
      <img src="/design-notepad.png" alt="Design" className="w-[40px] h-auto rotate-[-4deg] shadow-md" />
      <img src="/icons.svg" alt="Icons" className="w-[55px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[40px] h-auto" />
    </div>

    <h3 className="text-[22px] leading-[1.05] font-semibold tracking-tight text-[#111] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      & FRUSTRATING
      <br />
      EXPERIENCES
    </h3>

    <div className="flex items-center justify-center gap-6">
      <img src="/plant.png" alt="Plant" className="w-[45px] h-auto" />
      <div className="relative w-[80px] h-[55px]">
        <div className="absolute left-0 top-0 w-[50px] h-[46px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-1.5">
          <p className="text-[8px] text-[#333]">Ask why</p>
        </div>
        <div className="absolute left-6 top-1.5 w-[44px] h-[40px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[10px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
        </div>
      </div>
    </div>

    <div className="text-center">
      <p className="text-[#C4552E] text-[13px] italic" style={{ fontFamily: "'Caveat', cursive" }}>
        I design the path
      </p>
      <h3 className="text-[20px] leading-[1.05] font-semibold tracking-tight text-[#111] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
        THAT MAKES
        <br />
        THEM SEAMLESS
      </h3>
    </div>
  </div>
);

// ---------- FRAME 1 DESKTOP ----------
const Frame1Desktop = () => (
  <div className="absolute inset-0 hidden lg:block">
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

    <Item style={{ top: "18%", left: "61%" }}>
      <img src="/design-notepad.png" alt="Design notepad" className="w-[90px] h-auto rotate-[-4deg] shadow-md" />
    </Item>

    <Item style={{ top: "20%", left: "76%" }}>
      <img src="/coffe.png" alt="Coffee" className="w-[70px] h-auto" />
    </Item>

    <Item style={{ top: "38%", left: "9%" }}>
      <img src="/lamp.png" alt="Desk lamp" className="w-[120px] h-auto" />
    </Item>

    <Item style={{ top: "38%", left: "31%" }}>
      <img src="/headphone.png" alt="Headphones" className="w-[90px] h-auto" />
    </Item>

    <Item style={{ top: "37%", left: "48%" }}>
      <img src="/disc.png" alt="Vinyl record" className="w-[100px] h-auto" />
    </Item>

    <Item style={{ top: "35%", left: "67%" }}>
      <h3 className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        UNFINISHED
        <br />
        IDEAS
      </h3>
    </Item>

    <Item style={{ top: "42%", left: "80%" }}>
      <img src="/icons.svg" alt="Icons" className="w-[86px] h-auto" />
    </Item>

    <Item style={{ top: "57%", left: "30%" }}>
      <h3 className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        & FRUSTRATING
        <br />
        EXPERIENCES
      </h3>
    </Item>

    <Item style={{ top: "50%", left: "73%" }}>
      <div className="w-[86px] h-[96px] bg-white shadow-lg rotate-[6deg] p-1.5">
        <div className="w-full h-[70%] bg-[#e8e8e8] flex items-center justify-center text-[24px]">📷</div>
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

    <Item style={{ top: "70%", left: "26%" }}>
      <img src="/plant.png" alt="Plant" className="w-[85px] h-auto" />
    </Item>

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

const Frame1 = () => (
  <>
    <div className="lg:hidden">
      <Frame1Mobile />
    </div>
    <Frame1Desktop />
  </>
);

// ============================================================
// FRAME 2
// ============================================================

// ---------- FRAME 2 MOBILE ----------
const Frame2Mobile = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 gap-4">
    <div className="flex items-center justify-center gap-5 mb-2">
      <img src="/headphone.png" alt="Headphones" className="w-[40px] h-auto" />
      <img src="/lamp.png" alt="Lamp" className="w-[45px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[45px] h-auto" />
    </div>

    <p className="text-[#C4552E] text-[24px]" style={{ fontFamily: "'Caveat', cursive" }}>
      Maitri Shah
    </p>

    <h1 className="text-[34px] leading-[1.1] font-normal tracking-tight text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
      I turn complex ideas
      <br />
      into{" "}
      <span className="text-[#C4552E] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "38px" }}>
        clear, human
      </span>
      <br />
      experiences.
    </h1>

    <p className="text-[11px] text-[#6b6b6b] max-w-[320px] mt-2 leading-relaxed">
      UX/UI designer in Mumbai with 2+ years of experience, bringing
      curiosity, clarity, and care to every screen.
    </p>

    <button className="mt-4 bg-[#111] text-white text-[12px] px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors">
      Explore my work <span>↗</span>
    </button>

    <div className="flex items-center justify-center gap-4 mt-4">
      <img src="/plant.png" alt="Plant" className="w-[40px] h-auto" />
      <img src="/design-notepad.png" alt="Design" className="w-[36px] h-auto rotate-[-4deg]" />
      <img src="/icons.svg" alt="Icons" className="w-[55px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[36px] h-auto" />
    </div>
  </div>
);

// ---------- FRAME 2 DESKTOP ----------
const Frame2Desktop = () => (
  <div className="absolute inset-0 hidden lg:block">
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

    <Item style={{ top: "18%", left: "8%" }}>
      <img src="/headphone.png" alt="Headphones" className="w-[85px] h-auto" />
    </Item>
    <Item style={{ top: "26%", left: "4%" }}>
      <img src="/lamp.png" alt="Desk lamp" className="w-[105px] h-auto" />
    </Item>
    <Item style={{ top: "36%", left: "6%" }}>
      <img src="/disc.png" alt="Vinyl record" className="w-[85px] h-auto" />
    </Item>
    <Item style={{ top: "68%", left: "5%" }}>
      <img src="/plant.png" alt="Plant" className="w-[80px] h-auto" />
    </Item>

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

    <Item style={{ top: "18%", left: "80%" }}>
      <img src="/design-notepad.png" alt="Design" className="w-[80px] h-auto rotate-[4deg] shadow-md" />
    </Item>
    <Item style={{ top: "14%", left: "92%" }}>
      <img src="/coffe.png" alt="Coffee" className="w-[60px] h-auto" />
    </Item>
    <Item style={{ top: "32%", left: "94%" }}>
      <img src="/icons.svg" alt="Icons" className="w-[86px] h-auto" />
    </Item>
    <Item style={{ top: "48%", left: "88%" }}>
      <div className="w-[86px] h-[96px] bg-white shadow-lg rotate-[6deg] p-1.5">
        <div className="w-full h-[70%] bg-[#e8e8e8] flex items-center justify-center text-[24px]">📷</div>
      </div>
    </Item>
  </div>
);

const Frame2 = () => (
  <>
    <div className="lg:hidden">
      <Frame2Mobile />
    </div>
    <Frame2Desktop />
  </>
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
    className="relative shrink-0 w-full max-w-[780px]"
    style={{
      aspectRatio: "780 / 412",
      transform: "rotate(-2deg)",
      background: "#FAF9F5",
      borderRadius: "18.98px",
      border: "5.2px solid #282725",
      boxShadow: "0px 29.65px 59.31px 0px #2A251B40",
      overflow: "hidden",
    }}
  >
    <div className="flex items-center gap-2 px-4 md:px-5 pt-3 md:pt-4 pb-2 md:pb-3">
      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#e0e0e0]" />
      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#e0e0e0]" />
      <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#e0e0e0]" />
    </div>
    <div className="mx-3 md:mx-5 h-[30px] md:h-[42px] bg-[#282725] rounded-md flex items-center px-3 md:px-4">
      <div className="w-[80px] md:w-[120px] h-1.5 md:h-2 bg-white/20 rounded-full" />
      <div className="ml-auto w-2.5 h-2.5 md:w-3 md:h-3 bg-white/30 rounded-full" />
    </div>
    <div className="px-3 md:px-5 mt-3 md:mt-5">
      <div className="w-[60%] h-2 md:h-2.5 bg-[#e0e0e0] rounded-full mb-1.5 md:mb-2" />
      <div className="w-[80%] h-2 md:h-2.5 bg-[#e0e0e0] rounded-full mb-4 md:mb-6" />
      <div className="flex items-end gap-2 md:gap-4 h-[70px] md:h-[120px]">
        <div className="w-[15%] h-[50%] bg-[#E5592E] rounded-sm" />
        <div className="w-[15%] h-[50%] bg-[#E5592E] rounded-sm" />
        <div className="w-[15%] h-[75%] bg-[#E5592E] rounded-sm" />
        <div className="w-[15%] h-[50%] bg-[#E5592E] rounded-sm" />
      </div>
    </div>
  </div>
);

const ProblemCard = ({ item }) => (
  <div
    className="relative w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10 problem-card"
    style={{
      maxWidth: "1400px",
      background: item.bg,
      border: "1.19px solid rgba(0,0,0,0.06)",
    }}
  >
    <div className="flex-1 min-w-0 lg:min-w-[280px] max-w-full lg:max-w-[420px]">
      <p className="text-[#C4552E] text-[11px] md:text-[12px] tracking-[0.15em] font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.id}
      </p>
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-[#5a5a5a] mb-3 md:mb-4 uppercase">
        {item.tag}
      </p>
      <h3 className="text-[26px] md:text-[32px] lg:text-[40px] leading-[1.1] text-[#111] mb-3 md:mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
        {item.title}
      </h3>
      <p className="text-[11px] md:text-[12px] leading-[1.6] text-[#4a4a4a] mb-4 md:mb-5">{item.desc}</p>
      <div className="flex flex-col gap-1.5">
        <a href="#" className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] text-[#111] hover:opacity-70">
          <span className="w-3 h-3 border border-[#111] rounded-full flex items-center justify-center text-[7px]">✕</span>
          Add to anticipated outcome
        </a>
        <a href="#" className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] text-[#111] hover:opacity-70 underline underline-offset-4">
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
  <section id="problems" className="relative w-full problems-section-wrapper">
    <style>{`
      .problems-section-wrapper {
        background: #FFFDF8;
        border-top-left-radius: 48px;
        border-top-right-radius: 48px;
        padding: 60px 20px 80px;
        margin-top: -60px;
        z-index: 10;
      }
      .problem-card {
        border-radius: 24px;
        padding: 32px 24px;
      }
      @media (min-width: 768px) {
        .problems-section-wrapper {
          border-top-left-radius: 70px;
          border-top-right-radius: 70px;
          padding: 80px 30px 100px;
          margin-top: -80px;
        }
        .problem-card {
          border-radius: 26px;
          padding: 45px 35px;
        }
      }
      @media (min-width: 1024px) {
        .problems-section-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 100px 40px 120px;
          margin-top: -100px;
        }
        .problem-card {
          border-radius: 30.84px;
          padding: 60px 50px;
          min-height: 557px;
        }
      }
    `}</style>

    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
        <div>
          <p className="text-[#C4552E] tracking-[0.15em] mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: "16px" }}>
            Selected work
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] text-[#111] font-medium max-w-[520px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Problems explored
            <br />
            with purpose.
          </h2>
        </div>
        <p className="text-[11px] md:text-[12px] text-[#6b6b6b] max-w-[280px] leading-[1.6] lg:pt-14">
          These projects were an early foray into real client work, sharpening
          my product thinking and technical foundation.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        {problems.map((item) => (
          <ProblemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// EXPERIENCE SECTION — Actual PNG tool icons
// ============================================================

// Map tool name to actual image file in public/
const toolImageMap = {
  figma: "/figma.png",
  framer: "/M.png",   // M-something tool logo
  figjam: "/figma.png", // Fallback — figma image
  m: "/M.png",
  xd: "/xd.png",
  ai: "/Ai.png",
  ps: "/ps.png",
  chatgpt: "/chatgpt.png",
  claude: "/claud.png",
};

const ToolBox = ({ name }) => (
  <div
    className="flex items-center justify-center shrink-0 w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[129.675px] lg:h-[129.675px]"
    style={{
      background: "#F5F1E7",
      border: "0.75px solid #DAD8D3",
      borderRadius: "4.5px",
      padding: "15.74px",
    }}
  >
    <img
      src={toolImageMap[name] || "/figma.png"}
      alt={name}
      className="w-full h-full object-contain"
    />
  </div>
);

const experiences = [
  {
    company: "Logiclopp / Realatte",
    role: "Executive UI/UX Designer / Gen AI + Agentic AI Designer – 08 Apr 2024 – Present",
    tools: ["figma", "claude", "chatgpt", "m"],
  },
  {
    company: "IvotionTech",
    role: "UI/UX Designer – 01 Apr 2022–01 May 2023",
    tools: ["figma", "xd", "ai", "ps"],
  },
];

const ExperienceRow = ({ item }) => (
  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-20">
    <div className="flex flex-col gap-2">
      <h3 className="text-[24px] md:text-[28px] lg:text-[34px] leading-[1.1] text-[#111] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.company}
      </h3>
      <p className="text-[10px] md:text-[11px] text-[#4a4a4a]">{item.role}</p>
    </div>
    <div className="flex items-center flex-wrap gap-2.5 md:gap-3 lg:gap-4">
      {item.tools.map((tool) => (
        <ToolBox key={tool} name={tool} />
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="relative w-full experience-section-wrapper">
    <style>{`
      .experience-section-wrapper {
        background: #FFFDF8;
        padding: 60px 20px 80px;
      }
      @media (min-width: 768px) {
        .experience-section-wrapper { padding: 90px 30px 110px; }
      }
      @media (min-width: 1024px) {
        .experience-section-wrapper { padding: 120px 40px 160px; }
      }
    `}</style>

    <div className="mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1401px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
        <div>
          <p className="text-[#C4552E] tracking-[0.15em] mb-3 font-medium text-[11px] md:text-[12px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Selected work
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>
        <p className="text-[11px] md:text-[12px] text-[#6b6b6b] max-w-[320px] leading-[1.6] lg:pt-14">
          These project slots are ready for your real screenshots, process, and
          measurable outcomes.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-14 lg:gap-20">
        {experiences.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-6 md:gap-8 lg:gap-10">
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
    <p className="text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase" style={{ fontFamily: "'Inter', sans-serif", color: titleColor }}>
      {title}
    </p>
    <div className="flex flex-col gap-3">
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-3 md:gap-4">
          <p className="text-[11px] md:text-[13px] text-[#282725] w-[80px] md:w-[110px] shrink-0">{bar.label}</p>
          <div className="relative flex-1 h-[6px] bg-[#BDBDBD]/70 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: bar.width, background: bar.filled ? "#FF6714" : "#8a8a8a" }}
            />
          </div>
          <p className="text-[10px] md:text-[11px] text-[#5a5a5a] w-[38px] md:w-[42px] text-right shrink-0">{bar.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const FlowStep = ({ label }) => (
  <div
    className="inline-flex items-center justify-center text-[11px] md:text-[13px] text-[#282725]"
    style={{
      background: "#F5F1E7",
      border: "0.75px solid #DAD8D3",
      borderRadius: "6px",
      padding: "6px 12px",
    }}
  >
    {label}
  </div>
);

const FlowArrow = () => <span className="text-[#8a8478] text-[12px] md:text-[14px] mx-1.5 md:mx-2">→</span>;

const AIWorkflowSection = () => (
  <section id="ai-workflow" className="relative w-full ai-workflow-wrapper">
    <style>{`
      .ai-workflow-wrapper {
        background: #F5F1E7;
        border-top-left-radius: 48px;
        border-top-right-radius: 48px;
        padding: 60px 20px 80px;
      }
      @media (min-width: 768px) {
        .ai-workflow-wrapper {
          border-top-left-radius: 70px;
          border-top-right-radius: 70px;
          padding: 90px 30px 110px;
        }
      }
      @media (min-width: 1024px) {
        .ai-workflow-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 120px 40px 160px;
        }
      }
    `}</style>

    <div className="mx-auto flex flex-col gap-10 md:gap-14 lg:gap-20 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
        <div>
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[10px] md:text-[11px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI-Enhanced Workflow
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[56px] leading-[1.1] text-[#111] font-medium max-w-[760px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI is part of my workflow.
            <br />
            Not my decision maker.
          </h2>
        </div>
        <p className="text-[11px] md:text-[13px] text-[#4a4a4a] max-w-[320px] leading-[1.6] lg:pt-16">
          AI removes the friction from my process so the craft gets more of my
          attention, not less. Here&apos;s where it plugs in – and where the
          decisions stay human.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div
          className="flex flex-col justify-center"
          style={{
            background: "#FAF9F5",
            borderRadius: "20px",
            border: "1px solid #DAD8D3",
            padding: "28px 24px",
          }}
        >
          <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#282725]">
            I use AI to quickly move from an unclear idea to a structured
            starting point. It helps me explore flows, generate screen ideas,
            write first-pass copy, and identify missing states before I begin
            detailed design work.
          </p>
          <div className="flex flex-wrap items-center gap-y-2 mt-8 md:mt-10">
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
          className="flex flex-col gap-8 md:gap-10"
          style={{
            background: "#FAF9F5",
            borderRadius: "20px",
            border: "1px solid #DAD8D3",
            padding: "28px 24px",
          }}
        >
          <WorkflowBars
            title="Time taken with traditional flow"
            titleColor="#FF6714"
            bars={traditionalBars}
          />
          <WorkflowBars title="Time taken with AI" titleColor="#FF6714" bars={aiBars} />
          <p className="text-[11px] md:text-[13px] leading-[1.6] text-[#FF6714]">
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
// AI-POWERED EXPERIMENTS SECTION — Actual PNG mockups
// ============================================================

const experiments = [
  {
    title: "Claude design",
    desc: "Created landing page concepts, structure, and micro-interactions using Claude.",
    tag: "Real estate",
    image: "/experimnts1.png",
  },
  {
    title: "Google Stitch",
    desc: "Explored landing page layouts and UI directions with Google Stitch.",
    tag: "Real estate",
    image: "/experimnts2.png",
  },
  {
    title: "Majestic AI + ChatGPT",
    desc: "Generated images, enhanced visuals, and explored video concepts for the project.",
    tag: "Real estate",
    image: "/experimnts3.png",
  },
];

const ExperimentCard = ({ item }) => (
  <div className="flex flex-col experiment-card">
    <style>{`
      .experiment-card {
        background: #FAF9F5;
        border-radius: 16px;
        border: 1px solid #DAD8D3;
        padding: 16px;
        gap: 14px;
      }
      @media (min-width: 768px) {
        .experiment-card { padding: 20px; gap: 16px; }
      }
    `}</style>

    {/* Actual mockup image */}
    <div className="relative w-full h-[130px] md:h-[150px] rounded-lg overflow-hidden bg-[#EFEAE0] flex items-center justify-center">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-col gap-2">
      <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.title}
      </h3>
      <p className="text-[11px] md:text-[11.5px] leading-[1.6] text-[#5a5a5a]">{item.desc}</p>
      <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-[#8a8478] mt-1">
        {item.tag}
      </p>
    </div>
  </div>
);

// ============================================================
// PROFILE CARD — Actual PNG assets
// ============================================================

// Profile card asset grid (4 images)
const profileAssets = [
  { src: "/sunflower.png", label: "Sunflower.png" },
  { src: "/dance-lover.png", label: "Danceofmoon.png" },
  { src: "/tea-lover.png", label: "ToolsCover.png" },
  { src: "/beach-lover.png", label: "BeachCover.png" },
];

const ProfileAsset = ({ src, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center">
      <img src={src} alt={label} className="w-full h-full object-contain" />
    </div>
    <p className="text-[9px] md:text-[10px] text-[#5a5a5a]">{label}</p>
  </div>
);

const ProfileCard = () => (
  <div className="relative w-full flex flex-col md:flex-row items-center md:items-stretch profile-card">
    <style>{`
      .profile-card {
        background: #FAF9F5;
        border-radius: 24px;
        border: 3px solid #2E4A3B;
        padding: 24px;
        gap: 30px;
        max-width: 1230px;
        margin: 0 auto;
      }
      @media (min-width: 768px) {
        .profile-card { padding: 40px; gap: 40px; }
      }
    `}</style>

    <div className="flex flex-col items-center md:items-start w-full md:w-[45%]">
      <p className="text-[#C4552E] text-[24px] md:text-[28px] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>
        Maitri Shah
      </p>
      <div className="flex items-center gap-3 mt-2 mb-5 md:mb-6">
        <p className="text-[11px] md:text-[12px] text-[#4a4a4a]">UX/UI Designer</p>
        <span
          className="text-[10px] md:text-[11px] text-[#C4552E] px-2.5 py-0.5 rounded-full"
          style={{ border: "1.5px solid #C4552E", fontFamily: "'Caveat', cursive" }}
        >
          2+ Years
        </span>
      </div>

      <div className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] rounded-lg overflow-hidden" style={{ background: "#E8E2D5" }}>
        <img src="/maitri.jpg" alt="Maitri Shah" className="w-full h-full object-cover" />
        <div
          className="absolute bottom-3 right-3 text-white text-[10px] px-2.5 py-1 rounded"
          style={{ background: "#E5592E" }}
        >
          Hire me →
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-4 md:gap-5 w-full">
      {/* Top row: 2 assets */}
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        <ProfileAsset src={profileAssets[0].src} label={profileAssets[0].label} />
        <ProfileAsset src={profileAssets[1].src} label={profileAssets[1].label} />
      </div>

      {/* Text box */}
      <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #E5E1D6" }}>
        <div className="flex gap-0.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4552E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#F2C94C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8BF]" />
        </div>
        <p className="text-[11px] md:text-[12px] leading-[1.7] text-[#3a3a3a]">
          I use AI to quickly move from an unclear idea to a structured starting
          point. It helps me explore flows, generate screen ideas, write
          first-pass copy, and identify missing states before I begin detailed
          design work.
        </p>
      </div>

      {/* Bottom row: 2 assets */}
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        <ProfileAsset src={profileAssets[2].src} label={profileAssets[2].label} />
        <ProfileAsset src={profileAssets[3].src} label={profileAssets[3].label} />
      </div>
    </div>
  </div>
);

const AIExperimentsSection = () => (
  <section id="ai-experiments" className="relative w-full ai-experiments-wrapper">
    <style>{`
      .ai-experiments-wrapper {
        background: #FFFDF8;
        border-top-left-radius: 48px;
        border-top-right-radius: 48px;
        padding: 60px 20px 80px;
      }
      @media (min-width: 768px) {
        .ai-experiments-wrapper {
          border-top-left-radius: 70px;
          border-top-right-radius: 70px;
          padding: 90px 30px 110px;
        }
      }
      @media (min-width: 1024px) {
        .ai-experiments-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 120px 40px 160px;
        }
      }
    `}</style>

    <div className="mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
        <div>
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[10px] md:text-[11px] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI Experiments
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[56px] leading-[1.1] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            AI-Powered Design
            <br />
            Experiments
          </h2>
        </div>
        <p className="text-[11px] md:text-[13px] text-[#4a4a4a] max-w-[340px] leading-[1.6] lg:pt-16">
          A collection of AI-led explorations where I used Claude and Google
          Stitch to build landing page concepts, and Majestic AI with ChatGPT to
          create images, videos, and visual assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {experiments.map((item) => (
          <ExperimentCard key={item.title} item={item} />
        ))}
      </div>

      <ProfileCard />
    </div>
  </section>
);

// ============================================================
// CONTACT / CTA SECTION
// ============================================================

const orbitCards = [
  { top: "6%", left: "28%", rotate: -14 },
  { top: "2%", left: "39%", rotate: -6 },
  { top: "2%", left: "50%", rotate: 4 },
  { top: "6%", left: "61%", rotate: 12 },
  { top: "22%", left: "10%", rotate: -22 },
  { top: "22%", left: "79%", rotate: 20 },
  { top: "48%", left: "4%", rotate: -28 },
  { top: "48%", left: "85%", rotate: 26 },
  { top: "72%", left: "2%", rotate: -24 },
  { top: "72%", left: "87%", rotate: 24 },
];

const OrbitCard = ({ style, rotate }) => (
  <div
    className="absolute overflow-hidden w-[70px] h-[85px] md:w-[100px] md:h-[120px] lg:w-[140px] lg:h-[170px]"
    style={{
      transform: `rotate(${rotate}deg)`,
      borderRadius: "8px",
      background: "#E8E2D5",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      ...style,
    }}
  >
    <div className="w-full h-full flex items-center justify-center text-[30px] md:text-[40px] lg:text-[54px]">
      🖼️
    </div>
  </div>
);

const SocialIcon = ({ label }) => (
  <a
    href="#"
    className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#C4552E] text-[12px] md:text-[13px] font-semibold transition-transform hover:scale-110"
    style={{ background: "#F0DCCB" }}
  >
    {label}
  </a>
);

const ContactSection = () => (
  <section id="contact" className="relative w-full overflow-hidden contact-wrapper">
    <style>{`
      .contact-wrapper {
        background: #F5F1E7;
        border-top-left-radius: 48px;
        border-top-right-radius: 48px;
        padding: 60px 20px 80px;
      }
      @media (min-width: 768px) {
        .contact-wrapper {
          border-top-left-radius: 70px;
          border-top-right-radius: 70px;
          padding: 80px 30px 100px;
        }
      }
      @media (min-width: 1024px) {
        .contact-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 80px 40px 100px;
          min-height: 1000px;
        }
      }
    `}</style>

    <div className="relative mx-auto h-[500px] md:h-[600px] lg:h-[700px] max-w-[1400px]">
      {orbitCards.map((c, i) => (
        <OrbitCard key={i} style={{ top: c.top, left: c.left }} rotate={c.rotate} />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#E5592E] text-[20px] md:text-[24px] lg:text-[26px] mb-3 md:mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
          Let&apos;s make something useful
        </p>

        <h2 className="text-[34px] md:text-[46px] lg:text-[60px] leading-[1.1] text-[#111] font-medium max-w-[820px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          Have a thoughtful product
          <br />
          problem to solve?
        </h2>

        <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-10">
          <SocialIcon label="in" />
          <SocialIcon label="Bē" />
          <SocialIcon label="M" />
        </div>

        <a
          href="#"
          className="mt-6 md:mt-10 inline-flex items-center gap-2 text-white text-[12px] md:text-[13px] px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:opacity-90 transition-opacity"
          style={{ background: "#282725" }}
        >
          Add your email <span>↗</span>
        </a>
      </div>
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
        id="hero"
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
      <ContactSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; margin: 0; scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;