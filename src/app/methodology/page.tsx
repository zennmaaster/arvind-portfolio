"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const factors = [
  { name: "Onboarding Friction", description: "Ease of initial setup and value realization" },
  { name: "Navigation Clarity", description: "Wayfinding confidence and information architecture" },
  { name: "Visual Trust", description: "Design quality, consistency, and professional signaling" },
  { name: "Content Relevance", description: "Personalization accuracy and contextual fit" },
  { name: "Performance Perception", description: "Speed, responsiveness, and reliability experience" },
  { name: "Control & Agency", description: "User's sense of choice, customization, and opt-out clarity" },
  { name: "Value Clarity", description: "Understanding of what the product offers and why it matters" },
  { name: "Error Recovery", description: "Graceful handling of mistakes, failures, and edge cases" },
  { name: "Emotional Resonance", description: "Delight, confidence, or frustration evoked by the experience" },
  { name: "Conversion Confidence", description: "Readiness to act — purchase, subscribe, share, or return" },
];

const lenses = [
  { name: "Cialdini Persuasion", description: "Reciprocity, scarcity, authority, consistency, liking, consensus" },
  { name: "Fogg Behavior Model", description: "Motivation × Ability × Prompt = Behavior" },
  { name: "Kahneman Dual-Process", description: "System 1 (fast, intuitive) vs System 2 (slow, deliberate)" },
  { name: "Jobs-to-be-Done", description: "What functional, social, and emotional job is the user hiring the product for?" },
  { name: "Trust Calibration", description: "Trust thresholds, binary vs gradient trust, trust recovery" },
  { name: "Say vs Do Gap", description: "Divergence between stated preferences and observed behavior" },
  { name: "Consumer Decision Journey", description: "Awareness → consideration → evaluation → purchase → loyalty → advocacy" },
  { name: "Mental Models", description: "User's internal representation of how a system should work" },
  { name: "Path-to-Purchase", description: "Decision architecture from intent to transaction" },
  { name: "Social Comparison", description: "How peer behavior and social proof shape individual decisions" },
  { name: "Negativity Bias", description: "Negative experiences weighted disproportionately in judgment" },
  { name: "Demographic Interpretive", description: "How demographic context shapes interpretation of findings" },
  { name: "Foresights", description: "STEEP analysis, trend lifecycle, scenario planning, weak signals" },
  { name: "UX Sentiment Factor Analysis", description: "Screen-level and element-level scoring of UX sentiment" },
  { name: "Loss Aversion", description: "Losses loom larger than equivalent gains — affects opt-out, pricing, feature removal" },
  { name: "Effort Justification", description: "Investment of effort increases perceived value of the outcome" },
];

export default function MethodologyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
            Methodology
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            UX Sentiment <span className="text-gold">Framework</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-3xl"
          >
            A 10-factor model with surface-specific weight matrices, 3-level scoring,
            and 16 behavioral analysis lenses. Original methodological IP designed to
            standardize how UX quality is measured across products and surfaces.
          </motion.p>
        </div>
      </section>

      {/* 10 Factors */}
      <Section>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            10 Factors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sentiment Factor Model
          </h2>
          <p className="text-base text-muted max-w-2xl mb-12">
            Each factor is scored on a 3-level scale (below threshold / meets threshold / exceeds)
            with surface-specific weight matrices — because what matters on a lockscreen is
            different from what matters in an app or on a TV.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {factors.map((factor, i) => (
            <ScrollReveal key={factor.name} delay={i * 0.04}>
              <div className="glass-card rounded-xl p-5 flex items-start gap-4 h-full">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <span className="text-sm font-extrabold text-gold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{factor.name}</h3>
                  <p className="text-sm text-muted mt-0.5">{factor.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Weight matrix concept */}
      <Section alt>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Surface-Specific Weights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Context Changes Everything
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-2xl p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 pr-4 text-muted font-semibold">Factor</th>
                  <th className="text-center py-3 px-4 text-electric-light font-semibold">App</th>
                  <th className="text-center py-3 px-4 text-gold font-semibold">Lockscreen</th>
                  <th className="text-center py-3 px-4 text-emerald-400 font-semibold">TV</th>
                  <th className="text-center py-3 pl-4 text-purple-400 font-semibold">Embed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Onboarding Friction", "High", "Critical", "Medium", "Critical"],
                  ["Navigation Clarity", "High", "Low", "High", "Medium"],
                  ["Visual Trust", "High", "Medium", "High", "Critical"],
                  ["Content Relevance", "Critical", "Critical", "High", "High"],
                  ["Performance Perception", "High", "Critical", "Medium", "High"],
                  ["Control & Agency", "Medium", "Critical", "Low", "Medium"],
                  ["Value Clarity", "High", "Critical", "Medium", "Critical"],
                  ["Error Recovery", "Medium", "Low", "Low", "High"],
                  ["Emotional Resonance", "Medium", "High", "High", "Medium"],
                  ["Conversion Confidence", "Critical", "Low", "Medium", "Critical"],
                ].map(([factor, ...weights]) => (
                  <tr key={factor} className="border-b border-card-border/50">
                    <td className="py-2.5 pr-4 text-foreground font-medium">{factor}</td>
                    {weights.map((w, j) => (
                      <td key={j} className="text-center py-2.5 px-4">
                        <span
                          className={`text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            w === "Critical"
                              ? "bg-red-500/15 text-red-400"
                              : w === "High"
                              ? "bg-gold/15 text-gold"
                              : w === "Medium"
                              ? "bg-blue-500/15 text-blue-400"
                              : "bg-white/5 text-muted/50"
                          }`}
                        >
                          {w}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      {/* 16 Lenses */}
      <Section>
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Behavioral Analysis
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            16 Analytical Lenses
          </h2>
          <p className="text-base text-muted max-w-2xl mb-12">
            Integrated into the Hagar research intelligence system. Every study is analyzed
            through these lenses — not as a checklist, but as a diagnostic toolkit. The
            right lens for the right finding.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {lenses.map((lens, i) => (
            <ScrollReveal key={lens.name} delay={i * 0.03}>
              <div className="glass-card rounded-lg p-4 h-full">
                <h3 className="text-sm font-bold text-foreground mb-1">{lens.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{lens.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
