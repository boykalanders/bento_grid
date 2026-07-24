import HeroCard from "../components/bento/HeroCard";
import TokensCard from "../components/bento/TokensCard";
import DeliverabilityCard from "../components/bento/DeliverabilityCard";
import ApiCard from "../components/bento/ApiCard";
import IntegrationsCard from "../components/bento/IntegrationsCard";
import "./Home.css";

export default function Home() {
  return (
    <div className="page container">
      <section aria-labelledby="bento-heading">
        <div className="section-head">
          <p className="eyebrow">Platform</p>
          <h1 id="bento-heading">One send API. Every render surface.</h1>
          <p>Design tokens, deliverability, and the raw API: the parts of the stack you actually check before shipping a send.</p>
        </div>

        <div className="bento">
          <HeroCard />
          <TokensCard />
          <DeliverabilityCard />
          <ApiCard />
          <IntegrationsCard />
        </div>
      </section>
    </div>
  );
}
