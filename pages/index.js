
import Head from 'next/head'
import HeroBanner from '@/components/home/HeroBanner'
import PhoneSelector from '@/components/home/PhoneSelector'
import CategoryGrid from '@/components/home/CategoryGrid'
import FlashSale from '@/components/home/FlashSale'
import BestSellers from '@/components/home/BestSellers'
import ReviewsSection from '@/components/home/ReviewsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>متجر إكسسوارات الهواتف | أحدث الإكسسوارات</title>
        <meta name="description" content="اكتشف أفضل إكسسوارات الهواتف بأسعار تنافسية" />
      </Head>
      
      <div className="min-h-screen">
        {/* البانر الرئيسي */}
        <HeroBanner />
        
        {/* أداة اختيار الهاتف */}
        <div className="container mx-auto px-4 py-8">
          <PhoneSelector />
        </div>
        
        {/* الفئات الرئيسية */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">تصفح حسب الفئة</h2>
          <CategoryGrid />
        </div>
        
        {/* عروض فلاش سيل */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <FlashSale />
          </div>
        </div>
        
        {/* الأكثر مبيعاً */}
        <div className="container mx-auto px-4 py-8">
          <BestSellers />
        </div>
        
        {/* آراء العملاء */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <ReviewsSection />
          </div>
        </div>
      </div>
    </>
  )
}
