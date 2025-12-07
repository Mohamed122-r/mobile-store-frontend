export default function BestSellers() {
  const products = [
    { id: 1, name: 'غطاء iPhone 15', price: '49.99', originalPrice: '89.99' },
    { id: 2, name: 'شاحن سريع 65W', price: '89.99', originalPrice: '129.99' },
    { id: 3, name: 'سماعات بلوتوث', price: '199.99', originalPrice: '299.99' },
    { id: 4, name: 'حامل سيارة', price: '29.99', originalPrice: '49.99' },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 border">
            <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-gray-500">صورة المنتج</span>
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold">{product.price} ر.س</span>
                <span className="text-sm text-gray-500 line-through mr-2">
                  {product.originalPrice} ر.س
                </span>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                أضف للسلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
