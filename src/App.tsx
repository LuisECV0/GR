"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GameMenu from "../src/components/game-menu"

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [showMenu, setShowMenu] = useState(false)

  const games = [
    { id: "verdad-reto", name: "Verdad o Reto", emoji: "🎯" },
    { id: "que-harias", name: "¿Qué pasaría si...?", emoji: "🤔" },
    { id: "prefieres", name: "Prefieres", emoji: "⚖️" },
  ]

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId)
    setTimeout(() => setShowMenu(true), 200)
  }

  const handleBack = () => {
    setShowMenu(false)
    setTimeout(() => setSelectedGame(null), 300)
  }

  if (selectedGame && showMenu) {
    return <GameMenu gameId={selectedGame} onBack={handleBack} />
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Party Hub
          </h1>
          <p className="text-muted-foreground text-lg">Diversión sin puntos, pura fiesta</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleGameSelect(game.id)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="text-5xl mb-4"
                >
                  {game.emoji}
                </motion.div>

                <h2 className="text-2xl font-bold text-primary mb-2 relative z-10">{game.name}</h2>
                <p className="text-sm text-muted-foreground relative z-10">Elige tu nivel y juega</p>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-20 blur-xl group-hover:blur-2xl transition-all duration-300" />
              </motion.div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-muted-foreground text-sm"
        >
          <p>Perfecto para fiestas, reuniones y eventos con amigos</p>
        </motion.div>
      </div>
    </div>
  )
}
