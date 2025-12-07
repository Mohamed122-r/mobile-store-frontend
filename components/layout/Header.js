import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            إكسسواراتي
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن إكسسوارات..."
                className="w-full px-4 py-2 pr-12 border rounded-lg"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 space-x-reverse">
            <Link href="/account" className="flex items-center">
              <FiUser className="text-xl" />
              <span className="mr-2 hidden md:inline">حسابي</span>
            </Link>
            <Link href="/cart" className="flex items-center">
              <FiShoppingCart className="text-xl" />
              <span className="mr-2 hidden md:inline">السلة</span>
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
