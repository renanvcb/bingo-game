import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { BingoCard } from './components/BingoCard'
import { NumberDrawer } from './components/NumberDrawer'
import { DrawnNumbers } from './components/DrawnNumbers'
import { GameControls } from './components/GameControls'
import { ThemeToggle } from './components/ThemeToggle'

export interface BingoNumber {
  number: number
  letter: 'B' | 'I' | 'N' | 'G' | 'O'
  drawn: boolean
}

const generateBingoNumbers = (): BingoNumber[] => {
  const numbers: BingoNumber[] = []
  const letters: ('B' | 'I' | 'N' | 'G' | 'O')[] = ['B', 'I', 'N', 'G', 'O']
  
  letters.forEach((letter, index) => {
    const start = index * 15 + 1
    const end = start + 14
    
    for (let i = start; i <= end; i++) {
      numbers.push({
        number: i,
        letter,
        drawn: false
      })
    }
  })
  
  return numbers
}

const generateRandomCard = (): number[][] => {
  const card: number[][] = [[], [], [], [], []]
  const letters = ['B', 'I', 'N', 'G', 'O']
  
  letters.forEach((_, columnIndex) => {
    const start = columnIndex * 15 + 1
    const available = Array.from({ length: 15 }, (_, i) => start + i)
    
    // Shuffle and pick 5 numbers for each column
    for (let i = available.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[available[i], available[j]] = [available[j], available[i]]
    }
    
    card[columnIndex] = available.slice(0, 5)
  })
  
  return card
}

function App() {
  const [allNumbers, setAllNumbers] = useState<BingoNumber[]>(generateBingoNumbers())
  const [drawnNumbers, setDrawnNumbers] = useState<BingoNumber[]>([])
  const [currentNumber, setCurrentNumber] = useState<BingoNumber | null>(null)
  const [isGameActive, setIsGameActive] = useState(false)
  const [playerCard, setPlayerCard] = useState<number[][]>(generateRandomCard())
  const [markedNumbers, setMarkedNumbers] = useState<Set<number>>(new Set())

  const drawNumber = useCallback(() => {
    const remainingNumbers = allNumbers.filter(num => !num.drawn)
    
    if (remainingNumbers.length === 0) {
      setIsGameActive(false)
      return
    }
    
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length)
    const drawnNumber = remainingNumbers[randomIndex]
    
    setAllNumbers(prev => 
      prev.map(num => 
        num.number === drawnNumber.number && num.letter === drawnNumber.letter
          ? { ...num, drawn: true }
          : num
      )
    )
    
    setDrawnNumbers(prev => [...prev, drawnNumber])
    setCurrentNumber(drawnNumber)
  }, [allNumbers])

  const startNewGame = useCallback(() => {
    const newNumbers = generateBingoNumbers()
    setAllNumbers(newNumbers)
    setDrawnNumbers([])
    setCurrentNumber(null)
    setIsGameActive(true)
    setPlayerCard(generateRandomCard())
    setMarkedNumbers(new Set())
  }, [])

  const toggleGameState = useCallback(() => {
    if (!isGameActive && drawnNumbers.length === 0) {
      startNewGame()
    } else {
      setIsGameActive(!isGameActive)
    }
  }, [isGameActive, drawnNumbers.length, startNewGame])

  const markNumber = useCallback((number: number) => {
    setMarkedNumbers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(number)) {
        newSet.delete(number)
      } else {
        newSet.add(number)
      }
      return newSet
    })
  }, [])

  const checkBingo = useCallback(() => {
    // Create a set of drawn numbers for fast lookup
    const drawnNumbersSet = new Set(drawnNumbers.map(num => num.number))
    
    // Check rows
    for (let row = 0; row < 5; row++) {
      let rowComplete = true
      for (let col = 0; col < 5; col++) {
        if (row === 2 && col === 2) continue // Free space
        const number = playerCard[col][row]
        if (!markedNumbers.has(number) || !drawnNumbersSet.has(number)) {
          rowComplete = false
          break
        }
      }
      if (rowComplete) return true
    }

    // Check columns
    for (let col = 0; col < 5; col++) {
      let colComplete = true
      for (let row = 0; row < 5; row++) {
        if (row === 2 && col === 2) continue // Free space
        const number = playerCard[col][row]
        if (!markedNumbers.has(number) || !drawnNumbersSet.has(number)) {
          colComplete = false
          break
        }
      }
      if (colComplete) return true
    }

    // Check diagonals
    let diagonal1 = true
    let diagonal2 = true
    
    for (let i = 0; i < 5; i++) {
      if (i === 2) continue // Free space
      
      // Main diagonal (top-left to bottom-right)
      const number1 = playerCard[i][i]
      if (!markedNumbers.has(number1) || !drawnNumbersSet.has(number1)) {
        diagonal1 = false
      }
      
      // Anti-diagonal (top-right to bottom-left)
      const number2 = playerCard[i][4 - i]
      if (!markedNumbers.has(number2) || !drawnNumbersSet.has(number2)) {
        diagonal2 = false
      }
    }

    return diagonal1 || diagonal2
  }, [markedNumbers, playerCard, drawnNumbers])

  const hasBingo = checkBingo()

  useEffect(() => {
    if (hasBingo) {
      setIsGameActive(false)
    }
  }, [hasBingo])

  return (
    <div className="min-h-screen bg-theme-gradient transition-colors duration-300">      
      <div className="relative max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="text-center mb-8 relative">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <div className="inline-block p-6 bg-card backdrop-blur-sm rounded-2xl shadow-lg border border-border">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              🎯 Jogo de Bingo
            </h1>
            <p className="text-muted-foreground text-lg">
              Marque os números da sua cartela conforme são sorteados!
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cartela do Jogador */}
          <div className="lg:col-span-1">
            <BingoCard 
              card={playerCard}
              markedNumbers={markedNumbers}
              onMarkNumber={markNumber}
              hasBingo={hasBingo}
            />
          </div>

          {/* Área Principal do Jogo */}
          <div className="lg:col-span-2 space-y-6">
            {/* Controles do Jogo */}
            <GameControls 
              isGameActive={isGameActive}
              onToggleGame={toggleGameState}
              onDrawNumber={drawNumber}
              onNewGame={startNewGame}
              drawnCount={drawnNumbers.length}
              totalCount={75}
            />

            {/* Sorteador de Números */}
            <NumberDrawer 
              currentNumber={currentNumber}
              isGameActive={isGameActive}
            />

            {/* Números Sorteados */}
            <DrawnNumbers 
              drawnNumbers={drawnNumbers}
              allNumbers={allNumbers}
            />
          </div>
        </div>

        {hasBingo && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-card p-8 rounded-3xl text-center shadow-2xl border border-border max-w-md w-full transform animate-pulse">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                BINGO!
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Parabéns! Você completou sua cartela!
              </p>
              <Button onClick={startNewGame} size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105">
                🎯 Novo Jogo
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
