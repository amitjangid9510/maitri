import { useState, useEffect, useRef } from "react";

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

const DotPattern = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.15]"
    style={{
      backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
      backgroundSize: "24px 24px",
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id);
    const handleScrollSpy = () => {
      const triggerLine = window.innerHeight * 0.3;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerLine) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="fixed top-3 sm:top-4 md:top-5 lg:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[80%] md:w-auto max-w-[420px] md:max-w-[460px]">
      <div className="flex items-center justify-center md:justify-start gap-0.5 md:gap-1 bg-[#FAF7EFEB] rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-1.5 md:px-2 py-1 md:py-1.5">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex-1 md:flex-none px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 md:py-1.5 text-[10px] sm:text-[11px] md:text-[12.5px] lg:text-[14px] rounded-full transition-all duration-300 whitespace-nowrap text-center ${
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

/* ============================================================
   SCROLL HINT — always horizontally centered, fades on scroll
   ============================================================ */
const ScrollHint = ({ visible = true }) => (
  <div
    className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 flex items-center gap-2 text-[8px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] tracking-[0.25em] text-[#8a8478] z-20 transition-all duration-500 ease-out"
    style={{
      left: "50%",
      transform: visible ? "translate(-50%, 0)" : "translate(-50%, 12px)",
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
    }}
    aria-hidden={!visible}
  >
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
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 gap-3 sm:gap-5 overflow-y-auto">
    <div className="text-center">
      <p
        className="text-[#FF6714] leading-none"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px" }}
      >
        Maitri Shah
      </p>
      <p
        className="text-[#4a4a4a] mt-1"
        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", lineHeight: "17px" }}
      >
        UX/UI Designer · Mumbai
      </p>
      <p
        className="text-[#4a4a4a] mt-1 flex items-center justify-center gap-1"
        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "11px", lineHeight: "17px" }}
      >
        View selected work ↗
      </p>
    </div>

    <h2
      className="text-[20px] sm:text-[24px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">THE WORLD IS</span>
      <br />
      <span className="font-bold">FULL OF</span>
    </h2>

    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-1 sm:mt-2">
      <img src="/lamp.png" alt="Lamp" className="w-[60px] sm:w-[80px] h-auto" />
      <img src="/headphone.png" alt="Headphones" className="w-[58px] sm:w-[75px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[60px] sm:w-[80px] h-auto" />
    </div>

    <h3
      className="text-[18px] sm:text-[20px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">UNFINISHED</span>
      <br />
      <span className="font-bold">IDEAS</span>
    </h3>

    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <img src="/design-notepad.png" alt="Design" className="w-[50px] sm:w-[62px] h-auto rotate-[-4deg]" />
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[60px] sm:w-[78px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[58px] sm:w-[72px] h-auto" />
    </div>

    <h3
      className="text-[18px] sm:text-[20px] leading-[1.08] text-[#111] text-center uppercase"
      style={{ fontFamily: "'Libre Franklin', sans-serif" }}
    >
      <span className="font-normal">& FRUSTRATING</span>
      <br />
      <span className="font-bold">EXPERIENCES</span>
    </h3>

    <div className="flex items-center justify-center gap-6 sm:gap-10">
      <img src="/plant.png" alt="Plant" className="w-[55px] sm:w-[65px] h-auto" />
      <div className="relative w-[100px] sm:w-[118px] h-[70px] sm:h-[82px]">
        <div className="absolute left-0 top-0 w-[62px] sm:w-[72px] h-[58px] sm:h-[68px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-1.5 sm:p-2">
          <p className="text-[8px] sm:text-[9px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
        </div>
        <div className="absolute left-8 sm:left-10 top-2.5 sm:top-3 w-[54px] sm:w-[62px] h-[48px] sm:h-[54px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[10px] sm:text-[11px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
        </div>
      </div>
    </div>

    <div className="text-center">
      <p className="text-[#111] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "11px" }}>
        I design the path
      </p>
      <h3
        className="text-[16px] sm:text-[18px] leading-[1.08] text-[#111] mt-0.5 uppercase"
        style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      >
        <span className="font-normal">THAT MAKES</span>
        <br />
        <span className="font-bold">THEM SEAMLESS</span>
      </h3>
    </div>
  </div>
);

const Frame1Tablet = () => (
  <div className="absolute inset-0 hidden md:flex lg:hidden items-center justify-center px-8 pt-24 pb-20">
    <div className="w-full max-w-[900px] h-full flex flex-col justify-center gap-6">
      <div className="flex items-start justify-between gap-6">
        <div className="text-left shrink-0">
          <p
            className="text-[#FF6714] leading-none"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px" }}
          >
            Maitri Shah
          </p>
          <p
            className="text-[#4a4a4a] mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", lineHeight: "18px" }}
          >
            UX/UI Designer · Mumbai
          </p>
          <p
            className="text-[#4a4a4a] mt-1 flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", lineHeight: "18px" }}
          >
            View selected work ↗
          </p>
        </div>
        <h2
          className="text-right text-[30px] leading-[1.08] text-[#111] uppercase"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <span className="font-normal">THE WORLD IS</span>
          <br />
          <span className="font-bold">FULL OF</span>
        </h2>
      </div>

      <div className="flex items-center justify-center gap-6 my-2">
        <img src="/lamp.png" alt="Lamp" className="w-[100px] h-auto" />
        <img src="/headphone.png" alt="Headphones" className="w-[90px] h-auto" />
        <img src="/disc.png" alt="Vinyl" className="w-[100px] h-auto" />
        <img src="/design-notepad.png" alt="Design" className="w-[80px] h-auto rotate-[-4deg]" />
        <img src="/coffe.png" alt="Coffee" className="w-[95px] h-auto" />
      </div>

      <div className="flex items-start justify-between gap-6">
        <h3
          className="text-left text-[24px] leading-[1.08] text-[#111] uppercase"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <span className="font-normal">UNFINISHED</span>
          <br />
          <span className="font-bold">IDEAS</span>
        </h3>
        <div className="flex items-center gap-5">
          <img src="/tool-symbol.png" alt="Tool symbol" className="w-[95px] h-auto" />
          <img src="/plant.png" alt="Plant" className="w-[75px] h-auto" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <h3
          className="text-left text-[24px] leading-[1.08] text-[#111] uppercase shrink-0"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <span className="font-normal">& FRUSTRATING</span>
          <br />
          <span className="font-bold">EXPERIENCES</span>
        </h3>
        <div className="relative w-[150px] h-[90px] shrink-0">
          <div className="absolute left-0 top-0 w-[82px] h-[72px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
            <p className="text-[10px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
          </div>
          <div className="absolute left-12 top-3 w-[68px] h-[58px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
            <p className="text-[12px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[#111] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "13px" }}>
          I design the path
        </p>
        <h3
          className="text-[22px] leading-[1.08] text-[#111] mt-0.5 uppercase"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <span className="font-normal">THAT MAKES </span>
          <span className="font-bold">THEM SEAMLESS</span>
        </h3>
      </div>
    </div>
  </div>
);

const Frame1Desktop = () => (
  <div className="absolute inset-0 hidden lg:block">
    <Item style={{ top: "20.5%", left: "13.5%" }} className="text-left">
      <p
        className="text-[#FF6714] leading-none"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "32px", lineHeight: "48px" }}
      >
        Maitri Shah
      </p>
      <p className="text-[#4a4a4a]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: "19.5px" }}>
        UX/UI Designer · Mumbai
      </p>
      <p className="text-[#4a4a4a] mt-1.5 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: "19.5px" }}>
        View selected work <span className="text-[10px]">↗</span>
      </p>
    </Item>

    <Item style={{ top: "22%", left: "34%" }}>
      <h2 className="text-[34px] text-[#111] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif", lineHeight: "36.72px" }}>
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
      <h3 className="text-[26px] text-[#111] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif", lineHeight: "28px" }}>
        <span className="font-normal">UNFINISHED</span>
        <br />
        <span className="font-bold">IDEAS</span>
      </h3>
    </Item>
    <Item style={{ top: "41%", left: "82%" }}>
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[150px] h-auto object-contain" />
    </Item>
    <Item style={{ top: "57%", left: "30%" }}>
      <h3 className="text-[26px] text-[#111] uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif", lineHeight: "28px" }}>
        <span className="font-normal">& FRUSTRATING</span>
        <br />
        <span className="font-bold">EXPERIENCES</span>
      </h3>
    </Item>
    <Item style={{ top: "46%", left: "71%" }}>
      <img src="/camera.png" alt="Camera" className="w-[160px] h-auto rotate-[6deg] object-contain" />
    </Item>
    <Item style={{ top: "63%", left: "64%" }}>
      <p className="text-[#111] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "15px" }}>
        I design the path
      </p>
      <h3 className="text-[24px] text-[#111] mt-0.5 uppercase" style={{ fontFamily: "'Libre Franklin', sans-serif", lineHeight: "26px" }}>
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
          <p className="text-[12px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
        </div>
        <div className="absolute left-12 top-3 w-[76px] h-[66px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[15px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
        </div>
      </div>
    </Item>
  </div>
);

const Frame1 = () => (
  <>
    <div className="md:hidden">
      <Frame1Mobile />
    </div>
    <Frame1Tablet />
    <Frame1Desktop />
  </>
);

// ============================================================
// FRAME 2
// ============================================================

const Frame2Mobile = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 gap-3 sm:gap-4 overflow-y-auto">
    <div className="flex items-center justify-center gap-4 sm:gap-6 mb-1 sm:mb-2">
      <img src="/headphone.png" alt="Headphones" className="w-[48px] sm:w-[60px] h-auto" />
      <img src="/lamp.png" alt="Lamp" className="w-[52px] sm:w-[65px] h-auto" />
      <img src="/disc.png" alt="Vinyl" className="w-[52px] sm:w-[65px] h-auto" />
    </div>

    <p className="text-[#FF6714]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "20px" }}>
      Maitri Shah
    </p>

    <h1 className="text-[24px] sm:text-[30px] leading-[1.1] text-[#111]" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      I turn complex ideas
      <br />
      into{" "}
      <span className="text-[#FF6714] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "28px" }}>
        clear, human
      </span>
      <br />
      experiences.
    </h1>

    <p
      className="text-[10px] sm:text-[11px] text-[#6b6b6b] max-w-[280px] sm:max-w-[320px] mt-2 leading-relaxed"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      UX/UI designer in Mumbai with 2+ years of experience, bringing
      curiosity, clarity, and care to every screen.
    </p>

    <button
      className="mt-3 sm:mt-4 bg-[#111] text-white text-[11px] sm:text-[12px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Explore my work <span>↗</span>
    </button>

    <div className="flex items-center justify-center gap-3 sm:gap-5 mt-3 sm:mt-4">
      <img src="/plant.png" alt="Plant" className="w-[48px] sm:w-[60px] h-auto" />
      <img src="/design-notepad.png" alt="Design" className="w-[44px] sm:w-[55px] h-auto rotate-[-4deg]" />
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[62px] sm:w-[78px] h-auto" />
      <img src="/coffe.png" alt="Coffee" className="w-[52px] sm:w-[65px] h-auto" />
    </div>
  </div>
);

const Frame2Tablet = () => (
  <div className="absolute inset-0 hidden md:block lg:hidden overflow-hidden">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 pt-20 pb-16 z-10">
      <p
        className="text-[#FF6714] mb-2"
        style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", lineHeight: "36px" }}
      >
        Maitri Shah
      </p>

      <h1
        className="text-[42px] leading-[1.05] text-[#111] max-w-[560px]"
        style={{ fontFamily: "'Libre Franklin', sans-serif" }}
      >
        I turn complex ideas
        <br />
        into{" "}
        <span className="text-[#FF6714] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: "48px" }}>
          clear, human
        </span>
        <br />
        experiences.
      </h1>

      <p
        className="text-[12px] text-[#6b6b6b] max-w-[380px] mt-5 leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "20px" }}
      >
        UX/UI designer in Mumbai with 2+ years of experience, bringing
        curiosity, clarity, and care to every screen.
      </p>

      <button
        className="mt-6 bg-[#111] text-white text-[12px] px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#333] transition-colors"
        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "18px" }}
      >
        Explore my work <span>↗</span>
      </button>
    </div>

    <div className="absolute top-[14%] left-[3%] flex flex-col items-center gap-6 opacity-90">
      <img src="/headphone.png" alt="Headphones" className="w-[95px] h-auto" />
      <img src="/lamp.png" alt="Lamp" className="w-[110px] h-auto" />
      <img src="/plant.png" alt="Plant" className="w-[85px] h-auto" />
    </div>

    <div className="absolute top-[12%] right-[3%] flex flex-col items-center gap-5 opacity-90">
      <img src="/design-notepad.png" alt="Design" className="w-[95px] h-auto rotate-[4deg]" />
      <img src="/coffe.png" alt="Coffee" className="w-[85px] h-auto" />
      <img src="/tool-symbol.png" alt="Tool symbol" className="w-[100px] h-auto" />
    </div>

    <div className="absolute bottom-[10%] left-[6%]">
      <div className="relative w-[140px] h-[95px]">
        <div className="absolute left-0 top-0 w-[84px] h-[78px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[11px] text-[#333]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask why</p>
        </div>
        <div className="absolute left-11 top-3 w-[72px] h-[62px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p className="text-[13px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
        </div>
      </div>
    </div>

    <div className="absolute bottom-[12%] right-[6%]">
      <img src="/disc.png" alt="Vinyl" className="w-[105px] h-auto" />
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
          <p className="text-[15px] text-[#333]" style={{ fontFamily: "'Caveat', cursive" }}>Simplify</p>
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
    <Item style={{ top: "44%", left: "84%" }}>
      <img src="/camera.png" alt="Camera" className="w-[160px] h-auto rotate-[6deg] object-contain" />
    </Item>
  </div>
);

const Frame2 = () => (
  <>
    <div className="md:hidden">
      <Frame2Mobile />
    </div>
    <Frame2Tablet />
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

const CardImage = () => (
  <img
    src="/card.png"
    alt="Case study preview"
    style={{ display: "block", width: "100%", height: "auto", transform: "rotate(-2deg)", objectFit: "contain" }}
  />
);

const ProblemCard = ({ item }) => (
  <div
    className="relative w-full flex flex-col md:flex-row lg:flex-row items-center gap-4 sm:gap-6 md:gap-6 lg:gap-10 problem-card"
    style={{
      maxWidth: "1400px",
      background: item.bg,
      border: "1.19px solid rgba(0,0,0,0.06)",
      overflow: "hidden",
    }}
  >
    <div className="flex-1 min-w-0 md:min-w-[260px] lg:min-w-[280px] max-w-full lg:max-w-[480px] px-5 sm:px-6 md:px-7 lg:px-10 py-6 md:py-7 lg:py-10">
      <p
        className="text-[#C4552E] mb-1"
        style={{ fontFamily: "'Caveat', cursive", fontSize: "24px", lineHeight: "34px" }}
      >
        {item.id}
      </p>

      <p
        className="text-[#5a5a5a] mb-3 sm:mb-4 md:mb-4 text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[14px]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          lineHeight: "1.5",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
        }}
      >
        {item.tag}
      </p>

      <h3
        className="text-[#111] mb-3 sm:mb-4 md:mb-4 text-[26px] sm:text-[34px] md:text-[36px] lg:text-[52px]"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 400,
          lineHeight: "1.08",
          letterSpacing: "-1.2px",
        }}
      >
        {item.title}
      </h3>

      <p
        className="text-[#4a4a4a] mb-4 sm:mb-5 md:mb-5 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          lineHeight: "1.6",
        }}
      >
        {item.desc}
      </p>

      <div className="flex flex-col gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#111] hover:opacity-70 text-[13px] sm:text-[14px] md:text-[13.5px] lg:text-[15.42px]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, lineHeight: "1.5" }}
        >
          <span
            className="border border-[#111] rounded-full flex items-center justify-center shrink-0"
            style={{ width: "20px", height: "20px", fontSize: "10px" }}
          >
            ✕
          </span>
          Add your strongest outcome
        </a>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 text-white rounded-full hover:opacity-90 transition-opacity text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
          style={{
            background: "#282725",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            lineHeight: "1.5",
            padding: "10px 22px",
            width: "fit-content",
          }}
        >
          View case study
        </a>
      </div>
    </div>

    <div className="flex-1 w-full flex justify-center md:justify-end items-center px-4 sm:px-6 md:px-4 lg:px-0 md:-mr-6 lg:-mr-16">
      <CardImage />
    </div>
  </div>
);

const ProblemsSection = () => (
  <section id="problems" className="relative w-full problems-section-wrapper">
    <style>{`
      .problems-section-wrapper {
        background: #FFFDF8;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
        padding: 48px 16px 60px;
        margin-top: -40px;
        z-index: 10;
      }
      .problem-card { border-radius: 20px; padding: 0; }
      @media (min-width: 640px) {
        .problems-section-wrapper {
          border-top-left-radius: 48px;
          border-top-right-radius: 48px;
          padding: 56px 20px 70px;
          margin-top: -50px;
        }
        .problem-card { border-radius: 22px; }
      }
      @media (min-width: 768px) {
        .problems-section-wrapper {
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          padding: 72px 28px 90px;
          margin-top: -60px;
        }
        .problem-card { border-radius: 26px; padding: 0; }
      }
      @media (min-width: 1024px) {
        .problems-section-wrapper {
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          padding: 100px 40px 120px;
          margin-top: -100px;
        }
        .problem-card { border-radius: 30.84px; padding: 0; min-height: 557px; }
      }
    `}</style>

    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
        <div>
          <p
            className="mb-2 sm:mb-3 text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[14px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#FF6714",
            }}
          >
            Selected work
          </p>
          <h2
            className="text-[#111] font-medium max-w-[600px] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              lineHeight: "1.08",
              letterSpacing: "-1.2px",
            }}
          >
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>

        <p
          className="max-w-[340px] lg:pt-14 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            lineHeight: "1.65",
            color: "#716F6B",
          }}
        >
          These project slots are ready for your real screenshots, process, and
          measurable outcomes.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-6 lg:gap-10">
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
    className="flex items-center justify-center shrink-0 w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] md:w-[78px] md:h-[78px] lg:w-[129.675px] lg:h-[129.675px]"
    style={{
      background: "#F5F1E7",
      border: "0.75px solid #DAD8D3",
      borderRadius: "4.5px",
      padding: "10px",
    }}
  >
    <img src={toolImageMap[name] || "/figma.png"} alt={name} className="w-full h-full object-contain" />
  </div>
);

const experiences = [
  {
    company: "Logiclopp / Realatte",
    role: "Executive UI/UX Designer / Gen AI + Agentic AI Designer - 08 Apr 2024 - Present",
    tools: ["figma", "claude", "chatgpt", "m"],
  },
  {
    company: "IvotionTech",
    role: "UI/UX Designer - 01 Apr 2022 - 01 May 2023",
    tools: ["figma", "xd", "ai", "ps"],
  },
];

const ExperienceRow = ({ item }) => (
  <div className="flex flex-col md:flex-row md:items-center lg:items-center justify-between gap-5 sm:gap-6 md:gap-8 lg:gap-20">
    <div className="flex flex-col gap-2">
      <h3
        className="text-[#111] text-[24px] sm:text-[30px] md:text-[30px] lg:text-[40px]"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 500,
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          textTransform: "capitalize",
        }}
      >
        {item.company}
      </h3>
      <p
        className="text-[#4a4a4a] text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15.19px]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          lineHeight: "1.5",
          letterSpacing: "0.02em",
          textTransform: "capitalize",
        }}
      >
        {item.role}
      </p>
    </div>
    <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-4">
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
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
        padding: 48px 16px 60px;
      }
      @media (min-width: 640px) {
        .experience-section-wrapper {
          border-top-left-radius: 48px;
          border-top-right-radius: 48px;
          padding: 56px 20px 70px;
        }
      }
      @media (min-width: 768px) {
        .experience-section-wrapper {
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          padding: 80px 28px 100px;
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

    <div className="mx-auto flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-20 max-w-[1401px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6 md:gap-5 lg:gap-8">
        <div>
          <p
            className="mb-2 sm:mb-3 text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[14px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#FF6714",
            }}
          >
            Selected work
          </p>
          <h2
            className="text-[#111] text-[30px] sm:text-[40px] md:text-[44px] lg:text-[68px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 400,
              lineHeight: "1.08",
              letterSpacing: "-1.5px",
            }}
          >
            Problems explored with
            <br />
            purpose.
          </h2>
        </div>

        <p
          className="max-w-[340px] lg:pt-14 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            lineHeight: "1.65",
            color: "#716F6B",
          }}
        >
          These project slots are ready for your real screenshots, process, and
          measurable outcomes.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-20">
        {experiences.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-5 sm:gap-6 md:gap-6 lg:gap-10">
            <ExperienceRow item={item} />
            {idx < experiences.length - 1 && <div className="w-full h-[1px] bg-[#DAD8D3]" />}
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
  { label: "Wireframes", value: "6 hrs", width: "32%" },
  { label: "Prototype", value: "10 hrs", width: "50%" },
  { label: "Documentation", value: "5 hrs", width: "24%" },
];

const aiBars = [
  { label: "Research", value: "4 hrs", width: "20%", filled: true },
  { label: "Wireframes", value: "4 hrs", width: "20%", filled: true },
  { label: "Prototype", value: "5 hrs", width: "25%", filled: true },
  { label: "Documentation", value: "1 hr", width: "8%", filled: true },
];

const WorkflowBars = ({ title, titleColor, bars }) => (
  <div className="flex flex-col gap-3 sm:gap-4">
    <p
      className="text-[10px] sm:text-[11px] md:text-[11.5px] lg:text-[12px]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        lineHeight: "1.5",
        letterSpacing: "1.2px",
        textTransform: "uppercase",
        color: titleColor,
      }}
    >
      {title}
    </p>
    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3 lg:gap-3.5">
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
          <p
            className="text-[#282725] w-[70px] sm:w-[80px] md:w-[95px] lg:w-[110px] shrink-0 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.5" }}
          >
            {bar.label}
          </p>
          <div className="relative flex-1 h-[5px] sm:h-[6px] bg-[#E3E0D8] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: bar.width, background: bar.filled ? "#F26D21" : "#999999" }}
            />
          </div>
          <p
            className="text-[#5a5a5a] w-[42px] sm:w-[46px] md:w-[48px] lg:w-[50px] text-right shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.5" }}
          >
            {bar.value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const FlowStep = ({ label }) => (
  <div
    className="inline-flex items-center justify-center text-[#666666] text-[10px] sm:text-[11px] md:text-[11.5px] lg:text-[14px]"
    style={{
      background: "#FAF9F5",
      border: "1px solid #DAD8D3",
      borderRadius: "4px",
      padding: "5px 10px",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 400,
      lineHeight: "1.5",
    }}
  >
    {label}
  </div>
);

const FlowArrow = () => (
  <span
    className="text-[#A0A0A0] mx-1 sm:mx-1.5 md:mx-1.5 lg:mx-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.5" }}
  >
    →
  </span>
);

const AIWorkflowSection = () => (
  <section id="ai-workflow" className="relative w-full ai-workflow-wrapper">
    <style>{`
      .ai-workflow-wrapper {
        background: #F7F5EE;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
        padding: 48px 16px 60px;
      }
      @media (min-width: 640px) {
        .ai-workflow-wrapper {
          border-top-left-radius: 48px;
          border-top-right-radius: 48px;
          padding: 56px 20px 70px;
        }
      }
      @media (min-width: 768px) {
        .ai-workflow-wrapper {
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          padding: 80px 28px 100px;
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

    <div className="mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-20 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6 md:gap-5 lg:gap-10">
        <div>
          <p
            className="mb-2 sm:mb-3 text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[14px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#FF6714",
            }}
          >
            AI-Enhanced Workflow
          </p>
          <h2
            className="text-[#111] text-[30px] sm:text-[40px] md:text-[44px] lg:text-[68px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 400,
              lineHeight: "1.08",
              letterSpacing: "-1.5px",
            }}
          >
            AI is part of my workflow.
            <br />
            Not my decision maker.
          </h2>
        </div>
        <p
          className="max-w-[340px] lg:pt-16 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            lineHeight: "1.65",
            color: "#4a4a4a",
          }}
        >
          AI removes the friction from my process so the craft gets more of my
          attention, not less. Here&apos;s where it plugs in – and where the
          decisions stay human.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-6 lg:gap-12 items-start">
        <div
          className="flex flex-col justify-start"
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #EAE8E3",
            padding: "24px",
          }}
        >
          <p
            className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              lineHeight: "1.75",
              color: "#282725",
            }}
          >
            I use AI to quickly move from an unclear idea to a structured
            starting point. It helps me explore flows, generate screen ideas,
            write first-pass copy, and identify missing states before I begin
            detailed design work.
          </p>
          <div className="flex flex-wrap items-center gap-y-2 mt-4 sm:mt-5 md:mt-5 lg:mt-auto">
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
          className="flex flex-col justify-start"
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #EAE8E3",
            padding: "24px",
          }}
        >
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-10">
            <WorkflowBars
              title="Time taken with traditional flow"
              titleColor="#FF6714"
              bars={traditionalBars}
            />
            <WorkflowBars title="Time taken with AI" titleColor="#FF6714" bars={aiBars} />
          </div>

          <p
            className="mt-6 sm:mt-8 md:mt-8 lg:mt-auto text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#F26D21",
            }}
          >
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
    desc: "Created landing page concepts, structure, and copy explorations using Claude.",
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
        padding: 14px;
        gap: 12px;
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
        .experiment-card { padding: 18px; gap: 14px; }
      }
      @media (min-width: 1024px) {
        .experiment-card { padding: 20px; gap: 16px; }
      }
    `}</style>

    <img src={item.image} alt={item.title} className="experiment-img" />

    <div className="flex flex-col gap-2 flex-1">
      <h3
        className="text-[#111] text-[17px] sm:text-[18px] md:text-[18px] lg:text-[19px]"
        style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight: 700,
          lineHeight: "1.15",
          letterSpacing: "-0.5px",
        }}
      >
        {item.title}
      </h3>
      <p
        className="text-[#5a5a5a] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          lineHeight: "1.5",
          letterSpacing: "-0.2px",
        }}
      >
        {item.desc}
      </p>
      <a
        href="#"
        className="mt-auto pt-2 hover:opacity-70 transition-opacity inline-flex items-center text-[13px] md:text-[13.5px] lg:text-[14px]"
        style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, lineHeight: "1.2", color: "#111" }}
      >
        Read more →
      </a>
    </div>
  </div>
);

// ============================================================
// PROFILE CARD
// ============================================================

const ProfileCard = () => (
  <div
    className="relative w-full max-w-[1230px] mx-auto overflow-hidden flex flex-col md:flex-row items-stretch"
    style={{
      backgroundColor: "#FEFDFE",
      borderTop: "2px solid #196254",
      borderBottom: "2px solid #196254",
      borderLeft: "6px solid #196254",
      borderRight: "6px solid #196254",
      borderRadius: "24px",
      minHeight: "auto",
    }}
  >
    <div className="relative w-full md:w-[42%] flex flex-col p-6 sm:p-8 md:p-7 lg:p-16 items-center md:items-start border-b md:border-b-0 md:border-r border-[#DAD8D3]/60">
      <DotPattern />

      <div className="relative z-10 w-full flex flex-col items-center md:items-start mt-2">
        <p
          className="text-[#FF6714] leading-none mb-1 text-[32px] sm:text-[36px] md:text-[34px] lg:text-[42px]"
          style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, lineHeight: "1.15" }}
        >
          Maitri Shah
        </p>

        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-6 lg:mb-10 mt-2 flex-wrap justify-center md:justify-start">
          <p
            className="text-[#716F6B] text-[14px] sm:text-[16px] md:text-[14px] lg:text-[18px]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
          >
            UX/UI Designer
          </p>
          <span
            className="text-[#FF6714] px-2.5 sm:px-3 py-0.5 rounded-full flex items-center justify-center text-[12px] sm:text-[14px] md:text-[12px] lg:text-[18px]"
            style={{ border: "1.5px solid #FF6714", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
          >
            2+ Years
          </span>
        </div>

        <div
          className="relative overflow-hidden shadow-md mt-2 shrink-0 w-full max-w-[240px] sm:max-w-[260px] md:max-w-[220px] lg:max-w-[313px]"
          style={{
            aspectRatio: "313 / 380",
            borderRadius: "15px",
            border: "4px solid #FFFFFF",
            background: "#E8E2D5",
          }}
        >
          <img src="/maitri.jpg" alt="Maitri Shah" className="w-full h-full object-cover" />
          <div
            className="absolute bottom-0 right-0 text-white px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 text-[11px] sm:text-[12px] md:text-[11px] lg:text-[14px]"
            style={{ background: "#FF6714", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, borderTopLeftRadius: "8px" }}
          >
            <span className="text-[9px] sm:text-[10px]">◀</span>
            Maitri Shah
          </div>
        </div>
      </div>
    </div>

    <div className="relative w-full md:w-[58%] flex flex-col p-6 sm:p-8 md:p-7 lg:p-16">
      <DotPattern />

      <div className="relative z-10 flex flex-col h-full w-full">
        <div className="flex justify-between items-start w-full px-1 sm:px-2 md:px-4 lg:px-8 mt-2 relative min-h-[130px] sm:min-h-[150px] md:min-h-[160px] lg:min-h-[200px]">
          <div className="flex flex-col items-center absolute" style={{ top: "0px", left: "8%" }}>
            <img
              src="/sunflower.png"
              alt="Sunflower"
              className="w-[82px] sm:w-[100px] md:w-[105px] lg:w-[133.54px]"
              style={{ height: "auto", aspectRatio: "1 / 1", transform: "rotate(16.85deg)", objectFit: "contain" }}
            />
            <p
              className="text-[#111] mt-2 sm:mt-3 md:mt-3 lg:mt-4 text-[11px] sm:text-[13px] md:text-[13px] lg:text-[16px]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Sunflower.png
            </p>
          </div>

          <div className="flex flex-col items-center absolute" style={{ top: "16px", right: "8%" }}>
            <img
              src="/dance-lover.png"
              alt="Dance Lover"
              className="w-[82px] sm:w-[100px] md:w-[105px] lg:w-[133.54px]"
              style={{ height: "auto", aspectRatio: "1 / 1", objectFit: "contain" }}
            />
            <p
              className="text-[#111] mt-2 sm:mt-3 md:mt-3 lg:mt-4 text-[11px] sm:text-[13px] md:text-[13px] lg:text-[16px]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              DanceLover.png
            </p>
          </div>
        </div>

        <div className="relative mt-6 sm:mt-8 md:mt-6 lg:mt-12 w-full px-1 sm:px-2 md:px-2 lg:px-10">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-t-xl" style={{ background: "#e5e5e5" }}>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F67A43]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F2C94C]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#6FA8BF]" />
          </div>

          <div className="absolute top-[10px] sm:top-[12px] right-4 sm:right-6 md:right-4 lg:right-10">
            <img
              src="/sunflower-flower.png"
              alt="Sunflower"
              className="w-[45px] sm:w-[55px] md:w-[55px] lg:w-[75px] h-auto object-contain drop-shadow-md"
            />
          </div>

          <div
            className="p-4 sm:p-5 md:p-4 lg:p-8 rounded-b-xl flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
            style={{ border: "1px solid #DAD8D3", borderTop: "none" }}
          >
            <p
              className="text-[#282725] text-[14px] sm:text-[15px] md:text-[14px] lg:text-[18px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, lineHeight: "1.7" }}
            >
              I use AI to quickly move from an unclear idea to a structured
              starting point. It helps me explore flows, generate screen ideas,
              write first-pass copy, and identify missing states before I begin
              detailed design work.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end w-full px-1 sm:px-2 md:px-4 lg:px-10 mt-auto pt-8 sm:pt-10 md:pt-8 lg:pt-10 pb-4 relative min-h-[130px] sm:min-h-[150px] md:min-h-[150px] lg:min-h-[180px]">
          <div className="flex flex-col items-center absolute" style={{ bottom: "10px", left: "18%" }}>
            <img
              src="/tea-lover.png"
              alt="Tea Lover"
              className="w-[82px] sm:w-[100px] md:w-[105px] lg:w-[133.54px]"
              style={{ height: "auto", aspectRatio: "1 / 1", objectFit: "contain" }}
            />
            <p
              className="text-[#111] mt-2 sm:mt-3 md:mt-2 lg:mt-3 text-[11px] sm:text-[13px] md:text-[13px] lg:text-[16px]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              TeaLover.png
            </p>
          </div>

          <div className="flex flex-col items-center absolute" style={{ bottom: "0px", right: "14%" }}>
            <img
              src="/beach-lover.png"
              alt="Beach Lover"
              className="w-[82px] sm:w-[100px] md:w-[105px] lg:w-[133.54px]"
              style={{ height: "auto", aspectRatio: "1 / 1", objectFit: "contain" }}
            />
            <p
              className="text-[#111] mt-2 sm:mt-3 md:mt-2 lg:mt-3 text-[11px] sm:text-[13px] md:text-[13px] lg:text-[16px]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              BeachLover.png
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIExperimentsSection = () => (
  <section id="ai-experiments" className="relative w-full ai-experiments-wrapper">
    <style>{`
      .ai-experiments-wrapper {
        background: #FFFDF8;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
        padding: 48px 16px 60px;
      }
      @media (min-width: 640px) {
        .ai-experiments-wrapper {
          border-top-left-radius: 48px;
          border-top-right-radius: 48px;
          padding: 56px 20px 70px;
        }
      }
      @media (min-width: 768px) {
        .ai-experiments-wrapper {
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          padding: 80px 28px 100px;
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

    <div className="mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-24 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6 md:gap-5 lg:gap-8">
        <div>
          <p
            className="mb-2 sm:mb-3 text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[14px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#FF6714",
            }}
          >
            AI Experiments
          </p>
          <h2
            className="text-[#111] text-[30px] sm:text-[40px] md:text-[44px] lg:text-[68px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 400,
              lineHeight: "1.08",
              letterSpacing: "-1.5px",
            }}
          >
            AI-Powered Design
            <br />
            Experiments
          </h2>
        </div>
        <p
          className="max-w-[340px] lg:pt-16 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            lineHeight: "1.65",
            color: "#4a4a4a",
          }}
        >
          A collection of AI-led explorations where I used Claude and Google
          Stitch to build landing page concepts, and Magnific AI with ChatGPT to
          create images, videos, and visual assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 lg:gap-6 items-stretch">
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
    className="absolute overflow-hidden w-[50px] h-[62px] sm:w-[64px] sm:h-[78px] md:w-[82px] md:h-[100px] lg:w-[140px] lg:h-[170px]"
    style={{
      transform: `rotate(${rotate}deg)`,
      borderRadius: "8px",
      background: "#E8E2D5",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      ...style,
    }}
  >
    <img src="/last-image.jpg" alt="Orbit photo" className="w-full h-full object-cover" />
  </div>
);

const SocialIcon = ({ label }) => (
  <a
    href="#"
    className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[#C4552E] text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] font-semibold transition-transform hover:scale-110"
    style={{ background: "#F0DCCB", fontFamily: "'DM Sans', sans-serif" }}
  >
    {label}
  </a>
);

const ContactSection = () => (
  <section
    id="contact"
    className="relative w-full overflow-hidden"
    style={{ background: "#F5F1E7", borderTopLeftRadius: "32px", borderTopRightRadius: "32px" }}
  >
    <style>{`
      .contact-wrapper { padding: 48px 16px 0; min-height: auto; }
      @media (min-width: 640px) {
        .contact-wrapper { padding: 56px 20px 0; }
      }
      @media (min-width: 768px) {
        .contact-wrapper { padding: 68px 28px 0; }
        section#contact {
          border-top-left-radius: 60px !important;
          border-top-right-radius: 60px !important;
        }
      }
      @media (min-width: 1024px) {
        .contact-wrapper { padding: 80px 40px 0; }
        section#contact {
          border-top-left-radius: 100px !important;
          border-top-right-radius: 100px !important;
        }
      }
    `}</style>

    <div className="contact-wrapper">
      <div className="relative mx-auto h-[380px] sm:h-[440px] md:h-[500px] lg:h-[680px] max-w-[1400px]">
        {orbitCards.map((c, i) => {
          const hideClass = i >= 8 ? "hidden lg:block" : i >= 6 ? "hidden sm:block" : "";
          return (
            <div key={i} className={hideClass}>
              <OrbitCard style={{ top: c.top, left: c.left }} rotate={c.rotate} />
            </div>
          );
        })}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4">
          <p
            className="mb-3 sm:mb-4 md:mb-4 lg:mb-6 text-[24px] sm:text-[30px] md:text-[32px] lg:text-[40px]"
            style={{
              fontFamily: "'Caveat', cursive",
              fontWeight: 600,
              lineHeight: "1.4",
              textAlign: "center",
              color: "#FF6714",
            }}
          >
            Let&apos;s make something useful
          </p>

          <h2
            className="max-w-[900px] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[67.11px]"
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontWeight: 400,
              lineHeight: "1.08",
              letterSpacing: "-1.2px",
              textAlign: "center",
              color: "#111",
            }}
          >
            Have a thoughtful product
            <br />
            problem to solve?
          </h2>

          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3 lg:gap-4 mt-5 sm:mt-6 md:mt-6 lg:mt-10">
            <SocialIcon label="in" />
            <SocialIcon label="Bē" />
            <SocialIcon label="M" />
          </div>

          <a
            href="#"
            className="mt-5 sm:mt-6 md:mt-6 lg:mt-10 inline-flex items-center gap-2 text-white rounded-full hover:opacity-90 transition-opacity text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px]"
            style={{
              background: "#282725",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              lineHeight: "1.5",
              textAlign: "center",
              padding: "10px 22px",
            }}
          >
            Add your email <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// MAIN APP
// ============================================================
function App() {
  const [frame, setFrame] = useState(1);
  const [hintVisible, setHintVisible] = useState(true);

  // refs used inside listeners so we never depend on stale state
  const frameRef = useRef(1);
  const animatingRef = useRef(false);   // true while the 1s transition is playing
  const lockUntilRef = useRef(0);       // timestamp: any wheel before this is blocked

  // keep frameRef in sync
  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  useEffect(() => {
    const ANIM_DURATION = 1000;

    const playAnimation = (targetFrame) => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      lockUntilRef.current = performance.now() + ANIM_DURATION;
      setFrame(targetFrame);
      window.setTimeout(() => {
        animatingRef.current = false;
      }, ANIM_DURATION);
    };

    // ---- named handlers (so removeEventListener actually works) ----
    const handleWheel = (e) => {
      // if we're not at the very top, let the page scroll normally
      if (window.scrollY > 0) return;

      const now = performance.now();
      const currentlyAnimating = animatingRef.current;

      // during the animation → block everything
      if (currentlyAnimating || now < lockUntilRef.current) {
        e.preventDefault();
        return;
      }

      // at top + frame 1 + scroll down → play animation, block this scroll
      if (e.deltaY > 0 && frameRef.current === 1) {
        e.preventDefault();
        playAnimation(2);
        return;
      }

      // at top + frame 2 + scroll up → reverse animation
      if (e.deltaY < 0 && frameRef.current === 2) {
        e.preventDefault();
        playAnimation(1);
        return;
      }

      // otherwise → allow default (page will start scrolling)
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (window.scrollY > 0) return;

      const now = performance.now();
      const currentlyAnimating = animatingRef.current;

      if (currentlyAnimating || now < lockUntilRef.current) {
        e.preventDefault();
        return;
      }

      const deltaY = touchStartY - e.touches[0].clientY;

      if (deltaY > 8 && frameRef.current === 1) {
        e.preventDefault();
        playAnimation(2);
        return;
      }
      if (deltaY < -8 && frameRef.current === 2) {
        e.preventDefault();
        playAnimation(1);
        return;
      }
    };

    // ---- ScrollHint sync with REAL page scroll ----
    // Visible only while at the top; hides the moment real page scroll starts.
    const handleScroll = () => {
      setHintVisible(window.scrollY <= 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // set initial state correctly on mount
    handleScroll();

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // run ONCE

  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: "#F5F1E7" }}>
      <div
        id="hero"
        className="relative w-full h-screen overflow-hidden"
        style={{ cursor: "default" }}
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
        <ScrollHint visible={hintVisible} />
      </div>

      <ProblemsSection />
      <ExperienceSection />
      <AIWorkflowSection />
      <AIExperimentsSection />
      <ContactSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;600&family=DM+Sans:wght@400;500;700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Libre Franklin', sans-serif; margin: 0; scroll-behavior: smooth; }
        html { -webkit-text-size-adjust: 100%; }
      `}</style>
    </div>
  );
}

export default App;