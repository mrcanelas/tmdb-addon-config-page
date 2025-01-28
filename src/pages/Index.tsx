import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { IntegrationCard } from "@/components/IntegrationCard";

const integrations = [
  {
    name: "Groove",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Front",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Help Scout",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Zapier",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Slack",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "HubSpot",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Office 365",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Aweber",
    icon: "/placeholder.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1" />
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Add Integration
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                icon={integration.icon}
                description={integration.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;