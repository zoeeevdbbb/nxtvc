// landing-tweaks.jsx — Tweaks panel for the NXTVC landing page.
// Renders ONLY the panel; applies changes to the (plain-HTML) page via
// body data-attributes + CSS custom properties so page content stays directly editable.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lead": "coral",
  "scanlines": true,
  "blink": true
}/*EDITMODE-END*/;

const LEAD_MAP = {
  coral:     { lead: "#FF6B6B", lead2: "#9B6BFF" },
  grape:     { lead: "#9B6BFF", lead2: "#FF9F45" },
  tangerine: { lead: "#FF9F45", lead2: "#FF6B6B" },
};

function applyTweaks(t) {
  const b = document.body;
  b.setAttribute("data-scanlines", t.scanlines ? "on" : "off");
  b.setAttribute("data-blink", t.blink ? "on" : "off");
  const m = LEAD_MAP[t.lead] || LEAD_MAP.coral;
  document.documentElement.style.setProperty("--lead", m.lead);
  document.documentElement.style.setProperty("--lead-2", m.lead2);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Accent" />
      <TweakRadio
        label="Lead color"
        value={t.lead}
        options={[{ value: "coral", label: "Coral" }, { value: "grape", label: "Grape" }, { value: "tangerine", label: "Tangerine" }]}
        onChange={(v) => setTweak("lead", v)}
      />
      <TweakSection label="Arcade FX" />
      <TweakToggle label="Scanlines" value={t.scanlines} onChange={(v) => setTweak("scanlines", v)} />
      <TweakToggle label="Press-start blink" value={t.blink} onChange={(v) => setTweak("blink", v)} />
    </TweaksPanel>
  );
}

// apply defaults immediately so the page reflects them before React mounts
applyTweaks(TWEAK_DEFAULTS);

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
