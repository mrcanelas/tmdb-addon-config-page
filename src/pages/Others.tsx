import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Others = () => {
  const [adultContent, setAdultContent] = useState(false);
  const [provideImdbId, setProvideImdbId] = useState(false);
  const [tmdbPrefix, setTmdbPrefix] = useState(false);

  return (
    <main className="p-12">
      <div className="flex flex-col mb-6">
        <h1 className="text-xl font-semibold mb-1">Addon Settings</h1>
        <p className="text-gray-500 text-sm">
          Customize the addon settings to suit your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-row items-center justify-between bg-white rounded-xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-shadow">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">Enable adult content</h1>
            <p className="text-gray-500 text-sm">Receive emails about new products, features, and more.</p>
          </div>
          <Switch
            checked={adultContent}
            onCheckedChange={() => setAdultContent(!adultContent)}
          />
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-shadow">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">Provide metadata for IMDBId</h1>
            <p className="text-gray-500 text-sm">Receive emails about new products, features, and more.</p>
          </div>
          <Switch
            checked={provideImdbId}
            onCheckedChange={() => setProvideImdbId(!provideImdbId)}
          />
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-shadow">
          <div className="space-y-0.5">
            <h1 className="text-sm font-semibold mb-1">Use TMDB prefix in catalogs</h1>
            <p className="text-gray-500 text-sm">Receive emails about new products, features, and more.</p>
          </div>
          <Switch
            checked={tmdbPrefix}
            onCheckedChange={() => setTmdbPrefix(!tmdbPrefix)}
          />
        </div>
      </div>
    </main>
  );
};

export default Others;
