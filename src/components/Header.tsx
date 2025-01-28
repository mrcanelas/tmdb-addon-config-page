import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b">
      <div>
        <h1 className="text-xl font-semibold mb-1">Connect Pro Satisfaction to your Review Success page</h1>
        <p className="text-gray-500 text-sm">Integrations allow you to easily send and receive proSatisfaction responses</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
        <img
          src="https://ui-avatars.com/api/?name=User"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}