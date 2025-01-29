import { Switch } from "@/components/ui/switch";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { integrations } from "@/data/integrations";
import { catalogs, type Catalog } from "@/data/catalogs";

const getIntegrationInfo = (catalogId: string) => {
  const [integrationId] = catalogId.split(".");
  const integration = integrations.find(i => i.id === integrationId);
  
  return integration || { 
    id: integrationId,
    name: integrationId.toUpperCase(),
    icon: "/default.svg",
    description: "Unknown integration"
  };
};

const CatalogCard = ({ catalog }: { catalog: Catalog }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showInHome, setShowInHome] = useState(!catalog.extraRequired);
  const integration = getIntegrationInfo(catalog.id);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="font-semibold flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md p-1">
                <img 
                  src={integration.icon} 
                  alt={`${integration.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              {catalog.name}
              <Badge variant="outline">
                {catalog.type === "movie" ? "Filme" : "Série"}
              </Badge>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Enable</span>
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
            <span className="text-sm text-muted-foreground">Home</span>
            <Switch
              checked={showInHome}
              onCheckedChange={setShowInHome}
            />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const Catalogs = () => {
  return (
    <main className="p-12">
      <div className="flex flex-col mb-6">
        <h1 className="text-xl font-semibold mb-1">Catálogos</h1>
        <p className="text-gray-500 text-sm">Gerencie os catálogos disponíveis no addon.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {catalogs.map((catalog) => (
          <CatalogCard key={`${catalog.id}-${catalog.type}`} catalog={catalog} />
        ))}
      </div>
    </main>
  );
};

export default Catalogs;