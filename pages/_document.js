
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="متجر إكسسوارات الهواتف - أفضل الإكسسوارات لهاتفك" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-arabic bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
