"use client";

import { CountUp } from "@/components/effects/CountUp";

interface MetricBadgeProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function MetricBadge({ value, suffix, prefix, label }: MetricBadgeProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-foreground">
        <CountUp end={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-xs text-muted mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}
