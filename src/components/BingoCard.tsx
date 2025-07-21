import { Button } from '@/components/ui/button'

interface BingoCardProps {
  card: number[][]
  markedNumbers: Set<number>
  onMarkNumber: (number: number) => void
  hasBingo: boolean
}

export function BingoCard({ card, markedNumbers, onMarkNumber, hasBingo }: BingoCardProps) {
  const letters = ['B', 'I', 'N', 'G', 'O']

  return (
    <div className={`bg-card backdrop-blur-sm rounded-2xl shadow-xl border border-border p-6 transition-all duration-300 ${hasBingo ? 'ring-4 ring-green-500 ring-opacity-60 shadow-green-500/20 shadow-2xl' : ''}`}>
      <h2 className="text-2xl font-bold text-center mb-6">
        🎲 <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Sua Cartela</span>
      </h2>
      
      <div className="grid grid-cols-5 gap-2 p-4 bg-muted rounded-xl">
        {/* Header */}
        {letters.map((letter) => (
          <div
            key={letter}
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xl h-12 flex items-center justify-center rounded-lg shadow-lg"
          >
            {letter}
          </div>
        ))}
        
        {/* Numbers */}
        {Array.from({ length: 5 }, (_, row) => (
          letters.map((_, col) => {
            const number = card[col][row]
            const isFreeSpace = row === 2 && col === 2
            const isMarked = markedNumbers.has(number) || isFreeSpace
            
            return (
              <Button
                key={`${col}-${row}`}
                variant={isMarked ? "default" : "outline"}
                className={`h-12 text-lg font-semibold transition-all duration-200 hover:scale-105 ${
                  isFreeSpace 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg' 
                    : isMarked 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg' 
                      : 'bg-background hover:bg-accent border-2 border-border hover:border-primary text-foreground'
                }`}
                onClick={() => !isFreeSpace && onMarkNumber(number)}
                disabled={isFreeSpace}
              >
                {isFreeSpace ? '★' : number}
              </Button>
            )
          })
        )).flat()}
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 space-y-1">
        <p className="flex items-center justify-center gap-2">
          <span className="inline-block w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded"></span>
          ★ = Espaço Livre
        </p>
        <p className="text-xs">Clique nos números para marcá-los</p>
      </div>
    </div>
  )
}
