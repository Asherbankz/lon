import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { notifications } from "@/lib/mock-data";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — Lona" },
      { name: "description", content: "Your latest activity on Lona." },
    ],
  }),
  component: NotificationsPage,
});

function NotificationsPage() {
  return (
    <AppShell>
      <h1 className="px-5 pt-6 pb-4 text-2xl font-semibold text-foreground">Notifications</h1>
      <ul className="divide-y divide-border">
        {notifications.map((n, i) => (
          <li key={i} className="flex items-center gap-3 px-5 py-3">
            <img src={n.avatar} alt={n.who} className="h-11 w-11 rounded-full object-cover" />
            <div className="flex-1">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{n.who}</span>{" "}
                <span className="text-muted-foreground">{n.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">{n.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}