const highlights = [
  {
    value: '6 days → 3 hours',
    label: 'Regression time reduced through automation and orchestration',
  },
  {
    value: '24 hours → 2 hours',
    label: 'Regression acceleration while increasing coverage and quality',
  },
  {
    value: '15+ years',
    label: 'Leadership, strategy, delivery and hands-on quality engineering',
  },
  {
    value: 'Multi-sector',
    label: 'Financial services, SaaS, mobile, pharma and enterprise platforms',
  },
];

const leadershipPillars = [
  'Quality engineering strategy and operating models',
  'Automation leadership with Playwright, TypeScript, Selenium and CI/CD',
  'Shift-left quality practices and engineering enablement',
  'Executive reporting, KPI design and stakeholder communication',
  'Cross-squad governance, delivery risk management and release confidence',
  'Team building, coaching and capability uplift across permanent and contract teams',
];

const experience = [
  {
    period: '2025 – Present',
    role: 'Lead Test Manager',
    company: 'Evelyn Partners',
    summary:
      'Leading quality engineering strategy across multiple applications within financial services, combining technical modernisation with organisation-wide quality leadership.',
    bullets: [
      'Built a scalable Playwright + TypeScript framework for UI and API testing.',
      'Created a QA Portal to run automation, monitor execution and expose quality metrics.',
      'Integrated smoke and regression testing into GitHub Actions delivery pipelines.',
      'Introduced performance testing and accessibility aligned to WCAG 2.1 AA.',
      'Embedded cross-squad shift-left practices and improved early defect detection.',
      'Reorganised Zephyr for stronger traceability across requirements, manual tests and automation.',
    ],
  },
  {
    period: '2023 – 2025',
    role: 'Test Manager',
    company: 'Opus2',
    summary:
      'Owned quality strategy across a product portfolio and built one of the organisation’s strongest QA departments during a period of delivery and process transformation.',
    bullets: [
      'Introduced modern testing practices, CI/CD thinking and exploratory approaches.',
      'Championed Agile adoption and improved collaboration between engineering and testing.',
      'Defined KPIs for defect detection, quality visibility and test coverage.',
      'Reduced regression effort from 24 hours to 2 hours while increasing coverage.',
    ],
  },
  {
    period: '2021 – 2023',
    role: 'Senior Test Analyst (Contract)',
    company: 'ACCA',
    summary:
      'Provided delivery leadership, workload management and defect lifecycle improvements while supporting automation and Agile maturity.',
    bullets: [
      'Managed day-to-day delivery across the testing team.',
      'Introduced retrospectives and planning improvements to raise team effectiveness.',
      'Oversaw reusable automated testing initiatives to improve coverage and efficiency.',
    ],
  },
  {
    period: '2018 – 2021',
    role: 'Test Lead / Scrum Master',
    company: 'City FM',
    summary:
      'Led cross-functional testing and Scrum delivery, combining team leadership with automation, tooling and process change.',
    bullets: [
      'Directed automation using Java, Selenium and Jenkins.',
      'Built and led mixed-discipline test teams across manual, automation and non-functional work.',
      'Drove shift-left quality adoption during the organisation’s Agile transformation.',
    ],
  },
];

const earlierCareer = [
  'Senior Tester – Genpact',
  'Lead Test Analyst – Castlight Financial',
  'Technical Business Consultant – Santander',
  'QA Analyst – Kelvin Connect',
  'Test Analyst – Sopra',
  'Test Analyst – Formedix',
  'User Acceptance Tester – Sky',
];

const capabilities = [
  'Quality engineering leadership',
  'Test strategy and governance',
  'Automation architecture',
  'Playwright / TypeScript',
  'Selenium / Java',
  'GitHub Actions / CI/CD',
  'Shift-left testing',
  'Release risk management',
  'Accessibility and performance testing',
  'Agile coaching and delivery collaboration',
  'KPI dashboards and reporting',
  'SQL and data validation',
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function HomePage() {
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
            <a href="/team-picker" className="button secondary">
              View Team Picker
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
            Barry’s profile is built around a clear value proposition: create quality engineering
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
      <div>
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
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card two-column">
        <div>
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Leadership and technical strengths"
          />
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
            {earlierCareer.map((item) => (
              <li key={item}>{item}</li>
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
            business stakeholders share visibility of risk and quality outcomes. Barry’s approach
            centres on making quality measurable, embedding it earlier in the lifecycle, and
            equipping teams with the automation, reporting, and decision support they need to move
            quickly with confidence.
          </p>
        </div>
        <div>
          <blockquote>
            “Quality should not be a bottleneck or a checkbox. It should be an engineering capability
            that improves confidence, speed, and product trust.”
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
    </main>
  );
}
