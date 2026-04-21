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
  ExternalLink,
} from "lucide-react";

const productPrinciples = [
  {
    principle: "The only war being waged is on cognition.",
    elaboration:
      "Search costs for quality are rising. AI delegates the thinking, but not the judgment. Every product decision is ultimately a bet on what deserves a user's finite cognitive capacity. The products that win are the ones that respect that scarcity — not the ones that exploit it.",
    source: "The Only War That Matters",
  },
  {
    principle: "Trust is a threshold, not a gradient.",
    elaboration:
      "Users don't slowly lose confidence. They hit a boundary — a mismatched skin tone, a hidden opt-out, a broken garment edge — and disengage completely. Below the trust threshold, engineering investment is wasted. Above it, diminishing returns. The job is to find the line.",
    source: "FTW 2026 Paper",
  },
  {
    principle: "Taste is the last differentiator.",
    elaboration:
      "As AI handles production, the ability to distinguish good from mediocre becomes the only thing that matters. The danger isn't using AI for drafts — it's surrendering editorial judgment when the output appears 'good enough.' Mediocrity acceptance is the real threat. Great taste requires self-awareness about your own judgment quality.",
    source: "Practicing for Irrelevance",
  },
  {
    principle: "Second-order thinking is a muscle, not a personality quirk.",
    elaboration:
      "The room is full of people optimizing first-order consequences. The edge belongs to those who habitually ask: and then what? Consequences of consequences. This isn't about being smarter — it's about refusing to stop at the first answer. It applies to product roadmaps, hiring decisions, and market entry.",
    source: "The Room Is Full of Gamblers",
  },
  {
    principle: "Consistency beats peak quality.",
    elaboration:
      "Users build mental models of how systems behave. A rendering engine that's brilliant 80% of the time and broken 20% is worse than one that's good 100% of the time. Reliability is a trust signal. Variance is a trust destroyer. This holds for products, for teams, and for leaders.",
    source: "VTON Longitudinal Research",
  },
  {
    principle: "Past events create cumulative effects that determine future state transitions.",
    elaboration:
      "Markets, products, and organizations carry mechanical memory. Stress accumulates invisibly until a threshold triggers cascade failure — whether that's an AI bubble, a user trust collapse, or an org culture breakdown. The job is to read the stress field before it ruptures.",
    source: "The Cumulative Memory of Markets",
  },
];

const culturePrinciples = [
  {
    principle: "Some of us want to understand the system. Some want to change it.",
    elaboration:
      "I'm in the first camp — drawn to the machinations of things, systems, and people. This isn't passivity. Understanding structural mechanics is the prerequisite to changing anything that lasts. The hero narrative is appealing but fragile. The systems thinker's work compounds.",
    source: "On Not Being a Hero",
  },
  {
    principle: "Knowing something is risky and taking on the risk is more rational than taking on a sure thing without knowing the risks.",
    elaboration:
      "Organizations reward the appearance of certainty. But informed risk-taking — where you name what you don't know and proceed anyway — is how research actually creates value. A team that hides uncertainty produces reports. A team that surfaces it produces decisions.",
    source: "The Social Cost of Not Knowing",
  },
  {
    principle: "Empathy has a two-generation radius.",
    elaboration:
      "Humans genuinely empathize with roughly two generations in either direction — grandparents and grandchildren. Beyond that, abstraction takes over. This matters for product building: your user's lived context is narrower than your persona document suggests. Design for the circle they actually inhabit, not the one you wish they did.",
    source: "The Two-Generation Rule",
  },
  {
    principle: "People compare themselves to the best person in the room and restructure their networks when they fall short.",
    elaboration:
      "This is the core mechanism of Comparative Moral Status Theory — validated across 3,023 users and 328,867 posts. Pre-exit silence predicts churn better than post-facto recovery. Top-ranked users show the highest behavioral volatility, not last-place ones. Every leaderboard, every team structure, every performance review activates this dynamic.",
    source: "CMS Theory",
  },
  {
    principle: "As friction disappears, so do the norms that once governed behavior.",
    elaboration:
      "When ease increases, courtesy erodes. This applies to AI-generated job applications, to products that remove too many guardrails, and to organizations that optimize away all process. Some friction is load-bearing. Remove it and the structure it supported collapses.",
    source: "The Courtesy Collapse",
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
            These convictions — tested across 284 studies, validated in published research, and
            argued through in writing — are the foundation everything else is built on.
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
                On Building Products
              </h2>
              <p className="text-base text-muted mt-1">
                Convictions earned from research, argued through in writing
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
                <p className="text-base text-muted leading-relaxed mb-4">
                  {p.elaboration}
                </p>
                <p className="text-sm text-muted/50 italic">
                  {p.source.startsWith("FTW") || p.source.startsWith("VTON") ? (
                    p.source
                  ) : (
                    <a
                      href={`https://zennmaster.substack.com/p/${p.source.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                    >
                      {p.source} <ExternalLink size={12} />
                    </a>
                  )}
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
                On Teams & Culture
              </h2>
              <p className="text-base text-muted mt-1">
                How people and organizations actually work — not how org charts say they should
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
                <p className="text-base text-muted leading-relaxed mb-4">
                  {p.elaboration}
                </p>
                <p className="text-sm text-muted/50 italic">
                  <a
                    href={`https://zennmaster.substack.com/p/${p.source.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    {p.source} <ExternalLink size={12} />
                  </a>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Substack callout */}
      <Section>
        <ScrollReveal>
          <div className="glass-card glow-border rounded-2xl p-8 md:p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-3">
              The Writing
            </p>
            <h3 className="text-xl font-bold text-foreground mb-2">
              &ldquo;Theorizing about the world with no data to back it up&rdquo;
            </h3>
            <p className="text-base text-muted mb-6 max-w-2xl mx-auto">
              A Substack newsletter on behavioral economics, social comparison, cognitive warfare,
              market memory, and the sociology of who counts. Where the principles above get argued
              through before they become operating decisions.
            </p>
            <a
              href="https://zennmaster.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Read on Substack <ExternalLink size={16} />
            </a>
          </div>
        </ScrollReveal>
      </Section>

      {/* GFBI Charter */}
      <Section alt>
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
      <Section>
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
      <Section alt>
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
