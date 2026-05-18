import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Users, Mail, Globe, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/friends", label: "Friends", icon: Users },
  { to: "/messages", label: "Messages", icon: Mail },
  { to: "/explore", label: "Explore", icon: Globe },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <ul className="mx-auto flex max-w-xl items-center justify-around px-2 py-2.5">
        {items.map((it, idx) => {
          const active = pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to} className="flex items-center">
              <Link
                to={it.to}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {active && <span className="text-sm font-medium">{it.label}</span>}
              </Link>
              {idx === 0 && <span className="mx-1 h-4 w-px bg-border" />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}