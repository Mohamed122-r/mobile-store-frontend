
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // ⚠️ في المستقبل: التحقق من صحة التوكن
    const token = localStorage.getItem('token')
    if (token) {
      // سيتم استبدال هذا بـ API call
      setUser({ id: '1', name: 'مستخدم تجريبي', email: 'user@example.com' })
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    // ⚠️ في المستقبل: API call حقيقي
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUser = {
          id: '1',
          name: 'مستخدم تجريبي',
          email: email,
          token: 'fake-jwt-token'
        }
        setUser(fakeUser)
        localStorage.setItem('token', fakeUser.token)
        resolve(fakeUser)
      }, 1000)
    })
  }

  const register = async (userData) => {
    // ⚠️ في المستقبل: API call حقيقي
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true })
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
