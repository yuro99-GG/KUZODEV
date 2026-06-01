import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Figma,
  FileCode2,
  Github,
  GitBranch,
  Globe2,
  Instagram,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Orbit,
  Palette,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Wind,
  Workflow,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const navIds = navLinks.map((link) => link.id);

const contactEmail = 'kyydevil@proton.me';
const whatsappNumber = '6285694458024';

const socialLinks = [
  { label: 'Email', href: `mailto:${contactEmail}`, icon: Mail },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/', icon: Instagram },
  { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, icon: MessageCircle },
];

const expertiseGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces, layouts, motion, and responsive systems.',
    icon: MonitorSmartphone,
    size: 'lg:col-span-2',
    skills: [
      { name: 'HTML', badge: 'Core', icon: FileCode2 },
      { name: 'CSS', badge: 'Core', icon: Palette },
      { name: 'JavaScript', badge: 'Core', icon: Braces },
      { name: 'React', badge: 'Core', icon: Workflow },
      { name: 'Tailwind CSS', badge: 'Core', icon: Wind },
    ],
  },
  {
    title: 'Backend',
    description: 'Data flow, authentication, APIs, and product logic.',
    icon: Server,
    size: 'lg:col-span-1',
    skills: [
      { name: 'Node.js', badge: 'Working Knowledge', icon: SquareTerminal },
      { name: 'Firebase', badge: 'Working Knowledge', icon: Database },
      { name: 'REST API', badge: 'Working Knowledge', icon: Globe2 },
    ],
  },
  {
    title: 'Tools',
    description: 'A practical stack for shipping clean digital products.',
    icon: Briefcase,
    size: 'lg:col-span-1',
    skills: [
      { name: 'Git', badge: 'Core', icon: GitBranch },
      { name: 'GitHub', badge: 'Core', icon: Github },
      { name: 'Vercel', badge: 'Working Knowledge', icon: Rocket },
      { name: 'VS Code', badge: 'Core', icon: Code2 },
      { name: 'Figma', badge: 'Working Knowledge', icon: Figma },
    ],
  },
  {
    title: 'Currently Exploring',
    description: 'New layers for stronger architecture and richer interaction.',
    icon: Sparkles,
    size: 'lg:col-span-2',
    skills: [
      { name: 'TypeScript', badge: 'Exploring', icon: Braces },
      { name: 'Next.js', badge: 'Exploring', icon: Layers3 },
      { name: 'UI Animation', badge: 'Exploring', icon: Orbit },
      { name: 'Backend Architecture', badge: 'Exploring', icon: ShieldCheck },
    ],
  },
];

const badgeLabels = {
  Core: 'Core',
  'Working Knowledge': 'Working',
  Exploring: 'Exploring',
};

const projectFilters = ['All', 'Web Application', 'Interface Design', 'Experiment'];

const projects = [
  {
    name: 'MinBite',
    category: 'Web Application',
    filterCategory: 'Web Application',
    year: '2026',
    description:
      'A school food ordering platform with product catalog, cart, checkout flow, QRIS payment upload, and admin dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    featured: true,
    tone: 'blue',
  },
  {
    name: 'Cloud Dashboard',
    category: 'Interface Design',
    filterCategory: 'Interface Design',
    year: '2026',
    description: 'A modern infrastructure dashboard concept for managing VPS services and digital products.',
    tags: ['React', 'Tailwind CSS', 'UI Design'],
    tone: 'gold',
  },
  {
    name: 'KuzoDev Digital Space',
    category: 'Personal Portfolio',
    filterCategory: 'Experiment',
    year: '2026',
    description: 'A cinematic planetary portfolio designed as an interactive personal identity.',
    tags: ['React', 'Framer Motion', 'Responsive Design'],
    tone: 'violet',
  },
  {
    name: 'Account Marketplace Concept',
    category: 'Web Application',
    filterCategory: 'Web Application',
    year: '2026',
    description: 'A premium catalog interface for browsing and managing digital game account listings.',
    tags: ['React', 'Firebase', 'Admin Dashboard'],
    compact: true,
    tone: 'peach',
  },
];

const timelineItems = [
  {
    step: '01',
    title: 'Started exploring web development',
    description: 'Learned the foundations of HTML and CSS.',
  },
  {
    step: '02',
    title: 'Built interactive interfaces',
    description: 'Started adding JavaScript logic and user interface interactions.',
  },
  {
    step: '03',
    title: 'Created MinBite',
    description: 'Developed a functional ordering system with checkout and admin features.',
  },
  {
    step: '04',
    title: 'Explored modern frontend development',
    description: 'Started using React, Tailwind CSS, and motion-based interactions.',
  },
  {
    step: '05',
    title: 'Current phase',
    description: 'Improving frontend architecture, backend integration, and visual polish.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Design should feel intentional.',
    description: 'Every visual decision should improve clarity, hierarchy, or interaction.',
  },
  {
    number: '02',
    title: 'Performance is part of the experience.',
    description: 'A polished interface should remain smooth, responsive, and lightweight.',
  },
  {
    number: '03',
    title: 'Small details create strong impressions.',
    description:
      'Motion, spacing, and micro-interactions can transform a functional product into a memorable one.',
  },
];

const stats = [
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 8, suffix: '+', label: 'Technologies Explored' },
  { text: 'Always', label: 'Learning' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.02,
    },
  },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return isMobile;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -52% 0px',
        threshold: [0.15, 0.3, 0.55],
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const isMobile = useIsMobile();
  const activeSection = useActiveSection(navIds);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPreloader(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      <AnimatePresence>{showPreloader && <Preloader />}</AnimatePresence>
      <AnimatedBackground isMobile={isMobile} />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <HeroSection isMobile={isMobile} />
        <AboutSection />
        <ExpertiseSection />
        <ProjectSection />
        <MarqueeSection />
        <JourneySection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid min-h-svh place-items-center overflow-hidden bg-space-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      aria-label="KuzoDev loading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(74,125,255,0.16),transparent_28rem)]" />
      <motion.div
        className="relative flex w-[min(86vw,24rem)] flex-col items-center text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="relative mb-7 grid size-28 place-items-center">
          <div className="absolute inset-0 rounded-full border border-white/10 shadow-glow" />
          <div className="orbital-ring absolute h-20 w-32 rounded-full border-accent-blue/30 animate-orbit-slow" />
          <div className="absolute size-12 rounded-full bg-[radial-gradient(circle_at_35%_26%,rgba(116,221,242,0.38),rgba(74,125,255,0.18)_36%,rgba(7,10,18,1)_72%)] planet-shadow" />
        </div>
        <p className="font-display text-2xl font-extrabold tracking-[0.12em] text-text-primary xs:text-3xl xs:tracking-[0.18em]">
          KUZODEV
        </p>
        <p className="mono-label mt-3 px-2 font-mono text-[0.62rem] text-text-secondary xs:text-[0.68rem]">
          INITIALIZING DIGITAL SPACE
        </p>
        <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent-cyan to-transparent animate-loader-line" />
        </div>
        <p className="mono-label mt-4 font-mono text-[0.62rem] text-accent-cyan xs:text-[0.68rem]">SYSTEM READY</p>
      </motion.div>
    </motion.div>
  );
}

function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-4 z-50 px-3 sm:top-5"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35, ease: 'easeOut' }}
      >
        <nav
          className={`mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-full border px-4 transition-all duration-300 md:px-5 ${
            scrolled
              ? 'border-white/15 bg-space-navy/[0.88] shadow-card backdrop-blur-md'
              : 'border-white/10 bg-white/[0.055] backdrop-blur-sm'
          }`}
          aria-label="Primary navigation"
        >
          <a href="#home" className="group flex items-center gap-3" aria-label="KuzoDev home" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] font-display text-sm font-extrabold tracking-tight text-text-primary md:hidden">
              KD
            </span>
            <span className="hidden items-center gap-3 md:flex">
              <span className="font-display text-sm font-extrabold tracking-[0.18em] text-text-primary">KUZODEV</span>
              <span className="mono-label flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.62rem] uppercase text-text-secondary">
                <span className="size-1.5 rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(116,221,242,0.9)]" />
                Live
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  activeSection === link.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-sm font-semibold text-space-deep shadow-[0_0_30px_rgba(244,247,255,0.12)] transition hover:bg-white lg:flex"
            >
              Let&apos;s Connect
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-text-primary transition hover:border-white/20 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="size-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="size-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu open={open} onClose={closeMenu} activeSection={activeSection} />
    </>
  );
}

function MobileMenu({ open, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-space-deep/[0.92] px-4 pb-6 pt-28 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
        >
          <motion.div
            className="glass flex h-full min-h-[26rem] flex-col justify-between rounded-[24px] p-5 sm:p-6"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="mono-label font-mono text-xs uppercase text-accent-cyan">Navigation</p>
              <div className="mt-7 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-2xl font-semibold transition ${
                      activeSection === link.id
                        ? 'border-white/[0.16] bg-white/[0.08] text-text-primary'
                        : 'border-white/[0.08] bg-white/[0.035] text-text-secondary hover:border-white/[0.16] hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-text-secondary transition hover:border-white/20 hover:text-text-primary"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedBackground({ isMobile }) {
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 18;
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: `${(index * 37) % 100}%`,
      top: `${(index * 53 + 12) % 100}%`,
      size: `${index % 6 === 0 ? 2 : 1}px`,
      opacity: 0.22 + ((index * 7) % 24) / 100,
      delay: `${(index % 12) * -1.6}s`,
    }));
  }, [isMobile]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(74,125,255,0.12),transparent_28rem),radial-gradient(circle_at_82%_22%,rgba(141,114,255,0.1),transparent_30rem),radial-gradient(circle_at_60%_86%,rgba(116,221,242,0.07),transparent_34rem)]" />
      <div className="absolute inset-[-5rem]">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/[0.035] blur-[0.2px] md:h-[54rem] md:w-[54rem]" />
    </div>
  );
}

function ScrollReveal({ children, className = '', as = motion.div, delay = 0 }) {
  const Component = as;
  const reducedMotion = useReducedMotion();

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={
        reducedMotion
          ? { duration: 0.18, delay }
          : { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </Component>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mono-label mb-5 flex items-center gap-3 font-mono text-xs uppercase text-accent-cyan">
      <span className="h-px w-8 bg-accent-cyan/50" />
      {children}
    </div>
  );
}

function HeroSection({ isMobile }) {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pb-14 pt-28 md:pb-16 md:pt-[7.5rem]"
      aria-label="KuzoDev hero"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="mono-label rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 font-mono text-[0.62rem] uppercase text-text-secondary sm:text-[0.66rem]">
              KUZODEV / DIGITAL BUILDER / 2026
            </span>
            <span className="mono-label inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1.5 font-mono text-[0.62rem] uppercase text-accent-cyan sm:text-[0.66rem]">
              <span className="size-1.5 rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(116,221,242,0.85)]" />
              Available for selected projects
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-[14.5ch] text-balance font-display text-[clamp(2.35rem,8.5vw,5.75rem)] font-extrabold leading-[1.04] tracking-normal text-text-primary sm:max-w-[13.2ch] lg:leading-[0.98]"
          >
            Building digital experiences that feel{' '}
            <span className="gradient-text inline-block">ahead of their time.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
          >
            I&apos;m KuzoDev, a developer focused on crafting modern, functional, and visually refined digital products
            through code, design, and interaction.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:flex sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-center text-sm font-bold leading-tight text-space-deep transition hover:bg-white"
            >
              <span>Explore My Work</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.055] px-5 py-2.5 text-center text-sm font-semibold leading-tight text-text-primary transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              About KuzoDev
            </a>
          </motion.div>
          <motion.ul
            variants={fadeUp}
            className="mt-8 grid gap-2.5 text-sm text-text-secondary md:grid-cols-3"
          >
            {['Based in Tangerang, Indonesia', 'Open to collaborations', 'React / UI Motion / Web Development'].map(
              (item) => (
                <li
                  key={item}
                  className="hero-meta-card flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 leading-6"
                >
                  <span>{item}</span>
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[36rem] justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.72, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <PlanetVisual compact={isMobile} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-text-muted/70 xl:flex">
        <span>Scroll to explore</span>
        <span className="h-9 w-px overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-full bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent animate-pulse-line" />
        </span>
      </div>
    </section>
  );
}

function PlanetVisual({ compact }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const shouldInteract = false && !compact && !reducedMotion;

  const handlePointerMove = (event) => {
    if (!shouldInteract) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setPointer({ x, y });
  };

  return (
    <div
      className="relative aspect-square w-[min(70vw,28rem)] md:w-[min(38vw,30rem)]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <motion.div
        className="absolute inset-[10%] animate-float-slow"
        animate={{
          x: shouldInteract ? pointer.x * 16 : 0,
          y: shouldInteract ? pointer.y * 16 : 0,
          rotate: shouldInteract ? pointer.x * 2.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <div className="planet-glow-shell absolute inset-[-10%] rounded-full blur-lg" />
        <div className="orbital-ring absolute left-1/2 top-1/2 h-[42%] w-[142%] -translate-x-1/2 -translate-y-1/2 rounded-full border-white/[0.16]" />
        <div className="orbital-ring absolute left-1/2 top-1/2 h-[48%] w-[154%] -translate-x-1/2 -translate-y-1/2 rounded-full border-accent-violet/[0.18]" />
        <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_34%_24%,rgba(244,247,255,0.16),rgba(116,221,242,0.12)_18%,rgba(74,125,255,0.18)_34%,rgba(8,12,24,0.98)_72%)] planet-shadow">
          <div className="planet-atmosphere absolute inset-0 rounded-full" />
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(122deg,transparent_0%,rgba(255,255,255,0.09)_36%,transparent_52%)] opacity-70" />
          <div className="absolute inset-[12%] rounded-full border border-white/[0.035]" />
          <div className="absolute left-[17%] top-[24%] h-12 w-24 rotate-[-18deg] rounded-full bg-accent-cyan/10 blur-md" />
        </div>
        <div className="absolute inset-[3%] animate-orbit">
          <span className="absolute left-[80%] top-[47%] size-3 rounded-full bg-accent-cyan shadow-[0_0_22px_rgba(116,221,242,0.8)]" />
        </div>
      </motion.div>
      <div className="absolute inset-0 rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute bottom-[3%] left-1/2 hidden -translate-x-1/2 rounded-full border border-white/[0.08] bg-space-deep/[0.5] px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-text-muted/75 lg:block">
        Orbital Interface
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-pad relative" aria-labelledby="about-title">
      <div className="container-x">
        <ScrollReveal>
          <SectionLabel>01 / About</SectionLabel>
          <h2
            id="about-title"
            className="max-w-3xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
          >
            Halo, aku Zaky.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <ScrollReveal className="relative">
            <ProfileFrame />
          </ScrollReveal>
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div className="glass rounded-[24px] p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                    Student Developer
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-text-secondary">
                    SMK PGRI 109 Tangerang
                  </span>
                </div>
                <p className="mt-5 text-pretty text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                  Halo, aku Zaky. Aku masih remaja dan saat ini bersekolah di SMK PGRI 109 Tangerang. Aku tertarik
                  dengan dunia teknologi, terutama hal-hal yang berkaitan dengan komputer dan pengembangan website.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    'Belajar hal baru',
                    'Mengembangkan website',
                    'Meningkatkan skill',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-text-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-pretty mt-5 rounded-3xl border border-accent-blue/20 bg-accent-blue/10 p-4 text-base font-semibold leading-7 text-text-primary sm:text-lg sm:leading-8">
                  Aku terus berusaha meningkatkan kemampuan, menambah pengalaman, dan mengembangkan diri agar bisa
                  mencapai tujuan yang aku inginkan di masa depan.
                </p>
              </div>
            </ScrollReveal>
            <motion.div
              className="mt-5 grid gap-4 sm:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((item) => (
                <StatsCard key={item.label} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileFrame() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(16,23,42,0.84),rgba(7,10,18,0.92))] p-5 shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(74,125,255,0.18),transparent_16rem),radial-gradient(circle_at_65%_74%,rgba(141,114,255,0.14),transparent_14rem)]" />
      <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-white/[0.18]" />
      <div className="absolute right-6 top-6 h-10 w-10 border-r border-t border-white/[0.18]" />
      <div className="absolute bottom-6 left-6 h-10 w-10 border-b border-l border-white/[0.18]" />
      <div className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-white/[0.18]" />

      <div className="relative z-10 flex h-full min-h-[21rem] flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="mono-label max-w-[calc(100%-2rem)] rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-[0.6rem] uppercase text-text-secondary sm:text-[0.64rem]">
            Developer Profile / KuzoDev
          </span>
          <span className="size-2 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(116,221,242,0.8)]" />
        </div>
        <div className="relative mx-auto grid aspect-square w-[min(70vw,18rem)] place-items-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="orbital-ring absolute h-[48%] w-[128%] rounded-full border-white/[0.12]" />
          <div className="orbital-ring absolute h-[58%] w-[150%] rounded-full border-accent-blue/20 animate-orbit-slow" />
          <div className="relative grid size-[68%] place-items-center rounded-full bg-[radial-gradient(circle_at_36%_28%,rgba(244,247,255,0.2),rgba(116,221,242,0.11)_24%,rgba(74,125,255,0.15)_42%,rgba(7,10,18,1)_76%)] planet-shadow">
            <Code2 className="size-14 text-accent-cyan/80" />
          </div>
        </div>
        <div className="mono-label grid grid-cols-3 gap-2 font-mono text-[0.58rem] uppercase text-text-muted sm:gap-3 sm:text-[0.62rem]">
          <span className="text-center sm:text-left">Clean UI</span>
          <span className="text-center sm:text-left">Motion</span>
          <span className="text-center sm:text-left">Systems</span>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ value, suffix = '', text, label }) {
  return (
    <motion.div variants={fadeUp} className="glass-subtle rounded-[22px] p-5">
      <div className="font-display text-2xl font-extrabold text-text-primary md:text-3xl">
        {text ? text : <Counter value={value} suffix={suffix} />}
      </div>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </motion.div>
  );
}

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(motionValue, value, { duration: 1.25, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad relative" aria-labelledby="expertise-title">
      <div className="container-x">
        <ScrollReveal>
          <SectionLabel>02 / Expertise</SectionLabel>
          <h2
            id="expertise-title"
            className="max-w-3xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
          >
            Tools used to turn ideas into working products.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {expertiseGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </motion.div>

        <MarqueeStrip text="REACT / JAVASCRIPT / FIREBASE / UI MOTION / RESPONSIVE DESIGN / WEB DEVELOPMENT" compact />
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  const GroupIcon = group.icon;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glass premium-card group rounded-[24px] p-5 transition-colors hover:border-white/[0.18] md:p-6 ${group.size}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-5 grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-accent-cyan">
            <GroupIcon className="size-5" />
          </div>
          <h3 className="text-balance font-display text-xl font-bold text-text-primary md:text-2xl">{group.title}</h3>
          <p className="text-pretty mt-2 max-w-md text-sm leading-6 text-text-muted">{group.description}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {group.skills.map(({ name, badge, icon: Icon }) => (
          <div
            key={name}
            className="skill-tile min-w-0 rounded-2xl border border-white/[0.08] p-3 transition hover:-translate-y-0.5 hover:border-white/[0.16]"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-space-deep/70 text-accent-blue">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug text-text-primary">{name}</p>
                <p className="mt-1 text-[0.72rem] leading-none text-text-muted">{badgeLabels[badge] ?? badge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function ProjectSection() {
  const [filter, setFilter] = useState('All');
  const visibleProjects = projects.filter((project) => filter === 'All' || project.filterCategory === filter);

  return (
    <section id="projects" className="section-pad relative" aria-labelledby="projects-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <SectionLabel>03 / Selected Work</SectionLabel>
            <h2
              id="projects-title"
              className="max-w-3xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
            >
              Projects designed with purpose and precision.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`min-h-10 rounded-full border px-3.5 text-sm font-medium leading-tight transition sm:px-4 ${
                  filter === item
                    ? 'border-white/[0.18] bg-text-primary text-space-deep shadow-[0_0_22px_rgba(244,247,255,0.12)]'
                    : 'border-white/10 bg-white/[0.045] text-text-secondary hover:border-white/[0.18] hover:bg-white/[0.065] hover:text-text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </ScrollReveal>
        </div>

        <motion.div layout className="mt-10 grid gap-5 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const layoutClass = project.featured
    ? 'lg:col-span-4 lg:row-span-2'
    : project.compact
      ? 'lg:col-span-2'
      : 'lg:col-span-3';
  const thumbnailClass = project.tone === 'gold' || project.tone === 'peach' ? 'project-surface-alt' : 'project-surface';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 250, damping: 24 }}
      className={`glass premium-card group min-w-0 overflow-hidden rounded-[24px] ${layoutClass}`}
    >
      <div
        className={`relative max-w-full overflow-hidden ${
          project.featured ? 'min-h-[15.5rem] md:min-h-[20rem]' : 'min-h-[12.5rem] md:min-h-[13.5rem]'
        } ${thumbnailClass}`}
      >
        <div className="absolute inset-0 transition duration-700 ease-out group-hover:scale-[1.04]">
          <div className="mono-label absolute left-5 top-5 max-w-[calc(100%-2.5rem)] rounded-full border border-white/10 bg-space-deep/[0.55] px-3 py-1.5 font-mono text-[0.6rem] uppercase text-text-secondary sm:text-[0.65rem] md:left-6 md:top-6">
            {project.category}
          </div>
          <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
            <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
            <div className="grid grid-cols-3 gap-2 rounded-[20px] border border-white/10 bg-space-deep/[0.55] p-3 sm:gap-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="project-ui-lines h-14 min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.045] p-3 sm:h-16"
                >
                  <div className="h-2 w-8 max-w-full rounded-full bg-white/[0.18] sm:w-10" />
                  <div className="mt-4 h-2 rounded-full bg-white/10 sm:mt-5" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/[0.08]" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-7 top-7 h-24 w-24 rounded-full border border-white/10" />
          <div className="absolute right-12 top-12 h-14 w-14 rounded-full border border-accent-cyan/25" />
        </div>
        <div className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.12),transparent)] transition duration-700 group-hover:translate-x-[120%]" />
      </div>
      <div className="min-w-0 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mono-label font-mono text-[0.66rem] uppercase text-accent-cyan sm:text-[0.7rem]">{project.year}</p>
            <h3 className="mt-2 text-balance font-display text-xl font-bold leading-tight text-text-primary md:text-2xl">
              {project.name}
            </h3>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-cyan" />
        </div>
        <p className="text-pretty mt-4 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="max-w-full rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs leading-tight text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2">
          <a
            href="#contact"
            className="group/btn inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-text-primary px-4 text-center text-sm font-bold text-space-deep transition hover:bg-white"
          >
            <span className="leading-tight">Live Preview</span>
            <ExternalLink className="size-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-semibold text-text-primary transition hover:border-white/[0.18] hover:bg-white/[0.07]"
          >
            <span className="leading-tight">Source Code</span>
            <Github className="size-4 shrink-0" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function MarqueeStrip({ text, compact = false }) {
  const words = text
    .split('/')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div
      className={`marquee-viewport relative border-y border-white/10 ${compact ? 'mt-10 py-4' : 'py-6 md:py-7'}`}
      aria-label={text}
    >
      <div className={`marquee-rail ${compact ? 'marquee-rail-compact' : ''}`}>
        {words.map((word, index) => (
          <div key={word} className="marquee-chip-group">
            <span className={`marquee-chip ${index % 2 ? 'marquee-chip-muted' : ''}`}>{word}</span>
            {index < words.length - 1 && (
              <span className="marquee-divider" aria-hidden="true">
                /
              </span>
            )}
          </div>
        ))}
      </div>
      {!compact && (
        <div className="pointer-events-none mt-5 hidden items-center justify-center gap-2 md:flex" aria-hidden="true">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className={`h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent ${
                item === 1 ? 'w-28' : 'w-14 opacity-60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MarqueeSection() {
  return (
    <section className="relative overflow-hidden py-6 md:py-9" aria-label="KuzoDev cinematic marquee">
      <div className="absolute left-1/2 top-1/2 h-40 w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <MarqueeStrip text="DESIGN / CODE / MOTION / INTERACTION / SYSTEMS / KUZODEV" />
    </section>
  );
}

function JourneySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 72%', 'end 58%'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.2 });

  return (
    <section id="journey" className="section-pad relative" aria-labelledby="journey-title">
      <div className="container-x">
        <ScrollReveal>
          <SectionLabel>04 / Journey</SectionLabel>
          <h2
            id="journey-title"
            className="max-w-3xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
          >
            Learning through building. Improving through iteration.
          </h2>
        </ScrollReveal>

        <div ref={ref} className="relative mt-10 md:mt-12">
          <div className="absolute bottom-8 left-4 top-8 w-px bg-white/10 md:left-1/2" />
          <motion.div
            className="absolute left-4 top-8 w-px origin-top bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-violet md:left-1/2"
            style={{ height: 'calc(100% - 4rem)', scaleY: smoothProgress }}
          />
          <div className="grid gap-8">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal
      className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${isEven ? '' : 'md:[&>article]:col-start-2'}`}
      delay={index * 0.04}
    >
      <span className="absolute left-4 top-7 z-10 size-4 -translate-x-1/2 rounded-full border border-accent-cyan bg-space-deep shadow-[0_0_24px_rgba(116,221,242,0.6)] md:left-1/2" />
      <article className="glass rounded-[22px] p-5 md:p-6">
        <p className="mono-label font-mono text-xs uppercase text-accent-cyan">{item.step}</p>
        <h3 className="mt-3 text-balance font-display text-xl font-bold leading-tight text-text-primary md:text-2xl">
          {item.title}
        </h3>
        <p className="text-pretty mt-3 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
          {item.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

function PrinciplesSection() {
  return (
    <section id="principles" className="section-pad relative" aria-labelledby="principles-title">
      <div className="container-x">
        <ScrollReveal>
          <SectionLabel>05 / Principles</SectionLabel>
          <h2
            id="principles-title"
            className="max-w-3xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
          >
            The details shape the experience.
          </h2>
        </ScrollReveal>
        <motion.div
          className="mt-10 grid gap-5 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {principles.map((principle) => (
            <PrincipleCard key={principle.number} principle={principle} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PrincipleCard({ principle }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="glass premium-card relative overflow-hidden rounded-[24px] p-5 md:p-6"
    >
      <div className="absolute -right-2 -top-4 font-display text-7xl font-extrabold text-white/[0.035]">
        {principle.number}
      </div>
      <div className="relative z-10">
        <div className="mb-8 grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-accent-gold">
          <BadgeCheck className="size-5" />
        </div>
        <h3 className="text-balance font-display text-xl font-bold leading-tight text-text-primary md:text-2xl">
          {principle.title}
        </h3>
        <p className="text-pretty mt-4 leading-7 text-text-secondary">{principle.description}</p>
      </div>
    </motion.article>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.projectType) nextErrors.projectType = 'Choose a project type.';
    if (form.message.trim().length < 12) nextErrors.message = 'Message must be at least 12 characters.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden" aria-labelledby="contact-title">
      <div className="absolute inset-x-0 bottom-0 top-24 bg-[radial-gradient(circle_at_76%_52%,rgba(74,125,255,0.16),transparent_24rem),radial-gradient(circle_at_25%_78%,rgba(141,114,255,0.13),transparent_24rem)]" />
      <div className="absolute right-[-8rem] top-24 hidden size-[34rem] rounded-full border border-white/[0.055] md:block" aria-hidden="true" />
      <div className="container-x relative z-10">
        <ScrollReveal>
          <SectionLabel>06 / Contact</SectionLabel>
          <h2
            id="contact-title"
            className="max-w-4xl text-balance font-display text-[clamp(2rem,5.6vw,3.25rem)] font-extrabold leading-tight text-text-primary"
          >
            Have an idea? Let&apos;s turn it into something real.
          </h2>
          <p className="text-pretty mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Open for discussions, collaborations, and interesting digital projects.
          </p>
        </ScrollReveal>

        <ScrollReveal className="relative mt-12">
          <div className="pointer-events-none absolute -top-5 left-1/2 -z-10 w-full -translate-x-1/2 text-center font-display text-[10vw] font-extrabold leading-none text-white/[0.022]">
            LET&apos;S CONNECT
          </div>
          <div className="glass grid gap-6 rounded-[24px] p-4 md:p-6 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
              <div className="absolute right-[-5rem] top-[-5rem] size-60 rounded-full border border-accent-blue/[0.18]" />
              <div className="absolute bottom-[-4rem] left-[-4rem] size-52 rounded-full bg-accent-violet/10 blur-lg" />
              <div className="relative">
                <p className="mono-label font-mono text-xs uppercase text-accent-cyan">Signal Channel</p>
                <h3 className="mt-4 text-balance font-display text-xl font-bold leading-tight text-text-primary sm:text-2xl">
                  KuzoDev contact details
                </h3>
                <p className="text-pretty mt-4 leading-7 text-text-secondary">
                  Send a clear idea, a rough direction, or a problem that needs a refined digital solution.
                </p>
                <div className="mt-8 grid gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-space-deep/[0.35] px-4 text-text-secondary transition hover:border-white/[0.18] hover:bg-white/[0.055] hover:text-text-primary"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-xl bg-white/[0.055] text-accent-cyan">
                          <Icon className="size-4" />
                        </span>
                        <span className="leading-tight">{label}</span>
                      </span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingField
                  id="name"
                  name="name"
                  label="Name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FloatingField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <div>
                <label htmlFor="projectType" className="sr-only">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`min-h-14 w-full rounded-2xl border bg-white/[0.045] px-4 text-sm text-text-primary outline-none transition focus:border-accent-cyan/70 focus:shadow-[0_0_0_4px_rgba(116,221,242,0.08)] ${
                    errors.projectType ? 'border-accent-peach/60' : 'border-white/10'
                  }`}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                >
                  <option value="" className="bg-space-elevated">
                    Project Type
                  </option>
                  <option value="web-app" className="bg-space-elevated">
                    Web Application
                  </option>
                  <option value="interface-design" className="bg-space-elevated">
                    Interface Design
                  </option>
                  <option value="collaboration" className="bg-space-elevated">
                    Collaboration
                  </option>
                </select>
                {errors.projectType && (
                  <p id="projectType-error" className="mt-2 text-sm text-accent-peach">
                    {errors.projectType}
                  </p>
                )}
              </div>
              <FloatingField
                id="message"
                name="message"
                label="Message"
                as="textarea"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />
              <button
                type="submit"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-text-primary px-6 text-sm font-bold text-space-deep transition hover:bg-white"
              >
                Send Message
                <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    className="flex items-center gap-2 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 px-4 py-3 text-sm leading-6 text-accent-cyan"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                  >
                    <CheckCircle2 className="size-4" />
                    Signal received. Thanks for reaching out.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FloatingField({ id, name, label, value, onChange, error, type = 'text', as = 'input' }) {
  const Component = as;

  return (
    <div>
      <div className="relative">
        <Component
          id={id}
          name={name}
          type={as === 'input' ? type : undefined}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={`field-input w-full resize-none rounded-2xl border bg-white/[0.045] px-4 pb-3 pt-6 text-sm text-text-primary outline-none transition placeholder:text-transparent focus:border-accent-cyan/70 focus:shadow-[0_0_0_4px_rgba(116,221,242,0.08)] ${
            error ? 'border-accent-peach/60' : 'border-white/10'
          }`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <label htmlFor={id} className="field-label mono-label font-mono text-[0.68rem] uppercase sm:text-[0.72rem]">
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent-peach">
          {error}
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-space-deep/[0.72] py-8">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-[0.12em] text-text-primary sm:tracking-[0.2em]">
            KUZODEV
          </p>
          <p className="mt-2 text-sm text-text-muted">KuzoDev &copy; 2026</p>
          <p className="mt-1 text-sm text-text-muted">Designed and developed with ReactJS</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-text-secondary transition hover:border-white/20 hover:text-text-primary"
              aria-label={label}
            >
              <Icon className="size-4" />
            </a>
          ))}
          <a
            href="#home"
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-text-primary transition hover:border-white/20 hover:bg-white/[0.07]"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap gap-3 text-sm text-text-muted">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.id} href={link.href} className="transition hover:text-text-primary">
                {link.label}
              </a>
            ))}
          </div>
          <span className="mono-label inline-flex items-center gap-2 font-mono text-xs uppercase text-accent-cyan">
            <span className="size-1.5 rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(116,221,242,0.85)]" />
            System online
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;
