import type { BingoNumber } from '../App'

interface NumberDrawerProps {
  currentNumber: BingoNumber | null
  isGameActive: boolean
}

export function NumberDrawer({ currentNumber, isGameActive }: NumberDrawerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-xl font-semibold mb-6">Número Sorteado</h2>
      
      <div className="relative">
        {currentNumber ? (
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-32 h-32 mx-auto flex flex-col items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-3xl font-bold">{currentNumber.letter}</div>
            <div className="text-4xl font-black">{currentNumber.number}</div>
          </div>
        ) : (
          <div className="border-4 border-dashed border-gray-300 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
            <div className="text-gray-400 text-lg">
              {isGameActive ? 'Aguardando...' : 'Pronto!'}
            </div>
          </div>
        )}
      </div>
      
      {currentNumber && (
        <div className="mt-4">
          <p className="text-2xl font-bold text-gray-800">
            {currentNumber.letter}-{currentNumber.number}
          </p>
        </div>
      )}
    </div>
  )
}
