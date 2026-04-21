"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { CountUp } from "@/components/effects/CountUp";
import {
  Network,
  Search,
  BarChart3,
  MessageSquare,
  Shield,
  Lightbulb,
  Award,
  Clock,
  Bot,
} from "lucide-react";
import { ReactNode } from "react";

interface SystemCardData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  agents: number | string;
  icon: ReactNode;
  highlights: string[];
  accent: string;
}

const systems: SystemCardData[] = [
  {
    id: "cis",
    name: "Cultural Intelligence System (CIS v8.3)",
    tagline: "8-agent coordinated intelligence architecture",
    description:
      "Designed a multi-agent system that monitors cultural signals, consumer sentiment, and competitive dynamics across 5 US metropolitan areas. Produces bi-weekly strategic intelligence reports synthesizing data from real-time web intelligence, social platforms, and proprietary behavioral data.",
    agents: 8,
    icon: <Network size={24} />,
    highlights: [
      "Signal Inventory Agent — scans 19+ platforms for brand mentions",
      "Cultural Interpretation Agent — maps signals to behavioral frameworks",
      "Metro Intelligence Agent — deep-dives NYC, LA, Miami, Atlanta, Texas metros",
      "User Sentiment Agent — exhaustive feedback analysis with verification URLs",
      "Forecasting Agent — trend lifecycle and scenario planning",
      "Verification & Validation Agent — audits all outputs for accuracy before assembly",
    ],
    accent: "electric",
  },
  {
    id: "hagar",
    name: "Hagar Research Intelligence",
    tagline: "30+ specialized sub-agents for behavioral analysis",
    description:
      "A multi-stage research intelligence system that transforms raw study data into strategic narratives. Applies 16 analytical lenses from behavioral science — Cialdini persuasion, Fogg behavior model, Kahneman dual-process, Jobs-to-be-Done, Trust Calibration, Say vs Do gap analysis, Consumer Decision Journey, and Mental Models.",
    agents: "30+",
    icon: <Search size={24} />,
    highlights: [
      "Stage 1: Research planning and instrument design",
      "Stage 2: Behavioral analysis with 16 validated lenses",
      "Stage 3: Narrative architecture and political framing",
      "Stage 4: Foresights — STEEP analysis, scenario planning, weak signal detection",
      "Includes Consigliere agent for stakeholder-sensitive framing",
      "UX Sentiment Factor Analysis — screen-level + element-level scoring",
    ],
    accent: "gold",
  },
  {
    id: "argus",
    name: "Argus Product Sentiment Pipeline",
    tagline: "Automated sentiment monitoring with narrative intelligence",
    description:
      "An automated pipeline that classifies, weights, and narrates product sentiment across 196+ items from 38 unique sources. Produces engagement-weighted Share of Voice, extracts 5 core narratives per cycle, and fires 3-tier alerts for consent collapse, OEM contagion, and regulatory exposure.",
    agents: 6,
    icon: <BarChart3 size={24} />,
    highlights: [
      "Engagement-weighted SOV — raw vs. weighted sentiment divergence",
      "Narrative Intelligence — extracts 5 dominant narratives per reporting cycle",
      "3-alert system: consent collapse, OEM contagion, regulatory exposure",
      "Product/Marketing/Stop action translations per narrative",
      "QoQ comparative analysis with volume and sentiment delta tracking",
    ],
    accent: "electric",
  },
  {
    id: "gfbi-portal",
    name: "GFBI Portal",
    tagline: "AI-powered internal research chat application",
    description:
      "Built an internal research portal that enables natural-language queries across the organization's behavioral data. Connects to production analytics, survey platforms, and knowledge management systems — giving any team member access to research insights without filing a research request.",
    agents: 3,
    icon: <MessageSquare size={24} />,
    highlights: [
      "Natural-language interface for querying behavioral data",
      "Connected to production analytics (Databricks)",
      "Survey data integration (Typeform)",
      "Knowledge base search (Confluence IURS archive of 284 projects)",
      "Built on Next.js, deployed on Vercel",
    ],
    accent: "gold",
  },
  {
    id: "voc-agent",
    name: "VOC Email Agent System",
    tagline: "6-agent customer intelligence pipeline",
    description:
      "A pipeline that processes customer support emails through six specialized agents: classify the issue, analyze sentiment, route escalations, draft responses, QA-review for quality, and update the knowledge base. Transforms reactive support into proactive product intelligence.",
    agents: 6,
    icon: <Bot size={24} />,
    highlights: [
      "Triage Classifier — categorizes incoming issues",
      "Sentiment Analyst — emotional valence and urgency detection",
      "Escalation Router — priority-based routing logic",
      "Response Drafter — tone-matched response generation",
      "QA Reviewer — quality and brand-voice compliance",
      "KB Manager — feeds insights back into knowledge base",
    ],
    accent: "electric",
  },
];

const patents = [
  {
    title: "AI-Based Advertising Creative Analysis System",
    status: "Granted",
    description:
      "Intelligent evaluation system achieving 73% reduction in creative bias and 42% reduction in wasteful ad spending. Computer vision and machine learning for automated creative assessment at scale.",
    icon: <Award size={18} />,
  },
  {
    title: "BohemR Trust Score & Recommendation System",
    status: "Filed",
    description:
      "Algorithmic trust assessment and recommendation engine for platform optimization — trust as a computable signal for content and commerce quality ranking.",
    icon: <Shield size={18} />,
  },
  {
    title: "AI Social Companion — Cross-Platform Integration",
    status: "Filed",
    description:
      "Multi-platform AI companion system enabling seamless user experience across devices and interaction contexts.",
    icon: <Lightbulb size={18} />,
  },
  {
    title: "Cognitive Load Management System",
    status: "Filed",
    description:
      "System for optimizing information delivery based on cognitive capacity analysis — behavioral science at the system level to manage attention and reduce overload.",
    icon: <Clock size={18} />,
  },
];

export default function InnovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-light mb-4"
          >
            Pillar 1 — Innovation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            AI Agent Systems <span className="text-electric-light">&</span> Patents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-3xl"
          >
            Designed multi-agent intelligence architectures that transform how
            research organizations generate, validate, and act on behavioral insights.
            Not tools that use AI — systems that think in behavioral science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <div className="text-3xl font-extrabold text-electric-light">
                <CountUp end={5} />
              </div>
              <p className="text-xs text-muted uppercase tracking-wider">AI Systems</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-electric-light">
                <CountUp end={50} suffix="+" />
              </div>
              <p className="text-xs text-muted uppercase tracking-wider">Total Agents</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-electric-light">
                <CountUp end={4} />
              </div>
              <p className="text-xs text-muted uppercase tracking-wider">Patents</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems */}
      <Section>
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-light mb-4">
            Systems Architecture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Five Intelligence Systems
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {systems.map((system, i) => (
            <ScrollReveal key={system.id} delay={i * 0.05}>
              <SystemCard system={system} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Patents */}
      <Section alt>
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Intellectual Property
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Patents & Inventions
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {patents.map((patent, i) => (
            <ScrollReveal key={patent.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-gold">{patent.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-foreground">
                        {patent.title}
                      </h3>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          patent.status === "Granted"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-gold/20 text-gold"
                        }`}
                      >
                        {patent.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {patent.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function SystemCard({
  system,
  index,
}: {
  system: SystemCardData;
  index: number;
}) {
  const isElectric = system.accent === "electric";

  return (
    <div className="glass-card rounded-2xl p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div
          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
            isElectric ? "bg-electric/10 text-electric-light" : "bg-gold/10 text-gold"
          }`}
        >
          {system.icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-foreground">{system.name}</h3>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isElectric
                  ? "bg-electric/10 text-electric-light"
                  : "bg-gold/10 text-gold"
              }`}
            >
              {system.agents} agents
            </span>
          </div>
          <p className={`text-sm font-medium mb-3 ${isElectric ? "text-electric-light" : "text-gold"}`}>
            {system.tagline}
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6">
            {system.description}
          </p>

          <div className="space-y-2">
            {system.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isElectric ? "bg-electric-light" : "bg-gold"}`} />
                <span className="text-xs text-muted/80">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
