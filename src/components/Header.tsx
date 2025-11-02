import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#2c494b] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Your Mobile Repairman Logo"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/specials"
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Specials
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-300 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-[#3d5f61]"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <nav id="mobile-menu" className="hidden md:hidden mt-4 pb-2">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-white hover:text-blue-300 font-medium py-2"
            >
              Home
            </Link>
            <Link
              to="/specials"
              className="text-white hover:text-blue-300 font-medium py-2"
            >
              Specials
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-300 font-medium py-2"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
