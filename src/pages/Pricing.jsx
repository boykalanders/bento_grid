import PricingCard from "../components/PricingCard";
import { TIERS } from "../data/pricing";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="page container">
      <section aria-labelledby="pricing-heading">
        <div className="section-head">
          <p className="eyebrow">Pricing</p>
          <h1 id="pricing-heading">Pay for what you send</h1>
          <p>No seat fees, no setup calls to unlock a plan. Overage beyond your limit is $1 per 1,000 emails, billed monthly, no hard cutoff.</p>
        </div>

        <div className="pricing-grid">
          {TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>
    </div>
  );
}
