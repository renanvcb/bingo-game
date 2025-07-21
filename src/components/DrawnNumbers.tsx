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
    <div className="bg-card backdrop-blur-sm rounded-2xl shadow-xl border border-border p-6">
      <h2 className="text-2xl font-semibold mb-6">
        📊 <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Números Sorteados ({drawnNumbers.length}/75)</span>
      </h2>
      
      <div className="space-y-6">
        {letters.map((letter) => {
          const letterNumbers = getNumbersByLetter(letter as 'B' | 'I' | 'N' | 'G' | 'O')
          
          return (
            <div key={letter} className="space-y-3">
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{letter}</h3>
              <div className="grid grid-cols-15 gap-1">
                {letterNumbers.map((num) => (
                  <div
                    key={num.number}
                    className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all duration-200 ${
                      num.drawn 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg transform scale-110' 
                        : 'bg-muted text-muted-foreground'
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
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-600">
          <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">🎯 Últimos números sorteados:</h3>
          <div className="flex flex-wrap gap-2">
            {drawnNumbers.slice(-10).reverse().map((num, index) => (
              <div
                key={`${num.letter}-${num.number}-${index}`}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-all duration-200 hover:scale-105"
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
