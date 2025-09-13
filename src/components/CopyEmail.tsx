import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

const CopyEmail: FunctionalComponent<{ email: string }> = ({ email }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      }}
      class="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 transition text-sm"
      aria-live="polite"
    >
      {copied ? 'Copied' : 'Email'}
    </button>
  );
};

export default CopyEmail;
