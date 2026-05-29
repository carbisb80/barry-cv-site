"use client";

import { useCallback, useRef, useState } from "react";

function sanitizeText(input: string) {
  if (!input) return input;
  let s = input.normalize("NFKC");
  s = s.replace(/[%Æ]+/g, "");
  s = s.replace(/[‘’‚‛`´]/g, "'");
  s = s.replace(/[“”„‟]/g, '"');
  s = s.replace(/[–—―]/g, "-");
  s = s.replace(/[•‣∙]/g, "-");
  s = s.replace(/…/g, "...");
  s = s.replace(/^[^A-Za-z0-9]+/, "");
  s = s.replace(/\u00A0/g, " ").replace(/\u200B/g, "").replace(/\uFEFF/g, "");
  s = s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
  s = s.replace(/\s+/g, " ");
  return s.trim();
}

const highlights = [
  {
    value: "6 days - 3 hours",
    label: "Regression time reduced through automation and orchestration",
  },
  {
    value: "24 hours - 2 hours",
    label: "Regression acceleration while increasing coverage and quality",
  },
  {
    value: "15+ years",
    label: "Leadership, strategy, delivery and hands-on quality engineering",
  },
  {
    value: "Multi-sector",
    label: "Financial services, SaaS, mobile, pharma and enterprise platforms",
  },
];

const leadershipPillars = [
  "Quality engineering strategy and operating models",
  "Automation leadership with Playwright, TypeScript, Selenium and CI/CD",
  "Shift-left quality practices and engineering enablement",
  "Executive reporting, KPI design and stakeholder communication",
  "Cross-squad governance, delivery risk management and release confidence",
  "Team building, coaching and capability uplift across permanent and contract teams",
];

const experience = [
  {
    period: "2025 - Present",
    role: "Lead Test Manager",
    company: "Evelyn Partners",
    summary:
      "Leading quality engineering strategy across multiple applications within financial services, combining technical modernisation with organisation-wide quality leadership.",
    bullets: [
      "Built a scalable Playwright + TypeScript framework for UI and API testing.",
      "Co-ordinating on-shore and offshore teams to deliver automation, reporting and process improvements.",
      "Led the migration of manual tests to automated workflows.",
      "Created a QA Portal to run automation, monitor execution and expose quality metrics.",
      "Integrated smoke and regression testing into GitHub Actions delivery pipelines.",
      "Introduced performance testing and accessibility aligned to WCAG 2.1 AA.",
      "Embedded cross-squad shift-left practices and improved early defect detection.",
      "Reorganised Zephyr for stronger traceability across requirements, manual tests and automation.",
    ],
  },
  {
    period: "2023 - 2025",
    role: "Test Manager & Acting Agile Coach",
    company: "Opus2",
    summary:
      "Owned quality strategy and built one of the organisation's strongest QA departments. Acted as Scrum Master and Agile coach, driving department-wide adoption of modern Agile practices.",
    bullets: [
      "Introduced modern testing practices, CI/CD integration, and exploratory testing approaches.",
      "Led department-wide Agile transformation as Scrum Master and Agile coach, implementing Scrum ceremonies and improving cross-team collaboration.",
      "Defined KPIs for quality metrics and achieved 24-hour to 2-hour regression reduction while increasing coverage.",
    ],
  },
  {
    period: "2021 - 2023",
    role: "Senior Test Analyst (Contract)",
    company: "ACCA",
    summary:
      "Provided delivery leadership, workload management and defect lifecycle improvements while supporting automation and Agile maturity.",
    bullets: [
      "Managed day-to-day delivery across the testing team.",
      "Introduced retrospectives and planning improvements to raise team effectiveness.",
      "Oversaw reusable automated testing initiatives to improve coverage and efficiency.",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Test Lead / Scrum Master",
    company: "City FM",
    summary:
      "Led cross-functional testing and Scrum delivery, combining team leadership with automation, tooling and process change.",
    bullets: [
      "Directed automation using Java, Selenium and Jenkins.",
      "Built and led mixed-discipline test teams across manual, automation and non-functional work.",
      "Drove shift-left quality adoption during the organisation's Agile transformation.",
    ],
  },
];

const earlierCareer = [
  "Lead Test Analyst - Castlight Financial",
  "QA Analyst - Kelvin Connect",
  "Senior Tester - Genpact",
  "Technical Business Consultant - Santander",
  "Test Analyst - Formedix",
  "Test Analyst - Sopra",
  "User Acceptance Tester - Sky",
];

const capabilities = [
  "Quality engineering leadership",
  "Test strategy and governance",
  "Automation architecture",
  "Playwright / TypeScript",
  "Selenium / Java",
  "GitHub Actions / CI/CD",
  "Shift-left testing",
  "Release risk management",
  "Accessibility and performance testing",
  "Agile coaching and delivery collaboration",
  "KPI dashboards and reporting",
  "SQL and data validation",
];

const technicalSkills = {
  Automation: "Playwright, TypeScript, Selenium, Cypress",
  "CI/CD": "GitHub Actions, Jenkins, Azure DevOps",
  "Test Management": "Jira, Zephyr Scale, test strategy, release governance",
  "Non-functional": "Accessibility, WCAG 2.1 AA, performance testing, JMeter",
  Reporting: "Allure, dashboards, KPIs, executive reporting",
  "Cloud & Tools": "AWS, Azure, Docker, BrowserStack, Grafana",
};

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isGeneratingDocx, setIsGeneratingDocx] = useState(false);
  const pdfTemplateRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadPDF = useCallback(async () => {
    if (isGeneratingPdf || !pdfTemplateRef.current) return;
    setIsGeneratingPdf(true);

    try {
      const [{ jsPDF }, html2canvas] = await Promise.all([
        import("jspdf"),
        import("html2canvas").then((module) => module.default || module),
      ]);

      const element = pdfTemplateRef.current;
      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = pageWidth / canvas.width;
      const imgHeight = canvas.height * ratio;

      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
      } else {
        const pageCanvasHeight = Math.floor(pageHeight / ratio);
        let position = 0;
        let pageIndex = 0;

        while (position < canvas.height) {
          const sliceHeight = Math.min(pageCanvasHeight, canvas.height - position);
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeight;
          const context = pageCanvas.getContext("2d");
          if (context) {
            context.drawImage(canvas, 0, position, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
          }
          const pageData = pageCanvas.toDataURL("image/png");
          if (pageIndex > 0) pdf.addPage();
          pdf.addImage(pageData, "PNG", 0, 0, pageWidth, sliceHeight * ratio);
          position += sliceHeight;
          pageIndex += 1;
        }
      }

      pdf.save("Barry-Carbis-CV.pdf");
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingPdf(false);
    }
  }, [isGeneratingPdf]);

  const handleDownloadDocx = useCallback(async () => {
    if (isGeneratingDocx) return;
    setIsGeneratingDocx(true);

    try {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        HeadingLevel,
        Packer,
        Paragraph,
        ShadingType,
        Table,
        TableCell,
        TableRow,
        TextRun,
        WidthType,
      } = await import("docx");

      const navy = "0F162C";
      const gold = "D6B25E";
      const dark = "233042";
      const lightGrey = "F5F7FA";
      const white = "FFFFFF";

      const heading = (text: string) =>
        new Paragraph({
          spacing: { before: 260, after: 120 },
          border: {
            bottom: {
              color: gold,
              size: 8,
              style: BorderStyle.SINGLE,
            },
          },
          children: [
            new TextRun({
              text: text.toUpperCase(),
              bold: true,
              size: 22,
              color: navy,
            }),
          ],
        });

      const normal = (text: string) =>
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text,
              size: 21,
              color: dark,
            }),
          ],
        });

      const bulletPara = (text: string) =>
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 80 },
          children: [
            new TextRun({
              text,
              size: 20,
              color: dark,
            }),
          ],
        });

      const children = [];

      const headerTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 65, type: WidthType.PERCENTAGE },
                shading: { fill: navy, type: ShadingType.CLEAR, color: "auto" },
                borders: {
                  top: { style: BorderStyle.NONE },
                  bottom: { style: BorderStyle.NONE },
                  left: { style: BorderStyle.NONE },
                  right: { style: BorderStyle.NONE },
                },
                children: [
                  new Paragraph({
                    spacing: { before: 180, after: 60 },
                    children: [
                      new TextRun({
                        text: "BARRY CARBIS",
                        bold: true,
                        size: 38,
                        color: white,
                      }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { after: 80 },
                    children: [
                      new TextRun({
                        text: "Lead Test Manager | Quality Engineering Leader",
                        size: 23,
                        color: white,
                      }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { after: 180 },
                    children: [
                      new TextRun({
                        text: "Quality Strategy • Automation Transformation • Playwright • CI/CD",
                        size: 18,
                        color: "E8EBF2",
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: { size: 35, type: WidthType.PERCENTAGE },
                shading: { fill: navy, type: ShadingType.CLEAR, color: "auto" },
                borders: {
                  top: { style: BorderStyle.NONE },
                  bottom: { style: BorderStyle.NONE },
                  left: { style: BorderStyle.NONE },
                  right: { style: BorderStyle.NONE },
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 220, after: 60 },
                    children: [new TextRun({ text: "barry.carbis@sky.com", size: 18, color: white })],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 60 },
                    children: [new TextRun({ text: "07701 078087", size: 18, color: white })],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 160 },
                    children: [new TextRun({ text: "East Ayrshire, United Kingdom", size: 18, color: white })],
                  }),
                ],
              }),
            ],
          }),
        ],
      });

      const achievementTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: highlights.map(
              (item) =>
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  shading: { fill: lightGrey, type: ShadingType.CLEAR, color: "auto" },
                  margins: { top: 120, bottom: 120, left: 120, right: 120 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { after: 60 },
                      children: [new TextRun({ text: item.value, bold: true, size: 22, color: navy })],
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [new TextRun({ text: item.label, size: 16, color: dark })],
                    }),
                  ],
                })
            ),
          }),
        ],
      });

      const skillsTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                children: capabilities
                  .slice(0, Math.ceil(capabilities.length / 2))
                  .map((skill) => bulletPara(sanitizeText(skill))),
              }),
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                children: capabilities
                  .slice(Math.ceil(capabilities.length / 2))
                  .map((skill) => bulletPara(sanitizeText(skill))),
              }),
            ],
          }),
        ],
      });

      const doc = new Document({
        styles: {
          paragraphStyles: [
            {
              id: "Normal",
              name: "Normal",
              run: {
                font: "Arial",
                size: 21,
                color: dark,
              },
              paragraph: {
                spacing: { after: 120 },
              },
            },
          ],
        },
        sections: [
          {
            properties: {
              page: {
                margin: {
                  top: 720,
                  right: 720,
                  bottom: 720,
                  left: 720,
                },
              },
            },
            children: [
              headerTable,
              new Paragraph({
                spacing: { before: 120, after: 120 },
                border: {
                  bottom: { style: BorderStyle.SINGLE, size: 8, color: gold },
                },
              }),
              heading("Personal Profile"),
              normal(
                "Accomplished Quality Engineering Leader with 15+ years' experience across financial services, SaaS, mobile, pharma and enterprise platforms. Strong record of modernising QA functions, building scalable automation, improving release confidence and translating quality into measurable business outcomes."
              ),
              heading("Career Achievements"),
              achievementTable,
              heading("Key Skills"),
              skillsTable,
              heading("Professional Experience"),
                ...experience.flatMap((job) => [
                new Paragraph({
                  spacing: { before: 180, after: 40 },
                  children: [
                    new TextRun({
                      text: job.company.toUpperCase(),
                      bold: true,
                      size: 24,
                      color: navy,
                    }),
                    new TextRun({
                      text: `    ${job.period}`,
                      bold: true,
                      size: 20,
                      color: gold,
                    }),
                  ],
                }),
                new Paragraph({
                  spacing: { after: 100 },
                  children: [
                    new TextRun({
                      text: job.role,
                      bold: true,
                      size: 21,
                      color: dark,
                    }),
                  ],
                }),
                normal(job.summary),
                new Paragraph({
                  spacing: { before: 60, after: 80 },
                  children: [
                    new TextRun({
                      text: "Notable achievements:",
                      bold: true,
                      size: 20,
                      color: navy,
                    }),
                  ],
                }),
                ...job.bullets.map((item) => bulletPara(sanitizeText(item))),
              ]),
              heading("Technical Skills"),
              ...Object.entries(technicalSkills).map(
                ([group, value]) =>
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({
                        text: `${group}: `,
                        bold: true,
                        size: 20,
                        color: navy,
                      }),
                      new TextRun({
                        text: value,
                        size: 20,
                        color: dark,
                      }),
                    ],
                  })
              ),
              heading("Earlier Career"),
              ...earlierCareer.map((item) => bulletPara(sanitizeText(item))),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Barry-Carbis-CV.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setIsGeneratingDocx(false);
    }
  }, [isGeneratingDocx]);

  return (
    <main className="page-shell">
      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Software Quality Engineering Leadership</p>
          <h1>Barry Carbis</h1>
          <p className="hero-summary">
            Quality Engineering Leader focused on building modern quality organisations,
            accelerating delivery confidence, and embedding engineering-led testing at scale.
          </p>
          <p className="hero-detail">
            I help organisations move beyond traditional QA by combining strategy, leadership,
            automation, observability, and delivery enablement to improve software quality without
            slowing teams down.
          </p>
          <div className="hero-actions">
            <a href="mailto:barry.carbis@sky.com" className="button primary">
              Contact Barry
            </a>
            <a href="#experience" className="button secondary">
              View Experience
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-badge">Positioning</div>
          <h3>Leader in Software Quality Engineering</h3>
          <p>
            Proven in building teams, defining operating models, scaling automation, and turning
            quality into a measurable delivery capability.
          </p>
          <ul>
            <li>Strategic quality leadership</li>
            <li>Hands-on technical credibility</li>
            <li>Executive-ready communication</li>
          </ul>
        </div>
      </section>

      <section className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.label} className="metric card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="card two-column">
        <div>
          <SectionHeading
            eyebrow="Leadership Profile"
            title="What Barry brings to quality-focused organisations"
            intro="A blend of strategic leadership and delivery-level execution, shaped by years of improving quality across regulated and high-change environments."
          />
          <p>
            Barry's profile is built around a clear value proposition: create quality engineering
            functions that are visible, scalable, and tightly connected to business outcomes.
            Rather than treating testing as a final-stage gate, he positions quality as an
            engineering discipline that improves release confidence, shortens feedback loops, and
            strengthens delivery decision-making.
          </p>
        </div>
        <div>
          <ul className="feature-list">
            {leadershipPillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <SectionHeading
          eyebrow="Executive Summary"
          title="A leader who modernises quality, not just testing"
          intro="Experienced across financial services, enterprise platforms, SaaS and mobile environments, with a consistent record of making quality faster, clearer and more valuable to stakeholders."
        />
        <div className="summary-grid">
          <article>
            <h3>Strategic impact</h3>
            <p>
              Defines pragmatic quality strategies that align with product delivery, engineering
              maturity, governance expectations, and release risk.
            </p>
          </article>
          <article>
            <h3>Technical credibility</h3>
            <p>
              Strong hands-on background in automation frameworks, CI/CD integration, reporting,
              test tooling and scalable quality practices.
            </p>
          </article>
          <article>
            <h3>People leadership</h3>
            <p>
              Builds and leads high-performing teams, balancing coaching, standards, prioritisation
              and practical delivery support.
            </p>
          </article>
          <article>
            <h3>Transformation mindset</h3>
            <p>
              Known for driving shift-left thinking, creating measurable improvements, and helping
              organisations move from reactive QA to quality engineering.
            </p>
          </article>
        </div>
      </section>

      <section id="experience" className="card">
        <SectionHeading
          eyebrow="Career Experience"
          title="Recent leadership journey"
          intro="Selected roles that best reflect senior leadership, technical depth and domain credibility in software quality engineering."
        />
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.role} <span>@ {item.company}</span>
                </h3>
                <p>{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet, idx) => (
                    <li key={`${item.company}-${idx}`}>{sanitizeText(bullet)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card two-column">
        <div>
          <SectionHeading eyebrow="Core Capabilities" title="Leadership and technical strengths" />
          <div className="tag-grid">
            {capabilities.map((capability) => (
              <span className="tag" key={capability}>
                {capability}
              </span>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Earlier Career"
            title="Foundation roles"
            intro="A broad base across banking, financial services, pharma, mobile, SaaS and enterprise delivery environments."
          />
          <ul className="feature-list compact">
            {earlierCareer.map((item, idx) => (
              <li key={`earlier-${idx}`}>{sanitizeText(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card two-column accent-panel">
        <div>
          <SectionHeading
            eyebrow="Leadership Philosophy"
            title="How Barry approaches quality engineering"
          />
          <p>
            The strongest quality functions are built when engineering, testing, delivery, and
            business stakeholders share visibility of risk and quality outcomes. Barry's approach
            centres on making quality measurable, embedding it earlier in the lifecycle, and
            equipping teams with the automation, reporting, and decision support they need to move
            quickly with confidence.
          </p>
        </div>
        <div>
          <blockquote>
            "Quality should not be a bottleneck or a checkbox. It should be an engineering capability
            that improves confidence, speed, and product trust."
          </blockquote>
        </div>
      </section>

      <section className="card contact-card">
        <SectionHeading
          eyebrow="Contact"
          title="Open to senior leadership opportunities in software quality engineering"
          intro="Available for conversations around Head of QA, Quality Engineering leadership, test transformation, and strategic quality roles."
        />
        <div className="contact-grid">
          <a href="mailto:barry.carbis@sky.com">barry.carbis@sky.com</a>
          <a href="tel:07701078087">07701 078087</a>
          <p>Galston, East Ayrshire, United Kingdom</p>
        </div>
      </section>

      <section className="card download-card">
        <SectionHeading
          eyebrow="Download"
          title="Download the CV"
          intro="Save a professionally formatted PDF or Word version of this CV for recruiters and agencies."
        />
        <div className="download-actions">
          <button className="button primary" onClick={handleDownloadPDF} disabled={isGeneratingPdf}>
            {isGeneratingPdf ? "Generating PDF..." : "Download PDF"}
          </button>
          <button className="button secondary" onClick={handleDownloadDocx} disabled={isGeneratingDocx}>
            {isGeneratingDocx ? "Generating DOCX..." : "Download DOCX"}
          </button>
        </div>
      </section>

      <div
        ref={pdfTemplateRef}
        style={{
          position: "fixed",
          left: -9999,
          top: 0,
          width: 800,
          padding: 28,
          background: "#ffffff",
          color: "#232942",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.45,
          zIndex: -1,
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>BARRY CARBIS</div>
          <div style={{ fontSize: 14, color: "#ffffff", background: "#0f162c", display: "inline-block", padding: "6px 12px", borderRadius: 6, marginBottom: 10 }}>
            Lead Test Manager | Quality Engineering Leader
          </div>
          <div style={{ marginBottom: 4, fontSize: 14, color: "#232942" }}>
            Quality Strategy • Automation Transformation • Playwright • CI/CD • Release Confidence
          </div>
          <div style={{ fontSize: 12, color: "#5c647d" }}>
            barry.carbis@sky.com · 07701 078087 · East Ayrshire, United Kingdom
          </div>
          <div style={{ height: 2, background: "#d6b25e", margin: "16px 0" }} />
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: "#ffffff", background: "#0f162c", display: "inline-flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, marginBottom: 10 }}>
            Personal Profile
          </div>
          <div style={{ fontSize: 11, color: "#232942" }}>
            Accomplished Quality Engineering Leader with 15+ years' experience across financial services, SaaS, mobile, pharma and enterprise platforms. Strong record of modernising QA functions, building scalable automation, improving release confidence and translating quality into measurable business outcomes.
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: "#ffffff", background: "#0f162c", display: "inline-flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, marginBottom: 10 }}>
            Career Achievements
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {highlights.map((item) => (
              <div key={item.label} style={{ flex: "1 1 180px", minWidth: 180, background: "#f5f7fa", borderRadius: 8, padding: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0f162c", marginBottom: 6 }}>{sanitizeText(item.value)}</div>
                <div style={{ fontSize: 10, color: "#5c647d", lineHeight: 1.4 }}>{sanitizeText(item.label)}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: "#ffffff", background: "#0f162c", display: "inline-flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, marginBottom: 10 }}>
            Key Skills
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {capabilities.map((item) => (
              <div key={item} style={{ fontSize: 10, color: "#232942", border: "1px solid #e2e6ee", borderRadius: 20, padding: "6px 10px" }}>
                {sanitizeText(item)}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: "#ffffff", background: "#0f162c", display: "inline-flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, marginBottom: 10 }}>
            Professional Experience
          </div>
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#0f162c", fontWeight: 700 }}>{sanitizeText(job.company.toUpperCase())}</div>
              <div style={{ fontSize: 10, color: "#d6b25e", marginBottom: 6 }}>{sanitizeText(job.period)}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#232942", marginBottom: 6 }}>{sanitizeText(job.role)}</div>
              <div style={{ fontSize: 10, color: "#232942", marginBottom: 8 }}>{sanitizeText(job.summary)}</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#232942" }}>
                {job.bullets.map((bullet, idx) => (
                  <li key={`${job.company}-${idx}`} style={{ marginBottom: 6, fontSize: 10, lineHeight: 1.4 }}>
                    {sanitizeText(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", color: "#ffffff", background: "#0f162c", display: "inline-flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, marginBottom: 10 }}>
            Earlier Career
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#232942", fontSize: 10, lineHeight: 1.4 }}>
            {earlierCareer.map((item, idx) => (
              <li key={`earlier-${idx}`} style={{ marginBottom: 6 }}>{sanitizeText(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}