import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6 lg:p-8">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold cursor-pointer">
          <span className="text-indigo-100">Line</span>
          <span className="text-purple-300">Dev</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <ul className="flex gap-8 text-white font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/man"
                className="hover:text-indigo-200 transition duration-300"
              >
                Man
              </Link>
            </li>
            <li>
              <Link
                to="/woman"
                className="hover:text-indigo-200 transition duration-300"
              >
                Woman
              </Link>
            </li>
            <li>
              <Link
                to="/kid"
                className="hover:text-indigo-200 transition duration-300"
              >
                Kid
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="hover:text-indigo-200 transition duration-300"
              >
                Add
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-3xl">☰</button>
        </div>

        {/* User Profile */}
        <div className="hidden md:block text-white cursor-pointer">
          <span className="text-2xl">👤</span>
        </div>
      </nav>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
        <ul className="space-y-4 text-lg">
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/man"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Man
            </Link>
          </li>
          <li>
            <Link
              to="/woman"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Woman
            </Link>
          </li>
          <li>
            <Link
              to="/kid"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Kid
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
