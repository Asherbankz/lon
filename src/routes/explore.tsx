import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Plus, Circle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PostCard } from "@/components/post-card";
import { feedPosts } from "@/lib/mock-data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Lona" },
      { name: "description", content: "Discover popular, live and reels content on Lona." },
    ],
  }),
  component: ExplorePage,
});

const tabs = ["", "Popular", "Live", "Reels"] as const;

function ExplorePage() {
  const [active, setActive] = useState<string>("Popular");
  return (
    <AppShell>
      <header className="flex items-center justify-end gap-5 px-5 pt-4 pb-3 text-foreground">
        <button aria-label="Notifications"><Bell className="h-5 w-5" /></button>
        <button aria-label="New"><Plus className="h-5 w-5" /></button>
      </header>
      <h1 className="px-5 pb-3 text-2xl font-semibold text-foreground">
        Explore <span className="text-muted-foreground">•</span>
      </h1>
      <div className="flex gap-2 px-5 pb-3 overflow-x-auto no-scrollbar">
        {tabs.map((t, i) =>
          t === "" ? (
            <button key={i} aria-label="filter" className="grid h-8 w-8 place-items-center rounded-full border border-primary text-primary">
              <Circle className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm ${
                active === t ? "bg-secondary text-foreground" : "bg-transparent text-muted-foreground"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${active === t ? "bg-primary" : "bg-muted-foreground/40"}`} />
              {t}
            </button>
          ),
        )}
      </div>
      <div>
        {feedPosts.slice(1).map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}