import { Home, Grid, Network, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid, label: "Catalogs", path: "/catalogs" },
  { icon: Network, label: "Integrations", path: "/integrations" },
  { icon: Settings, label: "Others", path: "/others" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[240px] bg-sidebar min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-12">
        <img 
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
          alt="TMDB Logo" 
          className="h-8 w-auto"
        />
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
                  location.pathname === item.path && "bg-sidebar-accent text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="w-full bg-primary text-white rounded-lg py-2.5 px-4 hover:bg-primary/90 transition-colors">
        Send Request
      </button>
    </div>
  );
}