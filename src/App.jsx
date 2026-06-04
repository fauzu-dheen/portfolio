import heroImg from './assets/hero.png'

function App() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal site built with React, Vite, and Tailwind CSS.',
      stack: 'React / Tailwind',
    },
    {
      title: 'Dashboard UI',
      description: 'A clean analytics interface with reusable cards and focused data views.',
      stack: 'UI Design',
    },
    {
      title: 'Brand Landing Page',
      description: 'A modern web page concept for presenting services and contact details.',
      stack: 'Frontend',
    },
  ]

  const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Responsive UI', 'Git']

  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <a className="text-lg font-semibold text-slate-950" href="/">
            Fauzu
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a className="transition hover:text-slate-950" href="#work">
              Work
            </a>
            <a className="transition hover:text-slate-950" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Frontend Developer
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
              I build clean, responsive web experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I am Fauzu, a developer focused on crafting practical interfaces with
              React, modern CSS, and a strong eye for detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                href="#work"
              >
                View Projects
              </a>
              <a
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-full bg-emerald-100" />
            <img
              className="relative aspect-square w-full rounded-md object-cover shadow-2xl shadow-slate-300"
              src={heroImg}
              alt="Portfolio profile artwork"
            />
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Projects that balance design and usability.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-md border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                key={project.title}
              >
                <p className="text-sm font-semibold text-emerald-700">
                  {project.stack}
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Toolkit
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Skills I use to build polished sites.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 text-white sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold">Let us build something useful.</h2>
          </div>
          <a
            className="w-fit rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-100"
            href="mailto:hello@example.com"
          >
            hello@example.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
