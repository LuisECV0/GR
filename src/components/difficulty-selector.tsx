"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface DifficultySelectorProps {
  gameId: string
  GameComponent: React.ComponentType<any>
  onBack: () => void
}

export default function DifficultySelector({ gameId, GameComponent }: DifficultySelectorProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const difficulties = [
    { id: "1-copa",
      name: "1 copa", 
      color: "from-green-400 to-emerald-600" 
    },
    {
      id: "3-copas",
      name: "3 copas",
      color: "from-yellow-400 to-orange-600",
    },
    {
      id: "5-copas",
      name: "5 copas",
      color: "from-red-500 to-rose-700",
    },
        {
      id: "hecho-polvo",
      name: "hecho polvo",
      color: "from-fuchsia-600 to-purple-800",
    },

  ]

  const handleBackFromGame = () => {
    setSelectedDifficulty(null)
  }

  if (selectedDifficulty) {
    return <GameComponent gameId={gameId} difficulty={selectedDifficulty} onBack={handleBackFromGame} />
  }

  return (
    <div className="max-w-2xl mx-auto">

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-3">Selecciona el nivel</h2>
        <p className="text-muted-foreground">Elige la categoría y juguemos</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {difficulties.map((difficulty, index) => (
          <motion.button
            key={difficulty.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDifficulty(difficulty.id)}
            className={`p-8 rounded-2xl bg-gradient-to-br ${difficulty.color} text-white font-bold text-xl shadow-lg hover:shadow-xl transition-all`}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 + 0.2 }}>
              {difficulty.name}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
