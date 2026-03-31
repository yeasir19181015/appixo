import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Installation() {
  const { installedApps, uninstallApp } = useAppContext();
  const [sortOrder, setSortOrder] = useState("");

  const formatNum = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n;
  };

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    toast.error(`${app.title} uninstalled!`);
  };

  let displayApps = [...installedApps];
  if (sortOrder === "high-low") {
    displayApps.sort((a, b) => b.downloads - a.downloads);
  } else if (sortOrder === "low-high") {
    displayApps.sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-14">

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Count + Sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-semibold text-gray-800">
            {displayApps.length} Apps Found
          </p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
          >
            <option value="">Sort By Size</option>
            <option value="high-low">High - Low</option>
            <option value="low-high">Low - High</option>
          </select>
        </div>

        {/* App List */}
        {displayApps.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-bold text-gray-700">No Apps Installed</p>
            <p className="text-gray-400 text-sm mt-2">
              Go to Apps page and install some apps!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {displayApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{app.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <span className="text-emerald-500 font-semibold">
                      ⬇ {formatNum(app.downloads)}
                    </span>
                    <span className="text-orange-400 font-semibold">
                      ★ {app.ratingAvg}
                    </span>
                    <span className="text-gray-400">{app.size} MB</span>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg cursor-pointer transition-colors"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}