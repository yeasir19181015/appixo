import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import apps from "../data/app"; // ✅ FIXED: was "../data/apps"
import appNotFound from "../assets/App-Error.png";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { installApp, isInstalled } = useAppContext();

  const app = apps.find((a) => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <img src={appNotFound} alt="Not Found" className="w-64 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">OPPS!! APP NOT FOUND</h2>
        <p className="text-gray-500 mb-6">
          The App you are requesting is not found on our system. Please try another app.
        </p>
        <button
          onClick={() => navigate("/apps")}
          className="px-6 py-2 rounded-lg text-white font-semibold"
          style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
        >
          Go Back!
        </button>
      </div>
    );
  }

  const installed = isInstalled(app.id);

  const handleInstall = () => {
    installApp(app);
    toast.success(`✅ ${app.title} installed successfully!`);
  };

  const formatNum = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">

        {/* App Info */}
        <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{app.title}</h1>
            <p className="text-sm text-purple-600 mb-4">
              Developed by <span className="font-semibold">{app.companyName}</span>
            </p>
            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{formatNum(app.downloads)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Average Ratings</p>
                <p className="text-2xl font-bold text-gray-900">{app.ratingAvg}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-900">{formatNum(app.reviews)}</p>
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-6 py-2 rounded-lg text-white font-semibold text-sm transition-all ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
              }`}
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Ratings</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ left: 10, right: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={50} />
              <Tooltip />
              <Bar dataKey="count" fill="#F97316" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
        </div>

      </div>
    </div>
  );
}
