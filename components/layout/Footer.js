import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const footerLinks = {
    المتجر: [
      { label: 'من نحن', href: '/about' },
      { label: 'اتصل بنا', href: '/contact' },
      { label: 'الشحن والتوصيل', href: '/shipping' },
      { label: 'سياسة الإرجاع', href: '/return-policy' },
    ],
    'المساعدة والدعم': [
      { label: 'الأسئلة الشائعة', href: '/faq' },
      { label: 'حالة الطلب', href: '/track-order' },
      { label: 'دليل الشراء', href: '/buying-guide' },
      { label: 'الدعم الفني', href: '/support' },
    ],
    'وسائل التواصل': [
      { label: 'واتساب', href: 'https://wa.me/966500000000' },
      { label: 'تويتر', href: 'https://twitter.com/yourstore' },
      { label: 'إنستغرام', href: 'https://instagram.com/yourstore' },
      { label: 'البريد الإلكتروني', href: 'mailto:info@yourstore.com' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات المتجر */}
          <div>
            <h3 className="text-2xl font-bold mb-4">إكسسواراتي</h3>
            <p className="text-gray-400 mb-6">
              وجهتك الأولى لأفضل إكسسوارات الهواتف بجودة عالية وأسعار منافسة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات الاتصال</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse">
                <FiMapPin className="text-gray-400" />
                <span className="text-gray-400">المملكة العربية السعودية، الرياض</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <FiPhone className="text-gray-400" />
                <span className="text-gray-400">+966 500 000 000</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <FiMail className="text-gray-400" />
                <span className="text-gray-400">info@yourstore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} متجر إكسسواراتي. جميع الحقوق محفوظة.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="mx-2 hover:text-white">سياسة الخصوصية</Link>
            <Link href="/terms" className="mx-2 hover:text-white">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
