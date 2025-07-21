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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Button
            onClick={onToggleGame}
            variant={isGameActive ? "secondary" : "default"}
            size="lg"
            className="flex items-center gap-2"
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
            className="flex items-center gap-2"
          >
            <Dices className="w-4 h-4" />
            Sortear Número
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{drawnCount}</div>
            <div className="text-sm text-gray-500">de {totalCount}</div>
          </div>
          
          <Button
            onClick={onNewGame}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Novo Jogo
          </Button>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1 text-center">
          {progressPercentage.toFixed(1)}% completo
        </div>
      </div>
    </div>
  )
}
