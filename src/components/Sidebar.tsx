import { LayoutDashboard, Star, FileText, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Star, label: "Reviews" },
  { icon: FileText, label: "Requests" },
  { icon: ShoppingBag, label: "Marketplace" },
];

export function Sidebar() {
  return (
    <div className="w-[240px] bg-sidebar min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-12">
        <img src="/lovable-uploads/bc903c2f-4a8c-4d31-8c08-9ea4492ddba6.png" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg">Satisfaction</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground/60 hover:bg-white hover:text-sidebar-foreground transition-colors",
                  item.active && "bg-white text-sidebar-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
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