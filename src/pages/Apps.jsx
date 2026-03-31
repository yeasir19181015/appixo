import { useState } from "react";
import apps from "../data/app"; // ✅ FIXED: was "../data/apps"
import AppCard from "../components/AppCard";

export default function Apps() {
  const [search, setSearch] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-14">
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-sm">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search & Count */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <p className="text-base font-semibold text-gray-800">
            ({filteredApps.length}) Apps Found
          </p>
          <div className="relative w-full md:w-72">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="search Apps"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-400"
            />
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-bold text-gray-700">No App Found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching with a different keyword
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
