import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  GraduationCap,
  Microscope,
  Phone,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import missionImage from "@/assets/mission-training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upskill Educational Initiative — Train a Teacher, Change the World" },
      {
        name: "description",
        content:
          "Upskill Educational Initiative redefines teacher education across Africa through innovative training, research, and advocacy for quality learning outcomes.",
      },
      { property: "og:title", content: "Upskill Educational Initiative" },
      {
        property: "og:description",
        content: "Train a Teacher, Change the World — teacher training, research, and advocacy across Africa.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  {
    label: "Leadership & Management",
    Icon: GraduationCap,
    description:
      "Master the engine of digital leadership by learning to orchestrate high-end virtual worlds from the ground up. This elite training empowers leaders to command Unreal Engine 4, aligning technical workflows and driving high-level visual execution.",
  },
  {
    label: "Mental Health",
    Icon: Brain,
    description:
      "Equip educators with the literacy and frameworks to recognise, respond to, and de-stigmatise mental health in the classroom — building safer learning environments where students and teachers can thrive.",
  },
  {
    label: "Research & Advocacy",
    Icon: Microscope,
    description:
      "Translate evidence into policy. Our research and advocacy pathway trains educators to design rigorous studies, publish findings, and shape the conversations that move ministries and shift outcomes.",
  },
  {
    label: "Seminars & Workshops",
    Icon: Users,
    description:
      "Practical, high-density convenings led by sector experts. Each seminar packs strategy, hands-on practice, and peer exchange into focused sessions that ship lasting change to the classroom.",
  },
  {
    label: "Specialised Courses",
    Icon: BookOpen,
    description:
      "Targeted, deep-dive certifications across pedagogy, subject mastery, and emerging tools — built for educators who want to lead at the frontier of their discipline.",
  },
];


const cohorts = [
  {
    tag: "Open Enrollment",
    title: "Foundations of Classroom Leadership",
    duration: "8 Weeks",
    format: "Hybrid · Lagos",
  },
  {
    tag: "Cohort 04 · 2025",
    title: "Mental Health Literacy for Educators",
    duration: "6 Weeks",
    format: "Online",
  },
  {
    tag: "Spring 2025",
    title: "Research Methods & Advocacy Lab",
    duration: "12 Weeks",
    format: "In-Person · Ibadan",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-navy">
      {/* Main Nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-canvas/70 backdrop-blur-xl backdrop-saturate-150">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-sm bg-teal">
              <div className="size-3 bg-canvas" />
            </div>
            <span className="text-lg font-bold tracking-tight text-navy">
              UPSKILL <span className="text-teal">·</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-semibold text-teal">
              Home
            </a>
            <a href="#mission" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal">
              About
            </a>
            <a href="#programs" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal">
              Our Services
            </a>
            <a href="#cohorts" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal">
              Media
            </a>
            <a href="#cta" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal">
              Join Our Team
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-teal py-2.5 pl-3 pr-4 text-sm font-semibold text-white ring-1 ring-teal/30 transition-colors hover:bg-teal/90"
            >
              Contact Us
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="relative mx-auto max-w-7xl">
          {/* Carousel placeholder — sits behind the hero text */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center rounded-sm border border-dashed border-line bg-surface/60 text-sm font-medium uppercase tracking-[0.25em] text-navy/30"
          >
            Carousel coming soon
          </div>

          <div className="relative px-6 py-16 md:px-12 md:py-24">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              <span className="size-1.5 rounded-full bg-teal" /> Welcome to Upskill
            </span>
            <h1 className="mt-6 max-w-[18ch] text-balance text-5xl font-bold leading-[1.02] tracking-tight text-navy md:text-7xl">
              Train a Teacher, <span className="text-teal">Change the world.</span>
            </h1>
            <p className="mt-8 max-w-[52ch] text-pretty text-lg leading-relaxed text-navy/75 md:text-xl">
              Upskill Educational Initiative is committed to redefining teacher education
              through innovative training, research, and advocacy for quality learning
              outcomes across Africa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-3 rounded-sm bg-teal py-3.5 pl-4 pr-5 text-base font-semibold text-white ring-1 ring-teal/30 transition-colors hover:bg-teal/90"
              >
                <span className="size-5 shrink-0 rounded-full bg-white/20" />
                Browse Programs
              </a>
              <a
                href="#mission"
                className="inline-flex items-center rounded-sm border border-navy/20 bg-canvas/70 px-6 py-3.5 text-base font-semibold text-navy backdrop-blur-sm transition-colors hover:bg-navy/5"
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Impact stats — own row */}
      <section className="px-6 pb-24 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-stretch">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-4">
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Teachers Trained</span>
              <span className="text-4xl font-bold text-navy">1,800+</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Schools Reached</span>
              <span className="text-4xl font-bold text-navy">120</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">States Served</span>
              <span className="text-4xl font-bold text-teal">14</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Research Papers</span>
              <span className="text-4xl font-bold text-teal">32</span>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-sm border border-line bg-surface p-5 md:max-w-sm">
            <BarChart3 className="mt-0.5 size-5 shrink-0 text-teal" />
            <p className="text-sm leading-relaxed text-navy/75">
              <span className="font-semibold text-navy">2024 Impact Report</span> — measurable gains in literacy outcomes across partner schools.
              <a href="#" className="ml-1 font-semibold text-teal hover:underline">Read findings →</a>
            </p>
          </div>
        </div>
      </section>


      {/* Category Tiles */}
      <section id="programs" className="border-y border-line bg-zinc-100/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                Our Services
              </span>
              <h2 className="mt-3 max-w-[20ch] text-balance text-3xl font-bold leading-tight text-navy md:text-4xl">
                Five focused pathways for African educators.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 border-b border-teal/40 pb-0.5 text-sm font-semibold text-teal hover:border-teal"
            >
              View all courses <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-5">
            {categories.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                className="group flex flex-col justify-between gap-12 bg-canvas p-7 transition-colors hover:bg-zinc-50"
              >
                <div className="flex size-11 items-center justify-center rounded-sm bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <h3 className="text-base font-bold leading-snug text-navy">{label}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section id="mission" className="px-6 py-28 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-16 lg:flex-row lg:gap-20">
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-sm ring-1 ring-line">
              <img
                src={missionImage}
                alt="A facilitator leading a teacher training session at Upskill Educational Initiative"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-sm bg-navy/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                Ms. Alamutu · Facilitator
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2 lg:pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              The Mission
            </span>
            <h2 className="max-w-[22ch] text-balance text-4xl font-bold leading-tight text-navy md:text-5xl">
              Systemic change begins in the classroom.
            </h2>
            <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-navy/75">
              We are more than a training centre. Upskill is a civic infrastructure project
              narrowing Africa's learning gap through evidence-based teacher development,
              mental-health literacy, and policy advocacy that reaches every child.
            </p>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
              <div className="bg-canvas p-6">
                <div className="text-3xl font-bold text-teal">94%</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy/60">
                  Programme Completion
                </div>
              </div>
              <div className="bg-canvas p-6">
                <div className="text-3xl font-bold text-teal">7 yrs</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy/60">
                  In the Field
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy hover:text-teal"
            >
              Read our 2018–2025 timeline <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Active Cohorts on navy */}
      <section id="cohorts" className="bg-navy px-6 py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-baseline justify-between gap-4 md:flex-row">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                Upcoming Trainings
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Active Cohorts</h2>
            </div>
            <a
              href="#"
              className="border-b border-teal/40 pb-0.5 text-sm font-semibold text-teal transition-colors hover:border-teal"
            >
              View all programmes →
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 md:grid-cols-3">
            {cohorts.map((c) => (
              <div key={c.title} className="flex flex-col gap-6 bg-navy p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
                  {c.tag}
                </span>
                <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
                <div className="h-px w-full bg-white/10" />
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Duration</span>
                  <span>{c.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Format</span>
                  <span>{c.format}</span>
                </div>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline"
                >
                  Apply now <ArrowUpRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-sm border border-line bg-surface p-10 md:flex-row md:items-center md:p-14">
          <div>
            <h3 className="max-w-[22ch] text-balance text-3xl font-bold leading-tight text-navy md:text-4xl">
              Ready to take the first step?
            </h3>
            <p className="mt-3 max-w-[52ch] text-base text-navy/70">
              Partner with us, enrol in a course, or join the team transforming education
              across the continent.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-teal/90"
            >
              Get started <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-sm border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5"
            >
              Become a partner
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5 bg-navy px-6 pb-12 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid gap-16 md:grid-cols-3 md:gap-24">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-sm bg-teal">
                  <div className="size-2.5 bg-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">UPSKILL</span>
              </div>
              <p className="max-w-[36ch] text-sm leading-relaxed text-white/60">
                A non-profit initiative redefining teacher education across Africa —
                training, research, and advocacy for measurable learning outcomes.
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-teal" /> 2 Ibeju Lekki Street, Dolphin
                  Estate, Ikoyi, Lagos
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4 text-teal" /> +234 916 291 7152
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  Organisation
                </span>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  About Us
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Our Team
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Careers
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Contact
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  Programmes
                </span>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Leadership
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Mental Health
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Research
                </a>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-teal">
                  Workshops
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                Quarterly Briefing
              </span>
              <p className="text-sm text-white/60">
                Research highlights and upcoming cohorts, four times a year.
              </p>
              <form className="flex gap-px">
                <input
                  type="email"
                  placeholder="you@school.org"
                  className="w-full rounded-l-sm border-none bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-teal"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-r-sm bg-teal px-4 py-3 text-white transition-colors hover:bg-teal/90"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-10 md:flex-row">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              © {new Date().getFullYear()} Upskill Educational Initiative. All rights reserved.
            </span>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-white/40">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
