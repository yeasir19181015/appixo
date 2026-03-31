import { useNavigate } from "react-router-dom";
import error404 from "../assets/error-404.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <img src={error404} alt="404" className="w-72 mb-6" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Oops, page not found!
      </h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-lg text-white font-semibold"
        style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
      >
        Go Back!
      </button>
    </div>
  );
}