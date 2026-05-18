import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Phone, Plus, Search, Play, ShoppingBag, ChevronDown } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PostCard } from "@/components/post-card";
import { feedPosts, stories } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lona — Share your world" },
      { name: "description", content: "Lona is a social space for sharing moments, conversations and stories." },
    ],
  }),
  component: Index,
});

function Index() {
  const [tab, setTab] = useState<"for-you" | "live">("for-you");
  return (
    <AppShell>
      <header className="flex items-center justify-between px-5 pt-4 pb-3">
        <h1 className="font-script text-3xl text-primary leading-none">Lona</h1>
        <div className="flex items-center gap-5 text-foreground">
          <button aria-label="Notifications"><Bell className="h-5 w-5" /></button>
          <button aria-label="Calls"><Phone className="h-5 w-5" /></button>
          <button aria-label="New post"><Plus className="h-5 w-5" /></button>
        </div>
      </header>

      <section className="overflow-x-auto no-scrollbar px-4 pb-3">
        <ul className="flex gap-4">
          {stories.map((s) => (
            <li key={s.name} className="flex w-16 flex-col items-center gap-1.5">
              <div className="relative">
                <img src={s.avatar} alt={s.name} className="h-14 w-14 rounded-full object-cover ring-1 ring-border" />
                {s.you && (
                  <ChevronDown className="absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2 text-foreground" />
                )}
              </div>
              {!s.you && <span className="truncate text-xs text-foreground">{s.name}</span>}
            </li>
          ))}
        </ul>
      </section>

      <div className="px-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
            <Search className="h-4 w-4 text-primary" />
            <input
              placeholder="Ask or Search anything"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button className="rounded-full bg-secondary p-2.5"><Play className="h-4 w-4 text-primary" /></button>
          <button className="rounded-full bg-secondary p-2.5"><ShoppingBag className="h-4 w-4 text-primary" /></button>
        </div>
      </div>

      <div className="flex gap-2 px-5 pb-2">
        <Tab active={tab === "for-you"} onClick={() => setTab("for-you")}>For You</Tab>
        <Tab active={tab === "live"} onClick={() => setTab("live")}>Live</Tab>
      </div>

      <div>
        {feedPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}

function Tab({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
        active ? "bg-secondary text-foreground" : "bg-transparent text-muted-foreground"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${active ? "bg-primary" : "bg-muted-foreground/40"}`} />
      {children}
    </button>
  );
}
