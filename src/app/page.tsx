import ClientScripts from '@/components/ClientScripts'

const JOIN_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdcJNU92pUVHxOXU2z2rgChJAPHHDWHtZ4NY-GOGDwWiCypAg/viewform?usp=sharing&ouid=110617859784928127398'

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#top">
            <span className="wm wm--shadow-coral">NXTVC</span>
          </a>
          <div className="nav-links">
            <a href="#what">Introduction</a>
            <a href="#who">Member Overview</a>
            <a href="#chapters">Chapters</a>
          </div>
          <div className="nav-cta">
            <a className="btn btn--primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
              <span className="ic">▶</span>Request to join
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="hero scan" id="top">
        <div className="hero-inner">
          <div className="hero-centered">
            <span className="eyebrow-px">◆ MULTIPLAYER ◆</span>
            <div className="hero-wm wm wm--light wm--shadow-coral">NXTVC</div>
            <span className="hero-tag">PRESS START TO JOIN</span>
            <h1 className="hero-headline">For the next generation of Venture Capital</h1>
            <div className="hero-cta">
              <a className="btn btn--primary" href="#what">
                Learn more
              </a>
              <a className="btn btn--ghost btn--on-plum" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
                Request to join
              </a>
            </div>
            <div className="hero-meta">
              <span>Established 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 · WHAT IT IS ── */}
      <section className="section" id="what">
        <div className="wrap">
          <div className="leadin reveal">
            <p className="big">
              Successful GPs credit their career trajectory to people who showed up in their early
              years. NXTVC is the ecosystem for investors to develop their network and find their
              inner circle.
            </p>
            <div className="side">
              <p>
                NXTVC is both a digital and city-based network for Venture Capital Investors to
                build trusted relationships and collectively improve the entrepreneurial ecosystem.
              </p>
              <p>
                This community is built by junior VCs, for junior VCs. A collaborative board and
                local grassroots chapters empower members to cultivate valuable networks and
                lifelong friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · WHO IT'S FOR ── */}
      <section className="section who scan" id="who">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 className="sec-title">Member Overview</h2>
            <p className="sec-desc">
              Membership is open to full-time venture capital investors across North America. The
              leadership is pre-partner first but partners are of course welcome to join.
            </p>
          </div>

          <div className="criteria reveal">
            <div className="crit is-in">
              <h4>
                <span className="mk">▶</span> You&apos;re in if&hellip;
              </h4>
              <ul>
                <li>
                  <span className="mk">✓</span> You&apos;re full-time in Venture Capital.
                </li>
                <li>
                  <span className="mk">✓</span> You&apos;re based in North America (U.S. or
                  Canada).
                </li>
                <li>
                  <span className="mk">✓</span> You&apos;re pre-partner — Analyst through
                  Principal or VP. (Partners welcome to join as members!)
                </li>
                <li>
                  <span className="mk">✓</span> You&apos;ll give as much as you take — and keep
                  what&apos;s shared in trust.
                </li>
              </ul>
            </div>
          </div>

          <div className="rules reveal">
            <div className="rules-grid">
              <div className="rule">
                <span className="rule-no">01</span>
                <h5>Respect confidentiality</h5>
                <p>
                  Deals, hiring, and other exchanges of information are confidential unless noted
                  otherwise. Please respect Chatham House rules.
                </p>
              </div>
              <div className="rule">
                <span className="rule-no">02</span>
                <h5>Everyone&apos;s a future partner</h5>
                <p>
                  You&apos;ll co-invest with, work for, or hire from this room. Act accordingly.
                </p>
              </div>
              <div className="rule">
                <span className="rule-no">03</span>
                <h5>Zero tolerance</h5>
                <p>
                  Harassment or discrimination of any kind means immediate removal. Predatory
                  solicitation will be means for removal.
                </p>
              </div>
              <div className="rule">
                <span className="rule-no">04</span>
                <h5>Leadership should evolve</h5>
                <p>
                  As leaders move on to lead their firm, succession planning allows for the
                  community to continue to support its members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · CHAPTERS ── */}
      <section className="section" id="chapters">
        <div className="wrap">
          <div className="chapters-head reveal">
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <h2 className="sec-title">Chapter Connections</h2>
              <p className="sec-desc">
                Chapters host dinners, panels, deal sessions and meetups (and maybe an annual
                national summit) all anchored by a digital community. Chapters are designated by
                city and sector focus.
              </p>
            </div>
          </div>

          <p className="group-label reveal" style={{ marginTop: '48px' }}>
            By city
          </p>
          <div className="chip-grid" style={{ marginTop: '18px' }}>
            <div className="chip is-live reveal">
              <span className="city">New York</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your lead ·{' '}
                <a
                  href="https://www.linkedin.com/in/zoevandenbol/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zoe
                </a>
              </span>
            </div>
            <div className="chip is-live reveal">
              <span className="city">San Francisco</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your lead ·{' '}
                <a
                  href="https://www.linkedin.com/in/daisysg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daisy
                </a>
              </span>
            </div>
            <div className="chip is-live reveal">
              <span className="city">Los Angeles</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your lead ·{' '}
                <a
                  href="https://www.linkedin.com/in/chase-seklar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chase
                </a>
              </span>
            </div>
            <div className="chip is-live reveal">
              <span className="city">Boston</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your leads ·{' '}
                <a
                  href="https://www.linkedin.com/in/sarah-a-lamont?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarah
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/jack-a-canavan?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jack
                </a>
                , and{' '}
                <a
                  href="https://www.linkedin.com/in/tyler-fohrman?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tyler
                </a>
              </span>
            </div>
            <div className="chip is-live reveal">
              <span className="city">Chicago</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your lead ·{' '}
                <a
                  href="https://www.linkedin.com/in/peri-ehlman-b02b00143/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Peri
                </a>
              </span>
            </div>
            <div className="chip is-soon reveal">
              <span className="city">Miami</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon reveal">
              <span className="city">Nashville</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon reveal">
              <span className="city">Salt Lake City</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon reveal">
              <span className="city">Toronto</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-live reveal">
              <span className="city">Austin</span>
              <span className="status">
                <span className="led" />
                LIVE
              </span>
              <span className="lead">
                Meet your lead ·{' '}
                <a
                  href="https://www.linkedin.com/in/arjunhegde1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arjun
                </a>
              </span>
            </div>
            <div className="chip is-soon reveal">
              <span className="city">Seattle</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
          </div>

          <p className="group-label reveal" style={{ marginTop: '52px' }}>
            By sector
          </p>
          <div className="chip-grid reveal" style={{ marginTop: '18px' }}>
            <div className="chip is-soon">
              <span className="city">Dual-Use &amp; DefenseTech</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">ConsumerTech</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">HealthTech</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">FinTech</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">AI Infrastructure</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">Dev Tools</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">Cybersecurity</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
            <div className="chip is-soon">
              <span className="city">Robotics</span>
              <span className="status">
                <span className="led" />
                SOON
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta scan" id="join">
        <div className="cta-inner">
          <div className="cta-wm wm wm--light wm--shadow-coral">NXTVC</div>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href={JOIN_URL} target="_blank" rel="noopener noreferrer">
              <span className="ic blink">▶</span>Request to join
            </a>
            <a className="btn btn--ghost btn--on-plum" href="#what">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="foot">
        <div className="foot-inner">
          <div>
            <span className="wm wm--shadow-coral wm--light">NXTVC</span>
            <p>
              A national community for pre-partner venture capital investors. Built by the next
              generation, for the next generation.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h5>Community</h5>
              <ul>
                <li>
                  <a href="#what">What it is</a>
                </li>
                <li>
                  <a href="#who">Who it&apos;s for</a>
                </li>
                <li>
                  <a href="#chapters">Chapters</a>
                </li>
                <li>
                  <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">Request to join</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bar">
          <div className="foot-bar-inner">
            <span>2026 NXTVC</span>
            <span>Multiplayer mode ▶</span>
          </div>
        </div>
      </footer>

      <ClientScripts />
    </>
  )
}
