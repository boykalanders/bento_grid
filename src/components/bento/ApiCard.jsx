import { useSpotlight } from "../../hooks/useSpotlight";
import CodeBlock from "../CodeBlock";

const SNIPPET = 'POST /v1/emails.send\n{ "template": "welcome-v3", "to": "jay@company.com" }';

export default function ApiCard() {
  const onPointerMove = useSpotlight();

  return (
    <article className="card card--api" tabIndex={0} aria-label="Ship it in one call, API example" onPointerMove={onPointerMove}>
      <p className="card-eyebrow">API</p>
      <h3 className="card-title">Ship it in one call</h3>
      <p className="card-body">A single endpoint for transactional and campaign sends.</p>
      <CodeBlock code={SNIPPET}>
        <span className="kw">POST</span> /v1/emails.send
        {"\n"}
        {"{ "}"template": <span className="str">"welcome-v3"</span>,{"\n"}
        &nbsp;&nbsp;"to": <span className="str">"jay@company.com"</span> {"}"}
      </CodeBlock>
    </article>
  );
}
