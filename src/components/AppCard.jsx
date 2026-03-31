import { useNavigate } from "react-router-dom";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div
      className="bg-white rounded-2xl p-3 cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
      onClick={() => navigate(`/apps/${app.id}`)}
    >
      {/* App Image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* App Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
        {app.title}
      </h3>

      {/* Downloads & Rating */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
          ⬇ {formatDownloads(app.downloads)}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-50 px-2 py-1 rounded-full">
          ★ {app.ratingAvg}
        </span>
      </div>
    </div>
  );
}