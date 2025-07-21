import { Button } from '@/components/ui/button'
import { Play, Pause, RotateCcw, Dices } from 'lucide-react'

interface GameControlsProps {
  isGameActive: boolean
  onToggleGame: () => void
  onDrawNumber: () => void
  onNewGame: () => void
  drawnCount: number
  totalCount: number
}

export function GameControls({ 
  isGameActive, 
  onToggleGame, 
  onDrawNumber, 
  onNewGame, 
  drawnCount, 
  totalCount 
}: GameControlsProps) {
  const progressPercentage = (drawnCount / totalCount) * 100

  return (
    <div className="bg-card backdrop-blur-sm rounded-2xl shadow-xl border border-border p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3">
          <Button
            onClick={onToggleGame}
            variant={isGameActive ? "secondary" : "default"}
            size="lg"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg transition-all duration-200 hover:scale-105"
          >
            {isGameActive ? (
              <>
                <Pause className="w-4 h-4" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                {drawnCount === 0 ? 'Iniciar' : 'Continuar'}
              </>
            )}
          </Button>
          
          <Button
            onClick={onDrawNumber}
            disabled={!isGameActive || drawnCount >= totalCount}
            size="lg"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Dices className="w-4 h-4" />
            Sortear Número
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{drawnCount}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">de {totalCount}</div>
          </div>
          
          <Button
            onClick={onNewGame}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-2 border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            Novo Jogo
          </Button>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center font-medium">
          {progressPercentage.toFixed(1)}% completo
        </div>
      </div>
    </div>
  )
}
