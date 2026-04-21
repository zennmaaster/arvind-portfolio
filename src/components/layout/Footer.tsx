import { Mail, FileText } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base text-muted">
              Arvind Chandrashekar — Behavioral Scientist & AI Systems Architect
            </p>
            <p className="text-sm text-muted/60 mt-1">
              4 Patents &middot; 284 Research Projects &middot; 18+ Years
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/acz532110/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:don.osiris@gmail.com"
              className="text-muted hover:text-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="/about"
              className="text-muted hover:text-gold transition-colors"
              aria-label="About"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
