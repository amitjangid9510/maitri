import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown, Briefcase, GraduationCap, ArrowUpRight, Send, Download } from "lucide-react";

/* ============================
   BRAND ICONS (inline SVG)
============================ */
const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const BehanceIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);
const WhatsappIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ============================
   COLORFUL SVG SKILL ICONS
============================ */
const FigmaIcon = () => (<svg viewBox="0 0 38 57" className="w-5 h-5"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>);
const FramerIcon = () => (<svg viewBox="0 0 14 21" className="w-4 h-5"><path fill="#fff" d="M0 0h14v7H7zM0 7h7l7 7H7v7l-7-7z"/></svg>);
const PhotoshopIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><rect width="24" height="24" rx="4" fill="#001e36"/><text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#31a8ff">Ps</text></svg>);
const IllustratorIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><rect width="24" height="24" rx="4" fill="#330000"/><text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ff9a00">Ai</text></svg>);
const NotionIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><rect width="24" height="24" rx="4" fill="#fff"/><text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#000">N</text></svg>);
const ChatGPTIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="11" fill="#10a37f"/><path fill="#fff" d="M12 5.5c-1.6 0-3 1-3.6 2.4-.3 0-.6-.1-.9-.1-2 0-3.5 1.6-3.5 3.5 0 1.4.8 2.6 2 3.1-.1.3-.1.7-.1 1 0 2 1.6 3.5 3.5 3.5 1.2 0 2.2-.6 2.8-1.5.3.1.6.1.9.1 2 0 3.5-1.6 3.5-3.5 0-1.4-.8-2.6-2-3.1.1-.3.1-.7.1-1 0-2-1.6-3.5-3.5-3.5-.5 0-1 .1-1.5.4-.4-.6-1.1-1-1.7-1z"/></svg>);
const ClaudeIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="11" fill="#d97757"/><path fill="#fff" d="M8 16l3-9h2l3 9h-2l-.6-2H10.6L10 16H8zm3.2-3.6h1.6L12 9.5l-.8 2.9z"/></svg>);
const GeminiIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><defs><linearGradient id="gem" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4285f4"/><stop offset="50%" stopColor="#9b72cb"/><stop offset="100%" stopColor="#d96570"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="url(#gem)"/><path fill="#fff" d="M12 5l1.5 5 5 1.5-5 1.5L12 19l-1.5-5-5-1.5 5-1.5z"/></svg>);
const NanoBananaIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="11" fill="#ffe066"/><path fill="#f59e0b" d="M6 15c2-6 8-9 12-7-2 1-3 3-3 5s1 3 2 4c-4-1-9 0-11-2z"/></svg>);
const KlingIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="11" fill="#111"/><path fill="#fff" d="M7 6v12h2v-4l1.5-2L14 18h2.5l-4.2-6 4-5H14l-3.5 4.3V6H7z"/></svg>);
const ClaudeCodeIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="11" fill="#d97757"/><path fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M9 9l-3 3 3 3M15 9l3 3-3 3"/></svg>);

/* ============================
   FLOATING BUBBLES
============================ */
function FloatingBubbles({ trigger }) {
  const bubbles = [
    { size: 14, x: "8%", delay: 0, duration: 6, color: "#60a5fa" },
    { size: 22, x: "18%", delay: 0.6, duration: 7, color: "#a78bfa" },
    { size: 10, x: "28%", delay: 1.2, duration: 5.5, color: "#f472b6" },
    { size: 18, x: "38%", delay: 0.3, duration: 7.5, color: "#34d399" },
    { size: 12, x: "50%", delay: 1.5, duration: 6.5, color: "#22d3ee" },
    { size: 26, x: "62%", delay: 0.8, duration: 8, color: "#fb923c" },
    { size: 16, x: "72%", delay: 1.8, duration: 6, color: "#a855f7" },
    { size: 20, x: "82%", delay: 0.2, duration: 7, color: "#ec4899" },
    { size: 12, x: "92%", delay: 1.1, duration: 5.8, color: "#3b82f6" },
    { size: 15, x: "45%", delay: 2.0, duration: 6.8, color: "#10b981" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.x,
            bottom: -40,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, ${b.color}ee, ${b.color}80 60%, ${b.color}30)`,
            boxShadow: `0 0 12px ${b.color}80, inset -2px -2px 4px ${b.color}50, inset 2px 2px 4px #ffffff40`,
          }}
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={
            trigger
              ? { y: [-40, -700], opacity: [0, 0.9, 0.9, 0], scale: [0.4, 1, 1, 1.1], x: [0, i % 2 === 0 ? 30 : -30, i % 3 === 0 ? -20 : 20, 0] }
              : { y: 0, opacity: 0, scale: 0 }
          }
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, repeatDelay: 1.5, ease: "easeOut", times: [0, 0.1, 0.85, 1] }}
        />
      ))}
    </div>
  );
}

/* ============================
   SPINNING NUMBER
============================ */
function SpinningNumber({ value, inView }) {
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, "");

  const [displayNumber, setDisplayNumber] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;
    setSpinning(true);
    const startTime = Date.now();
    const spinDuration = 1800;
    let raf;
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (progress < 0.9) {
        setDisplayNumber(Math.floor(Math.random() * (targetNumber + 1)));
      } else {
        setDisplayNumber(Math.floor(eased * targetNumber));
      }
      if (progress < 1) raf = requestAnimationFrame(animate);
      else { setDisplayNumber(targetNumber); setSpinning(false); setDone(true); }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, targetNumber, done]);

  return (
    <span className="relative inline-flex items-center">
      <span className={`inline-block tabular-nums transition-all duration-300 ${spinning ? "blur-[1.5px]" : ""}`} style={{ transform: spinning ? "scale(1.05)" : "scale(1)" }}>
        {displayNumber}
      </span>
      <span className="ml-0.5">{suffix}</span>
    </span>
  );
}

/* ============================
   CURSOR — hand + smiley + girl-laptop emoji
============================ */
function WindowsHandCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isTouch, setIsTouch] = useState(false);
  const [inAbout, setInAbout] = useState(false);
  const [inContact, setInContact] = useState(false);

  const springX = useSpring(x, { stiffness: 400, damping: 38, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 38, mass: 0.5 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      setHovering(!!el.closest("a, button, [data-hover]"));

      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        setInAbout(
          e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom
        );
      }

      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        setInContact(
          e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom
        );
      }
    };
    const down = (e) => {
      setClicking(true);
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    };
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <>
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div key={r.id} className="pointer-events-none fixed z-[9998] rounded-full border-2" style={{ mixBlendMode: "difference", borderColor: "white" }} initial={{ width: 0, height: 0, x: r.x, y: r.y, opacity: 0.9 }} animate={{ width: 70, height: 70, x: r.x - 35, y: r.y - 35, opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} />
        ))}
      </AnimatePresence>

      <motion.div style={{ x: springX, y: springY }} className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block">
        <motion.div
          animate={{ scale: clicking ? 0.85 : hovering ? 1.1 : inAbout || inContact ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 26 }}
          style={{ transformOrigin: inAbout || inContact ? "50% 50%" : "7px 2px" }}
        >
          <AnimatePresence mode="wait">
            {/* ABOUT: SMILEY */}
            {inAbout && !inContact ? (
              <motion.div key="smiley" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.4, opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }} className="relative" style={{ marginLeft: "-16px", marginTop: "-16px" }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" fill="#FFD93D" stroke="#111" strokeWidth="1.5" />
                  <motion.circle cx="11" cy="13" r="1.8" fill="#111" animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }} style={{ transformOrigin: "11px 13px" }} />
                  <motion.circle cx="21" cy="13" r="1.8" fill="#111" animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.93, 0.96, 1] }} style={{ transformOrigin: "21px 13px" }} />
                  <path d="M9 20 Q16 27 23 20" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <circle cx="8" cy="18" r="1.6" fill="#FF8FA3" opacity="0.7" />
                  <circle cx="24" cy="18" r="1.6" fill="#FF8FA3" opacity="0.7" />
                </svg>
              </motion.div>
            ) : inContact ? (
              /* CONTACT: 👩‍💻 Woman Technologist emoji */
              <motion.div
                key="girl-laptop"
                initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.4, opacity: 0, rotate: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative select-none"
                style={{ marginLeft: "-22px", marginTop: "-22px" }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontSize: "44px", lineHeight: 1, filter: "drop-shadow(0 4px 12px rgba(59,130,246,0.5))" }}
                >
                  👩‍💻
                </motion.div>
              </motion.div>
            ) : (
              /* DEFAULT: HAND */
              <motion.div key="hand" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.4, opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }}>
                <svg width="22" height="30" viewBox="0 0 22 30" fill="none" style={{ mixBlendMode: "difference" }}>
                  <path d="M7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5V15C10.5 15.2761 10.7239 15.5 11 15.5C11.2761 15.5 11.5 15.2761 11.5 15V5.5C11.5 4.67157 12.1716 4 13 4C13.8284 4 14.5 4.67157 14.5 5.5V15C14.5 15.2761 14.7239 15.5 15 15.5C15.2761 15.5 15.5 15.2761 15.5 15V8C15.5 7.17157 16.1716 6.5 17 6.5C17.8284 6.5 18.5 7.17157 18.5 8V15.5C18.5 15.7761 18.7239 16 19 16C19.2761 16 19.5 15.7761 19.5 15.5V12C19.5 11.1716 20.1716 10.5 21 10.5C21.8284 10.5 22.5 11.1716 22.5 12V19C22.5 25.0751 17.5751 30 11.5 30H11C4.92487 30 0 25.0751 0 19V8.5C0 7.67157 0.671573 7 1.5 7C2.32843 7 3 7.67157 3 8.5V14.5C3 14.7761 3.22386 15 3.5 15C3.77614 15 4 14.7761 4 14.5V3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5V14.5" fill="white" stroke="black" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <style>{`@media (min-width: 768px) { * { cursor: none !important; } }`}</style>
    </>
  );
}

/* ============================
   SCROLL PROGRESS
============================ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX, originX: 0 }} className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[100]" />;
}

/* ============================
   DOWNLOAD RESUME BUTTON
============================ */
function DownloadResumeButton({ variant = "primary" }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  if (variant === "secondary") {
    return (
      <motion.a
        href="/Maitri_Shah_Resume.pdf"
        download="Maitri_Shah_Resume.pdf"
        onClick={handleClick}
        data-hover
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-xs md:text-sm font-medium overflow-hidden transition-colors hover:border-white/60"
      >
        <motion.span className="absolute inset-0 pointer-events-none" initial={{ x: "-100%" }} animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }} style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)", width: "60%" }} />
        <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="relative z-10"><Download size={14} /></motion.span>
        <span className="relative z-10">Resume</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href="/Maitri_Shah_Resume.pdf"
      download="Maitri_Shah_Resume.pdf"
      onClick={handleClick}
      data-hover
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-medium overflow-hidden shadow-lg shadow-purple-500/30"
      style={{ backgroundSize: "200% 100%" }}
    >
      <motion.span className="absolute inset-0" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899, #a855f7, #3b82f6)", backgroundSize: "200% 100%" }} />
      <motion.span className="absolute inset-0 pointer-events-none" initial={{ x: "-100%" }} animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }} style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", width: "50%" }} />
      <motion.span className="absolute inset-0 rounded-full pointer-events-none" animate={{ boxShadow: ["0 0 0 0 rgba(168,85,247,0.6)", "0 0 0 12px rgba(168,85,247,0)"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
      <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex items-center"><Download size={16} /></motion.span>
      <span className="relative z-10">{clicked ? "Downloading..." : "Download Resume"}</span>
      <AnimatePresence>
        {clicked && (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute pointer-events-none"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: (i % 2 === 0 ? 1 : -1) * (20 + i * 8), y: -20 - (i % 3) * 15, opacity: 0, scale: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                style={{ left: "50%", top: "50%", width: 6, height: 6, borderRadius: "50%", background: ["#3b82f6", "#a855f7", "#ec4899", "#10b981", "#f59e0b"][i % 5] }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

/* ============================
   HEADER
============================ */
function Header() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a href="#top" whileHover={{ scale: 1.05 }} className="text-lg font-bold tracking-tight text-white">Maitri<span className="text-white/40">.</span></motion.a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="relative text-sm text-white/70 hover:text-white transition-colors group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <DownloadResumeButton variant="secondary" />
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:inline-flex text-xs md:text-sm px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all">Let's Talk</motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

/* ============================
   HERO
============================ */
function Hero() {
  const heroRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const rawX = useMotionValue(-9999);
  const rawY = useMotionValue(-9999);

  const springX = useSpring(rawX, { stiffness: 320, damping: 32, mass: 0.6 });
  const springY = useSpring(rawY, { stiffness: 320, damping: 32, mass: 0.6 });

  const trailX = useSpring(rawX, { stiffness: 180, damping: 26, mass: 0.9 });
  const trailY = useSpring(rawY, { stiffness: 180, damping: 26, mass: 0.9 });

  const maskImage = useTransform([springX, springY], ([x, y]) => `radial-gradient(ellipse 460px 400px at ${x}px ${y}px, transparent 0%, transparent 32%, rgba(0,0,0,0.5) 62%, black 88%)`);
  const haloLeft = useTransform(trailX, (v) => v - 260);
  const haloTop = useTransform(trailY, (v) => v - 260);

  useEffect(() => {
    if (typeof window !== "undefined") setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (inside) { rawX.set(x); rawY.set(y); setIsHovering(true); } else setIsHovering(false);
    };
    const handleLeave = () => setIsHovering(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [rawX, rawY]);

  const blobRadius = "55% 45% 50% 50% / 50% 55% 45% 50%";

  return (
    <section id="top" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-orange-400/20 to-yellow-500/30 mix-blend-overlay" />
      <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 85% 10%, rgba(255,220,130,0.55) 0%, rgba(255,200,100,0.2) 25%, transparent 55%)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {!isTouch && (<motion.div className="absolute inset-0 bg-black pointer-events-none" style={{ WebkitMaskImage: maskImage, maskImage: maskImage }} />)}
      {isTouch && (<div className="absolute inset-0 bg-black pointer-events-none" style={{ opacity: 0.92 }} />)}

      {!isTouch && (
        <motion.div className="absolute pointer-events-none" style={{ left: haloLeft, top: haloTop, width: 520, height: 520, opacity: isHovering ? 1 : 0, background: "radial-gradient(ellipse at center, rgba(255,215,140,0.22) 0%, rgba(255,180,80,0.08) 35%, rgba(255,180,80,0.02) 55%, transparent 75%)", filter: "blur(30px)", borderRadius: blobRadius, transition: "opacity 0.5s ease" }} />
      )}

      {!isTouch && (
        <motion.div className="absolute pointer-events-none" style={{ left: springX, top: springY, opacity: isHovering ? 1 : 0, transition: "opacity 0.45s ease" }}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div key={i} className="absolute border border-amber-100/30" initial={{ width: 40, height: 40, x: -20, y: -20, opacity: 0.7, borderRadius: "50% 45% 55% 45% / 45% 55% 45% 55%" }} animate={{ width: 340 + i * 65, height: 300 + i * 58, x: -(170 + i * 33), y: -(150 + i * 29), opacity: 0, borderRadius: ["50% 45% 55% 45% / 45% 55% 45% 55%", "45% 55% 50% 50% / 55% 45% 50% 50%", "55% 40% 45% 55% / 40% 55% 45% 60%"], rotate: [0, 12, -8, 15] }} transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.65, ease: "easeOut" }} />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div key={`bubble-${i}`} className="absolute rounded-full bg-amber-100/40" initial={{ width: 4, height: 4, x: Math.cos(i * 1.3) * 35 - 2, y: Math.sin(i * 1.3) * 35 - 2, opacity: 0 }} animate={{ y: [Math.sin(i * 1.3) * 35 - 2, -160 - i * 20, -220], x: [Math.cos(i * 1.3) * 35 - 2, Math.cos(i * 1.3) * 70 + Math.sin(i * 2) * 30], opacity: [0, 0.85, 0], scale: [0.6, 1.4, 0.8] }} transition={{ duration: 3.0, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }} />
          ))}
        </motion.div>
      )}

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-xs md:text-sm uppercase tracking-[0.4em] text-amber-100/80 mb-6">UI/UX Designer • AI</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] drop-shadow-2xl">Maitri Shah</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 text-sm md:text-base text-white/80 max-w-lg mx-auto md:mx-0 drop-shadow-lg">Crafting intuitive digital experiences with a blend of design thinking and AI-driven workflows.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#work" className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg shadow-black/30">View Work</a>
            <DownloadResumeButton variant="primary" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative flex items-center justify-center order-1 md:order-2" data-hover>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-amber-100/30" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-white/15" />
          <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-amber-200/30 blur-[80px]" />
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="relative w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-2 border-white/40 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img src="/491841578_1061399819179060_2724536558206529226_n.jpg" alt="Maitri Shah" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 -left-2 md:top-8 md:left-0 bg-black/80 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-xs text-white">✦ UI/UX</motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute bottom-4 -right-2 md:bottom-8 md:right-0 bg-black/80 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-xs text-white">⚡ AI Workflow</motion.div>
        </motion.div>
      </div>

      {!isTouch && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovering ? 0 : 1 }} transition={{ duration: 0.6 }} className="absolute bottom-24 left-1/2 -translate-x-1/2 text-xs text-amber-100/70 tracking-widest uppercase pointer-events-none">
          🌻 Move your cursor to reveal the field
        </motion.div>
      )}

      <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 z-10">
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

/* ============================
   SECTION WRAPPER
============================ */
function Section({ id, children, className = "" }) {
  return <section id={id} className={`relative py-24 md:py-32 px-6 ${className}`}><div className="max-w-6xl mx-auto">{children}</div></section>;
}

function SectionTitle({ label, title, dark = false }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="mb-14">
      <p className={`text-xs uppercase tracking-[0.4em] mb-3 ${dark ? "text-black/40" : "text-white/40"}`}>{label}</p>
      <h2 className={`text-4xl md:text-6xl font-bold tracking-tight ${dark ? "text-black" : "text-white"}`}>{title}</h2>
    </motion.div>
  );
}

/* ============================
   ABOUT
============================ */
function About() {
  const stats = [
    { value: "2+", label: "Years Experience", glow: "#3b82f6" },
    { value: "15+", label: "Projects Delivered", glow: "#ec4899" },
    { value: "25%", label: "Time Saved with AI", glow: "#a855f7" },
  ];

  const experiences = [
    { role: "UX/UI Designer", company: "Realatte", time: "Apr 2025 — Present", points: ["Design intuitive websites, LPs, microsites", "AI image & video generation", "15+ projects across real estate, healthcare, education", "Reduced design time by 25% using AI"], glow: "#6366f1" },
    { role: "UX/UI Designer", company: "Ivvotiontech", time: "Apr 2023 — Mar 2024", points: ["Designed websites and graphic posts"], glow: "#f97316" },
  ];

  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const sectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 px-6 bg-white text-black overflow-hidden">
      <FloatingBubbles trigger={sectionInView} />
      <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 22, repeat: Infinity }} className="absolute top-20 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-[120px] pointer-events-none" />
      <motion.div animate={{ x: [0, -80, 0], y: [0, 60, 0] }} transition={{ duration: 26, repeat: Infinity }} className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle label="01 — About" title="About Me" dark />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-black/70 leading-relaxed">
            <p>I'm <span className="text-black font-medium">Maitri Shah</span>, a UX/UI Designer based in Mumbai with 2+ years of experience designing intuitive websites, landing pages, and microsites across real estate, healthcare, and education.</p>
            <p>I blend user research and design systems with AI-powered workflows — using tools like ChatGPT, Claude, Nano Banana, and Kling to generate images, videos, and accelerate delivery without compromising quality.</p>
            <p>Currently designing at <span className="text-black font-medium">Realatte</span>, where I've shipped 15+ projects and reduced design time by 25% through AI integration.</p>
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-black/60">
              <span className="flex items-center gap-2"><MapPin size={14} /> Mumbai, India</span>
              <span className="flex items-center gap-2"><Briefcase size={14} /> Realatte</span>
              <span className="flex items-center gap-2"><GraduationCap size={14} /> B.Com, IGNOU</span>
            </div>
          </div>

          <div className="space-y-8">
            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} data-hover className="group relative border border-black/10 rounded-2xl p-4 text-center overflow-hidden bg-white cursor-default transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -inset-24 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" style={{ background: `conic-gradient(from 0deg, transparent, ${s.glow}, transparent 30%)`, filter: "blur(20px)" }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${s.glow}25, transparent 70%)` }} />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 20px ${s.glow}40` }} />
                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-bold text-black transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${s.glow}, #a855f7)`, WebkitBackgroundClip: "text", backgroundClip: "text", backgroundColor: "transparent" }}>
                      <SpinningNumber value={s.value} inView={statsInView} />
                    </div>
                    <div className="text-[10px] md:text-xs text-black/50 mt-1 leading-tight transition-colors group-hover:text-black/80">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-black/10 rounded-2xl p-6 space-y-4 bg-black/[0.02]">
              <h3 className="text-sm uppercase tracking-widest text-black/40">Experience</h3>
              {experiences.map((exp) => (
                <div key={exp.company} data-hover className="group relative border-l-2 border-black/20 pl-4 py-2 rounded-r-lg transition-all duration-300 cursor-default hover:translate-x-1.5">
                  <div className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-r-lg" style={{ background: `linear-gradient(90deg, ${exp.glow}20, transparent 80%)` }} />
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" style={{ background: `linear-gradient(to bottom, ${exp.glow}, transparent)` }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-black font-medium transition-colors">{exp.role}</h4>
                      <span className="text-xs text-black/40 transition-colors group-hover:text-black/70">{exp.time}</span>
                    </div>
                    <p className="text-sm mt-1 font-medium text-black/50 transition-colors group-hover:text-black">{exp.company}</p>
                    <ul className="mt-2 space-y-1">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm text-black/60 flex gap-2 transition-colors group-hover:text-black/80">
                          <span className="text-black/30 transition-colors group-hover:text-black">—</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   SCROLL-LINKED REVEAL
============================ */
function ScrollReveal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [120, 0]);
  const rotateX = useTransform(smoothProgress, [0, 1], [-45, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, y, rotateX, scale, transformPerspective: 1200, transformOrigin: "center bottom", willChange: "transform, opacity" }}>
      {children}
    </motion.div>
  );
}

/* ============================
   SKILLS
============================ */
function Skills() {
  const uxSkills = [
    { name: "User Research", color: "#60a5fa" }, { name: "User Interviews", color: "#a78bfa" },
    { name: "Usability Testing", color: "#f472b6" }, { name: "UX Audit", color: "#fb923c" },
    { name: "Wireframing", color: "#34d399" }, { name: "Competitive Research", color: "#22d3ee" },
  ];
  const designSkills = [
    { name: "Visual Design", color: "#f472b6" }, { name: "Responsive Design", color: "#60a5fa" },
    { name: "Design Systems", color: "#a78bfa" }, { name: "Prototyping", color: "#34d399" },
    { name: "Interaction Design", color: "#fb923c" }, { name: "Micro-interactions", color: "#22d3ee" },
  ];
  const tools = [
    { name: "Figma", Icon: FigmaIcon, color: "#a259ff", tagline: "Primary Design Tool", desc: "Wireframes · Prototypes · Design Systems" },
    { name: "Framer", Icon: FramerIcon, color: "#ffffff", tagline: "Motion & Prototypes", desc: "Interactive prototypes · Landing pages" },
    { name: "Photoshop", Icon: PhotoshopIcon, color: "#31a8ff", tagline: "Raster Editing", desc: "Image editing · Mockups · Assets" },
    { name: "Illustrator", Icon: IllustratorIcon, color: "#ff9a00", tagline: "Vector Design", desc: "Icons · Logos · Illustrations" },
    { name: "Notion", Icon: NotionIcon, color: "#ffffff", tagline: "Documentation", desc: "Case studies · Notes · Project tracking" },
  ];
  const aiTools = [
    { name: "ChatGPT", Icon: ChatGPTIcon, color: "#10a37f", tagline: "Content & Ideation", desc: "Copy · UX writing · Research" },
    { name: "Claude", Icon: ClaudeIcon, color: "#d97757", tagline: "Deep Reasoning", desc: "Long-form · Analysis · UX strategy" },
    { name: "Claude Code", Icon: ClaudeCodeIcon, color: "#d97757", tagline: "AI-Assisted Dev", desc: "Framer Motion · HTML/CSS · Prototypes" },
    { name: "Gemini", Icon: GeminiIcon, color: "#9b72cb", tagline: "Multimodal AI", desc: "Images · Video · Search" },
    { name: "Nano Banana", Icon: NanoBananaIcon, color: "#ffe066", tagline: "AI Image Gen", desc: "Concept art · Hero images" },
    { name: "Kling", Icon: KlingIcon, color: "#ffffff", tagline: "AI Video Gen", desc: "Motion · Promo videos" },
  ];

  const ColorPill = ({ name, color, index }) => (
    <motion.span initial={{ opacity: 0, scale: 0.8, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }} whileHover={{ scale: 1.08, y: -3 }} className="relative text-xs md:text-sm px-4 py-2 rounded-full border text-white/90 cursor-default overflow-hidden group" style={{ borderColor: `${color}40`, backgroundColor: `${color}15` }}>
      <motion.span animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }} className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
      <span className="pl-3">{name}</span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${color}30, transparent 70%)` }} />
    </motion.span>
  );

  const BigToolCard = ({ name, Icon, color, tagline, desc }) => (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} data-hover className="group relative flex flex-col items-start gap-4 p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all overflow-hidden bg-white/[0.02] cursor-default min-h-[180px]">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute -inset-32 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" style={{ background: `conic-gradient(from 0deg, transparent, ${color}, transparent 30%)`, filter: "blur(28px)" }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${color}20, transparent 60%)` }} />
      <div className="relative z-10 w-full">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="scale-150"><Icon /></div>
          </div>
          <motion.div className="text-white/30 group-hover:text-white transition-colors" whileHover={{ x: 3, y: -3 }}><ArrowUpRight size={18} /></motion.div>
        </div>
        <h4 className="text-white font-semibold text-lg mb-1 transition-transform duration-300 group-hover:translate-x-1">{name}</h4>
        <p className="text-xs font-medium mb-2 transition-colors" style={{ color }}>{tagline}</p>
        <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/75 transition-colors">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden bg-black">
      <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div animate={{ x: [0, -80, 0], y: [0, 60, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div animate={{ x: [0, 50, 0], y: [0, 80, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle label="02 — Skills" title="Skills & Tools" />
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="group border border-white/10 rounded-3xl p-8 hover:border-blue-400/30 transition-colors relative overflow-hidden bg-gradient-to-br from-blue-500/[0.03] to-purple-500/[0.03]">
            <div className="flex items-center gap-3 mb-6">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">UX</motion.div>
              <h3 className="text-xl font-semibold text-white">UX Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {uxSkills.map((s, i) => (<ColorPill key={s.name} name={s.name} color={s.color} index={i} />))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.1, duration: 0.7 }} className="group border border-white/10 rounded-3xl p-8 hover:border-pink-400/30 transition-colors relative overflow-hidden bg-gradient-to-br from-pink-500/[0.03] to-orange-500/[0.03]">
            <div className="flex items-center gap-3 mb-6">
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">✦</motion.div>
              <h3 className="text-xl font-semibold text-white">Design Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((s, i) => (<ColorPill key={s.name} name={s.name} color={s.color} index={i} />))}
            </div>
          </motion.div>
        </div>

        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-cyan-500/30">⚙</motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Tools I Use</h3>
              <p className="text-xs text-white/40 mt-1">Design & development stack</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((t) => (<ScrollReveal key={t.name}><BigToolCard {...t} /></ScrollReveal>))}
          </div>
        </div>

        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 6, repeat: Infinity }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-purple-500/30">✨</motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-white">AI Tools</h3>
              <p className="text-xs text-white/40 mt-1">AI-powered design & content workflow</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiTools.map((t) => (<ScrollReveal key={t.name}><BigToolCard {...t} /></ScrollReveal>))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="border border-white/10 rounded-3xl p-8">
          <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black text-lg">🎓</motion.div>
              <div><p className="text-white font-medium">B.Com</p><p className="text-sm text-white/50">IGNOU</p></div>
            </div>
            <div className="flex items-center gap-4">
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-black text-lg">📐</motion.div>
              <div><p className="text-white font-medium">UX/UI Design Course</p><p className="text-sm text-white/50">TOPS Technology</p></div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-3">Target Role</p>
          <p className="text-2xl md:text-3xl font-bold text-white">UI/UX Designer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">+</span> AI</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   MY WORK
============================ */
function Work() {
  const projects = [
    { title: "Real Estate Microsites", tag: "Real Estate", desc: "Designed conversion-focused microsites and landing pages for real estate clients.", year: "2025", color: "#3b82f6" },
    { title: "Healthcare Website", tag: "Healthcare", desc: "Intuitive patient-first website design with accessibility in mind.", year: "2025", color: "#10b981" },
    { title: "Education Platform", tag: "Education", desc: "A learning platform designed to make course discovery effortless.", year: "2025", color: "#f59e0b" },
    { title: "AI Image & Video Gen", tag: "AI", desc: "Leveraged AI tools to generate visual assets, cutting production time by 25%.", year: "2025", color: "#a855f7" },
    { title: "Design System", tag: "Design System", desc: "Built a scalable component library in Figma for consistent product design.", year: "2024", color: "#ec4899" },
    { title: "Graphic Posts & Branding", tag: "Branding", desc: "Designed social graphics and brand collateral at Ivvotiontech.", year: "2024", color: "#06b6d4" },
  ];

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden bg-black">
      <motion.div animate={{ background: ["radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.12), transparent 50%)", "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(168,85,247,0.12), transparent 50%)", "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.12), transparent 50%)"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 pointer-events-none" />
      <motion.div animate={{ x: [0, 120, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }} transition={{ duration: 18, repeat: Infinity }} className="absolute top-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
      <motion.div animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }} transition={{ duration: 22, repeat: Infinity }} className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.06] pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent, #3b82f6, transparent 30%, #a855f7, transparent 60%, #ec4899, transparent)", maskImage: "radial-gradient(circle at center, transparent 20%, black 60%, transparent 90%)", WebkitMaskImage: "radial-gradient(circle at center, transparent 20%, black 60%, transparent 90%)" }} />
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-white/40 pointer-events-none" style={{ left: `${(i * 5.3) % 100}%`, top: `${(i * 7.7) % 100}%` }} animate={{ y: [0, -60 - (i % 5) * 20, 0], x: [0, (i % 2 === 0 ? 30 : -30), 0], opacity: [0, 0.8, 0] }} transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} />
      ))}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle label="03 — Work" title="Selected Work" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: (i % 2) * 0.1, duration: 0.7 }} whileHover={{ y: -6, scale: 1.02 }} data-hover className="group relative border border-white/10 rounded-3xl p-8 overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/25 transition">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${p.color}20, transparent 70%)` }} />
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" style={{ background: p.color }} />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs px-3 py-1 rounded-full border transition-colors" style={{ borderColor: `${p.color}40`, color: p.color, backgroundColor: `${p.color}10` }}>{p.tag}</span>
                  <span className="text-xs text-white/40">{p.year}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  <span>View case</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   CONTACT
============================ */
function Contact() {
  const contactMethods = [
    { icon: Mail, label: "Email", value: "shahmaitri123.ms@gmail.com", href: "mailto:shahmaitri123.ms@gmail.com", gradient: "from-blue-500 to-cyan-500", glow: "#3b82f6" },
    { icon: Phone, label: "Phone", value: "+91 7990904219", href: "tel:+917990904219", gradient: "from-green-500 to-emerald-500", glow: "#10b981" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/shahmaitri", href: "https://www.linkedin.com/in/shahmaitri", gradient: "from-sky-500 to-blue-600", glow: "#0ea5e9" },
    { icon: BehanceIcon, label: "Behance", value: "behance.net/shahmaitri", href: "https://www.behance.net/shahmaitri", gradient: "from-indigo-500 to-purple-600", glow: "#6366f1" },
    { icon: WhatsappIcon, label: "WhatsApp", value: "Chat with me", href: "https://wa.me/917990904219", gradient: "from-green-400 to-green-600", glow: "#22c55e" },
    { icon: MapPin, label: "Location", value: "Mumbai · Open to Ahmedabad / Remote", href: "https://maps.google.com/?q=Mumbai", gradient: "from-pink-500 to-rose-500", glow: "#ec4899" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 border-t border-black/5 overflow-hidden bg-white text-black">
      <motion.div animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-10 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-[120px] pointer-events-none" />
      <motion.div animate={{ x: [0, -100, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }} transition={{ duration: 18, repeat: Infinity }} className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle label="04 — Contact" title="Let's Work Together" dark />
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-black/60 max-w-2xl mb-14 text-base md:text-lg leading-relaxed">
          Open to <span className="text-black font-medium">UI/UX Designer roles with an AI edge</span> — in Ahmedabad or remote. Let's build something thoughtful together.
        </motion.p>

        <motion.a href="mailto:shahmaitri123.ms@gmail.com" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} whileHover={{ scale: 1.01 }} data-hover className="group relative block border border-black/10 rounded-3xl p-8 md:p-10 overflow-hidden mb-8 bg-white shadow-sm hover:shadow-xl transition-shadow">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute -inset-40 opacity-30 pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent, #3b82f6, #a855f7, #ec4899, transparent 40%)", filter: "blur(30px)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.08), rgba(168,85,247,0.06) 40%, transparent 70%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30"><Send size={22} className="text-white" /></motion.div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-1">Drop me a line</p>
                <p className="text-lg md:text-2xl font-semibold text-black">shahmaitri123.ms@gmail.com</p>
              </div>
            </div>
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-black text-sm font-medium">
              <span>Say hello</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.div>
          </div>
        </motion.a>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contactMethods.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel={it.href.startsWith("http") ? "noreferrer noopener" : undefined} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -8, scale: 1.02 }} data-hover className="group relative border border-black/10 rounded-2xl p-6 overflow-hidden bg-white hover:border-black/25 transition-all shadow-sm hover:shadow-xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${it.glow}15, transparent 70%)` }} />
                <motion.div className="absolute top-4 right-4 text-black/30 group-hover:text-black transition-colors" whileHover={{ x: 3, y: -3 }}><ArrowUpRight size={16} /></motion.div>
                <div className="relative z-10">
                  <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }} className={`w-11 h-11 rounded-xl bg-gradient-to-br ${it.gradient} flex items-center justify-center text-white mb-4 shadow-lg`} style={{ boxShadow: `0 8px 24px -8px ${it.glow}80` }}><Icon size={18} /></motion.div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 mb-1.5">{it.label}</p>
                  <p className="text-black text-sm font-medium break-all leading-snug">{it.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-10 flex items-center justify-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-xs md:text-sm text-black/60">Available for freelance & full-time opportunities</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   FOOTER
============================ */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Maitri Shah — Designed & Built with care.</p>
        <a href="#top" className="text-white/50 hover:text-white text-sm transition">Back to top ↑</a>
      </div>
    </footer>
  );
}

/* ============================
   APP
============================ */
function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden antialiased">
      <WindowsHandCursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;