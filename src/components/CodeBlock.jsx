import { useState } from "react";

// `code` is the plain-text version copied to the clipboard; children can be
// JSX with syntax-highlight spans (<span className="kw">/.str">) since the
// rendered markup and the copyable text don't have to match structurally.
export default function CodeBlock({ code, children, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // clipboard permission denied or unavailable; the button still
      // reflects the attempted action so the UI doesn't stall silently
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`code-block ${className}`.trim()}>
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
      <pre>{children}</pre>
    </div>
  );
}
