"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Mail, ExternalLink } from "lucide-react";

const timeline = [
  { year: "2002–07", role: "BE, Computer Science", org: "Anna University", type: "education" },
  { year: "2006–07", role: "Business Development Manager", org: "Quest America Inc.", type: "work" },
  { year: "2007–08", role: "Senior Research Executive", org: "Hansa Research Pvt. Ltd.", type: "work" },
  { year: "2008", role: "Product Manager (Contract)", org: "Peak Telecom", type: "work" },
  { year: "2009–19", role: "Consultant / Design Researcher", org: "Freelance — FMCG, Auto, Telecom, E-Commerce", type: "work" },
  { year: "2016–18", role: "MA, Political Science", org: "IGNOU", type: "education" },
  { year: "2019–21", role: "MA, Applied Quantitative Finance", org: "Madras School of Economics", type: "education" },
  { year: "2021–22", role: "Lead User Researcher", org: "InMobi Pvt. Ltd.", type: "work" },
  { year: "2022–23", role: "Head of User Research", org: "InMobi Pvt. Ltd.", type: "work" },
  { year: "2023–24", role: "Head of User Research", org: "Glance Pvt. Ltd.", type: "work" },
  { year: "2024–Now", role: "Director of User Research", org: "Glance Pvt. Ltd. (InMobi Group)", type: "work" },
  { year: "In Progress", role: "MA, Sociology", org: "IGNOU", type: "education" },
];

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-section-alt to-background" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_40px_rgba(212,168,83,0.15)]">
                <img
                  src="/images/headshot.png"
                  alt="Arvind Chandrashekar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-foreground"
              >
                Arvind Chandrashekar
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-lg text-gold font-medium"
              >
                Behavioral Scientist &middot; AI Systems Architect &middot; Research Leader
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-base text-muted leading-relaxed max-w-2xl"
              >
                Research and behavioral science executive with 18+ years spanning software
                engineering, AI invention, and human behavior research. Four patents in
                AI-powered analysis and cognitive systems. Built the research function at
                Glance (InMobi Group) from zero — establishing it as a strategic decision-making
                input across 6 geographies, 11 product lines, and platforms reaching 150M+ users.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-base text-muted leading-relaxed max-w-2xl"
              >
                Combines rare technical depth (computer science engineering, computer vision,
                predictive modeling) with behavioral science rigor (Cialdini, Fogg, Kahneman,
                choice architecture) to design research programs that don&apos;t just measure user
                behavior — but build systems that decode it at scale.
              </motion.p>

              {/* Contact links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-wrap gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/acz532110/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-muted hover:text-gold transition-colors"
                >
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
                <a
                  href="mailto:don.osiris@gmail.com"
                  className="inline-flex items-center gap-2 text-base text-muted hover:text-gold transition-colors"
                >
                  <Mail size={16} /> don.osiris@gmail.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Career narrative */}
      <Section>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            The Arc
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Engineer → Researcher → Leader
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl space-y-5 text-base text-muted leading-relaxed">
            <p>
              The career started in engineering — a Computer Science degree from Anna University
              and early roles in business development and product management. This wasn&apos;t a detour;
              it was the foundation. Understanding how systems are built creates a different kind
              of researcher — one who designs intelligence architectures, not just study plans.
            </p>
            <p>
              A decade of independent consulting across FMCG, automotive, telecom, alcohol,
              tobacco, apparel, and e-commerce built methodological range. Design ethnography,
              focus groups, depth interviews, trade research, brand equity assessment, trigger
              and barrier studies, ad evaluations — applied across markets that think differently
              about value, trust, and aspiration. This is where the behavioral instinct was trained.
            </p>
            <p>
              A deliberate sabbatical (2019–2021) to study Applied Quantitative Finance at the
              Madras School of Economics — not because finance was the goal, but because
              understanding market mechanisms, two-sided matching, and quantitative modeling
              deepens the rigor of behavioral research. The thesis: &ldquo;Two-Sided Market
              Matching Mechanism For Mentors & Mentees.&rdquo;
            </p>
            <p>
              Then InMobi — Lead Researcher to Head of Research in under two years. And Glance:
              Director of User Research, building the function from one person to a team of six,
              founding the Foresight & Behavioral Insights Unit, designing AI agent systems that
              transform how research is conducted, and co-authoring research presented at
              international conferences.
            </p>
            <p>
              Currently pursuing a Master&apos;s in Sociology — because behavioral science without
              sociological grounding risks explaining individual choices without understanding the
              structures that shape them.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Timeline */}
      <Section alt>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            18+ Years
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          <div className="space-y-6">
            {timeline.map((entry, i) => (
              <ScrollReveal key={`${entry.year}-${entry.role}`} delay={i * 0.04}>
                <div className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-background border-2 border-gold -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}>
                    <span className="text-sm font-bold text-gold">{entry.year}</span>
                    <h4 className="text-base font-bold text-foreground mt-0.5">{entry.role}</h4>
                    <p className="text-sm text-muted">{entry.org}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <h3 className="text-base font-bold text-foreground mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted/80 bg-white/[0.03] border border-card-border rounded-md px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

const skillGroups = [
  {
    title: "Research & Behavioral Science",
    skills: [
      "Research Org Design",
      "Mixed Methods",
      "Behavioral Economics",
      "Choice Architecture",
      "Ethnography",
      "Longitudinal Studies",
      "Causal Inference",
      "Conjoint Analysis",
      "Voice of Customer",
      "Brand Tracking",
      "A/B Testing",
    ],
  },
  {
    title: "AI & Technical",
    skills: [
      "Multi-Agent System Design",
      "Computer Vision",
      "NLP",
      "Predictive Analytics",
      "Statistical Modeling",
      "Python",
      "SQL",
      "Databricks",
      "Next.js",
      "Vercel",
    ],
  },
  {
    title: "Leadership & Strategy",
    skills: [
      "C-Suite Advisory",
      "Research Democratization",
      "Team Building (0→6)",
      "Career Ladder Design",
      "Cross-Functional Influence",
      "Vendor Management",
      "Budget & RFP",
      "Global Research Ops",
      "Stakeholder Translation",
    ],
  },
];
