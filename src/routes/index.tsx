import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";



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
    description: "Equipping school leaders to drive vision, strategy and lasting institutional change.",
    accent: "#007A87",
  },
  {
    label: "Mental Health",
    Icon: Brain,
    description: "Frameworks to recognise, respond to, and de-stigmatise mental health in the classroom — building safer spaces for students and teachers.",
    accent: "#C84B31",
  },
  {
    label: "Teaching Skills",
    Icon: BookOpen,
    description: "Equipping educators with 21st-century classroom techniques, learner-centred pedagogy and tools to drive measurable outcomes.",
    accent: "#1D9E75",
  },
  {
    label: "Teacher Immersion",
    Icon: Users,
    description: "Our flagship programme — real school environments, multidisciplinary learning and hands-on teaching experience.",
    accent: "#4F8A6B",
  },
];




const heroSlides = ["#0D3D4A", "#0A2E38", "#0F4A5C"];

function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-canvas font-sans text-navy">


      {/* Main Nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-canvas/70 backdrop-blur-xl backdrop-saturate-150">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-sm bg-teal">
              <div className="size-3 bg-canvas" />
            </div>
            <span className="text-lg font-bold tracking-tight text-navy">
              UPSKILL <span className="text-teal">·</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-semibold text-teal">
              Home
            </a>
            <a href="#programs" className="text-sm font-bold text-navy transition-colors hover:text-teal">
              For Teachers
            </a>
            <a href="#programs" className="text-sm font-bold text-navy transition-colors hover:text-teal">
              For Schools
            </a>
            <a href="#mission" className="text-sm font-medium text-navy/80 transition-colors hover:text-teal">
              About
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
      <section className="px-6 pb-16 pt-6 md:pb-20 md:pt-10">
        <div className="relative mx-auto max-w-7xl">
          {/* Hero background carousel — auto crossfade */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-sm">
            {heroSlides.map((color, i) => (
              <div
                key={color}
                className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
                style={{ backgroundColor: color, opacity: slide === i ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-[#0A1F3D]/55" />
          </div>

          <div className="relative px-6 py-10 md:px-12 md:py-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              <span className="size-1.5 rounded-full bg-teal" /> Welcome to Upskill
            </span>
            <h1 className="mt-6 max-w-[18ch] text-balance text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
              Train a Teacher, <span className="text-teal">Change the world.</span>
            </h1>
            <p className="mt-8 max-w-[52ch] text-pretty text-lg leading-relaxed text-white/85 md:text-xl">
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
                className="inline-flex items-center rounded-sm border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
              <span className="text-4xl font-bold text-navy">5,000+</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Training Programs</span>
              <span className="text-4xl font-bold text-navy">20+</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Reach</span>
              <span className="text-4xl font-bold text-teal">Pan-African</span>
            </div>
            <div className="flex flex-col gap-2 bg-canvas p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/50">Active Partners</span>
              <span className="text-4xl font-bold text-teal">7</span>
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
                Four certification tracks for African educators.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 border-b border-teal/40 pb-0.5 text-sm font-semibold text-teal hover:border-teal"
            >
              View all programmes <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-4 md:gap-4">

            {categories.map(({ label, Icon, description, accent }) => (
              <a
                key={label}
                href="#"
                style={
                  {
                    "--accent": accent,
                  } as CSSProperties
                }
                className="group relative flex h-64 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-18px_var(--accent)] focus-visible:border-[var(--accent)] focus-visible:shadow-[0_18px_40px_-18px_var(--accent)] focus-visible:outline-none"
              >
                <span
                  className="flex size-11 items-center justify-center rounded-sm transition-colors duration-300"
                  style={{
                    backgroundColor: `color-mix(in oklab, ${accent} 12%, transparent)`,
                    color: accent,
                  }}
                >
                  <Icon className="size-5" strokeWidth={2.25} />
                </span>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-base font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)]">
                    {label}
                  </h3>
                  <p className="max-h-0 text-[13px] leading-snug text-navy/70 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-focus-visible:max-h-40 group-focus-visible:opacity-100">
                    {description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    style={{ color: accent }}
                  >
                    Learn more <ArrowUpRight className="size-3" />
                  </span>
                </div>
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
