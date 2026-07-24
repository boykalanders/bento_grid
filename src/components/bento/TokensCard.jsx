import LinkCard from "../LinkCard";
import CardArrow from "../CardArrow";

const SWATCHES = ["#0E6B57", "#D9622B", "#E2F0EA", "#12181A"];

export default function TokensCard() {
  return (
    <LinkCard className="card--tokens" tabIndex={0}>
      <p className="card-eyebrow">Design system</p>
      <h3 className="card-title">Tokens, not guesswork</h3>
      <p className="card-body">Pull spacing and color straight from your codebase, so templates stay in sync automatically.</p>
      <div className="swatch-row" aria-hidden="true">
        {SWATCHES.map((color) => (
          <span key={color} className="swatch" style={{ background: color }}></span>
        ))}
      </div>
      <div className="token-list" aria-hidden="true">
        <span>
          <b>--ink-600</b> #3D4744
        </span>
        <span>
          <b>--space-4</b> 16px
        </span>
      </div>
      <CardArrow />
    </LinkCard>
  );
}
