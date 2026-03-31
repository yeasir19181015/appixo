import { useNavigate } from "react-router-dom";
import apps from "../data/app"; // ✅ FIXED: was "../data/apps"
import AppCard from "../components/AppCard";
import heroImg from "../assets/hero.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Build <span className="text-purple-600">Productive</span> Apps
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:shadow-md transition-shadow bg-white"
            >
              🎮 Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:shadow-md transition-shadow bg-white"
            >
              🍎 App Store
            </a>
          </div>
          <div className="flex justify-center">
            <img src={heroImg} alt="Hero" className="w-64 md:w-80" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-14 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-purple-200 mb-1">Total Downloads</p>
              <p className="text-4xl font-bold">29.6M</p>
              <p className="text-sm text-purple-200 mt-1">21% More Than Last Month</p>
            </div>
            <div>
              <p className="text-sm text-purple-200 mb-1">Total Reviews</p>
              <p className="text-4xl font-bold">906K</p>
              <p className="text-sm text-purple-200 mt-1">46% More Than Last Month</p>
            </div>
            <div>
              <p className="text-sm text-purple-200 mb-1">Active Apps</p>
              <p className="text-4xl font-bold">132+</p>
              <p className="text-sm text-purple-200 mt-1">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps */}
      <section className="py-14 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Trending Apps
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {apps.slice(0, 8).map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/apps")}
              className="px-8 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer"
              style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
            >
              Show All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
