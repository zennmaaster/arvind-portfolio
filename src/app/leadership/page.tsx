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
} from "lucide-react";

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
            Pillar 3 — Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            Built the Unit <span className="text-emerald-400">from Zero</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-3xl"
          >
            Founded the Foresight & Behavioral Insights Unit. Defined the charter, designed the
            career ladder, hired the team, and authored the culture book. Built an organization
            that outlasts its founder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <div className="text-3xl font-extrabold text-emerald-400">0 → <CountUp end={6} /></div>
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

      {/* GFBI Charter */}
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
                  Founded and operationalized — charter, vision, stakeholder model
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
                  Why it matters for VP evaluators
                </p>
                <ul className="space-y-2">
                  {[
                    "Defined the mission — not inherited it",
                    "Built the team — from zero headcount to a functioning unit",
                    "Designed the operating model — not just executed within one",
                    "Created institutional knowledge — culture book, career ladder",
                    "Made the org self-sustaining — the unit outlasts its founder",
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
                  "Established research-to-action framework: study prioritization → executive readout",
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
