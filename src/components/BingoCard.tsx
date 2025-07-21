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
    <div className={`bg-white rounded-lg shadow-lg p-6 ${hasBingo ? 'ring-4 ring-green-500' : ''}`}>
      <h2 className="text-2xl font-bold text-center mb-4">Sua Cartela</h2>
      
      <div className="grid grid-cols-5 gap-1 bg-gray-200 p-2 rounded">
        {/* Header */}
        {letters.map((letter) => (
          <div
            key={letter}
            className="bg-blue-600 text-white font-bold text-xl h-12 flex items-center justify-center rounded"
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
                className={`h-12 text-lg font-semibold ${
                  isFreeSpace 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                    : isMarked 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'hover:bg-blue-50'
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
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>★ = Espaço Livre</p>
        <p>Clique nos números para marcá-los</p>
      </div>
    </div>
  )
}
