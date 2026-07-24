import { useSpotlight } from "../hooks/useSpotlight";

export default function PricingCard({ tier }) {
  const onPointerMove = useSpotlight();

  return (
    <article
      className={`card pricing-card${tier.highlighted ? " highlighted" : ""}`}
      onPointerMove={onPointerMove}
      aria-label={`${tier.name} plan`}
    >
      {tier.highlighted && <span className="pricing-badge">Recommended</span>}
      <p className="card-eyebrow">{tier.name}</p>
      <div className="pricing-amount">
        <span className="pricing-price">{tier.price}</span>
        {tier.period && <span className="pricing-period">{tier.period}</span>}
      </div>
      <p className="card-body">{tier.description}</p>
      <ul className="pricing-features">
        {tier.features.map((feature) => (
          <li key={feature}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" className="pricing-cta">
        {tier.cta}
      </button>
    </article>
  );
}
