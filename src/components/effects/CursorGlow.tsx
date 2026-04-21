"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    function onMove(e: MouseEvent) {
      if (el) {
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
        el.style.opacity = "1";
      }
    }

    function onLeave() {
      if (el) el.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" style={{ opacity: 0 }} />;
}
