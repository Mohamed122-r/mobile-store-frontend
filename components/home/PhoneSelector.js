import { useState } from 'react'
import { FiSmartphone, FiChevronDown } from 'react-icons/fi'

const phoneBrands = {
  Apple: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13'],
  Samsung: ['Galaxy S23 Ultra', 'Galaxy S23', 'Galaxy Z Flip 5', 'Galaxy A54'],
  Xiaomi: ['Redmi Note 12', 'Poco X5', 'Mi 13', 'Redmi 12'],
  Huawei: ['P60 Pro', 'Mate 50', 'Nova 11'],
  'هواتف أخرى': ['Realme', 'Oppo', 'Vivo', 'OnePlus']
}

export default function PhoneSelector() {
  const [selectedBrand, setSelectedBrand] = useState('Apple')
  const [selectedModel, setSelectedModel] = useState('iPhone 15 Pro Max')
  const [isBrandOpen, setIsBrandOpen] = useState(false)
  const [isModelOpen, setIsModelOpen] = useState(false)

  const handleFindAccessories = () => {
    // ⚠️ سيتم ربط هذا بوظيفة البحث في المستقبل
    alert(`البحث عن إكسسوارات لـ ${selectedBrand} ${selectedModel}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-2">
          <FiSmartphone className="text-primary-600 text-xl" />
        </div>
        <h2 className="text-2xl font-bold">ابحث عن إكسسوارات هاتفك</h2>
        <p className="text-gray-600 mt-1">اختر ماركة ونموذج هاتفك للعثور على الإكسسوارات المتوافقة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* اختيار الماركة */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ماركة الهاتف
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-4 py-3 text-right border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-primary-500"
              onClick={() => setIsBrandOpen(!isBrandOpen)}
            >
              <span>{selectedBrand}</span>
              <FiChevronDown className={`transition-transform ${isBrandOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isBrandOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {Object.keys(phoneBrands).map((brand) => (
                  <button
                    key={brand}
                    className="w-full px-4 py-3 text-right hover:bg-gray-100 transition"
                    onClick={() => {
                      setSelectedBrand(brand)
                      setSelectedModel(phoneBrands[brand][0])
                      setIsBrandOpen(false)
                    }}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* اختيار النموذج */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نموذج الهاتف
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-4 py-3 text-right border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-primary-500"
              onClick={() => setIsModelOpen(!isModelOpen)}
            >
              <span>{selectedModel}</span>
              <FiChevronDown className={`transition-transform ${isModelOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isModelOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {phoneBrands[selectedBrand]?.map((model) => (
                  <button
                    key={model}
                    className="w-full px-4 py-3 text-right hover:bg-gray-100 transition"
                    onClick={() => {
                      setSelectedModel(model)
                      setIsModelOpen(false)
                    }}
                  >
                    {model}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* زر البحث */}
      <div className="mt-6">
        <button
          onClick={handleFindAccessories}
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          ابحث عن الإكسسوارات المتوافقة
        </button>
      </div>

      {/* ماركات شائعة */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-600 mb-4">ماركات شائعة:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(phoneBrands).slice(0, 4).map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedBrand === brand 
                ? 'bg-primary-100 border-primary-500 text-primary-600' 
                : 'border-gray-300 hover:border-primary-400'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
