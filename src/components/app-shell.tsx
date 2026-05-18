import { type ReactNode } from "react";
import { BottomNav } from "./bottom-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col">
        <main className="flex-1 pb-2">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}