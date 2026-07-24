import CodeBlock from "../components/CodeBlock";
import "./Docs.css";

const SECTIONS = [
  { id: "getting-started", label: "Getting started" },
  { id: "authentication", label: "Authentication" },
  { id: "sending-an-email", label: "Sending an email" },
  { id: "templates-and-tokens", label: "Templates & tokens" },
  { id: "webhooks", label: "Webhooks" },
  { id: "limits-and-errors", label: "Limits & errors" },
];

const INSTALL_SNIPPET = "npm install inkline";
const QUICKSTART_SNIPPET =
  'import { Inkline } from "inkline";\n\nconst inkline = new Inkline(process.env.INKLINE_API_KEY);\n\nawait inkline.emails.send({\n  template: "welcome-v3",\n  to: "jay@company.com",\n});';
const AUTH_SNIPPET = "Authorization: Bearer sk_live_51H8jz...";
const SEND_SNIPPET =
  'POST /v1/emails.send\n{\n  "template": "welcome-v3",\n  "to": "jay@company.com",\n  "variables": { "first_name": "Jay" }\n}';
const WEBHOOK_SNIPPET =
  'POST https://yourapp.com/webhooks/inkline\n{\n  "type": "email.bounced",\n  "email_id": "em_9k2n7q",\n  "reason": "mailbox_full"\n}';

export default function Docs() {
  return (
    <div className="page container">
      <section aria-labelledby="docs-heading">
        <div className="section-head">
          <p className="eyebrow">Documentation</p>
          <h1 id="docs-heading">Everything the API does</h1>
          <p>One endpoint for sending, one for events. No SDKs required, though we maintain one anyway.</p>
        </div>

        <div className="docs-layout">
          <nav className="docs-nav" aria-label="Documentation sections">
            {SECTIONS.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>

          <div className="docs-content">
            <section className="docs-section" id="getting-started">
              <h2>Getting started</h2>
              <p>Install the SDK, or call the HTTP API directly. Every endpoint returns plain JSON either way.</p>
              <CodeBlock code={INSTALL_SNIPPET}>{INSTALL_SNIPPET}</CodeBlock>
              <p>Then send your first email:</p>
              <CodeBlock code={QUICKSTART_SNIPPET}>
                <span className="kw">import</span> {"{ Inkline }"} <span className="kw">from</span> <span className="str">"inkline"</span>;{"\n\n"}
                <span className="kw">const</span> inkline = <span className="kw">new</span> Inkline(process.env.INKLINE_API_KEY);{"\n\n"}
                <span className="kw">await</span> inkline.emails.send({"{"}
                {"\n"}
                &nbsp;&nbsp;template: <span className="str">"welcome-v3"</span>,{"\n"}
                &nbsp;&nbsp;to: <span className="str">"jay@company.com"</span>,{"\n"}
                {"}"});
              </CodeBlock>
            </section>

            <section className="docs-section" id="authentication">
              <h2>Authentication</h2>
              <p>
                Every request needs a bearer token in the <code>Authorization</code> header. Keys are scoped to test
                or live mode, so a leaked test key can't send real mail.
              </p>
              <CodeBlock code={AUTH_SNIPPET}>{AUTH_SNIPPET}</CodeBlock>
            </section>

            <section className="docs-section" id="sending-an-email">
              <h2>Sending an email</h2>
              <p>
                <code>variables</code> fill the placeholders defined in the template. Anything you don't pass falls
                back to the default set in the editor. Keep the rendered message under 102kb, or Gmail will clip it
                before it reaches the inbox.
              </p>
              <CodeBlock code={SEND_SNIPPET}>
                <span className="kw">POST</span> /v1/emails.send
                {"\n"}
                {"{"}
                {"\n"}
                &nbsp;&nbsp;"template": <span className="str">"welcome-v3"</span>,{"\n"}
                &nbsp;&nbsp;"to": <span className="str">"jay@company.com"</span>,{"\n"}
                &nbsp;&nbsp;"variables": {"{ "}"first_name": <span className="str">"Jay"</span> {"}"}
                {"\n"}
                {"}"}
              </CodeBlock>
            </section>

            <section className="docs-section" id="templates-and-tokens">
              <h2>Templates &amp; tokens</h2>
              <p>
                Templates reference the same design tokens your product already uses, so a rebrand in code shows up
                in email without anyone touching a template.
              </p>
              <div className="token-list docs-token-list">
                <span>
                  <b>--ink-600</b> #3D4744
                </span>
                <span>
                  <b>--accent</b> #0E6B57
                </span>
                <span>
                  <b>--space-4</b> 16px
                </span>
              </div>
            </section>

            <section className="docs-section" id="webhooks">
              <h2>Webhooks</h2>
              <p>
                Subscribe to delivery events (<code>sent</code>, <code>opened</code>, <code>bounced</code>,{" "}
                <code>complained</code>) and Inkline POSTs a signed payload to your endpoint. Verify the{" "}
                <code>Inkline-Signature</code> header before trusting the body.
              </p>
              <CodeBlock code={WEBHOOK_SNIPPET}>
                <span className="kw">POST</span> https://yourapp.com/webhooks/inkline
                {"\n"}
                {"{"}
                {"\n"}
                &nbsp;&nbsp;"type": <span className="str">"email.bounced"</span>,{"\n"}
                &nbsp;&nbsp;"email_id": <span className="str">"em_9k2n7q"</span>,{"\n"}
                &nbsp;&nbsp;"reason": <span className="str">"mailbox_full"</span>
                {"\n"}
                {"}"}
              </CodeBlock>
            </section>

            <section className="docs-section" id="limits-and-errors">
              <h2>Limits &amp; errors</h2>
              <p>Rate limits apply per API key, not per domain:</p>
              <div className="token-list docs-token-list">
                <span>
                  <b>Standard</b> 100 requests/sec
                </span>
                <span>
                  <b>Burst</b> 300 requests/sec for 10s
                </span>
                <span>
                  <b>Webhook retries</b> 5 attempts over 24h, exponential backoff
                </span>
              </div>
              <p>
                Errors return a standard HTTP status code and a JSON body: <code>{'{ "error": { "type", "message" } }'}</code>.
                A <code>429</code> means you're over the rate limit; retry after the <code>Retry-After</code> header.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
