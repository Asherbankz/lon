import { Check } from "lucide-react";

export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: "var(--verified)" }}
      aria-label="Verified"
    >
      <Check className="h-2.5 w-2.5 text-background" strokeWidth={4} />
    </span>
  );
}