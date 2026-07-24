import { useState } from "react";
import { useSpotlight } from "../../hooks/useSpotlight";

const SNIPPET = 'POST /v1/emails.send\n{ "template": "welcome-v3", "to": "jay@company.com" }';

export default function ApiCard() {
  const [copied, setCopied] = useState(false);
  const onPointerMove = useSpotlight();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET);
    } catch {
      // clipboard permission denied or unavailable; the button still reflects
      // the attempted action so the UI doesn't stall silently
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="card card--api" tabIndex={0} aria-label="Ship it in one call, API example" onPointerMove={onPointerMove}>
      <p className="card-eyebrow">API</p>
      <h3 className="card-title">Ship it in one call</h3>
      <p className="card-body">A single endpoint for transactional and campaign sends.</p>
      <div className="code-block">
        <button className="copy-btn" type="button" onClick={handleCopy} aria-label="Copy code">
          {copied ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          )}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
        <span className="kw">POST</span> /v1/emails.send
        <br />
        {"{ "}"template": <span className="str">"welcome-v3"</span>,
        <br />
        &nbsp;&nbsp;"to": <span className="str">"jay@company.com"</span> {"}"}
      </div>
    </article>
  );
}
