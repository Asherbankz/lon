import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Search, Plus, Settings, Lock } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { VerifiedBadge } from "@/components/verified-badge";
import { dmHeads, messages } from "@/lib/mock-data";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Lona" },
      { name: "description", content: "Private conversations on Lona." },
    ],
  }),
  component: MessagesPage,
});

const filters = ["All", "Unread", "Groups"] as const;

function MessagesPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  return (
    <AppShell>
      <header className="flex items-center justify-end px-5 pt-4 pb-3">
        <Bell className="h-5 w-5 text-foreground" />
      </header>
      <h1 className="px-5 pb-4 text-2xl font-semibold text-foreground">
        Messages <span className="text-foreground">+</span>
      </h1>
      <div className="flex justify-center pb-4">
        <button className="flex items-center gap-2 border-b-2 border-primary px-4 pb-1.5 text-foreground">
          <Lock className="h-4 w-4" />
          Private
        </button>
      </div>
      <section className="overflow-x-auto no-scrollbar px-4 pb-3">
        <ul className="flex gap-4">
          {dmHeads.map((d) => (
            <li key={d.name} className="flex w-16 flex-col items-center gap-1.5">
              <img src={d.avatar} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
              <span className="truncate text-xs text-foreground">{d.name}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex items-center gap-3 px-5 pb-3">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
          <Search className="h-4 w-4 text-primary" />
          <input placeholder="Search messages" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <button className="rounded-full bg-secondary p-2.5"><Plus className="h-4 w-4 text-primary" /></button>
        <button className="rounded-full bg-secondary p-2.5"><Settings className="h-4 w-4 text-primary" /></button>
      </div>
      <div className="flex gap-2 px-5 pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm ${
              active === f ? "bg-secondary text-foreground" : "bg-transparent text-muted-foreground"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${active === f ? "bg-primary" : "bg-muted-foreground/40"}`} />
            {f}{f === "All" ? " (3)" : ""}
          </button>
        ))}
      </div>
      <ul>
        {messages.map((m) => (
          <li key={m.name} className="flex items-center gap-3 px-5 py-3">
            <img src={m.avatar} alt={m.name} className="h-12 w-12 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">{m.name}</span>
                {m.verified && <VerifiedBadge />}
              </div>
              <p className="truncate text-sm text-muted-foreground">{m.preview}</p>
            </div>
            <span className="text-xs text-muted-foreground">{m.time}</span>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}