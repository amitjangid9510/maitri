import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Mail, Phone, MapPin, Palette, ArrowDown, Briefcase, GraduationCap, Sparkles, Code2, Wand2 } from "lucide-react";
import { FaLinkedin, FaBehance } from "react-icons/fa";

/* ============================
   CUSTOM CURSOR (Black & White)
============================ */
function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target;
      if (el.closest("a, button, [data-hover]")) setHovering(true);
      else setHovering(false);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      >
        <motion.div
          animate={{
            width: hovering ? 64 : 36,
            height: hovering ? 64 : 36,
            borderWidth: hovering ? 2 : 1.5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full border border-white"
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
      <style>{`@media (min-width: 768px) { * { cursor: none !important; } }`}</style>
    </>
  );
}

/* ============================
   SCROLL PROGRESS BAR
============================ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[100]"
    />
  );
}

/* ============================
   HEADER / NAVBAR
============================ */
function Header() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          className="text-lg font-bold tracking-tight text-white"
        >
          Maitri<span className="text-white/40">.</span>
        </motion.a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm text-white/70 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs md:text-sm px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
        >
          Let's Talk
        </motion.a>
      </nav>
    </motion.header>
  );
}

/* ============================
   HERO
============================ */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] rounded-full bg-white blur-[120px]"
      />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6"
        >
          UI/UX Designer • AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
        >
          Maitri Shah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-sm md:text-base text-white/60 max-w-xl mx-auto"
        >
          Crafting intuitive digital experiences with a blend of design thinking
          and AI-driven workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

/* ============================
   SECTION WRAPPER
============================ */
function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionTitle({ label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-3">{label}</p>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{title}</h2>
    </motion.div>
  );
}

/* ============================
   ABOUT
============================ */
function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "25%", label: "Time Saved with AI" },
  ];

  return (
    <Section id="about">
      <SectionTitle label="01 — About" title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-white/70 leading-relaxed"
        >
          <p>
            I'm <span className="text-white font-medium">Maitri Shah</span>, a UI/UX Designer
            based in Mumbai with 2+ years of experience designing intuitive websites,
            landing pages, and microsites across real estate, healthcare, and education.
          </p>
          <p>
            I blend user research and design systems with AI-powered workflows —
            using tools like ChatGPT, Claude, Nano Banana, and Kling to generate
            images, videos, and accelerate delivery without compromising quality.
          </p>
          <p>
            Currently designing at <span className="text-white font-medium">Realatte</span>,
            where I've shipped 15+ projects and reduced design time by 25% through
            AI integration.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-sm text-white/60">
            <span className="flex items-center gap-2"><MapPin size={14} /> Mumbai, India</span>
            <span className="flex items-center gap-2"><Briefcase size={14} /> Realatte</span>
            <span className="flex items-center gap-2"><GraduationCap size={14} /> B.Com, IGNOU</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/10 rounded-2xl p-4 text-center hover:border-white/30 transition"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[10px] md:text-xs text-white/50 mt-1 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-white/40">Experience</h3>
            {[
              {
                role: "UX/UI Designer",
                company: "Realatte",
                time: "Apr 2025 — Present",
                points: [
                  "Design intuitive websites, LPs, microsites",
                  "AI image & video generation",
                  "15+ projects across real estate, healthcare, education",
                  "Reduced design time by 25% using AI",
                ],
              },
              {
                role: "UX/UI Designer",
                company: "Ivvotiontech",
                time: "Apr 2023 — Mar 2024",
                points: ["Designed websites and graphic posts"],
              },
            ].map((exp) => (
              <div key={exp.company} className="border-l border-white/20 pl-4 py-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-white font-medium">{exp.role}</h4>
                  <span className="text-xs text-white/40">{exp.time}</span>
                </div>
                <p className="text-sm text-white/50 mt-1">{exp.company}</p>
                <ul className="mt-2 space-y-1">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-white/60 flex gap-2">
                      <span className="text-white/30">—</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============================
   SKILLS
============================ */
function Skills() {
  const groups = [
    {
      title: "UX",
      icon: Sparkles,
      items: [
        "User Research", "User Interviews", "Usability Testing",
        "UX Audit", "Wireframing", "Competitive Research",
      ],
    },
    {
      title: "Design",
      icon: Palette,
      items: [
        "Visual Design", "Responsive Design", "Design Systems",
        "Prototyping", "Interaction Design", "Micro-interactions",
      ],
    },
    {
      title: "Tools",
      icon: Code2,
      items: [
        "Figma", "Framer (Basic)", "Photoshop (Basic)",
        "Illustrator (Basic)", "Notion",
      ],
    },
    {
      title: "AI",
      icon: Wand2,
      items: [
        "ChatGPT", "Claude", "Claude Code",
        "Gemini", "Nano Banana", "Kling",
      ],
    },
  ];

  return (
    <Section id="skills" className="border-t border-white/5">
      <SectionTitle label="02 — Skills" title="Skills & Tools" />

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.1, duration: 0.7 }}
              className="group border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className="text-white/70" />
                  <h3 className="text-xl font-semibold text-white">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + i * 0.04, duration: 0.4 }}
                      whileHover={{ scale: 1.06, backgroundColor: "#ffffff", color: "#000000" }}
                      className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/15 text-white/80 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-10 border border-white/10 rounded-3xl p-8"
      >
        <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">Education</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-white font-medium">B.Com</p>
            <p className="text-sm text-white/50">IGNOU</p>
          </div>
          <div>
            <p className="text-white font-medium">UX/UI Design Course</p>
            <p className="text-sm text-white/50">TOPS Technology</p>
          </div>
        </div>
      </motion.div>

      {/* Target role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-3">Target Role</p>
        <p className="text-2xl md:text-3xl font-bold text-white">
          UI/UX Designer <span className="text-white/40">+</span> AI
        </p>
      </motion.div>
    </Section>
  );
}

/* ============================
   MY WORK
============================ */
function Work() {
  const projects = [
    { title: "Real Estate Microsites", tag: "Real Estate", desc: "Designed conversion-focused microsites and landing pages for real estate clients.", year: "2025" },
    { title: "Healthcare Website", tag: "Healthcare", desc: "Intuitive patient-first website design with accessibility in mind.", year: "2025" },
    { title: "Education Platform", tag: "Education", desc: "A learning platform designed to make course discovery effortless.", year: "2025" },
    { title: "AI Image & Video Gen", tag: "AI", desc: "Leveraged AI tools to generate visual assets, cutting production time by 25%.", year: "2025" },
    { title: "Design System", tag: "Design System", desc: "Built a scalable component library in Figma for consistent product design.", year: "2024" },
    { title: "Graphic Posts & Branding", tag: "Branding", desc: "Designed social graphics and brand collateral at Ivvotiontech.", year: "2024" },
  ];

  return (
    <Section id="work" className="border-t border-white/5">
      <SectionTitle label="03 — Work" title="Selected Work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.7 }}
            whileHover={{ y: -6 }}
            data-hover
            className="group relative border border-white/10 rounded-3xl p-8 overflow-hidden bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/25 transition"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
                  {p.tag}
                </span>
                <span className="text-xs text-white/40">{p.year}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                <span>View case</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============================
   CONTACT
============================ */
function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "shahmaitri123.ms@gmail.com", href: "mailto:shahmaitri123.ms@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7990904219", href: "tel:+917990904219" },
    { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/shahmaitri", href: "https://www.linkedin.com/feed/" },
    { icon: FaBehance, label: "Behance", value: "behance.net/shahmaitri", href: "https://www.behance.net/shahmaitri" },
    { icon: MapPin, label: "Location", value: "Mumbai · Open to Ahmedabad / Remote", href: null },
  ];

  return (
    <Section id="contact" className="border-t border-white/5">
      <SectionTitle label="04 — Contact" title="Let's Work Together" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-white/60 max-w-xl mb-12"
      >
        Open to UI/UX Designer roles with an AI edge — in Ahmedabad or remote.
        Let's build something thoughtful together.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.03] transition"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-white/80" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-white/40">{it.label}</p>
                <p className="text-white text-sm truncate">{it.value}</p>
              </div>
            </motion.div>
          );
          return it.href ? (
            <a key={it.label} href={it.href} target="_blank" rel="noreferrer">
              {Card}
            </a>
          ) : (
            <div key={it.label}>{Card}</div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================
   FOOTER
============================ */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Maitri Shah — Designed & Built with care.
        </p>
        <a href="#top" className="text-white/50 hover:text-white text-sm transition">
          Back to top ↑
        </a>
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
      <CustomCursor />
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