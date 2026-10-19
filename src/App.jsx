import { useState, useEffect } from "react";

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

const NavBar = () => {
  const navItems = [
    { id: "hero", label: "MS" },
    { id: "problems", label: "Profile" },
    { id: "experience", label: "Case studies" },
    { id: "ai-experiments", label: "Resume" },
  ];

  const [activeId, setActiveId] = useState("hero");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const handleScrollSpy = () => {
      const triggerLine = window.innerHeight * 0.3;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-[420px]">
      <div className="flex items-center justify-center md:justify-start gap-0.5 md:gap-1 bg-[#FAF7EFEB] rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-1.5 md:px-2 py-1 md:py-1.5">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`px-2.5 md:px-4 py-1 md:py-1.5 text-[12px] md:text-[14px] rounded-full transition-all duration-300 whitespace-nowrap text-center ${
                isActive
                  ? "bg-white text-black font-bold shadow-sm"
                  : "text-[#444] hover:bg-[#f2f2f2] font-normal"
              }`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: "21px",
                letterSpacing: "0px",
              }}
            >
              {item.label}
            </button>
          );
        })}
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

const Frame1Mobile = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 pb-16 gap-5">
    <div className="text-center">
      <p
        className="text-[#FF6714] leading-none"
        style={{
          fontFamily: "'Caveat', cursive",
          fontWeight: 600,
          fontSize: "28px",
        }}
      >
        Maitri Shah
      </p>
      <p
        className="text-[#4a4a4a] mt-1"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "19.5px",
        }}
      >
        UX/UI Designer · Mumbai
      </p>
      <p
        className="text-[#4a4a4a] mt-1 flex items-center justify-center gap-1"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "19.5px",
        }}
      >
        View selected work ↗
      </p>
    </div>

    <h2
      className="text-[26px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">THE WORLD IS</span>
      <br />
      <span className="font-bold">FULL OF</span>
    </h2>

    <div className="flex items-center justify-center gap-6 mt-2">
      <img src="/lamp.png" alt="Lamp" className="w-[90px] h-auto" />
      <img src="/headphone.png" alt="Headphones" className="w-[85px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[90px] h-auto" />
    </div>

    <h3
      className="text-[22px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">UNFINISHED</span>
      <br />
      <span className="font-bold">IDEAS</span>
    </h3>

    <div className="flex items-center justify-center gap-6">
      <img src="/design-notepad.png" alt="Design" className="w-[70px] h-auto rotate-[-4deg]" />
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[90px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[85px] h-auto" />
    </div>

    <h3
      className="text-[22px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">& FRUSTRATING</span>
      <br />
      <span className="font-bold">EXPERIENCES</span>
    </h3>

    <div className="flex items-center justify-center gap-10">
      <img src="/plant.png" alt="Plant" className="w-[75px] h-auto" />
      <div className="relative w-[120px] h-[85px]">
        <div className="absolute left-0 top-0 w-[75px] h-[70px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[10px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
        </div>
        <div className="absolute left-10 top-3 w-[64px] h-[56px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[13px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
        </div>
      </div>
    </div>

    <div className="text-center">
      <p
        className="text-[#C4552E] italic"
        style={{ fontFamily: "'Caveat', cursive", fontSize: "13px" }}
      >
        I design the path
      </p>
      <h3
        className="text-[20px] leading-[1.08] text-[#111] mt-0.5 uppercase"
        style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      >
        <span className="font-normal">THAT MAKES</span>
        <br />
        <span className="font-bold">THEM SEAMLESS</span>
      </h3>
    </div>
  </div>
);

const Frame1Desktop = () => (
  <div className="absolute inset-0 hidden lg:block">
    <Item style={{ top: "20.5%", left: "13.5%" }} className="text-left">
      <p
        className="text-[#C4552E] leading-none"
        style={{
          fontFamily: "'Caveat', cursive",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "48px",
          letterSpacing: "0px",
        }}
      >
        Maitri Shah
      </p>
      <p
        className="text-[#4a4a4a]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "19.5px",
          letterSpacing: "0px",
        }}
      >
        UX/UI Designer · Mumbai
      </p>
      <p
        className="text-[#4a4a4a] mt-1.5 flex items-center gap-1"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "19.5px",
          letterSpacing: "0px",
        }}
      >
        View selected work <span className="text-[10px]">↗</span>
      </p>
    </Item>

    <Item style={{ top: "22%", left: "34%" }}>
      <h2
        className="text-[34px] text-[#111] uppercase"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          lineHeight: "36.72px",
          letterSpacing: "0px",
        }}
      >
        <span className="font-normal">THE WORLD IS</span>
        <br />
        <span className="font-bold">FULL OF</span>
      </h2>
    </Item>

    <Item style={{ top: "14%", left: "59%" }}>
      <img src="/design-notepad.png" alt="Design notepad" className="w-[145px] h-auto rotate-[-4deg]" />
    </Item>

    <Item style={{ top: "14%", left: "75%" }}>
      <img src="/coffe.png" alt="Coffee" className="w-[145px] h-auto" />
    </Item>

    <Item style={{ top: "34%", left: "7%" }}>
      <img src="/lamp.png" alt="Desk lamp" className="w-[185px] h-auto" />
    </Item>

    <Item style={{ top: "34%", left: "29%" }}>
      <img src="/headphone.png" alt="Headphones" className="w-[140px] h-auto" />
    </Item>

    <Item style={{ top: "33%", left: "46%" }}>
      <img src="/disc.png" alt="Vinyl record" className="w-[160px] h-auto" />
    </Item>

    <Item style={{ top: "35%", left: "67%" }}>
      <h3
        className="text-[26px] text-[#111] uppercase"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          lineHeight: "28px",
          letterSpacing: "0px",
        }}
      >
        <span className="font-normal">UNFINISHED</span>
        <br />
        <span className="font-bold">IDEAS</span>
      </h3>
    </Item>

    {/* TOOL SYMBOL — next to UNFINISHED IDEAS text, bigger */}
    <Item style={{ top: "41%", left: "82%" }}>
      <img
        src="/tool-symbol.png"
        alt="Tool symbol"
        className="w-[150px] h-auto object-contain"
      />
    </Item>

    <Item style={{ top: "57%", left: "30%" }}>
      <h3
        className="text-[26px] text-[#111] uppercase"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          lineHeight: "28px",
          letterSpacing: "0px",
        }}
      >
        <span className="font-normal">& FRUSTRATING</span>
        <br />
        <span className="font-bold">EXPERIENCES</span>
      </h3>
    </Item>

    {/* CAMERA — only image, no wrapper, no shadow */}
    <Item style={{ top: "46%", left: "71%" }}>
      <img
        src="/camera.png"
        alt="Camera"
        className="w-[160px] h-auto rotate-[6deg] object-contain"
      />
    </Item>

    <Item style={{ top: "63%", left: "64%" }}>
      <p
        className="text-[#C4552E] italic"
        style={{ fontFamily: "'Caveat', cursive", fontSize: "15px" }}
      >
        I design the path
      </p>
      <h3
        className="text-[24px] text-[#111] mt-0.5 uppercase"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          lineHeight: "26px",
          letterSpacing: "0px",
        }}
      >
        <span className="font-normal">THAT MAKES</span>
        <br />
        <span className="font-bold">THEM SEAMLESS</span>
      </h3>
    </Item>

    <Item style={{ top: "68%", left: "24%" }}>
      <img src="/plant.png" alt="Plant" className="w-[130px] h-auto" />
    </Item>

    <Item style={{ top: "69%", left: "36%" }}>
      <div className="relative w-[145px] h-[100px]">
        <div className="absolute left-0 top-0 w-[90px] h-[82px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2.5">
          <p
            className="text-[12px] text-[#333]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ask why
          </p>
        </div>
        <div className="absolute left-12 top-3 w-[76px] h-[66px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p
            className="text-[15px] text-[#333]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
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

const Frame2Mobile = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 gap-4">
    <div className="flex items-center justify-center gap-6 mb-2">
      <img src="/headphone.png" alt="Headphones" className="w-[65px] h-auto" />
      <img src="/lamp.png" alt="Lamp" className="w-[70px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[70px] h-auto" />
    </div>

    <p
      className="text-[#FF6714]"
      style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px" }}
    >
      Maitri Shah
    </p>

    <h1 className="text-[34px] leading-[1.1] text-[#111]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      I turn complex ideas
      <br />
      into{" "}
      <span className="text-[#FF6714] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "38px" }}>
        clear, human
      </span>
      <br />
      experiences.
    </h1>

    <p
      className="text-[11px] text-[#6b6b6b] max-w-[320px] mt-2 leading-relaxed"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      UX/UI designer in Mumbai with 2+ years of experience, bringing
      curiosity, clarity, and care to every screen.
    </p>

    <button
      className="mt-4 bg-[#111] text-white text-[12px] px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Explore my work <span>↗</span>
    </button>

    <div className="flex items-center justify-center gap-6 mt-4">
      <img src="/plant.png" alt="Plant" className="w-[65px] h-auto" />
      <img src="/design-notepad.png" alt="Design" className="w-[60px] h-auto rotate-[-4deg]" />
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[85px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[70px] h-auto" />
    </div>
  </div>
);

const Frame2Desktop = () => (
  <div className="absolute inset-0 hidden lg:block">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <p
        className="text-[#FF6714] mb-3"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "32px", lineHeight: "48px" }}
      >
        Maitri Shah
      </p>

      <h1 className="text-[64px] leading-[1.05] text-[#111] max-w-[900px]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        I turn complex ideas
        <br />
        into{" "}
        <span className="text-[#FF6714] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "72px" }}>
          clear, human
        </span>
        <br />
        experiences.
      </h1>

      <p
        className="text-[13px] text-[#6b6b6b] max-w-[440px] mt-7 leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "19.5px" }}
      >
        UX/UI designer in Mumbai with 2+ years of experience, bringing
        curiosity, clarity, and care to every screen.
      </p>

      <button
        className="mt-8 bg-[#111] text-white text-[13px] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors"
        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "19.5px" }}
      >
        Explore my work <span>↗</span>
      </button>
    </div>

    <Item style={{ top: "14%", left: "6%" }}>
      <img src="/headphone.png" alt="Headphones" className="w-[135px] h-auto" />
    </Item>
    <Item style={{ top: "22%", left: "2%" }}>
      <img src="/lamp.png" alt="Desk lamp" className="w-[165px] h-auto" />
    </Item>
    <Item style={{ top: "34%", left: "4%" }}>
      <img src="/disc.png" alt="Vinyl record" className="w-[135px] h-auto" />
    </Item>
    <Item style={{ top: "66%", left: "3%" }}>
      <img src="/plant.png" alt="Plant" className="w-[130px] h-auto" />
    </Item>

    <Item style={{ top: "78%", left: "8%" }}>
      <div className="relative w-[155px] h-[105px]">
        <div className="absolute left-0 top-0 w-[92px] h-[85px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2.5">
          <p className="text-[12px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
        </div>
        <div className="absolute left-12 top-3 w-[78px] h-[68px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[15px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>
            Simplify
          </p>
        </div>
      </div>
    </Item>

    <Item style={{ top: "14%", left: "78%" }}>
      <img src="/design-notepad.png" alt="Design" className="w-[130px] h-auto rotate-[4deg]" />
    </Item>
    <Item style={{ top: "9%", left: "89%" }}>
      <img src="/coffe.png" alt="Coffee" className="w-[120px] h-auto" />
    </Item>
    <Item style={{ top: "30%", left: "92%" }}>
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[150px] h-auto object-contain" />
    </Item>

    {/* CAMERA — only image, no wrapper, no shadow */}
    <Item style={{ top: "44%", left: "84%" }}>
      <img
        src="/camera.png"
        alt="Camera"
        className="w-[160px] h-auto rotate-[6deg] object-contain"
      />
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
    tag: "Real estate · Product design",
    title: "Making property discovery feel effortless",
    desc: "A placeholder case study for a search and discovery experience that helps people move from browsing to confident decisions.",
    bg: "#F4D0BF",
  },
  {
    id: "02",
    tag: "Real estate · Product design",
    title: "Making property discovery feel effortless",
    desc: "A placeholder case study for a search and discovery experience that helps people move from browsing to confident decisions.",
    bg: "#C9DCEB",
  },
  {
    id: "03",
    tag: "Real estate · Product design",
    title: "Making property discovery feel effortless",
    desc: "A placeholder case study for a search and discovery experience that helps people move from browsing to confident decisions.",
    bg: "#EDDAA6",
  },
];

// Card image — no wrapper, no border, only rotate
const CardImage = () => (
  <img
    src="/card.png"
    alt="Case study preview"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      transform: "rotate(-2deg)",
      objectFit: "contain",
    }}
  />
);

const ProblemCard = ({ item }) => (
  <div
    className="relative w-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10 problem-card"
    style={{
      maxWidth: "1400px",
      background: item.bg,
      border: "1.19px solid rgba(0,0,0,0.06)",
      overflow: "hidden",
    }}
  >
    <div className="flex-1 min-w-0 lg:min-w-[280px] max-w-full lg:max-w-[480px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10">
      <p
        className="text-[#C4552E] mb-1"
        style={{
          fontFamily: "'Caveat', cursive",
          fontWeight: 400,
          fontSize: "30px",
          lineHeight: "42.7px",
          letterSpacing: "0px",
        }}
      >
        {item.id}
      </p>

      <p
        className="text-[#5a5a5a] mb-4 md:mb-5"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "21.35px",
          letterSpacing: "1.42px",
          textTransform: "uppercase",
        }}
      >
        {item.tag}
      </p>

      <h3
        className="text-[#111] mb-4 md:mb-5"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 400,
          fontSize: "52px",
          lineHeight: "56.04px",
          letterSpacing: "-2.4px",
        }}
      >
        {item.title}
      </h3>

      <p
        className="text-[#4a4a4a] mb-5 md:mb-6"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "31.31px",
          letterSpacing: "0px",
        }}
      >
        {item.desc}
      </p>

      <div className="flex flex-col gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#111] hover:opacity-70"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "15.42px",
            lineHeight: "23.13px",
            letterSpacing: "0px",
          }}
        >
          <span
            className="border border-[#111] rounded-full flex items-center justify-center"
            style={{ width: "20px", height: "20px", fontSize: "10px" }}
          >
            ✕
          </span>
          Add your strongest outcome
        </a>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 text-white rounded-full hover:opacity-90 transition-opacity"
          style={{
            background: "#282725",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "28.47px",
            letterSpacing: "0px",
            padding: "12px 28px",
            width: "fit-content",
          }}
        >
          View case study
        </a>
      </div>
    </div>

    <div className="flex-1 w-full flex justify-end items-center -mr-10 lg:-mr-16">
      <CardImage />
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
        padding: 0;
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
          padding: 0;
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
          padding: 0;
          min-height: 557px;
        }
      }
    `}</style>

    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
        <div>
          <p
            className="mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20.53px",
              letterSpacing: "1.92px",
              textTransform: "uppercase",
              color: "#FF6714",
            }}
          >
            Selected work
          </p>
          <h2
            className="text-[#111] font-medium max-w-[600px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: "52px",
              lineHeight: "56.04px",
              letterSpacing: "-2.4px",
            }}
          >
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>

        <p
          className="max-w-[340px] lg:pt-14"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "31.03px",
            letterSpacing: "0px",
            color: "#716F6B",
          }}
        >
          These project slots are ready for your real screenshots, process, and
          measurable outcomes.
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
// EXPERIENCE SECTION
// ============================================================

const toolImageMap = {
  figma: "/figma.png",
  framer: "/M.png",
  figjam: "/figma.png",
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
      <h3 className="text-[24px] md:text-[28px] lg:text-[34px] leading-[1.1] text-[#111] font-medium" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        {item.company}
      </h3>
      <p className="text-[10px] md:text-[11px] text-[#4a4a4a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.role}</p>
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
        border-top-left-radius: 48px;
        border-top-right-radius: 48px;
        padding: 60px 20px 80px;
      }
      @media (min-width: 768px) {
        .experience-section-wrapper {
          border-top-left-radius: 70px;
          border-top-right-radius: 70px;
          padding: 90px 30px 110px;
        }
      }
      @media (min-width: 1024px) {
        .experience-section-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 120px 40px 160px;
        }
      }
    `}</style>

    <div className="mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1401px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
        <div>
          <p className="text-[#C4552E] tracking-[0.15em] mb-3 font-medium text-[11px] md:text-[12px] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Selected work
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>
        <p className="text-[11px] md:text-[12px] text-[#6b6b6b] max-w-[320px] leading-[1.6] lg:pt-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
    <p className="text-[10px] md:text-[11px] tracking-[0.15em] font-medium uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif", color: titleColor }}>
      {title}
    </p>
    <div className="flex flex-col gap-3">
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-3 md:gap-4">
          <p className="text-[11px] md:text-[13px] text-[#282725] w-[80px] md:w-[110px] shrink-0" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>{bar.label}</p>
          <div className="relative flex-1 h-[6px] bg-[#BDBDBD]/70 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: bar.width, background: bar.filled ? "#FF6714" : "#8a8a8a" }}
            />
          </div>
          <p className="text-[10px] md:text-[11px] text-[#5a5a5a] w-[38px] md:w-[42px] text-right shrink-0" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>{bar.value}</p>
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
      fontFamily: "'DM Sans', sans-serif",
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
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[10px] md:text-[11px] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            AI-Enhanced Workflow
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[56px] leading-[1.1] text-[#111] font-medium max-w-[760px]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            AI is part of my workflow.
            <br />
            Not my decision maker.
          </h2>
        </div>
        <p className="text-[11px] md:text-[13px] text-[#4a4a4a] max-w-[320px] leading-[1.6] lg:pt-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
          <p className="text-[13px] md:text-[15px] leading-[1.75] text-[#282725]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
          <p className="text-[11px] md:text-[13px] leading-[1.6] text-[#FF6714]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
  <div className="flex flex-col experiment-card h-full">
    <style>{`
      .experiment-card {
        background: #FAF9F5;
        border-radius: 16px;
        border: 1px solid #DAD8D3;
        padding: 16px;
        gap: 14px;
        height: 100%;
      }
      .experiment-card img.experiment-img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 10px;
      }
      @media (min-width: 768px) {
        .experiment-card { padding: 20px; gap: 16px; }
      }
    `}</style>

    <img
      src={item.image}
      alt={item.title}
      className="experiment-img"
    />

    <div className="flex flex-col gap-2 flex-1">
      <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        {item.title}
      </h3>
      <p className="text-[11px] md:text-[11.5px] leading-[1.6] text-[#5a5a5a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
      <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-[#8a8478] mt-auto pt-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
        {item.tag}
      </p>
    </div>
  </div>
);

// ============================================================
// PROFILE CARD
// ============================================================

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
    <p className="text-[9px] md:text-[10px] text-[#5a5a5a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
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
      <p
        className="text-[#FF6714] leading-none"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "28px" }}
      >
        Maitri Shah
      </p>
      <div className="flex items-center gap-3 mt-2 mb-5 md:mb-6">
        <p
          className="text-[#4a4a4a]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
        >
          UX/UI Designer
        </p>
        <span
          className="text-[#C4552E] px-2.5 py-0.5 rounded-full"
          style={{ border: "1.5px solid #C4552E", fontFamily: "'Caveat', cursive", fontSize: "11px" }}
        >
          2+ Years
        </span>
      </div>

      <div className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] rounded-lg overflow-hidden" style={{ background: "#E8E2D5" }}>
        <img src="/maitri.jpg" alt="Maitri Shah" className="w-full h-full object-cover" />
        <div
          className="absolute bottom-3 right-3 text-white text-[10px] px-2.5 py-1 rounded"
          style={{ background: "#E5592E", fontFamily: "'DM Sans', sans-serif" }}
        >
          Hire me →
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-4 md:gap-5 w-full">
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        <ProfileAsset src={profileAssets[0].src} label={profileAssets[0].label} />
        <ProfileAsset src={profileAssets[1].src} label={profileAssets[1].label} />
      </div>

      <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #E5E1D6" }}>
        <div className="flex gap-0.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4552E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#F2C94C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8BF]" />
        </div>
        <p className="text-[11px] md:text-[12px] leading-[1.7] text-[#3a3a3a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I use AI to quickly move from an unclear idea to a structured starting
          point. It helps me explore flows, generate screen ideas, write
          first-pass copy, and identify missing states before I begin detailed
          design work.
        </p>
      </div>

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
          <p className="text-[#FF6714] tracking-[0.15em] mb-3 font-bold text-[10px] md:text-[11px] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            AI Experiments
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[56px] leading-[1.1] text-[#111] font-medium max-w-[600px]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            AI-Powered Design
            <br />
            Experiments
          </h2>
        </div>
        <p className="text-[11px] md:text-[13px] text-[#4a4a4a] max-w-[340px] leading-[1.6] lg:pt-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          A collection of AI-led explorations where I used Claude and Google
          Stitch to build landing page concepts, and Majestic AI with ChatGPT to
          create images, videos, and visual assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
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
    style={{ background: "#F0DCCB", fontFamily: "'DM Sans', sans-serif" }}
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
        <p
          className="text-[#E5592E] mb-3 md:mb-4"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px" }}
        >
          Let&apos;s make something useful
        </p>

        <h2 className="text-[34px] md:text-[46px] lg:text-[60px] leading-[1.1] text-[#111] font-medium max-w-[820px]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
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
          style={{ background: "#282725", fontFamily: "'DM Sans', sans-serif", lineHeight: "19.5px" }}
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Libre Franklin', sans-serif; margin: 0; scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;