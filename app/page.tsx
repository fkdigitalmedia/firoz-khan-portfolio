import Image from "next/image";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import {
  ArrowUpRightIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "../components/icons";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/firoz-khan-1153358a/",
    Icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rtibyfiroz/",
    Icon: InstagramIcon,
  },
  { label: "Website", href: "https://fkdigitalmedia.com", Icon: GlobeIcon },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    blurb: "Pixel-perfect, fast interfaces",
    skills: ["React", "Next.js", "Astro", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    blurb: "APIs, data & infrastructure",
    skills: ["Node.js", "REST APIs", "Cloudflare Workers/Pages", "D1 / SQL databases", "WordPress"],
  },
  {
    title: "Tools",
    blurb: "Ship, measure, grow",
    skills: ["Git/GitHub", "Vercel", "Cloudflare", "SEO", "Google Analytics"],
  },
];

const SERVICES = [
  {
    title: "Website Development",
    copy: (
      <>
        Business websites that load fast, rank well and convert visitors into enquiries. My{" "}
        <a
          className="prose-link"
          href="https://fkdigitalmedia.com/website-development/"
          target="_blank"
          rel="noopener"
        >
          website development services
        </a>{" "}
        cover design, build, SEO setup and launch — end to end.
      </>
    ),
    points: ["Custom design", "Mobile-first & fast", "On-page SEO included"],
  },
  {
    title: "Web Applications / SaaS",
    copy: (
      <>
        Full-stack web apps and SaaS MVPs — dashboards, portals, tools and automations — built
        with modern stacks and deployed to production, ready to scale.
      </>
    ),
    points: ["React / Next.js frontends", "Node.js APIs", "Cloudflare / Vercel deploys"],
  },
  {
    title: "WordPress Themes & Websites",
    copy: (
      <>
        Custom WordPress themes, high-traffic news portals and license-protected products. My{" "}
        <a
          className="prose-link"
          href="https://fkdigitalmedia.com/news-website/"
          target="_blank"
          rel="noopener"
        >
          news website development
        </a>{" "}
        work includes themes with built-in licensing systems.
      </>
    ),
    points: ["Custom themes", "News portals", "License systems"],
  },
  {
    title: "Local SEO",
    copy: (
      <>
        Get found by customers near you — Google Business Profile, local citations and
        location pages that rank. My{" "}
        <a
          className="prose-link"
          href="https://fkdigitalmedia.com/local-seo/"
          target="_blank"
          rel="noopener"
        >
          local SEO services
        </a>{" "}
        are built for real, measurable local visibility.
      </>
    ),
    points: ["Google Business Profile", "Local citations", "Review strategy"],
  },
  {
    title: "Kids' YouTube Channel Setup & Growth",
    copy: (
      <>
        Complete channel setup for kids' content — branding, content systems and growth
        strategy. My{" "}
        <a
          className="prose-link"
          href="https://fkdigitalmedia.com/kids-youtube/"
          target="_blank"
          rel="noopener"
        >
          kids' YouTube channel growth
        </a>{" "}
        service handles the technical side so creators can focus on content.
      </>
    ),
    points: ["Channel setup", "Branding assets", "Growth playbook"],
  },
];

const PROJECTS = [
  {
    title: "FK Digital Media",
    kind: "Agency website",
    description:
      "The digital studio's own website — business websites, kids' YouTube growth, news sites and local SEO, all in one fast, conversion-focused build.",
    tags: ["Next.js", "SEO", "Tailwind CSS"],
    link: "https://fkdigitalmedia.com",
  },
  {
    title: "MahaMistri",
    kind: "Directory platform",
    description:
      "Hyperlocal home-services directory for Maharashtra — connecting households with trusted local mistris and service providers.",
    tags: ["Next.js", "Database", "Local SEO"],
  },
  {
    title: "AapkaNeta",
    kind: "Information portal",
    description:
      "Public-figure information portal with structured profiles, clean URLs and search-friendly architecture.",
    tags: ["Next.js", "SEO", "Content system"],
  },
  {
    title: "IndexPilot",
    kind: "SaaS tool",
    description:
      "Backlink indexing SaaS — submit URLs, track indexing status and get links into search engines faster.",
    tags: ["SaaS", "REST API", "Dashboard"],
  },
  {
    title: "NEws",
    kind: "WordPress theme",
    description:
      "A polished WordPress news theme with a built-in license system — built for publishers who need speed and control.",
    tags: ["WordPress", "PHP", "Licensing"],
  },
  {
    title: "Booking Websites",
    kind: "Client demos",
    description:
      "Demo booking websites for clinics, salons and tattoo studios — online appointments, services and WhatsApp enquiries built in.",
    tags: ["Booking flow", "WhatsApp", "Responsive"],
  },
];

const HIGHLIGHTS = [
  { value: "30+", label: "websites delivered" },
  { value: "3", label: "languages — trilingual websites (EN / HI / MR)" },
  { value: "3", label: "countries — clients across India, USA & UK" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="aurora" aria-hidden="true">
          <div className="blob-c" />
        </div>
        <div className="grid-overlay absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for freelance projects
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Firoz Khan
                </h1>
                <p className="text-gradient mt-3 text-2xl font-bold sm:text-3xl">
                  Full-Stack Developer
                </p>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                  I build fast, modern, SEO-ready websites and web apps that bring customers —
                  from the first pixel to production deploy. Frontend, backend, databases, APIs
                  and launch — handled end to end.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="btn-primary rounded-full px-8 py-3.5 text-sm font-semibold text-white"
                  >
                    Hire Me
                  </a>
                  <a
                    href="#projects"
                    className="btn-ghost rounded-full px-8 py-3.5 text-sm font-semibold text-white"
                  >
                    View Work
                  </a>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-8 flex items-center gap-3">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/20 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Avatar */}
            <Reveal delay={200} className="mx-auto w-full max-w-[320px] lg:max-w-none">
              <div className="relative mx-auto w-fit">
                <div className="avatar-ring">
                  <Image
                    src="/firoz-khan.webp"
                    alt="Firoz Khan — Full-Stack Developer"
                    width={400}
                    height={400}
                    priority
                    className="h-64 w-64 rounded-full bg-[#0b0c1c] object-cover sm:h-80 sm:w-80"
                  />
                </div>
                <span className="floaty absolute -left-6 top-8 hidden rounded-2xl border border-indigo-400/25 bg-[#0d0e20]/90 px-4 py-2 font-mono text-xs text-indigo-200 shadow-xl backdrop-blur sm:block">
                  &lt;/&gt; full-stack
                </span>
                <span className="floaty-slow absolute -right-4 bottom-10 hidden rounded-2xl border border-violet-400/25 bg-[#0d0e20]/90 px-4 py-2 font-mono text-xs text-violet-200 shadow-xl backdrop-blur sm:block">
                  Next.js · Node.js
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="glass overflow-hidden rounded-3xl p-2">
                <Image
                  src="/firoz-khan.webp"
                  alt="Firoz Khan — Full-Stack Developer"
                  width={640}
                  height={640}
                  className="aspect-square w-full rounded-[1.35rem] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">About</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Developer who ships, <span className="text-gradient">not just codes.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-slate-300">
                  <p>
                    I'm Firoz Khan, a full-stack web developer based in Palghar, Maharashtra,
                    India. I design and build websites and web applications end to end —
                    frontend, backend, databases, APIs and deployment — with one goal: sites
                    that load fast, rank well and bring customers.
                  </p>
                  <p>
                    I'm the{" "}
                    <a
                      className="prose-link font-medium"
                      href="https://fkdigitalmedia.com"
                      target="_blank"
                      rel="noopener"
                    >
                      Founder of FK Digital Media
                    </a>
                    , a digital studio for business websites, kids' YouTube channel growth, news
                    websites and local SEO. Everything I ship is production-grade: clean code,
                    modern stacks and zero template look.
                  </p>
                  <p>
                    I work with clients across India and internationally — founders, local
                    businesses and creators who want a website that actually works for them.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    ["Based in", "Palghar, Maharashtra, India"],
                    ["Focus", "Websites & web apps that convert"],
                    ["Clients", "India, USA & UK"],
                    ["Languages", "English · Hindi · Marathi"],
                  ].map(([term, def]) => (
                    <div
                      key={term}
                      className="rounded-2xl border border-indigo-400/15 bg-white/[0.02] px-5 py-4"
                    >
                      <dt className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
                        {term}
                      </dt>
                      <dd className="mt-1 text-[0.95rem] font-medium text-slate-200">{def}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Skills</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The full stack, <span className="text-gradient">covered.</span>
            </h2>
            <p className="mt-4 text-slate-400">
              One person, the whole pipeline — from UI polish to database indexes to
              production deploys.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={i * 110}>
                <article className="glass h-full rounded-3xl p-7">
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{group.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Services</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What I can build <span className="text-gradient">for you.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 110} className="h-full">
                <article className="glass flex h-full flex-col rounded-3xl p-7">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-300">
                    {service.copy}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-indigo-400/10 pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
            <Reveal delay={220} className="h-full">
              <a
                href="#contact"
                className="glass flex h-full min-h-[16rem] flex-col items-start justify-center rounded-3xl p-7"
              >
                <h3 className="text-lg font-bold text-white">Something custom in mind?</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-300">
                  Tell me what you're trying to build — I'll tell you honestly what it takes.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
                  Let's talk <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects I'm <span className="text-gradient">proud of.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 110} className="h-full">
                <article className="glass flex h-full flex-col rounded-3xl p-7">
                  <p className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
                    {project.kind}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-indigo-200"
                      >
                        {project.title}
                        <ArrowUpRightIcon className="h-4 w-4 text-indigo-300" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section id="highlights" className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="glass rounded-3xl px-8 py-10 sm:px-12">
              <dl className="grid gap-8 text-center sm:grid-cols-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h.label}>
                    <dt className="order-2 mt-2 block text-sm leading-snug text-slate-400">
                      {h.label}
                    </dt>
                    <dd className="text-gradient text-4xl font-extrabold sm:text-5xl">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something <span className="text-gradient">great.</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Have a project in mind? Reach out — I usually reply within 24 hours.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="flex h-full flex-col gap-4">
                <a
                  href="mailto:hello@fkdigitalmedia.com"
                  className="glass flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      Email
                    </span>
                    <span className="mt-0.5 block font-medium break-all text-white">
                      hello@fkdigitalmedia.com
                    </span>
                  </span>
                </a>
                <a
                  href="https://wa.me/917030501069"
                  target="_blank"
                  rel="noopener"
                  className="glass flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block font-medium text-white">+91 70305 01069</span>
                  </span>
                </a>
                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      Location
                    </span>
                    <span className="mt-0.5 block font-medium text-white">
                      Palghar, Maharashtra, India
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="glass h-full rounded-3xl p-7 sm:p-9">
                <h3 className="text-xl font-bold text-white">Send a message</h3>
                <p className="mt-1 mb-6 text-sm text-slate-400">
                  Fill this in and your mail app will open with everything pre-filled.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-indigo-400/10 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-semibold text-white">© 2026 Firoz Khan. All rights reserved.</p>
              <p className="mt-2 text-sm text-slate-400">
                <a
                  href="https://fkdigitalmedia.com"
                  target="_blank"
                  rel="noopener"
                  className="prose-link"
                >
                  FK Digital Media — Websites, Kids' YouTube &amp; Local SEO
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/20 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
