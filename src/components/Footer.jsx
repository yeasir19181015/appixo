import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-700">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Appixo" className="w-8 h-8" />
            <span className="text-lg font-bold text-white">HERO.IO</span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-sm text-gray-400 font-semibold">Social Links</p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-center text-sm text-gray-400">
          Copyright © 2025 - All right reserved
        </div>

      </div>
    </footer>
  );
}