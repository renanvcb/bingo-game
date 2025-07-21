import type { BingoNumber } from '../App'

interface DrawnNumbersProps {
  drawnNumbers: BingoNumber[]
  allNumbers: BingoNumber[]
}

export function DrawnNumbers({ drawnNumbers, allNumbers }: DrawnNumbersProps) {
  const letters = ['B', 'I', 'N', 'G', 'O']
  
  const getNumbersByLetter = (letter: 'B' | 'I' | 'N' | 'G' | 'O') => {
    return allNumbers.filter(num => num.letter === letter)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Números Sorteados ({drawnNumbers.length}/75)</h2>
      
      <div className="space-y-4">
        {letters.map((letter) => {
          const letterNumbers = getNumbersByLetter(letter as 'B' | 'I' | 'N' | 'G' | 'O')
          
          return (
            <div key={letter} className="space-y-2">
              <h3 className="font-bold text-lg text-blue-600">{letter}</h3>
              <div className="grid grid-cols-15 gap-1">
                {letterNumbers.map((num) => (
                  <div
                    key={num.number}
                    className={`w-8 h-8 rounded text-xs font-medium flex items-center justify-center ${
                      num.drawn 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {num.number}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      
      {drawnNumbers.length > 0 && (
        <div className="mt-6 pt-4 border-t">
          <h3 className="font-semibold mb-2">Últimos números sorteados:</h3>
          <div className="flex flex-wrap gap-2">
            {drawnNumbers.slice(-10).reverse().map((num, index) => (
              <div
                key={`${num.letter}-${num.number}-${index}`}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {num.letter}-{num.number}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
