import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden bg-card backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
      title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
    >
      <div className="relative w-4 h-4">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 text-foreground transition-all duration-300" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500 transition-all duration-300" />
        )}
      </div>
      <span className="sr-only">
        {theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      </span>
    </Button>
  )
}