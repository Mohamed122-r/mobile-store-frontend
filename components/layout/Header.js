import { useState } from 'react'
import Link from 'next/link'
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from '@/lib/hooks/useCart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  const categories = [
    { name: 'أغطية الهواتف', href: '/categories/phone-cases' },
    { name: 'شواحن وكابلات', href: '/categories/chargers-cables' },
    { name: 'سماعات', href: '/categories/headphones' },
    { name: 'حوامل وستاندات', href: '/categories/holders' },
    { name: 'عروض خاصة', href: '/categories/bundles' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* الهيدر العلوي */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* شعار الموقع */}
            <Link href="/" className="text-2xl font-bold text-primary-600">
              إكسسواراتي
            </Link>
            
            {/* شريط البحث (للأجهزة الكبيرة) */}
            <div className="hidden md:block relative w-96">
              <input
                type="text"
                placeholder="ابحث عن إكسسوارات لهاتفك..."
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* أزرار التنقل */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* زر القائمة للموبايل */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* رابط الحساب */}
            <Link href="/auth/login" className="hidden md:flex items-center space-x-1 space-x-reverse">
              <FiUser size={20} />
              <span>حسابي</span>
            </Link>

            {/* رابط السلة */}
            <Link href="/cart" className="relative flex items-center space-x-1 space-x-reverse">
              <FiShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="hidden md:inline">السلة</span>
            </Link>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {isMenuOpen && (
          <div className="md:hidden border-t mt-4 py-4">
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* شريط الفئات (للأجهزة الكبيرة) */}
        <nav className="hidden md:block border-t py-2">
          <div className="flex space-x-6 space-x-reverse justify-center">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-600 hover:text-primary-600 transition"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
