export default function FlashSale() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">عروض فلاش سيل</h2>
        <div className="flex items-center space-x-2 space-x-reverse">
          <span className="text-sm">ينتهي خلال:</span>
          <div className="bg-white/20 px-3 py-1 rounded">24:59:59</div>
        </div>
      </div>
      <p className="mb-6">خصومات تصل إلى 70% لفترة محدودة فقط!</p>
      <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
        تصفح العروض
      </button>
    </div>
  )
}
