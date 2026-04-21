"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { CountUp } from "@/components/effects/CountUp";
import {
  Building2,
  GraduationCap,
  UserPlus,
  BookOpen,
  ChevronRight,
  Compass,
  Users,
} from "lucide-react";

const productPrinciples = [
  {
    principle: "Trust is a threshold, not a gradient.",
    elaboration:
      "Users don't slowly lose confidence. They hit a boundary — a mismatched skin tone, a broken garment edge, a hidden opt-out — and disengage completely. Product quality below the trust threshold is wasted engineering. Above it, diminishing returns. The job is to find the line and stay above it.",
  },
  {
    principle: "Measure decisions made, not studies completed.",
    elaboration:
      "A research function that produces reports nobody acts on is a cost center. The only metric that matters is: what product decision changed because this research existed? Every study should end at a decision, not a deck.",
  },
  {
    principle: "Discovery friction kills more products than feature gaps.",
    elaboration:
      "Users who can't find a feature will never tell you the feature is bad. They'll tell you the product is empty. Discoverability gates everything — it has to be solved before capability.",
  },
  {
    principle: "Consistency beats peak quality.",
    elaboration:
      "Users build mental models of how a system behaves. A rendering engine that produces brilliant output 80% of the time and broken output 20% of the time is worse than one that produces good output 100% of the time. Reliability is a trust signal. Variance is a trust destroyer.",
  },
  {
    principle: "The user's intent state determines their tolerance.",
    elaboration:
      "A 30-second wait during casual browsing is nothing. The same 30-second wait at the moment of purchase intent is a deal-breaker. Context isn't a nice-to-have — it changes what 'fast' and 'good' mean.",
  },
];

const culturePrinciples = [
  {
    principle: "Name mechanisms, don't describe patterns.",
    elaboration:
      "\"Users are dropping off\" is an observation. \"Loss aversion is amplified by the irreversibility framing of the delete flow\" is an insight. The difference between a junior and a senior researcher is whether they can name the behavioral mechanism operating beneath the pattern.",
  },
  {
    principle: "The unit must outlast its founder.",
    elaboration:
      "If the research function collapses when one person leaves, it was never a function — it was a dependency. Codify everything: the operating model, the quality standards, the career progression, the intake process. Institutional knowledge belongs to the institution.",
  },
  {
    principle: "Democratize insights, protect methodology.",
    elaboration:
      "Anyone in the organization should be able to access and act on research findings. But study design, analysis frameworks, and quality standards are not democratic — they require trained judgment. The job is to make findings open and methods rigorous.",
  },
  {
    principle: "Intellectual honesty over stakeholder comfort.",
    elaboration:
      "When the data contradicts a leadership assumption, the research team's obligation is to the data. Framing matters — political sensitivity is a skill, not a compromise — but the finding itself is non-negotiable.",
  },
  {
    principle: "Hire for behavioral instinct, train for methodology.",
    elaboration:
      "The ability to see a usage pattern and ask \"what's the mechanism?\" is harder to teach than any specific method. Screening assignments test whether candidates name mechanisms or just describe what they see. Method proficiency can be developed; behavioral curiosity is the raw material.",
  },
];

const careerLadder = [
  { level: "L1", title: "Behavioral Analyst I", focus: "Execution of defined research plans under guidance" },
  { level: "L2", title: "Sr. Behavioral Analyst", focus: "Independent study design and stakeholder communication" },
  { level: "L3", title: "Behavioral Architect", focus: "Research program design across product lines" },
  { level: "L4", title: "Sr. Behavioral Architect", focus: "Strategic research vision and cross-functional influence" },
  { level: "L5", title: "Behavioral Scientist", focus: "Organizational thought leadership and methodological innovation" },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-4"
          >
            Pillar 3 — Leadership & Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            How I Think. <span className="text-emerald-400">What I Built.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-3xl"
          >
            Principles shape decisions. Decisions shape products. Products shape organizations.
            Every system I've designed, every team I've built, and every charter I've authored
            traces back to a small set of convictions about how products should be built and
            how research teams should think.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <div className="text-3xl font-extrabold text-emerald-400">0 &rarr; <CountUp end={6} /></div>
              <p className="text-sm text-muted uppercase tracking-wider">Researchers</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-400"><CountUp end={5} /></div>
              <p className="text-sm text-muted uppercase tracking-wider">Career Levels</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-400"><CountUp end={20} suffix="+" /></div>
              <p className="text-sm text-muted uppercase tracking-wider">Candidates Evaluated</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* On Product Building */}
      <Section>
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-10">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Compass size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                On Product Building
              </h2>
              <p className="text-base text-muted mt-1">
                Principles drawn from 284 studies, 5 product lines, and patterns that repeat
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {productPrinciples.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-7 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  &ldquo;{p.principle}&rdquo;
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {p.elaboration}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* On Research Culture */}
      <Section alt>
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-10">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                On Research Culture
              </h2>
              <p className="text-base text-muted mt-1">
                How the team is built to think — the standards behind the work
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {culturePrinciples.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-7 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  &ldquo;{p.principle}&rdquo;
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {p.elaboration}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* GFBI Charter — philosophy operationalized */}
      <Section>
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Foresight & Behavioral Insights Unit
                </h3>
                <p className="text-base text-muted mt-1">
                  The philosophy, operationalized
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                  What was built
                </p>
                <ul className="space-y-2">
                  {[
                    "Research charter defining mission, scope, and operating principles",
                    "Stakeholder relationship model across 9 product and business functions",
                    "Study intake-to-insight pipeline replacing ad-hoc requests",
                    "Delivery cadence: weekly signals, bi-weekly sentiment, quarterly strategic",
                    "Research democratization framework — enabling non-researchers to use insights",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-muted">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                  What this enabled
                </p>
                <ul className="space-y-2">
                  {[
                    "Research became a standing input to product decisions, not a reactive service",
                    "New hires ramped in weeks, not months — operating model was documented",
                    "Cross-functional teams began requesting research proactively",
                    "Insights survived team transitions — institutional knowledge was codified",
                    "The unit continued to operate during leadership transitions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-muted">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Career Ladder */}
      <Section alt>
        <ScrollReveal>
          <div className="flex items-start gap-5 mb-10">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                5-Level Career Ladder
              </h3>
              <p className="text-base text-muted mt-1">
                Designed progression from execution through strategic leadership
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {careerLadder.map((level, i) => (
            <ScrollReveal key={level.level} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-5 flex items-center gap-5">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-base font-extrabold text-emerald-400">{level.level}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-foreground">{level.title}</h4>
                  <p className="text-sm text-muted">{level.focus}</p>
                </div>
                <div className="hidden md:block">
                  <div
                    className="h-1.5 rounded-full bg-emerald-500/20"
                    style={{ width: `${60 + i * 25}px` }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      className="h-full rounded-full bg-emerald-400"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Hiring & Culture */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <UserPlus size={22} className="text-emerald-400" />
                <h3 className="text-lg font-bold text-foreground">Hiring & Team Building</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Scaled research team from 0 to 6 researchers",
                  "Designed screening assignments for mixed-methods researcher roles",
                  "Evaluated 20+ candidates across L1-L3 levels",
                  "Built hiring rubric: behavioral depth, methodological credibility, intellectual honesty, stakeholder translation, constraint navigation",
                  "Each hire assessed on ability to name mechanisms, not just describe patterns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-muted">
                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={22} className="text-emerald-400" />
                <h3 className="text-lg font-bold text-foreground">Culture & Operations</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Authored User Research Culture Book 2026",
                  "Defined research quality standards and methodological principles",
                  "Established research-to-action framework: study prioritization to executive readout",
                  "Created the standard decision-support process across all product teams",
                  "Replaced ad-hoc research requests with structured intake-to-insight pipeline",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-muted">
                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
