import { useState } from "react";
import { useSpotlight } from "../../hooks/useSpotlight";

const CLIENTS = [
  { id: "gmail", label: "Gmail", flag: "clips after 102kb" },
  { id: "outlook", label: "Outlook", flag: "Word rendering engine" },
  { id: "apple", label: "Apple Mail", flag: "auto dark mode" },
];

export default function HeroCard() {
  const [client, setClient] = useState("gmail");
  const onPointerMove = useSpotlight();
  const active = CLIENTS.find((c) => c.id === client);

  return (
    <article className="card card--hero" tabIndex={0} aria-label="Pixel-true in every inbox, interactive preview" onPointerMove={onPointerMove}>
      <div className="hero-top">
        <div className="hero-copy">
          <p className="card-eyebrow">Rendering</p>
          <h2 className="card-title">Pixel-true in every inbox</h2>
        </div>
        <div className="client-tabs" role="tablist" aria-label="Preview email client">
          {CLIENTS.map((c) => (
            <button
              key={c.id}
              type="button"
              className="tab"
              role="tab"
              aria-selected={client === c.id}
              onClick={() => setClient(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="preview-stage">
        <div className="preview-chrome">
          <span></span>
          <span></span>
          <span></span>
          <span className="flag">{active.flag}</span>
        </div>
        <div className="preview-email" data-client={client}>
          <div className="brand-row">
            <i></i>Inkline
          </div>
          <div className="headline">Your March receipts are ready</div>
          <div className="lines">
            <div className="line w1"></div>
            <div className="line w2"></div>
          </div>
          <div className="cta">View receipts →</div>
          <div className="clip-flag">
            <i></i>Message clipped at 102kb
          </div>
        </div>
      </div>
    </article>
  );
}
