import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            إكسسوارات هاتفك بأسعار لا تقاوم
          </h1>
          <p className="text-lg mb-8">
            اكتشف أحدث إكسسوارات الهواتف بجودة عالية وتخفيضات تصل إلى 70%
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              تسوق الآن
            </Link>
            <Link 
              href="/categories" 
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              تصفح الفئات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
