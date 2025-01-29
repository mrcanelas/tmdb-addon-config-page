import { Home, Grid, Network, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { KoFiDialog } from "react-kofi";
import { useState } from "react";
import "react-kofi/dist/styles.css";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid, label: "Catalogs", path: "/catalogs" },
  { icon: Network, label: "Integrations", path: "/integrations" },
  { icon: Settings, label: "Others", path: "/others" },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-[#0d253f] transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:relative md:transform-none"
        )}
      >
        <div className="flex flex-col min-h-screen py-6 space-y-10">
          <div className="flex items-center gap-2 mx-6 mt-10">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a82bb2cd95f6c.svg"
              alt="TMDB Logo"
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex-1">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100",
                      location.pathname === item.path && "bg-gray-700 text-gray-100"
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 grid place-items-center">
            <button className="w-full mb-3 bg-[#01b4e4] text-white rounded-lg py-2.5 px-4 hover:bg-[#01b4e4]/90 transition-colors">
              Install
            </button>
            <KoFiDialog
              color="#01b4e4"
              textColor="#fff"
              id="mrcanelas"
              label="Support me"
              padding={6}
              iframe={false}
              buttonRadius="6px"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}