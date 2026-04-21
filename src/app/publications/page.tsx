"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { BookOpen, Mic, Award, Shield, Lightbulb, Clock, GraduationCap } from "lucide-react";

export default function PublicationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-section-alt to-background" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4"
          >
            Publications & Credentials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
          >
            Research <span className="text-gold">Published</span>
          </motion.h1>
        </div>
      </section>

      {/* Published Paper */}
      <Section>
        <ScrollReveal>
          <div className="glass-card glow-border rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <BookOpen size={28} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  Published &middot; FTW 2026
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2">
                  Understanding User Responses to Virtual Try-On Through Large-Scale and Qualitative Studies
                </h3>
                <p className="text-sm text-muted mt-1">
                  Fashion-Textiles-Wearables (FTW) 2026 &middot; Manchester, UK &middot; April 13–15
                </p>
                <p className="text-xs text-muted mt-1">
                  Co-authored with Akshat Gupta, Ian Anderson, Paul Duff
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gold/5 border border-gold/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-gold">200K+</div>
                <p className="text-xs text-muted mt-1">User Interactions Analyzed</p>
              </div>
              <div className="bg-gold/5 border border-gold/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-gold">1,710</div>
                <p className="text-xs text-muted mt-1">Survey Responses</p>
              </div>
              <div className="bg-gold/5 border border-gold/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-gold">Multi-study</div>
                <p className="text-xs text-muted mt-1">Qualitative Program</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  Key Finding
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Trust in virtual try-on operates as a <strong>binary threshold</strong>, not a gradient.
                  Minor inaccuracies in body proportion, skin tone, or facial features cause immediate
                  user dropout — not gradual decline. Session-to-session consistency matters more than
                  peak rendering quality. Users build a mental model of their VTON appearance; renders
                  that violate it signal system unreliability rather than variability.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  Design Implications
                </p>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li>&bull; Representation fidelity is a threshold condition, not a gradient</li>
                  <li>&bull; Garment fidelity is a separate trust dimension from compositing quality</li>
                  <li>&bull; Consistency over quality ceiling for trust building</li>
                  <li>&bull; Goal-sensitive surface timing: VTON for evaluation, not aspiration</li>
                  <li>&bull; ~20% of users don&apos;t convert due to remaining fit uncertainty</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Conference */}
      <Section alt>
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Mic size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  IgniteCon — Panelist
                </h3>
                <p className="text-sm text-muted mt-1">
                  India&apos;s First User Research Conference &middot; Inaugural Edition
                </p>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  Panelist at the inaugural edition of IGNITE, India&apos;s first dedicated user research
                  conference organized by User Connect Consultancy. The conference brings together UX
                  researchers, design leaders, and product strategists to discuss emerging methodologies,
                  AI in research, and building research culture at organizational scale.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Patents */}
      <Section>
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Intellectual Property
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            4 Patents
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {[
            {
              icon: <Award size={20} />,
              title: "AI-Based Advertising Creative Analysis System",
              status: "Granted",
              description:
                "Intelligent evaluation system achieving 73% reduction in creative bias and 42% reduction in wasteful ad spending. Applied computer vision and machine learning to automate creative assessment at scale.",
            },
            {
              icon: <Shield size={20} />,
              title: "BohemR Trust Score & Recommendation System",
              status: "Filed",
              description:
                "Algorithmic trust assessment and recommendation engine — trust as a computable signal for content and commerce quality ranking.",
            },
            {
              icon: <Lightbulb size={20} />,
              title: "AI Social Companion — Cross-Platform Integration",
              status: "Filed",
              description:
                "Multi-platform AI companion system enabling seamless user experience across devices and interaction contexts.",
            },
            {
              icon: <Clock size={20} />,
              title: "Cognitive Load Management System",
              status: "Filed",
              description:
                "System for optimizing information delivery based on cognitive capacity analysis — behavioral science at the system level.",
            },
          ].map((patent, i) => (
            <ScrollReveal key={patent.title} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <span className="text-gold mt-0.5">{patent.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-foreground">{patent.title}</h3>
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
                  <p className="text-xs text-muted leading-relaxed">{patent.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section alt>
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Academic Credentials
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { degree: "BE, Computer Science", school: "Anna University", years: "2002–2007" },
            { degree: "MA, Political Science", school: "IGNOU", years: "2016–2018" },
            { degree: "MA, Applied Quantitative Finance", school: "Madras School of Economics", years: "2019–2021" },
            { degree: "MA, Sociology (In Progress)", school: "IGNOU", years: "Current" },
          ].map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                <GraduationCap size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-xs text-muted">
                    {edu.school} &middot; {edu.years}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
