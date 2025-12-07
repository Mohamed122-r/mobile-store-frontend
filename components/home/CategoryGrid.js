import Link from 'next/link';
import { FiSmartphone, FiBattery, FiHeadphones, FiMonitor } from 'react-icons/fi';

const categories = [
  { name: 'أغطية الهواتف', icon: FiSmartphone, count: 245, href: '/categories/cases' },
  { name: 'شواحن وكابلات', icon: FiBattery, count: 189, href: '/categories/chargers' },
  { name: 'سماعات', icon: FiHeadphones, count: 156, href: '/categories/headphones' },
  { name: 'حوامل', icon: FiMonitor, count: 98, href: '/categories/holders' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(cat => (
        <Link 
          key={cat.name} 
          href={cat.href}
          className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <cat.icon className="text-blue-600 text-2xl" />
            </div>
            <h3 className="font-semibold mb-1">{cat.name}</h3>
            <p className="text-sm text-gray-500">{cat.count} منتج</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
