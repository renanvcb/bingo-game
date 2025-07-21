import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verifica se tem preferência salva
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bingo-theme') as Theme
      if (saved && (saved === 'light' || saved === 'dark')) {
        return saved
      }
      
      // Verifica preferência do sistema
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    
    return 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const root = document.documentElement
    
    // Remove ambas as classes primeiro
    root.classList.remove('light', 'dark')
    
    // Adiciona a classe do tema atual
    root.classList.add(theme)
    
    // Salva a preferência
    localStorage.setItem('bingo-theme', theme)
    
    console.log('🎨 Theme changed to:', theme)
    console.log('📋 Root classes:', root.classList.toString())
  }, [theme])

  const toggleTheme = () => {
    console.log('🔄 Toggling theme from:', theme)
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      console.log('🔄 New theme will be:', newTheme)
      return newTheme
    })
  }

  return { theme, toggleTheme }
}
