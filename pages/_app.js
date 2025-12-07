
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '@/lib/context/CartContext'
import { AuthProvider } from '@/lib/context/AuthContext'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster position="top-center" />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
