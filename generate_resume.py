#!/usr/bin/env python3
"""Generate Arvind Chandrashekar's VP-level resume as PDF."""

from fpdf import FPDF

class ResumePDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=15)

    def ensure_space(self, needed_mm):
        """Force a page break if fewer than needed_mm remain."""
        if self.get_y() + needed_mm > self.h - self.b_margin:
            self.add_page()

    def section_heading(self, text):
        self.ensure_space(20)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(40, 40, 50)
        self.cell(0, 8, text.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(180, 150, 80)
        self.set_line_width(0.5)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(4)

    def job_header(self, title, org, dates):
        self.ensure_space(18)
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(30, 30, 40)
        self.multi_cell(0, 5, title)
        self.set_font("Helvetica", "", 9)
        self.set_text_color(80, 80, 100)
        self.cell(0, 5, f"{org}  |  {dates}", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def bullet(self, text):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(50, 50, 60)
        x = self.get_x()
        self.cell(5, 5, ">")
        self.multi_cell(0, 5, text)
        self.ln(1)

    def patent_entry(self, title, status, description):
        self.ensure_space(14)
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(50, 50, 60)
        self.cell(5, 5, ">")
        self.cell(0, 5, f"{title}  [{status}]", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(80, 80, 90)
        self.set_x(self.l_margin + 5)
        self.multi_cell(0, 4.5, description)
        self.ln(1.5)


def build_resume():
    pdf = ResumePDF()
    pdf.add_page()
    pdf.set_margins(18, 15, 18)

    # === HEADER ===
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(30, 30, 40)
    pdf.cell(0, 10, "ARVIND CHANDRASHEKAR", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(120, 110, 70)
    pdf.cell(0, 6, "Behavioral Scientist  |  AI Systems Architect  |  Research Organization Builder", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(100, 100, 110)
    pdf.cell(0, 5, "don.osiris@gmail.com  |  +91-988-672-0869  |  linkedin.com/in/acz532110  |  Bangalore, India", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)

    # === PROFESSIONAL SUMMARY ===
    pdf.section_heading("Professional Summary")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(50, 50, 60)
    pdf.multi_cell(0, 5,
        "Research and behavioral science executive with 18+ years spanning software engineering, "
        "AI invention, and human behavior research. Four patents in AI-powered analysis and cognitive "
        "systems. Founded and built the Foresight & Behavioral Insights Unit at Glance (InMobi Group), "
        "establishing research as a strategic decision-making input across 6 geographies, 5 product lines, "
        "and platforms reaching 150M+ users. Designed multi-agent intelligence architectures (50+ AI agents "
        "across 5 systems) that transform how research organizations generate and act on behavioral insights. "
        "Co-author, FTW 2026 (Manchester). Published researcher and IgniteCon panelist."
    )
    pdf.ln(4)

    # === EXPERIENCE ===
    pdf.section_heading("Professional Experience")

    # Glance - Director
    pdf.job_header("Director of User Research  |  Founded Foresight & Behavioral Insights Unit",
                   "Glance Pvt. Ltd. (InMobi Group) - 150M+ users, Samsung/Motorola/Verizon",
                   "January 2024 - Present")
    for b in [
        "Organizational Strategy: Built research function from zero - 6 researchers, operating model, "
        "Foresight & Behavioral Insights Unit charter, 5-level career ladder (L1-L5), Culture Book 2026.",

        "Research Portfolio: Led 284 research projects across Glance AI Shopping, Glance TV, Samsung "
        "Lockscreen/Expressions, 1Weather, and Spaces - usability, ethnography, longitudinal, brand "
        "tracking, and sentiment analysis across US, India, Japan, Indonesia, and LatAm.",

        "Glance TV Impact: 10-study program (ethnographic diaries, concept validation, consumer landscape "
        "surveys). Growth from 1.8M to 4.4M weekly active users - 142% in 5 months.",

        "AI Shopping Impact: 8 studies from input flow redesign through trust architecture to conversion "
        "optimization. Weekly users grew 137K to 535K (290% growth).",

        "Embed Commerce: Trust and VTON research informed merchant embed - scaled from 53 users to "
        "430K weekly users in 9 weeks.",

        "Samsung Lockscreen: Multi-year program including 10-week longitudinal study. Users 15K to 115K "
        "(7.5x); renders 10.6M to 545.6M (51x).",

        "AI Innovation: 5 multi-agent systems - CIS v8.3 (8-agent cultural intelligence), Hagar (30+ "
        "agent research with 16 behavioral lenses), Argus (sentiment pipeline), GFBI Portal (research "
        "chat app), VOC Email Agent (6-agent customer intelligence).",

        "Published: Co-authored VTON paper at FTW 2026, Manchester (200K+ interactions, 1,710 surveys). "
        "Key finding: trust operates as binary threshold, not gradient.",

        "Brand Tracker: Authored RFP, evaluated 8+ vendors (Kantar, Hansa, Opinium), managing "
        "wave-over-wave brand health tracking for carrier partnerships.",
    ]:
        pdf.bullet(b)
    pdf.ln(2)

    # Glance - Head
    pdf.job_header("Head of User Research",
                   "Glance Pvt. Ltd.", "July 2023 - December 2023")
    pdf.bullet("Led all user research across product portfolio. Transitioned to managing the research "
               "practice and executive-level stakeholder relationships.")
    pdf.bullet("Initiated transformation of research team into behavioral science center of excellence.")
    pdf.ln(2)

    # InMobi - Head
    pdf.job_header("Head of User Research",
                   "InMobi Pvt. Ltd.", "July 2022 - June 2023")
    pdf.bullet("Led research across product portfolio. Built cross-functional partnerships with product, "
               "engineering, and design across geographies. Drove Japan and US market expansion research.")
    pdf.ln(2)

    # InMobi - Lead
    pdf.job_header("Lead User Researcher",
                   "InMobi Pvt. Ltd.", "August 2021 - June 2022")
    pdf.bullet("Promoted within first year. Led Spaces and 1Weather programs. Introduced longitudinal "
               "methodologies and behavioral science frameworks to the research practice.")
    pdf.ln(2)

    # Sabbatical
    pdf.job_header("Sabbatical - MA Applied Quantitative Finance",
                   "Madras School of Economics, Chennai", "August 2019 - May 2021")
    pdf.bullet("Thesis: 'Two-Sided Market Matching Mechanism For Mentors & Mentees.' Quantitative "
               "modeling, market mechanisms, and behavioral economics.")
    pdf.ln(2)

    # Consulting
    pdf.job_header("Consultant / Design Researcher (Freelance)",
                   "FMCG, Auto, Telecom, Alcohol, Apparel, E-Commerce",
                   "2009 - 2019")
    pdf.bullet("10 years across verticals: design ethnography, FGDs, depth interviews, trade research, "
               "brand equity assessment, trigger & barrier studies, ad evaluations.")
    pdf.ln(2)

    # Peak Telecom
    pdf.job_header("Product Manager (Contract)", "Peak Telecom", "2008")
    pdf.bullet("Built 'Peak Caller' - browser-enabled VoIP dialer from 0 to 1.")
    pdf.ln(2)

    # Hansa
    pdf.job_header("Senior Research Executive", "Hansa Research Pvt. Ltd.", "2007 - 2008")
    pdf.bullet("Quantitative research across Alcohol, FMCG, Apparels, BFSI, Media. Brand equity "
               "assessment, diagnostics, ethnographic research, ad evaluations.")
    pdf.ln(2)

    # Quest America
    pdf.job_header("Business Development Manager", "Quest America Inc.", "2006 - 2007")
    pdf.bullet("Business development and client acquisition in technology services.")

    pdf.ln(4)

    # === PATENTS ===
    pdf.section_heading("Patents & Inventions")
    pdf.patent_entry(
        "AI-Based Advertising Creative Analysis System",
        "GRANTED",
        "73% reduction in creative bias, 42% reduction in wasteful ad spending. "
        "Computer vision + ML for automated creative assessment at scale."
    )
    pdf.patent_entry(
        "BohemR Trust Score & Recommendation System",
        "FILED",
        "Algorithmic trust assessment and recommendation engine - trust as a "
        "computable signal for content and commerce quality ranking."
    )
    pdf.patent_entry(
        "AI Social Companion - Cross-Platform Integration",
        "FILED",
        "Multi-platform AI companion system enabling seamless UX across devices "
        "and interaction contexts."
    )
    pdf.patent_entry(
        "Cognitive Load Management System",
        "FILED",
        "Information delivery optimization based on cognitive capacity analysis. "
        "Behavioral science applied at the system architecture level."
    )
    pdf.ln(3)

    # === PUBLICATIONS ===
    pdf.section_heading("Publications & Speaking")
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(50, 50, 60)
    pdf.cell(5, 5, ">")
    pdf.multi_cell(0, 5,
        "FTW 2026, Manchester, UK - \"Understanding User Responses to Virtual Try-On "
        "Through Large-Scale and Qualitative Studies\" (co-author with A. Gupta, "
        "I. Anderson, P. Duff)"
    )
    pdf.ln(1)
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(5, 5, ">")
    pdf.cell(0, 5, "IgniteCon - Panelist, India's First User Research Conference (Inaugural Edition)", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

    # === EDUCATION ===
    pdf.section_heading("Education")
    for degree, school, years in [
        ("MA, Sociology (In Progress)", "IGNOU", "Current"),
        ("MA, Applied Quantitative Finance", "Madras School of Economics", "2019 - 2021"),
        ("MA, Political Science", "IGNOU", "2016 - 2018"),
        ("BE, Computer Science", "Anna University", "2002 - 2007"),
    ]:
        pdf.set_font("Helvetica", "B", 9)
        pdf.set_text_color(50, 50, 60)
        pdf.cell(0, 5, f"{degree}  -  {school}  |  {years}", new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)
    pdf.ln(3)

    # === SKILLS ===
    pdf.section_heading("Core Competencies")
    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(60, 60, 70)
    pdf.multi_cell(0, 4.5,
        "Research Org Design  |  Mixed Methods  |  Behavioral Economics  |  Choice Architecture  |  "
        "Ethnography  |  Longitudinal Studies  |  Brand Tracking  |  Multi-Agent AI System Design  |  "
        "Computer Vision  |  NLP  |  Python / SQL / Databricks  |  C-Suite Advisory  |  "
        "Team Building (0->6)  |  Career Ladder Design  |  Cross-Functional Influence  |  "
        "Vendor Management & RFP  |  Research Democratization  |  Global Research Operations"
    )

    # === SAVE ===
    out = "/Users/arvind.chandrashekar/Desktop/Personal/arvind-portfolio/Arvind_Chandrashekar_Resume_2026.pdf"
    pdf.output(out)
    print(f"Resume saved to: {out}")


if __name__ == "__main__":
    build_resume()
