import { Menu, X } from "lucide-react";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-6 border-b">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-sidebar hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div>
          <h1 className="text-xl font-semibold mb-1">Addon Settings</h1>
          <p className="text-gray-500 text-sm">Customize the addon settings to suit your needs.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <img
          src="https://ui-avatars.com/api/?name=silas-alves"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </header>
  );
}