// brand-cards.jsx — five NXTVC logo / identity directions
// Each exports a self-contained card sized to fit a DCArtboard.

// ---------- shared bits ----------
const UI = "'Space Grotesk', system-ui, sans-serif";

function Eyebrow({ children, color, sub }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: UI, fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: color || "#8a8780", textTransform: "uppercase" }}>{children}</span>
      {sub ? <span style={{ fontFamily: UI, fontSize: 14, color: "#6f6c66", lineHeight: 1.4 }}>{sub}</span> : null}
    </div>
  );
}

function Swatches({ items }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {items.map((s) => (
        <div key={s.hex} style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
          <div style={{ height: 40, borderRadius: 7, background: s.hex, border: s.ring ? "1px solid rgba(0,0,0,0.12)" : "none" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: "#8a8780", letterSpacing: "0.02em" }}>{s.name}</span>
        </div>
      ))}
    </div>
  );
}

function TypeCredit({ display, support }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid #ece9e2", paddingTop: 14 }}>
      <span style={{ fontFamily: UI, fontSize: 11, letterSpacing: "0.18em", color: "#a8a49c", textTransform: "uppercase" }}>Typeface</span>
      <span style={{ fontFamily: UI, fontSize: 13.5, color: "#56534d", fontWeight: 500 }}>{display} <span style={{ color: "#b6b2aa" }}>/</span> {support}</span>
    </div>
  );
}

// shell: neutral paper artboard with consistent internal rhythm
function Shell({ tag, tagColor, title, blurb, hero, secondary, swatches, type }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fbfaf7", display: "flex", flexDirection: "column", padding: 34, gap: 20, boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Eyebrow color={tagColor} sub={blurb}>{title}</Eyebrow>
        <span style={{ fontFamily: UI, fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", color: tagColor, border: `1px solid ${tagColor}`, borderRadius: 999, padding: "5px 11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{tag}</span>
      </div>
      <div style={{ borderRadius: 14, overflow: "hidden", flex: "0 0 auto" }}>{hero}</div>
      <div style={{ display: "flex", gap: 14, flex: "0 0 auto" }}>{secondary}</div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
        <Swatches items={swatches} />
        <TypeCredit display={type.display} support={type.support} />
      </div>
    </div>
  );
}

// ============================================================
// 01 · ARCADE
// ============================================================
function CardArcade() {
  const ink = "#150f26", blue = "#3b6dff", mag = "#ff3ea5", yel = "#ffd23e", cyan = "#43e0d8";
  return (
    <Shell
      tag="Retro · Arcade"
      tagColor="#c0359b"
      title="01 — Arcade"
      blurb="8-bit wordmark, scanlines, insert-coin energy. Loud, communal, unmistakably Gen-Z."
      hero={
        <div className="scanlines" style={{ position: "relative", background: `radial-gradient(120% 120% at 50% 0%, #241a45 0%, ${ink} 70%)`, padding: "54px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 26, minHeight: 360, justifyContent: "center" }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: yel, letterSpacing: "0.05em" }}>◆ 1 P L A Y E R ◆</span>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 52, color: "#fff", letterSpacing: "0.02em", textShadow: `4px 4px 0 ${mag}, 8px 8px 0 ${blue}` }}>NXTVC</div>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10.5, color: cyan, letterSpacing: "0.28em" }}>NEXT GEN OF VC</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div className="scanlines" style={{ flex: "0 0 150px", height: 150, borderRadius: 12, background: ink, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 26, color: yel, textShadow: `3px 3px 0 ${mag}` }}>NV</div>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: yel, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 18, color: ink }}>NXTVC</div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: mag, letterSpacing: "0.1em" }}>★ EST 2026 ★</div>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#150F26", hex: ink }, { name: "#3B6DFF", hex: blue }, { name: "#FF3EA5", hex: mag }, { name: "#FFD23E", hex: yel }]}
      type={{ display: "Press Start 2P", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 02 · Y2K CHROME
// ============================================================
function CardChrome() {
  const slate = "#0d1426", cyan = "#5ff0ff", lime = "#c6ff5f", violet = "#7a6bff";
  return (
    <Shell
      tag="Retro-Future · Y2K"
      tagColor="#3a8fb0"
      title="02 — Y2K Chrome"
      blurb="Liquid-chrome wordmark with a millennium glow. Optimistic, techy, up-and-coming."
      hero={
        <div style={{ position: "relative", background: `radial-gradient(90% 130% at 50% 110%, #1b2a52 0%, ${slate} 60%)`, padding: "56px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, minHeight: 360, justifyContent: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(40% 40% at 50% 38%, rgba(95,240,255,0.22), transparent 70%)" }} />
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 12, fontWeight: 600, color: cyan, letterSpacing: "0.4em", zIndex: 1 }}>EST&nbsp;·&nbsp;2026</span>
          <div className="chrome" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: 60, letterSpacing: "0.02em", zIndex: 1 }}>NXTVC</div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, fontWeight: 500, color: lime, letterSpacing: "0.34em", zIndex: 1 }}>THE NEXT GENERATION OF VENTURE</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: "50%", background: `radial-gradient(circle at 38% 30%, #2a3a66, ${slate})`, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(95,240,255,0.35)", boxShadow: "0 0 26px rgba(95,240,255,0.18) inset" }}>
            <div className="chrome" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: 38 }}>N</div>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: slate, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "linear-gradient(180deg,#eef3ff,#aab6cc)", borderRadius: 999, padding: "12px 22px", boxShadow: "0 2px 0 rgba(255,255,255,0.6) inset, 0 6px 14px rgba(0,0,0,0.4)" }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: 17, color: "#10182e", letterSpacing: "0.04em" }}>nxtvc.club</span>
            </div>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#0D1426", hex: slate }, { name: "CHROME", hex: "linear-gradient(180deg,#eef3ff,#9aa6bc)", ring: true }, { name: "#5FF0FF", hex: cyan }, { name: "#C6FF5F", hex: lime }]}
      type={{ display: "Orbitron", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 03 · MEMBERS CLUB
// ============================================================
function CardClub() {
  const navy = "#16263f", gold = "#b9954f", cream = "#f3eee1", oxblood = "#5e2630";
  const serif = "'EB Garamond', Georgia, serif";
  return (
    <Shell
      tag="Preppy · Club"
      tagColor="#9a7b3e"
      title="03 — Members Club"
      blurb="Crest, gold rules, letterspaced serif. Discreet, exclusive, built to feel earned."
      hero={
        <div style={{ background: cream, padding: "44px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22, minHeight: 360, justifyContent: "center", border: `1px solid ${gold}40`, boxShadow: `inset 0 0 0 6px ${cream}, inset 0 0 0 7px ${gold}55` }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", border: `2px solid ${gold}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 7, borderRadius: "50%", border: `1px solid ${gold}90` }} />
            <span style={{ fontFamily: serif, fontSize: 34, color: navy, fontWeight: 600, letterSpacing: "0.02em" }}>NV</span>
          </div>
          <div style={{ fontFamily: serif, fontSize: 54, color: navy, letterSpacing: "0.24em", fontWeight: 500, paddingLeft: "0.24em" }}>NXTVC</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ height: 1, width: 34, background: gold }} />
            <span style={{ fontFamily: UI, fontSize: 12, letterSpacing: "0.34em", color: oxblood, textTransform: "uppercase" }}>Members Club</span>
            <span style={{ height: 1, width: 34, background: gold }} />
          </div>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: "50%", background: navy, display: "flex", alignItems: "center", justifyContent: "center", border: `2px solid ${gold}` }}>
            <span style={{ fontFamily: serif, fontSize: 40, color: gold, letterSpacing: "0.04em" }}>NV</span>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: navy, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, padding: "0 26px" }}>
            <span style={{ fontFamily: serif, fontSize: 22, color: cream, letterSpacing: "0.2em" }}>NXTVC</span>
            <span style={{ fontFamily: UI, fontSize: 11, color: gold, letterSpacing: "0.22em", textTransform: "uppercase" }}>Member · No. 001</span>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#16263F", hex: navy }, { name: "#B9954F", hex: gold }, { name: "#F3EEE1", hex: cream, ring: true }, { name: "#5E2630", hex: oxblood }]}
      type={{ display: "EB Garamond", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 04 · TERMINAL
// ============================================================
function CardTerminal() {
  const paper = "#ece8df", ink = "#1c1a17", orange = "#e8612c", slate = "#6b7b78";
  const mono = "'Space Mono', monospace";
  return (
    <Shell
      tag="Insider · Modern"
      tagColor="#c8521f"
      title="04 — Terminal"
      blurb="The wordmark as a command line. Sharp, in-the-know, quietly confident."
      hero={
        <div className="dotgrid" style={{ background: paper, padding: "54px 44px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 26, minHeight: 360, justifyContent: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 14, color: slate, letterSpacing: "0.04em" }}>// invite-only</span>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 58, color: orange }}>&gt;</span>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 58, color: ink, letterSpacing: "-0.01em" }}>nxtvc</span>
            <span className="blink" style={{ width: 26, height: 52, background: ink, display: "inline-block", marginLeft: 4 }} />
          </div>
          <span style={{ fontFamily: mono, fontSize: 14.5, color: slate, letterSpacing: "0.02em" }}>~/the-next-generation-of-vc</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: 14, background: ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 40, color: paper }}>[<span style={{ color: orange }}>N</span>]</span>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: "#fff", border: "1px solid #e0dcd2", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", padding: 18 }}>
            {["join", "apply", "members"].map((c, i) => (
              <span key={c} style={{ fontFamily: mono, fontSize: 14, color: i === 0 ? "#fff" : ink, background: i === 0 ? orange : "#f1ede4", border: i === 0 ? "none" : "1px solid #e0dcd2", borderRadius: 7, padding: "8px 14px" }}>{c}</span>
            ))}
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#ECE8DF", hex: paper, ring: true }, { name: "#1C1A17", hex: ink }, { name: "#E8612C", hex: orange }, { name: "#6B7B78", hex: slate }]}
      type={{ display: "Space Mono", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 05 · VARSITY
// ============================================================
function CardVarsity() {
  const cream = "#f4ecd8", maroon = "#7c2230", sky = "#5b8fc9", ink = "#231a17";
  const disp = "'Anton', sans-serif";
  return (
    <Shell
      tag="Collegiate · Bold"
      tagColor="#9a3140"
      title="05 — Varsity"
      blurb="A members-club patch with team spirit. Bold, warm, a bridge between fun and earned."
      hero={
        <div style={{ background: cream, padding: "44px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22, minHeight: 360, justifyContent: "center" }}>
          <div style={{ background: maroon, borderRadius: 16, padding: "26px 40px", border: `3px solid ${cream}`, boxShadow: `0 0 0 3px ${maroon}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: disp, fontSize: 66, color: cream, lineHeight: 0.9, letterSpacing: "0.02em" }}>NXTVC</span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ height: 3, width: 26, background: sky }} />
              <span style={{ fontFamily: UI, fontSize: 12, fontWeight: 600, color: sky, letterSpacing: "0.26em" }}>EST. 2026</span>
              <span style={{ height: 3, width: 26, background: sky }} />
            </div>
          </div>
          <span style={{ fontFamily: UI, fontSize: 13, fontWeight: 600, color: maroon, letterSpacing: "0.3em", textTransform: "uppercase" }}>Next Generation of VC</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: "50%", background: maroon, display: "flex", alignItems: "center", justifyContent: "center", border: `3px solid ${cream}`, boxShadow: `0 0 0 3px ${maroon}` }}>
            <span style={{ fontFamily: disp, fontSize: 50, color: cream }}>NV</span>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: sky, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: disp, fontSize: 30, color: cream, letterSpacing: "0.04em" }}>NXTVC</span>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#F4ECD8", hex: cream, ring: true }, { name: "#7C2230", hex: maroon }, { name: "#5B8FC9", hex: sky }, { name: "#231A17", hex: ink }]}
      type={{ display: "Anton", support: "Space Grotesk" }}
    />
  );
}

Object.assign(window, { CardArcade, CardChrome, CardClub, CardTerminal, CardVarsity });
