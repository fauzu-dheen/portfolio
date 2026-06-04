import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Mail, Sparkles } from 'lucide-react'
import heroImg from './assets/hero.png'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const projects = [
    {
      title: 'Portfolio System',
      description: 'A cinematic personal site with motion, responsive sections, and a focused visual identity.',
      stack: 'React / Tailwind / Motion',
      year: '2026',
    },
    {
      title: 'Dashboard Interface',
      description: 'A fast scanning analytics UI with crisp hierarchy, reusable cards, and polished interactions.',
      stack: 'UI Design / Components',
      year: '2025',
    },
    {
      title: 'Launch Page',
      description: 'A conversion focused landing experience with strong typography and responsive composition.',
      stack: 'Frontend / UX',
      year: '2025',
    },
  ]

  const skills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
    'Responsive UI',
    'Git',
    'Design Systems',
  ]

  const doubledSkills = [...skills, ...skills]

  return (
    <main className="min-h-screen overflow-hidden bg-[#070a12] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 grid-backdrop opacity-70" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.12),transparent_26%),linear-gradient(180deg,rgba(7,10,18,0)_0%,#070a12_88%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <motion.header
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
          initial={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <a className="group flex items-center gap-3 text-lg font-semibold" href="/">
            <span className="grid size-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              F
            </span>
            <span>Fauzu</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
            <a className="transition hover:text-cyan-200" href="#work">
              Work
            </a>
            <a className="transition hover:text-cyan-200" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-cyan-200" href="#contact">
              Contact
            </a>
          </nav>
        </motion.header>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            animate="visible"
            className="max-w-3xl"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200"
              variants={fadeUp}
            >
              <Sparkles size={16} />
              Frontend Developer
            </motion.p>
            <motion.h1
              className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-7xl lg:text-8xl"
              variants={fadeUp}
            >
              Building interfaces that feel fast, sharp, and alive.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              variants={fadeUp}
            >
              I am Fauzu, a frontend developer crafting responsive React experiences
              with thoughtful motion, clean systems, and visual polish.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                className="group inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.28)] transition hover:bg-white"
                href="#work"
                variants={fadeUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} />
              </motion.a>
              <motion.a
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-amber-300/60 hover:text-amber-100"
                href="#contact"
                variants={fadeUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
                <Mail size={17} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
            initial={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.9, ease: 'easeOut', y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-md border border-amber-300/30" />
            <div className="absolute inset-0 -translate-x-5 -translate-y-5 rounded-md border border-cyan-300/30" />
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/60 backdrop-blur">
              <img
                className="aspect-square w-full rounded-md object-cover"
                src={heroImg}
                alt="Portfolio profile artwork"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-md border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-cyan-100">Available for frontend work</p>
                <p className="mt-1 text-xs text-slate-300">React, Tailwind, motion, and clean UI builds.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            viewport={{ once: true, margin: '-100px' }}
            whileInView="visible"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Projects with motion, clarity, and edge.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                className="group relative overflow-hidden rounded-md border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40 backdrop-blur"
                initial={{ opacity: 0, y: 34 }}
                key={project.title}
                transition={{ delay: index * 0.08, duration: 0.65, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ rotateX: 4, rotateY: -5, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-cyan-300 transition group-hover:bg-amber-300" />
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-cyan-200">{project.stack}</p>
                  <span className="text-sm text-slate-500">{project.year}</span>
                </div>
                <h3 className="mt-8 text-2xl font-black text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
                <button
                  aria-label={`Open ${project.title}`}
                  className="mt-8 grid size-11 place-items-center rounded-md border border-white/10 bg-white/5 text-cyan-100 transition group-hover:border-amber-300/60 group-hover:text-amber-200"
                  type="button"
                >
                  <ArrowUpRight size={20} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Toolkit
            </p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              A stack tuned for modern web experiences.
            </h2>
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04] py-5">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              className="flex w-max gap-3 px-5"
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {doubledSkills.map((skill, index) => (
                <span
                  className="rounded-md border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-bold text-slate-100"
                  key={`${skill}-${index}`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-cyan-300 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Let us build something useful.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              href="mailto:hello@example.com"
            >
              <Mail size={17} />
              hello@example.com
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-slate-950/20 px-5 py-3 text-sm font-bold transition hover:bg-white/40"
              href="https://github.com/fauzu-dheen"
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch size={17} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
