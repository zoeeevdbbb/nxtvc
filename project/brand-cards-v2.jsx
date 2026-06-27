// brand-cards-v2.jsx — NXTVC round 2
// Warmer / younger / playful. Multiplayer arcade lead.

const UI2 = "'Space Grotesk', system-ui, sans-serif";

function Eyebrow2({ children, color, sub }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: UI2, fontSize: 12, fontWeight: 600, letterSpacing: "0.22em", color: color || "#8a8780", textTransform: "uppercase" }}>{children}</span>
      {sub ? <span style={{ fontFamily: UI2, fontSize: 13.5, color: "#6f6c66", lineHeight: 1.45 }}>{sub}</span> : null}
    </div>
  );
}

function Swatches2({ items }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {items.map((s) => (
        <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
          <div style={{ height: 40, borderRadius: 8, background: s.hex, border: s.ring ? "1px solid rgba(0,0,0,0.12)" : "none" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10.5, color: "#8a8780", letterSpacing: "0.02em" }}>{s.name}</span>
        </div>
      ))}
    </div>
  );
}

function TypeCredit2({ display, support }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid #ece9e2", paddingTop: 14 }}>
      <span style={{ fontFamily: UI2, fontSize: 11, letterSpacing: "0.18em", color: "#a8a49c", textTransform: "uppercase" }}>Typeface</span>
      <span style={{ fontFamily: UI2, fontSize: 13.5, color: "#56534d", fontWeight: 500 }}>{display} <span style={{ color: "#b6b2aa" }}>/</span> {support}</span>
    </div>
  );
}

function Shell2({ tag, tagColor, title, blurb, hero, secondary, swatches, type }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fbfaf7", display: "flex", flexDirection: "column", padding: 34, gap: 20, boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
        <Eyebrow2 color={tagColor} sub={blurb}>{title}</Eyebrow2>
        <span style={{ fontFamily: UI2, fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", color: tagColor, border: `1px solid ${tagColor}`, borderRadius: 999, padding: "5px 11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{tag}</span>
      </div>
      <div style={{ borderRadius: 14, overflow: "hidden", flex: "0 0 auto" }}>{hero}</div>
      <div style={{ display: "flex", gap: 14, flex: "0 0 auto" }}>{secondary}</div>
      <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 16 }}>
        <Swatches2 items={swatches} />
        <TypeCredit2 display={type.display} support={type.support} />
      </div>
    </div>
  );
}

// player-select dots used in the arcade cards
function PlayerRow({ colors, labelColor, ring }) {
  const tags = ["P1", "P2", "P3", "P4"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {colors.map((c, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: i === 3 ? "transparent" : c, border: i === 3 ? `2px dashed ${c}` : "none" }} />
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: labelColor }}>{tags[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// 01 · ARCADE — MULTIPLAYER (NIGHT)
// ============================================================
function CardArcadeNight() {
  const plum = "#241334", coral = "#ff6b6b", tang = "#ffb454", pink = "#ff86c8", lilac = "#c6a2ff";
  const px = "'Press Start 2P', monospace";
  return (
    <Shell2
      tag="Arcade · Night"
      tagColor="#d4569a"
      title="01 — Arcade · Multiplayer"
      blurb="The full NXTVC wordmark, co-op energy, warmer neon palette. Loud and communal."
      hero={
        <div className="scanlines" style={{ position: "relative", background: "radial-gradient(120% 130% at 50% 0%, #3a1f55 0%, #241334 70%)", padding: "50px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, minHeight: 360, justifyContent: "center" }}>
          <span style={{ fontFamily: px, fontSize: 11, color: tang, letterSpacing: "0.14em" }}>◆ MULTIPLAYER ◆</span>
          <div style={{ fontFamily: px, fontSize: 50, color: "#fff", letterSpacing: "0.01em", textShadow: `3px 3px 0 ${coral}, 6px 6px 0 ${pink}` }}>NXTVC</div>
          <span style={{ fontFamily: px, fontSize: 10, color: lilac, letterSpacing: "0.18em" }}>PRESS START TO JOIN</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div className="scanlines" style={{ flex: 1, borderRadius: 12, background: plum, display: "flex", alignItems: "center", justifyContent: "center", padding: 18, position: "relative" }}>
            <PlayerRow colors={[coral, tang, pink, lilac]} labelColor="#fff" />
          </div>
          <div style={{ flex: "0 0 200px", borderRadius: 12, background: coral, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 11 }}>
            <div style={{ fontFamily: px, fontSize: 17, color: "#fff" }}>NXTVC</div>
            <div style={{ fontFamily: px, fontSize: 8, color: "#fff3", color: "#7a1f3d", letterSpacing: "0.06em" }}>★ MULTIPLAYER ★</div>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#241334", hex: plum }, { name: "#FF6B6B", hex: coral }, { name: "#FFB454", hex: tang }, { name: "#FF86C8", hex: pink }]}
      type={{ display: "Press Start 2P", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 02 · ARCADE — MULTIPLAYER (DAYLIGHT)
// ============================================================
function CardArcadeDay() {
  const cream = "#fbeedd", plum = "#3a2350", coral = "#ff6b6b", grape = "#9b6bff", tang = "#ff9f45";
  const px = "'Press Start 2P', monospace";
  return (
    <Shell2
      tag="Arcade · Day"
      tagColor="#8a5bd8"
      title="02 — Arcade · Daylight"
      blurb="Same multiplayer arcade, lighter colorway. Friendlier, sticker-ready, still playful."
      hero={
        <div className="pixgrid" style={{ position: "relative", background: cream, padding: "50px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, minHeight: 360, justifyContent: "center" }}>
          <span style={{ fontFamily: px, fontSize: 11, color: coral, letterSpacing: "0.14em" }}>◆ MULTIPLAYER ◆</span>
          <div style={{ fontFamily: px, fontSize: 50, color: plum, letterSpacing: "0.01em", textShadow: `3px 3px 0 ${tang}, 6px 6px 0 ${grape}` }}>NXTVC</div>
          <span style={{ fontFamily: px, fontSize: 10, color: grape, letterSpacing: "0.18em" }}>PRESS START TO JOIN</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: 1, borderRadius: 12, background: "#fff", border: `2px solid ${plum}1a`, display: "flex", alignItems: "center", justifyContent: "center", padding: 18 }}>
            <PlayerRow colors={[coral, tang, grape, plum]} labelColor={plum} />
          </div>
          <div style={{ flex: "0 0 200px", borderRadius: 12, background: grape, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 11 }}>
            <div style={{ fontFamily: px, fontSize: 17, color: "#fff" }}>NXTVC</div>
            <div style={{ fontFamily: px, fontSize: 8, color: "#efe0ff", letterSpacing: "0.06em" }}>★ EST 2026 ★</div>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#FBEEDD", hex: cream, ring: true }, { name: "#3A2350", hex: plum }, { name: "#FF6B6B", hex: coral }, { name: "#9B6BFF", hex: grape }]}
      type={{ display: "Press Start 2P", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 03 · CHROME ARCADE  (arcade × Y2K merge)
// ============================================================
function CardChromeArcade() {
  const dusk = "#241640", pink = "#ff5ca8", sky = "#67d0ff", violet = "#9b7bff";
  const px = "'Press Start 2P', monospace";
  return (
    <Shell2
      tag="Chrome Arcade"
      tagColor="#e0509a"
      title="03 — Chrome Arcade"
      blurb="Arcade meets Y2K: blocky signage with soft candy-chrome instead of cold steel."
      hero={
        <div className="scanlines" style={{ position: "relative", background: "radial-gradient(90% 130% at 50% 110%, #4a2a6e 0%, #241640 62%)", padding: "48px 38px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22, minHeight: 360, justifyContent: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(42% 42% at 50% 36%, rgba(255,92,168,0.28), transparent 70%)" }} />
          <span style={{ fontFamily: px, fontSize: 10, color: sky, letterSpacing: "0.1em", zIndex: 1 }}>PRESS START · MULTIPLAYER MODE</span>
          <div className="candychrome" style={{ fontFamily: "'Bungee', sans-serif", fontSize: 58, letterSpacing: "0.01em", zIndex: 1 }}>NXTVC</div>
          <span style={{ fontFamily: px, fontSize: 9, color: pink, letterSpacing: "0.12em", zIndex: 1 }}>THE NEXT GEN OF VENTURE CAPITAL</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%, #4a2a6e, #241640)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,92,168,0.4)", boxShadow: "0 0 24px rgba(255,92,168,0.2) inset" }}>
            <div className="candychrome" style={{ fontFamily: "'Bungee', sans-serif", fontSize: 19, letterSpacing: "0.01em" }}>NXTVC</div>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: dusk, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 9, border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="candychrome" style={{ fontFamily: "'Bungee', sans-serif", fontSize: 28, letterSpacing: "0.01em" }}>NXTVC</div>
            <span style={{ fontFamily: UI2, fontSize: 11, fontWeight: 600, color: sky, letterSpacing: "0.32em", textTransform: "uppercase" }}>Multiplayer</span>
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#241640", hex: dusk }, { name: "CANDY", hex: "linear-gradient(180deg,#fff,#ffd9ec 40%,#c9a8ff 70%,#ff9ecb)", ring: true }, { name: "#FF5CA8", hex: pink }, { name: "#67D0FF", hex: sky }]}
      type={{ display: "Bungee", support: "Space Grotesk" }}
    />
  );
}

// ============================================================
// 04 · TERMINAL — SYNTH
// ============================================================
function CardTerminalSynth() {
  const plum = "#1b1230", off = "#f2e9ff", pink = "#ff5ca8", purple = "#a06bff", blue = "#5c9dff";
  const mono = "'Space Mono', monospace";
  return (
    <Shell2
      tag="Terminal · Synth"
      tagColor="#8a5bd8"
      title="04 — Terminal · Synth"
      blurb="Command-line wordmark, uppercase, in a pink / purple / blue synth palette."
      hero={
        <div className="dotgrid-synth" style={{ position: "relative", background: "linear-gradient(180deg, #241845 0%, #1b1230 100%)", padding: "52px 44px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 26, minHeight: 360, justifyContent: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 14, color: purple, letterSpacing: "0.04em" }}>// invite-only</span>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 54, color: pink }}>&gt;</span>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 54, color: off, letterSpacing: "0.01em" }}>NXTVC</span>
            <span className="blink" style={{ width: 22, height: 50, background: blue, display: "inline-block", marginLeft: 4 }} />
          </div>
          <span style={{ fontFamily: mono, fontSize: 14.5, color: blue, letterSpacing: "0.02em" }}>~/the-next-generation-of-vc</span>
        </div>
      }
      secondary={
        <React.Fragment>
          <div style={{ flex: "0 0 150px", height: 150, borderRadius: 16, background: "linear-gradient(135deg,#ff5ca8,#a06bff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: 40, color: "#fff", letterSpacing: "0.02em" }}>&gt;VC</span>
          </div>
          <div style={{ flex: 1, borderRadius: 12, background: plum, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", padding: 18 }}>
            {["join", "apply", "members"].map((c, i) => (
              <span key={c} style={{ fontFamily: mono, fontSize: 14, color: "#fff", background: i === 0 ? "linear-gradient(135deg,#ff5ca8,#a06bff)" : "transparent", border: i === 0 ? "none" : `1px solid ${purple}66`, borderRadius: 7, padding: "8px 14px" }}>{c}</span>
            ))}
          </div>
        </React.Fragment>
      }
      swatches={[{ name: "#1B1230", hex: plum }, { name: "#FF5CA8", hex: pink }, { name: "#A06BFF", hex: purple }, { name: "#5C9DFF", hex: blue }]}
      type={{ display: "Space Mono", support: "Space Grotesk" }}
    />
  );
}

Object.assign(window, { CardArcadeNight, CardArcadeDay, CardChromeArcade, CardTerminalSynth });
