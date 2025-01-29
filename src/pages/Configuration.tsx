import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Configuration = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Configuration</h1>
      
      <Tabs defaultValue="home" className="space-y-6">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="catalogs">Catalogs</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-4">
          <h2 className="text-lg font-medium">Home Settings</h2>
          <p>Welcome to the Stremio Addon Configuration</p>
        </TabsContent>

        <TabsContent value="catalogs" className="space-y-4">
          <h2 className="text-lg font-medium">Catalogs Settings</h2>
          <p>Manage your catalogs here</p>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <h2 className="text-lg font-medium">Integrations Settings</h2>
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
        </TabsContent>

        <TabsContent value="others" className="space-y-4">
          <h2 className="text-lg font-medium">Other Settings</h2>
          <p>Additional settings and configurations</p>
        </TabsContent>
      </Tabs>
    </main>
  );
};

const integrations = [
  {
    name: "The Movie Database",
    icon: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Rating Poster DB",
    icon: "https://github.com/RatingPosterDB.png",
    description: "RPDB is an easy-to-use media center ratings solution.",
  },
  {
    name: "MDBList",
    icon: "https://mdblist.com/static/mdblist.png",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Trakt",
    icon: "https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  }
];

export default Configuration;