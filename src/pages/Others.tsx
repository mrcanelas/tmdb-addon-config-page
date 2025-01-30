import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useConfig } from "@/contexts/ConfigContext";

const Others = () => {
  const { includeAdult, setIncludeAdult } = useConfig();
  const { provideImdbId, setProvideImdbId } = useConfig();
  const { tmdbPrefix, setTmdbPrefix } = useConfig();

  return (
    <main className="p-12">
      <div className="flex flex-col mb-6">
        <h1 className="text-xl font-semibold mb-1">Addon Settings</h1>
        <p className="text-gray-500 text-sm">
          Customize the addon settings to suit your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-row items-center justify-between p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">Enable adult content</h1>
            <p className="text-gray-500 text-sm">
              Include adult content in search results.
            </p>
          </div>
          <Switch
            checked={includeAdult}
            onCheckedChange={() => setIncludeAdult(!includeAdult)}
          />
        </Card>
        <Card className="flex flex-row items-center justify-between p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">
              Provide IMDB metadata
            </h1>
            <p className="text-gray-500 text-sm">
              Include IMDB IDs in metadata for better integration with other addons.
            </p>
          </div>
          <Switch
            checked={provideImdbId}
            onCheckedChange={() => setProvideImdbId(!provideImdbId)}
          />
        </Card>
        <Card className="flex flex-row items-center justify-between p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">
              Use TMDB prefix
            </h1>
            <p className="text-gray-500 text-sm">
              Add "TMDB -" prefix to all catalog names for better organization.
            </p>
          </div>
          <Switch
            checked={tmdbPrefix}
            onCheckedChange={() => setTmdbPrefix(!tmdbPrefix)}
          />
        </Card>
      </div>
    </main>
  );
};

export default Others;
