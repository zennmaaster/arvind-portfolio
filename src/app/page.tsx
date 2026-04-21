"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { PillarCard } from "@/components/cards/PillarCard";
import { MetricBadge } from "@/components/cards/MetricBadge";
import { StaggerText } from "@/components/effects/StaggerText";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-mesh" />

        {/* Pexels background */}
        <div
          className="absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-gold mb-8"
          >
            Portfolio
          </motion.p>

          <StaggerText
            text="Behavioral Scientist."
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight shimmer"
            delay={0.4}
          />
          <StaggerText
            text="AI Systems Architect."
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-foreground mt-2"
            delay={0.8}
          />
          <StaggerText
            text="Research Organization Builder."
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-foreground mt-2"
            delay={1.2}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="mt-8 text-lg text-muted max-w-2xl mx-auto"
          >
            Arvind Chandrashekar
          </motion.p>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <MetricBadge value={18} suffix="+" label="Years" />
            <MetricBadge value={4} label="Patents" />
            <MetricBadge value={284} label="Research Projects" />
            <MetricBadge value={6} label="Geographies" />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto w-5 h-8 border-2 border-muted/30 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 bg-muted/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <Section id="pillars">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Three Pillars
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Where Science Meets Systems
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          <PillarCard
            title="AI Agent Systems & Patents"
            subtitle="Innovation"
            description="Designed multi-agent intelligence architectures — from an 8-agent cultural intelligence system to a 30+ agent research analysis pipeline. 4 patents in AI-powered behavioral analysis."
            href="/innovation"
            icon={<Cpu size={28} />}
            accent="electric"
            index={0}
          />
          <PillarCard
            title="284 Studies, Measurable Growth"
            subtitle="Strategic Impact"
            description="Research programs that drove TV users from 1.8M to 4.4M, AI shopping users from 137K to 535K, and embed commerce from 0 to 430K. Published at FTW 2026."
            href="/impact"
            icon={<Brain size={28} />}
            accent="gold"
            index={1}
          />
          <PillarCard
            title="Built the Unit from Zero"
            subtitle="Leadership"
            description="Founded the Foresight & Behavioral Insights Unit. Designed a 5-level career ladder. Hired and developed a team of researchers. Authored the culture book."
            href="/leadership"
            icon={<Users size={28} />}
            accent="emerald"
            index={2}
          />
        </div>
      </Section>

      {/* Credential bar */}
      <Section alt>
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-muted uppercase tracking-wider">
            <span>Glance &middot; InMobi Group</span>
            <span className="hidden md:inline text-card-border">|</span>
            <span>Co-author, FTW 2026 Manchester</span>
            <span className="hidden md:inline text-card-border">|</span>
            <span>Panelist, IgniteCon</span>
            <span className="hidden md:inline text-card-border">|</span>
            <span>BE &middot; MA Poli Sci &middot; MA Quant Finance &middot; MA Sociology</span>
          </div>
        </ScrollReveal>
      </Section>

      {/* Impact highlights */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Impact At Scale
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Research-Driven Growth
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="text-3xl font-extrabold text-gold mb-1">
                  {card.metric}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {card.label}
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

const impactCards = [
  {
    metric: "1.8M → 4.4M",
    label: "Glance TV Weekly Users",
    description:
      "10-study research program spanning ethnographic diaries, concept validation, and consumer landscape surveys. 142% growth in 5 months.",
  },
  {
    metric: "137K → 535K",
    label: "AI Shopping Weekly Users",
    description:
      "8 interconnected studies from input flow redesign through trust architecture to conversion optimization. 290% growth.",
  },
  {
    metric: "0 → 430K",
    label: "Embed Commerce Weekly Users",
    description:
      "Trust and VTON research informed the merchant embed experience. Scaled from pilot to 430K weekly users in 9 weeks.",
  },
  {
    metric: "15K → 115K",
    label: "Samsung Lockscreen Monthly Users",
    description:
      "Multi-year lockscreen program including a 10-week longitudinal study. 7.5x user growth, 51x render growth.",
  },
  {
    metric: "200K+",
    label: "VTON Interactions Studied",
    description:
      "Published at FTW 2026 (Manchester). Key finding: trust operates as binary threshold, not gradient.",
  },
  {
    metric: "182%",
    label: "AI Chat User Growth",
    description:
      "Conversational commerce research supported growth from 5.8K to 16.5K users in 2 months. 8-10 messages per session.",
  },
];
