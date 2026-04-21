"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { CountUp } from "@/components/effects/CountUp";
import {
  TrendingUp,
  Tv,
  ShoppingBag,
  Globe,
  Smartphone,
  MonitorPlay,
  MessageCircle,
  CloudSun,
  ArrowUpRight,
  BookOpen,
  Mic,
} from "lucide-react";
import { ReactNode } from "react";

interface ImpactStory {
  id: string;
  title: string;
  product: string;
  icon: ReactNode;
  metricBefore: string;
  metricAfter: string;
  growth: string;
  studies: number;
  studyNames: string[];
  narrative: string;
  keyInsight: string;
  timeframe: string;
}

const stories: ImpactStory[] = [
  {
    id: "tv",
    title: "Glance TV — Ambient Display to Scale Product",
    product: "Glance TV (Connected TV)",
    icon: <Tv size={22} />,
    metricBefore: "1.8M",
    metricAfter: "4.4M",
    growth: "142%",
    studies: 10,
    studyNames: [
      "Prj. TV For Tomorrow", "Prj. Oblivion", "Prj. Miranda", "Prj. WandaVision",
      "Prj. Walter Mitty", "Prj. Betamaxxx", "Prj. Moonfall", "Prj. Super 8",
      "TransUnion x Glance TV", "Prj. EastSide",
    ],
    narrative:
      "Led a 10-study research program spanning first impressions, content evaluation, navigation testing, interactive screensaver UX (voice + prompt cards), a 4-week ambient ethnographic diary study, Samsung TV shopping concept validation, and DirecTV consumer landscape profiling.",
    keyInsight:
      "Ethnographic study (Prj. Moonfall) revealed that household TV viewing is a shared negotiation — ambient content must serve the room, not the individual. This reframed the entire content strategy from personalization to contextual ambience.",
    timeframe: "Mar 2025 – Apr 2026",
  },
  {
    id: "shopping",
    title: "AI Shopping — Discovery to Conversion",
    product: "Glance AI Shopping App",
    icon: <ShoppingBag size={22} />,
    metricBefore: "137K",
    metricAfter: "535K",
    growth: "290%",
    studies: 8,
    studyNames: [
      "Prj. Personal Shopper", "Prj. Invictus", "Prj. Burberry/Emma",
      "Prj. Happy Journey", "Prj. Shopping Bag Lady", "Prj. Bandidas",
      "Prj. Calliste", "Prj. Raging Bull",
    ],
    narrative:
      "Directed 8 interconnected studies covering input flow redesign, AI outfit evaluation tools (Rate My Fit), v5 first impressions (N=50), shopping trust ethnographic diaries, PDP deep dives, and conversion funnel analysis.",
    keyInsight:
      "Prj. Shopping Bag Lady identified that discovery-to-purchase friction — not feature quality — was the conversion bottleneck. Users loved AI-generated styling but abandoned at the merchant handoff. Led to checkout flow redesign.",
    timeframe: "Apr 2025 – Apr 2026",
  },
  {
    id: "embed",
    title: "Embed Commerce — Zero to Scale",
    product: "Merchant D2C Embed (PWA)",
    icon: <Globe size={22} />,
    metricBefore: "53",
    metricAfter: "430K",
    growth: "8,100x",
    studies: 3,
    studyNames: [
      "Prj. Shopping Bag Lady (checkout friction findings)",
      "Prj. Bandidas (trust marker research)",
      "VTON Paper (200K+ interactions)",
    ],
    narrative:
      "Shopping trust research, conversion friction analysis, and virtual try-on behavioral insights directly informed the merchant embed experience. Published VTON findings at FTW 2026.",
    keyInsight:
      "Trust markers identified in Prj. Bandidas — dealbreakers vary by purchase stake level — became design requirements for the embed commerce trust layer.",
    timeframe: "Dec 2025 – Apr 2026",
  },
  {
    id: "lockscreen",
    title: "Samsung Lockscreen — Longitudinal to Product",
    product: "Samsung Expressions / Lockscreen",
    icon: <Smartphone size={22} />,
    metricBefore: "15K",
    metricAfter: "115K",
    growth: "7.5x users, 51x renders",
    studies: 7,
    studyNames: [
      "Prj. Interstellar", "Prj. Zephyr", "Prj. Indigo (10-week longitudinal)",
      "Prj. Ritz", "Prj. Columbus", "Prj. Liril", "Prj. Third Eye",
    ],
    narrative:
      "Multi-year lockscreen research program. Prj. Indigo was a 4-phase, 10-week longitudinal study of Samsung Lockscreen 2.0 — the most methodologically ambitious study in the portfolio. Tracked AI template discovery, notification repositioning impact, and friction consistency across phases.",
    keyInsight:
      "AI-generated templates were noticed but users preferred traditional wallpapers. Notification repositioning caused confusion. The insight: personalization features need to earn behavioral trust before replacing established patterns.",
    timeframe: "Jun 2025 – Mar 2026",
  },
  {
    id: "vton",
    title: "Virtual Try-On — Research to Publication",
    product: "VTON Feature / FTW 2026",
    icon: <MonitorPlay size={22} />,
    metricBefore: "2.2K",
    metricAfter: "5.2K",
    growth: "129% weekly users",
    studies: 4,
    studyNames: [
      "Prj. Invictus (input flows)", "Prj. Burberry/Emma (Rate My Fit)",
      "In-app survey (N=1,710)", "Full behavioral analysis (200K+ interactions)",
    ],
    narrative:
      "Co-authored 'Understanding User Responses to Virtual Try-On Through Large-Scale and Qualitative Studies,' presented at FTW 2026 in Manchester. Combined 200K+ behavioral interactions with 1,710 survey responses and multi-study qualitative program.",
    keyInsight:
      "Trust operates as a binary threshold, not a gradient. Minor inaccuracies in body proportion, skin tone, or facial features cause immediate user dropout — not gradual decline. Session-to-session consistency matters more than peak rendering quality.",
    timeframe: "Jul 2025 – Apr 2026",
  },
  {
    id: "chat",
    title: "AI Chat — Conversational Commerce",
    product: "Glance AI Chat",
    icon: <MessageCircle size={22} />,
    metricBefore: "5.8K",
    metricAfter: "16.5K",
    growth: "182%",
    studies: 2,
    studyNames: [
      "Prj. Calliste (v5.1.1 first impressions)",
      "Prj. Happy Journey (v5 onboarding → chat discovery)",
    ],
    narrative:
      "Shopping assistant and trust research informed conversational commerce design. Prj. Calliste found: 'Users love the discovery. They don't trust the commerce.' — leading to agentic PDP development and trust layer integration.",
    keyInsight:
      "Chat engagement depth (8-10 messages per session) indicates genuine discovery behavior, not shallow browsing. The gap is at the commerce trust handoff, not the conversational interface.",
    timeframe: "Jan – Apr 2026",
  },
  {
    id: "weather",
    title: "1Weather — Competitive Landscape to AI",
    product: "1Weather App",
    icon: <CloudSun size={22} />,
    metricBefore: "—",
    metricAfter: "—",
    growth: "3-year roadmap informed",
    studies: 8,
    studyNames: [
      "Prj. Horizon (feature parity)", "Prj. Tomorrowland (ethnographic pilot)",
      "Prj. Zeus (landscape)", "Prj. Hombre (LatAm)",
      "Prj. Stormbreaker (Skyla AI prioritization)", "Prj. Geostorm (AI concept validation)",
      "Prj. Atlantis (Skyla.ai first impressions)", "Prj. 11th Hour (layout usability)",
    ],
    narrative:
      "8-study research arc spanning competitive landscape analysis, pilot ethnography of weather tech users, LatAm content preferences, and AI feature scoping (Skyla.ai). Feature parity study mapped use cases across 6 competing weather apps.",
    keyInsight:
      "Weather app engagement is context-dependent: users have different accuracy thresholds for daily planning vs. event preparation vs. travel. AI features must match the user's current intent state, not provide generic intelligence.",
    timeframe: "Aug 2022 – Dec 2025",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4"
          >
            Pillar 2 — Strategic Impact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            284 Studies. <span className="text-gold">Measurable Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-3xl"
          >
            Every study answers one question: what decision was made because this research existed?
            These are the programs that moved products — mapped to real user growth from production data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <div className="text-3xl font-extrabold text-gold">
                <CountUp end={284} />
              </div>
              <p className="text-sm text-muted uppercase tracking-wider">
                Total Projects
              </p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-gold">
                <CountUp end={7} />
              </div>
              <p className="text-sm text-muted uppercase tracking-wider">
                Impact Stories
              </p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-gold">
                <CountUp end={5} />
              </div>
              <p className="text-sm text-muted uppercase tracking-wider">
                Product Lines
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact stories */}
      <Section>
        {stories.map((story, i) => (
          <ScrollReveal key={story.id} delay={0}>
            <ImpactCard story={story} index={i} />
          </ScrollReveal>
        ))}
      </Section>

      {/* Publications callout */}
      <Section alt>
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <BookOpen size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Published Research
                </h3>
                <p className="text-base text-muted mb-1">
                  <strong className="text-foreground">FTW 2026, Manchester</strong> — &ldquo;Understanding User Responses to Virtual Try-On Through Large-Scale and Qualitative Studies&rdquo;
                </p>
                <p className="text-sm text-muted">
                  Co-authored with Akshat Gupta, Ian Anderson, Paul Duff. 200K+ interactions, 1,710 survey responses.
                </p>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <Mic size={18} className="mx-auto text-gold mb-1" />
                    <p className="text-sm text-muted uppercase tracking-wider">IgniteCon Panelist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}

function ImpactCard({ story, index }: { story: ImpactStory; index: number }) {
  return (
    <div className={`glass-card rounded-2xl p-8 md:p-10 ${index > 0 ? "mt-8" : ""}`}>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
            {story.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
            <p className="text-sm text-muted">
              {story.product} &middot; {story.timeframe} &middot; {story.studies} studies
            </p>
          </div>
          {/* Metric */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-2xl font-extrabold text-foreground">
                {story.metricBefore} <span className="text-gold">→</span> {story.metricAfter}
              </p>
              <p className="text-sm text-gold font-semibold flex items-center gap-1 justify-end">
                <ArrowUpRight size={12} /> {story.growth}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <p className="text-base text-muted leading-relaxed">{story.narrative}</p>

        {/* Key insight */}
        <div className="bg-gold/5 border border-gold/10 rounded-xl p-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
            Key Behavioral Insight
          </p>
          <p className="text-base text-foreground/90 leading-relaxed">
            {story.keyInsight}
          </p>
        </div>

        {/* Studies list */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
            Studies
          </p>
          <div className="flex flex-wrap gap-2">
            {story.studyNames.map((name) => (
              <span
                key={name}
                className="text-sm text-muted/70 bg-white/[0.03] border border-card-border rounded-md px-2.5 py-1"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
