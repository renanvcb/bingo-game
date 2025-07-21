import type { BingoNumber } from '../App'

interface NumberDrawerProps {
  currentNumber: BingoNumber | null
  isGameActive: boolean
}

export function NumberDrawer({ currentNumber, isGameActive }: NumberDrawerProps) {
  return (
    <div className="bg-card backdrop-blur-sm rounded-2xl shadow-xl border border-border p-8 text-center">
      <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        🎲 Número Sorteado
      </h2>
      
      <div className="relative">
        {currentNumber ? (
          <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white rounded-full w-40 h-40 mx-auto flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 border-4 border-white/20">
            <div className="text-4xl font-bold">{currentNumber.letter}</div>
            <div className="text-5xl font-black">{currentNumber.number}</div>
          </div>
        ) : (
          <div className="border-4 border-dashed border-border rounded-full w-40 h-40 mx-auto flex items-center justify-center bg-muted">
            <div className="text-muted-foreground text-lg font-medium">
              {isGameActive ? '🎲 Aguardando...' : '🎯 Pronto!'}
            </div>
          </div>
        )}
      </div>
      
      {currentNumber && (
        <div className="mt-6">
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentNumber.letter}-{currentNumber.number}
          </p>
        </div>
      )}
    </div>
  )
}
