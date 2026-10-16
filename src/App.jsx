import { useState } from "react";

// ---------- Reusable Grid Background ----------
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

// ---------- Top Nav Pill ----------
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

// ---------- Scroll to explore ----------
const ScrollHint = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#8a8478]">
    <span className="inline-flex items-center justify-center w-5 h-3 border border-[#8a8478] rounded-full">
      <span className="w-0.5 h-1.5 bg-[#8a8478] rounded-full" />
    </span>
    SCROLL TO EXPLORE
  </div>
);

// ---------- Scattered item wrapper ----------
const Item = ({ style, children, className = "" }) => (
  <div className={`absolute select-none ${className}`} style={style}>
    {children}
  </div>
);

// ============================================================
// FRAME 1 — "THE WORLD IS FULL OF UNFINISHED IDEAS"
// ============================================================
const Frame1 = () => (
  <div className="absolute inset-0">
    {/* Maitri Shah (top-left) */}
    <Item style={{ top: "22%", left: "9%" }} className="text-left">
      <p
        className="text-[#C4552E] text-[26px] leading-none"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Maitri Shah
      </p>
      <p className="text-[11px] text-[#4a4a4a] mt-1">
        UX/UI Designer · Mumbai
      </p>
      <p className="text-[11px] text-[#4a4a4a] mt-1.5 flex items-center gap-1">
        View selected work <span className="text-[10px]">↗</span>
      </p>
    </Item>

    {/* THE WORLD IS FULL OF */}
    <Item style={{ top: "22%", left: "34%" }}>
      <h2
        className="text-[34px] leading-[1.05] font-semibold tracking-tight text-[#111]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        THE WORLD IS
        <br />
        FULL OF
      </h2>
    </Item>

    {/* Yellow DESIGN notepad */}
    <Item style={{ top: "18%", left: "61%" }}>
      <div className="w-[64px] h-[86px] bg-[#F2C94C] shadow-md rotate-[-4deg] flex items-center justify-center">
        <p className="text-[13px] font-bold text-[#111] tracking-wider">
          DESIGN
        </p>
      </div>
    </Item>

    {/* Coffee cup image */}
    <Item style={{ top: "20%", left: "76%" }}>
      <div className="w-[60px] h-[50px] flex items-center justify-center text-[38px]">
        ☕
      </div>
    </Item>

    {/* Desk lamp */}
    <Item style={{ top: "38%", left: "9%" }} className="text-[90px] leading-none">
      🛋️
    </Item>

    {/* Headphones */}
    <Item style={{ top: "38%", left: "31%" }} className="text-[70px] leading-none">
      🎧
    </Item>

    {/* Vinyl record */}
    <Item style={{ top: "37%", left: "48%" }} className="text-[80px] leading-none">
      💿
    </Item>

    {/* UNFINISHED IDEAS */}
    <Item style={{ top: "35%", left: "67%" }}>
      <h3
        className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        UNFINISHED
        <br />
        IDEAS
      </h3>
    </Item>

    {/* Blue icon box */}
    <Item style={{ top: "42%", left: "80%" }}>
      <div className="w-[86px] h-[40px] bg-[#6FA8BF] rounded-md shadow-md flex items-center justify-center gap-2 text-white text-[16px]">
        <span>⚏</span>
        <span>✳</span>
        <span>✦</span>
      </div>
    </Item>

    {/* Dotted line + X */}
    <div
      className="absolute"
      style={{ top: "55%", left: "14%", right: "26%" }}
    >
      <div className="relative border-t-2 border-dashed border-[#6FA8BF]">
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#6FA8BF] text-lg">
          ✕
        </div>
      </div>
    </div>

    {/* & FRUSTRATING EXPERIENCES */}
    <Item style={{ top: "57%", left: "30%" }}>
      <h3
        className="text-[26px] leading-[1.05] font-semibold tracking-tight text-[#111]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        & FRUSTRATING
        <br />
        EXPERIENCES
      </h3>
    </Item>

    {/* Polaroid */}
    <Item style={{ top: "50%", left: "73%" }}>
      <div className="w-[86px] h-[96px] bg-white shadow-lg rotate-[6deg] p-1.5">
        <div className="w-full h-[70%] bg-[#e8e8e8] flex items-center justify-center text-[24px]">
          📷
        </div>
      </div>
    </Item>

    {/* I design the path ... */}
    <Item style={{ top: "63%", left: "64%" }}>
      <p
        className="text-[#C4552E] text-[15px] italic"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        I design the path
      </p>
      <h3
        className="text-[24px] leading-[1.05] font-semibold tracking-tight text-[#111] mt-0.5"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        THAT MAKES
        <br />
        THEM SEAMLESS
      </h3>
    </Item>

    {/* Plant */}
    <Item style={{ top: "70%", left: "26%" }} className="text-[64px] leading-none">
      🪴
    </Item>

    {/* Sticky notes cluster */}
    <Item style={{ top: "72%", left: "38%" }}>
      <div className="relative w-[100px] h-[70px]">
        <div className="absolute left-0 top-0 w-[62px] h-[58px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[9px] text-[#333]">Ask why</p>
        </div>
        <div className="absolute left-8 top-2 w-[52px] h-[46px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p
            className="text-[11px] text-[#333]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Simplify
          </p>
        </div>
      </div>
    </Item>
  </div>
);

// ============================================================
// FRAME 2 — "I turn complex ideas into clear, human experiences"
// ============================================================
const Frame2 = () => (
  <div className="absolute inset-0">
    {/* Center content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <p
        className="text-[#C4552E] text-[28px] mb-3"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Maitri Shah
      </p>

      <h1
        className="text-[64px] leading-[1.05] font-normal tracking-tight text-[#111] max-w-[900px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        I turn complex ideas
        <br />
        into{" "}
        <span
          className="text-[#C4552E] italic"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "72px" }}
        >
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

    {/* Left side decor */}
    <Item style={{ top: "18%", left: "8%" }} className="text-[70px] leading-none">
      🎧
    </Item>
    <Item style={{ top: "26%", left: "4%" }} className="text-[80px] leading-none">
      🛋️
    </Item>
    <Item style={{ top: "36%", left: "6%" }} className="text-[70px] leading-none">
      💿
    </Item>
    <Item style={{ top: "68%", left: "5%" }} className="text-[60px] leading-none">
      🪴
    </Item>

    {/* Sticky notes (bottom left) */}
    <Item style={{ top: "80%", left: "10%" }}>
      <div className="relative w-[110px] h-[70px]">
        <div className="absolute left-0 top-0 w-[62px] h-[58px] bg-[#A8CBE0] shadow-sm rotate-[-6deg] flex items-start justify-start p-2">
          <p className="text-[9px] text-[#333]">Ask why</p>
        </div>
        <div className="absolute left-9 top-2 w-[52px] h-[46px] bg-[#E8A87C] shadow-sm rotate-[8deg] flex items-center justify-center">
          <p
            className="text-[11px] text-[#333]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Simplify
          </p>
        </div>
      </div>
    </Item>

    {/* Right side decor */}
    <Item style={{ top: "18%", left: "80%" }}>
      <div className="w-[64px] h-[86px] bg-[#F2C94C] shadow-md rotate-[4deg] flex items-center justify-center">
        <p className="text-[13px] font-bold text-[#111] tracking-wider">
          DESIGN
        </p>
      </div>
    </Item>
    <Item style={{ top: "14%", left: "92%" }} className="text-[44px] leading-none">
      ☕
    </Item>
    <Item style={{ top: "32%", left: "94%" }}>
      <div className="w-[86px] h-[40px] bg-[#6FA8BF] rounded-md shadow-md flex items-center justify-center gap-2 text-white text-[16px]">
        <span>⚏</span>
        <span>✳</span>
        <span>✦</span>
      </div>
    </Item>
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
// MAIN APP
// ============================================================
function App() {
  const [frame, setFrame] = useState(1); // 1 = Frame1, 2 = Frame2

  // handle drag to go back
  const handleDragEnd = (e) => {
    // simple horizontal drag detection
    const startX = e.currentTarget.dataset.startx;
    if (startX) {
      const diff = e.clientX - parseInt(startX);
      if (diff < -60) setFrame(2); // dragged left -> next
      if (diff > 60) setFrame(1); // dragged right -> prev
    }
  };

  const handleDragStart = (e) => {
    e.currentTarget.dataset.startx = e.clientX;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "#F5F1E7",
        cursor: "grab",
      }}
      onClick={() => {
        // click toggles frames (Frame1 -> Frame2, Frame2 -> Frame1)
        setFrame((f) => (f === 1 ? 2 : 1));
      }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {/* Grid background */}
      <GridBackground />

      {/* Frames with fade animation */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${
            frame === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Frame1 />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${
            frame === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Frame2 />
        </div>
      </div>

      {/* Nav (always on top) */}
      <NavBar />

      {/* Scroll hint (always bottom) */}
      <ScrollHint />

      {/* Font loader */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;600&display=swap');
        body { font-family: 'Inter', sans-serif; margin: 0; }
      `}</style>
    </div>
  );
}

export default App;