import { useState } from 'react';

export default function PhoneSelector() {
  const [brand, setBrand] = useState('Apple');
  const [model, setModel] = useState('iPhone 15 Pro');

  const brands = {
    Apple: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13'],
    Samsung: ['Galaxy S23', 'Galaxy Z Flip', 'Galaxy A54'],
    Xiaomi: ['Redmi Note 12', 'Poco X5'],
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">ابحث عن إكسسوارات هاتفك</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">الماركة</label>
          <select 
            value={brand} 
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {Object.keys(brands).map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">النموذج</label>
          <select 
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            {brands[brand]?.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
        ابحث عن الإكسسوارات المتوافقة
      </button>
    </div>
  );
}
