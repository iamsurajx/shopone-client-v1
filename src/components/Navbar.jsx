import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">[ShopOne.com]</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-600 hover:text-blue-500"
            >
              Categories
            </Link>
            <Link to="/seller" className="text-gray-600 hover:text-blue-500">
              Seller
            </Link>
            <Link to="/live" className="text-gray-600 hover:text-blue-500">
              Live
            </Link>
            <Link to="/auction" className="text-gray-600 hover:text-blue-500">
              Auction
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <HeartIcon className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer" />
            <ShoppingBagIcon className="h-6 w-6 text-gray-600 hover:text-green-500 cursor-pointer" />
            <UserIcon className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
