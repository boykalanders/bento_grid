import LinkCard from "../LinkCard";
import CardArrow from "../CardArrow";

const BARS = [0.5, 0.62, 0.58, 0.7, 0.66, 0.8, 0.92];

export default function DeliverabilityCard() {
  return (
    <LinkCard className="card--deliver" tabIndex={0}>
      <p className="card-eyebrow">Deliverability</p>
      <h3 className="card-title">Inbox placement</h3>
      <div className="stat-num">98.6%</div>
      <div className="stat-cap">rolling 7-day average</div>
      <div className="spark" aria-hidden="true">
        {BARS.map((h, i) => (
          <i key={i} style={{ "--h": h }}></i>
        ))}
      </div>
      <CardArrow />
    </LinkCard>
  );
}
