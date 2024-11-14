import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg mt-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6 lg:p-8">
        {/* Footer Text */}
        <div className="text-white text-xl font-semibold">
          <p>© 2024 LineDev, All Rights Reserved</p>
          <p className="mt-2">
            Your go-to source for great development resources.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-6 text-white font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-indigo-200 transition duration-300"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-3xl">☰</button>
        </div>
      </div>

      {/* Mobile Footer Menu (hidden by default) */}
      <div className="md:hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
        <ul className="space-y-4 text-lg">
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-200 transition duration-300"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-200 transition duration-300"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
