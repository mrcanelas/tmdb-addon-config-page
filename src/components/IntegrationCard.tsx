interface IntegrationCardProps {
  name: string;
  icon: string;
  description: string;
}

export function IntegrationCard({ name, icon, description }: IntegrationCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt={name} className="w-12 h-12 mb-4" />
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <button className="text-primary hover:text-primary/80 font-medium transition-colors">
          Setup
        </button>
      </div>
    </div>
  );
}