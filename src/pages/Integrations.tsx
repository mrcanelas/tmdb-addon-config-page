import { IntegrationCard } from "@/components/IntegrationCard";

const integrations = [
  {
    name: "TMDB Lists",
    icon: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  },
  {
    name: "Rating Poster Database",
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
  },
  {
    name: "Streaming Catalogs",
    icon: "https://www.svgrepo.com/show/303341/netflix-1-logo.svg",
    description: "Sed sed lorem ut ipsum malesuada imperdiet. Nulla facilis at magna non",
  }
];

const Integrations = () => {
  return (
    <main className="px-12 py-6">
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
  );
};

export default Integrations;