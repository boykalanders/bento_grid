import LinkCard from "../LinkCard";
import CardArrow from "../CardArrow";

const CHIPS = ["Figma", "React Email", "Webhooks", "Zapier"];

export default function IntegrationsCard() {
  return (
    <LinkCard className="card--integrations" tabIndex={0}>
      <p className="card-eyebrow">Ecosystem</p>
      <h3 className="card-title">Plays well with your stack</h3>
      <div className="chip-grid" aria-hidden="true">
        {CHIPS.map((chip) => (
          <div key={chip} className="chip">
            <i></i>
            {chip}
          </div>
        ))}
      </div>
      <CardArrow />
    </LinkCard>
  );
}
