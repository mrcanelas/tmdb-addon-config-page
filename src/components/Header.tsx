import { Menu, X } from "lucide-react";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white flex justify-between items-center p-6 border-b">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-sidebar hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://ui-avatars.com/api/?name=silas-alves"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}