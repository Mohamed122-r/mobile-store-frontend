export default function ReviewsSection() {
  const reviews = [
    { name: 'أحمد محمد', rating: 5, comment: 'جودة ممتازة وسرعة في التوصيل' },
    { name: 'سارة أحمد', rating: 4, comment: 'المنتج جيد والسعر مناسب' },
    { name: 'خالد علي', rating: 5, comment: 'أفضل متجر لإكسسوارات الهواتف' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">آراء عملائنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">{review.name.charAt(0)}</span>
              </div>
              <div className="mr-4">
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex text-yellow-400">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
