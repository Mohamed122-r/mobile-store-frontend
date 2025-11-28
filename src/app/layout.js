export const metadata = {
  title: 'متجر إكسسوارات الجوال',
  description: 'أفضل الإكسسوارات للجوالات بأفضل الأسعار',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
