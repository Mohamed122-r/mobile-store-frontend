
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              اكسسوارات هاتفك
              <span className="block text-yellow-300">بأسعار لا تقاوم!</span>
            </h1>
            <p className="text-lg mb-8 opacity-90">
              اكتشف أحدث إكسسوارات الهواتف بجودة عالية وأسعار تنافسية.
              تخفيضات تصل إلى 70% على جميع المنتجات.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                تسوق الآن
              </Link>
              <Link 
                href="/categories/bundles" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
              >
                عروض الحزم
              </Link>
            </div>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-64 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 right-4 text-white">
                <p className="text-sm">أغطية، شواحن، سماعات، والمزيد!</p>
              </div>
              {/* ⚠️ استبدل بصور حقيقية */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl">صورة بانر إكسسوارات</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* العداد */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="mb-2">عرض لفترة محدودة! ينتهي خلال:</p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              {['أيام', 'ساعات', 'دقائق', 'ثواني'].map((unit, index) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <span className="text-sm mt-1 block">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
