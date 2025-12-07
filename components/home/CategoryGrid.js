
import Link from 'next/link'
import { 
  FiSmartphone, FiBatteryCharging, FiHeadphones, 
  FiMonitor, FiPackage, FiShield, FiTool, FiShoppingBag 
} from 'react-icons/fi'

const categories = [
  {
    name: 'أغطية الهواتف',
    icon: FiSmartphone,
    href: '/categories/phone-cases',
    count: 245,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'شواحن وكابلات',
    icon: FiBatteryCharging,
    href: '/categories/chargers-cables',
    count: 189,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'سماعات بلوتوث',
    icon: FiHeadphones,
    href: '/categories/headphones',
    count: 156,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'حوامل وستاندات',
    icon: FiMonitor,
    href: '/categories/holders',
    count: 98,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'حزم وعروض',
    icon: FiPackage,
    href: '/categories/bundles',
    count: 45,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    name: 'حاميات الشاشة',
    icon: FiShield,
    href: '/categories/screen-protectors',
    count: 203,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'أدوات التنظيف',
    icon: FiTool,
    href: '/categories/cleaning-tools',
    count: 76,
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'كل الإكسسوارات',
    icon: FiShoppingBag,
    href: '/products',
    count: 1024,
    color: 'from-primary-500 to-secondary-500'
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="group bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-lg hover:border-primary-300 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            {/* الأيقونة */}
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <category.icon className="text-white text-2xl" />
            </div>
            
            {/* الاسم */}
            <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-primary-600 transition">
              {category.name}
            </h3>
            
            {/* العدد */}
            <p className="text-sm text-gray-500">
              {category.count} منتج
            </p>
            
            {/* مؤشر */}
            <div className="mt-2 w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
