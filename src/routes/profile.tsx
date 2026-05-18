import { createFileRoute } from "@tanstack/react-router";
import { Settings, Grid3x3, Bookmark, Heart } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { VerifiedBadge } from "@/components/verified-badge";
import { feedPosts } from "@/lib/mock-data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Lona" },
      { name: "description", content: "Your profile on Lona." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const posts = feedPosts.filter((p) => p.image);
  return (
    <AppShell>
      <header className="flex items-center justify-between px-5 pt-4 pb-3">
        <h1 className="text-lg font-semibold text-foreground">@laurahardy</h1>
        <Settings className="h-5 w-5 text-foreground" />
      </header>
      <section className="px-5 pb-4">
        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/200?img=32" alt="Profile" className="h-20 w-20 rounded-full object-cover" />
          <div className="flex flex-1 justify-around text-center text-foreground">
            <Stat label="Posts" value="128" />
            <Stat label="Followers" value="4.2k" />
            <Stat label="Following" value="312" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="font-semibold text-foreground">Laura Hardy</span>
          <VerifiedBadge />
        </div>
        <p className="text-sm text-muted-foreground">Coast rider · sunsets · ATV diaries</p>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 rounded-full bg-primary py-1.5 text-sm font-medium text-primary-foreground">Edit profile</button>
          <button className="flex-1 rounded-full bg-secondary py-1.5 text-sm font-medium text-foreground">Share</button>
        </div>
      </section>
      <div className="grid grid-cols-3 border-b border-border text-muted-foreground">
        <TabIcon active><Grid3x3 className="h-5 w-5" /></TabIcon>
        <TabIcon><Bookmark className="h-5 w-5" /></TabIcon>
        <TabIcon><Heart className="h-5 w-5" /></TabIcon>
      </div>
      <div className="grid grid-cols-3 gap-0.5 pt-0.5">
        {posts.concat(posts).slice(0, 9).map((p, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-secondary">
            <img src={p.image} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-base font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function TabIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`flex items-center justify-center py-3 ${active ? "border-b-2 border-primary text-foreground" : ""}`}>
      {children}
    </button>
  );
}