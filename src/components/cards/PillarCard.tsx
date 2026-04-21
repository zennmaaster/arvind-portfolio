"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: ReactNode;
  accent: "gold" | "electric" | "emerald";
  index: number;
}

const accentColors = {
  gold: "from-gold/20 to-transparent border-gold/20 hover:border-gold/40",
  electric: "from-electric/20 to-transparent border-electric/20 hover:border-electric/40",
  emerald: "from-emerald-500/20 to-transparent border-emerald-500/20 hover:border-emerald-500/40",
};

const accentText = {
  gold: "text-gold",
  electric: "text-electric-light",
  emerald: "text-emerald-400",
};

export function PillarCard({
  title,
  subtitle,
  description,
  href,
  icon,
  accent,
  index,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    >
      <Link href={href} className="block group">
        <div
          className={`glass-card glow-border rounded-2xl p-8 h-full bg-gradient-to-b ${accentColors[accent]}`}
        >
          <div className={`mb-6 ${accentText[accent]}`}>{icon}</div>
          <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${accentText[accent]}`}>
            {subtitle}
          </p>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-base text-muted leading-relaxed mb-6">
            {description}
          </p>
          <span
            className={`inline-flex items-center gap-1.5 text-base font-medium ${accentText[accent]} group-hover:gap-2.5 transition-all`}
          >
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
