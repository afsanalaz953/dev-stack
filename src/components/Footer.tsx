
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-200 pt-16 pb-10 border-t rounded-2xl border-gray-100 container mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
             <img src="/src/assets/logo-text.png" alt="" />
            </div>
            
            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-purple-600 transition-colors duration-200" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors duration-200" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;