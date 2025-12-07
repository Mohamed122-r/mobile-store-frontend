import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - الصفحة غير موجودة</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6">الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
          <Link 
            href="/" 
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </>
  )
    }
