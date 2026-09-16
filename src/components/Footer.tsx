import React from "react";
import logo from "/assets/logo-text.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand + description + socials */}
          <div className="max-w-xs">
            
            <img src={logo} alt="logo-text"/>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 justify-between md:justify-end gap-12">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider">
                PRODUCT
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
                <li><a href="#" className="hover:text-gray-900">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider">
                COMPANY
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider">
                LEGAL
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;