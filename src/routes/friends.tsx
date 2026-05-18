import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Plus, UserPlus, Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { stories } from "@/lib/mock-data";

export const Route = createFileRoute("/friends")({
  head: () => ({
    meta: [
      { title: "Friends — Lona" },
      { name: "description", content: "Find and connect with people on Lona." },
    ],
  }),
  component: FriendsPage,
});

function FriendsPage() {
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const toggle = (n: string) => setFollowing((p) => ({ ...p, [n]: !p[n] }));
  return (
    <AppShell>
      <header className="flex items-center justify-end gap-5 px-5 pt-4 pb-3 text-foreground">
        <Link to="/notifications" aria-label="Notifications"><Bell className="h-5 w-5" /></Link>
        <button type="button" aria-label="New"><Plus className="h-5 w-5" /></button>
      </header>
      <h1 className="px-5 pb-4 text-2xl font-semibold">Friends</h1>
      <p className="px-5 pb-4 text-sm text-muted-foreground">Suggested for you</p>
      <ul className="divide-y divide-border">
        {stories.filter((s) => !s.you).map((s) => (
          <li key={s.name} className="flex items-center gap-3 px-5 py-3">
            <img src={s.avatar} alt={s.name} className="h-12 w-12 rounded-full object-cover" />
            <div className="flex-1">
              <p className="font-medium text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground">Suggested · mutual friends</p>
            </div>
            <button
              type="button"
              onClick={() => toggle(s.name)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                following[s.name]
                  ? "bg-secondary text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {following[s.name] ? <Check className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {following[s.name] ? "Following" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
      <p className="p-6 text-center text-xs text-muted-foreground">
        Want to see more? <Link to="/explore" className="text-primary">Explore</Link>
      </p>
    </AppShell>
  );
}