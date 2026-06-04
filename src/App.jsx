import { motion } from 'framer-motion'
import {
  ArrowDown,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  CodeXml,
  Database,
  ExternalLink,
  GitBranch,
  Mail,
  Newspaper,
  Phone,
  Rocket,
  Server,
  Sparkles,
  User,
} from 'lucide-react'
import aiFiestaLogo from './assets/aifiesta.webp'
import heroImg from './assets/hero.png'
import prohostLogo from './assets/prohostai.webp'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'fauzudheen2@gmail.com',
      href: 'mailto:fauzudheen2@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+91 90612 45502',
      href: 'tel:+919061245502',
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: 'fauzudheen-abdul-hameed',
      href: 'https://www.linkedin.com/in/fauzudheen-abdul-hameed/',
      icon: User,
    },
    {
      label: 'GitHub',
      value: 'fauzudheen',
      href: 'https://github.com/fauzudheen',
      icon: GitBranch,
    },
    {
      label: 'LeetCode',
      value: 'fauzudheen1',
      href: 'https://leetcode.com/u/fauzudheen1/',
      icon: CodeXml,
    },
    {
      label: 'Medium',
      value: '@fauzudheen1',
      href: 'https://medium.com/@fauzudheen1',
      icon: Newspaper,
    },
  ]

  const metrics = [
    {
      value: '60K+',
      label: (
        <>
          AI images generated weekly at{' '}
          <span className="bg-gradient-to-r from-cyan-200 to-amber-200 bg-clip-text font-black text-transparent">
            AIFiesta
          </span>{' '}
          after Image Studio launch
        </>
      ),
    },
    {
      value: '200+',
      label: (
        <>
          active listings supported through{' '}
          <span className="bg-gradient-to-r from-orange-200 to-cyan-200 bg-clip-text font-black text-transparent">
            ProhostAI
          </span>{' '}
          features
        </>
      ),
    },
    { value: '97.26', label: 'CAT percentile, top 3% of test takers' },
  ]

  const experiences = [
    {
      company: 'AIFiesta',
      role: 'Junior Software Developer',
      summary:
        'Multimodal AI platform for comparing, creating, and interacting with multiple leading AI models in one real-time workspace.',
      image: aiFiestaLogo,
      url: 'https://aifiesta.ai/',
      tags: ['NestJS', 'PostgreSQL', 'Supabase', 'Redis', 'Langfuse', 'PostHog'],
      highlights: [
        'Built Image Studio for multi-model AI image generation, scaling to about 60,000 images per week after launch.',
        'Developed AI-powered mini-games focused on reasoning and concentration.',
        'Integrated multiple text model APIs with real-time response streaming.',
        'Set up Prometheus and Grafana observability for faster incident detection.',
        'Improved API performance with Redis caching and optimized SQL queries.',
      ],
    },
    {
      company: 'ProhostAI',
      badge: 'Y Combinator S24',
      role: 'Junior Software Developer',
      summary:
        'AI property manager for listings, bookings, guest operations, cleanings, guidebooks, and host analytics.',
      image: prohostLogo,
      url: 'https://www.prohost.ai/',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'AWS', 'Stripe'],
      highlights: [
        'Built host-facing features including Earnings, Guidebooks, Cleanings, and Analytics.',
        'Supported 200+ active listings after launch across short-term rental operations.',
        'Integrated Airbnb and Hostaway APIs for listing sync and booking management.',
        'Worked with Stripe, OpenAI, and Anthropic APIs for payments and AI automation.',
        'Shipped Dockerized services using AWS SQS, EventBridge, Lambda, and S3.',
      ],
    },
  ]

  const skillGroups = [
    {
      title: 'Backend',
      icon: Server,
      skills: ['Python', 'FastAPI', 'Django', 'DRF', 'NestJS', 'Redis'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'Supabase', 'SQLAlchemy', 'Alembic'],
    },
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'GitHub Actions', 'AWS EC2', 'EKS', 'S3', 'SQS', 'Lambda'],
    },
    {
      title: 'AI APIs',
      icon: Brain,
      skills: ['OpenAI', 'Anthropic', 'Gemini', 'Grok', 'Bytedance', 'Kling'],
    },
    {
      title: 'Observability',
      icon: Sparkles,
      skills: ['PostHog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Tempo', 'Langfuse'],
    },
  ]

  const projects = [
    {
      title: 'Wimble',
      type: 'Social Media Platform',
      description:
        'A social platform for IT professionals with posts, communities, profiles, real-time conversations, and collaboration spaces.',
      stack: ['Django', 'DRF', 'React', 'Redux', 'Tailwind', 'Docker', 'AWS EKS'],
      repo: 'https://github.com/fauzudheen/wimble',
    },
    {
      title: 'SoleMate',
      type: 'E-Commerce Platform',
      description:
        'A shoe shopping platform with product browsing, secure checkout, payments, and admin inventory controls.',
      stack: ['Django', 'PostgreSQL', 'Razorpay', 'Bootstrap', 'AWS EC2', 'NGINX'],
      repo: 'https://github.com/fauzudheen/SoleMate-Ecommerce',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#070a12] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 grid-backdrop opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.15),transparent_26%),radial-gradient(circle_at_82%_8%,rgba(245,158,11,0.12),transparent_24%),linear-gradient(180deg,rgba(7,10,18,0)_0%,#070a12_82%)]" />

      <section className="relative z-10 flex min-h-screen w-full flex-col px-6 py-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.header
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between border-b border-white/10 pb-5"
          initial={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <a className="flex items-center gap-3 text-lg font-semibold" href="/">
            <span className="grid size-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              F
            </span>
            <span>Fauzudheen Abdul Hameed</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-cyan-200" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-cyan-200" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-cyan-200" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-cyan-200" href="#contact">
              Contact
            </a>
          </nav>
        </motion.header>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            animate="visible"
            className="max-w-4xl"
            initial="hidden"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200"
              variants={fadeUp}
            >
              <Sparkles size={16} />
              Software Engineer | AI Integrations
            </motion.p>
            <motion.h1
              className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-7xl lg:text-8xl"
              variants={fadeUp}
            >
              I build AI-powered web apps that work well.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              variants={fadeUp}
            >
              I work across backend systems, React interfaces, cloud deployments,
              and LLM integrations for real production products.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
              <a
                className="group inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.28)] transition hover:bg-white"
                href="#experience"
              >
                View Experience
                <ArrowDown className="transition group-hover:translate-y-0.5" size={17} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-amber-300/60 hover:text-amber-100"
                href="mailto:fauzudheen2@gmail.com"
              >
                <Mail size={17} />
                fauzudheen2@gmail.com
              </a>
            </motion.div>
            <motion.div className="mt-6 flex flex-wrap gap-2" variants={fadeUp}>
              {contactLinks.slice(2).map((link) => {
                const Icon = link.icon
                return (
                  <a
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon size={15} />
                    {link.label}
                  </a>
                )
              })}
            </motion.div>
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
                alt="Fauzudheen Abdul Hameed profile artwork"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-md border border-white/10 bg-slate-950/75 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-cyan-100">
                  AI integrations, backend systems, and polished interfaces.
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Python, FastAPI, React, AWS, observability, and LLM APIs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <div className="grid w-full gap-4 px-6 py-8 sm:px-8 md:grid-cols-3 lg:px-12 xl:px-16">
          {metrics.map((metric, index) => (
            <motion.div
              className="rounded-md border border-white/10 bg-slate-950/60 p-5"
              initial={{ opacity: 0, y: 22 }}
              key={metric.value}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-3xl font-black text-cyan-200">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 w-full px-6 py-24 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          eyebrow="Work Experience"
          icon={Briefcase}
        />
        <div className="mt-10 grid gap-6">
          {experiences.map((experience, index) => (
            <motion.a
              className="group block overflow-hidden rounded-md border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/40 backdrop-blur transition-colors hover:border-cyan-300/35"
              href={experience.url}
              initial={{ opacity: 0, y: 34 }}
              key={experience.company}
              rel="noreferrer"
              target="_blank"
              transition={{ delay: index * 0.08, duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid gap-6 p-6 lg:grid-cols-[220px_1fr] lg:p-8">
                <div className="flex h-full flex-col justify-between gap-8 rounded-md border border-white/10 bg-white/[0.04] p-5">
                  <img
                    className="h-16 w-16 rounded-md object-contain"
                    src={experience.image}
                    alt={`${experience.company} logo`}
                  />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Fleapo, Kolkata
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-3xl font-black text-white">{experience.company}</h3>
                        {experience.badge && (
                          <span className="inline-flex items-center gap-2 rounded-md border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-[0.14em] text-orange-100">
                            <span className="grid size-5 place-items-center rounded-sm bg-[#ff5a1f] text-[13px] font-black leading-none text-white">
                              Y
                            </span>
                            {experience.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-base font-semibold text-amber-200">{experience.role}</p>
                    </div>
                    <span
                      aria-label={`Open ${experience.company}`}
                      className="grid size-11 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-cyan-100 transition group-hover:border-amber-300/60 group-hover:text-amber-200"
                    >
                      <ExternalLink size={19} />
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">{experience.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        className="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li className="rounded-md border border-white/10 bg-slate-950/45 p-4" key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <div className="w-full px-6 py-24 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            eyebrow="Technical Skills"
            icon={Rocket}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <motion.div
                  className="rounded-md border border-white/10 bg-slate-950/55 p-5"
                  initial={{ opacity: 0, y: 24 }}
                  key={group.title}
                  transition={{ delay: index * 0.05, duration: 0.55 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                      <Icon size={19} />
                    </span>
                    <h3 className="text-lg font-black">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span className="rounded-md bg-white/7 px-3 py-2 text-sm text-slate-200" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 w-full px-6 py-24 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          eyebrow="Personal Projects"
          icon={Code2}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              className="group block rounded-md border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40 transition-colors hover:border-cyan-300/35"
              href={project.repo}
              initial={{ opacity: 0, y: 26 }}
              key={project.title}
              rel="noreferrer"
              target="_blank"
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">{project.type}</p>
              <h3 className="mt-4 text-3xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <span
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition group-hover:border-cyan-200/60"
              >
                <GitBranch size={16} />
                GitHub
                <ExternalLink size={15} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-cyan-300 text-slate-950">
        <div className="flex w-full flex-col gap-8 px-6 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em]">Contact</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Let us build something reliable.</h2>
            <p className="mt-4 max-w-2xl leading-7">
              Open to software engineering work involving backend systems, AI integrations,
              modern frontend development, and production product delivery.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon
              const isExternal = link.href.startsWith('http')

              return (
                <a
                  className="group rounded-md border border-slate-950/15 bg-white/30 p-4 text-left transition hover:bg-white/55"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? 'noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-black">
                      <Icon size={17} />
                      {link.label}
                    </span>
                    {isExternal && <ExternalLink className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={15} />}
                  </span>
                  <span className="mt-2 block break-words text-sm font-semibold text-slate-800">
                    {link.value}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeader({ eyebrow, icon: Icon }) {
  return (
    <motion.div
      className="max-w-3xl"
      initial="hidden"
      transition={{ duration: 0.7 }}
      variants={fadeUp}
      viewport={{ once: true, margin: '-100px' }}
      whileInView="visible"
    >
      <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
        <Icon size={17} />
        {eyebrow}
      </p>
    </motion.div>
  )
}

export default App
