export function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b">
      <div>
        <h1 className="text-xl font-semibold mb-1">Addon Settings</h1>
        <p className="text-gray-500 text-sm">Customize the addon settings to suit your needs.</p>
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